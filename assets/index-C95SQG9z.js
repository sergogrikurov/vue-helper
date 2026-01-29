(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ni(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},Ln=[],Pt=()=>{},Cl=()=>!1,Kr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ri=e=>e.startsWith("onUpdate:"),Fe=Object.assign,si=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Tc=Object.prototype.hasOwnProperty,ge=(e,t)=>Tc.call(e,t),J=Array.isArray,An=e=>gr(e)==="[object Map]",Un=e=>gr(e)==="[object Set]",$i=e=>gr(e)==="[object Date]",te=e=>typeof e=="function",xe=e=>typeof e=="string",vt=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Il=e=>(ve(e)||te(e))&&te(e.then)&&te(e.catch),Rl=Object.prototype.toString,gr=e=>Rl.call(e),Cc=e=>gr(e).slice(8,-1),Ll=e=>gr(e)==="[object Object]",ii=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ic=/-\w/g,sn=qr(e=>e.replace(Ic,t=>t.slice(1).toUpperCase())),Rc=/\B([A-Z])/g,Sn=qr(e=>e.replace(Rc,"-$1").toLowerCase()),Al=qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),us=qr(e=>e?`on${Al(e)}`:""),nn=(e,t)=>!Object.is(e,t),xr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},xl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Lc=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let Ui;const Xr=()=>Ui||(Ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=xe(r)?Pc(r):zr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(xe(e)||ve(e))return e}const Ac=/;(?![^(]*\))/g,xc=/:([^]+)/,Oc=/\/\*[^]*?\*\//g;function Pc(e){const t={};return e.replace(Oc,"").split(Ac).forEach(n=>{if(n){const r=n.split(xc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gt(e){let t="";if(xe(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const r=gt(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Nc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kc=ni(Nc);function Ol(e){return!!e||e===""}function Mc(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=wn(e[r],t[r]);return n}function wn(e,t){if(e===t)return!0;let n=$i(e),r=$i(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=vt(e),r=vt(t),n||r)return e===t;if(n=J(e),r=J(t),n||r)return n&&r?Mc(e,t):!1;if(n=ve(e),r=ve(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!wn(e[o],t[o]))return!1}}return String(e)===String(t)}function oi(e,t){return e.findIndex(n=>wn(n,t))}const Pl=e=>!!(e&&e.__v_isRef===!0),q=e=>xe(e)?e:e==null?"":J(e)||ve(e)&&(e.toString===Rl||!te(e.toString))?Pl(e)?q(e.value):JSON.stringify(e,Nl,2):String(e),Nl=(e,t)=>Pl(t)?Nl(e,t.value):An(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[fs(r,i)+" =>"]=s,n),{})}:Un(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fs(n))}:vt(t)?fs(t):ve(t)&&!J(t)&&!Ll(t)?String(t):t,fs=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let et;class kl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=et,!t&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=et;try{return et=this,t()}finally{et=n}}}on(){++this._on===1&&(this.prevScope=et,et=this)}off(){this._on>0&&--this._on===0&&(et=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fc(e){return new kl(e)}function Dc(){return et}let ye;const ds=new WeakSet;class Ml{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&et.active&&et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vi(this),$l(this);const t=ye,n=_t;ye=this,_t=!0;try{return this.fn()}finally{Ul(this),ye=t,_t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ci(t);this.deps=this.depsTail=void 0,Vi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){As(this)&&this.run()}get dirty(){return As(this)}}let Fl=0,Yn,Xn;function Dl(e,t=!1){if(e.flags|=8,t){e.next=Xn,Xn=e;return}e.next=Yn,Yn=e}function li(){Fl++}function ai(){if(--Fl>0)return;if(Xn){let t=Xn;for(Xn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yn;){let t=Yn;for(Yn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function $l(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ul(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ci(r),$c(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function As(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===er)||(e.globalVersion=er,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!As(e))))return;e.flags|=2;const t=e.dep,n=ye,r=_t;ye=e,_t=!0;try{$l(e);const s=e.fn(e._value);(t.version===0||nn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ye=n,_t=r,Ul(e),e.flags&=-3}}function ci(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ci(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $c(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let _t=!0;const jl=[];function Gt(){jl.push(_t),_t=!1}function Kt(){const e=jl.pop();_t=e===void 0?!0:e}function Vi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ye;ye=void 0;try{t()}finally{ye=n}}}let er=0;class Uc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ui{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!_t||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new Uc(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Hl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=r)}return n}trigger(t){this.version++,er++,this.notify(t)}notify(t){li();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ai()}}}function Hl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Hl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xs=new WeakMap,bn=Symbol(""),Os=Symbol(""),tr=Symbol("");function Be(e,t,n){if(_t&&ye){let r=xs.get(e);r||xs.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ui),s.map=r,s.key=n),s.track()}}function Vt(e,t,n,r,s,i){const o=xs.get(e);if(!o){er++;return}const l=a=>{a&&a.trigger()};if(li(),t==="clear")o.forEach(l);else{const a=J(e),c=a&&ii(n);if(a&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===tr||!vt(p)&&p>=u)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(tr)),t){case"add":a?c&&l(o.get("length")):(l(o.get(bn)),An(e)&&l(o.get(Os)));break;case"delete":a||(l(o.get(bn)),An(e)&&l(o.get(Os)));break;case"set":An(e)&&l(o.get(bn));break}}ai()}function Tn(e){const t=de(e);return t===e?t:(Be(t,"iterate",tr),ft(e)?t:t.map(bt))}function Jr(e){return Be(e=de(e),"iterate",tr),e}function Jt(e,t){return qt(e)?Nn(yn(e)?bt(t):t):bt(t)}const Vc={__proto__:null,[Symbol.iterator](){return ps(this,Symbol.iterator,e=>Jt(this,e))},concat(...e){return Tn(this).concat(...e.map(t=>J(t)?Tn(t):t))},entries(){return ps(this,"entries",e=>(e[1]=Jt(this,e[1]),e))},every(e,t){return kt(this,"every",e,t,void 0,arguments)},filter(e,t){return kt(this,"filter",e,t,n=>n.map(r=>Jt(this,r)),arguments)},find(e,t){return kt(this,"find",e,t,n=>Jt(this,n),arguments)},findIndex(e,t){return kt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return kt(this,"findLast",e,t,n=>Jt(this,n),arguments)},findLastIndex(e,t){return kt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return kt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ms(this,"includes",e)},indexOf(...e){return ms(this,"indexOf",e)},join(e){return Tn(this).join(e)},lastIndexOf(...e){return ms(this,"lastIndexOf",e)},map(e,t){return kt(this,"map",e,t,void 0,arguments)},pop(){return jn(this,"pop")},push(...e){return jn(this,"push",e)},reduce(e,...t){return ji(this,"reduce",e,t)},reduceRight(e,...t){return ji(this,"reduceRight",e,t)},shift(){return jn(this,"shift")},some(e,t){return kt(this,"some",e,t,void 0,arguments)},splice(...e){return jn(this,"splice",e)},toReversed(){return Tn(this).toReversed()},toSorted(e){return Tn(this).toSorted(e)},toSpliced(...e){return Tn(this).toSpliced(...e)},unshift(...e){return jn(this,"unshift",e)},values(){return ps(this,"values",e=>Jt(this,e))}};function ps(e,t,n){const r=Jr(e),s=r[t]();return r!==e&&!ft(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const jc=Array.prototype;function kt(e,t,n,r,s,i){const o=Jr(e),l=o!==e&&!ft(e),a=o[t];if(a!==jc[t]){const f=a.apply(e,i);return l?bt(f):f}let c=n;o!==e&&(l?c=function(f,p){return n.call(this,Jt(e,f),p,e)}:n.length>2&&(c=function(f,p){return n.call(this,f,p,e)}));const u=a.call(o,c,r);return l&&s?s(u):u}function ji(e,t,n,r){const s=Jr(e);let i=n;return s!==e&&(ft(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,Jt(e,l),a,e)}),s[t](i,...r)}function ms(e,t,n){const r=de(e);Be(r,"iterate",tr);const s=r[t](...n);return(s===-1||s===!1)&&pi(n[0])?(n[0]=de(n[0]),r[t](...n)):s}function jn(e,t,n=[]){Gt(),li();const r=de(e)[t].apply(e,n);return ai(),Kt(),r}const Hc=ni("__proto__,__v_isRef,__isVue"),Wl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function Wc(e){vt(e)||(e=String(e));const t=de(this);return Be(t,"has",e),t.hasOwnProperty(e)}class Bl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qc:Yl:i?ql:Kl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=J(t);if(!s){let a;if(o&&(a=Vc[n]))return a;if(n==="hasOwnProperty")return Wc}const l=Reflect.get(t,n,je(t)?t:r);if((vt(n)?Wl.has(n):Hc(n))||(s||Be(t,"get",n),i))return l;if(je(l)){const a=o&&ii(n)?l:l.value;return s&&ve(a)?Ns(a):a}return ve(l)?s?Ns(l):Zr(l):l}}class Gl extends Bl{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const o=J(t)&&ii(n);if(!this._isShallow){const c=qt(i);if(!ft(r)&&!qt(r)&&(i=de(i),r=de(r)),!o&&je(i)&&!je(r))return c||(i.value=r),!0}const l=o?Number(n)<t.length:ge(t,n),a=Reflect.set(t,n,r,je(t)?t:s);return t===de(s)&&(l?nn(r,i)&&Vt(t,"set",n,r):Vt(t,"add",n,r)),a}deleteProperty(t,n){const r=ge(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Vt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!vt(n)||!Wl.has(n))&&Be(t,"has",n),r}ownKeys(t){return Be(t,"iterate",J(t)?"length":bn),Reflect.ownKeys(t)}}class Bc extends Bl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gc=new Gl,Kc=new Bc,qc=new Gl(!0);const Ps=e=>e,Er=e=>Reflect.getPrototypeOf(e);function Yc(e,t,n){return function(...r){const s=this.__v_raw,i=de(s),o=An(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,c=s[e](...r),u=n?Ps:t?Nn:bt;return!t&&Be(i,"iterate",a?Os:bn),Fe(Object.create(c),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:l?[u(f[0]),u(f[1])]:u(f),done:p}}})}}function Sr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xc(e,t){const n={get(s){const i=this.__v_raw,o=de(i),l=de(s);e||(nn(s,l)&&Be(o,"get",s),Be(o,"get",l));const{has:a}=Er(o),c=t?Ps:e?Nn:bt;if(a.call(o,s))return c(i.get(s));if(a.call(o,l))return c(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Be(de(s),"iterate",bn),s.size},has(s){const i=this.__v_raw,o=de(i),l=de(s);return e||(nn(s,l)&&Be(o,"has",s),Be(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,a=de(l),c=t?Ps:e?Nn:bt;return!e&&Be(a,"iterate",bn),l.forEach((u,f)=>s.call(i,c(u),c(f),o))}};return Fe(n,e?{add:Sr("add"),set:Sr("set"),delete:Sr("delete"),clear:Sr("clear")}:{add(s){!t&&!ft(s)&&!qt(s)&&(s=de(s));const i=de(this);return Er(i).has.call(i,s)||(i.add(s),Vt(i,"add",s,s)),this},set(s,i){!t&&!ft(i)&&!qt(i)&&(i=de(i));const o=de(this),{has:l,get:a}=Er(o);let c=l.call(o,s);c||(s=de(s),c=l.call(o,s));const u=a.call(o,s);return o.set(s,i),c?nn(i,u)&&Vt(o,"set",s,i):Vt(o,"add",s,i),this},delete(s){const i=de(this),{has:o,get:l}=Er(i);let a=o.call(i,s);a||(s=de(s),a=o.call(i,s)),l&&l.call(i,s);const c=i.delete(s);return a&&Vt(i,"delete",s,void 0),c},clear(){const s=de(this),i=s.size!==0,o=s.clear();return i&&Vt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yc(s,e,t)}),n}function fi(e,t){const n=Xc(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const zc={get:fi(!1,!1)},Jc={get:fi(!1,!0)},Zc={get:fi(!0,!1)};const Kl=new WeakMap,ql=new WeakMap,Yl=new WeakMap,Qc=new WeakMap;function eu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tu(e){return e.__v_skip||!Object.isExtensible(e)?0:eu(Cc(e))}function Zr(e){return qt(e)?e:di(e,!1,Gc,zc,Kl)}function Xl(e){return di(e,!1,qc,Jc,ql)}function Ns(e){return di(e,!0,Kc,Zc,Yl)}function di(e,t,n,r,s){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=tu(e);if(i===0)return e;const o=s.get(e);if(o)return o;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function yn(e){return qt(e)?yn(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function ft(e){return!!(e&&e.__v_isShallow)}function pi(e){return e?!!e.__v_raw:!1}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function nu(e){return!ge(e,"__v_skip")&&Object.isExtensible(e)&&xl(e,"__v_skip",!0),e}const bt=e=>ve(e)?Zr(e):e,Nn=e=>ve(e)?Ns(e):e;function je(e){return e?e.__v_isRef===!0:!1}function re(e){return Jl(e,!1)}function zl(e){return Jl(e,!0)}function Jl(e,t){return je(e)?e:new ru(e,t)}class ru{constructor(t,n){this.dep=new ui,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:de(t),this._value=n?t:bt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ft(t)||qt(t);t=r?t:de(t),nn(t,n)&&(this._rawValue=t,this._value=r?t:bt(t),this.dep.trigger())}}function D(e){return je(e)?e.value:e}const su={get:(e,t,n)=>t==="__v_raw"?e:D(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Zl(e){return yn(e)?e:new Proxy(e,su)}class iu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ui(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Dl(this,!0),!0}get value(){const t=this.dep.track();return Vl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ou(e,t,n=!1){let r,s;return te(e)?r=e:(r=e.get,s=e.set),new iu(r,s,n)}const Tr={},Mr=new WeakMap;let hn;function lu(e,t=!1,n=hn){if(n){let r=Mr.get(n);r||Mr.set(n,r=[]),r.push(e)}}function au(e,t,n=be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:a}=n,c=w=>s?w:ft(w)||s===!1||s===0?jt(w,1):jt(w);let u,f,p,g,S=!1,R=!1;if(je(e)?(f=()=>e.value,S=ft(e)):yn(e)?(f=()=>c(e),S=!0):J(e)?(R=!0,S=e.some(w=>yn(w)||ft(w)),f=()=>e.map(w=>{if(je(w))return w.value;if(yn(w))return c(w);if(te(w))return a?a(w,2):w()})):te(e)?t?f=a?()=>a(e,2):e:f=()=>{if(p){Gt();try{p()}finally{Kt()}}const w=hn;hn=u;try{return a?a(e,3,[g]):e(g)}finally{hn=w}}:f=Pt,t&&s){const w=f,$=s===!0?1/0:s;f=()=>jt(w(),$)}const F=Dc(),v=()=>{u.stop(),F&&F.active&&si(F.effects,u)};if(i&&t){const w=t;t=(...$)=>{w(...$),v()}}let E=R?new Array(e.length).fill(Tr):Tr;const L=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const $=u.run();if(s||S||(R?$.some((U,N)=>nn(U,E[N])):nn($,E))){p&&p();const U=hn;hn=u;try{const N=[$,E===Tr?void 0:R&&E[0]===Tr?[]:E,g];E=$,a?a(t,3,N):t(...N)}finally{hn=U}}}else u.run()};return l&&l(L),u=new Ml(f),u.scheduler=o?()=>o(L,!1):L,g=w=>lu(w,!1,u),p=u.onStop=()=>{const w=Mr.get(u);if(w){if(a)a(w,4);else for(const $ of w)$();Mr.delete(u)}},t?r?L(!0):E=u.run():o?o(L.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function jt(e,t=1/0,n){if(t<=0||!ve(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,je(e))jt(e.value,t,n);else if(J(e))for(let r=0;r<e.length;r++)jt(e[r],t,n);else if(Un(e)||An(e))e.forEach(r=>{jt(r,t,n)});else if(Ll(e)){for(const r in e)jt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&jt(e[r],t,n)}return e}function _r(e,t,n,r){try{return r?e(...r):e()}catch(s){Qr(s,t,n)}}function yt(e,t,n,r){if(te(e)){const s=_r(e,t,n,r);return s&&Il(s)&&s.catch(i=>{Qr(i,t,n)}),s}if(J(e)){const s=[];for(let i=0;i<e.length;i++)s.push(yt(e[i],t,n,r));return s}}function Qr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let l=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,a,c)===!1)return}l=l.parent}if(i){Gt(),_r(i,null,10,[e,a,c]),Kt();return}}cu(e,n,s,r,o)}function cu(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ze=[];let At=-1;const xn=[];let Zt=null,Cn=0;const Ql=Promise.resolve();let Fr=null;function mi(e){const t=Fr||Ql;return e?t.then(this?e.bind(this):e):t}function uu(e){let t=At+1,n=Ze.length;for(;t<n;){const r=t+n>>>1,s=Ze[r],i=nr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function hi(e){if(!(e.flags&1)){const t=nr(e),n=Ze[Ze.length-1];!n||!(e.flags&2)&&t>=nr(n)?Ze.push(e):Ze.splice(uu(t),0,e),e.flags|=1,ea()}}function ea(){Fr||(Fr=Ql.then(na))}function fu(e){J(e)?xn.push(...e):Zt&&e.id===-1?Zt.splice(Cn+1,0,e):e.flags&1||(xn.push(e),e.flags|=1),ea()}function Hi(e,t,n=At+1){for(;n<Ze.length;n++){const r=Ze[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ze.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ta(e){if(xn.length){const t=[...new Set(xn)].sort((n,r)=>nr(n)-nr(r));if(xn.length=0,Zt){Zt.push(...t);return}for(Zt=t,Cn=0;Cn<Zt.length;Cn++){const n=Zt[Cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zt=null,Cn=0}}const nr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function na(e){try{for(At=0;At<Ze.length;At++){const t=Ze[At];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_r(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;At<Ze.length;At++){const t=Ze[At];t&&(t.flags&=-2)}At=-1,Ze.length=0,ta(),Fr=null,(Ze.length||xn.length)&&na()}}let Ke=null,ra=null;function Dr(e){const t=Ke;return Ke=e,ra=e&&e.type.__scopeId||null,t}function Je(e,t=Ke,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Vr(-1);const i=Dr(t);let o;try{o=e(...s)}finally{Dr(i),r._d&&Vr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tn(e,t){if(Ke===null)return e;const n=ss(Ke),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,l,a=be]=t[s];i&&(te(i)&&(i={mounted:i,updated:i}),i.deep&&jt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function fn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(Gt(),yt(a,n,8,[e.el,l,e,t]),Kt())}}function Or(e,t){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[e]=t}}function dt(e,t,n=!1){const r=yi();if(r||Pn){let s=Pn?Pn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&te(t)?t.call(r&&r.proxy):t}}const du=Symbol.for("v-scx"),pu=()=>dt(du);function mu(e,t){return gi(e,null,t)}function rn(e,t,n){return gi(e,t,n)}function gi(e,t,n=be){const{immediate:r,deep:s,flush:i,once:o}=n,l=Fe({},n),a=t&&r||!t&&i!=="post";let c;if(ar){if(i==="sync"){const g=pu();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=Pt,g.resume=Pt,g.pause=Pt,g}}const u=Qe;l.call=(g,S,R)=>yt(g,u,S,R);let f=!1;i==="post"?l.scheduler=g=>{st(g,u&&u.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(g,S)=>{S?g():hi(g)}),l.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=au(e,t,l);return ar&&(c?c.push(p):a&&p()),p}function hu(e,t,n){const r=this.proxy,s=xe(e)?e.includes(".")?sa(r,e):()=>r[e]:e.bind(r,r);let i;te(t)?i=t:(i=t.handler,n=t);const o=yr(this),l=gi(s,i.bind(r),n);return o(),l}function sa(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const gu=Symbol("_vte"),ia=e=>e.__isTeleport,Ut=Symbol("_leaveCb"),Cr=Symbol("_enterCb");function _u(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return En(()=>{e.isMounted=!0}),ns(()=>{e.isUnmounting=!0}),e}const at=[Function,Array],oa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},la=e=>{const t=e.subTree;return t.component?la(t.component):t},vu={name:"BaseTransition",props:oa,setup(e,{slots:t}){const n=yi(),r=_u();return()=>{const s=t.default&&ua(t.default(),!0);if(!s||!s.length)return;const i=aa(s),o=de(e),{mode:l}=o;if(r.isLeaving)return hs(i);const a=Wi(i);if(!a)return hs(i);let c=ks(a,o,r,n,f=>c=f);a.type!==Ge&&rr(a,c);let u=n.subTree&&Wi(n.subTree);if(u&&u.type!==Ge&&!gn(u,a)&&la(n).type!==Ge){let f=ks(u,o,r,n);if(rr(u,f),l==="out-in"&&a.type!==Ge)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},hs(i);l==="in-out"&&a.type!==Ge?f.delayLeave=(p,g,S)=>{const R=ca(r,u);R[String(u.key)]=u,p[Ut]=()=>{g(),p[Ut]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{S(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function aa(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ge){t=n;break}}return t}const bu=vu;function ca(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ks(e,t,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:S,onLeaveCancelled:R,onBeforeAppear:F,onAppear:v,onAfterAppear:E,onAppearCancelled:L}=t,w=String(e.key),$=ca(n,e),U=(G,ee)=>{G&&yt(G,r,9,ee)},N=(G,ee)=>{const se=ee[1];U(G,ee),J(G)?G.every(V=>V.length<=1)&&se():G.length<=1&&se()},ne={mode:o,persisted:l,beforeEnter(G){let ee=a;if(!n.isMounted)if(i)ee=F||a;else return;G[Ut]&&G[Ut](!0);const se=$[w];se&&gn(e,se)&&se.el[Ut]&&se.el[Ut](),U(ee,[G])},enter(G){let ee=c,se=u,V=f;if(!n.isMounted)if(i)ee=v||c,se=E||u,V=L||f;else return;let oe=!1;const Se=G[Cr]=Ve=>{oe||(oe=!0,Ve?U(V,[G]):U(se,[G]),ne.delayedLeave&&ne.delayedLeave(),G[Cr]=void 0)};ee?N(ee,[G,Se]):Se()},leave(G,ee){const se=String(e.key);if(G[Cr]&&G[Cr](!0),n.isUnmounting)return ee();U(p,[G]);let V=!1;const oe=G[Ut]=Se=>{V||(V=!0,ee(),Se?U(R,[G]):U(S,[G]),G[Ut]=void 0,$[se]===e&&delete $[se])};$[se]=e,g?N(g,[G,oe]):oe()},clone(G){const ee=ks(G,t,n,r,s);return s&&s(ee),ee}};return ne}function hs(e){if(es(e))return e=on(e),e.children=null,e}function Wi(e){if(!es(e))return ia(e.type)&&e.children?aa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&te(n.default))return n.default()}}function rr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,rr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ua(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ae?(o.patchFlag&128&&s++,r=r.concat(ua(o.children,t,l))):(t||o.type!==Ge)&&r.push(l!=null?on(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function vr(e,t){return te(e)?Fe({name:e.name},t,{setup:e}):e}function fa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const $r=new WeakMap;function zn(e,t,n,r,s=!1){if(J(e)){e.forEach((S,R)=>zn(S,t&&(J(t)?t[R]:t),n,r,s));return}if(On(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ss(r.component):r.el,o=s?null:i,{i:l,r:a}=e,c=t&&t.r,u=l.refs===be?l.refs={}:l.refs,f=l.setupState,p=de(f),g=f===be?Cl:S=>ge(p,S);if(c!=null&&c!==a){if(Bi(t),xe(c))u[c]=null,g(c)&&(f[c]=null);else if(je(c)){c.value=null;const S=t;S.k&&(u[S.k]=null)}}if(te(a))_r(a,l,12,[o,u]);else{const S=xe(a),R=je(a);if(S||R){const F=()=>{if(e.f){const v=S?g(a)?f[a]:u[a]:a.value;if(s)J(v)&&si(v,i);else if(J(v))v.includes(i)||v.push(i);else if(S)u[a]=[i],g(a)&&(f[a]=u[a]);else{const E=[i];a.value=E,e.k&&(u[e.k]=E)}}else S?(u[a]=o,g(a)&&(f[a]=o)):R&&(a.value=o,e.k&&(u[e.k]=o))};if(o){const v=()=>{F(),$r.delete(e)};v.id=-1,$r.set(e,v),st(v,n)}else Bi(e),F()}}}function Bi(e){const t=$r.get(e);t&&(t.flags|=8,$r.delete(e))}Xr().requestIdleCallback;Xr().cancelIdleCallback;const On=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function yu(e,t){da(e,"a",t)}function wu(e,t){da(e,"da",t)}function da(e,t,n=Qe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ts(t,r,n),n){let s=n.parent;for(;s&&s.parent;)es(s.parent.vnode)&&Eu(r,t,n,s),s=s.parent}}function Eu(e,t,n,r){const s=ts(t,e,r,!0);sr(()=>{si(r[t],s)},n)}function ts(e,t,n=Qe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Gt();const l=yr(n),a=yt(t,n,e,o);return l(),Kt(),a});return r?s.unshift(i):s.push(i),i}}const Yt=e=>(t,n=Qe)=>{(!ar||e==="sp")&&ts(e,(...r)=>t(...r),n)},Su=Yt("bm"),En=Yt("m"),Tu=Yt("bu"),Cu=Yt("u"),ns=Yt("bum"),sr=Yt("um"),Iu=Yt("sp"),Ru=Yt("rtg"),Lu=Yt("rtc");function Au(e,t=Qe){ts("ec",e,t)}const xu=Symbol.for("v-ndc");function ir(e,t,n,r){let s;const i=n&&n[r],o=J(e);if(o||xe(e)){const l=o&&yn(e);let a=!1,c=!1;l&&(a=!ft(e),c=qt(e),e=Jr(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=t(a?c?Nn(bt(e[u])):bt(e[u]):e[u],u,void 0,i&&i[u])}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i&&i[l])}else if(ve(e))if(e[Symbol.iterator])s=Array.from(e,(l,a)=>t(l,a,void 0,i&&i[a]));else{const l=Object.keys(e);s=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];s[a]=t(e[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Ou(e,t,n={},r,s){if(Ke.ce||Ke.parent&&On(Ke.parent)&&Ke.parent.ce){const c=Object.keys(n).length>0;return t!=="default"&&(n.name=t),X(),jr(Ae,null,[Z("slot",n,r&&r())],c?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),X();const o=i&&pa(i(n)),l=n.key||o&&o.key,a=jr(Ae,{key:(l&&!vt(l)?l:`_${t}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function pa(e){return e.some(t=>lr(t)?!(t.type===Ge||t.type===Ae&&!pa(t.children)):!0)?e:null}const Ms=e=>e?Pa(e)?ss(e):Ms(e.parent):null,Jn=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ms(e.parent),$root:e=>Ms(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>{hi(e.update)}),$nextTick:e=>e.n||(e.n=mi.bind(e.proxy)),$watch:e=>hu.bind(e)}),gs=(e,t)=>e!==be&&!e.__isScriptSetup&&ge(e,t),Pu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(gs(r,t))return o[t]=1,r[t];if(s!==be&&ge(s,t))return o[t]=2,s[t];if(ge(i,t))return o[t]=3,i[t];if(n!==be&&ge(n,t))return o[t]=4,n[t];Fs&&(o[t]=0)}}const c=Jn[t];let u,f;if(c)return t==="$attrs"&&Be(e.attrs,"get",""),c(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==be&&ge(n,t))return o[t]=4,n[t];if(f=a.config.globalProperties,ge(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return gs(s,t)?(s[t]=n,!0):r!==be&&ge(r,t)?(r[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let a;return!!(n[l]||e!==be&&l[0]!=="$"&&ge(e,l)||gs(t,l)||ge(i,l)||ge(r,l)||ge(Jn,l)||ge(s.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gi(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fs=!0;function Nu(e){const t=ha(e),n=e.proxy,r=e.ctx;Fs=!1,t.beforeCreate&&Ki(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:S,activated:R,deactivated:F,beforeDestroy:v,beforeUnmount:E,destroyed:L,unmounted:w,render:$,renderTracked:U,renderTriggered:N,errorCaptured:ne,serverPrefetch:G,expose:ee,inheritAttrs:se,components:V,directives:oe,filters:Se}=t;if(c&&ku(c,r,null),o)for(const ue in o){const ce=o[ue];te(ce)&&(r[ue]=ce.bind(n))}if(s){const ue=s.call(n,n);ve(ue)&&(e.data=Zr(ue))}if(Fs=!0,i)for(const ue in i){const ce=i[ue],Pe=te(ce)?ce.bind(n,n):te(ce.get)?ce.get.bind(n,n):Pt,nt=!te(ce)&&te(ce.set)?ce.set.bind(n):Pt,Ye=Re({get:Pe,set:nt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:De=>Ye.value=De})}if(l)for(const ue in l)ma(l[ue],r,n,ue);if(a){const ue=te(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(ce=>{Or(ce,ue[ce])})}u&&Ki(u,e,"c");function we(ue,ce){J(ce)?ce.forEach(Pe=>ue(Pe.bind(n))):ce&&ue(ce.bind(n))}if(we(Su,f),we(En,p),we(Tu,g),we(Cu,S),we(yu,R),we(wu,F),we(Au,ne),we(Lu,U),we(Ru,N),we(ns,E),we(sr,w),we(Iu,G),J(ee))if(ee.length){const ue=e.exposed||(e.exposed={});ee.forEach(ce=>{Object.defineProperty(ue,ce,{get:()=>n[ce],set:Pe=>n[ce]=Pe,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===Pt&&(e.render=$),se!=null&&(e.inheritAttrs=se),V&&(e.components=V),oe&&(e.directives=oe),G&&fa(e)}function ku(e,t,n=Pt){J(e)&&(e=Ds(e));for(const r in e){const s=e[r];let i;ve(s)?"default"in s?i=dt(s.from||r,s.default,!0):i=dt(s.from||r):i=dt(s),je(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ki(e,t,n){yt(J(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ma(e,t,n,r){let s=r.includes(".")?sa(n,r):()=>n[r];if(xe(e)){const i=t[e];te(i)&&rn(s,i)}else if(te(e))rn(s,e.bind(n));else if(ve(e))if(J(e))e.forEach(i=>ma(i,t,n,r));else{const i=te(e.handler)?e.handler.bind(n):t[e.handler];te(i)&&rn(s,i,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(c=>Ur(a,c,o,!0)),Ur(a,t,o)),ve(t)&&i.set(t,a),a}function Ur(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ur(e,i,n,!0),s&&s.forEach(o=>Ur(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Mu[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Mu={data:qi,props:Yi,emits:Yi,methods:Gn,computed:Gn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Gn,directives:Gn,watch:Du,provide:qi,inject:Fu};function qi(e,t){return t?e?function(){return Fe(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function Fu(e,t){return Gn(Ds(e),Ds(t))}function Ds(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?Fe(Object.create(null),e,t):t}function Yi(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:Fe(Object.create(null),Gi(e),Gi(t??{})):t}function Du(e,t){if(!e)return t;if(!t)return e;const n=Fe(Object.create(null),e);for(const r in t)n[r]=Xe(e[r],t[r]);return n}function ga(){return{app:null,config:{isNativeTag:Cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $u=0;function Uu(e,t){return function(r,s=null){te(r)||(r=Fe({},r)),s!=null&&!ve(s)&&(s=null);const i=ga(),o=new WeakSet,l=[];let a=!1;const c=i.app={_uid:$u++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...f)):te(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,p){if(!a){const g=c._ceVNode||Z(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(g,u,p),a=!0,c._container=u,u.__vue_app__=c,ss(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(yt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){const f=Pn;Pn=c;try{return u()}finally{Pn=f}}};return c}}let Pn=null;const Vu=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${sn(t)}Modifiers`]||e[`${Sn(t)}Modifiers`];function ju(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||be;let s=n;const i=t.startsWith("update:"),o=i&&Vu(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>xe(u)?u.trim():u)),o.number&&(s=n.map(Yr)));let l,a=r[l=us(t)]||r[l=us(sn(t))];!a&&i&&(a=r[l=us(Sn(t))]),a&&yt(a,e,6,s);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,yt(c,e,6,s)}}const Hu=new WeakMap;function _a(e,t,n=!1){const r=n?Hu:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},l=!1;if(!te(e)){const a=c=>{const u=_a(c,t,!0);u&&(l=!0,Fe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(ve(e)&&r.set(e,null),null):(J(i)?i.forEach(a=>o[a]=null):Fe(o,i),ve(e)&&r.set(e,o),o)}function rs(e,t){return!e||!Kr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,Sn(t))||ge(e,t))}function Xi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:f,data:p,setupState:g,ctx:S,inheritAttrs:R}=e,F=Dr(e);let v,E;try{if(n.shapeFlag&4){const w=s||r,$=w;v=xt(c.call($,w,u,f,g,p,S)),E=l}else{const w=t;v=xt(w.length>1?w(f,{attrs:l,slots:o,emit:a}):w(f,null)),E=t.props?l:Wu(l)}}catch(w){Zn.length=0,Qr(w,e,1),v=Z(Ge)}let L=v;if(E&&R!==!1){const w=Object.keys(E),{shapeFlag:$}=L;w.length&&$&7&&(i&&w.some(ri)&&(E=Bu(E,i)),L=on(L,E,!1,!0))}return n.dirs&&(L=on(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&rr(L,n.transition),v=L,Dr(F),v}const Wu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kr(n))&&((t||(t={}))[n]=e[n]);return t},Bu=(e,t)=>{const n={};for(const r in e)(!ri(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Gu(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:l,patchFlag:a}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?zi(r,o,c):!!o;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!rs(c,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?zi(r,o,c):!0:!!o;return!1}function zi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!rs(n,i))return!0}return!1}function Ku({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const va={},ba=()=>Object.create(va),ya=e=>Object.getPrototypeOf(e)===va;function qu(e,t,n,r=!1){const s={},i=ba();e.propsDefaults=Object.create(null),wa(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Xl(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Yu(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,l=de(s),[a]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(rs(e.emitsOptions,p))continue;const g=t[p];if(a)if(ge(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const S=sn(p);s[S]=$s(a,l,S,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{wa(e,t,s,i)&&(c=!0);let u;for(const f in l)(!t||!ge(t,f)&&((u=Sn(f))===f||!ge(t,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=$s(a,l,f,void 0,e,!0)):delete s[f]);if(i!==l)for(const f in i)(!t||!ge(t,f))&&(delete i[f],c=!0)}c&&Vt(e.attrs,"set","")}function wa(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(qn(a))continue;const c=t[a];let u;s&&ge(s,u=sn(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:rs(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=de(n),c=l||be;for(let u=0;u<i.length;u++){const f=i[u];n[f]=$s(s,a,f,c[f],e,!ge(c,f))}}return o}function $s(e,t,n,r,s,i){const o=e[n];if(o!=null){const l=ge(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&te(a)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=yr(s);r=c[n]=a.call(null,t),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Sn(n))&&(r=!0))}return r}const Xu=new WeakMap;function Ea(e,t,n=!1){const r=n?Xu:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},l=[];let a=!1;if(!te(e)){const u=f=>{a=!0;const[p,g]=Ea(f,t,!0);Fe(o,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return ve(e)&&r.set(e,Ln),Ln;if(J(i))for(let u=0;u<i.length;u++){const f=sn(i[u]);Ji(f)&&(o[f]=be)}else if(i)for(const u in i){const f=sn(u);if(Ji(f)){const p=i[u],g=o[f]=J(p)||te(p)?{type:p}:Fe({},p),S=g.type;let R=!1,F=!0;if(J(S))for(let v=0;v<S.length;++v){const E=S[v],L=te(E)&&E.name;if(L==="Boolean"){R=!0;break}else L==="String"&&(F=!1)}else R=te(S)&&S.name==="Boolean";g[0]=R,g[1]=F,(R||ge(g,"default"))&&l.push(f)}}const c=[o,l];return ve(e)&&r.set(e,c),c}function Ji(e){return e[0]!=="$"&&!qn(e)}const _i=e=>e==="_"||e==="_ctx"||e==="$stable",vi=e=>J(e)?e.map(xt):[xt(e)],zu=(e,t,n)=>{if(t._n)return t;const r=Je((...s)=>vi(t(...s)),n);return r._c=!1,r},Sa=(e,t,n)=>{const r=e._ctx;for(const s in e){if(_i(s))continue;const i=e[s];if(te(i))t[s]=zu(s,i,r);else if(i!=null){const o=vi(i);t[s]=()=>o}}},Ta=(e,t)=>{const n=vi(t);e.slots.default=()=>n},Ca=(e,t,n)=>{for(const r in t)(n||!_i(r))&&(e[r]=t[r])},Ju=(e,t,n)=>{const r=e.slots=ba();if(e.vnode.shapeFlag&32){const s=t._;s?(Ca(r,t,n),n&&xl(r,"_",s,!0)):Sa(t,r)}else t&&Ta(e,t)},Zu=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=be;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ca(s,t,n):(i=!t.$stable,Sa(t,s)),o=t}else t&&(Ta(e,t),o={default:1});if(i)for(const l in s)!_i(l)&&o[l]==null&&delete s[l]},st=rf;function Qu(e){return ef(e)}function ef(e,t){const n=Xr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=Pt,insertStaticContent:S}=e,R=(h,_,T,x=null,k=null,O=null,d=void 0,m=null,b=!!_.dynamicChildren)=>{if(h===_)return;h&&!gn(h,_)&&(x=P(h),De(h,k,O,!0),h=null),_.patchFlag===-2&&(b=!1,_.dynamicChildren=null);const{type:I,ref:H,shapeFlag:M}=_;switch(I){case br:F(h,_,T,x);break;case Ge:v(h,_,T,x);break;case vs:h==null&&E(_,T,x,d);break;case Ae:V(h,_,T,x,k,O,d,m,b);break;default:M&1?$(h,_,T,x,k,O,d,m,b):M&6?oe(h,_,T,x,k,O,d,m,b):(M&64||M&128)&&I.process(h,_,T,x,k,O,d,m,b,Y)}H!=null&&k?zn(H,h&&h.ref,O,_||h,!_):H==null&&h&&h.ref!=null&&zn(h.ref,null,O,h,!0)},F=(h,_,T,x)=>{if(h==null)r(_.el=l(_.children),T,x);else{const k=_.el=h.el;_.children!==h.children&&c(k,_.children)}},v=(h,_,T,x)=>{h==null?r(_.el=a(_.children||""),T,x):_.el=h.el},E=(h,_,T,x)=>{[h.el,h.anchor]=S(h.children,_,T,x,h.el,h.anchor)},L=({el:h,anchor:_},T,x)=>{let k;for(;h&&h!==_;)k=p(h),r(h,T,x),h=k;r(_,T,x)},w=({el:h,anchor:_})=>{let T;for(;h&&h!==_;)T=p(h),s(h),h=T;s(_)},$=(h,_,T,x,k,O,d,m,b)=>{if(_.type==="svg"?d="svg":_.type==="math"&&(d="mathml"),h==null)U(_,T,x,k,O,d,m,b);else{const I=h.el&&h.el._isVueCE?h.el:null;try{I&&I._beginPatch(),G(h,_,k,O,d,m,b)}finally{I&&I._endPatch()}}},U=(h,_,T,x,k,O,d,m)=>{let b,I;const{props:H,shapeFlag:M,transition:y,dirs:A}=h;if(b=h.el=o(h.type,O,H&&H.is,H),M&8?u(b,h.children):M&16&&ne(h.children,b,null,x,k,_s(h,O),d,m),A&&fn(h,null,x,"created"),N(b,h,h.scopeId,d,x),H){for(const Q in H)Q!=="value"&&!qn(Q)&&i(b,Q,null,H[Q],O,x);"value"in H&&i(b,"value",null,H.value,O),(I=H.onVnodeBeforeMount)&&It(I,x,h)}A&&fn(h,null,x,"beforeMount");const K=tf(k,y);K&&y.beforeEnter(b),r(b,_,T),((I=H&&H.onVnodeMounted)||K||A)&&st(()=>{I&&It(I,x,h),K&&y.enter(b),A&&fn(h,null,x,"mounted")},k)},N=(h,_,T,x,k)=>{if(T&&g(h,T),x)for(let O=0;O<x.length;O++)g(h,x[O]);if(k){let O=k.subTree;if(_===O||Aa(O.type)&&(O.ssContent===_||O.ssFallback===_)){const d=k.vnode;N(h,d,d.scopeId,d.slotScopeIds,k.parent)}}},ne=(h,_,T,x,k,O,d,m,b=0)=>{for(let I=b;I<h.length;I++){const H=h[I]=m?Qt(h[I]):xt(h[I]);R(null,H,_,T,x,k,O,d,m)}},G=(h,_,T,x,k,O,d)=>{const m=_.el=h.el;let{patchFlag:b,dynamicChildren:I,dirs:H}=_;b|=h.patchFlag&16;const M=h.props||be,y=_.props||be;let A;if(T&&dn(T,!1),(A=y.onVnodeBeforeUpdate)&&It(A,T,_,h),H&&fn(_,h,T,"beforeUpdate"),T&&dn(T,!0),(M.innerHTML&&y.innerHTML==null||M.textContent&&y.textContent==null)&&u(m,""),I?ee(h.dynamicChildren,I,m,T,x,_s(_,k),O):d||ce(h,_,m,null,T,x,_s(_,k),O,!1),b>0){if(b&16)se(m,M,y,T,k);else if(b&2&&M.class!==y.class&&i(m,"class",null,y.class,k),b&4&&i(m,"style",M.style,y.style,k),b&8){const K=_.dynamicProps;for(let Q=0;Q<K.length;Q++){const le=K[Q],Ne=M[le],Le=y[le];(Le!==Ne||le==="value")&&i(m,le,Ne,Le,k,T)}}b&1&&h.children!==_.children&&u(m,_.children)}else!d&&I==null&&se(m,M,y,T,k);((A=y.onVnodeUpdated)||H)&&st(()=>{A&&It(A,T,_,h),H&&fn(_,h,T,"updated")},x)},ee=(h,_,T,x,k,O,d)=>{for(let m=0;m<_.length;m++){const b=h[m],I=_[m],H=b.el&&(b.type===Ae||!gn(b,I)||b.shapeFlag&198)?f(b.el):T;R(b,I,H,null,x,k,O,d,!0)}},se=(h,_,T,x,k)=>{if(_!==T){if(_!==be)for(const O in _)!qn(O)&&!(O in T)&&i(h,O,_[O],null,k,x);for(const O in T){if(qn(O))continue;const d=T[O],m=_[O];d!==m&&O!=="value"&&i(h,O,m,d,k,x)}"value"in T&&i(h,"value",_.value,T.value,k)}},V=(h,_,T,x,k,O,d,m,b)=>{const I=_.el=h?h.el:l(""),H=_.anchor=h?h.anchor:l("");let{patchFlag:M,dynamicChildren:y,slotScopeIds:A}=_;A&&(m=m?m.concat(A):A),h==null?(r(I,T,x),r(H,T,x),ne(_.children||[],T,H,k,O,d,m,b)):M>0&&M&64&&y&&h.dynamicChildren&&h.dynamicChildren.length===y.length?(ee(h.dynamicChildren,y,T,k,O,d,m),(_.key!=null||k&&_===k.subTree)&&Ia(h,_,!0)):ce(h,_,T,H,k,O,d,m,b)},oe=(h,_,T,x,k,O,d,m,b)=>{_.slotScopeIds=m,h==null?_.shapeFlag&512?k.ctx.activate(_,T,x,d,b):Se(_,T,x,k,O,d,b):Ve(h,_,b)},Se=(h,_,T,x,k,O,d)=>{const m=h.component=ff(h,x,k);if(es(h)&&(m.ctx.renderer=Y),df(m,!1,d),m.asyncDep){if(k&&k.registerDep(m,we,d),!h.el){const b=m.subTree=Z(Ge);v(null,b,_,T),h.placeholder=b.el}}else we(m,h,_,T,k,O,d)},Ve=(h,_,T)=>{const x=_.component=h.component;if(Gu(h,_,T))if(x.asyncDep&&!x.asyncResolved){ue(x,_,T);return}else x.next=_,x.update();else _.el=h.el,x.vnode=_},we=(h,_,T,x,k,O,d)=>{const m=()=>{if(h.isMounted){let{next:M,bu:y,u:A,parent:K,vnode:Q}=h;{const mt=Ra(h);if(mt){M&&(M.el=Q.el,ue(h,M,d)),mt.asyncDep.then(()=>{h.isUnmounted||m()});return}}let le=M,Ne;dn(h,!1),M?(M.el=Q.el,ue(h,M,d)):M=Q,y&&xr(y),(Ne=M.props&&M.props.onVnodeBeforeUpdate)&&It(Ne,K,M,Q),dn(h,!0);const Le=Xi(h),lt=h.subTree;h.subTree=Le,R(lt,Le,f(lt.el),P(lt),h,k,O),M.el=Le.el,le===null&&Ku(h,Le.el),A&&st(A,k),(Ne=M.props&&M.props.onVnodeUpdated)&&st(()=>It(Ne,K,M,Q),k)}else{let M;const{el:y,props:A}=_,{bm:K,m:Q,parent:le,root:Ne,type:Le}=h,lt=On(_);dn(h,!1),K&&xr(K),!lt&&(M=A&&A.onVnodeBeforeMount)&&It(M,le,_),dn(h,!0);{Ne.ce&&Ne.ce._def.shadowRoot!==!1&&Ne.ce._injectChildStyle(Le);const mt=h.subTree=Xi(h);R(null,mt,T,x,h,k,O),_.el=mt.el}if(Q&&st(Q,k),!lt&&(M=A&&A.onVnodeMounted)){const mt=_;st(()=>It(M,le,mt),k)}(_.shapeFlag&256||le&&On(le.vnode)&&le.vnode.shapeFlag&256)&&h.a&&st(h.a,k),h.isMounted=!0,_=T=x=null}};h.scope.on();const b=h.effect=new Ml(m);h.scope.off();const I=h.update=b.run.bind(b),H=h.job=b.runIfDirty.bind(b);H.i=h,H.id=h.uid,b.scheduler=()=>hi(H),dn(h,!0),I()},ue=(h,_,T)=>{_.component=h;const x=h.vnode.props;h.vnode=_,h.next=null,Yu(h,_.props,x,T),Zu(h,_.children,T),Gt(),Hi(h),Kt()},ce=(h,_,T,x,k,O,d,m,b=!1)=>{const I=h&&h.children,H=h?h.shapeFlag:0,M=_.children,{patchFlag:y,shapeFlag:A}=_;if(y>0){if(y&128){nt(I,M,T,x,k,O,d,m,b);return}else if(y&256){Pe(I,M,T,x,k,O,d,m,b);return}}A&8?(H&16&&He(I,k,O),M!==I&&u(T,M)):H&16?A&16?nt(I,M,T,x,k,O,d,m,b):He(I,k,O,!0):(H&8&&u(T,""),A&16&&ne(M,T,x,k,O,d,m,b))},Pe=(h,_,T,x,k,O,d,m,b)=>{h=h||Ln,_=_||Ln;const I=h.length,H=_.length,M=Math.min(I,H);let y;for(y=0;y<M;y++){const A=_[y]=b?Qt(_[y]):xt(_[y]);R(h[y],A,T,null,k,O,d,m,b)}I>H?He(h,k,O,!0,!1,M):ne(_,T,x,k,O,d,m,b,M)},nt=(h,_,T,x,k,O,d,m,b)=>{let I=0;const H=_.length;let M=h.length-1,y=H-1;for(;I<=M&&I<=y;){const A=h[I],K=_[I]=b?Qt(_[I]):xt(_[I]);if(gn(A,K))R(A,K,T,null,k,O,d,m,b);else break;I++}for(;I<=M&&I<=y;){const A=h[M],K=_[y]=b?Qt(_[y]):xt(_[y]);if(gn(A,K))R(A,K,T,null,k,O,d,m,b);else break;M--,y--}if(I>M){if(I<=y){const A=y+1,K=A<H?_[A].el:x;for(;I<=y;)R(null,_[I]=b?Qt(_[I]):xt(_[I]),T,K,k,O,d,m,b),I++}}else if(I>y)for(;I<=M;)De(h[I],k,O,!0),I++;else{const A=I,K=I,Q=new Map;for(I=K;I<=y;I++){const rt=_[I]=b?Qt(_[I]):xt(_[I]);rt.key!=null&&Q.set(rt.key,I)}let le,Ne=0;const Le=y-K+1;let lt=!1,mt=0;const Vn=new Array(Le);for(I=0;I<Le;I++)Vn[I]=0;for(I=A;I<=M;I++){const rt=h[I];if(Ne>=Le){De(rt,k,O,!0);continue}let Ct;if(rt.key!=null)Ct=Q.get(rt.key);else for(le=K;le<=y;le++)if(Vn[le-K]===0&&gn(rt,_[le])){Ct=le;break}Ct===void 0?De(rt,k,O,!0):(Vn[Ct-K]=I+1,Ct>=mt?mt=Ct:lt=!0,R(rt,_[Ct],T,null,k,O,d,m,b),Ne++)}const Mi=lt?nf(Vn):Ln;for(le=Mi.length-1,I=Le-1;I>=0;I--){const rt=K+I,Ct=_[rt],Fi=_[rt+1],Di=rt+1<H?Fi.el||La(Fi):x;Vn[I]===0?R(null,Ct,T,Di,k,O,d,m,b):lt&&(le<0||I!==Mi[le]?Ye(Ct,T,Di,2):le--)}}},Ye=(h,_,T,x,k=null)=>{const{el:O,type:d,transition:m,children:b,shapeFlag:I}=h;if(I&6){Ye(h.component.subTree,_,T,x);return}if(I&128){h.suspense.move(_,T,x);return}if(I&64){d.move(h,_,T,Y);return}if(d===Ae){r(O,_,T);for(let M=0;M<b.length;M++)Ye(b[M],_,T,x);r(h.anchor,_,T);return}if(d===vs){L(h,_,T);return}if(x!==2&&I&1&&m)if(x===0)m.beforeEnter(O),r(O,_,T),st(()=>m.enter(O),k);else{const{leave:M,delayLeave:y,afterLeave:A}=m,K=()=>{h.ctx.isUnmounted?s(O):r(O,_,T)},Q=()=>{O._isLeaving&&O[Ut](!0),M(O,()=>{K(),A&&A()})};y?y(O,K,Q):Q()}else r(O,_,T)},De=(h,_,T,x=!1,k=!1)=>{const{type:O,props:d,ref:m,children:b,dynamicChildren:I,shapeFlag:H,patchFlag:M,dirs:y,cacheIndex:A}=h;if(M===-2&&(k=!1),m!=null&&(Gt(),zn(m,null,T,h,!0),Kt()),A!=null&&(_.renderCache[A]=void 0),H&256){_.ctx.deactivate(h);return}const K=H&1&&y,Q=!On(h);let le;if(Q&&(le=d&&d.onVnodeBeforeUnmount)&&It(le,_,h),H&6)Tt(h.component,T,x);else{if(H&128){h.suspense.unmount(T,x);return}K&&fn(h,null,_,"beforeUnmount"),H&64?h.type.remove(h,_,T,Y,x):I&&!I.hasOnce&&(O!==Ae||M>0&&M&64)?He(I,_,T,!1,!0):(O===Ae&&M&384||!k&&H&16)&&He(b,_,T),x&&Et(h)}(Q&&(le=d&&d.onVnodeUnmounted)||K)&&st(()=>{le&&It(le,_,h),K&&fn(h,null,_,"unmounted")},T)},Et=h=>{const{type:_,el:T,anchor:x,transition:k}=h;if(_===Ae){St(T,x);return}if(_===vs){w(h);return}const O=()=>{s(T),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(h.shapeFlag&1&&k&&!k.persisted){const{leave:d,delayLeave:m}=k,b=()=>d(T,O);m?m(h.el,O,b):b()}else O()},St=(h,_)=>{let T;for(;h!==_;)T=p(h),s(h),h=T;s(_)},Tt=(h,_,T)=>{const{bum:x,scope:k,job:O,subTree:d,um:m,m:b,a:I}=h;Zi(b),Zi(I),x&&xr(x),k.stop(),O&&(O.flags|=8,De(d,h,_,T)),m&&st(m,_),st(()=>{h.isUnmounted=!0},_)},He=(h,_,T,x=!1,k=!1,O=0)=>{for(let d=O;d<h.length;d++)De(h[d],_,T,x,k)},P=h=>{if(h.shapeFlag&6)return P(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const _=p(h.anchor||h.el),T=_&&_[gu];return T?p(T):_};let W=!1;const j=(h,_,T)=>{let x;h==null?_._vnode&&(De(_._vnode,null,null,!0),x=_._vnode.component):R(_._vnode||null,h,_,null,null,null,T),_._vnode=h,W||(W=!0,Hi(x),ta(),W=!1)},Y={p:R,um:De,m:Ye,r:Et,mt:Se,mc:ne,pc:ce,pbc:ee,n:P,o:e};return{render:j,hydrate:void 0,createApp:Uu(j)}}function _s({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function dn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function tf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ia(e,t,n=!1){const r=e.children,s=t.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Qt(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Ia(o,l)),l.type===br&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=i+(e.type===Ae?1:0)),l.type===Ge&&!l.el&&(l.el=o.el)}}function nf(e){const t=e.slice(),n=[0];let r,s,i,o,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<c?i=l+1:o=l;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Ra(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ra(t)}function Zi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function La(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?La(t.subTree):null}const Aa=e=>e.__isSuspense;function rf(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):fu(e)}const Ae=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),Zn=[];let it=null;function X(e=!1){Zn.push(it=e?null:[])}function sf(){Zn.pop(),it=Zn[Zn.length-1]||null}let or=1;function Vr(e,t=!1){or+=e,e<0&&it&&t&&(it.hasOnce=!0)}function xa(e){return e.dynamicChildren=or>0?it||Ln:null,sf(),or>0&&it&&it.push(e),e}function z(e,t,n,r,s,i){return xa(C(e,t,n,r,s,i,!0))}function jr(e,t,n,r,s){return xa(Z(e,t,n,r,s,!0))}function lr(e){return e?e.__v_isVNode===!0:!1}function gn(e,t){return e.type===t.type&&e.key===t.key}const Oa=({key:e})=>e??null,Pr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||je(e)||te(e)?{i:Ke,r:e,k:t,f:!!n}:e:null);function C(e,t=null,n=null,r=0,s=null,i=e===Ae?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oa(t),ref:t&&Pr(t),scopeId:ra,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return l?(bi(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=xe(n)?8:16),or>0&&!o&&it&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&it.push(a),a}const Z=of;function of(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===xu)&&(e=Ge),lr(e)){const l=on(e,t,!0);return n&&bi(l,n),or>0&&!i&&it&&(l.shapeFlag&6?it[it.indexOf(e)]=l:it.push(l)),l.patchFlag=-2,l}if(gf(e)&&(e=e.__vccOpts),t){t=lf(t);let{class:l,style:a}=t;l&&!xe(l)&&(t.class=gt(l)),ve(a)&&(pi(a)&&!J(a)&&(a=Fe({},a)),t.style=zr(a))}const o=xe(e)?1:Aa(e)?128:ia(e)?64:ve(e)?4:te(e)?2:0;return C(e,t,n,r,s,o,i,!0)}function lf(e){return e?pi(e)||ya(e)?Fe({},e):e:null}function on(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:a}=e,c=t?af(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Oa(c),ref:t&&t.ref?n&&i?J(i)?i.concat(Pr(t)):[i,Pr(t)]:Pr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&rr(u,a.clone(u)),u}function Ce(e=" ",t=0){return Z(br,null,e,t)}function $e(e="",t=!1){return t?(X(),jr(Ge,null,e)):Z(Ge,null,e)}function xt(e){return e==null||typeof e=="boolean"?Z(Ge):J(e)?Z(Ae,null,e.slice()):lr(e)?Qt(e):Z(br,null,String(e))}function Qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:on(e)}function bi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),bi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ya(t)?t._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),r&64?(n=16,t=[Ce(t)]):n=8);e.children=t,e.shapeFlag|=n}function af(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=gt([t.class,r.class]));else if(s==="style")t.style=zr([t.style,r.style]);else if(Kr(s)){const i=t[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function It(e,t,n,r=null){yt(e,t,7,[n,r])}const cf=ga();let uf=0;function ff(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||cf,i={uid:uf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ea(r,s),emitsOptions:_a(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ju.bind(null,i),e.ce&&e.ce(i),i}let Qe=null;const yi=()=>Qe||Ke;let Hr,Us;{const e=Xr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Hr=t("__VUE_INSTANCE_SETTERS__",n=>Qe=n),Us=t("__VUE_SSR_SETTERS__",n=>ar=n)}const yr=e=>{const t=Qe;return Hr(e),e.scope.on(),()=>{e.scope.off(),Hr(t)}},Qi=()=>{Qe&&Qe.scope.off(),Hr(null)};function Pa(e){return e.vnode.shapeFlag&4}let ar=!1;function df(e,t=!1,n=!1){t&&Us(t);const{props:r,children:s}=e.vnode,i=Pa(e);qu(e,r,i,t),Ju(e,s,n||t);const o=i?pf(e,t):void 0;return t&&Us(!1),o}function pf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pu);const{setup:r}=n;if(r){Gt();const s=e.setupContext=r.length>1?hf(e):null,i=yr(e),o=_r(r,e,0,[e.props,s]),l=Il(o);if(Kt(),i(),(l||e.sp)&&!On(e)&&fa(e),l){if(o.then(Qi,Qi),t)return o.then(a=>{eo(e,a)}).catch(a=>{Qr(a,e,0)});e.asyncDep=o}else eo(e,o)}else Na(e)}function eo(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=Zl(t)),Na(e)}function Na(e,t,n){const r=e.type;e.render||(e.render=r.render||Pt);{const s=yr(e);Gt();try{Nu(e)}finally{Kt(),s()}}}const mf={get(e,t){return Be(e,"get",""),e[t]}};function hf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mf),slots:e.slots,emit:e.emit,expose:t}}function ss(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zl(nu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jn)return Jn[n](e)},has(t,n){return n in t||n in Jn}})):e.proxy}function gf(e){return te(e)&&"__vccOpts"in e}const Re=(e,t)=>ou(e,t,ar);function wr(e,t,n){try{Vr(-1);const r=arguments.length;return r===2?ve(t)&&!J(t)?lr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&lr(n)&&(n=[n]),Z(e,t,n))}finally{Vr(1)}}const _f="3.5.27";let Vs;const to=typeof window<"u"&&window.trustedTypes;if(to)try{Vs=to.createPolicy("vue",{createHTML:e=>e})}catch{}const ka=Vs?e=>Vs.createHTML(e):e=>e,vf="http://www.w3.org/2000/svg",bf="http://www.w3.org/1998/Math/MathML",$t=typeof document<"u"?document:null,no=$t&&$t.createElement("template"),yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?$t.createElementNS(vf,e):t==="mathml"?$t.createElementNS(bf,e):n?$t.createElement(e,{is:n}):$t.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>$t.createTextNode(e),createComment:e=>$t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{no.innerHTML=ka(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=no.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xt="transition",Hn="animation",cr=Symbol("_vtc"),Ma={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wf=Fe({},oa,Ma),Ef=e=>(e.displayName="Transition",e.props=wf,e),Sf=Ef((e,{slots:t})=>wr(bu,Tf(e),t)),pn=(e,t=[])=>{J(e)?e.forEach(n=>n(...t)):e&&e(...t)},ro=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function Tf(e){const t={};for(const V in e)V in Ma||(t[V]=e[V]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,S=Cf(s),R=S&&S[0],F=S&&S[1],{onBeforeEnter:v,onEnter:E,onEnterCancelled:L,onLeave:w,onLeaveCancelled:$,onBeforeAppear:U=v,onAppear:N=E,onAppearCancelled:ne=L}=t,G=(V,oe,Se,Ve)=>{V._enterCancelled=Ve,mn(V,oe?u:l),mn(V,oe?c:o),Se&&Se()},ee=(V,oe)=>{V._isLeaving=!1,mn(V,f),mn(V,g),mn(V,p),oe&&oe()},se=V=>(oe,Se)=>{const Ve=V?N:E,we=()=>G(oe,V,Se);pn(Ve,[oe,we]),so(()=>{mn(oe,V?a:i),Mt(oe,V?u:l),ro(Ve)||io(oe,r,R,we)})};return Fe(t,{onBeforeEnter(V){pn(v,[V]),Mt(V,i),Mt(V,o)},onBeforeAppear(V){pn(U,[V]),Mt(V,a),Mt(V,c)},onEnter:se(!1),onAppear:se(!0),onLeave(V,oe){V._isLeaving=!0;const Se=()=>ee(V,oe);Mt(V,f),V._enterCancelled?(Mt(V,p),ao(V)):(ao(V),Mt(V,p)),so(()=>{V._isLeaving&&(mn(V,f),Mt(V,g),ro(w)||io(V,r,F,Se))}),pn(w,[V,Se])},onEnterCancelled(V){G(V,!1,void 0,!0),pn(L,[V])},onAppearCancelled(V){G(V,!0,void 0,!0),pn(ne,[V])},onLeaveCancelled(V){ee(V),pn($,[V])}})}function Cf(e){if(e==null)return null;if(ve(e))return[bs(e.enter),bs(e.leave)];{const t=bs(e);return[t,t]}}function bs(e){return Lc(e)}function Mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[cr]||(e[cr]=new Set)).add(t)}function mn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[cr];n&&(n.delete(t),n.size||(e[cr]=void 0))}function so(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let If=0;function io(e,t,n,r){const s=e._endId=++If,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=Rf(e,t);if(!o)return r();const c=o+"end";let u=0;const f=()=>{e.removeEventListener(c,p),i()},p=g=>{g.target===e&&++u>=a&&f()};setTimeout(()=>{u<a&&f()},l+1),e.addEventListener(c,p)}function Rf(e,t){const n=window.getComputedStyle(e),r=S=>(n[S]||"").split(", "),s=r(`${Xt}Delay`),i=r(`${Xt}Duration`),o=oo(s,i),l=r(`${Hn}Delay`),a=r(`${Hn}Duration`),c=oo(l,a);let u=null,f=0,p=0;t===Xt?o>0&&(u=Xt,f=o,p=i.length):t===Hn?c>0&&(u=Hn,f=c,p=a.length):(f=Math.max(o,c),u=f>0?o>c?Xt:Hn:null,p=u?u===Xt?i.length:a.length:0);const g=u===Xt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Xt}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:g}}function oo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>lo(n)+lo(e[r])))}function lo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ao(e){return(e?e.ownerDocument:document).body.offsetHeight}function Lf(e,t,n){const r=e[cr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const co=Symbol("_vod"),Af=Symbol("_vsh"),xf=Symbol(""),Of=/(?:^|;)\s*display\s*:/;function Pf(e,t,n){const r=e.style,s=xe(n);let i=!1;if(n&&!s){if(t)if(xe(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Nr(r,l,"")}else for(const o in t)n[o]==null&&Nr(r,o,"");for(const o in n)o==="display"&&(i=!0),Nr(r,o,n[o])}else if(s){if(t!==n){const o=r[xf];o&&(n+=";"+o),r.cssText=n,i=Of.test(n)}}else t&&e.removeAttribute("style");co in e&&(e[co]=i?r.display:"",e[Af]&&(r.display="none"))}const uo=/\s*!important$/;function Nr(e,t,n){if(J(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Nf(e,t);uo.test(n)?e.setProperty(Sn(r),n.replace(uo,""),"important"):e[r]=n}}const fo=["Webkit","Moz","ms"],ys={};function Nf(e,t){const n=ys[t];if(n)return n;let r=sn(t);if(r!=="filter"&&r in e)return ys[t]=r;r=Al(r);for(let s=0;s<fo.length;s++){const i=fo[s]+r;if(i in e)return ys[t]=i}return t}const po="http://www.w3.org/1999/xlink";function mo(e,t,n,r,s,i=kc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(po,t.slice(6,t.length)):e.setAttributeNS(po,t,n):n==null||i&&!Ol(n)?e.removeAttribute(t):e.setAttribute(t,i?"":vt(n)?String(n):n)}function ho(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ka(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ol(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Ht(e,t,n,r){e.addEventListener(t,n,r)}function kf(e,t,n,r){e.removeEventListener(t,n,r)}const go=Symbol("_vei");function Mf(e,t,n,r,s=null){const i=e[go]||(e[go]={}),o=i[t];if(r&&o)o.value=r;else{const[l,a]=Ff(t);if(r){const c=i[t]=Uf(r,s);Ht(e,l,c,a)}else o&&(kf(e,l,o,a),i[t]=void 0)}}const _o=/(?:Once|Passive|Capture)$/;function Ff(e){let t;if(_o.test(e)){t={};let r;for(;r=e.match(_o);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Sn(e.slice(2)),t]}let ws=0;const Df=Promise.resolve(),$f=()=>ws||(Df.then(()=>ws=0),ws=Date.now());function Uf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yt(Vf(r,n.value),t,5,[r])};return n.value=e,n.attached=$f(),n}function Vf(e,t){if(J(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jf=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Lf(e,r,o):t==="style"?Pf(e,n,r):Kr(t)?ri(t)||Mf(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hf(e,t,r,o))?(ho(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&mo(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(r))?ho(e,sn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mo(e,t,r,o))};function Hf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&vo(t)&&te(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vo(t)&&xe(n)?!1:t in e}const ln=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>xr(t,n):t};function Wf(e){e.target.composing=!0}function bo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pt=Symbol("_assign");function yo(e,t,n){return t&&(e=e.trim()),n&&(e=Yr(e)),e}const Wr={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[pt]=ln(s);const i=r||s.props&&s.props.type==="number";Ht(e,t?"change":"input",o=>{o.target.composing||e[pt](yo(e.value,n,i))}),(n||i)&&Ht(e,"change",()=>{e.value=yo(e.value,n,i)}),t||(Ht(e,"compositionstart",Wf),Ht(e,"compositionend",bo),Ht(e,"change",bo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[pt]=ln(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Yr(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===a)||(e.value=a))}},Br={deep:!0,created(e,t,n){e[pt]=ln(n),Ht(e,"change",()=>{const r=e._modelValue,s=kn(e),i=e.checked,o=e[pt];if(J(r)){const l=oi(r,s),a=l!==-1;if(i&&!a)o(r.concat(s));else if(!i&&a){const c=[...r];c.splice(l,1),o(c)}}else if(Un(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Fa(e,i))})},mounted:wo,beforeUpdate(e,t,n){e[pt]=ln(n),wo(e,t,n)}};function wo(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(J(t))s=oi(t,r.props.value)>-1;else if(Un(t))s=t.has(r.props.value);else{if(t===n)return;s=wn(t,Fa(e,!0))}e.checked!==s&&(e.checked=s)}const Bf={created(e,{value:t},n){e.checked=wn(t,n.props.value),e[pt]=ln(n),Ht(e,"change",()=>{e[pt](kn(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[pt]=ln(r),t!==n&&(e.checked=wn(t,r.props.value))}},Gf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Un(t);Ht(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Yr(kn(o)):kn(o));e[pt](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,mi(()=>{e._assigning=!1})}),e[pt]=ln(r)},mounted(e,{value:t}){Eo(e,t)},beforeUpdate(e,t,n){e[pt]=ln(n)},updated(e,{value:t}){e._assigning||Eo(e,t)}};function Eo(e,t){const n=e.multiple,r=J(t);if(!(n&&!r&&!Un(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],l=kn(o);if(n)if(r){const a=typeof l;a==="string"||a==="number"?o.selected=t.some(c=>String(c)===String(l)):o.selected=oi(t,l)>-1}else o.selected=t.has(l);else if(wn(kn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function kn(e){return"_value"in e?e._value:e.value}function Fa(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const js={created(e,t,n){Ir(e,t,n,null,"created")},mounted(e,t,n){Ir(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Ir(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Ir(e,t,n,r,"updated")}};function Kf(e,t){switch(e){case"SELECT":return Gf;case"TEXTAREA":return Wr;default:switch(t){case"checkbox":return Br;case"radio":return Bf;default:return Wr}}}function Ir(e,t,n,r,s){const o=Kf(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,r)}const qf=["ctrl","shift","alt","meta"],Yf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qf.some(n=>e[`${n}Key`]&&!t.includes(n))},Kn=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<t.length;o++){const l=Yf[t[o]];if(l&&l(s,t))return}return e(s,...i)}))},Xf=Fe({patchProp:jf},yf);let So;function zf(){return So||(So=Qu(Xf))}const Jf=((...e)=>{const t=zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Qf(r);if(!s)return;const i=t._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Zf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Zf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Qf(e){return xe(e)?document.querySelector(e):e}function ed(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Gr=typeof window<"u",an=(e,t=!1)=>t?Symbol.for(e):Symbol(e),td=(e,t,n)=>nd({l:e,k:t,s:n}),nd=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Oe=e=>typeof e=="number"&&isFinite(e),rd=e=>wi(e)==="[object Date]",Mn=e=>wi(e)==="[object RegExp]",is=e=>ae(e)&&Object.keys(e).length===0,Me=Object.assign,sd=Object.create,_e=(e=null)=>sd(e);let To;const _n=()=>To||(To=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:_e());function Co(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Io(e){return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function id(e){return e=e.replace(/(\w+)\s*=\s*"([^"]*)"/g,(r,s,i)=>`${s}="${Io(i)}"`),e=e.replace(/(\w+)\s*=\s*'([^']*)'/g,(r,s,i)=>`${s}='${Io(i)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e)&&(e=e.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r=>{e=e.replace(r,"$1javascript&#58;")}),e}const od=Object.prototype.hasOwnProperty;function ht(e,t){return od.call(e,t)}const Ie=Array.isArray,Ee=e=>typeof e=="function",B=e=>typeof e=="string",fe=e=>typeof e=="boolean",pe=e=>e!==null&&typeof e=="object",ld=e=>pe(e)&&Ee(e.then)&&Ee(e.catch),Da=Object.prototype.toString,wi=e=>Da.call(e),ae=e=>wi(e)==="[object Object]",ad=e=>e==null?"":Ie(e)||ae(e)&&e.toString===Da?JSON.stringify(e,null,2):String(e);function Ei(e,t=""){return e.reduce((n,r,s)=>s===0?n+r:n+t+r,"")}const Rr=e=>!pe(e)||Ie(e);function kr(e,t){if(Rr(e)||Rr(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(pe(r[i])&&!pe(s[i])&&(s[i]=Array.isArray(r[i])?[]:_e()),Rr(s[i])||Rr(r[i])?s[i]=r[i]:n.push({src:r[i],des:s[i]}))})}}function cd(e,t,n){return{line:e,column:t,offset:n}}function Hs(e,t,n){return{start:e,end:t}}const he={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},ud=17;function os(e,t,n={}){const{domain:r,messages:s,args:i}=n,o=e,l=new SyntaxError(String(o));return l.code=e,t&&(l.location=t),l.domain=r,l}function fd(e){throw e}const Rt=" ",dd="\r",We=`
`,pd="\u2028",md="\u2029";function hd(e){const t=e;let n=0,r=1,s=1,i=0;const o=N=>t[N]===dd&&t[N+1]===We,l=N=>t[N]===We,a=N=>t[N]===md,c=N=>t[N]===pd,u=N=>o(N)||l(N)||a(N)||c(N),f=()=>n,p=()=>r,g=()=>s,S=()=>i,R=N=>o(N)||a(N)||c(N)?We:t[N],F=()=>R(n),v=()=>R(n+i);function E(){return i=0,u(n)&&(r++,s=0),o(n)&&n++,n++,s++,t[n]}function L(){return o(n+i)&&i++,i++,t[n+i]}function w(){n=0,r=1,s=1,i=0}function $(N=0){i=N}function U(){const N=n+i;for(;N!==n;)E();i=0}return{index:f,line:p,column:g,peekOffset:S,charAt:R,currentChar:F,currentPeek:v,next:E,peek:L,reset:w,resetPeek:$,skipToPeek:U}}const Ft=void 0,gd=".",Ro="'",_d="tokenizer";function vd(e,t={}){const n=t.location!==!1,r=hd(e),s=()=>r.index(),i=()=>cd(r.line(),r.column(),r.index()),o=i(),l=s(),a={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>a,{onError:u}=t;function f(d,m,b,...I){const H=c();if(m.column+=b,m.offset+=b,u){const M=n?Hs(H.startLoc,m):null,y=os(d,M,{domain:_d,args:I});u(y)}}function p(d,m,b){d.endLoc=i(),d.currentType=m;const I={type:m};return n&&(I.loc=Hs(d.startLoc,d.endLoc)),b!=null&&(I.value=b),I}const g=d=>p(d,13);function S(d,m){return d.currentChar()===m?(d.next(),m):(f(he.EXPECTED_TOKEN,i(),0,m),"")}function R(d){let m="";for(;d.currentPeek()===Rt||d.currentPeek()===We;)m+=d.currentPeek(),d.peek();return m}function F(d){const m=R(d);return d.skipToPeek(),m}function v(d){if(d===Ft)return!1;const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m===95}function E(d){if(d===Ft)return!1;const m=d.charCodeAt(0);return m>=48&&m<=57}function L(d,m){const{currentType:b}=m;if(b!==2)return!1;R(d);const I=v(d.currentPeek());return d.resetPeek(),I}function w(d,m){const{currentType:b}=m;if(b!==2)return!1;R(d);const I=d.currentPeek()==="-"?d.peek():d.currentPeek(),H=E(I);return d.resetPeek(),H}function $(d,m){const{currentType:b}=m;if(b!==2)return!1;R(d);const I=d.currentPeek()===Ro;return d.resetPeek(),I}function U(d,m){const{currentType:b}=m;if(b!==7)return!1;R(d);const I=d.currentPeek()===".";return d.resetPeek(),I}function N(d,m){const{currentType:b}=m;if(b!==8)return!1;R(d);const I=v(d.currentPeek());return d.resetPeek(),I}function ne(d,m){const{currentType:b}=m;if(!(b===7||b===11))return!1;R(d);const I=d.currentPeek()===":";return d.resetPeek(),I}function G(d,m){const{currentType:b}=m;if(b!==9)return!1;const I=()=>{const M=d.currentPeek();return M==="{"?v(d.peek()):M==="@"||M==="|"||M===":"||M==="."||M===Rt||!M?!1:M===We?(d.peek(),I()):se(d,!1)},H=I();return d.resetPeek(),H}function ee(d){R(d);const m=d.currentPeek()==="|";return d.resetPeek(),m}function se(d,m=!0){const b=(H=!1,M="")=>{const y=d.currentPeek();return y==="{"||y==="@"||!y?H:y==="|"?!(M===Rt||M===We):y===Rt?(d.peek(),b(!0,Rt)):y===We?(d.peek(),b(!0,We)):!0},I=b();return m&&d.resetPeek(),I}function V(d,m){const b=d.currentChar();return b===Ft?Ft:m(b)?(d.next(),b):null}function oe(d){const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36}function Se(d){return V(d,oe)}function Ve(d){const m=d.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36||m===45}function we(d){return V(d,Ve)}function ue(d){const m=d.charCodeAt(0);return m>=48&&m<=57}function ce(d){return V(d,ue)}function Pe(d){const m=d.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102}function nt(d){return V(d,Pe)}function Ye(d){let m="",b="";for(;m=ce(d);)b+=m;return b}function De(d){let m="";for(;;){const b=d.currentChar();if(b==="{"||b==="}"||b==="@"||b==="|"||!b)break;if(b===Rt||b===We)if(se(d))m+=b,d.next();else{if(ee(d))break;m+=b,d.next()}else m+=b,d.next()}return m}function Et(d){F(d);let m="",b="";for(;m=we(d);)b+=m;const I=d.currentChar();if(I&&I!=="}"&&I!==Ft&&I!==Rt&&I!==We&&I!=="　"){const H=Y(d);return f(he.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,b+H),b+H}return d.currentChar()===Ft&&f(he.UNTERMINATED_CLOSING_BRACE,i(),0),b}function St(d){F(d);let m="";return d.currentChar()==="-"?(d.next(),m+=`-${Ye(d)}`):m+=Ye(d),d.currentChar()===Ft&&f(he.UNTERMINATED_CLOSING_BRACE,i(),0),m}function Tt(d){return d!==Ro&&d!==We}function He(d){F(d),S(d,"'");let m="",b="";for(;m=V(d,Tt);)m==="\\"?b+=P(d):b+=m;const I=d.currentChar();return I===We||I===Ft?(f(he.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),I===We&&(d.next(),S(d,"'")),b):(S(d,"'"),b)}function P(d){const m=d.currentChar();switch(m){case"\\":case"'":return d.next(),`\\${m}`;case"u":return W(d,m,4);case"U":return W(d,m,6);default:return f(he.UNKNOWN_ESCAPE_SEQUENCE,i(),0,m),""}}function W(d,m,b){S(d,m);let I="";for(let H=0;H<b;H++){const M=nt(d);if(!M){f(he.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${m}${I}${d.currentChar()}`);break}I+=M}return`\\${m}${I}`}function j(d){return d!=="{"&&d!=="}"&&d!==Rt&&d!==We}function Y(d){F(d);let m="",b="";for(;m=V(d,j);)b+=m;return b}function ie(d){let m="",b="";for(;m=Se(d);)b+=m;return b}function h(d){const m=b=>{const I=d.currentChar();return I==="{"||I==="@"||I==="|"||I==="("||I===")"||!I||I===Rt?b:(b+=I,d.next(),m(b))};return m("")}function _(d){F(d);const m=S(d,"|");return F(d),m}function T(d,m){let b=null;switch(d.currentChar()){case"{":return m.braceNest>=1&&f(he.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),d.next(),b=p(m,2,"{"),F(d),m.braceNest++,b;case"}":return m.braceNest>0&&m.currentType===2&&f(he.EMPTY_PLACEHOLDER,i(),0),d.next(),b=p(m,3,"}"),m.braceNest--,m.braceNest>0&&F(d),m.inLinked&&m.braceNest===0&&(m.inLinked=!1),b;case"@":return m.braceNest>0&&f(he.UNTERMINATED_CLOSING_BRACE,i(),0),b=x(d,m)||g(m),m.braceNest=0,b;default:{let H=!0,M=!0,y=!0;if(ee(d))return m.braceNest>0&&f(he.UNTERMINATED_CLOSING_BRACE,i(),0),b=p(m,1,_(d)),m.braceNest=0,m.inLinked=!1,b;if(m.braceNest>0&&(m.currentType===4||m.currentType===5||m.currentType===6))return f(he.UNTERMINATED_CLOSING_BRACE,i(),0),m.braceNest=0,k(d,m);if(H=L(d,m))return b=p(m,4,Et(d)),F(d),b;if(M=w(d,m))return b=p(m,5,St(d)),F(d),b;if(y=$(d,m))return b=p(m,6,He(d)),F(d),b;if(!H&&!M&&!y)return b=p(m,12,Y(d)),f(he.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,b.value),F(d),b;break}}return b}function x(d,m){const{currentType:b}=m;let I=null;const H=d.currentChar();switch((b===7||b===8||b===11||b===9)&&(H===We||H===Rt)&&f(he.INVALID_LINKED_FORMAT,i(),0),H){case"@":return d.next(),I=p(m,7,"@"),m.inLinked=!0,I;case".":return F(d),d.next(),p(m,8,".");case":":return F(d),d.next(),p(m,9,":");default:return ee(d)?(I=p(m,1,_(d)),m.braceNest=0,m.inLinked=!1,I):U(d,m)||ne(d,m)?(F(d),x(d,m)):N(d,m)?(F(d),p(m,11,ie(d))):G(d,m)?(F(d),H==="{"?T(d,m)||I:p(m,10,h(d))):(b===7&&f(he.INVALID_LINKED_FORMAT,i(),0),m.braceNest=0,m.inLinked=!1,k(d,m))}}function k(d,m){let b={type:13};if(m.braceNest>0)return T(d,m)||g(m);if(m.inLinked)return x(d,m)||g(m);switch(d.currentChar()){case"{":return T(d,m)||g(m);case"}":return f(he.UNBALANCED_CLOSING_BRACE,i(),0),d.next(),p(m,3,"}");case"@":return x(d,m)||g(m);default:{if(ee(d))return b=p(m,1,_(d)),m.braceNest=0,m.inLinked=!1,b;if(se(d))return p(m,0,De(d));break}}return b}function O(){const{currentType:d,offset:m,startLoc:b,endLoc:I}=a;return a.lastType=d,a.lastOffset=m,a.lastStartLoc=b,a.lastEndLoc=I,a.offset=s(),a.startLoc=i(),r.currentChar()===Ft?p(a,13):k(r,a)}return{nextToken:O,currentOffset:s,currentPosition:i,context:c}}const bd="parser",yd=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function wd(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Ed(e={}){const t=e.location!==!1,{onError:n}=e;function r(v,E,L,w,...$){const U=v.currentPosition();if(U.offset+=w,U.column+=w,n){const N=t?Hs(L,U):null,ne=os(E,N,{domain:bd,args:$});n(ne)}}function s(v,E,L){const w={type:v};return t&&(w.start=E,w.end=E,w.loc={start:L,end:L}),w}function i(v,E,L,w){t&&(v.end=E,v.loc&&(v.loc.end=L))}function o(v,E){const L=v.context(),w=s(3,L.offset,L.startLoc);return w.value=E,i(w,v.currentOffset(),v.currentPosition()),w}function l(v,E){const L=v.context(),{lastOffset:w,lastStartLoc:$}=L,U=s(5,w,$);return U.index=parseInt(E,10),v.nextToken(),i(U,v.currentOffset(),v.currentPosition()),U}function a(v,E){const L=v.context(),{lastOffset:w,lastStartLoc:$}=L,U=s(4,w,$);return U.key=E,v.nextToken(),i(U,v.currentOffset(),v.currentPosition()),U}function c(v,E){const L=v.context(),{lastOffset:w,lastStartLoc:$}=L,U=s(9,w,$);return U.value=E.replace(yd,wd),v.nextToken(),i(U,v.currentOffset(),v.currentPosition()),U}function u(v){const E=v.nextToken(),L=v.context(),{lastOffset:w,lastStartLoc:$}=L,U=s(8,w,$);return E.type!==11?(r(v,he.UNEXPECTED_EMPTY_LINKED_MODIFIER,L.lastStartLoc,0),U.value="",i(U,w,$),{nextConsumeToken:E,node:U}):(E.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Lt(E)),U.value=E.value||"",i(U,v.currentOffset(),v.currentPosition()),{node:U})}function f(v,E){const L=v.context(),w=s(7,L.offset,L.startLoc);return w.value=E,i(w,v.currentOffset(),v.currentPosition()),w}function p(v){const E=v.context(),L=s(6,E.offset,E.startLoc);let w=v.nextToken();if(w.type===8){const $=u(v);L.modifier=$.node,w=$.nextConsumeToken||v.nextToken()}switch(w.type!==9&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(w)),w=v.nextToken(),w.type===2&&(w=v.nextToken()),w.type){case 10:w.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(w)),L.key=f(v,w.value||"");break;case 4:w.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(w)),L.key=a(v,w.value||"");break;case 5:w.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(w)),L.key=l(v,w.value||"");break;case 6:w.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(w)),L.key=c(v,w.value||"");break;default:{r(v,he.UNEXPECTED_EMPTY_LINKED_KEY,E.lastStartLoc,0);const $=v.context(),U=s(7,$.offset,$.startLoc);return U.value="",i(U,$.offset,$.startLoc),L.key=U,i(L,$.offset,$.startLoc),{nextConsumeToken:w,node:L}}}return i(L,v.currentOffset(),v.currentPosition()),{node:L}}function g(v){const E=v.context(),L=E.currentType===1?v.currentOffset():E.offset,w=E.currentType===1?E.endLoc:E.startLoc,$=s(2,L,w);$.items=[];let U=null;do{const G=U||v.nextToken();switch(U=null,G.type){case 0:G.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(G)),$.items.push(o(v,G.value||""));break;case 5:G.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(G)),$.items.push(l(v,G.value||""));break;case 4:G.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(G)),$.items.push(a(v,G.value||""));break;case 6:G.value==null&&r(v,he.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Lt(G)),$.items.push(c(v,G.value||""));break;case 7:{const ee=p(v);$.items.push(ee.node),U=ee.nextConsumeToken||null;break}}}while(E.currentType!==13&&E.currentType!==1);const N=E.currentType===1?E.lastOffset:v.currentOffset(),ne=E.currentType===1?E.lastEndLoc:v.currentPosition();return i($,N,ne),$}function S(v,E,L,w){const $=v.context();let U=w.items.length===0;const N=s(1,E,L);N.cases=[],N.cases.push(w);do{const ne=g(v);U||(U=ne.items.length===0),N.cases.push(ne)}while($.currentType!==13);return U&&r(v,he.MUST_HAVE_MESSAGES_IN_PLURAL,L,0),i(N,v.currentOffset(),v.currentPosition()),N}function R(v){const E=v.context(),{offset:L,startLoc:w}=E,$=g(v);return E.currentType===13?$:S(v,L,w,$)}function F(v){const E=vd(v,Me({},e)),L=E.context(),w=s(0,L.offset,L.startLoc);return t&&w.loc&&(w.loc.source=v),w.body=R(E),e.onCacheKey&&(w.cacheKey=e.onCacheKey(v)),L.currentType!==13&&r(E,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,v[L.offset]||""),i(w,E.currentOffset(),E.currentPosition()),w}return{parse:F}}function Lt(e){if(e.type===13)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function Sd(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Lo(e,t){for(let n=0;n<e.length;n++)Si(e[n],t)}function Si(e,t){switch(e.type){case 1:Lo(e.cases,t),t.helper("plural");break;case 2:Lo(e.items,t);break;case 6:{Si(e.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function Td(e,t={}){const n=Sd(e);n.helper("normalize"),e.body&&Si(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function Cd(e){const t=e.body;return t.type===2?Ao(t):t.cases.forEach(n=>Ao(n)),e}function Ao(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=Ei(t);for(let n=0;n<e.items.length;n++){const r=e.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function In(e){switch(e.t=e.type,e.type){case 0:{const t=e;In(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let r=0;r<n.length;r++)In(n[r]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let r=0;r<n.length;r++)In(n[r]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;In(t.key),t.k=t.key,delete t.key,t.modifier&&(In(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}}delete e.type}function Id(e,t){const{filename:n,breakLineCode:r,needIndent:s}=t,i=t.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&e.loc&&(o.source=e.loc.source);const l=()=>o;function a(R,F){o.code+=R}function c(R,F=!0){const v=F?r:"";a(s?v+"  ".repeat(R):v)}function u(R=!0){const F=++o.indentLevel;R&&c(F)}function f(R=!0){const F=--o.indentLevel;R&&c(F)}function p(){c(o.indentLevel)}return{context:l,push:a,indent:u,deindent:f,newline:p,helper:R=>`_${R}`,needIndent:()=>o.needIndent}}function Rd(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),Fn(e,t.key),t.modifier?(e.push(", "),Fn(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function Ld(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const s=t.items.length;for(let i=0;i<s&&(Fn(e,t.items[i]),i!==s-1);i++)e.push(", ");e.deindent(r()),e.push("])")}function Ad(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const s=t.cases.length;for(let i=0;i<s&&(Fn(e,t.cases[i]),i!==s-1);i++)e.push(", ");e.deindent(r()),e.push("])")}}function xd(e,t){t.body?Fn(e,t.body):e.push("null")}function Fn(e,t){const{helper:n}=e;switch(t.type){case 0:xd(e,t);break;case 1:Ad(e,t);break;case 2:Ld(e,t);break;case 6:Rd(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const Od=(e,t={})=>{const n=B(t.mode)?t.mode:"normal",r=B(t.filename)?t.filename:"message.intl";t.sourceMap;const s=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,i=t.needIndent?t.needIndent:n!=="arrow",o=e.helpers||[],l=Id(e,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${Ei(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),l.newline()),l.push("return "),Fn(l,e),l.deindent(i),l.push("}"),delete e.helpers;const{code:a,map:c}=l.context();return{ast:e,code:a,map:c?c.toJSON():void 0}};function Pd(e,t={}){const n=Me({},t),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Ed(n).parse(e);return r?(i&&Cd(l),s&&In(l),{ast:l,code:""}):(Td(l,n),Od(l,n))}function Nd(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(_n().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(_n().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Nt(e){return pe(e)&&Ti(e)===0&&(ht(e,"b")||ht(e,"body"))}const $a=["b","body"];function kd(e){return cn(e,$a)}const Ua=["c","cases"];function Md(e){return cn(e,Ua,[])}const Va=["s","static"];function Fd(e){return cn(e,Va)}const ja=["i","items"];function Dd(e){return cn(e,ja,[])}const Ha=["t","type"];function Ti(e){return cn(e,Ha)}const Wa=["v","value"];function Lr(e,t){const n=cn(e,Wa);if(n!=null)return n;throw ur(t)}const Ba=["m","modifier"];function $d(e){return cn(e,Ba)}const Ga=["k","key"];function Ud(e){const t=cn(e,Ga);if(t)return t;throw ur(6)}function cn(e,t,n){for(let r=0;r<t.length;r++){const s=t[r];if(ht(e,s)&&e[s]!=null)return e[s]}return n}const Ka=[...$a,...Ua,...Va,...ja,...Ga,...Ba,...Wa,...Ha];function ur(e){return new Error(`unhandled node type: ${e}`)}function Es(e){return n=>Vd(n,e)}function Vd(e,t){const n=kd(t);if(n==null)throw ur(0);if(Ti(n)===1){const i=Md(n);return e.plural(i.reduce((o,l)=>[...o,xo(e,l)],[]))}else return xo(e,n)}function xo(e,t){const n=Fd(t);if(n!=null)return e.type==="text"?n:e.normalize([n]);{const r=Dd(t).reduce((s,i)=>[...s,Ws(e,i)],[]);return e.normalize(r)}}function Ws(e,t){const n=Ti(t);switch(n){case 3:return Lr(t,n);case 9:return Lr(t,n);case 4:{const r=t;if(ht(r,"k")&&r.k)return e.interpolate(e.named(r.k));if(ht(r,"key")&&r.key)return e.interpolate(e.named(r.key));throw ur(n)}case 5:{const r=t;if(ht(r,"i")&&Oe(r.i))return e.interpolate(e.list(r.i));if(ht(r,"index")&&Oe(r.index))return e.interpolate(e.list(r.index));throw ur(n)}case 6:{const r=t,s=$d(r),i=Ud(r);return e.linked(Ws(e,i),s?Ws(e,s):void 0,e.type)}case 7:return Lr(t,n);case 8:return Lr(t,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const jd=e=>e;let Ar=_e();function Hd(e,t={}){let n=!1;const r=t.onError||fd;return t.onError=s=>{n=!0,r(s)},{...Pd(e,t),detectError:n}}function Wd(e,t){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&B(e)){fe(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||jd)(e),s=Ar[r];if(s)return s;const{ast:i,detectError:o}=Hd(e,{...t,location:!1,jit:!0}),l=Es(i);return o?l:Ar[r]=l}else{const n=e.cacheKey;if(n){const r=Ar[n];return r||(Ar[n]=Es(e))}else return Es(e)}}let fr=null;function Bd(e){fr=e}function Gd(e,t,n){fr&&fr.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Kd=qd("function:translate");function qd(e){return t=>fr&&fr.emit(e,t)}const Wt={INVALID_ARGUMENT:ud,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},Yd=24;function Bt(e){return os(e,null,void 0)}function Ci(e,t){return t.locale!=null?Oo(t.locale):Oo(e.locale)}let Ss;function Oo(e){if(B(e))return e;if(Ee(e)){if(e.resolvedOnce&&Ss!=null)return Ss;if(e.constructor.name==="Function"){const t=e();if(ld(t))throw Bt(Wt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ss=t}else throw Bt(Wt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Bt(Wt.NOT_SUPPORT_LOCALE_TYPE)}function Xd(e,t,n){return[...new Set([n,...Ie(t)?t:pe(t)?Object.keys(t):B(t)?[t]:[n]])]}function qa(e,t,n){const r=B(n)?n:dr,s=e;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;Ie(o);)o=Po(i,o,t);const l=Ie(t)||!ae(t)?t:t.default?t.default:null;o=B(l)?[l]:l,Ie(o)&&Po(i,o,!1),s.__localeChainCache.set(r,i)}return i}function Po(e,t,n){let r=!0;for(let s=0;s<t.length&&fe(r);s++){const i=t[s];B(i)&&(r=zd(e,t[s],n))}return r}function zd(e,t,n){let r;const s=t.split("-");do{const i=s.join("-");r=Jd(e,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function Jd(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const s=t.replace(/!/g,"");e.push(s),(Ie(n)||ae(n))&&n[s]&&(r=n[s])}return r}const un=[];un[0]={w:[0],i:[3,0],"[":[4],o:[7]};un[1]={w:[1],".":[2],"[":[4],o:[7]};un[2]={w:[2],i:[3,0],0:[3,0]};un[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};un[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};un[5]={"'":[4,0],o:8,l:[5,0]};un[6]={'"':[4,0],o:8,l:[6,0]};const Zd=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Qd(e){return Zd.test(e)}function ep(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function tp(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function np(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Qd(t)?ep(t):"*"+t}function rp(e){const t=[];let n=-1,r=0,s=0,i,o,l,a,c,u,f;const p=[];p[0]=()=>{o===void 0?o=l:o+=l},p[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},p[2]=()=>{p[0](),s++},p[3]=()=>{if(s>0)s--,r=4,p[0]();else{if(s=0,o===void 0||(o=np(o),o===!1))return!1;p[1]()}};function g(){const S=e[n+1];if(r===5&&S==="'"||r===6&&S==='"')return n++,l="\\"+S,p[0](),!0}for(;r!==null;)if(n++,i=e[n],!(i==="\\"&&g())){if(a=tp(i),f=un[r],c=f[a]||f.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=p[c[1]],u&&(l=i,u()===!1))))return;if(r===7)return t}}const No=new Map;function sp(e,t){return pe(e)?e[t]:null}function ip(e,t){if(!pe(e))return null;let n=No.get(t);if(n||(n=rp(t),n&&No.set(t,n)),!n)return null;const r=n.length;let s=e,i=0;for(;i<r;){const o=n[i];if(Ka.includes(o)&&Nt(s))return null;const l=s[o];if(l===void 0||Ee(s))return null;s=l,i++}return s}const op="11.2.8",ls=-1,dr="en-US",ko="",Mo=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function lp(){return{upper:(e,t)=>t==="text"&&B(e)?e.toUpperCase():t==="vnode"&&pe(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&B(e)?e.toLowerCase():t==="vnode"&&pe(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&B(e)?Mo(e):t==="vnode"&&pe(e)&&"__v_isVNode"in e?Mo(e.children):e}}let Ya;function ap(e){Ya=e}let Xa;function cp(e){Xa=e}let za;function up(e){za=e}let Ja=null;const fp=e=>{Ja=e},dp=()=>Ja;let Za=null;const Fo=e=>{Za=e},pp=()=>Za;let Do=0;function mp(e={}){const t=Ee(e.onWarn)?e.onWarn:ed,n=B(e.version)?e.version:op,r=B(e.locale)||Ee(e.locale)?e.locale:dr,s=Ee(r)?dr:r,i=Ie(e.fallbackLocale)||ae(e.fallbackLocale)||B(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,o=ae(e.messages)?e.messages:Ts(s),l=ae(e.datetimeFormats)?e.datetimeFormats:Ts(s),a=ae(e.numberFormats)?e.numberFormats:Ts(s),c=Me(_e(),e.modifiers,lp()),u=e.pluralRules||_e(),f=Ee(e.missing)?e.missing:null,p=fe(e.missingWarn)||Mn(e.missingWarn)?e.missingWarn:!0,g=fe(e.fallbackWarn)||Mn(e.fallbackWarn)?e.fallbackWarn:!0,S=!!e.fallbackFormat,R=!!e.unresolving,F=Ee(e.postTranslation)?e.postTranslation:null,v=ae(e.processor)?e.processor:null,E=fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,L=!!e.escapeParameter,w=Ee(e.messageCompiler)?e.messageCompiler:Ya,$=Ee(e.messageResolver)?e.messageResolver:Xa||sp,U=Ee(e.localeFallbacker)?e.localeFallbacker:za||Xd,N=pe(e.fallbackContext)?e.fallbackContext:void 0,ne=e,G=pe(ne.__datetimeFormatters)?ne.__datetimeFormatters:new Map,ee=pe(ne.__numberFormatters)?ne.__numberFormatters:new Map,se=pe(ne.__meta)?ne.__meta:{};Do++;const V={version:n,cid:Do,locale:r,fallbackLocale:i,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:p,fallbackWarn:g,fallbackFormat:S,unresolving:R,postTranslation:F,processor:v,warnHtmlMessage:E,escapeParameter:L,messageCompiler:w,messageResolver:$,localeFallbacker:U,fallbackContext:N,onWarn:t,__meta:se};return V.datetimeFormats=l,V.numberFormats=a,V.__datetimeFormatters=G,V.__numberFormatters=ee,__INTLIFY_PROD_DEVTOOLS__&&Gd(V,n,se),V}const Ts=e=>({[e]:_e()});function Ii(e,t,n,r,s){const{missing:i,onWarn:o}=e;if(i!==null){const l=i(e,n,t,s);return B(l)?l:t}else return t}function Wn(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function hp(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function gp(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(hp(e,t[r]))return!0;return!1}function $o(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=e,{__datetimeFormatters:l}=e,[a,c,u,f]=Bs(...t),p=fe(u.missingWarn)?u.missingWarn:e.missingWarn;fe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const g=!!u.part,S=Ci(e,u),R=o(e,s,S);if(!B(a)||a==="")return new Intl.DateTimeFormat(S,f).format(c);let F={},v,E=null;const L="datetime format";for(let U=0;U<R.length&&(v=R[U],F=n[v]||{},E=F[a],!ae(E));U++)Ii(e,a,v,p,L);if(!ae(E)||!B(v))return r?ls:a;let w=`${v}__${a}`;is(f)||(w=`${w}__${JSON.stringify(f)}`);let $=l.get(w);return $||($=new Intl.DateTimeFormat(v,Me({},E,f)),l.set(w,$)),g?$.formatToParts(c):$.format(c)}const Qa=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Bs(...e){const[t,n,r,s]=e,i=_e();let o=_e(),l;if(B(t)){const a=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!a)throw Bt(Wt.INVALID_ISO_DATE_ARGUMENT);const c=a[3]?a[3].trim().startsWith("T")?`${a[1].trim()}${a[3].trim()}`:`${a[1].trim()}T${a[3].trim()}`:a[1].trim();l=new Date(c);try{l.toISOString()}catch{throw Bt(Wt.INVALID_ISO_DATE_ARGUMENT)}}else if(rd(t)){if(isNaN(t.getTime()))throw Bt(Wt.INVALID_DATE_ARGUMENT);l=t}else if(Oe(t))l=t;else throw Bt(Wt.INVALID_ARGUMENT);return B(n)?i.key=n:ae(n)&&Object.keys(n).forEach(a=>{Qa.includes(a)?o[a]=n[a]:i[a]=n[a]}),B(r)?i.locale=r:ae(r)&&(o=r),ae(s)&&(o=s),[i.key||"",l,i,o]}function Uo(e,t,n){const r=e;for(const s in n){const i=`${t}__${s}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Vo(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=e,{__numberFormatters:l}=e,[a,c,u,f]=Gs(...t),p=fe(u.missingWarn)?u.missingWarn:e.missingWarn;fe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const g=!!u.part,S=Ci(e,u),R=o(e,s,S);if(!B(a)||a==="")return new Intl.NumberFormat(S,f).format(c);let F={},v,E=null;const L="number format";for(let U=0;U<R.length&&(v=R[U],F=n[v]||{},E=F[a],!ae(E));U++)Ii(e,a,v,p,L);if(!ae(E)||!B(v))return r?ls:a;let w=`${v}__${a}`;is(f)||(w=`${w}__${JSON.stringify(f)}`);let $=l.get(w);return $||($=new Intl.NumberFormat(v,Me({},E,f)),l.set(w,$)),g?$.formatToParts(c):$.format(c)}const ec=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Gs(...e){const[t,n,r,s]=e,i=_e();let o=_e();if(!Oe(t))throw Bt(Wt.INVALID_ARGUMENT);const l=t;return B(n)?i.key=n:ae(n)&&Object.keys(n).forEach(a=>{ec.includes(a)?o[a]=n[a]:i[a]=n[a]}),B(r)?i.locale=r:ae(r)&&(o=r),ae(s)&&(o=s),[i.key||"",l,i,o]}function jo(e,t,n){const r=e;for(const s in n){const i=`${t}__${s}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}const _p=e=>e,vp=e=>"",bp="text",yp=e=>e.length===0?"":Ei(e),wp=ad;function Ho(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Ep(e){const t=Oe(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Oe(e.named.count)||Oe(e.named.n))?Oe(e.named.count)?e.named.count:Oe(e.named.n)?e.named.n:t:t}function Sp(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Tp(e={}){const t=e.locale,n=Ep(e),r=pe(e.pluralRules)&&B(t)&&Ee(e.pluralRules[t])?e.pluralRules[t]:Ho,s=pe(e.pluralRules)&&B(t)&&Ee(e.pluralRules[t])?Ho:void 0,i=v=>v[r(n,v.length,s)],o=e.list||[],l=v=>o[v],a=e.named||_e();Oe(e.pluralIndex)&&Sp(n,a);const c=v=>a[v];function u(v,E){const L=Ee(e.messages)?e.messages(v,!!E):pe(e.messages)?e.messages[v]:!1;return L||(e.parent?e.parent.message(v):vp)}const f=v=>e.modifiers?e.modifiers[v]:_p,p=ae(e.processor)&&Ee(e.processor.normalize)?e.processor.normalize:yp,g=ae(e.processor)&&Ee(e.processor.interpolate)?e.processor.interpolate:wp,S=ae(e.processor)&&B(e.processor.type)?e.processor.type:bp,F={list:l,named:c,plural:i,linked:(v,...E)=>{const[L,w]=E;let $="text",U="";E.length===1?pe(L)?(U=L.modifier||U,$=L.type||$):B(L)&&(U=L||U):E.length===2&&(B(L)&&(U=L||U),B(w)&&($=w||$));const N=u(v,!0)(F),ne=$==="vnode"&&Ie(N)&&U?N[0]:N;return U?f(U)(ne,$):ne},message:u,type:S,interpolate:g,normalize:p,values:Me(_e(),o,a)};return F}const Wo=()=>"",ut=e=>Ee(e);function Bo(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=e,[a,c]=Ks(...t),u=fe(c.missingWarn)?c.missingWarn:e.missingWarn,f=fe(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,p=fe(c.escapeParameter)?c.escapeParameter:e.escapeParameter,g=!!c.resolvedMessage,S=B(c.default)||fe(c.default)?fe(c.default)?i?a:()=>a:c.default:n?i?a:()=>a:null,R=n||S!=null&&(B(S)||Ee(S)),F=Ci(e,c);p&&Cp(c);let[v,E,L]=g?[a,F,l[F]||_e()]:tc(e,a,F,o,f,u),w=v,$=a;if(!g&&!(B(w)||Nt(w)||ut(w))&&R&&(w=S,$=w),!g&&(!(B(w)||Nt(w)||ut(w))||!B(E)))return s?ls:a;let U=!1;const N=()=>{U=!0},ne=ut(w)?w:nc(e,a,E,w,$,N);if(U)return w;const G=Lp(e,E,L,c),ee=Tp(G),se=Ip(e,ne,ee);let V=r?r(se,a):se;if(p&&B(V)&&(V=id(V)),__INTLIFY_PROD_DEVTOOLS__){const oe={timestamp:Date.now(),key:B(a)?a:ut(w)?w.key:"",locale:E||(ut(w)?w.locale:""),format:B(w)?w:ut(w)?w.source:"",message:V};oe.meta=Me({},e.__meta,dp()||{}),Kd(oe)}return V}function Cp(e){Ie(e.list)?e.list=e.list.map(t=>B(t)?Co(t):t):pe(e.named)&&Object.keys(e.named).forEach(t=>{B(e.named[t])&&(e.named[t]=Co(e.named[t]))})}function tc(e,t,n,r,s,i){const{messages:o,onWarn:l,messageResolver:a,localeFallbacker:c}=e,u=c(e,r,n);let f=_e(),p,g=null;const S="translate";for(let R=0;R<u.length&&(p=u[R],f=o[p]||_e(),(g=a(f,t))===null&&(g=f[t]),!(B(g)||Nt(g)||ut(g)));R++)if(!gp(p,u)){const F=Ii(e,t,p,i,S);F!==t&&(g=F)}return[g,p,f]}function nc(e,t,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=e;if(ut(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||t,c}if(o==null){const c=(()=>r);return c.locale=n,c.key=t,c}const a=o(r,Rp(e,n,s,r,l,i));return a.locale=n,a.key=t,a.source=r,a}function Ip(e,t,n){return t(n)}function Ks(...e){const[t,n,r]=e,s=_e();if(!B(t)&&!Oe(t)&&!ut(t)&&!Nt(t))throw Bt(Wt.INVALID_ARGUMENT);const i=Oe(t)?String(t):(ut(t),t);return Oe(n)?s.plural=n:B(n)?s.default=n:ae(n)&&!is(n)?s.named=n:Ie(n)&&(s.list=n),Oe(r)?s.plural=r:B(r)?s.default=r:ae(r)&&Me(s,r),[i,s]}function Rp(e,t,n,r,s,i){return{locale:t,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>td(t,n,o)}}function Lp(e,t,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:a,missingWarn:c,fallbackContext:u}=e,p={locale:t,modifiers:s,pluralRules:i,messages:(g,S)=>{let R=o(n,g);if(R==null&&(u||S)){const[,,F]=tc(u||e,g,t,l,a,c);R=o(F,g)}if(B(R)||Nt(R)){let F=!1;const E=nc(e,g,t,R,g,()=>{F=!0});return F?Wo:E}else return ut(R)?R:Wo}};return e.processor&&(p.processor=e.processor),r.list&&(p.list=r.list),r.named&&(p.named=r.named),Oe(r.plural)&&(p.pluralIndex=r.plural),p}Nd();const Ap="11.2.8";function xp(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(_n().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(_n().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(_n().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(_n().__INTLIFY_PROD_DEVTOOLS__=!1)}const tt={UNEXPECTED_RETURN_TYPE:Yd,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function ot(e,...t){return os(e,null,void 0)}const qs=an("__translateVNode"),Ys=an("__datetimeParts"),Xs=an("__numberParts"),rc=an("__setPluralRules"),sc=an("__injectWithOption"),zs=an("__dispose");function pr(e){if(!pe(e)||Nt(e))return e;for(const t in e)if(ht(e,t))if(!t.includes("."))pe(e[t])&&pr(e[t]);else{const n=t.split("."),r=n.length-1;let s=e,i=!1;for(let o=0;o<r;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in s||(s[n[o]]=_e()),!pe(s[n[o]])){i=!0;break}s=s[n[o]]}if(i||(Nt(s)?Ka.includes(n[r])||delete e[t]:(s[n[r]]=e[t],delete e[t])),!Nt(s)){const o=s[n[r]];pe(o)&&pr(o)}}return e}function Ri(e,t){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=t,o=ae(n)?n:Ie(r)?_e():{[e]:_e()};if(Ie(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:a,resource:c}=l;a?(o[a]=o[a]||_e(),kr(c,o[a])):kr(c,o)}else B(l)&&kr(JSON.parse(l),o)}),s==null&&i)for(const l in o)ht(o,l)&&pr(o[l]);return o}function ic(e){return e.type}function oc(e,t,n){let r=pe(t.messages)?t.messages:_e();"__i18nGlobal"in n&&(r=Ri(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{e.mergeLocaleMessage(i,r[i])});{if(pe(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(o=>{e.mergeDateTimeFormat(o,t.datetimeFormats[o])})}if(pe(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(o=>{e.mergeNumberFormat(o,t.numberFormats[o])})}}}function Go(e){return Z(br,null,e,0)}function mr(){return yi()}const Ko="__INTLIFY_META__",qo=()=>[],Op=()=>!1;let Yo=0;function Xo(e){return((t,n,r,s)=>e(n,r,mr()||void 0,s))}const Pp=()=>{const e=mr();let t=null;return e&&(t=ic(e)[Ko])?{[Ko]:t}:null};function Li(e={}){const{__root:t,__injectWithOption:n}=e,r=t===void 0,s=e.flatJson,i=Gr?re:zl;let o=fe(e.inheritLocale)?e.inheritLocale:!0;const l=i(t&&o?t.locale.value:B(e.locale)?e.locale:dr),a=i(t&&o?t.fallbackLocale.value:B(e.fallbackLocale)||Ie(e.fallbackLocale)||ae(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l.value),c=i(Ri(l.value,e)),u=i(ae(e.datetimeFormats)?e.datetimeFormats:{[l.value]:{}}),f=i(ae(e.numberFormats)?e.numberFormats:{[l.value]:{}});let p=t?t.missingWarn:fe(e.missingWarn)||Mn(e.missingWarn)?e.missingWarn:!0,g=t?t.fallbackWarn:fe(e.fallbackWarn)||Mn(e.fallbackWarn)?e.fallbackWarn:!0,S=t?t.fallbackRoot:fe(e.fallbackRoot)?e.fallbackRoot:!0,R=!!e.fallbackFormat,F=Ee(e.missing)?e.missing:null,v=Ee(e.missing)?Xo(e.missing):null,E=Ee(e.postTranslation)?e.postTranslation:null,L=t?t.warnHtmlMessage:fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,w=!!e.escapeParameter;const $=t?t.modifiers:ae(e.modifiers)?e.modifiers:{};let U=e.pluralRules||t&&t.pluralRules,N;N=(()=>{r&&Fo(null);const y={version:Ap,locale:l.value,fallbackLocale:a.value,messages:c.value,modifiers:$,pluralRules:U,missing:v===null?void 0:v,missingWarn:p,fallbackWarn:g,fallbackFormat:R,unresolving:!0,postTranslation:E===null?void 0:E,warnHtmlMessage:L,escapeParameter:w,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};y.datetimeFormats=u.value,y.numberFormats=f.value,y.__datetimeFormatters=ae(N)?N.__datetimeFormatters:void 0,y.__numberFormatters=ae(N)?N.__numberFormatters:void 0;const A=mp(y);return r&&Fo(A),A})(),Wn(N,l.value,a.value);function G(){return[l.value,a.value,c.value,u.value,f.value]}const ee=Re({get:()=>l.value,set:y=>{N.locale=y,l.value=y}}),se=Re({get:()=>a.value,set:y=>{N.fallbackLocale=y,a.value=y,Wn(N,l.value,y)}}),V=Re(()=>c.value),oe=Re(()=>u.value),Se=Re(()=>f.value);function Ve(){return Ee(E)?E:null}function we(y){E=y,N.postTranslation=y}function ue(){return F}function ce(y){y!==null&&(v=Xo(y)),F=y,N.missing=v}const Pe=(y,A,K,Q,le,Ne)=>{G();let Le;try{__INTLIFY_PROD_DEVTOOLS__,r||(N.fallbackContext=t?pp():void 0),Le=y(N)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(N.fallbackContext=void 0)}if(K!=="translate exists"&&Oe(Le)&&Le===ls||K==="translate exists"&&!Le){const[lt,mt]=A();return t&&S?Q(t):le(lt)}else{if(Ne(Le))return Le;throw ot(tt.UNEXPECTED_RETURN_TYPE)}};function nt(...y){return Pe(A=>Reflect.apply(Bo,null,[A,...y]),()=>Ks(...y),"translate",A=>Reflect.apply(A.t,A,[...y]),A=>A,A=>B(A))}function Ye(...y){const[A,K,Q]=y;if(Q&&!pe(Q))throw ot(tt.INVALID_ARGUMENT);return nt(A,K,Me({resolvedMessage:!0},Q||{}))}function De(...y){return Pe(A=>Reflect.apply($o,null,[A,...y]),()=>Bs(...y),"datetime format",A=>Reflect.apply(A.d,A,[...y]),()=>ko,A=>B(A)||Ie(A))}function Et(...y){return Pe(A=>Reflect.apply(Vo,null,[A,...y]),()=>Gs(...y),"number format",A=>Reflect.apply(A.n,A,[...y]),()=>ko,A=>B(A)||Ie(A))}function St(y){return y.map(A=>B(A)||Oe(A)||fe(A)?Go(String(A)):A)}const He={normalize:St,interpolate:y=>y,type:"vnode"};function P(...y){return Pe(A=>{let K;const Q=A;try{Q.processor=He,K=Reflect.apply(Bo,null,[Q,...y])}finally{Q.processor=null}return K},()=>Ks(...y),"translate",A=>A[qs](...y),A=>[Go(A)],A=>Ie(A))}function W(...y){return Pe(A=>Reflect.apply(Vo,null,[A,...y]),()=>Gs(...y),"number format",A=>A[Xs](...y),qo,A=>B(A)||Ie(A))}function j(...y){return Pe(A=>Reflect.apply($o,null,[A,...y]),()=>Bs(...y),"datetime format",A=>A[Ys](...y),qo,A=>B(A)||Ie(A))}function Y(y){U=y,N.pluralRules=U}function ie(y,A){return Pe(()=>{if(!y)return!1;const K=B(A)?A:l.value,Q=T(K),le=N.messageResolver(Q,y);return Nt(le)||ut(le)||B(le)},()=>[y],"translate exists",K=>Reflect.apply(K.te,K,[y,A]),Op,K=>fe(K))}function h(y){let A=null;const K=qa(N,a.value,l.value);for(let Q=0;Q<K.length;Q++){const le=c.value[K[Q]]||{},Ne=N.messageResolver(le,y);if(Ne!=null){A=Ne;break}}return A}function _(y){const A=h(y);return A??(t?t.tm(y)||{}:{})}function T(y){return c.value[y]||{}}function x(y,A){if(s){const K={[y]:A};for(const Q in K)ht(K,Q)&&pr(K[Q]);A=K[y]}c.value[y]=A,N.messages=c.value}function k(y,A){c.value[y]=c.value[y]||{};const K={[y]:A};if(s)for(const Q in K)ht(K,Q)&&pr(K[Q]);A=K[y],kr(A,c.value[y]),N.messages=c.value}function O(y){return u.value[y]||{}}function d(y,A){u.value[y]=A,N.datetimeFormats=u.value,Uo(N,y,A)}function m(y,A){u.value[y]=Me(u.value[y]||{},A),N.datetimeFormats=u.value,Uo(N,y,A)}function b(y){return f.value[y]||{}}function I(y,A){f.value[y]=A,N.numberFormats=f.value,jo(N,y,A)}function H(y,A){f.value[y]=Me(f.value[y]||{},A),N.numberFormats=f.value,jo(N,y,A)}Yo++,t&&Gr&&(rn(t.locale,y=>{o&&(l.value=y,N.locale=y,Wn(N,l.value,a.value))}),rn(t.fallbackLocale,y=>{o&&(a.value=y,N.fallbackLocale=y,Wn(N,l.value,a.value))}));const M={id:Yo,locale:ee,fallbackLocale:se,get inheritLocale(){return o},set inheritLocale(y){o=y,y&&t&&(l.value=t.locale.value,a.value=t.fallbackLocale.value,Wn(N,l.value,a.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:V,get modifiers(){return $},get pluralRules(){return U||{}},get isGlobal(){return r},get missingWarn(){return p},set missingWarn(y){p=y,N.missingWarn=p},get fallbackWarn(){return g},set fallbackWarn(y){g=y,N.fallbackWarn=g},get fallbackRoot(){return S},set fallbackRoot(y){S=y},get fallbackFormat(){return R},set fallbackFormat(y){R=y,N.fallbackFormat=R},get warnHtmlMessage(){return L},set warnHtmlMessage(y){L=y,N.warnHtmlMessage=y},get escapeParameter(){return w},set escapeParameter(y){w=y,N.escapeParameter=y},t:nt,getLocaleMessage:T,setLocaleMessage:x,mergeLocaleMessage:k,getPostTranslationHandler:Ve,setPostTranslationHandler:we,getMissingHandler:ue,setMissingHandler:ce,[rc]:Y};return M.datetimeFormats=oe,M.numberFormats=Se,M.rt=Ye,M.te=ie,M.tm=_,M.d=De,M.n=Et,M.getDateTimeFormat=O,M.setDateTimeFormat=d,M.mergeDateTimeFormat=m,M.getNumberFormat=b,M.setNumberFormat=I,M.mergeNumberFormat=H,M[sc]=n,M[qs]=P,M[Ys]=j,M[Xs]=W,M}function Np(e){const t=B(e.locale)?e.locale:dr,n=B(e.fallbackLocale)||Ie(e.fallbackLocale)||ae(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=Ee(e.missing)?e.missing:void 0,s=fe(e.silentTranslationWarn)||Mn(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=fe(e.silentFallbackWarn)||Mn(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,o=fe(e.fallbackRoot)?e.fallbackRoot:!0,l=!!e.formatFallbackMessages,a=ae(e.modifiers)?e.modifiers:{},c=e.pluralizationRules,u=Ee(e.postTranslation)?e.postTranslation:void 0,f=B(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,p=!!e.escapeParameterHtml,g=fe(e.sync)?e.sync:!0;let S=e.messages;if(ae(e.sharedMessages)){const $=e.sharedMessages;S=Object.keys($).reduce((N,ne)=>{const G=N[ne]||(N[ne]={});return Me(G,$[ne]),N},S||{})}const{__i18n:R,__root:F,__injectWithOption:v}=e,E=e.datetimeFormats,L=e.numberFormats,w=e.flatJson;return{locale:t,fallbackLocale:n,messages:S,flatJson:w,datetimeFormats:E,numberFormats:L,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:a,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:p,messageResolver:e.messageResolver,inheritLocale:g,__i18n:R,__root:F,__injectWithOption:v}}function Js(e={}){const t=Li(Np(e)),{__extender:n}=e,r={id:t.id,get locale(){return t.locale.value},set locale(s){t.locale.value=s},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(s){t.fallbackLocale.value=s},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get missing(){return t.getMissingHandler()},set missing(s){t.setMissingHandler(s)},get silentTranslationWarn(){return fe(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(s){t.missingWarn=fe(s)?!s:s},get silentFallbackWarn(){return fe(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(s){t.fallbackWarn=fe(s)?!s:s},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(s){t.fallbackFormat=s},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(s){t.setPostTranslationHandler(s)},get sync(){return t.inheritLocale},set sync(s){t.inheritLocale=s},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){t.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(s){t.escapeParameter=s},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...s){return Reflect.apply(t.t,t,[...s])},rt(...s){return Reflect.apply(t.rt,t,[...s])},te(s,i){return t.te(s,i)},tm(s){return t.tm(s)},getLocaleMessage(s){return t.getLocaleMessage(s)},setLocaleMessage(s,i){t.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){t.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(t.d,t,[...s])},getDateTimeFormat(s){return t.getDateTimeFormat(s)},setDateTimeFormat(s,i){t.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){t.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(t.n,t,[...s])},getNumberFormat(s){return t.getNumberFormat(s)},setNumberFormat(s,i){t.setNumberFormat(s,i)},mergeNumberFormat(s,i){t.mergeNumberFormat(s,i)}};return r.__extender=n,r}function kp(e,t,n){return{beforeCreate(){const r=mr();if(!r)throw ot(tt.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=s.i18n;if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=t,this===this.$root)this.$i18n=zo(e,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Js(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=zo(e,s);else{this.$i18n=Js({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=e;s.__i18nGlobal&&oc(t,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=mr();if(!r)throw ot(tt.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n}}}function zo(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[rc](t.pluralizationRules||e.pluralizationRules);const n=Ri(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r,n[r])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,t.datetimeFormats[r])),t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r,t.numberFormats[r])),e}const Ai={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Mp({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,s)=>[...r,...s.type===Ae?s.children:[s]],[]):t.reduce((n,r)=>{const s=e[r];return s&&(n[r]=s()),n},_e())}function lc(){return Ae}const Fp=vr({name:"i18n-t",props:Me({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Oe(e)||!isNaN(e)}},Ai),setup(e,t){const{slots:n,attrs:r}=t,s=e.i18n||Ue({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(f=>f[0]!=="_"),o=_e();e.locale&&(o.locale=e.locale),e.plural!==void 0&&(o.plural=B(e.plural)?+e.plural:e.plural);const l=Mp(t,i),a=s[qs](e.keypath,l,o),c=Me(_e(),r),u=B(e.tag)||pe(e.tag)?e.tag:lc();return wr(u,c,a)}}}),Jo=Fp;function Dp(e){return Ie(e)&&!B(e[0])}function ac(e,t,n,r){const{slots:s,attrs:i}=t;return()=>{const o={part:!0};let l=_e();e.locale&&(o.locale=e.locale),B(e.format)?o.key=e.format:pe(e.format)&&(B(e.format.key)&&(o.key=e.format.key),l=Object.keys(e.format).reduce((p,g)=>n.includes(g)?Me(_e(),p,{[g]:e.format[g]}):p,_e()));const a=r(e.value,o,l);let c=[o.key];Ie(a)?c=a.map((p,g)=>{const S=s[p.type],R=S?S({[p.type]:p.value,index:g,parts:a}):[p.value];return Dp(R)&&(R[0].key=`${p.type}-${g}`),R}):B(a)&&(c=[a]);const u=Me(_e(),i),f=B(e.tag)||pe(e.tag)?e.tag:lc();return wr(f,u,c)}}const $p=vr({name:"i18n-n",props:Me({value:{type:Number,required:!0},format:{type:[String,Object]}},Ai),setup(e,t){const n=e.i18n||Ue({useScope:e.scope,__useComponent:!0});return ac(e,t,ec,(...r)=>n[Xs](...r))}}),Zo=$p;function Up(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function Vp(e){const t=o=>{const{instance:l,value:a}=o;if(!l||!l.$)throw ot(tt.UNEXPECTED_ERROR);const c=Up(e,l.$),u=Qo(a);return[Reflect.apply(c.t,c,[...el(u)]),c]};return{created:(o,l)=>{const[a,c]=t(l);Gr&&e.global===c&&(o.__i18nWatcher=rn(c.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=c,o.textContent=a},unmounted:o=>{Gr&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const a=o.__composer,c=Qo(l);o.textContent=Reflect.apply(a.t,a,[...el(c)])}},getSSRProps:o=>{const[l]=t(o);return{textContent:l}}}}function Qo(e){if(B(e))return{path:e};if(ae(e)){if(!("path"in e))throw ot(tt.REQUIRED_VALUE,"path");return e}else throw ot(tt.INVALID_VALUE)}function el(e){const{path:t,locale:n,args:r,choice:s,plural:i}=e,o={},l=r||{};return B(n)&&(o.locale=n),Oe(s)&&(o.plural=s),Oe(i)&&(o.plural=i),[t,l,o]}function jp(e,t,...n){const r=ae(n[0])?n[0]:{};(!fe(r.globalInstall)||r.globalInstall)&&([Jo.name,"I18nT"].forEach(i=>e.component(i,Jo)),[Zo.name,"I18nN"].forEach(i=>e.component(i,Zo)),[nl.name,"I18nD"].forEach(i=>e.component(i,nl))),e.directive("t",Vp(t))}const Hp=an("global-vue-i18n");function Wp(e={}){const t=__VUE_I18N_LEGACY_API__&&fe(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=fe(e.globalInjection)?e.globalInjection:!0,r=new Map,[s,i]=Bp(e,t),o=an("");function l(f){return r.get(f)||null}function a(f,p){r.set(f,p)}function c(f){r.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},async install(f,...p){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),ae(p[0])){const R=p[0];u.__composerExtend=R.__composerExtend,u.__vueI18nExtend=R.__vueI18nExtend}let g=null;!t&&n&&(g=Zp(f,u.global)),__VUE_I18N_FULL_INSTALL__&&jp(f,u,...p),__VUE_I18N_LEGACY_API__&&t&&f.mixin(kp(i,i.__composer,u));const S=f.unmount;f.unmount=()=>{g&&g(),u.dispose(),S()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:a,__deleteInstance:c};return u}function Ue(e={}){const t=mr();if(t==null)throw ot(tt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw ot(tt.NOT_INSTALLED);const n=Gp(t),r=qp(n),s=ic(t),i=Kp(e,s);if(i==="global")return oc(r,e,s),r;if(i==="parent"){let a=Yp(n,t,e.__useComponent);return a==null&&(a=r),a}const o=n;let l=o.__getInstance(t);if(l==null){const a=Me({},e);"__i18n"in s&&(a.__i18n=s.__i18n),r&&(a.__root=r),l=Li(a),o.__composerExtend&&(l[zs]=o.__composerExtend(l)),zp(o,t,l),o.__setInstance(t,l)}return l}function Bp(e,t){const n=Fc(),r=__VUE_I18N_LEGACY_API__&&t?n.run(()=>Js(e)):n.run(()=>Li(e));if(r==null)throw ot(tt.UNEXPECTED_ERROR);return[n,r]}function Gp(e){const t=dt(e.isCE?Hp:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw ot(e.isCE?tt.NOT_INSTALLED_WITH_PROVIDE:tt.UNEXPECTED_ERROR);return t}function Kp(e,t){return is(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function qp(e){return e.mode==="composition"?e.global:e.global.__composer}function Yp(e,t,n=!1){let r=null;const s=t.root;let i=Xp(t,n);for(;i!=null;){const o=e;if(e.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[sc]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function Xp(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function zp(e,t,n){En(()=>{},t),sr(()=>{const r=n;e.__deleteInstance(t);const s=r[zs];s&&(s(),delete r[zs])},t)}const Jp=["locale","fallbackLocale","availableLocales"],tl=["t","rt","d","n","tm","te"];function Zp(e,t){const n=Object.create(null);return Jp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(t,s);if(!i)throw ot(tt.UNEXPECTED_ERROR);const o=je(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),e.config.globalProperties.$i18n=n,tl.forEach(s=>{const i=Object.getOwnPropertyDescriptor(t,s);if(!i||!i.value)throw ot(tt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,i)}),()=>{delete e.config.globalProperties.$i18n,tl.forEach(s=>{delete e.config.globalProperties[`$${s}`]})}}const Qp=vr({name:"i18n-d",props:Me({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ai),setup(e,t){const n=e.i18n||Ue({useScope:e.scope,__useComponent:!0});return ac(e,t,Qa,(...r)=>n[Ys](...r))}}),nl=Qp;xp();ap(Wd);cp(ip);up(qa);if(__INTLIFY_PROD_DEVTOOLS__){const e=_n();e.__INTLIFY__=!0,Bd(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const em={en:{download:{download:"Download",inProgress:"Downloading...",info:"The file will be saved in your browser's download folder. Please wait..."},nav:{home:"home",integrations:"integrations",slider:"slider",inputs:"inputs"},homePage:{home:"home",integrations:"integrations",slider:"slider",viewAll:"View All"},inputs:{title:"inputs",registration:"registration",email:"Email",password:"Password",confPassword:"Confirm password",showPassword:"Show password",agree:"I agree to the terms",register:"Register",emailRequired:"Email is required",emailInvalid:"Email is invalid",passwordRequired:"Password is required",passwordMin:"Password must be at least {min} characters",passwordMax:"Password must be at most {max} characters",passwordPattern:"Password can only contain Latin letters and numbers",passwordMismatch:"Passwords do not match",passwordMismatch:"Passwords do not match",agreeRequired:"You must agree to the terms",login:"login",loginBtn:"login",required:"This field is required",emailInvalid:"Invalid email address",passwordMin:"Password must be at least 6 characters",success:"Success",inputFile:"input file",file:{errors:{type:"Only image files are allowed",size:"The file size must be less than 2 MB"},basic:"Basic File Input",preview:"File Input with Preview",multiple:"Multiple File Input",multiplePreviewRemove:"Multiple File Preview with Remove",label:"Select file",placeholder:"No file chosen"}},footer:{copy:"Copyright 2025. Made by SG"}},ru:{download:{download:"Скачать",inProgress:"Идёт скачивание...",info:"Файл будет сохранён в папку загрузок вашего браузера. Подождите..."},nav:{home:"главная",integrations:"интеграции",slider:"слайдер",inputs:"инпуты"},homePage:{home:"главная",integrations:"интеграции",slider:"слайдер",viewAll:"Смотреть полностью"},inputs:{title:"инпуты",registration:"регистрация",email:"Почта",password:"Пароль",confPassword:"Подтвердите пароль",showPassword:"Показать пароль",agree:"Я согласен с условиями",register:"Зарегистрировать",emailRequired:"Почта обязательна",emailInvalid:"Неверный формат почты",passwordRequired:"Пароль обязателен",passwordMin:"Пароль должен быть не меньше {min} символов",passwordMax:"Пароль должен быть не больше {max} символов",passwordPattern:"Пароль может содержать только латинские буквы и цифры",passwordMismatch:"Пароли не совпадают",passwordMismatch:"Пароли не совпадают",agreeRequired:"Необходимо согласиться с правилами",login:"авторизация",loginBtn:"войти",required:"Поле обязательно",emailInvalid:"Неверный email",passwordMin:"Минимум 6 символов",success:"успешно",inputFile:"инпут файл",file:{errors:{type:"Разрешены только изображения",size:"Файл должен быть меньше 2 МБ"},basic:"Базовый инпут Файл",preview:"Инпут файл с просмотром",multiple:"Множественный инпут файл",multiplePreviewRemove:"Множественный инпут файл с удалением",label:"Выбрать файл",placeholder:"Файл не выбран"}},footer:{copy:"Все права защищены 2025. Сделал SG"}}},tm=Wp({legacy:!1,locale:"en",fallbackLocale:"en",messages:em});const Rn=typeof document<"u";function cc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&cc(e.default)}const me=Object.assign;function Cs(e,t){const n={};for(const r in t){const s=t[r];n[r]=wt(s)?s.map(e):e(s)}return n}const Qn=()=>{},wt=Array.isArray;function rl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const uc=/#/g,rm=/&/g,sm=/\//g,im=/=/g,om=/\?/g,fc=/\+/g,lm=/%5B/g,am=/%5D/g,dc=/%5E/g,cm=/%60/g,pc=/%7B/g,um=/%7C/g,mc=/%7D/g,fm=/%20/g;function xi(e){return e==null?"":encodeURI(""+e).replace(um,"|").replace(lm,"[").replace(am,"]")}function dm(e){return xi(e).replace(pc,"{").replace(mc,"}").replace(dc,"^")}function Zs(e){return xi(e).replace(fc,"%2B").replace(fm,"+").replace(uc,"%23").replace(rm,"%26").replace(cm,"`").replace(pc,"{").replace(mc,"}").replace(dc,"^")}function pm(e){return Zs(e).replace(im,"%3D")}function mm(e){return xi(e).replace(uc,"%23").replace(om,"%3F")}function hm(e){return mm(e).replace(sm,"%2F")}function hr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const gm=/\/$/,_m=e=>e.replace(gm,"");function Is(e,t,n="/"){let r,s={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(r=t.slice(0,a),i=t.slice(a,l>0?l:t.length),s=e(i.slice(1))),l>=0&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=wm(r??t,n),{fullPath:r+i+o,path:r,query:s,hash:hr(o)}}function vm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function sl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bm(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Dn(t.matched[r],n.matched[s])&&hc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function hc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ym(e[n],t[n]))return!1;return!0}function ym(e,t){return wt(e)?il(e,t):wt(t)?il(t,e):e?.valueOf()===t?.valueOf()}function il(e,t){return wt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function wm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Qs=(function(e){return e.pop="pop",e.push="push",e})({}),Rs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Em(e){if(!e)if(Rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_m(e)}const Sm=/^[^#]+#/;function Tm(e,t){return e.replace(Sm,"#")+t}function Cm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const as=()=>({left:window.scrollX,top:window.scrollY});function Im(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Cm(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ol(e,t){return(history.state?history.state.position-t:-1)+e}const ei=new Map;function Rm(e,t){ei.set(e,t)}function Lm(e){const t=ei.get(e);return ei.delete(e),t}function Am(e){return typeof e=="string"||e&&typeof e=="object"}function gc(e){return typeof e=="string"||typeof e=="symbol"}let Te=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const _c=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function $n(e,t){return me(new Error,{type:e,[_c]:!0},t)}function Dt(e,t){return e instanceof Error&&_c in e&&(t==null||!!(e.type&t))}const xm=["params","query","hash"];function Om(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of xm)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Pm(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(fc," "),i=s.indexOf("="),o=hr(i<0?s:s.slice(0,i)),l=i<0?null:hr(s.slice(i+1));if(o in t){let a=t[o];wt(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function ll(e){let t="";for(let n in e){const r=e[n];if(n=pm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(wt(r)?r.map(s=>s&&Zs(s)):[r&&Zs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Nm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const km=Symbol(""),al=Symbol(""),cs=Symbol(""),Oi=Symbol(""),ti=Symbol("");function Bn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function en(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const c=p=>{p===!1?a($n(Te.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?a(p):Am(p)?a($n(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),l())},u=i(()=>e.call(r&&r.instances[s],t,n,c));let f=Promise.resolve(u);e.length<3&&(f=f.then(c)),f.catch(p=>a(p))})}function Ls(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(cc(a)){const c=(a.__vccOpts||a)[t];c&&i.push(en(c,n,r,o,l,s))}else{let c=a();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=nm(u)?u.default:u;o.mods[l]=u,o.components[l]=f;const p=(f.__vccOpts||f)[t];return p&&en(p,n,r,o,l,s)()}))}}return i}function Mm(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(c=>Dn(c,l))?r.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(c=>Dn(c,a))||s.push(a))}return[n,r,s]}let Fm=()=>location.protocol+"//"+location.host;function vc(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),sl(l,"")}return sl(n,e)+r+s}function Dm(e,t,n,r){let s=[],i=[],o=null;const l=({state:p})=>{const g=vc(e,location),S=n.value,R=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===S){o=null;return}F=R?p.position-R.position:0}else r(g);s.forEach(v=>{v(n.value,S,{delta:F,type:Qs.pop,direction:F?F>0?Rs.forward:Rs.back:Rs.unknown})})};function a(){o=n.value}function c(p){s.push(p);const g=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(me({},p.state,{scroll:as()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:a,listen:c,destroy:f}}function cl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?as():null}}function $m(e){const{history:t,location:n}=window,r={value:vc(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:Fm()+e+a;try{t[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(a,c){i(a,me({},t.state,cl(s.value.back,a,s.value.forward,!0),c,{position:s.value.position}),!0),r.value=a}function l(a,c){const u=me({},s.value,t.state,{forward:a,scroll:as()});i(u.current,u,!0),i(a,me({},cl(r.value,a,null),{position:u.position+1},c),!1),r.value=a}return{location:r,state:s,push:l,replace:o}}function Um(e){e=Em(e);const t=$m(e),n=Dm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:e,go:r,createHref:Tm.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let vn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ke=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ke||{});const Vm={type:vn.Static,value:""},jm=/[a-zA-Z0-9_]/;function Hm(e){if(!e)return[[]];if(e==="/")return[[Vm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=ke.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,a,c="",u="";function f(){c&&(n===ke.Static?i.push({type:vn.Static,value:c}):n===ke.Param||n===ke.ParamRegExp||n===ke.ParamRegExpEnd?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:vn.Param,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==ke.ParamRegExp){r=n,n=ke.EscapeNext;continue}switch(n){case ke.Static:a==="/"?(c&&f(),o()):a===":"?(f(),n=ke.Param):p();break;case ke.EscapeNext:p(),n=r;break;case ke.Param:a==="("?n=ke.ParamRegExp:jm.test(a)?p():(f(),n=ke.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case ke.ParamRegExp:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=ke.ParamRegExpEnd:u+=a;break;case ke.ParamRegExpEnd:f(),n=ke.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===ke.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const ul="[^/]+?",Wm={sensitive:!1,strict:!1,start:!0,end:!0};var ze=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ze||{});const Bm=/[.+*?^${}()[\]/\\]/g;function Gm(e,t){const n=me({},Wm,t),r=[];let s=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[ze.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=ze.Segment+(n.sensitive?ze.BonusCaseSensitive:0);if(p.type===vn.Static)f||(s+="/"),s+=p.value.replace(Bm,"\\$&"),g+=ze.Static;else if(p.type===vn.Param){const{value:S,repeatable:R,optional:F,regexp:v}=p;i.push({name:S,repeatable:R,optional:F});const E=v||ul;if(E!==ul){g+=ze.BonusCustomRegExp;try{`${E}`}catch(w){throw new Error(`Invalid custom RegExp for param "${S}" (${E}): `+w.message)}}let L=R?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(L=F&&c.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),s+=L,g+=ze.Dynamic,F&&(g+=ze.BonusOptional),R&&(g+=ze.BonusRepeatable),E===".*"&&(g+=ze.BonusWildcard)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=ze.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",S=i[p-1];f[S.name]=g&&S.repeatable?g.split("/"):g}return f}function a(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===vn.Static)u+=g.value;else if(g.type===vn.Param){const{value:S,repeatable:R,optional:F}=g,v=S in c?c[S]:"";if(wt(v)&&!R)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const E=wt(v)?v.join("/"):v;if(!E)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);u+=E}}return u||"/"}return{re:o,score:r,keys:i,parse:l,stringify:a}}function Km(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===ze.Static+ze.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ze.Static+ze.Segment?1:-1:0}function bc(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Km(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fl(r))return 1;if(fl(s))return-1}return s.length-r.length}function fl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qm={strict:!1,end:!0,sensitive:!1};function Ym(e,t,n){const r=Gm(Hm(e.path),n),s=me(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Xm(e,t){const n=[],r=new Map;t=rl(qm,t);function s(f){return r.get(f)}function i(f,p,g){const S=!g,R=pl(f);R.aliasOf=g&&g.record;const F=rl(t,f),v=[R];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of w)v.push(pl(me({},R,{components:g?g.record.components:R.components,path:$,aliasOf:g?g.record:R})))}let E,L;for(const w of v){const{path:$}=w;if(p&&$[0]!=="/"){const U=p.record.path,N=U[U.length-1]==="/"?"":"/";w.path=p.record.path+($&&N+$)}if(E=Ym(w,p,F),g?g.alias.push(E):(L=L||E,L!==E&&L.alias.push(E),S&&f.name&&!ml(E)&&o(f.name)),yc(E)&&a(E),R.children){const U=R.children;for(let N=0;N<U.length;N++)i(U[N],E,g&&g.children[N])}g=g||E}return L?()=>{o(L)}:Qn}function o(f){if(gc(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function a(f){const p=Zm(f,n);n.splice(p,0,f),f.record.name&&!ml(f)&&r.set(f.record.name,f)}function c(f,p){let g,S={},R,F;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw $n(Te.MATCHER_NOT_FOUND,{location:f});F=g.record.name,S=me(dl(p.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),f.params&&dl(f.params,g.keys.map(L=>L.name))),R=g.stringify(S)}else if(f.path!=null)R=f.path,g=n.find(L=>L.re.test(R)),g&&(S=g.parse(R),F=g.record.name);else{if(g=p.name?r.get(p.name):n.find(L=>L.re.test(p.path)),!g)throw $n(Te.MATCHER_NOT_FOUND,{location:f,currentLocation:p});F=g.record.name,S=me({},p.params,f.params),R=g.stringify(S)}const v=[];let E=g;for(;E;)v.unshift(E.record),E=E.parent;return{name:F,path:R,params:S,matched:v,meta:Jm(v)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:s}}function dl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function pl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:zm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function zm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ml(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jm(e){return e.reduce((t,n)=>me(t,n.meta),{})}function Zm(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;bc(e,t[i])<0?r=i:n=i+1}const s=Qm(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Qm(e){let t=e;for(;t=t.parent;)if(yc(t)&&bc(e,t)===0)return t}function yc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function hl(e){const t=dt(cs),n=dt(Oi),r=Re(()=>{const a=D(e.to);return t.resolve(a)}),s=Re(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Dn.bind(null,u));if(p>-1)return p;const g=gl(a[c-2]);return c>1&&gl(u)===g&&f[f.length-1].path!==g?f.findIndex(Dn.bind(null,a[c-2])):p}),i=Re(()=>s.value>-1&&rh(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&hc(n.params,r.value.params));function l(a={}){if(nh(a)){const c=t[D(e.replace)?"replace":"push"](D(e.to)).catch(Qn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function eh(e){return e.length===1?e[0]:e}const th=vr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hl,setup(e,{slots:t}){const n=Zr(hl(e)),{options:r}=dt(cs),s=Re(()=>({[_l(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_l(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&eh(t.default(n));return e.custom?i:wr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ct=th;function nh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rh(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function gl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _l=(e,t,n)=>e??t??n,sh=vr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=dt(ti),s=Re(()=>e.route||r.value),i=dt(al,0),o=Re(()=>{let c=D(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),l=Re(()=>s.value.matched[o.value]);Or(al,Re(()=>o.value+1)),Or(km,l),Or(ti,s);const a=re();return rn(()=>[a.value,l.value,e.name],([c,u,f],[p,g,S])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Dn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,f=l.value,p=f&&f.components[u];if(!p)return vl(n.default,{Component:p,route:c});const g=f.props[u],S=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=wr(p,me({},S,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return vl(n.default,{Component:F,route:c})||F}}});function vl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pi=sh;function ih(e){const t=Xm(e.routes,e),n=e.parseQuery||Pm,r=e.stringifyQuery||ll,s=e.history,i=Bn(),o=Bn(),l=Bn(),a=zl(zt);let c=zt;Rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cs.bind(null,P=>""+P),f=Cs.bind(null,hm),p=Cs.bind(null,hr);function g(P,W){let j,Y;return gc(P)?(j=t.getRecordMatcher(P),Y=W):Y=P,t.addRoute(Y,j)}function S(P){const W=t.getRecordMatcher(P);W&&t.removeRoute(W)}function R(){return t.getRoutes().map(P=>P.record)}function F(P){return!!t.getRecordMatcher(P)}function v(P,W){if(W=me({},W||a.value),typeof P=="string"){const T=Is(n,P,W.path),x=t.resolve({path:T.path},W),k=s.createHref(T.fullPath);return me(T,x,{params:p(x.params),hash:hr(T.hash),redirectedFrom:void 0,href:k})}let j;if(P.path!=null)j=me({},P,{path:Is(n,P.path,W.path).path});else{const T=me({},P.params);for(const x in T)T[x]==null&&delete T[x];j=me({},P,{params:f(T)}),W.params=f(W.params)}const Y=t.resolve(j,W),ie=P.hash||"";Y.params=u(p(Y.params));const h=vm(r,me({},P,{hash:dm(ie),path:Y.path})),_=s.createHref(h);return me({fullPath:h,hash:ie,query:r===ll?Nm(P.query):P.query||{}},Y,{redirectedFrom:void 0,href:_})}function E(P){return typeof P=="string"?Is(n,P,a.value.path):me({},P)}function L(P,W){if(c!==P)return $n(Te.NAVIGATION_CANCELLED,{from:W,to:P})}function w(P){return N(P)}function $(P){return w(me(E(P),{replace:!0}))}function U(P,W){const j=P.matched[P.matched.length-1];if(j&&j.redirect){const{redirect:Y}=j;let ie=typeof Y=="function"?Y(P,W):Y;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=E(ie):{path:ie},ie.params={}),me({query:P.query,hash:P.hash,params:ie.path!=null?{}:P.params},ie)}}function N(P,W){const j=c=v(P),Y=a.value,ie=P.state,h=P.force,_=P.replace===!0,T=U(j,Y);if(T)return N(me(E(T),{state:typeof T=="object"?me({},ie,T.state):ie,force:h,replace:_}),W||j);const x=j;x.redirectedFrom=W;let k;return!h&&bm(r,Y,j)&&(k=$n(Te.NAVIGATION_DUPLICATED,{to:x,from:Y}),Ye(Y,Y,!0,!1)),(k?Promise.resolve(k):ee(x,Y)).catch(O=>Dt(O)?Dt(O,Te.NAVIGATION_GUARD_REDIRECT)?O:nt(O):ce(O,x,Y)).then(O=>{if(O){if(Dt(O,Te.NAVIGATION_GUARD_REDIRECT))return N(me({replace:_},E(O.to),{state:typeof O.to=="object"?me({},ie,O.to.state):ie,force:h}),W||x)}else O=V(x,Y,!0,_,ie);return se(x,Y,O),O})}function ne(P,W){const j=L(P,W);return j?Promise.reject(j):Promise.resolve()}function G(P){const W=St.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(P):P()}function ee(P,W){let j;const[Y,ie,h]=Mm(P,W);j=Ls(Y.reverse(),"beforeRouteLeave",P,W);for(const T of Y)T.leaveGuards.forEach(x=>{j.push(en(x,P,W))});const _=ne.bind(null,P,W);return j.push(_),He(j).then(()=>{j=[];for(const T of i.list())j.push(en(T,P,W));return j.push(_),He(j)}).then(()=>{j=Ls(ie,"beforeRouteUpdate",P,W);for(const T of ie)T.updateGuards.forEach(x=>{j.push(en(x,P,W))});return j.push(_),He(j)}).then(()=>{j=[];for(const T of h)if(T.beforeEnter)if(wt(T.beforeEnter))for(const x of T.beforeEnter)j.push(en(x,P,W));else j.push(en(T.beforeEnter,P,W));return j.push(_),He(j)}).then(()=>(P.matched.forEach(T=>T.enterCallbacks={}),j=Ls(h,"beforeRouteEnter",P,W,G),j.push(_),He(j))).then(()=>{j=[];for(const T of o.list())j.push(en(T,P,W));return j.push(_),He(j)}).catch(T=>Dt(T,Te.NAVIGATION_CANCELLED)?T:Promise.reject(T))}function se(P,W,j){l.list().forEach(Y=>G(()=>Y(P,W,j)))}function V(P,W,j,Y,ie){const h=L(P,W);if(h)return h;const _=W===zt,T=Rn?history.state:{};j&&(Y||_?s.replace(P.fullPath,me({scroll:_&&T&&T.scroll},ie)):s.push(P.fullPath,ie)),a.value=P,Ye(P,W,j,_),nt()}let oe;function Se(){oe||(oe=s.listen((P,W,j)=>{if(!Tt.listening)return;const Y=v(P),ie=U(Y,Tt.currentRoute.value);if(ie){N(me(ie,{replace:!0,force:!0}),Y).catch(Qn);return}c=Y;const h=a.value;Rn&&Rm(ol(h.fullPath,j.delta),as()),ee(Y,h).catch(_=>Dt(_,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?_:Dt(_,Te.NAVIGATION_GUARD_REDIRECT)?(N(me(E(_.to),{force:!0}),Y).then(T=>{Dt(T,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===Qs.pop&&s.go(-1,!1)}).catch(Qn),Promise.reject()):(j.delta&&s.go(-j.delta,!1),ce(_,Y,h))).then(_=>{_=_||V(Y,h,!1),_&&(j.delta&&!Dt(_,Te.NAVIGATION_CANCELLED)?s.go(-j.delta,!1):j.type===Qs.pop&&Dt(_,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),se(Y,h,_)}).catch(Qn)}))}let Ve=Bn(),we=Bn(),ue;function ce(P,W,j){nt(P);const Y=we.list();return Y.length?Y.forEach(ie=>ie(P,W,j)):console.error(P),Promise.reject(P)}function Pe(){return ue&&a.value!==zt?Promise.resolve():new Promise((P,W)=>{Ve.add([P,W])})}function nt(P){return ue||(ue=!P,Se(),Ve.list().forEach(([W,j])=>P?j(P):W()),Ve.reset()),P}function Ye(P,W,j,Y){const{scrollBehavior:ie}=e;if(!Rn||!ie)return Promise.resolve();const h=!j&&Lm(ol(P.fullPath,0))||(Y||!j)&&history.state&&history.state.scroll||null;return mi().then(()=>ie(P,W,h)).then(_=>_&&Im(_)).catch(_=>ce(_,P,W))}const De=P=>s.go(P);let Et;const St=new Set,Tt={currentRoute:a,listening:!0,addRoute:g,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:R,resolve:v,options:e,push:w,replace:$,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:we.add,isReady:Pe,install(P){P.component("RouterLink",ct),P.component("RouterView",Pi),P.config.globalProperties.$router=Tt,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>D(a)}),Rn&&!Et&&a.value===zt&&(Et=!0,w(s.location).catch(Y=>{}));const W={};for(const Y in zt)Object.defineProperty(W,Y,{get:()=>a.value[Y],enumerable:!0});P.provide(cs,Tt),P.provide(Oi,Xl(W)),P.provide(ti,a);const j=P.unmount;St.add(P),P.unmount=function(){St.delete(P),St.size<1&&(c=zt,oe&&oe(),oe=null,a.value=zt,Et=!1,ue=!1),j()}}};function He(P){return P.reduce((W,j)=>W.then(()=>G(j)),Promise.resolve())}return Tt}function Ni(){return dt(cs)}function wc(e){return dt(Oi)}function oh(){const e=re(document.body.className||"light"),t=re(!1);mu(()=>{document.body.className=e.value,localStorage.setItem("theme",e.value),t.value||setTimeout(()=>{document.body.style.transition="background-color 0.3s, color 0.3s",t.value=!0},0)});function n(){e.value=e.value==="dark"?"light":"dark"}return{theme:e,toggleTheme:n}}const qe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},lh={},ah={class:"logo"};function ch(e,t){return X(),z("div",ah,[...t[0]||(t[0]=[C("span",{class:"logo__first-letter"},"S",-1),C("span",{class:"logo__last-letter"},"G",-1)])])}const bl=qe(lh,[["render",ch],["__scopeId","data-v-b1a41c95"]]),yl="data:image/svg+xml,%3csvg%20width='10'%20height='7'%20viewBox='0%200%2010%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='0.707107'%20y1='0.707108'%20x2='5.70711'%20y2='5.70711'%20stroke='%23ABB2BF'%20stroke-width='2'/%3e%3cline%20x1='4.29289'%20y1='5.70711'%20x2='9.29289'%20y2='0.707108'%20stroke='%23ABB2BF'%20stroke-width='2'/%3e%3c/svg%3e",Ec="data:image/svg+xml,%3csvg%20width='42'%20height='40'%20viewBox='0%200%2042%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%200C9.3975%200%200%209.17638%200%2020.5059C0%2029.5797%206.01125%2037.2438%2014.3587%2039.9608C15.4087%2040.1403%2015.8025%2039.5251%2015.8025%2038.9868C15.8025%2038.4998%2015.7763%2036.8849%2015.7763%2035.1676C10.5%2036.116%209.135%2033.9116%208.715%2032.7581C8.47875%2032.1686%207.455%2030.3487%206.5625%2029.8617C5.8275%2029.4772%204.7775%2028.5288%206.53625%2028.5032C8.19%2028.4775%209.37125%2029.9898%209.765%2030.605C11.655%2033.7065%2014.6738%2032.835%2015.8813%2032.2968C16.065%2030.9639%2016.6162%2030.0667%2017.22%2029.5541C12.5475%2029.0414%207.665%2027.2728%207.665%2019.4293C7.665%2017.1993%208.47875%2015.3538%209.8175%2013.9184C9.6075%2013.4057%208.8725%2011.3039%2010.0275%208.48431C10.0275%208.48431%2011.7863%207.94603%2015.8025%2010.5862C17.4825%2010.1248%2019.2675%209.89409%2021.0525%209.89409C22.8375%209.89409%2024.6225%2010.1248%2026.3025%2010.5862C30.3188%207.9204%2032.0775%208.48431%2032.0775%208.48431C33.2325%2011.3039%2032.4975%2013.4057%2032.2875%2013.9184C33.6263%2015.3538%2034.44%2017.1737%2034.44%2019.4293C34.44%2027.2984%2029.5313%2029.0414%2024.8588%2029.5541C25.62%2030.1949%2026.2763%2031.4253%2026.2763%2033.3477C26.2763%2036.0903%2026.25%2038.2947%2026.25%2038.9868C26.25%2039.5251%2026.6438%2040.1659%2027.6938%2039.9608C31.8628%2038.5869%2035.4856%2035.9707%2038.0521%2032.4807C40.6185%2028.9906%2041.9993%2024.8025%2042%2020.5059C42%209.17638%2032.6025%200%2021%200Z'%20fill='%23ABB2BF'/%3e%3c/svg%3e",wl="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M480-120q-150%200-255-105T120-480q0-150%20105-255t255-105q14%200%2027.5%201t26.5%203q-41%2029-65.5%2075.5T444-660q0%2090%2063%20153t153%2063q55%200%20101-24.5t75-65.5q2%2013%203%2026.5t1%2027.5q0%20150-105%20255T480-120Zm0-80q88%200%20158-48.5T740-375q-20%205-40%208t-40%203q-123%200-209.5-86.5T364-660q0-20%203-40t8-40q-78%2032-126.5%20102T200-480q0%20116%2082%20198t198%2082Zm-10-270Z'/%3e%3c/svg%3e",El="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M480-360q50%200%2085-35t35-85q0-50-35-85t-85-35q-50%200-85%2035t-35%2085q0%2050%2035%2085t85%2035Zm0%2080q-83%200-141.5-58.5T280-480q0-83%2058.5-141.5T480-680q83%200%20141.5%2058.5T680-480q0%2083-58.5%20141.5T480-280ZM200-440H40v-80h160v80Zm720%200H760v-80h160v80ZM440-760v-160h80v160h-80Zm0%20720v-160h80v160h-80ZM256-650l-101-97%2057-59%2096%20100-52%2056Zm492%20496-97-101%2053-55%20101%2097-57%2059Zm-98-550%2097-101%2059%2057-100%2096-56-52ZM154-212l101-97%2055%2053-97%20101-59-57Zm326-268Z'/%3e%3c/svg%3e",uh={class:"header"},fh={class:"header__wrapper"},dh={class:"header__logo"},ph={class:"header__nav"},mh=["src"],hh=["src"],gh=["src"],_h={key:0,class:"header__lang-dropdown"},vh={key:0,class:"header__burger-body"},bh={class:"header__burger-body_top"},yh={class:"header__burger-nav"},wh=["src"],Eh=["src"],Sh=["src"],Th={key:0,class:"header__lang-dropdown"},Ch={class:"header__burger-body_footer"},Ih={href:"https://github.com/sergogrikurov",target:"_blank",rel:"noopener noreferrer"},Rh=["src"],Lh={__name:"Header",setup(e){const{theme:t,toggleTheme:n}=oh(),{locale:r,t:s}=Ue(),i=Ni(),o=wc(),l=re(!1),a=re(null),c=re(!1),u=()=>{l.value=!l.value},f=g=>{r.value=g,localStorage.setItem("lang",g),i.push({name:o.name,params:{...o.params,lang:g},query:o.query}),l.value=!1,c.value=!1},p=g=>{a.value&&!a.value.contains(g.target)&&(l.value=!1)};return En(()=>{document.addEventListener("click",p)}),ns(()=>{document.removeEventListener("click",p)}),En(()=>{const g=localStorage.getItem("theme");g&&(t.value=g,document.body.className=g)}),(g,S)=>(X(),z("header",uh,[C("div",fh,[C("div",dh,[Z(bl)]),C("nav",ph,[Z(D(ct),{class:"header__nav_link",to:{name:"home",params:{lang:D(r)}}},{default:Je(()=>[S[12]||(S[12]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.home")),1)]),_:1},8,["to"]),Z(D(ct),{class:"header__nav_link",to:{name:"integrations",params:{lang:D(r)}}},{default:Je(()=>[S[13]||(S[13]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.integrations")),1)]),_:1},8,["to"]),Z(D(ct),{class:"header__nav_link",to:{name:"slider",params:{lang:D(r)}}},{default:Je(()=>[S[14]||(S[14]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.slider")),1)]),_:1},8,["to"]),Z(D(ct),{class:"header__nav_link",to:{name:"inputs",params:{lang:D(r)}}},{default:Je(()=>[S[15]||(S[15]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.inputs")),1)]),_:1},8,["to"]),C("button",{class:"header__nav_theme",onClick:S[0]||(S[0]=(...R)=>D(n)&&D(n)(...R))},[D(t)==="light"?(X(),z("img",{key:0,src:D(El),alt:"Переключить на тёмную тему"},null,8,mh)):(X(),z("img",{key:1,src:D(wl),alt:"Переключить на светлую тему"},null,8,hh))]),C("div",{class:"header__lang",ref_key:"langRef",ref:a,onClick:u},[C("p",null,q(D(r).toUpperCase()),1),C("img",{src:D(yl),alt:"arrow",class:gt({open:l.value})},null,10,gh),l.value?(X(),z("div",_h,[C("div",{class:"header__lang-dropdown_link",onClick:S[1]||(S[1]=Kn(R=>f("en"),["stop"]))}," EN "),C("div",{class:"header__lang-dropdown_link",onClick:S[2]||(S[2]=Kn(R=>f("ru"),["stop"]))}," RU ")])):$e("",!0)],512)]),C("button",{class:"header__burger",onClick:S[3]||(S[3]=R=>c.value=!0)}),c.value?(X(),z("div",vh,[C("div",bh,[Z(bl),C("span",{class:"header__burger-close",onClick:S[4]||(S[4]=R=>c.value=!1)},"X")]),C("nav",yh,[Z(D(ct),{class:"header__burger-nav_link",to:{name:"home",params:{lang:D(r)}},onClick:S[5]||(S[5]=R=>c.value=!1)},{default:Je(()=>[S[16]||(S[16]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.home")),1)]),_:1},8,["to"]),Z(D(ct),{class:"header__burger-nav_link",to:{name:"integrations",params:{lang:D(r)}},onClick:S[6]||(S[6]=R=>c.value=!1)},{default:Je(()=>[S[17]||(S[17]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.integrations")),1)]),_:1},8,["to"]),Z(D(ct),{class:"header__burger-nav_link",to:{name:"slider",params:{lang:D(r)}},onClick:S[7]||(S[7]=R=>c.value=!1)},{default:Je(()=>[S[18]||(S[18]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.slider")),1)]),_:1},8,["to"]),Z(D(ct),{class:"header__burger-nav_link",to:{name:"inputs",params:{lang:D(r)}},onClick:S[8]||(S[8]=R=>c.value=!1)},{default:Je(()=>[S[19]||(S[19]=C("span",{class:"red"},"#",-1)),Ce(q(D(s)("nav.inputs")),1)]),_:1},8,["to"]),C("button",{class:"header__nav_theme",onClick:S[9]||(S[9]=(...R)=>D(n)&&D(n)(...R))},[D(t)==="light"?(X(),z("img",{key:0,src:D(El),alt:"Переключить на тёмную тему"},null,8,wh)):(X(),z("img",{key:1,src:D(wl),alt:"Переключить на светлую тему"},null,8,Eh))]),C("div",{class:"header__lang",ref_key:"langRef",ref:a,onClick:u},[C("p",null,q(D(r).toUpperCase()),1),C("img",{src:D(yl),alt:"arrow",class:gt({open:l.value})},null,10,Sh),l.value?(X(),z("div",Th,[C("div",{class:"header__lang-dropdown_link",onClick:S[10]||(S[10]=Kn(R=>f("en"),["stop"]))}," EN "),C("div",{class:"header__lang-dropdown_link",onClick:S[11]||(S[11]=Kn(R=>f("ru"),["stop"]))}," RU ")])):$e("",!0)],512)]),C("div",Ch,[C("a",Ih,[C("img",{src:D(Ec),alt:"GitHub logo"},null,8,Rh)])])])):$e("",!0)])]))}},Ah=qe(Lh,[["__scopeId","data-v-d042cce4"]]),xh={class:"footer"},Oh={class:"footer__top"},Ph={href:"https://github.com/sergogrikurov",target:"_blank",rel:"noopener noreferrer"},Nh=["src"],kh={class:"footer__copy"},Mh={__name:"Footer",setup(e){const{t}=Ue();return Ni(),wc(),(n,r)=>(X(),z("footer",xh,[C("div",Oh,[C("a",Ph,[C("img",{src:D(Ec),alt:"GitHub logo"},null,8,Nh)]),r[0]||(r[0]=C("a",{href:"mailto:sergogrikurov@gmail.com"},"sergogrikurov@gmail.com",-1))]),C("div",kh,"© "+q(D(t)("footer.copy")),1)]))}},Fh=qe(Mh,[["__scopeId","data-v-fbfaedb6"]]),Dh={class:"wrapper"},$h={class:"main"},Uh={__name:"App",setup(e){const{locale:t}=Ue(),n=Ni();return n.isReady().then(()=>{const r=n.currentRoute.value.params.lang,s=localStorage.getItem("lang");t.value=r||s||"en"}),(r,s)=>(X(),z("div",Dh,[Z(Ah),C("main",$h,[Z(D(Pi))]),Z(Fh)]))}},Vh={class:"download"},jh=["disabled"],Hh={key:0,class:"download__info"},Wh={__name:"CodeDownloader",props:{code:{type:String,required:!0},filename:{type:String,default:"Component.vue"}},setup(e){const{t}=Ue(),n=e,r=re(!1);function s(){if(!n.code)return;r.value=!0;const i=new Blob([n.code],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(i),l=document.createElement("a");l.href=o,l.download=n.filename,l.click(),URL.revokeObjectURL(o),setTimeout(()=>{r.value=!1},3e3)}return(i,o)=>(X(),z("div",Vh,[C("button",{onClick:s,class:"button-blue",disabled:r.value},q(r.value?D(t)("download.inProgress"):D(t)("download.download")+" "+n.filename),9,jh),r.value?(X(),z("span",Hh,q(D(t)("download.info")),1)):$e("",!0)]))}},Ot=qe(Wh,[["__scopeId","data-v-abadfc6e"]]),Bh="/vue-helper/assets/integration-Xy3hzcJV.jpg",Gh="/vue-helper/assets/slider-BkakO3of.jpg",Kh="/vue-helper/assets/inputs-BleldE3N.jpg",qh=`<script setup>\r
import { ref, onMounted, onUnmounted, computed } from "vue";\r
import { useI18n } from "vue-i18n";\r
const { t } = useI18n();\r
\r
import Slide1 from "@/assets/images/slider/slide1.jpg";\r
import Slide2 from "@/assets/images/slider/slide2.jpg";\r
import Slide3 from "@/assets/images/slider/slide3.jpg";\r
import Slide4 from "@/assets/images/slider/slide4.jpg";\r
import Slide5 from "@/assets/images/slider/slide5.jpg";\r
import Slide6 from "@/assets/images/slider/slide6.jpg";\r
import Slide7 from "@/assets/images/slider/slide7.jpg";\r
import Slide8 from "@/assets/images/slider/slide8.jpg";\r
\r
// 1️⃣ Слайды\r
const slides = [\r
  { img: Slide1, alt: "Slide 1" },\r
  { img: Slide2, alt: "Slide 2" },\r
  { img: Slide3, alt: "Slide 3" },\r
  { img: Slide4, alt: "Slide 4" },\r
  { img: Slide5, alt: "Slide 5" },\r
  { img: Slide6, alt: "Slide 6" },\r
  { img: Slide7, alt: "Slide 7" },\r
  { img: Slide8, alt: "Slide 8" },\r
];\r
\r
function getSlide(index) {\r
  return slides[index % slides.length];\r
}\r
\r
// 2️⃣ Настройки\r
const startIndex = ref(0); // с какой картинки начинать\r
const visibleCount = ref(3); // видимые блоки (будет адаптивно)\r
const autoScroll = ref(true); // автопрокрутка\r
const enableSwipe = ref(true); // свайпы\r
const scrollInterval = ref(2000); // интервал в миллисекундах\r
\r
let intervalId = null;\r
\r
// 3️⃣ Swipe переменные\r
let touchStartX = 0;\r
let touchEndX = 0;\r
\r
// 4️⃣ Функции переключения\r
function next() {\r
  startIndex.value++;\r
  if (startIndex.value > slides.length - visibleCount.value)\r
    startIndex.value = 0;\r
}\r
\r
function prev() {\r
  startIndex.value--;\r
  if (startIndex.value < 0)\r
    startIndex.value = slides.length - visibleCount.value;\r
}\r
\r
// 5️⃣ Swipe обработчики\r
function handleTouchStart(e) {\r
  if (!enableSwipe.value) return;\r
  touchStartX = e.touches[0].clientX;\r
}\r
\r
function handleTouchEnd(e) {\r
  if (!enableSwipe.value) return;\r
  touchEndX = e.changedTouches[0].clientX;\r
  const deltaX = touchStartX - touchEndX;\r
\r
  if (Math.abs(deltaX) > 50) {\r
    if (deltaX > 0) next();\r
    else prev();\r
  }\r
}\r
\r
function handleTouchMove(e) {\r
  if (!enableSwipe.value) return;\r
  touchEndX = e.touches[0].clientX;\r
}\r
\r
// 6️⃣ Автопрокрутка\r
onMounted(() => {\r
  if (autoScroll.value) intervalId = setInterval(next, scrollInterval.value);\r
});\r
\r
onUnmounted(() => {\r
  clearInterval(intervalId);\r
});\r
\r
// 7️⃣ Адаптивный visibleCount через ширину окна\r
function updateVisibleCount() {\r
  const width = window.innerWidth;\r
  if (width < 600) visibleCount.value = 1;\r
  else if (width < 900) visibleCount.value = 2;\r
  else visibleCount.value = 3;\r
}\r
\r
// запускаем при монтировании\r
onMounted(() => {\r
  updateVisibleCount();\r
  window.addEventListener("resize", updateVisibleCount);\r
});\r
\r
// удаляем слушатель при размонтировании\r
onUnmounted(() => {\r
  window.removeEventListener("resize", updateVisibleCount);\r
});\r
\r
// для активного слаида\r
const activeIndex = computed(() => {\r
  return Math.floor(visibleCount.value / 2);\r
});\r
<\/script>\r
\r
<template>\r
  <section class="slider">\r
    <h2 class="title"><span class="red">/</span>{{ t("homePage.slider") }}</h2>\r
    <div class="slider__wrapper">\r
      <button class="slider__button-prev" @click="prev"><span>‹</span></button>\r
\r
      <div\r
        class="slider__slides"\r
        @touchstart="handleTouchStart"\r
        @touchmove="handleTouchMove"\r
        @touchend="handleTouchEnd"\r
      >\r
        <div\r
          v-for="(i, idx) in visibleCount"\r
          :key="i"\r
          class="slider__slide"\r
          :class="{ slider__slide_active: idx === activeIndex }"\r
          :style="{\r
            backgroundImage: \`url(\${getSlide(startIndex + i - 1).img})\`,\r
          }"\r
        ></div>\r
      </div>\r
    </div>\r
  </section>\r
</template>\r
\r
<style scoped lang="scss">\r
.slider {\r
  @include adaptive-value(padding-top, 50, 20);\r
  @include adaptive-value(padding-bottom, 50, 20);\r
  h2 {\r
    margin-bottom: rem(50);\r
  }\r
  &__wrapper {\r
    display: flex;\r
    align-items: center;\r
    max-width: rem(1200);\r
    margin: 0 auto;\r
    overflow: hidden;\r
    gap: rem(10);\r
    @media (max-width: rem(1024)) {\r
      gap: 0;\r
    }\r
    & button {\r
      width: rem(40);\r
      height: rem(40);\r
      font-size: rem(30);\r
      border-radius: 50%;\r
      border: 1px solid gray;\r
      color: gray;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      transition: all 0.3s;\r
      @media (max-width: rem(1024)) {\r
        display: none;\r
      }\r
      & span {\r
        margin-top: rem(-7);\r
      }\r
      &:hover {\r
        color: #fff;\r
        border: 1px solid #fff;\r
      }\r
    }\r
  }\r
\r
  &__slides {\r
    display: flex;\r
    align-items: center;\r
    gap: rem(10);\r
    width: 100%;\r
    touch-action: pan-y; // разрешаем вертикальный скролл страницы\r
  }\r
\r
  &__slide {\r
    flex: 1 1 0;\r
    height: rem(300);\r
    background-size: cover;\r
    background-position: center;\r
    border-radius: rem(10);\r
    transition: all 0.5s ease;\r
\r
    &_active {\r
      height: rem(360);\r
      transform: scale(1);\r
      opacity: 1;\r
      z-index: 2;\r
    }\r
  }\r
}\r
</style>\r
`,Yh={class:"home-page"},Xh={class:"home-page__integrations home-page-integrations"},zh={class:"title"},Jh={class:"home-page-integrations__wrapper"},Zh={class:"home-page-integrations__link"},Qh=["src"],eg={class:"home-page-integrations__link_text"},tg={class:"home-page__slider home-page-slider"},ng={class:"title"},rg={class:"home-page-slider__wrapper"},sg={class:"home-page-slider__link"},ig=["src"],og={class:"home-page-slider__link_text"},lg={class:"home-page__inputs home-page-inputs"},ag={class:"title"},cg={class:"home-page-inputs__wrapper"},ug={class:"home-page-inputs__link"},fg=["src"],dg={class:"home-page-inputs__link_text"},pg={__name:"Home",setup(e){const{locale:t,t:n}=Ue();return(r,s)=>(X(),z("div",Yh,[C("section",Xh,[C("h2",zh,[s[0]||(s[0]=C("span",{class:"red"},"#",-1)),Ce(q(D(n)("homePage.integrations")),1)]),C("div",Jh,[Z(D(ct),{to:{name:"integrations",params:{lang:D(t)}}},{default:Je(()=>[C("div",Zh,[C("img",{src:D(Bh),alt:"Integration Image"},null,8,Qh),C("span",eg,q(D(n)("homePage.viewAll")),1)])]),_:1},8,["to"])])]),C("section",tg,[C("h2",ng,[s[1]||(s[1]=C("span",{class:"red"},"#",-1)),Ce(q(D(n)("homePage.slider")),1)]),C("div",rg,[Z(D(ct),{to:{name:"slider",params:{lang:D(t)}}},{default:Je(()=>[C("div",sg,[C("img",{src:D(Gh),alt:"Slider Image"},null,8,ig),C("span",og,q(D(n)("homePage.viewAll")),1)])]),_:1},8,["to"]),Z(Ot,{code:D(qh),filename:"Slider.vue"},null,8,["code"])])]),C("section",lg,[C("h2",ag,[s[2]||(s[2]=C("span",{class:"red"},"#",-1)),Ce(q(D(n)("inputs.title")),1)]),C("div",cg,[Z(D(ct),{to:{name:"inputs",params:{lang:D(t)}}},{default:Je(()=>[C("div",ug,[C("img",{src:D(Kh),alt:"Inputs Image"},null,8,fg),C("span",dg,q(D(n)("homePage.viewAll")),1)])]),_:1},8,["to"])])])]))}},mg=qe(pg,[["__scopeId","data-v-b79427e2"]]),hg=`Чтобы подключить SCSS  в Vue нужно:\r
\r
1. npm install -D sass\r
2. Создаём путь и файл assets/scss/main.scss\r
3. Подключаем в main.js сверху import "./assets/scss/main.scss";\r
4. В компоненте <style lang="scss" scoped>\r
5. Для подключения других фаилов scss нужно в main.scss внутри него @use "./base.scss";\r
6. Для подключения фаилов scss с глобальной видимостью нужно в фаиле vite.config.js \r
css: {\r
    preprocessorOptions: {\r
      scss: {\r
        additionalData: \`\r
          @use "@/assets/scss/variables" as *;\r
        \`,\r
      },\r
    },\r
  },\r
7. Чтобы подключить одим файл scss в другой файл scss глобально нужно @use "./variables" as *;\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////\r
\r
1. npm install -D sass\r
2. Create the path and file: assets/scss/main.scss\r
3. Import it in main.js at the top: import "./assets/scss/main.scss";\r
4. In a component use <style lang="scss" scoped>\r
5. To include other SCSS files, inside main.scss use @use "./base.scss";\r
6. To make SCSS files globally available, configure vite.config.js:\r
css: {\r
  preprocessorOptions: {\r
    scss: {\r
      additionalData: \`\r
        @use "@/assets/scss/variables" as *;\r
      \`,\r
    },\r
  },\r
},\r
7. To include one SCSS file into another SCSS file globally, use @use "./variables" as *;`,gg=`Для интеграции темы во Vue нужно:\r
1. Создать фаил composables/useTheme.js и в него\r
import { ref, watchEffect } from "vue";\r
\r
export function useTheme() {\r
  // сразу берём класс body, если установлен в index.html\r
  const theme = ref(document.body.className || "light");\r
\r
  // флаг для включения transition после первого рендера\r
  const transitionReady = ref(false);\r
\r
  watchEffect(() => {\r
    // устанавливаем класс на body\r
    document.body.className = theme.value;\r
\r
    // сохраняем выбор в localStorage\r
    localStorage.setItem("theme", theme.value);\r
\r
    // включаем плавный переход только один раз\r
    if (!transitionReady.value) {\r
      setTimeout(() => {\r
        document.body.style.transition = "background-color 0.3s, color 0.3s";\r
        transitionReady.value = true;\r
      }, 0);\r
    }\r
  });\r
\r
  function toggleTheme() {\r
    theme.value = theme.value === "dark" ? "light" : "dark";\r
  }\r
\r
  return { theme, toggleTheme };\r
}\r
2. Подключаем его например в Header.vue \r
import { useTheme } from "@/composables/useTheme.js";\r
const { theme, toggleTheme } = useTheme();\r
// dropdown языка\r
const langOpen = ref(false);\r
const langRef = ref(null);\r
\r
<button class="header__nav_theme" @click="toggleTheme">\r
          <span v-if="theme === 'light'">Light</span>\r
          <span v-else>Dark</span>\r
        </button>\r
3. Создаём файл variables.scss и в него например\r
$background-color-light: white;\r
$background-color-dark: black;\r
\r
body.light {\r
  --bg-color: #{$background-color-light};\r
}\r
\r
body.dark {\r
  --bg-color: #{$background-color-dark};\r
}\r
4. В html, body\r
html,\r
body {\r
  background-color: var(--bg-color);\r
}\r
\r
//////////////////////////////////////////////////////////////\r
\r
To integrate a theme in Vue you need to:\r
\r
1. Create a file composables/useTheme.js and add:\r
import { ref, watchEffect } from "vue";\r
\r
export function useTheme() {\r
const theme = ref(document.body.className || "light");\r
const transitionReady = ref(false);\r
\r
watchEffect(() => {\r
document.body.className = theme.value;\r
localStorage.setItem("theme", theme.value);\r
\r
if (!transitionReady.value) {  \r
  setTimeout(() => {  \r
    document.body.style.transition = "background-color 0.3s, color 0.3s";  \r
    transitionReady.value = true;  \r
  }, 0);  \r
}  \r
\r
\r
});\r
\r
function toggleTheme() {\r
theme.value = theme.value === "dark" ? "light" : "dark";\r
}\r
\r
return { theme, toggleTheme };\r
}\r
\r
2. Import it in a component, for example Header.vue:\r
import { useTheme } from "@/composables/useTheme.js";\r
const { theme, toggleTheme } = useTheme();\r
const langOpen = ref(false);\r
const langRef = ref(null);\r
\r
<button class="header__nav_theme" @click="toggleTheme">\r
<span v-if="theme === 'light'">Light</span>\r
<span v-else>Dark</span>\r
</button>\r
\r
3. Create a file variables.scss and add:\r
$background-color-light: white;\r
$background-color-dark: black;\r
\r
body.light {\r
--bg-color: #{$background-color-light};\r
}\r
\r
body.dark {\r
--bg-color: #{$background-color-dark};\r
}\r
\r
4. In html, body styles:\r
html,\r
body {\r
background-color: var(--bg-color);\r
}`,_g=`Для интеграции языка во Vue нужно:\r
1. npm install vue-i18n\r
2. Создаём файл composables/useLangRoute.js\r
import { useI18n } from "vue-i18n";\r
\r
export function useLangRoute() {\r
  const { locale } = useI18n();\r
\r
  const langRoute = (name, params = {}) => {\r
    return {\r
      name,\r
      params: { ...params, lang: locale.value },\r
    };\r
  };\r
\r
  return { langRoute };\r
}\r
3. Настраиваем маршруты router/index.js \r
const routes = [\r
  {\r
    path: "/:lang(en|ru)",\r
    component: RouterView,\r
    children: [\r
      { path: "", name: "home", component: Home },\r
    ],\r
  },\r
  { path: "/", redirect: "/en" },\r
];\r
4. В App.vue \r
<script setup>\r
import { useI18n } from "vue-i18n";\r
\r
const { locale } = useI18n();\r
\r
router.isReady().then(() => {\r
  const langFromRoute = router.currentRoute.value.params.lang;\r
  const langFromStorage = localStorage.getItem("lang");\r
\r
  locale.value = langFromRoute || langFromStorage || "en";\r
});\r
<\/script>\r
5. В Header.vue \r
import { useI18n } from "vue-i18n";\r
// i18n\r
const { locale, t } = useI18n();\r
// переключение языка\r
const setLang = (lang) => {\r
  locale.value = lang;\r
  localStorage.setItem("lang", lang);\r
\r
  router.push({\r
    name: route.name,\r
    params: { ...route.params, lang },\r
    query: route.query,\r
  });\r
\r
  langOpen.value = false;\r
  menuOpen.value = false;\r
};\r
// dropdown языка\r
const langOpen = ref(false);\r
const langRef = ref(null);\r
// toggle dropdown языка\r
const toggleLang = () => {\r
  langOpen.value = !langOpen.value;\r
};\r
\r
<div class="header__lang" ref="langRef" @click="toggleLang">\r
          <p>{{ locale.toUpperCase() }}</p>\r
          <img :src="Chek" alt="arrow" :class="{ open: langOpen }" />\r
          <div v-if="langOpen" class="header__lang-dropdown">\r
            <div class="header__lang-dropdown_link" @click.stop="setLang('en')">\r
              EN\r
            </div>\r
            <div class="header__lang-dropdown_link" @click.stop="setLang('ru')">\r
              RU\r
            </div>\r
          </div>\r
        </div>\r
\r
6. Создаём файл для переводов src/i18n/index.js\r
import { createI18n } from "vue-i18n";\r
\r
const messages = {\r
 en: {\r
	nav: {\r
      home: "home",\r
    },\r
 },\r
  ru: {\r
	nav: {\r
      home: "главная",\r
    },\r
  },\r
	};\r
7. На странице используем {{ t("nav.home") }}\r
\r
////////////////////////////////////////////////////\r
\r
1. npm install vue-i18n\r
2. Create a file composables/useLangRoute.js\r
import { useI18n } from "vue-i18n";\r
\r
export function useLangRoute() {\r
  const { locale } = useI18n();\r
\r
  const langRoute = (name, params = {}) => {\r
    return {\r
      name,\r
      params: { ...params, lang: locale.value },\r
    };\r
  };\r
\r
  return { langRoute };\r
}\r
3. Configure routes in router/index.js\r
const routes = [\r
  {\r
    path: "/:lang(en|ru)",\r
    component: RouterView,\r
    children: [\r
      { path: "", name: "home", component: Home },\r
    ],\r
  },\r
  { path: "/", redirect: "/en" },\r
];\r
4. In App.vue\r
import { useI18n } from "vue-i18n";\r
\r
const { locale, t } = useI18n();\r
\r
// language switch\r
const setLang = (lang) => {\r
  locale.value = lang;\r
  localStorage.setItem("lang", lang);\r
\r
  router.push({\r
    name: route.name,\r
    params: { ...route.params, lang },\r
    query: route.query,\r
  });\r
\r
  langOpen.value = false;\r
  menuOpen.value = false;\r
};\r
\r
// language dropdown\r
const langOpen = ref(false);\r
const langRef = ref(null);\r
\r
// toggle dropdown\r
const toggleLang = () => {\r
  langOpen.value = !langOpen.value;\r
};\r
5. In Header.vue\r
import { useI18n } from "vue-i18n";\r
\r
const { locale, t } = useI18n();\r
\r
// language switch\r
const setLang = (lang) => {\r
  locale.value = lang;\r
  localStorage.setItem("lang", lang);\r
\r
  router.push({\r
    name: route.name,\r
    params: { ...route.params, lang },\r
    query: route.query,\r
  });\r
\r
  langOpen.value = false;\r
  menuOpen.value = false;\r
};\r
\r
// language dropdown\r
const langOpen = ref(false);\r
const langRef = ref(null);\r
\r
// toggle dropdown\r
const toggleLang = () => {\r
  langOpen.value = !langOpen.value;\r
};\r
\r
<div class="header__lang" ref="langRef" @click="toggleLang">\r
  <p>{{ locale.toUpperCase() }}</p>\r
  <img :src="Chek" alt="arrow" :class="{ open: langOpen }" />\r
  <div v-if="langOpen" class="header__lang-dropdown">\r
    <div class="header__lang-dropdown_link" @click.stop="setLang('en')">\r
      EN\r
    </div>\r
    <div class="header__lang-dropdown_link" @click.stop="setLang('ru')">\r
      RU\r
    </div>\r
  </div>\r
</div>\r
\r
6. Create a translations file src/i18n/index.js\r
import { createI18n } from "vue-i18n";\r
\r
const messages = {\r
  en: {\r
    nav: {\r
      home: "home",\r
    },\r
  },\r
  ru: {\r
    nav: {\r
      home: "главная",\r
    },\r
  },\r
};\r
7. Use translations on pages like:\r
{{ t("nav.home") }}\r
`,vg={class:"integrations"},bg={class:"title"},yg={class:"integrations__items"},wg={class:"integrations__item"},Eg={class:"integrations__item"},Sg={class:"integrations__item"},Tg={__name:"Integrations",setup(e){const{t}=Ue();return(n,r)=>(X(),z("div",vg,[C("h2",bg,[r[0]||(r[0]=C("span",{class:"red"},"/",-1)),Ce(q(D(t)("homePage.integrations")),1)]),C("div",yg,[C("div",wg,[r[1]||(r[1]=C("h3",null,"SCSS",-1)),Z(Ot,{code:D(hg),filename:"scss.txt"},null,8,["code"])]),C("div",Eg,[r[2]||(r[2]=C("h3",null,"Theme",-1)),Z(Ot,{code:D(gg),filename:"theme.txt"},null,8,["code"])]),C("div",Sg,[r[3]||(r[3]=C("h3",null,"Lang",-1)),Z(Ot,{code:D(_g),filename:"lang.txt"},null,8,["code"])])])]))}},Cg=qe(Tg,[["__scopeId","data-v-8a21e048"]]),Ig="/vue-helper/assets/slide1-DpS_wkUr.jpg",Rg="/vue-helper/assets/slide2-CZiPF0zw.jpg",Lg="/vue-helper/assets/slide3-CGNGwjnB.jpg",Ag="/vue-helper/assets/slide4-Bp_4rJPU.jpg",xg="/vue-helper/assets/slide5-Dd3Nlxda.jpg",Og="/vue-helper/assets/slide6-DVEMTm-w.jpg",Pg="/vue-helper/assets/slide7-Clq-cK4h.jpg",Ng="/vue-helper/assets/slide8-B_ypxDgz.jpg",kg={class:"slider"},Mg={class:"title"},Fg={class:"slider__wrapper"},Dg={__name:"Slider",setup(e){const{t}=Ue(),n=[{img:Ig,alt:"Slide 1"},{img:Rg,alt:"Slide 2"},{img:Lg,alt:"Slide 3"},{img:Ag,alt:"Slide 4"},{img:xg,alt:"Slide 5"},{img:Og,alt:"Slide 6"},{img:Pg,alt:"Slide 7"},{img:Ng,alt:"Slide 8"}];function r(L){return n[L%n.length]}const s=re(0),i=re(3),o=re(!0),l=re(!0),a=re(2e3);let c=null,u=0,f=0;function p(){s.value++,s.value>n.length-i.value&&(s.value=0)}function g(){s.value--,s.value<0&&(s.value=n.length-i.value)}function S(L){l.value&&(u=L.touches[0].clientX)}function R(L){if(!l.value)return;f=L.changedTouches[0].clientX;const w=u-f;Math.abs(w)>50&&(w>0?p():g())}function F(L){l.value&&(f=L.touches[0].clientX)}En(()=>{o.value&&(c=setInterval(p,a.value))}),sr(()=>{clearInterval(c)});function v(){const L=window.innerWidth;L<600?i.value=1:L<900?i.value=2:i.value=3}En(()=>{v(),window.addEventListener("resize",v)}),sr(()=>{window.removeEventListener("resize",v)});const E=Re(()=>Math.floor(i.value/2));return(L,w)=>(X(),z("section",kg,[C("h2",Mg,[w[0]||(w[0]=C("span",{class:"red"},"/",-1)),Ce(q(D(t)("homePage.slider")),1)]),C("div",Fg,[C("button",{class:"slider__button-prev",onClick:g},[...w[1]||(w[1]=[C("span",null,"‹",-1)])]),C("div",{class:"slider__slides",onTouchstart:S,onTouchmove:F,onTouchend:R},[(X(!0),z(Ae,null,ir(i.value,($,U)=>(X(),z("div",{key:$,class:gt(["slider__slide",{slider__slide_active:U===E.value}]),style:zr({backgroundImage:`url(${r(s.value+$-1).img})`})},null,6))),128))],32)])]))}},$g=qe(Dg,[["__scopeId","data-v-4e1abecb"]]),Ug={key:0,class:"modal-overlay"},Vg={class:"modal"},jg={__name:"Modal",props:{show:Boolean,duration:{type:Number,default:3e3}},emits:["close"],setup(e,{emit:t}){const n=e,r=t;let s=null;return rn(()=>n.show,i=>{i?s=setTimeout(()=>{r("close")},n.duration):(clearTimeout(s),s=null)}),ns(()=>{s&&clearTimeout(s)}),(i,o)=>(X(),jr(Sf,{name:"fade"},{default:Je(()=>[e.show?(X(),z("div",Ug,[C("div",Vg,[Ou(i.$slots,"default",{},void 0,!0)])])):$e("",!0)]),_:3}))}},Sc=qe(jg,[["__scopeId","data-v-4f5ed5d1"]]),Hg={class:"inputs__registration inputs-registration"},Wg={class:"inputs-registration__title"},Bg={class:"title"},Gg={class:"inputs-registration-form__field"},Kg={for:"email"},qg={key:0,class:"error"},Yg={class:"inputs-registration-form__field"},Xg={for:"password"},zg=["type"],Jg={key:0,class:"error"},Zg={class:"inputs-registration-form__field"},Qg={for:"confirm-password"},e_=["type"],t_={key:0,class:"error"},n_={class:"inputs-registration-form__field-inline"},r_={class:"inputs-registration-form__field-inline_wrapper"},s_={for:"show-password"},i_={class:"inputs-registration-form__field-inline"},o_={class:"inputs-registration-form__field-inline_wrapper"},l_={for:"terms"},a_={key:0,class:"error"},c_={class:"inputs-registration-form__button"},u_={type:"submit"},Sl=6,Tl=12,f_={__name:"Registration",setup(e){const{t}=Ue(),n=re(!1),r=re(""),s=re(""),i=re(""),o=re(!1),l=re(!1),a=re(!1),c=re(!1),u=re(!1),f=re(!1),p=Re(()=>r.value?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?"":t("inputs.emailInvalid"):t("inputs.emailRequired")),g=Re(()=>!s.value&&c.value?t("inputs.passwordRequired"):!/^[A-Za-z0-9]+$/.test(s.value)&&c.value?t("inputs.passwordPattern"):s.value.length<Sl&&c.value?t("inputs.passwordMin",{min:Sl}):s.value.length>Tl&&c.value?t("inputs.passwordMax",{max:Tl}):""),S=Re(()=>u.value?i.value?s.value!==i.value?t("inputs.passwordMismatch"):"":t("inputs.passwordRequired"):""),R=F=>{F.preventDefault(),f.value=!0,c.value=!0,u.value=!0,o.value?l.value=!1:l.value=!0,!p.value&&!g.value&&!S.value&&o.value&&(n.value=!0,r.value="",s.value="",i.value="",o.value=!1,a.value=!1,f.value=!1,c.value=!1,u.value=!1,l.value=!1)};return(F,v)=>(X(),z("section",Hg,[C("div",Wg,[C("h3",Bg,[v[9]||(v[9]=C("span",{class:"red"},"#",-1)),Ce(q(D(t)("inputs.registration")),1)])]),C("form",{class:"inputs-registration__form inputs-registration-form",onSubmit:R},[C("div",Gg,[C("label",Kg,q(D(t)("inputs.email")),1),tn(C("input",{id:"email",type:"email",class:gt({"input-error":p.value&&f.value}),"onUpdate:modelValue":v[0]||(v[0]=E=>r.value=E),onBlur:v[1]||(v[1]=E=>f.value=!0)},null,34),[[Wr,r.value]]),f.value&&p.value?(X(),z("p",qg,q(p.value),1)):$e("",!0)]),C("div",Yg,[C("label",Xg,q(D(t)("inputs.password")),1),tn(C("input",{id:"password",type:a.value?"text":"password",class:gt({"input-error":g.value&&c.value}),"onUpdate:modelValue":v[2]||(v[2]=E=>s.value=E),onBlur:v[3]||(v[3]=E=>c.value=!0)},null,42,zg),[[js,s.value]]),g.value&&c.value?(X(),z("p",Jg,q(g.value),1)):$e("",!0)]),C("div",Zg,[C("label",Qg,q(D(t)("inputs.confPassword")),1),tn(C("input",{id:"confirm-password",type:a.value?"text":"password",class:gt({"input-error":S.value&&u.value}),"onUpdate:modelValue":v[4]||(v[4]=E=>i.value=E),onBlur:v[5]||(v[5]=E=>u.value=!0)},null,42,e_),[[js,i.value]]),S.value&&u.value?(X(),z("p",t_,q(S.value),1)):$e("",!0)]),C("div",n_,[C("div",r_,[C("label",s_,q(D(t)("inputs.showPassword")),1),tn(C("input",{id:"show-password",type:"checkbox","onUpdate:modelValue":v[6]||(v[6]=E=>a.value=E)},null,512),[[Br,a.value]])])]),C("div",i_,[C("div",o_,[C("label",l_,q(D(t)("inputs.agree")),1),tn(C("input",{id:"terms",type:"checkbox","onUpdate:modelValue":v[7]||(v[7]=E=>o.value=E)},null,512),[[Br,o.value]])]),l.value?(X(),z("p",a_,q(D(t)("inputs.agreeRequired")),1)):$e("",!0)]),C("div",c_,[C("button",u_,q(D(t)("inputs.register")),1)])],32),Z(Sc,{show:n.value,duration:1e3,onClose:v[8]||(v[8]=E=>n.value=!1)},{default:Je(()=>[C("h3",null,"✅ "+q(D(t)("inputs.success")),1)]),_:1},8,["show"])]))}},d_=qe(f_,[["__scopeId","data-v-f152d525"]]),p_={class:"inputs__login inputs-login"},m_={class:"inputs-login__title"},h_={class:"title"},g_={class:"inputs-login-form__field"},__={for:"email"},v_={key:0,class:"error"},b_={class:"inputs-login-form__field"},y_={for:"password"},w_=["type"],E_={key:0,class:"error"},S_={class:"inputs-login-form__field-inline"},T_={class:"inputs-login-form__field-inline_wrapper"},C_={for:"show-password"},I_={class:"inputs-login-form__button"},R_={type:"submit"},L_={__name:"Login",setup(e){const{t}=Ue(),n=re(""),r=re(""),s=re(!1),i=re(!1),o=re(!1),l=re(!1),a=Re(()=>n.value?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?"":t("inputs.emailInvalid"):t("inputs.required")),c=Re(()=>r.value?r.value.length<6?t("inputs.passwordMin"):"":t("inputs.required")),u=()=>{i.value=!0,o.value=!0,!a.value&&!c.value&&(l.value=!0,n.value="",r.value="",s.value=!1,i.value=!1,o.value=!1)};return(f,p)=>(X(),z("section",p_,[C("div",m_,[C("h3",h_,[p[6]||(p[6]=C("span",{class:"red"},"#",-1)),Ce(q(D(t)("inputs.login")),1)])]),C("form",{class:"inputs-login__form inputs-login-form",onSubmit:Kn(u,["prevent"])},[C("div",g_,[C("label",__,q(D(t)("inputs.email")),1),tn(C("input",{id:"email",type:"email","onUpdate:modelValue":p[0]||(p[0]=g=>n.value=g),onBlur:p[1]||(p[1]=g=>i.value=!0),class:gt({"input-error":a.value&&i.value})},null,34),[[Wr,n.value]]),a.value&&i.value?(X(),z("p",v_,q(a.value),1)):$e("",!0)]),C("div",b_,[C("label",y_,q(D(t)("inputs.password")),1),tn(C("input",{id:"password",type:s.value?"text":"password","onUpdate:modelValue":p[2]||(p[2]=g=>r.value=g),onBlur:p[3]||(p[3]=g=>o.value=!0),class:gt({"input-error":c.value&&o.value})},null,42,w_),[[js,r.value]]),c.value&&o.value?(X(),z("p",E_,q(c.value),1)):$e("",!0)]),C("div",S_,[C("div",T_,[C("label",C_,q(D(t)("inputs.showPassword")),1),tn(C("input",{id:"show-password",type:"checkbox","onUpdate:modelValue":p[4]||(p[4]=g=>s.value=g)},null,512),[[Br,s.value]])])]),C("div",I_,[C("button",R_,q(D(t)("inputs.loginBtn")),1)])],32),Z(Sc,{show:l.value,duration:1e3,onClose:p[5]||(p[5]=g=>l.value=!1)},{default:Je(()=>[C("h3",null,"✅ "+q(D(t)("inputs.success")),1)]),_:1},8,["show"])]))}},A_=qe(L_,[["__scopeId","data-v-b5e05534"]]),x_={class:"basic"},O_={class:"title-small"},P_={class:"basic__wrapper"},N_={class:"basic__button-wrapper"},k_={class:"basic__name"},M_={key:0,class:"error"},F_=2*1024*1024,D_={__name:"basic",setup(e){const{t}=Ue(),n=re(null),r=re(""),s=["image/jpeg","image/png","image/gif","image/webp"];function i(o){const l=o.target.files[0];if(r.value="",n.value=null,!!l){if(!s.includes(l.type)){r.value=t("inputs.file.errors.type"),o.target.value="";return}if(l.size>F_){r.value=t("inputs.file.errors.size"),o.target.value="";return}n.value=l}}return(o,l)=>(X(),z("div",x_,[C("h4",O_,[l[1]||(l[1]=C("span",null,"*",-1)),Ce(q(D(t)("inputs.file.basic")),1)]),C("div",P_,[C("div",N_,[C("button",{type:"button",class:"button-green",onClick:l[0]||(l[0]=a=>o.$refs.input.click())},q(D(t)("inputs.file.label")),1),C("input",{ref:"input",type:"file",class:"basic__input",accept:".jpg,.png,.gif,.webp",onChange:i},null,544)]),C("p",k_,q(n.value?n.value.name:D(t)("inputs.file.placeholder")),1),r.value?(X(),z("p",M_,q(r.value),1)):$e("",!0)])]))}},$_=qe(D_,[["__scopeId","data-v-966cb187"]]),U_={class:"preview"},V_={class:"title-small"},j_={class:"preview__wrapper"},H_={class:"preview__button-wrapper"},W_={class:"preview__name"},B_={key:0,class:"error"},G_={key:1,class:"preview__preview"},K_=["src"],q_=2*1024*1024,Y_={__name:"preview",setup(e){const{t}=Ue(),n=re(null),r=re(null),s=re(""),i=["image/jpeg","image/png","image/gif","image/webp"];function o(l){const a=l.target.files[0];if(s.value="",n.value=null,r.value=null,!a)return;if(!i.includes(a.type)){s.value=t("inputs.file.errors.type"),l.target.value="";return}if(a.size>q_){s.value=t("inputs.file.errors.size"),l.target.value="";return}n.value=a;const c=new FileReader;c.onload=u=>{r.value=u.target.result},c.onerror=()=>{s.value=t("inputs.file.errors.read")},c.readAsDataURL(a)}return(l,a)=>(X(),z("div",U_,[C("h4",V_,[a[1]||(a[1]=C("span",null,"*",-1)),Ce(q(D(t)("inputs.file.preview")),1)]),C("div",j_,[C("div",H_,[C("button",{type:"button",class:"button-green",onClick:a[0]||(a[0]=c=>l.$refs.input.click())},q(D(t)("inputs.file.label")),1),C("input",{ref:"input",type:"file",class:"preview__input",accept:".jpg,.png,.gif,.webp",onChange:o},null,544)]),C("p",W_,q(n.value?n.value.name:D(t)("inputs.file.placeholder")),1),s.value?(X(),z("p",B_,q(s.value),1)):$e("",!0),r.value?(X(),z("div",G_,[C("img",{src:r.value,alt:"preview"},null,8,K_)])):$e("",!0)])]))}},X_=qe(Y_,[["__scopeId","data-v-0f54ff4a"]]),z_={class:"multiple"},J_={class:"title-small"},Z_={class:"multiple__wrapper"},Q_={class:"multiple__button-wrapper"},ev={key:0,class:"multiple__names"},tv={key:1,class:"multiple__name"},nv={key:2,class:"error"},rv={key:3,class:"multiple__preview"},sv=["src"],iv=2*1024*1024,ov={__name:"multiple",setup(e){const{t}=Ue(),n=re([]),r=re([]),s=re(""),i=["image/jpeg","image/png","image/gif","image/webp"];function o(l){const a=Array.from(l.target.files);if(s.value="",n.value=[],r.value=[],!!a.length){for(const c of a){if(!i.includes(c.type)){s.value=t("inputs.file.errors.type");continue}if(c.size>iv){s.value=t("inputs.file.errors.size");continue}n.value.push(c);const u=new FileReader;u.onload=f=>{r.value.push(f.target.result)},u.onerror=()=>{s.value=t("inputs.file.errors.read")},u.readAsDataURL(c)}l.target.value=""}}return(l,a)=>(X(),z("div",z_,[C("h4",J_,[a[1]||(a[1]=C("span",null,"*",-1)),Ce(q(D(t)("inputs.file.multiple")),1)]),C("div",Z_,[C("div",Q_,[C("button",{type:"button",class:"button-green",onClick:a[0]||(a[0]=c=>l.$refs.input.click())},q(D(t)("inputs.file.label")),1),C("input",{ref:"input",type:"file",class:"multiple__input",accept:".jpg,.png,.gif,.webp",multiple:"",onChange:o},null,544)]),n.value.length?(X(),z("div",ev,[(X(!0),z(Ae,null,ir(n.value,(c,u)=>(X(),z("p",{key:u,class:"multiple__name"},q(c.name),1))),128))])):(X(),z("p",tv,q(D(t)("inputs.file.placeholder")),1)),s.value?(X(),z("p",nv,q(s.value),1)):$e("",!0),r.value.length?(X(),z("div",rv,[(X(!0),z(Ae,null,ir(r.value,(c,u)=>(X(),z("img",{key:u,src:c,alt:"preview"},null,8,sv))),128))])):$e("",!0)])]))}},lv=qe(ov,[["__scopeId","data-v-f135813b"]]),av={class:"multiple"},cv={class:"title-small"},uv={class:"multiple__wrapper"},fv={class:"multiple__button-wrapper"},dv={key:0,class:"multiple__names"},pv={key:1,class:"multiple__name"},mv={key:2,class:"error"},hv={key:3,class:"multiple__preview"},gv=["src"],_v=["onClick"],vv=2*1024*1024,bv={__name:"cancelFile",setup(e){const{t}=Ue(),n=re([]),r=re([]),s=re(""),i=["image/jpeg","image/png","image/gif","image/webp"];function o(a){const c=Array.from(a.target.files);if(s.value="",n.value=[],r.value=[],!!c.length){for(const u of c){if(!i.includes(u.type)){s.value=t("inputs.file.errors.type");continue}if(u.size>vv){s.value=t("inputs.file.errors.size");continue}n.value.push(u);const f=new FileReader;f.onload=p=>{r.value.push(p.target.result)},f.onerror=()=>{s.value=t("inputs.file.errors.read")},f.readAsDataURL(u)}a.target.value=""}}function l(a){n.value.splice(a,1),r.value.splice(a,1)}return(a,c)=>(X(),z("div",av,[C("h4",cv,[c[1]||(c[1]=C("span",null,"*",-1)),Ce(q(D(t)("inputs.file.multiplePreviewRemove")),1)]),C("div",uv,[C("div",fv,[C("button",{type:"button",class:"button-green",onClick:c[0]||(c[0]=u=>a.$refs.input.click())},q(D(t)("inputs.file.label")),1),C("input",{ref:"input",type:"file",class:"multiple__input",accept:".jpg,.png,.gif,.webp",multiple:"",onChange:o},null,544)]),n.value.length?(X(),z("div",dv,[(X(!0),z(Ae,null,ir(n.value,(u,f)=>(X(),z("p",{key:f,class:"multiple__name"},q(u.name),1))),128))])):(X(),z("p",pv,q(D(t)("inputs.file.placeholder")),1)),s.value?(X(),z("p",mv,q(s.value),1)):$e("",!0),r.value.length?(X(),z("div",hv,[(X(!0),z(Ae,null,ir(r.value,(u,f)=>(X(),z("div",{key:f,class:"multiple__preview-item"},[C("img",{src:u,alt:"preview"},null,8,gv),C("button",{type:"button",class:"multiple__remove",onClick:p=>l(f)}," ✕ ",8,_v)]))),128))])):$e("",!0)])]))}},yv=qe(bv,[["__scopeId","data-v-390019a4"]]),wv=`<script setup>\r
import { ref } from "vue";\r
import { useI18n } from "vue-i18n";\r
\r
const { t } = useI18n();\r
\r
const file = ref(null);\r
const error = ref("");\r
\r
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];\r
const maxSize = 2 * 1024 * 1024; // 2MB\r
\r
function onChange(event) {\r
  const selectedFile = event.target.files[0];\r
  error.value = "";\r
  file.value = null;\r
\r
  if (!selectedFile) return;\r
\r
  if (!allowedTypes.includes(selectedFile.type)) {\r
    error.value = t("inputs.file.errors.type");\r
    event.target.value = "";\r
    return;\r
  }\r
\r
  if (selectedFile.size > maxSize) {\r
    error.value = t("inputs.file.errors.size");\r
    event.target.value = "";\r
    return;\r
  }\r
\r
  file.value = selectedFile;\r
}\r
<\/script>\r
\r
<template>\r
  <div class="basic">\r
    <!-- кастомная кнопка -->\r
    <h4 class="title-small"><span>*</span>{{ t("inputs.file.basic") }}</h4>\r
    <div class="basic__wrapper">\r
      <div class="basic__button-wrapper">\r
        <button type="button" class="button-green" @click="$refs.input.click()">\r
          {{ t("inputs.file.label") }}\r
        </button>\r
\r
        <!-- скрытый нативный input -->\r
        <input\r
          ref="input"\r
          type="file"\r
          class="basic__input"\r
          accept=".jpg,.png,.gif,.webp"\r
          @change="onChange"\r
        />\r
      </div>\r
\r
      <!-- имя файла или placeholder -->\r
      <p class="basic__name">\r
        {{ file ? file.name : t("inputs.file.placeholder") }}\r
      </p>\r
\r
      <!-- ошибки -->\r
      <p v-if="error" class="error">\r
        {{ error }}\r
      </p>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.basic {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: rem(30);\r
  padding-bottom: rem(25);\r
  &__button-wrapper {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    position: relative;\r
  }\r
\r
  &__input {\r
    display: none;\r
  }\r
\r
  &__name {\r
    margin-top: rem(10);\r
  }\r
}\r
</style>\r
`,Ev=`<script setup>\r
import { ref } from "vue";\r
import { useI18n } from "vue-i18n";\r
\r
const { t } = useI18n();\r
\r
const file = ref(null);\r
const preview = ref(null);\r
const error = ref("");\r
\r
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];\r
const maxSize = 2 * 1024 * 1024; // 2MB\r
\r
function onChange(event) {\r
  const selectedFile = event.target.files[0];\r
  error.value = "";\r
  file.value = null;\r
  preview.value = null;\r
\r
  if (!selectedFile) return;\r
\r
  if (!allowedTypes.includes(selectedFile.type)) {\r
    error.value = t("inputs.file.errors.type");\r
    event.target.value = "";\r
    return;\r
  }\r
\r
  if (selectedFile.size > maxSize) {\r
    error.value = t("inputs.file.errors.size");\r
    event.target.value = "";\r
    return;\r
  }\r
\r
  file.value = selectedFile;\r
\r
  // создаём preview\r
  const reader = new FileReader();\r
  reader.onload = (e) => {\r
    preview.value = e.target.result;\r
  };\r
  reader.onerror = () => {\r
    error.value = t("inputs.file.errors.read");\r
  };\r
  reader.readAsDataURL(selectedFile);\r
}\r
<\/script>\r
\r
<template>\r
  <div class="preview">\r
    <!-- Заголовок -->\r
    <h4 class="title-small"><span>*</span>{{ t("inputs.file.preview") }}</h4>\r
\r
    <!-- Кнопка выбора файла -->\r
    <div class="preview__wrapper">\r
      <div class="preview__button-wrapper">\r
        <button type="button" class="button-green" @click="$refs.input.click()">\r
          {{ t("inputs.file.label") }}\r
        </button>\r
\r
        <input\r
          ref="input"\r
          type="file"\r
          class="preview__input"\r
          accept=".jpg,.png,.gif,.webp"\r
          @change="onChange"\r
        />\r
      </div>\r
\r
      <!-- Имя файла или placeholder -->\r
      <p class="preview__name">\r
        {{ file ? file.name : t("inputs.file.placeholder") }}\r
      </p>\r
\r
      <!-- Ошибки -->\r
      <p v-if="error" class="error">\r
        {{ error }}\r
      </p>\r
\r
      <!-- Preview изображения -->\r
      <div v-if="preview" class="preview__preview">\r
        <img :src="preview" alt="preview" />\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.preview {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: rem(30);\r
  margin-bottom: rem(25);\r
  &__wrapper {\r
    display: flex;\r
    align-items: center;\r
    flex-direction: column;\r
  }\r
  &__button-wrapper {\r
    display: inline-block;\r
    position: relative;\r
  }\r
\r
  &__input {\r
    display: none;\r
  }\r
\r
  &__name {\r
    margin-top: rem(10);\r
  }\r
\r
  &__preview {\r
    margin-top: rem(15);\r
\r
    img {\r
      max-width: rem(200);\r
      max-height: rem(200);\r
      border-radius: rem(5);\r
      border: 1px solid #ccc;\r
    }\r
  }\r
}\r
</style>\r
`,Sv=`<script setup>\r
import { ref } from "vue";\r
import { useI18n } from "vue-i18n";\r
\r
const { t } = useI18n();\r
\r
const files = ref([]); // массив выбранных файлов\r
const previews = ref([]); // массив DataURL для preview\r
const error = ref("");\r
\r
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];\r
const maxSize = 2 * 1024 * 1024; // 2MB\r
\r
function onChange(event) {\r
  const selectedFiles = Array.from(event.target.files);\r
  error.value = "";\r
  files.value = [];\r
  previews.value = [];\r
\r
  if (!selectedFiles.length) return;\r
\r
  for (const file of selectedFiles) {\r
    if (!allowedTypes.includes(file.type)) {\r
      error.value = t("inputs.file.errors.type");\r
      continue; // пропускаем этот файл\r
    }\r
\r
    if (file.size > maxSize) {\r
      error.value = t("inputs.file.errors.size");\r
      continue;\r
    }\r
\r
    files.value.push(file);\r
\r
    const reader = new FileReader();\r
    reader.onload = (e) => {\r
      previews.value.push(e.target.result);\r
    };\r
    reader.onerror = () => {\r
      error.value = t("inputs.file.errors.read");\r
    };\r
    reader.readAsDataURL(file);\r
  }\r
\r
  event.target.value = ""; // сброс input для выбора новых файлов\r
}\r
<\/script>\r
\r
<template>\r
  <div class="multiple">\r
    <!-- Заголовок -->\r
    <h4 class="title-small"><span>*</span>{{ t("inputs.file.multiple") }}</h4>\r
\r
    <!-- Кнопка выбора файлов -->\r
    <div class="multiple__wrapper">\r
      <div class="multiple__button-wrapper">\r
        <button type="button" class="button-green" @click="$refs.input.click()">\r
          {{ t("inputs.file.label") }}\r
        </button>\r
\r
        <!-- скрытый input -->\r
        <input\r
          ref="input"\r
          type="file"\r
          class="multiple__input"\r
          accept=".jpg,.png,.gif,.webp"\r
          multiple\r
          @change="onChange"\r
        />\r
      </div>\r
\r
      <!-- список выбранных файлов -->\r
      <div class="multiple__names" v-if="files.length">\r
        <p v-for="(f, index) in files" :key="index" class="multiple__name">\r
          {{ f.name }}\r
        </p>\r
      </div>\r
\r
      <!-- placeholder если нет файлов -->\r
      <p v-else class="multiple__name">\r
        {{ t("inputs.file.placeholder") }}\r
      </p>\r
\r
      <!-- ошибки -->\r
      <p v-if="error" class="error">\r
        {{ error }}\r
      </p>\r
\r
      <!-- preview -->\r
      <div class="multiple__preview" v-if="previews.length">\r
        <img\r
          v-for="(src, index) in previews"\r
          :key="index"\r
          :src="src"\r
          alt="preview"\r
        />\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.multiple {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: rem(30);\r
  margin-bottom: rem(25);\r
  &__wrapper {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
  }\r
\r
  &__button-wrapper {\r
    display: inline-block;\r
    position: relative;\r
  }\r
\r
  &__input {\r
    display: none;\r
  }\r
\r
  &__names {\r
    margin-top: rem(5);\r
    display: flex;\r
    flex-direction: column;\r
    gap: rem(5);\r
  }\r
\r
  &__name {\r
    margin-top: rem(5);\r
  }\r
\r
  &__preview {\r
    margin-top: rem(15);\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    flex-wrap: wrap;\r
    gap: rem(10);\r
\r
    img {\r
      width: rem(200);\r
      height: rem(200);\r
      object-fit: cover;\r
      border-radius: rem(5);\r
      border: rem(1) solid #ccc;\r
    }\r
  }\r
}\r
</style>\r
`,Tv=`<script setup>\r
import { ref } from "vue";\r
import { useI18n } from "vue-i18n";\r
\r
const { t } = useI18n();\r
\r
const files = ref([]); // массив выбранных файлов\r
const previews = ref([]); // массив DataURL для preview\r
const error = ref("");\r
\r
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];\r
const maxSize = 2 * 1024 * 1024; // 2MB\r
\r
function onChange(event) {\r
  const selectedFiles = Array.from(event.target.files);\r
  error.value = "";\r
  files.value = [];\r
  previews.value = [];\r
\r
  if (!selectedFiles.length) return;\r
\r
  for (const file of selectedFiles) {\r
    if (!allowedTypes.includes(file.type)) {\r
      error.value = t("inputs.file.errors.type");\r
      continue; // пропускаем этот файл\r
    }\r
\r
    if (file.size > maxSize) {\r
      error.value = t("inputs.file.errors.size");\r
      continue;\r
    }\r
\r
    files.value.push(file);\r
\r
    const reader = new FileReader();\r
    reader.onload = (e) => {\r
      previews.value.push(e.target.result);\r
    };\r
    reader.onerror = () => {\r
      error.value = t("inputs.file.errors.read");\r
    };\r
    reader.readAsDataURL(file);\r
  }\r
\r
  event.target.value = ""; // сброс input для выбора новых файлов\r
}\r
\r
function removeFile(index) {\r
  files.value.splice(index, 1);\r
  previews.value.splice(index, 1);\r
}\r
<\/script>\r
\r
<template>\r
  <div class="multiple">\r
    <!-- Заголовок -->\r
    <h4 class="title-small">\r
      <span>*</span>{{ t("inputs.file.multiplePreviewRemove") }}\r
    </h4>\r
\r
    <!-- Кнопка выбора файлов -->\r
    <div class="multiple__wrapper">\r
      <div class="multiple__button-wrapper">\r
        <button type="button" class="button-green" @click="$refs.input.click()">\r
          {{ t("inputs.file.label") }}\r
        </button>\r
\r
        <!-- скрытый input -->\r
        <input\r
          ref="input"\r
          type="file"\r
          class="multiple__input"\r
          accept=".jpg,.png,.gif,.webp"\r
          multiple\r
          @change="onChange"\r
        />\r
      </div>\r
\r
      <!-- список выбранных файлов -->\r
      <div class="multiple__names" v-if="files.length">\r
        <p v-for="(f, index) in files" :key="index" class="multiple__name">\r
          {{ f.name }}\r
        </p>\r
      </div>\r
\r
      <!-- placeholder если нет файлов -->\r
      <p v-else class="multiple__name">\r
        {{ t("inputs.file.placeholder") }}\r
      </p>\r
\r
      <!-- ошибки -->\r
      <p v-if="error" class="error">\r
        {{ error }}\r
      </p>\r
\r
      <!-- preview -->\r
      <div class="multiple__preview" v-if="previews.length">\r
        <div\r
          v-for="(src, index) in previews"\r
          :key="index"\r
          class="multiple__preview-item"\r
        >\r
          <img :src="src" alt="preview" />\r
\r
          <button\r
            type="button"\r
            class="multiple__remove"\r
            @click="removeFile(index)"\r
          >\r
            ✕\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.multiple {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: rem(30);\r
  margin-bottom: rem(25);\r
  &__wrapper {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
  }\r
\r
  &__button-wrapper {\r
    display: inline-block;\r
    position: relative;\r
  }\r
\r
  &__input {\r
    display: none;\r
  }\r
\r
  &__names {\r
    margin-top: rem(5);\r
    display: flex;\r
    flex-direction: column;\r
    gap: rem(5);\r
  }\r
\r
  &__name {\r
    margin-top: rem(5);\r
  }\r
\r
  &__preview {\r
    margin-top: rem(15);\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    flex-wrap: wrap;\r
    gap: rem(10);\r
\r
    img {\r
      width: rem(200);\r
      height: rem(200);\r
      object-fit: cover;\r
      border-radius: rem(5);\r
      border: rem(1) solid #ccc;\r
    }\r
  }\r
\r
  &__preview-item {\r
    position: relative;\r
  }\r
\r
  &__remove {\r
    position: absolute;\r
    top: rem(5);\r
    right: rem(5);\r
    width: rem(24);\r
    height: rem(24);\r
    border-radius: 50%;\r
    border: none;\r
    background: rgba(0, 0, 0, 0.6);\r
    color: white;\r
    cursor: pointer;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    font-size: rem(14);\r
    line-height: 1;\r
\r
    &:hover {\r
      background: rgba(0, 0, 0, 0.8);\r
    }\r
  }\r
}\r
</style>\r
`,Cv={class:"inputs__file inputs-file"},Iv={class:"inputs-file__title"},Rv={class:"title"},Lv={class:"inputs-file__items"},Av={class:"inputs-file__item"},xv={class:"inputs-file__item"},Ov={class:"inputs-file__item"},Pv={class:"inputs-file__item"},Nv={__name:"FileInput",setup(e){const{t}=Ue();return(n,r)=>(X(),z("section",Cv,[C("div",Iv,[C("h3",Rv,[r[0]||(r[0]=C("span",{class:"red"},"#",-1)),Ce(q(D(t)("inputs.inputFile")),1)])]),C("div",Lv,[C("div",Av,[Z($_),Z(Ot,{code:D(wv),filename:"basic.vue"},null,8,["code"])]),C("div",xv,[Z(X_),Z(Ot,{code:D(Ev),filename:"preview.vue"},null,8,["code"])]),C("div",Ov,[Z(lv),Z(Ot,{code:D(Sv),filename:"multiple.vue"},null,8,["code"])]),C("div",Pv,[Z(yv),Z(Ot,{code:D(Tv),filename:"previewWithRemove.vue"},null,8,["code"])])])]))}},kv=qe(Nv,[["__scopeId","data-v-2648e6e5"]]),Mv=`<script setup>\r
import { ref, computed } from "vue";\r
import { useI18n } from "vue-i18n";\r
import Modal from "./Modal.vue";\r
\r
const { t } = useI18n();\r
\r
const modalOpen = ref(false);\r
\r
// Поля формы\r
const email = ref("");\r
const password = ref("");\r
const confirmPassword = ref("");\r
const termsChecked = ref(false);\r
const showTermsError = ref(false);\r
const showPassword = ref(false);\r
\r
// Параметры пароля\r
const passwordTouched = ref(false);\r
const confirmPasswordTouched = ref(false);\r
const PASSWORD_MIN = 6;\r
const PASSWORD_MAX = 12;\r
\r
// touched для email\r
const emailTouched = ref(false);\r
\r
// Валидация email\r
const emailError = computed(() => {\r
  if (!email.value) return t("inputs.emailRequired");\r
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r
  return pattern.test(email.value) ? "" : t("inputs.emailInvalid");\r
});\r
\r
// Валидация пароля\r
\r
const passwordError = computed(() => {\r
  if (!password.value && passwordTouched.value)\r
    return t("inputs.passwordRequired");\r
\r
  const pattern = /^[A-Za-z0-9]+$/;\r
  if (!pattern.test(password.value) && passwordTouched.value)\r
    return t("inputs.passwordPattern");\r
\r
  if (password.value.length < PASSWORD_MIN && passwordTouched.value)\r
    return t("inputs.passwordMin", { min: PASSWORD_MIN });\r
\r
  if (password.value.length > PASSWORD_MAX && passwordTouched.value)\r
    return t("inputs.passwordMax", { max: PASSWORD_MAX });\r
\r
  return "";\r
});\r
\r
const confirmPasswordError = computed(() => {\r
  if (!confirmPasswordTouched.value) return "";\r
\r
  if (!confirmPassword.value) return t("inputs.passwordRequired");\r
\r
  if (password.value !== confirmPassword.value)\r
    return t("inputs.passwordMismatch");\r
\r
  return "";\r
});\r
\r
const onSubmit = (e) => {\r
  e.preventDefault();\r
\r
  // Отмечаем все поля как touched\r
  emailTouched.value = true;\r
  passwordTouched.value = true;\r
  confirmPasswordTouched.value = true;\r
\r
  // проверяем галочку\r
  if (!termsChecked.value) {\r
    showTermsError.value = true;\r
  } else {\r
    showTermsError.value = false;\r
  }\r
\r
  const isValid =\r
    !emailError.value &&\r
    !passwordError.value &&\r
    !confirmPasswordError.value &&\r
    termsChecked.value;\r
\r
  if (isValid) {\r
    modalOpen.value = true;\r
\r
    // --- СБРОС ПОЛЕЙ ---\r
    email.value = "";\r
    password.value = "";\r
    confirmPassword.value = "";\r
    termsChecked.value = false;\r
    showPassword.value = false;\r
\r
    // сброс touched\r
    emailTouched.value = false;\r
    passwordTouched.value = false;\r
    confirmPasswordTouched.value = false;\r
    showTermsError.value = false;\r
  }\r
};\r
<\/script>\r
\r
<template>\r
  <section class="inputs__registration inputs-registration">\r
    <div class="inputs-registration__title">\r
      <h3 class="title">\r
        <span class="red">#</span>{{ t("inputs.registration") }}\r
      </h3>\r
    </div>\r
    <form\r
      class="inputs-registration__form inputs-registration-form"\r
      @submit="onSubmit"\r
    >\r
      <!-- Email -->\r
      <div class="inputs-registration-form__field">\r
        <label for="email">{{ t("inputs.email") }}</label>\r
        <input\r
          id="email"\r
          type="email"\r
          :class="{ 'input-error': emailError && emailTouched }"\r
          v-model="email"\r
          @blur="emailTouched = true"\r
        />\r
        <!-- сообщение об ошибке -->\r
        <p v-if="emailTouched && emailError" class="error">\r
          {{ emailError }}\r
        </p>\r
      </div>\r
\r
      <!-- Password -->\r
      <div class="inputs-registration-form__field">\r
        <label for="password">{{ t("inputs.password") }}</label>\r
        <input\r
          id="password"\r
          :type="showPassword ? 'text' : 'password'"\r
          :class="{ 'input-error': passwordError && passwordTouched }"\r
          v-model="password"\r
          @blur="passwordTouched = true"\r
        />\r
        <p v-if="passwordError && passwordTouched" class="error">\r
          {{ passwordError }}\r
        </p>\r
      </div>\r
\r
      <!-- Confirm Password -->\r
      <div class="inputs-registration-form__field">\r
        <label for="confirm-password">{{ t("inputs.confPassword") }}</label>\r
        <input\r
          id="confirm-password"\r
          :type="showPassword ? 'text' : 'password'"\r
          :class="{\r
            'input-error': confirmPasswordError && confirmPasswordTouched,\r
          }"\r
          v-model="confirmPassword"\r
          @blur="confirmPasswordTouched = true"\r
        />\r
        <p v-if="confirmPasswordError && confirmPasswordTouched" class="error">\r
          {{ confirmPasswordError }}\r
        </p>\r
      </div>\r
\r
      <!-- Show password -->\r
      <div class="inputs-registration-form__field-inline">\r
        <div class="inputs-registration-form__field-inline_wrapper">\r
          <label for="show-password">{{ t("inputs.showPassword") }}</label>\r
          <input id="show-password" type="checkbox" v-model="showPassword" />\r
        </div>\r
      </div>\r
\r
      <!-- Terms -->\r
      <div class="inputs-registration-form__field-inline">\r
        <div class="inputs-registration-form__field-inline_wrapper">\r
          <label for="terms">{{ t("inputs.agree") }}</label>\r
          <input id="terms" type="checkbox" v-model="termsChecked" />\r
        </div>\r
\r
        <p v-if="showTermsError" class="error">\r
          {{ t("inputs.agreeRequired") }}\r
        </p>\r
      </div>\r
\r
      <!-- Submit -->\r
      <div class="inputs-registration-form__button">\r
        <button type="submit">\r
          {{ t("inputs.register") }}\r
        </button>\r
      </div>\r
    </form>\r
\r
    <Modal :show="modalOpen" :duration="1000" @close="modalOpen = false">\r
      <h3>✅ {{ t("inputs.success") }}</h3>\r
    </Modal>\r
  </section>\r
</template>\r
<style lang="scss" scoped>\r
.inputs-registration-form {\r
  background-color: #c0f3f7;\r
  padding: rem(20) rem(20);\r
  border-radius: rem(10);\r
  display: flex;\r
  flex-direction: column;\r
  gap: rem(20);\r
  max-width: rem(700);\r
  margin: rem(50) auto rem(25) auto;\r
  box-shadow: 0 4px 10px rgba(192, 243, 247, 0.6);\r
  transition: box-shadow 0.3s ease;\r
\r
  &__field {\r
    display: flex;\r
    flex-direction: column;\r
    gap: rem(10);\r
    & input {\r
      border-radius: rem(5);\r
      padding: rem(5) rem(10);\r
      font-size: rem(20);\r
      background-color: #ffffff;\r
      border: 1px solid rgba(0, 0, 0, 0.15);\r
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);\r
      transition:\r
        border 0.2s ease,\r
        box-shadow 0.2s ease,\r
        background-color 0.2s ease;\r
\r
      &:hover {\r
        border-color: rgba(0, 0, 0, 0.25);\r
        background-color: #fdfdfd;\r
      }\r
\r
      &:focus {\r
        outline: none;\r
        border-color: $main-color;\r
        box-shadow: 0 0 0 3px rgba($main-color, 0.2);\r
        background-color: #ffffff;\r
      }\r
    }\r
    .input-error {\r
      border-color: red;\r
    }\r
  }\r
\r
  &__field-inline {\r
    display: flex;\r
    flex-direction: column;\r
    &_wrapper {\r
      display: flex;\r
      align-items: center;\r
      justify-content: space-between;\r
      max-width: rem(190);\r
    }\r
    & input,\r
    label {\r
      cursor: pointer;\r
    }\r
  }\r
  &__button {\r
    display: flex;\r
    justify-content: center;\r
    & button {\r
      color: $main-color;\r
      background-color: white;\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      padding: rem(5) rem(10);\r
      border-radius: rem(5);\r
      font-size: rem(20);\r
      font-weight: 500;\r
      transition:\r
        all 0.3s ease,\r
        transform 0.2s ease;\r
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r
\r
      &:hover {\r
        color: black;\r
        transform: translateY(-2px);\r
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\r
      }\r
\r
      &:active {\r
        transform: translateY(0);\r
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r
      }\r
\r
      &:focus {\r
        outline: none;\r
        box-shadow: 0 0 0 3px rgba($main-color, 0.3);\r
      }\r
    }\r
  }\r
}\r
</style>\r
`,Fv=`<script setup>\r
import { ref, computed } from "vue";\r
import { useI18n } from "vue-i18n";\r
import Modal from "./Modal.vue";\r
\r
const { t } = useI18n();\r
\r
const email = ref("");\r
const password = ref("");\r
const showPassword = ref(false);\r
\r
const emailTouched = ref(false);\r
const passwordTouched = ref(false);\r
\r
const modalOpen = ref(false);\r
\r
// Email\r
const emailError = computed(() => {\r
  if (!email.value) return t("inputs.required");\r
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r
  return re.test(email.value) ? "" : t("inputs.emailInvalid");\r
});\r
\r
// Password\r
const passwordError = computed(() => {\r
  if (!password.value) return t("inputs.required");\r
  if (password.value.length < 6) return t("inputs.passwordMin");\r
  return "";\r
});\r
\r
const submitForm = () => {\r
  emailTouched.value = true;\r
  passwordTouched.value = true;\r
\r
  const isValid = !emailError.value && !passwordError.value;\r
\r
  if (isValid) {\r
    modalOpen.value = true;\r
\r
    // сброс формы\r
    email.value = "";\r
    password.value = "";\r
    showPassword.value = false;\r
\r
    // сброс touched\r
    emailTouched.value = false;\r
    passwordTouched.value = false;\r
  }\r
};\r
<\/script>\r
\r
<template>\r
  <section class="inputs__login inputs-login">\r
    <div class="inputs-login__title">\r
      <h3 class="title"><span class="red">#</span>{{ t("inputs.login") }}</h3>\r
    </div>\r
    <form\r
      class="inputs-login__form inputs-login-form"\r
      @submit.prevent="submitForm"\r
    >\r
      <!-- Email -->\r
      <div class="inputs-login-form__field">\r
        <label for="email">{{ t("inputs.email") }}</label>\r
        <input\r
          id="email"\r
          type="email"\r
          v-model="email"\r
          @blur="emailTouched = true"\r
          :class="{ 'input-error': emailError && emailTouched }"\r
        />\r
\r
        <!-- сообщение об ошибке -->\r
        <p v-if="emailError && emailTouched" class="error">\r
          {{ emailError }}\r
        </p>\r
      </div>\r
\r
      <!-- Password -->\r
      <div class="inputs-login-form__field">\r
        <label for="password">{{ t("inputs.password") }}</label>\r
        <input\r
          id="password"\r
          :type="showPassword ? 'text' : 'password'"\r
          v-model="password"\r
          @blur="passwordTouched = true"\r
          :class="{ 'input-error': passwordError && passwordTouched }"\r
        />\r
\r
        <!-- сообщение об ошибке -->\r
        <p v-if="passwordError && passwordTouched" class="error">\r
          {{ passwordError }}\r
        </p>\r
      </div>\r
\r
      <!-- Show password -->\r
      <div class="inputs-login-form__field-inline">\r
        <div class="inputs-login-form__field-inline_wrapper">\r
          <label for="show-password">{{ t("inputs.showPassword") }}</label>\r
          <input id="show-password" type="checkbox" v-model="showPassword" />\r
        </div>\r
      </div>\r
\r
      <!-- Submit -->\r
      <div class="inputs-login-form__button">\r
        <button type="submit">\r
          {{ t("inputs.loginBtn") }}\r
        </button>\r
      </div>\r
    </form>\r
    <Modal :show="modalOpen" :duration="1000" @close="modalOpen = false">\r
      <h3>✅ {{ t("inputs.success") }}</h3>\r
    </Modal>\r
  </section>\r
</template>\r
<style lang="scss" scoped>\r
.inputs-login-form {\r
  background-color: #c0f3f7;\r
  padding: rem(20) rem(20);\r
  border-radius: rem(10);\r
  display: flex;\r
  flex-direction: column;\r
  gap: rem(20);\r
  max-width: rem(700);\r
  margin: rem(50) auto rem(25) auto;\r
  box-shadow: 0 4px 10px rgba(192, 243, 247, 0.6);\r
  transition: box-shadow 0.3s ease;\r
\r
  &__field {\r
    display: flex;\r
    flex-direction: column;\r
    gap: rem(10);\r
    & input {\r
      border-radius: rem(5);\r
      padding: rem(5) rem(10);\r
      font-size: rem(20);\r
      background-color: #ffffff;\r
      border: 1px solid rgba(0, 0, 0, 0.15);\r
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);\r
      transition:\r
        border 0.2s ease,\r
        box-shadow 0.2s ease,\r
        background-color 0.2s ease;\r
\r
      &:hover {\r
        border-color: rgba(0, 0, 0, 0.25);\r
        background-color: #fdfdfd;\r
      }\r
\r
      &:focus {\r
        outline: none;\r
        border-color: $main-color;\r
        box-shadow: 0 0 0 3px rgba($main-color, 0.2);\r
        background-color: #ffffff;\r
      }\r
    }\r
    .input-error {\r
      border-color: red;\r
    }\r
  }\r
\r
  &__field-inline {\r
    display: flex;\r
    flex-direction: column;\r
    &_wrapper {\r
      display: flex;\r
      align-items: center;\r
      justify-content: space-between;\r
      max-width: rem(190);\r
    }\r
    & input,\r
    label {\r
      cursor: pointer;\r
    }\r
  }\r
  &__button {\r
    display: flex;\r
    justify-content: center;\r
    & button {\r
      color: $main-color;\r
      background-color: white;\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      padding: rem(5) rem(10);\r
      border-radius: rem(5);\r
      font-size: rem(20);\r
      font-weight: 500;\r
      transition:\r
        all 0.3s ease,\r
        transform 0.2s ease;\r
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r
\r
      &:hover {\r
        color: black;\r
        transform: translateY(-2px);\r
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\r
      }\r
\r
      &:active {\r
        transform: translateY(0);\r
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r
      }\r
\r
      &:focus {\r
        outline: none;\r
        box-shadow: 0 0 0 3px rgba($main-color, 0.3);\r
      }\r
    }\r
  }\r
}\r
</style>\r
`,Dv={class:"inputs"},$v={class:"title inputs__title"},Uv={class:"inputs__item"},Vv={class:"inputs__item"},jv={__name:"Inputs",setup(e){const{t}=Ue();return(n,r)=>(X(),z("div",Dv,[C("h2",$v,[r[0]||(r[0]=C("span",{class:"red"},"/",-1)),Ce(q(D(t)("inputs.title")),1)]),C("div",Uv,[Z(d_),Z(Ot,{code:D(Mv),filename:"Registration.vue"},null,8,["code"])]),C("div",Vv,[Z(A_),Z(Ot,{code:D(Fv),filename:"Login.vue"},null,8,["code"])]),Z(kv)]))}},Hv=qe(jv,[["__scopeId","data-v-4063c776"]]),Wv=[{path:"/:lang(en|ru)",component:Pi,children:[{path:"",name:"home",component:mg},{path:"integrations",name:"integrations",component:Cg},{path:"slider",name:"slider",component:$g},{path:"inputs",name:"inputs",component:Hv}]},{path:"/",redirect:"/en"}],Bv=ih({history:Um("/vue-helper/"),routes:Wv}),ki=Jf(Uh);ki.use(Bv);ki.use(tm);ki.mount("#app");
