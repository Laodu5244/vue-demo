<template>

  <section id="todoapp">
    <header class="header">
      <h1>小黑记事本</h1>
      <input autofocus="autofocus" autocomplete="off" placeholder="请输入" class="new-todo" v-model="value"
        @keyup.enter="add">
    </header>
    <!-- 列表区域 -->
    <div class="main">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="view">
            <span class="index">
              {{ index + 1 }} </span>
            <span>{{ item }} </span>
            <button @click="rem(index)"> 删除</button>
          </div>
        </li>
      </ul>
    </div>
    <footer v-if="list.length">
      <span>共{{ list.length }}个项目</span>
      <button @click="clear">清空</button>
    </footer>
  </section>

</template>

<script>
export default {
  data() {
    return {
      list: ['看书', '弹琴', '打代码'],
      value: ''
    }
  },
  methods: {
    add() {
      if (this.value) {
        this.list.push(this.value)
        this.value = ''
      } else {
        alert('输入点什么吧')
      }
    },
    rem(index) {
      this.list.splice(index, 1)
    },
    clear() {
      this.list = []
    }
  },
}
</script>
