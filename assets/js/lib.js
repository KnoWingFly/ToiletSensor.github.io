var DEVICE = DEVICE || {};
DEVICE = {
  isSp: false,
  isIos: false,
  isAndroid: false,
  isTablet: false,
  isPc: false,
  isIe11: false,
  isEdge: false,
  isSafariPc: false,
  isFirefox: false,
  isChrome: false,
};

var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();
if (ua.indexOf("ipod") != -1 || ua.indexOf("iphone") != -1) {
  DEVICE.isSp = true;
  DEVICE.isIos = true;
  document.getElementsByTagName("body")[0].classList.add("isSp");
  document.getElementsByTagName("body")[0].classList.add("isIos");
} else if (ua.indexOf("android") != -1 && ua.indexOf("mobile") != -1) {
  DEVICE.isSp = true;
  DEVICE.isAndroid = true;
  document.getElementsByTagName("body")[0].classList.add("isSp");
  document.getElementsByTagName("body")[0].classList.add("isAndorid");
} else if (
  ua.indexOf("ipad") > -1 ||
  (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
) {
  document.getElementsByTagName("body")[0].classList.add("isTablet");
  document.getElementsByTagName("body")[0].classList.add("isIos");
  DEVICE.isIos = true;
  DEVICE.isTablet = true;
} else if (ua.indexOf("android") > 0) {
  document.getElementsByTagName("body")[0].classList.add("isTablet");
  document.getElementsByTagName("body")[0].classList.add("isAndorid");
  DEVICE.isTablet = true;
} else {
  DEVICE.isPc = true;
  document.getElementsByTagName("body")[0].classList.add("isPc");
  if (ua.indexOf("edge") !== -1) {
    DEVICE.isEdge = true;
    document.getElementsByTagName("body")[0].classList.add("isEdge");
  } else if (ua.indexOf("trident/7") !== -1) {
    DEVICE.isIe11 = true;
    document.getElementsByTagName("body")[0].classList.add("isIe11");
  } else if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1) {
    DEVICE.isSafariPc = true;
    document.getElementsByTagName("body")[0].classList.add("isSafariPc");
  } else if (ua.indexOf("firefox") !== -1) {
    DEVICE.isFirefox = true;
    document.getElementsByTagName("body")[0].classList.add("isFirefox");
  } else if (ua.indexOf("chrome") !== -1) {
    DEVICE.isChrome = true;
    document.getElementsByTagName("body")[0].classList.add("isChrome");
  }
}

