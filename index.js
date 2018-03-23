export default class Basket {
  constructor(catalog) {
    this.catalog = catalog
    this.items = []
  }

  getBasket() {
    return this.items
  }

  addItem(productId, quantity) {
    const price = this.catalog.find((item) => item.productId === productId).price
    const existingIndex = this.items.findIndex((item) => item.productId === productId)
    if (existingIndex >= 0) {
      this.items[existingIndex] = {
        quantity: this.items[existingIndex].quantity + quantity,
        totalPrice: (this.items[existingIndex].quantity + quantity) * price,
        productId: this.items[existingIndex].productId
      }
    } else {
      this.items.push({
        quantity,
        productId,
        totalPrice: price * quantity
      })
    }
  }

  deleteItem(productId) {
    const existingIndex = this.items.findIndex((item) => item.productId === productId)
    this.items = [...this.items.slice(0, existingIndex), ...this.items.slice(existingIndex + 1, this.items.length)]
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.totalPrice, 0)
  }

  changeQuantity(productId, newQuantity) {
    const price = this.catalog.find((item) => item.productId === productId).price
    const existingIndex = this.items.findIndex((item) => item.productId === productId)
    this.items[existingIndex] = {
      productId,
      quantity: newQuantity,
      totalPrice: price * newQuantity
    }
  }


}
