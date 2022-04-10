/*! For license information please see 273.af2377.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_laboratory=self.webpackChunkreact_laboratory||[]).push([[273],{69921:function(t,e){var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,C=n?Symbol.for("react.scope"):60119;function S(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case s:case p:case i:case u:case a:case d:return t;default:switch(t=t&&t.$$typeof){case l:case f:case y:case h:case c:return t;default:return e}}case o:return e}}}function _(t){return S(t)===p}e.AsyncMode=s,e.ConcurrentMode=p,e.ContextConsumer=l,e.ContextProvider=c,e.Element=r,e.ForwardRef=f,e.Fragment=i,e.Lazy=y,e.Memo=h,e.Portal=o,e.Profiler=u,e.StrictMode=a,e.Suspense=d,e.isAsyncMode=function(t){return _(t)||S(t)===s},e.isConcurrentMode=_,e.isContextConsumer=function(t){return S(t)===l},e.isContextProvider=function(t){return S(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return S(t)===f},e.isFragment=function(t){return S(t)===i},e.isLazy=function(t){return S(t)===y},e.isMemo=function(t){return S(t)===h},e.isPortal=function(t){return S(t)===o},e.isProfiler=function(t){return S(t)===u},e.isStrictMode=function(t){return S(t)===a},e.isSuspense=function(t){return S(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===p||t===u||t===a||t===d||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===h||t.$$typeof===c||t.$$typeof===l||t.$$typeof===f||t.$$typeof===b||t.$$typeof===g||t.$$typeof===C||t.$$typeof===v)},e.typeOf=S},59864:function(t,e,n){t.exports=n(69921)},68356:function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(67294),c=n(45697),l=[],s=[];function p(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}function f(t){var e={loading:!1,loaded:{},error:null},n=[];try{Object.keys(t).forEach((function(r){var o=p(t[r]);o.loading?e.loading=!0:(e.loaded[r]=o.loaded,e.error=o.error),n.push(o.promise),o.promise.then((function(t){e.loaded[r]=t})).catch((function(t){e.error=t}))}))}catch(t){e.error=t}return e.promise=Promise.all(n).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function d(t,e){return u.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function m(t,e){var p,f;if(!e.loading)throw new Error("react-loadable requires a `loading` component");var m=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:d,webpack:null,modules:null},e),h=null;function y(){return h||(h=t(m.loader)),h.promise}return l.push(y),"function"==typeof m.webpack&&s.push((function(){if(t=m.webpack,"object"===r(n.m)&&t().every((function(t){return void 0!==t&&void 0!==n.m[t]})))return y();var t})),f=p=function(e){function n(r){o(this,n);var a=i(this,e.call(this,r));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),h=t(m.loader),a._loadModule()},y(),a.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},a}return a(n,e),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var t=this;if(this.context.loadable&&Array.isArray(m.modules)&&m.modules.forEach((function(e){t.context.loadable.report(e)})),h.loading){"number"==typeof m.delay&&(0===m.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){t.setState({pastDelay:!0})}),m.delay)),"number"==typeof m.timeout&&(this._timeout=setTimeout((function(){t.setState({timedOut:!0})}),m.timeout));var e=function(){t._mounted&&(t.setState({error:h.error,loaded:h.loaded,loading:h.loading}),t._clearTimeouts())};h.promise.then((function(){e()})).catch((function(t){e()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?u.createElement(m.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?m.render(this.state.loaded,this.props):null},n}(u.Component),p.contextTypes={loadable:c.shape({report:c.func.isRequired})},f}function h(t){return m(p,t)}h.Map=function(t){if("function"!=typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(f,t)};var y=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},e.prototype.render=function(){return u.Children.only(this.props.children)},e}(u.Component);function v(t){for(var e=[];t.length;){var n=t.pop();e.push(n())}return Promise.all(e).then((function(){if(t.length)return v(t)}))}y.propTypes={report:c.func.isRequired},y.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},h.Capture=y,h.preloadAll=function(){return new Promise((function(t,e){v(l).then(t,e)}))},h.preloadReady=function(){return new Promise((function(t,e){v(s).then(t,t)}))},t.exports=h},60250:function(t,e,n){n.d(e,{UT:function(){return $},l_:function(){return S},AW:function(){return M},rs:function(){return x},EN:function(){return Z}});var r=n(41788),o=n(67294),i=(n(45697),n(90071)),a=(n(45298),n(42554)),u=n(2177),c=n(22122),l=n(14779),s=n.n(l),p=(n(59864),n(19756)),f=n(8679),d=n.n(f),m=function(t){var e=(0,a.Z)();return e.displayName="Router-History",e}(),h=function(t){var e=(0,a.Z)();return e.displayName="Router",e}(),y=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.createElement(h.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(m.Provider,{children:this.props.children||null,value:this.props.history}))},e}(o.Component);o.Component;var v=function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(o.Component),b={},g=0;function C(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(b[t])return b[t];var e=s().compile(t);return g<1e4&&(b[t]=e,g++),e}(t)(e,{pretty:!0})}function S(t){var e=t.computedMatch,n=t.to,r=t.push,a=void 0!==r&&r;return o.createElement(h.Consumer,null,(function(t){t||(0,u.Z)(!1);var r=t.history,l=t.staticContext,s=a?r.push:r.replace,p=(0,i.ob)(e?"string"==typeof n?C(n,e.params):(0,c.Z)({},n,{pathname:C(n.pathname,e.params)}):n);return l?(s(p),null):o.createElement(v,{onMount:function(){s(p)},onUpdate:function(t,e){var n=(0,i.ob)(e.to);(0,i.Hp)(n,(0,c.Z)({},p,{key:n.key}))||s(p)},to:n})}))}var _={},w=0;function E(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,u=void 0!==a&&a,c=n.sensitive,l=void 0!==c&&c;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=_[n]||(_[n]={});if(r[t])return r[t];var o=[],i={regexp:s()(t,o,e),keys:o};return w<1e4&&(r[t]=i,w++),i}(n,{end:i,strict:u,sensitive:l}),o=r.regexp,a=r.keys,c=o.exec(t);if(!c)return null;var p=c[0],f=c.slice(1),d=t===p;return i&&!d?null:{path:n,url:"/"===n&&""===p?"/":p,isExact:d,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var M=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return o.createElement(h.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?E(n.pathname,t.props):e.match,i=(0,c.Z)({},e,{location:n,match:r}),a=t.props,l=a.children,s=a.component,p=a.render;return Array.isArray(l)&&0===l.length&&(l=null),o.createElement(h.Provider,{value:i},i.match?l?"function"==typeof l?l(i):l:s?o.createElement(s,i):p?p(i):null:"function"==typeof l?l(i):null)}))},e}(o.Component);o.Component;var x=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return o.createElement(h.Consumer,null,(function(e){e||(0,u.Z)(!1);var n,r,i=t.props.location||e.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?E(i.pathname,(0,c.Z)({},t.props,{path:a})):e.match}})),r?o.cloneElement(n,{location:i,computedMatch:r}):null}))},e}(o.Component);function Z(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=(0,p.Z)(e,["wrappedComponentRef"]);return o.createElement(h.Consumer,null,(function(e){return e||(0,u.Z)(!1),o.createElement(t,(0,c.Z)({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,d()(n,t)}o.useContext,o.Component;var $=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,i.q_)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return o.createElement(y,{history:this.history,children:this.props.children})},e}(o.Component),R=function(t,e){return"function"==typeof t?t(e):t},k=function(t,e){return"string"==typeof t?(0,i.ob)(t,null,null,e):t},P=function(t){return t},A=o.forwardRef;void 0===A&&(A=P);var T=A((function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,a=(0,p.Z)(t,["innerRef","navigate","onClick"]),u=a.target,l=(0,c.Z)({},a,{onClick:function(t){try{i&&i(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=P!==A&&e||n,o.createElement("a",l)})),O=A((function(t,e){var n=t.component,r=void 0===n?T:n,i=t.replace,a=t.to,l=t.innerRef,s=(0,p.Z)(t,["component","replace","to","innerRef"]);return o.createElement(h.Consumer,null,(function(t){t||(0,u.Z)(!1);var n=t.history,p=k(R(a,t.location),t.location),f=p?n.createHref(p):"",d=(0,c.Z)({},s,{href:f,navigate:function(){var e=R(a,t.location);(i?n.replace:n.push)(e)}});return P!==A?d.ref=e||l:d.innerRef=l,o.createElement(r,d)}))})),j=function(t){return t},D=o.forwardRef;void 0===D&&(D=j),D((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,i=t.activeClassName,a=void 0===i?"active":i,l=t.activeStyle,s=t.className,f=t.exact,d=t.isActive,m=t.location,y=t.sensitive,v=t.strict,b=t.style,g=t.to,C=t.innerRef,S=(0,p.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(h.Consumer,null,(function(t){t||(0,u.Z)(!1);var n=m||t.location,i=k(R(g,n),n),p=i.pathname,h=p&&p.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),_=h?E(n.pathname,{path:h,exact:f,sensitive:y,strict:v}):null,w=!!(d?d(_,n):_),M=w?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(s,a):s,x=w?(0,c.Z)({},b,{},l):b,Z=(0,c.Z)({"aria-current":w&&r||null,className:M,style:x,to:i},S);return j!==D?Z.ref=e||C:Z.innerRef=C,o.createElement(O,Z)}))}))}}]);