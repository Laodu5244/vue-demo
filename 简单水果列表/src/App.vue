<template>
  <div id="app">
    <p>
      <router-link to="/">home</router-link> |
      <router-link to="/fruit">fruit</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
