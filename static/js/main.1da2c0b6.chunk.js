(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),l=t.n(r),c=t(3),o=t(4),p=t(7),s=t(6),u=t(5),g=t.n(u),m=function(e){var a=e.onClick,t=e.page,n=e.total;return i.a.createElement("nav",{className:"pagination is-centered",role:"navigation","aria-label":"pagination"},t>3&&i.a.createElement("button",{className:"pagination-previous",type:"button",onClick:a,"data-name":"prev"},"<<"),function(e,a,t){var n="&hellip;",r=[];return a<t-2&&a>3&&(r=[1,n].concat([a-1,a,a+1],[n,t])),a>=t-2&&(r=[t-2,t-1,t]),a<=3&&(r=[1,2,3]),i.a.createElement("ul",{className:"pagination-list"},r.map((function(t){return"&hellip;"===t?i.a.createElement("li",null,i.a.createElement("span",{className:"pagination-ellipsis"},"\u2026")):i.a.createElement("li",null,i.a.createElement("button",{className:g()("pagination-link",{"is-current":t===a}),type:"button",key:t,onClick:e,"data-name":t},t))})))}(a,t,n),t<n-2&&i.a.createElement("button",{className:"pagination-next",type:"button",onClick:a,"data-name":"next"},">>"))},b=(t(13),function(e){Object(p.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={page:1,total:42,perPage:5},e.handleChange=function(a){var t=a.target.getAttribute("data-name"),n=e.state.page;if(isNaN(t))switch(t){case"next":e.updatePage(n+1);break;case"prev":e.updatePage(n-1)}else e.updatePage(Number(t))},e.updatePage=function(a){e.setState({page:a})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.page,t=e.total,n=e.perPage;return i.a.createElement(m,{total:t,page:a,perPage:n,onClick:this.handleChange})}}]),t}(n.PureComponent));l.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1da2c0b6.chunk.js.map