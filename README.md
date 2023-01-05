# part of [@direktspeed/quaternion](https://github.com/direktspeed/quaternion)
[@direktspeed/quaternion](https://github.com/direktspeed/quaternion) is the next Level Component Architecture for the web and this project aligns the husky ecosystem with the Web Ecosystem this is rewritten using Stealify Lang bestpratices. 

# husky2 

> Modern native Git hooks made easy

Husky2 improves your commits and more 10x 🐶 _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_

# Improvements over husky
- more simple architecture via .git-hooks.js file that sets the hooks and has all nativeBuildIn Modules already Loaded.
- much less code and documentation needed it is raw git hooks but translated to nodejs or any other compatible environment.
- faster install 

# Install

Install with npm for NodeJS Packages:
Edit `package.json > prepare` script and run it once:

```sh
# Installs v0.0.0-pre.0
npm pkg set scripts.prepare="node -e \"import('data:text/javascript,%2F%2F%20v0.0.0-pre.0%0Aconst%20hookFileContent%20%3D%20%60%23%21%2Fbin%2Fenv%20node%5CnglobalThis.git%20%3D%20%7B%20eventName%3A%20process.argv%5B1%5D.split%28%27%2F%27%29.pop%28%29%2C%20params%3A%20process.argv.slice%282%29%20%7D%5Cnimport%28%27..%2F..%2F.git-hooks.js%27%29.then%28%28%29%3D%3Egit%5Bgit.eventName%5D%28git.params%29%29%3B%60%3B%0A%0Aconst%20installHook%20%3D%20%28hookName%29%20%3D%3E%20%7Bfs.writeFileSync%28%60%24%7Bprocess.env.PWD%7D%2F.git%2Fhooks%2F%24%7BhookName%7D%60%2ChookFileContent%2C%7B%20mode%3A%200o755%20%7D%29%3Bconsole.log%28%27installed%3A%20%27%2C%20hookName%29%3B%7D%3B%0A%0Aconst%20samples%20%3D%20%5B%27applypatch-msg%27%2C%27commit-msg%27%2C%27fsmonitor-watchman%27%2C%27post-update%27%2C%27pre-applypatch%27%2C%27pre-commit%27%2C%27pre-merge-commit%27%2C%27pre-push%27%2C%27pre-rebase%27%2C%27pre-receive%27%2C%27prepare-commit-msg%27%2C%27push-to-checkout%27%2C%27update%27%5D.map%28installHook%29%3B')\""
npm run prepare
```

Install wihtout npm:

Update Copy paste the following into your console / Terminal when your inside your git clone target
```ts
node -e "import('data:text/javascript,%2F%2F%20v0.0.0-pre.0%0Aconst%20hookFileContent%20%3D%20%60%23%21%2Fbin%2Fenv%20node%5CnglobalThis.git%20%3D%20%7B%20eventName%3A%20process.argv%5B1%5D.split%28%27%2F%27%29.pop%28%29%2C%20params%3A%20process.argv.slice%282%29%20%7D%5Cnimport%28%27..%2F..%2F.git-hooks.js%27%29.then%28%28%29%3D%3Egit%5Bgit.eventName%5D%28git.params%29%29%3B%60%3B%0A%0Aconst%20installHook%20%3D%20%28hookName%29%20%3D%3E%20%7Bfs.writeFileSync%28%60%24%7Bprocess.env.PWD%7D%2F.git%2Fhooks%2F%24%7BhookName%7D%60%2ChookFileContent%2C%7B%20mode%3A%200o755%20%7D%29%3Bconsole.log%28%27installed%3A%20%27%2C%20hookName%29%3B%7D%3B%0A%0Aconst%20samples%20%3D%20%5B%27applypatch-msg%27%2C%27commit-msg%27%2C%27fsmonitor-watchman%27%2C%27post-update%27%2C%27pre-applypatch%27%2C%27pre-commit%27%2C%27pre-merge-commit%27%2C%27pre-push%27%2C%27pre-rebase%27%2C%27pre-receive%27%2C%27prepare-commit-msg%27%2C%27push-to-checkout%27%2C%27update%27%5D.map%28installHook%29%3B')"
```

# Usage 

Add a hook:

edit ./.git-hooks.js adjust it to your needs 
```ts
// .git/hooks/update .git/hooks/pre-push
git = { update(params) {}, ['pre-push'](params) {} };
// Add a commit hook to the above existing example.
git['pre-commit'] = () => child_process.execSync('npm test');
```

Make a commit:
```sh
git commit -m "Keep calm and commit"
# `npm test` will run every time you commit
```

## Usage on the web?
import the .git-hooks.js and call it a day.


## Internals
It creates .git/hooks files with the same content that simply imports the .git-hooks.js file and then calls the handler with the same eventName if any got set 

## TODO:
Simply add all possible events and call it a day.
