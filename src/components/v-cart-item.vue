
<template lang="">
    <div class="v-cart-item">
        
        <img class="v-cart-item__images" :src="API_BASE_URL + /static/ + product_data.image" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}₸</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <!-- <div class="v-cart-item__quantity">{{cart_item_data.quantity}}</div> -->
        <button 
            class='v-cart-item__btn' 
            @click='deleteFromCart'>
            Delete
        </button>
    </div>
</template>


<script>

import { API_BASE_URL } from '@/config';

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
    data () {
        return {
            API_BASE_URL
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
        &__btn {
            border: 0px solid #000;
            padding: 10px;
            background-color: #cf2c0f;
            color: #fff;
    }
    }
</style>