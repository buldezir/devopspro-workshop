const cote = require('cote')

const database = [
                  {"id": "1", "name": "Apple", "price": "10"},
                  {"id": "2", "name": "Lemon", "price": "15"},
                  {"id": "3", "name": "Ogange", "price": "20"}
]

const res = new cote.Responder({name: 'Product API', namespace: 'product'})

res.on('*', msg => { msg.type && console.log(msg) })

res.on('list', async req => {
	return database
})

res.on('get', async req => {
	return database.find(item => item.id == req.id)
})
