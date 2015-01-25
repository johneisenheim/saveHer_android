(function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(e,t){return kt.call(e,t)}function a(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function i(e){vt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function r(e,t){var n=!0;return f(function(){return n&&(i(e),n=!1),t.apply(this,arguments)},t)}function o(e,t){gn[e]||(i(t),gn[e]=!0)}function s(e,t){return function(n){return p(e.call(this,n),t)}}function l(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t)}}function u(){}function c(e,t){t!==!1&&A(e),h(this,e),this._d=new Date(+e._d)}function d(e){var t=k(e),n=t.year||0,a=t.quarter||0,i=t.month||0,r=t.week||0,o=t.day||0,s=t.hour||0,l=t.minute||0,u=t.second||0,c=t.millisecond||0;this._milliseconds=+c+1e3*u+6e4*l+36e5*s,this._days=+o+7*r,this._months=+i+3*a+12*n,this._data={},this._locale=vt.localeData(),this._bubble()}function f(e,t){for(var a in t)n(t,a)&&(e[a]=t[a]);return n(t,"toString")&&(e.toString=t.toString),n(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t){var n,a,i;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),"undefined"!=typeof t._pf&&(e._pf=t._pf),"undefined"!=typeof t._locale&&(e._locale=t._locale),Ot.length>0)for(n in Ot)a=Ot[n],i=t[a],"undefined"!=typeof i&&(e[a]=i);return e}function m(e){return 0>e?Math.ceil(e):Math.floor(e)}function p(e,t,n){for(var a=""+Math.abs(e),i=e>=0;a.length<t;)a="0"+a;return(i?n?"+":"":"-")+a}function g(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function _(e,t){var n;return t=z(t,e),e.isBefore(t)?n=g(e,t):(n=g(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function v(e,t){return function(n,a){var i,r;return null===a||isNaN(+a)||(o(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),r=n,n=a,a=r),n="string"==typeof n?+n:n,i=vt.duration(n,a),y(this,i,e),this}}function y(e,t,n,a){var i=t._milliseconds,r=t._days,o=t._months;a=null==a?!0:a,i&&e._d.setTime(+e._d+i*n),r&&ft(e,"Date",dt(e,"Date")+r*n),o&&ct(e,dt(e,"Month")+o*n),a&&vt.updateOffset(e,r||o)}function w(e){return"[object Array]"===Object.prototype.toString.call(e)}function T(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function D(e,t,n){var a,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),o=0;for(a=0;i>a;a++)(n&&e[a]!==t[a]||!n&&S(e[a])!==S(t[a]))&&o++;return o+r}function b(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=un[e]||cn[t]||t}return e}function k(e){var t,a,i={};for(a in e)n(e,a)&&(t=b(a),t&&(i[t]=e[a]));return i}function M(t){var n,a;if(0===t.indexOf("week"))n=7,a="day";else{if(0!==t.indexOf("month"))return;n=12,a="month"}vt[t]=function(i,r){var o,s,l=vt._locale[t],u=[];if("number"==typeof i&&(r=i,i=e),s=function(e){var t=vt().utc().set(a,e);return l.call(vt._locale,t,i||"")},null!=r)return s(r);for(o=0;n>o;o++)u.push(s(o));return u}}function S(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function P(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function I(e,t,n){return ot(vt([e,11,31+t-n]),t,n).week}function Y(e){return C(e)?366:365}function C(e){return e%4===0&&e%100!==0||e%400===0}function A(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[St]<0||e._a[St]>11?St:e._a[Pt]<1||e._a[Pt]>P(e._a[Mt],e._a[St])?Pt:e._a[It]<0||e._a[It]>23?It:e._a[Yt]<0||e._a[Yt]>59?Yt:e._a[Ct]<0||e._a[Ct]>59?Ct:e._a[At]<0||e._a[At]>999?At:-1,e._pf._overflowDayOfYear&&(Mt>t||t>Pt)&&(t=Pt),e._pf.overflow=t)}function F(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function O(e){return e?e.toLowerCase().replace("_","-"):e}function x(e){for(var t,n,a,i,r=0;r<e.length;){for(i=O(e[r]).split("-"),t=i.length,n=O(e[r+1]),n=n?n.split("-"):null;t>0;){if(a=E(i.slice(0,t).join("-")))return a;if(n&&n.length>=t&&D(i,n,!0)>=t-1)break;t--}r++}return null}function E(e){var t=null;if(!Ft[e]&&xt)try{t=vt.locale(),require("./locale/"+e),vt.locale(t)}catch(n){}return Ft[e]}function z(e,t){return t._isUTC?vt(e).zone(t._offset||0):vt(e).local()}function U(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function G(e){var t,n,a=e.match(Gt);for(t=0,n=a.length;n>t;t++)a[t]=pn[a[t]]?pn[a[t]]:U(a[t]);return function(i){var r="";for(t=0;n>t;t++)r+=a[t]instanceof Function?a[t].call(i,e):a[t];return r}}function L(e,t){return e.isValid()?(t=H(t,e.localeData()),dn[t]||(dn[t]=G(t)),dn[t](e)):e.localeData().invalidDate()}function H(e,t){function n(e){return t.longDateFormat(e)||e}var a=5;for(Lt.lastIndex=0;a>=0&&Lt.test(e);)e=e.replace(Lt,n),Lt.lastIndex=0,a-=1;return e}function W(e,t){var n,a=t._strict;switch(e){case"Q":return Qt;case"DDDD":return Xt;case"YYYY":case"GGGG":case"gggg":return a?Kt:Rt;case"Y":case"G":case"g":return tn;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return a?en:Nt;case"S":if(a)return Qt;case"SS":if(a)return $t;case"SSS":if(a)return Xt;case"DDD":return Wt;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Bt;case"a":case"A":return t._locale._meridiemParse;case"X":return Zt;case"Z":case"ZZ":return Vt;case"T":return qt;case"SSSS":return jt;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return a?$t:Ht;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ht;case"Do":return Jt;default:return n=new RegExp(Q(J(e.replace("\\","")),"i"))}}function R(e){e=e||"";var t=e.match(Vt)||[],n=t[t.length-1]||[],a=(n+"").match(sn)||["-",0,0],i=+(60*a[1])+S(a[2]);return"+"===a[0]?-i:i}function N(e,t,n){var a,i=n._a;switch(e){case"Q":null!=t&&(i[St]=3*(S(t)-1));break;case"M":case"MM":null!=t&&(i[St]=S(t)-1);break;case"MMM":case"MMMM":a=n._locale.monthsParse(t),null!=a?i[St]=a:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(i[Pt]=S(t));break;case"Do":null!=t&&(i[Pt]=S(parseInt(t,10)));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=S(t));break;case"YY":i[Mt]=vt.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":i[Mt]=S(t);break;case"a":case"A":n._isPm=n._locale.isPM(t);break;case"H":case"HH":case"h":case"hh":i[It]=S(t);break;case"m":case"mm":i[Yt]=S(t);break;case"s":case"ss":i[Ct]=S(t);break;case"S":case"SS":case"SSS":case"SSSS":i[At]=S(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=R(t);break;case"dd":case"ddd":case"dddd":a=n._locale.weekdaysParse(t),null!=a?(n._w=n._w||{},n._w.d=a):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=S(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=vt.parseTwoDigitYear(t)}}function j(e){var n,a,i,r,o,s,l;n=e._w,null!=n.GG||null!=n.W||null!=n.E?(o=1,s=4,a=t(n.GG,e._a[Mt],ot(vt(),1,4).year),i=t(n.W,1),r=t(n.E,1)):(o=e._locale._week.dow,s=e._locale._week.doy,a=t(n.gg,e._a[Mt],ot(vt(),o,s).year),i=t(n.w,1),null!=n.d?(r=n.d,o>r&&++i):r=null!=n.e?n.e+o:o),l=st(a,i,r,s,o),e._a[Mt]=l.year,e._dayOfYear=l.dayOfYear}function B(e){var n,a,i,r,o=[];if(!e._d){for(i=q(e),e._w&&null==e._a[Pt]&&null==e._a[St]&&j(e),e._dayOfYear&&(r=t(e._a[Mt],i[Mt]),e._dayOfYear>Y(r)&&(e._pf._overflowDayOfYear=!0),a=nt(r,0,e._dayOfYear),e._a[St]=a.getUTCMonth(),e._a[Pt]=a.getUTCDate()),n=0;3>n&&null==e._a[n];++n)e._a[n]=o[n]=i[n];for(;7>n;n++)e._a[n]=o[n]=null==e._a[n]?2===n?1:0:e._a[n];e._d=(e._useUTC?nt:tt).apply(null,o),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function V(e){var t;e._d||(t=k(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],B(e))}function q(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Z(e){if(e._f===vt.ISO_8601)return void X(e);e._a=[],e._pf.empty=!0;var t,n,a,i,r,o=""+e._i,s=o.length,l=0;for(a=H(e._f,e._locale).match(Gt)||[],t=0;t<a.length;t++)i=a[t],n=(o.match(W(i,e))||[])[0],n&&(r=o.substr(0,o.indexOf(n)),r.length>0&&e._pf.unusedInput.push(r),o=o.slice(o.indexOf(n)+n.length),l+=n.length),pn[i]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(i),N(i,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(i);e._pf.charsLeftOver=s-l,o.length>0&&e._pf.unusedInput.push(o),e._isPm&&e._a[It]<12&&(e._a[It]+=12),e._isPm===!1&&12===e._a[It]&&(e._a[It]=0),B(e),A(e)}function J(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,a,i){return t||n||a||i})}function Q(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(e){var t,n,i,r,o;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(r=0;r<e._f.length;r++)o=0,t=h({},e),t._pf=a(),t._f=e._f[r],Z(t),F(t)&&(o+=t._pf.charsLeftOver,o+=10*t._pf.unusedTokens.length,t._pf.score=o,(null==i||i>o)&&(i=o,n=t));f(e,n||t)}function X(e){var t,n,a=e._i,i=nn.exec(a);if(i){for(e._pf.iso=!0,t=0,n=rn.length;n>t;t++)if(rn[t][1].exec(a)){e._f=rn[t][0]+(i[6]||" ");break}for(t=0,n=on.length;n>t;t++)if(on[t][1].exec(a)){e._f+=on[t][0];break}a.match(Vt)&&(e._f+="Z"),Z(e)}else e._isValid=!1}function K(e){X(e),e._isValid===!1&&(delete e._isValid,vt.createFromInputFallback(e))}function et(t){var n,a=t._i;a===e?t._d=new Date:T(a)?t._d=new Date(+a):null!==(n=Et.exec(a))?t._d=new Date(+n[1]):"string"==typeof a?K(t):w(a)?(t._a=a.slice(0),B(t)):"object"==typeof a?V(t):"number"==typeof a?t._d=new Date(a):vt.createFromInputFallback(t)}function tt(e,t,n,a,i,r,o){var s=new Date(e,t,n,a,i,r,o);return 1970>e&&s.setFullYear(e),s}function nt(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function at(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function it(e,t,n,a,i){return i.relativeTime(t||1,!!n,e,a)}function rt(e,t,n){var a=vt.duration(e).abs(),i=bt(a.as("s")),r=bt(a.as("m")),o=bt(a.as("h")),s=bt(a.as("d")),l=bt(a.as("M")),u=bt(a.as("y")),c=i<fn.s&&["s",i]||1===r&&["m"]||r<fn.m&&["mm",r]||1===o&&["h"]||o<fn.h&&["hh",o]||1===s&&["d"]||s<fn.d&&["dd",s]||1===l&&["M"]||l<fn.M&&["MM",l]||1===u&&["y"]||["yy",u];return c[2]=t,c[3]=+e>0,c[4]=n,it.apply({},c)}function ot(e,t,n){var a,i=n-t,r=n-e.day();return r>i&&(r-=7),i-7>r&&(r+=7),a=vt(e).add(r,"d"),{week:Math.ceil(a.dayOfYear()/7),year:a.year()}}function st(e,t,n,a,i){var r,o,s=nt(e,0,1).getUTCDay();return s=0===s?7:s,n=null!=n?n:i,r=i-s+(s>a?7:0)-(i>s?7:0),o=7*(t-1)+(n-i)+r+1,{year:o>0?e:e-1,dayOfYear:o>0?o:Y(e-1)+o}}function lt(t){var n=t._i,a=t._f;return t._locale=t._locale||vt.localeData(t._l),null===n||a===e&&""===n?vt.invalid({nullInput:!0}):("string"==typeof n&&(t._i=n=t._locale.preparse(n)),vt.isMoment(n)?new c(n,!0):(a?w(a)?$(t):Z(t):et(t),new c(t)))}function ut(e,t){var n,a;if(1===t.length&&w(t[0])&&(t=t[0]),!t.length)return vt();for(n=t[0],a=1;a<t.length;++a)t[a][e](n)&&(n=t[a]);return n}function ct(e,t){var n;return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),P(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function dt(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function ft(e,t,n){return"Month"===t?ct(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n)}function ht(e,t){return function(n){return null!=n?(ft(this,e,n),vt.updateOffset(this,t),this):dt(this,e)}}function mt(e){return 400*e/146097}function pt(e){return 146097*e/400}function gt(e){vt.duration.fn[e]=function(){return this._data[e]}}function _t(e){"undefined"==typeof ender&&(yt=Dt.moment,Dt.moment=e?r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vt):vt)}for(var vt,yt,wt,Tt="2.8.2",Dt="undefined"!=typeof global?global:this,bt=Math.round,kt=Object.prototype.hasOwnProperty,Mt=0,St=1,Pt=2,It=3,Yt=4,Ct=5,At=6,Ft={},Ot=[],xt="undefined"!=typeof module&&module.exports,Et=/^\/?Date\((\-?\d+)/i,zt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ut=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Gt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Lt=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ht=/\d\d?/,Wt=/\d{1,3}/,Rt=/\d{1,4}/,Nt=/[+\-]?\d{1,6}/,jt=/\d+/,Bt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vt=/Z|[\+\-]\d\d:?\d\d/gi,qt=/T/i,Zt=/[\+\-]?\d+(\.\d{1,3})?/,Jt=/\d{1,2}/,Qt=/\d/,$t=/\d\d/,Xt=/\d{3}/,Kt=/\d{4}/,en=/[+-]?\d{6}/,tn=/[+-]?\d+/,nn=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,an="YYYY-MM-DDTHH:mm:ssZ",rn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],on=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sn=/([\+\-]|\d\d)/gi,ln=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),un={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},cn={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},dn={},fn={s:45,m:45,h:22,d:26,M:11},hn="DDD w W M D d".split(" "),mn="M D H h m s w W".split(" "),pn={M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e)},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+p(Math.abs(e),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return S(this.milliseconds()/100)},SS:function(){return p(S(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+p(S(e/60),2)+":"+p(S(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+p(S(e/60),2)+p(S(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},gn={},_n=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];hn.length;)wt=hn.pop(),pn[wt+"o"]=l(pn[wt],wt);for(;mn.length;)wt=mn.pop(),pn[wt+wt]=s(pn[wt],2);pn.DDDD=s(pn.DDD,3),f(u.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,a;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=vt.utc([2e3,t]),a="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(a.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,a;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=vt([2e3,1]).day(t),a="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(a.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,a){var i=this._relativeTime[n];return"function"==typeof i?i(e,t,n,a):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return ot(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vt=function(t,n,i,r){var o;return"boolean"==typeof i&&(r=i,i=e),o={},o._isAMomentObject=!0,o._i=t,o._f=n,o._l=i,o._strict=r,o._isUTC=!1,o._pf=a(),lt(o)},vt.suppressDeprecationWarnings=!1,vt.createFromInputFallback=r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)}),vt.min=function(){var e=[].slice.call(arguments,0);return ut("isBefore",e)},vt.max=function(){var e=[].slice.call(arguments,0);return ut("isAfter",e)},vt.utc=function(t,n,i,r){var o;return"boolean"==typeof i&&(r=i,i=e),o={},o._isAMomentObject=!0,o._useUTC=!0,o._isUTC=!0,o._l=i,o._i=t,o._f=n,o._strict=r,o._pf=a(),lt(o).utc()},vt.unix=function(e){return vt(1e3*e)},vt.duration=function(e,t){var a,i,r,o,s=e,l=null;return vt.isDuration(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(s={},t?s[t]=e:s.milliseconds=e):(l=zt.exec(e))?(a="-"===l[1]?-1:1,s={y:0,d:S(l[Pt])*a,h:S(l[It])*a,m:S(l[Yt])*a,s:S(l[Ct])*a,ms:S(l[At])*a}):(l=Ut.exec(e))?(a="-"===l[1]?-1:1,r=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a},s={y:r(l[2]),M:r(l[3]),d:r(l[4]),h:r(l[5]),m:r(l[6]),s:r(l[7]),w:r(l[8])}):"object"==typeof s&&("from"in s||"to"in s)&&(o=_(vt(s.from),vt(s.to)),s={},s.ms=o.milliseconds,s.M=o.months),i=new d(s),vt.isDuration(e)&&n(e,"_locale")&&(i._locale=e._locale),i},vt.version=Tt,vt.defaultFormat=an,vt.ISO_8601=function(){},vt.momentProperties=Ot,vt.updateOffset=function(){},vt.relativeTimeThreshold=function(t,n){return fn[t]===e?!1:n===e?fn[t]:(fn[t]=n,!0)},vt.lang=r("moment.lang is deprecated. Use moment.locale instead.",function(e,t){return vt.locale(e,t)}),vt.locale=function(e,t){var n;return e&&(n="undefined"!=typeof t?vt.defineLocale(e,t):vt.localeData(e),n&&(vt.duration._locale=vt._locale=n)),vt._locale._abbr},vt.defineLocale=function(e,t){return null!==t?(t.abbr=e,Ft[e]||(Ft[e]=new u),Ft[e].set(t),vt.locale(e),Ft[e]):(delete Ft[e],null)},vt.langData=r("moment.langData is deprecated. Use moment.localeData instead.",function(e){return vt.localeData(e)}),vt.localeData=function(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return vt._locale;if(!w(e)){if(t=E(e))return t;e=[e]}return x(e)},vt.isMoment=function(e){return e instanceof c||null!=e&&n(e,"_isAMomentObject")},vt.isDuration=function(e){return e instanceof d};for(wt=_n.length-1;wt>=0;--wt)M(_n[wt]);vt.normalizeUnits=function(e){return b(e)},vt.invalid=function(e){var t=vt.utc(0/0);return null!=e?f(t._pf,e):t._pf.userInvalidated=!0,t},vt.parseZone=function(){return vt.apply(null,arguments).parseZone()},vt.parseTwoDigitYear=function(e){return S(e)+(S(e)>68?1900:2e3)},f(vt.fn=c.prototype,{clone:function(){return vt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=vt(this).utc();return 0<e.year()&&e.year()<=9999?L(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):L(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return F(this)},isDSTShifted:function(){return this._a?this.isValid()&&D(this._a,(this._isUTC?vt.utc(this._a):vt(this._a)).toArray())>0:!1},parsingFlags:function(){return f({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(e){return this.zone(0,e)},local:function(e){return this._isUTC&&(this.zone(0,e),this._isUTC=!1,e&&this.add(this._d.getTimezoneOffset(),"m")),this},format:function(e){var t=L(this,e||vt.defaultFormat);return this.localeData().postformat(t)},add:v(1,"add"),subtract:v(-1,"subtract"),diff:function(e,t,n){var a,i,r=z(e,this),o=6e4*(this.zone()-r.zone());return t=b(t),"year"===t||"month"===t?(a=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-vt(this).startOf("month")-(r-vt(r).startOf("month")))/a,i-=6e4*(this.zone()-vt(this).startOf("month").zone()-(r.zone()-vt(r).startOf("month").zone()))/a,"year"===t&&(i/=12)):(a=this-r,i="second"===t?a/1e3:"minute"===t?a/6e4:"hour"===t?a/36e5:"day"===t?(a-o)/864e5:"week"===t?(a-o)/6048e5:a),n?i:m(i)},from:function(e,t){return vt.duration({to:this,from:e}).locale(this.locale()).humanize(!t)},fromNow:function(e){return this.from(vt(),e)},calendar:function(e){var t=e||vt(),n=z(t,this).startOf("day"),a=this.diff(n,"days",!0),i=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.localeData().calendar(i,this))},isLeapYear:function(){return C(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=at(e,this.localeData()),this.add(e-t,"d")):t},month:ht("Month",!0),startOf:function(e){switch(e=b(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=b(e),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+vt(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+vt(e).startOf(t)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+z(e,this).startOf(t)},min:r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=vt.apply(null,arguments),this>e?this:e}),max:r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=vt.apply(null,arguments),e>this?this:e}),zone:function(e,t){var n,a=this._offset||0;return null==e?this._isUTC?a:this._d.getTimezoneOffset():("string"==typeof e&&(e=R(e)),Math.abs(e)<16&&(e=60*e),!this._isUTC&&t&&(n=this._d.getTimezoneOffset()),this._offset=e,this._isUTC=!0,null!=n&&this.subtract(n,"m"),a!==e&&(!t||this._changeInProgress?y(this,vt.duration(a-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?vt(e).zone():0,(this.zone()-e)%60===0},daysInMonth:function(){return P(this.year(),this.month())},dayOfYear:function(e){var t=bt((vt(this).startOf("day")-vt(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=ot(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=ot(this,1,4).year;return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=ot(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return I(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;return I(this.year(),e.dow,e.doy)},get:function(e){return e=b(e),this[e]()},set:function(e,t){return e=b(e),"function"==typeof this[e]&&this[e](t),this},locale:function(t){return t===e?this._locale._abbr:(this._locale=vt.localeData(t),this)},lang:r("moment().lang() is deprecated. Use moment().localeData() instead.",function(t){return t===e?this.localeData():(this._locale=vt.localeData(t),this)}),localeData:function(){return this._locale}}),vt.fn.millisecond=vt.fn.milliseconds=ht("Milliseconds",!1),vt.fn.second=vt.fn.seconds=ht("Seconds",!1),vt.fn.minute=vt.fn.minutes=ht("Minutes",!1),vt.fn.hour=vt.fn.hours=ht("Hours",!0),vt.fn.date=ht("Date",!0),vt.fn.dates=r("dates accessor is deprecated. Use date instead.",ht("Date",!0)),vt.fn.year=ht("FullYear",!0),vt.fn.years=r("years accessor is deprecated. Use year instead.",ht("FullYear",!0)),vt.fn.days=vt.fn.day,vt.fn.months=vt.fn.month,vt.fn.weeks=vt.fn.week,vt.fn.isoWeeks=vt.fn.isoWeek,vt.fn.quarters=vt.fn.quarter,vt.fn.toJSON=vt.fn.toISOString,f(vt.duration.fn=d.prototype,{_bubble:function(){var e,t,n,a=this._milliseconds,i=this._days,r=this._months,o=this._data,s=0;o.milliseconds=a%1e3,e=m(a/1e3),o.seconds=e%60,t=m(e/60),o.minutes=t%60,n=m(t/60),o.hours=n%24,i+=m(n/24),s=m(mt(i)),i-=m(pt(s)),r+=m(i/30),i%=30,s+=m(r/12),r%=12,o.days=i,o.months=r,o.years=s},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return m(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12)},humanize:function(e){var t=rt(this,!e,this.localeData());return e&&(t=this.localeData().pastFuture(+this,t)),this.localeData().postformat(t)},add:function(e,t){var n=vt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=vt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=b(e),this[e.toLowerCase()+"s"]()},as:function(e){var t,n;if(e=b(e),t=this._days+this._milliseconds/864e5,"month"===e||"year"===e)return n=this._months+12*mt(t),"month"===e?n:n/12;switch(t+=pt(this._months/12),e){case"week":return t/7;case"day":return t;case"hour":return 24*t;case"minute":return 24*t*60;case"second":return 24*t*60*60;case"millisecond":return 24*t*60*60*1e3;default:throw new Error("Unknown unit "+e)}},lang:vt.fn.lang,locale:vt.fn.locale,toIsoString:r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),a=Math.abs(this.hours()),i=Math.abs(this.minutes()),r=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(a||i||r?"T":"")+(a?a+"H":"")+(i?i+"M":"")+(r?r+"S":""):"P0D"},localeData:function(){return this._locale}}),vt.duration.fn.toString=vt.duration.fn.toISOString;for(wt in ln)n(ln,wt)&&gt(wt.toLowerCase());vt.duration.fn.asMilliseconds=function(){return this.as("ms")},vt.duration.fn.asSeconds=function(){return this.as("s")},vt.duration.fn.asMinutes=function(){return this.as("m")},vt.duration.fn.asHours=function(){return this.as("h")},vt.duration.fn.asDays=function(){return this.as("d")},vt.duration.fn.asWeeks=function(){return this.as("weeks")},vt.duration.fn.asMonths=function(){return this.as("M")},vt.duration.fn.asYears=function(){return this.as("y")},vt.locale("en",{ordinal:function(e){var t=e%10,n=1===S(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),xt?module.exports=vt:"function"==typeof define&&define.amd?(define("moment",function(e,t,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(Dt.moment=yt),vt}),_t(!0)):_t()}).call(this);