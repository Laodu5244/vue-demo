<template>
  <div class="app">
    <h2>水果列表</h2>
    <div>
      <input type="text" v-model="fruit.name" placeholder="水果名">
      <input type="text" v-model="fruit.price" placeholder="水果价格">
      <button @click="submit">submit</button>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="item.id">
        {{item.name}}--价格:{{item.price}}--数量:
        <button @click="sub(index)">-</button>{{item.num}}<button @click="add(index)">+</button>
        --总价:{{item.price*item.num}} 
        <button @click="del(index)">delete</button>  
      </li>
    </ul>
    <div class="total">
      <h2>合计:{{ total }} <button @click="settle">结账</button></h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list:[],
      fruit:{name:'',price:'',num:1}
    };
  },
  methods: {
    getData(){
      axios.get('http://localhost:3000/fruits').then(res =>{
        this.list = res.data
      })
    },
    add(id){
      this.list[id].num++
    },
    sub(id){
      if(this.list[id].num>0){
        this.list[id].num--
      }
    },
    del(index){
      this.list.splice(index,1)
    },
    submit(){
      if(this.fruit.name == '' || this.fruit.price == ''){
        alert('输入不能为空')
      }else{
        this.list.push(this.fruit)
      }
      this.fruit={
        name:'',
        price:'',
        num:''
      }
    },
    settle(){
      alert(`共消费${this.total}元,欢迎下次光临`)
    }
  },
  created(){
    this.getData()
  },
  computed:{
    total(){
      return this.list.reduce((sum,item) =>{
        sum += item.price*item.num
        return sum
      },0)
    }
  }
};
</script>
