## codemod-meteor-absolute2relative

This repository contains a codemod script for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that helps transform meteor projects from absolute to relative imports (ES6).

### Setup & Run

1. `yarn global add jscodeshift` or `npm install -g jscodeshift`
1. `git clone https://github.com/kreftk/codemod-meteor-absolute2relative.git`
1. Run `yarn install` or `npm install`  in the codemod-meteor-absolute2relative directory
1. `jscodeshift -t ./transform.js <path-to-meteor-project>/app/imports/**/*.js`
   * `-t` - path to the transform file, see available scripts below;
   * `path` - files or directory to transform;
   * use the `-d` option for a dry-run and use `-p` to print the output for comparison;
   * use the `--extensions` option if your files have different extensions than `.js` (for example, `--extensions js,jsx`);
   * if you use flowtype, you might also need to use `--parser=flow`;
   * see all available [jscodeshift options](https://github.com/facebook/jscodeshift#usage-cli).