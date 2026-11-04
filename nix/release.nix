{
  jq,
  stdenv,

  translations,
}:
stdenv.mkDerivation {
  pname = "PrismLauncher-translations";
  version = "0.0.0";

  src = translations;

  nativeBuildInputs = [
    jq
  ];

  unpackCmd = "cp -r $src source";

  dontWrapQtApps = true;
  dontConfigure = true;

  buildPhase = ''
    runHook preBuild

    jq --slurp --raw-output \
      '{ file_type: "MMC_TRANSLATION_INDEX", version: 2, languages: . | add }' \
      $(find -L -name metadata.json) > ../index_v2.json

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    install -t "$out" -Dm644 "../index_v2.json"
    install -t "$out" -Dm644 $(find -L -name '*.class')

    runHook postInstall
  '';
}
