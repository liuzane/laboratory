(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{361:function(e,t,a){},363:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},449:function(e,t,a){"use strict";a.r(t);a(164);var n=a(117),r=a(11),c=a(12),l=a(15),u=a(13),o=a(14),i=(a(444),a(202)),s=a(0),m=a.n(s),d=a(32),p=a(25),h=a(7),f=(a(361),function(e){return m.a.createElement("article",{className:"layout"},e.children)}),E=function(e){return m.a.createElement("header",{className:"layout-header"},e.children)},y=a(363),b=a.n(y),O=function(e){return m.a.createElement("div",{className:"layout-sider"},m.a.createElement("div",{className:"layout-sider-top"},m.a.createElement("img",{src:b.a,alt:"",className:"layout-sider-logo"}),m.a.createElement("span",{className:"layout-sider-name"},"Laboratory")),e.children)},j=function(e){return m.a.createElement("section",{className:"layout-content"},e.children)},k=f;f.Header=E,f.Sider=O,f.Content=j;var v=k.Sider,S=k.Header,N=k.Content,g=i.a.SubMenu,w=i.a.Item,J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).goto=function(e){a.props.history.push(e.key)},a.state={},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.update_user)({id:"1",username:"admin"})}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(h.is)(Object(h.fromJS)(this.props),Object(h.fromJS)(e))||!Object(h.is)(Object(h.fromJS)(this.state),Object(h.fromJS)(t))}},{key:"render",value:function(){var e=this.props.location.pathname;return m.a.createElement(k,null,m.a.createElement(v,null,m.a.createElement(i.a,{defaultSelectedKeys:[e],defaultOpenKeys:[e],mode:"inline",theme:"dark",onSelect:this.goto},p.c.map(function(e){return e.children?m.a.createElement(g,{key:e.path,title:m.a.createElement("span",null,m.a.createElement(n.a,{type:"desktop"}),m.a.createElement("span",null,e.title))},e.children.map(function(e){return m.a.createElement(w,{key:e.path},e.title)})):m.a.createElement(w,{key:e.path},e.title)}))),m.a.createElement(k,null,m.a.createElement(S,null,"header"),m.a.createElement(N,null,m.a.createElement(p.a,{routes:p.c}))))}}]),t}(s.Component),C=Object(d.b)(function(e){var t=e.user;return{id:t.id,username:t.username}},function(e){return{update_user:e.user.update_user}})(J);t.default=C}}]);