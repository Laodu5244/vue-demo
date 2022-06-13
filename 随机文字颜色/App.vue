<template>
  <div class="box">
    <Dog />
    <Dog />
    <Dog />
    <Dog />
    <Dog />
    <Dog />
  </div>
</template>

<script>
import Dog from "./components/Dog.vue";
export default {
  components: { Dog },
};
</script>
<style>
.box {
  display: flex;
  flex-wrap: wrap;
}
</style>

