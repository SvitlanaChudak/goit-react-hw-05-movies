"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,r,t){t.r(r),t.d(r,{default:function(){return m}});var e,a,u=t(5861),c=t(9439),s=t(7757),o=t.n(s),i=t(409),p=t(7689),f=t(2791),d=t(168),x=t(6444),l=x.ZP.div(e||(e=(0,d.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #78BBF5;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n"]))),v=x.ZP.ul(a||(a=(0,d.Z)(["\nlist-style: none;\n"]))),h=t(184),m=function(){var n=(0,p.UO)("movieId").movieId,r=(0,f.useState)([]),t=(0,c.Z)(r,2),e=t[0],a=t[1];return(0,f.useEffect)((function(){var r=function(){var r=(0,u.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.tx)(n);case 3:t=r.sent,a(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("Error");case 10:case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]),(0,h.jsx)(l,{children:0!==e.length?(0,h.jsx)(v,{children:e.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",t]}),(0,h.jsx)("p",{children:e})]},r)}))}):(0,h.jsx)("p",{children:"We don`t have any reviews for this movie."})})}},409:function(n,r,t){t.d(r,{Hg:function(){return s},TP:function(){return i},tx:function(){return f},z1:function(){return o},zv:function(){return p}});var e=t(5861),a=t(7757),u=t.n(a),c=t(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"089af85f0d558478de1e10d80ce20497"};var s=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?");case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"?"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/credits?"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/reviews?"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.72bc473b.chunk.js.map