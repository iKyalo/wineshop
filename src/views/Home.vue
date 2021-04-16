<template>
  <div class="home container">
    <NavBarDiv />
    <HeaderDiv />
    <ProductsDiv />
    <FooterDiv />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDiv from "@/components/Footer.vue";
import NavBarDiv from "@/components/Navbar.vue";
import HeaderDiv from "@/components/Header.vue";
import ProductsDiv from "@/components/Products.vue";

export default {
  name: "Home",
  components: {
    HeaderDiv,
    NavBarDiv,
    ProductsDiv,
    FooterDiv,
  },
};
</script>
