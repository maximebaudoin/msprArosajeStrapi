"use strict";(self.webpackChunkmspr_arosaje_strapi=self.webpackChunkmspr_arosaje_strapi||[]).push([[5162],{93016:(Q,T,t)=>{t.d(T,{Z:()=>p});var e=t(53547),v=t(84714);function u(){return e.createElement(v.Z.Root,null,e.createElement(v.Z.Headers,null),e.createElement(v.Z.Body,null))}const p=u},84714:(Q,T,t)=>{t.d(T,{Z:()=>Ee});var e=t(53547),v=t(45421),u=t(11047),p=t(19270),j=t(77197),H=t(65833),J=t(33709),W=t(54580),E=t(63237),Y=t(84170),ce=t(26031),N=t(36213),_=t(92155),D=t(41054),q=t(45697),M=t.n(q),X=t(86896),ue=t(88972),A=t(39645);const ge=o=>o.reduce((i,l)=>{const f=l.split(".")[0];return i[f]||(i[f]=[]),i[f].push(l),i},{}),m=(0,ue.ZP)(v.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:o})=>o.colors.neutral100};
  }

  thead th span {
    color: ${({theme:o})=>o.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:o})=>o.spaces[3]};
    padding-block-end: ${({theme:o})=>o.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    // Add padding to the start of the first column to avoid the checkbox appearing
    // too close to the edge of the table
    padding-inline-start: ${({theme:o})=>o.spaces[2]};
  }
