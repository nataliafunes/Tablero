(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[1],{12:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return i}));var n=r(7),a=function(){return{type:n.b}},c=function(e){return{type:n.d,payload:e}},o=function(e){return{type:n.a,payload:e}},i=function(e,t,r){return{type:n.c,payload:{source:e,destination:t,draggableId:r}}}},26:function(e){e.exports=JSON.parse('{"a":[{"text":"Componente Impresion","estado":"Sin Realizar","order":"0"},{"text":"Componente Cliente","estado":"Sin Realizar","order":"1"},{"text":"Error Testeo","estado":"Sin Realizar","order":"2"},{"text":"Pasaje a Test","estado":"En Proceso","order":"3"},{"text":"Mail de usuario","estado":"En Proceso","order":"4"},{"text":"Abm Cuentas","estado":"Realizado","order":"5"},{"text":"Error de Produccion","estado":"Realizado","order":"6"}]}')},33:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(14),c=r.n(a),o=(r(33),r(22)),i=r(6),u=r(27),d=r(21),s=r(8),p=r(24),l=r(17),b=r(7),f={data:[],dataFiltered:[],dataEstados:[]},j=function(e){var t={};return e.map((function(e){return{descripcion:e.estado}})).filter((function(e){return!t[e.descripcion]&&(t[e.descripcion]=!0)}))},O=function(e,t,r,n){var a=Object(l.a)(n);return function(e,t,r){var n=e.text;t.map((function(e){e.text===n&&(e.estado=r)}))}(n.filter((function(e){return e.text===r}))[0],a,t.droppableId),function(e,t,r){var n=Object(l.a)(e),a=n.splice(t,1),c=Object(p.a)(a,1)[0];n.splice(r,0,c)}(a,e.index,t.index),a},x=Object(i.combineReducers)({admTareasReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.d:return Object(s.a)(Object(s.a)({},e),{},{data:t.payload,dataFiltered:t.payload,dataEstados:j(t.payload)});case b.a:return Object(s.a)(Object(s.a)({},e),{},{dataFiltered:[].concat(Object(l.a)(e.dataFiltered),[t.payload])});case b.c:var r=t.payload,n=r.source,a=r.destination,c=r.draggableId,o=e.dataFiltered;return Object(s.a)(Object(s.a)({},e),{},{dataFiltered:O(n,a,c,o)});default:return Object(s.a)({},e)}}}),v=r(5),m=r.n(v),y=r(10),h=r(25),w=r(26),S=r(12),k=m.a.mark(g),E=m.a.mark(z),R=m.a.mark(F),T=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.a);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(){var e,t;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(y.b)(T);case 2:if(!(e=r.sent)){r.next=9;break}return t=e.map((function(e){return Object(s.a)({},e)})),r.next=7,Object(y.d)(Object(S.d)(t));case 7:r.next=11;break;case 9:return r.next=11,Object(y.d)(Object(S.d)([]));case 11:case"end":return r.stop()}}),k)}function z(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(b.b,g);case 2:case"end":return e.stop()}}),E)}function F(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Object(y.c)(z)]);case 2:case"end":return e.stop()}}),R)}var A=m.a.mark(D);function D(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([F()]);case 2:case"end":return e.stop()}}),A)}var I=Object(u.a)(),P=[I];var C=r(11),J=Object(n.lazy)((function(){return Promise.all([r.e(4),r.e(0)]).then(r.bind(null,73))}));c.a.render(Object(C.jsx)(o.a,{store:function(e){var t=Object(i.createStore)(x,e,Object(d.composeWithDevTools)()?Object(i.compose)(i.applyMiddleware.apply(void 0,P),Object(d.composeWithDevTools)()):Object(i.compose)(i.applyMiddleware.apply(void 0,P)));return I.run(D),t}(),children:Object(C.jsx)(n.Suspense,{fallback:Object(C.jsx)("div",{className:"loading"}),children:Object(C.jsx)(J,{})})}),document.getElementById("root"))},7:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return o}));r(12);var n="GET_TASKS",a="SET_TASKS",c="ADD_TASKS",o="REORDER"}},[[39,2,3]]]);
//# sourceMappingURL=main.a001799b.chunk.js.map