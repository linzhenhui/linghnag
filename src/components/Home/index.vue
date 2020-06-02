<template>
  <div id="index">
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
  </div>
</template>

<script>
import kcTable from "../component/kcTable.vue";
export default {
  components: {
    kcTable: kcTable
  },
  data() {
    return {
      bannerlist: ["/static/img/banner.jpg", "/static/img/banner.jpg"]
    };
  },
  methods: {}
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