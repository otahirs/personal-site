(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[1],{24:function(e,t,n){"use strict";var c=n(0),a=n(21),r=n(60),l=n(5),s=n(8),i=[{index:!0,label:"Otakar Hir\u0161",path:"/"},{label:"About",path:"/about"},{label:"Diary",path:"/diary"},{label:"Orienteering",path:"/orienteering"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],j=n(1),b=Object(c.lazy)((function(){return n.e(6).then(n.t.bind(null,154,7))})),o=function(){var e=Object(r.a)("routes").t,t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],o=n[1];return Object(j.jsxs)("div",{className:"hamburger-container",children:[Object(j.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(j.jsx)("ul",{children:a?Object(j.jsx)("li",{className:"menu close-menu",children:Object(j.jsx)("div",{onClick:function(){return o(!a)},className:"menu-hover",children:"\u2715"})}):Object(j.jsx)("li",{className:"menu open-menu",children:Object(j.jsx)("div",{onClick:function(){return o(!a)},className:"menu-hover",children:"\u2630"})})})}),Object(j.jsx)(c.Suspense,{fallback:"",children:Object(j.jsx)(b,{right:!0,isOpen:a,children:Object(j.jsx)("ul",{className:"hamburger-ul",children:i.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:t.path,onClick:function(){return o(!a)},children:Object(j.jsx)("h3",{className:t.index&&"index-li",children:e(t.label)})})},t.label)}))})})})]})},u=function(){var e=Object(r.a)().i18n,t={fontWeight:"bold",color:"#3c3b3b"},n="cs"===e.language?t:{},c="en"===e.language?t:{};return Object(j.jsxs)("div",{className:"language-select",children:[Object(j.jsx)("span",{style:n,onClick:function(){e.changeLanguage("cs")},children:"CZ"}),Object(j.jsx)("span",{style:c,onClick:function(){e.changeLanguage("en")},children:"ENG"})]})},h=function(){var e=Object(r.a)("routes").t;return Object(j.jsxs)("header",{id:"header",children:[Object(j.jsx)("h1",{className:"index-link",children:i.filter((function(e){return e.index})).map((function(t){return Object(j.jsx)(l.b,{to:t.path,children:e(t.label)},t.label)}))}),Object(j.jsx)("nav",{className:"links",children:Object(j.jsx)("ul",{children:i.filter((function(e){return!e.index})).map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:t.path,children:e(t.label)})},t.label)}))})}),Object(j.jsx)(u,{}),Object(j.jsx)(o,{})]})},d=n(61),O=n(28),x=function(){var e=Object(r.a)().t;return Object(j.jsxs)("section",{id:"sidebar",children:[Object(j.jsxs)("section",{id:"intro",children:[Object(j.jsx)(l.b,{to:"/",className:"logo",children:Object(j.jsx)("img",{src:"".concat("","/images/me_ua.jpg"),alt:""})}),Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{children:"Otakar Hir\u0161"}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"mailto:otakar.hirs@gmail.com",children:"otakar.hirs@gmail.com"})})]})]}),Object(j.jsxs)("section",{className:"blurb",children:[Object(j.jsx)("h2",{children:e("About")}),Object(j.jsx)("p",{children:Object(j.jsxs)(d.a,{i18nKey:"SUMMARY",t:e,children:["Hi,",Object(j.jsx)("br",{}),"I'm Otakar,",Object(j.jsx)("a",{href:"https://www.16personalities.com/intp-personality",target:"_blank",rel:"noreferrer",children:" INTP-A"})," personality,",Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=1rF5SSa29O8",target:"_blank",rel:"noreferrer",children:" orienteering"})," enthusiast,",Object(j.jsx)("a",{href:"https://is.muni.cz/person/485661",target:"_blank",rel:"noreferrer",children:" student"})," of Faculty of Informatics.",Object(j.jsx)("br",{}),"I see myself as a friendly compasionate guy with an unusual sense of humor, but in reality I might come out just as offensive and annoying."]})}),Object(j.jsx)("ul",{className:"actions",children:Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/about",className:"button",children:e("Read more")})})})]}),Object(j.jsxs)("section",{id:"footer",children:[Object(j.jsx)(O.a,{}),Object(j.jsxs)("p",{className:"copyright",children:["\xa9 Otakar Hir\u0161. ",e("All Rights Reserved.")," ",Object(j.jsx)("br",{}),e("Kudos to")," ",Object(j.jsx)("a",{href:"https://github.com/mldangelo/personal-site",target:"_blank",rel:"noreferrer",children:"Michael D'Angelo"})," ",e("and")," ",Object(j.jsx)("a",{href:"https://html5up.net/future-imperfect",target:"_blank",rel:"noreferrer",children:"HTML5UP"}),"."]})]})]})},m=n(3),f=function(){var e=Object(m.e)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},p=function(e){return Object(j.jsxs)(a.b,{children:[Object(j.jsx)(f,{}),Object(j.jsxs)(a.a,{titleTemplate:"%s | Otakar Hir\u0161",defaultTitle:"Otakar Hir\u0161",defer:!1,children:[e.title&&Object(j.jsx)("title",{children:e.title}),Object(j.jsx)("meta",{name:"description",content:e.description}),Object(j.jsx)("script",{async:!0,defer:!0,"data-website-id":"afd9597d-7ce4-455a-be66-490a6cb2c73e",src:"https://analytics.otahirs.cz/dQw4w9WgXcQ.js"})]}),Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(j.jsx)(x,{})]})]})};p.defaultProps={children:null,fullPage:!1,title:null,description:"Otakar Hir\u0161's personal website."};t.a=p},28:function(e,t,n){"use strict";n(0);var c=n(36),a=n(39),r=n(37),l=n(38),s=n(40),i=[{link:"https://www.facebook.com/otakar.hirs/",label:"Facebook",icon:r.faFacebookF},{link:"https://www.instagram.com/otiiicek/",label:"Instagram",icon:l.faInstagram},{link:"https://github.com/otahirs",label:"Github",icon:a.faGithub},{link:"mailto:otakar.hirs@gmail.com",label:"Email",icon:s.faEnvelope}],j=n(1);t.a=function(){return Object(j.jsx)("ul",{className:"icons",children:i.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.link,children:Object(j.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),l=n(23),s=n(7),i=n(29),j=n(31);l.a.use(i.a).use(s.e).init({supportedLngs:["cs","en"],lng:"cs",ns:["translation","about","contact","projects","resume","routes"],debug:!1,backend:{loadPath:"/locales/{{lng}}/{{ns}}.yaml",parse:function(e){return j.a.load(e)}}});l.a;var b=n(5),o=n(3),u=n(24),h=(n(58),n(1)),d=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,150))})),O=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,158))})),x=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,151))})),m=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,152))})),f=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,157))})),p=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,155))})),g=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(14)]).then(n.bind(null,156))})),k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,153))})),y=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,159))})),v=function(){return Object(h.jsx)(b.a,{basename:"",children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(u.a,{}),children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",element:Object(h.jsx)(x,{})}),Object(h.jsx)(o.a,{path:"/about",element:Object(h.jsx)(d,{})}),Object(h.jsx)(o.a,{path:"/projects",element:Object(h.jsx)(f,{})}),Object(h.jsx)(o.a,{path:"/stats",element:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{path:"/contact",element:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{path:"/resume",element:Object(h.jsx)(p,{})}),Object(h.jsx)(o.a,{path:"/orienteering",element:Object(h.jsx)(k,{})}),Object(h.jsx)(o.a,{path:"/diary",element:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{element:Object(h.jsx)(m,{}),status:404})]})})})},w=function(){return Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(a.a.Suspense,{fallback:"",children:Object(h.jsx)(v,{})})})},N=document.getElementById("root");N.hasChildNodes()?Object(r.hydrate)(Object(h.jsx)(w,{}),N):Object(r.render)(Object(h.jsx)(w,{}),N)}},[[59,2,3]]]);
//# sourceMappingURL=main.2a6f26c9.chunk.js.map