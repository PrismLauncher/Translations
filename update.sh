#!/bin/sh

set -e

ROOT=`pwd`
SRC=${ROOT}/src
TEMPLATE_PO="$ROOT/template.pot"
TEMPLATE_TS="$ROOT/template.ts"

LCONVERT_BIN=${LCONVERT_BIN:-lconvert}
LRELEASE_BIN=${LRELEASE_BIN:-lrelease}
LUPDATE_BIN=${LUPDATE_BIN:-lupdate}

###############################################################################

echo "Generating new template..."

if [ -f $TEMPLATE_PO ]
then
    echo "    Converting .pot to .ts"
    $LCONVERT_BIN -locations relative $TEMPLATE_PO -o $TEMPLATE_TS
fi

echo "    Generating .ts"
cd $SRC
find "$SRC" -regex '.*\.\(h\|cpp\|ui\)' -type f -print0 | xargs -0 sh -c "$LUPDATE_BIN"' $@ -ts '"$TEMPLATE_TS"
cd $ROOT

echo "    Converting .ts to .pot"
$LCONVERT_BIN -locations relative $TEMPLATE_TS -o $TEMPLATE_PO
rm -f "$TEMPLATE_TS"
