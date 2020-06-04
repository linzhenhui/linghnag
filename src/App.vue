<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/component/Header.vue";
import Footer from "./components/component/Footer.vue";
export default {
  components: {
    Header: Header,
    Footer: Footer
  },
  name: "App"
};
</script>

<style>
#app {
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>
