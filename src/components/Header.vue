<template>
  <div>
    <b-row>
      <b-col class="mb-2" cols="12" md="4" order="3">
        <div>
          <b-button v-b-modal.modal-1
            >Open Cart</b-button
          >
          <span style="margin-right: 10px"></span>
          <b-button class="mr-1" v-b-modal.modal-2>Delivery Info</b-button>
          <span>TOTAL: KSH{{ total }}</span>
        </div></b-col
      >

      <b-col class="well mb-2" cols="12" md="4" order="2"
        ><div class="btn-group mr-2" role="group" aria-label="First group">
          <span>Show: </span>
          <button
            type="button"
            @click="filterItems('all')"
            :class="
              filter_value === 'all'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-success'
            "
          >
            All
          </button>
          <button
            type="button"
            @click="filterItems('white')"
            :class="
              filter_value === 'white'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-success'
            "
          >
            White
          </button>
          <button
            type="button"
            @click="filterItems('red')"
            :class="
              filter_value === 'red'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-success'
            "
          >
            Red
          </button>
          <button
            type="button"
            @click="filterItems('sparkling')"
            :class="
              filter_value === 'sparkling'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-success'
            "
          >
            Sparkling
          </button>
          <button
            type="button"
            @click="filterItems('vintage')"
            :class="
              filter_value === 'vintage'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-success'
            "
          >
            Vintage
          </button>
        </div></b-col
      >

      <b-col class="mb-2" cols="12" md="4" order="1"
        ><div class=" btn-group mr-2" role="group" aria-label="First group">
          <span>Order By: </span>

          <button
            @click="sortItems('bottle')"
            type="button"
            :class="
              sort_value === 'bottle'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-primary'
            "
          >
            Bottle Price
          </button>
          <button
            @click="sortItems('case')"
            type="button"
            :class="
              sort_value === 'case'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-primary'
            "
          >
            Case Price
          </button>
          <button
            @click="sortItems('name')"
            type="button"
            :class="
              sort_value === 'name'
                ? 'ml-2 btn btn-warning'
                : 'ml-2 btn btn-primary'
            "
          >
            Name
          </button>
        </div></b-col
      >
    </b-row>

    <b-modal id="modal-1" :title="'Cart ' + 'Total: Ksh' + total">
      <div v-for="i in cartItems" :key="i.id">
        <!-- <code>{{ i.item.name }}</code> -->
        <p v-if="i.item.qtty.bottle > 0">
          {{ i.item.qtty.bottle }} {{ i.item.name }} Bottles @ KSH{{
            i.item.cost.bottle
          }}
          = KSH{{ i.item.qtty.bottle * i.item.cost.bottle }}
        </p>
        <p v-if="i.item.qtty.case > 0">
          {{ i.item.qtty.case }} {{ i.item.name }} Cases @ KSH{{
            i.item.cost.case
          }}
          = KSH{{ i.item.qtty.case * i.item.cost.case }}
        </p>
      </div>
      <b-button class="mt-3 mr-3">Checkout</b-button>
      <b-button class="mt-3" @click="emptyCart">Empty Cart</b-button>
    </b-modal>

    <b-modal id="modal-2" title="Delivery Info">
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input placeholder="Your Full name" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input placeholder="Address" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input placeholder="Phone Number" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input placeholder="Estate" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input
          placeholder="Street / Building Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Additional Notes:"
        label-for="input-2"
      >
        <b-form-textarea
          id="textarea"
          placeholder="Notes"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: mapGetters(["cartItems", "total"]),
  data() {
    return {
      filter_value: "all",
      sort_value: "",
    };
  },

  methods: {
    ...mapActions(["fetchProducts"]),
    emptyCart() {
      console.log("empty");
      this.$store.commit("DEL_ITEMS");
    },
    sortItems(s) {
      this.sort_value = s;
      this.$store.commit("SORT_ITEMS", s);
    },
    filterItems(f) {
      this.filter_value = f;
      if (f === "all") {
        this.fetchProducts();
      } else {
        this.$store.commit("FILTER_ITEMS", f);
      }

      // this.fetchProducts();
    },
  },
};
</script>

<style scoped>
.padded {
  padding: 10px;
}
.btn-toolbar {
  padding: 10px;
}
</style>
