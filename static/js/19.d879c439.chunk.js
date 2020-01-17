(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{141:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(72),i=n.n(r),c=n(17),l=n.n(c),s=n(3),u=n.n(s),p=n(25),m=n.n(p),f=n(29),d=n.n(f),y=n(34),h=n.n(y),v=n(42),C=n.n(v),g=n(1),b=n.n(g),k=n(13),N=n.n(k),T=n(107),E=n(189),O=n(4),j=n.n(O),x=function(e){function t(){var e,n,o,a;m()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=o=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.close=function(e){e&&e.stopPropagation(),o.clearCloseTimer(),o.props.onClose()},o.startCloseTimer=function(){o.props.duration&&(o.closeTimer=setTimeout(function(){o.close()},1e3*o.props.duration))},o.clearCloseTimer=function(){o.closeTimer&&(clearTimeout(o.closeTimer),o.closeTimer=null)},a=n,h()(o,a)}return C()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",o=(e={},l()(e,""+n,1),l()(e,n+"-closable",t.closable),l()(e,t.className,!!t.className),e);return a.a.createElement("div",{className:j()(o),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},a.a.createElement("div",{className:n+"-content"},t.children),t.closable?a.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||a.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(o.Component);x.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any,update:b.a.bool,closeIcon:b.a.node},x.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var w=x,_=0,I=Date.now();var P=function(e){function t(){var e,n,o,a;m()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=o=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={notices:[]},o.add=function(e){var t=e.key=e.key||"rcNotification_"+I+"_"+_++,n=o.props.maxCount;o.setState(function(o){var a=o.notices,r=a.map(function(e){return e.key}).indexOf(t),i=a.concat();return-1!==r?i.splice(r,1,e):(n&&a.length>=n&&(e.updateKey=i[0].updateKey||i[0].key,i.shift()),i.push(e)),{notices:i}})},o.remove=function(e){o.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},a=n,h()(o,a)}return C()(t,e),d()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,o=this.state.notices,r=o.map(function(e,r){var i=Boolean(r===o.length-1&&e.updateKey),c=e.updateKey?e.updateKey:e.key,l=Object(E.a)(t.remove.bind(t,e.key),e.onClose);return a.a.createElement(w,u()({prefixCls:n.prefixCls},e,{key:c,update:i,onClose:l,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)}),i=(e={},l()(e,n.prefixCls,1),l()(e,n.className,!!n.className),e);return a.a.createElement("div",{className:j()(i),style:n.style},a.a.createElement(T.default,{transitionName:this.getTransitionName()},r))}}]),t}(o.Component);P.propTypes={prefixCls:b.a.string,transitionName:b.a.string,animation:b.a.oneOfType([b.a.string,b.a.object]),style:b.a.object,maxCount:b.a.number,closeIcon:b.a.node},P.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},P.newInstance=function(e,t){var n=e||{},o=n.getContainer,r=i()(n,["getContainer"]),c=document.createElement("div");o?o().appendChild(c):document.body.appendChild(c);var l=!1;N.a.render(a.a.createElement(P,u()({},r,{ref:function(e){l||(l=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){N.a.unmountComponentAtNode(c),c.parentNode.removeChild(c)}}))}})),c)};var D=P,S=n(22);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var W,A,K,B,L=3,U=1,G="ant-message",J="move-up";var F={open:function(e){var t=void 0!==e.duration?e.duration:L,n={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],a=e.key||U++,r=new Promise(function(r){var i=function(){return"function"==typeof e.onClose&&e.onClose(),r(!0)};!function(e){A?e(A):D.newInstance({prefixCls:G,transitionName:J,style:{top:W},getContainer:K,maxCount:B},function(t){A?e(A):(A=t,e(t))})}(function(r){var c=o.createElement(S.a,{type:n,theme:"loading"===n?"outlined":"filled"}),l=n?c:"";r.notice({key:a,duration:t,style:{},content:o.createElement("div",{className:"".concat(G,"-custom-content").concat(e.type?" ".concat(G,"-").concat(e.type):"")},e.icon?e.icon:l,o.createElement("span",null,e.content)),onClose:i})})}),i=function(){A&&A.removeNotice(a)};return i.then=function(e,t){return r.then(e,t)},i.promise=r,i},config:function(e){void 0!==e.top&&(W=e.top,A=null),void 0!==e.duration&&(L=e.duration),void 0!==e.prefixCls&&(G=e.prefixCls),void 0!==e.getContainer&&(K=e.getContainer),void 0!==e.transitionName&&(J=e.transitionName,A=null),void 0!==e.maxCount&&(B=e.maxCount,A=null)},destroy:function(){A&&(A.destroy(),A=null)}};["success","info","warning","error","loading"].forEach(function(e){F[e]=function(t,n,o){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(t)?F.open(M(M({},t),{type:e})):("function"==typeof n&&(o=n,n=void 0),F.open({content:t,duration:n,type:e,onClose:o}))}}),F.warn=F.warning;t.a=F},207:function(e,t,n){"use strict";n(67),n(210)},210:function(e,t,n){},433:function(e,t,n){},743:function(e,t,n){"use strict";n.r(t);var o=n(6),a=n(7),r=n(15),i=n(14),c=n(16),l=n(0),s=n.n(l),u=(n(433),n(13)),p=n.n(u),m=n(193),f=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(r.a)(this,Object(i.a)(t).call(this,e));var a=e.language.search("-")>-1?e.language.split("-")[0]:e.language;return window.WIDGET={CONFIG:{layout:2,width:"500",height:"300",background:1,dataColor:"ffffff",borderRadius:10,language:a,key:"54ccfb1d4159431db97d9f1adac745ed"}},n.script=null,n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.script=document.createElement("script"),this.script.src="https://widget.heweather.net/standard/static/js/he-standard-common.js?v=1.1",document.body.appendChild(this.script)}},{key:"componentWillUnmount",value:function(){p.a.unmountComponentAtNode(this.script),document.body.removeChild(this.script)}},{key:"render",value:function(){return s.a.createElement("div",{id:"he-plugin-standard"})}}]),t}(l.PureComponent),d=Object(m.b)(function(e){return{language:e.user.language}},null)(f),y=(n(207),n(141)),h=n(75),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).getWeaterByType=function(){n.setState({loading:!0}),h.b.getWeaterByType({type:"lifestyle",location:"auto_ip",key:"81c887d621274b71ad5e694d0f6e94c4"},{cancelToken:n.source.token}).then(function(e){console.log("response",e);var t=n.handleLifestyle(e.lifestyle);n.setState({loading:!1,lifestyle:t})},function(e){h.a.isCancel(e)||(y.a.error(e.message),n.setState({loading:!1}))})},n.handleLifestyle=function(e){return e.map(function(e){return e.typeText=n.lifestyleTypes[e.type],e.color=n.randomColor(e.typeText),e})},n.randomColor=function(e){var t=e[0].charCodeAt(0).toString(16).slice(0,4);return"#a".concat(t,"f")},n.state={loading:!1,lifestyle:[]},n.lifestyleTypes={comf:"舒适度指数",cw:"洗车指数",drsg:"穿衣指数",flu:"感冒指数",sport:"运动指数",trav:"旅游指数",uv:"紫外线指数",air:"空气污染扩散条件指数",ac:"空调开启指数",ag:"过敏指数",gl:"太阳镜指数",mu:"化妆指数",airc:"晾晒指数",ptfc:"交通指数",fsh:"钓鱼指数",spi:"防晒指数"},n.source=h.a.CancelToken.source(),n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.getWeaterByType()}},{key:"render",value:function(){return s.a.createElement("ul",{className:"lifestyle"},this.state.lifestyle.map(function(e){return s.a.createElement("li",{key:e.type,className:"lifestyle__item",title:e.txt},s.a.createElement("span",{className:"lifestyle__tag",style:{backgroundColor:e.color}}),s.a.createElement("p",null,s.a.createElement("b",null,e.typeText),"：",e.brf),s.a.createElement("p",{className:"lifestyle__txt"},e.txt))}))}}]),t}(l.PureComponent),C=function(e){function t(e){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).call(this,e))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"home"},s.a.createElement("ul",{className:"home-container"},s.a.createElement("li",{className:"home-block"},s.a.createElement(d,null)),s.a.createElement("li",{className:"home-block"},s.a.createElement(v,null)),s.a.createElement("li",{className:"home-block"}),s.a.createElement("li",{className:"home-block"})))}}]),t}(l.PureComponent);t.default=C}}]);