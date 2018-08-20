Vue.component('member-form', {
  props: ['type'],
  data () {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    login(event) {
      this.$emit('action', {
        email: this.email,
        password: this.password
      })
    },
    register(event) {
      this.$emit('action', {
        name: this.name,
        email: this.email,
        password: this.password
      })
    }
  },
  template: `
  <section class="login">
    <div class="columns is-centered">
      <article class="card is-rounded">
        <div class="card-content">
          <h1 v-if="type=='login'" class="title">Login</h1>
          <h1 v-else class="title">Register</h1>

          <div v-if="type!='login'" class="field">
            <input v-model="name" type="text" class="input" placeholder="Name">
          </div>
          <div class="field">
            <input v-model="email" type="text" class="input" placeholder="Email address">
          </div>
          <div class="field">
            <input v-model="password" type="password" class="input" placeholder="Password">
          </div>
          <div class="field">
            <button v-if="type=='login'" @click="login" class="button is-primary is-medium is-fullwidth">Login</button>
            <button v-else @click="register" class="button is-primary is-medium is-fullwidth">Register</button>
          </div>
        </div>
      </article>
    </div>
  </section>
  `
})