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
  },
  data: {
    cart: [],
    products: [{
      id: 1,
      img: "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350",
      title: 'Landscape picture 1',
      description: 'A nice landscape picture',
      category: 'landscape',
      price: 999000
    }, {
      id: 2,
      img: "https://i.pinimg.com/736x/f8/f4/89/f8f48951c377ae6ac71b3743724c0c6a--famous-faces-beautiful-people.jpg",
      title: 'Portrait picture 1',
      description: 'A nice portrait picture',
      category: 'portrait',
      price: 549000
    }, {
      id: 3,
      img: "https://bulma.io/images/placeholders/640x480.png",
      title: 'Street picture 1',
      description: 'A nice street photograph',
      category: 'portrait',
      price: 249000
    }, {
      id: 4,
      img: "https://bulma.io/images/placeholders/640x480.png",
      title: 'Landscape picture 2',
      description: 'A nice landscape picture',
      category: 'portrait',
      price: 1499000
    }, {
      id: 5,
      img: "https://bulma.io/images/placeholders/640x480.png",
      title: 'Portrait picture 2',
      description: 'A nice portrait picture',
      category: 'portrait',
      price: 899000
    }]
  }
})