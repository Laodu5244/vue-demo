<template>
  <div class="footer">
    <div class="txt">到底啦，您还可以看看这里</div>
    <div class="btns">
      <span>
        <router-link to="/home">更多茶叶</router-link>
      </span>
      <span>
        <router-link to="/tea">更多茶具</router-link>
      </span>
    </div>
    <div class="txt">Copyright 2016, 茶七网 TEA7.COM</div>
    <div class="txt">服务时间：08:30-21:00 客服热线: 400-9993-513</div>
    <div class="txt">
      备案号：
      <router-link to="/home">闽ICP备14011677号-2</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 0.3rem;
  padding: 18px 0 0;
  font-size: 0.4rem;
  background-color: #f5f5f5;
  color: #333;
  width: 100%;
  height: 4.5rem;
}
.txt {
  text-align: center;
  color: #999;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
}
.btns span {
  padding: 0.2rem 0.4rem;
  background: #fff;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  margin: 0.5rem 0.6rem;
}
a {
  color: #333;
}
</style>