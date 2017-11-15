const cote = require('cote')

const req = new cote.Requester({name: 'Product req', namespace: 'product'})

//req.on('*', msg => { msg.type && console.log(msg) })

req
  .send({type: 'list'})
  .then(console.log)
  .catch(console.log)

