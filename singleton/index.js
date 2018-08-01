var logger = require('./Logger');
var Shopper = require('./Shopper');
var Store = require('./Store');

logger.log('starting app...');

var jhon = new Shopper('Jhon', 500);
var shi_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Slis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(` ${log.message}`));