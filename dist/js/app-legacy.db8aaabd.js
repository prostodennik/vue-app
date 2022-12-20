(function(){"use strict";var t={675:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var s=n(6369),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FinalCost")],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-cost"},[n("Button",{attrs:{state:t.generates}}),n("Name",{attrs:{state:t.generates}}),n("Price",{attrs:{state:t.generates}}),n("Amount",{attrs:{state:t.generates}}),n("Value",{attrs:{state:t.generates}}),n("Cost",{attrs:{state:t.cost}})],1)},o=[],i=n(4648),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn"},[n("button",t._g({staticClass:"btn__button"},{click:t.addNameState}),[t._v(" Сгенерировать ")]),n("button",t._g({staticClass:"btn__button"},{click:t.clearStateState}),[t._v(" Очистить ")])])},u=[],_=(n(3689),n(6977),n(1249),n(7042),n(1539),n(3822)),f={props:{state:Array},data:function(){return{names:{title:"",price:"",amount:"",value:""},costs:{cost:""}}},methods:(0,i.Z)((0,i.Z)({},(0,_.OI)(["addName","addCost","clearState"])),{},{addNameState:function(){for(var t=0;t<50;t++){for(var e="",n=Math.trunc(1e3*Math.random()*100)/100,s=Math.floor(100*Math.random())+1,r="abcdefghijklmnopqrstuvwxyz",a=0;a<5;a++)e+=r.charAt(Math.floor(Math.random()*r.length));this.names.title=e,this.names.price=n,this.names.amount=s,this.names.value=(s*n).toFixed(2),this.addName((0,i.Z)({},this.names))}},clearStateState:function(){this.clearState()}}),watch:{"names.value":function(){var t=this.state.map((function(t){return t.value})),e=t.slice(-50).map((function(t){return parseFloat(t)})),n=e.reduce((function(t,e){return t+e}));this.costs.cost=n.toFixed(2),this.addCost((0,i.Z)({},this.costs))}}},p=f,m=n(1001),v=(0,m.Z)(p,c,u,!1,null,"f8efabe4",null),d=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name"},[n("div",{staticClass:"name__title"},[t._v("Наименование "),n("span",[t._v(t._s(t.state.length))])]),n("ul",{staticClass:"name__list"},t._l(t.state,(function(t){return n("nameItem",{key:t.id,attrs:{title:t}})})),1),t.state.length?n("scrollTo"):t._e()],1)},g=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"name__item"},[t._v(" "+t._s(t.title.title)+" ")])},y=[],b={props:{title:Object}},Z=b,x=(0,m.Z)(Z,C,y,!1,null,null,null),k=x.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"scroll"},[n("div",t._g({staticClass:"scroll__inner"},{click:t.scroll}),[t._v(" ↓ ")])])])},O=[],S={props:{state:Array},methods:{scroll:function(){var t=event.target.parentNode.parentNode.parentNode,e=t.querySelector("ul");e.scrollBy({top:e.scrollHeight,behavior:"smooth"}),e.addEventListener("scroll",(function(){if(0===e.scrollTop){var n=t.querySelector(".scroll__inner");n.style.transform="none",n.addEventListener("click",(function(){e.scrollBy({top:e.scrollHeight,behavior:"smooth"})}))}else{var s=t.querySelector(".scroll__inner");s.style.transform="rotate(180deg)",s.style.transition="transform 0.5s",s.addEventListener("click",(function(){e.scrollBy({top:-e.scrollHeight,behavior:"smooth"})}))}}))}}},T=S,$=(0,m.Z)(T,E,O,!1,null,null,null),j=$.exports,w={components:{nameItem:k,scrollTo:j},props:{state:Array},methods:{}},A=w,N=(0,m.Z)(A,h,g,!1,null,null,null),I=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("div",{staticClass:"price__title"},[t._v("Цена "),n("span",[t._v(t._s(t.state.length))])]),n("ul",{staticClass:"price__list"},t._l(t.state,(function(t){return n("priceItem",{key:t.id,attrs:{price:t}})})),1),t.state.length?n("scrollTo"):t._e()],1)},F=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"name__item"},[t._v(" "+t._s(t.price.price)+" ")])},B=[],q={props:{price:Object}},H=q,L=(0,m.Z)(H,P,B,!1,null,null,null),V=L.exports,z={components:{priceItem:V,scrollTo:j},props:{state:Array},methods:{}},D=z,G=(0,m.Z)(D,M,F,!1,null,null,null),J=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amount"},[n("div",{staticClass:"amount__title"},[t._v("Количество "),n("span",[t._v(t._s(t.state.length))])]),n("ul",{staticClass:"amount__list"},t._l(t.state,(function(e){return n("li",{key:e.id,staticClass:"amount__item"},[t._v(" "+t._s(e.amount))])})),0),t.state.length?n("scrollTo"):t._e()],1)},Q=[],R={components:{scrollTo:j},props:{state:Array},methods:{}},U=R,W=(0,m.Z)(U,K,Q,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"value"},[n("div",{staticClass:"value__title"},[t._v("Стоимость "),n("span",[t._v(t._s(t.state.length))])]),n("ul",{staticClass:"value__list"},t._l(t.state,(function(e){return n("li",{key:e.id,staticClass:"value__item"},[t._v(t._s(e.value))])})),0),t.state.length?n("scrollTo"):t._e()],1)},tt=[],et={components:{scrollTo:j},props:{state:Array},methods:{}},nt=et,st=(0,m.Z)(nt,Y,tt,!1,null,null,null),rt=st.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cost"},[n("div",{staticClass:"cost__title"},[t._v("Итоговая стоимость "),n("span",[t._v(t._s(t.state.length))])]),n("ul",{staticClass:"cost__list"},t._l(t.state,(function(t){return n("costItem",{key:t.id,attrs:{cost:t}})})),1),t.state.length>5?n("scrollTo"):t._e()],1)},lt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"final-cost__item"},[t._v(t._s(t.cost.cost))])},it=[],ct={props:{cost:Object}},ut=ct,_t=(0,m.Z)(ut,ot,it,!1,null,null,null),ft=_t.exports,pt={components:{costItem:ft,scrollTo:j},props:{state:Array},methods:{}},mt=pt,vt=(0,m.Z)(mt,at,lt,!1,null,null,null),dt=vt.exports,ht={components:{Button:d,Name:I,Price:J,Amount:X,Value:rt,Cost:dt},computed:(0,i.Z)({},(0,_.rn)({generates:function(t){return t.generates.generates},cost:function(t){return t.cost.cost}}))},gt=ht,Ct=(0,m.Z)(gt,l,o,!1,null,"73e6fa92",null),yt=Ct.exports,bt={name:"App",components:{FinalCost:yt},data:function(){return{}}},Zt=bt,xt=(0,m.Z)(Zt,r,a,!1,null,null,null),kt=xt.exports,Et={state:{generates:[]},mutations:{addName:function(t,e){t.generates.push(e)},clearState:function(t){t.generates=[]}}},Ot=Et,St={state:{cost:[]},mutations:{addCost:function(t,e){t.cost.push(e)},clearState:function(t){t.cost=[]}}},Tt=St;s.Z.use(_.ZP);var $t=new _.ZP.Store({modules:{generates:Ot,cost:Tt},mutations:{}});s.Z.config.productionTip=!1,new s.Z({store:$t,beforeCreate:function(){},render:function(t){return t(kt)}}).$mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,a){if(!s){var l=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],a=t[u][2];for(var o=!0,i=0;i<s.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[i])}))?s.splice(i--,1):(o=!1,a<l&&(l=a));if(o){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,l=s[0],o=s[1],i=s[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(i)var u=i(n)}for(e&&e(s);c<l.length;c++)a=l[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},s=self["webpackChunkproject"]=self["webpackChunkproject"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(675)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.db8aaabd.js.map