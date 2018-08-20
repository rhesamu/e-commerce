const BASE_URL = 'http://localhost:3000'

new Vue({
  el: '#app',
  data: {
    cart: [],
    products: [],
    isLogin: false,
    userRole: '',
  },
  methods: {
    getCartItems() {
      let cartItems = localStorage.getItem('cart')
      return JSON.parse(cartItems)
    },
    deleteItem(productId) {
      console.log(productId)
    }
  },
  created() {
    if(localStorage.getItem('cart')) {
      this.cart = this.getCartItems()
      console.log('cart items-->', this.cart)
    }

    if(localStorage.getItem('ecommerce-token')) {
      let userToken = localStorage.getItem('ecommerce-token')
      axios({
        method: 'get',
        url: `${BASE_URL}/api/users`,
        headers: { token: userToken }
      })
      .then(response => {
        let user = response.data.user
        this.isLogin = true
        this.userRole = user.role
      })
      .catch(err => {
        console.log('get user error', err.response.data)
      })
    }

    axios({
      method: 'get',
      url: `${BASE_URL}/api/products`
    })
    .then(response => {
      this.products = response.data
      console.log(response.data)
    })
    .catch(err => {
      console.log('get all products error', err.response)
    })
  }
})