(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},EcVx:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),c=n.n(r),a=n("sK1y"),o=n("qWyU"),i=n("BMxC"),u=n("HKbm"),s=n("Nhdc"),l=function(){return{p:function(e){return c.a.createElement(a.a,Object.assign({mb:4},e))},h1:function(e){return c.a.createElement(o.a,Object.assign({my:4,as:"h1",size:"2xl"},e))},h2:function(e){return c.a.createElement(o.a,Object.assign({my:4,as:"h2",size:"xl"},e))},h3:function(e){return c.a.createElement(o.a,Object.assign({my:4,as:"h3",size:"lg"},e))},h4:function(e){return c.a.createElement(o.a,Object.assign({my:4,as:"h4",size:"md"},e))},h5:function(e){return c.a.createElement(o.a,Object.assign({my:4,as:"h5",size:"sm"},e))},h6:function(e){return c.a.createElement(o.a,Object.assign({my:4,as:"h6",size:"xs"},e))},a:function(e){return c.a.createElement(s.j,e)},ul:function(e){return c.a.createElement(i.a,Object.assign({as:"ul",mb:4,ml:8},e))},li:function(e){return c.a.createElement(u.a,Object.assign({mb:1},e))},img:function(e){return c.a.createElement(i.a,Object.assign({as:"img"},e))},center:function(e){return c.a.createElement(i.a,{textAlign:"center",mb:4},c.a.createElement(a.a,Object.assign({as:"i"},e)))}}}},HKbm:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("pVnL"),c=n.n(r),a=n("8OQS"),o=n.n(a),i=n("qKvR"),u=n("q1tI"),s=n("BMxC"),l=(n("w0db"),n("+Cyc")),f=n("D7Da"),p=Object(u.forwardRef)((function(e,t){var n=e.styleType,r=void 0===n?"none":n,a=e.stylePos,l=void 0===a?"inside":a,p=e.spacing,m=e.children,b=o()(e,["styleType","stylePos","spacing","children"]),y=Object(f.a)(m);return Object(i.d)(s.a,c()({ref:t,as:"ul",listStyleType:r,listStylePosition:l},b),y.map((function(e,t){return t+1===u.Children.count(m)?e:Object(u.cloneElement)(e,{spacing:p})})))}));p.displayName="List";var m=Object(u.forwardRef)((function(e,t){var n=e.spacing,r=o()(e,["spacing"]);return Object(i.d)(l.a,c()({ref:t,as:"li",mb:n},r))}));m.diplayName="ListItem";t.b=p},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),c=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||c(e)||a(e)||o()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),c=n("RIqP"),a=n("lSNA"),o=n("8OQS");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),l=n("7ljp"),f=l.useMDXComponents,p=l.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,i=o(e,["scope","components","children"]),l=f(n),b=m(t),y=s.useMemo((function(){if(!a)return null;var e=u({React:s,mdx:p},b),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))}),[a,t]);return s.createElement(y,u({components:l},i))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},m4C8:function(e,t,n){"use strict";n.r(t),n.d(t,"projectsQuery",(function(){return p}));var r=n("q1tI"),c=n.n(r),a=n("BMxC"),o=n("qWyU"),i=n("7ljp"),u=n("A2+M"),s=n("Nhdc"),l=n("EcVx"),f=n("mdrl"),p="3828651101";t.default=function(e){var t=e.data,n=e.location,r=t.mdx,p=r.frontmatter,m=p.title,b=(p.date,p.path,p.excerpt),y=r.body,d=t.site.siteMetadata;return c.a.createElement(f.a.Provider,{value:n},c.a.createElement(f.b.Provider,{value:d},c.a.createElement(s.e,null,c.a.createElement(s.i,{title:m,description:b}),c.a.createElement(a.a,null,c.a.createElement(o.a,{mb:4},m),c.a.createElement(i.MDXProvider,{components:Object(l.a)()},c.a.createElement(u.MDXRenderer,null,y))))))}},sXyB:function(e,t,n){var r=n("SksO"),c=n("b48C");function a(t,n,o){return c()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var c=[null];c.push.apply(c,t);var a=new(Function.bind.apply(e,c));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-templates-project-template-tsx-c0130deddeb5cb4f83aa.js.map