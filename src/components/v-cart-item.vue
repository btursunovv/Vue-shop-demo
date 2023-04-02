<template lang="">
    <div class="v-cart-item">
        <div>123</div>
        <img class="v-cart-item__images" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">{{cart_item_data.quantity}}</div>
        <button @click='deleteFromCart'>Delete</button>
    </div>
</template>


<script>
export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    }
    // mounted() {
    //     this.cart_item_data['quantity'] = 1
    // }
}
</script>


<style lang="scss">
    .v-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        &__images {
            max-width: 50px;
            box-shadow: 0 0 8px 0 #e0e0e0;
            padding: 16px;
            margin-bottom: 16px;
        }
    }
</style>