
# Colaido Shared Library


A shared library of TypeScript interfaces, enums, and types.

## Guide to upgrade the library automatically
Skip the guide if you are doing manually upgrade.

### First: make your development changes: 
1. See [Development](#development) guide .

### Second: Install jq + tsc globally to your environment:
2. Mac ```brew install jq``` or Ubuntu/Debian ```sudo apt-get install jq```

### Third: run the magic script
3.```./release.sh```

### Latest: check and validate 
1. **The script successfully did the job** ? [Validate npm registry](https://www.npmjs.com/package/@colaido/shared-library)
2. **The script Failed** ? [Github Action failures for details](https://github.com/maximcoding/colaido-shared-library/actions)

##### The script does the following:
1. **Check for necessary commands**: The script checks if jq, tsc, npm, git, and gh are installed.
2. **Build the project**: The script runs tsc to compile the TypeScript project.
3. **Read the current version**: The script reads the current version from package.json.
4. **Increment the patch version**: The script increments the patch version by 1.
5. **Update package.json**: The script updates package.json with the new version.
6. **Install npm dependencies**: The script runs npm install & generates a new **package-lock.json**.
7. **Commit changes**: The script stages and commits the changes to Git.
8. **Push the commit**: The script pushes the commit to the remote repository.
9. **Create a new tag**: The script creates a new Git tag with the new version.
10. **Push the tag**: The script pushes the tag to the remote repository.
11. **Create a GitHub release**: The script uses the GitHub CLI to create a release with the new tag, title, and notes
12. **Github Action run (.github/workflows/publish.yml) - which does publish the release to npm registry ()








## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
    - [Pulling Latest Changes](#pulling-latest-changes)
    - [Making Changes](#making-changes)
    - [Committing and Pushing Changes](#committing-and-pushing-changes)
    - [Releasing a New Tag](#releasing-a-new-tag)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Setting Up GitHub Secrets](#setting-up-github-secrets)
- [Contributing](#contributing)
- [License](#license)

## Overview

This library provides shared TypeScript interfaces, enums, and types for use across multiple projects.

## Installation

Install the package via npm:

```bash
npm install @colaido/shared-library
```

## Usage

Import and use the types in your project:

```typescript
import { User, UserRole, UserID } from '@colaido/shared-library';

const user: User = {
   id: "123",
   name: "John Doe",
   email: "john.doe@example.com"
};

const role: UserRole = UserRole.Admin;
const userId: UserID = "123";
```

## Development

### Pulling Latest Changes

Before making new changes, ensure you have the latest code from the repository:

1. **Pull the latest changes**:

   ```bash
   git pull origin main
   ```

### Making Changes

1. **Clone the repository** if you haven't already:

   ```bash
   git clone https://github.com/maximcoding/colaido-shared-library.git
   cd colaido-shared-library
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Make your changes** in the `src` directory. For example, you can add or update interfaces, enums, or types.

4. ** ⚠️ ⚠️ ⚠️ Should export your interface ⚠️ ⚠️ ⚠️ inside the `src/index.ts` for example:

   ```typescript
   export * from './interfaces/user-profile.interface';
   ```

5. **Build the project** to ensure there are no errors:

   ```bash
   npm run build
   ```

### Committing and Pushing Changes

1. **Stage your changes**:

   ```bash
   git add .
   ```

2. **Commit your changes**:

   ```bash
   git commit -m "Describe your changes"
   ```

3. **Push your changes**:

   ```bash
   git push origin main
   ```

### Releasing a New Tag

Publishing to the npm registry is handled automatically by GitHub Actions when you push a new tag to the repository. Follow these steps to create and push a new version:

1. **Update the version number** in `package.json` according to [semantic versioning](https://semver.org/). ️

2. **Generate new package-lock.json**  and validate package-lock.json had been updated ⚠️ ⚠️ ⚠️
  ```bash
   npm install
   ```
   
4. **Commit the version bump**:

   ```bash
   git add .
   git commit -m "Bump version to x.x.x"
   git push origin main
   ```

3. **Create a new git tag**:

   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"  # Replace with the new version
   ```
4. **Push the tag to GitHub**:

   ```bash
   git push origin v1.0.1
   ```

5. **Push the tag to GitHub**:

   ```bash
   gh release create v1.0.0 --title "Version 1.0.0" --notes "This release includes the following changes..."
   ```

## GitHub Actions Workflow

The GitHub Actions workflow is defined in `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
   push:
      tags:
         - 'v*.*.*' # Matches tag names like v1.0.0, v2.1.3, etc.

jobs:
   publish:
      runs-on: ubuntu-latest

      steps:
         - name: Checkout repository
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
              node-version: '14'

         - name: Install dependencies
           run: npm install

         - name: Build the project
           run: npm run build

         - name: Publish to npm
           env:
              NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
           run: npm publish --access public

         - name: Push tags back to repository
           run: |
              git config --global user.email "your-email@example.com"
              git config --global user.name "Your Name"
              git tag v$(node -p -e "require('./package.json').version")
              git push origin --tags
```

## Setting Up GitHub Secrets

To securely manage your npm token, you need to add it to your GitHub repository's secrets:

1. **Generate an npm Token**:
    - Go to your npm account settings at [npmjs.com](https://www.npmjs.com/settings).
    - Generate a new token with `Publish` permissions.

2. **Add npm Token to GitHub Secrets**:
    - Go to your GitHub repository.
    - Navigate to `Settings` > `Secrets and variables` > `Actions` > `New repository secret`.
    - Add a new secret with the name `NPM_TOKEN` and paste the npm token as the value.

## Contributing

Feel free to open issues or submit pull requests for any changes or improvements. When contributing, please follow the existing code style and ensure that your changes don't break the build.

## License

This project is licensed under the ISC License.
