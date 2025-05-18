#!/bin/bash

script_dir="$(dirname "$(realpath "$0")")"

# Loop through all JPG files in the input directory
for img in "$script_dir"/*.JPG; do
echo $img
  # Check if the file exists
  if [ -e "$img" ]; then
    # Get the base name of the file (without extension)
    base_name=$(basename "$img" .JPG)
    
    # Convert JPG to WebP
    cwebp "$img" -o "$base_name.webp"
    
    echo "Converted: $img to $output_dir/$base_name.webp"
  else
    echo "No JPG files found in the directory."
  fi
done

echo "Conversion complete."
