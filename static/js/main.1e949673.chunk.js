(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(9),r=n.n(a),i=n(17),o=n(16),j={workRates:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_WORKRATE":return Object.assign({},e,{donate:e.workRates});case"UPDATE_MESSAGE":return Object.assign({},e,{message:t.message});default:return e}},d=(n(28),n(29),n(5)),u=n(13),h=n(15),b=n(1);function m(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){fetch("https://my-json-server.typicode.com/habilit/income-payment/work-rates").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);return Object(b.jsx)(u.a,{as:"ol",numbered:!0,children:(console.log("workRates ",n),0===n.length?Object(b.jsx)("div",{children:"No Data"}):n.map((function(e,t){return Object(b.jsx)(u.a.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:Object(b.jsxs)("div",{className:"ms-2 me-auto",children:[Object(b.jsx)("div",{className:"fw-bold",children:e.work_name}),e.rate,Object(b.jsx)(h.a,{variant:"primary",pill:!0,children:"14"})]})},t)})))})}n(32);var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:"This is Tina"}),Object(b.jsx)(m,{},"work-rate")]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},p=Object(i.a)(l);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o.a,{store:p,children:Object(b.jsx)(f,{})})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.1e949673.chunk.js.map