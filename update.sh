#!/bin/bash

set -e

ROOT="$(pwd)"
SRC=${ROOT}/src
SRC_STABLE=${ROOT}/src_stable

LUPDATE_BIN=${LUPDATE_BIN:-lupdate}

###############################################################################

readarray -d '' SOURCE_FILES < <(find "$SRC" "$SRC_STABLE" -regex '.*\.\(h\|cpp\|ui\)' -type f -print0)

update_file() {
    ts_file="$1"

    echo "Updating $ts_file..."

    # Update .ts
    $LUPDATE_BIN "${SOURCE_FILES[@]}" -locations "absolute" -ts "$ts_file"

    # Remove all locations for stable
    sed -i "/<location filename=\"src_stable/d" "$ts_file"
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
