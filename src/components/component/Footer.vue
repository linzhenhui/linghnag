<template>
  <div class="padding" id="footer">
    <div class="logo">
      <p>{{$store.state.logo.name}}</p>
      <span>{{$store.state.logo.url}}</span>
    </div>
    <div @mouseover="selectStyle(1) " @mouseout="outStyle(1)" style="position:relative">
      <div class="link">
        <img src="../../../static/img/home/icon-wx.png" alt srcset />
        <span>微信公众号</span>
      </div>
      <div v-if="show[1]" class="show">
        <img src="../../../static/img/home/download.jpg" />
        <p>
          扫码二维码
          关注领航微信号
        </p>
      </div>
    </div>
    <div @mouseover="selectStyle(2) " @mouseout="outStyle(2)" style="position:relative">
      <div class="link">
        <img src="../../../static/img/home/icon-kf.png" alt srcset />
        <span>联系我们</span>
      </div>
      <div v-if="show[2]" class="show txt-l noworp">
        <p>客服电话：</p>
        <p>0574-22763389</p>
      </div>
    </div>
    <div @mouseover="selectStyle(3) " @mouseout="outStyle(3)" style="position:relative">
      <div class="link">
        <img src="../../../static/img/home/icon-APP.png" alt />
        <span>APP下载</span>
      </div>
      <div v-if="show[3]" class="show">
        <img src="../../../static/img/home/download.jpg" />
        <p>
          扫码二维码
          关注领航微信号
        </p>
      </div>
    </div>
    <div class="link">
      <span>Copyright ©2015-2020 宁波领航教育有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: {
        1: false,
        2: false,
        3: false
      }
    };
  },
  methods: {
    selectStyle(n) {
      this.show[n] = true;
    },
    outStyle(n) {
      this.show[n] = false;
    }
  }
};
</script>

<style lang="less">
#footer {
  height: 100px;
  background: rgba(54, 54, 54, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  .logo {
    width: 104px;
  }
  .logo p {
    text-align: center;
    width: 91px;
    height: 24px;
    font-size: 16px;
    font-family: PangMenZhengDao;
    color: rgba(255, 255, 255, 1);
    line-height: 27px;
  }
  .logo span {
    width: 77px;
    height: 14px;
    font-size: 10px;
    font-family: AlibabaPuHuiTiM;
    color: rgba(255, 255, 255, 1);
    line-height: 14px;
  }
  .link {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
  .show {
    z-index: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.29);
    border-radius: 8px;
    text-align: center;
    padding: 31px;
    position: absolute;
    bottom: 30px;
    left: -20px;
  }
  .show img {
    width: 117px;
    height: 117px;
  }
  .show p {
    font-weight: 400;
    font-size: 14px;
    color: rgba(102, 102, 102, 1);
  }
}
</style>