(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{40:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(6);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},41:function(t,e,r){"use strict";e.a=r.p+"static/media/proj-one.f543c2f4.png"},42:function(t,e,r){"use strict";e.a=r.p+"static/media/proj-two.626659fd.png"},43:function(t,e,r){"use strict";r.r(e);var n=r(40),o=r(3),c=r(0),a=r(1),i=r(2),s=r(39),u=r(41),p=r(42),f=r(10);e.default=function(t){var e=t.fontSize,r=t.page,j=t.prevPage,b=t.nextPage,l=t.Works,O=[u.a,p.a,u.a,p.a],g=Object(a.useState)(null),d=Object(o.a)(g,2),m=d[0],y=d[1],h=Object(i.b)({from:{transform:"translateX(-100vw)",opacity:0},to:{transform:"Works"===r?"translateX(0vw)":"translateX(-100vw)",opacity:"Works"===r?1:0},delay:150,config:{duration:1200,easing:s.a}}),v=function(t){return Object(i.b)({from:{width:0,opacity:0,height:24*e},to:{width:t===m?32*e:0,opacity:t===m?1:0,height:24*e},config:{duration:450,easing:s.a}})},w=function(t){return Object(i.b)({from:{marginLeft:-10,opacity:0},to:{marginLeft:"Works"===r?0:-10,opacity:"Works"===r?1:0},delay:1400+150*t,config:{duration:450,easing:s.a}})},k=function(){b("Item")};return Object(c.jsxs)(i.a.div,{className:"project-section",style:Object(n.a)(Object(n.a)({},h),{},{zIndex:"Works"===r?999:-1}),children:[Object(c.jsx)(f.a,{prevPage:j,page:r,pageName:"Works"}),Object(c.jsx)("div",{className:"project-item-section",children:l.map((function(t,e){return Object(c.jsxs)(i.a.div,{className:"project-item",style:w(e),onClick:k,children:[Object(c.jsx)("h1",{onMouseEnter:function(){return y(e)},onMouseLeave:function(){return y(null)},children:t}),Object(c.jsx)("p",{children:"quisque egestas diam in arcu cursus euismod quis viverra nibh"}),Object(c.jsx)(i.a.img,{src:O[e],alt:"".concat(t," Demo"),style:v(e)})]})}))})]})}}}]);
//# sourceMappingURL=4.970fd0fc.chunk.js.map