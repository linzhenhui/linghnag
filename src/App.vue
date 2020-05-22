<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  text-align: center;
  height: 100%;
  width: 100%;
}
.padding {
  padding: 0 50px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
