(function(){"use strict";var e={3856:function(e,t,o){var n=o(8935),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("header-module",{attrs:{addTodo:e.addTodo}}),o("list-module",{attrs:{todos:e.todos,checkTodo:e.checkTodo,deleteTodo:e.deleteTodo}}),o("footer-module",{attrs:{todos:e.todos,checkAllTodo:e.checkAllTodo,clearAllTodo:e.clearAllTodo}})],1)])},r=[],d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo-header"},[o("input",{attrs:{type:"text",placeholder:"请输入你的任务名称,按回车确认"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add.apply(null,arguments)}}})])},i=[],s=o(562),c={props:["addTodo"],methods:{add(e){if(!e.target.value.trim())return alert("输入不能为空");let t={id:(0,s.x0)(),title:e.target.value,done:!1};this.addTodo(t),e.target.value=""}}},a=c,u=o(1001),h=(0,u.Z)(a,d,i,!1,null,"7aa6e7c1",null),f=h.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ul",{staticClass:"todo-main"},e._l(e.todos,(function(t){return o("item-module",{key:t.id,attrs:{todo:t,checkTodo:e.checkTodo,deleteTodo:e.deleteTodo}})})),1)])},v=[],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:e.todo.done},on:{change:function(t){return e.handleCheck(e.todo.id)}}}),o("span",[e._v(e._s(e.todo.title))])]),o("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.deleteId(e.todo.id)}}},[e._v("删除")])])},k=[],m={props:["todo","checkTodo","deleteTodo"],methods:{handleCheck(e){this.checkTodo(e)},deleteId(e){confirm("确定删除吗?")&&this.deleteTodo(e)}}},b=m,A=(0,u.Z)(b,T,k,!1,null,"4a07b05d",null),_=A.exports,y={components:{ItemModule:_},props:["todos","checkTodo","deleteTodo"]},g=y,x=(0,u.Z)(g,p,v,!1,null,"33ef59eb",null),w=x.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isAll)?e._i(e.isAll,null)>-1:e.isAll},on:{change:function(t){var o=e.isAll,n=t.target,l=!!n.checked;if(Array.isArray(o)){var r=null,d=e._i(o,r);n.checked?d<0&&(e.isAll=o.concat([r])):d>-1&&(e.isAll=o.slice(0,d).concat(o.slice(d+1)))}else e.isAll=l}}})]),o("span",[o("span",[e._v("已完成 "+e._s(e.doneTotal))]),e._v(" / 全部 "+e._s(e.total)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:e.clearAll}},[e._v("清除已完成任务")])])},O=[],E={props:["todos","checkAllTodo","clearAllTodo"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((e,t)=>e+(t.done?1:0)),0)},isAll:{get(){return this.doneTotal===this.total&&this.total>0},set(e){this.checkAllTodo(e)}}},methods:{clearAll(){this.clearAllTodo()}}},Z=E,j=(0,u.Z)(Z,C,O,!1,null,"1b3a1d8d",null),M=j.exports,$={components:{HeaderModule:f,ListModule:w,FooterModule:M},data(){return{todos:[{id:"01",title:"看书",done:!1},{id:"02",title:"弹琴",done:!1},{id:"03",title:"打代码",done:!0}]}},methods:{addTodo(e){this.todos.unshift(e)},checkTodo(e){this.todos.forEach((t=>{t.id===e&&(t.done=!t.done)}))},deleteTodo(e){this.todos=this.todos.filter((t=>t.id!==e))},checkAllTodo(e){this.todos.forEach((t=>{t.done=e}))},clearAllTodo(){this.todos=this.todos.filter((e=>!e.done))}}},P=$,I=(0,u.Z)(P,l,r,!1,null,null,null),F=I.exports;n.Z.config.productionTip=!1,new n.Z({el:"#app",render:e=>e(F)})}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,r){if(!n){var d=1/0;for(a=0;a<e.length;a++){n=e[a][0],l=e[a][1],r=e[a][2];for(var i=!0,s=0;s<n.length;s++)(!1&r||d>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(i=!1,r<d&&(d=r));if(i){e.splice(a--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var a=e.length;a>0&&e[a-1][2]>r;a--)e[a]=e[a-1];e[a]=[n,l,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,d=n[0],i=n[1],s=n[2],c=0;if(d.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(s)var a=s(o)}for(t&&t(n);c<d.length;c++)r=d[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(a)},n=self["webpackChunkvue2_cli"]=self["webpackChunkvue2_cli"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3856)}));n=o.O(n)})();
//# sourceMappingURL=app.7f456ca0.js.map