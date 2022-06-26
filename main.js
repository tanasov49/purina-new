(()=>{"use strict";var e=document.querySelector(".address-clients__btn");function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".popup"),document.querySelectorAll(".address-option");var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.address=t.urlJson,this.headers=t.headers}var n,r;return n=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getAddress",value:function(){return fetch("".concat(this.address),{method:"GET",headers:this.headers}).then(this._checkResponse)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.Address,this._id=t.id,this._addressSelector=n,this._element=this._getTemplate()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._addressSelector).content.querySelector(".address__option").cloneNode(!0)}},{key:"renderCard",value:function(){return this._element.textContent=this._address,this._element}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objectJson=t,this._dbcValues=Object.values(t),this._dbcCode=Object.keys(t),this._dbcSelector=n,this._dbcElement=document.querySelector(this._dbcSelector).content.querySelector(".dbc-list").cloneNode(!0)}var t,n;return t=e,(n=[{key:"renderDbc",value:function(){for(var e=0;e<this._dbcCode.length;e++)this._dbcText=document.createElement("p"),this._dbcText.className="dbc-list__text","0"===this._dbcValues[e]&&(this._dbcText.textContent=this._dbcCode[e],this._dbcElement.appendChild(this._dbcText));return this._dbcElement}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerDbc=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderDbc",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addDbc",value:function(e){this._containerDbc.append(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return p(this,c),(e=i.call(this,o)).slideIndex=t,e.addressOption=document.querySelector(n).childNodes,e.dbcList=document.querySelector(r).childNodes,e}return t=c,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"option",value:function(e){this.showSlide(this.slideIndex=e),y(_(c.prototype),"close",this).call(this)}},{key:"showSlide",value:function(e){var t=this;e>this.dbcList.length&&(this.slideIndex=1),e<1&&(this.slideIndex=this.dbcList.length);for(var n=0;n<this.dbcList.length;n++)this.dbcList[n].classList.remove("dbc-list_visible");for(var r=function(e){t.addressOption[e].addEventListener("click",(function(n){return t.option(e)}))},o=0;o<this.addressOption.length;o++)r(o);this.dbcList[this.slideIndex-1].classList.add("dbc-list_visible")}},{key:"setupDbc",value:function(){this.showSlide(this.slideIndex)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._closeWithClick=this._closeWithClick.bind(this)}var t,n;return t=e,(n=[{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._popup.addEventListener("mousedown",this._closeWithClick),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.querySelector(".address-clients__close-btn").addEventListener("click",this.close)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeWithClick",value:function(e){e.currentTarget===e.target&&this.close()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=new n({urlJson:"https://api.npoint.io/c6c32c3072fc0ee4bcfc",headers:{"Content-Type":"application/json"}});Promise.all([k.getAddress()]).then((function(e){var t,n,r=(t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];O.renderItems(r),j.renderDbc(r),E.showSlide(r)})).catch((function(e){console.log("Error: ".concat(e))}));var O=new c({renderer:function(e){O.addItem(function(e){return new o(e,".template-address").renderCard()}(e))}},".address"),j=new u({renderer:function(e){j.addDbc(function(e){return new a(e,".template-dbc").renderDbc()}(e))}},".dbc-codes"),E=new w(1,".address",".dbc-codes",".popup");e.addEventListener("click",(function(){E.open(),E.setupDbc()}))})();