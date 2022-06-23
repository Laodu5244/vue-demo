<template>
  <div>
    <Like />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Like from "@/components/Home/Like";
export default {
  components: { Tabbar, Like },
};
</script>

<style>
</style>