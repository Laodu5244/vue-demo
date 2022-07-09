<template>
  <div id="app">
    <Hello></Hello>
    <List></List>
    <Metal></Metal>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
import List from "./components/List.vue";
import Metal from "./components/Metal.vue";
export default {
  components: {
    Hello,
    List,
    Metal,
  },
};
</script>


