<template>
  <div>
    <button @click="getJoke">获取笑话</button>
    <p style="width:50%">{{ joke }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      joke: '很好笑的笑话'
    }
  },
  methods: {
    getJoke() {
      axios.get('https://autumnfish.cn/api/joke')
        .then((res) => {
          this.joke = res.data
        })
    }
  }
}
</script>
