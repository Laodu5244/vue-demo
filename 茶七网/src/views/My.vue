<template>
  <div class="my">
    <Icons />
    <Swiper />
    <Headline />
    <Fire />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Swiper from "@/components/Home/Swiper";
import Icons from "@/components/Home/Icons";
import Headline from "@/components/Home/Headline";
import Fire from "@/components/Home/Fire";
export default {
  components: { Tabbar, Swiper, Icons, Headline, Fire },
  name: "My",
};
</script>

<style>
</style>