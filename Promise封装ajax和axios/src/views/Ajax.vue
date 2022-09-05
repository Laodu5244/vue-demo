<template>
  <div class="ajax">
    <h2>{{title}}</h2>
    <button @click="getData">click</button>
    <ul v-if="list.length">
      <li v-for="item in list" :key="item.id">
        姓名: {{item.name}}
        绝技: {{item.skill}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      title:'Promise封装ajax',
      list:[]
    }
  },
  methods:{
    getData(){
      let url = 'http://localhost:3000/heros'

      function promiseAjax(methods,url){
        return new Promise((resolve,reject)=>{
          let xhr    = new XMLHttpRequest();

          xhr.open(methods,url);
          xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
              if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
              } else {
                reject(JSON.parse(xhr.responseText))
              }
            }
          }
          xhr.send()
        })
      }

      promiseAjax('get',url).then(res =>{
        console.log(res)
        this.list = res
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
}
</script>
