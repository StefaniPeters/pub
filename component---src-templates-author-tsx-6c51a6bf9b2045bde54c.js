(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"authorQuery",(function(){return l}));var r=n(0),i=n(299),a=n(275),o=n(25),l="1425046286";t.default=function(e){var t=e.data,n=e.pageContext,l=Object(o.c)(),u=Object(o.a)(),c=Object(o.b)(),s=t.authorYaml,d=t.allMarkdownRemark.nodes,f=n.authorId,m=n.authorName,h=n.slug,g=n.currentPage,p=1===g;return s.avatar||(s.avatar={childImageSharp:u.childImageSharp}),r.createElement(a.c,null,p?r.createElement(a.f,{title:'Author: "'+m+'" - '+l.title,urlSlug:"blog/author/"+h+"/"}):r.createElement(a.f,{title:'Author: "'+m+'" - Page '+g+" - "+l.title,urlSlug:"blog/author/"+h+"/"}),r.createElement(a.b,null,r.createElement(i.a,{author:s}),r.createElement(i.d,null,d.map((function(e){var t=e.fields,n=e.excerpt,a=e.frontmatter;return r.createElement(i.c,{key:t.slug,slug:t.slug,excerpt:n,fluid:a.image?a.image.childImageSharp.fluid:c.childImageSharp.fluid,publishDate:a.date,title:a.title||t.slug})})))),r.createElement(i.f,{prefix:"blog/author/"+f,context:n}))}},291:function(e,t,n){"use strict";n(8),n(9),n(3),n(119),n(193),n(297);var r=n(20);t.__esModule=!0,t.default=void 0;var i,a=r(n(93)),o=r(n(92)),l=r(n(194)),u=r(n(120)),c=r(n(0)),s=r(n(44)),d=function(e){var t=(0,u.default)({},e),n=t.resolutions,r=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},m=Object.create({}),h=function(e){var t=d(e),n=f(t);return m[n]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,b=p&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:a}),c.default.createElement("source",{media:i,srcSet:n,sizes:a}))}))}function y(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function S(e,t){var n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var k=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),v.set(e,t)),function(){n.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",s=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+o+l+n+r+t+a+i+u+s+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,a=c.default.createElement(z,(0,u.default)({src:t},i));return n.length>1?c.default.createElement("picture",null,r(n),a):a},z=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,s=e.onError,d=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,u.default)({sizes:n,srcSet:r,src:i},m,{onLoad:o,onError:s,ref:t,loading:d,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));z.propTypes={style:s.default.object,onError:s.default.func,onLoad:s.default.func};var j=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=p&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!g&&b&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||p&&(g||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)(n)),n.handleRef=n.handleRef.bind((0,a.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=f(t),m[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,s=e.placeholderStyle,f=void 0===s?{}:s,m=e.placeholderClassName,h=e.fluid,g=e.fixed,p=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,k=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,u.default)({opacity:j?1:0,transition:I?"opacity "+b+"ms":"none"},l),R="boolean"==typeof p?"lightgray":p,P={transitionDelay:b+"ms"},N=(0,u.default)({opacity:this.state.imgLoaded?0:1},I&&P,{},l,{},f),V={title:t,alt:this.state.isVisible?"":n,style:N,className:m};if(h){var T=h,W=T[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),R&&c.default.createElement(v,{title:t,style:(0,u.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),W.base64&&c.default.createElement(L,{src:W.base64,spreadProps:V,imageVariants:T,generateSources:x}),W.tracedSVG&&c.default.createElement(L,{src:W.tracedSVG,spreadProps:V,imageVariants:T,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(T),c.default.createElement(z,{alt:n,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,u.default)({alt:n,title:t,loading:S},W,{imageVariants:T}))}}))}if(g){var M=g,G=M[0],q=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},a);return"inherit"===a.display&&delete q.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},R&&c.default.createElement(v,{title:t,style:(0,u.default)({backgroundColor:R,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},I&&P)}),G.base64&&c.default.createElement(L,{src:G.base64,spreadProps:V,imageVariants:M,generateSources:x}),G.tracedSVG&&c.default.createElement(L,{src:G.tracedSVG,spreadProps:V,imageVariants:M,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(M),c.default.createElement(z,{alt:n,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,u.default)({alt:n,title:t,loading:S},G,{imageVariants:M}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=s.default.shape({width:s.default.number.isRequired,height:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string,media:s.default.string}),C=s.default.shape({aspectRatio:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,sizes:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string,media:s.default.string});j.propTypes={resolutions:I,sizes:C,fixed:s.default.oneOfType([I,s.default.arrayOf(I)]),fluid:s.default.oneOfType([C,s.default.arrayOf(C)]),fadeIn:s.default.bool,durationFadeIn:s.default.number,title:s.default.string,alt:s.default.string,className:s.default.oneOfType([s.default.string,s.default.object]),critical:s.default.bool,crossOrigin:s.default.oneOfType([s.default.string,s.default.bool]),style:s.default.object,imgStyle:s.default.object,placeholderStyle:s.default.object,placeholderClassName:s.default.string,backgroundColor:s.default.oneOfType([s.default.string,s.default.bool]),onLoad:s.default.func,onError:s.default.func,onStartLoad:s.default.func,Tag:s.default.string,itemProp:s.default.string,loading:s.default.oneOf(["auto","lazy","eager"]),draggable:s.default.bool};var R=j;t.default=R},297:function(e,t,n){"use strict";n(121)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},299:function(e,t,n){"use strict";n(29);var r=n(0),i=n(275),a=n(1);function o(){var e=c(["\n  margin: 1em 0 0.5em;\n"]);return o=function(){return e},e}function l(){var e=c(["\n  display: flex;\n"]);return l=function(){return e},e}function u(){var e=c(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 2em;\n\n  svg {\n    width: 1em;\n    font-size: 24px;\n\n    & path {\n      transition: 0.2s;\n      fill: ",";\n      opacity: 0.7;\n    }\n\n    @media (hover: hover) {\n      &:hover path {\n        fill: ",";\n        opacity: 1;\n      }\n    }\n  }\n"]);return u=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var s=a.d.div(u(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.highlight})),d=a.d.div(l()),f=a.d.h2(o()),m=function(e){var t=e.author,n=t.avatar,a=t.name,o=t.bio,l=t.github,u=t.twitter;return r.createElement(s,null,n&&r.createElement(v,{fluid:n.childImageSharp.fluid,alt:"",title:a,alignment:"vertical"}),r.createElement(f,null,a),r.createElement("p",null,o),r.createElement(d,null,r.createElement(i.g,{link:!0,socialName:"github",href:"https://github.com/"+l,title:a+" on GitHub"}),u&&r.createElement(i.g,{link:!0,socialName:"twitter",href:"https://twitter.com/"+u,title:a+" on Twitter"})))},h=(n(8),n(9),n(3),n(13),n(6),n(291)),g=n.n(h);function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  min-height: 4em;\n  max-height: 4em;\n  min-width: 4em;\n  max-width: 4em;\n  border-radius: 50%;\n  margin-right: ",";\n"]);return p=function(){return e},e}var b=Object(a.d)(g.a).attrs({small:!1})(p(),(function(e){return"horizontal"===e.alignment?"1.6em":0})),v=function(e){var t=e.alignment,n=void 0===t?"horizontal":t,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["alignment"]);return r.createElement(b,Object.assign({alignment:n},i))};n(76);function w(){var e=x(["\n  font-size: 3em;\n  text-transform: capitalize;\n  font-weight: 600;\n  position: absolute;\n  width: 100%;\n  max-width: ",";\n  padding: 0 1rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n  margin-top: 0;\n"]);return w=function(){return e},e}function y(){var e=x(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  min-height: 300px;\n  height: auto;\n\n  @media (min-width: ",") {\n    height: ",";\n  }\n\n  & > img {\n    object-fit: "," !important;\n    object-position: "," !important;\n  }\n\n  &::before {\n    content: '';\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n  }\n"]);return y=function(){return e},e}function E(){var e=x(["\n  position: relative;\n  min-height: 300px;\n"]);return E=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),e.raw=t,e}var S=a.d.section(E()),k=Object(a.d)(g.a)(y(),(function(e){return e.theme.responsive.small}),(function(e){return e.height||"auto"}),(function(e){return e.fit||"cover"}),(function(e){return e.position||"50% 50%"})),O=a.d.h1(w(),(function(e){return e.theme.sizes.maxWidthCentered})),L=function(e){var t=e.height,n=e.fluid,i=e.title;return r.createElement(S,null,r.createElement(k,{height:t,fluid:n,backgroundColor:"#eeeeee",title:i,alt:""}),r.createElement(O,null,i))},z=n(41),j=n(25);function I(){var e=N(["\n  color: ",";\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  padding: 1em 1.5em;\n  z-index: -1;\n  opacity: 0.7;\n"]);return I=function(){return e},e}function C(){var e=N(["\n  margin-left: auto;\n  order: 3;\n"]);return C=function(){return e},e}function R(){var e=N(["\n  margin-right: auto;\n  order: 1;\n"]);return R=function(){return e},e}function P(){var e=N(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin: -2em auto 0;\n  width: 100%;\n  max-width: ",";\n  padding: 0 1.5em 2em;\n\n  a {\n    background: transparent;\n    color: ",";\n    padding: 1em 0.8em;\n    border-color: ",";\n    border-radius: 2px;\n    text-decoration: none;\n    transition: 0.2s;\n\n    @media (hover: hover) {\n      &:hover {\n        background: ",";\n        color: white;\n      }\n    }\n  }\n"]);return P=function(){return e},e}function N(e,t){return t||(t=e.slice(0)),e.raw=t,e}var V=a.d.div(P(),(function(e){return e.theme.sizes.maxWidth}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight}),(function(e){return e.theme.colors.highlight})),T=Object(a.d)(z.Link)(R()),W=Object(a.d)(z.Link)(C()),M=a.d.span(I(),(function(e){return e.theme.colors.text})),G=function(e){var t=e.context,n=e.prefix,i=Object(j.c)(),a=t.numPages,o=t.currentPage,l=void 0===o?1:o,u=1===l,c=l===a,s=u&&c,d=l-1==1?"":l-1,f=l+1,m=n?"/"+n+"/":"/",h=u?null:""+m+d+"/",g=c?null:""+m+f+"/";return r.createElement(V,null,!u&&h&&r.createElement(T,{to:h,title:i.title+" blog page "+d},"← Prev Page"),!s&&r.createElement(M,null,l,"/",a),!c&&g&&r.createElement(W,{to:g,title:i.title+" blog page "+f},"Next Page →"))},q=(n(4),n(62));function _(){var e=U(["\n  font-weight: 800;\n"]);return _=function(){return e},e}function H(){var e=U(["\n  max-width: ",";\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto 1em auto;\n\n  svg {\n    path {\n      transition: 0.2s;\n      fill: ",";\n      opacity: 0.7;\n    }\n  }\n\n  @media (hover: hover) {\n    & a:hover {\n      cursor: pointer;\n\n      svg {\n        path {\n          fill: ",";\n          opacity: 1;\n        }\n      }\n    }\n  }\n"]);return H=function(){return e},e}function F(){var e=U(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return F=function(){return e},e}function U(e,t){return t||(t=e.slice(0)),e.raw=t,e}var B=a.d.div(F()),D=a.d.div(H(),(function(e){return e.theme.sizes.maxWidthCentered}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.highlight})),J=a.d.p(_()),A=function(e){var t=e.post,n=Object(j.c)(),a=n.social,o=n.siteUrl,l=a.twitter.replace("@",""),u=o+"/blog/"+t.slug;return r.createElement(B,null,r.createElement(J,null,"Share this post"),r.createElement(D,null,r.createElement(i.g,{link:!0,socialName:"facebook",title:'Share "'+t.title+'" on Facebook',href:Object(q.b)("facebook",{u:u})}),r.createElement(i.g,{link:!0,socialName:"twitter",title:'Share "'+t.title+'" on Twitter',href:Object(q.b)("twitter",{text:t.title,url:u,via:l})}),r.createElement(i.g,{link:!0,socialName:"linkedin",title:'Share "'+t.title+'" on LinkedIn',href:Object(q.b)("linkedin",{url:u})}),r.createElement(i.g,{link:!0,socialName:"reddit",title:'Share "'+t.title+'" on Reddit',href:Object(q.b)("reddit",{url:u})})))};function Q(){var e=te(["\n  color: ",";\n"]);return Q=function(){return e},e}function Y(){var e=te(["\n  margin: 0 0 0.5em 0;\n  color: ",";\n"]);return Y=function(){return e},e}function K(){var e=te(["\n  text-transform: capitalize;\n  margin: 0.5em 0 1em;\n"]);return K=function(){return e},e}function X(){var e=te(["\n  margin: 0;\n  padding: 1em;\n"]);return X=function(){return e},e}function Z(){var e=te(["\n  border-radius: 0.375em;\n"]);return Z=function(){return e},e}function $(){var e=te(["\n  background-image: none;\n"]);return $=function(){return e},e}function ee(){var e=te(["\n  position: relative;\n  border-radius: 0.3125em;\n  width: 100%;\n  transition: 0.2s;\n\n  @media screen and (min-width: ",") {\n    flex: ",";\n    margin: 0 0 2vw 0;\n  }\n\n  @media screen and (min-width: ",") {\n    flex: ",";\n  }\n\n  a {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    width: 100%;\n    color: ",";\n    text-decoration: none;\n\n    h2 {\n      transition: color 0.2s;\n    }\n\n    @media (hover: hover) {\n      &:hover {\n        color: ",";\n\n        h2 {\n          color: ",";\n        }\n      }\n    }\n\n    .gatsby-image-wrapper {\n      height: 0;\n      padding-bottom: 60%;\n\n      @media screen and (min-width: ",") {\n        padding-bottom: ",";\n      }\n    }\n  }\n"]);return ee=function(){return e},e}function te(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ne=a.d.li(ee(),(function(e){return e.theme.responsive.small}),(function(e){return e.featured?"0 0 100%":"0 0 49%"}),(function(e){return e.theme.responsive.medium}),(function(e){return e.featured?"0 0 100%":"0 0 32%"}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight}),(function(e){return e.theme.responsive.small}),(function(e){return e.featured?"40%":"60%"})),re=Object(a.d)(z.Link)($()),ie=Object(a.d)(g.a)(Z()),ae=a.d.div(X()),oe=a.d.h2(K()),le=a.d.p(Y(),(function(e){return e.theme.colors.text})),ue=a.d.p(Q(),(function(e){return e.theme.colors.text})),ce=function(e){var t=e.slug,n=e.title,i=e.publishDate,a=e.excerpt,o=e.featured,l=void 0!==o&&o,u=e.fluid;return r.createElement(ne,{featured:l},r.createElement(re,{to:"/blog/"+t+"/",title:n},r.createElement(ie,{fluid:u,backgroundColor:"#eeeeee",title:n,alt:""}),r.createElement(ae,null,r.createElement(oe,null,n),r.createElement(le,null,i),r.createElement(ue,{dangerouslySetInnerHTML:{__html:a}}))))};function se(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  list-style: none;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin: 0 auto;\n\n  &::after {\n    content: '';\n    flex: 0 0 32%;\n  }\n"]);return se=function(){return e},e}var de=a.d.ul(se()),fe=function(e){var t=e.children;return r.createElement(de,null,t)};function me(){var e=be(["\n  margin-left: auto;\n  order: 2;\n"]);return me=function(){return e},e}function he(){var e=be(["\n  margin-right: auto;\n  order: 1;\n"]);return he=function(){return e},e}function ge(){var e=be(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  width: 100%;\n  max-width: ",";\n\n  a {\n    background: transparent;\n    color: ",";\n    padding: 1em;\n    border-radius: 0.3125em;\n    text-decoration: none;\n    transition: 0.2s;\n\n    @media (hover: hover) {\n      &:hover {\n        background: ",";\n        color: white;\n      }\n    }\n  }\n"]);return ge=function(){return e},e}function pe(){var e=be(["\n  margin: -2em 0 0 0;\n  padding: 0 1.5em 2em;\n"]);return pe=function(){return e},e}function be(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ve=a.d.div(pe()),we=a.d.div(ge(),(function(e){return e.theme.sizes.maxWidthCentered}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight})),ye=Object(a.d)(z.Link)(he()),Ee=Object(a.d)(z.Link)(me()),xe=function(e){var t=e.prefix,n=e.previous,i=e.next,a=t?t+"/":"";return r.createElement(ve,null,r.createElement(we,null,n&&r.createElement(ye,{to:"/"+a+n.fields.slug+"/",title:n.frontmatter.title},"← Prev Post"),i&&r.createElement(Ee,{to:"/"+a+i.fields.slug+"/",title:i.frontmatter.title},"Next Post →")))};function Se(){var e=je(["\n  margin: 0;\n"]);return Se=function(){return e},e}function ke(){var e=je(["\n  font-weight: 600;\n  font-size: 1.2em;\n  margin: 0 0.8em 0 0;\n  text-decoration: none;\n  display: inline-block;\n  transition: 0.2s;\n  background-image: none;\n\n  && {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return ke=function(){return e},e}function Oe(){var e=je(["\n  display: inline-flex;\n\n  a {\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n  }\n\n  svg {\n    width: 1em;\n    font-size: 24px;\n\n    & path {\n      transition: 0.2s;\n      fill: ",";\n      opacity: 0.7;\n    }\n\n    @media (hover: hover) {\n      &:hover path {\n        fill: ",";\n        opacity: 1;\n      }\n    }\n  }\n"]);return Oe=function(){return e},e}function Le(){var e=je(["\n  flex: 1;\n  color: ",";\n"]);return Le=function(){return e},e}function ze(){var e=je(["\n  margin: 0 auto 2.4em;\n  max-width: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ze=function(){return e},e}function je(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ie=a.d.div(ze(),(function(e){return e.theme.sizes.maxWidthCentered})),Ce=a.d.div(Le(),(function(e){return e.theme.colors.text})),Re=a.d.header(Oe(),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.highlight})),Pe=Object(a.d)(z.Link)(ke(),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight})),Ne=a.d.p(Se()),Ve=function(e){var t=e.date,n=e.author,a=n.avatar,o=n.bio,l=n.id,u=n.name,c=n.github,s=n.twitter;return r.createElement(Ie,null,a&&r.createElement(v,{fluid:a.childImageSharp.fluid,alt:"",title:u}),r.createElement(Ce,null,r.createElement(Re,null,r.createElement(Pe,{to:"/blog/author/"+l,title:"Posts by "+u},u),r.createElement(i.g,{link:!0,socialName:"github",href:"https://github.com/"+c,title:u+" on GitHub"}),s&&r.createElement(i.g,{link:!0,socialName:"twitter",href:"https://twitter.com/"+s,title:u+" on Twitter"})),r.createElement(Ne,null,o),"Published on ",t))};function Te(){var e=Me(["\n  display: inline-block;\n  margin: 0 0.25em 0.25em 0;\n\n  a {\n    float: left;\n    font-size: 0.8em;\n    transition: 0.2s;\n    background: ",";\n    padding: 0.5em;\n    border-radius: 2px;\n    text-transform: capitalize;\n    text-decoration: none;\n    color: ",";\n    border: 1px solid ",";\n\n    @media (hover: hover) {\n      &:hover {\n        background: ",";\n        color: ",";\n      }\n    }\n  }\n"]);return Te=function(){return e},e}function We(){var e=Me(["\n  width: 100%;\n  margin: 0 auto 1em auto;\n  max-width: ",";\n"]);return We=function(){return e},e}function Me(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ge=a.d.ul(We(),(function(e){return e.theme.sizes.maxWidthCentered})),qe=a.d.li(Te(),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.base})),_e=function(e){var t=e.tags;return r.createElement(Ge,null,t.map((function(e){return r.createElement(qe,{key:e},r.createElement(z.Link,{to:"/blog/tag/"+Object(q.c)(e)+"/",title:"Posts tagged with "+e},e))})))};n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return G})),n.d(t,"j",(function(){return A})),n.d(t,"c",(function(){return ce})),n.d(t,"d",(function(){return fe})),n.d(t,"g",(function(){return xe})),n.d(t,"h",(function(){return Ve})),n.d(t,"i",(function(){return _e}))}}]);
//# sourceMappingURL=component---src-templates-author-tsx-6c51a6bf9b2045bde54c.js.map