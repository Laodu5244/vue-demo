<template>
  <div>
    <div>
      <router-link to="/home">主页 </router-link>
      <router-link to="/news">新闻 </router-link>
      <router-link to="/sort">分类 </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style >
a {
  text-decoration: none;
}
</style>
