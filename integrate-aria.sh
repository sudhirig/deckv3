#!/bin/bash

# Script to integrate your ARIA avatar image
echo "🎯 ARIA Avatar Integration Script"
echo "================================="

# Check if image exists in common locations
POSSIBLE_PATHS=(
    "$HOME/Downloads/aria*.png"
    "$HOME/Downloads/aria*.jpg"
    "$HOME/Desktop/aria*.png"
    "$HOME/Desktop/aria*.jpg"
    "./aria*.png"
    "./aria*.jpg"
)

IMAGE_FOUND=""
for path in "${POSSIBLE_PATHS[@]}"; do
    for file in $path; do
        if [ -f "$file" ]; then
            IMAGE_FOUND="$file"
            echo "✅ Found image: $file"
            break 2
        fi
    done
done

if [ -z "$IMAGE_FOUND" ]; then
    echo "❌ No ARIA image found in common locations"
    echo ""
    echo "Please save your ARIA image with a name starting with 'aria' in:"
    echo "  - Downloads folder"
    echo "  - Desktop folder"
    echo "  - Current directory"
    exit 1
fi

# Copy to assets directory
echo "📋 Copying to assets directory..."
cp "$IMAGE_FOUND" "./src/assets/aria-avatar.png"

if [ $? -eq 0 ]; then
    echo "✅ Image copied successfully!"
    
    # Update the component file
    echo "📝 Updating ARIAAvatar.jsx..."
    
    # Create a backup
    cp ./src/components/ARIAAvatar.jsx ./src/components/ARIAAvatar.jsx.backup
    
    # Update the import in the file
    sed -i '' '11,15d' ./src/components/ARIAAvatar.jsx
    sed -i '' '10a\
import ariaAvatarImage from '"'"'../assets/aria-avatar.png'"'"'\
const ariaAvatarUrl = ariaAvatarImage\
' ./src/components/ARIAAvatar.jsx
    
    echo "✅ Component updated!"
    echo ""
    echo "🎉 SUCCESS! Your ARIA avatar is now integrated!"
    echo "The development server should auto-reload with your image."
else
    echo "❌ Failed to copy image"
    exit 1
fi
