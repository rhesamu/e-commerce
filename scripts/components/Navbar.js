Vue.component('navbar', {
  // split search form into one component
  props: ['cart', 'islogin', 'userrole'],
  methods: {
    logout() {
      localStorage.removeItem('ecommerce-token')
      window.location.reload(true)
    }
  },
  template: `
  <nav class="navbar is-warning is-fixed-top">
    <div class="navbar-brand">
      <a href="index.html" class="navbar-item">
        <h1 style="font-size: 1.5em">isellpictures</h1>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" placeholder="Search...">
          </div>
          <p class="control">
            <a href="/cart.html" class="button is-primary is-outlined is-inverted">
              Cart ({{ cart.length }})
            </a>
          </p>
          <p class="control">
            <a v-if="!islogin" href="/login.html" class="button is-primary">
              Login
            </a>
            <button v-else @click="logout" class="button is-primary">
              Logout
            </button>
            <a v-if="userrole == 'admin'" href="/admin.html" class="button is-primary">
              Admin
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
  `
})