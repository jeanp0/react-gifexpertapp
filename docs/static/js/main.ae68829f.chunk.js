(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),s=n(2),u=n(9),o=n(0),j=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(u.a)(t))})),i(""))},children:Object(o.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value)}})})},d=n(10),l=n(6),f=n.n(l),p=n(8),b=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,r,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=IkhRRwVVTTHFLyaH08HWpJQ5D6KHSaHM"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){return setTimeout((function(){c({data:t,loading:!1})}),1e3)}))}),[t]),r},h=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=m(e),a=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(o.jsx)(h,Object(d.a)({},t),t.id)}))})]})},x=function(){var t=Object(a.useState)(["Dragon Ball"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(O,{category:t},t)}))})]})};n(17);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ae68829f.chunk.js.map