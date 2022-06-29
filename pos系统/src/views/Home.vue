<template>
  <div class="home">
    <left-nav />
    <Pos />
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Pos from "@/components/Pos.vue";
export default {
  components: {
    LeftNav,
    Pos,
  },
};
</script>

<style scoped>
.home {
  overflow: hidden;
}
</style>