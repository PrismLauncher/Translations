#!/usr/bin/env bash

set -e

ROOT="$(pwd)"

cd "$ROOT"

lupdate -locations absolute "src" "src_stable" -ts *.ts .template.ts
# Remove all locations for stable
sed -i "/<location filename=\"src_stable/d" *.ts .template.ts
