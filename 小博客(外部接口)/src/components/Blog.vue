<template>
  <div class="itembox">
    <div class="top">
      <h2>{{ item.title | snippet }}</h2>
      <div class="time">{{ theDate(item.posttime) }}</div>
    </div>
    <div class="content">
      {{ item.content | snippet2 }}
    </div>
    <div class="info">
      <div class="list">
        所属分类:
        <span>{{ item.classify }}</span>
      </div>
      <div class="author">
        作者:
        <span>{{ item.author }}</span>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import common from "../assets/js/common";
export default {
  props: { item: Object },
  filters: {
    snippet(val) {
      if (val.length > 44) {
        return val.slice(0, 44) + ". . .";
      } else {
        return val;
      }
    },
    snippet2(val) {
      if (val.length > 100) {
        return val.slice(0, 100) + ". . .";
      } else {
        return val;
      }
    },
  },
  methods: {
    theDate(time) {
      return common.getDate(time);
    },
  },
};
</script>

<style lang="less" scoped>
.itembox {
  margin-bottom: 10px;
  .top {
    margin: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 21px;
      color: orange;
      word-wrap: break-word;
      overflow: hidden;
    }
    .time {
      font-size: 14px;
    }
  }
  .content {
    padding: 10px;
    background-color: #e5e5e5;
    font-size: 14px;
    margin: 5px 0;
    min-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin: 0 8px 10px;
    font-size: 14px;
  }
}
</style>
