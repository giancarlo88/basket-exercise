import Basket from './index'
import catalog from './catalog.json'

describe('Basket', () => {
  describe('initializing', () => {
    it('should load a catalog', () => {
      const basket = new Basket(catalog)
      expect(basket.catalog).toEqual(catalog)
    })
  })

  describe('getBasket', () => {
    it('should show items currently in the basket', () => {
      const basketItems = [
        {
          productId: 'A',
          quantity: 2,
          totalPrice: 1798
        }
      ]

      const basket = new Basket(catalog)
      basket.items = basketItems
      expect(basket.getBasket()).toEqual(basketItems)
    })
  })

  describe('addItem', () => {
    describe('given a correct productId ', () => {
      it('should add an item', () => {
        const basket = new Basket(catalog)
        expect(basket.items).toEqual([])
        basket.addItem('B', 3)
        expect(basket.items).toEqual([
          {
            productId: 'B',
            quantity: 3,
            totalPrice: 4497
          }
        ])
      })

      it('should add quantity to an item to the basket', () => {
        const basket = new Basket(catalog)
        basket.items = [
          {
            productId: 'B',
            quantity: 1,
            totalPrice: 1499
          }
        ]
        basket.addItem('B', 2)
        expect(basket.items).toEqual([
          {
            productId: 'B',
            quantity: 3,
            totalPrice: 4497
          }
        ])
      })
    })
  })

  describe('deleteItem', () => {
    it('should remove an item', () => {
      const basket = new Basket(catalog)
      basket.items = [
        {
          productId: 'A',
          quantity: 1,
          totalPrice: 899
        },
        {
          productId: 'B',
          quantity: 1,
          totalPrice: 1499
        }
      ]
      basket.deleteItem('A')
      expect(basket.items).toEqual([
        {
          productId: 'B',
          quantity: 1,
          totalPrice: 1499
        }
      ])
    })
  })

  describe('getTotal', () => {
    it('should get the total basket cost', () => {
      const basket = new Basket(catalog)
      basket.items = [
        {
          productId: 'A',
          quantity: 1,
          totalPrice: 899
        },
        {
          productId: 'B',
          quantity: 1,
          totalPrice: 1499
        }
      ]
      expect(basket.getTotal()).toBe(2398)
    })
  })

  describe('changeQuantity', () => {
    it('should change the quantity of an item in the basket', () => {
      const basket = new Basket(catalog)
      basket.items = [
        {
          productId: 'A',
          quantity: 1,
          totalPrice: 899
        },
        {
          productId: 'B',
          quantity: 1,
          totalPrice: 1499
        }
      ]

      basket.changeQuantity('B', 3)
      expect(basket.items).toEqual([
        {
          productId: 'A',
          quantity: 1,
          totalPrice: 899
        },
        {
          productId: 'B',
          quantity: 3,
          totalPrice: 4497
        }
      ])
    })
  })
})
