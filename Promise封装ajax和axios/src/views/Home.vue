<template>
  <div>
    <h2>{{title}}</h2>
    <button @click="getList">click</button>
    <ul>
      <li v-for="item in list" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  data(){
    return{
      title:'Promise封装axios',
      list:[],
    }
  },
  methods:{
    async getList(){
      let url = 'http://localhost:3000/fruitlist'
      // {a:3}是传递的参数
      let getData = await request(url,{a:3})
      this.list = getData
    }
  },
}
</script>
