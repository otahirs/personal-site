(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),a=n(16),l=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},u=n(5),h=n(22),d=[{index:!0,label:"Otakar Hir\u0161",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,169,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Otakar Hir\u0161"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:otakar.hirs@gmail.com",children:"otakar.hirs@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Otakar. I am a friendly guy of ",Object(c.jsx)("a",{href:"https://www.16personalities.com/intp-personality",children:"INTP-A"})," personality, studying at Faculty of Informatics to b\u0336e\u0336c\u0336o\u0336m\u0336e\u0336 \u0336f\u0336i\u0336l\u0336t\u0336h\u0336y\u0336 \u0336r\u0336i\u0336c\u0336h\u0336 explore the everchanging nature of IT world."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/about",className:"button",children:"Read more"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Otakar Hir\u0161 ",Object(c.jsx)(u.b,{to:"/",children:"otahirs.cz"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Michael D'Angelo",defaultTitle:"Michael D'Angelo",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};t.a=k},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),a=n(30),l=n(31),r=n(32),s=n(33),j=[{link:"https://github.com/otahirs",label:"Github",icon:a.faGithub},{link:"https://www.facebook.com/otakar.hirs/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/otiiicek/",label:"Instagram",icon:r.faInstagram},{link:"mailto:otakar.hirs@gmail.com",label:"Email",icon:s.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),l=n(15),r=n(5),s=n(3),j=n(21),o=(n(46),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,166))}))),b=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,173))})),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,167))})),h=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,168))})),d=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,172))})),O=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,170))})),x=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,171))})),m=function(){return Object(c.jsx)(r.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:o}),Object(c.jsx)(s.a,{path:"/projects",component:d}),Object(c.jsx)(s.a,{path:"/stats",component:x}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:O}),Object(c.jsx)(s.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[47,1,3]]]);
//# sourceMappingURL=main.90668abe.chunk.js.map