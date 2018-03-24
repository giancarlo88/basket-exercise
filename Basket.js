class Basket {
  constructor(catalog) {
    this.catalog = catalog
    this.items = []
  }

  getBasket() {
    return this.items
  }

  getProductPrice(productId) {
    const item = this.catalog.find((item) => item.productId === productId)
    if (!item) {
      throw new Error('Item not in catalog')
    }
    return item.price
  }

  addItem(productId, quantity) {
    const price = this.getProductPrice(productId)
    const existingIndex = this.items.findIndex((item) => item.productId === productId)
    if (existingIndex >= 0) {
      const newQuantity =  this.items[existingIndex].quantity + quantity
      return this.changeQuantity(productId, newQuantity)
    }
    return this.items.push({
      quantity,
      productId,
      totalPrice: price * quantity
    })
  }

  deleteItem(productId) {
    const existingIndex = this.items.findIndex((item) => item.productId === productId)
    if (existingIndex >= 0) {
      this.items = [
        ...this.items.slice(0, existingIndex),
        ...this.items.slice(existingIndex + 1, this.items.length)
      ]
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.totalPrice, 0)
  }

  changeQuantity(productId, newQuantity, index) {
    const price = this.catalog.find((item) => item.productId === productId).price
    const existingIndex = index || this.items.findIndex((item) => item.productId === productId)
    this.items[existingIndex] = {
      productId,
      quantity: newQuantity,
      totalPrice: price * newQuantity
    }
  }
}

module.exports = Basket
