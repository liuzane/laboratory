(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,n){},112:function(e,n){},115:function(e,n,t){var r={"./Login.json":116,"./Main.json":117};function a(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=115},116:function(e){e.exports={"login.title":"Login to React Laboratory","login.username":"Please type the username","login.password":"Please type the password","login.loginText":"log in"}},117:function(e){e.exports={"main.title":"Start a magical journey right now!"}},118:function(e,n,t){var r={"./Login.json":119,"./Main.json":120};function a(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=118},119:function(e){e.exports={"login.title":"Login to React Laboratory","login.username":"\u8bf7\u8f93\u5165\u8d26\u53f7","login.password":"\u8bf7\u8f93\u5165\u5bc6\u7801","login.loginText":"\u767b\u5f55"}},120:function(e){e.exports={"main.title":"\u7acb\u5373\u5f00\u59cb\u4e00\u573a\u795e\u5947\u7684\u65c5\u884c\u5427\uff01"}},121:function(e,n,t){"use strict";t.r(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(0),a=t.n(r),o=t(34),c=t.n(o),i=t(38),s=t(26),u=t(16),l=t(17),f=t(20),d=t(18),p=t(19),m=t(485),h=t(30),g=t(37),b=(t(91),t(93),t(95),t(97),function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).onBeforeEach=function(e,n,t){Object(g.b)("token")||t.push("/login")},t.onAfterEach=function(e,n,t){},t}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(h.a,{routes:h.b,onBeforeEach:this.onBeforeEach,onAfterEach:this.onAfterEach}))}}]),n}(r.PureComponent)),E=t(47);c.a.render(a.a.createElement(i.a,{store:s.a},a.a.createElement(E.a,null,a.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},122:function(e,n,t){"use strict";t.r(n);var r=t(6),a=t(15),o=t(51),c=new(t.n(o).a)(a.c,{delayResponse:1500}),i={admin:{id:"b920FfDB-63f7-dFf5-f8bb-36338ccff84B",name:"\u7ba1\u7406\u5458",password:"123456",permission:[]},manager:{id:"a3Ac3dAD-f6Ba-B04C-ae81-16D6e4A85fB8",name:"\u7ecf\u7406",password:"123456",permission:[]}};c.onPost("/login").reply(function(e){return new Promise(function(n,t){var a=null;try{a=JSON.parse(e.data)}catch(l){return void t([200,{code:"500",success:!1,data:[],message:"\u53c2\u6570\u89e3\u6790\u5931\u8d25"}])}var o=a,c=o.username,s=o.password;if(i[c]&&i[c].password===s){var u=Object(r.a)({username:c},i[c]);delete u.password,n([200,{code:"200",success:!0,data:u,message:"\u767b\u5f55\u6210\u529f"}])}else n([403,{code:"403",success:!1,data:null,message:"\u8bf7\u68c0\u67e5\u8d26\u53f7\u6216\u5bc6\u7801\u662f\u5426\u6b63\u786e"}])})}),c.onGet("/user/info").reply(function(e){var n=e.params.id;return new Promise(function(e,t){var r=null;for(var a in i)i[a].id===n&&void 0!==n&&((r=JSON.parse(JSON.stringify(i[a]))).username=a,delete r.password);r?e([200,{code:"200",success:!0,data:r,message:"\u83b7\u53d6\u6210\u529f"}]):t([500,{code:"500",success:!1,data:null,message:"\u672a\u627e\u5230\u8be5\u7528\u6237\u4fe1\u606f"}])})});var s=t(12),u=Array.apply(null,{length:100}).map(function(e,n){return{id:s.Random.guid(),roId:s.Random.guid(),name:s.Random.name(),age:s.Random.integer(20,50),address:s.Random.county(!0)}});c.onGet("/user/list").reply(function(e){for(var n=e.params,t=n.page,r=n.size,a=[],o=t-1,c=u.length;o<t*r&&o<c;o++)a.push(u[o]);return[200,{code:"200",success:!0,data:a,message:""}]})},14:function(e,n,t){"use strict";function r(e,n,t){var r;return e&&n?(r=t?(new Date).getTime()+36e5*t:new Date(0).getTime(),localStorage.setItem(e,JSON.stringify({data:n,expires:r})),!0):(console.error("[ localStorage ]: Key and Data is a must fill parameter"),!1)}function a(e){var n,t=(new Date).getTime();e||console.error("[ localStorage ]: Key is a must fill parameter");try{n=JSON.parse(localStorage.getItem(e))}catch(r){return localStorage.getItem(e)}return n?!Boolean(n.expires)||n.expires>=t?n.data:(localStorage.removeItem(e),null):null}function o(e){e?localStorage.removeItem(e):localStorage.clear()}t.d(n,"c",function(){return r}),t.d(n,"b",function(){return a}),t.d(n,"a",function(){return o})},15:function(e,n,t){"use strict";var r=t(10),a=t.n(r),o=Object({NODE_ENV:"production",PUBLIC_URL:""}).ADDRESS_ENV;"test"!==o&&(o="production");var c=Object.seal({DEBUG_DEV_ADDRESS:null,LOCALE_MOCK_ADDRESS:null,EASY_MOCK_ADDRESS:null,MAIN_PROD_ADDRESS:null});switch(o){case"development":c.DEBUG_DEV_ADDRESS="/",c.LOCALE_MOCK_ADDRESS="./",c.EASY_MOCK_ADDRESS="https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef",c.MAIN_PROD_ADDRESS="http://192.168.0.1";break;case"production":c.DEBUG_DEV_ADDRESS="/",c.LOCALE_MOCK_ADDRESS="https://liuzane.github.io/react-laboratory",c.EASY_MOCK_ADDRESS="https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef",c.MAIN_PROD_ADDRESS="http://192.168.0.1";break;case"test":default:c.DEBUG_DEV_ADDRESS="/",c.LOCALE_MOCK_ADDRESS="./",c.EASY_MOCK_ADDRESS="https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef",c.MAIN_PROD_ADDRESS="http://192.168.0.1"}var i=c,s=(a.a,a.a.create({baseURL:i.LOCALE_MOCK_ADDRESS,headers:{"Content-Type":"application/json"}})),u=a.a.create({baseURL:i.EASY_MOCK_ADDRESS,headers:{"Content-Type":"application/json"}}),l=a.a.create({baseURL:i.MAIN_PROD_ADDRESS,headers:{"Content-Type":"application/json"}});[s,u,l].forEach(function(e){e.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)})});var f=function(e,n){return s({method:"post",url:"/login",data:e,cancelToken:n})},d=function(e,n){return s({method:"get",url:"/user/info",params:e,cancelToken:n})},p=function(e,n){return s({method:"get",url:"/user/list",params:e,cancelToken:n})};t.d(n,"c",function(){return s}),t.d(n,"d",function(){return f}),t.d(n,"a",function(){return d}),t.d(n,"b",function(){return p}),t(122)},26:function(e,n,t){"use strict";var r=t(22),a={state:{Emums:t(50)}},o=t(6),c=t(15),i=t(14),s=function(e,n,t){t.success&&"200"===t.code?(e&&e(t),this.update_user(t.data)):n&&n(t)},u=function(e,n){console.error(n),e&&(n.response&&n.response.data&&(n=n.response.data),e(n))},l=Object.freeze({language:"",id:"",name:"",username:"",permission:[]}),f=Object(r.createModel)({state:Object(o.a)({},l),reducers:{update_user:function(e,n){var t=Object(i.b)("userInfo");for(var r in(n=Object.assign({},t,n)).language||(n.language=navigator.language.replace("-","_")),Object(i.c)("userInfo",n,24),e)n[r]&&(e[r]=n[r]);return JSON.parse(JSON.stringify(e))},reset_user:function(){return Object(o.a)({},l)}},effects:{userLogin:function(e,n){var t=e.params,r=e.callback,a=e.errCallback;if(t&&t.username&&t.password)return Object(c.d)(t).then(s.bind(this,r,a),u.bind(this,a));console.error("[ userLogin Error ]: Please confirm params is complete?")},getUserInfo:function(e,n,t,r){if(e&&e.id)return Object(c.a)(e).then(s.bind(this,t,r),u.bind(this,r));console.error("[ getUserInfo Error ]: Please confirm params is complete?",e)}}});t.d(n,"b",function(){return p});var d=Object(r.init)({models:{emums:a,user:f}}),p=(n.a=d,d.dispatch);d.getState},30:function(e,n,t){"use strict";var r=t(16),a=t(17),o=t(20),c=t(18),i=t(19),s=t(0),u=t.n(s),l=t(488),f=t(481),d=t(486),p=t(493),m=t(8),h=function(e){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(a.a)(n,[{key:"componentWillReceiveProps",value:function(e){var n=[e.location,this.props.location],t=n[0],r=n[1];Object(m.is)(Object(m.fromJS)(t),Object(m.fromJS)(r))||this.props.onBeforeEach(t,r,this.props.history)}},{key:"componentDidUpdate",value:function(e,n){var t=[e.location,this.props.location],r=t[0],a=t[1];Object(m.is)(Object(m.fromJS)(r),Object(m.fromJS)(a))||this.props.onAfterEach(r,a,this.props.history)}},{key:"render",value:function(){return u.a.createElement(l.a,null,this.props.routes.map(function(e,n){return u.a.createElement(f.a,{exact:e.exact,strict:e.strict,path:e.path,render:function(n){return e.redirect?u.a.createElement(d.a,{to:e.redirect}):u.a.createElement(e.component,Object.assign({},n,{routes:e.children}))},key:n})}))}}]),n}(s.PureComponent);h.defaultProps={onBeforeEach:function(){},onAfterEach:function(){}};var g=Object(p.a)(h),b=t(52),E=t.n(b),v=t(32),O=t.n(v),S=function(e){return e.error?u.a.createElement("div",null,"Error! ",u.a.createElement("button",{onClick:e.retry},"Retry")):e.pastDelay?(O.a.start(),u.a.createElement("div",null,"Loading...")):null},D=function(e,n){return O.a.done(),u.a.createElement(e.default,n)},y=function(e){return E()({loader:e,loading:S,render:D,delay:0})},_=[{path:"",title:"home",component:y(function(){return t.e(8).then(t.bind(null,490))}),exact:!0},{path:"todo",title:"todo",component:y(function(){return t.e(9).then(t.bind(null,487))}),exact:!0},{path:"count-table",title:"count-table",component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,482))}),exact:!0},{path:"less",title:"less",component:y(function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,489))}),exact:!0},{path:"typeof",title:"typeof",component:y(function(){return t.e(12).then(t.bind(null,492))}),exact:!0},{path:"module",title:"module",component:y(function(){return t.e(13).then(t.bind(null,479))}),exact:!0}];t.d(n,"a",function(){return g}),t.d(n,"c",function(){return _});var j=[{path:"/login",strict:!0,component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(15),t.e(5)]).then(t.bind(null,484))})},{path:"/main",title:"\u9996\u9875",strict:!0,component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(16),t.e(6)]).then(t.bind(null,483))}),children:_},{path:"/",exact:!0,redirect:"/main"},{path:"",component:y(function(){return t.e(7).then(t.bind(null,491))})}];n.b=function e(n,t){return n.map(function(n){return t&&"/"!==n.path.substr(0,1)&&(n.path=t+(""===n.path?"":"/"+n.path)),n.children&&e(n.children,n.path),n})}(j)},37:function(e,n,t){"use strict";function r(e){var n=new Date,t="",r="",a="";if(e.key&&e.value){if(e.hours){try{Number(e.hours)}catch(o){console.error("[Cookie Error]: expires must is number.")}n.toGMTString(n.setTime(n.getTime()+36e5*e.hours)),t="expires="+n+";"}e.path&&(r="path="+e.path+";"),e.domain&&(a="domain="+e.domain),document.cookie=e.key+"="+e.value+";"+t+r+a}else console.error("[Cookie Error]: key, value must be set.")}function a(e){if(e){for(var n=document.cookie.split(";"),t=0;t<n.length;t++)if(n[t]=n[t].replace(/^\s*|\s*$/,""),0===n[t].indexOf(e)&&n[t].indexOf("=")===e.length)return n[t].substring(e.length+1,n[t].length);return!1}console.error("[Cookie Error]: not set key.")}function o(e){var n=document.cookie.split(";"),t="",r="";e||(e={}),e.path&&(t="path="+e.path+";"),e.domain&&(r="domain="+e.domain+";");for(var a=0;a<n.length;a++){var o=n[a].substring(0,n[a].indexOf("="));document.cookie=o+"=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;"+t+r}}t.d(n,"c",function(){return r}),t.d(n,"b",function(){return a}),t.d(n,"a",function(){return o})},47:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"en_US",function(){return b}),t.d(r,"zh_CN",function(){return O});var a=t(33),o=t(0),c=t.n(o),i=t(26),s=t(14),u=t(29),l=t(54),f=t.n(l),d=t(55),p=t.n(d),m=t(6),h=t(115),g={};h.keys().forEach(function(e){"./index.js"!==e&&(g=Object(m.a)({},g,h(e)))});var b={name:"English",language:"en-US",fullName:"en_US",fileName:"EN_US",locale:g},E=t(118),v={};E.keys().forEach(function(e){"./index.js"!==e&&(v=Object(m.a)({},v,E(e)))});var O={name:"\u7b80\u4f53\u4e2d\u6587",language:"zh-CN",fullName:"zh_CN",fileName:"ZH_CN",locale:v};Object(u.c)(Object(a.a)(f.a).concat(Object(a.a)(p.a)));var S="";try{S=Object(s.b)("userInfo").language}catch(y){S=navigator.language}S||(S=navigator.language),"string"===typeof S&&(S=S.replace("-","_")),S&&i.b.user.update_user({language:S});var D=function(e){var n=e.children;return c.a.createElement(u.b,{locale:S.replace("_","-"),messages:function(e){var n={};try{n=r[e].locale}catch(y){console.error("[ Language Error ]: not found locale language package"),n=b.locale}return n}(S)},n)};t.d(n,"b",function(){return r});n.a=D},50:function(e){e.exports={UserStatus:{Unavailable:10,Available:20},UserStatus_Map:[{Key:"Unavailable",Value:10,Remarks:"\u4e0d\u53ef\u7528"},{Key:"Available",Value:20,Remarks:"\u53ef\u7528"}]}},53:function(e,n){},60:function(e,n,t){e.exports=t(121)},91:function(e,n,t){},93:function(e,n,t){}},[[60,17,14]]]);
//# sourceMappingURL=main.fe9546dc.chunk.js.map