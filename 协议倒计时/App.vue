<template>
  <div id="app">
    <textarea name="" id="" cols="15" rows="5">
      用户注册协议: 如果您不同意任何条款,请停止注册!
    </textarea>
    <br />
    <button @click="btn" :disabled="isDis">同意条款({{ sTime }})</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sTime: 10,
      isDis: true,
    };
  },
  mounted() {
    let timer = setInterval(() => {
      this.sTime--;
      if (this.sTime <= 0) {
        this.sTime = 0;
        this.isDis = false;
        clearInterval(timer);
      }
    }, 1000);
  },
  methods: {
    btn() {
      alert("Vue太简单了");
    },
  },
};
</script>
