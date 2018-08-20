const BASE_URL = "http://localhost:3000"

new Vue({
  el: '#app',
  data: {
    cart: [],
    type: 'login'
  },
  methods: {
    action(input) {
      axios({
        method: 'post',
        url: `${BASE_URL}/api/login`
      })
      .then(response => {
        let token = response.data.token
        if (token) {
          localStorage.setItem('ecommerce-token', token)
          window.location.replace = "index.html"
        }
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  }
})