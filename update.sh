#!/bin/bash

set -e

ROOT="$(pwd)"
SRC=${ROOT}/src

LUPDATE_BIN=${LUPDATE_BIN:-lupdate}

###############################################################################

readarray -d '' SOURCE_FILES < <(find "$SRC" -regex '.*\.\(h\|cpp\|ui\)' -type f -print0)

update_file() {
    ts_file="$1"

    echo "Updating $ts_file..."

    # Update .ts
    $LUPDATE_BIN "${SOURCE_FILES[@]}" -locations "absolute" -ts "$ts_file"
}

cd "$ROOT"

if [ -n "$1" ]; then
    update_file "$1"
else
    for f in *.ts; do
        update_file "$f"
    done

    update_file .template.ts
fi
