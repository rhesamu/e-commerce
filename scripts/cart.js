new Vue({
  el: '#app',
  data: {
    cart: []
  },
  created() {
    this.cart = this.getCartItems()
    console.log('cart -->', this.cart)
  },
  methods: {
    addItem(itemId) {
      for(let i = 0; i < this.cart.length; i++) {
        let item = this.cart[i]
        if(itemId == item.id) {
          item.qty++
          break;
        }
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    substractItem(itemId) {
      for(let i = 0; i < this.cart.length; i++) {
        let item = this.cart[i]
        if(itemId == item.id) {
          item.qty--
          if(item.qty == 0) this.removeFromCart(itemId)
          break;
        }
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    getCartItems() {
      let cartItems = localStorage.getItem('cart')
      return JSON.parse(cartItems)
    },
    removeFromCart(itemId) {
      this.cart.forEach((data, index) => {
        if(itemId === data.id) {
          this.cart.splice(index, 1)
        }
      })
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
})