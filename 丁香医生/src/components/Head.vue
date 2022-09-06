<template>
  <header>
    <img src="@/assets/images/header.jpg">
    <div class="txt">
      <h3>疫情实时大数据报告</h3>
      <p>数据来源于国家和省市卫健委</p>
    </div>
  </header>
</template>

<style scoped>
header{
  position: relative;
  width: 100%;
}
header img{
  width:100%;
}
header .txt{
  position:absolute;
  top: 14vw;
  left:20px;
  color:#fff;
}
header .txt h3{
  font-size: 8vw;
  margin-bottom: 3vh;
}
header .txt p{
  font-size: 4.5vw;
  margin-left: 1vw;
  padding: 1.5vw;
  display: inline;
  border-radius:3.5vw;
  background-color: rgba(0,0,0,0.2);
}
</style>