<template>
  <div class="collection">
    <div class="block">
      <div class="title">
        <h3>新歌榜</h3>
        <router-link to="">更多</router-link>
      </div>
      <div class="list clearfix">
        <div class="item" to="">
          <div class="img">
            <img src="../../assets/p.webp" />
          </div>
          <div class="main">少年</div>
          <div class="gary">songxiao</div>
        </div>
        <div class="item" to="">
          <div class="img">
            <img src="../../assets/p.webp" />
          </div>
          <div class="main">少年</div>
          <div class="gary">songxiao</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.collection {
  background-color: #f8f8f8;
  padding: 5px 0;
}
.block {
  padding: 10px 17px;
  background-color: #fff;
}
.title {
  display: flex;
  margin: 14px 0 18px;
}
.title h3 {
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}
.list {
  width: 100%;
}
.list .item {
  float: left;
  width: 31.33%;
  padding: 0 10px;
  margin-bottom: 10px;
}
.clear {
  padding: 0 !important;
}
.main {
  margin-top: 40px;
  font-size: 12px;
}
.gray {
  font-size: 12px;
  color: #999;
}
.btn {
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>