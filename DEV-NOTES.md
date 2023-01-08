```ts
const hookFileContent = `#!/bin/env node\nimport('../../.git-hooks.js').then((hooks) => hooks[process.argv[1].split('/').pop()]);`;

const samples = fs.readdir('.git/hooks', (_,direntries) => direntries.filter(x=>x.indexOf('.sample') > -1).map(fileName => `.git/hooks/${fileName.slice(0,fileName.length-7)}`).map(hookName => fs.writeFileSync(`.git/hooks/${hookName}`,hookFileContent)));

const server = ['pre-receive','post-receive', 'update'];
const hooks = ['pre-auto-gc','post-merge','post-checkout', 'pre-push','pre-rebase','pre-commit','post-rewrite','applypatch-msg','post-applypatch','post-commit', 'prepare-commit-msg','commit-msg',...server];

samples.map(hookName => fs.writeFile(`.git/hooks/${hookName}`,hookFileContent));
```

```sh
node -e "fs.writeFile('.git/hooks/',`#!/bin/env node\nimport('../../.git-hooks.js').then((hooks) => hooks[process.argv[1].split('/').pop()]);`)";
//console.log(process.argv);
```


```ts
applypatch-msg.sample  fsmonitor-watchman.sample  post-update.sample     pre-commit.sample        pre-push.sample    pre-receive.sample         push-to-checkout.sample  update.sample
commit-msg.sample      post-receive               pre-applypatch.sample  pre-merge-commit.sample  pre-rebase.sample  prepare-commit-msg.sample
```
example.bin.js

```sh
#!/usr/bin/env -S node -e "import('./husky2.js')"
#!/usr/bin/env -S node -i
.load ./husky2.js
```