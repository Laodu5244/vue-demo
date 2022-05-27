(function(){"use strict";var t={8843:function(t,e,o){var i=o(8935),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("header-module",{on:{addTodo:t.addTodo}}),o("list-module",{attrs:{todos:t.todos}}),o("footer-module",{attrs:{todos:t.todos},on:{checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])},r=[],s=o(8937),l=o.n(s),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入您的待办事项,按回车确认"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}})])},a=[],c=o(562),u={data(){return{title:""}},methods:{add(){if(!this.title.trim())return alert("输入不能为空");let t={id:(0,c.x0)(),title:this.title,done:!1};this.$emit("addTodo",t),this.title=""}}},h=u,f=o(1001),p=(0,f.Z)(h,d,a,!1,null,"3864a832",null),v=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"todo-main"},t._l(t.todos,(function(t){return o("item-module",{key:t.id,attrs:{todo:t}})})),1)])},b=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"animate__animated animate__bounce",appear:"","enter-active-class":"animate__backInLeft","leave-active-class":"animate__backOutUp"}},[o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.handleCheck(t.todo.id)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(t._s(t.todo.title))]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"}],ref:"inputTitle",attrs:{type:"text"},domProps:{value:t.todo.title},on:{blur:function(e){return t.blur(t.todo,e)}}})]),o("div",{staticClass:"item-left"},[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],staticClass:"btn btn-edit",on:{click:function(e){return t.edit(t.todo)}}},[t._v(" 编辑 ")]),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteId(t.todo.id)}}},[t._v("删除")])])])])},_=[],k={props:["todo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},deleteId(t){confirm("确定删除吗?")&&l().publish("deleteTodo",t)},edit(t){void 0!==t.isEdit?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){this.$refs.inputTitle.focus()}))},blur(t,e){if(t.isEdit=!1,!e.target.value.trim())return alert("输入不能为空");this.$bus.$emit("updateTodo",t.id,e.target.value)}}},y=k,g=(0,f.Z)(y,T,_,!1,null,"3648679d",null),w=g.exports,A={components:{ItemModule:w},props:["todos"]},$=A,x=(0,f.Z)($,m,b,!1,null,"717f2dde",null),E=x.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(e){var o=t.isAll,i=e.target,n=!!i.checked;if(Array.isArray(o)){var r=null,s=t._i(o,r);i.checked?s<0&&(t.isAll=o.concat([r])):s>-1&&(t.isAll=o.slice(0,s).concat(o.slice(s+1)))}else t.isAll=n}}})]),o("span",[o("span",[t._v("已完成 "+t._s(t.doneTotal))]),t._v(" / 全部 "+t._s(t.total)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},O=[],I={props:["todos"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((t,e)=>t+(e.done?1:0)),0)},isAll:{get(){return this.doneTotal===this.total&&this.total>0},set(t){this.$emit("checkAllTodo",t)}}},methods:{clearAll(){confirm("确定删除所有已完成项目吗?")&&this.$emit("clearAllTodo")}}},N=I,Z=(0,f.Z)(N,C,O,!1,null,"1be658d1",null),j=Z.exports,P={components:{HeaderModule:v,ListModule:E,FooterModule:j},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((e=>{e.id===t&&(e.done=!e.done)}))},deleteTodo(t,e){this.todos=this.todos.filter((t=>t.id!==e))},checkAllTodo(t){this.todos.forEach((e=>{e.done=t}))},updateTodo(t,e){this.todos.forEach((o=>{o.id===t&&(o.title=e)}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("updateTodo",this.updateTodo),this.pubId=l().subscribe("deleteTodo",this.deleteTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("updateTodo"),l().unsubscribe(this.pubId)}},M=P,S=(0,f.Z)(M,n,r,!1,null,null,null),F=S.exports;i.Z.config.productionTip=!1,new i.Z({el:"#app",render:t=>t(F),beforeCreate(){i.Z.prototype.$bus=this}})}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=t,function(){var t=[];o.O=function(e,i,n,r){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],n=t[c][1],r=t[c][2];for(var l=!0,d=0;d<i.length;d++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](i[d])}))?i.splice(d--,1):(l=!1,r<s&&(s=r));if(l){t.splice(c--,1);var a=n();void 0!==a&&(e=a)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,r,s=i[0],l=i[1],d=i[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(d)var c=d(o)}for(e&&e(i);a<s.length;a++)r=s[a],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},i=self["webpackChunkvue2_cli"]=self["webpackChunkvue2_cli"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(8843)}));i=o.O(i)})();
//# sourceMappingURL=app.d8e53dfa.js.map