/*!
 * GSAP 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&ae}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Rt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(Tt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(e,r,i){var n,a=q(e[1]),s=(a?2:1)+(r<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=i,r){for(n=o;i&&!("immediateRender"in n);)n=i.vars.defaults||{},i=t(i.vars.inherit)&&i.parent;o.immediateRender=t(n.immediateRender),r<2?o.runBackwards=1:o.startAt=e[s-1]}return o}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ka(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||F,i=e.keyframes?ka:ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||j)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>j)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-j}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=ca(r+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Pt.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ja(t){return t instanceof Bt?ta(t):Ia(t,t._dur)}function La(t,e){var r,i,n=t.labels,a=t._recent||vt,s=t.duration()>=U?a.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in n)?"<"===(r=e.charAt(0))||">"===r?("<"===r?a._start:a.endTime(0<=a._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in n||(n[e]=s),n[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?La(t,e.substr(0,r-1))+i:s+i):null==e?s:+e}function Ma(t,e){return t||0===t?e(t):e}function Oa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Ra(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ua(t){return t.sort(function(){return.5-Math.random()})}function Va(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Et(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Ua(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Oa(_.amount||_.each)||0,m=m&&d<0?It(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Wa(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Oa(t))}}function Xa(u,t){var h,l,e=K(u);return!e&&s(u)&&(h=e=u.radius||U,u.values?(u=Tt(u.values),(l=!q(u[0]))&&(h*=h)):u=Wa(u.increment)),Ma(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=U,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Oa(t)}:Wa(u))}function Ya(t,e,r,i){return Ma(K(t)?!e:!0===r?!!(r=0):!i,function(){return K(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function ab(e,r,t){return Ma(t,function(t){return e[~~r(t)]})}function db(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+Ya(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function gb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function ib(t){return sa(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&xt(t,"onInterrupt"),t}function nb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Ot+.5|0}function ob(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&Ot,t&Ot]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&Ot,c&Ot,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&Ot,t&Ot]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=nb(s+1/3,i,n),c[1]=nb(s,i,n),c[2]=nb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/Ot,n=c[1]/Ot,a=c[2]/Ot,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function pb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function qb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=ob(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=pb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function tb(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Ct.test(r),t[1]=qb(t[1],e),t[0]=qb(t[0],e,pb(t[1])),!0}function Cb(t){var e=(t+"").split("("),r=Dt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):Dt._CE&&St.test(t)?Dt._CE("",t):r}function Eb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Eb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Eb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Gb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in Dt[t]=ot[t]=a,Dt[n=t.toLowerCase()]=r,a)Dt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Dt[t+"."+e]=a[e]}),a}function Hb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ib(r,t,e){function Dl(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/X*(Math.asin(1/i)||0),s="out"===r?Dl:"in"===r?function(t){return 1-Dl(1-t)}:Hb(Dl);return n=X/n,s.config=function(t,e){return Ib(r,t,e)},s}function Jb(e,r){function Ll(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Ll:"in"===e?function(t){return 1-Ll(1-t)}:Hb(Ll);return t.config=function(t){return Jb(e,t)},t}var R,F,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,D,S,z,I,E,L,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},B={duration:.5,overwrite:!1,delay:0},U=1e8,j=1/U,X=2*Math.PI,V=X/4,G=0,J=Math.sqrt,W=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},K=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[#\-+.]*\b[a-z\d-=+%.]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt={_start:0,endTime:Q},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},bt=[].slice,Tt=function toArray(t,e){return!o(t)||e||!n&&At()?K(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ra(t,1)?r.push.apply(r,Tt(t)):r.push(t)})||r}(t,e):Ra(t)?bt.call(t,0):t?[t]:[]:bt.call(a.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ma(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},Ot=255,Mt={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,Pt=(x=Date.now,k=500,C=33,A=x(),D=A,z=S=1e3/240,b={time:0,frame:0,tick:function tick(){zk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,zk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){S=1e3/(t||240),z=1e3*b.time+S},add:function add(t){I.indexOf(t)<0&&I.push(t),At()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),At=function _wake(){return!c&&Pt.wake()},Dt={},St=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,It=function _invertEase(e){return function(t){return 1-e(1-t)}},Et=function _parseEase(t,e){return t&&(p(t)?t:Dt[t]||Cb(t))||e};function zk(t){var e,r,i,n,a=x()-D,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(D+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(S<=e?4:S-e),r=1),s||(m=g(zk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function am(t){return t<L?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Gb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Dt.Linear.easeNone=Dt.none=Dt.Linear.easeIn,Gb("Elastic",Ib("in"),Ib("out"),Ib()),E=7.5625,L=1/2.75,Gb("Bounce",function(t){return 1-am(1-t)},am),Gb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Gb("Circ",function(t){return-(J(1-t*t)-1)}),Gb("Sine",function(t){return 1===t?1:1-W(t*V)}),Gb("Back",Jb("in"),Jb("out"),Jb()),Dt.SteppedEase=Dt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},B.ease=Dt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Lt,Rt=function GSCache(t,e){this.id=G++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Wt},Ft=((Lt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Lt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Lt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Lt.totalTime=function totalTime(t,e){if(At(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===j||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},Lt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%this._dur||(t?this._dur:0),e):this._time},Lt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Lt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Lt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Lt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-j?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-j?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Lt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=j)&&Math.abs(this._zTime)!==j))),this):this._ps},Lt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},Lt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Lt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},Lt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Lt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Lt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ja(this)):this._rDelay},Lt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Lt.seek=function seek(e,r){return this.totalTime(La(this,e),t(r))},Lt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Lt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Lt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Lt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Lt.resume=function resume(){return this.paused(!1)},Lt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-j:0)),this):this._rts<0},Lt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-j,this},Lt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-j))},Lt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Lt.then=function then(t){var i=this;return new Promise(function(e){function sn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?sn():i._prom=sn})},Lt.kill=function kill(){ib(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||Pt.wake(),r&&Ca(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ja(Ft.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-j,_prom:0,_ps:!1,_rts:1});var Bt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e,r)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),i.parent&&Ba(i.parent,_assertThisInitialized(i)),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r,i){return new Vt(t,ea(arguments,0,this),La(this,q(e)?i:r)),this},e.from=function from(t,e,r,i){return new Vt(t,ea(arguments,1,this),La(this,q(e)?i:r)),this},e.fromTo=function fromTo(t,e,r,i,n){return new Vt(t,ea(arguments,2,this),La(this,q(e)?n:i)),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Vt(t,e,La(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Vt.delayedCall(0,t,e),La(this,r))},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Vt(t,r,La(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-j<t&&0<=t?m:t<j?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0)),this._lock=0,!this._ts&&!u)return this;Eb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),_||!i||e||xt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-j);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-j:j);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-j)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=La(this,e)),!(t instanceof Ft)){if(K(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Vt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Vt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(Pt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=La(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Vt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,La(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=La(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=Tt(t),a=this._first,s=q(e);a;)a instanceof Vt?da(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=La(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=e.immediateRender,u=Vt.to(r,ja({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||j,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());u._dur!==t&&Ia(u,t,0,1).render(u._time,!0,!0),a&&a.apply(u,s||[])}},e));return o?u.render(0):u},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:La(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+j)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===F&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ga(F,ya(t,F)),f=Pt.frame),Pt.frame>=ct){ct+=Y.autoSleep||120;var e=F._first;if((!e||!e._ts)&&Y.autoSleep&&Pt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Pt.sleep()}}},Timeline}(Ft);ja(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Qb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Ut(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||K(t)||Z(t))return o(t)?Ut(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Ut(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ie(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Jt:Qt:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=db(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Oa(d)||0))),d!==i)return isNaN(d*i)?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ie(this._pt,t,e,0,1,Zt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=db(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ie(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?$t:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Nt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,D=e._startAt,S=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:S,E="auto"===e._overwrite&&!R,L=e.timeline;if(!L||C&&v||(v="none"),e._ease=Et(v,B.ease),e._yEase=k?It(Et(!0===k?v:k,B.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),!L){if(p=(l=S[0]?_(S[0]).harness:0)&&g[l.prop],i=na(g,ut),D&&D.render(-1,!0).kill(),y)if(sa(e._startAt=Vt.set(S,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),b){if(0<r)P||(e._startAt=0);else if(A&&!(r<0&&D))return void(r&&(e._zTime=r))}else!1===P&&(e._startAt=0);else if(M&&A)if(D)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),sa(e._startAt=Vt.set(S,a)),b){if(!r)return}else _initTween(e._startAt,j);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<S.length;n++){if(h=(o=S[n])._gsap||$(S)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),c=I===S?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ie(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Qb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(qt=e,F.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,qt=0),e._pt&&T&&(lt[h.id]=1)}u&&re(e),e._onInit&&e._onInit(e)}e._from=!L&&!!g.runBackwards,e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Ut=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?db(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Xt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Vt=function(A){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=A.call(this,n?r:oa(r),i)||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,C=a.parent,P=(K(e)||Z(e)?q(e[0]):"length"in r)?[e]:Tt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ja(o.vars.defaults,{ease:"none"}),w.forEach(function(t){return o.to(P,t,">")});else{if(l=P.length,c=b?Va(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Xt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=P[u],h.duration=+Ut(m,_assertThisInitialized(a),u,d,P),h.delay=(+Ut(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,P))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||R||(qt=_assertThisInitialized(a),F.killTweensOf(P),qt=0),C&&Ba(C,_assertThisInitialized(a)),(y||!m&&!w&&a._start===ca(C._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-j,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,A);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-j<t&&0<=t?c:t<j?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Eb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-j:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(xt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data)?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=yt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===j||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?j:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(xt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?ib(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,qt&&!0!==qt.vars.overwrite)._first||ib(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?Tt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),ib(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&ib(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ea(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ea(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Ft);ja(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Vt[r]=function(){var t=new Bt,e=bt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function _b(t,e,r){return t.setAttribute(e,r)}function hc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Qt=function _setterFunc(t,e,r){return t[e](r)},Jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Wt=function _getSetter(t,e){return p(t[e])?Qt:r(t[e])&&t.setAttribute?_b:Gt},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Kt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=hc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Vt,ot.TimelineLite=ot.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:B,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=tb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:Kt,add:Yt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:Wt,aliases:{},register:0};if(At(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=Tt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Tt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&Kt(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Et(t.ease,B.ease)),ma(B,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(Tt(t),ja(e||{},a),r)},r&&(Bt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Dt[t]=Et(e)},parseEase:function parseEase(t,e){return arguments.length?Et(t,e):Dt},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Bt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),F.remove(a),a._dp=0,a._time=a._tTime=F._time,i=F._first;i;)n=i._next,!r&&!i._dur&&i instanceof Vt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(F,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return K(e)?ab(e,wrap(0,e.length),t):Ma(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return K(e)?ab(e,wrapYoyo(0,e.length-1),t):Ma(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Va,random:Ya,snap:Xa,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:Oa,clamp:function clamp(e,r,t){return Ma(t,function(t){return yt(e,r,t)})},splitColor:ob,toArray:Tt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Oa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(K(e)&&!K(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(K(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return Kt(t,d)||(f?e.p:e)}}}return Ma(t,n)},shuffle:Ua},install:M,effects:dt,ticker:Pt,updateRoot:Bt.updateRoot,plugins:ft,globalTimeline:F,core:{PropTween:ie,globals:P,Tween:Vt,Timeline:Bt,Animation:Ft,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return R=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Vt[t]}),Pt.add(Bt.updateRoot),d=ne.to({},{duration:0});function lc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function nc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=lc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},nc("roundProps",Wa),nc("modifiers"),nc("snap",Xa))||ne;Vt.version=Bt.version=ae.version="3.6.1",l=1,u()&&At();function Yc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function $c(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function _c(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function bd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function cd(t,e,r){return t.style[e]=r}function dd(t,e,r){return t.style.setProperty(e,r)}function ed(t,e,r){return t._gsap[e]=r}function fd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function gd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function hd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ld(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function md(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Le,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&md(t,Ue(e)||e,1)||""}function pd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=ld("div")||{style:{}},ld("div"),qe=Ue(qe),Ye=qe+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",de=!!Ue("perspective"),he=1)}function qd(t){var e,r=ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=qd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function rd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function sd(e){var r;try{r=e.getBBox()}catch(t){r=qd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===qd||(r=qd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}}function td(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!sd(t))}function ud(t,e){if(e){var r=t.style;e in Se&&e!==Ye&&(e=qe),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Le,"-$1").toLowerCase())):r.removeAttribute(e)}}function vd(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?bd:ad);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function xd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Re.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||je[i]||je[h]?u:("px"===h||p||(u=xd(t,e,r,"px")),o=t.getCTM&&td(t),!m&&"%"!==h||!Se[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&m&&s.width&&f&&s.time===Pt.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=md(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[c],a.removeChild(le),l.position="absolute",f&&m&&((s=_(a)).time=Pt.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function yd(t,e,r,i){var n;return he||pd(),e in Be&&"transform"!==e&&~(e=Be[e]).indexOf(",")&&(e=e.split(",")[0]),Se[e]&&"transform"!==e?(n=Je(t,i),n="transformOrigin"!==e?n[e]:We(md(t,Ye))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ve[e]&&Ve[e](t,e,r)||md(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?xd(t,e,n,r)+r:n}function zd(t,e,r,i){if(!r||"none"===r){var n=Ue(e,t,1),a=n&&md(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=md(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ie(this._pt,t.style,e,0,1,Zt),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=md(t,e)||i,t.style[e]=r),tb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=xd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?bd:ad;return nt.test(i)&&(v.e=0),this._pt=v}function Bd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Xe[r]||r,e[1]=Xe[i]||i,e.join(" ")}function Cd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Se[r]&&(i=1,r="transformOrigin"===r?Ye:qe),ud(a,r);i&&(ud(a,qe),u&&(u.svg&&a.removeAttribute("transform"),Je(a,1),u.uncache=1))}}function Gd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Hd(t){var e=md(t,qe);return Gd(e)?Ge:e.substr(7).match(et).map(ca)}function Id(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Hd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Hd(t),n?o.display=n:ud(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Jd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Id(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=sd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ye]="0px 0px",a&&(vd(a,h,"xOrigin",f,w),vd(a,h,"yOrigin",d,x),vd(a,h,"xOffset",c,h.xOffset),vd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Md(t,e,r){var i=Oa(e);return ca(parseFloat(e)+parseFloat(xd(t,"x",r+"px",i)))+i}function Td(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?ze:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Zc),u.e=c,u.u="deg",t._props.push(r),u}function Ud(t,e){for(var r in e)t[r]=e[r];return t}function Vd(t,e,r){var i,n,a,s,o,u,h,l=Ud({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[qe]=e,i=Je(r,1),ud(r,qe),r.setAttribute("transform",a)):(a=getComputedStyle(r)[qe],f[qe]=e,i=Je(r,1),f[qe]=a),Se)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Oa(a)!==(h=Oa(s))?xd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,i,n,o,u-o,Yc),t._pt.u=h||0,t._props.push(n));Ud(i,l)}var se,oe,ue,he,le,fe,de,ce=Dt.Power0,pe=Dt.Power1,_e=Dt.Power2,me=Dt.Power3,ge=Dt.Power4,ve=Dt.Linear,ye=Dt.Quad,be=Dt.Cubic,Te=Dt.Quart,we=Dt.Quint,xe=Dt.Strong,Oe=Dt.Elastic,Me=Dt.Back,ke=Dt.SteppedEase,Ce=Dt.Bounce,Pe=Dt.Sine,Ae=Dt.Expo,De=Dt.Circ,Se={},ze=180/Math.PI,Ie=Math.PI/180,Ee=Math.atan2,Le=/([A-Z])/g,Re=/(?:left|right|width|margin|padding|x)/i,Fe=/[\s,\(]\S/,Be={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qe="transform",Ye=qe+"Origin",Ne="O,Moz,ms,Ms,Webkit".split(","),Ue=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ne[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ne[n]:"")+t},je={deg:1,rad:1,turn:1},Xe={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ve={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,Cd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],Qe={},Je=function _parseTransform(t,e){var r=t._gsap||new Rt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,M,k,C,P,A,D,S,z,I,E,L=t.style,R=r.scaleX<0,F="deg",B=md(t,Ye)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!td(t)),m=Id(t,r.svg),r.svg&&(k=!r.uncache&&!e&&t.getAttribute("data-svg-origin"),Jd(t,k||B,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Ee(T,b)*ze:0,(f=w||x?Ee(w,x)*ze+u:0)&&(o*=Math.abs(Math.cos(f*Ie))),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],A=m[8],D=m[9],S=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Ee(E,S))*ze,g&&(k=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+D*y,P=E*v+S*y,A=O*-y+A*v,D=M*-y+D*v,S=E*-y+S*v,I=z*-y+I*v,O=k,M=C,E=P),l=(g=Ee(-w,S))*ze,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-A*y,T=C=T*v-D*y,w=P=w*v-S*y),u=(g=Ee(T,b))*ze,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),C=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+E*E)),g=Ee(O,M),f=2e-4<Math.abs(g)?g*ze:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Gd(md(t,qe)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(R?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+F,r.rotationX=ca(h)+F,r.rotationY=ca(l)+F,r.skewX=f+F,r.skewY=d+F,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(B.split(" ")[2])||0)&&(L[Ye]=We(B)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?er:de?tr:He,r.uncache=0,r},We=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tr(t,e)},$e="0deg",Ze="0px",Ke=") ",tr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==$e||h!==$e)){var T,w=parseFloat(h)*Ie,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Ie,T=Math.cos(w),a=Md(g,a,x*T*-v),s=Md(g,s,-Math.sin(w)*-v),o=Md(g,o,O*T*-v+v)}_!==Ze&&(y+="perspective("+_+Ke),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===Ze&&s===Ze&&o===Ze||(y+=o!==Ze||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ke),u!==$e&&(y+="rotate("+u+Ke),h!==$e&&(y+="rotateY("+h+Ke),l!==$e&&(y+="rotateX("+l+Ke),f===$e&&d===$e||(y+="skew("+f+", "+d+Ke),1===c&&1===p||(y+="scale("+c+", "+p+Ke),g.style[qe]=y||"translate(0, 0)"},er=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Ie,c*=Ie,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Ie,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=xd(g,"x",l,"px"),O=xd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[qe]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ve[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var rr,ir,nr,ar={name:"css",register:pd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in he||pd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Qb(f,e,r,i,t,n)))if(h=typeof s,l=Ve[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=db(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",kt.lastIndex=0,kt.test(a)||(d=Oa(a),c=Oa(s)),c?d!==c&&(a=xd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Oa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=yd(t,f))):a=yd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Be&&("autoAlpha"===f&&(1===u&&"hidden"===yd(t,"visibility")&&o&&(u=0),vd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Be[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Se)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||Je(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,T,qe,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Bd(s),g.svg?Jd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&vd(this,g,"zOrigin",g.zOrigin,c),vd(this,T,f,We(a),We(s)));continue}if("svgOrigin"===f){Jd(t,s,1,v,0,this);continue}if(f in Qe){Td(this,g,f,u,s,p);continue}if("smoothOrigin"===f){vd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Vd(this,s,t);continue}}else f in T||(f=Ue(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Fe.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Oa(s)||(f in Y.units?Y.units[f]:d))&&(u=xd(t,f,a,c)),this._pt=new ie(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?Yc:_c),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=$c);else if(f in T)zd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,t[f],s,i,n)}b.push(f)}y&&re(this)},get:yd,aliases:Be,getSetter:function getSetter(t,e,i){var n=Be[e];return n&&n.indexOf(",")<0&&(e=n),e in Se&&e!==Ye&&(t._gsap.x||yd(t,"x"))?i&&fe===i?"scale"===e?fd:ed:(fe=i||{})&&("scale"===e?gd:hd):t.style&&!r(t.style[e])?cd:~e.indexOf("-")?dd:Wt(t,e)},core:{_removeProperty:ud,_getMatrix:Id}};ae.utils.checkPrefix=Ue,nr=ba((rr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ir="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Se[t]=1}),ba(ir,function(t){Y.units[t]="deg",Qe[t]=1}),Be[nr[13]]=rr+","+ir,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Be[e[1]]=nr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),ae.registerPlugin(ar);var sr=ae.registerPlugin(ar)||ae,or=sr.core.Tween;e.Back=Me,e.Bounce=Ce,e.CSSPlugin=ar,e.Circ=De,e.Cubic=be,e.Elastic=Oe,e.Expo=Ae,e.Linear=ve,e.Power0=ce,e.Power1=pe,e.Power2=_e,e.Power3=me,e.Power4=ge,e.Quad=ye,e.Quart=Te,e.Quint=we,e.Sine=Pe,e.SteppedEase=ke,e.Strong=xe,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Vt,e.TweenMax=or,e.default=sr,e.gsap=sr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
"undefined"!=typeof navigator&&function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lottie=e()}(this,(function(){"use strict";var svgNS="http://www.w3.org/2000/svg",locationHref="",_useWebWorker=!1,initialDefaultFrame=-999999,setWebWorker=function(t){_useWebWorker=!!t},getWebWorker=function(){return _useWebWorker},setLocationHref=function(t){locationHref=t},getLocationHref=function(){return locationHref};function createTag(t){return document.createElement(t)}function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)Object.prototype.hasOwnProperty.call(i,a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}var audioControllerFactory=function(){function t(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].pause()},resume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].resume()},setRate:function(t){var e,r=this.audios.length;for(e=0;e<r;e+=1)this.audios[e].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):window.Howl?new window.Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),createTypedArray=function(){function t(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(e,r){return"float32"===e?new Float32Array(r):"int16"===e?new Int16Array(r):"uint8c"===e?new Uint8ClampedArray(r):t(e,r)}:t}();function createSizedArray(t){return Array.apply(null,{length:t})}function _typeof$6(t){return _typeof$6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$6(t)}var subframeEnabled=!0,expressionsPlugin=null,idPrefix="",isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),_shouldRoundValues=!1,bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};function ProjectInterface$1(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===_typeof$6(t)&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){_shouldRoundValues=!!t}function bmRnd(t){return _shouldRoundValues?Math.round(t):t}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e}var createElementID=(_count=0,function(){return idPrefix+"__lottie_element_"+(_count+=1)}),_count;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,s=p,a=h;break;case 1:i=l,s=r,a=h;break;case 2:i=h,s=r,a=p;break;case 3:i=h,s=l,a=r;break;case 4:i=p,s=h,a=r;break;case 5:i=r,s=h,a=l}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,r=[];for(t=0;t<256;t+=1)e=t.toString(16),r[t]=1===e.length?"0"+e:e;return function(t,e,i){return t<0&&(t=0),e<0&&(e=0),i<0&&(i=0),"#"+r[t]+r[e]+r[i]}}(),setSubframeEnabled=function(t){subframeEnabled=!!t},getSubframeEnabled=function(){return subframeEnabled},setExpressionsPlugin=function(t){expressionsPlugin=t},getExpressionsPlugin=function(){return expressionsPlugin},setDefaultCurveSegments=function(t){defaultCurveSegments=t},getDefaultCurveSegments=function(){return defaultCurveSegments},setIdPrefix=function(t){idPrefix=t},getIdPrefix=function(){return idPrefix};function createNS(t){return document.createElementNS(svgNS,t)}function _typeof$5(t){return _typeof$5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$5(t)}var dataManager=function(){var t,e,r=1,i=[],s={onmessage:function(){},postMessage:function(e){t({data:e})}},a={postMessage:function(t){s.onmessage({data:t})}};function n(){e||(e=function(e){if(window.Worker&&window.Blob&&getWebWorker()){var r=new Blob(["var _workerSelf = self; self.onmessage = ",e.toString()],{type:"text/javascript"}),i=URL.createObjectURL(r);return new Worker(i)}return t=e,s}((function(t){if(a.dataManager||(a.dataManager=function(){function t(s,a){var n,o,h,l,p,m,c=s.length;for(o=0;o<c;o+=1)if("ks"in(n=s[o])&&!n.completed){if(n.completed=!0,n.tt&&(s[o-1].td=n.tt),n.hasMask){var d=n.masksProperties;for(l=d.length,h=0;h<l;h+=1)if(d[h].pt.k.i)i(d[h].pt.k);else for(m=d[h].pt.k.length,p=0;p<m;p+=1)d[h].pt.k[p].s&&i(d[h].pt.k[p].s[0]),d[h].pt.k[p].e&&i(d[h].pt.k[p].e[0])}0===n.ty?(n.layers=e(n.refId,a),t(n.layers,a)):4===n.ty?r(n.shapes):5===n.ty&&f(n)}}function e(t,e){var r=function(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r];r+=1}return null}(t,e);return r?r.layers.__used?JSON.parse(JSON.stringify(r.layers)):(r.layers.__used=!0,r.layers):null}function r(t){var e,s,a;for(e=t.length-1;e>=0;e-=1)if("sh"===t[e].ty)if(t[e].ks.k.i)i(t[e].ks.k);else for(a=t[e].ks.k.length,s=0;s<a;s+=1)t[e].ks.k[s].s&&i(t[e].ks.k[s].s[0]),t[e].ks.k[s].e&&i(t[e].ks.k[s].e[0]);else"gr"===t[e].ty&&r(t[e].it)}function i(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function s(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&null))}var a,n=function(){var t=[4,4,14];function e(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(i=void 0,i=(r=t[e]).t.d,r.t.d={k:[{s:i,t:0}]})}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),o=(a=[4,7,99],function(t){if(t.chars&&!s(a,t.v)){var e,i=t.chars.length;for(e=0;e<i;e+=1){var n=t.chars[e];n.data&&n.data.shapes&&(r(n.data.shapes),n.data.ip=0,n.data.op=99999,n.data.st=0,n.data.sr=1,n.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},t.chars[e].t||(n.data.shapes.push({ty:"no"}),n.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}),h=function(){var t=[5,7,15];function e(t){var e,r,i=t.length;for(e=0;e<i;e+=1)5===t[e].ty&&(r=void 0,"number"==typeof(r=t[e].t.p).a&&(r.a={a:0,k:r.a}),"number"==typeof r.p&&(r.p={a:0,k:r.p}),"number"==typeof r.r&&(r.r={a:0,k:r.r}))}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),l=function(){var t=[4,1,9];function e(t){var r,i,s,a=t.length;for(r=0;r<a;r+=1)if("gr"===t[r].ty)e(t[r].it);else if("fl"===t[r].ty||"st"===t[r].ty)if(t[r].c.k&&t[r].c.k[0].i)for(s=t[r].c.k.length,i=0;i<s;i+=1)t[r].c.k[i].s&&(t[r].c.k[i].s[0]/=255,t[r].c.k[i].s[1]/=255,t[r].c.k[i].s[2]/=255,t[r].c.k[i].s[3]/=255),t[r].c.k[i].e&&(t[r].c.k[i].e[0]/=255,t[r].c.k[i].e[1]/=255,t[r].c.k[i].e[2]/=255,t[r].c.k[i].e[3]/=255);else t[r].c.k[0]/=255,t[r].c.k[1]/=255,t[r].c.k[2]/=255,t[r].c.k[3]/=255}function r(t){var r,i=t.length;for(r=0;r<i;r+=1)4===t[r].ty&&e(t[r].shapes)}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}(),p=function(){var t=[4,4,18];function e(t){var r,i,s;for(r=t.length-1;r>=0;r-=1)if("sh"===t[r].ty)if(t[r].ks.k.i)t[r].ks.k.c=t[r].closed;else for(s=t[r].ks.k.length,i=0;i<s;i+=1)t[r].ks.k[i].s&&(t[r].ks.k[i].s[0].c=t[r].closed),t[r].ks.k[i].e&&(t[r].ks.k[i].e[0].c=t[r].closed);else"gr"===t[r].ty&&e(t[r].it)}function r(t){var r,i,s,a,n,o,h=t.length;for(i=0;i<h;i+=1){if((r=t[i]).hasMask){var l=r.masksProperties;for(a=l.length,s=0;s<a;s+=1)if(l[s].pt.k.i)l[s].pt.k.c=l[s].cl;else for(o=l[s].pt.k.length,n=0;n<o;n+=1)l[s].pt.k[n].s&&(l[s].pt.k[n].s[0].c=l[s].cl),l[s].pt.k[n].e&&(l[s].pt.k[n].e[0].c=l[s].cl)}4===r.ty&&e(r.shapes)}}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}();function f(t){0===t.t.a.length&&t.t.p}var m={completeData:function(r){r.__complete||(l(r),n(r),o(r),h(r),p(r),t(r.layers,r.assets),function(r,i){if(r){var s=0,a=r.length;for(s=0;s<a;s+=1)1===r[s].t&&(r[s].data.layers=e(r[s].data.refId,i),t(r[s].data.layers,i))}}(r.chars,r.assets),r.__complete=!0)}};return m.checkColors=l,m.checkChars=o,m.checkPathProperties=h,m.checkShapes=p,m.completeLayers=t,m}()),a.assetLoader||(a.assetLoader=function(){function t(t){var e=t.getResponseHeader("content-type");return e&&"json"===t.responseType&&-1!==e.indexOf("json")||t.response&&"object"===_typeof$5(t.response)?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):null}return{load:function(e,r,i,s){var a,n=new XMLHttpRequest;try{n.responseType="json"}catch(t){}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status)a=t(n),i(a);else try{a=t(n),i(a)}catch(t){s&&s(t)}};try{n.open("GET",e,!0)}catch(t){n.open("GET",r+"/"+e,!0)}n.send()}}}()),"loadAnimation"===t.data.type)a.assetLoader.load(t.data.path,t.data.fullPath,(function(e){a.dataManager.completeData(e),a.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){a.postMessage({id:t.data.id,status:"error"})}));else if("complete"===t.data.type){var e=t.data.animation;a.dataManager.completeData(e),a.postMessage({id:t.data.id,payload:e,status:"success"})}else"loadData"===t.data.type&&a.assetLoader.load(t.data.path,t.data.fullPath,(function(e){a.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){a.postMessage({id:t.data.id,status:"error"})}))})),e.onmessage=function(t){var e=t.data,r=e.id,s=i[r];i[r]=null,"success"===e.status?s.onComplete(e.payload):s.onError&&s.onError()})}function o(t,e){var s="processId_"+(r+=1);return i[s]={onComplete:t,onError:e},s}return{loadAnimation:function(t,r,i){n();var s=o(r,i);e.postMessage({type:"loadAnimation",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},loadData:function(t,r,i){n();var s=o(r,i);e.postMessage({type:"loadData",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},completeAnimation:function(t,r,i){n();var s=o(r,i);e.postMessage({type:"complete",animation:t,id:s})}}}(),ImagePreloader=function(){var t=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}function s(t){var e=0,r=setInterval(function(){(t.getBBox().width||e>500)&&(this._imageLoaded(),clearInterval(r)),e+=1}.bind(this),50)}function a(t){var e={assetData:t},r=i(t,this.assetsPath,this.path);return dataManager.loadData(r,function(t){e.img=t,this._footageLoaded()}.bind(this),function(){e.img={},this._footageLoaded()}.bind(this)),e}function n(){this._imageLoaded=e.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=a.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return n.prototype={loadAssets:function(t,e){var r;this.imagesLoadedCb=e;var i=t.length;for(r=0;r<i;r+=1)t[r].layers||(t[r].t&&"seq"!==t[r].t?3===t[r].t&&(this.totalFootages+=1,this.images.push(this.createFootageData(t[r]))):(this.totalImages+=1,this.images.push(this._createImageData(t[r]))))},setAssetsPath:function(t){this.assetsPath=t||""},setPath:function(t){this.path=t||""},loadedImages:function(){return this.totalImages===this.loadedAssets},loadedFootages:function(){return this.totalFootages===this.loadedFootagesCount},destroy:function(){this.imagesLoadedCb=null,this.images.length=0},getAsset:function(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}return null},createImgData:function(e){var r=i(e,this.assetsPath,this.path),s=createTag("img");s.crossOrigin="anonymous",s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.src=r;var a={img:s,assetData:e};return a},createImageData:function(e){var r=i(e,this.assetsPath,this.path),s=createNS("image");isSafari?this.testImageLoaded(s):s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),this._elementHelper.append?this._elementHelper.append(s):this._elementHelper.appendChild(s);var a={img:s,assetData:e};return a},imageLoaded:e,footageLoaded:r,setCacheType:function(t,e){"svg"===t?(this._elementHelper=e,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}},n}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t],i=0;i<r.length;i+=1)r[i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var markerParser=function(){function t(t){for(var e,r=t.split("\r\n"),i={},s=0,a=0;a<r.length;a+=1)2===(e=r[a].split(":")).length&&(i[e[0]]=e[1].trim(),s+=1);if(0===s)throw new Error;return i}return function(e){for(var r=[],i=0;i<e.length;i+=1){var s=e[i],a={time:s.tm,duration:s.dr};try{a.payload=JSON.parse(e[i].cm)}catch(r){try{a.payload=t(e[i].cm)}catch(t){a.payload={name:e[i]}}}r.push(a)}return r}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),renderers={},registerRenderer=function(t,e){renderers[t]=e};function getRenderer(t){return renderers[t]}function _typeof$4(t){return _typeof$4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$4(t)}var AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=getSubframeEnabled(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new BMEnterFrameEvent("drawnFrame",0,0,0)};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var r=getRenderer(e);this.renderer=new r(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||void 0===t.loop||!0===t.loop?this.loop=!0:!1===t.loop?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!Object.prototype.hasOwnProperty.call(t,"autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(t.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(t){dataManager.completeAnimation(t,this.configAnimation)},AnimationItem.prototype.setData=function(t,e){e&&"object"!==_typeof$4(e)&&(e=JSON.parse(e));var r={wrapper:t,animationData:e},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";"false"===s?r.loop=!1:"true"===s?r.loop=!0:""!==s&&(r.loop=parseInt(s,10));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id===a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(t){this.animationData=t;var e=getExpressionsPlugin();e&&e.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=markerParser(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||"canvas"!==this.renderer.rendererType)&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=getExpressionsPlugin();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded&&this.renderer)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!==t||!0===this.isPaused&&(this.isPaused=!1,this.trigger("_pause"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!==t||!1===this.isPaused&&(this.isPaused=!0,this.trigger("_play"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(t){t&&this.name!==t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(t){for(var e,r=0;r<this.markers.length;r+=1)if((e=this.markers[r]).payload&&e.payload.name.cm===t)return e;return null},AnimationItem.prototype.goToAndStop=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&this.goToAndStop(s.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,e,r);this.play()}},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"===_typeof$4(t[0])){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},AnimationItem.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.updateDocumentData=function(t,e,r){try{this.renderer.getElementByPath(t).updateDocumentData(e,r)}catch(t){}},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var animationManager=function(){var t={},e=[],r=0,i=0,s=0,a=!0,n=!1;function o(t){for(var r=0,s=t.target;r<i;)e[r].animation===s&&(e.splice(r,1),r-=1,i-=1,s.isPaused||p()),r+=1}function h(t,r){if(!t)return null;for(var s=0;s<i;){if(e[s].elem===t&&null!==e[s].elem)return e[s].animation;s+=1}var a=new AnimationItem;return f(a,t),a.setData(t,r),a}function l(){s+=1,d()}function p(){s-=1}function f(t,r){t.addEventListener("destroy",o),t.addEventListener("_active",l),t.addEventListener("_idle",p),e.push({elem:r,animation:t}),i+=1}function m(t){var o,h=t-r;for(o=0;o<i;o+=1)e[o].animation.advanceTime(h);r=t,s&&!n?window.requestAnimationFrame(m):a=!0}function c(t){r=t,window.requestAnimationFrame(m)}function d(){!n&&s&&a&&(window.requestAnimationFrame(c),a=!1)}return t.registerAnimation=h,t.loadAnimation=function(t){var e=new AnimationItem;return f(e,null),e.setParams(t),e},t.setSpeed=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setSpeed(t,r)},t.setDirection=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setDirection(t,r)},t.play=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.play(t)},t.pause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.pause(t)},t.stop=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.stop(t)},t.togglePause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),h(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerText="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),h(o,t)}},t.resize=function(){var t;for(t=0;t<i;t+=1)e[t].animation.resize()},t.goToAndStop=function(t,r,s){var a;for(a=0;a<i;a+=1)e[a].animation.goToAndStop(t,r,s)},t.destroy=function(t){var r;for(r=i-1;r>=0;r-=1)e[r].animation.destroy(t)},t.freeze=function(){n=!0},t.unfreeze=function(){n=!1,d()},t.setVolume=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setVolume(t,r)},t.mute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.mute(t)},t.unmute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.unmute(t)},t.getRegisteredAnimations=function(){var t,r=e.length,i=[];for(t=0;t<r;t+=1)i.push(e[t].animation);return i},t}(),BezierFactory=function(){var t={getBezierEasing:function(t,r,i,s,a){var n=a||("bez_"+t+"_"+r+"_"+i+"_"+s).replace(/\./g,"p");if(e[n])return e[n];var o=new l([t,r,i,s]);return e[n]=o,o}},e={};var r=.1,i="function"==typeof Float32Array;function s(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function n(t){return 3*t}function o(t,e,r){return((s(e,r)*t+a(e,r))*t+n(e))*t}function h(t,e,r){return 3*s(e,r)*t*t+2*a(e,r)*t+n(e)}function l(t){this._p=t,this._mSampleValues=i?new Float32Array(11):new Array(11),this._precomputed=!1,this.get=this.get.bind(this)}return l.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:o(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],i=0;i<11;++i)this._mSampleValues[i]=o(i*r,t,e)},_getTForX:function(t){for(var e=this._p[0],i=this._p[2],s=this._mSampleValues,a=0,n=1;10!==n&&s[n]<=t;++n)a+=r;var l=a+(t-s[--n])/(s[n+1]-s[n])*r,p=h(l,e,i);return p>=.001?function(t,e,r,i){for(var s=0;s<4;++s){var a=h(e,r,i);if(0===a)return e;e-=(o(e,r,i)-t)/a}return e}(t,l,e,i):0===p?l:function(t,e,r,i,s){var a,n,h=0;do{(a=o(n=e+(r-e)/2,i,s)-t)>0?r=n:e=n}while(Math.abs(a)>1e-7&&++h<10);return n}(t,a,a+r,e,i)}},t}(),pooling={double:function(t){return t.concat(createSizedArray(t.length))}},poolFactory=function(t,e,r){var i=0,s=t,a=createSizedArray(s);return{newElement:function(){return i?a[i-=1]:e()},release:function(t){i===s&&(a=pooling.double(a),s*=2),r&&r(t),a[i]=t,i+=1}}},bezierLengthPool=poolFactory(8,(function(){return{addedLength:0,percents:createTypedArray("float32",getDefaultCurveSegments()),lengths:createTypedArray("float32",getDefaultCurveSegments())}})),segmentsLengthPool=poolFactory(8,(function(){return{lengths:[],totalLength:0}}),(function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezierLengthPool.release(t.lengths[e]);t.lengths.length=0}));function bezFunction(){var t=Math;function e(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return n>-.001&&n<.001}var r=function(t,e,r,i){var s,a,n,o,h,l,p=getDefaultCurveSegments(),f=0,m=[],c=[],d=bezierLengthPool.newElement();for(n=r.length,s=0;s<p;s+=1){for(h=s/(p-1),l=0,a=0;a<n;a+=1)o=bmPow(1-h,3)*t[a]+3*bmPow(1-h,2)*h*r[a]+3*(1-h)*bmPow(h,2)*i[a]+bmPow(h,3)*e[a],m[a]=o,null!==c[a]&&(l+=bmPow(m[a]-c[a],2)),c[a]=m[a];l&&(f+=l=bmSqrt(l)),d.percents[s]=h,d.lengths[s]=f}return d.addedLength=f,d};function i(t){this.segmentLength=0,this.points=new Array(t)}function s(t,e){this.partialLength=t,this.point=e}var a,n=(a={},function(t,r,n,o){var h=(t[0]+"_"+t[1]+"_"+r[0]+"_"+r[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]).replace(/\./g,"p");if(!a[h]){var l,p,f,m,c,d,u,y=getDefaultCurveSegments(),g=0,v=null;2===t.length&&(t[0]!==r[0]||t[1]!==r[1])&&e(t[0],t[1],r[0],r[1],t[0]+n[0],t[1]+n[1])&&e(t[0],t[1],r[0],r[1],r[0]+o[0],r[1]+o[1])&&(y=2);var b=new i(y);for(f=n.length,l=0;l<y;l+=1){for(u=createSizedArray(f),c=l/(y-1),d=0,p=0;p<f;p+=1)m=bmPow(1-c,3)*t[p]+3*bmPow(1-c,2)*c*(t[p]+n[p])+3*(1-c)*bmPow(c,2)*(r[p]+o[p])+bmPow(c,3)*r[p],u[p]=m,null!==v&&(d+=bmPow(u[p]-v[p],2));g+=d=bmSqrt(d),b.points[l]=new s(d,u),v=u}b.segmentLength=g,a[h]=b}return a[h]});function o(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bmFloor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,l=!0;l;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),l=!1):a+=h,a<0||a>=s-1){if(a===s-1)return r[a];l=!1}return r[a]+(r[a+1]-r[a])*o}var h=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,i=segmentsLengthPool.newElement(),s=t.c,a=t.v,n=t.o,o=t.i,h=t._length,l=i.lengths,p=0;for(e=0;e<h-1;e+=1)l[e]=r(a[e],a[e+1],n[e],o[e+1]),p+=l[e].addedLength;return s&&h&&(l[e]=r(a[e],a[0],n[e],o[0]),p+=l[e].addedLength),i.totalLength=p,i},getNewSegment:function(e,r,i,s,a,n,l){a<0?a=0:a>1&&(a=1);var p,f=o(a,l),m=o(n=n>1?1:n,l),c=e.length,d=1-f,u=1-m,y=d*d*d,g=f*d*d*3,v=f*f*d*3,b=f*f*f,E=d*d*u,P=f*d*u+d*f*u+d*d*m,x=f*f*u+d*f*m+f*d*m,S=f*f*m,C=d*u*u,_=f*u*u+d*m*u+d*u*m,A=f*m*u+d*m*m+f*u*m,T=f*m*m,k=u*u*u,D=m*u*u+u*m*u+u*u*m,M=m*m*u+u*m*m+m*u*m,F=m*m*m;for(p=0;p<c;p+=1)h[4*p]=t.round(1e3*(y*e[p]+g*i[p]+v*s[p]+b*r[p]))/1e3,h[4*p+1]=t.round(1e3*(E*e[p]+P*i[p]+x*s[p]+S*r[p]))/1e3,h[4*p+2]=t.round(1e3*(C*e[p]+_*i[p]+A*s[p]+T*r[p]))/1e3,h[4*p+3]=t.round(1e3*(k*e[p]+D*i[p]+M*s[p]+F*r[p]))/1e3;return h},getPointInSegment:function(e,r,i,s,a,n){var h=o(a,n),l=1-h;return[t.round(1e3*(l*l*l*e[0]+(h*l*l+l*h*l+l*l*h)*i[0]+(h*h*l+l*h*h+h*l*h)*s[0]+h*h*h*r[0]))/1e3,t.round(1e3*(l*l*l*e[1]+(h*l*l+l*h*l+l*l*h)*i[1]+(h*h*l+l*h*h+h*l*h)*s[1]+h*h*h*r[1]))/1e3]},buildBezierData:n,pointOnLine2D:e,pointOnLine3D:function(r,i,s,a,n,o,h,l,p){if(0===s&&0===o&&0===p)return e(r,i,a,n,h,l);var f,m=t.sqrt(t.pow(a-r,2)+t.pow(n-i,2)+t.pow(o-s,2)),c=t.sqrt(t.pow(h-r,2)+t.pow(l-i,2)+t.pow(p-s,2)),d=t.sqrt(t.pow(h-a,2)+t.pow(l-n,2)+t.pow(p-o,2));return(f=m>c?m>d?m-c-d:d-c-m:d>c?d-c-m:c-m-d)>-1e-4&&f<1e-4}}}var bez=bezFunction(),PropertyFactory=function(){var t=initialDefaultFrame,e=Math.abs;function r(t,e){var r,s=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var a,n,o,h,l,p,f,m,c,d=e.lastIndex,u=d,y=this.keyframes.length-1,g=!0;g;){if(a=this.keyframes[u],n=this.keyframes[u+1],u===y-1&&t>=n.t-s){a.h&&(a=n),d=0;break}if(n.t-s>t){d=u;break}u<y-1?u+=1:(d=0,g=!1)}o=this.keyframesMetadata[u]||{};var v,b,E,P,x,S,C,_,A,T,k=n.t-s,D=a.t-s;if(a.to){o.bezierData||(o.bezierData=bez.buildBezierData(a.s,n.s||a.e,a.to,a.ti));var M=o.bezierData;if(t>=k||t<D){var F=t>=k?M.points.length-1:0;for(l=M.points[F].point.length,h=0;h<l;h+=1)r[h]=M.points[F].point[h]}else{o.__fnct?c=o.__fnct:(c=BezierFactory.getBezierEasing(a.o.x,a.o.y,a.i.x,a.i.y,a.n).get,o.__fnct=c),p=c((t-D)/(k-D));var w,I=M.segmentLength*p,V=e.lastFrame<t&&e._lastKeyframeIndex===u?e._lastAddedLength:0;for(m=e.lastFrame<t&&e._lastKeyframeIndex===u?e._lastPoint:0,g=!0,f=M.points.length;g;){if(V+=M.points[m].partialLength,0===I||0===p||m===M.points.length-1){for(l=M.points[m].point.length,h=0;h<l;h+=1)r[h]=M.points[m].point[h];break}if(I>=V&&I<V+M.points[m+1].partialLength){for(w=(I-V)/M.points[m+1].partialLength,l=M.points[m].point.length,h=0;h<l;h+=1)r[h]=M.points[m].point[h]+(M.points[m+1].point[h]-M.points[m].point[h])*w;break}m<f-1?m+=1:g=!1}e._lastPoint=m,e._lastAddedLength=V-M.points[m].partialLength,e._lastKeyframeIndex=u}}else{var B,R,L,G,z;if(y=a.s.length,v=n.s||a.e,this.sh&&1!==a.h)if(t>=k)r[0]=v[0],r[1]=v[1],r[2]=v[2];else if(t<=D)r[0]=a.s[0],r[1]=a.s[1],r[2]=a.s[2];else{var N=i(a.s),O=i(v);b=r,E=function(t,e,r){var i,s,a,n,o,h=[],l=t[0],p=t[1],f=t[2],m=t[3],c=e[0],d=e[1],u=e[2],y=e[3];return(s=l*c+p*d+f*u+m*y)<0&&(s=-s,c=-c,d=-d,u=-u,y=-y),1-s>1e-6?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,o=Math.sin(r*i)/a):(n=1-r,o=r),h[0]=n*l+o*c,h[1]=n*p+o*d,h[2]=n*f+o*u,h[3]=n*m+o*y,h}(N,O,(t-D)/(k-D)),P=E[0],x=E[1],S=E[2],C=E[3],_=Math.atan2(2*x*C-2*P*S,1-2*x*x-2*S*S),A=Math.asin(2*P*x+2*S*C),T=Math.atan2(2*P*C-2*x*S,1-2*P*P-2*S*S),b[0]=_/degToRads,b[1]=A/degToRads,b[2]=T/degToRads}else for(u=0;u<y;u+=1)1!==a.h&&(t>=k?p=1:t<D?p=0:(a.o.x.constructor===Array?(o.__fnct||(o.__fnct=[]),o.__fnct[u]?c=o.__fnct[u]:(B=void 0===a.o.x[u]?a.o.x[0]:a.o.x[u],R=void 0===a.o.y[u]?a.o.y[0]:a.o.y[u],L=void 0===a.i.x[u]?a.i.x[0]:a.i.x[u],G=void 0===a.i.y[u]?a.i.y[0]:a.i.y[u],c=BezierFactory.getBezierEasing(B,R,L,G).get,o.__fnct[u]=c)):o.__fnct?c=o.__fnct:(B=a.o.x,R=a.o.y,L=a.i.x,G=a.i.y,c=BezierFactory.getBezierEasing(B,R,L,G).get,a.keyframeMetadata=c),p=c((t-D)/(k-D)))),v=n.s||a.e,z=1===a.h?a.s[u]:a.s[u]+(v[u]-a.s[u])*p,"multidimensional"===this.propType?r[u]=z:r=z}return e.lastIndex=d,r}function i(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+s*a*l,o*a*n+s*h*l,s*h*n-o*a*l,s*a*n-o*h*l]}function s(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=i&&e>=i||this._caching.lastFrame<r&&e<r))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(e,this._caching);this.pv=s}return this._caching.lastFrame=e,this.pv}function a(t){var r;if("unidimensional"===this.propType)r=t*this.mult,e(this.v-r)>1e-5&&(this.v=r,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)r=t[i]*this.mult,e(this.v[i]-r)>1e-5&&(this.v[i]=r,this._mdf=!0),i+=1}function n(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t;this.lock=!0,this._mdf=this._isFirstFrame;var e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.addEffect=o}function l(t,e,r,i){var s;this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var h=e.k.length;for(this.v=createTypedArray("float32",h),this.pv=createTypedArray("float32",h),this.vel=createTypedArray("float32",h),s=0;s<h;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=n,this.setVValue=a,this.addEffect=o}function p(e,i,h,l){this.propType="unidimensional",this.keyframes=i.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=i,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.interpolateValue=r,this.effectsSequence=[s.bind(this)],this.addEffect=o}function f(e,i,h,l){var p;this.propType="multidimensional";var f,m,c,d,u=i.k.length;for(p=0;p<u-1;p+=1)i.k[p].to&&i.k[p].s&&i.k[p+1]&&i.k[p+1].s&&(f=i.k[p].s,m=i.k[p+1].s,c=i.k[p].to,d=i.k[p].ti,(2===f.length&&(f[0]!==m[0]||f[1]!==m[1])&&bez.pointOnLine2D(f[0],f[1],m[0],m[1],f[0]+c[0],f[1]+c[1])&&bez.pointOnLine2D(f[0],f[1],m[0],m[1],m[0]+d[0],m[1]+d[1])||3===f.length&&(f[0]!==m[0]||f[1]!==m[1]||f[2]!==m[2])&&bez.pointOnLine3D(f[0],f[1],f[2],m[0],m[1],m[2],f[0]+c[0],f[1]+c[1],f[2]+c[2])&&bez.pointOnLine3D(f[0],f[1],f[2],m[0],m[1],m[2],m[0]+d[0],m[1]+d[1],m[2]+d[2]))&&(i.k[p].to=null,i.k[p].ti=null),f[0]===m[0]&&f[1]===m[1]&&0===c[0]&&0===c[1]&&0===d[0]&&0===d[1]&&(2===f.length||f[2]===m[2]&&0===c[2]&&0===d[2])&&(i.k[p].to=null,i.k[p].ti=null));this.effectsSequence=[s.bind(this)],this.data=i,this.keyframes=i.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.getValue=n,this.setVValue=a,this.interpolateValue=r,this.frameId=-1;var y=i.k[0].s.length;for(this.v=createTypedArray("float32",y),this.pv=createTypedArray("float32",y),p=0;p<y;p+=1)this.v[p]=t,this.pv[p]=t;this._caching={lastFrame:t,lastIndex:0,value:createTypedArray("float32",y)},this.addEffect=o}return{getProp:function(t,e,r,i,s){var a;if(e.k.length)if("number"==typeof e.k[0])a=new l(t,e,i,s);else switch(r){case 0:a=new p(t,e,i,s);break;case 1:a=new f(t,e,i,s)}else a=new h(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}}}();function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){var t;this._mdf=!1;var e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var pointPool=poolFactory(8,(function(){return createTypedArray("float32",2)}));function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=pointPool.newElement(),this.o[r]=pointPool.newElement(),this.i[r]=pointPool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[]}(!a[i]||a[i]&&!s)&&(a[i]=pointPool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t};var shapePool=(factory=poolFactory(4,(function(){return new ShapePath}),(function(t){var e,r=t._length;for(e=0;e<r;e+=1)pointPool.release(t.v[e]),pointPool.release(t.i[e]),pointPool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1})),factory.clone=function(t){var e,r=factory.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},factory),factory;function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shapePool.release(this.shapes[t]);this._length=0};var shapeCollectionPool=(ob={newShapeCollection:function(){return _length?pool[_length-=1]:new ShapeCollection},release:function(t){var e,r=t._length;for(e=0;e<r;e+=1)shapePool.release(t.shapes[e]);t._length=0,_length===_maxLength&&(pool=pooling.double(pool),_maxLength*=2),pool[_length]=t,_length+=1}},_length=0,_maxLength=4,pool=createSizedArray(_maxLength),ob),ob,_length,_maxLength,pool,ShapePropertyFactory=function(){var t=-999999;function e(t,e,r){var i,s,a,n,o,h,l,p,f,m=r.lastIndex,c=this.keyframes;if(t<c[0].t-this.offsetTime)i=c[0].s[0],a=!0,m=0;else if(t>=c[c.length-1].t-this.offsetTime)i=c[c.length-1].s?c[c.length-1].s[0]:c[c.length-2].e[0],a=!0;else{for(var d,u,y,g=m,v=c.length-1,b=!0;b&&(d=c[g],!((u=c[g+1]).t-this.offsetTime>t));)g<v-1?g+=1:b=!1;if(y=this.keyframesMetadata[g]||{},m=g,!(a=1===d.h)){if(t>=u.t-this.offsetTime)p=1;else if(t<d.t-this.offsetTime)p=0;else{var E;y.__fnct?E=y.__fnct:(E=BezierFactory.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,y.__fnct=E),p=E((t-(d.t-this.offsetTime))/(u.t-this.offsetTime-(d.t-this.offsetTime)))}s=u.s?u.s[0]:d.e[0]}i=d.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=m,n=0;n<h;n+=1)for(o=0;o<l;o+=1)f=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*p,e.i[n][o]=f,f=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*p,e.o[n][o]=f,f=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*p,e.v[n][o]=f}function r(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime,s=this._caching.lastFrame;return s!==t&&(s<r&&e<r||s>i&&e>i)||(this._caching.lastIndex=s<e?this._caching.lastIndex:0,this.interpolateShape(e,this.pv,this._caching)),this._caching.lastFrame=e,this.pv}function i(){this.paths=this.localShapeCollection}function s(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shapePool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function a(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t,e;this.lock=!0,this._mdf=!1,t=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var r=this.effectsSequence.length;for(e=0;e<r;e+=1)t=this.effectsSequence[e](t);this.setVValue(t),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var s=3===r?e.pt.k:e.ks.k;this.v=shapePool.clone(s),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(e,s,a){this.propType="shape",this.comp=e.comp,this.elem=e,this.container=e,this.offsetTime=e.data.st,this.keyframes=3===a?s.pt.k:s.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var n=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,n),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=i,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[r.bind(this)]}n.prototype.interpolateShape=e,n.prototype.getValue=a,n.prototype.setVValue=s,n.prototype.addEffect=o,h.prototype.getValue=a,h.prototype.interpolateShape=e,h.prototype.setVValue=s,h.prototype.addEffect=o;var l=function(){var t=roundCorner;function e(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return e.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var e=this.p.v[0],r=this.p.v[1],i=this.s.v[0]/2,s=this.s.v[1]/2,a=3!==this.d,n=this.v;n.v[0][0]=e,n.v[0][1]=r-s,n.v[1][0]=a?e+i:e-i,n.v[1][1]=r,n.v[2][0]=e,n.v[2][1]=r+s,n.v[3][0]=a?e-i:e+i,n.v[3][1]=r,n.i[0][0]=a?e-i*t:e+i*t,n.i[0][1]=r-s,n.i[1][0]=a?e+i:e-i,n.i[1][1]=r-s*t,n.i[2][0]=a?e+i*t:e-i*t,n.i[2][1]=r+s,n.i[3][0]=a?e-i:e+i,n.i[3][1]=r+s*t,n.o[0][0]=a?e+i*t:e-i*t,n.o[0][1]=r-s,n.o[1][0]=a?e+i:e-i,n.o[1][1]=r+s*t,n.o[2][0]=a?e-i*t:e+i*t,n.o[2][1]=r+s,n.o[3][0]=a?e-i:e+i,n.o[3][1]=r-s*t}},extendPrototype([DynamicPropertyContainer],e),e}(),p=function(){function t(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,f=2*Math.PI*o/(2*s),m=2*Math.PI*h/(2*s),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<s;t+=1){r=n?l:p,i=n?f:m;var u=(e=n?o:h)*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*i*r*d,y-v*i*r*d,u+g*i*r*d,y+v*i*r*d,t,!0),n=!n,c+=a*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=.5*-Math.PI,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),f=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-f*a*s*o,h+p*a*s*o,l+f*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),f=function(){function t(t,e){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bmMin(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},extendPrototype([DynamicPropertyContainer],t),t}();var m={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new h(t,e,r):new n(t,e,r):5===r?i=new f(t,e):6===r?i=new l(t,e):7===r&&(i=new p(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return h}};return m}(),Matrix=function(){var t=Math.cos,e=Math.sin,r=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function n(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1)}function o(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1)}function h(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(r(t),r(e))}function f(i,s){var a=t(s),n=e(s);return this._t(a,n,0,0,-n,a,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(i),1,0,0,0,0,1,0,0,0,0,1)._t(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1)}function m(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function c(t,e,r,i,s,a,n,o,h,l,p,f,m,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=f,this.props[12]=m,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function d(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function u(t,e,r,i,s,a,n,o,h,l,p,f,m,c,d,u){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===f)return y[12]=y[12]*t+y[15]*m,y[13]=y[13]*a+y[15]*c,y[14]=y[14]*p+y[15]*d,y[15]*=u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],E=y[3],P=y[4],x=y[5],S=y[6],C=y[7],_=y[8],A=y[9],T=y[10],k=y[11],D=y[12],M=y[13],F=y[14],w=y[15];return y[0]=g*t+v*s+b*h+E*m,y[1]=g*e+v*a+b*l+E*c,y[2]=g*r+v*n+b*p+E*d,y[3]=g*i+v*o+b*f+E*u,y[4]=P*t+x*s+S*h+C*m,y[5]=P*e+x*a+S*l+C*c,y[6]=P*r+x*n+S*p+C*d,y[7]=P*i+x*o+S*f+C*u,y[8]=_*t+A*s+T*h+k*m,y[9]=_*e+A*a+T*l+k*c,y[10]=_*r+A*n+T*p+k*d,y[11]=_*i+A*o+T*f+k*u,y[12]=D*t+M*s+F*h+w*m,y[13]=D*e+M*a+F*l+w*c,y[14]=D*r+M*n+F*p+w*d,y[15]=D*i+M*o+F*f+w*u,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e];return t}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function E(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function P(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function x(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function C(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,s=this.props[0]/t,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=s,o.props[12]=a,o.props[13]=n,o}function _(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function A(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=_(t[e]);return i}function T(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+l,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+l,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+l}return i}function k(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function D(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function M(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function F(t){return t<1e-6&&t>0||t>-1e-6&&t<0?i(1e4*t)/1e4:t}function w(){var t=this.props;return"matrix("+F(t[0])+","+F(t[1])+","+F(t[4])+","+F(t[5])+","+F(t[12])+","+F(t[13])+")"}return function(){this.reset=s,this.rotate=a,this.rotateX=n,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=f,this.shear=l,this.scale=m,this.setTransform=c,this.translate=d,this.transform=u,this.applyToPoint=E,this.applyToX=P,this.applyToY=x,this.applyToZ=S,this.applyToPointArray=k,this.applyToTriplePoints=T,this.applyToPointStringified=D,this.toCSS=M,this.to2dCSS=w,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=A,this.inversePoint=_,this.getInverseMatrix=C,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();function _typeof$3(t){return _typeof$3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$3(t)}var lottie={},standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";function setLocation(t){setLocationHref(t)}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){setSubframeEnabled(t)}function setPrefix(t){setIdPrefix(t)}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10)}else!isNaN(t)&&t>1&&setDefaultCurveSegments(t);getDefaultCurveSegments()>=50?roundValues(!1):roundValues(!0)}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&setExpressionsPlugin(e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r+=1){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocation,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=setWebWorker,lottie.setIDPrefix=setPrefix,lottie.__getFactory=getFactory,lottie.version="5.9.3";var queryString="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src?myScript.src.replace(/^[^\?]+\??/,""):"",renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);try{"object"===("undefined"==typeof exports?"undefined":_typeof$3(exports))&&"undefined"!=typeof module||"function"==typeof define&&define.amd||(window.bodymovin=lottie)}catch(t){}var ShapeModifiers=function(){var t={},e={};return t.registerModifier=function(t,r){e[t]||(e[t]=r)},t.getModifier=function(t,r,i){return new e[t](r,i)},t}();function ShapeModifier(){}function TrimModifier(){}function PuckerAndBloatModifier(){}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1){var p,f;if(!((o=a[n]).e*s<i||o.s*s>i+r))p=o.s*s<=i?0:(o.s*s-i)/r,f=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,f])}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segmentsLengthPool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),(e=this.s.v>1?1+a:this.s.v<0?0+a:this.s.v+a)>(r=this.e.v>1?1+a:this.e.v<0?0+a:this.e.v+a)){var n=e;e=r,r=n}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var o,h,l,p,f,m=this.shapes.length,c=0;if(r===e)for(s=0;s<m;s+=1)this.shapes[s].localShapeCollection.releaseShapes(),this.shapes[s].shape._mdf=!0,this.shapes[s].shape.paths=this.shapes[s].localShapeCollection,this._mdf&&(this.shapes[s].pathsData.length=0);else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(s=0;s<m;s+=1)this.shapes[s].pathsData.length=0,this.shapes[s].shape._mdf=!0}else{var d,u,y=[];for(s=0;s<m;s+=1)if((d=this.shapes[s]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=d.shape.paths)._length,f=0,!d.shape._mdf&&d.pathsData.length)f=d.totalShapeLength;else{for(l=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),f+=p.totalLength;d.totalShapeLength=f,d.pathsData=l}c+=f,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=r,E=0;for(s=m-1;s>=0;s-=1)if((d=this.shapes[s]).shape._mdf){for((u=d.localShapeCollection).releaseShapes(),2===this.m&&m>1?(g=this.calculateShapeEdges(e,r,d.totalShapeLength,E,c),E+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):v>=1?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var P=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(d.shape.paths.shapes[d.shape.paths._length-1].c){var x=P.pop();this.addPaths(P,u),P=this.addShapes(d,y[1],x)}else this.addPaths(P,u),P=this.addShapes(d,y[1]);this.addPaths(P,u)}}d.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,l,p,f=t.pathsData,m=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(r?(o=r._length,p=r._length):(r=shapePool.newElement(),o=0,p=0),u.push(r),i=0;i<c;i+=1){for(h=f[i].lengths,r.c=m[i].c,a=m[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(d+(n=h[s-1]).addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(m[i].v[s-1],m[i].o[s-1],m[i].i[s],m[i].v[s],r,o,y),y=!1):(l=bez.getNewSegment(m[i].v[s-1],m[i].v[s],m[i].o[s-1],m[i].i[s],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(m[i].c&&h.length){if(n=h[s-1],d<=e.e){var g=h[s-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(m[i].v[s-1],m[i].o[s-1],m[i].i[0],m[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(m[i].v[s-1],m[i].v[0],m[i].o[s-1],m[i].i[0],(e.s-d)/g,(e.e-d)/g,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;i<c-1&&(r=shapePool.newElement(),y=!0,u.push(r),o=0)}return u},extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(t,e){var r=e/100,i=[0,0],s=t._length,a=0;for(a=0;a<s;a+=1)i[0]+=t.v[a][0],i[1]+=t.v[a][1];i[0]/=s,i[1]/=s;var n,o,h,l,p,f,m=shapePool.newElement();for(m.c=t.c,a=0;a<s;a+=1)n=t.v[a][0]+(i[0]-t.v[a][0])*r,o=t.v[a][1]+(i[1]-t.v[a][1])*r,h=t.o[a][0]+(i[0]-t.o[a][0])*-r,l=t.o[a][1]+(i[1]-t.o[a][1])*-r,p=t.i[a][0]+(i[0]-t.i[a][0])*-r,f=t.i[a][1]+(i[1]-t.i[a][1])*-r,m.setTripleAt(n,o,h,l,p,f,a);return m},PuckerAndBloatModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amount.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var TransformPropertyFactory=function(){var t=[0,0];function e(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=null,e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return e.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(e){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||e){var r;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var i,s;if(r=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(i=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/r,0),s=this.p.getValueAtTime(this.p.keyframes[0].t/r,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(i=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/r,0),s=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/r,0)):(i=this.p.pv,s=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/r,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){i=[],s=[];var a=this.px,n=this.py;a._caching.lastFrame+a.offsetTime<=a.keyframes[0].t?(i[0]=a.getValueAtTime((a.keyframes[0].t+.01)/r,0),i[1]=n.getValueAtTime((n.keyframes[0].t+.01)/r,0),s[0]=a.getValueAtTime(a.keyframes[0].t/r,0),s[1]=n.getValueAtTime(n.keyframes[0].t/r,0)):a._caching.lastFrame+a.offsetTime>=a.keyframes[a.keyframes.length-1].t?(i[0]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/r,0),i[1]=n.getValueAtTime(n.keyframes[n.keyframes.length-1].t/r,0),s[0]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/r,0),s[1]=n.getValueAtTime((n.keyframes[n.keyframes.length-1].t-.01)/r,0)):(i=[a.pv,n.pv],s[0]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/r,a.offsetTime),s[1]=n.getValueAtTime((n._caching.lastFrame+n.offsetTime-.01)/r,n.offsetTime))}else i=s=t;this.v.rotate(-Math.atan2(i[1]-s[1],i[0]-s[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],e),e.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},e.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,r,i){return new e(t,r,i)}}}();function RepeaterModifier(){}function RoundCornersModifier(){}function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],r="normal",i="normal",s=e.length,a=0;a<s;a+=1)switch(e[a].toLowerCase()){case"italic":i="italic";break;case"bold":r="700";break;case"black":r="900";break;case"medium":r="500";break;case"regular":case"normal":r="400";break;case"light":case"thin":r="200"}return{style:i,weight:t.fWeight||r}}extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){for(this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);r>0;)r-=1,this._elements.unshift(e[r]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a,n=!1;if(this._mdf||t){var o,h=Math.ceil(this.c.v);if(this._groups.length<h){for(;this._groups.length<h;){var l={it:this.cloneElements(this._elements),ty:"gr"};l.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,l),this._groups.splice(0,0,l),this._currentCopies+=1}this.elem.reloadShapes(),n=!0}for(a=0,i=0;i<=this._groups.length-1;i+=1){if(o=a<h,this._groups[i]._render=o,this.changeGroupRender(this._groups[i].it,o),!o){var p=this.elemsData[i].it,f=p[p.length-1];0!==f.transform.op.v?(f.transform.op._mdf=!0,f.transform.op.v=0):f.transform.op._mdf=!1}a+=1}this._currentCopies=h;var m=this.o.v,c=m%1,d=m>0?Math.floor(m):Math.ceil(m),u=this.pMatrix.props,y=this.rMatrix.props,g=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var v,b,E=0;if(m>0){for(;E<d;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),E+=1;c&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,c,!1),E+=c)}else if(m<0){for(;E>d;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),E-=1;c&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-c,!0),E-=c)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(b=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=1===this._currentCopies?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==E){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9],u[10],u[11],u[12],u[13],u[14],u[15]),v=0;v<b;v+=1)r[v]=this.matrix.props[v];this.matrix.reset()}else for(this.matrix.reset(),v=0;v<b;v+=1)r[v]=this.matrix.props[v];E+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s;return n},RepeaterModifier.prototype.addShape=function(){},extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r,i=shapePool.newElement();i.c=t.c;var s,a,n,o,h,l,p,f,m,c,d,u,y=t._length,g=0;for(r=0;r<y;r+=1)s=t.v[r],n=t.o[r],a=t.i[r],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=d=s[0]+(o[0]-s[0])*l,f=u=s[1]-(s[1]-o[1])*l,m=p-(p-s[0])*roundCorner,c=f-(f-s[1])*roundCorner,i.setTripleAt(p,f,m,c,d,u,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=m=s[0]+(o[0]-s[0])*l,f=c=s[1]+(o[1]-s[1])*l,d=p-(p-s[0])*roundCorner,u=f-(f-s[1])*roundCorner,i.setTripleAt(p,f,m,c,d,u,g),g+=1):(i.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g),g+=1):(i.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var FontManager=function(){var t={w:0,size:0,shapes:[],data:{shapes:[]}},e=[];e=e.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var r=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],i=[65039,8205];function s(t,e){var r=createTag("span");r.setAttribute("aria-hidden",!0),r.style.fontFamily=e;var i=createTag("span");i.innerText="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=function(t){var e,r=t.split(","),i=r.length,s=[];for(e=0;e<i;e+=1)"sans-serif"!==r[e]&&"monospace"!==r[e]&&s.push(r[e]);return s.join(",")}(t)+", "+e,{node:i,w:s,parent:r}}function a(t,e){var r,i=document.body&&e?"svg":"canvas",s=getFontProperties(t);if("svg"===i){var a=createNS("text");a.style.fontSize="100px",a.setAttribute("font-family",t.fFamily),a.setAttribute("font-style",s.style),a.setAttribute("font-weight",s.weight),a.textContent="1",t.fClass?(a.style.fontFamily="inherit",a.setAttribute("class",t.fClass)):a.style.fontFamily=t.fFamily,e.appendChild(a),r=a}else{var n=new OffscreenCanvas(500,500).getContext("2d");n.font=s.style+" "+s.weight+" 100px "+t.fFamily,r=n}return{measureText:function(t){return"svg"===i?(r.textContent=t,r.getComputedTextLength()):r.measureText(t).width}}}var n=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};n.isModifier=function(t,e){var i=t.toString(16)+e.toString(16);return-1!==r.indexOf(i)},n.isZeroWidthJoiner=function(t,e){return e?t===i[0]&&e===i[1]:t===i[1]},n.isCombinedCharacter=function(t){return-1!==e.indexOf(t)};var o={addChars:function(t){if(t){var e;this.chars||(this.chars=[]);var r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},addFonts:function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);if(!document.body)return this.isLoaded=!0,t.list.forEach((function(t){t.helper=a(t),t.cache={}})),void(this.fonts=t.list);var r,i=t.list,n=i.length,o=n;for(r=0;r<n;r+=1){var h,l,p=!0;if(i[r].loaded=!1,i[r].monoCase=s(i[r].fFamily,"monospace"),i[r].sansCase=s(i[r].fFamily,"sans-serif"),i[r].fPath){if("p"===i[r].fOrigin||3===i[r].origin){if((h=document.querySelectorAll('style[f-forigin="p"][f-family="'+i[r].fFamily+'"], style[f-origin="3"][f-family="'+i[r].fFamily+'"]')).length>0&&(p=!1),p){var f=createTag("style");f.setAttribute("f-forigin",i[r].fOrigin),f.setAttribute("f-origin",i[r].origin),f.setAttribute("f-family",i[r].fFamily),f.type="text/css",f.innerText="@font-face {font-family: "+i[r].fFamily+"; font-style: normal; src: url('"+i[r].fPath+"');}",e.appendChild(f)}}else if("g"===i[r].fOrigin||1===i[r].origin){for(h=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),l=0;l<h.length;l+=1)-1!==h[l].href.indexOf(i[r].fPath)&&(p=!1);if(p){var m=createTag("link");m.setAttribute("f-forigin",i[r].fOrigin),m.setAttribute("f-origin",i[r].origin),m.type="text/css",m.rel="stylesheet",m.href=i[r].fPath,document.body.appendChild(m)}}else if("t"===i[r].fOrigin||2===i[r].origin){for(h=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),l=0;l<h.length;l+=1)i[r].fPath===h[l].src&&(p=!1);if(p){var c=createTag("link");c.setAttribute("f-forigin",i[r].fOrigin),c.setAttribute("f-origin",i[r].origin),c.setAttribute("rel","stylesheet"),c.setAttribute("href",i[r].fPath),e.appendChild(c)}}}else i[r].loaded=!0,o-=1;i[r].helper=a(i[r],e),i[r].cache={},this.fonts.push(i[r])}0===o?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},getCharData:function(e,r,i){for(var s=0,a=this.chars.length;s<a;){if(this.chars[s].ch===e&&this.chars[s].style===r&&this.chars[s].fFamily===i)return this.chars[s];s+=1}return("string"==typeof e&&13!==e.charCodeAt(0)||!e)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",e,r,i)),t},getFontByName:function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},measureText:function(t,e,r){var i=this.getFontByName(e),s=t.charCodeAt(0);if(!i.cache[s+1]){var a=i.helper;if(" "===t){var n=a.measureText("|"+t+"|"),o=a.measureText("||");i.cache[s+1]=(n-o)/100}else i.cache[s+1]=a.measureText(t)/100}return i.cache[s+1]*r},checkLoadedFonts:function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)},setIsLoaded:function(){this.isLoaded=!0}};return n.prototype=o,n}();function RenderableElement(){}RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(t.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}});return function(e){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new t(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}return null}}}(),ExpressionPropertyInterface=function(){var t={pv:0,v:0,mult:1},e={pv:[0,0,0],v:[0,0,0],mult:1};function r(t,e,r){Object.defineProperty(t,"velocity",{get:function(){return e.getVelocityAtTime(e.comp.currentFrame)}}),t.numKeys=e.keyframes?e.keyframes.length:0,t.key=function(i){if(!t.numKeys)return 0;var s="";s="s"in e.keyframes[i-1]?e.keyframes[i-1].s:"e"in e.keyframes[i-2]?e.keyframes[i-2].e:e.keyframes[i-2].s;var a="unidimensional"===r?new Number(s):Object.assign({},s);return a.time=e.keyframes[i-1].t/e.elem.comp.globalData.frameRate,a.value="unidimensional"===r?s[0]:s,a},t.valueAtTime=e.getValueAtTime,t.speedAtTime=e.getSpeedAtTime,t.velocityAtTime=e.getVelocityAtTime,t.propertyGroup=e.propertyGroup}function i(){return t}return function(s){return s?"unidimensional"===s.propType?function(e){e&&"pv"in e||(e=t);var i=1/e.mult,s=e.pv*i,a=new Number(s);return a.value=s,r(a,e,"unidimensional"),function(){return e.k&&e.getValue(),s=e.v*i,a.value!==s&&((a=new Number(s)).value=s,r(a,e,"unidimensional")),a}}(s):function(t){t&&"pv"in t||(t=e);var i=1/t.mult,s=t.data&&t.data.l||t.pv.length,a=createTypedArray("float32",s),n=createTypedArray("float32",s);return a.value=n,r(a,t,"multidimensional"),function(){t.k&&t.getValue();for(var e=0;e<s;e+=1)n[e]=t.v[e]*i,a[e]=n[e];return a}}(s):i}}(),TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity;default:return null}}var r,i,s,a;return Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p?a=ExpressionPropertyInterface(t.p):(r=ExpressionPropertyInterface(t.px),i=ExpressionPropertyInterface(t.py),t.pz&&(s=ExpressionPropertyInterface(t.pz))),Object.defineProperty(e,"position",{get:function(){return t.p?a():[r(),i(),s?s():0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},LayerExpressionInterface=function(){function t(t){var e=new Matrix;void 0!==t?this._elem.finalTransform.mProp.getValueAtTime(t).clone(e):this._elem.finalTransform.mProp.applyToMatrix(e);return e}function e(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.applyPoint(r,t)}function r(t,e){var r=this.getMatrix(e);return this.applyPoint(r,t)}function i(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.invertPoint(r,t)}function s(t,e){var r=this.getMatrix(e);return this.invertPoint(r,t)}function a(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.applyToPointArray(e[0],e[1],e[2]||0)}function n(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.inversePoint(e)}function o(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function h(){return[1,1,1,1]}return function(l){var p;function f(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return f.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return p;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return f.effect;case"ADBE Text Properties":return f.textInterface;default:return null}}f.getMatrix=t,f.invertPoint=n,f.applyPoint=a,f.toWorld=r,f.toWorldVec=e,f.fromWorld=s,f.fromWorldVec=i,f.toComp=r,f.fromComp=o,f.sampleImage=h,f.sourceRectAtTime=l.sourceRectAtTime.bind(l),f._elem=l;var m=getDescriptor(p=TransformExpressionInterface(l.finalTransform.mProp),"anchorPoint");return Object.defineProperties(f,{hasParent:{get:function(){return l.hierarchy.length}},parent:{get:function(){return l.hierarchy[0].layerInterface}},rotation:getDescriptor(p,"rotation"),scale:getDescriptor(p,"scale"),position:getDescriptor(p,"position"),opacity:getDescriptor(p,"opacity"),anchorPoint:m,anchor_point:m,transform:{get:function(){return p}},active:{get:function(){return l.isInRange}}}),f.startTime=l.data.st,f.index=l.data.ind,f.source=l.data.refId,f.height=0===l.data.ty?l.data.h:100,f.width=0===l.data.ty?l.data.w:100,f.inPoint=l.data.ip/l.comp.globalData.frameRate,f.outPoint=l.data.op/l.comp.globalData.frameRate,f._name=l.data.nm,f.registerMaskInterface=function(t){f.mask=new MaskManagerInterface(t,l)},f.registerEffectsInterface=function(t){f.effect=t},f}}(),propertyGroupFactory=function(t,e){return function(r){return(r=void 0===r?1:r)<=0?t:e(r-1)}},PropertyInterface=function(t,e){var r={_name:t};return function(t){return(t=void 0===t?1:t)<=0?r:e(t-1)}},EffectsExpressionInterface=function(){function t(r,i,s,a){function n(t){for(var e=r.ef,i=0,s=e.length;i<s;){if(t===e[i].nm||t===e[i].mn||t===e[i].ix)return 5===e[i].ty?l[i]:l[i]();i+=1}throw new Error}var o,h=propertyGroupFactory(n,s),l=[],p=r.ef.length;for(o=0;o<p;o+=1)5===r.ef[o].ty?l.push(t(r.ef[o],i.effectElements[o],i.effectElements[o].propertyGroup,a)):l.push(e(i.effectElements[o],r.ef[o].ty,a,h));return"ADBE Color Control"===r.mn&&Object.defineProperty(n,"color",{get:function(){return l[0]()}}),Object.defineProperties(n,{numProperties:{get:function(){return r.np}},_name:{value:r.nm},propertyGroup:{value:h}}),n.enabled=0!==r.en,n.active=n.enabled,n}function e(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(PropertyInterface("",i)),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return{createEffectsInterface:function(e,r){if(e.effectsManager){var i,s=[],a=e.data.ef,n=e.effectsManager.effectElements.length;for(i=0;i<n;i+=1)s.push(t(a[i],e.effectsManager.effectElements[i],r,e));var o=e.data.ef||[],h=function(t){for(i=0,n=o.length;i<n;){if(t===o[i].nm||t===o[i].mn||t===o[i].ix)return s[i];i+=1}return null};return Object.defineProperty(h,"numProperties",{get:function(){return o.length}}),h}return null}}}(),CompExpressionInterface=function(t){function e(e){for(var r=0,i=t.layers.length;r<i;){if(t.layers[r].nm===e||t.layers[r].ind===e)return t.elements[r].layerInterface;r+=1}return null}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.data.h||t.globalData.compSize.h,e.width=t.data.w||t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e.displayStartTime=0,e.numLayers=t.layers.length,e},ShapePathInterface=function(t,e,r){var i=e.sh;function s(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?s.path:null}var a=propertyGroupFactory(s,r);return i.setGroupProperty(PropertyInterface("Path",a)),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn},propertyGroup:{value:r}}),s},ShapeExpressionInterface=function(){function t(t,o,c){var d,u=[],y=t?t.length:0;for(d=0;d<y;d+=1)"gr"===t[d].ty?u.push(e(t[d],o[d],c)):"fl"===t[d].ty?u.push(r(t[d],o[d],c)):"st"===t[d].ty?u.push(a(t[d],o[d],c)):"tm"===t[d].ty?u.push(n(t[d],o[d],c)):"tr"===t[d].ty||("el"===t[d].ty?u.push(h(t[d],o[d],c)):"sr"===t[d].ty?u.push(l(t[d],o[d],c)):"sh"===t[d].ty?u.push(ShapePathInterface(t[d],o[d],c)):"rc"===t[d].ty?u.push(p(t[d],o[d],c)):"rd"===t[d].ty?u.push(f(t[d],o[d],c)):"rp"===t[d].ty?u.push(m(t[d],o[d],c)):"gf"===t[d].ty?u.push(i(t[d],o[d],c)):u.push(s(t[d],o[d])));return u}function e(e,r,i){var s=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return s.content;default:return s.transform}};s.propertyGroup=propertyGroupFactory(s,i);var a=function(e,r,i){var s,a=function(t){for(var e=0,r=s.length;e<r;){if(s[e]._name===t||s[e].mn===t||s[e].propertyIndex===t||s[e].ix===t||s[e].ind===t)return s[e];e+=1}return"number"==typeof t?s[t-1]:null};a.propertyGroup=propertyGroupFactory(a,i),s=t(e.it,r.it,a.propertyGroup),a.numProperties=s.length;var n=o(e.it[e.it.length-1],r.it[r.it.length-1],a.propertyGroup);return a.transform=n,a.propertyIndex=e.cix,a._name=e.nm,a}(e,r,s.propertyGroup),n=o(e.it[e.it.length-1],r.it[r.it.length-1],s.propertyGroup);return s.content=a,s.transform=n,Object.defineProperty(s,"_name",{get:function(){return e.nm}}),s.numProperties=e.np,s.propertyIndex=e.ix,s.nm=e.nm,s.mn=e.mn,s}function r(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function i(t,e,r){function i(t){return"Start Point"===t||"start point"===t?i.startPoint:"End Point"===t||"end point"===t?i.endPoint:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{startPoint:{get:ExpressionPropertyInterface(e.s)},endPoint:{get:ExpressionPropertyInterface(e.e)},opacity:{get:ExpressionPropertyInterface(e.o)},type:{get:function(){return"a"}},_name:{value:t.nm},mn:{value:t.mn}}),e.s.setGroupProperty(PropertyInterface("Start Point",r)),e.e.setGroupProperty(PropertyInterface("End Point",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function s(){return function(){return null}}function a(t,e,r){var i,s=propertyGroupFactory(l,r),a=propertyGroupFactory(h,s);function n(r){Object.defineProperty(h,t.d[r].nm,{get:ExpressionPropertyInterface(e.d.dataProps[r].p)})}var o=t.d?t.d.length:0,h={};for(i=0;i<o;i+=1)n(i),e.d.dataProps[i].p.setGroupProperty(a);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:null}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",s)),e.o.setGroupProperty(PropertyInterface("Opacity",s)),e.w.setGroupProperty(PropertyInterface("Stroke Width",s)),l}function n(t,e,r){function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:null}var s=propertyGroupFactory(i,r);return i.propertyIndex=t.ix,e.s.setGroupProperty(PropertyInterface("Start",s)),e.e.setGroupProperty(PropertyInterface("End",s)),e.o.setGroupProperty(PropertyInterface("Offset",s)),i.propertyIndex=t.ix,i.propertyGroup=r,Object.defineProperties(i,{start:{get:ExpressionPropertyInterface(e.s)},end:{get:ExpressionPropertyInterface(e.e)},offset:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm}}),i.mn=t.mn,i}function o(t,e,r){function i(e){return t.a.ix===e||"Anchor Point"===e?i.anchorPoint:t.o.ix===e||"Opacity"===e?i.opacity:t.p.ix===e||"Position"===e?i.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:t.s.ix===e||"Scale"===e?i.scale:t.sk&&t.sk.ix===e||"Skew"===e?i.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?i.skewAxis:null}var s=propertyGroupFactory(i,r);return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",s)),e.transform.mProps.p.setGroupProperty(PropertyInterface("Position",s)),e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",s)),e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",s)),e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",s)),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",s)),e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",s))),e.transform.op.setGroupProperty(PropertyInterface("Opacity",s)),Object.defineProperties(i,{opacity:{get:ExpressionPropertyInterface(e.transform.mProps.o)},position:{get:ExpressionPropertyInterface(e.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(e.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(e.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(e.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(e.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(e.transform.mProps.sa)},_name:{value:t.nm}}),i.ty="tr",i.mn=t.mn,i.propertyGroup=r,i}function h(t,e,r){function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:null}var s=propertyGroupFactory(i,r);i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(PropertyInterface("Size",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),Object.defineProperties(i,{size:{get:ExpressionPropertyInterface(a.s)},position:{get:ExpressionPropertyInterface(a.p)},_name:{value:t.nm}}),i.mn=t.mn,i}function l(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:null:i.innerRadius}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(PropertyInterface("Outer Radius",s)),a.os.setGroupProperty(PropertyInterface("Outer Roundness",s)),a.pt.setGroupProperty(PropertyInterface("Points",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),t.ir&&(a.ir.setGroupProperty(PropertyInterface("Inner Radius",s)),a.is.setGroupProperty(PropertyInterface("Inner Roundness",s))),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},rotation:{get:ExpressionPropertyInterface(a.r)},points:{get:ExpressionPropertyInterface(a.pt)},outerRadius:{get:ExpressionPropertyInterface(a.or)},outerRoundness:{get:ExpressionPropertyInterface(a.os)},innerRadius:{get:ExpressionPropertyInterface(a.ir)},innerRoundness:{get:ExpressionPropertyInterface(a.is)},_name:{value:t.nm}}),i.mn=t.mn,i}function p(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?i.size:null}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(PropertyInterface("Position",s)),a.s.setGroupProperty(PropertyInterface("Size",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},roundness:{get:ExpressionPropertyInterface(a.r)},size:{get:ExpressionPropertyInterface(a.s)},_name:{value:t.nm}}),i.mn=t.mn,i}function f(t,e,r){function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(PropertyInterface("Radius",s)),Object.defineProperties(i,{radius:{get:ExpressionPropertyInterface(a.rd)},_name:{value:t.nm}}),i.mn=t.mn,i}function m(t,e,r){function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.c.setGroupProperty(PropertyInterface("Copies",s)),a.o.setGroupProperty(PropertyInterface("Offset",s)),Object.defineProperties(i,{copies:{get:ExpressionPropertyInterface(a.c)},offset:{get:ExpressionPropertyInterface(a.o)},_name:{value:t.nm}}),i.mn=t.mn,i}return function(e,r,i){var s;function a(t){if("number"==typeof t)return 0===(t=void 0===t?1:t)?i:s[t-1];for(var e=0,r=s.length;e<r;){if(s[e]._name===t)return s[e];e+=1}return null}return a.propertyGroup=propertyGroupFactory(a,(function(){return i})),s=t(e,r,a.propertyGroup),a.numProperties=s.length,a._name="Contents",a}}(),TextExpressionInterface=function(t){var e,r;function i(t){return"ADBE Text Document"===t?i.sourceText:null}return Object.defineProperty(i,"sourceText",{get:function(){t.textProperty.getValue();var i=t.textProperty.currentData.t;return i!==e&&(t.textProperty.currentData.t=e,(r=new String(i)).value=i||new String(i)),r}}),i},getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return blendModeEnums[t]||""}),blendModeEnums;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var r,i=t.ef||[];this.effectElements=[];var s,a=i.length;for(r=0;r<a;r+=1)s=new GroupEffect(i[r],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}function BaseElement(){}function FrameElement(){}function _typeof$2(t){return _typeof$2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$2(t)}extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){var r;this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}},BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}};var FootageInterface=(dataInterfaceFactory=function(t){function e(t){return"Outline"===t?e.outlineInterface():null}return e._name="Outline",e.outlineInterface=function(t){var e="",r=t.getFootageData();function i(t){if(r[t])return e=t,"object"===_typeof$2(r=r[t])?i:r;var s=t.indexOf(e);if(-1!==s){var a=parseInt(t.substr(s+e.length),10);return"object"===_typeof$2(r=r[a])?i:r}return""}return function(){return e="",r=t.getFootageData(),i}}(t),e},function(t){function e(t){return"Data"===t?e.dataInterface:null}return e._name="Data",e.dataInterface=dataInterfaceFactory(t),e}),dataInterfaceFactory;function FootageElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,r)}function AudioElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,r),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=PropertyFactory.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}function BaseRenderer(){}function TransformElement(){}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s,a=this.globalData.defs,n=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(n),this.solidPath="";var o,h,l,p,f,m,c=this.masksProperties,d=0,u=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<n;i+=1)if(("a"!==c[i].mode&&"n"!==c[i].mode||c[i].inv||100!==c[i].o.k||c[i].o.x)&&(g="mask",v="mask"),"s"!==c[i].mode&&"i"!==c[i].mode||0!==d?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),u.push(l)),s=createNS("path"),"n"===c[i].mode)this.viewData[i]={op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),elem:s,lastPath:""},a.appendChild(s);else{var b;if(d+=1,s.setAttribute("fill","s"===c[i].mode?"#000000":"#ffffff"),s.setAttribute("clip-rule","nonzero"),0!==c[i].x.k?(g="mask",v="mask",m=PropertyFactory.getProp(this.element,c[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(f=createNS("feMorphology")).setAttribute("operator","erode"),f.setAttribute("in","SourceGraphic"),f.setAttribute("radius","0"),p.appendChild(f),a.appendChild(p),s.setAttribute("stroke","s"===c[i].mode?"#000000":"#ffffff")):(f=null,m=null),this.storedData[i]={elem:s,x:m,expan:f,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"===c[i].mode){h=u.length;var E=createNS("g");for(o=0;o<h;o+=1)E.appendChild(u[o]);var P=createNS("mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+d),P.appendChild(s),a.appendChild(P),E.setAttribute("mask","url("+getLocationHref()+"#"+y+"_"+d+")"),u.length=0,u.push(E)}else u.push(s);c[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:s,lastPath:"",op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(c[i],this.viewData[i].prop.v,this.viewData[i])}for(this.maskElement=createNS(g),n=u.length,i=0;i<n;i+=1)this.maskElement.appendChild(u[i]);d>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+getLocationHref()+"#"+y+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){this.layerInterface=FootageInterface(this)},FootageElement.prototype.getFootageData=function(){return this.footageData},AudioElement.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var r=this._volume*this._volumeMultiplier;this._previousVolume!==r&&(this._previousVolume=r,this.audio.volume(r))},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(t){this.audio.rate(t)},AudioElement.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){},BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:default:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(t){return new AudioElement(t,this.globalData,this)},BaseRenderer.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){var e;this.completeLayers=!1;var r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id===t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.getElementByPath=function(t){var e,r=t.shift();if("number"==typeof r)e=this.elements[r];else{var i,s=this.elements.length;for(i=0;i<s;i+=1)if(this.elements[i].data.nm===r){e=this.elements[i];break}}return 0===t.length?e:e.getElementByPath(t)},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r,i=!0,s=this.comp;i;)s.finalTransform?(s.data.hasMask&&e.splice(0,0,s.finalTransform),s=s.comp):i=!1;var a,n=e.length;for(r=0;r<n;r+=1)a=e[r].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e+=1)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+getLocationHref()+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&s>1&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var filtersFactory=function(){var t={};return t.createFilter=function(t,e){var r=createNS("filter");r.setAttribute("id",t),!0!==e&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%"));return r},t.createAlphaToLuminanceFilter=function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t},t}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}();function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),(r=createNS("feColorMatrix")).setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i,s=createNS("feMerge");t.appendChild(s),(i=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),s.appendChild(i),(i=createNS("feMergeNode")).setAttribute("in","f2"),s.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var i=createNS("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var s=createNS("feFuncR");s.setAttribute("type","table"),i.appendChild(s),this.feFuncR=s;var a=createNS("feFuncG");a.setAttribute("type","table"),i.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,i=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function SVGDropShadowEffect(t,e){var r=e.container.globalData.renderConfig.filterSize;t.setAttribute("x",r.x),t.setAttribute("y",r.y),t.setAttribute("width",r.width),t.setAttribute("height",r.height),this.filterManager=e;var i=createNS("feGaussianBlur");i.setAttribute("in","SourceAlpha"),i.setAttribute("result","drop_shadow_1"),i.setAttribute("stdDeviation","0"),this.feGaussianBlur=i,t.appendChild(i);var s=createNS("feOffset");s.setAttribute("dx","25"),s.setAttribute("dy","0"),s.setAttribute("in","drop_shadow_1"),s.setAttribute("result","drop_shadow_2"),this.feOffset=s,t.appendChild(s);var a=createNS("feFlood");a.setAttribute("flood-color","#00ff00"),a.setAttribute("flood-opacity","1"),a.setAttribute("result","drop_shadow_3"),this.feFlood=a,t.appendChild(a);var n=createNS("feComposite");n.setAttribute("in","drop_shadow_3"),n.setAttribute("in2","drop_shadow_2"),n.setAttribute("operator","in"),n.setAttribute("result","drop_shadow_4"),t.appendChild(n);var o,h=createNS("feMerge");t.appendChild(h),o=createNS("feMergeNode"),h.appendChild(o),(o=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=h,this.originalNodeAdded=!1,h.appendChild(o)}SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=(r=this.filterManager.effectElements[0].p.v-1)+1,(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+getLocationHref()+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){var e;this.initialized||this.initialize();var r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=.01*Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),o=.01*Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),h=i.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),f=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01,m=Math.floor(p/f);for(l=0;l<m;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(255*c[0])+","+bmFloor(255*c[1])+","+bmFloor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),f=0,m=s-i,c=e-t;o<=256;)n=(a=o/256)<=h?c<0?s:i:a>=l?c<0?i:s:i+m*Math.pow((a-t)/c,1/r),p[f]=n,f+=1,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGGaussianBlurEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");t.appendChild(r),this.feGaussianBlur=r}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}};var registeredEffects={};function SVGEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0,s=createElementID(),a=filtersFactory.createFilter(s,!0),n=0;for(this.filters=[],e=0;e<i;e+=1){r=null;var o=t.data.ef[e].ty;if(registeredEffects[o])r=new(0,registeredEffects[o].effect)(a,t.effectsManager.effectElements[e],t),registeredEffects[o].countsAsEffect&&(n+=1);20===t.data.ef[e].ty?(n+=1,r=new SVGTintFilter(a,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(n+=1,r=new SVGFillFilter(a,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?r=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(n+=1,r=new SVGTritoneFilter(a,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(n+=1,r=new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(n+=1,r=new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty?r=new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t):29===t.data.ef[e].ty&&(n+=1,r=new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),r&&this.filters.push(r)}n&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+getLocationHref()+"#"+s+")")),this.filters.length&&t.addRenderableComponent(this)}function registerEffect(t,e,r){registeredEffects[t]={effect:e,countsAsEffect:r}}function SVGBaseElement(){}function HierarchyElement(){}function RenderableDOMElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ProcessedElement(t,e){this.elem=t,this.pos=e}function IShapeElement(){}SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,r,i=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),s.appendChild(this.layerElement),i=s,this.globalData.defs.appendChild(s),featureSupport.maskType||1!=this.data.td||(s.setAttribute("mask-type","luminance"),t=createElementID(),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(r=createNS("g")).appendChild(this.layerElement),i=r,s.appendChild(r),r.setAttribute("filter","url("+getLocationHref()+"#"+t+")"))}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n),t=createElementID(),e=filtersFactory.createFilter(t);var o=createNS("feComponentTransfer");o.setAttribute("in","SourceGraphic"),e.appendChild(o);var h=createNS("feFuncA");h.setAttribute("type","table"),h.setAttribute("tableValues","1.0 0.0"),o.appendChild(h),this.globalData.defs.appendChild(e);var l=createNS("rect");l.setAttribute("width",this.comp.data.w),l.setAttribute("height",this.comp.data.h),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("fill","#ffffff"),l.setAttribute("opacity","0"),n.setAttribute("filter","url("+getLocationHref()+"#"+t+")"),n.appendChild(l),n.appendChild(this.layerElement),i=n,featureSupport.maskType||(a.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),r=createNS("g"),n.appendChild(l),r.appendChild(this.layerElement),i=r,n.appendChild(r)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),i=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var p=createNS("clipPath"),f=createNS("path");f.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var m=createElementID();if(p.setAttribute("id",m),p.appendChild(f),this.globalData.defs.appendChild(p),this.checkMasks()){var c=createNS("g");c.setAttribute("clip-path","url("+getLocationHref()+"#"+m+")"),c.appendChild(this.layerElement),this.transformedElement=c,i?i.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+m+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+getLocationHref()+"#"+t+")")}},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;t>=0&&!this.shapeModifiers[t].processShapes(this._isFirstFrame);t-=1);}},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}};var lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"};function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function DashProperty(t,e,r,i){var s;this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGNoStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=r}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!==this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),extendPrototype([DynamicPropertyContainer],SVGNoStyleData),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(Math.abs(t[4*r]-t[4*e+2*r])>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+getLocationHref()+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+getLocationHref()+"#"+o+")"),"gs"===t.ty&&(n.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),n.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),1===t.lj&&n.setAttribute("stroke-miterlimit",t.ml)),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},SVGElementsRenderer=function(){var t=new Matrix,e=new Matrix;function r(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function i(){}function s(r,i,s){var a,n,o,h,l,p,f,m,c,d,u,y=i.styles.length,g=i.lvl;for(p=0;p<y;p+=1){if(h=i.sh._mdf||s,i.styles[p].lvl<g){for(m=e.reset(),d=g-i.styles[p].lvl,u=i.transformers.length-1;!h&&d>0;)h=i.transformers[u].mProps._mdf||h,d-=1,u-=1;if(h)for(d=g-i.styles[p].lvl,u=i.transformers.length-1;d>0;)c=i.transformers[u].mProps.v.props,m.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),d-=1,u-=1}else m=t;if(n=(f=i.sh.paths)._length,h){for(o="",a=0;a<n;a+=1)(l=f.shapes[a])&&l._length&&(o+=buildShapeString(l,l._length,l.c,m));i.caches[p]=o}else o=i.caches[p];i.styles[p].d+=!0===r.hd?"":o,i.styles[p]._mdf=h||i.styles[p]._mdf}}function a(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function n(t,e,r){o(t,e,r),h(t,e,r)}function o(t,e,r){var i,s,a,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,f=e.e.v;if(e.o._mdf||r){var m="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(m,e.o.v)}if(e.s._mdf||r){var c=1===t.t?"x1":"cx",d="x1"===c?"y1":"cy";h.setAttribute(c,p[0]),h.setAttribute(d,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(c,p[0]),e.of.setAttribute(d,p[1]))}if(e.g._cmdf||r){i=e.cst;var u=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",u[4*s]+"%"),n.setAttribute("stop-color","rgb("+u[4*s+1]+","+u[4*s+2]+","+u[4*s+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",f[0]),h.setAttribute("y2",f[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",f[0]),e.of.setAttribute("y2",f[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-f[0],2)+Math.pow(p[1]-f[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-f[0],2)+Math.pow(p[1]-f[1],2)));var g=Math.atan2(f[1]-p[1],f[0]-p[0]),v=e.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var b=o*v,E=Math.cos(g+e.a.v)*b+p[0],P=Math.sin(g+e.a.v)*b+p[1];h.setAttribute("fx",E),h.setAttribute("fy",P),l&&!e.g._collapsable&&(e.of.setAttribute("fx",E),e.of.setAttribute("fy",P))}}function h(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){switch(t.ty){case"fl":return a;case"gf":return o;case"gs":return n;case"st":return h;case"sh":case"el":case"rc":case"sr":return s;case"tr":return r;case"no":return i;default:return null}}}}();function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,n.length=0,t=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);n.length>1&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;if("st"===t.ty)r=new SVGStrokeStyleData(this,t,i);else if("fl"===t.ty)r=new SVGFillStyleData(this,t,i);else if("gf"===t.ty||"gs"===t.ty){r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+getLocationHref()+"#"+r.maskId+")"))}else"no"===t.ty&&(r=new SVGNoStyleData(this,t,i));return"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),s.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,l,p,f,m,c=[].concat(a),d=t.length-1,u=[],y=[];for(o=d;o>=0;o-=1){if((m=this.searchProcessedElement(t[o]))?e[o]=r[m-1]:t[o]._render=n,"fl"===t[o].ty||"st"===t[o].ty||"gf"===t[o].ty||"gs"===t[o].ty||"no"===t[o].ty)m?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&e[o].style.pElem.parentNode!==i&&i.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"===t[o].ty){if(m)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,c,n),t[o]._render&&e[o].gr.parentNode!==i&&i.appendChild(e[o].gr)}else"tr"===t[o].ty?(m||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,c.push(p)):"sh"===t[o].ty||"rc"===t[o].ty||"el"===t[o].ty||"sr"===t[o].ty?(m||(e[o]=this.createShapeElement(t[o],c,s)),this.setElementStyles(e[o])):"tm"===t[o].ty||"rd"===t[o].ty||"ms"===t[o].ty||"pb"===t[o].ty?(m?(f=e[o]).closed=!1:((f=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=f,this.shapeModifiers.push(f)),y.push(f)):"rp"===t[o].ty&&(m?(f=e[o]).closed=!0:(f=ShapeModifiers.getModifier(t[o].ty),e[o]=f,f.init(this,t,o,e),this.shapeModifiers.push(f),n=!1),y.push(f));this.addProcessedElement(t[o],o+1)}for(d=u.length,o=0;o<d;o+=1)u[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){var t;this.renderModifiers();var e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==r&&(this.sc=r,this._mdf.sc=!0,n=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,n=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this._mdf.p=!0,n=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{var i;this.lock=!0,this._mdf=!1;var s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&!(r===i-1||t[r+1].t>e);)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r,i=[],s=0,a=t.length,n=!1;s<a;)e=t.charCodeAt(s),FontManager.isCombinedCharacter(e)?i[i.length-1]+=t.charAt(s):e>=55296&&e<=56319?(r=t.charCodeAt(s+1))>=56320&&r<=57343?(n||FontManager.isModifier(e,r)?(i[i.length-1]+=t.substr(s,2),n=!1):i.push(t.substr(s,2)),s+=1):i.push(t.charAt(s)):e>56319?(r=t.charCodeAt(s+1),FontManager.isZeroWidthJoiner(e,r)?(n=!0,i[i.length-1]+=t.substr(s,2),s+=1):i.push(t.charAt(s))):FontManager.isZeroWidthJoiner(e)?(i[i.length-1]+=t.charAt(s),n=!0):i.push(t.charAt(s)),s+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],f=0,m=l.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),E=0,P=getFontProperties(b);t.fWeight=P.weight,t.fStyle=P.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var x,S=t.tr/1e3*t.finalSize;if(t.sz)for(var C,_,A=!0,T=t.sz[0],k=t.sz[1];A;){C=0,g=0,r=(_=this.buildFinalText(t.t)).length,S=t.tr/1e3*t.finalSize;var D=-1;for(e=0;e<r;e+=1)x=_[e].charCodeAt(0),i=!1," "===_[e]?D=e:13!==x&&3!==x||(g=0,i=!0,C+=t.finalLineHeight||1.2*t.finalSize),h.chars?(o=h.getCharData(_[e],b.fStyle,b.fFamily),E=i?0:o.w*t.finalSize/100):E=h.measureText(_[e],t.f,t.finalSize),g+E>T&&" "!==_[e]?(-1===D?r+=1:e=D,C+=t.finalLineHeight||1.2*t.finalSize,_.splice(e,D===e?1:0,"\r"),D=-1,g=0):(g+=E,g+=S);C+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&k<C?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=_,r=t.finalText.length,A=!1)}g=-S,E=0;var M,F=0;for(e=0;e<r;e+=1)if(i=!1,13===(x=(M=t.finalText[e]).charCodeAt(0))||3===x?(F=0,y.push(g),v=g>v?g:v,g=-2*S,s="",i=!0,u+=1):s=M,h.chars?(o=h.getCharData(M,b.fStyle,h.getFontByName(t.f).fFamily),E=i?0:o.w*t.finalSize/100):E=h.measureText(s,t.f,t.finalSize)," "===M?F+=E+S:(g+=E+S+F,F=0),p.push({l:E,an:E,add:c,n:i,anIndexes:[],val:s,line:u,animatorJustifyOffset:0}),2==m){if(c+=E,""===s||" "===s||e===r-1){for(""!==s&&" "!==s||(c-=E);d<=e;)p[d].an=c,p[d].ind=f,p[d].extra=E,d+=1;f+=1,c=0}}else if(3==m){if(c+=E,""===s||e===r-1){for(""===s&&(c-=E);d<=e;)p[d].an=c,p[d].ind=f,p[d].extra=E,d+=1;c=0,f+=1}}else p[f].ind=f,p[f].extra=0,f+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var w,I,V,B,R=l.a;n=R.length;var L=[];for(a=0;a<n;a+=1){for((w=R[a]).a.sc&&(t.strokeColorAnim=!0),w.a.sw&&(t.strokeWidthAnim=!0),(w.a.fc||w.a.fh||w.a.fs||w.a.fb)&&(t.fillColorAnim=!0),B=0,V=w.s.b,e=0;e<r;e+=1)(I=p[e]).anIndexes[a]=B,(1==V&&""!==I.val||2==V&&""!==I.val&&" "!==I.val||3==V&&(I.n||" "==I.val||e==r-1)||4==V&&(I.n||e==r-1))&&(1===w.s.rn&&L.push(B),B+=1);l.a[a].s.totalChars=B;var G,z=-1;if(1===w.s.rn)for(e=0;e<r;e+=1)z!=(I=p[e]).anIndexes[a]&&(z=I.anIndexes[a],G=L.splice(Math.floor(Math.random()*L.length),1)[0]),I.anIndexes[a]=G}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var t=Math.max,e=Math.min,r=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(t,e.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(i){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var s=0,a=0,n=1,o=1;this.ne.v>0?s=this.ne.v/100:a=-this.ne.v/100,this.xe.v>0?n=1-this.xe.v/100:o=1+this.xe.v/100;var h=BezierFactory.getBezierEasing(s,a,n,o).get,l=0,p=this.finalS,f=this.finalE,m=this.data.sh;if(2===m)l=h(l=f===p?i>=f?1:0:t(0,e(.5/(f-p)+(i-p)/(f-p),1)));else if(3===m)l=h(l=f===p?i>=f?0:1:1-t(0,e(.5/(f-p)+(i-p)/(f-p),1)));else if(4===m)f===p?l=0:(l=t(0,e(.5/(f-p)+(i-p)/(f-p),1)))<.5?l*=2:l=1-2*(l-.5),l=h(l);else if(5===m){if(f===p)l=0;else{var c=f-p,d=-c/2+(i=e(t(0,i+.5-p),f-p)),u=c/2;l=Math.sqrt(1-d*d/(u*u))}l=h(l)}else 6===m?(f===p?l=0:(i=e(t(0,i+.5-p),f-p),l=(1+Math.cos(Math.PI+2*Math.PI*i/(f-p)))/2),l=h(l)):(i>=r(p)&&(l=t(0,e(i-p<0?e(f,1)-(p-i):f-i,1))),l=h(l));if(100!==this.sm.v){var y=.01*this.sm.v;0===y&&(y=1e-8);var g=.5-.5*y;l<g?l=0:(l=(l-g)/y)>1&&(l=1)}return l*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(i>s){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}();function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function ITextElement(){}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,l,p,f,m,c,d,u,y,g,v,b,E,P=this._moreOptions.alignment.v,x=this._animatorsData,S=this._textData,C=this.mHelper,_=this._renderType,A=this.renderedLetters.length,T=t.l;if(this._hasMaskedPath){if(E=this._pathData.m,!this._pathData.n||this._pathData._mdf){var k,D=E.v;for(this._pathData.r.v&&(D=D.reverse()),n={tLength:0,segments:[]},a=D._length-1,g=0,s=0;s<a;s+=1)k=bez.buildBezierData(D.v[s],D.v[s+1],[D.o[s][0]-D.v[s][0],D.o[s][1]-D.v[s][1]],[D.i[s+1][0]-D.v[s+1][0],D.i[s+1][1]-D.v[s+1][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength;s=a,E.v.c&&(k=bez.buildBezierData(D.v[s],D.v[0],[D.o[s][0]-D.v[s][0],D.o[s][1]-D.v[s][1]],[D.i[0][0]-D.v[0][0],D.i[0][1]-D.v[0][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,m=0,f=1,l=0,p=!0,u=n.segments,o<0&&E.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),f=(d=u[m=u.length-1].points).length-1;o<0;)o+=d[f].partialLength,(f-=1)<0&&(f=(d=u[m-=1].points).length-1);c=(d=u[m].points)[f-1],y=(h=d[f]).partialLength}a=T.length,r=0,i=0;var M,F,w,I,V,B=1.2*t.finalSize*.714,R=!0;w=x.length;var L,G,z,N,O,H,j,q,W,$,Y,X,K=-1,J=o,Z=m,U=f,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(T[s].n){for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1;rt=0,nt=!0}else{for(F=0;F<w;F+=1)(M=x[F].a).t.propType&&(nt&&2===t.j&&(it+=M.t.v*st),(V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars)).length?rt+=M.t.v*V[0]*st:rt+=M.t.v*V*st);nt=!1}for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(C.reset(),N=1,T[s].n)r=0,i+=t.yOffset,i+=R?1:0,o=J,R=!1,this._hasMaskedPath&&(f=U,c=(d=u[m=Z].points)[f-1],y=(h=d[f]).partialLength,l=0),tt="",Y="",W="",X="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==T[s].line){switch(t.j){case 1:o+=g-t.lineWidths[T[s].line];break;case 2:o+=(g-t.lineWidths[T[s].line])/2}Q=T[s].line}K!==T[s].ind&&(T[K]&&(o+=T[K].extra),o+=T[s].an/2,K=T[s].ind),o+=P[0]*T[s].an*.005;var ot=0;for(F=0;F<w;F+=1)(M=x[F].a).p.propType&&((V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars)).length?ot+=M.p.v[0]*V[0]:ot+=M.p.v[0]*V),M.a.propType&&((V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars)).length?ot+=M.a.v[0]*V[0]:ot+=M.a.v[0]*V);for(p=!0,this._pathData.a.v&&(o=.5*T[0].an+(g-this._pathData.f.v-.5*T[0].an-.5*T[T.length-1].an)*K/(a-1),o+=this._pathData.f.v);p;)l+y>=o+ot||!d?(v=(o+ot-l)/h.partialLength,G=c.point[0]+(h.point[0]-c.point[0])*v,z=c.point[1]+(h.point[1]-c.point[1])*v,C.translate(-P[0]*T[s].an*.005,-P[1]*B*.01),p=!1):d&&(l+=h.partialLength,(f+=1)>=d.length&&(f=0,u[m+=1]?d=u[m].points:E.v.c?(f=0,d=u[m=0].points):(l-=h.partialLength,d=null)),d&&(c=h,y=(h=d[f]).partialLength));L=T[s].an/2-T[s].add,C.translate(-L,0,0)}else L=T[s].an/2-T[s].add,C.translate(-L,0,0),C.translate(-P[0]*T[s].an*.005,-P[1]*B*.01,0);for(F=0;F<w;F+=1)(M=x[F].a).t.propType&&(V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?V.length?o+=M.t.v*V[0]:o+=M.t.v*V:V.length?r+=M.t.v*V[0]:r+=M.t.v*V));for(t.strokeWidthAnim&&(H=t.sw||0),t.strokeColorAnim&&(O=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),F=0;F<w;F+=1)(M=x[F].a).a.propType&&((V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars)).length?C.translate(-M.a.v[0]*V[0],-M.a.v[1]*V[1],M.a.v[2]*V[2]):C.translate(-M.a.v[0]*V,-M.a.v[1]*V,M.a.v[2]*V));for(F=0;F<w;F+=1)(M=x[F].a).s.propType&&((V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars)).length?C.scale(1+(M.s.v[0]-1)*V[0],1+(M.s.v[1]-1)*V[1],1):C.scale(1+(M.s.v[0]-1)*V,1+(M.s.v[1]-1)*V,1));for(F=0;F<w;F+=1){if(M=x[F].a,V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars),M.sk.propType&&(V.length?C.skewFromAxis(-M.sk.v*V[0],M.sa.v*V[1]):C.skewFromAxis(-M.sk.v*V,M.sa.v*V)),M.r.propType&&(V.length?C.rotateZ(-M.r.v*V[2]):C.rotateZ(-M.r.v*V)),M.ry.propType&&(V.length?C.rotateY(M.ry.v*V[1]):C.rotateY(M.ry.v*V)),M.rx.propType&&(V.length?C.rotateX(M.rx.v*V[0]):C.rotateX(M.rx.v*V)),M.o.propType&&(V.length?N+=(M.o.v*V[0]-N)*V[0]:N+=(M.o.v*V-N)*V),t.strokeWidthAnim&&M.sw.propType&&(V.length?H+=M.sw.v*V[0]:H+=M.sw.v*V),t.strokeColorAnim&&M.sc.propType)for(q=0;q<3;q+=1)V.length?O[q]+=(M.sc.v[q]-O[q])*V[0]:O[q]+=(M.sc.v[q]-O[q])*V;if(t.fillColorAnim&&t.fc){if(M.fc.propType)for(q=0;q<3;q+=1)V.length?j[q]+=(M.fc.v[q]-j[q])*V[0]:j[q]+=(M.fc.v[q]-j[q])*V;M.fh.propType&&(j=V.length?addHueToRGB(j,M.fh.v*V[0]):addHueToRGB(j,M.fh.v*V)),M.fs.propType&&(j=V.length?addSaturationToRGB(j,M.fs.v*V[0]):addSaturationToRGB(j,M.fs.v*V)),M.fb.propType&&(j=V.length?addBrightnessToRGB(j,M.fb.v*V[0]):addBrightnessToRGB(j,M.fb.v*V))}}for(F=0;F<w;F+=1)(M=x[F].a).p.propType&&(V=x[F].s.getMult(T[s].anIndexes[F],S.a[F].s.totalChars),this._hasMaskedPath?V.length?C.translate(0,M.p.v[1]*V[0],-M.p.v[2]*V[1]):C.translate(0,M.p.v[1]*V,-M.p.v[2]*V):V.length?C.translate(M.p.v[0]*V[0],M.p.v[1]*V[1],-M.p.v[2]*V[2]):C.translate(M.p.v[0]*V,M.p.v[1]*V,-M.p.v[2]*V));if(t.strokeWidthAnim&&(W=H<0?0:H),t.strokeColorAnim&&($="rgb("+Math.round(255*O[0])+","+Math.round(255*O[1])+","+Math.round(255*O[2])+")"),t.fillColorAnim&&t.fc&&(Y="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(C.translate(0,-t.ls),C.translate(0,P[1]*B*.01+i,0),this._pathData.p.v){b=(h.point[1]-c.point[1])/(h.point[0]-c.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<c.point[0]&&(ht+=180),C.rotate(-ht*Math.PI/180)}C.translate(G,z,0),o-=P[0]*T[s].an*.005,T[s+1]&&K!==T[s+1].ind&&(o+=T[s].an/2,o+=.001*t.tr*t.finalSize)}else{switch(C.translate(r,i,0),t.ps&&C.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:C.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line]),0,0);break;case 2:C.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line])/2,0,0)}C.translate(0,-t.ls),C.translate(L,0,0),C.translate(P[0]*T[s].an*.005,P[1]*B*.01,0),r+=T[s].l+.001*t.tr*t.finalSize}"html"===_?tt=C.toCSS():"svg"===_?tt=C.to2dCSS():et=[C.props[0],C.props[1],C.props[2],C.props[3],C.props[4],C.props[5],C.props[6],C.props[7],C.props[8],C.props[9],C.props[10],C.props[11],C.props[12],C.props[13],C.props[14],C.props[15]],X=N}A<=s?(I=new LetterProps(X,W,$,Y,tt,et),this.renderedLetters.push(I),A+=1,this.lettersChangedFlag=!0):(I=this.renderedLetters[s],this.lettersChangedFlag=I.update(X,W,$,Y,tt,et)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)"sh"===e[r].ty&&(i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t));return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){};var emptyShapeData={shapes:[]};function SVGTextLottieElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function ISolidElement(t,e,r){this.initElement(t,e,r)}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGRendererBase(){}function ICompElement(){}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&!1===e.hideOnTransparent),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CVContextData(){var t;this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1;for(this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function CVEffects(){}function CVMaskElement(t,e){var r;this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i=this.masksProperties.length,s=!1;for(r=0;r<i;r+=1)"n"!==this.masksProperties[r].mode&&(s=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);this.hasMasks=s,s&&this.element.addRenderableComponent(this)}function CVBaseElement(){}function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var s,a=4;"rc"===e.ty?a=5:"el"===e.ty?a=6:"sr"===e.ty&&(a=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,a,t);var n,o=r.length;for(s=0;s<o;s+=1)r[s].closed||(n={transforms:i.addTransformSequence(r[s].transforms),trNodes:[]},this.styledShapes.push(n),r[s].elements.push(n))}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CanvasRendererBase(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HBaseElement(){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HybridRendererBase(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextLottieElement.prototype.buildNewText=function(){var t,e;this.addDynamicProperty(this);var r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l=this.mHelper,p=this.data.singleShape,f=0,m=0,c=!0,d=.001*r.tr*r.finalSize;if(!p||h||r.sz){var u,y=this.textSpans.length;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!h||!p||0===t){if(n=y>t?this.textSpans[t].span:createNS(h?"g":"text"),y<=t){if(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=n,h){var g=createNS("g");n.appendChild(g),this.textSpans[t].childSpan=g}this.textSpans[t].span=n,this.layerElement.appendChild(n)}n.style.display="inherit"}if(l.reset(),l.scale(r.finalSize/100,r.finalSize/100),p&&(o[t].n&&(f=-d,m+=r.yOffset,m+=c?1:0,c=!1),this.applyTextPropertiesToMatrix(r,l,o[t].line,f,m),f+=o[t].l||0,f+=d),h){var v;if(1===(u=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily)).t)v=new SVGCompElement(u.data,this.globalData,this);else{var b=emptyShapeData;u.data&&u.data.shapes&&(b=u.data),v=new SVGShapeElement(b,this.globalData,this)}if(this.textSpans[t].glyph){var E=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(E.layerElement),E.destroy()}this.textSpans[t].glyph=v,v._debug=!0,v.prepareFrame(0),v.renderFrame(),this.textSpans[t].childSpan.appendChild(v.layerElement),this.textSpans[t].childSpan.setAttribute("transform","scale("+r.finalSize/100+","+r.finalSize/100+")")}else p&&n.setAttribute("transform","translate("+l.props[12]+","+l.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}p&&n&&n.setAttribute("d","")}else{var P=this.textContainer,x="start";switch(r.j){case 1:x="end";break;case 2:x="middle";break;default:x="start"}P.setAttribute("text-anchor",x),P.setAttribute("letter-spacing",d);var S=this.buildTextContents(r.finalText);for(e=S.length,m=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t].span||createNS("tspan")).textContent=S[t],n.setAttribute("x",0),n.setAttribute("y",m),n.style.display="inherit",P.appendChild(n),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=n,m+=r.finalLineHeight;this.layerElement.appendChild(P)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},SVGTextLottieElement.prototype.getValue=function(){var t,e,r=this.textSpans.length;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<r;t+=1)(e=this.textSpans[t].glyph)&&(e.prepareFrame(this.comp.renderedFrame-this.data.st),e._mdf&&(this._mdf=!0))},SVGTextLottieElement.prototype.renderInnerContent=function(){if((!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s,a=this.textAnimator.renderedLetters,n=this.textProperty.currentData.l;for(e=n.length,t=0;t<e;t+=1)n[t].n||(r=a[t],i=this.textSpans[t].span,(s=this.textSpans[t].glyph)&&s.renderFrame(),r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),extendPrototype([BaseRenderer],SVGRendererBase),SVGRendererBase.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRendererBase.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRendererBase.prototype.createText=function(t){return new SVGTextLottieElement(t,this.globalData,this)},SVGRendererBase.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRendererBase.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRendererBase.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRendererBase.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendererBase.prototype.updateContainerSize=function(){},SVGRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,getExpressionsPlugin()&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&!0!==this.elements[t-1]?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRendererBase.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){var e;null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRendererBase.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRendererBase.prototype.hide=function(){this.layerElement.style.display="none"},SVGRendererBase.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([SVGRendererBase,ICompElement,SVGBaseElement],SVGCompElement),SVGCompElement.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},extendPrototype([SVGRendererBase],SVGRenderer),SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var r=0;for(r=this._length;r<t;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r,i=0,s=t.transforms.length,a=e;i<s&&!e;){if(t.transforms[i].transform.mProps._mdf){a=!0;break}i+=1}if(a)for(t.finalTransform.reset(),i=s-1;i>=0;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=a},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}},CVEffects.prototype.renderFrame=function(){},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,s=this.element.finalTransform.mat,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),t=0;t<n;t+=1)if("n"!==this.masksProperties[t].mode){var o;this.masksProperties[t].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),i=this.viewData[t].v,e=s.applyToPointArray(i.v[0][0],i.v[0][1],0),a.moveTo(e[0],e[1]);var h=i._length;for(o=1;o<h;o+=1)r=s.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=s.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){if(!this.hidden&&!this.data.hd){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"===t.ty||"st"===t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bmFloor(i.c.v[0])+","+bmFloor(i.c.v[1])+","+bmFloor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"===t.ty||"gs"===t.ty){if(r.lc=lineCapEnum[t.lc||2],r.lj=lineJoinEnum[t.lj||2],1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var s=new DashProperty(this,t.d,"canvas",this);i.d=s,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,s){var a,n,o,h,l,p,f=t.length-1,m=[],c=[],d=[].concat(s);for(a=f;a>=0;a-=1){if((h=this.searchProcessedElement(t[a]))?e[a]=r[h-1]:t[a]._shouldRender=i,"fl"===t[a].ty||"st"===t[a].ty||"gf"===t[a].ty||"gs"===t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],d),m.push(e[a].style);else if("gr"===t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,i,d)}else"tr"===t[a].ty?(h||(p=this.createTransformElement(t[a]),e[a]=p),d.push(e[a]),this.addTransformToStyleList(e[a])):"sh"===t[a].ty||"rc"===t[a].ty||"el"===t[a].ty||"sr"===t[a].ty?h||(e[a]=this.createShapeElement(t[a])):"tm"===t[a].ty||"rd"===t[a].ty||"pb"===t[a].ty?(h?(l=e[a]).closed=!1:((l=ShapeModifiers.getModifier(t[a].ty)).init(this,t[a]),e[a]=l,this.shapeModifiers.push(l)),c.push(l)):"rp"===t[a].ty&&(h?(l=e[a]).closed=!0:(l=ShapeModifiers.getModifier(t[a].ty),e[a]=l,l.init(this,t,a,e),this.shapeModifiers.push(l),i=!1),c.push(l));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(m),f=c.length,a=0;a<f;a+=1)c[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,f=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),a=h.elements,"st"===o||"gs"===o?(f.strokeStyle="st"===o?h.co:h.grd,f.lineWidth=h.wi,f.lineCap=h.lc,f.lineJoin=h.lj,f.miterLimit=h.ml||0):f.fillStyle="fl"===o?h.co:h.grd,p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&f.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=a.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(f.beginPath(),h.da&&(f.setLineDash(h.da),f.lineDashOffset=h.do)),s=(n=a[e].trNodes).length,i=0;i<s;i+=1)"m"===n[i].t?f.moveTo(n[i].p[0],n[i].p[1]):"c"===n[i].t?f.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):f.closePath();"st"!==o&&"gs"!==o||(f.stroke(),h.da&&f.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&f.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var s,a;for(a=t,s=e.length-1;s>=0;s-=1)"tr"===e[s].ty?(a=r[s].transform,this.renderShapeTransform(t,a)):"sh"===e[s].ty||"el"===e[s].ty||"rc"===e[s].ty||"sr"===e[s].ty?this.renderPath(e[s],r[s]):"fl"===e[s].ty?this.renderFill(e[s],r[s],a):"st"===e[s].ty?this.renderStroke(e[s],r[s],a):"gf"===e[s].ty||"gs"===e[s].ty?this.renderGradientFill(e[s],r[s],a):"gr"===e[s].ty?this.renderShape(a,e[s].it,r[s].it):e[s].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,s,a=t.trNodes,n=e.paths,o=n._length;a.length=0;var h=t.transforms.finalTransform;for(s=0;s<o;s+=1){var l=n.shapes[s];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),a.push({t:"z"}))}}t.trNodes=a}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i,s=e.style;if(!s.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var a,n=this.globalData.canvasContext,o=e.s.v,h=e.e.v;if(1===t.t)i=n.createLinearGradient(o[0],o[1],h[0],h[1]);else{var l=Math.sqrt(Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)),p=Math.atan2(h[1]-o[1],h[0]-o[0]),f=e.h.v;f>=1?f=.99:f<=-1&&(f=-.99);var m=l*f,c=Math.cos(p+e.a.v)*m+o[0],d=Math.sin(p+e.a.v)*m+o[1];i=n.createRadialGradient(c,d,0,o[0],o[1],l)}var u=t.g.p,y=e.g.c,g=1;for(a=0;a<u;a+=1)e.g._hasOpacity&&e.g._collapsable&&(g=e.g.o[2*a+1]),i.addColorStop(y[4*a]/100,"rgba("+y[4*a+1]+","+y[4*a+2]+","+y[4*a+3]+","+g+")");s.grd=i}s.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(i.da=s.dashArray,i.do=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,s,a,n,o,h,l,p,f,m,c,d,u=this.globalData.fontManager.getFontByName(t.f),y=t.l,g=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var v=this.data.singleShape,b=.001*t.tr*t.finalSize,E=0,P=0,x=!0,S=0;for(i=0;i<s;i+=1){n=(a=this.globalData.fontManager.getCharData(t.finalText[i],u.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&a.data||{},g.reset(),v&&y[i].n&&(E=-b,P+=t.yOffset,P+=x?1:0,x=!1),f=(l=n.shapes?n.shapes[0].it:[]).length,g.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,g,y[i].line,E,P),c=createSizedArray(f-1);var C=0;for(p=0;p<f;p+=1)if("sh"===l[p].ty){for(h=l[p].ks.k.i.length,m=l[p].ks.k,d=[],o=1;o<h;o+=1)1===o&&d.push(g.applyToX(m.v[0][0],m.v[0][1],0),g.applyToY(m.v[0][0],m.v[0][1],0)),d.push(g.applyToX(m.o[o-1][0],m.o[o-1][1],0),g.applyToY(m.o[o-1][0],m.o[o-1][1],0),g.applyToX(m.i[o][0],m.i[o][1],0),g.applyToY(m.i[o][0],m.i[o][1],0),g.applyToX(m.v[o][0],m.v[o][1],0),g.applyToY(m.v[o][0],m.v[o][1],0));d.push(g.applyToX(m.o[o-1][0],m.o[o-1][1],0),g.applyToY(m.o[o-1][0],m.o[o-1][1],0),g.applyToX(m.i[0][0],m.i[0][1],0),g.applyToY(m.i[0][0],m.i[0][1],0),g.applyToX(m.v[0][0],m.v[0][1],0),g.applyToY(m.v[0][0],m.v[0][1],0)),c[C]=d,C+=1}v&&(E+=y[i].l,E+=b),this.textSpans[S]?this.textSpans[S].elem=c:this.textSpans[S]={elem:c},S+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,s,a,n=this.canvasContext;n.font=this.values.fValue,n.lineCap="butt",n.lineJoin="miter",n.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var o,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;e=l.length;var p,f,m=null,c=null,d=null;for(t=0;t<e;t+=1)if(!l[t].n){if((o=h[t])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(o.p),this.globalData.renderer.ctxOpacity(o.o)),this.fill){for(o&&o.fc?m!==o.fc&&(m=o.fc,n.fillStyle=o.fc):m!==this.values.fill&&(m=this.values.fill,n.fillStyle=this.values.fill),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(f=p[r]).length,this.globalData.canvasContext.moveTo(f[0],f[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(f[s],f[s+1],f[s+2],f[s+3],f[s+4],f[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(o&&o.sw?d!==o.sw&&(d=o.sw,n.lineWidth=o.sw):d!==this.values.sWidth&&(d=this.values.sWidth,n.lineWidth=this.values.sWidth),o&&o.sc?c!==o.sc&&(c=o.sc,n.strokeStyle=o.sc):c!==this.values.stroke&&(c=this.values.stroke,n.strokeStyle=this.values.stroke),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(f=p[r]).length,this.globalData.canvasContext.moveTo(f[0],f[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(f[s],f[s+1],f[s+2],f[s+3],f[s+4],f[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}o&&this.globalData.renderer.restore()}},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;n>o&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=a)*o:r=(e=s)/o,i.drawImage(this.img,(s-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseRenderer],CanvasRendererBase),CanvasRendererBase.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRendererBase.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRendererBase.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRendererBase.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRendererBase.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var r=this.contextData.cTr.props;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])}else this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRendererBase.prototype.ctxOpacity=function(t){if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=t<0?0:t,void(this.globalData.currentGlobalAlpha=this.contextData.cO);this.contextData.cO*=t<0?0:t,this.globalData.currentGlobalAlpha!==this.contextData.cO&&(this.canvasContext.globalAlpha=this.contextData.cO,this.globalData.currentGlobalAlpha=this.contextData.cO)},CanvasRendererBase.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRendererBase.prototype.save=function(t){if(this.renderConfig.clearCanvas){t&&this.canvasContext.save();var e,r=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var i=this.contextData.saved[this.contextData.cArrPos];for(e=0;e<16;e+=1)i[e]=r[e];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1}else this.canvasContext.save()},CanvasRendererBase.prototype.restore=function(t){if(this.renderConfig.clearCanvas){t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],i=this.contextData.cTr.props;for(e=0;e<16;e+=1)i[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.globalData.currentGlobalAlpha!==r&&(this.canvasContext.globalAlpha=r,this.globalData.currentGlobalAlpha=r)}else this.canvasContext.restore()},CanvasRendererBase.prototype.configAnimation=function(t){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var e=this.animationItem.container.style;e.width="100%",e.height="100%";var r="0px 0px 0px";e.transformOrigin=r,e.mozTransformOrigin=r,e.webkitTransformOrigin=r,e["-webkit-transform"]=r,e.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRendererBase.prototype.updateContainerSize=function(){var t,e,r,i;if(this.reset(),this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var s=this.renderConfig.preserveAspectRatio.split(" "),a=s[1]||"meet",n=s[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);r=t/e,(i=this.transformCanvas.w/this.transformCanvas.h)>r&&"meet"===a||i<r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(i<r&&"meet"===a||i>r&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(i<r&&"meet"===a||i>r&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(i>r&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(i>r&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"===this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRendererBase.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),t=(this.layers?this.layers.length:0)-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRendererBase.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){var r;this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=0;r<i;r+=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);e[t]=r,r.initExpressions()}},CanvasRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},CanvasRendererBase.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRendererBase.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([CanvasRendererBase,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVCompElement.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},extendPrototype([CanvasRendererBase],CanvasRenderer),CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){var t=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var e=this.finalTransform.mat.toCSS();t.transform=e,t.webkitTransform=e}this.finalTransform._opMdf&&(t.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=BaseRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,s,a,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,s){this.getBoundsOfCurve(t,e,r,i);var a=this.shapeBoundingBox;s.x=bmMin(a.left,s.x),s.xMax=bmMax(a.right,s.xMax),s.y=bmMin(a.top,s.y),s.yMax=bmMax(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var s,a,n,o,h,l,p,f=[[t[0],i[0]],[t[1],i[1]]],m=0;m<2;++m)a=6*t[m]-12*e[m]+6*r[m],s=-3*t[m]+9*e[m]-9*r[m]+3*i[m],n=3*e[m]-3*t[m],a|=0,n|=0,0===(s|=0)&&0===a||(0===s?(o=-n/a)>0&&o<1&&f[m].push(this.calculateF(o,t,e,r,i,m)):(h=a*a-4*n*s)>=0&&((l=(-a+bmSqrt(h))/(2*s))>0&&l<1&&f[m].push(this.calculateF(l,t,e,r,i,m)),(p=(-a-bmSqrt(h))/(2*s))>0&&p<1&&f[m].push(this.calculateF(p,t,e,r,i,m))));this.shapeBoundingBox.left=bmMin.apply(null,f[0]),this.shapeBoundingBox.top=bmMin.apply(null,f[1]),this.shapeBoundingBox.right=bmMax.apply(null,f[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,f[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,s,a){return bmPow(1-t,3)*e[a]+3*bmPow(1-t,2)*t*r[a]+3*(1-t)*bmPow(t,2)*i[a]+bmPow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it&&this.calculateBoundingBox(t[r].it,e)},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;if(this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y){this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var i=this.shapeCont.style,s="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";i.transform=s,i.webkitTransform=s}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style,r=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)";e.fill=r,e.color=r,t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var i,s,a=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",a.fClass)this.innerElem.className=a.fClass;else{e.fontFamily=a.fFamily;var n=t.fWeight,o=t.fStyle;e.fontStyle=o,e.fontWeight=n}var h,l,p,f=t.l;s=f.length;var m,c=this.mHelper,d="",u=0;for(i=0;i<s;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[u]?h=this.textPaths[u]:((h=createNS("path")).setAttribute("stroke-linecap",lineCapEnum[1]),h.setAttribute("stroke-linejoin",lineJoinEnum[2]),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[u]?p=(l=this.textSpans[u]).children[0]:((l=createTag("div")).style.lineHeight=0,(p=createNS("svg")).appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[u]?this.textPaths[u]:createNS("text"):this.textSpans[u]?(l=this.textSpans[u],h=this.textPaths[u]):(styleDiv(l=createTag("span")),styleDiv(h=createTag("span")),l.appendChild(h)),this.globalData.fontManager.chars){var y,g=this.globalData.fontManager.getCharData(t.finalText[i],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(y=g?g.data:null,c.reset(),y&&y.shapes&&y.shapes.length&&(m=y.shapes[0].it,c.scale(t.finalSize/100,t.finalSize/100),d=this.createPathShape(c,m),h.setAttribute("d",d)),this.isMasked)this.innerElem.appendChild(h);else{if(this.innerElem.appendChild(l),y&&y.shapes){document.body.appendChild(p);var v=p.getBBox();p.setAttribute("width",v.width+2),p.setAttribute("height",v.height+2),p.setAttribute("viewBox",v.x-1+" "+(v.y-1)+" "+(v.width+2)+" "+(v.height+2));var b=p.style,E="translate("+(v.x-1)+"px,"+(v.y-1)+"px)";b.transform=E,b.webkitTransform=E,f[i].yOffset=v.y-1}else p.setAttribute("width",1),p.setAttribute("height",1);l.appendChild(p)}}else if(h.textContent=f[i].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(h);else{this.innerElem.appendChild(l);var P=h.style,x="translate3d(0,"+-t.finalSize/1.2+"px,0)";P.transform=x,P.webkitTransform=x}this.isMasked?this.textSpans[u]=h:this.textSpans[u]=l,this.textSpans[u].style.display="block",this.textPaths[u]=h,u+=1}for(;u<this.textSpans.length;)this.textSpans[u].style.display="none",u+=1},HTextElement.prototype.renderInnerContent=function(){var t;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),t=this.svgElement.style;var e="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";t.transform=e,t.webkitTransform=e}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,i,s,a,n,o=0,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;for(i=l.length,r=0;r<i;r+=1)l[r].n?o+=1:(a=this.textSpans[r],n=this.textPaths[r],s=h[o],o+=1,s._mdf.m&&(this.isMasked?a.setAttribute("transform",s.m):(a.style.webkitTransform=s.m,a.style.transform=s.m)),a.style.opacity=s.o,s.sw&&s._mdf.sw&&n.setAttribute("stroke-width",s.sw),s.sc&&s._mdf.sc&&n.setAttribute("stroke",s.sc),s.fc&&s._mdf.fc&&(n.setAttribute("fill",s.fc),n.style.color=s.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var p=this.innerElem.getBBox();this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.svgElement.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.svgElement.setAttribute("height",p.height));if(this.currentBBox.w!==p.width+2||this.currentBBox.h!==p.height+2||this.currentBBox.x!==p.x-1||this.currentBBox.y!==p.y-1){this.currentBBox.w=p.width+2,this.currentBBox.h=p.height+2,this.currentBBox.x=p.x-1,this.currentBBox.y=p.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),t=this.svgElement.style;var f="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";t.transform=f,t.webkitTransform=f}}}},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r,i,s=this.comp.threeDElements.length;for(t=0;t<s;t+=1)if("3d"===(e=this.comp.threeDElements[t]).type){r=e.perspectiveElem.style,i=e.container.style;var a=this.pe.v+"px",n="0px 0px 0px",o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.perspective=a,r.webkitPerspective=a,i.transformOrigin=n,i.mozTransformOrigin=n,i.webkitTransformOrigin=n,r.transform=o,r.webkitTransform=o}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;t>=0;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s;s=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var f,m,c;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)if("3d"===(f=this.comp.threeDElements[t]).type){if(p){var d=this.mat.toCSS();(c=f.container.style).transform=d,c.webkitTransform=d}this.pe._mdf&&((m=f.perspectiveElem.style).perspective=this.pe.v+"px",m.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.crossOrigin="anonymous",e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseRenderer],HybridRendererBase),HybridRendererBase.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},HybridRendererBase.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var s,a,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n],s=(this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement())||s),n+=1;s?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,s):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRendererBase.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRendererBase.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextLottieElement(t,this.globalData,this)},HybridRendererBase.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRendererBase.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRendererBase.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}return null},HybridRendererBase.prototype.createThreeDContainer=function(t,e){var r,i,s=createTag("div");styleDiv(s);var a=createTag("div");if(styleDiv(a),"3d"===e){(r=s.style).width=this.globalData.compSize.w+"px",r.height=this.globalData.compSize.h+"px";var n="50% 50%";r.webkitTransformOrigin=n,r.mozTransformOrigin=n,r.transformOrigin=n;var o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";(i=a.style).transform=o,i.webkitTransform=o}s.appendChild(a);var h={container:a,perspectiveElem:s,startPos:t,endPos:t,type:e};return this.threeDElements.push(h),h},HybridRendererBase.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?("3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")),e.endPos=Math.max(e.endPos,t)):("2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t));for(t=(r=this.threeDElements.length)-1;t>=0;t-=1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRendererBase.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var s,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[r].container.insertBefore(t,s):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRendererBase.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper,i=e.style;i.width=t.w+"px",i.height=t.h+"px",this.resizerElem=e,styleDiv(e),i.transformStyle="flat",i.mozTransformStyle="flat",i.webkitTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),i.overflow="hidden";var s=createNS("svg");s.setAttribute("width","1"),s.setAttribute("height","1"),styleDiv(s),this.resizerElem.appendChild(s);var a=createNS("defs");s.appendChild(a),this.data=t,this.setupGlobalData(t,s),this.globalData.defs=a,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRendererBase.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRendererBase.prototype.updateContainerSize=function(){var t,e,r,i,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=s/a;this.globalData.compSize.w/this.globalData.compSize.h>n?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,r=0,i=(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,i=0);var o=this.resizerElem.style;o.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)",o.transform=o.webkitTransform},HybridRendererBase.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRendererBase.prototype.show=function(){this.resizerElem.style.display="block"},HybridRendererBase.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1){var s=this.threeDElements[t].perspectiveElem.style;s.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px",s.perspective=s.webkitPerspective}}},HybridRendererBase.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],i,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},extendPrototype([HybridRendererBase,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},HCompElement.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},extendPrototype([HybridRendererBase],HybridRenderer),HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)};var Expressions=function(){var t={};return t.initExpressions=function(t){var e=0,r=[];t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&function(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}},t}();function _typeof$1(t){return _typeof$1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$1(t)}function seedRandom(t,e){var r,i=this,s=256,a=e.pow(s,6),n=e.pow(2,52),o=2*n,h=255;function l(t){var e,r=t.length,i=this,a=0,n=i.i=i.j=0,o=i.S=[];for(r||(t=[r++]);a<s;)o[a]=a++;for(a=0;a<s;a++)o[a]=o[n=h&n+t[a%r]+(e=o[a])],o[n]=e;i.g=function(t){for(var e,r=0,a=i.i,n=i.j,o=i.S;t--;)e=o[a=h&a+1],r=r*s+o[h&(o[a]=o[n=h&n+e])+(o[n]=e)];return i.i=a,i.j=n,r}}function p(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function f(t,e){var r,i=[],s=_typeof$1(t);if(e&&"object"==s)for(r in t)try{i.push(f(t[r],e-1))}catch(t){}return i.length?i:"string"==s?t:t+"\0"}function m(t,e){for(var r,i=t+"",s=0;s<i.length;)e[h&s]=h&(r^=19*e[h&s])+i.charCodeAt(s++);return c(e)}function c(t){return String.fromCharCode.apply(0,t)}e.seedrandom=function(h,d,u){var y=[],g=m(f((d=!0===d?{entropy:!0}:d||{}).entropy?[h,c(t)]:null===h?function(){try{r;var e=new Uint8Array(s);return(i.crypto||i.msCrypto).getRandomValues(e),c(e)}catch(e){var a=i.navigator,n=a&&a.plugins;return[+new Date,i,n,i.screen,c(t)]}}():h,3),y),v=new l(y),b=function(){for(var t=v.g(6),e=a,r=0;t<n;)t=(t+r)*s,e*=s,r=v.g(1);for(;t>=o;)t/=2,e/=2,r>>>=1;return(t+r)/e};return b.int32=function(){return 0|v.g(4)},b.quick=function(){return v.g(4)/4294967296},b.double=b,m(c(v.S),t),(d.pass||u||function(t,r,i,s){return s&&(s.S&&p(s,v),t.state=function(){return p(v,{})}),i?(e.random=t,r):t})(b,g,"global"in d?d.global:this==e,d.state)},m(e.random(),t)}function initialize$2(t){seedRandom([],t)}var propTypes={SHAPE:"shape"};function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=_typeof(t);if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:-t}initialize$2(BMMath);var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=_typeof(t),i=_typeof(e);if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]+=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=_typeof(t),i=_typeof(e);if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t,10)),"string"===i&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]-=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=_typeof(t),n=_typeof(e);if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=_typeof(t),n=_typeof(e);if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t,10)),"string"==typeof e&&(e=parseInt(e,10)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(e>r){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);var r;e||(e=helperLengthArray);var i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n===o)e=0,r=0;else{var l=n-o;switch(r=h>.5?l/(2-n-o):l/(n+o),n){case i:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-i)/l+2;break;case a:e=(i-s)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=n,i=n,r=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(t>=r)return s;var n,o=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*o;var h=i.length,l=createTypedArray("float32",h);for(n=0;n<h;n+=1)l[n]=i[n]+(s[n]-i[n])*o;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shapePool.newElement();n.setPathData(!!i,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:l,h=r&&r[s]?r[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s);var n=Math.floor(5*time);for(r=0,i=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",s);if(s>1){for(i=0;i<s;i+=1)l[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r),e>1?e=1:e<0&&(e=0);var n=t(e);if($bm_isInstanceOfArray(s)){var o,h=s.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(a[o]-s[o])*n+s[o];return l}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(r=e+2,i=data.k[e+1].t):(r=e+1,i=data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else r=0,i=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt=scoped_bm_rt.propType===propTypes.SHAPE?scoped_bm_rt.v:scoped_bm_rt)}return executeExpression.__preventDeadCodeRemoval=[$bm_transform,anchorPoint,time,velocity,inPoint,outPoint,width,height,name,loop_in,loop_out,smooth,toComp,fromCompToSurface,toWorld,fromWorld,mask,position,rotation,scale,thisComp,numKeys,active,wiggle,loopInDuration,loopOutDuration,comp,lookAt,easeOut,easeIn,ease,nearestKey,key,text,textIndex,textTotal,selectorValue,framesToTime,timeToFrames,sourceRectAtTime,substring,substr,posterizeTime,index,globalData],executeExpression}return ob.initiateExpression=initiateExpression,ob.__preventDeadCodeRemoval=[window,document,XMLHttpRequest,fetch,frames,$bm_neg,add,$bm_sum,$bm_sub,$bm_mul,$bm_div,$bm_mod,clamp,radians_to_degrees,degreesToRadians,degrees_to_radians,normalize,rgbToHsl,hslToRgb,linear,random,createPath],ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=-.001,s=this.getValueAtTime(t),a=this.getValueAtTime(t+i);if(s.length)for(e=createTypedArray("float32",s.length),r=0;r<s.length;r+=1)e[r]=(a[r]-s[r])/i;else e=(a-s)/i;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};function addPropertyDecorator(){function t(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?s=p-(i=e?Math.abs(p-this.elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(s=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),c=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),d=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(f.length)).length,a=0;a<n;a+=1)o[a]=(m[a]-f[a])*d+c[a];return o}return(m-f)*d+c}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return u+(h-p)/.001*(u-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function e(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(h>=p)return this.pv;if(r?s=p+(i=e?Math.abs(this.elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(s=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),m=this.getValueAtTime(s/this.comp.globalData.frameRate,0),c=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),d=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(f.length)).length,a=0;a<n;a+=1)o[a]=c[a]-(m[a]-f[a])*d;return o}return c-(m-f)*d}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*(p-h)/.001;return o}return u+(u-y)*(p-h)/.001}}return this.getValueAtTime((i-((p-h)%i+p))/this.comp.globalData.frameRate,0)}function r(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=e>1?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}function i(t){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var e=this._transformCachingAtTime.v;if(e.cloneFromProps(this.pre.props),this.appliedTransformations<1){var r=this.a.getValueAtTime(t);e.translate(-r[0]*this.a.mult,-r[1]*this.a.mult,r[2]*this.a.mult)}if(this.appliedTransformations<2){var i=this.s.getValueAtTime(t);e.scale(i[0]*this.s.mult,i[1]*this.s.mult,i[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var s=this.sk.getValueAtTime(t),a=this.sa.getValueAtTime(t);e.skewFromAxis(-s*this.sk.mult,a*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var n=this.r.getValueAtTime(t);e.rotate(-n*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var o=this.rz.getValueAtTime(t),h=this.ry.getValueAtTime(t),l=this.rx.getValueAtTime(t),p=this.or.getValueAtTime(t);e.rotateZ(-o*this.rz.mult).rotateY(h*this.ry.mult).rotateX(l*this.rx.mult).rotateZ(-p[2]*this.or.mult).rotateY(p[1]*this.or.mult).rotateX(p[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var f=this.px.getValueAtTime(t),m=this.py.getValueAtTime(t);if(this.data.p.z){var c=this.pz.getValueAtTime(t);e.translate(f*this.px.mult,m*this.py.mult,-c*this.pz.mult)}else e.translate(f*this.px.mult,m*this.py.mult,0)}else{var d=this.p.getValueAtTime(t);e.translate(d[0]*this.p.mult,d[1]*this.p.mult,-d[2]*this.p.mult)}return e}function s(){return this.v.clone(new Matrix)}var a=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var n=a(t,e,r);return n.dynamicProperties.length?n.getValueAtTime=i.bind(n):n.getValueAtTime=s.bind(n),n.setGroupProperty=expressionHelpers.setGroupProperty,n};var n=PropertyFactory.getProp;PropertyFactory.getProp=function(i,s,a,o,h){var l=n(i,s,a,o,h);l.kf?l.getValueAtTime=expressionHelpers.getValueAtTime.bind(l):l.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(l),l.setGroupProperty=expressionHelpers.setGroupProperty,l.loopOut=t,l.loopIn=e,l.smooth=r,l.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(l),l.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(l),l.numKeys=1===s.a?s.k.length:0,l.propertyIndex=s.ix;var p=0;return 0!==a&&(p=createTypedArray("float32",1===s.a?s.k[0].s.length:s.k.length)),l._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:p},expressionHelpers.searchExpressions(i,s,l),l.k&&h.addDynamicProperty(l),l};var o=ShapePropertyFactory.getConstructorFunction(),h=ShapePropertyFactory.getKeyframedConstructorFunction();function l(){}l.prototype={vertices:function(t,e){this.k&&this.getValue();var r,i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0));var s=i._length,a=i[t],n=i.v,o=createSizedArray(s);for(r=0;r<s;r+=1)o[r]="i"===t||"o"===t?[a[r][0]-n[r][0],a[r][1]-n[r][1]]:[a[r][0],a[r][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,f=r.c&&o===h-1?0:o+1,m=(n-l)/a[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[f],r.o[p],r.i[f],m,a[o]);break}l+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){1==t?t=this.v.c:0==t&&(t=.999);var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([l],o),extendPrototype([l],h),h.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},h.prototype.initiateExpression=ExpressionManager.initiateExpression;var p=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=p(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}function initialize$1(){addPropertyDecorator()}function addDecorator(){TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t!==r){var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i}return t},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null}}function initialize(){addDecorator()}return registerRenderer("canvas",CanvasRenderer),registerRenderer("html",HybridRenderer),registerRenderer("svg",SVGRenderer),ShapeModifiers.registerModifier("tm",TrimModifier),ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeModifiers.registerModifier("rd",RoundCornersModifier),setExpressionsPlugin(Expressions),initialize$1(),initialize(),registerEffect(20,SVGTintFilter,!0),registerEffect(21,SVGFillFilter,!0),registerEffect(22,SVGStrokeEffect,!1),registerEffect(23,SVGTritoneFilter,!0),registerEffect(24,SVGProLevelsFilter,!0),registerEffect(25,SVGDropShadowEffect,!0),registerEffect(28,SVGMatte3Effect,!1),registerEffect(29,SVGGaussianBlurEffect,!0),lottie}));

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};
/**
 * Swiper 5.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 16, 2020
 */

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.Swiper = factory()));
})(this, function () {
  "use strict";

  /**
   * SSR Window 2.0.0
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: May 12, 2020
   */
  /* eslint-disable no-param-reassign */
  function isObject(obj) {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "constructor" in obj &&
      obj.constructor === Object
    );
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === "undefined") {
        target[key] = src[key];
      } else if (
        isObject(src[key]) &&
        isObject(target[key]) &&
        Object.keys(src[key]).length > 0
      ) {
        extend(target[key], src[key]);
      }
    });
  }

  var doc = typeof document !== "undefined" ? document : {};
  var ssrDocument = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: "",
    },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return {
        initEvent: function () {},
      };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  extend(doc, ssrDocument);

  var win = typeof window !== "undefined" ? window : {};
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: "",
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
  };
  extend(win, ssrWindow);

  /**
   * Dom7 2.1.5
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2020, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: May 15, 2020
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
      // String
      if (typeof selector === "string") {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
          var toCreate = "div";
          if (html.indexOf("<li") === 0) {
            toCreate = "ul";
          }
          if (html.indexOf("<tr") === 0) {
            toCreate = "tbody";
          }
          if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) {
            toCreate = "tr";
          }
          if (html.indexOf("<tbody") === 0) {
            toCreate = "table";
          }
          if (html.indexOf("<option") === 0) {
            toCreate = "select";
          }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === "#" && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split("#")[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) {
              arr.push(els[i]);
            }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === "undefined") {
      return this;
    }
    var classes = className.split(" ");
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (
          typeof this[j] !== "undefined" &&
          typeof this[j].classList !== "undefined"
        ) {
          this[j].classList.add(classes[i]);
        }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(" ");
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (
          typeof this[j] !== "undefined" &&
          typeof this[j].classList !== "undefined"
        ) {
          this[j].classList.remove(classes[i]);
        }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) {
      return false;
    }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(" ");
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (
          typeof this[j] !== "undefined" &&
          typeof this[j].classList !== "undefined"
        ) {
          this[j].classList.toggle(classes[i]);
        }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === "string") {
      // Get attr
      if (this[0]) {
        return this[0].getAttribute(attrs);
      }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === "undefined") {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute("data-" + key);
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) {
        el.dom7ElementDataStorage = {};
      }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== "string") {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === "function") {
      (assign = args),
        (eventType = assign[0]),
        (listener = assign[1]),
        (capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) {
      capture = false;
    }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) {
        return;
      }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) {
        listener.apply(target, eventData);
      } else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) {
            listener.apply(parents[k], eventData);
          }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(" ");
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) {
            el.dom7Listeners = {};
          }
          if (!el.dom7Listeners[event]) {
            el.dom7Listeners[event] = [];
          }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) {
            el.dom7LiveListeners = {};
          }
          if (!el.dom7LiveListeners[event$1]) {
            el.dom7LiveListeners[event$1] = [];
          }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === "function") {
      (assign = args),
        (eventType = assign[0]),
        (listener = assign[1]),
        (capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) {
      capture = false;
    }

    var events = eventType.split(" ");
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (
              listener &&
              handler.listener &&
              handler.listener.dom7proxy &&
              handler.listener.dom7proxy === listener
            ) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];

    var events = args[0].split(" ");
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = void 0;
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent("Event");
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ["webkitTransitionEnd", "transitionend"];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) {
        return;
      }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(styles.getPropertyValue("margin-right")) +
          parseFloat(styles.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(styles.getPropertyValue("margin-top")) +
          parseFloat(styles.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) {
      return win.getComputedStyle(this[0], null);
    }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0]) {
          return win.getComputedStyle(this[0], null).getPropertyValue(props);
        }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) {
      return this;
    }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  function filter(callback) {
    var matchedItems = [];
    var dom = this;
    for (var i = 0; i < dom.length; i += 1) {
      if (callback.call(dom[i], i, dom[i])) {
        matchedItems.push(dom[i]);
      }
    }
    return new Dom7(matchedItems);
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === "undefined") {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === "undefined") {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === "undefined") {
      return false;
    }
    if (typeof selector === "string") {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }
      return false;
    } else if (selector === doc) {
      return el === doc;
    } else if (selector === win) {
      return el === win;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) {
          i += 1;
        }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === "undefined") {
      return this;
    }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) {
        return new Dom7([]);
      }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          var tempDiv = doc.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        var tempDiv = doc.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (
          this[0].nextElementSibling &&
          $(this[0].nextElementSibling).is(selector)
        ) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) {
      return new Dom7([]);
    }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) {
          nextEls.push(next);
        }
      } else {
        nextEls.push(next);
      }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (
          el.previousElementSibling &&
          $(el.previousElementSibling).is(selector)
        ) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) {
      return new Dom7([]);
    }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) {
          prevEls.push(prev);
        }
      } else {
        prevEls.push(prev);
      }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) {
            parents.push(this[i].parentNode);
          }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) {
            parents.push(parent);
          }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === "undefined") {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) {
            children.push(childNodes[j]);
          }
        } else if (
          childNodes[j].nodeType === 1 &&
          $(childNodes[j]).is(selector)
        ) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) {
        this[i].parentNode.removeChild(this[i]);
      }
    }
    return this;
  }
  function add() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if (delay === void 0) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if (axis === void 0) axis = "x";

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) {
          curTransform = curTransform
            .split(", ")
            .map(function (a) {
              return a.replace(",", ".");
            })
            .join(", ");
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(
          curTransform === "none" ? "" : curTransform
        );
      } else {
        transformMatrix =
          curStyle.MozTransform ||
          curStyle.OTransform ||
          curStyle.MsTransform ||
          curStyle.msTransform ||
          curStyle.transform ||
          curStyle
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
      }

      if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m41;
        }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[12]);
        }
        // Normal Browsers
        else {
          curTransform = parseFloat(matrix[4]);
        }
      }
      if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m42;
        }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[13]);
        }
        // Normal Browsers
        else {
          curTransform = parseFloat(matrix[5]);
        }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === "string" && urlToParse.length) {
        urlToParse =
          urlToParse.indexOf("?") > -1 ? urlToParse.replace(/\S*\?/, "") : "";
        params = urlToParse.split("&").filter(function (paramsPart) {
          return paramsPart !== "";
        });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, "").split("=");
          query[decodeURIComponent(param[0])] =
            typeof param[1] === "undefined"
              ? undefined
              : decodeURIComponent(param[1]) || "";
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return (
        typeof o === "object" &&
        o !== null &&
        o.constructor &&
        o.constructor === Object
      );
    },
    extend: function extend() {
      var args = [],
        len$1 = arguments.length;
      while (len$1--) args[len$1] = arguments[len$1];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (
            var nextIndex = 0, len = keysArray.length;
            nextIndex < len;
            nextIndex += 1
          ) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (
                Utils.isObject(to[nextKey]) &&
                Utils.isObject(nextSource[nextKey])
              ) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (
                !Utils.isObject(to[nextKey]) &&
                Utils.isObject(nextSource[nextKey])
              ) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    return {
      touch: !!(
        "ontouchstart" in win ||
        (win.DocumentTouch && doc instanceof win.DocumentTouch)
      ),

      pointerEvents:
        !!win.PointerEvent &&
        "maxTouchPoints" in win.navigator &&
        win.navigator.maxTouchPoints >= 0,

      observer: (function checkObserver() {
        return "MutationObserver" in win || "WebkitMutationObserver" in win;
      })(),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener("testPassiveListener", null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      })(),

      gestures: (function checkGestures() {
        return "ongesturestart" in win;
      })(),
    };
  })();

  var SwiperClass = function SwiperClass(params) {
    if (params === void 0) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== "function") {
      return self;
    }
    var method = priority ? "unshift" : "push";
    events.split(" ").forEach(function (event) {
      if (!self.eventsListeners[event]) {
        self.eventsListeners[event] = [];
      }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== "function") {
      return self;
    }
    function onceHandler() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];

      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
      handler.apply(self, args);
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) {
      return self;
    }
    events.split(" ").forEach(function (event) {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (
        self.eventsListeners[event] &&
        self.eventsListeners[event].length
      ) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (
            eventHandler === handler ||
            (eventHandler.f7proxy && eventHandler.f7proxy === handler)
          ) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];

    var self = this;
    if (!self.eventsListeners) {
      return self;
    }
    var events;
    var data;
    var context;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(" ");
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams(
    instanceParams
  ) {
    var instance = this;
    if (!instance.modules) {
      return;
    }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules(modulesParams) {
    if (modulesParams === void 0) modulesParams = {};

    var instance = this;
    if (!instance.modules) {
      return;
    }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === "function") {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) {
      return;
    }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule(module) {
    var params = [],
      len = arguments.length - 1;
    while (len-- > 0) params[len] = arguments[len + 1];

    var Class = this;
    if (!Class.prototype.modules) {
      Class.prototype.modules = {};
    }
    var name =
      module.name ||
      Object.keys(Class.prototype.modules).length + "_" + Utils.now();
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use(module) {
    var params = [],
      len = arguments.length - 1;
    while (len-- > 0) params[len] = arguments[len + 1];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Class.installModule(m);
      });
      return Class;
    }
    return Class.installModule.apply(Class, [module].concat(params));
  };

  Object.defineProperties(SwiperClass, staticAccessors);

  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined") {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== "undefined") {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (
      (width === 0 && swiper.isHorizontal()) ||
      (height === 0 && swiper.isVertical())
    ) {
      return;
    }

    // Subtract paddings
    width =
      width -
      parseInt($el.css("padding-left"), 10) -
      parseInt($el.css("padding-right"), 10);
    height =
      height -
      parseInt($el.css("padding-top"), 10) -
      parseInt($el.css("padding-bottom"), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides() {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual
      ? swiper.virtual.slides.length
      : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    function slidesForMargin(slideIndex) {
      if (!params.cssMode) {
        return true;
      }
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween =
        (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) {
      slides.css({ marginLeft: "", marginTop: "" });
    } else {
      slides.css({ marginRight: "", marginBottom: "" });
    }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (
        Math.floor(slidesLength / params.slidesPerColumn) ===
        slidesLength / swiper.params.slidesPerColumn
      ) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows =
          Math.ceil(slidesLength / params.slidesPerColumn) *
          params.slidesPerColumn;
      }
      if (
        params.slidesPerView !== "auto" &&
        params.slidesPerColumnFill === "row"
      ) {
        slidesNumberEvenToRows = Math.max(
          slidesNumberEvenToRows,
          params.slidesPerView * params.slidesPerColumn
        );
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;
        if (params.slidesPerColumnFill === "row" && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(
            i / (params.slidesPerGroup * params.slidesPerColumn)
          );
          var slideIndexInGroup =
            i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup =
            groupIndex === 0
              ? params.slidesPerGroup
              : Math.min(
                  Math.ceil(
                    (slidesLength -
                      groupIndex * slidesPerColumn * params.slidesPerGroup) /
                      slidesPerColumn
                  ),
                  params.slidesPerGroup
                );
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column =
            slideIndexInGroup -
            row * columnsInGroup +
            groupIndex * params.slidesPerGroup;

          newSlideOrderIndex =
            column + (row * slidesNumberEvenToRows) / slidesPerColumn;
          slide.css({
            "-webkit-box-ordinal-group": newSlideOrderIndex,
            "-moz-box-ordinal-group": newSlideOrderIndex,
            "-ms-flex-order": newSlideOrderIndex,
            "-webkit-order": newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
        } else if (params.slidesPerColumnFill === "column") {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;
          if (
            column > numFullColumns ||
            (column === numFullColumns && row === slidesPerColumn - 1)
          ) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide.css(
          "margin-" + (swiper.isHorizontal() ? "top" : "left"),
          row !== 0 && params.spaceBetween && params.spaceBetween + "px"
        );
      }
      if (slide.css("display") === "none") {
        continue;
      } // eslint-disable-line

      if (params.slidesPerView === "auto") {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue("width"));
            var paddingLeft = parseFloat(
              slideStyles.getPropertyValue("padding-left")
            );
            var paddingRight = parseFloat(
              slideStyles.getPropertyValue("padding-right")
            );
            var marginLeft = parseFloat(
              slideStyles.getPropertyValue("margin-left")
            );
            var marginRight = parseFloat(
              slideStyles.getPropertyValue("margin-right")
            );
            var boxSizing = slideStyles.getPropertyValue("box-sizing");
            if (boxSizing && boxSizing === "border-box") {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize =
                width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue("height"));
            var paddingTop = parseFloat(
              slideStyles.getPropertyValue("padding-top")
            );
            var paddingBottom = parseFloat(
              slideStyles.getPropertyValue("padding-bottom")
            );
            var marginTop = parseFloat(
              slideStyles.getPropertyValue("margin-top")
            );
            var marginBottom = parseFloat(
              slideStyles.getPropertyValue("margin-bottom")
            );
            var boxSizing$1 = slideStyles.getPropertyValue("box-sizing");
            if (boxSizing$1 && boxSizing$1 === "border-box") {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize =
                height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }
      } else {
        slideSize =
          (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
          params.slidesPerView;
        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {
        slidePosition =
          slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }
        if (i === 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }
        if (Math.abs(slidePosition) < 1 / 1000) {
          slidePosition = 0;
        }
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }
        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }
        if (
          (index - Math.min(swiper.params.slidesPerGroupSkip, index)) %
            swiper.params.slidesPerGroup ===
          0
        ) {
          snapGrid.push(slidePosition);
        }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl &&
      wrongRTL &&
      (params.effect === "slide" || params.effect === "coverflow")
    ) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px",
      });
    }
    if (params.setWrapperSize) {
      if (swiper.isHorizontal()) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px",
        });
      } else {
        $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px",
        });
      }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize =
        (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize =
        Math.ceil(swiper.virtualSize / params.slidesPerColumn) -
        params.spaceBetween;
      if (swiper.isHorizontal()) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px",
        });
      } else {
        $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px",
        });
      }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) {
            slidesGridItem = Math.floor(slidesGridItem);
          }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
            newSlidesGrid.push(slidesGridItem);
          }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) {
          slidesGridItem$1 = Math.floor(slidesGridItem$1);
        }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (
        Math.floor(swiper.virtualSize - swiperSize) -
          Math.floor(snapGrid[snapGrid.length - 1]) >
        1
      ) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) {
      snapGrid = [0];
    }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) {
          slides
            .filter(slidesForMargin)
            .css({ marginLeft: spaceBetween + "px" });
        } else {
          slides
            .filter(slidesForMargin)
            .css({ marginRight: spaceBetween + "px" });
        }
      } else {
        slides
          .filter(slidesForMargin)
          .css({ marginBottom: spaceBetween + "px" });
      }
    }

    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) {
          return -offsetBefore;
        }
        if (snap > maxSnap) {
          return maxSnap + offsetAfter;
        }
        return snap;
      });
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize$1 = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize$1 +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize$1 -= params.spaceBetween;
      if (allSlidesSize$1 < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize$1) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (
      swiper.params.slidesPerView !== "auto" &&
      swiper.params.slidesPerView > 1
    ) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each(function (index, slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index = swiper.activeIndex + i;
          if (index > swiper.slides.length) {
            break;
          }
          activeSlides.push(swiper.slides.eq(index)[0]);
        }
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) {
      swiper.$wrapperEl.css("height", newHeight + "px");
    }
  }

  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal()
        ? slides[i].offsetLeft
        : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) {
      return;
    }
    if (typeof slides[0].swiperSlideOffset === "undefined") {
      swiper.updateSlidesOffset();
    }

    var offsetCenter = -translate;
    if (rtl) {
      offsetCenter = translate;
    }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress =
        (offsetCenter +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slide.swiperSlideOffset) /
        (slide.swiperSlideSize + params.spaceBetween);
      if (
        params.watchSlidesVisibility ||
        (params.centeredSlides && params.autoHeight)
      ) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible =
          (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
          (slideAfter > 1 && slideAfter <= swiper.size) ||
          (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress(translate) {
    var swiper = this;
    if (typeof translate === "undefined") {
      var multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate =
        (swiper && swiper.translate && swiper.translate * multiplier) || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (
      params.watchSlidesProgress ||
      params.watchSlidesVisibility ||
      (params.centeredSlides && params.autoHeight)
    ) {
      swiper.updateSlidesProgress(translate);
    }

    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit("fromEdge");
    }

    swiper.emit("progress", progress);
  }

  function updateSlidesClasses() {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(
      params.slideActiveClass +
        " " +
        params.slideNextClass +
        " " +
        params.slidePrevClass +
        " " +
        params.slideDuplicateActiveClass +
        " " +
        params.slideDuplicateNextClass +
        " " +
        params.slideDuplicatePrevClass
    );

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(
        "." +
          params.slideClass +
          '[data-swiper-slide-index="' +
          activeIndex +
          '"]'
      );
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              realIndex +
              '"]'
          )
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]'
          )
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide
      .nextAll("." + params.slideClass)
      .eq(0)
      .addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide
      .prevAll("." + params.slideClass)
      .eq(0)
      .addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              nextSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              nextSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              prevSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              prevSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === "undefined") {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            translate >= slidesGrid[i] &&
            translate <
              slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
          ) {
            activeIndex = i;
          } else if (
            translate >= slidesGrid[i] &&
            translate < slidesGrid[i + 1]
          ) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined") {
          activeIndex = 0;
        }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex =
        skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(
      swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") ||
        activeIndex,
      10
    );

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }

  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
        }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(
          $(slide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (
      params.slideToClickedSlide &&
      swiper.clickedIndex !== undefined &&
      swiper.clickedIndex !== swiper.activeIndex
    ) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) {
      currentTranslate = -currentTranslate;
    }

    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var wrapperEl = swiper.wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] =
        swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(
        "translate3d(" + x + "px, " + y + "px, " + z + "px)"
      );
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit("setTranslate", swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(
    translate,
    speed,
    runCallbacks,
    translateBounds,
    internal
  ) {
    var obj;

    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    var swiper = this;

    var params = swiper.params;
    var wrapperEl = swiper.wrapperEl;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) {
      newTranslate = minTranslate;
    } else if (translateBounds && translate < maxTranslate) {
      newTranslate = maxTranslate;
    } else {
      newTranslate = translate;
    }

    // Update progress
    swiper.updateProgress(newTranslate);

    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo(
            ((obj = {}),
            (obj[isH ? "left" : "top"] = -newTranslate),
            (obj.behavior = "smooth"),
            obj)
          );
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        }
      }
      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.onTranslateToWrapperTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.onTranslateToWrapperTransitionEnd
        );
      }
    }

    return true;
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo,
  };

  function setTransition(duration, byController) {
    var swiper = this;

    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }

    swiper.emit("setTransition", duration, byController);
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.cssMode) {
      return;
    }
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = "next";
      } else if (activeIndex < previousIndex) {
        dir = "prev";
      } else {
        dir = "reset";
      }
    }

    swiper.emit("transitionStart");

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionStart");
        return;
      }
      swiper.emit("slideChangeTransitionStart");
      if (dir === "next") {
        swiper.emit("slideNextTransitionStart");
      } else {
        swiper.emit("slidePrevTransitionStart");
      }
    }
  }

  function transitionEnd$1(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    var params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) {
      return;
    }
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = "next";
      } else if (activeIndex < previousIndex) {
        dir = "prev";
      } else {
        dir = "reset";
      }
    }

    swiper.emit("transitionEnd");

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionEnd");
        return;
      }
      swiper.emit("slideChangeTransitionEnd");
      if (dir === "next") {
        swiper.emit("slideNextTransitionEnd");
      } else {
        swiper.emit("slidePrevTransitionEnd");
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo(index, speed, runCallbacks, internal) {
    var obj;

    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) {
      slideIndex = 0;
    }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    var wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex =
      skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }

    if (
      (activeIndex || params.initialSlide || 0) === (previousIndex || 0) &&
      runCallbacks
    ) {
      swiper.emit("beforeSlideChangeStart");
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (
        !swiper.allowSlideNext &&
        translate < swiper.translate &&
        translate < swiper.minTranslate()
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        translate > swiper.translate &&
        translate > swiper.maxTranslate()
      ) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }

    var direction;
    if (slideIndex > activeIndex) {
      direction = "next";
    } else if (slideIndex < activeIndex) {
      direction = "prev";
    } else {
      direction = "reset";
    }

    // Update Index
    if (
      (rtl && -translate === swiper.translate) ||
      (!rtl && translate === swiper.translate)
    ) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = -translate;
      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo(
            ((obj = {}),
            (obj[isH ? "left" : "top"] = t),
            (obj.behavior = "smooth"),
            obj)
          );
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
      }
      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.onSlideToWrapperTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.onSlideToWrapperTransitionEnd
            );
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.onSlideToWrapperTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.onSlideToWrapperTransitionEnd
        );
      }
    }

    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var increment =
      swiper.activeIndex < params.slidesPerGroupSkip
        ? 1
        : params.slidesPerGroup;
    if (params.loop) {
      if (animating) {
        return false;
      }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(
      swiper.activeIndex + increment,
      speed,
      runCallbacks,
      internal
    );
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) {
        return false;
      }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) {
        return -Math.floor(Math.abs(val));
      }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var normalizedSlidesGrid = slidesGrid.map(function (val) {
      return normalize(val);
    });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap =
      snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      snapGrid.forEach(function (snap) {
        if (!prevSnap && normalizedTranslate >= snap) {
          prevSnap = snap;
        }
      });
    }
    var prevIndex;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) {
        prevIndex = swiper.activeIndex - 1;
      }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;

    var swiper = this;
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex =
      skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);

    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var currentSnap$1 = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap$1 - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView =
      params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) {
        return;
      }
      realIndex = parseInt(
        $(swiper.clickedSlide).attr("data-swiper-slide-index"),
        10
      );
      if (params.centeredSlides) {
        if (
          slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
          slideToIndex >
            swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(
              "." +
                params.slideClass +
                '[data-swiper-slide-index="' +
                realIndex +
                '"]:not(.' +
                params.slideDuplicateClass +
                ")"
            )
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(
            "." +
              params.slideClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]:not(.' +
              params.slideDuplicateClass +
              ")"
          )
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl
      .children("." + params.slideClass + "." + params.slideDuplicateClass)
      .remove();

    var slides = $wrapperEl.children("." + params.slideClass);

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum =
        params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement("div")).addClass(
            params.slideClass + " " + params.slideBlankClass
          );
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children("." + params.slideClass);
      }
    }

    if (params.slidesPerView === "auto" && !params.loopedSlides) {
      params.loopedSlides = slides.length;
    }

    swiper.loopedSlides = Math.ceil(
      parseFloat(params.loopedSlides || params.slidesPerView, 10)
    );
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }
      if (
        index < slides.length &&
        index >= slides.length - swiper.loopedSlides
      ) {
        prependSlides.push(el);
      }
      slide.attr("data-swiper-slide-index", index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append(
        $(appendSlides[i$1].cloneNode(true)).addClass(
          params.slideDuplicateClass
        )
      );
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend(
        $(prependSlides[i$2].cloneNode(true)).addClass(
          params.slideDuplicateClass
        )
      );
    }
  }

  function loopFix() {
    var swiper = this;

    swiper.emit("beforeLoopFix");

    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();

    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    swiper.emit("loopFix");
  }

  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl
      .children(
        "." +
          params.slideClass +
          "." +
          params.slideDuplicateClass +
          ",." +
          params.slideClass +
          "." +
          params.slideBlankClass
      )
      .remove();
    slides.removeAttr("data-swiper-slide-index");
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor(moving) {
    var swiper = this;
    if (
      Support.touch ||
      !swiper.params.simulateTouch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    ) {
      return;
    }
    var el = swiper.el;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
  }

  function unsetGrabCursor() {
    var swiper = this;
    if (
      Support.touch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    ) {
      return;
    }
    swiper.el.style.cursor = "";
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.append(slides[i]);
        }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.prepend(slides[i]);
        }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex =
      activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === "object" && "length" in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) {
          $wrapperEl.append(slides[i$1]);
        }
      }
      newActiveIndex =
        activeIndexBuffer > index
          ? activeIndexBuffer + slides.length
          : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) {
          swiper.slides.eq(indexToRemove).remove();
        }
        if (indexToRemove < newActiveIndex) {
          newActiveIndex -= 1;
        }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) {
        swiper.slides.eq(indexToRemove).remove();
      }
      if (indexToRemove < newActiveIndex) {
        newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var platform = win.navigator.platform;
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      iphone: false,
      ipod: false,
      ipad: false,
      edge: false,
      ie: false,
      firefox: false,
      macos: false,
      windows: false,
      cordova: !!(win.cordova || win.phonegap),
      phonegap: !!(win.cordova || win.phonegap),
      electron: false,
    };

    var screenWidth = win.screen.width;
    var screenHeight = win.screen.height;

    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var ie = ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
    var edge = ua.indexOf("Edge/") >= 0;
    var firefox = ua.indexOf("Gecko/") >= 0 && ua.indexOf("Firefox/") >= 0;
    var windows = platform === "Win32";
    var electron = ua.toLowerCase().indexOf("electron") >= 0;
    var macos = platform === "MacIntel";

    // iPadOs 13 fix
    if (
      !ipad &&
      macos &&
      Support.touch &&
      ((screenWidth === 1024 && screenHeight === 1366) || // Pro 12.9
        (screenWidth === 834 && screenHeight === 1194) || // Pro 11
        (screenWidth === 834 && screenHeight === 1112) || // Pro 10.5
        (screenWidth === 768 && screenHeight === 1024)) // other
    ) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      macos = false;
    }

    device.ie = ie;
    device.edge = edge;
    device.firefox = firefox;

    // Android
    if (android && !windows) {
      device.os = "android";
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf("chrome") >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, ".");
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, ".");
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, ".") : null;
      device.ipod = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf("Version/") >= 0) {
      if (device.osVersion.split(".")[0] === "10") {
        device.osVersion = ua.toLowerCase().split("version/")[1].split(" ")[0];
      }
    }

    // Webview
    device.webView =
      !!(
        (iphone || ipad || ipod) &&
        (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone)
      ) ||
      (win.matchMedia && win.matchMedia("(display-mode: standalone)").matches);
    device.webview = device.webView;
    device.standalone = device.webView;

    // Desktop
    device.desktop = !(device.ios || device.android) || electron;
    if (device.desktop) {
      device.electron = electron;
      device.macos = macos;
      device.windows = windows;
      if (device.macos) {
        device.os = "macos";
      }
      if (device.windows) {
        device.os = "windows";
      }
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  })();

  function onTouchStart(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    var $targetEl = $(e.target);

    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length) {
        return;
      }
    }
    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3) {
      return;
    }
    if (!data.isTouchEvent && "button" in e && e.button > 0) {
      return;
    }
    if (data.isTouched && data.isMoved) {
      return;
    }
    if (
      params.noSwiping &&
      $targetEl.closest(
        params.noSwipingSelector
          ? params.noSwipingSelector
          : "." + params.noSwipingClass
      )[0]
    ) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) {
        return;
      }
    }

    touches.currentX =
      e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY =
      e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    var edgeSwipeDetection =
      params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold =
      params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection &&
      (startX <= edgeSwipeThreshold ||
        startX >= win.screen.width - edgeSwipeThreshold)
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) {
      data.allowThresholdMove = false;
    }
    if (e.type !== "touchstart") {
      var preventDefault = true;
      if ($targetEl.is(data.formElements)) {
        preventDefault = false;
      }
      if (
        doc.activeElement &&
        $(doc.activeElement).is(data.formElements) &&
        doc.activeElement !== $targetEl[0]
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault =
        preventDefault &&
        swiper.allowTouchMove &&
        params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit("touchStart", e);
  }

  function onTouchMove(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    if (data.isTouchEvent && e.type !== "touchmove") {
      return;
    }
    var targetTouch =
      e.type === "touchmove" &&
      e.targetTouches &&
      (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    var pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) {
      return;
    }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (
      swiper.params.threshold &&
      Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) <
        swiper.params.threshold
    ) {
      return;
    }

    if (typeof data.isScrolling === "undefined") {
      var touchAngle;
      if (
        (swiper.isHorizontal() && touches.currentY === touches.startY) ||
        (swiper.isVertical() && touches.currentX === touches.startX)
      ) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle =
            (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (
        touches.currentX !== touches.startX ||
        touches.currentY !== touches.startY
      ) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (
        params.grabCursor &&
        (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
      ) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
    }

    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate =
          swiper.minTranslate() -
          1 +
          Math.pow(
            -swiper.minTranslate() + data.startTranslate + diff,
            resistanceRatio
          );
      }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate =
          swiper.maxTranslate() +
          1 -
          Math.pow(
            swiper.maxTranslate() - data.startTranslate - diff,
            resistanceRatio
          );
      }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (
      !swiper.allowSlideNext &&
      swiper.swipeDirection === "next" &&
      data.currentTranslate < data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (
      !swiper.allowSlidePrev &&
      swiper.swipeDirection === "prev" &&
      data.currentTranslate > data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }

    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal()
            ? touches.currentX - touches.startX
            : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger || params.cssMode) {
      return;
    }

    // Update active index in free mode
    if (
      params.freeMode ||
      params.watchSlidesProgress ||
      params.watchSlidesVisibility
    ) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (
      params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) {
        swiper.allowClick = true;
      }
    });

    if (
      !data.isTouched ||
      !data.isMoved ||
      !swiper.swipeDirection ||
      touches.diff === 0 ||
      data.currentTranslate === data.startTranslate
    ) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.cssMode) {
      return;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) {
          newPosition = -newPosition;
        }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount =
          Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (
            Math.abs(snapGrid[nextSlide] - newPosition) <
              Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
            swiper.swipeDirection === "next"
          ) {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once("transitionEnd", function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs(
              (-newPosition - swiper.translate) / swiper.velocity
            );
          } else {
            momentumDuration = Math.abs(
              (newPosition - swiper.translate) / swiper.velocity
            );
          }
          if (params.freeModeSticky) {
            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            var moveDistance = Math.abs(
              (rtl ? -newPosition : newPosition) - swiper.translate
            );
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
              return;
            }
            swiper.emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(function () {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) {
                  return;
                }
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (
      var i = 0;
      i < slidesGrid.length;
      i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
    ) {
      var increment$1 =
        i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment$1] !== "undefined") {
        if (
          currentPos >= slidesGrid[i] &&
          currentPos < slidesGrid[i + increment$1]
        ) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment$1] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize =
          slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment =
      stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      var isNavButtonTarget =
        swiper.navigation &&
        (e.target === swiper.navigation.nextEl ||
          e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) {
      return;
    }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    swiper.updateSlidesClasses();
    if (
      (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
      swiper.isEnd &&
      !swiper.isBeginning &&
      !swiper.params.centeredSlides
    ) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }

    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) {
        e.preventDefault();
      }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl;
    var rtlTranslate = swiper.rtlTranslate;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      if (rtlTranslate) {
        swiper.translate =
          wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === -0) {
      swiper.translate = 0;
    }

    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(
        rtlTranslate ? -swiper.translate : swiper.translate
      );
    }

    swiper.emit("setTranslate", swiper.translate, false);
  }

  var dummyEventAttached = false;
  function dummyEventListener() {}

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var capture = !!params.nested;

    // Touch Events
    if (!Support.touch && Support.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener =
          touchEvents.start === "touchstart" &&
          Support.passiveListener &&
          params.passiveListeners
            ? { passive: true, capture: false }
            : false;
        el.addEventListener(
          touchEvents.start,
          swiper.onTouchStart,
          passiveListener
        );
        el.addEventListener(
          touchEvents.move,
          swiper.onTouchMove,
          Support.passiveListener
            ? { passive: false, capture: capture }
            : capture
        );
        el.addEventListener(
          touchEvents.end,
          swiper.onTouchEnd,
          passiveListener
        );
        if (touchEvents.cancel) {
          el.addEventListener(
            touchEvents.cancel,
            swiper.onTouchEnd,
            passiveListener
          );
        }
        if (!dummyEventAttached) {
          doc.addEventListener("touchstart", dummyEventListener);
          dummyEventAttached = true;
        }
      }
      if (
        (params.simulateTouch && !Device.ios && !Device.android) ||
        (params.simulateTouch && !Support.touch && Device.ios)
      ) {
        el.addEventListener("mousedown", swiper.onTouchStart, false);
        doc.addEventListener("mousemove", swiper.onTouchMove, capture);
        doc.addEventListener("mouseup", swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.addEventListener("scroll", swiper.onScroll);
    }

    // Resize handler
    if (params.updateOnWindowResize) {
      swiper.on(
        Device.ios || Device.android
          ? "resize orientationchange observerUpdate"
          : "resize observerUpdate",
        onResize,
        true
      );
    } else {
      swiper.on("observerUpdate", onResize, true);
    }
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var capture = !!params.nested;

    // Touch Events
    if (!Support.touch && Support.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener =
          touchEvents.start === "onTouchStart" &&
          Support.passiveListener &&
          params.passiveListeners
            ? { passive: true, capture: false }
            : false;
        el.removeEventListener(
          touchEvents.start,
          swiper.onTouchStart,
          passiveListener
        );
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(
          touchEvents.end,
          swiper.onTouchEnd,
          passiveListener
        );
        if (touchEvents.cancel) {
          el.removeEventListener(
            touchEvents.cancel,
            swiper.onTouchEnd,
            passiveListener
          );
        }
      }
      if (
        (params.simulateTouch && !Device.ios && !Device.android) ||
        (params.simulateTouch && !Support.touch && Device.ios)
      ) {
        el.removeEventListener("mousedown", swiper.onTouchStart, false);
        doc.removeEventListener("mousemove", swiper.onTouchMove, capture);
        doc.removeEventListener("mouseup", swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener("click", swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.removeEventListener("scroll", swiper.onScroll);
    }

    // Resize handler
    swiper.off(
      Device.ios || Device.android
        ? "resize orientationchange observerUpdate"
        : "resize observerUpdate",
      onResize
    );
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides;
    if (loopedSlides === void 0) loopedSlides = 0;
    var params = swiper.params;
    var $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (
      !breakpoints ||
      (breakpoints && Object.keys(breakpoints).length === 0)
    ) {
      return;
    }

    // Get breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams =
        breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        [
          "slidesPerView",
          "spaceBetween",
          "slidesPerGroup",
          "slidesPerGroupSkip",
          "slidesPerColumn",
        ].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === "undefined") {
            return;
          }
          if (
            param === "slidesPerView" &&
            (paramValue === "AUTO" || paramValue === "auto")
          ) {
            breakpointOnlyParams[param] = "auto";
          } else if (param === "slidesPerView") {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(
          params.containerModifierClass +
            "multirow " +
            params.containerModifierClass +
            "multirow-column"
        );
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");
        if (breakpointParams.slidesPerColumnFill === "column") {
          $el.addClass(params.containerModifierClass + "multirow-column");
        }
      }

      var directionChanged =
        breakpointParams.direction &&
        breakpointParams.direction !== params.direction;
      var needsReLoop =
        params.loop &&
        (breakpointParams.slidesPerView !== params.slidesPerView ||
          directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(
          activeIndex - loopedSlides + swiper.loopedSlides,
          0,
          false
        );
      }

      swiper.emit("breakpoint", breakpointParams);
    }
  }

  function getBreakpoint(breakpoints) {
    // Get breakpoint for window width
    if (!breakpoints) {
      return undefined;
    }
    var breakpoint = false;

    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = win.innerHeight * minRatio;
        return { value: value, point: point };
      }
      return { value: point, point: point };
    });

    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });
    for (var i = 0; i < points.length; i += 1) {
      var ref = points[i];
      var point = ref.point;
      var value = ref.value;
      if (value <= win.innerWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }

  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint,
  };

  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push("initialized");
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push("free-mode");
    }
    if (params.autoHeight) {
      suffixes.push("autoheight");
    }
    if (rtl) {
      suffixes.push("rtl");
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push("multirow");
      if (params.slidesPerColumnFill === "column") {
        suffixes.push("multirow-column");
      }
    }
    if (Device.android) {
      suffixes.push("android");
    }
    if (Device.ios) {
      suffixes.push("ios");
    }

    if (params.cssMode) {
      suffixes.push("css-mode");
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(" "));
  }

  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(" "));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) {
        callback();
      }
    }
    var isPicture = $(imageEl).parent("picture")[0];

    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (
        typeof swiper === "undefined" ||
        swiper === null ||
        !swiper ||
        swiper.destroyed
      ) {
        return;
      }
      if (swiper.imagesLoaded !== undefined) {
        swiper.imagesLoaded += 1;
      }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) {
          swiper.update();
        }
        swiper.emit("imagesReady");
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute("src"),
        imageEl.srcset || imageEl.getAttribute("srcset"),
        imageEl.sizes || imageEl.getAttribute("sizes"),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition =
      swiper.slides.length > 0 &&
      params.slidesOffsetBefore +
        params.spaceBetween * (swiper.slides.length - 1) +
        swiper.slides[0].offsetWidth * swiper.slides.length;

    if (
      params.slidesOffsetBefore &&
      params.slidesOffsetAfter &&
      lastSlidePosition
    ) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }

    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      if (swiper.navigation) {
        swiper.navigation.update();
      }
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: "slide", // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: "swiper-container-", // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/ (function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];
      var el;
      var params;
      if (
        args.length === 1 &&
        args[0].constructor &&
        args[0].constructor === Object
      ) {
        params = args[0];
      } else {
        (assign = args), (el = assign[0]), (params = assign[1]);
      }
      if (!params) {
        params = {};
      }

      params = Utils.extend({}, params);
      if (el && !params.el) {
        params.el = el;
      }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] =
              prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === "undefined") {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== "object" || moduleParams === null) {
            return;
          }
          if (!(moduleParamName in params && "enabled" in moduleParams)) {
            return;
          }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === "object" &&
            !("enabled" in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) {
            params[moduleParamName] = { enabled: false };
          }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data("swiper", swiper);

      // Find Wrapper
      var $wrapperEl;
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = $(
          el.shadowRoot.querySelector("." + swiper.params.wrapperClass)
        );
        // Children needs to return slot items
        $wrapperEl.children = function (options) {
          return $el.children(options);
        };
      } else {
        $wrapperEl = $el.children("." + swiper.params.wrapperClass);
      }
      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical: function isVertical() {
          return swiper.params.direction === "vertical";
        },
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate:
          swiper.params.direction === "horizontal" &&
          (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box",

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          var desktop = ["mousedown", "mousemove", "mouseup"];
          if (Support.pointerEvents) {
            desktop = ["pointerdown", "pointermove", "pointerup"];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch
            ? swiper.touchEventsTouch
            : swiper.touchEventsDesktop;
        })(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: "input, select, option, textarea, button, video, label",
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,
      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if (SwiperClass) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = {
      extendedDefaults: { configurable: true },
      defaults: { configurable: true },
      Class: { configurable: true },
      $: { configurable: true },
    };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) {
        return;
      }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate
          ? swiper.translate * -1
          : swiper.translate;
        var newTranslate = Math.min(
          Math.max(translateValue, swiper.maxTranslate()),
          swiper.minTranslate()
        );
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if (
          (swiper.params.slidesPerView === "auto" ||
            swiper.params.slidesPerView > 1) &&
          swiper.isEnd &&
          !swiper.params.centeredSlides
        ) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    };

    Swiper.prototype.changeDirection = function changeDirection(
      newDirection,
      needUpdate
    ) {
      if (needUpdate === void 0) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection =
          currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (
        newDirection === currentDirection ||
        (newDirection !== "horizontal" && newDirection !== "vertical")
      ) {
        return swiper;
      }

      swiper.$el
        .removeClass(
          "" + swiper.params.containerModifierClass + currentDirection
        )
        .addClass("" + swiper.params.containerModifierClass + newDirection);

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });

      swiper.emit("changeDirection");
      if (needUpdate) {
        swiper.update();
      }

      return swiper;
    };

    Swiper.prototype.init = function init() {
      var swiper = this;
      if (swiper.initialized) {
        return;
      }

      swiper.emit("beforeInit");

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(
          swiper.params.initialSlide + swiper.loopedSlides,
          0,
          swiper.params.runCallbacksOnInit
        );
      } else {
        swiper.slideTo(
          swiper.params.initialSlide,
          0,
          swiper.params.runCallbacksOnInit
        );
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit("init");
    };

    Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) deleteInstance = true;
      if (cleanStyles === void 0) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }

      swiper.emit("beforeDestroy");

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides
            .removeClass(
              [
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass,
              ].join(" ")
            )
            .removeAttr("style")
            .removeAttr("data-swiper-slide-index");
        }
      }

      swiper.emit("destroy");

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data("swiper", null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties(Swiper, staticAccessors);

    return Swiper;
  })(SwiperClass);

  var Device$1 = {
    name: "device",
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: "support",
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (
        ua.indexOf("safari") >= 0 &&
        ua.indexOf("chrome") < 0 &&
        ua.indexOf("android") < 0
      );
    }
    return {
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        win.navigator.userAgent
      ),
    };
  })();

  var Browser$1 = {
    name: "browser",
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: "resize",
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }
            swiper.emit("beforeResize");
            swiper.emit("resize");
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }
            swiper.emit("orientationchange");
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener("resize", swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener(
          "orientationchange",
          swiper.resize.orientationChangeHandler
        );
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener("resize", swiper.resize.resizeHandler);
        win.removeEventListener(
          "orientationchange",
          swiper.resize.orientationChangeHandler
        );
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if (options === void 0) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit("observerUpdate", mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit("observerUpdate", mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes:
          typeof options.attributes === "undefined" ? true : options.attributes,
        childList:
          typeof options.childList === "undefined" ? true : options.childList,
        characterData:
          typeof options.characterData === "undefined"
            ? true
            : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) {
        return;
      }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren,
      });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: "observer",
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) {
        offsetProp = "right";
      } else {
        offsetProp = swiper.isHorizontal() ? "left" : "top";
      }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (
          swiper.slidesGrid !== previousSlidesGrid &&
          offset !== previousOffset
        ) {
          swiper.slides.css(offsetProp, offset + "px");
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          })(),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl
              .find(
                "." +
                  swiper.params.slideClass +
                  '[data-swiper-slide-index="' +
                  i +
                  '"]'
              )
              .remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) {
              appendIndexes.push(i$1);
            }
            if (i$1 < previousFrom) {
              prependIndexes.push(i$1);
            }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes
        .sort(function (a, b) {
          return b - a;
        })
        .forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
      swiper.$wrapperEl
        .children(".swiper-slide")
        .css(offsetProp, offset + "px");
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(
            '<div class="' +
              swiper.params.slideClass +
              '" data-swiper-slide-index="' +
              index +
              '">' +
              slide +
              "</div>"
          );
      if (!$slideEl.attr("data-swiper-slide-index")) {
        $slideEl.attr("data-swiper-slide-index", index);
      }
      if (params.cache) {
        swiper.virtual.cache[index] = $slideEl;
      }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === "object" && "length" in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.push(slides[i]);
          }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.unshift(slides[i]);
          }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          var $cachedEl = cache[cachedIndex];
          var cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
          if (cachedElIndex) {
            $cachedEl.attr(
              "data-swiper-slide-index",
              parseInt(cachedElIndex, 10) + 1
            );
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null) {
        return;
      }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) {
            activeIndex -= 1;
          }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) {
          activeIndex -= 1;
        }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: "virtual",
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) {
          return;
        }
        swiper.classNames.push(
          swiper.params.containerModifierClass + "virtual"
        );
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) {
          return;
        }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) {
        e = e.originalEvent;
      } // jquery fix
      var kc = e.keyCode || e.charCode;
      var pageUpDown = swiper.params.keyboard.pageUpDown;
      var isPageUp = pageUpDown && kc === 33;
      var isPageDown = pageUpDown && kc === 34;
      var isArrowLeft = kc === 37;
      var isArrowRight = kc === 39;
      var isArrowUp = kc === 38;
      var isArrowDown = kc === 40;
      // Directions locks
      if (
        !swiper.allowSlideNext &&
        ((swiper.isHorizontal() && isArrowRight) ||
          (swiper.isVertical() && isArrowDown) ||
          isPageDown)
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        ((swiper.isHorizontal() && isArrowLeft) ||
          (swiper.isVertical() && isArrowUp) ||
          isPageUp)
      ) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (
        doc.activeElement &&
        doc.activeElement.nodeName &&
        (doc.activeElement.nodeName.toLowerCase() === "input" ||
          doc.activeElement.nodeName.toLowerCase() === "textarea")
      ) {
        return undefined;
      }
      if (
        swiper.params.keyboard.onlyInViewport &&
        (isPageUp ||
          isPageDown ||
          isArrowLeft ||
          isArrowRight ||
          isArrowUp ||
          isArrowDown)
      ) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (
          swiper.$el.parents("." + swiper.params.slideClass).length > 0 &&
          swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0
        ) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) {
          swiperOffset.left -= swiper.$el[0].scrollLeft;
        }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
        ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 &&
            point[0] <= windowWidth &&
            point[1] >= 0 &&
            point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) {
          return undefined;
        }
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        if (
          ((isPageDown || isArrowRight) && !rtl) ||
          ((isPageUp || isArrowLeft) && rtl)
        ) {
          swiper.slideNext();
        }
        if (
          ((isPageUp || isArrowLeft) && !rtl) ||
          ((isPageDown || isArrowRight) && rtl)
        ) {
          swiper.slidePrev();
        }
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        if (isPageDown || isArrowDown) {
          swiper.slideNext();
        }
        if (isPageUp || isArrowUp) {
          swiper.slidePrev();
        }
      }
      swiper.emit("keyPress", kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) {
        return;
      }
      $(doc).on("keydown", swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) {
        return;
      }
      $(doc).off("keydown", swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = "onwheel";
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }

    if (
      !isSupported &&
      doc.implementation &&
      doc.implementation.hasFeature &&
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      doc.implementation.hasFeature("", "") !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature("Events.wheel", "3.0");
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
      if (win.navigator.userAgent.indexOf("firefox") > -1) {
        return "DOMMouseScroll";
      }
      return isEventSupported() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }

      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (swiper.params.cssMode) {
        e.preventDefault();
      }

      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== "container") {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      if (
        !swiper.mouseEntered &&
        !target[0].contains(e.target) &&
        !params.releaseOnEdges
      ) {
        return true;
      }

      if (e.originalEvent) {
        e = e.originalEvent;
      } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
            delta = -data.pixelX * rtlFactor;
          } else {
            return true;
          }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
          delta = -data.pixelY;
        } else {
          return true;
        }
      } else {
        delta =
          Math.abs(data.pixelX) > Math.abs(data.pixelY)
            ? -data.pixelX * rtlFactor
            : -data.pixelY;
      }

      if (delta === 0) {
        return true;
      }

      if (params.invert) {
        delta = -delta;
      }

      if (!swiper.params.freeMode) {
        // Register the new event in a variable which stores the relevant data
        var newEvent = {
          time: Utils.now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event,
        };

        // Keep the most recent events
        var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }
        var prevEvent = recentWheelEvents.length
          ? recentWheelEvents[recentWheelEvents.length - 1]
          : undefined;
        recentWheelEvents.push(newEvent);

        // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.
        if (prevEvent) {
          if (
            newEvent.direction !== prevEvent.direction ||
            newEvent.delta > prevEvent.delta ||
            newEvent.time > prevEvent.time + 150
          ) {
            swiper.mousewheel.animateSlider(newEvent);
          }
        } else {
          swiper.mousewheel.animateSlider(newEvent);
        }

        // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.
        if (swiper.mousewheel.releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:

        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        var newEvent$1 = {
          time: Utils.now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
        };
        var ref = swiper.mousewheel;
        var lastEventBeforeSnap = ref.lastEventBeforeSnap;
        var ignoreWheelEvents =
          lastEventBeforeSnap &&
          newEvent$1.time < lastEventBeforeSnap.time + 500 &&
          newEvent$1.delta <= lastEventBeforeSnap.delta &&
          newEvent$1.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          swiper.mousewheel.lastEventBeforeSnap = undefined;

          if (swiper.params.loop) {
            swiper.loopFix();
          }
          var position = swiper.getTranslate() + delta * params.sensitivity;
          var wasBeginning = swiper.isBeginning;
          var wasEnd = swiper.isEnd;

          if (position >= swiper.minTranslate()) {
            position = swiper.minTranslate();
          }
          if (position <= swiper.maxTranslate()) {
            position = swiper.maxTranslate();
          }

          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();

          if (
            (!wasBeginning && swiper.isBeginning) ||
            (!wasEnd && swiper.isEnd)
          ) {
            swiper.updateSlidesClasses();
          }

          if (swiper.params.freeModeSticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(swiper.mousewheel.timeout);
            swiper.mousewheel.timeout = undefined;
            var recentWheelEvents$1 = swiper.mousewheel.recentWheelEvents;
            if (recentWheelEvents$1.length >= 15) {
              recentWheelEvents$1.shift(); // only store the last N events
            }
            var prevEvent$1 = recentWheelEvents$1.length
              ? recentWheelEvents$1[recentWheelEvents$1.length - 1]
              : undefined;
            var firstEvent = recentWheelEvents$1[0];
            recentWheelEvents$1.push(newEvent$1);
            if (
              prevEvent$1 &&
              (newEvent$1.delta > prevEvent$1.delta ||
                newEvent$1.direction !== prevEvent$1.direction)
            ) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents$1.splice(0);
            } else if (
              recentWheelEvents$1.length >= 15 &&
              newEvent$1.time - firstEvent.time < 500 &&
              firstEvent.delta - newEvent$1.delta >= 1 &&
              newEvent$1.delta <= 6
            ) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
              swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
              recentWheelEvents$1.splice(0);
              swiper.mousewheel.timeout = Utils.nextTick(function () {
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  undefined,
                  snapToThreshold
                );
              }, 0); // no delay; move on next tick
            }
            if (!swiper.mousewheel.timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              swiper.mousewheel.timeout = Utils.nextTick(function () {
                var snapToThreshold = 0.5;
                swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                recentWheelEvents$1.splice(0);
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  undefined,
                  snapToThreshold
                );
              }, 500);
            }
          }

          // Emit event
          if (!ignoreWheelEvents) {
            swiper.emit("scroll", e);
          }

          // Stop autoplay
          if (
            swiper.params.autoplay &&
            swiper.params.autoplayDisableOnInteraction
          ) {
            swiper.autoplay.stop();
          }
          // Return page scroll on edge positions
          if (
            position === swiper.minTranslate() ||
            position === swiper.maxTranslate()
          ) {
            return true;
          }
        }
      }

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return false;
    },
    animateSlider: function animateSlider(newEvent) {
      var swiper = this;
      // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).
      if (
        newEvent.delta >= 6 &&
        Utils.now() - swiper.mousewheel.lastScrollTime < 60
      ) {
        // Return false as a default
        return true;
      }
      // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          swiper.emit("scroll", newEvent.raw);
        }
      } else if (
        (!swiper.isBeginning || swiper.params.loop) &&
        !swiper.animating
      ) {
        swiper.slidePrev();
        swiper.emit("scroll", newEvent.raw);
      }
      // If you got here is because an animation has been triggered so store the current time
      swiper.mousewheel.lastScrollTime = new win.Date().getTime();
      // Return false as a default
      return false;
    },
    releaseScroll: function releaseScroll(newEvent) {
      var swiper = this;
      var params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (
        swiper.isBeginning &&
        !swiper.params.loop &&
        params.releaseOnEdges
      ) {
        // Return true to animate scroll on edges
        return true;
      }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      var event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) {
        return false;
      }
      if (swiper.mousewheel.enabled) {
        return false;
      }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== "container") {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on("mouseenter", swiper.mousewheel.handleMouseEnter);
      target.on("mouseleave", swiper.mousewheel.handleMouseLeave);
      target.on(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      var event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) {
        return false;
      }
      if (!swiper.mousewheel.enabled) {
        return false;
      }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== "container") {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: "container",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          animateSlider: Mousewheel.animateSlider.bind(swiper),
          releaseScroll: Mousewheel.releaseScroll.bind(swiper),
          lastScrollTime: Utils.now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          swiper.mousewheel.disable();
        }
        if (swiper.params.mousewheel.enabled) {
          swiper.mousewheel.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.cssMode) {
          swiper.mousewheel.enable();
        }
        if (swiper.mousewheel.enabled) {
          swiper.mousewheel.disable();
        }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) {
        return;
      }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[
          swiper.params.watchOverflow && swiper.isLocked
            ? "addClass"
            : "removeClass"
        ](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[
          swiper.params.watchOverflow && swiper.isLocked
            ? "addClass"
            : "removeClass"
        ](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) {
        return;
      }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) {
        return;
      }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) {
        return;
      }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.nextEl === "string" &&
          $nextEl.length > 1 &&
          swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.prevEl === "string" &&
          $prevEl.length > 1 &&
          swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick &&
          !$(e.target).is($prevEl) &&
          !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit("navigationShow", swiper);
          } else {
            swiper.emit("navigationHide", swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      ) {
        return;
      }
      var slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop
        ? Math.ceil(
            (slidesLength - swiper.loopedSlides * 2) /
              swiper.params.slidesPerGroup
          )
        : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil(
          (swiper.activeIndex - swiper.loopedSlides) /
            swiper.params.slidesPerGroup
        );
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1) {
          current -= total;
        }
        if (current < 0 && swiper.params.paginationType !== "bullets") {
          current = total + current;
        }
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (
        params.type === "bullets" &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length > 0
      ) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets
            .eq(0)
            [swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(
            swiper.isHorizontal() ? "width" : "height",
            swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) +
              "px"
          );
          if (
            params.dynamicMainBullets > 1 &&
            swiper.previousIndex !== undefined
          ) {
            swiper.pagination.dynamicBulletIndex +=
              current - swiper.previousIndex;
            if (
              swiper.pagination.dynamicBulletIndex >
              params.dynamicMainBullets - 1
            ) {
              swiper.pagination.dynamicBulletIndex =
                params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex =
            firstIndex +
            (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(
          params.bulletActiveClass +
            " " +
            params.bulletActiveClass +
            "-next " +
            params.bulletActiveClass +
            "-next-next " +
            params.bulletActiveClass +
            "-prev " +
            params.bulletActiveClass +
            "-prev-prev " +
            params.bulletActiveClass +
            "-main"
        );
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + "-main");
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev-prev");
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(params.bulletActiveClass + "-next")
                  .next()
                  .addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var i$1 = params.dynamicMainBullets; i$1 >= 0; i$1 -= 1) {
                  bullets
                    .eq(bullets.length - i$1)
                    .addClass(params.bulletActiveClass + "-main");
                }
                bullets
                  .eq(bullets.length - params.dynamicMainBullets - 1)
                  .addClass(params.bulletActiveClass + "-prev");
              } else {
                $firstDisplayedBullet
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet
                  .next()
                  .addClass(params.bulletActiveClass + "-next")
                  .next()
                  .addClass(params.bulletActiveClass + "-next-next");
              }
            } else {
              $firstDisplayedBullet
                .prev()
                .addClass(params.bulletActiveClass + "-prev")
                .prev()
                .addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet
                .next()
                .addClass(params.bulletActiveClass + "-next")
                .next()
                .addClass(params.bulletActiveClass + "-next-next");
            }
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(
            bullets.length,
            params.dynamicMainBullets + 4
          );
          var bulletsOffset =
            (swiper.pagination.bulletSize * dynamicBulletsLength -
              swiper.pagination.bulletSize) /
              2 -
            midIndex * swiper.pagination.bulletSize;
          var offsetProp = rtl ? "right" : "left";
          bullets.css(
            swiper.isHorizontal() ? offsetProp : "top",
            bulletsOffset + "px"
          );
        }
      }
      if (params.type === "fraction") {
        $el
          .find("." + params.currentClass)
          .text(params.formatFractionCurrent(current + 1));
        $el
          .find("." + params.totalClass)
          .text(params.formatFractionTotal(total));
      }
      if (params.type === "progressbar") {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal()
            ? "vertical"
            : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal()
            ? "horizontal"
            : "vertical";
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el
          .find("." + params.progressbarFillClass)
          .transform(
            "translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")"
          )
          .transition(swiper.params.speed);
      }
      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit("paginationRender", swiper, $el[0]);
      } else {
        swiper.emit("paginationUpdate", swiper, $el[0]);
      }
      $el[
        swiper.params.watchOverflow && swiper.isLocked
          ? "addClass"
          : "removeClass"
      ](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      ) {
        return;
      }
      var slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = "";
      if (params.type === "bullets") {
        var numberOfBullets = swiper.params.loop
          ? Math.ceil(
              (slidesLength - swiper.loopedSlides * 2) /
                swiper.params.slidesPerGroup
            )
          : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(
              swiper,
              i,
              params.bulletClass
            );
          } else {
            paginationHTML +=
              "<" +
              params.bulletElement +
              ' class="' +
              params.bulletClass +
              '"></' +
              params.bulletElement +
              ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find("." + params.bulletClass);
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(
            swiper,
            params.currentClass,
            params.totalClass
          );
        } else {
          paginationHTML =
            '<span class="' +
            params.currentClass +
            '"></span>' +
            " / " +
            '<span class="' +
            params.totalClass +
            '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(
            swiper,
            params.progressbarFillClass
          );
        } else {
          paginationHTML =
            '<span class="' + params.progressbarFillClass + '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type !== "custom") {
        swiper.emit("paginationRender", swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) {
        return;
      }

      var $el = $(params.el);
      if ($el.length === 0) {
        return;
      }

      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on("click", "." + params.bulletClass, function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) {
            index += swiper.loopedSlides;
          }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      ) {
        return;
      }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) {
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      }
      if (params.clickable) {
        $el.off("click", "." + params.bulletClass);
      }
    },
  };

  var Pagination$1 = {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-", // NEW
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable", // NEW
        lockClass: "swiper-pagination-lock",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === "undefined") {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          swiper.pagination.$el.length > 0 &&
          !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(
            swiper.params.pagination.hiddenClass
          );
          if (isHidden === true) {
            swiper.emit("paginationShow", swiper);
          } else {
            swiper.emit("paginationHide", swiper);
          }
          swiper.pagination.$el.toggleClass(
            swiper.params.pagination.hiddenClass
          );
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
        $dragEl[0].style.width = newSize + "px";
      } else {
        $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = "";
      $dragEl[0].style.height = "";
      var trackSize = swiper.isHorizontal()
        ? $el[0].offsetWidth
        : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = "none";
      } else {
        $el[0].style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[
        swiper.params.watchOverflow && swiper.isLocked
          ? "addClass"
          : "removeClass"
      ](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
      var swiper = this;
      if (swiper.isHorizontal()) {
        return e.type === "touchstart" || e.type === "touchmove"
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      return e.type === "touchstart" || e.type === "touchmove"
        ? e.targetTouches[0].clientY
        : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var dragStartPos = scrollbar.dragStartPos;

      var positionRatio;
      positionRatio =
        (scrollbar.getPointerPosition(e) -
          $el.offset()[swiper.isHorizontal() ? "left" : "top"] -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position =
        swiper.minTranslate() +
        (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos =
        e.target === $dragEl[0] || e.target === $dragEl
          ? scrollbar.getPointerPosition(e) -
            e.target.getBoundingClientRect()[
              swiper.isHorizontal() ? "left" : "top"
            ]
          : null;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css("opacity", 1);
      }
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css("scroll-snap-type", "none");
      }
      swiper.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit("scrollbarDragMove", e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) {
        return;
      }
      swiper.scrollbar.isTouched = false;
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css("scroll-snap-type", "");
        $wrapperEl.transition("");
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css("opacity", 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: false, capture: false }
          : false;
      var passiveListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      if (!Support.touch) {
        target.addEventListener(
          touchEventsDesktop.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        doc.addEventListener(
          touchEventsDesktop.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        doc.addEventListener(
          touchEventsDesktop.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      } else {
        target.addEventListener(
          touchEventsTouch.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        target.addEventListener(
          touchEventsTouch.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        target.addEventListener(
          touchEventsTouch.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: false, capture: false }
          : false;
      var passiveListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      if (!Support.touch) {
        target.removeEventListener(
          touchEventsDesktop.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        doc.removeEventListener(
          touchEventsDesktop.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        doc.removeEventListener(
          touchEventsDesktop.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      } else {
        target.removeEventListener(
          touchEventsTouch.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        target.removeEventListener(
          touchEventsTouch.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        target.removeEventListener(
          touchEventsTouch.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1 &&
        $swiperEl.find(params.el).length === 1
      ) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
      if ($dragEl.length === 0) {
        $dragEl = $(
          '<div class="' + swiper.params.scrollbar.dragClass + '"></div>'
        );
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr("data-swiper-parallax") || "0";
      var x = $el.attr("data-swiper-parallax-x");
      var y = $el.attr("data-swiper-parallax-y");
      var scale = $el.attr("data-swiper-parallax-scale");
      var opacity = $el.attr("data-swiper-parallax-opacity");

      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }

      if (x.indexOf("%") >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + "%";
      } else {
        x = x * progress * rtlFactor + "px";
      }
      if (y.indexOf("%") >= 0) {
        y = parseInt(y, 10) * progress + "%";
      } else {
        y = y * progress + "px";
      }

      if (typeof opacity !== "undefined" && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === "undefined" || scale === null) {
        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
      } else {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform(
          "translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"
        );
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el
        .children(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (
          swiper.params.slidesPerGroup > 1 &&
          swiper.params.slidesPerView !== "auto"
        ) {
          slideProgress +=
            Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl)
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el
        .find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration =
            parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) ||
            duration;
          if (duration === 0) {
            parallaxDuration = 0;
          }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: "parallax",
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (
          e.type !== "touchstart" ||
          (e.type === "touchstart" && e.targetTouches.length < 2)
        ) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
        if (gesture.$slideEl.length === 0) {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        );
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
        gesture.maxRatio =
          gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (
          e.type !== "touchmove" ||
          (e.type === "touchmove" && e.targetTouches.length < 2)
        ) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale =
          (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale =
          gesture.maxRatio -
          1 +
          Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale =
          params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.$imageEl.transform(
        "translate3d(0,0,0) scale(" + zoom.scale + ")"
      );
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (
          e.type !== "touchend" ||
          (e.type === "touchend" &&
            e.changedTouches.length < 2 &&
            !Device.android)
        ) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      zoom.scale = Math.max(
        Math.min(zoom.scale, gesture.maxRatio),
        params.minRatio
      );
      gesture.$imageEl
        .transition(swiper.params.speed)
        .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) {
        gesture.$slideEl = undefined;
      }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (image.isTouched) {
        return;
      }
      if (Device.android && e.cancelable) {
        e.preventDefault();
      }
      image.isTouched = true;
      image.touchesStart.x =
        e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y =
        e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) {
        return;
      }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], "x") || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], "y") || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (
        scaledWidth < gesture.slideWidth &&
        scaledHeight < gesture.slideHeight
      ) {
        return;
      }

      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x =
        e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y =
        e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal() &&
          ((Math.floor(image.minX) === Math.floor(image.startX) &&
            image.touchesCurrent.x < image.touchesStart.x) ||
            (Math.floor(image.maxX) === Math.floor(image.startX) &&
              image.touchesCurrent.x > image.touchesStart.x))
        ) {
          image.isTouched = false;
          return;
        }
        if (
          !swiper.isHorizontal() &&
          ((Math.floor(image.minY) === Math.floor(image.startY) &&
            image.touchesCurrent.y < image.touchesStart.y) ||
            (Math.floor(image.maxY) === Math.floor(image.startY) &&
              image.touchesCurrent.y > image.touchesStart.y))
        ) {
          image.isTouched = false;
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();

      image.isMoved = true;
      image.currentX =
        image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY =
        image.touchesCurrent.y - image.touchesStart.y + image.startY;

      if (image.currentX < image.minX) {
        image.currentX =
          image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX =
          image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }

      if (image.currentY < image.minY) {
        image.currentY =
          image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY =
          image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      }

      // Velocity
      if (!velocity.prevPositionX) {
        velocity.prevPositionX = image.touchesCurrent.x;
      }
      if (!velocity.prevPositionY) {
        velocity.prevPositionY = image.touchesCurrent.y;
      }
      if (!velocity.prevTime) {
        velocity.prevTime = Date.now();
      }
      velocity.x =
        (image.touchesCurrent.x - velocity.prevPositionX) /
        (Date.now() - velocity.prevTime) /
        2;
      velocity.y =
        (image.touchesCurrent.y - velocity.prevPositionY) /
        (Date.now() - velocity.prevTime) /
        2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
        velocity.x = 0;
      }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
        velocity.y = 0;
      }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(
        "translate3d(" + image.currentX + "px, " + image.currentY + "px,0)"
      );
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) {
        momentumDurationX = Math.abs(
          (newPositionX - image.currentX) / velocity.x
        );
      }
      if (velocity.y !== 0) {
        momentumDurationY = Math.abs(
          (newPositionY - image.currentY) / velocity.y
        );
      }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(
        Math.min(image.currentX, image.maxX),
        image.minX
      );
      image.currentY = Math.max(
        Math.min(image.currentY, image.maxY),
        image.minY
      );

      gesture.$imageWrapEl
        .transition(momentumDuration)
        .transform(
          "translate3d(" + image.currentX + "px, " + image.currentY + "px,0)"
        );
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
        }
        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform("translate3d(0,0,0)");
        }

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        if (
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
        ) {
          gesture.$slideEl = swiper.$wrapperEl.children(
            "." + swiper.params.slideActiveClass
          );
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        );
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      gesture.$slideEl.addClass("" + params.zoomedSlideClass);

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      zoom.currentScale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl
        .transition(300)
        .transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
      gesture.$imageEl
        .transition(300)
        .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        if (
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
        ) {
          gesture.$slideEl = swiper.$wrapperEl.children(
            "." + swiper.params.slideActiveClass
          );
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        );
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) {
        return;
      }
      zoom.enabled = true;

      var passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        Support.passiveListener &&
        swiper.params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      var activeListenerWithCapture = Support.passiveListener
        ? { passive: false, capture: true }
        : true;

      var slideSelector = "." + swiper.params.slideClass;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on(
          "gesturestart",
          slideSelector,
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.on(
          "gesturechange",
          slideSelector,
          zoom.onGestureChange,
          passiveListener
        );
        swiper.$wrapperEl.on(
          "gestureend",
          slideSelector,
          zoom.onGestureEnd,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.on(
          swiper.touchEvents.start,
          slideSelector,
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.move,
          slideSelector,
          zoom.onGestureChange,
          activeListenerWithCapture
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.end,
          slideSelector,
          zoom.onGestureEnd,
          passiveListener
        );
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(
            swiper.touchEvents.cancel,
            slideSelector,
            zoom.onGestureEnd,
            passiveListener
          );
        }
      }

      // Move image
      swiper.$wrapperEl.on(
        swiper.touchEvents.move,
        "." + swiper.params.zoom.containerClass,
        zoom.onTouchMove,
        activeListenerWithCapture
      );
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) {
        return;
      }

      swiper.zoom.enabled = false;

      var passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        Support.passiveListener &&
        swiper.params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      var activeListenerWithCapture = Support.passiveListener
        ? { passive: false, capture: true }
        : true;

      var slideSelector = "." + swiper.params.slideClass;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off(
          "gesturestart",
          slideSelector,
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.off(
          "gesturechange",
          slideSelector,
          zoom.onGestureChange,
          passiveListener
        );
        swiper.$wrapperEl.off(
          "gestureend",
          slideSelector,
          zoom.onGestureEnd,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.off(
          swiper.touchEvents.start,
          slideSelector,
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.move,
          slideSelector,
          zoom.onGestureChange,
          activeListenerWithCapture
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.end,
          slideSelector,
          zoom.onGestureEnd,
          passiveListener
        );
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(
            swiper.touchEvents.cancel,
            slideSelector,
            zoom.onGestureEnd,
            passiveListener
          );
        }
      }

      // Move image
      swiper.$wrapperEl.off(
        swiper.touchEvents.move,
        "." + swiper.params.zoom.containerClass,
        zoom.onTouchMove,
        activeListenerWithCapture
      );
    },
  };

  var Zoom$1 = {
    name: "zoom",
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
        .split(" ")
        .forEach(function (methodName) {
          zoom[methodName] = Zoom[methodName].bind(swiper);
        });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, "scale", {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl
              ? swiper.zoom.gesture.$imageEl[0]
              : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl
              ? swiper.zoom.gesture.$slideEl[0]
              : undefined;
            swiper.emit("zoomChange", value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) {
          return;
        }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) {
          return;
        }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (
          swiper.params.zoom.enabled &&
          swiper.zoom.enabled &&
          swiper.params.zoom.toggle
        ) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (
          swiper.zoom.enabled &&
          swiper.params.zoom.enabled &&
          swiper.params.cssMode
        ) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === "undefined") {
        return;
      }
      if (swiper.slides.length === 0) {
        return;
      }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(
            "." +
              swiper.params.slideClass +
              '[data-swiper-slide-index="' +
              index +
              '"]'
          )
        : swiper.slides.eq(index);

      var $images = $slideEl.find(
        "." +
          params.elementClass +
          ":not(." +
          params.loadedClass +
          "):not(." +
          params.loadingClass +
          ")"
      );
      if (
        $slideEl.hasClass(params.elementClass) &&
        !$slideEl.hasClass(params.loadedClass) &&
        !$slideEl.hasClass(params.loadingClass)
      ) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) {
        return;
      }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr("data-background");
        var src = $imageEl.attr("data-src");
        var srcset = $imageEl.attr("data-srcset");
        var sizes = $imageEl.attr("data-sizes");
        var $pictureEl = $imageEl.parent("picture");

        swiper.loadImage(
          $imageEl[0],
          src || background,
          srcset,
          sizes,
          false,
          function () {
            if (
              typeof swiper === "undefined" ||
              swiper === null ||
              !swiper ||
              (swiper && !swiper.params) ||
              swiper.destroyed
            ) {
              return;
            }
            if (background) {
              $imageEl.css("background-image", 'url("' + background + '")');
              $imageEl.removeAttr("data-background");
            } else {
              if (srcset) {
                $imageEl.attr("srcset", srcset);
                $imageEl.removeAttr("data-srcset");
              }
              if (sizes) {
                $imageEl.attr("sizes", sizes);
                $imageEl.removeAttr("data-sizes");
              }
              if ($pictureEl.length) {
                $pictureEl
                  .children("source")
                  .each(function (sourceIndex, sourceEl) {
                    var $source = $(sourceEl);

                    if ($source.attr("data-srcset")) {
                      $source.attr("srcset", $source.attr("data-srcset"));
                      $source.removeAttr("data-srcset");
                    }
                  });
              }
              if (src) {
                $imageEl.attr("src", src);
                $imageEl.removeAttr("data-src");
              }
            }

            $imageEl
              .addClass(params.loadedClass)
              .removeClass(params.loadingClass);
            $slideEl.find("." + params.preloaderClass).remove();
            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children(
                  '[data-swiper-slide-index="' +
                    slideOriginalIndex +
                    '"]:not(.' +
                    swiper.params.slideDuplicateClass +
                    ")"
                );
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children(
                  "." +
                    swiper.params.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    slideOriginalIndex +
                    '"]'
                );
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }
            swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]);
            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          }
        );

        swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if (
            $wrapperEl.children(
              "." +
                swiperParams.slideClass +
                '[data-swiper-slide-index="' +
                index +
                '"]'
            ).length
          ) {
            return true;
          }
        } else if (slides[index]) {
          return true;
        }
        return false;
      }

      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr("data-swiper-slide-index");
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) {
        swiper.lazy.initialImageLoaded = true;
      }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl
          .children("." + swiperParams.slideVisibleClass)
          .each(function (elIndex, slideEl) {
            var index = isVirtual
              ? $(slideEl).attr("data-swiper-slide-index")
              : $(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) {
            swiper.lazy.loadInSlide(i);
          }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (
          slidesPerView > 1 ||
          (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)
        ) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(
            activeIndex + spv + Math.max(amount, spv),
            slides.length
          );
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (
            var i$1 = activeIndex + slidesPerView;
            i$1 < maxIndex;
            i$1 += 1
          ) {
            if (slideExist(i$1)) {
              swiper.lazy.loadInSlide(i$1);
            }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) {
              swiper.lazy.loadInSlide(i$2);
            }
          }
        } else {
          var nextSlide = $wrapperEl.children(
            "." + swiperParams.slideNextClass
          );
          if (nextSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(nextSlide));
          }

          var prevSlide = $wrapperEl.children(
            "." + swiperParams.slidePrevClass
          );
          if (prevSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      }
    },
  };

  var Lazy$1 = {
    name: "lazy",
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (
          swiper.params.lazy.enabled &&
          !swiper.params.loop &&
          swiper.params.initialSlide === 0
        ) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (
            swiper.params.lazy.loadOnTransitionStart ||
            (!swiper.params.lazy.loadOnTransitionStart &&
              !swiper.lazy.initialImageLoaded)
          ) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (
          swiper.params.lazy.enabled &&
          !swiper.params.lazy.loadOnTransitionStart
        ) {
          swiper.lazy.load();
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = (maxIndex + minIndex) >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      })();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) {
          return 0;
        }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (
          ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
            (this.x[i3] - this.x[i1]) +
          this.y[i1]
        );
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate
          ? -swiper.translate
          : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(
            -translate
          );
        }

        if (
          !controlledTranslate ||
          swiper.params.controller.by === "container"
        ) {
          multiplier =
            (c.maxTranslate() - c.minTranslate()) /
            (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate =
            (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) {
              return;
            }
            if (c.params.loop && swiper.params.controller.by === "slide") {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: "controller",
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: "slide", // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction:
            Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr("tabIndex", "0");
      return $el;
    },
    makeElNotFocusable: function makeElNotFocusable($el) {
      $el.attr("tabIndex", "-1");
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr("role", role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr("aria-label", label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr("aria-disabled", true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr("aria-disabled", false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) {
        return;
      }
      var $targetEl = $(e.target);
      if (
        swiper.navigation &&
        swiper.navigation.$nextEl &&
        $targetEl.is(swiper.navigation.$nextEl)
      ) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (
        swiper.navigation &&
        swiper.navigation.$prevEl &&
        $targetEl.is(swiper.navigation.$prevEl)
      ) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (
        swiper.pagination &&
        $targetEl.is("." + swiper.params.pagination.bulletClass)
      ) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) {
        return;
      }
      notification.html("");
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop || !swiper.navigation) {
        return;
      }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
          swiper.a11y.makeElNotFocusable($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
          swiper.a11y.makeElFocusable($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
          swiper.a11y.makeElNotFocusable($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
          swiper.a11y.makeElFocusable($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, "button");
          swiper.a11y.addElLabel(
            $bulletEl,
            params.paginationBulletMessage.replace(
              /\{\{index\}\}/,
              $bulletEl.index() + 1
            )
          );
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, "button");
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on("keydown", swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, "button");
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on("keydown", swiper.a11y.onEnterKey);
      }

      // Pagination
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.on(
          "keydown",
          "." + swiper.params.pagination.bulletClass,
          swiper.a11y.onEnterKey
        );
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
        swiper.a11y.liveRegion.remove();
      }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off("keydown", swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off("keydown", swiper.a11y.onEnterKey);
      }

      // Pagination
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.off(
          "keydown",
          "." + swiper.params.pagination.bulletClass,
          swiper.a11y.onEnterKey
        );
      }
    },
  };
  var A11y = {
    name: "a11y",
    params: {
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(
            '<span class="' +
              swiper.params.a11y.notificationClass +
              '" aria-live="assertive" aria-atomic="true"></span>'
          ),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) {
        return;
      }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) {
        return;
      }
      history.scrollToSlide(
        0,
        history.paths.value,
        swiper.params.runCallbacksOnInit
      );
      if (!swiper.params.history.replaceState) {
        win.addEventListener("popstate", swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener("popstate", swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(
        swiper.params.speed,
        swiper.history.paths.value,
        false
      );
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname
        .slice(1)
        .split("/")
        .filter(function (part) {
          return part !== "";
        });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) {
        return;
      }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr("data-history"));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr("data-history"));
          if (
            slideHistory === value &&
            !slide.hasClass(swiper.params.slideDuplicateClass)
          ) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: "history",
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: "slides",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(
            swiper.params.history.key,
            swiper.activeIndex
          );
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.history.initialized && swiper.params.cssMode) {
          swiper.history.setHistory(
            swiper.params.history.key,
            swiper.activeIndex
          );
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      swiper.emit("hashChange");
      var newHash = doc.location.hash.replace("#", "");
      var activeSlideHash = swiper.slides
        .eq(swiper.activeIndex)
        .attr("data-hash");
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl
          .children(
            "." + swiper.params.slideClass + '[data-hash="' + newHash + '"]'
          )
          .index();
        if (typeof newIndex === "undefined") {
          return;
        }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (
        !swiper.hashNavigation.initialized ||
        !swiper.params.hashNavigation.enabled
      ) {
        return;
      }
      if (
        swiper.params.hashNavigation.replaceState &&
        win.history &&
        win.history.replaceState
      ) {
        win.history.replaceState(
          null,
          null,
          "#" + swiper.slides.eq(swiper.activeIndex).attr("data-hash") || ""
        );
        swiper.emit("hashSet");
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr("data-hash") || slide.attr("data-history");
        doc.location.hash = hash || "";
        swiper.emit("hashSet");
      }
    },
    init: function init() {
      var swiper = this;
      if (
        !swiper.params.hashNavigation.enabled ||
        (swiper.params.history && swiper.params.history.enabled)
      ) {
        return;
      }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace("#", "");
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr("data-hash") || slide.attr("data-history");
          if (
            slideHash === hash &&
            !slide.hasClass(swiper.params.slideDuplicateClass)
          ) {
            var index = slide.index();
            swiper.slideTo(
              index,
              speed,
              swiper.params.runCallbacksOnInit,
              true
            );
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on("hashchange", swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off("hashchange", swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr("data-swiper-autoplay")) {
        delay =
          $activeSlideEl.attr("data-swiper-autoplay") ||
          swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(
              swiper.slides.length - 1,
              swiper.params.speed,
              true,
              true
            );
            swiper.emit("autoplay");
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else {
          swiper.autoplay.stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running) {
          swiper.autoplay.run();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== "undefined") {
        return false;
      }
      if (swiper.autoplay.running) {
        return false;
      }
      swiper.autoplay.running = true;
      swiper.emit("autoplayStart");
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) {
        return false;
      }
      if (typeof swiper.autoplay.timeout === "undefined") {
        return false;
      }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit("autoplayStop");
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) {
        return;
      }
      if (swiper.autoplay.paused) {
        return;
      }
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
      }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.autoplay.onTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.autoplay.onTransitionEnd
        );
      }
    },
  };

  var Autoplay$1 = {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onVisibilityChange: function onVisibilityChange() {
            if (
              document.visibilityState === "hidden" &&
              swiper.autoplay.running
            ) {
              swiper.autoplay.pause();
            }
            if (
              document.visibilityState === "visible" &&
              swiper.autoplay.paused
            ) {
              swiper.autoplay.run();
              swiper.autoplay.paused = false;
            }
          },
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.autoplay.onTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.autoplay.onTransitionEnd
            );
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          document.addEventListener(
            "visibilitychange",
            swiper.autoplay.onVisibilityChange
          );
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd() {
        var swiper = this;
        if (
          swiper.params.cssMode &&
          swiper.autoplay.paused &&
          !swiper.params.autoplay.disableOnInteraction
        ) {
          swiper.autoplay.run();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
        document.removeEventListener(
          "visibilitychange",
          swiper.autoplay.onVisibilityChange
        );
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) {
          tx -= swiper.translate;
        }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) {
            return;
          }
          if (!swiper || swiper.destroyed) {
            return;
          }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ["webkitTransitionEnd", "transitionend"];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "fade") {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + "fade");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "fade") {
          return;
        }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "fade") {
          return;
        }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: swiperWidth + "px" });
        } else {
          $cubeShadowEl = $el.find(".swiper-cube-shadow");
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform =
          "rotateX(" +
          (isHorizontal ? 0 : -slideAngle) +
          "deg) rotateY(" +
          (isHorizontal ? slideAngle : 0) +
          "deg) translate3d(" +
          tx +
          "px, " +
          ty +
          "px, " +
          tz +
          "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) {
            wrapperRotate = -slideIndex * 90 - progress * 90;
          }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var shadowAfter = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if (shadowBefore.length === 0) {
            shadowBefore = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }
          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
      }
      $wrapperEl.css({
        "-webkit-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "transform-origin": "50% 50% -" + swiperSize / 2 + "px",
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(
            "translate3d(0px, " +
              (swiperWidth / 2 + params.shadowOffset) +
              "px, " +
              -swiperWidth / 2 +
              "px) rotateX(90deg) rotateZ(0deg) scale(" +
              params.shadowScale +
              ")"
          );
        } else {
          var shadowAngle =
            Math.abs(wrapperRotate) -
            Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier =
            1.5 -
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
              Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(
            "scale3d(" +
              scale1 +
              ", 1, " +
              scale2 +
              ") translate3d(0px, " +
              (swiperHeight / 2 + offset) +
              "px, " +
              -swiperHeight / 2 / scale2 +
              "px) rotateX(-90deg)"
          );
        }
      }
      var zFactor = Browser.isSafari || Browser.isWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform(
        "translate3d(0px,0," +
          zFactor +
          "px) rotateX(" +
          (swiper.isHorizontal() ? 0 : wrapperRotate) +
          "deg) rotateY(" +
          (swiper.isHorizontal() ? -wrapperRotate : 0) +
          "deg)"
      );
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find(".swiper-cube-shadow").transition(duration);
      }
    },
  };

  var EffectCube = {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "cube") {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + "cube");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "cube") {
          return;
        }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "cube") {
          return;
        }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex =
          -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal()
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var shadowAfter = swiper.isHorizontal()
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if (shadowBefore.length === 0) {
            shadowBefore = $(
              '<div class="swiper-slide-shadow-' +
                (swiper.isHorizontal() ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' +
                (swiper.isHorizontal() ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }
          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $slideEl.transform(
          "translate3d(" +
            tx +
            "px, " +
            ty +
            "px, 0px) rotateX(" +
            rotateX +
            "deg) rotateY(" +
            rotateY +
            "deg)"
        );
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) {
            return;
          }
          if (!swiper || swiper.destroyed) {
            return;
          }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ["webkitTransitionEnd", "transitionend"];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "flip") {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + "flip");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "flip") {
          return;
        }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "flip") {
          return;
        }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal
        ? -transform + swiperWidth / 2
        : -transform + swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier =
          ((center - slideOffset - slideSize / 2) / slideSize) *
          params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var stretch = params.stretch;
        // Allow percentage to make a relative stretch for responsive sliders
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = (parseFloat(params.stretch) / 100) * slideSize;
        }
        var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        var translateX = isHorizontal ? stretch * offsetMultiplier : 0;

        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) {
          translateX = 0;
        }
        if (Math.abs(translateY) < 0.001) {
          translateY = 0;
        }
        if (Math.abs(translateZ) < 0.001) {
          translateZ = 0;
        }
        if (Math.abs(rotateY) < 0.001) {
          rotateY = 0;
        }
        if (Math.abs(rotateX) < 0.001) {
          rotateX = 0;
        }
        if (Math.abs(scale) < 0.001) {
          scale = 0;
        }

        var slideTransform =
          "translate3d(" +
          translateX +
          "px," +
          translateY +
          "px," +
          translateZ +
          "px)  rotateX(" +
          rotateX +
          "deg) rotateY(" +
          rotateY +
          "deg) scale(" +
          scale +
          ")";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var $shadowAfterEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) {
            $shadowBeforeEl[0].style.opacity =
              offsetMultiplier > 0 ? offsetMultiplier : 0;
          }
          if ($shadowAfterEl.length) {
            $shadowAfterEl[0].style.opacity =
              -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "coverflow") {
          return;
        }

        swiper.classNames.push(
          swiper.params.containerModifierClass + "coverflow"
        );
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "coverflow") {
          return;
        }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "coverflow") {
          return;
        }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(
          Utils.extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          })
        );
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(
        swiper.params.thumbs.thumbsContainerClass
      );
      swiper.thumbs.swiper.on("tap", swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) {
        return;
      }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (
        clickedSlide &&
        $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)
      ) {
        return;
      }
      if (typeof clickedIndex === "undefined" || clickedIndex === null) {
        return;
      }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(
          $(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (
          swiper.slides
            .eq(currentIndex)
            .hasClass(swiper.params.slideDuplicateClass)
        ) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides
          .eq(currentIndex)
          .prevAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        var nextIndex = swiper.slides
          .eq(currentIndex)
          .nextAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        if (typeof prevIndex === "undefined") {
          slideToIndex = nextIndex;
        } else if (typeof nextIndex === "undefined") {
          slideToIndex = prevIndex;
        } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
          slideToIndex = nextIndex;
        } else {
          slideToIndex = prevIndex;
        }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) {
        return;
      }

      var slidesPerView =
        thumbsSwiper.params.slidesPerView === "auto"
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;

      var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        var direction;
        if (thumbsSwiper.params.loop) {
          if (
            thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .hasClass(thumbsSwiper.params.slideDuplicateClass)
          ) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          var nextThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          if (typeof prevThumbsIndex === "undefined") {
            newThumbsIndex = nextThumbsIndex;
          } else if (typeof nextThumbsIndex === "undefined") {
            newThumbsIndex = prevThumbsIndex;
          } else if (
            nextThumbsIndex - currentThumbsIndex ===
            currentThumbsIndex - prevThumbsIndex
          ) {
            newThumbsIndex = currentThumbsIndex;
          } else if (
            nextThumbsIndex - currentThumbsIndex <
            currentThumbsIndex - prevThumbsIndex
          ) {
            newThumbsIndex = nextThumbsIndex;
          } else {
            newThumbsIndex = prevThumbsIndex;
          }
          direction =
            swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex +=
            direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }

        if (
          thumbsSwiper.visibleSlidesIndexes &&
          thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
        ) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex =
                newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex =
                newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }

      thumbsToActivate = Math.floor(thumbsToActivate);

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (
        thumbsSwiper.params.loop ||
        (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
      ) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl
            .children(
              '[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]'
            )
            .addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides
            .eq(swiper.realIndex + i$1)
            .addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) {
          return;
        }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) {
          return;
        }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) {
          return;
        }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1,
  ];

  if (typeof Swiper.use === "undefined") {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;
});
