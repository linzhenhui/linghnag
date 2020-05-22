<template>
  <div>
    <Header activeIndex="2" />
    <Footer />
  </div>
</template>

<script>
import Header from "./component/Header.vue";
import Footer from "./component/Footer.vue";
export default {
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style>
</style>