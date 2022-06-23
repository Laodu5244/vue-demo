<template>
  <div class="list">
    <Headline />
    <Little />
    <Fire />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Headline from "@/components/Home/Headline";
import Little from "@/components/Home/Little";
import Fire from "@/components/Home/Fire";
export default {
  components: { Tabbar, Headline, Little, Fire },
  name: "List",
};
</script>

<style>
</style>