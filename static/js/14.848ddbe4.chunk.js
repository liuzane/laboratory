(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{421:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=(a(422),Object(n.memo)(function(e){return r.a.createElement("article",{className:o()("layout",e.className),style:e.style},e.children)})),i=Object(n.memo)(function(e){return r.a.createElement("header",{className:o()("layout-header",e.className),style:e.style},e.children)}),s=a(423),u=a.n(s),d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return o.a.apply(void 0,["layout-sider".concat(e)].concat(a))},m=Object(n.memo)(function(e){return r.a.createElement("div",{className:d("",e.className),style:e.style},r.a.createElement("div",{className:d("__top")},r.a.createElement("img",{alt:"logo",className:d("__logo"),src:u.a}),r.a.createElement("span",{className:d("__name")},"Laboratory")),e.children)}),f=Object(n.memo)(function(e){return r.a.createElement("section",{className:o()("layout-content",e.className),style:e.style},e.children)}),y=Object(n.memo)(function(e){return r.a.createElement("div",{className:o()("layout-container",e.className),style:e.style},r.a.createElement("div",{className:o()("layout-wrapper",e.wrapperClassName),style:e.wrapperStyle},e.children))});a.d(t,"d",function(){return c}),a.d(t,"c",function(){return i}),a.d(t,"e",function(){return m}),a.d(t,"b",function(){return f}),a.d(t,"a",function(){return y})},422:function(e,t,a){},423:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},474:function(e,t,a){},546:function(e,t,a){},774:function(e,t,a){"use strict";a.r(t);a(197);var n=a(85),r=(a(464),a(768)),l=(a(236),a(151)),o=a(7),c=a(8),i=a(15),s=a(14),u=a(38),d=a(16),m=a(0),f=a.n(m),y=a(79),v=(a(438),a(454)),p=a(6),g=(a(460),a(459)),b=a(220),h=(a(390),a(126)),E=(a(474),h.a.Item),N=f.a.createContext(),O=f.a.createContext(),w=function(){return"count-table"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},j=h.a.create()(function(e){var t=e.form,a=e.index,n=Object(b.a)(e,["form","index"]);return f.a.createElement(O.Consumer,null,function(e){return a&&!e[a]&&(e[a]=t),f.a.createElement(N.Provider,{value:t},f.a.createElement("tr",n))})}),x=function(e){var t=e.validate,a=e.dataIndex,n=e.record,r=e.children,l=Object(b.a)(e,["validate","dataIndex","record","children"]);return"function"!=typeof t&&void 0!==t&&console.error("[ Validate Error ]: validate must is function!"),f.a.createElement("td",l,t?f.a.createElement(N.Consumer,null,function(e){return f.a.createElement(E,null,t(e,a,n))}):r)},C=function(e){var t=e.rowKey,a=Object(b.a)(e,["rowKey"]);t||console.warn("[ CountTable rowKey Warn ]: rowKey is"+t);var n={body:{row:j,cell:x}};return f.a.createElement("div",{className:w("__body")},f.a.createElement(g.a,Object.assign({bordered:!0,components:n,onRow:function(e){return{index:e[t]}},pagination:!1,rowKey:t,size:"small"},a)))},k=function(e){var t=e.title;return t&&t instanceof Array?f.a.createElement("div",{className:w("__title")},t.map(function(e,t){return f.a.createElement("span",{key:t},e.label,"：",e.value)})):(console.warn("[ CountTable Warn ]: title must is array!"),null)},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleRowData=function(e,t){var n=a.props.dataKey,r=[];return e.forEach(function(e){e[n]&&e[n].length>0?r=r.concat(a.handleRowData(e[n],t)):r.push(t.dataIndex&&!t.allData?e[t.dataIndex]:e)}),r},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.footer,n=t.dataSource;return f.a.createElement("div",{className:w("__footer")},a.map(function(t,a){return f.a.createElement("div",{className:w("__footer-cell"),key:a,style:{width:"number"==typeof t.width?t.width+"px":t.width,textAlign:t.align}},t.render(e.handleRowData(n,t)))}))}}]),t}(m.PureComponent),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).resetForms=function(){a.forms={}},a.forms={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a=this.props,n=a.multiple,r=a.data,l=a.dataKey,o=a.titles,c=a.loading,i=a.footer,s=a.tableKey,u=a.className,d=a.style,y=Object(b.a)(a,["multiple","data","dataKey","titles","loading","footer","tableKey","className","style"]),g=y.columns.map(function(e){return Object(p.a)({},e,{onCell:function(t){return{record:t,dataIndex:e.dataIndex,validate:e.validate}}})}),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return e?function(){return f.a.createElement(k,{title:e})}:null};return delete y.columns,e=n?r.map(function(e,t){var a=e[l],n="";return a||console.error("[ CountTable Error ]: "+l+" is "+a),n=s&&e[s]?e[s]:e.key?e.key:t,f.a.createElement(C,Object.assign({columns:g,dataSource:a,key:n,title:h(e.title)},y))}):f.a.createElement(C,Object.assign({columns:g,dataSource:r,loading:c,title:h()},y)),i&&i.length>0&&r.length>0&&(t=f.a.createElement(_,{dataKey:l,dataSource:r,footer:i})),f.a.createElement("div",{className:"".concat(w()," ").concat(u).trim(),style:d},c&&n?f.a.createElement("div",{className:w("__loading")},f.a.createElement(v.a,{size:"large",spinning:!0})):f.a.createElement(m.Fragment,null,f.a.createElement(O.Provider,{value:this.forms},e),t))}}]),t}(m.PureComponent);I.defaultProps={multiple:!1,dataKey:"dataSource",className:""};var K=a(421),S=(a(546),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).updateTableData=function(e,t,n){var r=JSON.parse(JSON.stringify(a.state.data)),l=r.findIndex(function(a){return a[e]===t});return l>-1&&r.splice(l,1,n),r},a.onInputChange=function(e,t,n){t[e]=n,a.setState({data:a.updateTableData("id",t.id,t)})},a.getListPersons=function(){a.setState({loading:!0}),y.b.getListPersons({page:1,size:2},{cancelToken:a.source.token}).then(function(e){a.setState({loading:!1,data:e.data})},function(e){y.a.isCancel(e)||(l.a.error(e.message),a.setState({loading:!1}))})},a.validate=function(){var e=!0,t=a.CountTable.current.forms,n=function(t,a){console.log(t,a),t&&(e=!1)};for(var r in t)t[r].validateFields(n);e&&l.a.success("succeed")},a.state={data:[],loading:!1},a.source=y.a.CancelToken.source(),a.columns=[{title:"Name",align:"center",dataIndex:"name",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}]},{title:"Age",align:"center",dataIndex:"age",validate:function(e,t,n){return(0,e.getFieldDecorator)(t,{rules:[{required:!0,message:"请输入年龄"},{validator:function(e,t,a){t<=0?a("年龄必须大于 0"):a()}}],initialValue:n[t]})(f.a.createElement(r.a,{onChange:a.onInputChange.bind(Object(u.a)(a),t,n)}))}},{title:"Address",align:"center",dataIndex:"address"},{title:"Action",align:"center",render:function(e,t,r){return f.a.createElement("div",{className:"btns"},f.a.createElement(n.a,{type:"primary",size:"small",onClick:a.test},"Check"),f.a.createElement(n.a,{size:"small"},"Edit"),f.a.createElement(n.a,{type:"danger",size:"small"},"Delete"))}}],a.footer=[{dataIndex:"name",render:function(e){return"合计"}},{dataIndex:"age",render:function(e){return"年龄："+e.reduce(function(e,t){return e+t})}}],a.CountTable=f.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getListPersons()}},{key:"componentWillUnmount",value:function(){this.source.cancel()}},{key:"render",value:function(){var e=this.columns,t=this.footer,a=this.state,r=a.data,l=a.loading;return f.a.createElement(K.a,null,f.a.createElement(I,{className:"desktop-table",columns:e,data:r,footer:t,loading:l,onChange:function(e,t,a){console.log(t)},ref:this.CountTable,rowKey:"id"}),f.a.createElement("div",{style:{textAlign:"center",marginTop:"10px"}},f.a.createElement(n.a,{onClick:this.validate,type:"primary"},"验证")))}}]),t}(m.PureComponent));t.default=S}}]);