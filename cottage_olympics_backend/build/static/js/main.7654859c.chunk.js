(this.webpackJsonpcottage_olympics=this.webpackJsonpcottage_olympics||[]).push([[0],{316:function(e,t,n){},318:function(e,t,n){},526:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(316),n(17)),s=n.n(i),l=n(22),u=n(21),d=(n(318),n(75)),j=n(24),p=n(66),b=n(575),h=n(577),f=n(578),g=n(579),O=n(86),m=n(282),x=n.n(m),v=n(27),k=n.n(v),S="https://cottage30.azurewebsites.net/api/sports";["localhost","127.0.0.1"].includes(window.location.hostname)&&(S="http://localhost:3003/api/sports");var y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S+"/"+t,e.next=3,k.a.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={getAll:function(){return k.a.get(S).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(S,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteSport:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(S,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSingle:y},C=n(574),N=n(597),I=n(573),U=n(571),F=n(572),T=n(570),B=n(3),A=function(e){var t=e.open,n=e.handleClose;return Object(B.jsxs)(N.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(T.a,{id:"alert-dialog-title",children:"Poistetaanko laji pysyv\xe4sti?"}),Object(B.jsx)(U.a,{children:Object(B.jsx)(F.a,{id:"alert-dialog-description",children:"Lajia ei v\xe4ltt\xe4m\xe4tt\xe4 voida poistaa jos siihen on jo kirjattu suorituksia"})}),Object(B.jsxs)(I.a,{children:[Object(B.jsx)(C.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(B.jsx)(C.a,{onClick:function(){return n(!0)},color:"primary",autoFocus:!0,children:"Poista"})]})]})},L=n(576),P=n(281),W=n.n(P),E=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},root:{height:80,position:"fixed",bottom:40,right:10,backdropFilter:"blur(1px)",WebkitBackdropFilter:"blur(1px)",width:"100%",textAlign:"right"}}})),z=function(e){var t=e.action,n=e.buttonText,r=E();return Object(B.jsx)("div",{className:r.root,children:Object(B.jsx)("div",{onClick:t,children:Object(B.jsxs)(L.a,{variant:"extended",color:"primary","aria-label":"add",className:r.margin,children:[Object(B.jsx)(W.a,{className:r.extendedIcon}),n]})})})},R=n(594),D=function(e){var t=e.openAdd,n=e.handleSubmit,r=e.description,a=e.name,c=e.handleNameChange,o=e.handleDescriptionChange;return Object(B.jsx)("div",{children:Object(B.jsxs)(N.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(B.jsx)(T.a,{id:"form-dialog-title",children:"Lis\xe4\xe4 uusi m\xf6kkiolympialaji"}),Object(B.jsxs)(U.a,{children:[Object(B.jsx)(R.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nimi",type:"text",fullWidth:!0,variant:"outlined",value:a,onChange:c}),Object(B.jsx)(R.a,{margin:"dense",id:"description",label:"Kuvaus",type:"text",fullWidth:!0,multiline:!0,rows:2,variant:"outlined",value:r,onChange:o})]}),Object(B.jsxs)(I.a,{children:[Object(B.jsx)(C.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(B.jsx)(C.a,{onClick:function(){return n(!0)},color:"primary",variant:"outlined",children:"Tallenna"})]})]})})},M=Object(b.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:"inherit",color:"white","& span":{color:"white",secondary:"white"},"& .MuiTypography-colorTextSecondary":{color:"white"},title:{margin:"0"}},customListItem:{border:"2px solid white !important",borderRadius:"6px",padding:"0.3rem !important",backgroundColor:"#8940B9 !important",marginBottom:"2px !important"},removeButton:{color:"mediumvioletred",border:"2px lightgray outset",backgroundColor:"white",borderRadius:"50%"}}})),K=function(){var e=M(),t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),d=i[0],b=i[1],m=Object(r.useState)(""),v=Object(u.a)(m,2),k=v[0],S=v[1],y=Object(r.useState)(""),C=Object(u.a)(y,2),N=C[0],I=C[1],U=Object(r.useState)(""),F=Object(u.a)(U,2),T=F[0],L=F[1],P=Object(r.useState)(!1),W=Object(u.a)(P,2),E=W[0],R=W[1],K=Object(j.f)(),H=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!1),!t){e.next=7;break}return e.next=4,w.deleteSport(k);case 4:n=e.sent,console.log(200===n.status),200===n.status&&(r=Object(p.a)(a),console.log(r),r=r.filter((function(e){return e.SportId!==k})),console.log(r),c(r),S(""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(!1),!t){e.next=8;break}return n={sportName:T,sportDescription:N},e.next=5,w.create(n);case 5:r=e.sent,o={SportName:T,SportDescription:N,SportId:r.SportId},c([].concat(Object(p.a)(a),[o]));case 8:I(""),L("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){w.getAll().then((function(e){console.log(e),c(e)}))}),[]);return Object(B.jsx)("div",{className:e.root,children:Object(B.jsxs)(h.a,{container:!0,spacing:2,children:[Object(B.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(B.jsx)("div",{className:e.demo,children:Object(B.jsx)(O.b,{className:e.demo,children:a.map((function(t,n){return Object(B.jsxs)(O.c,{className:e.customListItem,onClick:function(){return function(e){console.log(e),K.push("/sport/"+e)}(t.SportId)},children:[Object(B.jsx)(f.a,{primary:t.SportName,secondary:t.SportDescription}),Object(B.jsx)(g.a,{children:Object(B.jsx)(O.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){console.log(e),S(e),b(!0)}(t.SportId)},children:Object(B.jsx)(x.a,{className:e.removeButton})})})]},t.SportId)}))})})}),Object(B.jsx)(A,{open:d,handleClose:H}),Object(B.jsx)(D,{openAdd:E,handleSubmit:J,handleDescriptionChange:function(e){var t=e.target;return I(t.value)},handleNameChange:function(e){var t=e.target;return L(t.value)},name:T,description:N}),Object(B.jsx)(z,{buttonText:"Lis\xe4\xe4 uusi laji",action:function(e){R(!0)}})]})})},H="https://cottage30.azurewebsites.net/api/scores";["localhost","127.0.0.1"].includes(window.location.hostname)&&(H="http://localhost:3003/api/scores");var J={getAll:function(){return k.a.get(H).then((function(e){return e.data}))},upsert:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(H,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteScore:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(H,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getScoresBySportId:function(e){var t=H+"/sport/"+e;return k.a.get(t).then((function(e){return e.data}))}},G="https://cottage30.azurewebsites.net/api/users";["localhost","127.0.0.1"].includes(window.location.hostname)&&(G="http://localhost:3003/api/users");var _=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=G+"/username/"+t,console.log(n),e.next=5,k.a.get(n);case 5:if(r=e.sent,console.log(r),null===r.data||!r.data.UserId){e.next=11;break}return e.abrupt("return",r.data);case 11:return console.log("Ei l\xf6ytyny k\xe4ytt\xe4j\xe4\xe4"),e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(G,t);case 2:return n=e.sent,console.log("luotiinko k\xe4ytt\xe4j\xe4"+n),console.log(n),r={UserId:n.data.UserId,UserName:t.userName},e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t.userName);case 2:if(!(n=e.sent)||!n.UserId){e.next=7;break}return e.abrupt("return",n);case 7:return e.next=9,Y(t);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q={getAll:function(){return k.a.get(G).then((function(e){return e.data}))},create:Y,getUser:_,createIfNeeded:V},Q=n(11),X=n(583),Z=n(585),$=n(580),ee=n(582),te=n(584),ne=n(581),re=n(528),ae=n(195),ce=n.n(ae),oe=Object(Q.a)((function(e){return{head:{backgroundColor:"#5c0057",color:e.palette.common.white,fontWeight:"600"},body:{fontSize:14,color:"#FFF",fontWeight:"500"}}}))($.a),ie=Object(Q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8940B9"},"&:nth-of-type(even)":{backgroundColor:"#4b0082"},color:"#FFF"}}}))(ne.a),se=Object(b.a)({table:{}}),le=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=se();function o(){return(o=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getAll();case 2:return t=e.sent,e.next=5,J.getAll();case 5:i(e.sent,t),t&&t.length>0&&(n=(n=t.sort((function(e,t){return e.totalPoints?e.totalPoints-t.totalPoints:-1}))).reverse(),console.log(n),a(n));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e,t){for(var n=ce.a.groupBy(e,"SportId"),r=ce.a.values(n),a=0;a<r.length;a++){d(r[a],t)}}function d(e,t){for(var n=e.sort((function(e,t){return e-t})),r=0;r<n.length;r++){var a=0;switch(r){case 0:a=10;break;case 1:a=8;break;case 3:a=6;break;case 4:a=5;break;case 5:a=4;break;case 6:a=3;break;case 7:a=2;break;case 8:a=1;break;default:a=0}j(n[r].UserId,a,t)}}function j(e,t,n){var r=n.find((function(t){return t.UserId===e}));r&&(r.totalPoints=r.totalPoints?r.totalPoints+t:t)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(B.jsx)(ee.a,{component:re.a,children:Object(B.jsxs)(X.a,{className:c.table,"aria-label":"customized table",children:[Object(B.jsx)(te.a,{children:Object(B.jsxs)(ne.a,{children:[Object(B.jsx)(oe,{children:"Atleetikko"}),Object(B.jsx)(oe,{align:"right",children:"Sijoitus"}),Object(B.jsx)(oe,{align:"right",children:"Pisteet"})]})}),Object(B.jsx)(Z.a,{children:n.map((function(e){return Object(B.jsxs)(ie,{children:[Object(B.jsx)(oe,{component:"th",scope:"row",children:e.UserName}),Object(B.jsx)(oe,{align:"right",children:n.indexOf(e)+1}),Object(B.jsx)(oe,{align:"right",children:e.totalPoints})]},e.UserId)}))})]})})},ue=n(586),de=n(587),je=(n(283),"api/cloudinaryImages");["localhost","127.0.0.1"].includes(window.location.hostname)&&(je="http://localhost:3003/api/cloudinaryImages");var pe={getAll:function(){return k.a.get(je).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t,(n=new FormData).append("file",t),e.next=5,k.a.post(je,n,{headers:{"Content-Type":"multipart/form-data"}});case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteSport:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(je,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSingle:function(e){var t=je+"/"+e;return k.a.get(t).then((function(e){return e.data}))}},be=(Object(b.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},root:{maxWidth:"80%",maxHeight:"60%",padding:"1rem"}}})),Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,opacity:1},gridList:{width:"100%",height:"100%"}}}))),he=function(){var e=be(),t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=(n[0],n[1],Object(r.useState)({})),c=Object(u.a)(a,2),o=(c[0],c[1],Object(r.useState)([])),i=Object(u.a)(o,2),d=i[0],j=i[1],b=Object(r.useState)({}),h=Object(u.a)(b,2),f=(h[0],h[1]),g={};function O(){return(O=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,pe.create(t);case 3:n=e.sent,console.log(n),j([n[0]].concat(Object(p.a)(d)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){pe.getAll().then((function(e){console.log(e),console.log(e[0]),j(e)}))}),[]);return Object(B.jsxs)("div",{className:e.root,children:[Object(B.jsx)("input",{id:"myInput",type:"file",accept:"image/*",ref:function(e){return g=e},style:{display:"none"},onChange:function(e){f(URL.createObjectURL(e.target.files[0])),function(e){O.apply(this,arguments)}(e.target.files[0])}}),Object(B.jsx)(ue.a,{cellHeight:250,className:e.gridList,cols:3,children:d.map((function(e){return Object(B.jsx)(de.a,{cols:e.cols||3,children:Object(B.jsx)("img",{src:e.url,alt:e.title})},e.asset_id)}))}),Object(B.jsx)(z,{buttonText:"Uusi kuva",action:function(){g.click()}})]})},fe=n(593),ge=n(595),Oe=n.p+"static/media/30balloons2.7504a59d.png",me=n(588),xe=n(589),ve=n(89),ke=n(590),Se=n(285),ye=n.n(Se),we=n(598),Ce=n(295),Ne=n.p+"static/media/downbythelaituri.23a00da6.jpg",Ie=function(e){return Object(B.jsx)("div",{children:Object(B.jsx)("img",{alt:"Heh",src:Ne,className:e.className})})};Ie.prototype={username:"",className:""};var Ue=Ie,Fe=n(284),Te=n.n(Fe),Be=Object(b.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1,fontWeight:600},test:{background:"#1B065E !important"},menuapp:{height:"10em",width:"14em",padding:0,marginTop:"-10px",marginBottom:"-12px",textOverflow:"ellipsis"},menuapp2:{"& .MuiIconButton-label ":{textOverflow:"ellipsis",fontSize:"12px",paddingLeft:"3px"},"& .MuiSvgIcon-root":{paddingRight:"6px"}}}}));function Ae(e){var t=e.user,n=t?t.UserName:"",r=Be(),c=a.a.useState(null),o=Object(u.a)(c,2),i=o[0],s=o[1],l=Boolean(i),d=Object(j.f)(),p=function(){s(null)};return Object(B.jsx)("div",{className:r.root,children:Object(B.jsx)(me.a,{position:"static",children:Object(B.jsxs)(xe.a,{children:[Object(B.jsx)(ke.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"menu",children:Object(B.jsx)(Te.a,{onClick:function(){d.goBack()}})}),Object(B.jsx)(ve.a,{variant:"h5",className:r.title,children:"M\xf6kkiolympialaiset"}),Object(B.jsxs)("div",{className:r.menuapp2,children:[Object(B.jsxs)(ke.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:[Object(B.jsx)(ye.a,{}),n]}),Object(B.jsx)(Ce.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:p,children:Object(B.jsx)(we.a,{className:r.menuapp,onClick:p,children:Object(B.jsx)(Ue,{username:n,className:r.menuapp})})})]})]})})})}var Le,Pe=n(286),We=n(592),Ee=n(591),ze=n(290),Re=n.n(ze),De=n(292),Me=n.n(De),Ke=n(291),He=n.n(Ke),Je=n(131),Ge=Object(b.a)({root:{width:"100%",maxWidth:"inherit",position:"fixed",bottom:0,backgroundColor:"#1B065E"},test:{color:"#FCC8C2"}}),_e=Object(Je.b)(Ee.a)(Le||(Le=Object(Pe.a)(["\n  .MuiBottomNavigationAction-root.Mui-selected {\n    color: white !important;\n  }\n"])));function Ye(){var e=Ge(),t=a.a.useState(0),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(B.jsxs)(We.a,{value:r,onChange:function(e,t){console.log(t),c(t)},showLabels:!0,className:e.root,children:[Object(B.jsx)(_e,{component:d.b,to:"/home",className:e.test,label:"Lajit",icon:Object(B.jsx)(Re.a,{})}),Object(B.jsx)(_e,{component:d.b,to:"/statistics",className:e.test,label:"Tilastot",icon:Object(B.jsx)(He.a,{})}),Object(B.jsx)(_e,{component:d.b,to:"/pictures",className:e.test,label:"Kuvat?",icon:Object(B.jsx)(Me.a,{})})]})}var Ve=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.username,a=e.className;return Object(B.jsx)("div",{children:Object(B.jsxs)("form",{onSubmit:t,noValidate:!0,autoComplete:"off",children:[Object(B.jsx)(O.d,{className:a,id:"outlined-basic",label:"K\xe4ytt\xe4j\xe4tunnus",variant:"outlined",value:r,onChange:n,inputStyle:{color:"white"},floatingLabelText:"K\xe4ytt\xe4j\xe4tunnus",floatingLabelStyle:{color:"white"}}),Object(B.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",children:"Kirjaudu"})]})})},qe=n(294),Qe=n(293),Xe=function(e){var t=e.openAdd,n=e.handleSubmit,r=e.score,a=e.handleScoreChange,c=e.sportUnit,o=e.sportUnitShort;return Object(B.jsx)("div",{children:Object(B.jsxs)(N.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(B.jsx)(T.a,{id:"form-dialog-title",children:"P\xe4ivit\xe4/lis\xe4\xe4 tuloksesi"}),Object(B.jsxs)(U.a,{children:[Object(B.jsxs)(F.a,{id:"alert-dialog-description",children:["Yksikk\xf6: ",c," (",o,")"]}),Object(B.jsx)(R.a,{autoFocus:!0,margin:"dense",id:"score",label:"Tulos",type:"text",fullWidth:!0,variant:"outlined",value:r,onChange:a})]}),Object(B.jsxs)(I.a,{children:[Object(B.jsx)(C.a,{onClick:function(){return n(!1)},color:"primary",children:"Peruuta"}),Object(B.jsx)(C.a,{onClick:function(){return n(!0)},color:"primary",variant:"outlined",children:"Tallenna"})]})]})})},Ze=Object(Q.a)((function(e){return{head:{backgroundColor:"#5c0057",color:e.palette.common.white,fontWeight:"600"},body:{fontSize:14,color:"#FFF",fontWeight:"500"}}}))($.a),$e=Object(Q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8940B9"},"&:nth-of-type(even)":{backgroundColor:"#4b0082"},color:"#FFF"}}}))(ne.a),et=Object(b.a)({table:{}}),tt=function(e){var t=et();console.log(e);var n=e.scores,r=e.sport;return console.log("pisteet",n),Object(B.jsx)(ee.a,{component:re.a,children:Object(B.jsxs)(X.a,{className:t.table,"aria-label":"customized table",children:[Object(B.jsx)(te.a,{children:Object(B.jsxs)(ne.a,{children:[Object(B.jsx)(Ze,{children:"Atleetti"}),Object(B.jsx)(Ze,{align:"right",children:"Sijoitus"}),Object(B.jsxs)(Ze,{align:"right",children:["Tulos (",r.UnitShort,")"]})]})}),Object(B.jsx)(Z.a,{children:n.map((function(e){return Object(B.jsxs)($e,{children:[Object(B.jsx)(Ze,{component:"th",scope:"row",children:e.UserName}),Object(B.jsx)(Ze,{align:"right",children:n.indexOf(e)+1}),Object(B.jsx)(Ze,{align:"right",children:e.TotalScore})]},e.ScoreId)}))})]})})},nt=function(e){var t=Object(r.useState)({}),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)([]),i=Object(u.a)(o,2),d=i[0],b=i[1],h=Object(r.useState)(!1),f=Object(u.a)(h,2),g=f[0],O=f[1],m=Object(r.useState)(""),x=Object(u.a)(m,2),v=x[0],k=x[1],S=Object(j.g)().id,y=e.user;Object(r.useEffect)((function(){w.getSingle(S).then((function(e){c(e)}))}),[S]),Object(r.useEffect)((function(){J.getScoresBySportId(S).then((function(e){var t=e.sort((function(e,t){return t.TotalScore-e.TotalScore}));b(t)}))}),[S]);var C=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,c,o,i,l,u,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!1),!t){e.next=16;break}return n=d.find((function(e){return e.UserId===y.UserId})),console.log(n),console.log("sport",a),r={},n?(c={scoreId:n.ScoreId,totalScore:v},r=c):(o={sportId:a.SportId,totalScore:v,userId:y.UserId},r=o),console.log(r),e.next=10,J.upsert(r);case 10:i=e.sent,console.log(i),l=Object(p.a)(d),n?l.find((function(e){return e.ScoreId===n.ScoreId})).TotalScore=v:(u={ScoreId:i.ScoreId,UserId:y.UserId,UserName:y.UserName,TotalScore:v},l=[].concat(Object(p.a)(d),[u])),j=l.sort((function(e,t){return t.TotalScore-e.TotalScore})),b(j);case 16:k("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:a.SportName}),Object(B.jsxs)("h3",{children:["Yksikk\xf6: ",a.Unit," (",a.UnitShort,")"]}),Object(B.jsx)(ge.a,{children:Object(B.jsx)("div",{children:a.SportDescription})}),Object(B.jsx)("h2",{children:"Lajin tulokset"}),d.length>0?Object(B.jsx)(tt,{scores:d,sport:a}):Object(B.jsx)("h3",{children:"Ei kirjattuja tuloksia"}),Object(B.jsx)(z,{buttonText:"Lis\xe4\xe4/muokkaa tulostasi",action:function(e){O(!0)}}),Object(B.jsx)(Xe,{openAdd:g,handleSubmit:C,handleScoreChange:function(e){var t=e.target;return k(t.value)},score:v,sportUnit:a.Unit,sportUnitShort:a.UnitShort})]})},rt={paperContainer:{backgroundImage:"url(".concat(Oe,")"),height:"100%",minHeight:"100vh",backgroundPosition:"-5rem 14rem",backgroundRepeat:"space",backgroundColor:"#383838",color:"white",paddingLeft:0,paddingRight:0,paddingBottom:100}},at=Object(qe.a)({palette:{primary:{main:"#FFFF"},secondary:{main:"#FFFF"}}}),ct=Object(b.a)({boxStyles:{backgroundColor:"#1b065e",padding:"1rem",margin:"1rem",borderRadius:15},inputStyles:{color:"white",border:"6px white"}}),ot=function(){var e=ct(),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(null),i=Object(u.a)(o,2),p=i[0],b=i[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedCottageAppUser"))){e.next=9;break}return n=JSON.parse(t),console.log(n),e.next=6,q.getUser(n.UserName);case 6:r=e.sent,console.log(r),r?b(r):window.localStorage.removeItem("loggedCottageAppUser");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={userName:a},e.next=5,q.createIfNeeded(n);case 5:r=e.sent,console.log(r),window.localStorage.setItem("loggedCottageAppUser",JSON.stringify(r)),b(r),c(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(Qe.MuiThemeProvider,{children:Object(B.jsx)(d.a,{children:Object(B.jsx)(Je.a,{theme:at,children:null===p?Object(B.jsxs)(fe.a,{maxWidth:"sm",style:rt.paperContainer,user:p,children:[Object(B.jsx)(Ae,{}),Object(B.jsx)(ge.a,{my:4,className:e.boxStyles,children:Object(B.jsx)(Ve,{className:e.inputStyles,username:a,handleUsernameChange:function(e){var t=e.target;return c(t.value)},handleSubmit:h})})]}):Object(B.jsxs)(fe.a,{maxWidth:"sm",style:rt.paperContainer,children:[Object(B.jsx)(Ae,{user:p}),Object(B.jsx)(ge.a,{my:4,className:e.boxStyles,children:Object(B.jsxs)(j.c,{children:[Object(B.jsx)(j.a,{path:"/statistics",children:Object(B.jsx)(le,{})}),Object(B.jsx)(j.a,{path:"/pictures",children:Object(B.jsx)(he,{})}),Object(B.jsx)(j.a,{path:"/sport/:id",children:Object(B.jsx)(nt,{user:p})}),Object(B.jsx)(j.a,{path:"/",children:Object(B.jsx)(K,{})})]})}),Object(B.jsx)(Ye,{})]})})})})},it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,601)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(B.jsx)(ot,{}),document.getElementById("root")),it()}},[[526,1,2]]]);
//# sourceMappingURL=main.7654859c.chunk.js.map