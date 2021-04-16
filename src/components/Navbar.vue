<template>
  <div>
    <h1>Wine Shop</h1>
    <p style="margin-top: -16px;">wineshop.com</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: mapGetters(["cartItems"]),
};
</script>

<style scoped></style>
