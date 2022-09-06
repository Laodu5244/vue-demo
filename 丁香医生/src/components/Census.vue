<template>
  <div class="census">
    <div class="content">
      <h2>截止{{covData.modifyTime | time}}最新数据统计</h2>
      <ul>
        <li>
          <span>较昨日<b>{{covData.currentConfirmedIncr | num}}</b></span>
          <b>{{covData.currentConfirmedCount}}</b>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>较昨日<b>{{covData.suspectedIncr | num}}</b></span>
          <b>{{covData.suspectedCount}}</b>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>较昨日<b>{{covData.seriousIncr | num}}</b></span>
          <b>{{covData.seriousCount}}</b>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>较昨日<b>{{covData.confirmedIncr | num}}</b></span>
          <b>{{covData.confirmedCount}}</b>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>较昨日<b>{{covData.deadIncr | num}}</b></span>
          <b>{{covData.deadCount}}</b>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>较昨日<b>{{covData.curedIncr | num}}</b></span>
          <b>{{covData.curedCount}}</b>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{covData:Object},
  filters:{
    num(val){
      val = val>0?'+'+val:val;
      return val
    },
    // 处理时间格式
    time(num){
      let date = new Date(num)
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.census{
  margin-top: 0.2rem;
  background-color: #f1f1f1;
  padding-top:0.3rem;
}
.content{
  background-color: #fff;
  padding:0.2rem;
}
.content h2{
  color:orangered;
  font-size: 0.4rem;
}
ul{
  box-shadow: 0 0 5px 1px rgba(0, 0, 0,0.3);
  border-radius:0.3rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
}
.content li{
  display: flex;
  flex-direction: column;
  margin: 0.24rem;
}
.content li b{
  font-weight:900;
}
.content li span{
  margin: 0 0.1rem 0.2rem 0;
}
.content li strong{
  margin: 0.2rem 0;
}
.content li:nth-child(1) b{
  color:rgb(185, 97, 8);
}
.content li:nth-child(2) b{
  color:rgb(22, 160, 22);
}
.content li:nth-child(3) b{
  color:rgb(24, 50, 180);
}
.content li:nth-child(4) b{
  color:rgb(220, 28, 162);
}
.content li:nth-child(5) b{
  color:rgb(209, 16, 35);
}
.content li:nth-child(6) b{
  color:rgb(231, 209, 15);
}
</style>
