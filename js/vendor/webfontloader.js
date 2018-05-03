"use strict";!function(){function e(t,n,i){return t.call.apply(t.bind,arguments)}function o(n,i,t){if(!n)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,e),n.apply(i,t)}}return function(){return n.apply(i,arguments)}}function p(t,n,i){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function n(t,n){this.a=t,this.m=n||t,this.c=this.m.document}var c=!!window.FontFace;function f(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function h(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function s(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function l(t){if("string"==typeof t.f)return t.f;var n=t.m.location.protocol;return"about:"==n&&(n=t.a.location.protocol),"https:"==n?"https:":"http:"}function u(t,n,i){function e(){r&&o&&s&&(r(a),r=null)}n=f(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,a=null,r=i||null;c?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),h(t,"head",n)}function g(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=f(t,"script",{src:n}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){a||(a=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,a(t)}}function w(t,n){t.c=n,a(t)}function a(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function b(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function j(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function k(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function _(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new y("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function T(t){if(t.g){var n=s(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),d(t.f,i,e)}S(t,"inactive")}function S(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function C(){this.c={}}function N(t,n){this.c=t,this.f=n,this.a=f(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){h(t.c,"body",t.a)}function E(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+k(t)+";font-weight:"+t.f+"00;"}function W(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function F(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.o=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.o=new N(this.c,this.s),t=E(t=new b(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=E(t=new b(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=E(t=new b("serif",x(this.a))),this.j.a.style.cssText=t,t=E(t=new b("sans-serif",x(this.a))),this.o.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.o)}y.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},W.prototype.start=function(){var o=this.c.m.document,s=this,a=r(),t=new Promise(function(i,e){!function n(){var t;r()-a>=s.f?e():o.fonts.load((t=s.a,k(t)+" "+t.f+"00 300px "+j(t.c)),s.h).then(function(t){1<=t.length?i():setTimeout(n,25)},function(){e()})}()}),n=new Promise(function(t,n){setTimeout(n,s.f)});Promise.race([n,t]).then(function(){s.g(s.a)},function(){s.j(s.a)})};var I={D:"serif",C:"sans-serif"},P=null;function B(){if(null===P){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);P=!!t&&(parseInt(t[1],10)<536||536===parseInt(t[1],10)&&parseInt(t[2],10)<=11)}return P}function O(t,n,i){for(var e in I)if(I.hasOwnProperty(e)&&n===t.f[I[e]]&&i===t.f[I[e]])return!0;return!1}function L(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=B()&&O(t,i,e)),n?r()-t.A>=t.w?B()&&O(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):setTimeout(p(function(){L(this)},t),50):D(t,t.v)}function D(t,n){setTimeout(p(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.o.a),n(this.a)},t),0)}function $(t,n,i){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=i}F.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=r(),L(this)};var q=null;function H(t){0==--t.f&&t.j&&(t.o?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),S(t,"active")):T(t.a))}function t(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function z(t,n){this.c=t,this.a=n}function G(t,n){this.c=t,this.a=n}function K(t,n,i){this.c=t||n+M,this.a=[],this.f=[],this.g=i||""}$.prototype.g=function(t){var n=this.a;n.g&&d(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),S(n,"fontactive",t),this.o=!0,H(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var i=s(n.f,n.a.c("wf",t.c,x(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,x(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,x(t).toString(),"inactive")),d(n.f,e,o)}S(n,"fontinactive",t),H(this)},t.prototype.load=function(t){this.c=new n(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(o,t,n){var i=[],e=n.timeout;s=t,s.g&&d(s.f,[s.a.c("wf","loading")]),S(s,"loading");var s;var i=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var s=t.c[e];s&&o.push(s(n[e],i))}return o}(o.a,n,o.c),a=new $(o.c,t,e);for(o.h=i.length,t=0,n=i.length;t<n;t++)i[t].load(function(t,n,i){var e,c,f,h,l,u;c=a,f=t,h=n,l=i,u=0==--(e=o).h,(e.f||e.g)&&setTimeout(function(){var t=l||null,n=h||{};if(0===f.length&&u)T(c.a);else{c.f+=f.length,u&&(c.j=u);var i,e=[];for(i=0;i<f.length;i++){var o=f[i],s=n[o.c],a=c.a,r=o;a.g&&d(a.f,[a.a.c("wf",r.c,x(r).toString(),"loading")]),S(a,"fontloading",r),(a=null)===q&&(q=!!window.FontFace&&(!(r=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(r[1],10))),a=q?new W(p(c.g,c),p(c.h,c),c.c,o,c.s,s):new F(p(c.g,c),p(c.h,c),c.c,o,c.s,t,s),e.push(a)}for(i=0;i<e.length;i++)e[i].start()}},0)})}(this,new _(this.c,t),t)},z.prototype.load=function(a){var t,n,i,r=this.a.projectId,e=this.a.version;if(r){var c=this.c.m;g(this.c,(t=this,n=r,i=e,l(t.c)+"//"+(t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""))+"/"+n+".js"+(i?"?v="+i:"")),function(t){t?a([]):function t(){if(c["__mti_fntLst"+r]){var n,i=c["__mti_fntLst"+r](),e=[];if(i)for(var o=0;o<i.length;o++){var s=i[o].fontfamily;null!=i[o].fontStyle&&null!=i[o].fontWeight?(n=i[o].fontStyle+i[o].fontWeight,e.push(new b(s,n))):e.push(new b(s))}a(e)}else setTimeout(function(){t()},50)}()}).id="__MonotypeAPIScript__"+r}else a([])},G.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},a=new v;for(n=0,i=e.length;n<i;n++)u(this.c,e[n],m(a));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new b(e[0],c[f]));else r.push(new b(e[0]));w(a,function(){t(r,s)})};var M="//fonts.googleapis.com/css";function R(t){this.f=t,this.a=[],this.c={}}var U={latin:"BESbswy",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},J={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Q={i:"i",italic:"i",n:"n",normal:"n"},V=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function X(t,n){this.c=t,this.a=n}var Y={Arimo:!0,Cousine:!0,Tinos:!0};function Z(t,n){this.c=t,this.a=n}function tt(t,n){this.c=t,this.f=n,this.a=[]}X.prototype.load=function(t){var n=new v,i=this.c,e=new K(this.a.api,l(i),this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var s="";2==o.length&&""!=o[1]&&(s=":"),t.a.push(o.join(s))}}(e,o);var s=new R(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var a;if(a=[],r=e[1])for(var r,c=(r=r.split(",")).length,f=0;f<c;f++){var h;if((h=r[f]).match(/^[\w-]+$/))if(null==(u=V.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":Q[h],null==(u=u[1])||""==u)u="4";else var l=J[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&a.push(h)}0<a.length&&(s=a),3==e.length&&(a=[],0<(e=(e=e[2])?e.split(","):a).length&&(e=U[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=U[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new b(o,s[e]))}}(s),u(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),m(n)),w(n,function(){t(s.a,s.c,Y)})},Z.prototype.load=function(a){var t=this.a.id,r=this.c.m;t?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",function(t){if(t)a([]);else if(r.Typekit&&r.Typekit.config&&r.Typekit.config.fn){t=r.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var e=t[i],o=t[i+1],s=0;s<o.length;s++)n.push(new b(e,o[s]));try{r.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}a(n)}},2e3):a([])},tt.prototype.load=function(f){var t,n=this.f.id,i=this.c.m,h=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(t,n){for(var i=0,e=n.fonts.length;i<e;++i){var o=n.fonts[i];h.a.push(new b(o.name,(s="font-weight:"+o.weight+";font-style:"+o.style,c=r=a=void 0,a=4,r="n",c=null,s&&((c=s.match(/(normal|oblique|italic)/i))&&c[1]&&(r=c[1].substr(0,1).toLowerCase()),(c=s.match(/([1-9]00|normal|bold)/i))&&c[1]&&(/bold/i.test(c[1])?a=7:/[1-9]00/.test(c[1])&&(a=parseInt(c[1].substr(0,1),10)))),r+a)))}var s,a,r,c;f(h.a)},g(this.c,l(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+((t=this.c).m.location.hostname||t.a.location.hostname)+"/"+n+".js",function(t){t&&f([])})):f([])};var nt=new t(window);nt.a.c.custom=function(t,n){return new G(n,t)},nt.a.c.fontdeck=function(t,n){return new tt(n,t)},nt.a.c.monotype=function(t,n){return new z(n,t)},nt.a.c.typekit=function(t,n){return new Z(n,t)},nt.a.c.google=function(t,n){return new X(n,t)};var it={load:p(nt.load,nt)};"function"==typeof define&&define.amd?define(function(){return it}):"undefined"!=typeof module&&module.exports?module.exports=it:(window.WebFont=it,window.WebFontConfig&&nt.load(window.WebFontConfig))}();