"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[423],{3068:function(e,r,a){a.d(r,{FL:function(){return x},Hg:function(){return v},IQ:function(){return Z},Jh:function(){return g},LJ:function(){return f},UN:function(){return h}});var n=a(1413),t=a(5861),s=a(4687),c=a.n(s),i=a(5294),o=a(3585),u=i.Z.create(o.fU),l=null;function d(){return(d=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/configuration",e.prev=1,e.next=4,u("/configuration");case 4:return r=e.sent,l=r.data,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error in getting of API configuration:".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e,r){return l.images.secure_base_url+r+e}function v(){return p.apply(this,arguments)}function p(){return p=(0,t.Z)(c().mark((function e(){var r,a,n,t,s,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:"day",a=i.length>1&&void 0!==i[1]?i[1]:"en-US",n="/trending/movie/".concat(r),t={language:a},e.prev=4,e.next=7,u(n,{params:t});case 7:return s=e.sent,e.abrupt("return",s.data.results);case 11:throw e.prev=11,e.t0=e.catch(4),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),p.apply(this,arguments)}function h(e,r){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(c().mark((function e(r,a){var t,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",t=(0,n.Z)((0,n.Z)({},o.CB),{},{query:r,page:a}),e.prev=2,e.next=5,u("/search/movie",{params:t});case 5:return s=e.sent,e.abrupt("return",s.data.results);case 9:throw e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function x(e){return N.apply(this,arguments)}function N(){return N=(0,t.Z)(c().mark((function e(r){var a,n,t,s,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"en-US",n="/movie/".concat(r),t={language:a},e.prev=3,e.next=6,u(n,{params:t});case 6:return s=e.sent,e.abrupt("return",s.data);case 10:throw e.prev=10,e.t0=e.catch(3),console.error("Error loading movie details: ".concat(e.t0.message)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),N.apply(this,arguments)}function Z(e){return b.apply(this,arguments)}function b(){return b=(0,t.Z)(c().mark((function e(r){var a,n,t,s,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"en-US",n="/movie/".concat(r,"/credits"),t={language:a},e.prev=3,e.next=6,u(n,{params:t});case 6:return s=e.sent,e.abrupt("return",s.data.cast);case 10:throw e.prev=10,e.t0=e.catch(3),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),b.apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return y=(0,t.Z)(c().mark((function e(r){var a,n,t,s,i,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,n=o.length>2&&void 0!==o[2]?o[2]:"en-US",t="/movie/".concat(r,"/reviews"),s={language:n,page:a},e.prev=4,e.next=7,u(t,{params:s});case 7:return i=e.sent,e.abrupt("return",i.data);case 11:throw e.prev=11,e.t0=e.catch(4),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),y.apply(this,arguments)}!function(){d.apply(this,arguments)}()},8932:function(e,r,a){a(2791);var n=a(5316),t=a(4849),s=a(184);r.Z=function(){return(0,s.jsx)(n.Z,{show:!0,centered:!0,fullscreen:!0,contentClassName:"bg-transparent shadow-none",backdropClassName:"bg-dark",children:(0,s.jsx)(n.Z.Body,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",backdropFilter:"blur(2px)"},children:(0,s.jsx)(t.Z,{animation:"border",role:"status"})})})}},423:function(e,r,a){a.r(r),a.d(r,{default:function(){return N}});var n=a(9439),t=a(3068),s=a(2791),c=a(7689),i=a(3585),o=a(8932),u=a(1413),l=a(5987),d=a(9743),f=a(2677),v=a(5070),p=a(184),h=function(e){var r=e.author,a=e.created_at,n=e.content,t=new Date(a).toLocaleDateString("en-US",i.Zy);return(0,p.jsxs)(v.Z,{children:[(0,p.jsxs)(v.Z.Header,{children:["Written by ",(0,p.jsx)("span",{className:"text-success fw-bold",children:" ".concat(r," ")})," ","on "," ".concat(t)]}),(0,p.jsx)(v.Z.Body,{children:(0,p.jsxs)(v.Z.Text,{children:[n," "]})})]})},m=["id"],x=function(e){var r=e.reviews;return 0===r.length?(0,p.jsx)("div",{children:"No reviews available"}):(0,p.jsx)(d.Z,{xs:1,className:"g-4",children:r.map((function(e){var r=e.id,a=(0,l.Z)(e,m);return(0,p.jsx)(f.Z,{children:(0,p.jsx)(h,(0,u.Z)({},a))},r)}))})},N=function(){var e=(0,c.UO)().movieId,r=(0,s.useState)(null),a=(0,n.Z)(r,2),u=a[0],l=a[1],d=(0,s.useState)(i.$q.LOADING),f=(0,n.Z)(d,2),v=f[0],h=f[1];switch((0,s.useEffect)((function(){(0,t.Jh)(e).then((function(e){l(e),h(i.$q.LOADED)})).catch((function(e){return h(i.$q.LOADED)}))}),[e]),v){case i.$q.LOADING:return(0,p.jsx)(o.Z,{});case i.$q.LOADED:return(0,p.jsx)(x,{reviews:u.results});case i.$q.ERROR:return(0,p.jsx)("p",{children:"Oops, something went wrong. Please try again later."});default:return null}}},3585:function(e,r,a){a.d(r,{$q:function(){return s},CB:function(){return t},Zy:function(){return c},fU:function(){return n}});var n={method:"GET",baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGFhNzY1ZjlhMzVhOTdiNTBiZjI5NmNkZGIzZTBhNyIsInN1YiI6IjY0NTE4NGUwMzNhZDhmMDBmZWYyN2FhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryw4dh3H0xPOea1Y2cbKZvI8bFHdhr2M3oPtuPEBQes"}},t={include_adult:!1,language:"en-US",page:1},s={NO_RESULTS:"NO_RESULTS",LOADING:"LOADING",LOADED:"LOADED",ERROR:"ERROR"},c={year:"numeric",month:"long",day:"numeric"}},5070:function(e,r,a){a.d(r,{Z:function(){return H}});var n=a(1413),t=a(5987),s=a(1418),c=a.n(s),i=a(2791),o=a(162),u=a(184),l=["className","bsPrefix","as"],d=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,d=void 0===i?"div":i,f=(0,t.Z)(e,l);return s=(0,o.vE)(s,"card-body"),(0,u.jsx)(d,(0,n.Z)({ref:r,className:c()(a,s)},f))}));d.displayName="CardBody";var f=d,v=["className","bsPrefix","as"],p=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,l=void 0===i?"div":i,d=(0,t.Z)(e,v);return s=(0,o.vE)(s,"card-footer"),(0,u.jsx)(l,(0,n.Z)({ref:r,className:c()(a,s)},d))}));p.displayName="CardFooter";var h=p,m=a(6040),x=["bsPrefix","className","as"],N=i.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,l=e.as,d=void 0===l?"div":l,f=(0,t.Z)(e,x),v=(0,o.vE)(a,"card-header"),p=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,u.jsx)(m.Z.Provider,{value:p,children:(0,u.jsx)(d,(0,n.Z)((0,n.Z)({ref:r},f),{},{className:c()(s,v)}))})}));N.displayName="CardHeader";var Z=N,b=["bsPrefix","className","variant","as"],g=i.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,i=e.variant,l=e.as,d=void 0===l?"img":l,f=(0,t.Z)(e,b),v=(0,o.vE)(a,"card-img");return(0,u.jsx)(d,(0,n.Z)({ref:r,className:c()(i?"".concat(v,"-").concat(i):v,s)},f))}));g.displayName="CardImg";var y=g,w=["className","bsPrefix","as"],j=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,l=void 0===i?"div":i,d=(0,t.Z)(e,w);return s=(0,o.vE)(s,"card-img-overlay"),(0,u.jsx)(l,(0,n.Z)({ref:r,className:c()(a,s)},d))}));j.displayName="CardImgOverlay";var P=j,E=["className","bsPrefix","as"],I=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,l=void 0===i?"a":i,d=(0,t.Z)(e,E);return s=(0,o.vE)(s,"card-link"),(0,u.jsx)(l,(0,n.Z)({ref:r,className:c()(a,s)},d))}));I.displayName="CardLink";var O=I,R=a(7472),k=["className","bsPrefix","as"],C=(0,R.Z)("h6"),D=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,l=void 0===i?C:i,d=(0,t.Z)(e,k);return s=(0,o.vE)(s,"card-subtitle"),(0,u.jsx)(l,(0,n.Z)({ref:r,className:c()(a,s)},d))}));D.displayName="CardSubtitle";var L=D,S=["className","bsPrefix","as"],U=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,l=void 0===i?"p":i,d=(0,t.Z)(e,S);return s=(0,o.vE)(s,"card-text"),(0,u.jsx)(l,(0,n.Z)({ref:r,className:c()(a,s)},d))}));U.displayName="CardText";var B=U,T=["className","bsPrefix","as"],A=(0,R.Z)("h5"),J=i.forwardRef((function(e,r){var a=e.className,s=e.bsPrefix,i=e.as,l=void 0===i?A:i,d=(0,t.Z)(e,T);return s=(0,o.vE)(s,"card-title"),(0,u.jsx)(l,(0,n.Z)({ref:r,className:c()(a,s)},d))}));J.displayName="CardTitle";var G=J,_=["bsPrefix","className","bg","text","border","body","children","as"],q=i.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,i=e.bg,l=e.text,d=e.border,v=e.body,p=void 0!==v&&v,h=e.children,m=e.as,x=void 0===m?"div":m,N=(0,t.Z)(e,_),Z=(0,o.vE)(a,"card");return(0,u.jsx)(x,(0,n.Z)((0,n.Z)({ref:r},N),{},{className:c()(s,Z,i&&"bg-".concat(i),l&&"text-".concat(l),d&&"border-".concat(d)),children:p?(0,u.jsx)(f,{children:h}):h}))}));q.displayName="Card";var H=Object.assign(q,{Img:y,Title:G,Subtitle:L,Body:f,Link:O,Text:B,Header:Z,Footer:h,ImgOverlay:P})}}]);
//# sourceMappingURL=423.fa8b83d4.chunk.js.map