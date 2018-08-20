const BASE_URL = "http://localhost:3000"

new Vue({
  el: '#app',
  data: {
    cart: [],
    type: 'register'
  },
  methods: {
    action(input) {
      axios({
        method: 'post',
        url: `${BASE_URL}/api/register`
      })
      .then(response => {
        if(response.data.newUser) {
          window.location.replace = "login.html"
        }
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  }
})