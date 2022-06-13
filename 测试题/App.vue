<template>
  <div id="app">
    <h2>测试题</h2>
    <Sub
      v-for="(o, i) in arr"
      :key="i"
      :one="o.num1"
      :two="o.num2"
      :index="i"
      @celE="cel"
    />
    <div>
      <Flag v-for="(o, i) in arr" :key="i" :status="o.isOk" :index="i" />
    </div>
  </div>
</template>

<script>
import Flag from "@/components/Flag.vue";
import Sub from "./components/Sub.vue";
export default {
  components: {
    Flag,
    Sub,
  },
  data() {
    return {
      arr: [
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isOk: "unComplate",
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isOk: "unComplate",
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isOk: "unComplate",
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isOk: "unComplate",
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isOk: "unComplate",
        },
      ],
    };
  },
  methods: {
    cel(i, r) {
      let obj = this.arr[i];
      if (obj.num1 + obj.num2 === r) {
        obj.isOk = "yes";
      } else {
        obj.isOk = "no";
      }
    },
  },
};
</script>

<style>
body {
  background-color: #eee;
}

#app {
  background-color: #fff;
  width: 500px;
  margin: 50px auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 2em;
}
</style>

