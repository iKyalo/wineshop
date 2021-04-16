<template>
  <div class="container">
    <div class="photo-card col-md-3">
      <div class="photo-background col-md-1">
        <!-- <img
          :src="
            'https://storage.googleapis.com/wineshop-assets/wine-bottles/img/' +
              product.image
          "
          height="200px"
        /> -->
        <img src="/img/reisling.png" height="200px" />
      </div>

      <div class="photo-details col-md-2">
        <h1>{{ product.no }} {{ product.name }}</h1>
        <span class="col-md-3 col-sm-6">
          Bottle ${{ product.cost.bottle }}
          <br />
          Qty: <input name="btl-qty" type="number" />
        </span>
        <span class="col-md-4">
          Case ${{ product.cost.case }}
          <br />
          Qty: <input name="cse-qty" type="number" />
        </span>
        <div class="photo-tags">
          <ul style="margin-left: auto">
            <li>
              <button class="btn btn-sm btn-primary" @click="showDetails">
                Details
              </button>
            </li>
            <li>
              <button class="btn btn-sm btn-success" @click="addToCart">
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["product"],
  methods: {
    addToCart() {
      console.log("adc");
    },
    showDetails() {
      console.log("sd");
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
  },
};
</script>

<style>
.photo-card {
  /* background-color: #2d3638; */
  border-radius: 1px;
  padding: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  /* max-width: 700px; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  color: #000000;
  margin-bottom: 20px;
}

@media screen and (min-width: 700px) {
  .photo-card {
    flex-direction: row;
  }
}

.photo-background {
  background-position: center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-height: 250px;
}

@media screen and (min-width: 700px) {
  .photo-background {
    border-top-left-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
    min-height: none;
    width: 50%;
  }
}

.photo-details {
  padding: 2.1875em 5%;
}

@media screen and (min-width: 700px) {
  .photo-details {
    width: 50%;
  }
}

.photo-details h1,
.photo-details h4 {
  color: #000;
  font-weight: 500;
  margin: 0;
}

.photo-details h1 {
  font-size: 125%;
  line-height: 1;
  margin-bottom: 0.35em;
}

.photo-tags ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  font-size: 87.5%;
  margin-top: 0.35em;
  text-transform: lowercase;
}

.photo-tags li {
  margin: 0 0.35em 0.35em 0;
}

.photo-tags a {
  background-color: #191e20;
  border-radius: 50px;
  color: #fff;
  display: block;
  padding: 0.3125em 1.25em;
  text-decoration: none;
  transition: color 0.3s ease;
}

.photo-tags a:hover,
.photo-tags a:focus {
  color: #e37544;
}

.photo-details p {
  color: white;
}
</style>
