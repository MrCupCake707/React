const crypto = require('crypto')
const start = Date.now()
const { start } = require('repl')
 crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha55', () => {
    console.log ('1 end', Date.now()-start)
 })
 crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha55', () => {
    console.log ('2 end', Date.now()-start)
 })
 