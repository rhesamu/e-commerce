let BASE_URL = `http://localhost:3000`

new Vue({
  el: '#app',
  computed: {
    convertPrice() {
      return function(price) {
        return `Rp. ${this.priceHelper(price)}`
      }
    }
  },
  watch: {
    cart() {
      console.log('cart state changed')
      console.log('cart-->',this.cart)
    }
  },
  methods: {
    priceHelper(price) {
      let str = price.toString().split('').reverse()
      let count = 1
      let output = []
      for (let i = 0; i < str.length; i++) {
        if (count % 4 !== 0) {
          output.push(str[i])
          count++
        } else {
          output.push('.')
          output.push(str[i])
          count = 1
        }
      }
      return output.reverse().join('')
    },
    addToCart(item) {
      let found = false
      this.cart.forEach(data => {
        if(item.id == data.id) {
          data.qty++
          found = true
        }
      })
      if (!found) {
        item.qty = 1
        this.cart.push(item)
        console.log(this.cart)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    getCartItems() {
      let cartItems = localStorage.getItem('cart')
      return JSON.parse(cartItems)
    }
  },
  created() {
    if(localStorage.getItem('cart')) {
      this.cart = this.getCartItems()
      console.log('cart items-->', this.cart)
    }

    axios({
      method: 'get',
      url: `${BASE_URL}/api/products`
    })
    .then(response => {
      console.log(response.data)
      this.products = response.data
    })
    .catch(err => {
      console.log('get all products error', err.response)
    })
  },
  data: {
    cart: [],
    products: []
  }
})