(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{51:function(e,t,r){},55:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(19),s=r.n(a),o=r(15),i=r(13),u=r(39),l={workRates:[],summary:0},j="GET_WORKRATES",d=function(){return{type:j}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(console.log("workRateReducer"),console.log(t),t.type){case"SET_WORKRATES":var r=t.workRates;return Object.assign({},e,{workRates:r});case"UPDATE_MESSAGE":return Object.assign({},e,{message:t.message});case"SET_SUM_WORKRATE":return Object.assign({},e,{summary:e.summary+t.price});default:return e}},m=(r(51),r(52),r(81)),O=r(76),p=r(77),h=r(3);function f(){var e=Object(i.b)(d());Object(n.useEffect)((function(){e(d())}),[e]);var t=Object(i.c)((function(e){return e.workRate.workRates}));Object(i.c)((function(e){return e.workRate.summary}));console.log("workRates",t);return Object(h.jsx)(m.a,{as:"ol",numbered:!0,children:(console.log("workRates ",t),0===t.length?Object(h.jsx)("div",{children:"No Data"}):t.map((function(t,r){return Object(h.jsx)(m.a.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:Object(h.jsxs)("div",{className:"ms-2 me-auto",children:[Object(h.jsx)("div",{className:"fw-bold",children:t.work_name}),t.rate,Object(h.jsx)(O.a,{variant:"primary",pill:!0,children:"14"}),Object(h.jsx)(p.a,{onClick:function(){return r=t.rate,console.log("price",r),void e(function(e){return{type:"SET_SUM_WORKRATE",price:e}}(r));var r},variant:"outline-primary",children:"ADD"})]})},r)})))})}function v(){var e=Object(i.c)((function(e){return e.workRate.summary}));return console.log("summary",e),Object(h.jsxs)("div",{as:"ol",numbered:!0,children:["Summary : ",e]})}var x=r(78),w=r(79),R=r(80);r(55);var g=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(v,{}),Object(h.jsx)(x.a,{children:Object(h.jsx)(w.a,{children:Object(h.jsx)(R.a,{children:Object(h.jsx)(f,{},"work-rate")})})})]})})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,82)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},y=r(14),E=r.n(y),S=r(16),T=r(38),A=r.n(T);function _(){return A.a.request({method:"GET",url:"https://my-json-server.typicode.com/habilit/income-payment/work-rates"})}var N=E.a.mark(D);function D(e){var t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(S.a)(_);case 3:return t=e.sent,r=t.data,e.next=7,Object(S.b)({type:"SET_WORKRATES",workRates:r});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),N,null,[[0,9]])}var K=E.a.mark(W);function W(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)(j,D);case 2:case"end":return e.stop()}}),K)}var C=Object(o.b)({workRate:b}),F=Object(u.a)(),M=[F],G=Object(o.d)(C,{},o.a.apply(void 0,M));F.run(W),s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(i.a,{store:G,children:Object(h.jsx)(g,{})})}),document.getElementById("root")),k()}},[[75,1,2]]]);
//# sourceMappingURL=main.fc33afe4.chunk.js.map