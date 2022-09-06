// 把echarts开发成vue插件
import echarts from "echarts";
// 引入中国地图
import 'echarts/map/js/china'
const install = function (Vue, options) {
  Object.defineProperties(Vue.prototype, {
    $mychart: {
      get() {
        return {
          // 中国地图
          chinaMap(id){
            var myChart = echarts.init(document.getElementById(id));
            var option = {
              tooltip:{
                triggerOn:'click',
                enterable:true,
                formatter(item){
                  return item.name
                }
              },
              visualMap:[{
                type:'piecewise',
                bottom:0,
                pieces:[
                  {
                    min:0,
                    max:100,
                    color:'#FFFFFF'
                  },
                  {
                    min:100,
                    max:1000,
                    color:'#FDFDCF'
                  },
                  {
                    min:1000,
                    max:5000,
                    color:'#FE9E83'
                  },
                  {
                    min:5000,
                    max:10000,
                    color:'darkorange'
                  },
                ]
              }],
              series:[{
                name:'省',
                type:'map',
                map:'china',
                roam:false,
                zoom:1.2,
                aspectScale:0.75,
                top:40,
                layoutCenter:['5%','5%'],
                label:{
                  normal:{
                    show:true,
                    textStyle:{
                      fontSize:8
                    }
                  }
                },
                itemStyle:{
                  normal:{
                    areaColor:'rgba(0,255,236,0)',
                    borderColor:'rgba(0,0,0,0.2)',
                  },
                  emphasis:{
                    areaColor:'rgba(255,180,0,0.8)',
                    shadowOffsetX:0,
                    shadowOffsetY:0,
                    shadowBlur:20,
                    borderWidth:0,
                  }
                },
                data:[
                  { name:'内蒙古',value:300},
                  { name:'湖北',value:6000},
                  { name:'新疆',value:800},
                  { name:'河北',value:2000},
                  {name:'黑龙江',value:4000},
                  { name:'广东',value:3000},
                  { name:'四川',value:3000},
                  { name:'浙江',value:300},
                ]
              }]
            }
            myChart.setOption(option);
          }
        }
      }
    }
  })
}
export default install