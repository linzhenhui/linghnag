<template>
  <div id="index">
    <Header />
    <div class="body"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "../component/Header.vue";
import Footer from "../component/Footer.vue";
export default {
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style>
#index,
.body {
  width: 100%;
  height: 100%;
}
.body{
}
</style>