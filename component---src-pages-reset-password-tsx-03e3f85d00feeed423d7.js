(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Ejiq:function(e,t,n){"use strict";n.r(t);var r=n("YwZP"),a=n("q1tI"),s=n.n(a),o=n("/p1/"),i=n("eZYV"),c=n("kD0k"),u=n.n(c),d=(n("ls82"),n("/S4K")),l=n("vOnD"),w=n("OUGo"),m=n("efbE"),p=n("Ixm+"),f=n("AkCr"),h=n("Wbzz"),b=l.c.section.withConfig({displayName:"reset-password__Wrapper",componentId:"sc-69o5ur-0"})(["background-color:",";padding:",";@media screen and(max-width:","){flex-direction:column;}@media screen and(max-width:","){padding:",";}"],(function(e){return e.theme.colors.section}),(function(e){return e.theme.boxes.padding.section.smallTop}),(function(e){return e.theme.sizes.width.medium}),(function(e){return e.theme.sizes.width.small}),(function(e){return e.theme.boxes.padding.section.small})),g=l.c.small.withConfig({displayName:"reset-password__FormMessage",componentId:"sc-69o5ur-1"})(["color:",";"],(function(e){return e.isValid?"":"red"})),k=function(e){var t=Object(a.useState)(""),n=t[0],r=t[1],o=Object(a.useState)(""),i=o[0],c=o[1],l=Object(a.useState)(!0),k=l[0],v=l[1],E=Object(a.useState)(""),x=E[0],P=E[1];Object(a.useEffect)((function(){null!==e.token&&""!==e.token||(v(!1),P("Missing required 'token' query parameter."))}),[e.token]);var O=function(){var t=Object(d.a)(u.a.mark((function t(){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.token){t.next=2;break}return t.abrupt("return");case 2:if(""!==n&&""!==i){t.next=6;break}return v(!1),P("Both password fields required."),t.abrupt("return");case 6:if(n===i){t.next=10;break}return v(!1),P("Password fields must match."),t.abrupt("return");case 10:return r=m.ServiceResolver.authResolver(),a={newPassword:n,confirmNewPassword:i,validationToken:e.token},t.prev=12,t.next=15,r.resetPassword(a);case 15:P("Password reset. Redirecting to login."),Object(h.navigate)("/signin"),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(12),v(!1),P(t.t0.message);case 23:case"end":return t.stop()}}),t,null,[[12,19]])})));return function(){return t.apply(this,arguments)}}();return s.a.createElement(b,null,s.a.createElement(f.e,{heading:"Reset Password",subheading:"Enter your new password."},s.a.createElement(p.d,{htmlFor:"new-password"},"New Password"),s.a.createElement(p.c,{name:"new-password",id:"new-password",type:"password",onChange:function(e){r(e.target.value),v(!0),P("")}}),s.a.createElement(p.d,{htmlFor:"confirm-new-password"},"Confirm New Password"),s.a.createElement(p.c,{name:"confirm-new-password",id:"confirm-new-password",type:"password",onChange:function(e){c(e.target.value),v(!0),P("")}}),""!==x&&s.a.createElement(g,{isValid:k},x),s.a.createElement(p.a,null,s.a.createElement(w.a,{handleClick:O,statusText:"Resetting..."},"Reset"))))};t.default=function(){var e=Object(i.d)(),t=Object(r.useLocation)();return s.a.createElement(o.f,null,s.a.createElement(o.l,{title:e.title+" - Reset Password",description:"Reset Password page for "+e.title+" website",urlSlug:"reset-password/"}),s.a.createElement(k,{token:new URLSearchParams(t.search).get("token")}))}}}]);
//# sourceMappingURL=component---src-pages-reset-password-tsx-03e3f85d00feeed423d7.js.map