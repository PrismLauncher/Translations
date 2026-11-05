{
  runCommand,
  qt6,
  gettext,
  gawk,
  jq,

  language,
  file,
}:
runCommand "PrismLauncher-translation-${language}"
  {
    nativeBuildInputs = [
      qt6.qttools
      gettext
      gawk
      jq
    ];
    env = {
      inherit language;
      inherit file;
      LANG = "C.UTF-8";
    };
  }
  ''
    grep_count()
    {
        local PIECE=`echo "$1" | grep -o "$2"`
        if [ -n "$PIECE" ]; then
            RETVAL=`echo $PIECE | sed 's/[a-z ]//g'`
            echo $RETVAL
            return
        fi
        echo 0
    }

    lconvert -locations absolute "$file" -o "$language.po"

    if cat "$language.po" | grep '"X-Qt-Contexts: true\\n"' > /dev/null ; then
        echo "Translation $language.po is OK"
    else
        echo "Translation $language.po is bad (missing X-Qt-Contexts)"
        exit 1
    fi

    lrelease "$file" -qm "$language.qm"

    sha1=$(sha1sum "$language.qm" | awk '{ print $1 }')
    fileSize=$(stat -c%s "$language.qm")

    poStats=$(msgfmt --statistics --output=/dev/null "$language.po" 2>&1)
    untranslated=$(grep_count "$poStats" '[0-9]\+ untranslated messages\?')
    fuzzy=$(grep_count "$poStats" '[0-9]\+ fuzzy translations\?')
    translated=$(grep_count "$poStats" '[0-9]\+ translated messages\?')

    fileName=$sha1.class

    mv "$language.qm" "$fileName"

    jq --null-input --raw-output \
      --arg language "$language" \
      --arg file "$fileName" \
      --arg sha1 "$sha1" \
      --argjson fileSize "$fileSize" \
      --argjson translated "$translated" \
      --argjson fuzzy "$fuzzy" \
      --argjson untranslated "$untranslated" \
      '.[$language] = {file: $file, sha1: $sha1, size: $fileSize, translated: $translated, fuzzy: $fuzzy, untranslated: $untranslated}' > metadata.json

    install -t "$out" -Dm644 "$fileName" "metadata.json"
  ''
