<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="isAll" />
            <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="List"
          v-for="(obj, i) in gList"
          :key="i"
          :goodsObj="obj"
          :ind="i"
          @dele="dele"
        ></tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ allPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import List from "@/components/List";
export default {
  components: { List },
  data() {
    return {
      gList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      get() {
        if (this.gList.length === 0) {
          return false;
        }
        return this.gList.every((obj) => {
          return obj.checked === true;
        });
      },
      set(val) {
        this.gList.forEach((obj) => {
          obj.checked = val;
        });
      },
    },
    allPrice() {
      return this.gList.reduce((sum, obj) => {
        if (obj.checked === true) {
          sum += obj.price * obj.num;
        }
        return sum;
      }, 0);
    },
  },
  methods: {
    dele(i) {
      this.gList.splice(i, 1);
    },
  },
};
</script>

