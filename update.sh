#!/bin/bash

set -e
shopt -s globstar

ROOT="$(pwd)"
SRC=${ROOT}/src

LCONVERT_BIN=${LCONVERT_BIN:-lconvert}
LRELEASE_BIN=${LRELEASE_BIN:-lrelease}
LUPDATE_BIN=${LUPDATE_BIN:-lupdate}

###############################################################################

readarray -d '' SOURCE_FILES < <(find "$SRC" -regex '.*\.\(h\|cpp\|ui\)' -type f -print0)

update_file() {
    po_file="$1"  # language.po
    ts_file="$1.ts"  # language.po.ts

    echo "Updating $po_file..."

    # Convert .po to .ts
    $LCONVERT_BIN -locations relative "$po_file" -o "$ts_file"

    # Update .ts
    $LUPDATE_BIN "${SOURCE_FILES[@]}" -ts "$ts_file"

    # Convert .ts to .po
    $LCONVERT_BIN -locations relative "$ts_file" -o "$po_file"

    rm -f "$ts_file"
}

cd "$ROOT"

for f in *.po; do
    update_file "$f"
done

update_file template.pot

