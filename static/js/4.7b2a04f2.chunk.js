(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[4],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(11),i=n.n(r),c=n(25),s=n.n(c),a=n(19),o=n.n(a),u=n(0),l=n.n(u),f=n(60),b=n(6),p=["forwardedRef"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var i=r.forwardedRef,c=o()(r,p),a=Object(f.a)(e,c),u=s()(a,3),b=u[0],d=u[1],m=u[2],h=j(j({},c),{},{t:b,i18n:d,tReady:m});return t.withRef&&i?h.ref=i:!t.withRef&&i&&(h.forwardedRef=i),l.a.createElement(n,h)}r.displayName="withI18nextTranslation(".concat(Object(b.a)(n),")"),r.WrappedComponent=n;return t.withRef?l.a.forwardRef((function(e,t){return l.a.createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}},155:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(5),c=n(60),s=n(61),a=n(24),o=n(133),u=n(1),l=Object(o.a)("resume")((function(e){var t=e.data,n=e.t;return Object(u.jsx)("article",{className:"degree-container",children:Object(u.jsxs)("header",{children:[Object(u.jsx)("h4",{className:"degree",children:n(t.degree)}),Object(u.jsxs)("p",{className:"school",children:[Object(u.jsx)("a",{href:t.link,children:n(t.school)}),", ",t.year," - ",n("now")]})]})})})),f=function(e){var t=e.data,n=e.t;return Object(u.jsxs)("div",{className:"education",children:[Object(u.jsx)("div",{className:"link-to",id:"education"}),Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h3",{children:n("Education")})}),t.map((function(e){return Object(u.jsx)(l,{data:e},e.school)}))]})};f.defaultProps={data:[]};var b=Object(o.a)("resume")(f),p=Object(o.a)("resume")((function(e){var t=e.data,n=e.t;return Object(u.jsxs)("article",{className:"jobs-container",children:[Object(u.jsxs)("header",{children:[Object(u.jsxs)("h4",{children:[Object(u.jsx)("a",{href:t.link,children:t.company})," - ",n(t.position)]}),Object(u.jsxs)("p",{className:"daterange",children:[" ",n(t.daterange)]})]}),Object(u.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(u.jsx)("li",{children:n(e)},e)}))})]})})),d=function(e){var t=e.data,n=e.t;return Object(u.jsxs)("div",{className:"experience",children:[Object(u.jsx)("div",{className:"link-to",id:"experience"}),Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h3",{children:n("Experience")})}),t.map((function(e){return Object(u.jsx)(p,{data:e},e.company)}))]})};d.defaultProps={data:[]};var j=Object(o.a)("resume")(d),m=n(71),h=n(84),y=n(75),O=n(83),g=n(67),v=n(65),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(u.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=e.t,i=t.category,c=t.competency,s=t.title,a={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(v.a)(Object(v.a)({},a),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return Object(u.jsxs)("div",{className:"skillbar clearfix",children:[Object(u.jsx)("div",{className:"skillbar-title",style:a,children:Object(u.jsx)("span",{children:r(s)})}),Object(u.jsx)("div",{className:"skillbar-bar",style:o}),Object(u.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};k.defaultProps={categories:[]};var P=Object(o.a)("resume")(k),w=function(e){Object(y.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e)).handleChildClick=function(e){r.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},r.state=function(e){var t=e.categories,n=e.skills,r=e.t;return{buttons:t.map((function(e){return r(e.name)})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n,t:r}}({categories:e.categories,skills:e.skills,t:e.t}),r}return Object(h.a)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(n){return"All"===t||n.category.map(e.props.t).includes(t)})).map((function(t){return Object(u.jsx)(P,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(u.jsx)(x,{label:e.props.t(t),active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"skills",children:[Object(u.jsx)("div",{className:"link-to",id:"skills"}),Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h3",{children:this.props.t("Skills")}),Object(u.jsx)("p",{children:this.props.t("Here is a *mostly* honest overview of my language proficiencies.")})]}),Object(u.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(u.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(r.Component);w.defaultProps={skills:[],categories:[]};var N=Object(o.a)("resume")(w),I=function(e){var t=e.data,n=e.last,r=e.t;return Object(u.jsxs)("li",{className:"course-container",children:[Object(u.jsxs)("a",{href:t.link,children:[Object(u.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(u.jsx)("p",{className:"course-name",children:r(t.title)})]}),!n&&Object(u.jsx)("div",{className:"course-dot",children:Object(u.jsx)("p",{className:"course-name",children:" \u2022"})})]})};I.defaultProps={last:!1};var S=Object(o.a)("resume")(I),M=function(e){var t,n=e.data,r=e.t;return Object(u.jsxs)("div",{className:"courses",children:[Object(u.jsx)("div",{className:"link-to",id:"courses"}),Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h3",{children:r("Selected Courses")})}),Object(u.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(u.jsx)(S,{data:e,last:n===t.length-1},e.title)})))})]})};M.defaultProps={data:[]};var R=Object(o.a)("resume")(M),B=[{title:"C++ Programming",number:"PB161",link:"https://is.muni.cz/auth/course/fi/spring2021/PB161?lang=en",university:"MUNI"},{title:"Software Quality",number:"PV260",link:"https://is.muni.cz/auth/course/fi/spring2021/PV260?lang=en",university:"MUNI"},{title:"System Development in C#/.NET",number:"PV179",link:"https://is.muni.cz/auth/course/fi/autumn2020/PV179?lang=en",university:"MUNI"},{title:"Neural Networks",number:"PV021",link:"https://is.muni.cz/auth/course/fi/autumn2020/PV021?lang=en",university:"MUNI"},{title:"Domain specific development in C/C++",number:"PB173",link:"https://is.muni.cz/auth/course/fi/autumn2020/PB173?lang=en",university:"MUNI"},{title:"Modern Markup Languages and Their Applications",number:"PB138",link:"https://is.muni.cz/auth/course/fi/spring2020/PB138?lang=en",university:"MUNI"},{title:"Database Systems",number:"PB154",link:"https://is.muni.cz/auth/course/fi/autumn2018/PB154?lang=en",university:"MUNI"},{title:"Principles of low-level programming",number:"PB071",link:"https://is.muni.cz/auth/course/fi/spring2019/PB071?lang=enn",university:"MUNI"},{title:"UNIX",number:"PV004",link:"https://is.muni.cz/auth/course/fi/spring2019/PV004?lang=en",university:"MUNI"},{title:"Non-Imperative Programming",number:"IB015",link:"https://is.muni.cz/auth/course/fi/autumn2019/IB015?lang=en",university:"MUNI"},{title:"Software Engineering I",number:"PB007",link:"https://is.muni.cz/auth/course/fi/autumn2019/PB007?lang=en",university:"MUNI"},{title:"Information security and cryptography",number:"PV080",link:"https://is.muni.cz/auth/course/fi/autumn2019/PV080?lang=en",university:"MUNI"},{title:"Design and Implementation of Parallel Systems",number:"IB109",link:"https://is.muni.cz/auth/course/fi/spring2020/IB109?lang=en",university:"MUNI"},{title:"Authentication and Access Control",number:"PV157",link:"https://is.muni.cz/auth/course/fi/spring2020/PV157?lang=en",university:"MUNI"},{title:"Strategy and Leadership",number:"PV237",link:"https://is.muni.cz/auth/course/fi/spring2021/PV237?lang=en",university:"MUNI"}],C=[{school:"Masaryk University",degree:"Programming and development",link:"https://is.muni.cz/auth/person/485661",year:2018}],E=[{company:"Invasys",position:"Internship",link:"https://www.invasys.com/",daterange:"January 2020 - June 2021",points:["Occasional helping hand to IT idministrators.","Winner of the rack cabble managment competition (if it was to be held)."]},{company:"Z\u0160 a M\u0160 Kotl\xe1\u0159sk\xe1",position:"IT Administrator",link:"https://www.kotlarska.cz/",daterange:"September 2017 - December 2019",points:["Managing all of the underfunded IT systems of primary school.","Mainly solving problems I accidentaly caused in the first place."]}],U=n(64),z=[{title:"English",competency:5,category:["Human stuff"]},{title:"German",competency:2,category:["Human stuff"]},{title:"C",competency:2,category:["Peep poop"]},{title:"C++",competency:2,category:["Peep poop"]},{title:"C#",competency:3,category:["Peep poop"]},{title:"Python",competency:1,category:["Peep poop"]},{title:"Rust",competency:1,category:["Peep poop"]},{title:"J\u0336a\u0336v\u0336a\u0336",competency:0,category:["Peep poop"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),D=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],V=Object(U.a)(new Set(z.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:D[t]}}));t.default=function(){var e=Object(c.a)("resume").t;return Object(u.jsx)(a.a,{title:e("Resume"),description:e("Otakar Hir\u0161's Resume. Education. Experience. Skills."),children:Object(u.jsxs)("article",{className:"post",id:"resume",children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h2",{"data-testid":"heading",children:Object(u.jsx)(i.b,{to:"resume",children:e("Resume")})}),Object(u.jsx)("p",{children:Object(u.jsxs)(s.a,{i18nKey:"SUBTITLE",t:e,children:["You can send me proposals for fun projects or interesting jobs.",Object(u.jsx)("br",{}),"I enjoy learning new things and crave for real world impact."]})})]})}),Object(u.jsx)(b,{data:C}),Object(u.jsx)(j,{data:E}),Object(u.jsx)(N,{skills:z,categories:V}),Object(u.jsx)(R,{data:B})]})})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(18);var i=n(74),c=n(14);function s(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(i.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(67);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},67:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},71:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},73:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,"a",(function(){return r}))},74:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(73);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},76:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,"a",(function(){return r}))},77:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},78:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(76),i=n(77);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var s=n(78);function a(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?Object(s.a)(e):t}function o(e){var t=Object(i.a)();return function(){var n,i=Object(r.a)(e);if(t){var c=Object(r.a)(this).constructor;n=Reflect.construct(i,arguments,c)}else n=i.apply(this,arguments);return a(this,n)}}},84:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=4.7b2a04f2.chunk.js.map