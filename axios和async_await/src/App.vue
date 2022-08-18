<template>
  <div id="app">
    <input type="number" v-model="id" placeholder="请输入序号">
    <input type="text" v-model="name" placeholder="请输入名字">
    <input type="text" v-model="skill" placeholder="请输入绝技">
    <div class="btn">
      <button @click="getItem">get</button>
      <button @click="postItem">post</button>
      <button @click="putItem">put</button>
      <button @click="deleteItem">delete</button>
    </div>
    <h4 v-for="item in heros" :key="item.id">
      {{item.id}}__{{item.name}}__{{item.skill}}
    </h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heros: [],
      id:'',
      name:'',
      skill:''
    };
  },
  methods: {
    // 获取后台数据
    async getHeros() {
      let res = await this.$axios.get("http://localhost:3000/heros");
      this.heros = res.data;
    },
    // 查看某个人
    async getItem(){
      let res = await this.$axios.get(`http://localhost:3000/heros/${this.id}`)
      console.log(res.data)
      this.id = ''
    },
    // 添加一个人
    async postItem(){
        let res = await this.$axios.post('http://localhost:3000/heros',
        { id:this.id,name:this.name,skill:this.skill })
        console.log(res.data)
        this.getHeros();
        this.id = ''
        this.name = ''
        this.skill = ''
    },
    // 修改一个人
    async putItem(){
      let res = await this.$axios.put(`http://localhost:3000/heros/${this.id}`,
      { name:this.name,skill:this.skill })
      console.log(res.data)
      this.getHeros();
      this.id = ''
      this.name = ''
      this.skill = ''
    },
    // 删除一个人
    async deleteItem(){
      let res = await this.$axios.delete(`http://localhost:3000/heros/${this.id}`)
      console.log(res.data)
      this.getHeros();
      this.id = ''
    }
  },
  created() {
    this.getHeros();
  },
};
</script>

<style>
input,button{
  margin:5px
}
</style>
