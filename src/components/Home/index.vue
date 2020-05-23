<template>
  <div id="index">
    <Header activeIndex="1" />
    <div class="body padding">
      <el-carousel>
        <el-carousel-item v-for="(item,i) in bannerlist" :key="i">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
      <div>
        <kcTable />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../component/Header.vue";
import kcTable from "../component/kcTable.vue";
import Footer from "../component/Footer.vue";
export default {
  components: {
    Header: Header,
    kcTable: kcTable,
    Footer: Footer
  },
  data() {
    return {
      bannerlist: ["/static/img/banner.jpg", "/static/img/banner.jpg"]
    };
  }
};
</script>

<style lang='less'>
#index,
.body {
  width: 100%;

  .el-carousel {
    img {
      width: 100%;
      height: 100%;
    }
    .el-carousel__container {
      min-width: 1200px;
      min-height: 325px;
    }
  }
}

.body > div {
  margin: 20px 0;
}
</style>