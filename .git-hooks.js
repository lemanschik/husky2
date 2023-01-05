// Trying to write a auto wrapper
fs.readdirSync('.husky').map(eventName => git[eventName] = childProcess.execSync(`.husky/${eventName} ${git.params.join(' ')}`) );
