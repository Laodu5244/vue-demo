<template>
  <!-- 标题插槽 -->
  <div class="title">
    <slot>
      <span>小七推荐</span>
    </slot>
  </div>
</template>

<style scoped>
.title {
  padding: 0.26rem 0;
  width: 100%;
  text-align: conter;
  font-size: 0.52rem;
  display: flex;
  justify-content: center;
}
.title span {
  position: relative;
}
.title span::after {
  content: "";
  display: bolck;
  position: absolute;
  right: -0.5rem;
  top: 50%;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d4c0a7;
}
.title span::before {
  content: "";
  display: bolck;
  position: absolute;
  left: -0.5rem;
  top: 50%;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d4c0a7;
}
</style>