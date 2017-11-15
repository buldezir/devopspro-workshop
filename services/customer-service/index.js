/**
customer {
id
login
pass }
*/

const cote = require('cote')

const database = []

const res = new cote.Responder({name: 'Customer API'})

res.on('*', msg => {msg.type && console.log(msg)})

res.on('reg', req => {database.push(req.customer)})

res.on('login', async req => {return database.find(item => item.login == req.login && ite.pass == req.pass)})