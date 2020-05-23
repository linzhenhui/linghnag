<template>
  <div class="ckList">
    <div v-for="(item,index) in dataList" :key="{index}" class="ck">
      <span class="title">{{item.title}}</span>
      <p class="name txt-l">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      dataList: [
        { title: "考研", name: "【联报减500】21考研研春季系统2班" },
        { title: "考研", name: "【联报减500】21考研研春季系统2班" },
        { title: "考研", name: "【联报减500】21考研研春季系统2班" }
      ]
    };
  }
};
</script>

<style lang="less">
.ck {
  padding: 40px;
  width: 282px;
  height: 296px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(235, 235, 235, 1);
  display: inline-block;
  .title {
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
}
</style>