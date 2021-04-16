(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"53fedabd"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"346f":function(t,e,r){"use strict";r("376f")},"376f":function(t,e,r){},"4b51":function(t,e,r){"use strict";r("7484")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],s=(r("034f"),r("2877")),i={},c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,u=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container"},[r("NavBarDiv"),r("HeaderDiv"),r("ProductsDiv"),r("FooterDiv")],1)},p=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("footer",{attrs:{id:"footer"}},[r("div",{staticClass:"mt-2",staticStyle:{background:"white","text-align":"center",margin:"0px",padding:"10px"}},[r("p",{staticStyle:{color:"black"}},[t._v("Copyright (c) "+t._s(t.year)+", Wine Shop.")])])])])},b=[],f={name:"Footer",data:function(){return{year:(new Date).getFullYear()}}},v=f,g=Object(s["a"])(v,m,b,!1,null,"4f954f67",null),_=g.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Wine Shop")]),r("p",{staticStyle:{"margin-top":"-16px"}},[t._v("wineshop.com")])])}],w=r("2f62"),C={name:"Navbar",computed:Object(w["c"])(["cartItems"])},T=C,E=Object(s["a"])(T,h,y,!1,null,"a80ebdf2",null),S=E.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",[r("b-col",{staticClass:"mb-2",attrs:{cols:"12",md:"4",order:"3"}},[r("div",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Open Cart ("+t._s(t.cartItems.length)+")")]),r("span",{staticStyle:{"margin-right":"10px"}}),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],staticClass:"mr-1"},[t._v("Delivery Info")]),r("span",[t._v("TOTAL: KSH"+t._s(t.total))])],1)]),r("b-col",{staticClass:"well mb-2",attrs:{cols:"12",md:"4",order:"2"}},[r("div",{staticClass:"btn-group mr-2",attrs:{role:"group","aria-label":"First group"}},[r("span",[t._v("Show: ")]),r("button",{class:"all"===t.filter_value?"ml-2 btn btn-warning":"ml-2 btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.filterItems("all")}}},[t._v(" All ")]),r("button",{class:"white"===t.filter_value?"ml-2 btn btn-warning":"ml-2 btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.filterItems("white")}}},[t._v(" White ")]),r("button",{class:"red"===t.filter_value?"ml-2 btn btn-warning":"ml-2 btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.filterItems("red")}}},[t._v(" Red ")]),r("button",{class:"sparkling"===t.filter_value?"ml-2 btn btn-warning":"ml-2 btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.filterItems("sparkling")}}},[t._v(" Sparkling ")]),r("button",{class:"vintage"===t.filter_value?"ml-2 btn btn-warning":"ml-2 btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.filterItems("vintage")}}},[t._v(" Vintage ")])])]),r("b-col",{staticClass:"mb-2",attrs:{cols:"12",md:"4",order:"1"}},[r("div",{staticClass:" btn-group mr-2",attrs:{role:"group","aria-label":"First group"}},[r("span",[t._v("Order By: ")]),r("button",{class:"bottle"===t.sort_value?"ml-2 btn btn-warning":"ml-2 btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sortItems("bottle")}}},[t._v(" Bottle Price ")]),r("button",{class:"case"===t.sort_value?"ml-2 btn btn-warning":"ml-2 btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sortItems("case")}}},[t._v(" Case Price ")]),r("button",{class:"name"===t.sort_value?"ml-2 btn btn-warning":"ml-2 btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sortItems("name")}}},[t._v(" Name ")])])])],1),r("b-modal",{attrs:{id:"modal-1",title:"Cart"}},[t._l(t.cartItems,(function(e){return r("p",{key:e.id},[r("code",[t._v(t._s(e))])])})),r("b-button",{staticClass:"mt-3 mr-3"},[t._v("Checkout")]),r("b-button",{staticClass:"mt-3",on:{click:t.emptyCart}},[t._v("Empty Cart")])],2),r("b-modal",{attrs:{id:"modal-2",title:"Delivery Info"}},[r("b-form-group",{attrs:{id:"input-group-2",label:"","label-for":"input-2"}},[r("b-form-input",{attrs:{placeholder:"Your Full name",required:""}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"","label-for":"input-2"}},[r("b-form-input",{attrs:{placeholder:"Address",required:""}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"","label-for":"input-2"}},[r("b-form-input",{attrs:{placeholder:"Phone Number",required:""}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"","label-for":"input-2"}},[r("b-form-input",{attrs:{placeholder:"Estate",required:""}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"","label-for":"input-2"}},[r("b-form-input",{attrs:{placeholder:"Street / Building Name",required:""}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Additional Notes:","label-for":"input-2"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Notes",rows:"3","max-rows":"6"}})],1)],1)],1)},I=[],x=r("5530"),j={name:"Header",computed:Object(w["c"])(["cartItems","total"]),data:function(){return{filter_value:"all",sort_value:""}},methods:Object(x["a"])(Object(x["a"])({},Object(w["b"])(["fetchProducts"])),{},{emptyCart:function(){console.log("empty"),this.$store.commit("DEL_ITEMS")},sortItems:function(t){this.sort_value=t,this.$store.commit("SORT_ITEMS",t)},filterItems:function(t){this.filter_value=t,"all"===t?this.fetchProducts():this.$store.commit("FILTER_ITEMS",t)}})},D=j,k=(r("346f"),Object(s["a"])(D,O,I,!1,null,"319cb3ef",null)),P=k.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{staticClass:"bv-example-row "},[r("b-row",{},t._l(t.products,(function(t){return r("b-col",{key:t.no,staticClass:"brd-btm",attrs:{cols:"12",md:"4"}},[r("product-card",{attrs:{product:t}})],1)})),1)],1)],1)},A=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-3"},[r("img",{attrs:{src:"https://storage.googleapis.com/wineshop-assets/wine-bottles/img/"+t.product.image,height:"250px"}})]),r("div",{staticClass:"col-9"},[r("h1",[t._v(t._s(t.product.no))]),r("p",{staticClass:"pd16"},[t._v(t._s(t.product.name))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col",staticStyle:{"border-right":"2px solid black"}},[r("p",[t._v("Bottle")]),r("p",{staticClass:"pd16"},[t._v("$"+t._s(t.product.cost.bottle))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.qtty.bottle,expression:"qtty.bottle"}],staticStyle:{width:"35px"},attrs:{type:"number",min:"0",value:"0"},domProps:{value:t.qtty.bottle},on:{input:function(e){e.target.composing||t.$set(t.qtty,"bottle",e.target.value)}}}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v("QTY")]),r("br")]),r("div",{staticClass:"col"},[r("p",[t._v("Case")]),r("p",{staticClass:"pd16"},[t._v("$"+t._s(t.product.cost.case))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.qtty.case,expression:"qtty.case"}],staticStyle:{width:"35px"},attrs:{type:"number",min:"0",value:"0"},domProps:{value:t.qtty.case},on:{input:function(e){e.target.composing||t.$set(t.qtty,"case",e.target.value)}}}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v("QTY")]),r("br")])]),r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"col"},[r("button",{staticClass:"btn btn-secondary",staticStyle:{margin:"5px"},attrs:{type:"button"},on:{click:function(e){return t.showDetails("/img/reisling.png",t.product.details)}}},[t._v(" Details ")]),r("button",{staticClass:"btn btn-primary",staticStyle:{margin:"5px"},attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.product,t.qtty)}}},[t._v(" Add To Cart ")])])])])])])},M=[],$=r("3d20"),R=r.n($),F={name:"Card",props:["product"],data:function(){return{qtty:{bottle:0,case:0}}},methods:{addToCart:function(t,e){console.log("adc"),t.qtty=e,console.log(t),this.$store.dispatch("ADD_ITEM",t)},showDetails:function(t,e){console.log("sd"),R.a.fire({imageUrl:t,imageHeight:250,text:e})}}},N=F,U=(r("4b51"),Object(s["a"])(N,L,M,!1,null,"23530240",null)),H=U.exports,B={name:"Products",computed:Object(w["c"])(["cartItems","products"]),methods:Object(x["a"])({},Object(w["b"])(["fetchProducts"])),data:function(){return{}},components:{ProductCard:H},created:function(){this.fetchProducts()}},Y=B,W=(r("decd"),Object(s["a"])(Y,q,A,!1,null,null,null)),J=W.exports,Q={name:"Home",components:{HeaderDiv:P,NavBarDiv:S,ProductsDiv:J,FooterDiv:_}},K=Q,V=Object(s["a"])(K,d,p,!1,null,null,null),z=V.exports;n["default"].use(u["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],X=new u["a"]({mode:"history",base:"/",routes:G}),Z=X,tt=r("2909"),et=r("1da1"),rt=(r("4de4"),r("caad"),r("2532"),r("b0c0"),r("c740"),r("99af"),r("159b"),r("b680"),r("96cf"),r("bc3a")),nt=r.n(rt),ot={items:[],total:0,products:[]},at={cartItems:function(t){return t.items},total:function(t){return t.total},products:function(t){return t.products}},st={fetchProducts:function(t){return Object(et["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,nt.a.get("https://storage.googleapis.com/wineshop-assets/wine-shop.json");case 3:n=e.sent,r("SET_PRODUCTS",n.data);case 5:case"end":return e.stop()}}),e)})))()},ADD_ITEM:function(t,e){var r=t.commit;r("ADD_ITEM",e),r("CALCULATE_TOTAL")},DEL_ITEMS:function(t){var e=t.commit;e("DEL_ITEMS"),e("CALCULATE_TOTAL")},FILTER_ITEMS:function(t,e){var r=t.commit;r("FILTER_ITEMS",e)},SORT_ITEMS:function(t,e){var r=t.commit;r("SORT_ITEMS",e)}},it={SET_PRODUCTS:function(t,e){return t.products=e},FILTER_ITEMS:function(t,e){t.products=t.products.filter((function(t){return t.tags.includes(e)}))},SORT_ITEMS:function(t,e){"bottle"===e&&(t.products=t.products.sort((function(t,e){return t.cost.bottle-e.cost.bottle}))),"case"===e&&(t.products=t.products.sort((function(t,e){return t.cost.case-e.cost.case}))),"name"===e&&(t.products=t.products.sort((function(t,e){var r=t.name.toUpperCase(),n=e.name.toUpperCase();return r<n?-1:r>n?1:0})))},ADD_ITEM:function(t,e){var r=t.items,n=r.findIndex((function(t){return t.item.no===e.no}));-1===n?t.items=[].concat(Object(tt["a"])(t.items),[{item:e}]):t.items[n].qtty=e.qtty,console.log(t)},CALCULATE_TOTAL:function(){var t=0;ot.items.forEach((function(e){var r=e.item.qtty.bottle*e.item.cost.bottle,n=e.item.qtty.case*e.item.cost.case,o=r+n;t+=o})),ot.total=t.toFixed(2)},DEL_ITEMS:function(t){t.items=[],t.total=0}},ct={state:ot,getters:at,actions:st,mutations:it};n["default"].use(w["a"]);var lt=new w["a"].Store({state:{},mutations:{},actions:{},modules:{cart:ct}}),ut=r("5886"),dt=(r("4413"),r("5f5b"));r("f9e3"),r("2dd8");n["default"].use(ut["a"]),n["default"].use(dt["a"]),n["default"].config.productionTip=!1,new n["default"]({router:Z,store:lt,render:function(t){return t(l)}}).$mount("#app")},7484:function(t,e,r){},"74ce":function(t,e,r){},"85ec":function(t,e,r){},decd:function(t,e,r){"use strict";r("74ce")}});
//# sourceMappingURL=app.5a2921ff.js.map