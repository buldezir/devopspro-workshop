const cote = require('cote');

const database = [];

const payment_client = new cote.Requester({name:'Payment Requester', namespace: 'payment'});
const res = new cote.Responder({name:'Order Responder', namespace: 'order'});

res.on('*', msg => { msg.type && console.log(msg) } );

res.on('create', async (req) => { 
    var item = {
        id: Math.random(10, 99999),
        products: [],
        status: 1,
        customer_id: req.customer_id
    };
    database.push(item);
    return item; 
});

res.on('add_product', async (req) => { 
    var item = database.find(item => item.id == req.order_id);
    item.products.push(req.product_id);
    return item; 
});

res.on('list', async (req) => { return database.find(item => item.customer_id == req.customer_id); });

res.on('get', async (req) => {
    const payment_info = await payment_client.send({type: 'check_payment', order_id: req.id});
    const item = database.find(item => item.id == req.id);
    item.status = payment_info.status;
    return item;
});