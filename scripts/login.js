const BASE_URL = "http://localhost:3000"

new Vue({
  el: '#app',
  data: {
    cart: [],
    type: 'login',
    isLogin: false,
    errorMsg: ''
  },
  methods: {
    action({ email, password }) {
      axios({
        method: 'post',
        url: `${BASE_URL}/api/login`,
        data: { email, password }
      })
      .then(response => {
        console.log(response.data)
        let token = response.data.token
        if (token) {
          localStorage.setItem('ecommerce-token', token)
          window.location.replace('index.html')
        }
      })
      .catch(err => {
        console.log(err.response.data.msg)
        this.errorMsg = err.response.data.msg
      })
    }
  }
})