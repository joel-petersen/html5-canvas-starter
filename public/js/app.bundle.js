/******/!function(t){/******/
/******/
// The require function
/******/
function n(a){/******/
/******/
// Check if module is in cache
/******/
if(i[a])/******/
return i[a].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var r=i[a]={/******/
exports:{},/******/
id:a,/******/
loaded:!1};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// __webpack_public_path__
/******/
return n.m=t,n.c=i,n.p="",n(0)}([/* 0 */
/***/
function(t,n,i){"use strict";var a=i(1),r=function(){function t(){var t=this;this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.sizeCanvas(),this.rnd=new a.Random,document.body.appendChild(this.canvas),window.requestAnimationFrame(function(n){return t.draw(n)})}return t.prototype.sizeCanvas=function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},t.prototype.draw=function(t){var n=this;window.requestAnimationFrame(function(t){return n.draw(t)}),this.ctx.save(),this.ctx.fillStyle="hsla(0,0%,100%,"+Math.random()+")";for(var i=0;i<200;i++)this.ctx.fillRect(Math.random()*this.canvas.width,Math.random()*this.canvas.height,30*Math.random(),30*Math.random()),this.ctx.clearRect(Math.random()*this.canvas.width,Math.random()*this.canvas.height,10*Math.random(),10*Math.random());this.ctx.restore()},t}(),o=new r;console.log("HI!!!"),console.log(o)},/* 1 */
/***/
function(t,n){/*!
	 * Random JavaScript Library v1.0.0
	 * Jeremy Zevin
	 *
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 * Date: 7/8/16
	 *
	 */
"use strict";var i=function(){function t(){this["native"]=Math.random}
//random integer beyween min and max
//random real number between min and max
//random pick from an array
//boolean result based on result of expression
//random color rgb,rgba,hsl,hsla,hex
return t.prototype["int"]=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=1),Math.floor(this["native"]()*(n-t+1)+t)},t.prototype.real=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=1),this["native"]()*(n-t)+t},t.prototype.pick=function(t){return t[this["int"](0,t.length-1)]},t.prototype.chance=function(t){return void 0===t&&(t=10),t/100>this["native"]()},t.prototype.color=function(t){if(void 0===t&&(t="rgb"),"hex"===t){for(var n="#",i=0;i<=5;i++)n+=this.pick([0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]);return n}return"rgba"===t?"rgba("+this["int"](0,255)+","+this["int"](0,255)+","+this["int"](0,255)+","+this["native"]()+")":"hsl"===t?"hsl("+this["int"](0,360)+","+this["int"](0,100)+"%,"+this["int"](0,100)+"%)":"hsla"===t?"hsla("+this["int"](0,360)+","+this["int"](0,100)+"%,"+this["int"](0,100)+"%,"+this["native"]()+")":"rgb("+this["int"](0,255)+","+this["int"](0,255)+","+this["int"](0,255)+")"},t}();n.Random=i}]);
//# sourceMappingURL=app.bundle.js.map