"use strict"
define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,o){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=l(e)
if(t){var r=l(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(r,Ember.Application)
var n=a(r)
function r(){var e
i(this,r)
for(var u=arguments.length,a=new Array(u),f=0;f<u;f++)a[f]=arguments[f]
return s(c(e=n.call.apply(n,[this].concat(a))),"modulePrefix",o.default.modulePrefix),s(c(e),"podModulePrefix",o.default.podModulePrefix),s(c(e),"Resolver",t.default),e}return r}()
e.default=p,(0,n.default)(p,o.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/focus-trap",["exports","ember-trap-focus/components/focus-trap"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/get-code-snippet",["exports","ember-code-snippet/helpers/get-code-snippet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,r=t.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var o={name:"export-application-global",initialize:n}
e.default=o})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=f(e)
if(t){var r=f(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(u,Ember.Router)
var n=i(u)
function u(){var e
o(this,u)
for(var r=arguments.length,i=new Array(r),f=0;f<r;f++)i[f]=arguments[f]
return c(a(e=n.call.apply(n,[this].concat(i))),"location",t.default.locationType),c(a(e),"rootURL",t.default.rootURL),e}return u}()
e.default=l,l.map((function(){}))})),define("dummy/routes/application",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=u(e)
if(t){var r=u(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(i,Ember.Route)
var t=r(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}()
e.default=a})),define("dummy/snippets/focus-trap-modal",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"W0Jzv3Z/",block:'{"symbols":[],"statements":[[6,[37,0],[[32,0,["showModal"]]],null,[["default"],[{"statements":[[2,"  "],[8,"focus-trap",[],[[],[]],[["default"],[{"statements":[[2,"\\n    "],[8,"modal-contents",[],[[],[]],null],[2,"\\n  "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["if"]}',meta:{moduleName:"dummy/snippets/focus-trap-modal.hbs"}})
e.default=t})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"mG9ZGOP/",block:'{"symbols":["snippet"],"statements":[[10,"div"],[14,5,"width: 100%; max-width: 600px; margin-left: auto; margin-right: auto;"],[12],[2,"\\n  "],[10,"h2"],[12],[2,"Ember Focus Trap"],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"Try pressing tab/shift+tab/up/down/alt+tab.  Notice that focus is stuck inside the focus trap."],[13],[2,"\\n\\n  "],[10,"fieldset"],[14,5,"border: 1px solid lime; padding: 16px;"],[12],[2,"\\n    "],[10,"label"],[12],[2,"Focus Trap"],[13],[2,"\\n    "],[8,"focus-trap",[],[[],[]],[["default"],[{"statements":[[2,"\\n      "],[10,"input"],[14,"placeholder","Inputs"],[12],[13],[2,"\\n      "],[10,"textarea"],[14,"placeholder","Textareas"],[12],[13],[2,"\\n      "],[10,"button"],[14,4,"button"],[12],[2,"Buttons"],[13],[2,"\\n      "],[10,"a"],[14,6,"https://wikipedia.com"],[12],[2,"Links"],[13],[2,"\\n      "],[10,"select"],[12],[2,"\\n        "],[10,"option"],[14,2,"1"],[12],[2,"Options numero uno"],[13],[2,"\\n        "],[10,"option"],[14,2,"1"],[12],[2,"Options numero dos"],[13],[2,"\\n        "],[10,"option"],[14,2,"1"],[12],[2,"Tres"],[13],[2,"\\n      "],[13],[2,"\\n    "]],"parameters":[]}]]],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"Notice that elements outside cannot be focused via keyboard nav once the focus trap has captured focus."],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"If you focus on one of these, notice that the next `tab` press will give focus to the trap."],[13],[2,"\\n\\n  "],[10,"input"],[14,"placeholder","Other input, NOT inside the focus trap"],[12],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"You should also notice that if nothing in the trap, or the DOM has focus, the next `tab` will give focus to the trap."],[13],[2,"\\n\\n  "],[10,"h2"],[12],[2,"How to use it"],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"There should really only be 1 focus trap on the screen at once."],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"As soon as you render the component, it will start trapping focus, so dont render it until you want it to take control."],[13],[2,"\\n\\n  "],[10,"p"],[12],[2,"Something like:"],[13],[2,"\\n\\n"],[6,[37,1],[[30,[36,0],["focus-trap-modal.hbs"],null]],null,[["default"],[{"statements":[[2,"    "],[10,"pre"],[15,0,[32,1,["language"]]],[12],[1,[32,1,["source"]]],[13],[2,"\\n"]],"parameters":[1]}]]],[2,"\\n  "],[1,[30,[36,3],[[30,[36,2],null,null]],null]],[2,"\\n\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["get-code-snippet","let","-outlet","component"]}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t})),define("dummy/utils/element-is-visible",["exports","ember-trap-focus/utils/element-is-visible"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/utils/focusable-elements",["exports","ember-trap-focus/utils/focusable-elements"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
