(this["webpackJsonpmedophin.github.io"]=this["webpackJsonpmedophin.github.io"]||[]).push([[0],{140:function(e,t,c){},226:function(e,t,c){},227:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),i=c.n(n),r=c(17),l=c.n(r),s=(c(140),c(9)),o=c(10),m=c(12),b=c(11),h=c(102),d=c(1),p=c(18),j=(c(228),c(82)),O=c(16),u=(c(111),c(80)),g=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,N=function(e,t){var c=0===e.name.indexOf("title")?"h1":"div";c=e.href?"a":c;var a="string"===typeof e.children&&e.children.match(g)?i.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(a=i.a.createElement(u.a,Object(d.a)({},e.children))),i.a.createElement(c,Object(d.a)({key:t.toString()},e),a)},x=j.a.Item,k=j.a.SubMenu,v=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).phoneClick=function(){var e=!a.state.phoneOpen;a.setState({phoneOpen:e})},a.state={phoneOpen:void 0},a}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.dataSource,n=t.isMobile,i=Object(p.a)(t,["dataSource","isMobile"]),r=this.state.phoneOpen,l=c.Menu.children.map((function(e){var t=e.children,c=e.subItem,n=Object(p.a)(e,["children","subItem"]);return c?Object(a.jsx)(k,Object(d.a)(Object(d.a)({},n),{},{title:Object(a.jsx)("div",Object(d.a)(Object(d.a)({},t),{},{className:"header0-item-block ".concat(t.className).trim(),children:t.children.map(N)})),popupClassName:"header0-item-child",children:c.map((function(e,t){var c=e.children,n=c.href?Object(a.jsx)("a",Object(d.a)(Object(d.a)({},c),{},{children:c.children.map(N)})):Object(a.jsx)("div",Object(d.a)(Object(d.a)({},c),{},{children:c.children.map(N)}));return Object(a.jsx)(x,Object(d.a)(Object(d.a)({},e),{},{children:n}),e.name||t.toString())}))}),e.name):Object(a.jsx)(x,Object(d.a)(Object(d.a)({},n),{},{children:Object(a.jsx)("a",Object(d.a)(Object(d.a)({},t),{},{className:"header0-item-block ".concat(t.className).trim(),children:t.children.map(N)}))}),e.name)})),s=void 0===r?300:null;return Object(a.jsx)(O.b,Object(d.a)(Object(d.a)(Object(d.a)({component:"header",animation:{opacity:0,type:"from"}},c.wrapper),i),{},{children:Object(a.jsxs)("div",Object(d.a)(Object(d.a)({},c.page),{},{className:"".concat(c.page.className).concat(r?" open":""),children:[Object(a.jsx)(O.b,Object(d.a)(Object(d.a)({animation:{x:-30,type:"from",ease:"easeOutQuad"}},c.logo),{},{children:Object(a.jsx)("img",{width:"100%",src:c.logo.children,alt:"img"})})),n&&Object(a.jsxs)("div",Object(d.a)(Object(d.a)({},c.mobileMenu),{},{onClick:function(){e.phoneClick()},children:[Object(a.jsx)("em",{}),Object(a.jsx)("em",{}),Object(a.jsx)("em",{})]})),Object(a.jsx)(O.b,Object(d.a)(Object(d.a)({},c.Menu),{},{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!r,children:Object(a.jsx)(j.a,{mode:n?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark",children:l})}))]}))}))}}]),c}(i.a.Component),y=c(232),f=c(45),w=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,Object(a.jsxs)("div",Object(d.a)(Object(d.a)(Object(d.a)({},e),t.wrapper),{},{children:[Object(a.jsxs)(f.a,Object(d.a)(Object(d.a)({type:["bottom","top"],delay:200},t.textWrapper),{},{children:[Object(a.jsx)("div",Object(d.a)(Object(d.a)({},t.title),{},{children:"string"===typeof t.title.children&&t.title.children.match(g)?Object(a.jsx)("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children}),"title"),Object(a.jsx)("div",Object(d.a)(Object(d.a)({},t.content),{},{children:t.content.children}),"content"),Object(a.jsx)(u.a,Object(d.a)(Object(d.a)({ghost:!0},t.button),{},{children:t.button.children}),"button")]}),"QueueAnim"),Object(a.jsx)(O.b,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",children:Object(a.jsx)(y.a,{})},"icon")]}))}}]),c}(i.a.PureComponent),M=(c(72),c(46)),X=(c(73),c(47)),S=c(44),W=c.n(S),A=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.dataSource,c=(e.isMobile,Object(p.a)(e,["dataSource","isMobile"])),n=t.wrapper,i=t.titleWrapper,r=t.page,l=t.OverPack,s=t.childWrapper;return Object(a.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},c),n),{},{children:Object(a.jsxs)("div",Object(d.a)(Object(d.a)({},r),{},{children:[Object(a.jsx)("div",Object(d.a)(Object(d.a)({},i),{},{children:i.children.map(N)})),Object(a.jsx)(W.a,Object(d.a)(Object(d.a)({},l),{},{children:Object(a.jsx)(f.a,{type:"bottom",leaveReverse:!0,component:M.a,componentProps:s,children:s.children.map((function(e,t){var c=e.children,n=Object(p.a)(e,["children"]);return Object(a.jsx)(X.a,Object(d.a)(Object(d.a)({},n),{},{children:Object(a.jsx)("div",Object(d.a)(Object(d.a)({},c),{},{children:c.children.map(N)}))}),t.toString())}))},"block")}))]}))}))}}]),c}(i.a.PureComponent),C=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).getChildrenToRender=function(e){return e.map((function(e){return Object(a.jsx)(X.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(a.jsxs)("a",Object(d.a)(Object(d.a)({},e.children.wrapper),{},{children:[Object(a.jsx)("span",Object(d.a)(Object(d.a)({},e.children.img),{},{children:Object(a.jsx)("img",{src:e.children.img.children,height:"100%",alt:"img"})})),Object(a.jsx)("p",Object(d.a)(Object(d.a)({},e.children.content),{},{children:e.children.content.children}))]}))}),e.name)}))},e}return Object(o.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var c=this.getChildrenToRender(t.block.children);return Object(a.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},e),t.wrapper),{},{children:Object(a.jsxs)("div",Object(d.a)(Object(d.a)({},t.page),{},{children:[Object(a.jsx)("div",Object(d.a)(Object(d.a)({},t.titleWrapper),{},{children:t.titleWrapper.children.map(N)}),"title"),Object(a.jsx)(W.a,Object(d.a)(Object(d.a)({className:"content-template ".concat(e.className)},t.OverPack),{},{children:Object(a.jsx)(O.a,Object(d.a)(Object(d.a)({component:M.a,enter:{y:"+=30",opacity:0,type:"from",ease:"easeInOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeInOutQuad"}},t.block),{},{children:c}),"ul")}))]}))}))}}]),c}(i.a.PureComponent),z=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props),c=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var i=0,r=c.block.children.map((function(t,c){var r=t.children,l=n?50*c:e.getDelay(c,24/t.md),s={opacity:0,type:"from",ease:"easeOutQuad",delay:l},o=Object(d.a)(Object(d.a)({},s),{},{x:"+=10",delay:l+100});return i=(i+=t.md)>24?0:i,Object(a.jsxs)(O.b,Object(d.a)(Object(d.a)({component:X.a,animation:s},t),{},{componentProps:{md:t.md,xs:t.xs},className:i?t.className:"".concat(t.className||""," clear-both").trim(),children:[Object(a.jsx)(O.b,Object(d.a)(Object(d.a)({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"}},r.icon),{},{children:Object(a.jsx)("img",{src:r.icon.children,width:"100%",alt:"img"})}),"img"),Object(a.jsxs)("div",Object(d.a)(Object(d.a)({},r.textWrapper),{},{children:[Object(a.jsx)(O.b,Object(d.a)(Object(d.a)({animation:o,component:"h2"},r.title),{},{children:r.title.children}),"h2"),Object(a.jsx)(O.b,Object(d.a)(Object(d.a)({animation:Object(d.a)(Object(d.a)({},o),{},{delay:l+200}),component:"div"},r.content),{},{children:r.content.children}),"p")]}))]}),t.name)}));return Object(a.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},t),c.wrapper),{},{children:Object(a.jsxs)("div",Object(d.a)(Object(d.a)({},c.page),{},{children:[Object(a.jsx)("div",Object(d.a)(Object(d.a)({},c.titleWrapper),{},{children:c.titleWrapper.children.map(N)})),Object(a.jsx)(W.a,Object(d.a)(Object(d.a)({},c.OverPack),{},{children:Object(a.jsx)(f.a,{type:"bottom",children:Object(a.jsx)(M.a,Object(d.a)(Object(d.a)({},c.block),{},{children:r}),"row")},"u")}))]}))}))}}]),c}(i.a.PureComponent),P=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).getLiChildren=function(e){return e.map((function(e,t){var c=e.title,n=e.childWrapper,i=Object(p.a)(e,["title","childWrapper"]);return Object(a.jsxs)(X.a,Object(d.a)(Object(d.a)({},i),{},{title:null,content:null,children:[Object(a.jsx)("h2",Object(d.a)(Object(d.a)({},c),{},{children:"string"===typeof c.children&&c.children.match(g)?Object(a.jsx)("img",{src:c.children,width:"100%",alt:"img"}):c.children})),Object(a.jsx)("div",Object(d.a)(Object(d.a)({},n),{},{children:n.children.map(N)}))]}),t.toString())}))},e}return Object(o.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var c=this.getLiChildren(t.block.children);return Object(a.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},e),t.wrapper),{},{children:Object(a.jsxs)(W.a,Object(d.a)(Object(d.a)({},t.OverPack),{},{children:[Object(a.jsx)(f.a,Object(d.a)(Object(d.a)({type:"bottom",leaveReverse:!0,component:M.a},t.block),{},{children:c}),"ul"),Object(a.jsx)(O.b,Object(d.a)(Object(d.a)({animation:{y:"+=30",opacity:0,type:"from"}},t.copyrightWrapper),{},{children:Object(a.jsx)("div",Object(d.a)(Object(d.a)({},t.copyrightPage),{},{children:Object(a.jsx)("div",Object(d.a)(Object(d.a)({},t.copyright),{},{children:t.copyright.children}))}))}),"copyright")]}))}))}}]),c}(i.a.Component);P.defaultProps={className:"footer1"};var I,D=P,B={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e00",name:"text"}]},subItem:[{name:"sub0",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}},{name:"sub1",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}}]},{name:"item1",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e8c",name:"text"}]}},{name:"item2",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e09",name:"text"}]}},{name:"item3",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u56db",name:"text"}]}}]},mobileMenu:{className:"header0-mobile-menu"}},R={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner0-content",children:"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848"},button:{className:"banner0-button",children:"Learn More"}},Q={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u4ea7\u54c1\u4e0e\u670d\u52a1"}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u4e1a\u52a1\u63a5\u5165"},{name:"content",children:"\u652f\u4ed8\u3001\u7ed3\u7b97\u3001\u6838\u7b97\u63a5\u5165\u4ea7\u54c1\u6548\u7387\u7ffb\u56db\u500d"}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u4e8b\u4e2d\u98ce\u9669\u76d1\u63a7"},{name:"content",children:"\u5728\u6240\u6709\u9700\u6c42\u914d\u7f6e\u73af\u8282\u4e8b\u524d\u98ce\u9669\u63a7\u5236\u548c\u8d28\u91cf\u63a7\u5236\u80fd\u529b"}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u6570\u636e\u8fd0\u8425"},{name:"content",children:"\u6c89\u6dc0\u4ea7\u54c1\u63a5\u5165\u6548\u7387\u548c\u8fd0\u8425\u5c0f\u4e8c\u5de5\u4f5c\u6548\u7387\u6570\u636e"}]}}]}},L={wrapper:{className:"home-page-wrapper content5-wrapper"},page:{className:"home-page content5"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u5ba2\u6237\u6848\u4f8b",className:"title-h1"},{name:"content",className:"title-content",children:"\u5728\u8fd9\u91cc\u7528\u4e00\u6bb5\u8bdd\u4ecb\u7ecd\u670d\u52a1\u7684\u6848\u4f8b\u60c5\u51b5"}]},block:{className:"content5-img-wrapper",gutter:16,children:[{name:"block0",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block1",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}},{name:"block2",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block3",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}},{name:"block4",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block5",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}},{name:"block6",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block7",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}}]}},T={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u8682\u8681\u91d1\u878d\u4e91\u63d0\u4f9b\u4e13\u4e1a\u7684\u670d\u52a1",className:"title-h1"},{name:"content",className:"title-content",children:"\u57fa\u4e8e\u963f\u91cc\u4e91\u5f3a\u5927\u7684\u57fa\u7840\u8d44\u6e90"}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},content:{className:"content3-content",children:"\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002"}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4e91\u5b89\u5168"},content:{className:"content3-content",children:"\u6309\u91d1\u878d\u4f01\u4e1a\u5b89\u5168\u8981\u6c42\u6253\u9020\u7684\u5b8c\u6574\u4e91\u4e0a\u5b89\u5168\u4f53\u7cfb\uff0c\u5168\u65b9\u4f4d\u4fdd\u969c\u91d1\u878d\u5e94\u7528\u53ca\u6570\u636e\u5b89\u5168\u3002"}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4e91\u76d1\u63a7"},content:{className:"content3-content",children:"\u5206\u5e03\u5f0f\u4e91\u73af\u5883\u96c6\u4e2d\u76d1\u63a7\uff0c\u7edf\u4e00\u8d44\u6e90\u53ca\u5e94\u7528\u72b6\u6001\u89c6\u56fe\uff0c\u667a\u80fd\u5206\u6790\u53ca\u6545\u969c\u5b9a\u4f4d\u3002"}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u79fb\u52a8"},content:{className:"content3-content",children:"\u4e00\u7ad9\u5f0f\u79fb\u52a8\u91d1\u878dAPP\u5f00\u53d1\u53ca\u5168\u9762\u76d1\u63a7\uff1b\u4e30\u5bcc\u53ef\u7528\u7ec4\u4ef6\uff0c\u52a8\u6001\u53d1\u5e03\u548c\u6545\u969c\u70ed\u4fee\u590d\u3002"}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5206\u5e03\u5f0f\u4e2d\u95f4\u4ef6"},content:{className:"content3-content",children:"\u91d1\u878d\u7ea7\u8054\u673a\u4ea4\u6613\u5904\u7406\u4e2d\u95f4\u4ef6\uff0c\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u8ba1\u7b97\u673a\uff0c\u6570\u4e07\u7b14/\u79d2\u7ea7\u5e76\u53d1\u80fd\u529b\uff0c\u4e25\u683c\u4fdd\u8bc1\u4ea4\u6613\u6570\u636e\u7edf\u4e00\u6027\u3002"}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5927\u6570\u636e"},content:{className:"content3-content",children:"\u4e00\u7ad9\u5f0f\u3001\u5168\u5468\u671f\u5927\u6570\u636e\u534f\u540c\u5de5\u4f5c\u5e73\u53f0\uff0cPB\u7ea7\u6570\u636e\u5904\u7406\u3001\u6beb\u79d2\u7ea7\u6570\u636e\u5206\u6790\u5de5\u5177\u3002"}}}]}},_={wrapper:{className:"home-page-wrapper footer1-wrapper"},OverPack:{className:"footer1",playScale:.2},block:{className:"home-page",gutter:0,children:[{name:"block0",xs:24,md:6,className:"block",title:{className:"logo",children:"https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg"},childWrapper:{className:"slogan",children:[{name:"content0",children:"Animation specification and components of Ant Design."}]}},{name:"block1",xs:24,md:6,className:"block",title:{children:"\u4ea7\u54c1"},childWrapper:{children:[{name:"link0",href:"#",children:"\u4ea7\u54c1\u66f4\u65b0\u8bb0\u5f55"},{name:"link1",href:"#",children:"API\u6587\u6863"},{name:"link2",href:"#",children:"\u5feb\u901f\u5165\u95e8"},{name:"link3",href:"#",children:"\u53c2\u8003\u6307\u5357"}]}},{name:"block2",xs:24,md:6,className:"block",title:{children:"\u5173\u4e8e"},childWrapper:{children:[{href:"#",name:"link0",children:"FAQ"},{href:"#",name:"link1",children:"\u8054\u7cfb\u6211\u4eec"}]}},{name:"block3",xs:24,md:6,className:"block",title:{children:"\u8d44\u6e90"},childWrapper:{children:[{href:"#",name:"link0",children:"Ant Design"},{href:"#",name:"link1",children:"Ant Motion"}]}}]},copyrightWrapper:{className:"copyright-wrapper"},copyrightPage:{className:"home-page"},copyright:{className:"copyright",children:Object(a.jsxs)("span",{children:["\xa92018 by ",Object(a.jsx)("a",{href:"https://motion.ant.design",children:"Ant Motion"})," All Rights Reserved"]})}};c(226);Object(h.enquireScreen)((function(e){I=e}));var K=("undefined"!==typeof window?window:{}).location,V=void 0===K?{}:K,E=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).state={isMobile:I,show:!V.port},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;Object(h.enquireScreen)((function(t){e.setState({isMobile:!!t})})),V.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[Object(a.jsx)(v,{id:"Nav0_0",dataSource:B,isMobile:this.state.isMobile},"Nav0_0"),Object(a.jsx)(w,{id:"Banner0_1",dataSource:R,isMobile:this.state.isMobile},"Banner0_1"),Object(a.jsx)(A,{id:"Content0_0",dataSource:Q,isMobile:this.state.isMobile},"Content0_0"),Object(a.jsx)(C,{id:"Content5_0",dataSource:L,isMobile:this.state.isMobile},"Content5_0"),Object(a.jsx)(z,{id:"Content3_0",dataSource:T,isMobile:this.state.isMobile},"Content3_0"),Object(a.jsx)(D,{id:"Footer1_0",dataSource:_,isMobile:this.state.isMobile},"Footer1_0")];return Object(a.jsx)("div",{className:"templates-wrapper",ref:function(t){e.dom=t},children:this.state.show&&t})}}]),c}(i.a.Component),F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,233)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),F()}},[[227,1,2]]]);
//# sourceMappingURL=main.ca247b6c.chunk.js.map