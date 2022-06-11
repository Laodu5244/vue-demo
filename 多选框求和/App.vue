<template>
  <div id="app">
    <div 
      style="display:inline-block"
      v-for="(num,index) in arr"
      :key="index" >
      <input 
        type="checkbox" 
        :value="num" 
        v-model="listArr"/>
      <span>{{num}}</span>
    </div>
    <p>选中的元素的加和: {{allCount}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: [8,13,2,54,43,26,34,5,18,85],
      listArr:[]
    }
  },
  computed:{
    allCount(){
      return this.listArr.reduce((sum,num) => sum += num,0)
    }
  }
};
</script>
