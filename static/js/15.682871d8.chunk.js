(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(391),Object(n.memo)(function(e){return r.a.createElement("article",{className:l()("layout",e.className),style:e.style},e.children)})),o=Object(n.memo)(function(e){return r.a.createElement("header",{className:l()("layout-header",e.className),style:e.style},e.children)}),u=a(392),i=a.n(u),m=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return l.a.apply(void 0,["layout-sider".concat(e)].concat(a))},h=Object(n.memo)(function(e){return r.a.createElement("div",{className:m("",e.className),style:e.style},r.a.createElement("div",{className:m("__top")},r.a.createElement("img",{alt:"logo",className:m("__logo"),src:i.a}),r.a.createElement("span",{className:m("__name")},"Laboratory")),e.children)}),p=Object(n.memo)(function(e){return r.a.createElement("section",{className:l()("layout-content",e.className),style:e.style},e.children)}),d=Object(n.memo)(function(e){return r.a.createElement("div",{className:l()("layout-container",e.className),style:e.style},r.a.createElement("div",{className:l()("layout-wrapper",e.wrapperClassName),style:e.wrapperStyle},e.children))});a.d(t,"d",function(){return s}),a.d(t,"c",function(){return o}),a.d(t,"e",function(){return h}),a.d(t,"b",function(){return p}),a.d(t,"a",function(){return d})},391:function(e,t,a){},392:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},680:function(e,t,a){},682:function(e,t,a){},714:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),c=a(16),l=a(14),s=a(15),o=a(0),u=a.n(o),i=a(493),m=a.n(i);a(680),a(681);m.a.configure({tabReplace:"  ",classPrefix:"hljs-"});var h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).setLanguageHTML=function(){var e=a.props,t=e.language,n=e.code,r=m.a.highlight(t,n.replace(/^\s+|\s$/g,"")).value;a.setState({html:r})},a.state={html:""},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setLanguageHTML()}},{key:"render",value:function(){var e=this.props.language,t=this.state.html;return u.a.createElement("figure",{className:"highlight "+e},u.a.createElement("span",{className:"highlight-language"},e),u.a.createElement("pre",{className:"highlight-code"},u.a.createElement("code",{dangerouslySetInnerHTML:{__html:t}})))}}]),t}(o.PureComponent);h.defaultProps={language:"jsx"};var p=h,d=a(390),f=(a(682),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleRefs=function(){console.log(a.Grammar)},a.state={},a.Grammar=u.a.createRef(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style;return u.a.createElement(d.a,null,u.a.createElement("h1",{ref:this.Grammar,className:t,style:a},u.a.createElement("button",{onClick:this.handleRefs},"Grammar")),u.a.createElement(p,{code:"\nconst obj = {};\nObject.defineProperties(obj, {\n  'property1': {\n    value: true,\n    writable: true\n  },\n  'property2': {\n    value: 'Hello',\n    writable: false\n  }\n  // etc. etc.\n});\nconsole.log(obj)   // {property1: true, property2: 'Hello'}\n"}))}}]),t}(o.PureComponent));t.default=f}}]);