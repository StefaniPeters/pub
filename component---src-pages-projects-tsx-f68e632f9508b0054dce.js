(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{gZkK:function(e,t,n){"use strict";n.r(t);var r=n("YwZP"),a=n("q1tI"),c=n.n(a),o=n("/p1/"),i=n("kD0k"),l=n.n(i),s=(n("ls82"),n("/S4K")),u=n("vOnD"),m=n("Wbzz"),d=u.c.button.withConfig({displayName:"card-button__Button",componentId:"sc-5sulta-0"})(["color:",";border-radius:0.2em;padding:7px 25px;transition:0.15s;opacity:",";align-self:flex-end;background:transparent;border:1px solid ",";@media (hover:hover){&:hover{background:",";color:",";border:1px solid ",";cursor:",";}}:focus{outline:none;box-shadow:0 0 0 4px ",";}"],(function(e){var t=e.joined,n=e.theme;return t?n.colors.text:n.colors.highlight}),(function(e){return e.disabled?"0.75":"1"}),(function(e){var t=e.joined,n=e.theme;return t?n.colors.greyDark:n.colors.highlight}),(function(e){var t=e.joined,n=e.theme;return t?"transparent":n.colors.highlight}),(function(e){var t=e.joined,n=e.theme;return t?n.colors.base:n.colors.baseinvert}),(function(e){var t=e.joined,n=e.theme;return t?n.colors.base:n.colors.highlight}),(function(e){return e.disabled?"default":"pointer"}),(function(e){var t=e.joined,n=e.theme;return t?n.colors.secondary:n.colors.highlightLight})),p=function(e){var t=e.children,n=e.joined,r=void 0!==n&&n,o=e.disabled,i=void 0!==o&&o,u=e.statusText,m=e.onClick,p=Object(a.useState)(!1),f=p[0],h=p[1],v=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!m||f){e.next=6;break}return h(!0),e.next=5,m();case 5:h(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(d,{joined:r,disabled:i,onClick:v},f?u:t)},f=u.c.div.withConfig({displayName:"card-tags__Wrapper",componentId:"sc-1u349d-0"})(["margin-bottom:",";"],(function(e){var t=e.hasMargin;return void 0!==t&&t?"1em":0})),h=u.c.div.attrs({"data-testid":"project-card-pill"}).withConfig({displayName:"card-tags__Pill",componentId:"sc-1u349d-1"})(["background:",";border-radius:0.3125em;box-shadow:1px 1px 2px ",";color:",";display:inline-block;font-size:0.7em;font-weight:400;margin-right:0.5em;padding:0 0.625em;transition:0.2s;&:last-child{margin:0;}"],(function(e){return e.theme.colors.baseinvert}),(function(e){return e.theme.colors.shadow}),(function(e){return e.theme.colors.text})),v=function(e){var t=e.items;return c.a.createElement(f,{hasMargin:t.length>0},t.slice(0,5).map((function(e){var t=e.key,n=e.text;return c.a.createElement(h,{key:t},n)})),t.length>5?c.a.createElement(h,null,"+",t.length-5):null)},g=n("9VIf"),b=[{name:"slack",icon:g.o},{name:"discord",icon:g.e}],j=u.c.h3.withConfig({displayName:"card-title__Wrapper",componentId:"j8fdv-0"})(["color:",";margin:0.2em 0 0.8em;"],(function(e){return e.theme.colors.base})),E=u.c.img.attrs((function(){return{alt:""}})).withConfig({displayName:"card-title__Icon",componentId:"j8fdv-1"})(["filter:",";margin:0 0 -0.06em;position:relative;left:0.35em;height:0.9em;user-select:none;transition:filter 0.2s ease-out;@media (hover:hover){&:hover{cursor:",";}}"],(function(e){var t=e.clickable;return void 0!==t&&t?"grayscale(0%)":"grayscale(100%)"}),(function(e){var t=e.clickable;return void 0!==t&&t?"pointer":"default"})),k=function(e){var t,n=e.name,r=e.communicationPlatformUrl,o=e.clickable,i=void 0!==o&&o,l=function(e){var t=e.children;return i?c.a.createElement("a",{href:r,title:"Communication platform link for "+n,target:"_blank",rel:"noopener noreferrer"},t):c.a.createElement(a.Fragment,null,t)};return c.a.createElement(j,null,n,r?c.a.createElement(l,null,c.a.createElement(E,{src:null===(t=b.find((function(e){var t=e.name;return null==r?void 0:r.includes(t)})))||void 0===t?void 0:t.icon,clickable:i})):null)},w=n("efbE"),x=n("woEc"),y=u.c.div.withConfig({displayName:"card__Wrapper",componentId:"e54ysu-0"})(["display:flex;background-color:",";border-radius:0.3125em;padding:1.5em;flex-direction:column;height:100%;box-shadow:1px 1px 2px ",";"],(function(e){return e.theme.colors.section}),(function(e){return e.theme.colors.shadow})),C=u.c.p.withConfig({displayName:"card__Description",componentId:"e54ysu-1"})(["margin:0 0 1em;font-size:1em;"]),I=u.c.div.withConfig({displayName:"card__Spacer",componentId:"e54ysu-2"})(["flex:1;"]),O=u.c.div.withConfig({displayName:"card__Footer",componentId:"e54ysu-3"})(["display:flex;flex-direction:row;justify-content:space-between;span{line-height:2.47;}span svg{vertical-align:middle;margin-right:0.3em;path{fill:",";}}"],(function(e){return e.theme.colors.text})),_=function(e){var t=e.d;return c.a.createElement(o.p,{viewBox:"0 0 640 512",fontSize:"1em"},c.a.createElement("path",{fill:"currentColor",d:t}))},z=function(e){var t=e.content,n=e.setError,r=Object(a.useState)(!1),o=r[0],i=r[1],u=x.b.isUserAuthenticated()?x.b.getUserId():null;Object(a.useEffect)((function(){i(void 0!==t.projectUsers.find((function(e){return e.userId===u})))}),[t.projectUsers,u]);var d=function(){Object(m.navigate)("/signin",{state:{message:"You need to be signed in to join a project"}})},f=function(){var e=Object(s.a)(l.a.mark((function e(r){var a,c,s,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.b.isUserAuthenticated()){e.next=3;break}return d(),e.abrupt("return");case 3:return a=w.ServiceResolver.apiResolver(),c=r.projectUsers.find((function(e){return e.userId===u})),e.next=7,a.leaveProject(c.id);case 7:(s=e.sent).ok&&(m=t.projectUsers.indexOf(c),t.projectUsers.splice(m,1)),s.ok?i(!o):n(s.data.message);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(l.a.mark((function e(r){var a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.b.isUserAuthenticated()){e.next=3;break}return d(),e.abrupt("return");case 3:return a=w.ServiceResolver.apiResolver(),c={projectId:r.id,isOwner:!1,userId:u},e.next=7,a.joinProject(c);case 7:(s=e.sent).ok&&(c.username=s.data.username,c.id=s.data.id,t.projectUsers.push(c)),s.ok?i(!o):n(s.data.message);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=t.projectUsers.length;return c.a.createElement(y,{"data-testid":"project"},c.a.createElement(k,{name:t.name,clickable:o,communicationPlatformUrl:t.communicationPlatformUrl}),c.a.createElement(C,null,t.description),c.a.createElement(v,{items:t.projectTechnologies.map((function(e){var t=e.projectId,n=e.name;return{key:t+"-"+n+"-tag",text:n}}))}),c.a.createElement(I,null),c.a.createElement(O,null,g>0?c.a.createElement("span",null,g>=3&&c.a.createElement(_,{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}),2===g&&c.a.createElement(_,{d:"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"}),1===g&&c.a.createElement(_,{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}),g," Member",1===g?"":"s"):c.a.createElement(I,null),c.a.createElement(p,{onClick:function(){return o?f(t):h(t)},statusText:o?"Leaving...":"Joining...",joined:o},o?"Leave":"Join")))},S=u.c.div.withConfig({displayName:"panel__Wrapper",componentId:"acrv2w-0"})(["display:grid;align-items:flex-start;grid-template-columns:repeat(1fr);grid-template-rows:8fr;gap:1.5em 1.5em;margin-bottom:2em;@media screen and (min-width:","){grid-template-columns:repeat(2,1fr);}@media screen and (min-width:","){grid-template-columns:repeat(3,1fr);}"],(function(e){return e.theme.sizes.width.small}),(function(e){return e.theme.sizes.width.medium})),U=function(e){var t=e.content,n=void 0===t?[]:t,r=e.setError;return c.a.createElement(S,null,n.map((function(e){return c.a.createElement(z,{key:e.name,content:e,setError:r})})))},P=n("AkCr"),N=n("0eLQ"),R=function(){var e=Object(a.useState)([]),t=e[0],n=e[1],r=Object(a.useState)(null),i=r[0],u=r[1],m=Object(a.useState)(!0),d=m[0],p=m[1],f=Object(a.useState)(""),h=f[0],v=f[1];return Object(a.useEffect)((function(){var e=w.ServiceResolver.apiResolver();function t(){return(t=Object(s.a)(l.a.mark((function t(){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getProjects();case 3:(r=t.sent).ok?(a=r.data,n(a)):u(r.data.message),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),u(t.t0.message);case 10:p(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),c.a.createElement(a.Fragment,null,c.a.createElement(o.l,{title:"Projects"}),c.a.createElement(P.c,{page:"projects gallery"}),c.a.createElement(o.q,null,h&&c.a.createElement(N.b,{type:"success"},h," ",c.a.createElement(N.a,{onClick:function(){return v(null)}},"✖")),i&&c.a.createElement(N.b,{type:"danger"},i," ",c.a.createElement(N.a,{onClick:function(){return u(null)}},"✖")),d?c.a.createElement(o.g,null):c.a.createElement(U,{content:t,setError:u})))},M=n("eZYV"),W=function(e){var t=Object(M.d)(),n=Object(a.useState)(void 0),r=n[0],i=n[1],u=Object(a.useState)(""),m=(u[0],u[1]);return Object(a.useEffect)((function(){var t=w.ServiceResolver.apiResolver();function n(){return(n=Object(s.a)(l.a.mark((function n(){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,null!=e.projectId){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,t.getProject(e.projectId);case 5:r=n.sent,a=r.data,i(a),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),m(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()})),c.a.createElement(a.Fragment,null,c.a.createElement(o.l,{title:(null==r?"Project":r.name)+" Workspace",description:"Project Workspace for "+t.title+" website"}),c.a.createElement(P.c,{page:"project page"}),c.a.createElement(o.q,null,null==r?c.a.createElement(o.g,null):c.a.createElement("div",null,"Project workspace pages coming soon.")))};t.default=function(){return c.a.createElement(o.f,null,c.a.createElement(r.Router,null,c.a.createElement(W,{path:"projects/:projectId"}),c.a.createElement(P.b,{path:"projects/create"}),c.a.createElement(R,{path:"projects"})))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-f68e632f9508b0054dce.js.map