`,I=o=>{const i=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return o&&(i.push({id:"app.utils.publish",defaultMessage:"Publish"}),i.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),i},me=o=>{const i=["entry.create","entry.update","entry.delete"];return o&&i.push("entry.publish","entry.unpublish"),{entry:i,media:["media.create","media.update","media.delete"]}},ee=e.createContext(),oe=({children:o})=>{const{formatMessage:i}=(0,X.Z)(),{collectionTypes:l,isLoading:f}=(0,A.G)(),C=e.useMemo(()=>l.some(S=>S.options.draftAndPublish===!0),[l]),k=i({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.createElement(ee.Provider,{value:{isDraftAndPublish:C}},e.createElement(u.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(p.Q,{"aria-hidden":!0},k),f&&e.createElement(j.a,null,i({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})),e.createElement(m,{"aria-label":k},o)))};oe.propTypes={children:M().oneOfType([M().arrayOf(M().node),M().node]).isRequired};const te=({getHeaders:o=I})=>{const{isDraftAndPublish:i}=e.useContext(ee),{formatMessage:l}=(0,X.Z)(),f=o(i);return e.createElement(H.S,null,e.createElement(J.Z,null,e.createElement(W.g,null,e.createElement(E.T,null,l({id:"Settings.webhooks.event.select",defaultMessage:"Select event"}))),f.map(C=>["app.utils.publish","app.utils.unpublish"].includes(C.id)?e.createElement(W.g,{key:C.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},l(C))):e.createElement(W.g,{key:C.id},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},l(C))))))};te.defaultProps={getHeaders:I},te.propTypes={getHeaders:M().func};const ne=({providedEvents:o})=>{const{isDraftAndPublish:i}=e.useContext(ee),l=o||me(i),{values:f,handleChange:C}=(0,D.u6)(),k="events",S=f.events,U=[],V=ge(S),K=({target:{name:P,value:d}})=>{let O=new Set(S);d?O.add(P):O.delete(P),C({target:{name:k,value:Array.from(O)}})},F=({target:{name:P,value:d}})=>{let O=new Set(S);d?l[P].forEach(z=>{U.includes(z)||O.add(z)}):l[P].forEach(z=>O.delete(z)),C({target:{name:k,value:Array.from(O)}})};return e.createElement(ce.X,null,Object.entries(l).map(([P,d])=>e.createElement(B,{disabledEvents:U,key:P,name:P,events:d,inputValue:V[P],handleSelect:K,handleSelectAll:F})))};ne.defaultProps={providedEvents:null},ne.propTypes={providedEvents:M().object};const le=o=>o.replace(/-/g," ").split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()).join(" "),B=({disabledEvents:o,name:i,events:l,inputValue:f,handleSelect:C,handleSelectAll:k})=>{const{formatMessage:S}=(0,X.Z)(),U=l.filter(d=>!o.includes(d)),V=f.length>0,K=f.length===U.length,F=({target:{name:d}})=>{k({target:{name:d,value:!K}})},P=5;return e.createElement(J.Z,null,e.createElement(W.f,null,e.createElement(N.X,{indeterminate:V&&!K,"aria-label":S({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:i,onChange:F,value:K},le(i))),l.map(d=>e.createElement(W.f,{key:d},e.createElement(_.C,{disabled:o.includes(d),"aria-label":d,name:d,value:f.includes(d),onValueChange:O=>C({target:{name:d,value:O}})}))),l.length<P&&e.createElement(W.f,{colSpan:`${P-l.length}`}))};B.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},B.propTypes={disabledEvents:M().array,events:M().array,inputValue:M().array,handleSelect:M().func,handleSelectAll:M().func,name:M().string.isRequired};const Ee={Root:oe,Headers:te,Body:ne,EventRow:B}},41128:(Q,T,t)=>{t.d(T,{Z:()=>Pe});var e=t(53547),v=t(185),u=t(42609),p=t(88767),j=t(16550),H=t(39645),J=t(70885),W=t(53979),E=t(11047),Y=t(29728),ce=t(49066),N=t(41580),_=t(11276),D=t(67819),q=t(16364),M=t(90321),X=t(85018),ue=t(67109),A=t(41054),ge=t(45697),m=t.n(ge),I=t(86896),me=t(19270),ee=t(39785),oe=t(96315),te=t(29178),ne=t(90608);const le=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],B=({name:n,onChange:a,value:s,...c})=>{const{values:{headers:h}}=(0,A.u6)(),[Z,g]=(0,e.useState)(le);(0,e.useEffect)(()=>{g(le.filter(r=>!h?.some($=>$.key!==s&&$.key===r)))},[h,s]);const x=r=>{a({target:{name:n,value:r}})},ae=r=>{g($=>[...$,r]),x(r)};return e.createElement(te.XU,{...c,onClear:()=>x(""),onChange:x,onCreateOption:ae,placeholder:"",value:s},Z.map(r=>e.createElement(ne.O,{value:r,key:r},r)))};B.defaultProps={value:void 0},B.propTypes={name:m().string.isRequired,onChange:m().func.isRequired,value:m().string};const Ee=B,i=()=>{const{formatMessage:n}=(0,I.Z)(),{values:a,errors:s}=(0,A.u6)();return e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(me.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(N.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(A.F2,{validateOnChange:!1,name:"headers",render:({push:c,remove:h})=>e.createElement(_.r,{gap:4},a.headers.map((Z,g)=>e.createElement(e.Fragment,{key:`${g}.${Z.key}`},e.createElement(D.P,{col:6},e.createElement(A.gN,{as:Ee,name:`headers.${g}.key`,"aria-label":`row ${g+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:s.headers?.[g]?.key&&s.headers[g].key})),e.createElement(D.P,{col:6},e.createElement(E.k,{alignItems:"flex-end"},e.createElement(N.x,{style:{flex:1}},e.createElement(A.gN,{as:q.o,name:`headers.${g}.value`,"aria-label":`row ${g+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:s.headers?.[g]?.value&&s.headers[g].value})),e.createElement(E.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:s.headers?.[g]?.value?0:5},e.createElement(u.RemoveRoundedButton,{disabled:a.headers.length===1,onClick:()=>h(g),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:g+1})})))))),e.createElement(D.P,{col:12},e.createElement(ee.A,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:e.createElement(oe.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var l=t(84170),f=t(86647),C=t(70968),k=t(88972);const S=k.ZP.svg(({theme:n,color:a})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[a]};
  }
`),U=({isPending:n,statusCode:a})=>{const{formatMessage:s}=(0,I.Z)();return n?e.createElement(E.k,{gap:2,alignItems:"center"},e.createElement(S,{as:f.Z}),e.createElement(l.Z,null,s({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):a>=200&&a<300?e.createElement(E.k,{gap:2,alignItems:"center"},e.createElement(S,{as:X.Z,color:"success700"}),e.createElement(l.Z,null,s({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):a>=300?e.createElement(E.k,{gap:2,alignItems:"center"},e.createElement(S,{as:C.Z,color:"danger700"}),e.createElement(l.Z,null,s({id:"Settings.error",defaultMessage:"error"})," ",a)):null};U.propTypes={isPending:m().bool.isRequired,statusCode:m().number},U.defaultProps={statusCode:void 0};const V=({statusCode:n,message:a})=>{const{formatMessage:s}=(0,I.Z)();return n>=200&&n<300?e.createElement(E.k,{justifyContent:"flex-end"},e.createElement(l.Z,{textColor:"neutral600",ellipsis:!0},s({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(E.k,{justifyContent:"flex-end"},e.createElement(E.k,{maxWidth:(0,u.pxToRem)(250),justifyContent:"flex-end",title:a},e.createElement(l.Z,{ellipsis:!0,textColor:"neutral600"},a))):null};V.propTypes={statusCode:m().number,message:m().string},V.defaultProps={statusCode:void 0,message:void 0};const K=({onCancel:n})=>{const{formatMessage:a}=(0,I.Z)();return e.createElement(E.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(E.k,{gap:2,alignItems:"center"},e.createElement(l.Z,{textColor:"neutral400"},a({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(S,{as:C.Z,color:"neutral400"}))))};K.propTypes={onCancel:m().func.isRequired};const F=({isPending:n,onCancel:a,response:s})=>{const{statusCode:c,message:h}=s,{formatMessage:Z}=(0,I.Z)();return e.createElement(N.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(_.r,{gap:4,style:{alignItems:"center"}},e.createElement(D.P,{col:3},e.createElement(l.Z,null,Z({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(D.P,{col:3},e.createElement(U,{isPending:n,statusCode:c})),e.createElement(D.P,{col:6},n?e.createElement(K,{onCancel:a}):e.createElement(V,{statusCode:c,message:h}))))};F.defaultProps={isPending:!1,onCancel(){},response:{}},F.propTypes={isPending:m().bool,onCancel:m().func,response:m().object};const P=F;var d=t(87561);const O=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,z=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Ce=({formatMessage:n})=>d.Ry().shape({name:d.Z_().required(n({id:"Settings.webhooks.validation.name",defaultMessage:"Name is required"})).matches(O,u.translatedErrors.regex),url:d.Z_().required(n({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(z,n({id:u.translatedErrors.regex,defaultMessage:"The value does not match the regex"})),headers:d.Vo(a=>{let s=d.IX();if(a.length===1){const{key:c,value:h}=a[0];if(!c&&!h)return s}return s.of(d.Ry().shape({key:d.Z_().required(n({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:d.Z_().required(n({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:d.IX()});var ye=function(){return window&&window.strapi&&window.strapi.isEE?t(65224).Z:t(93016).Z}(),he=function(a){var s,c,h=a.handleSubmit,Z=a.triggerWebhook,g=a.isCreating,x=a.isTriggering,ae=a.triggerResponse,r=a.data,$=(0,I.Z)(),L=$.formatMessage,se=(0,e.useState)(!1),ie=(0,J.Z)(se,2),ve=ie[0],de=ie[1],pe=function(w){return Object.keys(w).length?Object.entries(w).map(function(G){var y=(0,J.Z)(G,2),R=y[0],be=y[1];return{key:R,value:be}}):[{key:"",value:""}]},b=(0,A.TA)({initialValues:{name:r?.name||"",url:r?.url||"",headers:pe(r?.headers||{}),events:r?.events||[]},onSubmit:function(w,G){var y=G.resetForm,R=G.setSubmitting;h(w),y({values:w}),R(!1)},validationSchema:Ce({formatMessage:L}),validateOnChange:!1,validateOnBlur:!1});return e.createElement(A.Hy,{value:b},e.createElement(u.Form,{onSubmit:b.handleSubmit},e.createElement(W.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(Y.z,{onClick:function(){Z(),de(!0)},variant:"tertiary",startIcon:e.createElement(M.Z,null),disabled:g||x,size:"L"},L({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(Y.z,{startIcon:e.createElement(X.Z,null),type:"submit",size:"L",disabled:!b.dirty,loading:b.isSubmitting},L({id:"global.save",defaultMessage:"Save"}))),title:g?L({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):r?.name,navigationAction:e.createElement(u.Link,{startIcon:e.createElement(ue.Z,null),to:"/settings/webhooks"},L({id:"global.back",defaultMessage:"Back"}))}),e.createElement(ce.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},ve&&e.createElement(P,{isPending:x,response:ae,onCancel:function(){return de(!1)}}),e.createElement(N.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(_.r,{gap:6},e.createElement(D.P,{col:6},e.createElement(A.gN,{as:q.o,name:"name",error:(b==null||(s=b.errors)===null||s===void 0?void 0:s.name)&&b.errors.name,label:L({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(D.P,{col:12},e.createElement(A.gN,{as:q.o,name:"url",error:(b==null||(c=b.errors)===null||c===void 0?void 0:c.url)&&b.errors.url,label:L({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(i,null),e.createElement(ye,null)))))))};he.propTypes={data:m().object,handleSubmit:m().func.isRequired,triggerWebhook:m().func.isRequired,isCreating:m().bool.isRequired,isTriggering:m().bool.isRequired,triggerResponse:m().object},he.defaultProps={data:void 0,triggerResponse:void 0};const Me=he,fe=n=>({...n,headers:n.headers.reduce((a,{key:s,value:c})=>(s!==""&&(a[s]=c),a),{})}),Pe=()=>{const{params:{id:n}}=(0,j.$B)("/settings/webhooks/:id"),a=n==="create",{replace:s}=(0,j.k6)(),c=(0,u.useNotification)(),{formatAPIError:h}=(0,u.useAPIErrorHandler)(),Z=(0,p.useQueryClient)(),{isLoading:g}=(0,H.G)(),{put:x,get:ae,post:r}=(0,u.useFetchClient)(),{isLoading:$,data:L,error:se}=(0,p.useQuery)(["webhooks",n],async()=>{const{data:{data:y}}=await ae(`/admin/webhooks/${n}`);return y},{enabled:!a});e.useEffect(()=>{se&&c({type:"warning",message:h(se)})},[se,c,h]);const{isLoading:ie,data:ve,isIdle:de,mutate:pe}=(0,p.useMutation)(()=>r(`/admin/webhooks/${n}/trigger`)),b=()=>pe(null,{onError(y){c({type:"warning",message:h(y)})}}),re=(0,p.useMutation)(y=>r("/admin/webhooks",y)),w=(0,p.useMutation)(({id:y,body:R})=>x(`/admin/webhooks/${y}`,R)),G=async y=>{if(a){re.mutate(fe(y),{onSuccess({data:R}){c({type:"success",message:{id:"Settings.webhooks.created"}}),s(`/settings/webhooks/${R.data.id}`)},onError(R){c({type:"warning",message:h(R)})}});return}w.mutate({id:n,body:fe(y)},{onSuccess(){Z.invalidateQueries(["webhooks",n]),c({type:"success",message:{id:"notification.form.success.fields"}})},onError(R){c({type:"warning",message:h(R)})}})};return $||g?e.createElement(u.LoadingIndicatorPage,null):e.createElement(v.o,null,e.createElement(u.SettingsPageTitle,{name:"Webhooks"}),e.createElement(Me,{data:L,handleSubmit:G,triggerWebhook:b,isCreating:a,isTriggering:ie,isTriggerIdle:de,triggerResponse:ve?.data.data}))}},3672:(Q,T,t)=>{t.r(T),t.d(T,{default:()=>H});var e=t(53547),v=t(42609),u=t(87751),p=t(41128);const H=()=>e.createElement(v.CheckPagePermissions,{permissions:u.Z.settings.webhooks.create},e.createElement(p.Z,null))},42122:(Q,T,t)=>{t.r(T),t.d(T,{default:()=>H});var e=t(53547),v=t(42609),u=t(87751),p=t(41128);const H=()=>e.createElement(v.CheckPagePermissions,{permissions:u.Z.settings.webhooks.update},e.createElement(p.Z,null))},65224:(Q,T,t)=>{t.d(T,{Z:()=>p});var e=t(53547),v=t(84714);function u(){return e.createElement(v.Z.Root,null,e.createElement(v.Z.Headers,null),e.createElement(v.Z.Body,null))}const p=u}}]);