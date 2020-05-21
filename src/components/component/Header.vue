<template>
  <div class="padding" id="header">
    <div class="header_top">
      <div class="logo">
        <p>领航教育</p>
        <span>linghang.net.cn</span>
      </div>
      <div class="header_r">
        <span>APP下载</span>
        <span>我的课程</span>
        <span>登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
#header{
  background-color: #FFFFFF;
}
.header_top {
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  height: 50px;
}
.logo {
  width: 104px;
  background: rgba(255, 95, 95, 1);
}
.logo p {
  text-align: center;
  width: 100%;
  height: 20px;
  font-size: 16px;
  font-family: PangMenZhengDao;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
}
.logo span {
  width: 77px;
  height: 14px;
  font-size: 10px;
  font-family: AlibabaPuHuiTiM;
  color: rgba(255, 255, 255, 1);
  line-height: 14px;
}
.header_r{
  line-height: 50px;
}
.header_r span{
  margin-left: 100px;
}
</style>