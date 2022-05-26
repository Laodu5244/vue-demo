(function(){"use strict";var t={4523:function(t,o,e){e(6992),e(8674),e(9601),e(7727);var n=e(9567),l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-container"},[e("div",{staticClass:"todo-wrap"},[e("header-module",{on:{addTodo:t.addTodo}}),e("list-module",{attrs:{todos:t.todos,checkTodo:t.checkTodo,deleteTodo:t.deleteTodo}}),e("footer-module",{attrs:{todos:t.todos},on:{checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])},i=[],r=(e(1539),e(4747),e(7327),e(8862),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-header"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入你的任务名称,按回车确认"},domProps:{value:t.title},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.add.apply(null,arguments)},input:function(o){o.target.composing||(t.title=o.target.value)}}})])}),c=[],d=(e(3210),e(562)),s={data:function(){return{title:""}},methods:{add:function(){if(!this.title.trim())return alert("输入不能为空");var t={id:(0,d.x0)(),title:this.title,done:!1};this.$emit("addTodo",t),this.title=""}}},a=s,u=e(1001),f=(0,u.Z)(a,r,c,!1,null,"619c7068",null),h=f.exports,p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("ul",{staticClass:"todo-main"},t._l(t.todos,(function(o){return e("item-module",{key:o.id,attrs:{todo:o,checkTodo:t.checkTodo,deleteTodo:t.deleteTodo}})})),1)])},v=[],m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("li",[e("label",[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(o){return t.handleCheck(t.todo.id)}}}),e("span",[t._v(t._s(t.todo.title))])]),e("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.deleteId(t.todo.id)}}},[t._v("删除")])])},T=[],k={props:["todo","checkTodo","deleteTodo"],methods:{handleCheck:function(t){this.checkTodo(t)},deleteId:function(t){confirm("确定删除吗?")&&this.deleteTodo(t)}}},b=k,A=(0,u.Z)(b,m,T,!1,null,"4a07b05d",null),_=A.exports,g={components:{ItemModule:_},props:["todos","checkTodo","deleteTodo"]},y=g,x=(0,u.Z)(y,p,v,!1,null,"33ef59eb",null),w=x.exports,O=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(o){var e=t.isAll,n=o.target,l=!!n.checked;if(Array.isArray(e)){var i=null,r=t._i(e,i);n.checked?r<0&&(t.isAll=e.concat([i])):r>-1&&(t.isAll=e.slice(0,r).concat(e.slice(r+1)))}else t.isAll=l}}})]),e("span",[e("span",[t._v("已完成 "+t._s(t.doneTotal))]),t._v(" / 全部 "+t._s(t.total)+" ")]),e("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},C=[],E={props:["todos"],computed:{total:function(){return this.todos.length},doneTotal:function(){return this.todos.reduce((function(t,o){return t+(o.done?1:0)}),0)},isAll:{get:function(){return this.doneTotal===this.total&&this.total>0},set:function(t){this.$emit("checkAllTodo",t)}}},methods:{clearAll:function(){this.$emit("clearAllTodo")}}},$=E,Z=(0,u.Z)($,O,C,!1,null,"75138a9c",null),j=Z.exports,I={components:{HeaderModule:h,ListModule:w,FooterModule:j},data:function(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo:function(t){this.todos.unshift(t)},checkTodo:function(t){this.todos.forEach((function(o){o.id===t&&(o.done=!o.done)}))},deleteTodo:function(t){this.todos=this.todos.filter((function(o){return o.id!==t}))},checkAllTodo:function(t){this.todos.forEach((function(o){o.done=t}))},clearAllTodo:function(){this.todos=this.todos.filter((function(t){return!t.done}))}},watch:{todos:{deep:!0,handler:function(t){localStorage.setItem("todos",JSON.stringify(t))}}}},N=I,P=(0,u.Z)(N,l,i,!1,null,null,null),M=P.exports;n.Z.config.productionTip=!1,new n.Z({el:"#app",render:function(t){return t(M)}})}},o={};function e(n){var l=o[n];if(void 0!==l)return l.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,l,i){if(!n){var r=1/0;for(a=0;a<t.length;a++){n=t[a][0],l=t[a][1],i=t[a][2];for(var c=!0,d=0;d<n.length;d++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[d])}))?n.splice(d--,1):(c=!1,i<r&&(r=i));if(c){t.splice(a--,1);var s=l();void 0!==s&&(o=s)}}return o}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[n,l,i]}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var l,i,r=n[0],c=n[1],d=n[2],s=0;if(r.some((function(o){return 0!==t[o]}))){for(l in c)e.o(c,l)&&(e.m[l]=c[l]);if(d)var a=d(e)}for(o&&o(n);s<r.length;s++)i=r[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(a)},n=self["webpackChunkvue2_cli"]=self["webpackChunkvue2_cli"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4523)}));n=e.O(n)})();
//# sourceMappingURL=app-legacy.d8bf03ab.js.map