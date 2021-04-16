<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <!-- <img src="/img/reisling.png" height="250px" /> -->
        <img
          :src="
            'https://storage.googleapis.com/wineshop-assets/wine-bottles/' +
              product.image
          "
          height="250px"
        />
      </div>
      <div class="col-9">
        <h1>{{ product.no }}</h1>
        <p class="pd16">{{ product.name }}</p>
        <div class="row">
          <div class="col" style="border-right: 2px solid black">
            <p>Bottle</p>
            <p class="pd16">${{ product.cost.bottle }}</p>

            <input
              type="number"
              v-model="qtty.bottle"
              min="0"
              value="0"
              style="width: 35px"
            />
            <span style="margin-left: 10px">QTY</span>
            <br />
          </div>
          <div class="col">
            <p>Case</p>
            <p class="pd16">${{ product.cost.case }}</p>

            <input
              type="number"
              min="0"
              value="0"
              v-model="qtty.case"
              style="width: 35px"
            />
            <span style="margin-left: 10px">QTY</span>
            <br />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button
              style="margin: 5px"
              class="btn btn-secondary"
              type="button"
              @click="showDetails('/img/reisling.png', product.details)"
            >
              Details
            </button>

            <button
              style="margin: 5px"
              class="btn btn-primary"
              type="button"
              :disabled="qtty.bottle === 0 && qtty.case === 0"
              @click="addToCart(product, qtty)"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Card",
  props: ["product"],
  data() {
    return {
      qtty: {
        bottle: 0,
        case: 0,
      },
    };
  },
  methods: {
    addToCart(item, qtty) {
      console.log("adc");
      item.qtty = qtty;
      console.log(item);
      // var obj = {
      //   item: item,
      //   qtty: qtty,
      // };
      this.$store.dispatch("ADD_ITEM", item);
      //   console.log(this.$store.items);
    },
    showDetails(photo, text) {
      console.log("sd");
      Swal.fire({
        imageUrl: photo,
        imageHeight: 250,
        text: text,
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.pd16 {
  margin-top: -16px;
}
</style>
