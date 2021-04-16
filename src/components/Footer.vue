<template>
  <div>
    <footer id="footer">
      <div
        class="mt-2"
        style="background: white; text-align: center; margin: 0px; padding:10px"
      >
        <p style="color:black; ">Copyright (c) {{ year }}, Wine Shop.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>
