(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{64:function(e,t,a){e.exports=a(94)},69:function(e,t,a){},70:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),o=a.n(c),l=a(17),i=a.n(l),u=(a(69),a(70),a(20)),s=a(19),m=a(122),p=a(120),d=a(123),E=a(26),f=a(124),g=a(140),h=a(125),b=Object(p.a)({title:{marginRight:20},list:{display:"flex",flexDirection:"row",padding:0}}),v=function(){var e=b();return o.a.createElement(m.a,{position:"relative"},o.a.createElement(d.a,null,o.a.createElement(E.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Github Search"),o.a.createElement(f.a,{className:e.list},o.a.createElement(g.a,{button:!0,component:u.c,to:"/",exact:!0},o.a.createElement(h.a,{primary:"Home page"})),o.a.createElement(g.a,{button:!0,component:u.c,to:"/about"},o.a.createElement(h.a,{primary:"Information"})))))},O=a(23),y=a(138),j=Object(c.createContext)(),x=Object(c.createContext)(),w=Object(p.a)((function(e){return{root:{padding:"30px 4px",width:500,margin:"0 auto"}}})),_=function(){var e=w(),t=Object(c.useState)(""),a=Object(O.a)(t,2),n=a[0],r=a[1],l=Object(c.useContext)(j),i=Object(c.useContext)(x);return o.a.createElement("form",{className:e.root,onSubmit:function(e){return e.preventDefault()}},o.a.createElement(y.a,{placeholder:"Enter nickname user...",fullWidth:!0,color:"secondary",value:n,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(i.clearUsers(),n.trim()?(l.hide(),i.search(n.trim())):l.show("Enter data user"))}}))},C=a(126),R=a(129),S=a(128),T=a(127),A=a(130),U=Object(p.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"65%",height:"140px"},cardContent:{flexGrow:1}}})),k=function(e){var t=e.user,a=U();return o.a.createElement(C.a,{className:a.card},o.a.createElement(T.a,{className:a.cardMedia,image:t.avatar_url,title:t.login}),o.a.createElement(S.a,{className:a.cardContent},o.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.login)),o.a.createElement(R.a,null,o.a.createElement(A.a,{variant:"outlined",color:"primary",component:u.b,to:"/profile/"+t.login},"Open")))},L=a(132),G=a(131),N=a(133),D=Object(p.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}})),F=function(){var e=D(),t=Object(c.useContext)(x),a=t.loading,n=t.users;return o.a.createElement(c.Fragment,null,o.a.createElement(_,null),o.a.createElement(G.a,{className:e.cardGrid,maxWidth:"md"},o.a.createElement(L.a,{container:!0,spacing:3},a?o.a.createElement(N.a,{size:80,style:{margin:"0 auto"}}):n.map((function(e){return o.a.createElement(L.a,{item:!0,xs:12,sm:6,md:4,key:e.id},o.a.createElement(k,{user:e}))})))))},W=a(134),I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,null),o.a.createElement(G.a,{maxWidth:"md"},o.a.createElement(E.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"300px",marginTop:"30px",padding:"20px"},variant:"h1"},"About page",o.a.createElement(E.a,{variant:"h5"},"Version 1.0.0"))))},B=a(139),H=a(135),P=Object(p.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},cardContent:{flexGrow:1}}})),z=function(e){var t=e.repos,a=P();return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement(C.a,{className:a.card,key:e.id},o.a.createElement(S.a,{className:a.cardContent},o.a.createElement(H.a,{href:e.html_url},e.name)))})))},J=Object(p.a)({root:{maxWidth:445,margin:"20px auto"},media:{height:440}}),M=function(e){var t=e.match,a=J(),n=Object(c.useContext)(x),r=n.getUser,l=n.getRepos,i=n.loading,u=n.user,s=n.repos,m=t.params.name;if(Object(c.useEffect)((function(){r(m),l(m)}),[]),i)return o.a.createElement(N.a,{size:80,style:{margin:"0 auto"}});var p=u.name,d=u.company,g=u.avatar_url,b=u.location,v=u.bio,O=u.blog,y=u.login,j=u.html_url,w=u.followers,_=u.following,R=u.public_repos,U=u.public_gists;return o.a.createElement(c.Fragment,null,o.a.createElement(C.a,{className:a.root},o.a.createElement(T.a,{component:"img",image:g,title:p}),o.a.createElement(S.a,null,o.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},p),b&&o.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},"Location: ",b),v&&o.a.createElement(c.Fragment,null,o.a.createElement("h4",null,"BIO"),o.a.createElement("p",null,v)),o.a.createElement(A.a,{variant:"outlined",href:j},"Open profile"),o.a.createElement(f.a,null,y&&o.a.createElement(h.a,null,o.a.createElement("strong",null,"Username: ")," ",y),d&&o.a.createElement(h.a,null,o.a.createElement("strong",null,"Company: ")," ",d),O&&o.a.createElement(h.a,null,o.a.createElement("strong",null,"Website: ")," ",O)),o.a.createElement(B.a,{label:"Followers: ".concat(w),color:"primary"}),o.a.createElement(B.a,{label:"Following: ".concat(_),color:"secondary"}),o.a.createElement(B.a,{label:"Repos: ".concat(R),style:{backgroundColor:"#9c27b0",color:"#fff"}}),o.a.createElement(B.a,{label:"Gists: ".concat(U),style:{backgroundColor:"#009688",color:"#fff"}}))),o.a.createElement(z,{repos:s}))},q=a(137),K=Object(p.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),V=function(){var e=K(),t=Object(c.useContext)(j),a=t.alert,n=t.hide;return a?o.a.createElement("div",{className:e.root},o.a.createElement(q.a,{onClose:n,severity:"error"},a.text)):null},$=a(8),Q=(n={},Object($.a)(n,"SHOW_ALERT",(function(e,t){return t.payload})),Object($.a)(n,"HIDE_ALERT",(function(){return null})),Object($.a)(n,"DEFAULT",(function(e){return e})),n),X=function(e,t){return(Q[t.type]||Q.DEFAULT)(e,t)},Y=function(e){var t=e.children,a=Object(c.useReducer)(X,null),n=Object(O.a)(a,2),r=n[0],l=n[1];return o.a.createElement(j.Provider,{value:{hide:function(){return l({type:"HIDE_ALERT"})},show:function(e){l({type:"SHOW_ALERT",payload:{text:e}})},alert:r}},t)},Z=a(21),ee=a.n(Z),te=a(32),ae=a(33),ne=a.n(ae),re=a(25),ce=(r={},Object($.a)(r,"SEARCH_USERS",(function(e,t){var a=t.payload;return Object(re.a)({},e,{users:a,loading:!1})})),Object($.a)(r,"GET_REPOS",(function(e,t){var a=t.payload;return Object(re.a)({},e,{repos:a,loading:!1})})),Object($.a)(r,"GET_USER",(function(e,t){var a=t.payload;return Object(re.a)({},e,{user:a,loading:!1})})),Object($.a)(r,"SET_LOADING",(function(e){return Object(re.a)({},e,{loading:!0})})),Object($.a)(r,"CLEAR_USERS",(function(e){return Object(re.a)({},e,{users:[]})})),Object($.a)(r,"DEFAULT",(function(e){return e})),r),oe=function(e,t){return(ce[t.type]||ce.DEFAULT)(e,t)},le=function(e){return"".concat(e,"client_id=").concat("8a98b03875414c33ce15","&client_secret=").concat("0da1264af9cc4446167c496fb7ebd9a4200a5ca6")},ie=function(e){var t=e.children,a=Object(c.useReducer)(oe,{user:{},users:[],loading:!1,repos:[]}),n=Object(O.a)(a,2),r=n[0],l=n[1],i=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,ne.a.get(le("https://api.github.com/search/users?q=".concat(t,"&")));case 3:a=e.sent,l({type:"SEARCH_USERS",payload:a.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,ne.a.get(le("https://api.github.com/users/".concat(t,"?")));case 3:a=e.sent,l({type:"GET_USER",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,ne.a.get(le("https://api.github.com/users/".concat(t,"/repos?per_page=5&")));case 3:a=e.sent,l({type:"GET_REPOS",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){return l({type:"SET_LOADING"})},p=r.user,d=r.users,E=r.repos,f=r.loading;return o.a.createElement(x.Provider,{value:{setLoading:m,search:i,getUser:u,getRepos:s,clearUsers:function(){return l({type:"CLEAR_USERS"})},user:p,users:d,repos:E,loading:f}},t)};var ue=function(){return o.a.createElement(ie,null,o.a.createElement(Y,null,o.a.createElement(u.a,null,o.a.createElement(v,null),o.a.createElement(V,{alert:{text:"Test alert"}}),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",exact:!0,component:F}),o.a.createElement(s.a,{path:"/about",component:I}),o.a.createElement(s.a,{path:"/profile/:name",component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.5aa52a84.chunk.js.map