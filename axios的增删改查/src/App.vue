<template>
  <div class="app">
    <div>
      <input type="number" v-model="fruit.id" placeholder="水果id" />
      <input type="text" v-model="fruit.name" placeholder="水果名字" />
      <input type="number" v-model="fruit.price" placeholder="水果价格" />
    </div>
    <div>
      <button @click="getData">get</button>
      <button @click="postData">post</button>
      <button @click="deleteData">delete</button>
      <button @click="putData">put</button>
    </div>

    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.id }}--{{ item.name }}--{{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      fruit: { id: "", name: "", price: "" },
    };
  },
  methods: {
    // 获取数据
    getData() {
      axios.get("http://localhost:3000/fruits").then((response) => {
        console.log("查看成功", response.data);
        this.list = response.data;
      });
    },
    // 添加数据
    postData() {
      if (this.fruit.id == "" || this.fruit.name == "" || this.fruit.price == "") {
        alert("输入不能为空");
      } else {
        axios.post("http://localhost:3000/fruits", {
          id: this.fruit.id,
          name: this.fruit.name,
          price: this.fruit.price,
        }).then((response) => {
          console.log("添加成功", response.data);
        })
      }
    },
    // 删除数据
    deleteData(){
      axios({
        url: `http://localhost:3000/fruits/${this.fruit.id}`,
        method: 'DELETE',
      }).then(response =>{
        console.log("删除成功",response.data)
      })
    },
    // 修改数据
    putData(){
      axios.put(`http://localhost:3000/fruits/${this.fruit.id}`,{
        name: this.fruit.name,
        price: this.fruit.price,
      }).then(response =>{
        console.log("修改成功",response.data)
      }).catch(error => console.log(error))
    }
  }
};
</script>

<style>
button {
  display: inline-block;
  margin: 10px;
}
</style>
