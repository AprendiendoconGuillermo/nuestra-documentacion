(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{428:function(t,n,e){"use strict";e.r(n);var i=e(368),s=e.n(i),c={data:function(){return{counter:0}},methods:{di:function(t){return alert(t),s.a.post("http://10.10.90.55:9090/api-knowledge/module/insertModule",{idUser:1,description:"description",icon:"icon",name:"name",status:"A"})}}},o=e(32),a=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[e("span",{staticStyle:{"font-size":"25px"}},[t._v("  "+t._s(t.counter)+" ")]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(n){t.counter+=1,t.di("que")}}},[t._v("Like 👍")])])}),[],!1,null,null,null);n.default=a.exports}}]);