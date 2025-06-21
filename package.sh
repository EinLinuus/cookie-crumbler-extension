#!/bin/bash

echo "Preparing package for chrome webstore..."

name="extension.zip"

files=(
  "manifest.json"
  "content.js"
  "style.css"
  "icon-16.png"
  "icon-48.png"
  "icon-128.png"
)

if [[ -f "$name" ]]; then
	echo "$name already exists. Do you want to overwrite it? (Y/N)"
	read -r overwrite

	if [[ "$overwrite" != "Y" && "$overwrite" != "y" ]]; then
		echo "Package creation aborted."
		exit 0
	else
		rm -f "$name"
	fi
fi

echo "The following files will be included in the package:"

for file in "${files[@]}"; do
  if [[ -f "$file" ]]; then
	echo "- $file"
  else
	echo "Error: $file does not exist."
	exit 1
  fi
done

echo "Press Y to continue:"

read -r confirmation

if [[ "$confirmation" != "Y" && "$confirmation" != "y" ]]; then
  echo "Package creation aborted."
  exit 0
fi

echo "Creating package..."

zip -r "$name" "${files[@]}" > /dev/null

if [[ $? -eq 0 ]]; then
  echo "Package created successfully: extension.zip"
else
  echo "Error creating package."
  exit 1
fi

