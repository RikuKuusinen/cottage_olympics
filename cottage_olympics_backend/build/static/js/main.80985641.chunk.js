(this.webpackJsonpcottage_olympics=this.webpackJsonpcottage_olympics||[]).push([[0],{316:function(e,t,n){},318:function(e,t,n){},526:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(316),n(17)),s=n.n(i),l=n(22),u=n(21),d=(n(318),n(75)),j=n(24),p=n(66),b=n(574),h=n(576),f=n(577),O=n(578),m=n(86),g=n(282),x=n.n(g),v=n(27),k=n.n(v),S="api/sports";["localhost","127.0.0.1"].includes(window.location.hostname)&&(S="http://localhost:3003/api/sports");var y={getAll:function(){return k.a.get(S).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(S,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteSport:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(S,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSingle:function(e){var t=S+"/"+e;return k.a.get(t).then((function(e){return e.data}))}},w=n(573),C=n(596),N=n(572),I=n(570),U=n(571),F=n(569),T=n(3),B=function(e){var t=e.open,n=e.handleClose;return Object(T.jsxs)(C.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(T.jsx)(F.a,{id:"alert-dialog-title",children:"Poistetaanko laji pysyv\xe4sti?"}),Object(T.jsx)(I.a,{children:Object(T.jsx)(U.a,{id:"alert-dialog-description",children:"Lajia ei v\xe4ltt\xe4m\xe4tt\xe4 voida poistaa jos siihen on jo kirjattu suorituksia"})}),Object(T.jsxs)(N.a,{children:[Object(T.jsx)(w.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(T.jsx)(w.a,{onClick:function(){return n(!0)},color:"primary",autoFocus:!0,children:"Poista"})]})]})},A=n(575),L=n(281),P=n.n(L),W=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},root:{height:80,position:"fixed",bottom:40,right:10,backdropFilter:"blur(1px)",WebkitBackdropFilter:"blur(1px)",width:"100%",textAlign:"right"}}})),E=function(e){var t=e.action,n=e.buttonText,r=W();return Object(T.jsx)("div",{className:r.root,children:Object(T.jsx)("div",{onClick:t,children:Object(T.jsxs)(A.a,{variant:"extended",color:"primary","aria-label":"add",className:r.margin,children:[Object(T.jsx)(P.a,{className:r.extendedIcon}),n]})})})},R=n(593),D=function(e){var t=e.openAdd,n=e.handleSubmit,r=e.description,a=e.name,c=e.handleNameChange,o=e.handleDescriptionChange;return Object(T.jsx)("div",{children:Object(T.jsxs)(C.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)(F.a,{id:"form-dialog-title",children:"Lis\xe4\xe4 uusi m\xf6kkiolympialaji"}),Object(T.jsxs)(I.a,{children:[Object(T.jsx)(R.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nimi",type:"text",fullWidth:!0,variant:"outlined",value:a,onChange:c}),Object(T.jsx)(R.a,{margin:"dense",id:"description",label:"Kuvaus",type:"text",fullWidth:!0,multiline:!0,rows:2,variant:"outlined",value:r,onChange:o})]}),Object(T.jsxs)(N.a,{children:[Object(T.jsx)(w.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(T.jsx)(w.a,{onClick:function(){return n(!0)},color:"primary",variant:"outlined",children:"Tallenna"})]})]})})},z=Object(b.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:"inherit",color:"white","& span":{color:"white",secondary:"white"},"& .MuiTypography-colorTextSecondary":{color:"white"},title:{margin:"0"}},customListItem:{border:"2px solid white !important",borderRadius:"6px",padding:"0.3rem !important",backgroundColor:"#8940B9 !important",marginBottom:"2px !important"},removeButton:{color:"mediumvioletred",border:"2px lightgray outset",backgroundColor:"white",borderRadius:"50%"}}})),M=function(){var e=z(),t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),d=i[0],b=i[1],g=Object(r.useState)(""),v=Object(u.a)(g,2),k=v[0],S=v[1],w=Object(r.useState)(""),C=Object(u.a)(w,2),N=C[0],I=C[1],U=Object(r.useState)(""),F=Object(u.a)(U,2),A=F[0],L=F[1],P=Object(r.useState)(!1),W=Object(u.a)(P,2),R=W[0],M=W[1],K=Object(j.f)(),H=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!1),!t){e.next=7;break}return e.next=4,y.deleteSport(k);case 4:n=e.sent,console.log(200===n.status),200===n.status&&(r=Object(p.a)(a),console.log(r),r=r.filter((function(e){return e.SportId!==k})),console.log(r),c(r),S(""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(!1),!t){e.next=8;break}return n={sportName:A,sportDescription:N},e.next=5,y.create(n);case 5:r=e.sent,o={SportName:A,SportDescription:N,SportId:r.SportId},c([].concat(Object(p.a)(a),[o]));case 8:I(""),L("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){y.getAll().then((function(e){console.log(e),c(e)}))}),[]);return Object(T.jsx)("div",{className:e.root,children:Object(T.jsxs)(h.a,{container:!0,spacing:2,children:[Object(T.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(T.jsx)("div",{className:e.demo,children:Object(T.jsx)(m.b,{className:e.demo,children:a.map((function(t,n){return Object(T.jsxs)(m.c,{className:e.customListItem,onClick:function(){return function(e){console.log(e),K.push("/sport/"+e)}(t.SportId)},children:[Object(T.jsx)(f.a,{primary:t.SportName,secondary:t.SportDescription}),Object(T.jsx)(O.a,{children:Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){console.log(e),S(e),b(!0)}(t.SportId)},children:Object(T.jsx)(x.a,{className:e.removeButton})})})]},t.SportId)}))})})}),Object(T.jsx)(B,{open:d,handleClose:H}),Object(T.jsx)(D,{openAdd:R,handleSubmit:J,handleDescriptionChange:function(e){var t=e.target;return I(t.value)},handleNameChange:function(e){var t=e.target;return L(t.value)},name:A,description:N}),Object(T.jsx)(E,{buttonText:"Lis\xe4\xe4 uusi laji",action:function(e){M(!0)}})]})})},K="https://cottage30.azurewebsites.net/api/scores";["localhost","127.0.0.1"].includes(window.location.hostname)&&(K="http://localhost:3003/api/scores");var H={getAll:function(){return k.a.get(K).then((function(e){return e.data}))},upsert:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(K,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteScore:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(K,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getScoresBySportId:function(e){var t=K+"/sport/"+e;return k.a.get(t).then((function(e){return e.data}))}},J="api/users";["localhost","127.0.0.1"].includes(window.location.hostname)&&(J="http://localhost:3003/api/users");var G=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=J+"/username/"+t,console.log(n),e.next=5,k.a.get(n);case 5:if(r=e.sent,console.log(r),null===r.data||!r.data.UserId){e.next=11;break}return e.abrupt("return",r.data);case 11:return console.log("Ei l\xf6ytyny k\xe4ytt\xe4j\xe4\xe4"),e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(J,t);case 2:return n=e.sent,console.log("luotiinko k\xe4ytt\xe4j\xe4"+n),console.log(n),r={UserId:n.data.UserId,UserName:t.userName},e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t.userName);case 2:if(!(n=e.sent)||!n.UserId){e.next=7;break}return e.abrupt("return",n);case 7:return e.next=9,_(t);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V={getAll:function(){return k.a.get(J).then((function(e){return e.data}))},create:_,getUser:G,createIfNeeded:Y},q=n(11),Q=n(582),X=n(584),Z=n(579),$=n(581),ee=n(583),te=n(580),ne=n(528),re=n(195),ae=n.n(re),ce=Object(q.a)((function(e){return{head:{backgroundColor:"#5c0057",color:e.palette.common.white,fontWeight:"600"},body:{fontSize:14,color:"#FFF",fontWeight:"500"}}}))(Z.a),oe=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8940B9"},"&:nth-of-type(even)":{backgroundColor:"#4b0082"},color:"#FFF"}}}))(te.a),ie=Object(b.a)({table:{}}),se=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=ie();function o(){return(o=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.getAll();case 2:return t=e.sent,e.next=5,H.getAll();case 5:i(e.sent,t),t&&t.length>0&&(n=(n=t.sort((function(e,t){return e.totalPoints?e.totalPoints-t.totalPoints:-1}))).reverse(),console.log(n),a(n));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e,t){for(var n=ae.a.groupBy(e,"SportId"),r=ae.a.values(n),a=0;a<r.length;a++){d(r[a],t)}}function d(e,t){for(var n=e.sort((function(e,t){return e-t})),r=0;r<n.length;r++){var a=0;switch(r){case 0:a=10;break;case 1:a=8;break;case 3:a=6;break;case 4:a=5;break;case 5:a=4;break;case 6:a=3;break;case 7:a=2;break;case 8:a=1;break;default:a=0}j(n[r].UserId,a,t)}}function j(e,t,n){var r=n.find((function(t){return t.UserId===e}));r&&(r.totalPoints=r.totalPoints?r.totalPoints+t:t)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(T.jsx)($.a,{component:ne.a,children:Object(T.jsxs)(Q.a,{className:c.table,"aria-label":"customized table",children:[Object(T.jsx)(ee.a,{children:Object(T.jsxs)(te.a,{children:[Object(T.jsx)(ce,{children:"Atleetikko"}),Object(T.jsx)(ce,{align:"right",children:"Sijoitus"}),Object(T.jsx)(ce,{align:"right",children:"Pisteet"})]})}),Object(T.jsx)(X.a,{children:n.map((function(e){return Object(T.jsxs)(oe,{children:[Object(T.jsx)(ce,{component:"th",scope:"row",children:e.UserName}),Object(T.jsx)(ce,{align:"right",children:n.indexOf(e)+1}),Object(T.jsx)(ce,{align:"right",children:e.totalPoints})]},e.UserId)}))})]})})},le=n(585),ue=n(586),de=(n(283),"api/cloudinaryImages");["localhost","127.0.0.1"].includes(window.location.hostname)&&(de="http://localhost:3003/api/cloudinaryImages");var je={getAll:function(){return k.a.get(de).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t,(n=new FormData).append("file",t),e.next=5,k.a.post(de,n,{headers:{"Content-Type":"multipart/form-data"}});case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteSport:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(de,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSingle:function(e){var t=de+"/"+e;return k.a.get(t).then((function(e){return e.data}))}},pe=(Object(b.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},root:{maxWidth:"80%",maxHeight:"60%",padding:"1rem"}}})),Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,opacity:1},gridList:{width:"100%",height:"100%"}}}))),be=function(){var e=pe(),t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=(n[0],n[1],Object(r.useState)({})),c=Object(u.a)(a,2),o=(c[0],c[1],Object(r.useState)([])),i=Object(u.a)(o,2),d=i[0],j=i[1],b=Object(r.useState)({}),h=Object(u.a)(b,2),f=(h[0],h[1]),O={};function m(){return(m=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,je.create(t);case 3:n=e.sent,console.log(n),j([n[0]].concat(Object(p.a)(d)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){je.getAll().then((function(e){console.log(e),console.log(e[0]),j(e)}))}),[]);return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)("input",{id:"myInput",type:"file",accept:"image/*",ref:function(e){return O=e},style:{display:"none"},onChange:function(e){f(URL.createObjectURL(e.target.files[0])),function(e){m.apply(this,arguments)}(e.target.files[0])}}),Object(T.jsx)(le.a,{cellHeight:250,className:e.gridList,cols:3,children:d.map((function(e){return Object(T.jsx)(ue.a,{cols:e.cols||3,children:Object(T.jsx)("img",{src:e.url,alt:e.title})},e.asset_id)}))}),Object(T.jsx)(E,{buttonText:"Uusi kuva",action:function(){O.click()}})]})},he=n(592),fe=n(594),Oe=n.p+"static/media/30balloons2.7504a59d.png",me=n(587),ge=n(588),xe=n(89),ve=n(589),ke=n(285),Se=n.n(ke),ye=n(597),we=n(295),Ce=n.p+"static/media/downbythelaituri.23a00da6.jpg",Ne=function(e){return Object(T.jsx)("div",{children:Object(T.jsx)("img",{alt:"Heh",src:Ce,className:e.className})})};Ne.prototype={username:"",className:""};var Ie=Ne,Ue=n(284),Fe=n.n(Ue),Te=Object(b.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1,fontWeight:600},test:{background:"#1B065E !important"},menuapp:{height:"10em",width:"14em",padding:0,marginTop:"-10px",marginBottom:"-12px",textOverflow:"ellipsis"},menuapp2:{"& .MuiIconButton-label ":{textOverflow:"ellipsis",fontSize:"12px",paddingLeft:"3px"},"& .MuiSvgIcon-root":{paddingRight:"6px"}}}}));function Be(e){var t=e.user,n=t?t.UserName:"",r=Te(),c=a.a.useState(null),o=Object(u.a)(c,2),i=o[0],s=o[1],l=Boolean(i),d=Object(j.f)(),p=function(){s(null)};return Object(T.jsx)("div",{className:r.root,children:Object(T.jsx)(me.a,{position:"static",children:Object(T.jsxs)(ge.a,{children:[Object(T.jsx)(ve.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"menu",children:Object(T.jsx)(Fe.a,{onClick:function(){d.goBack()}})}),Object(T.jsx)(xe.a,{variant:"h5",className:r.title,children:"M\xf6kkiolympialaiset"}),Object(T.jsxs)("div",{className:r.menuapp2,children:[Object(T.jsxs)(ve.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:[Object(T.jsx)(Se.a,{}),n]}),Object(T.jsx)(we.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:p,children:Object(T.jsx)(ye.a,{className:r.menuapp,onClick:p,children:Object(T.jsx)(Ie,{username:n,className:r.menuapp})})})]})]})})})}var Ae,Le=n(286),Pe=n(591),We=n(590),Ee=n(290),Re=n.n(Ee),De=n(292),ze=n.n(De),Me=n(291),Ke=n.n(Me),He=n(131),Je=Object(b.a)({root:{width:"100%",maxWidth:"inherit",position:"fixed",bottom:0,backgroundColor:"#1B065E"},test:{color:"#FCC8C2"}}),Ge=Object(He.b)(We.a)(Ae||(Ae=Object(Le.a)(["\n  .MuiBottomNavigationAction-root.Mui-selected {\n    color: white !important;\n  }\n"])));function _e(){var e=Je(),t=a.a.useState(0),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(T.jsxs)(Pe.a,{value:r,onChange:function(e,t){console.log(t),c(t)},showLabels:!0,className:e.root,children:[Object(T.jsx)(Ge,{component:d.b,to:"/home",className:e.test,label:"Lajit",icon:Object(T.jsx)(Re.a,{})}),Object(T.jsx)(Ge,{component:d.b,to:"/statistics",className:e.test,label:"Tilastot",icon:Object(T.jsx)(Ke.a,{})}),Object(T.jsx)(Ge,{component:d.b,to:"/pictures",className:e.test,label:"Kuvat?",icon:Object(T.jsx)(ze.a,{})})]})}var Ye=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.username,a=e.className;return Object(T.jsx)("div",{children:Object(T.jsxs)("form",{onSubmit:t,noValidate:!0,autoComplete:"off",children:[Object(T.jsx)(m.d,{className:a,id:"outlined-basic",label:"K\xe4ytt\xe4j\xe4tunnus",variant:"outlined",value:r,onChange:n,inputStyle:{color:"white"},floatingLabelText:"K\xe4ytt\xe4j\xe4tunnus",floatingLabelStyle:{color:"white"}}),Object(T.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",children:"Kirjaudu"})]})})},Ve=n(294),qe=n(293),Qe=function(e){var t=e.openAdd,n=e.handleSubmit,r=e.score,a=e.handleScoreChange,c=e.sportUnit,o=e.sportUnitShort;return Object(T.jsx)("div",{children:Object(T.jsxs)(C.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)(F.a,{id:"form-dialog-title",children:"P\xe4ivit\xe4/lis\xe4\xe4 tuloksesi"}),Object(T.jsxs)(I.a,{children:[Object(T.jsxs)(U.a,{id:"alert-dialog-description",children:["Yksikk\xf6: ",c," (",o,")"]}),Object(T.jsx)(R.a,{autoFocus:!0,margin:"dense",id:"score",label:"Tulos",type:"text",fullWidth:!0,variant:"outlined",value:r,onChange:a})]}),Object(T.jsxs)(N.a,{children:[Object(T.jsx)(w.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(T.jsx)(w.a,{onClick:function(){return n(!0)},color:"primary",variant:"outlined",children:"Tallenna"})]})]})})},Xe=Object(q.a)((function(e){return{head:{backgroundColor:"#5c0057",color:e.palette.common.white,fontWeight:"600"},body:{fontSize:14,color:"#FFF",fontWeight:"500"}}}))(Z.a),Ze=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8940B9"},"&:nth-of-type(even)":{backgroundColor:"#4b0082"},color:"#FFF"}}}))(te.a),$e=Object(b.a)({table:{}}),et=function(e){var t=$e();console.log(e);var n=e.scores,r=e.sport;return console.log("pisteet",n),Object(T.jsx)($.a,{component:ne.a,children:Object(T.jsxs)(Q.a,{className:t.table,"aria-label":"customized table",children:[Object(T.jsx)(ee.a,{children:Object(T.jsxs)(te.a,{children:[Object(T.jsx)(Xe,{children:"Atleetti"}),Object(T.jsx)(Xe,{align:"right",children:"Sijoitus"}),Object(T.jsxs)(Xe,{align:"right",children:["Tulos (",r.UnitShort,")"]})]})}),Object(T.jsx)(X.a,{children:n.map((function(e){return Object(T.jsxs)(Ze,{children:[Object(T.jsx)(Xe,{component:"th",scope:"row",children:e.UserName}),Object(T.jsx)(Xe,{align:"right",children:n.indexOf(e)+1}),Object(T.jsx)(Xe,{align:"right",children:e.TotalScore})]},e.ScoreId)}))})]})})},tt=function(e){var t=Object(r.useState)({}),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)([]),i=Object(u.a)(o,2),d=i[0],b=i[1],h=Object(r.useState)(!1),f=Object(u.a)(h,2),O=f[0],m=f[1],g=Object(r.useState)(""),x=Object(u.a)(g,2),v=x[0],k=x[1],S=Object(j.g)().id,w=e.user;Object(r.useEffect)((function(){y.getSingle(S).then((function(e){c(e)}))}),[S]),Object(r.useEffect)((function(){H.getScoresBySportId(S).then((function(e){var t=e.sort((function(e,t){return t.TotalScore-e.TotalScore}));b(t)}))}),[S]);var C=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,c,o,i,l,u,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(!1),!t){e.next=13;break}return n=d.find((function(e){return e.UserId===w.UserId})),r={},n?(c={scoreId:n.ScoreId,totalScore:v},r=c):(o={sportId:a.SportId,totalScore:v,userId:w.UserId},r=o),e.next=7,H.upsert(r);case 7:i=e.sent,console.log(i),l=Object(p.a)(d),n?l.find((function(e){return e.ScoreId===n.ScoreId})).TotalScore=v:(u={ScoreId:i.ScoreId,UserId:w.UserId,UserName:w.UserName,TotalScore:v},l=[].concat(Object(p.a)(d),[u])),j=l.sort((function(e,t){return t.TotalScore-e.TotalScore})),b(j);case 13:k("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:a.SportName}),Object(T.jsxs)("h3",{children:["Yksikk\xf6: ",a.Unit," (",a.UnitShort,")"]}),Object(T.jsx)(fe.a,{children:Object(T.jsx)("div",{children:a.SportDescription})}),Object(T.jsx)("h2",{children:"Lajin tulokset"}),d.length>0?Object(T.jsx)(et,{scores:d,sport:a}):Object(T.jsx)("h3",{children:"Ei kirjattuja tuloksia"}),Object(T.jsx)(E,{buttonText:"Lis\xe4\xe4/muokkaa tulostasi",action:function(e){m(!0)}}),Object(T.jsx)(Qe,{openAdd:O,handleSubmit:C,handleScoreChange:function(e){var t=e.target;return k(t.value)},score:v,sportUnit:a.Unit,sportUnitShort:a.UnitShort})]})},nt={paperContainer:{backgroundImage:"url(".concat(Oe,")"),height:"100%",minHeight:"100vh",backgroundPosition:"-5rem 14rem",backgroundRepeat:"space",backgroundColor:"#383838",color:"white",paddingLeft:0,paddingRight:0,paddingBottom:100}},rt=Object(Ve.a)({palette:{primary:{main:"#FFFF"},secondary:{main:"#FFFF"}}}),at=Object(b.a)({boxStyles:{backgroundColor:"#1b065e",padding:"1rem",margin:"1rem",borderRadius:15},inputStyles:{color:"white",border:"6px white"}}),ct=function(){var e=at(),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(null),i=Object(u.a)(o,2),p=i[0],b=i[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedCottageAppUser"))){e.next=9;break}return n=JSON.parse(t),console.log(n),e.next=6,V.getUser(n.UserName);case 6:r=e.sent,console.log(r),r?b(r):window.localStorage.removeItem("loggedCottageAppUser");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={userName:a},e.next=5,V.createIfNeeded(n);case 5:r=e.sent,console.log(r),window.localStorage.setItem("loggedCottageAppUser",JSON.stringify(r)),b(r),c(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)(qe.MuiThemeProvider,{children:Object(T.jsx)(d.a,{children:Object(T.jsx)(He.a,{theme:rt,children:null===p?Object(T.jsxs)(he.a,{maxWidth:"sm",style:nt.paperContainer,user:p,children:[Object(T.jsx)(Be,{}),Object(T.jsx)(fe.a,{my:4,className:e.boxStyles,children:Object(T.jsx)(Ye,{className:e.inputStyles,username:a,handleUsernameChange:function(e){var t=e.target;return c(t.value)},handleSubmit:h})})]}):Object(T.jsxs)(he.a,{maxWidth:"sm",style:nt.paperContainer,children:[Object(T.jsx)(Be,{user:p}),Object(T.jsx)(fe.a,{my:4,className:e.boxStyles,children:Object(T.jsxs)(j.c,{children:[Object(T.jsx)(j.a,{path:"/statistics",children:Object(T.jsx)(se,{})}),Object(T.jsx)(j.a,{path:"/pictures",children:Object(T.jsx)(be,{})}),Object(T.jsx)(j.a,{path:"/sport/:id",children:Object(T.jsx)(tt,{user:p})}),Object(T.jsx)(j.a,{path:"/",children:Object(T.jsx)(M,{})})]})}),Object(T.jsx)(_e,{})]})})})})},ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,600)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(T.jsx)(ct,{}),document.getElementById("root")),ot()}},[[526,1,2]]]);
//# sourceMappingURL=main.80985641.chunk.js.map