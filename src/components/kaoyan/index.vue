<template>
  <div id="index">
    <Header activeIndex="2" />
    <div class="body padding">
      <ul class="kyul">
        <li style="font-size:32px;color:rgba(51,51,51,1);">考研</li>
        <li
          v-for="(item,index) in kylist"
          :class="{active:chose==item}"
          @click="choseli(item)"
          :key="index"
        >{{item}}</li>
      </ul>
      <kcTable />
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
      kylist: [
        "报考指南",
        "政治",
        "英语",
        "数学",
        "专业课",
        "专业课一对一",
        "高端辅导",
        "复试",
        "调剂"
      ],
      chose: "政治"
    };
  },
  methods: {
    choseli(item) {
      this.chose = item;
    }
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
  .kyul {
    margin: 20px 0;
    height: 50px;
    display: flex;
    align-items: flex-end;
    li {
      margin-right: 50px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(143, 143, 143, 1);
    }
    .active {
      color: red;
    }
  }
}
</style>