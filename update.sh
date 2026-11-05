#!/usr/bin/env bash

set -e

ROOT="$(pwd)"

cd "$ROOT"

# Temporarily allow funny English variants to be updated.
# TODO: Remove this in https://github.com/PrismLauncher/Translations/pull/45
sed -i "3s/en@uwu/en_US@uwu/" en@uwu.ts
sed -i "3s/en@pirate/en_US@pirate/" en@pirate.ts

lupdate -locations absolute "src" "src_stable" -ts *.ts .template.ts
# Remove all locations for stable
sed -i "/<location filename=\"src_stable/d" *.ts .template.ts

# Temporarily allow funny English variants to be updated.
# TODO: Remove this in https://github.com/PrismLauncher/Translations/pull/45
sed -i "3s/en_US@uwu/en@uwu/" en@uwu.ts
sed -i "3s/en_US@pirate/en@pirate/" en@pirate.ts
