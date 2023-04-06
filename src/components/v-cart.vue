<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <div class="v-cart__head">Cart</div>
    <p class="v-cart__header" v-if="!CART.length">
      There are no products in cart...
    </p>
    <v-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
  <div class="v-cart__total">
    <p class="v-cart__total__name">Total</p>
    <p>{{ cartTotalCost }}₸</p>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return Math.round(result).toFixed(2);
      } else {
        return 0;
      }
    },
  },
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px 24px;
    background-color: #1ca345;
    color: #fff;
    font-size: 20px;

    &__name {
      margin-right: 16px;
    }
  }
  &__head {
    display: flex;
    font-size: 35px;
    margin-bottom: 30px;
    margin-top: 30px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
  &__header {
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: 400;
  }
}
</style>
