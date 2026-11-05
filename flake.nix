{
  inputs.nixpkgs.url = "https://channels.nixos.org/nixos-unstable/nixexprs.tar.zst";

  outputs =
    {
      self,
      nixpkgs,
      ...
    }:
    let
      inherit (nixpkgs) lib;
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      forAllSystems = lib.genAttrs systems;
      nixpkgsFor = nixpkgs.legacyPackages;
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgsFor.${system};
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              qt6.qttools
              gettext
            ];
          };
        }
      );

      packages = forAllSystems (
        system:
        let
          pkgs = nixpkgsFor.${system};

          tsFiles = lib.filterAttrs (name: _: (lib.hasSuffix ".ts" name) && (name != ".template.ts")) (
            builtins.readDir self
          );

          translations = lib.genAttrs' (builtins.attrNames tsFiles) (
            v:
            let
              language = lib.removeSuffix ".ts" (builtins.unsafeDiscardStringContext v);
              friendlyName = lib.replaceStrings ["@"] ["_"] language;
            in
            lib.nameValuePair "translation-${language}" (
              pkgs.callPackage "${self}/nix/translation.nix" {
                file = builtins.path {
                  name = "${friendlyName}.ts";
                  path = "${./.}/${v}";
                };
                inherit language;
              }
            )
          );
        in
        rec {
          combined-translations = pkgs.linkFarm "PrismLauncher-translations-combined" translations;
          release = pkgs.callPackage "${self}/nix/release.nix" {
            translations = combined-translations;
          };
        }
        // translations
      );

      formatter = forAllSystems (system: nixpkgsFor.${system}.nixfmt-tree);
    };
}
