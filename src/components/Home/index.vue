<template>
  <div id="index">
    <Header activeIndex="1" />
    <div class="body padding">
      <el-carousel>
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div>
        
      </div>
    </div>
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

<style lang='less'>
#index,
.body {
  width: 100%;
  height: 100%;
  .el-carousel {
    background-color: white;
    width: 1201px;
    height: 325px;
  }
}
.body > div {
  margin: 20px 0;
}
</style>