(self.webpackChunkmspr_arosaje_strapi=self.webpackChunkmspr_arosaje_strapi||[]).push([[8026],{44174:i=>{function c(e,t,a,r){for(var l=-1,s=e==null?0:e.length;++l<s;){var o=e[l];t(r,o,a(o),e)}return r}i.exports=c},47443:(i,c,e)=>{var t=e(42118);function a(r,l){var s=r==null?0:r.length;return!!s&&t(r,l,0)>-1}i.exports=a},1196:i=>{function c(e,t,a){for(var r=-1,l=e==null?0:e.length;++r<l;)if(a(t,e[r]))return!0;return!1}i.exports=c},48983:(i,c,e)=>{var t=e(40371),a=t("length");i.exports=a},81119:(i,c,e)=>{var t=e(89881);function a(r,l,s,o){return t(r,function(f,j,h){l(o,f,s(f),h)}),o}i.exports=a},41848:i=>{function c(e,t,a,r){for(var l=e.length,s=a+(r?1:-1);r?s--:++s<l;)if(t(e[s],s,e))return s;return-1}i.exports=c},42118:(i,c,e)=>{var t=e(41848),a=e(62722),r=e(42351);function l(s,o,f){return o===o?r(s,o,f):t(s,a,f)}i.exports=l},62722:i=>{function c(e){return e!==e}i.exports=c},45652:(i,c,e)=>{var t=e(88668),a=e(47443),r=e(1196),l=e(74757),s=e(23593),o=e(21814),f=200;function j(h,O,p){var d=-1,n=a,u=h.length,E=!0,v=[],x=v;if(p)E=!1,n=r;else if(u>=f){var m=O?null:s(h);if(m)return o(m);E=!1,n=l,x=new t}else x=O?[]:v;e:for(;++d<u;){var g=h[d],_=O?O(g):g;if(g=p||g!==0?g:0,E&&_===_){for(var P=x.length;P--;)if(x[P]===_)continue e;O&&x.push(_),v.push(g)}else n(x,_,p)||(x!==v&&x.push(_),v.push(g))}return v}i.exports=j},55189:(i,c,e)=>{var t=e(44174),a=e(81119),r=e(67206),l=e(1469);function s(o,f){return function(j,h){var O=l(j)?t:a,p=f?f():{};return O(j,o,r(h,2),p)}}i.exports=s},23593:(i,c,e)=>{var t=e(58525),a=e(50308),r=e(21814),l=1/0,s=t&&1/r(new t([,-0]))[1]==l?function(o){return new t(o)}:a;i.exports=s},42351:i=>{function c(e,t,a){for(var r=a-1,l=e.length;++r<l;)if(e[r]===t)return r;return-1}i.exports=c},88016:(i,c,e)=>{var t=e(48983),a=e(62689),r=e(21903);function l(s){return a(s)?r(s):t(s)}i.exports=l},21903:i=>{var c="\\ud800-\\udfff",e="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",a="\\u20d0-\\u20ff",r=e+t+a,l="\\ufe0e\\ufe0f",s="["+c+"]",o="["+r+"]",f="\\ud83c[\\udffb-\\udfff]",j="(?:"+o+"|"+f+")",h="[^"+c+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",d="\\u200d",n=j+"?",u="["+l+"]?",E="(?:"+d+"(?:"+[h,O,p].join("|")+")"+u+n+")*",v=u+n+E,x="(?:"+[h+o+"?",o,O,p,s].join("|")+")",m=RegExp(f+"(?="+f+")|"+x+v,"g");function g(_){for(var P=m.lastIndex=0;m.test(_);)++P;return P}i.exports=g},7739:(i,c,e)=>{var t=e(89465),a=e(55189),r=Object.prototype,l=r.hasOwnProperty,s=a(function(o,f,j){l.call(o,j)?o[j].push(f):t(o,j,[f])});i.exports=s},47037:(i,c,e)=>{var t=e(44239),a=e(1469),r=e(37005),l="[object String]";function s(o){return typeof o=="string"||!a(o)&&r(o)&&t(o)==l}i.exports=s},50308:i=>{function c(){}i.exports=c},84238:(i,c,e)=>{var t=e(280),a=e(64160),r=e(98612),l=e(47037),s=e(88016),o="[object Map]",f="[object Set]";function j(h){if(h==null)return 0;if(r(h))return l(h)?s(h):h.length;var O=a(h);return O==o||O==f?h.size:t(h).length}i.exports=j},7334:(i,c,e)=>{var t=e(79833);function a(r){return t(r).toLowerCase()}i.exports=a},44908:(i,c,e)=>{var t=e(45652);function a(r){return r&&r.length?t(r):[]}i.exports=a},20573:(i,c,e)=>{"use strict";e.d(c,{P1:()=>h});var t="NOT_FOUND";function a(p){var d;return{get:function(u){return d&&p(d.key,u)?d.value:t},put:function(u,E){d={key:u,value:E}},getEntries:function(){return d?[d]:[]},clear:function(){d=void 0}}}function r(p,d){var n=[];function u(m){var g=n.findIndex(function(P){return d(m,P.key)});if(g>-1){var _=n[g];return g>0&&(n.splice(g,1),n.unshift(_)),_.value}return t}function E(m,g){u(m)===t&&(n.unshift({key:m,value:g}),n.length>p&&n.pop())}function v(){return n}function x(){n=[]}return{get:u,put:E,getEntries:v,clear:x}}var l=function(d,n){return d===n};function s(p){return function(n,u){if(n===null||u===null||n.length!==u.length)return!1;for(var E=n.length,v=0;v<E;v++)if(!p(n[v],u[v]))return!1;return!0}}function o(p,d){var n=typeof d=="object"?d:{equalityCheck:d},u=n.equalityCheck,E=u===void 0?l:u,v=n.maxSize,x=v===void 0?1:v,m=n.resultEqualityCheck,g=s(E),_=x===1?a(g):r(x,g);function P(){var D=_.get(arguments);if(D===t){if(D=p.apply(null,arguments),m){var C=_.getEntries(),y=C.find(function(T){return m(T.value,D)});y&&(D=y.value)}_.put(arguments,D)}return D}return P.clearCache=function(){return _.clear()},P}function f(p){var d=Array.isArray(p[0])?p[0]:p;if(!d.every(function(u){return typeof u=="function"})){var n=d.map(function(u){return typeof u=="function"?"function "+(u.name||"unnamed")+"()":typeof u}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return d}function j(p){for(var d=arguments.length,n=new Array(d>1?d-1:0),u=1;u<d;u++)n[u-1]=arguments[u];var E=function(){for(var x=arguments.length,m=new Array(x),g=0;g<x;g++)m[g]=arguments[g];var _=0,P,D={memoizeOptions:void 0},C=m.pop();if(typeof C=="object"&&(D=C,C=m.pop()),typeof C!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof C+"]");var y=D,T=y.memoizeOptions,M=T===void 0?n:T,b=Array.isArray(M)?M:[M],S=f(m),L=p.apply(void 0,[function(){return _++,C.apply(null,arguments)}].concat(b)),A=p(function(){for(var U=[],K=S.length,B=0;B<K;B++)U.push(S[B].apply(null,arguments));return P=L.apply(null,U),P});return Object.assign(A,{resultFunc:C,memoizedResultFunc:L,dependencies:S,lastResult:function(){return P},recomputations:function(){return _},resetRecomputations:function(){return _=0}}),A};return E}var h=j(o),O=function(d,n){if(n===void 0&&(n=h),typeof d!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof d));var u=Object.keys(d),E=n(u.map(function(v){return d[v]}),function(){for(var v=arguments.length,x=new Array(v),m=0;m<v;m++)x[m]=arguments[m];return x.reduce(function(g,_,P){return g[u[P]]=_,g},{})});return E}},53192:(i,c,e)=>{"use strict";e.d(c,{m:()=>o});var t=e(85893),a=e(88972),r=e(11276);const l=`${232/16}rem`,s=(0,a.ZP)(r.r)`
  width: ${l};
  background: ${({theme:f})=>f.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:f})=>f.colors.neutral200};
  z-index: 1;
`,o=({ariaLabel:f,...j})=>(0,t.jsx)(s,{"aria-label":f,as:"nav",...j})},42876:(i,c,e)=>{"use strict";e.d(c,{p:()=>v});var t=e(85893),a=e(53547),r=e(97184),l=e(88972),s=e(7801),o=e(2504),f=e(96556),j=e(70004),h=e(41580),O=e(8509),p=e(49123),d=e(11047),n=e(84170),u=e(12028);const E=(0,l.ZP)(j.i)`
  width: ${24/16}rem;
  background-color: ${({theme:x})=>x.colors.neutral200};
`,v=({as:x="h2",label:m,searchLabel:g="",searchable:_=!1,onChange:P=()=>{},value:D="",onClear:C=()=>{},onSubmit:y=()=>{},id:T})=>{const[M,b]=(0,a.useState)(!1),S=(0,f.D)(M),L=(0,o.M)(T),A=(0,a.useRef)(void 0),R=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{M&&A.current&&A.current.focus(),S&&!M&&R.current&&R.current.focus()},[M,S]);const U=()=>{b(I=>!I)},K=I=>{C(I),A.current.focus()},B=I=>{I.relatedTarget?.id!==L&&b(!1)},W=I=>{I.key===s.y.ESCAPE&&b(!1)};return M?(0,t.jsxs)(h.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,t.jsx)(O.U,{children:(0,t.jsx)(p.w,{name:"searchbar",value:D,onChange:P,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:W,ref:A,onBlur:B,onClear:K,onSubmit:y,clearLabel:"Clear",size:"S",children:g})}),(0,t.jsx)(h.x,{paddingLeft:2,paddingTop:4,children:(0,t.jsx)(E,{})})]}):(0,t.jsxs)(h.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,t.jsxs)(d.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,t.jsx)(n.Z,{variant:"beta",as:x,children:m}),_&&(0,t.jsx)(u.h,{ref:R,onClick:U,label:g,icon:(0,t.jsx)(r.Z,{})})]}),(0,t.jsx)(h.x,{paddingTop:4,children:(0,t.jsx)(E,{})})]})}},52305:(i,c,e)=>{"use strict";e.d(c,{E:()=>d});var t=e(85893),a=e(53547),r=e(71818),l=e(88972),s=e(41580),o=e(84170),f=e(11047),j=e(63507);const h=(0,l.ZP)(s.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:n})=>n.colors.neutral800};
  svg > * {
    fill: ${({theme:n})=>n.colors.neutral600};
  }

  &.active {
    ${({theme:n})=>`
      background-color: ${n.colors.primary100};
      border-right: 2px solid ${n.colors.primary600};
      svg > * {
        fill: ${n.colors.primary700};
      }
      ${o.Z} {
        color: ${n.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,O=(0,l.ZP)(r.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:n,$active:u})=>u?n.colors.primary600:n.colors.neutral600};
  }
