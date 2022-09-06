<template>
  <div class="nav">
    <ul>
      <li v-for="item in list" :key="item.id" @click="download(item.id)">
        <img :src="item.url">
        <div>{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {id:1,title:'风险地区',url:require('@/assets/images/nav1.png')},
        {id:2,title:'核酸检测',url:require('@/assets/images/nav2.png')},
        {id:3,title:'防疫物资',url:require('@/assets/images/nav3.png')},
        {id:4,title:'出行策略',url:require('@/assets/images/nav4.png')},
      ]
    }
  },
  methods:{
    download(id){
      if(id == 1){
        this.$router.push('/area')
      }else if(id == 3){
        this.$router.push('/goods')
      }else{
        this.$router.push('/hesuan')
      }
    }
  }
}
</script>

<style scoped>
ul{
  margin-top: 0.2rem;
  border-top: 1px solid #ccc;
  display:flex;
}
li{
  margin: 0.3rem 0;
  width:100%;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li img{
  width:1rem;
}
</style>
