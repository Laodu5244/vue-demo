<template>
  <div class="cart">
    <Fire />
    <Tea />
    <Like />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Fire from "@/components/Home/Fire";
import Tea from "@/components/Home/Tea";
import Like from "@/components/Home/Like";
export default {
  components: { Tabbar, Fire, Tea, Like },
  name: "Cart",
};
</script>

<style>
</style>