# Prophecy Documentation

## Branches

The `main` branch is our documentation production branch. Add content to release branches (e.g. `release/3.4.4`) to add feature content to the relevant release. Release branches will be merged into `main` on the product release date.

## Docusaurus build

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Any change on the `main` branch is automatically deployed to the live documentation website. 

To manually deploy using SSH:

```
$ USE_SSH=true yarn deploy
```

To manually deploy otherwise:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Repository rules and checks

This repo is checked using `pre-commit` as part of any Pull Requests that are opened on it. To ensure that your changes comply with the rules and checks put in place, make sure you have run `pre-commit install` at least once after checking out this repo. Before you commit the hook will run some checks and prevent you from committing unless you fix the issues. Some checks may modify a file, simply re-stage it and try the commit again. If you want to run the checks manually simply run `pre-commit run -a` to run them on the entire repo.

The checks in place are:

1. JSON Formatting checks
2. Merge conflict checks
3. AWS Credential check
4. Detect Private Keys
5. EOF Fixer
6. No committing to Master/Main
7. Trailing whitespaces
8. Prettier formatting
9. Markdown Lint
10. Ensure documents are tagged, have a description and ID
11. Prevent commit message reuse
12. Word Veto

The last one is being used to set a standard for how things should be spelled, capitalized, etc. Spelling inside of `fenced code blocks` and URLs is exempted. Add a word veto to .pre-commit-config.yaml, push, and following commits will automatically adjust the veto'd words.

### Installing pre-commit

Run this command once:

```shell
$ pip install pre-commit && pre-commit install
```

### Troubleshooting Tips
1. Only run `yarn build` in /prophecy-docs rather than subdirectories. This avoids caching extra copies of the package management files.
2. If `yarn build` is slow, try `rm -rf .docusaurus/ node_modules`, then run `yarn` and then `yarn build` again.
3. If you want to check that redirects are working without relying on `yarn build`, run `yarn global add serve` then `serve`. This brings up the files on localhost:3000 in an approximation of the live site. 
