<template>
  <div class="xq padding">
    <h1 class="txt_l">课程详情</h1>
    <div class="xq_head">
      <img :src="img" class="float_l" />
      <div class="ck">
        <p class="txt_l">
          <span class="name txt_l">{{data.name}}</span>
          <span class="cktitle">{{data.title}}</span>
        </p>
        <p class="txt_s txt_l">
          <span class="txt_l">开课时间：{{data.time}}</span>
          <span class="txt_l">课时：{{data.ks}}</span>
        </p>
        <div class="space_b">
          <div class="space_a teachbox">
            <div v-for="(teach,i) in data.teach" :key="i" class="teach">
              <img :src="teach.headerimg" alt srcset />
              <p class="txt_s">{{teach.name}}</p>
            </div>
          </div>
          <div class="txt_s txt_l">
            限售{{data.xianshou}}人
            <br />
            已售{{data.yishou}}人
          </div>
        </div>
        <div class="space_b">
          <div class="txt_l">
            <span class="red">￥{{data.jiage}}</span>
            <br />
            <span class="txt_s">剩{{data.lastTime}}结束</span>
          </div>
          <el-button class="buybtn space_c">立即抢购</el-button>
        </div>
      </div>
    </div>
    <el-tabs v-model="active" stretch>
      <el-tab-pane label="课程详情" name="first">
        <img :src="ckjs" alt srcset />
      </el-tab-pane>
      <el-tab-pane label="课程目录" name="second">
        <div v-for="(item,index) in kcmulist" :key="index" class="nrlist">
          <p class="title txt_l">{{item.name}}</p>
          <div>
            <p v-for="nr in item.nr" :key="nr.id" class="space_a">
              <span class="txt_s">{{nr.id}}</span>
              <span>{{nr.name}}</span>
              <span class="txt_s">老师{{nr.teach}}</span>
            </p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="老师介绍" name="third">角色管理</el-tab-pane>
      <el-tab-pane :label="'评价('+pjnum+')'" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {
    routerItem: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      id: "",
      img: "/static/img/img.png",
      data: {
        id: "1",
        title: "考研",
        name: "【联报减500】21考研研春季系统2班",
        time: "2020.04.20 - 06.12",
        ks: "105课时",
        teach: [
          { headerimg: "/static/img/header.png", name: "张磊" },
          { headerimg: "/static/img/header.png", name: "张磊" },
          { headerimg: "/static/img/header.png", name: "张磊" },
          { headerimg: "/static/img/header.png", name: "张磊" }
        ],
        xianshou: 5000,
        yishou: 499,
        jiage: 899,
        lastTime: "23天13:09:42"
      },
      active: "first",
      pjnum: 1212,
      ckjs: "/static/img/ckjs.png",
      kcmulist: [
        {
          name: "规划课（学前必看）",
          nr: [
            {
              id: 1,
              name: "导学课",
              teach: "石雷鹏"
            }
          ]
        },
        {
          name: "四级词汇",
          nr: [
            {
              id: 2,
              name: "导学课",
              teach: "老师：石雷鹏"
            }
          ]
        },
        {
          name: "四级听力",
          nr: [
            {
              id: 3,
              name: "导学课",
              teach: "老师：石雷鹏"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.id = this.$route.query.ckId;
  },
  methods: {}
};
</script>

<style  lang="less">
h1 {
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin: 20px 0;
}
.xq_head {
  clear: both;
  img {
    width: 49%;
  }
  .ck {
    width: 50%;
    padding: 40px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(235, 235, 235, 1);
    display: inline-block;
    position: relative;

    .name {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 25px;
    }
    .cktitle {
      width: 40px;
      background: rgba(0, 190, 155, 1);
      color: #ffffff;
      border-radius: 3px;
      margin-bottom: 5px;
    }

    span {
      display: inline-block;
    }
    .teachbox {
      width: 57%;
      margin: 50px 0;
    }
    .teach {
      width: 18%;
    }
    .teach img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .ck > * {
    margin-bottom: 10px;
  }
  .buybtn {
    width: 243px;
    height: 58px;
    background: rgba(255, 95, 95, 1);
    border-radius: 8px;
    font-family: PingFangSC-Medium, PingFang SC;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 18px;
  }
}
.el-tabs {
  margin: 20px 200px;
  min-height: 600px;
  .el-tabs__item {
    font-size: 25px !important;
  }
  .nrlist{
    width: 70%;
    .title{
      margin-top: 50px;
      border-left: #00BE9B 3px solid;
      padding-left: 20px;
    }
  }
}
</style>
