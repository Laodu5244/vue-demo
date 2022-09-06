<template>
  <div class="goods">
    <img class="title" src="@/assets/images/goods.png">
    <van-tabs v-model="active" animated>
      <van-tab :title="item.title" v-for="item in list" :key="item.id">
        <img class="imgs" v-bind:src="item.url">
      </van-tab>
    </van-tabs>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
export default {
  components:{Footer},
  data(){
    return{
      list:[
        {id:1,title:'消毒剂',url:require('@/assets/images/goods1.png')},
        {id:2,title:'口罩',url:require('@/assets/images/goods2.png')},
        {id:3,title:'洗手液',url:require('@/assets/images/goods3.png')},
        {id:4,title:'温度计',url:require('@/assets/images/goods4.png')}
      ],
      active:0,
    }
  }
}
</script>

<style scoped>
.goods{
  overflow:hidden;
}
.title{
  width:100%;
  height:3.4rem;
}
.imgs{
  width:100%;
}
.van-tabs{
  margin-bottom: 1rem;
}
</style>