(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{390:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(4),o=r.n(l),c=(r(391),Object(n.memo)(function(e){return a.a.createElement("article",{className:o()("layout",e.className),style:e.style},e.children)})),s=Object(n.memo)(function(e){return a.a.createElement("header",{className:o()("layout-header",e.className),style:e.style},e.children)}),i=r(392),u=r.n(i),m=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return o.a.apply(void 0,["layout-sider".concat(e)].concat(r))},d=Object(n.memo)(function(e){return a.a.createElement("div",{className:m("",e.className),style:e.style},a.a.createElement("div",{className:m("__top")},a.a.createElement("img",{alt:"logo",className:m("__logo"),src:u.a}),a.a.createElement("span",{className:m("__name")},"Laboratory")),e.children)}),p=Object(n.memo)(function(e){return a.a.createElement("section",{className:o()("layout-content",e.className),style:e.style},e.children)}),f=Object(n.memo)(function(e){return a.a.createElement("div",{className:o()("layout-container",e.className),style:e.style},a.a.createElement("div",{className:o()("layout-wrapper",e.wrapperClassName),style:e.wrapperStyle},e.children))});r.d(t,"d",function(){return c}),r.d(t,"c",function(){return s}),r.d(t,"e",function(){return d}),r.d(t,"b",function(){return p}),r.d(t,"a",function(){return f})},391:function(e,t,r){},392:function(e,t,r){e.exports=r.p+"static/media/logo.ee7cd8ed.svg"},4:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===l)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},689:function(e,t,r){},717:function(e,t,r){"use strict";r.r(t);var n=r(6),a=r(7),l=r(16),o=r(14),c=r(15),s=r(0),i=r.n(s),u=r(390),m=(r(689),function(e){var t=e.children;return i.a.createElement("li",{className:"svg-wrapper"},i.a.createElement("svg",{className:"svg"},t))}),d=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={},r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"computed",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,a="",l=0;l<6;l++)a=a+(Math.cos((18+72*l)/180*Math.PI)*r+e)+" "+(-Math.sin((18+72*l)/180*Math.PI)*r+t)+", "+(Math.cos((54+72*l)/180*Math.PI)*n+e)+" "+(-Math.sin((54+72*l)/180*Math.PI)*n+t)+(5===l?"":", ");return a}},{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("ul",{className:"svg-container"},i.a.createElement(m,null,i.a.createElement("defs",null,i.a.createElement("g",{id:"microscope-column"},i.a.createElement("polyline",{points:"7.5,15 7.5,5 22.5,5 22.5,15",fill:"none",stroke:"silver",strokeWidth:"10",strokeLinejoin:"round"}),i.a.createElement("rect",{x:"0",y:"20",width:"30",height:"60",fill:"none",stroke:"silver",strokeWidth:"10",strokeLinejoin:"round"})),i.a.createElement("g",{id:"microscope-main",style:{transformOrigin:"55px 100px",transform:"rotate(30deg)"}},i.a.createElement("circle",{r:"50",cx:"55",cy:"100",fill:"none",stroke:"black",strokeWidth:"10",strokeDasharray:"215",strokeDashoffset:"0",style:{transformOrigin:"55px 100px",transform:"rotate(-90deg)"}}),i.a.createElement("use",{href:"#microscope-column",x:"20",y:"5"}),i.a.createElement("line",{x1:"5",y1:"120",x2:"55",y2:"120",stroke:"lightblue",strokeWidth:"10",strokeLinecap:"round"})),i.a.createElement("g",{id:"microscope-footer"},i.a.createElement("polyline",{points:"15,5 5,35 65,35 55,5",fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"10"}))),i.a.createElement("use",{href:"#microscope-footer",x:"25",y:"145"}),i.a.createElement("use",{href:"#microscope-main",x:"5",y:"0"})),i.a.createElement(m,null,i.a.createElement("defs",null,i.a.createElement("g",{id:"conical-flask"},i.a.createElement("path",{d:"\r M 24 84\r L 10 100\r Q 0 110, 10 120\r H 110\r Q 120 110, 110 100\r L 96 84\r Z\r ",fill:"#7DBE23"}),i.a.createElement("path",{d:"\r M 43 0\r H 45\r V 60\r L 10 100\r Q 0 110, 10 120\r H 110\r Q 120 110, 110 100\r L 75 60\r V 0\r H 77\r ",stroke:"lightblue",strokeWidth:"5",strokeLinecap:"round",fill:"transparent"})),i.a.createElement("g",{id:"test-tube"},i.a.createElement("path",{d:"\r M 4 70\r V 100\r C 4 130, 34 130, 34 100\r V 70\r Z\r ",fill:"#CDEBF2"}),i.a.createElement("path",{d:"\r M 0 0\r H 4\r V 100\r C 4 130, 34 130, 34 100\r V 0\r H 38\r ",stroke:"lightblue",strokeWidth:"5",strokeLinecap:"round",fill:"transparent"}))),i.a.createElement("use",{href:"#conical-flask",x:"100",y:"10"}),i.a.createElement("use",{href:"#test-tube",x:"10",y:"10"})),i.a.createElement(m,null,i.a.createElement("path",{d:"\r M 18 3\r L 46 3\r L 46 40\r L 61 40\r L 32 68\r L 3 40\r L 18 40\r Z\r ",stroke:"black",fill:"transparent"})),i.a.createElement(m,null,i.a.createElement("line",{x1:"30",y1:"90",x2:"270",y2:"90",stroke:"black",strokeLinecap:"round",strokeWidth:"10"})),i.a.createElement(m,null,i.a.createElement("polyline",{points:"30,10 10,30 80,30 60,10",fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"10"})),i.a.createElement(m,null,i.a.createElement("polyline",{points:"10,30 10,10 30,10 30,30",fill:"none",stroke:"black",strokeLinejoin:"round",strokeWidth:"10"})),i.a.createElement(m,null,i.a.createElement("polyline",{points:this.computed(100,100,50,20),fill:"red",stroke:"orange",strokeWidth:"3"}),i.a.createElement("polyline",{points:this.computed(300,100,50,30),fill:"red",stroke:"orange",strokeWidth:"3"})),i.a.createElement(m,null,i.a.createElement("polygon",{fill:"green",stroke:"orange",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round",points:"150,10 100,60 125,110 175,110 200,60"})),i.a.createElement(m,null,i.a.createElement("defs",null,i.a.createElement("path",{id:"bar",d:"\r M 5 0\r L 80 0\r L 75 10\r L 0 10\r Z\r "})),i.a.createElement("use",{href:"#bar",x:"0",y:"0",fill:"blue"}),i.a.createElement("use",{href:"#bar",x:"100",y:"0",fill:"red"}))))}}]),t}(s.PureComponent);t.default=d}}]);