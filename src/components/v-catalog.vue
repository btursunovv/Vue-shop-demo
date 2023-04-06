<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>

    <div class="v-catalog__head">Catalog</div>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived");
      }
    });
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 30px;
    right: 25px;
    padding: 16px;
    border: solid 1px rgba(0, 0, 0, 0.4);
    color: #000;
    font-size: 18px;
    font-weight: 500;
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
}
</style>
