<template>
  <div class="box">
    <Dog
      v-for="(obj, index) in dogArr"
      :key="index"
      :dogObj="obj"
      @dog="dogNameFn"
    />
    <div>
      <ul>
        <li v-for="(str, index) in dogList" :key="index">{{ str }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dog from "./components/Dog.vue";
export default {
  components: { Dog },
  data() {
    return {
      dogList: [],
      dogArr: [
        {
          dogImgUrl:
            "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "萨摩耶",
        },
      ],
    };
  },
  methods: {
    dogNameFn(dog) {
      this.dogList.push(dog);
    },
  },
};
</script>

<style>
.box {
  display: flex;
  flex-wrap: wrap;
}
</style>

