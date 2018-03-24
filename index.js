const Basket = require('./Basket')
const catalog = require('./catalog.json')

const basket = new Basket(catalog)

console.log('Here is an empty basket:\n', basket.getBasket()) // Should be an empty array

basket.addItem('B', 2)

console.log("\nI've added 2 of item B:\n", basket.getBasket()) // Should now have 2 of item B

basket.addItem('A', 3)

console.log("\nI've added 3 of item A:\n", basket.getBasket()) // Should now have 2 of item B and 3 of item A

console.log('\nMy total is now:', basket.getTotal()) // Should be 5695

basket.deleteItem('A')

console.log("\nI've deleted item A:\n", basket.getBasket())

console.log('\nMy total is now:', basket.getTotal()) // Should be 5695

basket.changeQuantity('B', 1)

console.log("\n I change my quantity of item B to 1:\n", basket.getBasket())

basket.addItem('B', 4)

console.log("\n I add more of B and they get merged together:\n", basket.getBasket())

console.log('\nMy total is now:', basket.getTotal()) // Should be 5695
