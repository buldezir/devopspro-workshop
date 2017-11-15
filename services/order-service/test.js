const cote = require('cote');

const client = new cote.Requester({name:'Order Requester', namespace: 'order'});

client.send({type: 'create', customer_id: 666}).then(function(data){
    client.send({type: 'add_product', order_id: data.id, product_id: 2364264}).then(console.log);

    client.send({type: 'list', customer_id: 666}).then(console.log);
}).catch(console.log);