(this.webpackJsonpcottage_olympics=this.webpackJsonpcottage_olympics||[]).push([[0],{309:function(e,t,n){},311:function(e,t,n){},519:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=(n(309),n(19)),s=n.n(i),l=n(27),u=n(29),d=(n(311),n(73)),j=n(22),p=n(190),b=n(572),h=n(574),m=n(575),f=n(576),x=n(85),O=(n(173),n(277)),g=n.n(O),v=n(39),y=n.n(v),k="api/sports";["localhost","127.0.0.1"].includes(window.location.hostname)&&(k="http://localhost:3003/api/sports");var w={getAll:function(){return y.a.get(k).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post(k,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteSport:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("".concat(k,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=n(571),S=n(592),N=n(570),I=n(568),F=n(569),U=n(567),B=n(4),P=function(e){var t=e.open,n=e.handleClose;return Object(B.jsxs)(S.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(U.a,{id:"alert-dialog-title",children:"Poistetaanko laji pysyv\xe4sti?"}),Object(B.jsx)(I.a,{children:Object(B.jsx)(F.a,{id:"alert-dialog-description",children:"Lajia ei v\xe4ltt\xe4m\xe4tt\xe4 voida poistaa jos siihen on jo kirjattu suorituksia"})}),Object(B.jsxs)(N.a,{children:[Object(B.jsx)(C.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(B.jsx)(C.a,{onClick:function(){return n(!0)},color:"primary",autoFocus:!0,children:"Poista"})]})]})},L=n(573),T=n(276),A=n.n(T),W=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),D=function(e){var t=e.action,n=e.buttonText,a=W();return Object(B.jsx)("div",{children:Object(B.jsx)("div",{onClick:t,children:Object(B.jsxs)(L.a,{variant:"extended",color:"primary","aria-label":"add",className:a.margin,children:[Object(B.jsx)(A.a,{className:a.extendedIcon}),n]})})})},E=n(589),M=function(e){var t=e.openAdd,n=e.handleSubmit,a=e.description,r=e.name,c=e.handleNameChange,o=e.handleDescriptionChange;return Object(B.jsx)("div",{children:Object(B.jsxs)(S.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(B.jsx)(U.a,{id:"form-dialog-title",children:"Lis\xe4\xe4 uusi m\xf6kkiolympialaji"}),Object(B.jsxs)(I.a,{children:[Object(B.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nimi",type:"text",fullWidth:!0,variant:"outlined",value:r,onChange:c}),Object(B.jsx)(E.a,{margin:"dense",id:"description",label:"Kuvaus",type:"text",fullWidth:!0,multiline:!0,rows:2,variant:"outlined",value:a,onChange:o})]}),Object(B.jsxs)(N.a,{children:[Object(B.jsx)(C.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(B.jsx)(C.a,{onClick:function(){return n(!0)},color:"primary",variant:"outlined",children:"Tallenna"})]})]})})},R=Object(b.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:"inherit",color:"white","& span":{color:"white",secondary:"white"},"& .MuiTypography-colorTextSecondary":{color:"white"},title:{margin:"0"}},customListItem:{border:"2px solid white !important",borderRadius:"6px",padding:"0.3rem !important",backgroundColor:"#8940B9 !important",marginBottom:"2px !important"},removeButton:{color:"mediumvioletred",border:"2px lightgray outset",backgroundColor:"white",borderRadius:"50%"}}})),K=function(){var e=R(),t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),d=i[0],b=i[1],O=Object(a.useState)(""),v=Object(u.a)(O,2),y=v[0],k=v[1],C=Object(a.useState)(""),S=Object(u.a)(C,2),N=S[0],I=S[1],F=Object(a.useState)(""),U=Object(u.a)(F,2),L=U[0],T=U[1],A=Object(a.useState)(!1),W=Object(u.a)(A,2),E=W[0],K=W[1],z=Object(j.f)(),J=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!1),!t){e.next=7;break}return e.next=4,w.deleteSport(y);case 4:n=e.sent,console.log(200===n.status),200===n.status&&(a=Object(p.a)(r),console.log(a),a=a.filter((function(e){return e.SportId!==y})),console.log(a),c(a),k(""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K(!1),!t){e.next=8;break}return n={sportName:L,sportDescription:N},e.next=5,w.create(n);case 5:a=e.sent,o={SportName:L,SportDescription:N,SportId:a.SportId},c([].concat(Object(p.a)(r),[o]));case 8:I(""),T("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w.getAll().then((function(e){console.log(e),c(e)}))}),[]);return Object(B.jsx)("div",{className:e.root,children:Object(B.jsxs)(h.a,{container:!0,spacing:2,children:[Object(B.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(B.jsx)("div",{className:e.demo,children:Object(B.jsx)(x.b,{className:e.demo,children:r.map((function(t,n){return Object(B.jsxs)(x.c,{className:e.customListItem,onClick:function(){return function(e){console.log(e),z.push("/sport/"+e)}(t.SportId)},children:[Object(B.jsx)(m.a,{primary:t.SportName,secondary:t.SportDescription}),Object(B.jsx)(f.a,{children:Object(B.jsx)(x.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){console.log(e),k(e),b(!0)}(t.SportId)},children:Object(B.jsx)(g.a,{className:e.removeButton})})})]},t.SportId)}))})})}),Object(B.jsx)(P,{open:d,handleClose:J}),Object(B.jsx)(M,{openAdd:E,handleSubmit:G,handleDescriptionChange:function(e){var t=e.target;return I(t.value)},handleNameChange:function(e){var t=e.target;return T(t.value)},name:L,description:N}),Object(B.jsx)(D,{buttonText:"Lis\xe4\xe4 uusi laji",action:function(e){K(!0)}})]})})},z="api/scores";["localhost","127.0.0.1"].includes(window.location.hostname)&&(z="http://localhost:3003/api/scores");var J=function(){return y.a.get(z).then((function(e){return e.data}))},G="api/users";["localhost","127.0.0.1"].includes(window.location.hostname)&&(G="http://localhost:3003/api/users");var H=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=G+"/username/"+t,console.log(n),e.next=5,y.a.get(n);case 5:if(a=e.sent,console.log(a),null===a.data||!a.data.UserId){e.next=11;break}return e.abrupt("return",a.data);case 11:return console.log("Ei l\xf6ytyny k\xe4ytt\xe4j\xe4\xe4"),e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post(G,t);case 2:return n=e.sent,console.log("luotiinko k\xe4ytt\xe4j\xe4"+n),console.log(n),a={UserId:n.data.UserId,UserName:t.userName},e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t.userName);case 2:if(!(n=e.sent)||!n.UserId){e.next=7;break}return e.abrupt("return",n);case 7:return e.next=9,_(t);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y={getAll:function(){return y.a.get(G).then((function(e){return e.data}))},create:_,getUser:H,createIfNeeded:V},q=n(12),Q=n(580),X=n(582),Z=n(577),$=n(579),ee=n(581),te=n(578),ne=n(521),ae=n(189),re=n.n(ae),ce=Object(q.a)((function(e){return{head:{backgroundColor:"#5c0057",color:e.palette.common.white,fontWeight:"600"},body:{fontSize:14,color:"#FFF",fontWeight:"500"}}}))(Z.a),oe=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8940B9"},"&:nth-of-type(even)":{backgroundColor:"#4b0082"},color:"#FFF"}}}))(te.a),ie=Object(b.a)({table:{}}),se=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=ie();function o(){return(o=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.getAll();case 2:return t=e.sent,e.next=5,J();case 5:n=e.sent,i(n,t),a=t.sort((function(e,t){return t.totalPoints-e.totalPoints})),r(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e,t){for(var n=re.a.groupBy(e,"SportId"),a=re.a.values(n),r=0;r<a.length;r++){d(a[r],t)}}function d(e,t){for(var n=e.sort((function(e,t){return e-t})),a=0;a<n.length;a++){var r=0;switch(a){case 0:r=10;break;case 1:r=8;break;case 3:r=6;break;case 4:r=5;break;case 5:r=4;break;case 6:r=3;break;case 7:r=2;break;case 8:r=1;break;default:r=0}j(n[a].UserId,r,t)}}function j(e,t,n){var a=n.find((function(t){return t.UserId===e}));a&&(a.totalPoints=a.totalPoints?a.totalPoints+t:t)}return Object(a.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(B.jsx)($.a,{component:ne.a,children:Object(B.jsxs)(Q.a,{className:c.table,"aria-label":"customized table",children:[Object(B.jsx)(ee.a,{children:Object(B.jsxs)(te.a,{children:[Object(B.jsx)(ce,{children:"Atleetikko"}),Object(B.jsx)(ce,{align:"right",children:"Sijoitus"}),Object(B.jsx)(ce,{align:"right",children:"Pisteet"})]})}),Object(B.jsx)(X.a,{children:n.map((function(e){return Object(B.jsxs)(oe,{children:[Object(B.jsx)(ce,{component:"th",scope:"row",children:e.UserName}),Object(B.jsx)(ce,{align:"right",children:n.indexOf(e)+1}),Object(B.jsx)(ce,{align:"right",children:e.totalPoints})]},e.UserId)}))})]})})},le=function(){return Object(B.jsx)("h2",{children:"Kuvat ehk\xe4 :D "})},ue=n(588),de=n(590),je=n.p+"static/media/30balloons.e406932e.jpg",pe=n(583),be=n(584),he=n(88),me=n(585),fe=n(279),xe=n.n(fe),Oe=n(593),ge=n(289),ve=n.p+"static/media/downbythelaituri.23a00da6.jpg",ye=function(e){return Object(B.jsx)("div",{children:Object(B.jsx)("img",{alt:"Heh",src:ve,className:e.className})})};ye.prototype={username:"",className:""};var ke=ye,we=n(278),Ce=n.n(we),Se=Object(b.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1,fontWeight:600},test:{background:"#1B065E !important"},menuapp:{height:"10em",width:"14em",padding:0,marginTop:"-10px",marginBottom:"-12px",textOverflow:"ellipsis"},menuapp2:{"& .MuiIconButton-label ":{textOverflow:"ellipsis",fontSize:"12px",paddingLeft:"3px"},"& .MuiSvgIcon-root":{paddingRight:"6px"}}}}));function Ne(e){var t=e.user,n=t?t.UserName:"",a=Se(),c=r.a.useState(null),o=Object(u.a)(c,2),i=o[0],s=o[1],l=Boolean(i),d=Object(j.f)(),p=function(){s(null)};return Object(B.jsx)("div",{className:a.root,children:Object(B.jsx)(pe.a,{position:"static",children:Object(B.jsxs)(be.a,{children:[Object(B.jsx)(me.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",children:Object(B.jsx)(Ce.a,{onClick:function(){d.goBack()}})}),Object(B.jsx)(he.a,{variant:"h5",className:a.title,children:"M\xf6kkiolympialaiset"}),Object(B.jsxs)("div",{className:a.menuapp2,children:[Object(B.jsxs)(me.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:[Object(B.jsx)(xe.a,{}),n]}),Object(B.jsx)(ge.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:p,children:Object(B.jsx)(Oe.a,{className:a.menuapp,onClick:p,children:Object(B.jsx)(ke,{username:n,className:a.menuapp})})})]})]})})})}var Ie,Fe=n(280),Ue=n(587),Be=n(586),Pe=n(284),Le=n.n(Pe),Te=n(286),Ae=n.n(Te),We=n(285),De=n.n(We),Ee=n(127),Me=Object(b.a)({root:{width:"100%",maxWidth:"inherit",position:"fixed",bottom:0,backgroundColor:"#1B065E"},test:{color:"#FCC8C2"}}),Re=Object(Ee.b)(Be.a)(Ie||(Ie=Object(Fe.a)(["\n  .MuiBottomNavigationAction-root.Mui-selected {\n    color: white !important;\n  }\n"])));function Ke(){var e=Me(),t=r.a.useState(0),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(B.jsxs)(Ue.a,{value:a,onChange:function(e,t){console.log(t),c(t)},showLabels:!0,className:e.root,children:[Object(B.jsx)(Re,{component:d.b,to:"/home",className:e.test,label:"Lajit",icon:Object(B.jsx)(Le.a,{})}),Object(B.jsx)(Re,{component:d.b,to:"/statistics",className:e.test,label:"Tilastot",icon:Object(B.jsx)(De.a,{})}),Object(B.jsx)(Re,{component:d.b,to:"/pictures",className:e.test,label:"Kuvat?",icon:Object(B.jsx)(Ae.a,{})})]})}var ze=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.username,r=e.className;return Object(B.jsx)("div",{children:Object(B.jsxs)("form",{onSubmit:t,noValidate:!0,autoComplete:"off",children:[Object(B.jsx)(x.d,{className:r,id:"outlined-basic",label:"K\xe4ytt\xe4j\xe4tunnus",variant:"outlined",value:a,onChange:n,inputStyle:{color:"white"},floatingLabelText:"K\xe4ytt\xe4j\xe4tunnus",floatingLabelStyle:{color:"white"}}),Object(B.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",children:"Kirjaudu"})]})})},Je=n(288),Ge=n(287),He=function(e){var t=Object(j.g)().id;return console.log(t),Object(B.jsx)("h2",{children:"Yksitt\xe4inen laji"})},_e={paperContainer:{backgroundImage:"url(".concat(je,")"),height:"100%",minHeight:"100vh",backgroundPosition:"-5rem 14rem",backgroundRepeat:"space",backgroundColor:"#383838",color:"white",paddingLeft:0,paddingRight:0,paddingBottom:"80px"}},Ve=Object(Je.a)({palette:{primary:{main:"#FFFF"},secondary:{main:"#FFFF"}}}),Ye=Object(b.a)({boxStyles:{backgroundColor:"#1b065e",padding:"1rem",margin:"1rem",opacity:"0.8",borderRadius:15},inputStyles:{color:"white",border:"6px white"}}),qe=function(){var e=Ye(),t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(null),i=Object(u.a)(o,2),p=i[0],b=i[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedCottageAppUser"))){e.next=9;break}return n=JSON.parse(t),console.log(n),e.next=6,Y.getUser(n.UserName);case 6:a=e.sent,console.log(a),a?b(a):window.localStorage.removeItem("loggedCottageAppUser");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={userName:r},e.next=5,Y.createIfNeeded(n);case 5:a=e.sent,console.log(a),window.localStorage.setItem("loggedCottageAppUser",JSON.stringify(a)),b(a),c(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(Ge.MuiThemeProvider,{children:Object(B.jsx)(d.a,{children:Object(B.jsx)(Ee.a,{theme:Ve,children:null===p?Object(B.jsxs)(ue.a,{maxWidth:"sm",style:_e.paperContainer,user:p,children:[Object(B.jsx)(Ne,{}),Object(B.jsx)(de.a,{my:4,className:e.boxStyles,children:Object(B.jsx)(ze,{className:e.inputStyles,username:r,handleUsernameChange:function(e){var t=e.target;return c(t.value)},handleSubmit:h})})]}):Object(B.jsxs)(ue.a,{maxWidth:"sm",style:_e.paperContainer,children:[Object(B.jsx)(Ne,{user:p}),Object(B.jsx)(de.a,{my:4,className:e.boxStyles,children:Object(B.jsxs)(j.c,{children:[Object(B.jsx)(j.a,{path:"/statistics",children:Object(B.jsx)(se,{})}),Object(B.jsx)(j.a,{path:"/pictures",children:Object(B.jsx)(le,{})}),Object(B.jsx)(j.a,{path:"/sport/:id",children:Object(B.jsx)(He,{})}),Object(B.jsx)(j.a,{path:"/",children:Object(B.jsx)(K,{})})]})}),Object(B.jsx)(Ke,{})]})})})})},Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,596)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(B.jsx)(qe,{}),document.getElementById("root")),Qe()}},[[519,1,2]]]);
//# sourceMappingURL=main.dd1de8d9.chunk.js.map