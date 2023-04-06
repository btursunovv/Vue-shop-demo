<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="API_BASE_URL + /static/ + product_data.image"
      alt=""
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <button @click="addToCart" class="v-catalog-item__cart_btn btn">
      Add to cart
    </button>
  </div>
</template>

<script>
import { API_BASE_URL } from "@/config";

export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      API_BASE_URL,
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    width: 100px;
    margin-bottom: 10px;
  }
  &__name {
    margin-bottom: 8px;
  }
  &__price {
    margin-bottom: 8px;
  }
  &__cart_btn {
    border: 0px solid #000;
    padding: 10px;
    background-color: #1ca345;
    color: #fff;
  }
}
</style>
