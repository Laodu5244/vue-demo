<template>
  <div id="app">
    <h3>{{title}}</h3>
    <button @click="getData">get</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'axios拦截器',
      list:'',
    }
  },
  methods:{
    async getData(){
      let url = 'http://localhost:3000/fruitList'
      this.request(url).then (response =>{
        console.log('app组件',response)
      })
    },
  },
}
</script>
