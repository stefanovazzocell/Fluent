'use strict';(function(a,b,c){var d=function(e){return this instanceof d?void('string'==typeof e?this.selector=b.querySelectorAll(e):this.selector=e):new d(e)};a.$$=d,d.fn=d.prototype={ready:function(e){if('interactive'===b.readyState||'complete'===b.readyState)try{e()}catch(f){console.warn('$$.ready(callback) - callback throwed error:'),console.error(f)}else b.addEventListener('DOMContentLoaded',e)},each:function(e){if(null!=this.selector)try{Array.from(this.selector).forEach(e)}catch(f){e(this.selector,0)}},first:function(){var e=null;try{e=this.selector[0]}catch(f){try{e=this.selector}catch(g){console.error('$$.first() - No element selected')}}return e},select:function(){this.first().click()},html:function(e){return e==c?this.first().innerHTML:void this.each(function(f){f.innerHTML=e})},addClass:function(e){this.each(function(f){f.classList.add(e)})},removeClass:function(e){this.each(function(f){f.classList.remove(e)})},toggleClass:function(e){this.each(function(f){f.classList.toggle(e)})},hasClass:function(e){return this.first().classList.contains(e)},style:function(e,f){return f==c?this.first().style[e]:void this.each(function(g){g.style[e]=f})},val:function(e){return e==c?this.first().value:void this.each(function(f){f.value=e})},prop:function(e,f){return f==c?this.first().getAttribute(e):void this.each(function(g){e,g.setAttribute(e,f)})},event:function(e,f){this.each(function(g){g.addEventListener(e,f)})},onClick:function(e){this.event('click',e)},encodeDataForURI:function(e={}){var f=[];for(var g in e)f.push(encodeURIComponent(g)+'='+encodeURIComponent(e[g]));return encodeURI(f.join('&'))},isEmptyObject:function(e){return e.constructor===Object&&0===Object.keys(e).length}}})(this,document);