<template>
  <div class="padding" id="header">
    <div class="header_top">
      <div class="logo float_l">
        <p>{{$store.state.logo.name}}</p>
        <span>{{$store.state.logo.url}}</span>
      </div>
      <div class="header_r float_r">
        <div
          @mouseover="selectStyle  "
          @mouseout="outStyle"
          style="display:inline-block;position:relative"
        >
          <span>APP下载</span>
          <div v-if="show" class="show">
            <img src="../../../static/img/home/download.jpg" />
            <p>扫码二维码 下载领航在线APP</p>
          </div>
        </div>
        <span>我的课程</span>
        <span>登录/注册</span>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo space_b"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">考研</el-menu-item>
      <el-submenu index="3">
        <template slot="title">四六级</template>
        <el-menu-item index="2-1">幼儿</el-menu-item>
        <el-menu-item index="2-2">小学</el-menu-item>
        <el-menu-item index="2-3">中学</el-menu-item>
        <el-menu-item index="2-4">初中学科</el-menu-item>
        <el-menu-item index="2-5">高中学科</el-menu-item>
        <el-menu-item index="2-6">其他</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">教师资格证</el-menu-item>
      <el-menu-item index="4">招教特岗</el-menu-item>
      <el-menu-item index="5">卓越教师</el-menu-item>
      <el-menu-item index="6">本科留学</el-menu-item>
      <el-menu-item index="7">硕博留学</el-menu-item>
      <el-menu-item index="8">医学教育</el-menu-item>
      <el-menu-item index="9">职业教育</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      show: false,
      routes: {
        1: "/",
        2: "/kaoyan"
      },
      imgcontent: "/static/img/home/dpwnload.jpg"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(this.routes[key]);
    },
    selectStyle() {
      this.show = true;
    },
    outStyle() {
      this.show = false;
    }
  }
};
</script>

<style scoped lang="less">
#header {
  background-color: #ffffff;

  .header_top {
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 5px;
    height: 50px;
  }

  .logo {
    width: 104px;
    background: rgba(255, 95, 95, 1);
    p {
      text-align: center;
      width: 100%;
      height: 20px;
      font-size: 16px;
      font-family: PangMenZhengDao;
      color: rgba(255, 255, 255, 1);
      line-height: 23px;
    }
    span {
      width: 77px;
      height: 14px;
      font-size: 10px;
      font-family: AlibabaPuHuiTiM;
      color: rgba(255, 255, 255, 1);
      line-height: 14px;
    }
  }
  .header_r {
    line-height: 50px;
    span {
      margin: 0 50px;
    }
  }
  .el-menu {
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.09);
  }

  .show {
    z-index: 99;
    width: 180px;
    height: 215px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.29);
    border-radius: 8px;
    text-align: center;
    padding: 31px;
    position: absolute;
  }

  .show img {
    width: 117px;
    height: 117px;
  }
}
</style>