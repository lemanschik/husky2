/**
 * The Successor of husky but useable with any ecmascript engine that supports fs.writeFileSync and process.argv process.env
 **/
// Build script node husky2
// node -e "generateImportUrl()" -r ./husky2.js // => 'node -e "import('data:text/javascript,....')"'
const generateImportUrl = () => `node -e "import('data:text/javascript,${encodeURIComponent(fs.readFileSync(process.argv[1]).split('// v',3)[2] )}')"`;

// v0.0.1-pre.1
const hookFileContent = `#!/bin/env node\nglobalThis.git = { eventName: process.argv[1].split('/').pop(), params: process.argv.slice(2) }\nimport('../../.git-hooks.js').then(()=>git[git.eventName](git.params));`;

const writeExampleConfig = () => fs.writeFileSync(`${process.env.PWD}/.git-hooks.js`, `// .git/hooks/update .git/hooks/pre-push
git = { update(params) {}, ['pre-push'](params) {} };`)

const installHook = (hookName) => {fs.writeFileSync(`${process.env.PWD}/.git/hooks/${hookName}`,hookFileContent,{ mode: 0o755 });console.log('installed: ', hookName);};
const samples = ['applypatch-msg','commit-msg','fsmonitor-watchman','post-update','pre-applypatch','pre-commit','pre-merge-commit','pre-push','pre-rebase','pre-receive','prepare-commit-msg','push-to-checkout','update'].map(installHook);
