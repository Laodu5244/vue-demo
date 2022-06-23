<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/logo-tea.png" />
    </div>
    <div class="search">
      <span><van-icon name="search" /></span>
      <p>搜您喜欢的...</p>
    </div>
    <div class="kefu">
      <van-icon name="service-o" color="#fff" />
    </div>
  </header>
</template>

<style scoped>
header {
  background: #b0352f;
  position: fixed;
  display: flex;
  z-index: 999;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
}
.logo {
  height: 1.2rem;
  display: flex;
  align-items: center;
}
.logo img {
  margin: 0 0.25rem;
  width: 2rem;
}
.search {
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 6.3rem;
  height: 0.8rem;
  line-height: 1.2rem;
  border-radius: 0.4rem;
}
.search i {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.35rem 0 0.35rem 0.2rem;
  font-size: 0.5rem;
}
.search p {
  font-size: 0.43rem;
  margin-left: 0.1rem;
  color: #666;
}
.kefu {
  position: absolute;
  right: 0.12rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.kefu .van-icon {
  width: 0.8rem;
  height: 0.8rem;
}
</style>