<template>
  <div class="little">
    <div class="space"></div>
    <Card></Card>
    <div class="img">
      <img src="@/assets/images/l1.png" />
      <img src="@/assets/images/l2.png" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Home/common/Card";
export default {
  components: { Card },
};
</script>

<style scoped>
.space {
  width: 100%;
  height: 0.36rem;
  background-color: #f5f5f5;
}
.img {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3rem;
}
.img img {
  height: 2.7rem;
}
</style>