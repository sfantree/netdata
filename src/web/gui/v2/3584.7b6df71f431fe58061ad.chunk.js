!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b17f2d39-c570-44c5-9051-da26373ff8ea",e._sentryDebugIdIdentifier="sentry-dbid-b17f2d39-c570-44c5-9051-da26373ff8ea")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"08864407160b3973b9b88c5ae92687282b21e2f4"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[3584],{48168:(e,t,n)=>{n.d(t,{m:()=>l});var r=n(25733),a=n(2940),i=n(49858),o=n(43924),s=n(2642),u=n(96519),c=n(82695),f=n(40215);function d(e,t,n){const d=(0,c.q)(),l=n?.locale??d.locale??u.c,D=(0,r.z)(e,t);if(isNaN(D))throw new RangeError("Invalid time value");const m=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:D});let N,g;D>0?(N=(0,s.a)(t),g=(0,s.a)(e)):(N=(0,s.a)(e),g=(0,s.a)(t));const w=(0,o.O)(g,N),h=((0,f.G)(g)-(0,f.G)(N))/1e3,b=Math.round((w-h)/60);let T;if(b<2)return n?.includeSeconds?w<5?l.formatDistance("lessThanXSeconds",5,m):w<10?l.formatDistance("lessThanXSeconds",10,m):w<20?l.formatDistance("lessThanXSeconds",20,m):w<40?l.formatDistance("halfAMinute",0,m):w<60?l.formatDistance("lessThanXMinutes",1,m):l.formatDistance("xMinutes",1,m):0===b?l.formatDistance("lessThanXMinutes",1,m):l.formatDistance("xMinutes",b,m);if(b<45)return l.formatDistance("xMinutes",b,m);if(b<90)return l.formatDistance("aboutXHours",1,m);if(b<a.F6){const e=Math.round(b/60);return l.formatDistance("aboutXHours",e,m)}if(b<2520)return l.formatDistance("xDays",1,m);if(b<a.Nw){const e=Math.round(b/a.F6);return l.formatDistance("xDays",e,m)}if(b<2*a.Nw)return T=Math.round(b/a.Nw),l.formatDistance("aboutXMonths",T,m);if(T=(0,i.W)(g,N),T<12){const e=Math.round(b/a.Nw);return l.formatDistance("xMonths",e,m)}{const e=T%12,t=Math.trunc(T/12);return e<3?l.formatDistance("aboutXYears",t,m):e<9?l.formatDistance("overXYears",t,m):l.formatDistance("almostXYears",t+1,m)}}function l(e,t){return d(e,Date.now(),t)}},63933:(e,t,n)=>{n.d(t,{R:()=>a});var r=n(2642);function a(e){return+(0,r.a)(e)<Date.now()}},84929:(e,t,n)=>{n.d(t,{H:()=>a});var r=n(2940);function a(e,t){const n=t?.additionalDigits??2,a=function(e){const t={},n=e.split(i.dateTimeDelimiter);let r;if(n.length>2)return t;/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],i.timeZoneDelimiter.test(t.date)&&(t.date=e.split(i.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length)));if(r){const e=i.timezone.exec(r);e?(t.time=r.replace(e[1],""),t.timezone=e[1]):t.time=r}return t}(e);let D;if(a.date){const e=function(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(a.date,n);D=function(e,t){if(null===t)return new Date(NaN);const n=e.match(o);if(!n)return new Date(NaN);const r=!!n[4],a=c(n[1]),i=c(n[2])-1,s=c(n[3]),u=c(n[4]),f=c(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,f)?function(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,f):new Date(NaN);{const e=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(d[t]||(l(e)?29:28))}(t,i,s)&&function(e,t){return t>=1&&t<=(l(e)?366:365)}(t,a)?(e.setUTCFullYear(t,i,Math.max(a,s)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!D||isNaN(D.getTime()))return new Date(NaN);const m=D.getTime();let N,g=0;if(a.time&&(g=function(e){const t=e.match(s);if(!t)return NaN;const n=f(t[1]),a=f(t[2]),i=f(t[3]);if(!function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,i))return NaN;return n*r.s0+a*r.Cg+1e3*i}(a.time),isNaN(g)))return new Date(NaN);if(!a.timezone){const e=new Date(m+g),t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return N=function(e){if("Z"===e)return 0;const t=e.match(u);if(!t)return 0;const n="+"===t[1]?-1:1,a=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;if(!function(e,t){return t>=0&&t<=59}(0,i))return NaN;return n*(a*r.s0+i*r.Cg)}(a.timezone),isNaN(N)?new Date(NaN):new Date(m+g+N)}const i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function f(e){return e&&parseFloat(e.replace(",","."))||0}const d=[31,null,31,30,31,30,31,31,30,31,30,31];function l(e){return e%400===0||e%4===0&&e%100!==0}}}]);