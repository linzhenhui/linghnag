<template>
  <div class="ckList">
    <div v-for="(item,index) in dataList" :key="index" class="ck">
      <span class="cktitle">{{item.title}}</span>
      <p class="name txt_l">{{item.name}}</p>
      <p class="txt_s space_b">
        <span class="txt_l">开课时间：{{item.time}}</span>
        <span class="txt_r">课时：{{item.ks}}</span>
      </p>
      <div class="space_a">
        <div v-for="(teach,i) in item.teach" :key="i" class="teach">
          <img :src="teach.headerimg" alt srcset />
          <p class="txt_s">{{teach.name}}</p>
        </div>
      </div>
      <div class="txt_s txt_l w50">
        限售{{item.xianshou}}人
        <br />
        已售{{item.yishou}}人
      </div>
      <div class="txt_r w50">
        <span class="red">￥{{item.jiage}}</span>
        <br />
        <span class="txt_s">剩{{item.lastTime}}结束</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      dataList: [
        {
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
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        },
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        },
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        },
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        },
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        },
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        },
        {
          title: "考研",
          name: "【联报减500】21考研研春季系统2班",
          time: "2020.04.20 - 06.12",
          ks: "105课时",
          teach: [
            { headerimg: "/static/img/header.png", name: "张磊" },
            { headerimg: "/static/img/header.png", name: "张磊" }
          ],
          xianshou: 5000,
          yishou: 499,
          jiage: 899,
          lastTime: "23天13:09:42"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.ck {
  padding: 40px;
  width: 23%;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(235, 235, 235, 1);
  display: inline-block;
  margin: 1%;
  position: relative;

  .cktitle {
    display: block;
    width: 40px;
    background: rgba(0, 190, 155, 1);
    color: #ffffff;
    border-radius: 3px;
    margin-bottom: 5px;
  }

  .name {
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
  }

  span {
    display: inline-block;
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
</style>