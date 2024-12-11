// cross-fetch@4.0.0 downloaded from https://ga.jspm.io/npm:cross-fetch@4.0.0/dist/browser-ponyfill.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var r="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof e&&e;var o=function(){function F(){(this||e).fetch=false;(this||e).DOMException=r.DOMException}F.prototype=r;return new F}();(function(t){(function(r){var o="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||"undefined"!==typeof o&&o;var n={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{new Blob;return true}catch(e){return false}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function isDataView(e){return e&&DataView.prototype.isPrototypeOf(e)}if(n.arrayBuffer){var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"];var i=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1}}function normalizeName(e){"string"!==typeof e&&(e=String(e));if(/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function normalizeValue(e){"string"!==typeof e&&(e=String(e));return e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};n.iterable&&(t[Symbol.iterator]=function(){return t});return t}function Headers(t){(this||e).map={};t instanceof Headers?t.forEach((function(e,t){this.append(t,e)}),this||e):Array.isArray(t)?t.forEach((function(e){this.append(e[0],e[1])}),this||e):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this||e)}Headers.prototype.append=function(t,r){t=normalizeName(t);r=normalizeValue(r);var o=(this||e).map[t];(this||e).map[t]=o?o+", "+r:r};Headers.prototype.delete=function(t){delete(this||e).map[normalizeName(t)]};Headers.prototype.get=function(t){t=normalizeName(t);return this.has(t)?(this||e).map[t]:null};Headers.prototype.has=function(t){return(this||e).map.hasOwnProperty(normalizeName(t))};Headers.prototype.set=function(t,r){(this||e).map[normalizeName(t)]=normalizeValue(r)};Headers.prototype.forEach=function(t,r){for(var o in(this||e).map)(this||e).map.hasOwnProperty(o)&&t.call(r,(this||e).map[o],o,this||e)};Headers.prototype.keys=function(){var e=[];this.forEach((function(t,r){e.push(r)}));return iteratorFor(e)};Headers.prototype.values=function(){var e=[];this.forEach((function(t){e.push(t)}));return iteratorFor(e)};Headers.prototype.entries=function(){var e=[];this.forEach((function(t,r){e.push([r,t])}));return iteratorFor(e)};n.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=true}function fileReaderReady(e){return new Promise((function(t,r){e.onload=function(){t(e.result)};e.onerror=function(){r(e.error)}}))}function readBlobAsArrayBuffer(e){var t=new FileReader;var r=fileReaderReady(t);t.readAsArrayBuffer(e);return r}function readBlobAsText(e){var t=new FileReader;var r=fileReaderReady(t);t.readAsText(e);return r}function readArrayBufferAsText(e){var t=new Uint8Array(e);var r=new Array(t.length);for(var o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);t.set(new Uint8Array(e));return t.buffer}function Body(){(this||e).bodyUsed=false;(this||e)._initBody=function(t){(this||e).bodyUsed=(this||e).bodyUsed;(this||e)._bodyInit=t;if(t)if("string"===typeof t)(this||e)._bodyText=t;else if(n.blob&&Blob.prototype.isPrototypeOf(t))(this||e)._bodyBlob=t;else if(n.formData&&FormData.prototype.isPrototypeOf(t))(this||e)._bodyFormData=t;else if(n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))(this||e)._bodyText=t.toString();else if(n.arrayBuffer&&n.blob&&isDataView(t)){(this||e)._bodyArrayBuffer=bufferClone(t.buffer);(this||e)._bodyInit=new Blob([(this||e)._bodyArrayBuffer])}else n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?(this||e)._bodyArrayBuffer=bufferClone(t):(this||e)._bodyText=t=Object.prototype.toString.call(t);else(this||e)._bodyText="";(this||e).headers.get("content-type")||("string"===typeof t?(this||e).headers.set("content-type","text/plain;charset=UTF-8"):(this||e)._bodyBlob&&(this||e)._bodyBlob.type?(this||e).headers.set("content-type",(this||e)._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&(this||e).headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))};if(n.blob){(this||e).blob=function(){var t=consumed(this||e);if(t)return t;if((this||e)._bodyBlob)return Promise.resolve((this||e)._bodyBlob);if((this||e)._bodyArrayBuffer)return Promise.resolve(new Blob([(this||e)._bodyArrayBuffer]));if((this||e)._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([(this||e)._bodyText]))};(this||e).arrayBuffer=function(){if((this||e)._bodyArrayBuffer){var t=consumed(this||e);return t||(ArrayBuffer.isView((this||e)._bodyArrayBuffer)?Promise.resolve((this||e)._bodyArrayBuffer.buffer.slice((this||e)._bodyArrayBuffer.byteOffset,(this||e)._bodyArrayBuffer.byteOffset+(this||e)._bodyArrayBuffer.byteLength)):Promise.resolve((this||e)._bodyArrayBuffer))}return this.blob().then(readBlobAsArrayBuffer)}}(this||e).text=function(){var t=consumed(this||e);if(t)return t;if((this||e)._bodyBlob)return readBlobAsText((this||e)._bodyBlob);if((this||e)._bodyArrayBuffer)return Promise.resolve(readArrayBufferAsText((this||e)._bodyArrayBuffer));if((this||e)._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve((this||e)._bodyText)};n.formData&&((this||e).formData=function(){return this.text().then(decode)});(this||e).json=function(){return this.text().then(JSON.parse)};return this||e}var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(e){var t=e.toUpperCase();return a.indexOf(t)>-1?t:e}function Request(t,r){if(!((this||e)instanceof Request))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');r=r||{};var o=r.body;if(t instanceof Request){if(t.bodyUsed)throw new TypeError("Already read");(this||e).url=t.url;(this||e).credentials=t.credentials;r.headers||((this||e).headers=new Headers(t.headers));(this||e).method=t.method;(this||e).mode=t.mode;(this||e).signal=t.signal;if(!o&&null!=t._bodyInit){o=t._bodyInit;t.bodyUsed=true}}else(this||e).url=String(t);(this||e).credentials=r.credentials||(this||e).credentials||"same-origin";!r.headers&&(this||e).headers||((this||e).headers=new Headers(r.headers));(this||e).method=normalizeMethod(r.method||(this||e).method||"GET");(this||e).mode=r.mode||(this||e).mode||null;(this||e).signal=r.signal||(this||e).signal;(this||e).referrer=null;if(("GET"===(this||e).method||"HEAD"===(this||e).method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o);if(("GET"===(this||e).method||"HEAD"===(this||e).method)&&("no-store"===r.cache||"no-cache"===r.cache)){var n=/([?&])_=[^&]*/;if(n.test((this||e).url))(this||e).url=(this||e).url.replace(n,"$1_="+(new Date).getTime());else{var s=/\?/;(this||e).url+=(s.test((this||e).url)?"&":"?")+"_="+(new Date).getTime()}}}Request.prototype.clone=function(){return new Request(this||e,{body:(this||e)._bodyInit})};function decode(e){var t=new FormData;e.trim().split("&").forEach((function(e){if(e){var r=e.split("=");var o=r.shift().replace(/\+/g," ");var n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}}));return t}function parseHeaders(e){var t=new Headers;var r=e.replace(/\r?\n[\t ]+/g," ");r.split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":");var o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}}));return t}Body.call(Request.prototype);function Response(t,r){if(!((this||e)instanceof Response))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');r||(r={});(this||e).type="default";(this||e).status=void 0===r.status?200:r.status;(this||e).ok=(this||e).status>=200&&(this||e).status<300;(this||e).statusText=void 0===r.statusText?"":""+r.statusText;(this||e).headers=new Headers(r.headers);(this||e).url=r.url||"";this._initBody(t)}Body.call(Response.prototype);Response.prototype.clone=function(){return new Response((this||e)._bodyInit,{status:(this||e).status,statusText:(this||e).statusText,headers:new Headers((this||e).headers),url:(this||e).url})};Response.error=function(){var e=new Response(null,{status:0,statusText:""});e.type="error";return e};var f=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===f.indexOf(t))throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})};r.DOMException=o.DOMException;try{new r.DOMException}catch(t){r.DOMException=function(t,r){(this||e).message=t;(this||e).name=r;var o=Error(t);(this||e).stack=o.stack};r.DOMException.prototype=Object.create(Error.prototype);r.DOMException.prototype.constructor=r.DOMException}function fetch(e,t){return new Promise((function(s,i){var a=new Request(e,t);if(a.signal&&a.signal.aborted)return i(new r.DOMException("Aborted","AbortError"));var f=new XMLHttpRequest;function abortXhr(){f.abort()}f.onload=function(){var e={status:f.status,statusText:f.statusText,headers:parseHeaders(f.getAllResponseHeaders()||"")};e.url="responseURL"in f?f.responseURL:e.headers.get("X-Request-URL");var t="response"in f?f.response:f.responseText;setTimeout((function(){s(new Response(t,e))}),0)};f.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)};f.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)};f.onabort=function(){setTimeout((function(){i(new r.DOMException("Aborted","AbortError"))}),0)};function fixUrl(e){try{return""===e&&o.location.href?o.location.href:e}catch(t){return e}}f.open(a.method,fixUrl(a.url),true);"include"===a.credentials?f.withCredentials=true:"omit"===a.credentials&&(f.withCredentials=false);"responseType"in f&&(n.blob?f.responseType="blob":n.arrayBuffer&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(f.responseType="arraybuffer"));!t||"object"!==typeof t.headers||t.headers instanceof Headers?a.headers.forEach((function(e,t){f.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){f.setRequestHeader(e,normalizeValue(t.headers[e]))}));if(a.signal){a.signal.addEventListener("abort",abortXhr);f.onreadystatechange=function(){4===f.readyState&&a.signal.removeEventListener("abort",abortXhr)}}f.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}fetch.polyfill=true;if(!o.fetch){o.fetch=fetch;o.Headers=Headers;o.Request=Request;o.Response=Response}r.Headers=Headers;r.Request=Request;r.Response=Response;r.fetch=fetch})({})})(o);o.fetch.ponyfill=true;delete o.fetch.polyfill;var n=r.fetch?r:o;t=n.fetch;t.default=n.fetch;t.fetch=n.fetch;t.Headers=n.Headers;t.Request=n.Request;t.Response=n.Response;t=t;var s=t;const i=t.DOMException,a=t.Headers,f=t.Request,u=t.Response,d=t.fetch;export{i as DOMException,a as Headers,f as Request,u as Response,s as default,d as fetch};
