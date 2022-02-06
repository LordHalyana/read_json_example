
const data = require('./popo.json');

console.log(data)

let user = data.user
let password = data.password
let apikey1 = data.apikey
let apikey2 = data.apikey2

let message = `user: ${user} password: ${password} apikey1: ${apikey1} apikey2: ${apikey2}`

console.log(message)
