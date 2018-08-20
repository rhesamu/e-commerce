Vue.component('product-section', {
  props: ['products'],
  methods: {
    addToCart(value) {
      console.log('product-section addtocart -->',value)
      this.$emit('add-to-cart', value)
    }
  },
  template: `
  <section class="products">
    <div class="container">
      <div class="columns is-multiline">
        <product-list
          v-for="(product, index) in products"
          :product="product"
          :key="index"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </section>
  `
})