`,p=l.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,d=a.forwardRef(({children:n,icon:u=null,withBullet:E=!1,as:v=j.f,isSubSectionChild:x=!1,...m},g)=>(0,t.jsxs)(h,{as:v,icon:u,background:"neutral100",paddingLeft:x?9:7,paddingBottom:2,paddingTop:2,ref:g,...m,children:[(0,t.jsxs)(f.k,{children:[u?(0,t.jsx)(p,{children:u}):(0,t.jsx)(O,{}),(0,t.jsx)(s.x,{paddingLeft:2,children:(0,t.jsx)(o.Z,{as:"span",children:n})})]}),E&&(0,t.jsx)(s.x,{as:f.k,paddingRight:4,children:(0,t.jsx)(O,{$active:!0})})]}))},29489:(i,c,e)=>{"use strict";e.d(c,{D:()=>u});var t=e(85893),a=e(53547),r=e(88972),l=e(12645),s=e(11047),o=e(41580),f=e(84170);const j=(0,r.ZP)(s.k)`
  border: none;
  padding: 0;
  background: transparent;
`,h=r.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:E})=>E?"0deg":"180deg"});
`,O=({collapsable:E=!1,label:v,onClick:x=()=>{},ariaExpanded:m,ariaControls:g})=>E?(0,t.jsxs)(j,{as:"button",onClick:x,"aria-expanded":m,"aria-controls":g,textAlign:"left",children:[(0,t.jsx)(o.x,{paddingRight:1,children:(0,t.jsx)(f.Z,{variant:"sigma",textColor:"neutral600",children:v})}),E&&(0,t.jsx)(h,{rotated:m,children:(0,t.jsx)(l.Z,{"aria-hidden":!0})})]}):(0,t.jsx)(j,{children:(0,t.jsx)(o.x,{paddingRight:1,children:(0,t.jsx)(f.Z,{variant:"sigma",textColor:"neutral600",children:v})})});var p=e(2504),d=e(30190);const n=(0,r.ZP)(o.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:E})=>E.colors.neutral500};
    }
  }
`,u=({collapsable:E=!1,label:v,badgeLabel:x,children:m,id:g})=>{const[_,P]=(0,a.useState)(!0),D=(0,p.M)(g);return(0,t.jsxs)(s.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(n,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,t.jsxs)(o.x,{position:"relative",paddingRight:x?6:0,children:[(0,t.jsx)(O,{onClick:()=>{P(C=>!C)},ariaExpanded:_,ariaControls:D,collapsable:E,label:v}),x&&(0,t.jsx)(d.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:x})]})}),(!E||_)&&(0,t.jsx)("ol",{id:D,children:a.Children.map(m,(C,y)=>(0,t.jsx)("li",{children:C},y))})]})}},34446:(i,c,e)=>{"use strict";e.d(c,{Z:()=>s});var t=e(85893),a=e(53547),r=e(41580),l=e(11047);const s=({children:o,spacing:f=2,horizontal:j=!1,...h})=>(0,t.jsx)(r.x,{paddingTop:2,paddingBottom:4,children:(0,t.jsx)(l.k,{as:"ol",gap:f,direction:j?"row":"column",alignItems:j?"center":"stretch",...h,children:a.Children.map(o,(O,p)=>(0,t.jsx)("li",{children:O},p))})})}}]);
