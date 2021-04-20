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
              style="width: 35px; border: 2px solid"
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
              style="width: 35px; border: 2px solid"
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
              @click="
                showDetails(
                  'https://storage.googleapis.com/wineshop-assets/wine-bottles/' +
                    product.image,
                  product.details
                )
              "
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
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  name: "Card",
  props: ["product"],
  computed: mapGetters(["cartItems", "products"]),
  data() {
    return {
      qtty: {
        bottle: 0,
        case: 0,
      },
    };
  },
  created() {
    // this.updateQtyFromCart();
  },
  methods: {
    addToCart(item, qtty) {
      item.qtty = qtty;
      console.log(item);

      this.$store.dispatch("ADD_ITEM", item);
      //   console.log(this.$store.items);
    },
    updateQtyFromCart() {
      var index = this.cartItems.findIndex(
        (el) => el.item.no === this.product.no
      );
      if (index !== -1) {
        this.qtty = this.cartItems[index].qtty;
      } else {
        this.qtty = {
          bottle: 0,
          case: 0,
        };
      }
    },
    del(type, item) {
      this.$store.dispatch("REMOVE_ITEM", { item, type });
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
