<template>
  <div id="app">
    <div class="input">
      <input type="number" placeholder="请输入序号" v-model="person.id">
      <input type="text" placeholder="请输入名字" v-model="person.name">
      <input type="text" placeholder="请输入技能" v-model="person.skill">
    </div>
    <div class="btn">
      <button @click="getItem">get</button>
      <button @click="postItem">post</button>
      <button @click="deleteItem">delete</button>
      <button @click="putItem">put</button>
    </div>
    <ul>
      <li v-for="item in personList" :key="item.id">
        序号: {{item.id}}
        江湖人称: {{item.name}}
        拿手绝技: {{item.skill}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  methods:{
    getItem(){
      this.$store.commit('getItem')
    },
    postItem(){
      this.$store.commit('postItem')
    },
    deleteItem(){
      this.$store.commit('deleteItem')
    },
    putItem(){
      this.$store.commit('putItem')
    }
  },
  created(){
    this.$store.dispatch('$getData')
  },
  updated(){
    this.$store.dispatch('$getData')
  },
  computed:{
    personList(){
      return this.$store.state.personList
    },
    person(){
      return this.$store.state.person
    }
  }
}
</script>

<style lang="less">
body{
  background-color: skyblue;
  input,button{
    margin:5px
  }
}
</style>