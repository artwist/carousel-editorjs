!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Carousel=t():e.Carousel=t()}(self,(()=>(()=>{var e={846:e=>{window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}l(t.promise,r)}else(1===e._state?l:c)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void f((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}var r,o}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return;n=!0,c(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return s(this,new d(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,s,l,c,u,d=n(8),f=(i=function(e){return new Promise((function(t,n){e=s(e),(e=l(e)).beforeSend&&e.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t];r.setRequestHeader(t,n)}));var o=e.ratio;r.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(Math.min(r,100))}),!1),r.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(Math.min(r,100))}),!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=d.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};u(r.status)?t(i):n(i)}},r.send(e.data)}))},a=function(e){return e.method="POST",i(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},l=function(e){switch(e.method){case"GET":var t=c(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(d.isFormData(e.data)||d.isFormElement(e.data))&&(n=o.FORM),e.data=c(e.data,n),n!==f.contentType.FORM&&(e.headers["content-type"]=n)}return e},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return d.urlEncode(e);case o.JSON:return d.jsonEncode(e);case o.FORM:return d.formEncode(e);default:return e}},u=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=s(e),d.selectFiles(e).then((function(t){for(var n=new FormData,r=0;r<t.length;r++)n.append(e.fieldName,t[r],t[r].name);d.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var r=e.data[t];n.append(t,r)}));var o=e.beforeSend;return e.beforeSend=function(){return o(t)},e.data=n,a(e)}))},selectFiles:function(e){return delete(e=s(e)).beforeSend,d.selectFiles(e)}});e.exports=f},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,s,l=1,c={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){h(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(o=d.documentElement,r=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(h,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return c[l]=o,r(l),l++},f.clearImmediate=p}function p(e){delete c[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(undefined,n)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,c=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach((function(n){var r=e[n];t.append(n,r)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",(function(e){var n=e.target.files;t(n),document.body.removeChild(r)}),!1),r.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach((function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)})),n}}],null&&r(t.prototype,null),n&&r(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map((function(a){var s,l,c=a;if(i&&(c=i+"["+c+"]"),"object"==typeof e[a]&&null!==e[a])s=r(e[a],null,o,c);else{t&&(l=c,c=!isNaN(parseFloat(l))&&isFinite(l)?t+Number(c):c);var u=e[a];u=(u=0===(u=!1===(u=!0===u?"1":u)?"0":u)?"0":u)||"",s=n(c)+"="+n(u)}return s}))).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])},387:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,'.cdxcarousel-addImage {\n    height: 225px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    position: relative;\n    flex-direction: row;\n    margin-top: 5px;\n}\n\n.cdxcarousel-item--empty .image-tool__image-preloader{\n  display: none;\n}\n\n.cdxcarousel-item img {\n    margin-bottom: 15px;\n    display: block;\n    object-fit: cover;\n    width: 100%;\n    height: 180px;\n    order: 1;\n}\n\n.cdxcarousel-inputUrl {\n    order: 0;\n    display: none;\n}\n\n.cdxcarousel-caption {\n    order: 3;\n}\n\n\n.cdxcarousel-block {\n    width: 50%;\n}\n\n.cdxcarousel-list {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.cdxcarousel-wrapper {\n    margin-top: 10px;\n    margin-bottom: 15px;\n}\n\n.cdxcarousel-item {\n    height: 235px;\n    padding: 5px;\n    display: flex;\n    position: relative;\n    flex-direction: column;\n}\n\n\n.cdxcarousel-removeBtn {\n    position: absolute;\n    padding: 3px;\n    right: 10px;\n    top: 10px;\n    display: inline-flex;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 3px;\n    cursor: pointer;\n    border: 0;\n    outline: none;\n    background-color: white;\n    color: #000;\n    transition: background 200ms;\n}\n\n.cdxcarousel-removeBtn:hover {\n    background: #eff2f5;\n}\n\n.cdxcarousel-leftBtn {\n  position: absolute;\n  padding: 3px;\n  right: 88px;\n  top: 10px;\n  display: inline-flex;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: white;\n  color: #000;\n  transition: background 200ms;\n}\n\n.cdxcarousel-rightBtn {\n  position: absolute;\n  padding: 3px;\n  right: 49px;\n  top: 10px;\n  display: inline-flex;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: white;\n  color: #000;\n  transition: background 200ms;\n}\n\n\n.image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n\n.image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n\n.image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: #cdd1e0;\n      background-position: center center;\n    }\n\n\n.image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid #cdd1e0;\n        border-top-color: #388ae5;\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n',""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},86:(e,t,n)=>{"use strict";var r=n(379),o=n.n(r),i=n(795),a=n.n(i),s=n(569),l=n.n(s),c=n(565),u=n.n(c),d=n(216),f=n.n(d),p=n(589),h=n.n(p),m=n(387),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=l().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f(),o()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=r(e,o),c=0;c<i.length;c++){var u=n(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},995:e=>{e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>'}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};return(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function o(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),"symbol"===a(i)?i:String(i)),r)}var o,i}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(r,{default:()=>v});var c=n(846),u=n.n(c),d=function(){function e(t){var n=t.config,r=t.onUpload,o=t.onError;i(this,e),this.config=n,this.onUpload=r,this.onError=o}return l(e,[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview,r=function(e){var t=new window.FileReader;t.readAsDataURL(e),t.onload=function(e){n(e.target.result)}};(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?u().selectFiles({accept:this.config.types}).then((function(e){r(e[0]);var n=t.config.uploader.uploadByFile(e[0]);return f(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n})):u().transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:function(e){r(e[0])},fieldName:this.config.field}).then((function(e){return e.body}))).then((function(e){t.onUpload(e)})).catch((function(e){t.onError(e)}))}},{key:"uploadByUrl",value:function(e){var t,n=this;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?f(t=this.config.uploader.uploadByUrl(e))||console.warn("Custom uploader method uploadByUrl should return a Promise"):t=u().post({url:this.config.endpoints.byUrl,data:Object.assign({url:e},this.config.additionalRequestData),type:u().contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(e){return e.body})),t.then((function(e){n.onUpload(e)})).catch((function(e){n.onError(e)}))}},{key:"uploadByFile",value:function(e,n){var r,o=this,i=n.onPreview,a=new window.FileReader;if(a.readAsDataURL(e),a.onload=function(e){i(e.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)f(r=this.config.uploader.uploadByFile(e))||console.warn("Custom uploader method uploadByFile should return a Promise");else{var s=new window.FormData;s.append(this.config.field,e),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(n,r)||t(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];s.append(i,a)})),r=u().post({url:this.config.endpoints.byFile,data:s,type:u().contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(e){return e.body}))}r.then((function(e){o.onUpload(e)})).catch((function(e){o.onError(e)}))}}]),e}();function f(e){return window.Promise.resolve(e)===e}var p=n(995),h=n.n(p);function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(86).toString();var v=function(){function e(t){var n=this,r=t.data,o=t.config,a=t.api;i(this,e),this.api=a,this.data=r,this.IconClose='<svg class="icon icon--cross" width="12px" height="12px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cross"></use></svg>',this.IconLeft='<svg class="icon " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M351,9a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-199,199l199,199a15,15 0 01 0,19l-29,29a15,15 0 01-19,0l-236-235a16,16 0 01 0-24z" /></svg>',this.IconRight='<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M312,256l-199-199a15,15 0 01 0-19l29-29a15,15 0 01 19,0l236,235a16,16 0 01 0,24l-236,235a15,15 0 01-19,0l-29-29a15,15 0 01 0-19z" /></svg>',this.config={endpoints:o.endpoints||"",additionalRequestData:o.additionalRequestData||{},additionalRequestHeaders:o.additionalRequestHeaders||{},field:o.field||"image",types:o.types||"image/*",captionPlaceholder:this.api.i18n.t("Caption"),buttonContent:o.buttonContent||"",uploader:o.uploader||void 0},this.uploader=new d({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}})}return l(e,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"cdxcarousel-wrapper",addButton:"cdxcarousel-addImage",block:"cdxcarousel-block",item:"cdxcarousel-item",removeBtn:"cdxcarousel-removeBtn",leftBtn:"cdxcarousel-leftBtn",rightBtn:"cdxcarousel-rightBtn",inputUrl:"cdxcarousel-inputUrl",caption:"cdxcarousel-caption",list:"cdxcarousel-list",imagePreloader:"image-tool__image-preloader"}}},{key:"render",value:function(){if(this.wrapper=g("div",[this.CSS.wrapper]),this.list=g("div",[this.CSS.list]),this.addButton=this.createAddButton(),this.list.appendChild(this.addButton),this.wrapper.appendChild(this.list),this.data.length>0){var e,t=m(this.data);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=this.creteNewItem(n.url,n.caption);this.list.insertBefore(r,this.addButton)}}catch(e){t.e(e)}finally{t.f()}}return this.wrapper}},{key:"save",value:function(e){var t=e.getElementsByClassName(this.CSS.item),n=[];if(t.length>0){var r,o=m(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.firstChild.value&&n.push({url:i.firstChild.value,caption:i.lastChild.value})}}catch(e){o.e(e)}finally{o.f()}}return n}},{key:"creteNewItem",value:function(e,t){var n=g("div",[this.CSS.block]),r=g("div",[this.CSS.item]),o=g("div",[this.CSS.removeBtn]),i=g("div",[this.CSS.leftBtn]),a=g("div",[this.CSS.rightBtn]),s=g("input",[this.CSS.inputUrl]),l=g("div",[this.CSS.imagePreloader]);return s.value=e,i.innerHTML=this.IconLeft,i.style="padding: 8px;",i.addEventListener("click",(function(){var e=Array.from(n.parentNode.children).indexOf(n);0!=e&&n.parentNode.insertBefore(n,n.parentNode.children[e-1])})),a.innerHTML=this.IconRight,a.style="padding: 8px;",a.addEventListener("click",(function(){var e=Array.from(n.parentNode.children).indexOf(n);e!=n.parentNode.children.length-2&&n.parentNode.insertBefore(n,n.parentNode.children[e+2])})),o.innerHTML=this.IconClose,o.addEventListener("click",(function(){n.remove()})),o.style.display="none",r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),n.appendChild(r),e?this._createImage(e,r,t,o):r.appendChild(l),n}},{key:"_createImage",value:function(e,t,n,r){var o=document.createElement("img"),i=g("input",[this.CSS.caption,this.CSS.input]);o.src=e,n&&(i.value=n),i.placeholder=this.config.captionPlaceholder,r.style.display="flex",t.appendChild(o),t.appendChild(i)}},{key:"onUpload",value:function(e){e.success&&e.file?(this._createImage(e.file.url,this.list.childNodes[this.list.childNodes.length-2].firstChild,"",this.list.childNodes[this.list.childNodes.length-2].firstChild.childNodes[1]),this.list.childNodes[this.list.childNodes.length-2].firstChild.childNodes[2].style.backgroundImage="",this.list.childNodes[this.list.childNodes.length-2].firstChild.firstChild.value=e.file.url,this.list.childNodes[this.list.childNodes.length-2].firstChild.classList.add("cdxcarousel-item--empty")):this.uploadingFailed("incorrect response: "+JSON.stringify(e))}},{key:"uploadingFailed",value:function(e){console.warn("Gallery : uploading failed because of",e),this.api.notifier.show({message:this.api.i18n.t("Can not upload an image, try another"),style:"error"})}},{key:"showPreloader",value:function(e){this.nodes.imagePreloader.style.backgroundImage="url(".concat(e,")")}},{key:"onSelectFile",value:function(){var e=this;this.uploader.uploadSelectedFile({onPreview:function(t){var n=e.creteNewItem("","");n.firstChild.lastChild.style.backgroundImage="url(".concat(t,")"),e.list.insertBefore(n,e.addButton)}})}},{key:"createAddButton",value:function(){var e=this,t=g("div",[this.CSS.button,this.CSS.addButton]),n=g("div",[this.CSS.block]);return t.innerHTML="".concat(h()," Add Image"),t.addEventListener("click",(function(){e.onSelectFile()})),n.appendChild(t),n}}],[{key:"toolbox",get:function(){return{title:"Carousel",icon:'<svg width="38" height="18" viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="10" y="0" width="18" height="18"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 16V2C28 0.9 27.1 0 26 0H12C10.9 0 10 0.9 10 2V16C10 17.1 10.9 18 12 18H26C27.1 18 28 17.1 28 16V16ZM15.5 10.5L18 13.51L21.5 9L26 15H12L15.5 10.5V10.5Z"  /></mask><g mask="url(#mask0)"><rect x="10" width="18" height="18"  /></g><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="3" width="7" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.59L2.67341 9L7 4.41L5.66802 3L0 9L5.66802 15L7 13.59Z" fill="white"/></mask><g mask="url(#mask1)"><rect y="3" width="7.55735" height="12"  /></g><mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="31" y="3" width="7" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M31 13.59L35.3266 9L31 4.41L32.332 3L38 9L32.332 15L31 13.59Z" fill="white"/></mask><g mask="url(#mask2)"><rect x="30.4426" y="2.25" width="7.55735" height="13" /></g></svg>'}}}]),e}(),g=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(e);for(var a in Array.isArray(n)?(t=i.classList).add.apply(t,o(n)):n&&i.classList.add(n),r)i[a]=r[a];return i}})(),r.default})()));