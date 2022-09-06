<template>
  <div class="hesuan">
    <img src="@/assets/images/download.jpg">
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer'
export default {
  components: { Footer },
}
</script>

<style scoped>
.hesuan{
  width:100%;
  height:100%;
  position: relative;
  overflow: hidden;
}
img{
  width:100%;
  height:105%;
}
</style>
