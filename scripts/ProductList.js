Vue.component('product-list', {
  props: ['product'],
  methods: {
    addToCart(event) {
      this.$emit('add-to-cart', this.product)
    }
  },
  template: `
  <div class="column is-3">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="product.img" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h5>{{ product.title }}</h5>
          {{ product.description }}
          <p>{{ product.price }}</p>
        </div>
      </div>
      <footer class="card-footer">
        <a v-on:click="addToCart" class="card-footer-item">Add to cart</a>
      </footer>
    </div>
  </div>
  `
})