import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    personList:[],
    person:{id:'',name:'',skill:''}
  },
  mutations:{
    getData(state,list){
      state.personList = list
    },
    getItem(state){
      if(state.person.id == '' ){
        alert('输入不能为空')
      }else{
        axios.get(`http://localhost:3000/personList/${state.person.id}`)
        .then(res=>{
          console.log('查看成功',res.data)
        }).catch(()=>{
          alert('查看失败,请输入正确的序号')
        })
        state.person.id = ''
      }
    },
    postItem(state){
      if(state.person.id == '' ||
      state.person.name == '' ||
      state.person.skill == '' ){
        alert('输入不能为空')
      }else{
        axios.post('http://localhost:3000/personList',{
          id:state.person.id,
          name:state.person.name,
          skill:state.person.skill
        }).then(res=>{
          console.log('添加成功',res.data)
        }).catch(()=>{
          alert('添加失败,序号已经被占用')
        })
        state.person.id = ''
        state.person.name = ''
        state.person.skill = ''
      }
    },
    deleteItem(state){
      if(state.person.id == '' ){
        alert('输入不能为空')
      }else{
        axios.delete(`http://localhost:3000/personList/${state.person.id}`)
        .then(res=>{
          console.log('删除成功',res.data)
        }).catch(()=>{
          alert('删除失败,请输入正确的序号')
        })
        state.person.id = ''
      }
    },
    putItem(state){
      if(state.person.id == '' ||
      state.person.name == '' ||
      state.person.skill == '' ){
        alert('输入不能为空')
      }else{
        axios.put(`http://localhost:3000/personList/${state.person.id}`,{
          name:state.person.name,
          skill:state.person.skill
        }).then(res=>{
          console.log('修改成功',res.data)
        }).catch(()=>{
          alert('修改失败,请输入正确的序号')
        })
        state.person.id = ''
        state.person.name = ''
        state.person.skill = ''
      }
    }
  },
  actions:{
    $getData(context){
      axios.get('http://localhost:3000/personList').then(res=>{
        context.commit('getData',res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
})
