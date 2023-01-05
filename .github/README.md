# husky2

[![Open Collective](https://opencollective.com/husky/all/badge.svg?label=financial+contributors)](https://opencollective.com/husky) [![](https://img.shields.io/npm/dm/husky.svg?style=flat)](https://www.npmjs.org/package/husky) [![Node.js CI](https://github.com/typicode/husky/workflows/Node.js%20CI/badge.svg)](https://github.com/typicode/husky/actions)

> Modern native Git hooks made easy

Husky2 improves your commits and more 10x 🐶 _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_ _woof!_

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
git['commit'] = () => child_process.execSync('npm test');
```

Make a commit:
```sh
git commit -m "Keep calm and commit"
# `npm test` will run every time you commit
```

_For more use cases (project in sub-directory, custom directory, CI support, ...), see documentation._

## Documentation

https://typicode.github.io/husky

**Important** Upgrading from v4 to v7 requires migrating previous config, please see the docs.

## Articles

- [Why husky has dropped conventional JS config](https://blog.typicode.com/husky-git-hooks-javascript-config/)
- [Why husky doesn't autoinstall anymore](https://blog.typicode.com/husky-git-hooks-autoinstall/)

# Sponsors

## Companies

Does your company use husky? Ask your manager or marketing team if your company would be interested in supporting this project.

<a href="https://opencollective.com/husky/tiers/company/0/website"><img src="https://opencollective.com/husky/tiers/company/0/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/1/website"><img src="https://opencollective.com/husky/tiers/company/1/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/2/website"><img src="https://opencollective.com/husky/tiers/company/2/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/3/website"><img src="https://opencollective.com/husky/tiers/company/3/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/4/website"><img src="https://opencollective.com/husky/tiers/company/4/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/5/website"><img src="https://opencollective.com/husky/tiers/company/5/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/6/website"><img src="https://opencollective.com/husky/tiers/company/6/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/7/website"><img src="https://opencollective.com/husky/tiers/company/7/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/8/website"><img src="https://opencollective.com/husky/tiers/company/8/avatar.svg?avatarHeight=120"></a>
<a href="https://opencollective.com/husky/tiers/company/9/website"><img src="https://opencollective.com/husky/tiers/company/9/avatar.svg?avatarHeight=120"></a>

## Individuals

Find husky helpful? Become a backer and show your appreciation with a monthly donation on [Open Collective](https://opencollective.com/husky). You can also tip with a one-time donation.

<a href="https://opencollective.com/husky" target="_blank"><img src="https://opencollective.com/husky/tiers/individual.svg?avatarHeight=32"/></a>

GitHub sponsors can be viewed on my [profile](https://github.com/typicode). All past and current Open Collective sponsors can be viewed on [here](https://opencollective.com/husky).
