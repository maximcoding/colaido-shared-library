#!/bin/bash

# Check if necessary commands are available
for cmd in jq tsc npm git gh; do
    if ! command -v $cmd &> /dev/null; then
        echo "$cmd could not be found, please install it to continue."
        exit 1
    fi
done

# Build the project
echo "Building the project..."
tsc
if [ $? -ne 0 ]; then
    echo "TypeScript build failed."
    exit 1
fi

# Read the current version from package.json
current_version=$(jq -r '.version' package.json)

# Split the version into an array
IFS='.' read -r -a version_parts <<< "$current_version"

# Increment the patch version
version_parts[2]=$((version_parts[2] + 1))

# Construct the new version string
new_version="${version_parts[0]}.${version_parts[1]}.${version_parts[2]}"

# Update the package.json with the new version
jq --arg new_version "$new_version" '.version = $new_version' package.json > package.tmp.json && mv package.tmp.json package.json

# Install npm dependencies
echo "Installing npm dependencies..."
npm install

# Commit changes
echo "Committing changes..."
git add package.json package-lock.json
git commit -m "Bump version to $new_version"

# Push the commit to the remote repository
echo "Pushing commit to remote repository..."
git push origin main

# Create a new tag
echo "Creating a new tag..."
git tag -a "v$new_version" -m "Release version $new_version"
git push origin "v$new_version"

# Create a GitHub release
echo "Creating a GitHub release..."
gh release create "v$new_version" --title "Version $new_version" --notes "Release notes for version $new_version"

echo "Release process completed successfully."


# The script does the following:
 #1. **Check for necessary commands**: The script checks if jq, tsc, npm, git, and gh are installed.
 #2. **Build the project**: The script runs tsc to compile the TypeScript project.
 #3. **Read the current version**: The script reads the current version from package.json.
 #4. **Increment the patch version**: The script increments the patch version by 1.
 #5. **Update package.json**: The script updates package.json with the new version.
 #6. **Install npm dependencies**: The script runs npm install & generates a new **package-lock.json**.
 #7. **Commit changes**: The script stages and commits the changes to Git.
 #8. **Push the commit**: The script pushes the commit to the remote repository.
 #9. **Create a new tag**: The script creates a new Git tag with the new version.
 #10. **Push the tag**: The script pushes the tag to the remote repository.
 #11. **Create a GitHub release**: The script uses the GitHub CLI to create a release with the new tag, title, and notes
 #12. **Github Action run (.github/workflows/publish.yml) - which does publish the release to npm registry ()
