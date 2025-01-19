#!/bin/bash

# Set the file size threshold (10 MB in bytes)
SIZE_THRESHOLD=10485760

# Find files larger than 10 MB and track them with Git LFS
find . -type f -size +"$((SIZE_THRESHOLD))"c | while read -r file; do
    git lfs track "$file"
    echo "Tracking $file with Git LFS"
done

# Add .gitattributes after tracking files
git add .gitattributes
echo "Updated .gitattributes with large file tracking."
