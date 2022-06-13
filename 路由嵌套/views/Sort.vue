<template>
  <div>
    <p>分类(二级路由)</p>
    <div>
      <router-link to="/sort/music">音乐 </router-link>
      <router-link to="/sort/photo">图片 </router-link>
      <router-link to="/sort/video">视频 </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
