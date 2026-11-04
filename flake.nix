{
  inputs.nixpkgs.url = "https://channels.nixos.org/nixos-unstable/nixexprs.tar.zst";

  outputs =
    {
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

      formatter = forAllSystems (system: nixpkgsFor.${system}.nixfmt-rfc-style);
    };
}
