<template>
  <div>
    <b-container class="bv-example-row ">
      <b-row class="">
        <b-col
          class="brd-btm"
          cols="12"
          md="4"
          v-for="p in products"
          :key="p.no"
          ><product-card :product="p"></product-card
        ></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// const axios = require("axios").default;
import { mapGetters, mapActions } from "vuex";
import ProductCard from "./Card.vue";

export default {
  name: "Products",
  computed: mapGetters(["cartItems", "products"]),
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  data() {
    return {
      // products: [],
    };
  },
  components: {
    ProductCard,
  },
  created() {
    this.fetchProducts();
  },
  // methods: {
  //   fetchProducts() {
  //     //   var url = "https://storage.googleapis.com/wineshop-assets/wine-shop.json";
  //     var url = "http://localhost:8080/data/wine-shop.json";
  //     console.log(url);
  //     axios.get(url).then((response) => {
  //       console.log(response.data);
  //       this.products = response.data;
  //       this.$store.commit("SET_PRODUCTS", response.data);
  //       console.log(this.products);
  //     });
  //   },
  // },
};
</script>

<style>
.brd-btm {
  border-bottom: 1px dashed black;
  padding-bottom: 20px;
}
</style>
