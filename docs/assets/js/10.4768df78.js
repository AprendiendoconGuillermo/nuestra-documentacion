(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{425:function(t,n,e){"use strict";e.r(n);var i=e(400),s=e.n(i),c={data:function(){return{info:null}},mounted:function(){var t=this;s.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(n){return t.info=n.data.bpi})).catch((function(t){console.log(t)}))}},o=e(31),r=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.info,(function(n,i){return e("tr",{key:i},[e("td",[t._v(t._s(n.code))]),t._v(" "),e("td",[t._v(t._s(n.symbol))]),t._v(" "),e("td",[t._v(t._s(n.rate))])])})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("code")]),this._v(" "),n("th",[this._v("symbol")]),this._v(" "),n("th",[this._v("rate")])])])}],!1,null,null,null);n.default=r.exports}}]);