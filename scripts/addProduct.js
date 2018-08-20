const BASE_URL = 'http://localhost:3000'

new Vue({
  el: '#app',
  data: {
    cart: [],
    isLogin: false,
    userRole: '',
    name: '',
    price: 0,
    description: '',
    stock: 0,
    image: '',
  },
  methods: {
    getCartItems() {
      let cartItems = localStorage.getItem('cart')
      return JSON.parse(cartItems)
    },
    addNewProduct() {
      let token = localStorage.getItem('ecommerce-token')
      let formData = new FormData()
      formData.append('image', this.image)
      axios({
        method: 'post',
        url: `${BASE_URL}/api/products/upload`,
        data: formData
      })
      .then(result => {
        console.log('image uploaded', result.data)
        let imgUrl = result.data.link

        axios({
          method: 'put',
          url: `${BASE_URL}/api/products/`,
          headers: { token },
          data: {
            name: this.name,
            description: this.description,
            price: this.price,
            stock: this.stock,
            image: imgUrl
          }
        })
        .then(response => {
          console.log('add new product', response.data)
          window.location.replace('admin.html')
        })
      })
      .catch(err => {
        console.log('error add product', err.response)
      })
    },
    send(e) {
      this.image = e.target.files[0]
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
  }
})