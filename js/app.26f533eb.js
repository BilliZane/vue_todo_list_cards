(function(e){function t(t){for(var r,a,i=t[0],l=t[1],s=t[2],u=0,b=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={app:0},c=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"27dc":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n={class:"header"},c={class:"container"},a=Object(r["e"])("div",{class:"header__title"},"TodoList",-1),i={class:"header__form-radios"},l=Object(r["e"])("div",{class:"header__form-radios-caption"},[Object(r["e"])("span",null,"Priority")],-1),s={class:"header__form-radio",for:"A"},d=Object(r["g"])("A "),u={class:"header__form-radio",for:"B"},b=Object(r["g"])("B "),m={class:"header__form-radio",for:"C"},O=Object(r["g"])("C "),p={class:"header__form-radio",for:"D"},j=Object(r["g"])("D "),_=Object(r["e"])("input",{class:"form-button",type:"submit",value:"Add"},null,-1),f={class:"sort"},v={class:"container"},y={class:"sort__wrap"},g=["disabled"],h=Object(r["f"])(' Sort by number <option name="sort-number" class="sort__item" value="Sort by number" selected disabled> Sort by number </option><option name="sort-number" class="sort__item" value="From first to last"> From first to last </option><option name="sort-number" class="sort__item" value="From last to first"> From last to first </option><option name="sort-number" class="sort__item" value="From A to D"> From A to D </option><option name="sort-number" class="sort__item" value="From D to A"> From D to A </option>',6),S=[h],T={class:"main-content"},w={class:"container"},P={class:"main-content__wrap"},k={class:"main-content__row"},L={class:"main-content__col"},q=Object(r["e"])("div",{class:"main-content__title"},"New Todos",-1),I={class:"new-card__top"},D={class:"new-card__square new-card__id"},F={class:"new-card__square new-card__priority"},J={class:"new-card__title"},N={class:"new-card__subtitle"},A={class:"new-card__button"},C=["onClick"],x={class:"main-content__col"},U=Object(r["e"])("div",{class:"main-content__title"},"Old Todos",-1),V={class:"done-card__top"},B={class:"done-card__square done-card__id"},M={class:"done-card__square done-card__priority"},R={class:"done-card__title"},W={class:"done-card__subtitle"},z={class:"done-card__button done-card__button--repeat"},E=["onClick"],G={class:"done-card__button"},H=["onClick"],K={class:"main-content__row main-content__row--border-top"},Q={class:"main-content__col"},X={class:"summary"},Y=Object(r["e"])("div",{class:"summary__new-todos-title"},"Must to do:",-1),Z={class:"summary__new-todos-count"},$={class:"main-content__col"},ee={class:"summary"},te=Object(r["e"])("div",{class:"summary__done-todos-title"},"Were done:",-1),oe={class:"summary__done-todos-count"};function re(e,t,o,h,re,ne){return Object(r["i"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("header",n,[Object(r["e"])("div",c,[a,Object(r["e"])("form",{action:"#",class:"header__form",onSubmit:t[6]||(t[6]=Object(r["r"])((function(){return h.addTodo&&h.addTodo.apply(h,arguments)}),["prevent"]))},[Object(r["q"])(Object(r["e"])("input",{class:"header__form-item",type:"text",placeholder:"Todo title",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return h.todoTitle=e})},null,512),[[r["p"],h.todoTitle]]),Object(r["q"])(Object(r["e"])("input",{class:"header__form-item",type:"text",placeholder:"Todo subtitle",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.todoSubtitle=e})},null,512),[[r["p"],h.todoSubtitle]]),Object(r["e"])("div",i,[l,Object(r["e"])("label",s,[d,Object(r["q"])(Object(r["e"])("input",{class:"header__form-item",type:"radio",name:"priority",value:"A","onUpdate:modelValue":t[2]||(t[2]=function(e){return h.todoPriority=e}),required:""},null,512),[[r["n"],h.todoPriority]])]),Object(r["e"])("label",u,[b,Object(r["q"])(Object(r["e"])("input",{class:"header__form-item",type:"radio",name:"priority",value:"B","onUpdate:modelValue":t[3]||(t[3]=function(e){return h.todoPriority=e})},null,512),[[r["n"],h.todoPriority]])]),Object(r["e"])("label",m,[O,Object(r["q"])(Object(r["e"])("input",{class:"header__form-item",type:"radio",name:"priority",value:"C","onUpdate:modelValue":t[4]||(t[4]=function(e){return h.todoPriority=e})},null,512),[[r["n"],h.todoPriority]])]),Object(r["e"])("label",p,[j,Object(r["q"])(Object(r["e"])("input",{class:"header__form-item",type:"radio",name:"priority",value:"D","onUpdate:modelValue":t[5]||(t[5]=function(e){return h.todoPriority=e})},null,512),[[r["n"],h.todoPriority]])])]),_],32)])]),Object(r["e"])("div",f,[Object(r["e"])("div",v,[Object(r["e"])("div",y,[Object(r["q"])(Object(r["e"])("select",{name:"sort__select",class:"sort__items",disabled:!(h.newTodos.length>1),"onUpdate:modelValue":t[7]||(t[7]=function(e){return h.sortBy=e})},S,8,g),[[r["o"],h.sortBy]])])])]),Object(r["e"])("main",T,[Object(r["e"])("div",w,[Object(r["e"])("div",P,[Object(r["e"])("div",k,[Object(r["e"])("div",L,[q,(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(h.sortedTodos,(function(e,t){return Object(r["i"])(),Object(r["d"])("div",{class:"new-card",key:e.id},[Object(r["e"])("div",I,[Object(r["e"])("div",D,[Object(r["e"])("span",null,Object(r["m"])(e.id+1),1)]),Object(r["e"])("div",F,[Object(r["e"])("span",null,Object(r["m"])(e.priority),1)])]),Object(r["e"])("div",J,Object(r["m"])(e.title),1),Object(r["e"])("div",N,Object(r["m"])(e.subtitle),1),Object(r["e"])("div",A,[Object(r["e"])("span",{onClick:function(e){return h.todoDone(t)}},"Done",8,C)])])})),128))]),Object(r["e"])("div",x,[U,(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(h.oldTodos,(function(e,t){return Object(r["i"])(),Object(r["d"])("div",{class:"done-card",key:e.id},[Object(r["e"])("div",V,[Object(r["e"])("div",B,[Object(r["e"])("span",null,Object(r["m"])(e.id+1),1)]),Object(r["e"])("div",M,[Object(r["e"])("span",null,Object(r["m"])(e.priority),1)])]),Object(r["e"])("div",R,Object(r["m"])(e.title),1),Object(r["e"])("div",W,Object(r["m"])(e.subtitle),1),Object(r["e"])("div",z,[Object(r["e"])("span",{onClick:function(e){return h.repeatTodo(t)}},"Repeat",8,E)]),Object(r["e"])("div",G,[Object(r["e"])("span",{onClick:function(e){return h.deleteTodo(t)}},"Delete",8,H)])])})),128))])]),Object(r["e"])("div",K,[Object(r["e"])("div",Q,[Object(r["e"])("div",X,[Y,Object(r["e"])("span",Z,Object(r["m"])(h.newTodos.length),1)])]),Object(r["e"])("div",$,[Object(r["e"])("div",ee,[te,Object(r["e"])("span",oe,Object(r["m"])(h.oldTodos.length),1)])])])])])])],64)}o("e9c4"),o("d81d"),o("a434"),o("4e82");var ne={name:"App",setup:function(){Object(r["h"])((function(){l()}));var e=Object(r["k"])(0),t=Object(r["k"])(""),o=Object(r["k"])(""),n=Object(r["k"])(""),c=Object(r["k"])("Sort by number"),a=Object(r["j"])([]),i=Object(r["j"])([]),l=function(){localStorage.getItem("newTodosLocal")?JSON.parse(localStorage.getItem("newTodosLocal")).map((function(e){a.unshift(e)})):JSON.stringify(localStorage.setItem("newTodosLocal",[])),localStorage.getItem("oldTodosLocal")?JSON.parse(localStorage.getItem("oldTodosLocal")).map((function(e){i.unshift(e)})):JSON.stringify(localStorage.setItem("oldTodosLocal",[]))},s=function(){a.unshift({id:e.value+a.length+i.length,title:t.value,subtitle:o.value,priority:n.value}),t.value="",o.value="",n.value="",localStorage.setItem("newTodosLocal",JSON.stringify(a))},d=function(e){i.unshift(a[e]),a.splice(e,1),localStorage.setItem("newTodosLocal",JSON.stringify(a)),localStorage.setItem("oldTodosLocal",JSON.stringify(i))},u=function(e){a.unshift(i[e]),i.splice(e,1),localStorage.setItem("newTodosLocal",JSON.stringify(a)),localStorage.setItem("oldTodosLocal",JSON.stringify(i))},b=function(e){i.splice(e,1),localStorage.setItem("newTodosLocal",JSON.stringify(a)),localStorage.setItem("oldTodosLocal",JSON.stringify(i))},m=Object(r["b"])((function(){return a.length<2&&(c.value="Sort by number"),"Sort by number"===c.value?a.sort((function(e,t){return t.id-e.id})):"From first to last"===c.value?a.sort((function(e,t){return e.id-t.id})):"From last to first"===c.value?a.sort((function(e,t){return t.id-e.id})):"From A to D"===c.value?a.sort((function(e,t){return e.priority.localeCompare(t.priority)})):"From D to A"===c.value?a.sort((function(e,t){return t.priority.localeCompare(e.priority)})):a}));return{itemId:e,todoTitle:t,todoSubtitle:o,todoPriority:n,sortBy:c,newTodos:a,oldTodos:i,loadTodosFromLS:l,addTodo:s,todoDone:d,repeatTodo:u,deleteTodo:b,sortedTodos:m}}},ce=o("d959"),ae=o.n(ce);const ie=ae()(ne,[["render",re]]);var le=ie;o("27dc");Object(r["c"])(le).mount("#app")}});
//# sourceMappingURL=app.26f533eb.js.map