(this.webpackJsonpcottage_olympics=this.webpackJsonpcottage_olympics||[]).push([[0],{280:function(e,t,n){},282:function(e,t,n){},491:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),i=(n(280),n(69)),s=n.n(i),l=n(106),u=n(36),j=(n(282),n(73)),b=n(18),d=n(11),h=function(){return Object(d.jsx)("div",{children:"koti"})},p=n(169),O=n.n(p),m="api/users",x=function(){return O.a.get(m).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){x().then((function(e){console.log(e),c(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Tilastot"}),n.map((function(e,t){return Object(d.jsx)("div",{children:e.UserName})}))]})},f=function(){return Object(d.jsx)("h2",{children:"Kuvat ehk\xe4 :D "})},v=n(533),y=n(535),C=(n.p,n.p+"static/media/30balloons.e406932e.jpg"),S=n(264),w=n(525),k=n(526),N=n(527),F=n(529),B=n(528),L=n(255),T=n.n(L),E=n(536),I=n(534),K=(n(250),Object(S.a)({palette:{background:{xs:"red",sm:"blue",md:"green"}}}),Object(w.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1},test:{background:"#1B065E !important"}}})));function M(e){var t=e.user;console.log(t);var n=t?t.username:"",a=K(),r=c.a.useState(!0),o=Object(u.a)(r,2),i=o[0],s=(o[1],c.a.useState(null)),l=Object(u.a)(s,2),j=l[0],b=l[1],h=Boolean(j),p=function(){b(null)};return Object(d.jsx)("div",{className:a.root,children:Object(d.jsx)(k.a,{position:"static",children:Object(d.jsxs)(N.a,{children:[Object(d.jsx)(B.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"}),Object(d.jsx)(F.a,{variant:"h6",className:a.title,children:"(3)0lympialaiset"}),i&&Object(d.jsxs)("div",{children:[Object(d.jsxs)(B.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:[Object(d.jsx)(T.a,{}),n]}),Object(d.jsxs)(I.a,{id:"menu-appbar",anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:p,children:[Object(d.jsx)(E.a,{onClick:p,children:"Profile"}),Object(d.jsx)(E.a,{onClick:p,children:"My account"})]})]})]})})})}var P,U=n(256),J=n(531),z=n(530),A=n(260),D=n.n(A),R=n(262),W=n.n(R),G=n(261),_=n.n(G),V=n(111),q=Object(w.a)({root:{width:"inherit",maxWidth:"inherit",position:"fixed",bottom:0,backgroundColor:"#1B065E"},test:{color:"#FCC8C2"}}),H=Object(V.b)(z.a)(P||(P=Object(U.a)(["\n  .MuiBottomNavigationAction-root.Mui-selected {\n    color: white !important;\n  }\n"])));function Q(){var e=q(),t=c.a.useState(0),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(d.jsxs)(J.a,{value:a,onChange:function(e,t){console.log(t),r(t)},showLabels:!0,className:e.root,children:[Object(d.jsx)(H,{component:j.b,to:"/home",className:e.test,label:"Lajit",icon:Object(d.jsx)(D.a,{})}),Object(d.jsx)(H,{component:j.b,to:"/statistics",className:e.test,label:"Tilastot",icon:Object(d.jsx)(_.a,{})}),Object(d.jsx)(H,{component:j.b,to:"/pictures",className:e.test,label:"Kuvat?",icon:Object(d.jsx)(W.a,{})})]})}var X=n(532),Y=n(168),Z=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.username,c=e.className;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:t,noValidate:!0,autoComplete:"off",children:[Object(d.jsx)(Y.a,{className:c,id:"outlined-basic",label:"K\xe4ytt\xe4j\xe4tunnus",variant:"outlined",value:a,onChange:n,inputStyle:{color:"white"},floatingLabelText:"K\xe4ytt\xe4j\xe4tunnus",floatingLabelStyle:{color:"white"}}),Object(d.jsx)(X.a,{type:"submit",variant:"contained",color:"primary",children:"Kirjaudu"})]})})},$=n(263),ee={paperContainer:{backgroundImage:"url(".concat(C,")"),height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",color:"white",paddingLeft:0,paddingRight:0}},te=Object(S.a)({palette:{primary:{main:"#FFFF"}}}),ne=Object(w.a)({boxStyles:{backgroundColor:"#1b065e",padding:"1rem",margin:"1rem",opacity:"0.8",borderRadius:15},inputStyles:{color:"white",border:"6px white"}}),ae=function(){var e=ne(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(null),i=Object(u.a)(o,2),p=i[0],O=i[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedCottageAppUser");if(e){var t=JSON.parse(e);O(t)}}),[]);var m=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{n={username:c},window.localStorage.setItem("loggedCottageAppUser",JSON.stringify(n)),O(n),r("")}catch(a){console.log(a)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)($.MuiThemeProvider,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(V.a,{theme:te,children:null===p?Object(d.jsxs)(v.a,{maxWidth:"sm",style:ee.paperContainer,user:p,children:[Object(d.jsx)(M,{}),Object(d.jsx)(y.a,{my:4,className:e.boxStyles,children:Object(d.jsx)(Z,{className:e.inputStyles,username:c,handleUsernameChange:function(e){var t=e.target;return r(t.value)},handleSubmit:m})})]}):Object(d.jsxs)(v.a,{maxWidth:"sm",style:ee.paperContainer,children:[Object(d.jsx)(M,{user:p}),Object(d.jsx)(y.a,{my:4,className:e.boxStyles,children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/statistics",children:Object(d.jsx)(g,{})}),Object(d.jsx)(b.a,{path:"/pictures",children:Object(d.jsx)(f,{})}),Object(d.jsx)(b.a,{path:"/",children:Object(d.jsx)(h,{})})]})}),Object(d.jsx)(Q,{})]})})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,539)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(ae,{}),document.getElementById("root")),ce()}},[[491,1,2]]]);
//# sourceMappingURL=main.ddb0bfc8.chunk.js.map