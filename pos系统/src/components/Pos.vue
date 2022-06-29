<template>
  <div class="pos">
    <el-row>
      <el-col :span="10" class="order" id="order">
        <!-- 点餐 -->
        <table border="1">
          <thead>
            <tr>
              <th>商品名称</th>
              <th>金额</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in tabList" :key="index">
            <tr>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <button class="chan" @click="add(item)">+</button>
                {{ item.count }}
                <button class="chan" @click="sub(item)">-</button>
              </td>
              <td>
                <button @click="del(index)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="sum">
          <h3>总价: {{ sumPrice }}</h3>
        </div>
        <div class="btns">
          <el-button type="danger" @click="clearAll">清空</el-button>
          <el-button type="success" @click="all">结账</el-button>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="often">
          <div class="title">常用商品</div>
          <div class="often-list">
            <ul>
              <li
                v-for="(item, index) in oftenList"
                :key="index"
                @click="addOrderList(item, index)"
              >
                <span>{{ item.name }}</span>
                <span class="o-price">
                  ￥<b>{{ item.price }} </b>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="type">
          <el-tabs>
            <!-- 主食 -->
            <el-tab-pane label="主食">
              <ul class="detail">
                <li
                  v-for="item in stapleFood"
                  :key="item.id"
                  @click="addOrderList(item)"
                >
                  <span>
                    <img :src="item.url" />
                  </span>
                  <span>{{ item.name }}</span>
                  <span class="o-price">
                    ￥<b>{{ item.price }} </b>
                  </span>
                </li>
              </ul>
            </el-tab-pane>
            <!-- 小吃 -->
            <el-tab-pane label="小吃">
              <ul class="detail">
                <li
                  v-for="item in snacks"
                  :key="item.id"
                  @click="addOrderList(item)"
                >
                  <span>
                    <img :src="item.url" />
                  </span>
                  <span>{{ item.name }}</span>
                  <span class="o-price">
                    ￥<b>{{ item.price }} </b>
                  </span>
                </li>
              </ul>
            </el-tab-pane>
            <!-- 饮料 -->
            <el-tab-pane label="饮料">
              <ul class="detail">
                <li
                  v-for="item in drinks"
                  :key="item.id"
                  @click="addOrderList(item)"
                >
                  <span>
                    <img :src="item.url" />
                  </span>
                  <span>{{ item.name }}</span>
                  <span class="o-price">
                    ￥<b>{{ item.price }} </b>
                  </span>
                </li>
              </ul>
            </el-tab-pane>
            <!-- 套餐 -->
            <el-tab-pane label="套餐">
              <ul class="detail">
                <li
                  v-for="item in combos"
                  :key="item.id"
                  @click="addOrderList(item)"
                >
                  <span>
                    <img :src="item.url" />
                  </span>
                  <span>{{ item.name }}</span>
                  <span class="o-price">
                    ￥<b>{{ item.price }} </b>
                  </span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pos",
  data() {
    return {
      tabList: [],
      oftenList: [],
      stapleFood: [],
      snacks: [],
      drinks: [],
      combos: [],
    };
  },
  created() {
    axios
      .get("/api/pos")
      .then((res) => {
        this.oftenList = res.data.oftenList;
        this.stapleFood = res.data.stapleFood;
        this.snacks = res.data.snacks;
        this.drinks = res.data.drinks;
        this.combos = res.data.combos;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    let orderHeight = document.body.clientHeight;
    document.getElementById("order").style.height = orderHeight - 1 + "px";
  },
  computed: {
    sumPrice() {
      let sum = 0;
      this.tabList.forEach((item) => {
        sum += item.price * item.count;
      });
      return sum;
    },
  },
  methods: {
    addOrderList(item) {
      let newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        count: item.count,
      };
      this.tabList.unshift(newItem);
    },
    add(item) {
      item.count++;
    },
    sub(item) {
      item.count--;
      if (item.count < 1) {
        item.count = 1;
      }
    },
    del(index) {
      this.tabList.splice(index, 1);
    },
    clearAll() {
      this.tabList = [];
    },
    all() {
      alert(`一共${this.sumPrice}元,欢迎下次光临!`);
      this.tabList = [];
    },
  },
};
</script>

<style  scoped>
.pos {
  margin-left: 5%;
  overflow: hidden;
}
.order {
  border-right: 1px solid #c0ccda;
}
.el-col {
  padding: 10px;
}
.el-tabs {
  margin-top: 10px;
  overflow: hidden;
}
.el-button {
  font-size: 12px;
}
.btns {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.title {
  height: 30px;
  border-bottom: 1px solid #d3dce6;
  padding-top: 15px;
  padding-bottom: 5px;
  text-align: left;
  font-weight: bold;
  color: orange;
}
.often-list ul {
  display: flex;
  flex-wrap: wrap;
}
.often-list li {
  border: 1px solid #d3dce6;
  padding: 5px;
  margin: 5px;
  background-color: #e5e8e6;
  cursor: pointer;
}
.o-price {
  color: red;
}
.detail {
  display: flex;
  flex-wrap: wrap;
}
.detail li {
  border: 1px solid #d3dce6;
  margin: 5px;
  background-color: #e5e8e6;
  text-align: center;
  cursor: pointer;
}
.detail li img {
  display: block;
  width: 120px;
}
.sum {
  color: orange;
}
.el-table-column .el-button {
  margin: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table td {
  text-align: center;
}
.chan {
  width: 20px;
}
</style>