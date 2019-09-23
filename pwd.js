function pwdFunc (cmd) {
if (cmd == 'pwd'){
  const process = require ('process')
  process.stdout.write(process.cwd())
}
}
module.exports = pwdFunc
