const BASE_URL = "http://localhost:3000"

new Vue({
  el: '#app',
  data: {
    cart: [],
    type: 'register',
    isLogin: false,
    errorMsg: ''
  },
  methods: {
    action({ name, email, password }) {
      axios({
        method: 'post',
        url: `${BASE_URL}/api/register`,
        data: { name, email, password }
      })
      .then(response => {
        console.log(response.data.newUser)
        if(response.data.newUser) {
          window.location.replace('login.html')
        }
      })
      .catch(err => {
        console.log(err.response)
        this.errorMsg = err.response.data.msg
      })
    }
  }
})