Vue.component('cart-list', {
  props: ['item'],
  methods: {
    addItem(event) {
      this.$emit('add-item', this.item.id)
    },
    substractItem(event) {
      this.$emit('substract-item', this.item.id)
    },
    removeFromCart(event) {
      this.$emit('remove-from-cart', this.item.id)
    }
  },
  template: `
  <div class="column is-12">
    <div class="box">
      <div class="columns">
        <div class="column is-2">
          <figure class="image is-4by3">
            <img :src="item.img" alt="image">
          </figure>
        </div>
        <div class="column is-10">
          <h1><strong>{{ item.title }}</strong></h1>
          <p>{{ item.description }}</p>
          <p><strong>Price:</strong> {{ item.price }}</p>
          <p><strong>Qty: {{ item.qty }}</strong> </p>
          <br>
          <div class="control">
            <a @click="addItem" class="button is-warning">+</a>
            <a @click="substractItem" class="button is-warning">-</a>
            <a @click="removeFromCart" class="button is-danger">Remove from Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})