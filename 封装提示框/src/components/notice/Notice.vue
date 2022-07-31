<template>
  <div class="notice" v-if="isShow">
    <h3>{{ title }}</h3>
    <div class="message">{{ message }}</div>
    <div class="close" @click="close">✖</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      message: "",
      isShow: false,
      duration: 4500,
    };
  },
  mounted() {
    this.isShow = true;
    // 自动延时关闭
    setTimeout(() => {
      this.isShow = false;
    }, this.duration);
  },
  methods: {
    // 手动关闭
    close() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.notice {
  width: 330px;
  padding: 14px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  top: 20px;
  right: -330px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  animation: open 0.3s forwards;
}
h3 {
  padding: 0;
  margin: 0 0 15px;
  font-weight: 700;
  font-size: 16px;
  color: #303133;
}
.notice .message {
  font-size: 14px;
  color: #606266;
  text-align: justify;
}
.notice .close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #333;
  cursor: pointer;
}

@keyframes open {
  from {
    opacity: 0;
    transform: translateX(0);
  }
  to {
    opacity: 1;
    transform: translateX(-350px);
  }
}
</style>