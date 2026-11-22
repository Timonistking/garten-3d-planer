var Ad=Object.defineProperty;var Rd=(i,e,t)=>e in i?Ad(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ri=(i,e,t)=>Rd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="170",_s={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cd=0,Qc=1,Pd=2,Zu=1,Ju=2,Nn=3,li=0,nn=1,Vt=2,Ht=0,xs=1,eh=2,th=3,nh=4,Qu=5,Tn=100,Ld=101,Dd=102,Id=103,Nd=104,tr=200,Ud=201,kd=202,Od=203,$o=204,Zo=205,Jo=206,Fd=207,Qo=208,zd=209,Bd=210,Hd=211,Vd=212,Gd=213,Wd=214,el=0,tl=1,nl=2,ws=3,il=4,sl=5,rl=6,al=7,Ql=0,Xd=1,jd=2,Si=0,ef=1,tf=2,nf=3,sf=4,qd=5,ec=6,rf=7,ih="attached",Yd="detached",af=300,Ts=301,As=302,wa=303,ol=304,Fa=306,an=1e3,Fn=1001,Ta=1002,Wt=1003,of=1004,nr=1005,Nt=1006,ma=1007,Cn=1008,Bn=1009,lf=1010,cf=1011,mr=1012,tc=1013,Wi=1014,tn=1015,un=1016,nc=1017,ic=1018,Xi=1020,hf=35902,uf=1021,ff=1022,fn=1023,df=1024,pf=1025,vs=1026,ji=1027,sc=1028,rc=1029,mf=1030,ac=1031,oc=1033,ga=33776,_a=33777,xa=33778,va=33779,ll=35840,cl=35841,hl=35842,ul=35843,fl=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,yl=37813,Ml=37814,bl=37815,Sl=37816,El=37817,wl=37818,Tl=37819,Al=37820,Rl=37821,ya=36492,Cl=36494,Pl=36495,gf=36283,Ll=36284,Dl=36285,Il=36286,gr=2300,_r=2301,Ya=2302,sh=2400,rh=2401,ah=2402,Kd=2500,$d=0,_f=1,Nl=2,Zd=3200,Jd=3201,za=0,Qd=1,Mi="",bt="srgb",Kt="srgb-linear",Ba="linear",ht="srgb",Zi=7680,oh=519,ep=512,tp=513,np=514,xf=515,ip=516,sp=517,rp=518,ap=519,Ul=35044,lh="300 es",ri=2e3,Aa=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const or=Math.PI/180,Rs=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function op(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lp(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function cp(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function hp(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pp(i,e){return i+Math.random()*(e-i)}function mp(i){return i*(.5-Math.random())}function gp(i){i!==void 0&&(ch=i);let e=ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _p(i){return i*or}function xp(i){return i*Rs}function vp(i){return(i&i-1)===0&&i!==0}function yp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bp(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cc={DEG2RAD:or,RAD2DEG:Rs,generateUUID:_n,clamp:Lt,euclideanModulo:lc,mapLinear:op,inverseLerp:lp,lerp:lr,damp:cp,pingpong:hp,smoothstep:up,smootherstep:fp,randInt:dp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:_p,radToDeg:xp,isPowerOfTwo:vp,ceilPowerOfTwo:yp,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:bp,normalize:ut,denormalize:An};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,s,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],v=s[4],x=s[7],I=s[2],P=s[5],D=s[8];return r[0]=a*_+o*y+l*I,r[3]=a*m+o*v+l*P,r[6]=a*p+o*x+l*D,r[1]=c*_+h*y+u*I,r[4]=c*m+h*v+u*P,r[7]=c*p+h*x+u*D,r[2]=f*_+d*y+g*I,r[5]=f*m+d*v+g*P,r[8]=f*p+d*x+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new qe;function vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){const i=xr("canvas");return i.style.display="block",i}const hh={};function ir(i){i in hh||(hh[i]=!0,console.warn(i))}function Ep(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function wp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?Ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const uh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],dh=[.3127,.329],ph=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Kt]:{primaries:uh,whitePoint:dh,transfer:Ba,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:uh,whitePoint:dh,transfer:ht,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});let Ji;class Ap{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=xr("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rp=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ap.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cp=0;class Dt extends Yi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Fn,s=Fn,r=Nt,a=Cn,o=fn,l=Bn,c=Dt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=_n(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=af;Dt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,I=(p+1)/2,P=(h+f)/4,D=(u+_)/4,L=(g+m)/4;return v>x&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=P/n,r=D/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=P/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=D/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pp extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mf extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lp extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const I=Math.sqrt(v),P=Math.atan2(I,p*y);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}const x=o*y;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new R,gh=new Qe;class vn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Lr.subVectors(this.max,Ws),Qi.subVectors(e.a,Ws),es.subVectors(e.b,Ws),ts.subVectors(e.c,Ws),di.subVectors(es,Qi),pi.subVectors(ts,es),Ci.subVectors(Qi,ts);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,pi.z,0,-pi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ci.y,Ci.x,0];return!Ja(t,Qi,es,ts,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,Qi,es,ts,Lr))?!1:(Dr.crossVectors(di,pi),t=[Dr.x,Dr.y,Dr.z],Ja(t,Qi,es,ts,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,Pr=new vn,Qi=new R,es=new R,ts=new R,di=new R,pi=new R,Ci=new R,Ws=new R,Lr=new R,Dr=new R,Pi=new R;function Ja(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dp=new vn,Xs=new R,Qa=new R;class Hn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Qa)),this.expandByPoint(Xs.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new R,eo=new R,Ir=new R,mi=new R,to=new R,Nr=new R,no=new R;class Os{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eo.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(eo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=mi.dot(this.direction),l=-mi.dot(Ir),c=mi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eo).addScaledVector(Ir,f),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){to.subVectors(t,e),Nr.subVectors(n,e),no.crossVectors(to,Nr);let a=this.direction.dot(no),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(mi,Nr));if(l<0)return null;const c=o*this.direction.dot(to.cross(mi));if(c<0||l+c>a)return null;const h=-o*mi.dot(no);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Np)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),Ur.crossVectors(cn,gi),s[0]=gi.x,s[4]=Ur.x,s[8]=cn.x,s[1]=gi.y,s[5]=Ur.y,s[9]=cn.y,s[2]=gi.z,s[6]=Ur.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],I=n[15],P=s[0],D=s[4],L=s[8],E=s[12],b=s[1],C=s[5],N=s[9],k=s[13],F=s[2],q=s[6],H=s[10],se=s[14],Y=s[3],ae=s[7],ce=s[11],me=s[15];return r[0]=a*P+o*b+l*F+c*Y,r[4]=a*D+o*C+l*q+c*ae,r[8]=a*L+o*N+l*H+c*ce,r[12]=a*E+o*k+l*se+c*me,r[1]=h*P+u*b+f*F+d*Y,r[5]=h*D+u*C+f*q+d*ae,r[9]=h*L+u*N+f*H+d*ce,r[13]=h*E+u*k+f*se+d*me,r[2]=g*P+_*b+m*F+p*Y,r[6]=g*D+_*C+m*q+p*ae,r[10]=g*L+_*N+m*H+p*ce,r[14]=g*E+_*k+m*se+p*me,r[3]=y*P+v*b+x*F+I*Y,r[7]=y*D+v*C+x*q+I*ae,r[11]=y*L+v*N+x*H+I*ce,r[15]=y*E+v*k+x*se+I*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,x=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,I=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,P=t*y+n*v+s*x+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=y*D,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*D,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*D,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*D,e[4]=v*D,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*D,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*D,e[8]=x*D,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*D,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*D,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*D,e[12]=I*D,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*D,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*D,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=l*c,v=l*h,x=l*u,I=n.x,P=n.y,D=n.z;return s[0]=(1-(_+p))*I,s[1]=(d+x)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(d-x)*P,s[5]=(1-(f+p))*P,s[6]=(m+y)*P,s[7]=0,s[8]=(g+v)*D,s[9]=(m-y)*D,s[10]=(1-(f+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,h=1/a,u=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ri){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(o===ri)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Aa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ri){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*c,d=(n+s)*h;let g,_;if(o===ri)g=(a+r)*u,_=-2*u;else if(o===Aa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new R,En=new Ie,Ip=new R(0,0,0),Np=new R(1,1,1),gi=new R,Ur=new R,cn=new R,_h=new Ie,xh=new Qe;class pt{constructor(e=0,t=0,n=0,s=pt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pt.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Up=0;const vh=new R,is=new Qe,Kn=new Ie,kr=new R,js=new R,kp=new R,Op=new Qe,yh=new R(1,0,0),Mh=new R(0,1,0),bh=new R(0,0,1),Sh={type:"added"},Fp={type:"removed"},ss={type:"childadded",child:null},io={type:"childremoved",child:null};class Mt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new R,t=new pt,n=new Qe,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new qe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(js,kr,this.up):Kn.lookAt(kr,js,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Kn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new R(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new R,$n=new R,so=new R,Zn=new R,rs=new R,as=new R,Eh=new R,ro=new R,ao=new R,oo=new R,lo=new st,co=new st,ho=new st;class Rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),$n.subVectors(n,t),so.subVectors(e,t);const a=wn.dot(wn),o=wn.dot($n),l=wn.dot(so),c=$n.dot($n),h=$n.dot(so),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lo.setScalar(0),co.setScalar(0),ho.setScalar(0),lo.fromBufferAttribute(e,t),co.fromBufferAttribute(e,n),ho.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lo,r.x),a.addScaledVector(co,r.y),a.addScaledVector(ho,r.z),a}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),$n.subVectors(e,t),wn.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),ro.subVectors(e,n);const l=rs.dot(ro),c=as.dot(ro);if(l<=0&&c<=0)return t.copy(n);ao.subVectors(e,s);const h=rs.dot(ao),u=as.dot(ao);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(rs,a);oo.subVectors(e,r);const d=rs.dot(oo),g=as.dot(oo);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(as,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Eh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Eh,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Or={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=lc(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uo(a,r,e+1/3),this.g=uo(a,r,e),this.b=uo(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Je.fromWorkingColorSpace(qt.copy(this),e),Math.round(Lt(qt.r*255,0,255))*65536+Math.round(Lt(qt.g*255,0,255))*256+Math.round(Lt(qt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=bt){Je.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Or);const n=lr(_i.h,Or.h,t),s=lr(_i.s,Or.s,t),r=lr(_i.l,Or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new De;De.NAMES=bf;let zp=0;class xn extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=_n(),this.name="",this.blending=xs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=Zo,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$o&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hi extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ii=Bp();function Bp(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Hp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Lt(i,-65504,65504),ii.floatView[0]=i;const e=ii.uint32View[0],t=e>>23&511;return ii.baseTable[t]+((e&8388607)>>ii.shiftTable[t])}function Vp(i){const e=i>>10;return ii.uint32View[0]=ii.mantissaTable[ii.offsetTable[e]+(i&1023)]+ii.exponentTable[e],ii.floatView[0]}const Fr={toHalfFloat:Hp,fromHalfFloat:Vp},Rt=new R,zr=new oe;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}}class Sf extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ef extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gp=0;const pn=new Ie,fo=new Mt,os=new R,hn=new vn,qs=new vn,Ft=new R;class Tt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Ef:Sf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,qs.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,qs.max),hn.expandByPoint(Ft)):(hn.expandByPoint(qs.min),hn.expandByPoint(qs.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Ft.add(os)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new R,l[L]=new R;const c=new R,h=new R,u=new R,f=new oe,d=new oe,g=new oe,_=new R,m=new R;function p(L,E,b){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(_),o[E].add(_),o[b].add(_),l[L].add(m),l[E].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,E=y.length;L<E;++L){const b=y[L],C=b.start,N=b.count;for(let k=C,F=C+N;k<F;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new R,x=new R,I=new R,P=new R;function D(L){I.fromBufferAttribute(s,L),P.copy(I);const E=o[L];v.copy(E),v.sub(I.multiplyScalar(I.dot(E))).normalize(),x.crossVectors(P,E);const C=x.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,C)}for(let L=0,E=y.length;L<E;++L){const b=y[L],C=b.start,N=b.count;for(let k=C,F=C+N;k<F;k+=3)D(e.getX(k+0)),D(e.getX(k+1)),D(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new Ie,Li=new Os,Br=new Hn,Th=new R,Hr=new R,Vr=new R,Gr=new R,po=new R,Wr=new R,Ah=new R,Xr=new R;class Ye extends Mt{constructor(e=new Tt,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(po.fromBufferAttribute(u,e),a?Wr.addScaledVector(po,h):Wr.addScaledVector(po.sub(t),h))}t.add(Wr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Br.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Br,Th)===null||Li.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(wh.copy(r).invert(),Li.copy(e.ray).applyMatrix4(wh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,I=v;x<I;x+=3){const P=o.getX(x),D=o.getX(x+1),L=o.getX(x+2);s=jr(this,p,e,n,c,h,u,P,D,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=jr(this,a,e,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,I=v;x<I;x+=3){const P=x,D=x+1,L=x+2;s=jr(this,p,e,n,c,h,u,P,D,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;s=jr(this,a,e,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wp(i,e,t,n,s,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===li,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:i}}function jr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Hr),i.getVertexPosition(l,Vr),i.getVertexPosition(c,Gr);const h=Wp(i,e,t,n,Hr,Vr,Gr,Ah);if(h){const u=new R;Rn.getBarycoord(Ah,Hr,Vr,Gr,u),s&&(h.uv=Rn.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};Rn.getNormal(Hr,Vr,Gr,f.normal),h.face=f,h.barycoord=u}return h}class Vn extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,m,p,y,v,x,I,P,D,L,E){const b=x/D,C=I/L,N=x/2,k=I/2,F=P/2,q=D+1,H=L+1;let se=0,Y=0;const ae=new R;for(let ce=0;ce<H;ce++){const me=ce*C-k;for(let we=0;we<q;we++){const ze=we*b-N;ae[_]=ze*y,ae[m]=me*v,ae[p]=F,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=P>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(we/D),u.push(1-ce/L),se+=1}}for(let ce=0;ce<L;ce++)for(let me=0;me<D;me++){const we=f+me+q*ce,ze=f+me+q*(ce+1),ee=f+(me+1)+q*(ce+1),de=f+(me+1)+q*ce;l.push(we,ze,de),l.push(ze,ee,de),Y+=6}o.addGroup(d,Y,E),d+=Y,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Cs(i[t]);for(const s in n)e[s]=n[s]}return e}function Xp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const si={clone:Cs,merge:Jt};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tf extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new R,Rh=new oe,Ch=new oe;class en extends Tf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class Yp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(ls,cs,e,t);s.layers=this.layers,this.add(s);const r=new en(ls,cs,e,t);r.layers=this.layers,this.add(r);const a=new en(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new en(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new en(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new en(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Af extends Dt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kp extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Af(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ht});r.uniforms.tEquirect.value=t;const a=new Ye(s,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Nt),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const mo=new R,$p=new R,Zp=new qe;class ti{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mo.subVectors(n,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Hn,qr=new R;class uc{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-d,x-p).normalize(),n[1].setComponents(l+r,f+c,m+d,x+p).normalize(),n[2].setComponents(l+a,f+h,m+g,x+y).normalize(),n[3].setComponents(l-a,f-h,m-g,x-y).normalize(),n[4].setComponents(l-o,f-u,m-_,x-v).normalize(),t===ri)n[5].setComponents(l+o,f+u,m+_,x+v).normalize();else if(t===Aa)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jp(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ci extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const v=y+c*p,x=y+c*(p+1),I=y+1+c*(p+1),P=y+1+c*p;d.push(v,x,P),d.push(x,I,P)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:fm,bumpmap_pars_fragment:dm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:ym,color_vertex:Mm,common:bm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:Em,displacementmap_pars_vertex:wm,displacementmap_vertex:Tm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Im,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:km,fog_pars_vertex:Om,fog_fragment:Fm,fog_pars_fragment:zm,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:jm,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:Km,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:Qm,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:f0,morphnormal_vertex:d0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:_0,normal_pars_fragment:x0,normal_pars_vertex:v0,normal_vertex:y0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:w0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:P0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:U0,shadowmap_vertex:k0,shadowmask_pars_fragment:O0,skinbase_vertex:F0,skinning_pars_vertex:z0,skinning_vertex:B0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:j0,transmission_pars_fragment:q0,uv_pars_fragment:Y0,uv_pars_vertex:K0,uv_vertex:$0,worldpos_vertex:Z0,background_vert:J0,background_frag:Q0,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:ag,distanceRGBA_frag:og,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:fg,meshbasic_frag:dg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:_g,meshnormal_vert:xg,meshnormal_frag:vg,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:bg,meshphysical_frag:Sg,meshtoon_vert:Eg,meshtoon_frag:wg,points_vert:Tg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Lg},Me={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},kn={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};kn.physical={uniforms:Jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Yr={r:0,b:0,g:0},Ii=new pt,Dg=new Ie;function Ig(i,e,t,n,s,r,a){const o=new De(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Fa)?(h===void 0&&(h=new Ye(new Vn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Cs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(v.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(Ii)),h.material.toneMapped=Je.getTransfer(x.colorSpace)!==ht,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ye(new ci(2,2),new Gt({name:"BackgroundMaterial",uniforms:Cs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Yr,wf(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function Ng(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,C,N,k,F){let q=!1;const H=u(k,N,C);r!==H&&(r=H,c(r.object)),q=d(b,k,N,F),q&&g(b,k,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(b,C,N,k),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,C,N){const k=N.wireframe===!0;let F=n[b.id];F===void 0&&(F={},n[b.id]=F);let q=F[C.id];q===void 0&&(q={},F[C.id]=q);let H=q[k];return H===void 0&&(H=f(l()),q[k]=H),H}function f(b){const C=[],N=[],k=[];for(let F=0;F<t;F++)C[F]=0,N[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,C,N,k){const F=r.attributes,q=C.attributes;let H=0;const se=N.getAttributes();for(const Y in se)if(se[Y].location>=0){const ce=F[Y];let me=q[Y];if(me===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(b,C,N,k){const F={},q=C.attributes;let H=0;const se=N.getAttributes();for(const Y in se)if(se[Y].location>=0){let ce=q[Y];ce===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),F[Y]=me,H++}r.attributes=F,r.attributesNum=H,r.index=k}function _(){const b=r.newAttributes;for(let C=0,N=b.length;C<N;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){const N=r.newAttributes,k=r.enabledAttributes,F=r.attributeDivisors;N[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),F[b]!==C&&(i.vertexAttribDivisor(b,C),F[b]=C)}function y(){const b=r.newAttributes,C=r.enabledAttributes;for(let N=0,k=C.length;N<k;N++)C[N]!==b[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function v(b,C,N,k,F,q,H){H===!0?i.vertexAttribIPointer(b,C,N,F,q):i.vertexAttribPointer(b,C,N,k,F,q)}function x(b,C,N,k){_();const F=k.attributes,q=N.getAttributes(),H=C.defaultAttributeValues;for(const se in q){const Y=q[se];if(Y.location>=0){let ae=F[se];if(ae===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const ce=ae.normalized,me=ae.itemSize,we=e.get(ae);if(we===void 0)continue;const ze=we.buffer,ee=we.type,de=we.bytesPerElement,Se=ee===i.INT||ee===i.UNSIGNED_INT||ae.gpuType===tc;if(ae.isInterleavedBufferAttribute){const he=ae.data,be=he.stride,Oe=ae.offset;if(he.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye,he.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ye=0;ye<Y.locationSize;ye++)v(Y.location+ye,me/Y.locationSize,ee,ce,be*de,(Oe+me/Y.locationSize*ye)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<Y.locationSize;he++)p(Y.location+he,ae.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<Y.locationSize;he++)m(Y.location+he);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let he=0;he<Y.locationSize;he++)v(Y.location+he,me/Y.locationSize,ee,ce,me*de,me/Y.locationSize*he*de,Se)}}else if(H!==void 0){const ce=H[se];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(Y.location,ce);break;case 3:i.vertexAttrib3fv(Y.location,ce);break;case 4:i.vertexAttrib4fv(Y.location,ce);break;default:i.vertexAttrib1fv(Y.location,ce)}}}}y()}function I(){L();for(const b in n){const C=n[b];for(const N in C){const k=C[N];for(const F in k)h(k[F].object),delete k[F];delete C[N]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const N in C){const k=C[N];for(const F in k)h(k[F].object),delete k[F];delete C[N]}delete n[b.id]}function D(b){for(const C in n){const N=n[C];if(N[b.id]===void 0)continue;const k=N[b.id];for(const F in k)h(k[F].object),delete k[F];delete N[b.id]}}function L(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ug(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==fn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const L=D===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Bn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==tn&&!L)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:I,maxSamples:P}}function Og(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ti,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,v=y*4;let x=p.clippingState||null;l.value=x,x=h(g,f,v,d);for(let I=0;I!==v;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fg(i){let e=new WeakMap;function t(a,o){return o===wa?a.mapping=Ts:o===ol&&(a.mapping=As),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wa||o===ol)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kp(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ha extends Tf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,Ph=[.125,.215,.35,.446,.526,.582],zi=20,go=new Ha,Lh=new De;let _o=null,xo=0,vo=0,yo=!1;const Fi=(1+Math.sqrt(5))/2,hs=1/Fi,Dh=[new R(-Fi,hs,0),new R(Fi,hs,0),new R(-hs,0,Fi),new R(hs,0,Fi),new R(0,Fi,-hs),new R(0,Fi,hs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,xo,vo),this._renderer.xr.enabled=yo,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:un,format:fn,colorSpace:Kt,depthBuffer:!1},s=Ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Bg(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,s){const o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lh),h.toneMapping=Si,h.autoClear=!1;const d=new Hi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ye(new Vn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Lh),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Kr(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dh[(s-r-1)%Dh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ye(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let y=0;for(let D=0;D<zi;++D){const L=D/_,E=Math.exp(-L*L/2);p.push(E),D===0?y+=E:D<m&&(y+=2*E)}for(let D=0;D<p.length;D++)p[D]=p[D]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[s],I=3*x*(s>v-ps?s-v+ps:0),P=4*(this._cubeSize-x);Kr(t,I,P,3*x,2*x),l.setRenderTarget(t),l.render(u,go)}}function zg(i){const e=[],t=[],n=[];let s=i;const r=i-ps+1+Ph.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ps?l=Ph[a-i+ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let P=0;P<d;P++){const D=P%3*2/3-1,L=P>2?0:-1,E=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];y.set(E,_*g*P),v.set(f,m*g*P);const b=[P,P,P,P,P,P];x.set(b,p*g*P)}const I=new Tt;I.setAttribute("position",new gt(y,_)),I.setAttribute("uv",new gt(v,m)),I.setAttribute("faceIndex",new gt(x,p)),e.push(I),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ih(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bg(i,e,t){const n=new Float32Array(zi),s=new R(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function Nh(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function Uh(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wa||l===ol,h=l===Ts||l===As;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new kl(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new kl(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gg(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const I=y[v+0],P=y[v+1],D=y[v+2];f.push(I,P,P,D,D,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const I=v+0,P=v+1,D=v+2;f.push(I,P,P,D,D,I)}}else return;const m=new(vf(f)?Ef:Sf)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Wg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jg(i,e,t){const n=new WeakMap,s=new st;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const P=new Float32Array(x*I*4*u),D=new Mf(P,x,I,u);D.type=tn,D.needsUpdate=!0;const L=v*4;for(let b=0;b<u;b++){const C=m[b],N=p[b],k=y[b],F=x*I*4*b;for(let q=0;q<C.count;q++){const H=q*L;d===!0&&(s.fromBufferAttribute(C,q),P[F+H+0]=s.x,P[F+H+1]=s.y,P[F+H+2]=s.z,P[F+H+3]=0),g===!0&&(s.fromBufferAttribute(N,q),P[F+H+4]=s.x,P[F+H+5]=s.y,P[F+H+6]=s.z,P[F+H+7]=0),_===!0&&(s.fromBufferAttribute(k,q),P[F+H+8]=s.x,P[F+H+9]=s.y,P[F+H+10]=s.z,P[F+H+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new oe(x,I)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class dc extends Dt{constructor(e,t,n,s,r,a,o,l,c,h=vs){if(h!==vs&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Wi),n===void 0&&h===ji&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cf=new Dt,kh=new dc(1,1),Pf=new Mf,Lf=new Lp,Df=new Af,Oh=[],Fh=[],zh=new Float32Array(16),Bh=new Float32Array(9),Hh=new Float32Array(4);function Fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),Ot(t,n)}}function Qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),Ot(t,n)}}function e_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),Ot(t,n)}}function t_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function r_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function c_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=xf,r=kh):r=Cf,t.setTexture2D(e||r,s)}function h_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lf,s)}function u_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Df,s)}function f_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pf,s)}function d_(i){switch(i){case 5126:return Yg;case 35664:return Kg;case 35665:return $g;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}function p_(i,e){i.uniform1fv(this.addr,e)}function m_(i,e){const t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function g_(i,e){const t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function __(i,e){const t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function x_(i,e){const t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function v_(i,e){const t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function y_(i,e){const t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M_(i,e){i.uniform1iv(this.addr,e)}function b_(i,e){i.uniform2iv(this.addr,e)}function S_(i,e){i.uniform3iv(this.addr,e)}function E_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function T_(i,e){i.uniform2uiv(this.addr,e)}function A_(i,e){i.uniform3uiv(this.addr,e)}function R_(i,e){i.uniform4uiv(this.addr,e)}function C_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cf,r[a])}function P_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lf,r[a])}function L_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Df,r[a])}function D_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pf,r[a])}function I_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return v_;case 35676:return y_;case 5124:case 35670:return M_;case 35667:case 35671:return b_;case 35668:case 35672:return S_;case 35669:case 35673:return E_;case 5125:return w_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}class N_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}}class U_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}}class k_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),a=Mo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vh(t,c===void 0?new N_(o,i,e):new U_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new k_(o),Vh(t,u)),t=u}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);O_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Gh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const F_=37297;let z_=0;function B_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wh=new qe;function H_(i){Je._getMatrix(Wh,Je.workingColorSpace,i);const e=`mat3( ${Wh.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B_(i.getShaderSource(e),a)}else return s}function V_(i,e){const t=H_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G_(i,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="Cineon";break;case sf:t="ACESFilmic";break;case ec:t="AgX";break;case rf:t="Neutral";break;case qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new R;function W_(){Je.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function j_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sr(i){return i!==""}function jh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(Y_,$_)}const K_=new Map;function $_(i,e){let t=je[e];if(t===void 0){const n=K_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(Z_,J_)}function J_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ex(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function nx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case Xd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function ix(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q_(t),c=ex(t),h=tx(t),u=nx(t),f=ix(t),d=X_(t),g=j_(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?je.tonemapping_pars_fragment:"",t.toneMapping!==Si?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Ol(a),a=jh(a,t),a=qh(a,t),o=Ol(o),o=jh(o,t),o=qh(o,t),a=Yh(a),o=Yh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+a,x=y+p+o,I=Gh(s,s.VERTEX_SHADER,v),P=Gh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(I).trim(),F=s.getShaderInfoLog(P).trim();let q=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,P);else{const se=Xh(s,I,"vertex"),Y=Xh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+se+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||F==="")&&(H=!1);H&&(C.diagnostics={runnable:q,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(I),s.deleteShader(P),L=new Ma(s,_),E=q_(s,_)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,F_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let rx=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ox(e),t.set(e,n)),n}}class ox{constructor(e){this.id=rx++,this.code=e,this.usedTimes=0}}function lx(i,e,t,n,s,r,a){const o=new hc,l=new ax,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,C,N,k){const F=N.fog,q=k.geometry,H=E.isMeshStandardMaterial?N.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),Y=se&&se.mapping===Fa?se.image.height:null,ae=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=ce!==void 0?ce.length:0;let we=0;q.morphAttributes.position!==void 0&&(we=1),q.morphAttributes.normal!==void 0&&(we=2),q.morphAttributes.color!==void 0&&(we=3);let ze,ee,de,Se;if(ae){const ct=kn[ae];ze=ct.vertexShader,ee=ct.fragmentShader}else ze=E.vertexShader,ee=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),Se=l.getFragmentShaderID(E);const he=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,Ke=!!E.map,le=!!E.matcap,w=!!se,S=!!E.aoMap,O=!!E.lightMap,U=!!E.bumpMap,G=!!E.normalMap,B=!!E.displacementMap,te=!!E.emissiveMap,K=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,z=E.clearcoat>0,j=E.dispersion>0,Z=E.iridescence>0,$=E.sheen>0,_e=E.transmission>0,pe=M&&!!E.anisotropyMap,xe=z&&!!E.clearcoatMap,ue=z&&!!E.clearcoatNormalMap,re=z&&!!E.clearcoatRoughnessMap,Ee=Z&&!!E.iridescenceMap,Ce=Z&&!!E.iridescenceThicknessMap,He=$&&!!E.sheenColorMap,Le=$&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,Ve=!!E.specularColorMap,tt=!!E.specularIntensityMap,V=_e&&!!E.transmissionMap,ve=_e&&!!E.thicknessMap,ne=!!E.gradientMap,fe=!!E.alphaMap,Re=E.alphaTest>0,Te=!!E.alphaHash,We=!!E.extensions;let wt=Si;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(wt=i.toneMapping);const Xt={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:ee,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Kt,alphaToCoverage:!!E.alphaToCoverage,map:Ke,matcap:le,envMap:w,envMapMode:w&&se.mapping,envMapCubeUVHeight:Y,aoMap:S,lightMap:O,bumpMap:U,normalMap:G,displacementMap:f&&B,emissiveMap:te,normalMapObjectSpace:G&&E.normalMapType===Qd,normalMapTangentSpace:G&&E.normalMapType===za,metalnessMap:K,roughnessMap:T,anisotropy:M,anisotropyMap:pe,clearcoat:z,clearcoatMap:xe,clearcoatNormalMap:ue,clearcoatRoughnessMap:re,dispersion:j,iridescence:Z,iridescenceMap:Ee,iridescenceThicknessMap:Ce,sheen:$,sheenColorMap:He,sheenRoughnessMap:Le,specularMap:Ze,specularColorMap:Ve,specularIntensityMap:tt,transmission:_e,transmissionMap:V,thicknessMap:ve,gradientMap:ne,opaque:E.transparent===!1&&E.blending===xs&&E.alphaToCoverage===!1,alphaMap:fe,alphaTest:Re,alphaHash:Te,combine:E.combine,mapUv:Ke&&_(E.map.channel),aoMapUv:S&&_(E.aoMap.channel),lightMapUv:O&&_(E.lightMap.channel),bumpMapUv:U&&_(E.bumpMap.channel),normalMapUv:G&&_(E.normalMap.channel),displacementMapUv:B&&_(E.displacementMap.channel),emissiveMapUv:te&&_(E.emissiveMap.channel),metalnessMapUv:K&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:pe&&_(E.anisotropyMap.channel),clearcoatMapUv:xe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(E.sheenRoughnessMap.channel),specularMapUv:Ze&&_(E.specularMap.channel),specularColorMapUv:Ve&&_(E.specularColorMap.channel),specularIntensityMapUv:tt&&_(E.specularIntensityMap.channel),transmissionMapUv:V&&_(E.transmissionMap.channel),thicknessMapUv:ve&&_(E.thicknessMap.channel),alphaMapUv:fe&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(G||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ke||fe),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ke&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===ht,decodeVideoTextureEmissive:te&&E.emissiveMap.isVideoTexture===!0&&Je.getTransfer(E.emissiveMap.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Vt,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)b.push(C),b.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(y(b,E),v(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const b=g[E.type];let C;if(b){const N=kn[b];C=si.clone(N.uniforms)}else C=E.uniforms;return C}function I(E,b){let C;for(let N=0,k=h.length;N<k;N++){const F=h[N];if(F.cacheKey===b){C=F,++C.usedTimes;break}}return C===void 0&&(C=new sx(i,b,E,r),h.push(C)),C}function P(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function D(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:L}}function cx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||hx),n.length>1&&n.sort(f||$h),s.length>1&&s.sort(f||$h)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ux(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zh,i.set(n,[a])):s>=r.length?(a=new Zh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new De};break;case"SpotLight":t={position:new R,direction:new R,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function dx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let px=0;function mx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gx(i){const e=new fx,t=dx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new Ie,a=new Ie;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,I=0,P=0,D=0;c.sort(mx);for(let E=0,b=c.length;E<b;E++){const C=c[E],N=C.color,k=C.intensity,F=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*k,u+=N.g*k,f+=N.b*k;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],k);D++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const se=C.shadow,Y=t.get(C);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=H,d++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(k),H.distance=F,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const se=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,se.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[_]=se.matrix,C.castShadow){const Y=t.get(C);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=q,x++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(N).multiplyScalar(k),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const se=C.shadow,Y=t.get(C);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(k),H.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=D,n.version=px++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Jh(i){const e=new gx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _x(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Jh(i),e.set(s,[o])):r>=a.length?(o=new Jh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class xx extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bx(i,e,t){let n=new uc;const s=new oe,r=new oe,a=new st,o=new xx({depthPacking:Jd}),l=new vx,c={},h=t.maxTextureSize,u={[li]:nn,[nn]:li,[Vt]:Vt},f=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:yx,fragmentShader:Mx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let p=this.type;this.render=function(P,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ht),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==Nn&&this.type===Nn,F=p===Nn&&this.type!==Nn;for(let q=0,H=P.length;q<H;q++){const se=P[q],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ae=Y.getFrameExtents();if(s.multiply(ae),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||F===!0){const me=this.type!==Nn?{minFilter:Wt,magFilter:Wt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ln(s.x,s.y,me),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ce=Y.getViewportCount();for(let me=0;me<ce;me++){const we=Y.getViewport(me);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),N.viewport(a),Y.updateMatrices(se,me),n=Y.getFrustum(),x(D,L,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===Nn&&y(Y,L),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,C)};function y(P,D){const L=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ln(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,L,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,L,d,_,null)}function v(P,D,L,E){let b=null;const C=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)b=C;else if(b=L.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const N=b.uuid,k=D.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let q=F[k];q===void 0&&(q=b.clone(),F[k]=q,D.addEventListener("dispose",I)),b=q}if(b.visible=D.visible,b.wireframe=D.wireframe,E===Nn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:u[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=L}return b}function x(P,D,L,E,b){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Nn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const k=e.update(P),F=P.material;if(Array.isArray(F)){const q=k.groups;for(let H=0,se=q.length;H<se;H++){const Y=q[H],ae=F[Y.materialIndex];if(ae&&ae.visible){const ce=v(P,ae,E,b);P.onBeforeShadow(i,P,D,L,k,ce,Y),i.renderBufferDirect(L,null,k,ce,P,Y),P.onAfterShadow(i,P,D,L,k,ce,Y)}}}else if(F.visible){const q=v(P,F,E,b);P.onBeforeShadow(i,P,D,L,k,q,null),i.renderBufferDirect(L,null,k,q,P,null),P.onAfterShadow(i,P,D,L,k,q,null)}}const N=P.children;for(let k=0,F=N.length;k<F;k++)x(N[k],D,L,E,b)}function I(P){P.target.removeEventListener("dispose",I);for(const L in c){const E=c[L],b=P.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Sx={[el]:tl,[nl]:rl,[il]:al,[ws]:sl,[tl]:el,[rl]:nl,[al]:il,[sl]:ws};function Ex(i,e){function t(){let V=!1;const ve=new st;let ne=null;const fe=new st(0,0,0,0);return{setMask:function(Re){ne!==Re&&!V&&(i.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){V=Re},setClear:function(Re,Te,We,wt,Xt){Xt===!0&&(Re*=wt,Te*=wt,We*=wt),ve.set(Re,Te,We,wt),fe.equals(ve)===!1&&(i.clearColor(Re,Te,We,wt),fe.copy(ve))},reset:function(){V=!1,ne=null,fe.set(-1,0,0,0)}}}function n(){let V=!1,ve=!1,ne=null,fe=null,Re=null;return{setReversed:function(Te){if(ve!==Te){const We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const wt=Re;Re=null,this.setClear(wt)}ve=Te},getReversed:function(){return ve},setTest:function(Te){Te?he(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!V&&(i.depthMask(Te),ne=Te)},setFunc:function(Te){if(ve&&(Te=Sx[Te]),fe!==Te){switch(Te){case el:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Te}},setLocked:function(Te){V=Te},setClear:function(Te){Re!==Te&&(ve&&(Te=1-Te),i.clearDepth(Te),Re=Te)},reset:function(){V=!1,ne=null,fe=null,Re=null,ve=!1}}}function s(){let V=!1,ve=null,ne=null,fe=null,Re=null,Te=null,We=null,wt=null,Xt=null;return{setTest:function(ct){V||(ct?he(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!V&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,Mn,Xn){(ne!==ct||fe!==Mn||Re!==Xn)&&(i.stencilFunc(ct,Mn,Xn),ne=ct,fe=Mn,Re=Xn)},setOp:function(ct,Mn,Xn){(Te!==ct||We!==Mn||wt!==Xn)&&(i.stencilOp(ct,Mn,Xn),Te=ct,We=Mn,wt=Xn)},setLocked:function(ct){V=ct},setClear:function(ct){Xt!==ct&&(i.clearStencil(ct),Xt=ct)},reset:function(){V=!1,ve=null,ne=null,fe=null,Re=null,Te=null,We=null,wt=null,Xt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,I=null,P=null,D=new De(0,0,0),L=0,E=!1,b=null,C=null,N=null,k=null,F=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,se=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=se>=2);let ae=null,ce={};const me=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),ze=new st().fromArray(me),ee=new st().fromArray(we);function de(V,ve,ne,fe){const Re=new Uint8Array(4),Te=i.createTexture();i.bindTexture(V,Te),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ne;We++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ve+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Te}const Se={};Se[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(ws),U(!1),G(Qc),he(i.CULL_FACE),S(Ht);function he(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function be(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Oe(V,ve){return u[V]!==ve?(i.bindFramebuffer(V,ve),u[V]=ve,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ye(V,ve){let ne=d,fe=!1;if(V){ne=f.get(ve),ne===void 0&&(ne=[],f.set(ve,ne));const Re=V.textures;if(ne.length!==Re.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,We=Re.length;Te<We;Te++)ne[Te]=i.COLOR_ATTACHMENT0+Te;ne.length=Re.length,fe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ne)}function Ke(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const le={[Tn]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};le[Id]=i.MIN,le[Nd]=i.MAX;const w={[tr]:i.ZERO,[Ud]:i.ONE,[kd]:i.SRC_COLOR,[$o]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Qo]:i.DST_COLOR,[Jo]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function S(V,ve,ne,fe,Re,Te,We,wt,Xt,ct){if(V===Ht){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(he(i.BLEND),_=!0),V!==Qu){if(V!==m||ct!==E){if((p!==Tn||x!==Tn)&&(i.blendEquation(i.FUNC_ADD),p=Tn,x=Tn),ct)switch(V){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,v=null,I=null,P=null,D.set(0,0,0),L=0,m=V,E=ct}return}Re=Re||ve,Te=Te||ne,We=We||fe,(ve!==p||Re!==x)&&(i.blendEquationSeparate(le[ve],le[Re]),p=ve,x=Re),(ne!==y||fe!==v||Te!==I||We!==P)&&(i.blendFuncSeparate(w[ne],w[fe],w[Te],w[We]),y=ne,v=fe,I=Te,P=We),(wt.equals(D)===!1||Xt!==L)&&(i.blendColor(wt.r,wt.g,wt.b,Xt),D.copy(wt),L=Xt),m=V,E=!1}function O(V,ve){V.side===Vt?be(i.CULL_FACE):he(i.CULL_FACE);let ne=V.side===nn;ve&&(ne=!ne),U(ne),V.blending===xs&&V.transparent===!1?S(Ht):S(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const fe=V.stencilWrite;o.setTest(fe),fe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),te(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function U(V){b!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),b=V)}function G(V){V!==Cd?(he(i.CULL_FACE),V!==C&&(V===Qc?i.cullFace(i.BACK):V===Pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),C=V}function B(V){V!==N&&(H&&i.lineWidth(V),N=V)}function te(V,ve,ne){V?(he(i.POLYGON_OFFSET_FILL),(k!==ve||F!==ne)&&(i.polygonOffset(ve,ne),k=ve,F=ne)):be(i.POLYGON_OFFSET_FILL)}function K(V){V?he(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function T(V){V===void 0&&(V=i.TEXTURE0+q-1),ae!==V&&(i.activeTexture(V),ae=V)}function M(V,ve,ne){ne===void 0&&(ae===null?ne=i.TEXTURE0+q-1:ne=ae);let fe=ce[ne];fe===void 0&&(fe={type:void 0,texture:void 0},ce[ne]=fe),(fe.type!==V||fe.texture!==ve)&&(ae!==ne&&(i.activeTexture(ne),ae=ne),i.bindTexture(V,ve||Se[V]),fe.type=V,fe.texture=ve)}function z(){const V=ce[ae];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(V){ze.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ze.copy(V))}function Le(V){ee.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function Ze(V,ve){let ne=c.get(ve);ne===void 0&&(ne=new WeakMap,c.set(ve,ne));let fe=ne.get(V);fe===void 0&&(fe=i.getUniformBlockIndex(ve,V.name),ne.set(V,fe))}function Ve(V,ve){const fe=c.get(ve).get(V);l.get(ve)!==fe&&(i.uniformBlockBinding(ve,fe,V.__bindingPointIndex),l.set(ve,fe))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ce={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,I=null,P=null,D=new De(0,0,0),L=0,E=!1,b=null,C=null,N=null,k=null,F=null,ze.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:be,bindFramebuffer:Oe,drawBuffers:ye,useProgram:Ke,setBlending:S,setMaterial:O,setFlipSided:U,setCullFace:G,setLineWidth:B,setPolygonOffset:te,setScissorTest:K,activeTexture:T,bindTexture:M,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:Ee,texImage3D:Ce,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:ue,texStorage3D:re,texSubImage2D:$,texSubImage3D:_e,compressedTexSubImage2D:pe,compressedTexSubImage3D:xe,scissor:He,viewport:Le,reset:tt}}function Qh(i,e,t,n){const s=wx(n);switch(t){case uf:return i*e;case df:return i*e;case pf:return i*e*2;case sc:return i*e/s.components*s.byteLength;case rc:return i*e/s.components*s.byteLength;case mf:return i*e*2/s.components*s.byteLength;case ac:return i*e*2/s.components*s.byteLength;case ff:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case oc:return i*e*4/s.components*s.byteLength;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(e,8)/2;case fl:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gf:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wx(i){switch(i){case Bn:case lf:return{byteLength:1,components:1};case mr:case cf:case un:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Wi:case tc:case tn:return{byteLength:4,components:1};case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):xr("canvas")}function _(T,M,z){let j=1;const Z=K(T);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(j*Z.width),_e=Math.floor(j*Z.height);u===void 0&&(u=g($,_e));const pe=M?g($,_e):u;return pe.width=$,pe.height=_e,pe.getContext("2d").drawImage(T,0,0,$,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+_e+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,M,z,j,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const _e=Z?Ba:Je.getTransfer(j);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=_e===ht?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(T,M){let z;return T?M===null||M===Wi||M===Xi?z=i.DEPTH24_STENCIL8:M===tn?z=i.DEPTH32F_STENCIL8:M===mr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===Xi?z=i.DEPTH_COMPONENT24:M===tn?z=i.DEPTH_COMPONENT32F:M===mr&&(z=i.DEPTH_COMPONENT16),z}function I(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wt&&T.minFilter!==Nt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){const M=T.target;M.removeEventListener("dispose",P),L(M),M.isVideoTexture&&h.delete(M)}function D(T){const M=T.target;M.removeEventListener("dispose",D),b(M)}function L(T){const M=n.get(T);if(M.__webglInit===void 0)return;const z=T.source,j=f.get(z);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(j).length===0&&f.delete(z)}n.remove(T)}function E(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const z=T.source,j=f.get(z);delete j[M.__cacheKey],a.memory.textures--}function b(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=T.textures;for(let j=0,Z=z.length;j<Z;j++){const $=n.get(z[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(T)}let C=0;function N(){C=0}function k(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function F(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function q(T,M){const z=n.get(T);if(T.isVideoTexture&&B(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,T,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function H(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){ee(z,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function se(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){ee(z,T,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Y(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){de(z,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const ae={[an]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ce={[Wt]:i.NEAREST,[of]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},me={[ep]:i.NEVER,[ap]:i.ALWAYS,[tp]:i.LESS,[xf]:i.LEQUAL,[np]:i.EQUAL,[rp]:i.GEQUAL,[ip]:i.GREATER,[sp]:i.NOTEQUAL};function we(T,M){if(M.type===tn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nt||M.magFilter===ma||M.magFilter===nr||M.magFilter===Cn||M.minFilter===Nt||M.minFilter===ma||M.minFilter===nr||M.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ae[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ae[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ae[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==nr&&M.minFilter!==Cn||M.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ze(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",P));const j=M.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const $=F(M);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[$].usedTimes++;const _e=Z[T.__cacheKey];_e!==void 0&&(Z[T.__cacheKey].usedTimes--,_e.usedTimes===0&&E(M)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return z}function ee(T,M,z){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const Z=ze(T,M),$=M.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+z);const _e=n.get($);if($.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const pe=Je.getPrimaries(Je.workingColorSpace),xe=M.colorSpace===Mi?null:Je.getPrimaries(M.colorSpace),ue=M.colorSpace===Mi||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let re=_(M.image,!1,s.maxTextureSize);re=te(M,re);const Ee=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type);let He=v(M.internalFormat,Ee,Ce,M.colorSpace,M.isVideoTexture);we(j,M);let Le;const Ze=M.mipmaps,Ve=M.isVideoTexture!==!0,tt=_e.__version===void 0||Z===!0,V=$.dataReady,ve=I(M,re);if(M.isDepthTexture)He=x(M.format===ji,M.type),tt&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,He,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,He,re.width,re.height,0,Ee,Ce,null));else if(M.isDataTexture)if(Ze.length>0){Ve&&tt&&t.texStorage2D(i.TEXTURE_2D,ve,He,Ze[0].width,Ze[0].height);for(let ne=0,fe=Ze.length;ne<fe;ne++)Le=Ze[ne],Ve?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Le.width,Le.height,Ee,Ce,Le.data):t.texImage2D(i.TEXTURE_2D,ne,He,Le.width,Le.height,0,Ee,Ce,Le.data);M.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(i.TEXTURE_2D,ve,He,re.width,re.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Ee,Ce,re.data)):t.texImage2D(i.TEXTURE_2D,0,He,re.width,re.height,0,Ee,Ce,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,He,Ze[0].width,Ze[0].height,re.depth);for(let ne=0,fe=Ze.length;ne<fe;ne++)if(Le=Ze[ne],M.format!==fn)if(Ee!==null)if(Ve){if(V)if(M.layerUpdates.size>0){const Re=Qh(Le.width,Le.height,M.format,M.type);for(const Te of M.layerUpdates){const We=Le.data.subarray(Te*Re/Le.data.BYTES_PER_ELEMENT,(Te+1)*Re/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Te,Le.width,Le.height,1,Ee,We)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,re.depth,Ee,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,He,Le.width,Le.height,re.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,re.depth,Ee,Ce,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,He,Le.width,Le.height,re.depth,0,Ee,Ce,Le.data)}else{Ve&&tt&&t.texStorage2D(i.TEXTURE_2D,ve,He,Ze[0].width,Ze[0].height);for(let ne=0,fe=Ze.length;ne<fe;ne++)Le=Ze[ne],M.format!==fn?Ee!==null?Ve?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Le.width,Le.height,Ee,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,He,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Le.width,Le.height,Ee,Ce,Le.data):t.texImage2D(i.TEXTURE_2D,ne,He,Le.width,Le.height,0,Ee,Ce,Le.data)}else if(M.isDataArrayTexture)if(Ve){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,He,re.width,re.height,re.depth),V)if(M.layerUpdates.size>0){const ne=Qh(re.width,re.height,M.format,M.type);for(const fe of M.layerUpdates){const Re=re.data.subarray(fe*ne/re.data.BYTES_PER_ELEMENT,(fe+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,re.width,re.height,1,Ee,Ce,Re)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,Ce,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,re.width,re.height,re.depth,0,Ee,Ce,re.data);else if(M.isData3DTexture)Ve?(tt&&t.texStorage3D(i.TEXTURE_3D,ve,He,re.width,re.height,re.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,Ce,re.data)):t.texImage3D(i.TEXTURE_3D,0,He,re.width,re.height,re.depth,0,Ee,Ce,re.data);else if(M.isFramebufferTexture){if(tt)if(Ve)t.texStorage2D(i.TEXTURE_2D,ve,He,re.width,re.height);else{let ne=re.width,fe=re.height;for(let Re=0;Re<ve;Re++)t.texImage2D(i.TEXTURE_2D,Re,He,ne,fe,0,Ee,Ce,null),ne>>=1,fe>>=1}}else if(Ze.length>0){if(Ve&&tt){const ne=K(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ve,He,ne.width,ne.height)}for(let ne=0,fe=Ze.length;ne<fe;ne++)Le=Ze[ne],Ve?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ee,Ce,Le):t.texImage2D(i.TEXTURE_2D,ne,He,Ee,Ce,Le);M.generateMipmaps=!1}else if(Ve){if(tt){const ne=K(re);t.texStorage2D(i.TEXTURE_2D,ve,He,ne.width,ne.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ce,re)}else t.texImage2D(i.TEXTURE_2D,0,He,Ee,Ce,re);m(M)&&p(j),_e.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function de(T,M,z){if(M.image.length!==6)return;const j=ze(T,M),Z=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const $=n.get(Z);if(Z.version!==$.__version||j===!0){t.activeTexture(i.TEXTURE0+z);const _e=Je.getPrimaries(Je.workingColorSpace),pe=M.colorSpace===Mi?null:Je.getPrimaries(M.colorSpace),xe=M.colorSpace===Mi||_e===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!ue&&!re?Ee[fe]=_(M.image[fe],!0,s.maxCubemapSize):Ee[fe]=re?M.image[fe].image:M.image[fe],Ee[fe]=te(M,Ee[fe]);const Ce=Ee[0],He=r.convert(M.format,M.colorSpace),Le=r.convert(M.type),Ze=v(M.internalFormat,He,Le,M.colorSpace),Ve=M.isVideoTexture!==!0,tt=$.__version===void 0||j===!0,V=Z.dataReady;let ve=I(M,Ce);we(i.TEXTURE_CUBE_MAP,M);let ne;if(ue){Ve&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ze,Ce.width,Ce.height);for(let fe=0;fe<6;fe++){ne=Ee[fe].mipmaps;for(let Re=0;Re<ne.length;Re++){const Te=ne[Re];M.format!==fn?He!==null?Ve?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,Te.width,Te.height,He,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,Ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,Te.width,Te.height,He,Le,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,Ze,Te.width,Te.height,0,He,Le,Te.data)}}}else{if(ne=M.mipmaps,Ve&&tt){ne.length>0&&ve++;const fe=K(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ze,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(re){Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,He,Le,Ee[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ze,Ee[fe].width,Ee[fe].height,0,He,Le,Ee[fe].data);for(let Re=0;Re<ne.length;Re++){const We=ne[Re].image[fe].image;Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,We.width,We.height,He,Le,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,Ze,We.width,We.height,0,He,Le,We.data)}}else{Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,He,Le,Ee[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ze,He,Le,Ee[fe]);for(let Re=0;Re<ne.length;Re++){const Te=ne[Re];Ve?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,He,Le,Te.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,Ze,He,Le,Te.image[fe])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Se(T,M,z,j,Z,$){const _e=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),xe=v(z.internalFormat,_e,pe,z.colorSpace),ue=n.get(M),re=n.get(z);if(re.__renderTarget=M,!ue.__hasExternalTextures){const Ee=Math.max(1,M.width>>$),Ce=Math.max(1,M.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,xe,Ee,Ce,M.depth,0,_e,pe,null):t.texImage2D(Z,$,xe,Ee,Ce,0,_e,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),G(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,re.__webglTexture,0,U(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(T,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=x(M.stencilBuffer,Z),_e=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=U(M);G(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],_e=r.convert($.format,$.colorSpace),pe=r.convert($.type),xe=v($.internalFormat,_e,pe,$.colorSpace),ue=U(M);z&&G(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,xe,M.width,M.height):G(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Z=j.__webglTexture,$=U(M);if(M.depthTexture.format===vs)G(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ji)G(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Oe(T){const M=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=j}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,T)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),he(M.__webglDepthbuffer[j],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),he(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(T,M,z){const j=n.get(T);M!==void 0&&Se(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Oe(T)}function Ke(T){const M=T.texture,z=n.get(T),j=n.get(M);T.addEventListener("dispose",D);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)z.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(_e)for(let pe=0,xe=Z.length;pe<xe;pe++){const ue=n.get(Z[pe]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&G(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<Z.length;pe++){const xe=Z[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const ue=r.convert(xe.format,xe.colorSpace),re=r.convert(xe.type),Ee=v(xe.internalFormat,ue,re,xe.colorSpace,T.isXRRenderTarget===!0),Ce=U(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),he(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),we(i.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Se(z.__webglFramebuffer[pe][xe],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else Se(z.__webglFramebuffer[pe],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let pe=0,xe=Z.length;pe<xe;pe++){const ue=Z[pe],re=n.get(ue);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),we(i.TEXTURE_2D,ue),Se(z.__webglFramebuffer,T,ue,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(ue)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,j.__webglTexture),we(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Se(z.__webglFramebuffer[xe],T,M,i.COLOR_ATTACHMENT0,pe,xe);else Se(z.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,pe,0);m(M)&&p(pe),t.unbindTexture()}T.depthBuffer&&Oe(T)}function le(T){const M=T.textures;for(let z=0,j=M.length;z<j;z++){const Z=M[z];if(m(Z)){const $=y(T),_e=n.get(Z).__webglTexture;t.bindTexture($,_e),p($),t.unbindTexture()}}}const w=[],S=[];function O(T){if(T.samples>0){if(G(T)===!1){const M=T.textures,z=T.width,j=T.height;let Z=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),pe=M.length>1;if(pe)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const ue=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,Z,i.NEAREST),l===!0&&(w.length=0,S.length=0,w.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push($),S.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const ue=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function U(T){return Math.min(s.maxSamples,T.samples)}function G(T){const M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(T){const M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function te(T,M){const z=T.colorSpace,j=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Kt&&z!==Mi&&(Je.getTransfer(z)===ht?(j!==fn||Z!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function K(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=ye,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=G}function Ax(i,e){function t(n,s=Mi){let r;const a=Je.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return i.BYTE;if(n===cf)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===uf)return i.ALPHA;if(n===ff)return i.RGB;if(n===fn)return i.RGBA;if(n===df)return i.LUMINANCE;if(n===pf)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===mf)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===ga||n===_a||n===xa||n===va)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===dl||n===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===dl)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===El||n===wl||n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Cl||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gf||n===Ll||n===Dl||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Rx extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cx={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends Yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new Dx,m=t.getContextAttributes();let p=null,y=null;const v=[],x=[],I=new oe;let P=null;const D=new en;D.viewport=new st;const L=new en;L.viewport=new st;const E=[D,L],b=new Rx;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=v[ee];return de===void 0&&(de=new bo,v[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=v[ee];return de===void 0&&(de=new bo,v[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=v[ee];return de===void 0&&(de=new bo,v[ee]=de),de.getHandSpace()};function k(ee){const de=x.indexOf(ee.inputSource);if(de===-1)return;const Se=v[de];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,c||a),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let ee=0;ee<v.length;ee++){const de=x[ee];de!==null&&(x[ee]=null,v[ee].disconnect(de))}C=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ln(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,Se=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?ji:vs,Se=m.stencil?Xi:Wi);const be={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ln(f.textureWidth,f.textureHeight,{format:fn,type:Bn,depthTexture:new dc(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ee){for(let de=0;de<ee.removed.length;de++){const Se=ee.removed[de],he=x.indexOf(Se);he>=0&&(x[he]=null,v[he].disconnect(Se))}for(let de=0;de<ee.added.length;de++){const Se=ee.added[de];let he=x.indexOf(Se);if(he===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=x.length){x.push(Se),he=Oe;break}else if(x[Oe]===null){x[Oe]=Se,he=Oe;break}if(he===-1)break}const be=v[he];be&&be.connect(Se)}}const H=new R,se=new R;function Y(ee,de,Se){H.setFromMatrixPosition(de.matrixWorld),se.setFromMatrixPosition(Se.matrixWorld);const he=H.distanceTo(se),be=de.projectionMatrix.elements,Oe=Se.projectionMatrix.elements,ye=be[14]/(be[10]-1),Ke=be[14]/(be[10]+1),le=(be[9]+1)/be[5],w=(be[9]-1)/be[5],S=(be[8]-1)/be[0],O=(Oe[8]+1)/Oe[0],U=ye*S,G=ye*O,B=he/(-S+O),te=B*-S;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(te),ee.translateZ(B),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),be[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const K=ye+B,T=Ke+B,M=U-te,z=G+(he-te),j=le*Ke/T*K,Z=w*Ke/T*K;ee.projectionMatrix.makePerspective(M,z,j,Z,K,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,Se=ee.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),b.near=L.near=D.near=de,b.far=L.far=D.far=Se,(C!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,N=b.far),D.layers.mask=ee.layers.mask|2,L.layers.mask=ee.layers.mask|4,b.layers.mask=D.layers.mask|L.layers.mask;const he=ee.parent,be=b.cameras;ae(b,he);for(let Oe=0;Oe<be.length;Oe++)ae(be[Oe],he);be.length===2?Y(b,D,L):b.projectionMatrix.copy(D.projectionMatrix),ce(ee,b,he)};function ce(ee,de,Se){Se===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Rs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let me=null;function we(ee,de){if(h=de.getViewerPose(c||a),g=de,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let he=!1;Se.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Oe=0;Oe<Se.length;Oe++){const ye=Se[Oe];let Ke=null;if(d!==null)Ke=d.getViewport(ye);else{const w=u.getViewSubImage(f,ye);Ke=w.viewport,Oe===0&&(e.setRenderTargetTextures(y,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(y))}let le=E[Oe];le===void 0&&(le=new en,le.layers.enable(Oe),le.viewport=new st,E[Oe]=le),le.matrix.fromArray(ye.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ye.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Oe===0&&(b.matrix.copy(le.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(le)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Oe=u.getDepthInformation(Se[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,s.renderState)}}for(let Se=0;Se<v.length;Se++){const he=x[Se],be=v[Se];he!==null&&be!==void 0&&be.update(he,de,c||a)}me&&me(ee,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const ze=new Rf;ze.setAnimationLoop(we),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}}const Ni=new pt,Nx=new Ie;function Ux(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ni.copy(x),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Ni)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const I=v.program;n.updateUBOMapping(y,I);const P=e.render.frame;r[y.id]!==P&&(f(y),r[y.id]=P)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),I=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],x=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,D=x.length;P<D;P++){const L=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,b=L.length;E<b;E++){const C=L[E];if(d(C,P,E,I)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let q=0;q<k.length;q++){const H=k[q],se=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+F,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,F),F+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,x,I){const P=y.value,D=v+"_"+x;if(I[D]===void 0)return typeof P=="number"||typeof P=="boolean"?I[D]=P:I[D]=P.clone(),!0;{const L=I[D];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return I[D]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(y){const v=y.uniforms;let x=0;const I=16;for(let D=0,L=v.length;D<L;D++){const E=Array.isArray(v[D])?v[D]:[v[D]];for(let b=0,C=E.length;b<C;b++){const N=E[b],k=Array.isArray(N.value)?N.value:[N.value];for(let F=0,q=k.length;F<q;F++){const H=k[F],se=_(H),Y=x%I,ae=Y%se.boundary,ce=Y+ae;x+=ae,ce!==0&&I-ce<se.storage&&(x+=I-ce),N.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=se.storage}}}const P=x%I;return P>0&&(x+=I-P),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ox{constructor(e={}){const{canvas:t=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let I=!1,P=0,D=0,L=null,E=-1,b=null;const C=new st,N=new st;let k=null;const F=new De(0);let q=0,H=t.width,se=t.height,Y=1,ae=null,ce=null;const me=new st(0,0,H,se),we=new st(0,0,H,se);let ze=!1;const ee=new uc;let de=!1,Se=!1;const he=new Ie,be=new Ie,Oe=new R,ye=new st,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function w(){return L===null?Y:1}let S=n;function O(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Te,!1),S===null){const W="webgl2";if(S=O(W,A),S===null)throw O(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let U,G,B,te,K,T,M,z,j,Z,$,_e,pe,xe,ue,re,Ee,Ce,He,Le,Ze,Ve,tt,V;function ve(){U=new Vg(S),U.init(),Ve=new Ax(S,U),G=new kg(S,U,e,Ve),B=new Ex(S,U),G.reverseDepthBuffer&&f&&B.buffers.depth.setReversed(!0),te=new Xg(S),K=new cx,T=new Tx(S,U,B,K,G,Ve,te),M=new Fg(x),z=new Hg(x),j=new Jp(S),tt=new Ng(S,j),Z=new Gg(S,j,te,tt),$=new qg(S,Z,j,te),He=new jg(S,G,T),re=new Og(K),_e=new lx(x,M,z,U,G,tt,re),pe=new Ux(x,K),xe=new ux,ue=new _x(U),Ce=new Ig(x,M,z,B,$,d,l),Ee=new bx(x,$,G),V=new kx(S,te,G,B),Le=new Ug(S,U,te),Ze=new Wg(S,U,te),te.programs=_e.programs,x.capabilities=G,x.extensions=U,x.properties=K,x.renderLists=xe,x.shadowMap=Ee,x.state=B,x.info=te}ve();const ne=new Ix(x,S);this.xr=ne,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=U.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=U.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(H,se,!1))},this.getSize=function(A){return A.set(H,se)},this.setSize=function(A,W,J=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,se=W,t.width=Math.floor(A*Y),t.height=Math.floor(W*Y),J===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(H*Y,se*Y).floor()},this.setDrawingBufferSize=function(A,W,J){H=A,se=W,Y=J,t.width=Math.floor(A*J),t.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,W,J,Q){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,W,J,Q),B.viewport(C.copy(me).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,W,J,Q){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,W,J,Q),B.scissor(N.copy(we).multiplyScalar(Y).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){B.setScissorTest(ze=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,W=!0,J=!0){let Q=0;if(A){let X=!1;if(L!==null){const ge=L.texture.format;X=ge===oc||ge===ac||ge===rc}if(X){const ge=L.texture.type,Ae=ge===Bn||ge===Wi||ge===mr||ge===Xi||ge===nc||ge===ic,Ne=Ce.getClearColor(),Ue=Ce.getClearAlpha(),Ge=Ne.r,Xe=Ne.g,ke=Ne.b;Ae?(g[0]=Ge,g[1]=Xe,g[2]=ke,g[3]=Ue,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=Ge,_[1]=Xe,_[2]=ke,_[3]=Ue,S.clearBufferiv(S.COLOR,0,_))}else Q|=S.COLOR_BUFFER_BIT}W&&(Q|=S.DEPTH_BUFFER_BIT),J&&(Q|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),xe.dispose(),ue.dispose(),K.dispose(),M.dispose(),z.dispose(),$.dispose(),tt.dispose(),V.dispose(),_e.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Xc),ne.removeEventListener("sessionend",jc),Ai.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=te.autoReset,W=Ee.enabled,J=Ee.autoUpdate,Q=Ee.needsUpdate,X=Ee.type;ve(),te.autoReset=A,Ee.enabled=W,Ee.autoUpdate=J,Ee.needsUpdate=Q,Ee.type=X}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function We(A){const W=A.target;W.removeEventListener("dispose",We),wt(W)}function wt(A){Xt(A),K.remove(A)}function Xt(A){const W=K.get(A).programs;W!==void 0&&(W.forEach(function(J){_e.releaseProgram(J)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,Q,X,ge){W===null&&(W=Ke);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,Ne=Ed(A,W,J,Q,X);B.setMaterial(Q,Ae);let Ue=J.index,Ge=1;if(Q.wireframe===!0){if(Ue=Z.getWireframeAttribute(J),Ue===void 0)return;Ge=2}const Xe=J.drawRange,ke=J.attributes.position;let nt=Xe.start*Ge,mt=(Xe.start+Xe.count)*Ge;ge!==null&&(nt=Math.max(nt,ge.start*Ge),mt=Math.min(mt,(ge.start+ge.count)*Ge)),Ue!==null?(nt=Math.max(nt,0),mt=Math.min(mt,Ue.count)):ke!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,ke.count));const _t=mt-nt;if(_t<0||_t===1/0)return;tt.setup(X,Q,Ne,J,Ue);let sn,at=Le;if(Ue!==null&&(sn=j.get(Ue),at=Ze,at.setIndex(sn)),X.isMesh)Q.wireframe===!0?(B.setLineWidth(Q.wireframeLinewidth*w()),at.setMode(S.LINES)):at.setMode(S.TRIANGLES);else if(X.isLine){let Fe=Q.linewidth;Fe===void 0&&(Fe=1),B.setLineWidth(Fe*w()),X.isLineSegments?at.setMode(S.LINES):X.isLineLoop?at.setMode(S.LINE_LOOP):at.setMode(S.LINE_STRIP)}else X.isPoints?at.setMode(S.POINTS):X.isSprite&&at.setMode(S.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Fe=X._multiDrawStarts,jn=X._multiDrawCounts,ot=X._multiDrawCount,bn=Ue?j.get(Ue).bytesPerElement:1,$i=K.get(Q).currentProgram.getUniforms();for(let ln=0;ln<ot;ln++)$i.setValue(S,"_gl_DrawID",ln),at.render(Fe[ln]/bn,jn[ln])}else if(X.isInstancedMesh)at.renderInstances(nt,_t,X.count);else if(J.isInstancedBufferGeometry){const Fe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jn=Math.min(J.instanceCount,Fe);at.renderInstances(nt,_t,jn)}else at.render(nt,_t)};function ct(A,W,J){A.transparent===!0&&A.side===Vt&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,Cr(A,W,J),A.side=li,A.needsUpdate=!0,Cr(A,W,J),A.side=Vt):Cr(A,W,J)}this.compile=function(A,W,J=null){J===null&&(J=A),p=ue.get(J),p.init(W),v.push(p),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==J&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Q=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const Ne=ge[Ae];ct(Ne,J,X),Q.add(Ne)}else ct(ge,J,X),Q.add(ge)}),v.pop(),p=null,Q},this.compileAsync=function(A,W,J=null){const Q=this.compile(A,W,J);return new Promise(X=>{function ge(){if(Q.forEach(function(Ae){K.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){X(A);return}setTimeout(ge,10)}U.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Mn=null;function Xn(A){Mn&&Mn(A)}function Xc(){Ai.stop()}function jc(){Ai.start()}const Ai=new Rf;Ai.setAnimationLoop(Xn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){Mn=A,ne.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},ne.addEventListener("sessionstart",Xc),ne.addEventListener("sessionend",jc),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,L),p=ue.get(A,v.length),p.init(W),v.push(p),be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(be),Se=this.localClippingEnabled,de=re.init(this.clippingPlanes,Se),m=xe.get(A,y.length),m.init(),y.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ge=x.xr.getDepthSensingMesh();ge!==null&&qa(ge,W,-1/0,x.sortObjects)}qa(A,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,ce),le=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,le&&Ce.addToRenderList(m,A),this.info.render.frame++,de===!0&&re.beginShadows();const J=p.state.shadowsArray;Ee.render(J,A,W),de===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const ge=W.cameras;if(X.length>0)for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++){const Ue=ge[Ae];Yc(Q,X,A,Ue)}le&&Ce.render(A);for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++){const Ue=ge[Ae];qc(m,A,Ue,Ue.viewport)}}else X.length>0&&Yc(Q,X,A,W),le&&Ce.render(A),qc(m,A,W);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,W),tt.resetDefaultState(),E=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],de===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function qa(A,W,J,Q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){Q&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const Ae=$.update(A),Ne=A.material;Ne.visible&&m.push(A,Ae,Ne,J,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){const Ae=$.update(A),Ne=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ye.copy(Ae.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){const Ue=Ae.groups;for(let Ge=0,Xe=Ue.length;Ge<Xe;Ge++){const ke=Ue[Ge],nt=Ne[ke.materialIndex];nt&&nt.visible&&m.push(A,Ae,nt,J,ye.z,ke)}}else Ne.visible&&m.push(A,Ae,Ne,J,ye.z,null)}}const ge=A.children;for(let Ae=0,Ne=ge.length;Ae<Ne;Ae++)qa(ge[Ae],W,J,Q)}function qc(A,W,J,Q){const X=A.opaque,ge=A.transmissive,Ae=A.transparent;p.setupLightsView(J),de===!0&&re.setGlobalState(x.clippingPlanes,J),Q&&B.viewport(C.copy(Q)),X.length>0&&Rr(X,W,J),ge.length>0&&Rr(ge,W,J),Ae.length>0&&Rr(Ae,W,J),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Yc(A,W,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ln(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?un:Bn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ge=p.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||C;ge.setSize(Ae.z,Ae.w);const Ne=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(F),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),le&&Ce.render(J);const Ue=x.toneMapping;x.toneMapping=Si;const Ge=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),de===!0&&re.setGlobalState(x.clippingPlanes,Q),Rr(A,J,Q),T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge),U.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ke=0,nt=W.length;ke<nt;ke++){const mt=W[ke],_t=mt.object,sn=mt.geometry,at=mt.material,Fe=mt.group;if(at.side===Vt&&_t.layers.test(Q.layers)){const jn=at.side;at.side=nn,at.needsUpdate=!0,Kc(_t,J,Q,sn,at,Fe),at.side=jn,at.needsUpdate=!0,Xe=!0}}Xe===!0&&(T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge))}x.setRenderTarget(Ne),x.setClearColor(F,q),Ge!==void 0&&(Q.viewport=Ge),x.toneMapping=Ue}function Rr(A,W,J){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ge=A.length;X<ge;X++){const Ae=A[X],Ne=Ae.object,Ue=Ae.geometry,Ge=Q===null?Ae.material:Q,Xe=Ae.group;Ne.layers.test(J.layers)&&Kc(Ne,W,J,Ue,Ge,Xe)}}function Kc(A,W,J,Q,X,ge){A.onBeforeRender(x,W,J,Q,X,ge),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,W,J,Q,A,ge),X.transparent===!0&&X.side===Vt&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,x.renderBufferDirect(J,W,Q,X,A,ge),X.side=li,X.needsUpdate=!0,x.renderBufferDirect(J,W,Q,X,A,ge),X.side=Vt):x.renderBufferDirect(J,W,Q,X,A,ge),A.onAfterRender(x,W,J,Q,X,ge)}function Cr(A,W,J){W.isScene!==!0&&(W=Ke);const Q=K.get(A),X=p.state.lights,ge=p.state.shadowsArray,Ae=X.state.version,Ne=_e.getParameters(A,X.state,ge,W,J),Ue=_e.getProgramCacheKey(Ne);let Ge=Q.programs;Q.environment=A.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(A.isMeshStandardMaterial?z:M).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",We),Ge=new Map,Q.programs=Ge);let Xe=Ge.get(Ue);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Ae)return Zc(A,Ne),Xe}else Ne.uniforms=_e.getUniforms(A),A.onBeforeCompile(Ne,x),Xe=_e.acquireProgram(Ne,Ue),Ge.set(Ue,Xe),Q.uniforms=Ne.uniforms;const ke=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=re.uniform),Zc(A,Ne),Q.needsLights=Td(A),Q.lightsStateVersion=Ae,Q.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function $c(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ma.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Zc(A,W){const J=K.get(A);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Ed(A,W,J,Q,X){W.isScene!==!0&&(W=Ke),T.resetTextureUnits();const ge=W.fog,Ae=Q.isMeshStandardMaterial?W.environment:null,Ne=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Kt,Ue=(Q.isMeshStandardMaterial?z:M).get(Q.envMap||Ae),Ge=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,mt=!!J.morphAttributes.color;let _t=Si;Q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_t=x.toneMapping);const sn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,at=sn!==void 0?sn.length:0,Fe=K.get(Q),jn=p.state.lights;if(de===!0&&(Se===!0||A!==b)){const dn=A===b&&Q.id===E;re.setState(Q,A,dn)}let ot=!1;Q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==jn.state.version||Fe.outputColorSpace!==Ne||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Ue||Q.fog===!0&&Fe.fog!==ge||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==Xe||Fe.morphTargets!==ke||Fe.morphNormals!==nt||Fe.morphColors!==mt||Fe.toneMapping!==_t||Fe.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Fe.__version=Q.version);let bn=Fe.currentProgram;ot===!0&&(bn=Cr(Q,W,X));let $i=!1,ln=!1,Vs=!1;const xt=bn.getUniforms(),Dn=Fe.uniforms;if(B.useProgram(bn.program)&&($i=!0,ln=!0,Vs=!0),Q.id!==E&&(E=Q.id,ln=!0),$i||b!==A){B.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),wp(he),Tp(he),xt.setValue(S,"projectionMatrix",he)):xt.setValue(S,"projectionMatrix",A.projectionMatrix),xt.setValue(S,"viewMatrix",A.matrixWorldInverse);const ui=xt.map.cameraPosition;ui!==void 0&&ui.setValue(S,Oe.setFromMatrixPosition(A.matrixWorld)),G.logarithmicDepthBuffer&&xt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ln=!0,Vs=!0)}if(X.isSkinnedMesh){xt.setOptional(S,X,"bindMatrix"),xt.setOptional(S,X,"bindMatrixInverse");const dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),xt.setValue(S,"boneTexture",dn.boneTexture,T))}X.isBatchedMesh&&(xt.setOptional(S,X,"batchingTexture"),xt.setValue(S,"batchingTexture",X._matricesTexture,T),xt.setOptional(S,X,"batchingIdTexture"),xt.setValue(S,"batchingIdTexture",X._indirectTexture,T),xt.setOptional(S,X,"batchingColorTexture"),X._colorsTexture!==null&&xt.setValue(S,"batchingColorTexture",X._colorsTexture,T));const Gs=J.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&He.update(X,J,bn),(ln||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,xt.setValue(S,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Dn.envMap.value=Ue,Dn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Dn.envMapIntensity.value=W.environmentIntensity),ln&&(xt.setValue(S,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&wd(Dn,Vs),ge&&Q.fog===!0&&pe.refreshFogUniforms(Dn,ge),pe.refreshMaterialUniforms(Dn,Q,Y,se,p.state.transmissionRenderTarget[A.id]),Ma.upload(S,$c(Fe),Dn,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ma.upload(S,$c(Fe),Dn,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xt.setValue(S,"center",X.center),xt.setValue(S,"modelViewMatrix",X.modelViewMatrix),xt.setValue(S,"normalMatrix",X.normalMatrix),xt.setValue(S,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const dn=Q.uniformsGroups;for(let ui=0,fi=dn.length;ui<fi;ui++){const Jc=dn[ui];V.update(Jc,bn),V.bind(Jc,bn)}}return bn}function wd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Td(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,W,J){K.get(A.texture).__webglTexture=W,K.get(A.depthTexture).__webglTexture=J;const Q=K.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const J=K.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){L=A,P=W,D=J;let Q=!0,X=null,ge=!1,Ae=!1;if(A){const Ue=K.get(A);if(Ue.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(S.FRAMEBUFFER,null),Q=!1;else if(Ue.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Ue.__hasExternalTextures)T.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(Ue.__boundDepthTexture!==ke){if(ke!==null&&K.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const Xe=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?X=Xe[W][J]:X=Xe[W],ge=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?X=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[J]:X=Xe,C.copy(A.viewport),N.copy(A.scissor),k=A.scissorTest}else C.copy(me).multiplyScalar(Y).floor(),N.copy(we).multiplyScalar(Y).floor(),k=ze;if(B.bindFramebuffer(S.FRAMEBUFFER,X)&&Q&&B.drawBuffers(A,X),B.viewport(C),B.scissor(N),B.setScissorTest(k),ge){const Ue=K.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,J)}else if(Ae){const Ue=K.get(A.texture),Ge=W||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ue.__webglTexture,J||0,Ge)}E=-1},this.readRenderTargetPixels=function(A,W,J,Q,X,ge,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){B.bindFramebuffer(S.FRAMEBUFFER,Ne);try{const Ue=A.texture,Ge=Ue.format,Xe=Ue.type;if(!G.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Q&&J>=0&&J<=A.height-X&&S.readPixels(W,J,Q,X,Ve.convert(Ge),Ve.convert(Xe),ge)}finally{const Ue=L!==null?K.get(L).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,W,J,Q,X,ge,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){const Ue=A.texture,Ge=Ue.format,Xe=Ue.type;if(!G.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-Q&&J>=0&&J<=A.height-X){B.bindFramebuffer(S.FRAMEBUFFER,Ne);const ke=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ke),S.bufferData(S.PIXEL_PACK_BUFFER,ge.byteLength,S.STREAM_READ),S.readPixels(W,J,Q,X,Ve.convert(Ge),Ve.convert(Xe),0);const nt=L!==null?K.get(L).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,nt);const mt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Ep(S,mt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ke),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ge),S.deleteBuffer(ke),S.deleteSync(mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,J=0){A.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-J),X=Math.floor(A.image.width*Q),ge=Math.floor(A.image.height*Q),Ae=W!==null?W.x:0,Ne=W!==null?W.y:0;T.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,J,0,0,Ae,Ne,X,ge),B.unbindTexture()},this.copyTextureToTexture=function(A,W,J=null,Q=null,X=0){A.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let ge,Ae,Ne,Ue,Ge,Xe,ke,nt,mt;const _t=A.isCompressedTexture?A.mipmaps[X]:A.image;J!==null?(ge=J.max.x-J.min.x,Ae=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,Ue=J.min.x,Ge=J.min.y,Xe=J.isBox3?J.min.z:0):(ge=_t.width,Ae=_t.height,Ne=_t.depth||1,Ue=0,Ge=0,Xe=0),Q!==null?(ke=Q.x,nt=Q.y,mt=Q.z):(ke=0,nt=0,mt=0);const sn=Ve.convert(W.format),at=Ve.convert(W.type);let Fe;W.isData3DTexture?(T.setTexture3D(W,0),Fe=S.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(T.setTexture2DArray(W,0),Fe=S.TEXTURE_2D_ARRAY):(T.setTexture2D(W,0),Fe=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,W.unpackAlignment);const jn=S.getParameter(S.UNPACK_ROW_LENGTH),ot=S.getParameter(S.UNPACK_IMAGE_HEIGHT),bn=S.getParameter(S.UNPACK_SKIP_PIXELS),$i=S.getParameter(S.UNPACK_SKIP_ROWS),ln=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,_t.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,_t.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ue),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Xe);const Vs=A.isDataArrayTexture||A.isData3DTexture,xt=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Dn=K.get(A),Gs=K.get(W),dn=K.get(Dn.__renderTarget),ui=K.get(Gs.__renderTarget);B.bindFramebuffer(S.READ_FRAMEBUFFER,dn.__webglFramebuffer),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let fi=0;fi<Ne;fi++)Vs&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,K.get(A).__webglTexture,X,Xe+fi),A.isDepthTexture?(xt&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,K.get(W).__webglTexture,X,mt+fi),S.blitFramebuffer(Ue,Ge,ge,Ae,ke,nt,ge,Ae,S.DEPTH_BUFFER_BIT,S.NEAREST)):xt?S.copyTexSubImage3D(Fe,X,ke,nt,mt+fi,Ue,Ge,ge,Ae):S.copyTexSubImage2D(Fe,X,ke,nt,mt+fi,Ue,Ge,ge,Ae);B.bindFramebuffer(S.READ_FRAMEBUFFER,null),B.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else xt?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Fe,X,ke,nt,mt,ge,Ae,Ne,sn,at,_t.data):W.isCompressedArrayTexture?S.compressedTexSubImage3D(Fe,X,ke,nt,mt,ge,Ae,Ne,sn,_t.data):S.texSubImage3D(Fe,X,ke,nt,mt,ge,Ae,Ne,sn,at,_t):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,X,ke,nt,ge,Ae,sn,at,_t.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,X,ke,nt,_t.width,_t.height,sn,_t.data):S.texSubImage2D(S.TEXTURE_2D,X,ke,nt,ge,Ae,sn,at,_t);S.pixelStorei(S.UNPACK_ROW_LENGTH,jn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ot),S.pixelStorei(S.UNPACK_SKIP_PIXELS,bn),S.pixelStorei(S.UNPACK_SKIP_ROWS,$i),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ln),X===0&&W.generateMipmaps&&S.generateMipmap(Fe),B.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J=null,Q=null,X=0){return A.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,J,Q,X)},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),B.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,B.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class pc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eu extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pt,this.environmentIntensity=1,this.environmentRotation=new pt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new R;class mc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tu=new R,nu=new st,iu=new st,zx=new R,su=new Ie,Zr=new R,So=new Hn,ru=new Ie,Eo=new Os;class Bx extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zr),this.boundingBox.expandByPoint(Zr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zr),this.boundingSphere.expandByPoint(Zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(s),e.ray.intersectsSphere(So)!==!1&&(ru.copy(s).invert(),Eo.copy(e.ray).applyMatrix4(ru),!(this.boundingBox!==null&&Eo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;nu.fromBufferAttribute(s.attributes.skinIndex,e),iu.fromBufferAttribute(s.attributes.skinWeight,e),tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=iu.getComponent(r);if(a!==0){const o=nu.getComponent(r);su.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zx.copy(tu).applyMatrix4(su),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class If extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wr extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Wt,h=Wt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Ie,Hx=new Ie;class gc{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Hx;au.multiplyMatrices(o,t[r]),au.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wr(t,e,e,fn,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new If),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Fl extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new Ie,ou=new Ie,Jr=[],lu=new vn,Vx=new Ie,Ys=new Ye,Ks=new Hn;class Pn extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),lu.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Ks.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),ou.multiplyMatrices(n,us),Ys.matrixWorld=ou,Ys.raycast(e,Jr);for(let a=0,o=Jr.length;a<o;a++){const l=Jr[a];l.instanceId=r,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,sc,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _c extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ra=new R,Ca=new R,cu=new Ie,$s=new Os,Qr=new Hn,wo=new R,hu=new R;class xc extends Mt{constructor(e=new Tt,t=new _c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ra.fromBufferAttribute(t,s-1),Ca.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ra.distanceTo(Ca);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;cu.copy(s).invert(),$s.copy(e.ray).applyMatrix4(cu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),v=ea(this,e,$s,l,p,y);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=ea(this,e,$s,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=ea(this,e,$s,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ea(this,e,$s,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ea(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Ra.fromBufferAttribute(a,s),Ca.fromBufferAttribute(a,r),t.distanceSqToSegment(Ra,Ca,wo,hu)>n)return;wo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(wo);if(!(l<e.near||l>e.far))return{distance:l,point:hu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const uu=new R,fu=new R;class Nf extends xc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uu.fromBufferAttribute(t,s),fu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uu.distanceTo(fu);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gx extends xc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uf extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const du=new Ie,zl=new Os,ta=new Hn,na=new R;class Wx extends Mt{constructor(e=new Tt,t=new Uf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;du.copy(s).invert(),zl.copy(e.ray).applyMatrix4(du);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);na.fromBufferAttribute(u,m),pu(na,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)na.fromBufferAttribute(u,g),pu(na,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pu(i,e,t,n,s,r,a){const o=zl.distanceSqToPoint(i);if(o<t){const l=new R;zl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xx extends Dt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],a=[],o=new R,l=new Ie;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vc extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jx extends vc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ia=new R,To=new yc,Ao=new yc,Ro=new yc;class qx extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ia.subVectors(s[0],s[1]).add(s[0]),c=ia);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),To.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Ao.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Ro.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ao.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ro.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(To.calc(l),Ao.calc(l),Ro.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mu(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Yx(i,e){const t=1-i;return t*t*e}function Kx(i,e){return 2*(1-i)*i*e}function $x(i,e){return i*i*e}function cr(i,e,t,n){return Yx(i,e)+Kx(i,t)+$x(i,n)}function Zx(i,e){const t=1-i;return t*t*t*e}function Jx(i,e){const t=1-i;return 3*t*t*i*e}function Qx(i,e){return 3*(1-i)*i*i*e}function ev(i,e){return i*i*i*e}function hr(i,e,t,n,s){return Zx(i,e)+Jx(i,t)+Qx(i,n)+ev(i,s)}class kf extends Gn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tv extends Gn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y),hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends Gn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nv extends Gn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends Gn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iv extends Gn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y),cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(mu(o,l.x,c.x,h.x,u.x),mu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new oe().fromArray(s))}return this}}var Bl=Object.freeze({__proto__:null,ArcCurve:jx,CatmullRomCurve3:qx,CubicBezierCurve:kf,CubicBezierCurve3:tv,EllipseCurve:vc,LineCurve:Of,LineCurve3:nv,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:iv,SplineCurve:zf});class sv extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}}class Hl extends sv{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Of(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ff(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new kf(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new vc(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hi extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function y(){const x=new R,I=new R;let P=0;const D=(t-e)/n;for(let L=0;L<=r;L++){const E=[],b=L/r,C=b*(t-e)+e;for(let N=0;N<=s;N++){const k=N/s,F=k*l+o,q=Math.sin(F),H=Math.cos(F);I.x=C*q,I.y=-b*n+m,I.z=C*H,u.push(I.x,I.y,I.z),x.set(q,D,H).normalize(),f.push(x.x,x.y,x.z),d.push(k,1-b),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const b=_[E][L],C=_[E+1][L],N=_[E+1][L+1],k=_[E][L+1];(e>0||E!==0)&&(h.push(b,C,k),P+=3),(t>0||E!==r-1)&&(h.push(C,N,k),P+=3)}c.addGroup(p,P,0),p+=P}function v(x){const I=g,P=new oe,D=new R;let L=0;const E=x===!0?e:t,b=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const F=N/s*l+o,q=Math.cos(F),H=Math.sin(F);D.x=E*H,D.y=m*b,D.z=E*q,u.push(D.x,D.y,D.z),f.push(0,b,0),P.x=q*.5+.5,P.y=H*.5*b+.5,d.push(P.x,P.y),g++}for(let N=0;N<s;N++){const k=I+N,F=C+N;x===!0?h.push(F,F+1,k):h.push(F+1,F,k),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ps extends hi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ps(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new R,x=new R,I=new R;for(let P=0;P<t.length;P+=3)d(t[P+0],v),d(t[P+1],x),d(t[P+2],I),l(v,x,I,y)}function l(y,v,x,I){const P=I+1,D=[];for(let L=0;L<=P;L++){D[L]=[];const E=y.clone().lerp(x,L/P),b=v.clone().lerp(x,L/P),C=P-L;for(let N=0;N<=C;N++)N===0&&L===P?D[L][N]=E:D[L][N]=E.clone().lerp(b,N/C)}for(let L=0;L<P;L++)for(let E=0;E<2*(P-L)-1;E++){const b=Math.floor(E/2);E%2===0?(f(D[L][b+1]),f(D[L+1][b]),f(D[L][b])):(f(D[L][b+1]),f(D[L+1][b+1]),f(D[L+1][b]))}}function c(y){const v=new R;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;a.push(x,1-I)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const v=a[y+0],x=a[y+2],I=a[y+4],P=Math.max(v,x,I),D=Math.min(v,x,I);P>.9&&D<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){const x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const y=new R,v=new R,x=new R,I=new R,P=new oe,D=new oe,L=new oe;for(let E=0,b=0;E<r.length;E+=9,b+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),P.set(a[b+0],a[b+1]),D.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),I.copy(y).add(v).add(x).divideScalar(3);const C=m(I);_(P,b+0,y,C),_(D,b+2,v,C),_(L,b+4,x,C)}}function _(y,v,x,I){I<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.vertices,e.indices,e.radius,e.details)}}class Tr extends Hl{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Hl().fromJSON(s))}return this}}const rv={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Bf(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=hv(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return vr(r,a,t,o,l,d,0),a}};function Bf(i,e,t,n,s){let r,a;if(s===Mv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=gu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=gu(r,i[r],i[r+1],a);return a&&Ga(a,a.next)&&(Mr(a),a=a.next),a}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ga(t,t.next)||St(t.prev,t,t.next)===0)){if(Mr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&mv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ov(i,n,s,r):av(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Mr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=lv(qi(i),e,t),vr(i,e,t,n,s,r,2)):a===2&&cv(i,e,t,n,s,r):vr(qi(i),e,t,n,s,r,1);break}}}function av(i){const e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ms(s,o,r,l,a,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ov(i,e,t,n){const s=i.prev,r=i,a=i.next;if(St(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Vl(d,g,e,t,n),y=Vl(_,m,e,t,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&ms(o,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ms(o,h,l,u,c,f,x.x,x.y)&&St(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&ms(o,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ms(o,h,l,u,c,f,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function lv(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ga(s,r)&&Hf(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function cv(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xv(a,o)){let l=Vf(a,o);a=qi(a,a.next),l=qi(l,l.next),vr(a,e,t,n,s,r,0),vr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function hv(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Bf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_v(c));for(s.sort(uv),r=0;r<s.length;r++)t=fv(s[r],t);return t}function uv(i,e){return i.x-e.x}function fv(i,e){const t=dv(i,e);if(!t)return e;const n=Vf(t,i);return qi(n,n.next),qi(t,t.next)}function dv(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ms(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),yr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&pv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function pv(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function mv(i,e,t,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gv(s)}function gv(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _v(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ms(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function xv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vv(i,e)&&(yr(i,e)&&yr(e,i)&&yv(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||Ga(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ga(i,e){return i.x===e.x&&i.y===e.y}function Hf(i,e,t,n){const s=ra(St(i,e,t)),r=ra(St(i,e,n)),a=ra(St(t,n,i)),o=ra(St(t,n,e));return!!(s!==r&&a!==o||s===0&&sa(i,t,e)||r===0&&sa(i,n,e)||a===0&&sa(t,i,n)||o===0&&sa(t,e,n))}function sa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ra(i){return i>0?1:i<0?-1:0}function vv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Hf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function yr(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function yv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vf(i,e){const t=new Gl(i.i,i.x,i.y),n=new Gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gu(i,e,t,n){const s=new Gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ei{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ei.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];_u(e),xu(n,e);let a=e.length;t.forEach(_u);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,xu(n,t[l]);const o=rv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function _u(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Wa extends Tt{constructor(e=new Tr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:bv;let v,x=!1,I,P,D,L;p&&(v=p.getSpacedPoints(h),x=!0,f=!1,I=p.computeFrenetFrames(h,!1),P=new R,D=new R,L=new R),f||(m=0,d=0,g=0,_=0);const E=o.extractPoints(c);let b=E.shape;const C=E.holes;if(!Ei.isClockWise(b)){b=b.reverse();for(let le=0,w=C.length;le<w;le++){const S=C[le];Ei.isClockWise(S)&&(C[le]=S.reverse())}}const k=Ei.triangulateShape(b,C),F=b;for(let le=0,w=C.length;le<w;le++){const S=C[le];b=b.concat(S)}function q(le,w,S){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(w,S)}const H=b.length,se=k.length;function Y(le,w,S){let O,U,G;const B=le.x-w.x,te=le.y-w.y,K=S.x-le.x,T=S.y-le.y,M=B*B+te*te,z=B*T-te*K;if(Math.abs(z)>Number.EPSILON){const j=Math.sqrt(M),Z=Math.sqrt(K*K+T*T),$=w.x-te/j,_e=w.y+B/j,pe=S.x-T/Z,xe=S.y+K/Z,ue=((pe-$)*T-(xe-_e)*K)/(B*T-te*K);O=$+B*ue-le.x,U=_e+te*ue-le.y;const re=O*O+U*U;if(re<=2)return new oe(O,U);G=Math.sqrt(re/2)}else{let j=!1;B>Number.EPSILON?K>Number.EPSILON&&(j=!0):B<-Number.EPSILON?K<-Number.EPSILON&&(j=!0):Math.sign(te)===Math.sign(T)&&(j=!0),j?(O=-te,U=B,G=Math.sqrt(M)):(O=B,U=te,G=Math.sqrt(M/2))}return new oe(O/G,U/G)}const ae=[];for(let le=0,w=F.length,S=w-1,O=le+1;le<w;le++,S++,O++)S===w&&(S=0),O===w&&(O=0),ae[le]=Y(F[le],F[S],F[O]);const ce=[];let me,we=ae.concat();for(let le=0,w=C.length;le<w;le++){const S=C[le];me=[];for(let O=0,U=S.length,G=U-1,B=O+1;O<U;O++,G++,B++)G===U&&(G=0),B===U&&(B=0),me[O]=Y(S[O],S[G],S[B]);ce.push(me),we=we.concat(me)}for(let le=0;le<m;le++){const w=le/m,S=d*Math.cos(w*Math.PI/2),O=g*Math.sin(w*Math.PI/2)+_;for(let U=0,G=F.length;U<G;U++){const B=q(F[U],ae[U],O);he(B.x,B.y,-S)}for(let U=0,G=C.length;U<G;U++){const B=C[U];me=ce[U];for(let te=0,K=B.length;te<K;te++){const T=q(B[te],me[te],O);he(T.x,T.y,-S)}}}const ze=g+_;for(let le=0;le<H;le++){const w=f?q(b[le],we[le],ze):b[le];x?(D.copy(I.normals[0]).multiplyScalar(w.x),P.copy(I.binormals[0]).multiplyScalar(w.y),L.copy(v[0]).add(D).add(P),he(L.x,L.y,L.z)):he(w.x,w.y,0)}for(let le=1;le<=h;le++)for(let w=0;w<H;w++){const S=f?q(b[w],we[w],ze):b[w];x?(D.copy(I.normals[le]).multiplyScalar(S.x),P.copy(I.binormals[le]).multiplyScalar(S.y),L.copy(v[le]).add(D).add(P),he(L.x,L.y,L.z)):he(S.x,S.y,u/h*le)}for(let le=m-1;le>=0;le--){const w=le/m,S=d*Math.cos(w*Math.PI/2),O=g*Math.sin(w*Math.PI/2)+_;for(let U=0,G=F.length;U<G;U++){const B=q(F[U],ae[U],O);he(B.x,B.y,u+S)}for(let U=0,G=C.length;U<G;U++){const B=C[U];me=ce[U];for(let te=0,K=B.length;te<K;te++){const T=q(B[te],me[te],O);x?he(T.x,T.y+v[h-1].y,v[h-1].x+S):he(T.x,T.y,u+S)}}}ee(),de();function ee(){const le=s.length/3;if(f){let w=0,S=H*w;for(let O=0;O<se;O++){const U=k[O];be(U[2]+S,U[1]+S,U[0]+S)}w=h+m*2,S=H*w;for(let O=0;O<se;O++){const U=k[O];be(U[0]+S,U[1]+S,U[2]+S)}}else{for(let w=0;w<se;w++){const S=k[w];be(S[2],S[1],S[0])}for(let w=0;w<se;w++){const S=k[w];be(S[0]+H*h,S[1]+H*h,S[2]+H*h)}}n.addGroup(le,s.length/3-le,0)}function de(){const le=s.length/3;let w=0;Se(F,w),w+=F.length;for(let S=0,O=C.length;S<O;S++){const U=C[S];Se(U,w),w+=U.length}n.addGroup(le,s.length/3-le,1)}function Se(le,w){let S=le.length;for(;--S>=0;){const O=S;let U=S-1;U<0&&(U=le.length-1);for(let G=0,B=h+m*2;G<B;G++){const te=H*G,K=H*(G+1),T=w+O+te,M=w+U+te,z=w+U+K,j=w+O+K;Oe(T,M,z,j)}}}function he(le,w,S){l.push(le),l.push(w),l.push(S)}function be(le,w,S){ye(le),ye(w),ye(S);const O=s.length/3,U=y.generateTopUV(n,s,O-3,O-2,O-1);Ke(U[0]),Ke(U[1]),Ke(U[2])}function Oe(le,w,S,O){ye(le),ye(w),ye(O),ye(w),ye(S),ye(O);const U=s.length/3,G=y.generateSideWallUV(n,s,U-6,U-3,U-2,U-1);Ke(G[0]),Ke(G[1]),Ke(G[3]),Ke(G[1]),Ke(G[2]),Ke(G[3])}function ye(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function Ke(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bl[s.type]().fromJSON(s)),new Wa(n,e.options)}}const bv={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(f,1-g),new oe(_,1-p)]:[new oe(o,1-l),new oe(h,1-u),new oe(d,1-g),new oe(m,1-p)]}};function Sv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wi extends Mc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wi(e.radius,e.detail)}}class bc extends Tt{constructor(e=new Tr([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(a,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Ei.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Ei.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Ei.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],v=y[0]+u,x=y[1]+u,I=y[2]+u;n.push(v,x,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ev(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new bc(n,e.curveSegments)}}function Ev(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class wv extends Gt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ut extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class on extends Ut{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vu extends xn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tv extends xn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Av(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rv(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function yu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Gf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ar{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cv extends Ar{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rh:r=e,o=2*t-n;break;case ah:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:a=e,l=2*n-t;break;case ah:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+y*a[c+I]+v*a[l+I]+x*a[u+I];return r}}class Pv extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class Lv extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Av(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=_r;class zs extends Wn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=gr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Wf extends Wn{}Wf.prototype.ValueTypeName="color";class Ls extends Wn{}Ls.prototype.ValueTypeName="number";class Dv extends Ar{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ds extends Wn{InterpolantFactoryMethodLinear(e){return new Dv(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Wn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=gr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Wn{}Is.prototype.ValueTypeName="vector";class Iv{constructor(e="",t=-1,n=[],s=Kd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Uv(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Rv(l);l=yu(l,1,h),c=yu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ls(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];Gf(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new Ls(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(Is,d+".position",f,"pos",s),n(Ds,d+".quaternion",f,"rot",s),n(Is,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Nv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Wf;case"quaternion":return Ds;case"bool":case"boolean":return zs;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Uv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nv(i.type);if(i.times===void 0){const t=[],n=[];Gf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kv{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Ov=new kv;class Ki{constructor(e){this.manager=e!==void 0?e:Ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class Fv extends Error{constructor(e,t){super(e),this.response=t}}class Sc extends Ki{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:s});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Jn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let P=0,D=h.length;P<D;P++){const L=h[P];L.onProgress&&L.onProgress(I)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Fv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{bi.add(e,c);const h=Jn[e];delete Jn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zv extends Ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=xr("img");function l(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Bv extends Ki{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new wr,o=new Sc(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Fn,a.wrapT=c.wrapT!==void 0?c.wrapT:Fn,a.magFilter=c.magFilter!==void 0?c.magFilter:Nt,a.minFilter=c.minFilter!==void 0?c.minFilter:Nt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Cn),c.mipmapCount===1&&(a.minFilter=Nt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}}class Ec extends Ki{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new zv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Xa extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hv extends Xa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Co=new Ie,Mu=new R,bu=new R;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mu),bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bu),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vv extends wc{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gv extends Xa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Su=new Ie,Zs=new R,Po=new R;class Wv extends wc{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zs),Po.copy(n.position),Po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Po),n.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}}class Xv extends Xa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jv extends wc{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xf extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new jv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ur{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qv extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,l),r.manager.itemStart(e)}}class jf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return performance.now()}const Tc="\\[\\]\\.:\\/",Yv=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",Kv="[^"+Tc.replace("\\.","")+"]",$v=/((?:WC+[\/:])*)/.source.replace("WC",Ac),Zv=/(WCOD+)?/.source.replace("WCOD",Kv),Jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),ey=new RegExp("^"+$v+Zv+Jv+Qv+"$"),ty=["material","materials","bones","map"];class ny{constructor(e,t,n){const s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(e){const t=ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=ny;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const wu=new Ie;class iy{constructor(e,t,n=0,s=1/0){this.ray=new Os(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(e,t=!0,n=[]){return Wl(e,this,n,t),n.sort(Tu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wl(e[s],this,n,t);return n.sort(Tu),n}}function Tu(i,e){return i.distance-e.distance}function Wl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Wl(r[a],e,t,!0)}}class Au{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const oa=new vn;class sy extends Nf{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Tt;r.setIndex(new gt(n,1)),r.setAttribute("position",new gt(s,3)),super(r,new _c({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&oa.setFromObject(this.object),oa.isEmpty())return;const t=oa.min,n=oa.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ry extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);const br=()=>Math.random().toString(36).slice(2,10);function Xl(i="Neuer Kunde"){return{version:1,id:br(),kunde:i,datum:new Date().toISOString().slice(0,10),grundstueck:{breite:16,tiefe:24,haus:{x:3,y:1,breite:10,tiefe:8,hoehe:5.8,dach:"sattel",fassade:"putz_weiss"}},module:[],standpunkte:[],ansicht:{tageszeit:15}}}function qf(){const i=Xl("Beispiel – Familie Muster"),e=(t,n,s,r)=>i.module.push({id:br(),typ:t,katalog:r,punkte:n,params:s});return e("flaeche",[[4,9],[12,9],[12,13],[4,13]],{material:"holz_laerche",hoehe:.15,dielenwinkel:0},"f_holz"),e("weg",[[12,11.5],[13.5,11.5],[13.5,20.4]],{material:"pflaster_grau",breite:1.2,kante:!0},"w_pfl"),e("zaun",[[0,9],[0,24],[16,24],[16,9]],{material:"z_doppelstab",hoehe:1.6,feld:2.5,pfosten:"#2f3336"},"z_doppelstab"),e("beet",[[1,15],[6,15],[7,18],[1,18.5]],{material:"mulch",dichte:1.2,hochbeet:0,bluete:!0},"b_beet"),e("hecke",[[.5,23.3],[15.5,23.3]],{hoehe:1.8,dicke:.7,farbton:100},"h_hecke"),e("pflanze",[[3,21]],{art:"laub",hoehe:7,krone:5},"p_laub"),e("pflanze",[[9,20]],{art:"obst",hoehe:4,krone:3.5},"p_obst"),e("pflanze",[[14.8,13]],{art:"kugel",hoehe:3.5,krone:2.2},"p_kugel"),e("bau",[[8,11]],{art:"sitzgruppe",breite:.78,tiefe:1.83,hoehe:.86,rotation:90,farbe:"#d9d4c8"},"x_sitz"),e("bau",[[13.5,21.6]],{art:"gartenhaus",breite:3,tiefe:2.2,hoehe:2.3,rotation:0,farbe:"#7b5a3c"},"x_gartenhaus"),i.standpunkte=[{name:"Terrasse",x:6,y:12.5,blick:0}],i}const Lo=new Set,Ui=[],ie={projekt:null,auswahl:null,schritt:"flaechen",on(i){return Lo.add(i),()=>Lo.delete(i)},emit(i){for(const e of Lo)e(i)},laden(i){this.projekt=i,this.auswahl=null,Ui.length=0,this.emit("projekt")},aendern(i,e="modul"){Ui.push(JSON.stringify(this.projekt)),Ui.length>80&&Ui.shift(),i(this.projekt),this.emit(e)},schnappschuss(){Ui.push(JSON.stringify(this.projekt))},live(i){i(this.projekt),this.emit("live")},undo(){Ui.length&&(this.projekt=JSON.parse(Ui.pop()),this.auswahl&&!this.modul(this.auswahl)&&(this.auswahl=null),this.emit("projekt"))},modul(i){return this.projekt.module.find(e=>e.id===i)},waehle(i){this.auswahl=i,this.emit("auswahl")}},Rc="garten3d.projekte",Yf="garten3d.aktuell";function ja(){try{return JSON.parse(localStorage.getItem(Rc))||{}}catch{return{}}}function jl(){return Object.values(ja()).sort((i,e)=>(e.geaendert||"").localeCompare(i.geaendert||""))}function Cc(i){try{const e=ja();return e[i.id]={...i,geaendert:new Date().toISOString()},localStorage.setItem(Rc,JSON.stringify(e)),localStorage.setItem(Yf,i.id),!0}catch{return!1}}function Pc(i){return ja()[i]||null}function ay(){try{return localStorage.getItem(Yf)}catch{return null}}function oy(i){const e=ja();delete e[i];try{localStorage.setItem(Rc,JSON.stringify(e))}catch{}}let Ru;function ly(i){clearTimeout(Ru),Ru=setTimeout(()=>Cc(i),400)}function cy(i){const e=new Blob([JSON.stringify(i,null,1)],{type:"application/json"});Kf(e,`${$f(i.kunde)}.garten.json`)}function Kf(i,e){const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(t.href),2e3)}const $f=i=>(i||"garten").replace(/[^\wäöüÄÖÜß -]/g,"").trim().replace(/\s+/g,"_")||"garten";function hy(i){return i.text().then(e=>{const t=JSON.parse(e);if(!t||!Array.isArray(t.module)||!t.grundstueck)throw new Error("Keine gültige Garten-Datei");return t})}const Cu={type:"change"},Lc={type:"start"},Zf={type:"end"},la=new Os,Pu=new ti,uy=Math.cos(70*cc.DEG2RAD),It=new R,rn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6;class fy extends ry{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Qe,this._lastTargetPosition=new R,this._quat=new Qe().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Au,this._sphericalDelta=new Au,this._scale=1,this._panOffset=new R,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new R,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=py.bind(this),this._onPointerDown=dy.bind(this),this._onPointerUp=my.bind(this),this._onContextMenu=by.bind(this),this._onMouseWheel=xy.bind(this),this._onKeyDown=vy.bind(this),this._onTouchStart=yy.bind(this),this._onTouchMove=My.bind(this),this._onMouseDown=gy.bind(this),this._onMouseMove=_y.bind(this),this._interceptControlDown=Sy.bind(this),this._interceptControlUp=Ey.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cu),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=It.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<uy?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(Cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function py(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function my(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zf),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=dt.DOLLY;break;case _s.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}break;case _s.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Lc)}function _y(i){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xy(i){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(i.preventDefault(),this.dispatchEvent(Lc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zf))}function vy(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function yy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=dt.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=dt.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Lc)}function My(i){switch(this._trackPointer(i),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=dt.NONE}}function by(i){this.enabled!==!1&&i.preventDefault()}function Sy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ey(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Sr extends Ye{constructor(){const e=Sr.SkyShader,t=new Gt({name:e.name,uniforms:si.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:nn,depthWrite:!1});super(new Vn(1,1,1),t),this.isSky=!0}}Sr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wy=new Ha(-1,1,1,-1,0,1);class Ty extends Tt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const Ay=new Ty;class Dc{constructor(e){this._mesh=new Ye(Ay,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jf extends Hs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Dc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lu extends Hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ry extends Hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Cy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jf(ba),this.copyPass.material.blending=Ht,this.clock=new jf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lu!==void 0&&(a instanceof Lu?n=!0:a instanceof Ry&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Py extends Hs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ca={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ie},cameraProjectionMatrixInverse:{value:new Ie},cameraWorldMatrix:{value:new Ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ha={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Io={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ly(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Dy(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=t[a],l=2*Math.PI*o/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new wr(s,e,e);return r.wrapS=an,r.wrapT=an,r.needsUpdate=!0,r}function Dy(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}const ua={defines:{SAMPLES:16,SAMPLE_VECTORS:Qf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Qf(i,e,t){const n=Iy(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Iy(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new R(Math.cos(r),Math.sin(r),a))}return n}class Ny{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,_=t-d;let m,p;g>_?(m=1,p=0):(m=0,p=1);const y=g-m+h,v=_-p+h,x=g-1+2*h,I=_-1+2*h,P=l&255,D=c&255,L=this.perm[P+this.perm[D]]%12,E=this.perm[P+m+this.perm[D+p]]%12,b=this.perm[P+1+this.perm[D+1]]%12;let C=.5-g*g-_*_;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[L],g,_));let N=.5-y*y-v*v;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[E],y,v));let k=.5-x*x-I*I;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[b],x,I)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,_=h-g,m=u-g,p=f-g,y=e-_,v=t-m,x=n-p;let I,P,D,L,E,b;y>=v?v>=x?(I=1,P=0,D=0,L=1,E=1,b=0):y>=x?(I=1,P=0,D=0,L=1,E=0,b=1):(I=0,P=0,D=1,L=1,E=0,b=1):v<x?(I=0,P=0,D=1,L=0,E=1,b=1):y<x?(I=0,P=1,D=0,L=0,E=1,b=1):(I=0,P=1,D=0,L=1,E=1,b=0);const C=y-I+d,N=v-P+d,k=x-D+d,F=y-L+2*d,q=v-E+2*d,H=x-b+2*d,se=y-1+3*d,Y=v-1+3*d,ae=x-1+3*d,ce=h&255,me=u&255,we=f&255,ze=this.perm[ce+this.perm[me+this.perm[we]]]%12,ee=this.perm[ce+I+this.perm[me+P+this.perm[we+D]]]%12,de=this.perm[ce+L+this.perm[me+E+this.perm[we+b]]]%12,Se=this.perm[ce+1+this.perm[me+1+this.perm[we+1]]]%12;let he=.6-y*y-v*v-x*x;he<0?s=0:(he*=he,s=he*he*this.dot3(this.grad3[ze],y,v,x));let be=.6-C*C-N*N-k*k;be<0?r=0:(be*=be,r=be*be*this.dot3(this.grad3[ee],C,N,k));let Oe=.6-F*F-q*q-H*H;Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this.dot3(this.grad3[de],F,q,H));let ye=.6-se*se-Y*Y-ae*ae;return ye<0?o=0:(ye*=ye,o=ye*ye*this.dot3(this.grad3[Se],se,Y,ae)),32*(s+r+a+o)}noise4d(e,t,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,d,g;const _=(e+t+n+s)*l,m=Math.floor(e+_),p=Math.floor(t+_),y=Math.floor(n+_),v=Math.floor(s+_),x=(m+p+y+v)*c,I=m-x,P=p-x,D=y-x,L=v-x,E=e-I,b=t-P,C=n-D,N=s-L,k=E>b?32:0,F=E>C?16:0,q=b>C?8:0,H=E>N?4:0,se=b>N?2:0,Y=C>N?1:0,ae=k+F+q+H+se+Y,ce=a[ae][0]>=3?1:0,me=a[ae][1]>=3?1:0,we=a[ae][2]>=3?1:0,ze=a[ae][3]>=3?1:0,ee=a[ae][0]>=2?1:0,de=a[ae][1]>=2?1:0,Se=a[ae][2]>=2?1:0,he=a[ae][3]>=2?1:0,be=a[ae][0]>=1?1:0,Oe=a[ae][1]>=1?1:0,ye=a[ae][2]>=1?1:0,Ke=a[ae][3]>=1?1:0,le=E-ce+c,w=b-me+c,S=C-we+c,O=N-ze+c,U=E-ee+2*c,G=b-de+2*c,B=C-Se+2*c,te=N-he+2*c,K=E-be+3*c,T=b-Oe+3*c,M=C-ye+3*c,z=N-Ke+3*c,j=E-1+4*c,Z=b-1+4*c,$=C-1+4*c,_e=N-1+4*c,pe=m&255,xe=p&255,ue=y&255,re=v&255,Ee=o[pe+o[xe+o[ue+o[re]]]]%32,Ce=o[pe+ce+o[xe+me+o[ue+we+o[re+ze]]]]%32,He=o[pe+ee+o[xe+de+o[ue+Se+o[re+he]]]]%32,Le=o[pe+be+o[xe+Oe+o[ue+ye+o[re+Ke]]]]%32,Ze=o[pe+1+o[xe+1+o[ue+1+o[re+1]]]]%32;let Ve=.6-E*E-b*b-C*C-N*N;Ve<0?h=0:(Ve*=Ve,h=Ve*Ve*this.dot4(r[Ee],E,b,C,N));let tt=.6-le*le-w*w-S*S-O*O;tt<0?u=0:(tt*=tt,u=tt*tt*this.dot4(r[Ce],le,w,S,O));let V=.6-U*U-G*G-B*B-te*te;V<0?f=0:(V*=V,f=V*V*this.dot4(r[He],U,G,B,te));let ve=.6-K*K-T*T-M*M-z*z;ve<0?d=0:(ve*=ve,d=ve*ve*this.dot4(r[Le],K,T,M,z));let ne=.6-j*j-Z*Z-$*$-_e*_e;return ne<0?g=0:(ne*=ne,g=ne*ne*this.dot4(r[Ze],j,Z,$,_e)),27*(h+u+f+d+g)}}class Un extends Hs{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ly(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ln(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Gt({defines:Object.assign({},ca.defines),uniforms:si.clone(ca.uniforms),vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader,blending:Ht,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Tv,this.normalMaterial.blending=Ht,this.pdMaterial=new Gt({defines:Object.assign({},ua.defines),uniforms:si.clone(ua.uniforms),vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Gt({defines:Object.assign({},ha.defines),uniforms:si.clone(ha.uniforms),vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,blending:Ht}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Gt({uniforms:si.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qo,blendDst:tr,blendEquation:Tn,blendSrcAlpha:Jo,blendDstAlpha:tr,blendEquationAlpha:Tn}),this.blendMaterial=new Gt({uniforms:si.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Qu,blendSrc:Qo,blendDst:tr,blendEquation:Tn,blendSrcAlpha:Jo,blendDstAlpha:tr,blendEquationAlpha:Tn}),this.fsQuad=new Dc(null),this.originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new dc,this.depthTexture.format=ji,this.depthTexture.type=Xi,this.normalRenderTarget=new Ln(this.width,this.height,{minFilter:Wt,magFilter:Wt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Un.OUTPUT.Off:break;case Un.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ht,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Un.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ht,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Un.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ht,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Un.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Un.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ht,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Un.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ht,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new Ny,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new wr(s,e,e,fn,Bn);return r.wrapS=an,r.wrapT=an,r.needsUpdate=!0,r}}Un.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Uy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ky extends Hs{constructor(){super();const e=Uy;this.uniforms=si.clone(e.uniforms),this.material=new wv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Dc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ef?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Oy extends Bv{constructor(e){super(e),this.type=un}parse(e){const a=function(L,E){switch(L){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(E||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(E||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(E||""))}},h=`
`,u=function(L,E,b){E=E||1024;let N=L.pos,k=-1,F=0,q="",H=String.fromCharCode.apply(null,new Uint16Array(L.subarray(N,N+128)));for(;0>(k=H.indexOf(h))&&F<E&&N<L.byteLength;)q+=H,F+=H.length,N+=128,H+=String.fromCharCode.apply(null,new Uint16Array(L.subarray(N,N+128)));return-1<k?(L.pos+=F+k+1,q+H.slice(0,k)):!1},f=function(L){const E=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let q,H;for((L.pos>=L.byteLength||!(q=u(L)))&&a(1,"no header found"),(H=q.match(E))||a(3,"bad initial token"),F.valid|=1,F.programtype=H[1],F.string+=q+`
`;q=u(L),q!==!1;){if(F.string+=q+`
`,q.charAt(0)==="#"){F.comments+=q+`
`;continue}if((H=q.match(b))&&(F.gamma=parseFloat(H[1])),(H=q.match(C))&&(F.exposure=parseFloat(H[1])),(H=q.match(N))&&(F.valid|=2,F.format=H[1]),(H=q.match(k))&&(F.valid|=4,F.height=parseInt(H[1],10),F.width=parseInt(H[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||a(3,"missing format specifier"),F.valid&4||a(3,"missing image size specifier"),F},d=function(L,E,b){const C=E;if(C<8||C>32767||L[0]!==2||L[1]!==2||L[2]&128)return new Uint8Array(L);C!==(L[2]<<8|L[3])&&a(3,"wrong scanline width");const N=new Uint8Array(4*E*b);N.length||a(4,"unable to allocate buffer space");let k=0,F=0;const q=4*C,H=new Uint8Array(4),se=new Uint8Array(q);let Y=b;for(;Y>0&&F<L.byteLength;){F+4>L.byteLength&&a(1),H[0]=L[F++],H[1]=L[F++],H[2]=L[F++],H[3]=L[F++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=C)&&a(3,"bad rgbe scanline format");let ae=0,ce;for(;ae<q&&F<L.byteLength;){ce=L[F++];const we=ce>128;if(we&&(ce-=128),(ce===0||ae+ce>q)&&a(3,"bad scanline data"),we){const ze=L[F++];for(let ee=0;ee<ce;ee++)se[ae++]=ze}else se.set(L.subarray(F,F+ce),ae),ae+=ce,F+=ce}const me=C;for(let we=0;we<me;we++){let ze=0;N[k]=se[we+ze],ze+=C,N[k+1]=se[we+ze],ze+=C,N[k+2]=se[we+ze],ze+=C,N[k+3]=se[we+ze],k+=4}Y--}return N},g=function(L,E,b,C){const N=L[E+3],k=Math.pow(2,N-128)/255;b[C+0]=L[E+0]*k,b[C+1]=L[E+1]*k,b[C+2]=L[E+2]*k,b[C+3]=1},_=function(L,E,b,C){const N=L[E+3],k=Math.pow(2,N-128)/255;b[C+0]=Fr.toHalfFloat(Math.min(L[E+0]*k,65504)),b[C+1]=Fr.toHalfFloat(Math.min(L[E+1]*k,65504)),b[C+2]=Fr.toHalfFloat(Math.min(L[E+2]*k,65504)),b[C+3]=Fr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),y=p.width,v=p.height,x=d(m.subarray(m.pos),y,v);let I,P,D;switch(this.type){case tn:D=x.length/4;const L=new Float32Array(D*4);for(let b=0;b<D;b++)g(x,b*4,L,b*4);I=L,P=tn;break;case un:D=x.length/4;const E=new Uint16Array(D*4);for(let b=0;b<D;b++)_(x,b*4,E,b*4);I=E,P=un;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:v,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case tn:case un:a.colorSpace=Kt,a.minFilter=Nt,a.magFilter=Nt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}}function Fy(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Tt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Du(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const g=Du(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Du(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new gt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Iu(i,e){if(e===$d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Nl||e===_f){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Nl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class zy extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ur.extractUrlBase(e);a=ur.resolveURL(c,this.path)}else a=ur.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ed){try{a[$e.KHR_BINARY_GLTF]=new rM(e)}catch(u){s&&s(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new Vy;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new aM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new oM;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new lM;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function By(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Hy{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xv(h),c.distance=u;break;case"spot":c=new Gv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Vy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Hi}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}}class Gy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Wy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class jy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,bt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Yy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(o[0],o[1],o[2],Kt),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(o[0],o[1],o[2],Kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,bt)),Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class tM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iM{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class sM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const g of u){const _=new Ie,m=new R,p=new Qe,y=new R(1,1,1),v=new Pn(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const I=l[x];v.instanceColor=new Fl(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Mt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const ed="glTF",Js=12,Nu={JSON:1313821514,BIN:5130562};class rM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Js,r=new DataView(e,Js);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Nu.JSON){const c=new Uint8Array(e,Js+a,o);this.content=n.decode(c)}else if(l===Nu.BIN){const c=Js+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=ql[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=ql[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Ms[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},o,c,Kt,f)})})}}class oM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class lM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class td extends Ar{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,y=1-m,v=p-f+u;for(let x=0;x!==o;x++){const I=a[_+x+o],P=a[_+x+l]*h,D=a[g+x+o],L=a[g+x]*h;r[x]=y*I+v*P+m*D+p*L}return r}}const cM=new Qe;class hM extends td{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return cM.fromArray(r).normalize().toArray(r),r}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uu={9728:Wt,9729:Nt,9984:of,9985:ma,9986:nr,9987:Cn},ku={33071:Fn,33648:Ta,10497:an},No={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uM={CUBICSPLINE:void 0,LINEAR:_r,STEP:gr},Uo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function ki(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function pM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mM(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ko(t.attributes):e=i.indices+":"+ko(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ko(i.targets[n]);return e}function ko(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const _M=new Ie;class xM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ec(this.options.manager):this.textureLoader=new qv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ki(r,o,s),ei(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(ur.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=No[s.type],o=Ms[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new gt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=No[s.type],c=Ms[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==u){const p=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let v=t.cache.get(y);v||(_=new c(o,p*d,s.count*d/h),v=new Fx(_,d/h),t.cache.add(y,v)),m=new mc(v,l,f%d/h,g)}else o===null?_=new c(s.count*l):_=new c(o,f,s.count*l),m=new gt(_,l,g);if(s.sparse!==void 0){const p=No.SCALAR,y=Ms[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new y(a[1],v,s.sparse.count*p),P=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,L=I.length;D<L;D++){const E=I[D];if(m.setX(E,P[D*l]),l>=2&&m.setY(E,P[D*l+1]),l>=3&&m.setZ(E,P[D*l+2]),l>=4&&m.setW(E,P[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Uu[f.magFilter]||Nt,h.minFilter=Uu[f.minFilter]||Cn,h.wrapS=ku[f.wrapS]||an,h.wrapT=ku[f.wrapT]||an,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==Nt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,f(m)}),t.load(ur.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ei(u,a),u.userData.mimeType=a.mimeType||gM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Uf,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _c,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ut}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=s[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Kt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);const h=r.alphaMode||Uo.OPAQUE;if(h===Uo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Uo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Hi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Hi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Hi){const u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&a!==Hi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),ei(u,r),t.associations.set(u,{materials:e}),r.extensions&&ki(s,u,r),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ou(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=mM(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ou(new Tt,c,t),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?fM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],m=a[d];let p;const y=c[d];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Bx(_,y):new Ye(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?p.geometry=Iu(p.geometry,_f):m.mode===mn.TRIANGLE_FAN&&(p.geometry=Iu(p.geometry,Nl));else if(m.mode===mn.LINES)p=new Nf(_,y);else if(m.mode===mn.LINE_STRIP)p=new xc(_,y);else if(m.mode===mn.LINE_LOOP)p=new Gx(_,y);else if(m.mode===mn.POINTS)p=new Wx(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&pM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ei(p,r),m.extensions&&ki(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ki(s,u[0],r),u[0];const f=new rt;r.extensions&&ki(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(cc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ha(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gc(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,v=f.length;y<v;y++){const x=f[y],I=d[y],P=g[y],D=_[y],L=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=n._createAnimationTracks(x,I,P,D,L);if(E)for(let b=0;b<E.length;b++)p.push(E[b])}return new Iv(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,_M)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new If:c.length>1?h=new rt:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ei(h,r),r.extensions&&ki(n,h,r),r.matrix!==void 0){const u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),ei(r,n),n.extensions&&ki(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof xn||f instanceof Dt)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(vi[r.path]){case vi.weights:c=Ls;break;case vi.rotation:c=Ds;break;case vi.position:case vi.scale:c=Is;break;default:switch(n.itemSize){case 1:c=Ls;break;case 2:case 3:default:c=Is;break}break}const h=s.interpolation!==void 0?uM[s.interpolation]:_r,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+vi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ds?hM:td;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vM(i,e,t){const n=e.attributes,s=new vn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const h=Yl(Ms[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Yl(Ms[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ou(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=ql[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ei(i,e),vM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dM(i,e.targets,t):i})}const yM=new zy,Oo=new Map;let nd=()=>{};function MM(i){nd=i}function bM(i){return Oo.has(i)||Oo.set(i,yM.loadAsync(`./models/${i}/modell.gltf`).then(e=>{const t=e.scene;t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material.map&&(a.material.map.anisotropy=8))});const n=new vn().setFromObject(t),s=n.getSize(new R),r=n.getCenter(new R);return{szene:t,groesse:s,mitte:r,boden:n.min.y}})),Oo.get(i)}function SM(i,e=null){const t=new rt;return bM(i).then(({szene:n,groesse:s,mitte:r,boden:a})=>{const o=n.clone(!0),l=e?e/s.x:1;o.scale.setScalar(l),o.position.set(-r.x*l,-a*l,-r.z*l),o.traverse(c=>{c.userData.modulId=t.userData.modulId}),t.add(o),nd()}).catch(n=>console.warn("Modell fehlt",i,n)),t}function yn(i=1){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Pa(i){const e=document.createElement("canvas");return e.width=e.height=i,e}const At=(i,e,t,n=1)=>`hsla(${i},${e}%,${t}%,${n})`;function Qs(i,e,t,n,s=.08){for(let r=0;r<n;r++){const a=t()>.5?255:0;i.fillStyle=`rgba(${a},${a},${a},${s*t()})`,i.fillRect(t()*e,t()*e,1+t()*2,1+t()*2)}}function Oi(i,e,t,{rows:n,cols:s,offset:r=.5,joint:a=3,color:o,irregular:l=0,bevel:c=4}){const h=i.width,u=i.getContext("2d"),f=e.getContext("2d");u.fillStyle=o(t,!0),u.fillRect(0,0,h,h),f.fillStyle="#000",f.fillRect(0,0,h,h);const d=h/n;for(let g=0;g<n;g++){let m=-(g%2*r*(h/s));for(;m<h;){const p=h/s*(1+(t()-.5)*l);for(const y of[0,-h,h]){const v=m+y+a/2,x=g*d+a/2,I=p-a,P=d-a;v>h||v+I<0||(u.fillStyle=o(t,!1),u.fillRect(v,x,I,P),f.createLinearGradient(v,x,v,x+P),f.fillStyle="#bbb",f.fillRect(v,x,I,P),f.fillStyle="#fff",f.fillRect(v+c,x+c,I-2*c,P-2*c))}m+=p}}}const fr={rasen(i,e,t){const n=i.width,s=i.getContext("2d"),r=e.getContext("2d");s.fillStyle=At(96,42,30),s.fillRect(0,0,n,n),r.fillStyle="#777",r.fillRect(0,0,n,n);for(let a=0;a<9e3;a++){const o=t()*n,l=t()*n,c=4+t()*9,h=-Math.PI/2+(t()-.5)*1.2,u=22+t()*26;s.strokeStyle=At(80+t()*30,40+t()*25,u,.9),s.lineWidth=1+t(),r.strokeStyle=`rgba(255,255,255,${.2+t()*.4})`;for(const f of[s,r])f.beginPath(),f.moveTo(o,l),f.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),f.stroke()}},pflaster_grau:(i,e,t)=>Oi(i,e,t,{rows:6,cols:6,joint:4,color:(n,s)=>s?"#6d6a64":At(40,4,52+n()*14)}),pflaster_anthrazit:(i,e,t)=>Oi(i,e,t,{rows:6,cols:6,joint:4,color:(n,s)=>s?"#4a4844":At(220,4,28+n()*10)}),klinker:(i,e,t)=>Oi(i,e,t,{rows:10,cols:5,joint:4,color:(n,s)=>s?"#7a756d":At(12+n()*10,45+n()*15,30+n()*12)}),betonplatten:(i,e,t)=>Oi(i,e,t,{rows:2,cols:2,offset:0,joint:5,bevel:3,color:(n,s)=>s?"#6b6964":At(40,5,62+n()*8)}),naturstein(i,e,t){const n=i.width,s=i.getContext("2d"),r=e.getContext("2d");s.fillStyle="#6e6658",s.fillRect(0,0,n,n),r.fillStyle="#000",r.fillRect(0,0,n,n);const a=(o,l,c,h,u)=>{if(u>3||c<n/4&&h<n/4&&t()>.3){s.fillStyle=At(30+t()*20,14+t()*14,52+t()*16),s.beginPath();const d=[[o+5+t()*6,l+5+t()*6],[o+c-5-t()*6,l+5+t()*6],[o+c-5-t()*6,l+h-5-t()*6],[o+5+t()*6,l+h-5-t()*6]];for(const g of[s,r])g.beginPath(),d.forEach(([_,m],p)=>p?g.lineTo(_,m):g.moveTo(_,m)),g.closePath();s.fill(),r.fillStyle="#fff",r.fill();return}if(c>h){const f=c*(.35+t()*.3);a(o,l,f,h,u+1),a(o+f,l,c-f,h,u+1)}else{const f=h*(.35+t()*.3);a(o,l,c,f,u+1),a(o,l+f,c,h-f,u+1)}};a(0,0,n,n,0),Qs(s,n,t,6e3)},holz(i,e,t,{boards:n=6,hue:s=28,sat:r=45,light:a=42}={}){const o=i.width,l=i.getContext("2d"),c=e.getContext("2d"),h=o/n;l.fillStyle="#2a1d12",l.fillRect(0,0,o,o),c.fillStyle="#000",c.fillRect(0,0,o,o);for(let u=0;u<n;u++){const f=u*h+2,d=a+(t()-.5)*10;l.fillStyle=At(s+(t()-.5)*6,r,d),l.fillRect(0,f,o,h-4),c.fillStyle="#fff",c.fillRect(0,f+1,o,h-6);for(let _=0;_<26;_++){l.strokeStyle=At(s,r,d-6-t()*10,.35),l.lineWidth=.6+t()*1.4,l.beginPath();const m=f+t()*(h-4);l.moveTo(0,m);for(let p=0;p<=o;p+=32)l.lineTo(p,m+Math.sin(p*.02+_)*2*t());l.stroke()}const g=t()*o;l.fillStyle="#2a1d12",l.fillRect(g,f,2,h-4),c.fillStyle="#000",c.fillRect(g,f,2,h-4)}},wpc(i,e,t){fr.holz(i,e,t,{boards:6,hue:30,sat:5,light:44});const n=i.width,s=e.getContext("2d");for(let r=0;r<n;r+=6)s.fillStyle="rgba(0,0,0,.25)",s.fillRect(0,r,n,2)},kies(i,e,t,{hue:n=38,sat:s=12}={}){const r=i.width,a=i.getContext("2d"),o=e.getContext("2d");a.fillStyle=At(n,s,40),a.fillRect(0,0,r,r),o.fillStyle="#222",o.fillRect(0,0,r,r);for(let l=0;l<5200;l++){const c=t()*r,h=t()*r,u=2+t()*5;a.fillStyle=At(n+(t()-.5)*30,s+t()*10,45+t()*35);for(const[f,d]of[[a,null],[o,`rgba(255,255,255,${.5+t()*.5})`]])d&&(f.fillStyle=d),f.beginPath(),f.ellipse(c,h,u,u*(.6+t()*.4),t()*3,0,7),f.fill()}},mulch(i,e,t){const n=i.width,s=i.getContext("2d"),r=e.getContext("2d");s.fillStyle="#3a2618",s.fillRect(0,0,n,n),r.fillStyle="#333",r.fillRect(0,0,n,n);for(let a=0;a<4500;a++){const o=t()*n,l=t()*n,c=4+t()*12,h=2+t()*3,u=t()*Math.PI;s.save(),s.translate(o,l),s.rotate(u),s.fillStyle=At(22+t()*12,40+t()*20,14+t()*18),s.fillRect(-c/2,-h/2,c,h),s.restore(),r.save(),r.translate(o,l),r.rotate(u),r.fillStyle=`rgba(255,255,255,${t()*.6})`,r.fillRect(-c/2,-h/2,c,h),r.restore()}},erde(i,e,t){const n=i.width,s=i.getContext("2d");s.fillStyle="#3b2b1f",s.fillRect(0,0,n,n),Qs(s,n,t,3e4,.25),e.getContext("2d").drawImage(i,0,0)},putz(i,e,t,{l:n=88}={}){const s=i.width,r=i.getContext("2d");r.fillStyle=At(40,12,n),r.fillRect(0,0,s,s),Qs(r,s,t,4e4,.07);const a=e.getContext("2d");a.fillStyle="#888",a.fillRect(0,0,s,s),Qs(a,s,t,4e4,.4)},putz_grau:(i,e,t)=>fr.putz(i,e,t,{l:62}),dach(i,e,t){Oi(i,e,t,{rows:8,cols:6,joint:3,bevel:2,color:(r,a)=>a?"#1b1b1d":At(220,6,22+r()*6)});const n=e.getContext("2d"),s=i.width;for(let r=0;r<8;r++){const a=n.createLinearGradient(0,r*s/8,0,(r+1)*s/8);a.addColorStop(0,"rgba(0,0,0,.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=a,n.fillRect(0,r*s/8,s,s/8)}},mauer_naturstein:(i,e,t)=>Oi(i,e,t,{rows:7,cols:4,joint:6,irregular:.7,bevel:7,color:(n,s)=>s?"#5c574e":At(32+n()*15,10+n()*18,45+n()*20)}),mauer_beton:(i,e,t)=>Oi(i,e,t,{rows:4,cols:2,joint:3,bevel:2,color:(n,s)=>s?"#7d7b76":At(40,3,64+n()*6)}),gabione(i,e,t){fr.kies(i,e,t,{hue:30,sat:6});const n=i.width,s=i.getContext("2d"),r=e.getContext("2d"),a=n/5;s.strokeStyle="#c9ccd0",s.lineWidth=3,r.strokeStyle="#fff",r.lineWidth=3;for(let o=0;o<=5;o++)for(const l of[s,r])l.beginPath(),l.moveTo(o*a,0),l.lineTo(o*a,n),l.moveTo(0,o*a),l.lineTo(n,o*a),l.stroke()},rinde(i,e,t){const n=i.width,s=i.getContext("2d");s.fillStyle="#4a3a2c",s.fillRect(0,0,n,n);for(let r=0;r<260;r++){s.strokeStyle=At(25,20,12+t()*20,.8),s.lineWidth=1+t()*4;const a=t()*n;s.beginPath(),s.moveTo(a,0),s.bezierCurveTo(a+8,n/3,a-8,n/2,a+(t()-.5)*10,n),s.stroke()}e.getContext("2d").drawImage(i,0,0)},laub(i,e,t,{hue:n=100}={}){const s=i.width,r=i.getContext("2d"),a=e.getContext("2d");r.fillStyle=At(n,40,16),r.fillRect(0,0,s,s),a.fillStyle="#000",a.fillRect(0,0,s,s);for(let o=0;o<7e3;o++){const l=t()*s,c=t()*s,h=3+t()*6;r.fillStyle=At(n+(t()-.5)*30,35+t()*25,18+t()*28),r.beginPath(),r.ellipse(l,c,h,h*.55,t()*3,0,7),r.fill(),a.fillStyle=`rgba(255,255,255,${t()})`,a.beginPath(),a.ellipse(l,c,h,h*.55,t()*3,0,7),a.fill()}},wasser(i,e,t){const n=i.width,s=i.getContext("2d"),r=e.getContext("2d");s.fillStyle="#2b5560",s.fillRect(0,0,n,n),r.fillStyle="#808080",r.fillRect(0,0,n,n);for(let a=0;a<900;a++){const o=t()*n,l=t()*n;r.strokeStyle=`rgba(255,255,255,${t()*.25})`,r.lineWidth=2+t()*4,r.beginPath(),r.ellipse(o,l,10+t()*30,3+t()*6,0,0,7),r.stroke()}},asphalt(i,e,t){const n=i.width,s=i.getContext("2d");s.fillStyle="#4a4b4d",s.fillRect(0,0,n,n),Qs(s,n,t,5e4,.3),e.getContext("2d").drawImage(i,0,0)},doppelstab(i,e,t){const n=i.width,s=i.getContext("2d");s.clearRect(0,0,n,n),s.fillStyle="#2f3336";const r=50;for(let l=0;l<r;l++)s.fillRect(l*n/r+2,0,5,n);const a=9;for(let l=0;l<=a;l++){const c=l*(n-10)/a;s.fillRect(0,c,n,5),s.fillRect(0,c+8,n,5)}const o=e.getContext("2d");o.fillStyle="#888",o.fillRect(0,0,n,n)},lamellen(i,e,t){const n=i.width,s=i.getContext("2d"),r=e.getContext("2d");s.clearRect(0,0,n,n),r.fillStyle="#000",r.fillRect(0,0,n,n);const a=14,o=n/a;for(let l=0;l<a;l++){s.fillStyle=At(28+t()*6,40,38+t()*10),s.fillRect(l*o+4,0,o-8,n);for(let c=0;c<8;c++)s.fillStyle="rgba(40,20,10,.25)",s.fillRect(l*o+4+t()*(o-8),0,1,n);r.fillStyle="#fff",r.fillRect(l*o+6,0,o-12,n)}},wpc_zaun(i,e,t){const n=i.width,s=i.getContext("2d"),r=e.getContext("2d");s.fillStyle="#3d3e3f",s.fillRect(0,0,n,n),r.fillStyle="#000",r.fillRect(0,0,n,n);const a=12,o=n/a;for(let l=0;l<a;l++){s.fillStyle=At(30,4,34+t()*6),s.fillRect(0,l*o+2,n,o-4),r.fillStyle="#fff",r.fillRect(0,l*o+3,n,o-6);for(let c=0;c<10;c++)s.fillStyle="rgba(0,0,0,.12)",s.fillRect(0,l*o+2+t()*(o-4),n,1)}},jaegerzaun(i,e,t){const n=i.width,s=i.getContext("2d");s.clearRect(0,0,n,n),s.lineCap="square",s.strokeStyle="#7a5532",s.lineWidth=16;const r=6;for(let o=-r;o<2*r;o++)s.beginPath(),s.moveTo(o*n/r,0),s.lineTo(o*n/r+n*.6,n),s.stroke(),s.beginPath(),s.moveTo(o*n/r+n*.6,0),s.lineTo(o*n/r,n),s.stroke();const a=e.getContext("2d");a.fillStyle="#888",a.fillRect(0,0,n,n)}},bs=new Map;function Ic(i,e=512){const t=i+e;if(bs.has(t))return bs.get(t);const n=fr[i]||fr.rasen,s=Pa(e),r=Pa(e);n(s,r,yn(wM(i)));const a={color:s,normal:TM(r,i.startsWith("rasen")?1.5:3)};return bs.set(t,a),a}function EM(i){const e="prev:"+i;if(bs.has(e))return bs.get(e);const{color:t}=Ic(i),n=Pa(96),s=n.getContext("2d");s.fillStyle="#9cc3e6",s.fillRect(0,0,96,96),s.drawImage(t,0,0,256,256,0,0,96,96);const r=n.toDataURL("image/jpeg",.8);return bs.set(e,r),r}function wM(i){let e=2166136261;for(const t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function TM(i,e){const t=i.width,n=i.getContext("2d").getImageData(0,0,t,t).data,s=Pa(t),r=s.getContext("2d"),a=r.createImageData(t,t),o=a.data,l=(c,h)=>n[((h+t)%t*t+(c+t)%t)*4]/255;for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=(l(h+1,c)-l(h-1,c))*e,f=(l(h,c+1)-l(h,c-1))*e,d=Math.hypot(u,f,1),g=(c*t+h)*4;o[g]=(-u/d*.5+.5)*255,o[g+1]=(f/d*.5+.5)*255,o[g+2]=(1/d*.5+.5)*255,o[g+3]=255}return r.putImageData(a,0,0),s}const Qn=(i,e)=>({foto:`./textures/${i}/farbe.webp`,fotoNormal:`./textures/${i}/normal.webp`,fotoRauheit:`./textures/${i}/rauheit.webp`,vorschau:`./textures/${i}/farbe.webp`,grundton:e}),Zt=(i,e)=>Qn("acg_"+i,e),Et={rasen:{name:"Rasen",...Zt("rasen",[.82,.98,.8]),tile:1.4,rough:3.4,anti:"stoch",farbe:"#7dae55"},pflaster_grau:{name:"Rechteckpflaster grau",...Zt("pflaster"),tile:1.8,rough:1.1,anti:"makro",farbe:"#a8a49c"},pflaster_anthrazit:{name:"Rechteckpflaster anthrazit",...Zt("pflaster_anth"),tile:1.8,rough:1.1,anti:"makro",farbe:"#5e5f62"},klinker:{name:"Klinkerpflaster",...Zt("klinker"),tile:1.3,rough:1.1,anti:"makro",farbe:"#a0583e"},granit:{name:"Granit-Kleinpflaster",...Zt("granit"),tile:1.15,rough:1.1,anti:"makro",farbe:"#8f8d86"},bogenpflaster:{name:"Bogenpflaster",...Zt("platten"),tile:2.6,rough:1.1,anti:"makro",farbe:"#8d8a82"},betonplatten:{name:"Terrassenplatten",...Qn("platten"),tile:2,rough:1,anti:"makro",farbe:"#c2bfb7"},naturstein:{name:"Natursteinplatten",...Qn("naturstein"),tile:3,rough:1,anti:"makro",farbe:"#b5a68c"},holz_laerche:{name:"Holzdielen Lärche",...Zt("holz",[.95,.85,.75]),tile:1.4,rough:1,anti:"makro",farbe:"#b9905a"},holz_natur:{name:"Holz natur",...Zt("gartenhaus"),tile:2,rough:1,anti:"makro",farbe:"#8a6a4a"},wpc_grau:{name:"WPC-Dielen grau",...Zt("wpc",[1.2,1.3,1.45]),tile:1.3,rough:.9,anti:"makro",farbe:"#7a7875"},kies:{name:"Zierkies",...Zt("kies"),tile:1.5,rough:1.3,anti:"stoch",farbe:"#d8d4cc"},mulch:{name:"Rindenmulch",...Zt("mulch"),tile:1.4,rough:1,anti:"stoch",farbe:"#5a3d28"},erde:{name:"Erde",...Zt("erde"),tile:1.5,rough:1,anti:"stoch",farbe:"#4b3626"},wasser:{name:"Wasser",textur:"wasser",tile:3,rough:.05,farbe:"#4e8fa3",wasser:!0},asphalt:{name:"Asphalt",...Qn("asphalt"),tile:3,rough:1,anti:"stoch",farbe:"#6b6c6e"},putz_weiss:{name:"Putz weiß",...Qn("putz",[1.6,1.6,1.65]),tile:2.5,rough:1,anti:"makro",farbe:"#e9e4da"},putz_grau:{name:"Putz grau",...Qn("putz",[1,1,1.02]),tile:2.5,rough:1,anti:"makro",farbe:"#9c9a95"},klinker_fassade:{name:"Klinkerfassade",...Zt("fassade_klinker"),tile:2.4,rough:1,anti:"makro",farbe:"#a0583e"},dach:{name:"Dachziegel anthrazit",...Qn("dach",[.6,.6,.62]),tile:2,rough:1,farbe:"#3a3b3e"},mauer_naturstein:{name:"Naturstein",...Qn("mauer"),tile:2.5,rough:1,anti:"makro",farbe:"#a39782"},mauer_beton:{name:"Betonstein",...Zt("betonstein"),tile:2.4,rough:1,anti:"makro",farbe:"#b3b1ab"},gabione:{name:"Gabione",...Zt("gabione"),tile:1,rough:1,anti:"makro",farbe:"#9b958b"},rinde:{name:"Rinde",...Qn("rinde"),tile:1.2,rough:1,farbe:"#4a3a2c"},laub:{name:"Laub",textur:"laub",tile:1.2,rough:.9,farbe:"#3f7a35"},z_doppelstab:{name:"Doppelstabmatte",geo:"doppelstab",textur:"doppelstab",rough:.45,metal:.3,farbe:"#33373a"},z_lamellen:{name:"Holz-Lamellen",geo:"lamellen",textur:"lamellen",rough:.8,farbe:"#b9905a"},z_wpc:{name:"WPC-Sichtschutz",geo:"wpc",textur:"wpc_zaun",rough:.7,farbe:"#6a6865"},z_jaeger:{name:"Jägerzaun",geo:"jaeger",textur:"jaegerzaun",rough:.9,farbe:"#7a5532"}};function AM(i,e){Et[i]=e}function La(i){const e=Et[i];return e?e.vorschau||e.foto||EM(e.textur):""}const Fo=new Map,RM=new Ec;let id=4;function CM(i){id=i}let sd=()=>{};function PM(i){sd=i}const fa=new Map;function er(i,e){let t;if(i instanceof HTMLCanvasElement)t=new Xx(i);else{fa.has(i)||fa.set(i,{tex:RM.load(i,s=>{for(const r of fa.get(i).kopien)r.needsUpdate=!0;sd()}),kopien:[]});const n=fa.get(i);t=n.tex.clone(),n.kopien.push(t)}return t.wrapS=t.wrapT=an,t.anisotropy=id,e&&(t.colorSpace=bt),t}function it(i,{repeat:e,tint:t}={}){const n=Et[i]||Et.rasen,s=e||[1/(n.tile||1),1/(n.tile||1)],r=`${i}|${s[0].toFixed(4)}|${s[1].toFixed(4)}|${t||""}`;if(Fo.has(r))return Fo.get(r);let a,o,l;if(n.foto)a=er(n.foto,!0),n.fotoNormal&&(o=er(n.fotoNormal,!1)),n.fotoRauheit&&(l=er(n.fotoRauheit,!1));else{const f=Ic(n.textur);a=er(f.color,!0),o=er(f.normal,!1)}for(const f of[a,o,l])f==null||f.repeat.set(...s);const c=Array.isArray(n.grundton)?new De().fromArray(n.grundton):new De(n.grundton||16777215);t&&c.multiply(new De(t));const h={map:a,normalMap:o,roughnessMap:l,roughness:n.rough??.8,metalness:n.metal??0,color:c};o&&(h.normalScale=new oe(n.foto?1:.8,n.foto?1:.8));let u;return n.wasser?u=new on({...h,color:7317171,roughness:.04,metalness:0,clearcoat:1,transparent:!0,opacity:.88,normalScale:new oe(.3,.3)}):u=new Ut(h),n.alpha&&(u.alphaTest=.5,u.side=Vt),n.anti&&n.foto&&rd(u,n.anti),Fo.set(r,u),u}const LM=`
varying vec3 vWeltPos;
float akHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float akNoise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(akHash(i), akHash(i + vec2(1, 0)), u.x), mix(akHash(i + vec2(0, 1)), akHash(i + vec2(1, 1)), u.x), u.y); }
float akMakro = 1.0;
`;function rd(i,e){i.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vWeltPos;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vWeltPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=LM+t.fragmentShader.replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec2 akW = vWeltPos.xz + vWeltPos.y * 0.37;
          float akN1 = akNoise(akW * 0.45), akN2 = akNoise(akW * 0.11 + 17.0);
          vec4 sampledDiffuseColor = texture2D(map, vMapUv);
          ${e==="stoch"?`
          vec2 akUv2 = mat2(0.8, -0.6, 0.6, 0.8) * vMapUv * 0.83 + vec2(0.37, 0.61);
          vec4 akC2 = texture2D(map, akUv2);
          float akW2 = smoothstep(0.3, 0.7, akNoise(akW * 0.7 + 5.3));
          sampledDiffuseColor = mix(sampledDiffuseColor, akC2, akW2);`:""}
          akMakro = akN1 * 0.55 + akN2 * 0.45;
          sampledDiffuseColor.rgb *= mix(${e==="stoch"?"0.82, 1.12":"0.88, 1.08"}, akMakro);
          diffuseColor *= sampledDiffuseColor;
        #endif`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor *= mix(0.88, 1.1, akMakro);`)},i.customProgramCacheKey=()=>"antiKachel-"+e}const zo=new Map;function vt(i,e=.7,t=0){const n=i+e+t;return zo.has(n)||zo.set(n,new Ut({color:i,roughness:e,metalness:t})),zo.get(n)}const Nc=""+new URL("ash_color-CJFpracT.png",import.meta.url).href,Uc=""+new URL("pine_color-3BIKvdLP.png",import.meta.url).href,kc=""+new URL("oak_color-BAD6jIv3.png",import.meta.url).href,Bo=new Map;let Da=()=>{};function DM(i){Da=i}function ad(i,e="laub"){return od(e==="staude"?kc:i>=125?Uc:Nc)}function od(i){if(Bo.has(i))return Bo.get(i);const e=new Dt;e.colorSpace=bt,e.anisotropy=8,e.generateMipmaps=!1,e.minFilter=Cn,e.magFilter=Nt,Bo.set(i,e);const t=new Image;return t.onload=()=>{const n=[];let r=t.width,a=t.height;const o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");l.drawImage(t,0,0);const c=l.getImageData(0,0,r,a);let h=0,u=0,f=0,d=0;for(let p=0;p<c.data.length;p+=4)c.data[p+3]>128&&(h+=c.data[p],u+=c.data[p+1],f+=c.data[p+2],d++);h/=d||1,u/=d||1,f/=d||1;for(let p=0;p<c.data.length;p+=4)c.data[p+3]<8&&(c.data[p]=h,c.data[p+1]=u,c.data[p+2]=f);l.putImageData(c,0,0);const g=(p,y)=>{let v=0;for(let x=3;x<p.length;x+=4)p[x]*y>=.5*255&&v++;return v/(p.length/4)},_=g(c.data,1);n.push(c);let m=o;for(;r>1||a>1;){r=Math.max(1,r>>1),a=Math.max(1,a>>1);const p=document.createElement("canvas");p.width=r,p.height=a;const y=p.getContext("2d");y.imageSmoothingQuality="high",y.drawImage(m,0,0,r,a);const v=y.getImageData(0,0,r,a);let x=1,I=12;for(let P=0;P<10;P++){const D=(x+I)/2;g(v.data,D)<_?x=D:I=D}for(let P=3;P<v.data.length;P+=4)v.data[P]=Math.min(255,v.data[P]*I);for(let P=0;P<v.data.length;P+=4)v.data[P+3]<8&&(v.data[P]=h,v.data[P+1]=u,v.data[P+2]=f);n.push(v),m=p}e.image=n[0],e.mipmaps=n,e.needsUpdate=!0,Da()},t.src=i,e}const ld=1.8,cd=1.6;function Oc(i){return i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_begin>",je.normal_fragment_begin.replaceAll("normal *= faceDirection;","").replaceAll("normal = normal * faceDirection;",""))},i.customProgramCacheKey=()=>"ohneRueckseitenUmkehr",i}const Ho=new Map;function hd(i){if(!Ho.has(i)){const e=ad(i),t=e.clone();t.wrapS=t.wrapT=an,t.repeat.set(1/.45,1/.45);const n=Da;t.userData.basis=e;const s=()=>{var a,o;(a=e.mipmaps)!=null&&a.length&&!((o=t.mipmaps)!=null&&o.length)&&(t.image=e.image,t.mipmaps=e.mipmaps,t.needsUpdate=!0)};Da=()=>{s(),n()},s();const r=new Ut({map:t,color:new De().setHSL(i/360,.25,.42,bt),roughness:.95});rd(r,"stoch"),Ho.set(i,r)}return Ho.get(i)}const Vo=new Map;function ud(i,e){const t=i+e;return Vo.has(t)||Vo.set(t,Oc(new Ut({map:ad(i,e),alphaTest:.5,side:Vt,vertexColors:!0,roughness:.85,metalness:0,color:new De().setHSL(i/360,.18,.86),envMapIntensity:.4}))),Vo.get(t)}function Kl(i,{hue:e=100,groesse:t=.5,dichte:n=1,seed:s=1,art:r="laub",mitte:a,global:o=.45}={}){const l=new R;t*=ld,n*=cd*1.6;const c=yn(s),h=[],u=[],f=[],d=[],g=[],_=a||i.reduce((D,L)=>D.add(L.c),new R).multiplyScalar(1/i.length),m=new R,p=new R,y=new Qe,v=new pt,x=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]];for(const D of i){const L=4*Math.PI*Math.pow((D.r.x*D.r.y+D.r.y*D.r.z+D.r.x*D.r.z)/3,1),E=Math.min(900,Math.max(8,Math.round(L/(t*t)*1.6*n)));for(let b=0;b<E;b++){const C=c()*2-1,N=c()*Math.PI*2,k=Math.sqrt(1-C*C),F=.62+Math.pow(c(),.5)*.4;m.set(Math.cos(N)*k*D.r.x,C*D.r.y,Math.sin(N)*k*D.r.z).multiplyScalar(F).add(D.c),l.copy(m).sub(D.c).normalize(),p.copy(m).sub(_).normalize().multiplyScalar(o).addScaledVector(l,1-o).normalize(),p.y=p.y*.8+.25,p.normalize(),v.set(c()*Math.PI,c()*Math.PI,c()*Math.PI),y.setFromEuler(v);const q=t*(.7+c()*.6),H=Math.min(1,Math.max(0,p.y*.5+.5)),se=Math.min(1,.35+F*.4+(m.y-_.y)/(D.r.y*4+.01)*.25)*(.45+.55*H)*(.85+c()*.2),Y=h.length/3;for(const[ae,ce]of x){const me=new R(ae*q,ce*q,0).applyQuaternion(y).add(m);h.push(me.x,me.y,me.z),u.push(p.x,p.y,p.z),f.push(ae+.5,ce+.5),d.push(se,se,se*.95)}g.push(Y,Y+1,Y+2,Y,Y+2,Y+3)}}const I=new Tt;I.setAttribute("position",new et(h,3)),I.setAttribute("normal",new et(u,3)),I.setAttribute("uv",new et(f,2)),I.setAttribute("color",new et(d,3)),I.setIndex(g),I.computeBoundingSphere(),I.computeBoundingBox();const P=new Ye(I,ud(e,r));return P.castShadow=!0,P.receiveShadow=!0,P}const IM=new wi(1,2);IM.userData.geteilt=!0;function NM(i,e,t,{hue:n=100,seed:s=1,groesse:r=.32*ld}={}){const a=yn(s),o=[],l=[],c=[],h=[],u=[],f=[{n:[0,0,1],a:i,b:e,p:(y,v)=>[y,v,t/2]},{n:[0,0,-1],a:i,b:e,p:(y,v)=>[y,v,-t/2]},{n:[0,1,0],a:i,b:t,p:(y,v)=>[y,e/2,v]},{n:[1,0,0],a:t,b:e,p:(y,v)=>[i/2,v,y]},{n:[-1,0,0],a:t,b:e,p:(y,v)=>[-i/2,v,y]}],d=new Qe,g=new pt,_=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]];for(const y of f){const v=Math.round(y.a*y.b/(r*r)*2.2*cd*4.2);for(let x=0;x<v;x++){const[I,P,D]=y.p((a()-.5)*y.a,(a()-.5)*y.b),L=(a()-.55)*.3,E=new R(I+y.n[0]*L,P+y.n[1]*L,D+y.n[2]*L);g.set(a()*Math.PI,a()*Math.PI,a()*Math.PI),d.setFromEuler(g);const b=r*(.7+a()*.6),C=(.62+a()*.3)*(.75+.25*((P+e/2)/e)),N=o.length/3,k=new R(y.n[0],y.n[1]+.3,y.n[2]).normalize();for(const[F,q]of _){const H=new R(F*b,q*b,0).applyQuaternion(d).add(E);o.push(H.x,H.y,H.z),l.push(k.x,k.y,k.z),c.push(F+.5,q+.5),h.push(C,C,C)}u.push(N,N+1,N+2,N,N+2,N+3)}}const m=new Tt;m.setAttribute("position",new et(o,3)),m.setAttribute("normal",new et(l,3)),m.setAttribute("uv",new et(c,2)),m.setAttribute("color",new et(h,3)),m.setIndex(u);const p=new Ye(m,ud(n,"laub"));return p.castShadow=!0,p.receiveShadow=!0,p}const ni=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700;function UM(i){const e=new Ox({antialias:!0,preserveDrawingBuffer:!1});e.setPixelRatio(Math.min(devicePixelRatio,ni?2:1.75)),e.shadowMap.enabled=!0,e.shadowMap.type=ni?Ju:Nn,e.toneMapping=ec,e.toneMappingExposure=1.05,e.outputColorSpace=bt,i.appendChild(e.domElement),CM(Math.min(8,e.capabilities.getMaxAnisotropy()));const t=new eu;t.fog=new pc(12176864,60,230);const n=new en(45,1,.1,600);n.position.set(-10,18,40);const s=new fy(n,e.domElement);s.enableDamping=!0,s.dampingFactor=.08,s.maxPolarAngle=Math.PI*.49,s.minDistance=3,s.maxDistance=120,s.target.set(8,0,12);const r=new Sr;r.scale.setScalar(450);const a=r.material.uniforms;a.turbidity.value=1.6,a.rayleigh.value=2.6,a.mieCoefficient.value=.003,a.mieDirectionalG.value=.82,t.add(r);const o=new Xf(16774112,3);o.castShadow=!0,o.shadow.mapSize.setScalar(ni?2048:4096),o.shadow.bias=ni?-4e-4:-2e-4,o.shadow.normalBias=.03,o.shadow.radius=ni?3:5,o.shadow.blurSamples=16,t.add(o,o.target);const l=new Hv(13624575,4872762,.6);t.add(l);const c=new kl(e),h=new eu,u=new Sr;u.scale.setScalar(450),h.add(u);let f=null;const d={env:null,tex:null,sonnenWinkel:0,letzte:null};new Oy().setDataType(tn).load("./hdri/himmel.hdr",N=>{N.mapping=wa;const{data:k,width:F,height:q}=N.image;let H=0,se=0;for(let ee=0;ee<q;ee++)for(let de=0;de<F;de++){const Se=(ee*F+de)*4,he=k[Se]+k[Se+1]+k[Se+2];he>H&&(H=he,se=de)}d.sonnenWinkel=(se/F-.5)*Math.PI*2;let Y=0,ae=0,ce=0,me=0;const we=Math.floor(q*.47);for(let ee=0;ee<F;ee+=4){const de=(we*F+ee)*4;Y+=k[de],ae+=k[de+1],ce+=k[de+2],me++}const ze=Math.max(Y,ae,ce)/me||1;d.dunst=new De(Y/me/ze,ae/me/ze,ce/me/ze).multiplyScalar(.82),d.tex=N,d.env=c.fromEquirectangular(N).texture,t.background=N,r.visible=!1,d.letzte&&L(...d.letzte)});const g=new rt;t.add(g);const _=new rt;t.add(_);const m=new rt;t.add(m);let p=null,y=null;if(!ni){const N=new Ln(1,1,{type:un,samples:4});p=new Cy(e,N),p.addPass(new Py(t,n)),y=new Un(t,n,1,1),y.updateGtaoMaterial({radius:.55,distanceExponent:1.6,thickness:1.2,scale:1.1,samples:12}),y.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),y.blendIntensity=.85,p.addPass(y),p.addPass(new ky),p.addPass(new Jf({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
        void main(){
          vec4 c = texture2D(tDiffuse, vUv);
          float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
          c.rgb = mix(vec3(l), c.rgb, 1.08);                    // Sättigung
          c.rgb = (c.rgb - 0.5) * 1.06 + 0.5;                   // Kontrast
          float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
          c.rgb *= mix(0.78, 1.0, v);                           // Vignette
          gl_FragColor = c;
        }`}))}const v=()=>p?p.render():e.render(t,n);let x=!0;const I=()=>{x=!0};s.addEventListener("change",I),PM(I),MM(I),DM(I);const P={autoRotate:!1};function D(){const N=i.clientWidth,k=i.clientHeight;if(!(!N||!k)){if(e.setSize(N,k,!1),p){p.setPixelRatio(e.getPixelRatio()),p.setSize(N,k);const F=e.getPixelRatio();y.setSize(Math.round(N*F*.5),Math.round(k*F*.5))}e.domElement.style.width="100%",e.domElement.style.height="100%",n.aspect=N/k,n.updateProjectionMatrix(),I()}}new ResizeObserver(D).observe(i);function L(N,k=new R(8,0,12),F=30){d.letzte=[N,k,F];const q=(N-6)/15,H=Math.PI*q,se=Math.max(.03,Math.sin(q*Math.PI))*.95,Y=new R(Math.cos(H)*Math.cos(se),Math.sin(se),Math.sin(H)*Math.cos(se));a.sunPosition.value.copy(Y),u.material.uniforms.sunPosition.value.copy(Y);for(const me of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])u.material.uniforms[me].value=a[me].value;o.position.copy(k).addScaledVector(Y,60),o.target.position.copy(k);const ae=o.shadow.camera;ae.left=ae.bottom=-F,ae.right=ae.top=F,ae.near=1,ae.far=160,ae.updateProjectionMatrix();const ce=1-Math.min(1,se/.5);if(o.color.setHSL(.09,.4+ce*.5,.92-ce*.25),o.intensity=1.2+2.4*Math.min(1,se/.35),l.intensity=.35+.35*Math.min(1,se/.4),t.fog.color.setHSL(.58,.32,.7-ce*.2),d.env){const me=H-d.sonnenWinkel+Math.PI;t.backgroundRotation.set(0,me,0),t.environmentRotation.set(0,me,0),t.environment=d.env,t.environmentIntensity=.45+.35*Math.min(1,se/.4),t.backgroundIntensity=.55+.45*Math.min(1,se/.4),l.intensity*=.35,t.fog.color.copy(d.dunst).multiplyScalar(t.backgroundIntensity)}else f&&f.dispose(),f=c.fromScene(h,.02),t.environment=f.texture,t.environmentIntensity=.55;I()}const E=new jf;function b(){requestAnimationFrame(b);const N=E.getDelta();if(P.autoRotate){const k=n.position.clone().sub(s.target);k.applyAxisAngle(new R(0,1,0),N*.12),n.position.copy(s.target).add(k),x=!0}P.vorFrame&&P.vorFrame(N),s.enabled&&s.update()&&(x=!0),x&&e.domElement.offsetParent!==null&&(x=!1,v())}D(),b();function C(){return v(),e.domElement.toDataURL("image/png")}return{renderer:e,scene:t,camera:n,controls:s,sonne:o,welt:g,garten:_,overlay:m,render:I,setTageszeit:L,state:P,screenshot:C,groesse:D}}const Gi=i=>{let e=0;for(let t=0;t<i.length;t++){const[n,s]=i[t],[r,a]=i[(t+1)%i.length];e+=n*a-r*s}return Math.abs(e/2)},Ti=i=>i.slice(1).reduce((e,t,n)=>e+Math.hypot(t[0]-i[n][0],t[1]-i[n][1]),0),kM=i=>Ti([...i,i[0]]),OM=64;function gn({x:i,y:e,rx:t,ry:n},s=OM,r=!1){const a=[];for(let o=0;o<s;o++){const l=o/s*Math.PI*2;a.push([+(i+Math.cos(l)*t).toFixed(3),+(e+Math.sin(l)*n).toFixed(3)])}return r&&a.push([...a[0]]),a}function Go(i,e){const t=Math.min(i[0],e[0]),n=Math.max(i[0],e[0]),s=Math.min(i[1],e[1]),r=Math.max(i[1],e[1]);return[[t,s],[n,s],[n,r],[t,r]]}function Ia(i,e){if(i.length<3)return i;let t=0,n=0;for(let s=1;s<i.length-1;s++){const r=Ss(i[s],i[0],i.at(-1));r>t&&(t=r,n=s)}return t<=e?[i[0],i.at(-1)]:[...Ia(i.slice(0,n+1),e).slice(0,-1),...Ia(i.slice(n),e)]}function FM(i,e=2,t=!1){let n=i;for(let s=0;s<e;s++){const r=t?[]:[n[0]],a=t?n.length:n.length-1;for(let o=0;o<a;o++){const l=n[o],c=n[(o+1)%n.length];r.push([l[0]*.75+c[0]*.25,l[1]*.75+c[1]*.25],[l[0]*.25+c[0]*.75,l[1]*.25+c[1]*.75])}t||r.push(n.at(-1)),n=r}return n.map(([s,r])=>[+s.toFixed(3),+r.toFixed(3)])}function ai(i,e,t,n,s=0,r=[]){const a=new Tr(i.map(([h,u])=>new oe(h,u)));for(const h of r)a.holes.push(new Hl(h.map(([u,f])=>new oe(u,f))));const o=t>=.03?.008:0,l=new Wa(a,{depth:Math.max(.005,t-o*2),bevelEnabled:o>0,bevelThickness:o,bevelSize:o,bevelOffset:-o,bevelSegments:1});o&&l.translate(0,0,o),s&&zM(l,s),l.rotateX(Math.PI/2),l.translate(0,e,0);const c=new Ye(l,n);return c.receiveShadow=!0,c.castShadow=t>.05,c}function zM(i,e){const t=e*Math.PI/180,n=Math.cos(t),s=Math.sin(t),r=i.attributes.uv;for(let a=0;a<r.count;a++){const o=r.getX(a),l=r.getY(a);r.setXY(a,o*n-l*s,o*s+l*n)}}function Be(i,e,t,n){const s=new Vn(i,e,t),r=s.attributes.uv,a=[[t,e],[t,e],[i,t],[i,t],[i,e],[i,e]];for(let l=0;l<6;l++)for(let c=0;c<4;c++){const h=l*4+c;r.setXY(h,r.getX(h)*a[l][0],r.getY(h)*a[l][1])}const o=new Ye(s,n);return o.castShadow=!0,o.receiveShadow=!0,o}function Na(i,e,t,n,s,r=0){const a=Math.hypot(e[0]-i[0],e[1]-i[1]),o=Be(a+n*.98,t,n,s);return o.position.set((i[0]+e[0])/2,r+t/2,(i[1]+e[1])/2),o.rotation.y=-Math.atan2(e[1]-i[1],e[0]-i[0]),o}function Ns(i,e){const t=e/2,n=[],s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[r-1],l=i[r+1],c=(u,f)=>{const d=f[0]-u[0],g=f[1]-u[1],_=Math.hypot(d,g)||1;return[d/_,g/_]};let h;if(o)if(l){const u=c(o,a),f=c(a,l),d=[-u[1],u[0]],g=[-f[1],f[0]],_=[d[0]+g[0],d[1]+g[1]],m=Math.hypot(..._)||1,p=[_[0]/m,_[1]/m],y=Math.min(3,1/Math.max(.3,p[0]*d[0]+p[1]*d[1]));h=[p[0]*y,p[1]*y]}else{const u=c(o,a);h=[-u[1],u[0]]}else{const u=c(a,l);h=[-u[1],u[0]]}n.push([a[0]+h[0]*t,a[1]+h[1]*t]),s.push([a[0]-h[0]*t,a[1]-h[1]*t])}return{poly:[...n,...s.reverse()],links:n,rechts:s.reverse()}}function Us([i,e],t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}function Ss([i,e],[t,n],[s,r]){const a=s-t,o=r-n,l=a*a+o*o||1,c=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/l));return Math.hypot(i-(t+c*a),e-(n+c*o))}function BM(i){const e=i.map(n=>n[0]),t=i.map(n=>n[1]);return{x0:Math.min(...e),y0:Math.min(...t),x1:Math.max(...e),y1:Math.max(...t)}}function fd(i,e,t){const n=i.attributes.position,s=new R;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);const a=Math.sin(s.x*3.1+e*10)*Math.cos(s.y*2.7+e*7)*Math.sin(s.z*3.3+e*3);s.multiplyScalar(1+a*t),n.setXYZ(r,s.x,s.y,s.z)}return i.computeVertexNormals(),i}const Fc=(i,e)=>[...i,...Object.keys(Et).filter(t=>e&&Et[t].kategorie===e)].map(t=>{var n;return[t,((n=Et[t])==null?void 0:n.name)||t]}),HM=["rasen","holz_laerche","wpc_grau","betonplatten","naturstein","pflaster_grau","pflaster_anthrazit","klinker","granit","bogenpflaster","kies","mulch"],VM=["pflaster_grau","pflaster_anthrazit","klinker","granit","bogenpflaster","naturstein","kies","betonplatten","holz_laerche"],GM={typ:"flaeche",name:"Fläche",geometrie:"polygon",schritt:"flaechen",felder:()=>[{key:"material",label:"Material",type:"select",options:Fc(HM,"flaeche")},{key:"hoehe",label:"Höhe über Rasen",type:"number",min:0,max:1.2,step:.01,einheit:"m"},{key:"dielenwinkel",label:"Verlegerichtung",type:"number",min:0,max:180,step:15,einheit:"°"}],build(i){const e=i.params,t=Math.max(.01,e.hoehe??.04);return ai(i.punkte,t,t+.02,it(e.material),e.dielenwinkel||0)},menge:i=>{var e;return[{name:(e=Et[i.params.material])==null?void 0:e.name,wert:Gi(i.punkte),einheit:"m²"}]},farbe2d:i=>{var e;return(e=Et[i.params.material])==null?void 0:e.farbe}},WM={typ:"weg",name:"Weg",geometrie:"linie",schritt:"wege",felder:()=>[{key:"material",label:"Material",type:"select",options:Fc(VM,"flaeche")},{key:"breite",label:"Breite",type:"number",min:.4,max:4,step:.1,einheit:"m"},{key:"kante",label:"Randsteine",type:"checkbox"}],build(i){const e=i.params,t=new rt;let n;if(i.form==="ring"&&i.kreis){const s=i.kreis,r=e.breite/2,a=gn({...s,rx:s.rx+r,ry:s.ry+r}),o=gn({...s,rx:Math.max(.1,s.rx-r),ry:Math.max(.1,s.ry-r)});t.add(ai(a,.035,.05,it(e.material),0,[o])),n=[[...a,a[0]],[...o,o[0]]]}else{const{poly:s,links:r,rechts:a}=Ns(i.punkte,e.breite);t.add(ai(s,.035,.05,it(e.material))),n=[r,a]}if(e.kante){const s=it("mauer_beton",{tint:"#d8d6d0"});for(const r of n)for(let a=1;a<r.length;a++)t.add(Na(r[a-1],r[a],.09,.08,s,-.03))}return t},menge:i=>{var e;return[{name:`${(e=Et[i.params.material])==null?void 0:e.name} (Weg)`,wert:Ti(i.punkte)*i.params.breite,einheit:"m²"},...i.params.kante?[{name:"Randsteine",wert:Ti(i.punkte)*2,einheit:"m"}]:[]]},farbe2d:i=>{var e;return(e=Et[i.params.material])==null?void 0:e.farbe}};fd(new wi(1,2),.3,.18);const XM=new Ps(.5,1,5,1,!0).translate(0,.5,0),Fu=["#e8577a","#f2c94c","#ffffff","#9b6ad6","#f08a3c","#d93a4a"],jM={typ:"beet",name:"Beet",geometrie:"polygon",schritt:"pflanzen",felder:()=>[{key:"material",label:"Boden",type:"select",options:Fc(["mulch","erde","kies"])},{key:"dichte",label:"Bepflanzung",type:"number",min:0,max:3,step:.1,einheit:"/m²"},{key:"bluete",label:"Blühend",type:"checkbox"},{key:"hochbeet",label:"Hochbeet-Höhe",type:"number",min:0,max:1.2,step:.05,einheit:"m"}],build(i){const e=i.params,t=new rt,n=e.hochbeet||0,s=n>0?n-.05:.03;if(t.add(ai(i.punkte,s,s+.02,it(e.material))),n>0){const _=it("holz_laerche"),m=[...i.punkte,i.punkte[0]];for(let p=1;p<m.length;p++)t.add(Na(m[p-1],m[p],n,.06,_))}const r=yn(ks(i.id)),a=BM(i.punkte),o=Math.min(600,Math.round(Gi(i.punkte)*(e.dichte??1))),l=[],c=[],h=[];let u=0;for(;l.length+c.length<o&&u++<o*20;){const _=[a.x0+r()*(a.x1-a.x0),a.y0+r()*(a.y1-a.y0)];if(Us(_,i.punkte)){const m=.2+r()*.3;l.push([_,m,r()]);const p=Fu[Math.floor(r()*Fu.length)];if(e.bluete&&r()<.6)for(let y=0;y<12;y++)h.push([[_[0]+(r()-.5)*m*1.5,_[1]+(r()-.5)*m*1.5],s+m*(.9+r()*.5),p])}}const f=new Ie,d=new Qe,g=new De;if(l.length)for(const[_,m]of[[0,105],[1,85]]){const p=l.filter((y,v)=>v%2===_).slice(0,220).map(([y,v])=>({c:new R(y[0],s+v*.55,y[1]),r:new R(v,v*.75,v)}));p.length&&t.add(Kl(p,{hue:m,groesse:.15,dichte:.55,seed:ks(i.id)+_,art:"staude",global:0}))}if(c.length){const _=new Pn(XM,new Ut({roughness:.9,side:Vt}),c.length);c.forEach(([m,p,y],v)=>{f.compose(new R(m[0],s,m[1]),d.identity(),new R(p*.35,p*1.5,p*.35)),_.setMatrixAt(v,f),_.setColorAt(v,g.setHSL(.2+y*.06,.35,.26+y*.1))}),_.castShadow=!0,t.add(_)}if(h.length){const _=new Pn(new hi(.028,.012,.012,7),new Ut({roughness:.7}),h.length),m=new pt;h.forEach(([p,y,v],x)=>{m.set((r()-.5)*.8,0,(r()-.5)*.8),f.compose(new R(p[0],y,p[1]),d.setFromEuler(m),new R(1,1,1).multiplyScalar(.7+r()*.6)),_.setMatrixAt(x,f),_.setColorAt(x,g.set(v).multiplyScalar(.85))}),_.castShadow=!0,t.add(_)}return t},menge:i=>[{name:i.params.hochbeet>0?"Hochbeet":"Beetfläche",wert:Gi(i.punkte),einheit:"m²"},{name:"Stauden/Gräser (ca.)",wert:Math.round(Gi(i.punkte)*(i.params.dichte??1)),einheit:"Stk"},...i.params.hochbeet>0?[{name:"Hochbeet-Einfassung",wert:kM(i.punkte),einheit:"m"}]:[]],farbe2d:i=>i.params.material==="kies"?"#cfc6b4":"#6f8f48"};function ks(i){let e=7;for(const t of String(i))e=e*31+t.charCodeAt(0)>>>0;return e||1}const qM=()=>Object.entries(Et).filter(([i,e])=>i.startsWith("z_")||e.kategorie==="zaun").map(([i,e])=>[i,e.name]),YM=()=>Object.entries(Et).filter(([i,e])=>["mauer_naturstein","mauer_beton","gabione","klinker_fassade","putz_grau"].includes(i)||e.kategorie==="mauer").map(([i,e])=>[i,e.name]);function KM(i,e){const t=Ti(i),n=Math.max(1,Math.round(t/e)),s=t/n,r=[i[0]];let a=0,o=0;for(let l=1;l<=n;l++){let c=l*s;for(;a<i.length-1;){const h=i[a],u=i[a+1],f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(o+f>=c-1e-6){const d=(c-o)/(f||1);r.push([h[0]+(u[0]-h[0])*d,h[1]+(u[1]-h[1])*d]);break}o+=f,a++}}return r}const Es=new Vn(1,1,1);Es.userData.geteilt=!0;const Wo=new Map,Bi=(i,e,t)=>{const n=`${i.toFixed(3)}|${e.toFixed(3)}|${t.toFixed(3)}`;if(!Wo.has(n)){const s=Be(i,e,t,null).geometry;s.userData.geteilt=!0,Wo.set(n,s)}return Wo.get(n)},Qt=(i,e,t,n=0,s=1,r=1,a=1)=>new Ie().compose(new R(i,e,t),new Qe().setFromEuler(new pt(0,0,n)),new R(s,r,a));function $M(i,e,t,n){const s=[],r=(a,o)=>{const l={geo:a,mat:o,m:[]};return s.push(l),l};if(i==="doppelstab"){const a=vt(n.pfosten||"#383e42",.42,.35),o=t-.05,l=r(Es,a),c=r(Es,a),h=Math.max(2,Math.round((e-.08)/.05));for(let f=0;f<=h;f++)l.m.push(Qt(-e/2+.04+f*(e-.08)/h,.05+o/2,0,0,.006,o+.03,.006));const u=Math.max(2,Math.round(o/.2));for(let f=0;f<=u;f++)for(const d of[-1,1])c.m.push(Qt(0,.07+f*(o-.04)/u,d*.0065,0,e-.04,.007,.007))}else if(i==="lamellen"){const a=it("holz_laerche"),o=.07,l=.02,c=r(Bi(o,t-.06,.022),a),h=Math.floor((e-.1)/(o+l)),u=-((h-1)*(o+l))/2;for(let d=0;d<h;d++)c.m.push(Qt(u+d*(o+l),.05+(t-.06)/2,0));r(Bi(e-.08,.07,.045),a).m.push(Qt(0,.15,-.034),Qt(0,t-.12,-.034))}else if(i==="wpc"){const a=it("wpc_grau"),o=vt("#3b3e42",.4,.5),l=.145,c=Math.max(1,Math.floor((t-.06)/l)),h=r(Bi(e-.1,l-.004,.021),a);for(let f=0;f<c;f++)h.m.push(Qt(0,.05+l/2+f*l,0));r(Es,o).m.push(Qt(0,.05+c*l+.015,0,0,e-.08,.03,.04))}else if(i==="jaeger"){const a=it("holz_natur"),o=Math.PI/4.6,l=(t-.1)/Math.cos(o),c=r(Bi(.045,l,.018),a),h=Math.max(2,Math.round(e/.32));for(let f=0;f<h;f++){const d=-e/2+(f+.5)*e/h;c.m.push(Qt(d,.05+(t-.1)/2,.012,o),Qt(d,.05+(t-.1)/2,-.012,-o))}r(Bi(e,.06,.04),a).m.push(Qt(0,t*.25,-.035),Qt(0,t*.8,-.035))}return s}function ZM(i,e,t){const n=new rt,s=new Map,r=(c,h,u)=>{const f=c.uuid+h.uuid;s.has(f)||s.set(f,{geo:c,mat:h,m:[]}),s.get(f).m.push(u)},a=i==="jaeger"?it("holz_natur"):i==="lamellen"?it("holz_laerche"):vt(t.pfosten||"#383e42",.42,.35),o=i==="doppelstab"?Bi(.06,t.hoehe+.06,.04):Bi(.09,t.hoehe+.06,.09),l=i==="doppelstab"?vt("#2a2d30",.5):null;for(let c=1;c<e.length;c++){const h=e[c-1],u=e[c],f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(f<.05)continue;const d=Math.max(1,Math.round(f/t.feld)),g=f/d,_=-Math.atan2(u[1]-h[1],u[0]-h[0]),m=$M(i,g,t.hoehe,t),p=new Qe().setFromEuler(new pt(0,_,0));for(let y=0;y<d;y++){const v=(y+.5)/d,x=new Ie().compose(new R(h[0]+(u[0]-h[0])*v,0,h[1]+(u[1]-h[1])*v),p,new R(1,1,1));for(const I of m)for(const P of I.m)r(I.geo,I.mat,x.clone().multiply(P))}for(let y=0;y<=d;y++){if(c>1&&y===0)continue;const v=y/d,x=new R(h[0]+(u[0]-h[0])*v,(t.hoehe+.06)/2,h[1]+(u[1]-h[1])*v);r(o,a,new Ie().compose(x,p,new R(1,1,1))),l&&r(Es,l,new Ie().compose(x.clone().setY(t.hoehe+.07),p,new R(.065,.015,.045)))}}for(const{geo:c,mat:h,m:u}of s.values()){const f=new Pn(c,h,u.length);u.forEach((d,g)=>f.setMatrixAt(g,d)),f.castShadow=!0,f.receiveShadow=!0,f.computeBoundingSphere(),n.add(f)}return n}const JM={typ:"zaun",name:"Zaun",geometrie:"linie",schritt:"zaeune",felder:()=>[{key:"material",label:"Zauntyp",type:"select",options:qM()},{key:"hoehe",label:"Höhe",type:"number",min:.6,max:2.5,step:.1,einheit:"m"},{key:"feld",label:"Feldbreite",type:"number",min:1,max:3,step:.1,einheit:"m"},{key:"pfosten",label:"Pfostenfarbe",type:"color"}],build(i){const e=i.params,t=new rt,n=i.form==="kurve"||i.form==="ring"?KM(i.punkte,e.feld):i.punkte,s=Et[e.material]||{};if(s.geo)return ZM(s.geo,n,e);const r=vt(e.pfosten||"#333",.5,.3),a=s.alpha?.06:.09;for(let o=1;o<n.length;o++){const l=n[o-1],c=n[o],h=Math.hypot(c[0]-l[0],c[1]-l[1]);if(h<.05)continue;const u=Math.max(1,Math.round(h/e.feld)),f=h/u,d=-Math.atan2(c[1]-l[1],c[0]-l[0]),g=it(e.material,{repeat:[1/f,1/e.hoehe]});for(let _=0;_<u;_++){const m=(_+.5)/u,p=l[0]+(c[0]-l[0])*m,y=l[1]+(c[1]-l[1])*m;let v;if(s.alpha){const x=new ci(f-a,e.hoehe),I=x.attributes.uv;for(let P=0;P<I.count;P++)I.setXY(P,I.getX(P)*f,I.getY(P)*e.hoehe);v=new Ye(x,g),v.castShadow=v.receiveShadow=!0}else v=Be(f-a,e.hoehe,.03,g);v.position.set(p,e.hoehe/2+.04,y),v.rotation.y=d,t.add(v)}for(let _=0;_<=u;_++){if(o>1&&_===0)continue;const m=_/u,p=Be(a,e.hoehe+.08,a,r);p.position.set(l[0]+(c[0]-l[0])*m,(e.hoehe+.08)/2,l[1]+(c[1]-l[1])*m),p.rotation.y=d,t.add(p)}}return t},menge:i=>{var t;const e=Ti(i.punkte);return[{name:`${(t=Et[i.params.material])==null?void 0:t.name} ${i.params.hoehe.toFixed(2)} m`,wert:e,einheit:"m"},{name:"Zaunpfosten (ca.)",wert:Math.ceil(e/i.params.feld)+1,einheit:"Stk"}]},farbe2d:i=>{var e;return((e=Et[i.params.material])==null?void 0:e.farbe)||"#333"},strich2d:()=>.12};function QM(i,e,t){const n=vt("#b8bcc0",.35,.8),s=[];for(let a=1;a<i.length;a++){const o=i[a-1],l=i[a],c=Math.hypot(l[0]-o[0],l[1]-o[1]),h=-Math.atan2(l[1]-o[1],l[0]-o[0]),u=new Ie().compose(new R((o[0]+l[0])/2,0,(o[1]+l[1])/2),new Qe().setFromEuler(new pt(0,h,0)),new R(1,1,1)),f=Math.round(c/.1),d=Math.round(e/.1),g=Math.max(1,Math.round(t/.1)),_=.0045;for(const m of[-1,1]){for(let p=0;p<=f;p++)s.push(u.clone().multiply(Qt(-c/2+p*c/f,e/2,m*t/2,0,_,e,_)));for(let p=0;p<=d;p++)s.push(u.clone().multiply(Qt(0,p*e/d,m*t/2,0,c,_,_)))}for(let m=0;m<=f;m++)s.push(u.clone().multiply(Qt(-c/2+m*c/f,e,0,0,_,_,t)));for(let m=0;m<=g;m++)s.push(u.clone().multiply(Qt(0,e,-t/2+m*t/g,0,c,_,_)))}const r=new Pn(Es,n,s.length);return s.forEach((a,o)=>r.setMatrixAt(o,a)),r.castShadow=!0,r.computeBoundingSphere(),r}const e1={typ:"mauer",name:"Mauer",geometrie:"linie",schritt:"zaeune",felder:()=>[{key:"material",label:"Material",type:"select",options:YM()},{key:"hoehe",label:"Höhe",type:"number",min:.2,max:2.5,step:.05,einheit:"m"},{key:"dicke",label:"Dicke",type:"number",min:.1,max:.8,step:.05,einheit:"m"}],build(i){const e=i.params,t=new rt,n=i.punkte,s=it(e.material),r=e.material==="gabione",a=r?null:vt("#d9d6cf",.75);for(let o=1;o<n.length;o++)t.add(Na(n[o-1],n[o],e.hoehe,r?e.dicke-.01:e.dicke,s)),a&&t.add(Na(n[o-1],n[o],.05,e.dicke+.06,a,e.hoehe));return r&&t.add(QM(n,e.hoehe,e.dicke)),t},menge:i=>{var e;return[{name:`${(e=Et[i.params.material])==null?void 0:e.name}mauer ${i.params.hoehe.toFixed(2)} m`,wert:Ti(i.punkte),einheit:"m"}]},farbe2d:i=>{var e;return(e=Et[i.params.material])==null?void 0:e.farbe},strich2d:i=>i.params.dicke},t1={typ:"hecke",name:"Hecke",geometrie:"linie",schritt:"zaeune",felder:()=>[{key:"hoehe",label:"Höhe",type:"number",min:.4,max:4,step:.1,einheit:"m"},{key:"dicke",label:"Tiefe",type:"number",min:.3,max:2,step:.1,einheit:"m"},{key:"farbton",label:"Grünton",type:"number",min:70,max:150,step:5,einheit:""}],build(i){const e=i.params,t=new rt,n=i.punkte,s=yn(ks(i.id)),r=hd(e.farbton);for(let a=1;a<n.length;a++){const o=n[a-1],l=n[a],c=Math.hypot(l[0]-o[0],l[1]-o[1])+e.dicke*.9,h=new Vn(c,e.hoehe,e.dicke,Math.ceil(c*3),Math.ceil(e.hoehe*3),3),u=h.attributes.position,f=h.attributes.uv,d=new R,g=s()*10;for(let p=0;p<u.count;p++){d.fromBufferAttribute(u,p);const v=.06+(Math.sin(d.x*4.3+g)*Math.cos(d.y*3.7+g)*.5+Math.sin(d.x*9.1+d.y*7.3)*.5)*.05;d.z+=Math.sign(d.z)*v,d.y+=d.y>0?v*.8:0,Math.abs(d.x)>c/2-.01&&(d.x+=Math.sign(d.x)*v),u.setXYZ(p,d.x,d.y,d.z),f.setXY(p,f.getX(p)*c,f.getY(p)*e.hoehe)}h.computeVertexNormals();const _=new Ye(h,r);_.castShadow=_.receiveShadow=!0,_.position.set((o[0]+l[0])/2,e.hoehe/2,(o[1]+l[1])/2),_.rotation.y=-Math.atan2(l[1]-o[1],l[0]-o[0]),t.add(_);const m=NM(c,e.hoehe,e.dicke,{hue:e.farbton,seed:ks(i.id)+a});m.position.copy(_.position),m.rotation.copy(_.rotation),t.add(m)}return t},menge:i=>[{name:`Hecke ${i.params.hoehe.toFixed(1)} m`,wert:Ti(i.punkte),einheit:"m"},{name:"Heckenpflanzen (ca. 3/m)",wert:Math.ceil(Ti(i.punkte)*3),einheit:"Stk"}],farbe2d:()=>"#3f7a35",strich2d:i=>i.params.dicke};class n1{constructor(e){Ri(this,"m_w",123456789);Ri(this,"m_z",987654321);Ri(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}}class Xo{constructor(e=new R,t=new pt,n=0,s=0,r=0,a=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=s,this.level=r,this.sectionCount=a,this.segmentCount=o}}const i1={Oak:"oak"},dd={Double:"double"},s1={Oak:"oak"},Sa={Deciduous:"deciduous",Evergreen:"evergreen"};class pd{constructor(){this.seed=0,this.type=Sa.Deciduous,this.bark={type:i1.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:s1.Oak,billboard:dd.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]=="object"&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}}const r1=26867,a1="deciduous",o1={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},l1={levels:2,angle:{1:48,2:75,3:60},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.11,1:.09,2:.05,3:.09},length:{0:23.87,1:18,2:5.59,3:4.6},radius:{0:.81,1:.56,2:.76,3:.7},sections:{0:12,1:10,2:10,3:10},segments:{0:8,1:6,2:4,3:3},start:{1:.53,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.07,2:0,3:0}},c1={type:"ash",billboard:"double",angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},h1={enabled:!1},u1={seed:r1,type:a1,bark:o1,branch:l1,leaves:c1,trellis:h1},f1=36330,d1="deciduous",p1={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},m1={levels:3,angle:{1:48,2:75,3:60},children:{0:7,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{0:.03,1:.25,2:.2,3:.09},length:{0:43.47,1:27.14,2:9.51,3:4.6},radius:{0:2,1:.63,2:.76,3:.7},sections:{0:12,1:8,2:6,3:4},segments:{0:12,1:6,2:4,3:3},start:{1:.23,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.09,1:-.07,2:0,3:0}},g1={type:"ash",billboard:"double",angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},_1={enabled:!1},x1={seed:f1,type:d1,bark:p1,branch:m1,leaves:g1,trellis:_1},v1=29919,y1="deciduous",M1={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},b1={levels:3,angle:{1:39,2:39,3:51},children:{0:10,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{0:-.05,1:.2,2:.16,3:.049999999999999996},length:{0:45,1:29.42,2:15.3,3:4.6},radius:{0:3.03,1:.53,2:.79,3:1.11},sections:{0:12,1:8,2:6,3:4},segments:{0:8,1:6,2:4,3:3},start:{1:.32,2:.34,3:0},taper:{0:.7,1:.6199999999999999,2:.7599999999999999,3:0},twist:{0:.09,1:-.07,2:0,3:0}},S1={type:"ash",billboard:"double",angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},E1={enabled:!1},w1={seed:v1,type:y1,bark:M1,branch:b1,leaves:S1,trellis:E1},T1=36330,A1="deciduous",R1={type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},C1={levels:2,angle:{1:70,2:35,3:7},children:{0:4,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{0:.04,1:-.010000000000000007,2:.12,3:.02},length:{0:23.99,1:3.36,2:7.699999999999999,3:1},radius:{0:.36999999999999994,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.44999999999999996,2:.32999999999999996,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},P1={type:"aspen",billboard:"double",angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},L1={enabled:!1},D1={seed:T1,type:A1,bark:R1,branch:C1,leaves:P1,trellis:L1},I1=18020,N1="deciduous",U1={type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},k1={levels:2,angle:{1:75,2:32,3:7},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{0:.05,1:.12,2:.12,3:.02},length:{0:50,1:6.07,2:11.19,3:1},radius:{0:.72,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.59,2:.35,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},O1={type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},F1={enabled:!1},z1={seed:I1,type:N1,bark:U1,branch:k1,leaves:O1,trellis:F1},B1=30631,H1="deciduous",V1={type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},G1={levels:2,angle:{1:47,2:63,3:7},children:{0:10,1:6,2:0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{0:.05,1:-.030000000000000006,2:.12,3:.02},length:{0:69.60000000000001,1:18.56,2:11.19,3:1},radius:{0:1.11,1:.5800000000000001,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.62,2:.049999999999999975,3:0},taper:{0:.7000000000000001,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},W1={type:"aspen",billboard:"double",angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},X1={enabled:!1},j1={seed:B1,type:H1,bark:V1,branch:G1,leaves:W1,trellis:X1},q1=45590,Y1="deciduous",K1={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},$1={levels:3,angle:{1:21.521739130434785,2:62.608695652173914,3:60},children:{0:7,1:3,2:2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.11,1:.09,2:.05,3:.09},length:{0:.1,1:15.302173913043479,2:5.59,3:4.6},radius:{0:.5793478260869566,1:.9521739130434783,2:.76,3:.7},sections:{0:6,1:6,2:10,3:10},segments:{0:4,1:4,2:4,3:3},start:{1:.53,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.07,2:0,3:0}},Z1={type:"ash",billboard:"double",angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},J1={enabled:!1},Q1={seed:q1,type:Y1,bark:K1,branch:$1,leaves:Z1,trellis:J1},eb=45590,tb="deciduous",nb={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},ib={levels:2,angle:{1:19.565217391304348,2:27.39130434782609,3:60},children:{0:10,1:3,2:2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.021739130434782594,1:.10869565217391308,2:.05,3:.09},length:{0:.1,1:19.645652173913046,2:7.701086956521739,3:4.6},radius:{0:.5793478260869566,1:.9521739130434783,2:.76,3:.7},sections:{0:3,1:4,2:10,3:10},segments:{0:4,1:4,2:4,3:3},start:{1:.6413043478260869,2:.7065217391304348,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3586956521739131,1:-.043478260869565244,2:0,3:0}},sb={type:"aspen",billboard:"double",angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},rb={enabled:!1},ab={seed:eb,type:tb,bark:nb,branch:ib,leaves:sb,trellis:rb},ob=31343,lb="evergreen",cb={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},hb={levels:3,angle:{1:66.52173913043478,2:52.82608695652174,3:0},children:{0:13,1:4,2:4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{0:.05434782608695654,1:.06521739130434778,2:.05,3:.09},length:{0:10.958695652173914,1:21.81739130434783,2:13.130434782608695,3:5.529347826086957},radius:{0:.5793478260869566,1:.9521739130434783,2:.6858695652173914,3:.7391304347826086},sections:{0:4,1:3,2:3,3:10},segments:{0:3,1:3,2:3,3:3},start:{1:.14130434782608695,2:.29347826086956524,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.03260869565217389,2:0,3:0}},ub={type:"pine",billboard:"double",angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},fb={enabled:!1},db={seed:ob,type:lb,bark:cb,branch:hb,leaves:ub,trellis:fb},pb=30895,mb="deciduous",gb={type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},_b={levels:3,angle:{1:54,2:58,3:32},children:{0:4,1:2,2:3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{0:.07,1:-.08,2:.11,3:.09},length:{0:28.08,1:4.55,2:9.78,3:7.16},radius:{0:1,1:1.02,2:.69,3:1.19},sections:{0:16,1:9,2:8,3:1},segments:{0:7,1:5,2:3,3:3},start:{1:.49,2:.06,3:.12},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},xb={type:"oak",billboard:"double",angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},vb={enabled:!1},yb={seed:pb,type:mb,bark:gb,branch:_b,leaves:xb,trellis:vb},Mb=35729,bb="deciduous",Sb={type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},Eb={levels:3,angle:{1:54,2:58,3:32},children:{0:6,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{0:0,1:-.1,2:-.15,3:.09},length:{0:37.24,1:11.08,2:12.39,3:7.16},radius:{0:1.41,1:.9,2:.69,3:1.19},sections:{0:8,1:6,2:3,3:1},segments:{0:7,1:5,2:3,3:3},start:{1:.49,2:.06,3:.12},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},wb={type:"oak",billboard:"double",angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},Tb={enabled:!1},Ab={seed:Mb,type:bb,bark:Sb,branch:Eb,leaves:wb,trellis:Tb},Rb=23399,Cb="deciduous",Pb={type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},Lb={levels:3,angle:{1:54,2:43,3:32},children:{0:9,1:5,2:3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{0:-.04,1:.16,2:-.06,3:.09},length:{0:47.7,1:29.39,2:17.62,3:7.16},radius:{0:3,1:.69,2:.69,3:1.19},sections:{0:16,1:9,2:8,3:3},segments:{0:12,1:5,2:3,3:3},start:{1:.35,2:.1,3:0},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},Db={type:"oak",billboard:"double",angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},Ib={enabled:!1},Nb={seed:Rb,type:Cb,bark:Pb,branch:Lb,leaves:Db,trellis:Ib},Ub=11744,kb="evergreen",Ob={type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},Fb={levels:1,angle:{1:117,2:60,3:60},children:{0:91,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:39.55,1:12.12,2:10,3:1},radius:{0:.55,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.16,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},zb={type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},Bb={enabled:!1},Hb={seed:Ub,type:kb,bark:Ob,branch:Fb,leaves:zb,trellis:Bb},Vb=13977,Gb="evergreen",Wb={type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},Xb={levels:1,angle:{1:110,2:16,3:60},children:{0:82,1:3,2:5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:50,1:23.87,2:14.08,3:1},radius:{0:1.05,1:.36,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.27,2:.14,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},jb={type:"pine",billboard:"double",angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},qb={enabled:!1},Yb={seed:Vb,type:Gb,bark:Wb,branch:Xb,leaves:jb,trellis:qb},Kb=44166,$b="evergreen",Zb={type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},Jb={levels:1,angle:{1:129.1304347826087,2:16,3:60},children:{0:100,1:3,2:0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:65.25217391304348,1:34.84782608695652,2:27.246739130434783,3:1},radius:{0:1.271739130434783,1:.366304347826087,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.29347826086956524,2:.14,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},Qb={type:"pine",billboard:"double",angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},eS={enabled:!1},tS={seed:Kb,type:$b,bark:Zb,branch:Jb,leaves:Qb,trellis:eS},nS=41563,iS="deciduous",sS={type:"oak",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},rS={levels:3,angle:{1:26,2:79,3:0},children:{0:7,1:5,2:1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{0:0,1:.02,2:-.41,3:.09},length:{0:4.8,1:16.9,2:11.3,3:11.1},radius:{0:.27,1:.71,2:.84,3:.48},sections:{0:6,1:12,2:10,3:4},segments:{0:3,1:3,2:3,3:3},start:{1:.19,2:.1,3:.06},taper:{0:.6,1:.5,2:.5,3:.5},twist:{0:-.02,1:-.01,2:.09,3:0}},aS={type:"ash",billboard:"single",angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},oS={enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173},lS={seed:nS,type:iS,bark:sS,branch:rS,leaves:aS,trellis:oS},cS={"Ash Small":u1,"Ash Medium":x1,"Ash Large":w1,"Aspen Small":D1,"Aspen Medium":z1,"Aspen Large":j1,"Bush 1":Q1,"Bush 2":ab,"Bush 3":db,"Oak Small":yb,"Oak Medium":Ab,"Oak Large":Nb,"Pine Small":Hb,"Pine Medium":Yb,"Pine Large":tS,Trellis:lS};function hS(i){const e=cS[i];return e?structuredClone(e):new pd}const uS=""+new URL("birch_ao_1k-D_QkgyKp.jpg",import.meta.url).href,fS=""+new URL("birch_color_1k-BxIEDKXK.jpg",import.meta.url).href,dS=""+new URL("birch_normal_1k-CoYvyauc.jpg",import.meta.url).href,pS=""+new URL("birch_roughness_1k-nwUM-ujJ.jpg",import.meta.url).href,mS=""+new URL("oak_ao_1k-DUJgKwMD.jpg",import.meta.url).href,gS=""+new URL("oak_color_1k-Y6fizdck.jpg",import.meta.url).href,_S=""+new URL("oak_normal_1k-C8kyIEQv.jpg",import.meta.url).href,xS=""+new URL("oak_roughness_1k-CDkyKLZe.jpg",import.meta.url).href,vS=""+new URL("pine_ao_1k-M9zlsXzR.jpg",import.meta.url).href,yS=""+new URL("pine_color_1k-CQnxaxS7.jpg",import.meta.url).href,MS=""+new URL("pine_normal_1k-CKm2gZQI.jpg",import.meta.url).href,bS=""+new URL("pine_roughness_1k-D4KXjOPr.jpg",import.meta.url).href,SS=""+new URL("willow_ao_1k-CEi-a1m7.jpg",import.meta.url).href,ES=""+new URL("willow_color_1k-Cjz3kXt5.jpg",import.meta.url).href,wS=""+new URL("willow_normal_1k-DyDN-1zE.jpg",import.meta.url).href,TS=""+new URL("willow_roughness_1k-COeQgRxo.jpg",import.meta.url).href,md=""+new URL("aspen_color-Cpgr1Q0w.png",import.meta.url).href,AS=new Ec;function da(i,e,t={x:1,y:1}){const n=gd.bark[i][e];return n.wrapS=an,n.wrapT=an,n.repeat.x=t.x,n.repeat.y=1/t.y,n}function RS(i){return gd.leaves[i]}const Ct=(i,e=!0)=>{const t=AS.load(i);return t.premultiplyAlpha=!0,e&&(t.colorSpace=bt),t},gd={bark:{birch:{ao:Ct(uS,!1),color:Ct(fS),normal:Ct(dS,!1),roughness:Ct(pS,!1)},oak:{ao:Ct(mS,!1),color:Ct(gS),normal:Ct(_S,!1),roughness:Ct(xS,!1)},pine:{ao:Ct(vS,!1),color:Ct(yS),normal:Ct(MS,!1),roughness:Ct(bS,!1)},willow:{ao:Ct(SS,!1),color:Ct(ES),normal:Ct(wS,!1),roughness:Ct(TS,!1)}},leaves:{ash:Ct(Nc),aspen:Ct(md),oak:Ct(kc),pine:Ct(Uc)}};class CS extends rt{constructor(e){super(),this.name="Trellis",this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){const e=this.options;this.dispose(),this.material=new Ut({color:e.color,roughness:.8}),this.hCylinderGeo=new hi(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new hi(e.cylinderRadius,e.cylinderRadius,e.height,8);const t=Math.floor(e.height/e.spacing)+1;for(let s=0;s<t;s++){const r=s*e.spacing,a=new Ye(this.hCylinderGeo,this.material);a.position.set(e.position.x,e.position.y+r,e.position.z),this.add(a)}const n=Math.floor(e.width/e.spacing)+1;for(let s=0;s<n;s++){const r=-e.width/2+s*e.spacing,a=new Ye(this.vCylinderGeo,this.material);a.position.set(e.position.x+r,e.position.y+e.height/2,e.position.z),this.add(a)}}getNearestPoint(e){const t=this.options,n=t.position.x,s=t.position.y,r=t.position.z,a=n-t.width/2,o=n+t.width/2,l=s,c=s+t.height,h=Math.max(a,Math.min(o,e.x)),u=Math.max(l,Math.min(c,e.y)),f=Math.round((u-l)/t.spacing)*t.spacing+l,d=Math.max(l,Math.min(c,f)),g=Math.round((h-a)/t.spacing)*t.spacing+a,_=Math.max(a,Math.min(o,g)),m=new R(h,d,r),p=new R(_,u,r),y=e.distanceTo(m),v=e.distanceTo(p);return y<v?m:p}dispose(){this.children.forEach(e=>{e.geometry&&(e.geometry=null)}),this.clear(),this.hCylinderGeo&&(this.hCylinderGeo.dispose(),this.hCylinderGeo=null),this.vCylinderGeo&&(this.vCylinderGeo.dispose(),this.vCylinderGeo=null),this.material&&(this.material.dispose(),this.material=null)}}class PS extends rt{constructor(t=new pd){super();Ri(this,"rng");Ri(this,"options");Ri(this,"branchQueue",[]);this.name="Tree",this.branchesMesh=new Ye,this.leavesMesh=new Ye,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=t}update(t){const n=this.leavesMesh.material.userData.shader;n&&(n.uniforms.uTime.value=t)}loadPreset(t){const n=hS(t);this.loadFromJson(n)}loadFromJson(t){this.options.copy(t),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new n1(this.options.seed),this.branchQueue.push(new Xo(new R,new pt,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){const t=this.branchQueue.shift();this.generateBranch(t)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(t){const n=this.branches.verts.length/3;let s=t.orientation.clone(),r=t.origin.clone(),a=t.length/t.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),o=[];for(let l=0;l<=t.sectionCount;l++){let c=t.radius;l===t.sectionCount&&t.level===this.options.branch.levels?c=.001:this.options.type===Sa.Deciduous?c*=1-this.options.branch.taper[t.level]*(l/t.sectionCount):this.options.type===Sa.Evergreen&&(c*=1-l/t.sectionCount);let h;for(let _=0;_<t.segmentCount;_++){let m=2*Math.PI*_/t.segmentCount;const p=new R(Math.cos(m),0,Math.sin(m)).multiplyScalar(c).applyEuler(s).add(r),y=new R(Math.cos(m),0,Math.sin(m)).applyEuler(s).normalize(),v=new oe(_/t.segmentCount,l%2===0?0:1);this.branches.verts.push(...Object.values(p)),this.branches.normals.push(...Object.values(y)),this.branches.uvs.push(...Object.values(v)),_===0&&(h={vertex:p,normal:y,uv:v})}this.branches.verts.push(...Object.values(h.vertex)),this.branches.normals.push(...Object.values(h.normal)),this.branches.uvs.push(1,h.uv.y),o.push({origin:r.clone(),orientation:s.clone(),radius:c}),r.add(new R(0,a,0).applyEuler(s));const u=Math.max(1,1/Math.sqrt(c))*this.options.branch.gnarliness[t.level];s.x+=this.rng.random(u,-u),s.z+=this.rng.random(u,-u);const f=new Qe().setFromEuler(s),d=new Qe().setFromAxisAngle(new R(0,1,0),this.options.branch.twist[t.level]),g=new Qe().setFromUnitVectors(new R(0,1,0),new R().copy(this.options.branch.force.direction));if(f.multiply(d),f.rotateTowards(g,this.options.branch.force.strength/c),this.options.trellis.enabled){const _=this.calculateTrellisForce(r,c);if(_){const m=new Qe().setFromUnitVectors(new R(0,1,0),_.direction);f.rotateTowards(m,_.strength)}}s.setFromQuaternion(f)}if(this.generateBranchIndices(n,t),this.options.type==="deciduous"){const l=o[o.length-1];t.level<this.options.branch.levels?this.branchQueue.push(new Xo(l.origin,l.orientation,this.options.branch.length[t.level+1],l.radius,t.level+1,t.sectionCount,t.segmentCount)):this.generateLeaf(l.origin,l.orientation)}t.level===this.options.branch.levels?this.generateLeaves(o):t.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[t.level],t.level+1,o)}generateChildBranches(t,n,s){const r=this.rng.random();for(let a=0;a<t;a++){let o=this.rng.random(1,this.options.branch.start[n]);const l=Math.floor(o*(s.length-1));let c,h;c=s[l],l===s.length-1?h=c:h=s[l+1];const u=(o-l/(s.length-1))/(1/(s.length-1)),f=new R().lerpVectors(c.origin,h.origin,u),d=this.options.branch.radius[n]*((1-u)*c.radius+u*h.radius),g=new Qe().setFromEuler(c.orientation),_=new Qe().setFromEuler(h.orientation),m=new pt().setFromQuaternion(_.slerp(g,u)),p=2*Math.PI*(r+a/t),y=new Qe().setFromAxisAngle(new R(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),v=new Qe().setFromAxisAngle(new R(0,1,0),p),x=new Qe().setFromEuler(m),I=new pt().setFromQuaternion(x.multiply(v.multiply(y)));let P=this.options.branch.length[n]*(this.options.type===Sa.Evergreen?1-o:1);this.branchQueue.push(new Xo(f,I,P,d,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(t){const n=this.rng.random();for(let s=0;s<this.options.leaves.count;s++){let r=this.rng.random(1,this.options.leaves.start);const a=Math.floor(r*(t.length-1));let o,l;o=t[a],a===t.length-1?l=o:l=t[a+1];const c=(r-a/(t.length-1))/(1/(t.length-1)),h=new R().lerpVectors(o.origin,l.origin,c),u=new Qe().setFromEuler(o.orientation),f=new Qe().setFromEuler(l.orientation),d=new pt().setFromQuaternion(f.slerp(u,c)),g=2*Math.PI*(n+s/this.options.leaves.count),_=new Qe().setFromAxisAngle(new R(1,0,0),this.options.leaves.angle/(180/Math.PI)),m=new Qe().setFromAxisAngle(new R(0,1,0),g),p=new Qe().setFromEuler(d),y=new pt().setFromQuaternion(p.multiply(m.multiply(_)));this.generateLeaf(h,y)}}generateLeaf(t,n){let s=this.leaves.verts.length/3,r=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance));const a=r,o=r,l=c=>{const h=[new R(-a/2,o,0),new R(-a/2,0,0),new R(a/2,0,0),new R(a/2,o,0)].map(f=>f.applyEuler(new pt(0,c,0)).applyEuler(n).add(t));this.leaves.verts.push(h[0].x,h[0].y,h[0].z,h[1].x,h[1].y,h[1].z,h[2].x,h[2].y,h[2].z,h[3].x,h[3].y,h[3].z);const u=new R(0,0,1).applyEuler(n);this.leaves.normals.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(s,s+1,s+2,s,s+2,s+3),s+=4};l(0),this.options.leaves.billboard===dd.Double&&l(Math.PI/2)}generateBranchIndices(t,n){let s,r,a,o;const l=n.segmentCount+1;for(let c=0;c<n.sectionCount;c++)for(let h=0;h<n.segmentCount;h++)s=t+c*l+h,r=t+c*l+(h+1),a=s+l,o=r+l,this.branches.indices.push(s,a,r,r,a,o)}createBranchesGeometry(){const t=new Tt;t.setAttribute("position",new gt(new Float32Array(this.branches.verts),3)),t.setAttribute("normal",new gt(new Float32Array(this.branches.normals),3)),t.setAttribute("uv",new gt(new Float32Array(this.branches.uvs),2)),t.setIndex(new gt(new Uint16Array(this.branches.indices),1)),t.computeBoundingSphere();const n=new vu({name:"branches",flatShading:this.options.bark.flatShading,color:new De(this.options.bark.tint)});this.options.bark.textured&&(n.aoMap=da(this.options.bark.type,"ao",this.options.bark.textureScale),n.map=da(this.options.bark.type,"color",this.options.bark.textureScale),n.normalMap=da(this.options.bark.type,"normal",this.options.bark.textureScale),n.roughnessMap=da(this.options.bark.type,"roughness",this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=t,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){const t=new Tt;t.setAttribute("position",new gt(new Float32Array(this.leaves.verts),3)),t.setAttribute("uv",new gt(new Float32Array(this.leaves.uvs),2)),t.setIndex(new gt(new Uint16Array(this.leaves.indices),1)),t.computeVertexNormals(),t.computeBoundingSphere();const n=new vu({name:"leaves",map:RS(this.options.leaves.type),color:new De(this.options.leaves.tint),side:Vt,alphaTest:this.options.leaves.alphaTest,dithering:!0});n.onBeforeCompile=s=>{s.uniforms.uTime={value:0},s.uniforms.uWindStrength={value:new R(.5,0,.5)},s.uniforms.uWindFrequency={value:.5},s.uniforms.uWindScale={value:70},s.vertexShader=`
        uniform float uTime;
        uniform vec3 uWindStrength;
        uniform float uWindFrequency;
        uniform float uWindScale;
        `+s.vertexShader,s.vertexShader=s.vertexShader.replace("void main() {",`
        // GLSL Simplex Noise 3D
        // Source: https://github.com/ashima/webgl-noise

        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }

        vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
        }

        vec3 fade(vec3 t) {
            return t*t*t*(t*(t*6.0-15.0)+10.0);
        }

        // Classic Simplex Noise 3D
        float simplex3(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0);
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx);

            // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //  x0 = x0 - 0. + 0.0 * C 
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy; // 2.0 * C.x = 1/3 = C.y
            vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5

            // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute( 
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            // Gradients: 7x7 points over a square, mapped onto an octahedron.
            // The ring size 17*17 = 289 is close to the mapping's singularity.
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 g0 = vec3(a0.xy,h.x);
            vec3 g1 = vec3(a0.zw,h.y);
            vec3 g2 = vec3(a1.xy,h.z);
            vec3 g3 = vec3(a1.zw,h.w);

            // Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
            g0 *= norm.x;
            g1 *= norm.y;
            g2 *= norm.z;
            g3 *= norm.w;

            // Mix contributions from the four corners
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(g0,x0), dot(g1,x1), 
                                          dot(g2,x2), dot(g3,x3) ) );
        }
          
        void main() {`),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`
        vec4 mvPosition = vec4(transformed, 1.0);

        float windOffset = 2.0 * 3.14 * simplex3(mvPosition.xyz / uWindScale);
        vec3 windSway = uv.y * uWindStrength * (
          0.5 * sin(uTime * uWindFrequency + windOffset) +
          0.3 * sin(2.0 * uTime * uWindFrequency + 1.3 * windOffset) +
          0.2 * sin(5.0 * uTime * uWindFrequency + 1.5 * windOffset)
        );
        mvPosition.xyz += windSway;

        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        `),n.userData.shader=s},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=t,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&(this.remove(this.trellisMesh),this.trellisMesh.dispose(),this.trellisMesh=null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new CS(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(t){const n=this.options.trellis,s=n.position.x,r=n.position.y,a=n.position.z,o=s-n.width/2,l=s+n.width/2,c=r,h=r+n.height,u=Math.max(o,Math.min(l,t.x)),f=Math.max(c,Math.min(h,t.y)),d=Math.round((f-c)/n.spacing)*n.spacing+c,g=Math.max(c,Math.min(h,d)),_=Math.round((u-o)/n.spacing)*n.spacing+o,m=Math.max(o,Math.min(l,_)),p=new R(u,g,a),y=new R(m,f,a),v=t.distanceTo(p),x=t.distanceTo(y);return v<x?p:y}calculateTrellisForce(t,n){const s=this.options.trellis,r=this.getNearestTrellisPoint(t),a=t.distanceTo(r);if(a>s.force.maxDistance||a<.001)return null;const o=new R().subVectors(r,t).normalize(),l=1-Math.pow(a/s.force.maxDistance,s.force.falloff),c=s.force.strength*l/n;return{direction:o,strength:c}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}}const zu={ash:Nc,aspen:md,oak:kc,pine:Uc},LS=3,jo=new Map;function DS(i){const e=i.branchesMesh.material;i.branchesMesh.material=new Ut({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,aoMap:e.aoMap,color:e.color,roughness:1});const t=i.leavesMesh,n=t.geometry;n.computeBoundingBox();const s=n.boundingBox.getCenter(new R),r=n.attributes.position,a=new Float32Array(r.count*3),o=new R;for(let u=0;u<r.count;u++)o.fromBufferAttribute(r,u).sub(s).normalize(),o.y=o.y*.7+.35,o.normalize(),a.set([o.x,o.y,o.z],u*3);n.setAttribute("normal",new gt(a,3));const l=t.material;t.material=Oc(new Ut({map:od(zu[i.options.leaves.type]||zu.oak),color:l.color,side:Vt,roughness:.85,alphaTest:.5,envMapIntensity:.5}));for(const u of[i.branchesMesh,t])u.castShadow=!0,u.receiveShadow=!0;i.updateMatrixWorld(!0);const c=new vn().setFromObject(i),h=c.getSize(new R);return{tree:i,hoehe:h.y,breite:Math.max(h.x,h.z),boden:c.min.y}}function IS(i,e){const t=i+e;if(!jo.has(t)){const n=new PS;n.loadPreset(i),n.options.seed=(n.options.seed||1)+e*7919,n.generate(),jo.set(t,DS(n))}return jo.get(t)}function NS(i,e,t,n){const s=IS(i,e%LS),r=new rt,a=new rt;a.add(s.tree.branchesMesh.clone(),s.tree.leavesMesh.clone());const o=t/s.hoehe,l=cc.clamp(n/(s.breite*o),.65,1.5);return a.scale.set(o*l,o,o*l),a.position.y=-s.boden*o,a.rotation.y=e%360*.0175,r.add(a),r.userData.blattGeo=s.tree.leavesMesh.geometry,r.userData.skala=a.scale.clone(),r.userData.drehung=a.rotation.y,r}function US(i,e,t){const n=i.userData.blattGeo.attributes.position,s=[],r=new R,a=new Ie().compose(new R,new Qe().setFromEuler(new pt(0,i.userData.drehung,0)),i.userData.skala),o=i.children[0].position;for(let l=0;l<e;l++)r.fromBufferAttribute(n,Math.floor(t()*n.count)).applyMatrix4(a).add(o),s.push(r.clone());return s}const Bu=[["laub","Laubbaum"],["kugel","Kugelbaum"],["obst","Obstbaum"],["nadel","Nadelbaum"],["strauch","Strauch"],["bluete","Blühstrauch"],["gras","Ziergras"]],zc=new hi(.7,1,1,9,1).translate(0,.5,0);zc.userData.geteilt=!0;function Hu(i,e,t){const n=new Ye(zc,t);return n.scale.set(e,i,e),n.castShadow=!0,n.receiveShadow=!0,n}function kS(i,e,t,n){const s=new R().subVectors(e,i),r=new Ye(zc,n);return r.scale.set(t,s.length(),t),r.position.copy(i),r.quaternion.setFromUnitVectors(new R(0,1,0),s.normalize()),r.castShadow=!0,r}function OS(i,e,t,n,s){const r=[{c:e.clone(),r:new R(t*.78,n*.8,t*.78)}];for(let a=0;a<s;a++){const o=a/s*Math.PI*2+i()*.8,l=t*(.38+i()*.22);r.push({c:new R(e.x+Math.cos(o)*l,e.y+(i()-.35)*n*.75,e.z+Math.sin(o)*l),r:new R(t*(.42+i()*.12),n*(.45+i()*.12),t*(.42+i()*.12))})}return r}const _d={laub:["Oak Medium","Ash Medium"],obst:["Oak Small"],nadel:["Pine Medium"],strauch:["Bush 1","Bush 2"],bluete:["Bush 3"]};function Bc(i,e,t,n){if(_d[i])try{return FS(i,e,t,n)}catch(s){console.warn("ez-tree nicht verfügbar, einfache Form",s)}return zS(i,e,t,n)}function FS(i,e,t,n){const s=yn(n),r=_d[i],a=NS(r[n%r.length],n,e,t),o=i==="obst"?{n:60,gr:.045,farbe:"#b8281f",rau:.35}:i==="bluete"?{n:220,gr:.035,farbe:"#f2a6c8",rau:.6}:null;if(o){const l=US(a,o.n,s),c=new Pn(new wi(o.gr,1),new Ut({color:o.farbe,roughness:o.rau}),l.length),h=new Ie;l.forEach((u,f)=>{h.makeTranslation(u.x,u.y,u.z),c.setMatrixAt(f,h)}),c.castShadow=!0,a.add(c)}return a}function zS(i,e,t,n){const s=yn(n),r=new rt,a=it("rinde"),o=t/2;if(i==="laub"||i==="obst"||i==="kugel"){const l=i==="obst"?1.2:i==="kugel"?e-t*.85:e*.36,c=i==="obst"?.09:i==="kugel"?.06:.07+e*.016,h=i==="kugel"?o*.92:(e-l)/2,u=new R(0,i==="kugel"?e-o:l+h,0);r.add(Hu(u.y,c,a));const f=i==="kugel"?[{c:u,r:new R(o,h,o)}]:OS(s,u,o,h,i==="obst"?5:7);for(const g of f.slice(1))r.add(kS(new R(0,l*.95,0),g.c.clone().lerp(u,.25),c*.45,a));const d=i==="obst"?95:i==="kugel"?105:98+s()*14;if(r.add(Kl(f,{hue:d,groesse:Math.max(.35,Math.min(.75,t*.11)),dichte:1.35,seed:n,mitte:u})),i==="obst"){const g=new Pn(new wi(.045,1),new Ut({color:"#b8281f",roughness:.35}),45),_=new Ie;for(let m=0;m<45;m++){const p=f[Math.floor(s()*f.length)],y=s()*6.28,v=(s()-.4)*1.3;_.makeTranslation(p.c.x+Math.cos(y)*Math.cos(v)*p.r.x*.92,p.c.y+Math.sin(v)*p.r.y*.9,p.c.z+Math.sin(y)*Math.cos(v)*p.r.z*.92),g.setMatrixAt(m,_)}g.castShadow=!0,r.add(g)}}else if(i==="nadel"){r.add(Hu(e*.3,.12,a));const l=it("laub",{tint:"hsl(135, 30%, 50%)"}),c=7;for(let h=0;h<c;h++){const u=h/c,f=o*(1-u*.85),d=e*.3,g=new Ye(fd(new Ps(1,1,18,4),s(),.1),l);g.scale.set(f,d,f),g.position.y=e*.14+u*e*.72+d/2,g.rotation.y=s()*6,g.castShadow=g.receiveShadow=!0,r.add(g)}}else if(i==="strauch"||i==="bluete"){const l=[];for(let h=0;h<4;h++){const u=s()*6.28,f=o*.3*s();l.push({c:new R(Math.cos(u)*f,e*(.42+s()*.12),Math.sin(u)*f),r:new R(o*(.62+s()*.15),e*.45,o*(.62+s()*.15))})}const c=i==="bluete"?108:92+s()*22;if(r.add(Kl(l,{hue:c,groesse:.28,seed:n,mitte:new R(0,e*.3,0)})),i==="bluete"){const u=new Pn(new wi(.04,0),new Ut({color:"#f2a6c8",roughness:.6}),160),f=new Ie;for(let d=0;d<160;d++){const g=l[d%l.length],_=s()*6.28,m=s()*1.3;f.makeTranslation(g.c.x+Math.cos(_)*Math.cos(m)*g.r.x*.95,g.c.y+Math.sin(m)*g.r.y*.95,g.c.z+Math.sin(_)*Math.cos(m)*g.r.z*.95),u.setMatrixAt(d,f)}r.add(u)}}else if(i==="gras"){const c=new Ps(.018,1,3).translate(0,.5,0),h=new Pn(c,new Ut({color:"#b9b56c",roughness:.9}),90),u=new Ie,f=new Qe,d=new pt,g=new De;for(let _=0;_<90;_++){const m=s()*6.28,p=s()*o*.35;d.set((s()-.5)*.9,0,(s()-.5)*.9),u.compose(new R(Math.cos(m)*p,0,Math.sin(m)*p),f.setFromEuler(d),new R(1,e*(.6+s()*.5),1)),h.setMatrixAt(_,u),h.setColorAt(_,g.setHSL(.15+s()*.06,.35,.45+s()*.15))}h.castShadow=!0,r.add(h)}return r}const BS={typ:"pflanze",name:"Pflanze",geometrie:"punkt",schritt:"pflanzen",felder:()=>[{key:"art",label:"Art",type:"select",options:Bu},{key:"hoehe",label:"Höhe",type:"number",min:.3,max:20,step:.1,einheit:"m"},{key:"krone",label:"Kronendurchmesser",type:"number",min:.3,max:14,step:.1,einheit:"m"}],build(i){const e=i.params,t=Bc(e.art,e.hoehe,e.krone,ks(i.id));return t.position.set(i.punkte[0][0],0,i.punkte[0][1]),t},menge:i=>{var e;return[{name:`${(e=Bu.find(t=>t[0]===i.params.art))==null?void 0:e[1]} (${i.params.hoehe} m)`,wert:1,einheit:"Stk"}]},farbe2d:i=>i.params.art==="nadel"?"#2f6b3f":i.params.art==="bluete"?"#d98bb0":"#4f9a3a",radius2d:i=>i.params.krone/2},Vu=[["gartenhaus","Gartenhaus"],["pergola","Pergola"],["teich","Teich"],["pool","Pool"],["sitzgruppe","Tisch mit Stühlen"],["lounge","Lounge-Sofa"],["schirm","Sonnenschirm"],["leuchte","Gartenleuchte"],["bank","Gartenbank"],["picknick","Picknicktisch"],["pflanzkasten","Pflanzkasten"],["feuerstelle","Feuerstelle"],["findling","Findling"]],fs={sitzgruppe:{id:"outdoor_table_chair_set_01",mass:[.78,1.83]},bank:{id:"painted_wooden_bench",mass:[1.16,.5]},picknick:{id:"wooden_picnic_table",mass:[2.24,3.02]},pflanzkasten:{id:"planter_box_01",mass:[.91,.41]},feuerstelle:{id:"stone_fire_pit",mass:[1.45,1.43]},findling:{id:"rock_07",mass:[.17,.32]}};function HS(i){const e=fs[i.art],t=i.breite/e.mass[0];return[i.breite,e.mass[1]*t]}const lt=(i,e,t,n)=>(i.position.set(e,t,n),i),Gu={gartenhaus(i,e){const t=new De(i.farbe).lerp(new De("#ffffff"),.6),n=Math.max(1.8,i.hoehe-.55),s=it("holz_natur",{repeat:[1/2,1/1.4],tint:"#"+t.getHexString()});e.add(lt(Be(i.breite,n,i.tiefe,s),0,n/2,0));const r=vt("#"+new De(i.farbe).multiplyScalar(.7).getHexString(),.8);for(const c of[-1,1])for(const h of[-1,1])e.add(lt(Be(.12,n,.12,r),c*i.breite/2,n/2,h*i.tiefe/2));const a=new rt;a.rotation.y=Math.PI,e.add(a);const o=i.tiefe/2+.03;a.add(lt(Be(1,1.95,.06,r),-i.breite*.2,.98,o)),a.add(lt(Be(.86,1.85,.05,s),-i.breite*.2,.95,o+.02)),a.add(lt(Be(.05,.05,.08,vt("#2f3134",.3,.8)),-i.breite*.2+.32,1,o+.06)),a.add(lt(Be(.9,.7,.06,r),i.breite*.22,n*.6,o));const l=new Ye(new ci(.76,.56),new on({color:"#1c2630",roughness:.03,clearcoat:1,envMapIntensity:1.6}));l.position.set(i.breite*.22,n*.6,o+.035),a.add(l),a.add(lt(Be(.04,.56,.07,r),i.breite*.22,n*.6,o+.01)),xd(e,i.breite+.6,i.tiefe+.7,n,Math.max(.5,i.hoehe-n),it("dach",{tint:"#6c6e72"})),e.add(lt(Be(i.breite+.1,.06,i.tiefe+.1,r),0,.03,0))},pergola(i,e){const t=vt(i.farbe,.5,.3),n=.12;for(const r of[-1,1])for(const a of[-1,1])e.add(lt(Be(n,i.hoehe,n,t),r*(i.breite/2-n),i.hoehe/2,a*(i.tiefe/2-n)));for(const r of[-1,1])e.add(lt(Be(i.breite+.3,.2,n,t),0,i.hoehe-.1,r*(i.tiefe/2-n)));const s=Math.floor(i.breite/.35);for(let r=0;r<=s;r++)e.add(lt(Be(.05,.14,i.tiefe+.2,t),-i.breite/2+.1+r*(i.breite-.2)/s,i.hoehe+.05,0))},teich(i,e,t){const n=[];for(let c=0;c<24;c++){const h=c/24*Math.PI*2,u=.85+Math.sin(h*3+t()*2)*.1+t()*.05;n.push([Math.cos(h)*i.breite/2*u,Math.sin(h)*i.tiefe/2*u])}e.add(ai(n,.025,.02,it("wasser")));const s=new wi(1,1),r=new Pn(s,it("naturstein",{tint:i.farbe}),n.length*3),a=new Ie,o=new Qe;let l=0;for(let c=0;c<n.length;c++)for(let h=0;h<3;h++){const u=n[c],f=n[(c+1)%n.length],d=h/3,g=.18+t()*.15;a.compose(new R(u[0]+(f[0]-u[0])*d,.03,u[1]+(f[1]-u[1])*d),o.setFromEuler(new pt(0,t()*6,0)),new R(g*1.3,g*.5,g)),r.setMatrixAt(l++,a)}r.castShadow=r.receiveShadow=!0,e.add(r)},pool(i,e){const t=it("betonplatten",{tint:i.farbe}),n=.4;e.add(lt(Be(i.breite+2*n,.06,n,t),0,.05,-(i.tiefe+n)/2)),e.add(lt(Be(i.breite+2*n,.06,n,t),0,.05,(i.tiefe+n)/2)),e.add(lt(Be(n,.06,i.tiefe,t),-(i.breite+n)/2,.05,0)),e.add(lt(Be(n,.06,i.tiefe,t),(i.breite+n)/2,.05,0));const s=new Ye(new ci(i.breite,i.tiefe).rotateX(-Math.PI/2),new on({color:"#36b5cc",roughness:.03,clearcoat:1,metalness:0,transparent:!0,opacity:.92,normalMap:it("wasser").normalMap,normalScale:new oe(.2,.2)}));s.position.y=.04,s.receiveShadow=!0,e.add(s)},sitzgruppe(i,e){const t=vt(i.farbe,.6),n=vt("#3a3b3d",.4,.5);e.add(lt(Be(1.4,.04,.85,t),0,i.hoehe,0));for(const r of[-1,1])for(const a of[-1,1])e.add(lt(Be(.05,i.hoehe,.05,n),r*.62,i.hoehe/2,a*.36));const s=(r,a,o)=>{const l=new rt;l.add(lt(Be(.48,.05,.48,t),0,.45,0),lt(Be(.48,.5,.05,t),0,.72,-.24));for(const c of[-1,1])for(const h of[-1,1])l.add(lt(Be(.04,.45,.04,n),c*.21,.225,h*.21));l.position.set(r,0,a),l.rotation.y=o,e.add(l)};s(-.4,-.75,0),s(.4,-.75,0),s(-.4,.75,Math.PI),s(.4,.75,Math.PI)},lounge(i,e){const t=vt("#3a3b3d",.5),n=vt(i.farbe,.95),s=.8;e.add(lt(Be(i.breite,.35,s,t),0,.175,-(i.tiefe-s)/2)),e.add(lt(Be(s,.35,i.tiefe-s,t),-(i.breite-s)/2,.175,s/2)),e.add(lt(Be(i.breite-.1,.14,s-.1,n),0,.42,-(i.tiefe-s)/2)),e.add(lt(Be(s-.1,.14,i.tiefe-s-.1,n),-(i.breite-s)/2,.42,s/2)),e.add(lt(Be(i.breite,.4,.18,n),0,.6,-i.tiefe/2+.09)),e.add(lt(Be(.18,.4,i.tiefe-.2,n),-i.breite/2+.09,.6,.1)),e.add(lt(Be(.8,.35,.8,vt("#b08a62",.7)),.3,.175,.3))},schirm(i,e){e.add(lt(Be(.05,i.hoehe,.05,vt("#cfcfcf",.3,.8)),0,i.hoehe/2,0));const t=new Ye(new Ps(i.breite/2,.5,8,1,!0),new Ut({color:i.farbe,roughness:.9,side:Vt}));t.position.y=i.hoehe,t.castShadow=!0,e.add(t),e.add(lt(Be(.5,.08,.5,vt("#444",.6)),0,.04,0))},leuchte(i,e){e.add(lt(Be(.1,i.hoehe,.1,vt(i.farbe,.4,.6)),0,i.hoehe/2,0));const t=new Ye(new Vn(.12,.08,.12),new Ut({color:"#fff4d6",emissive:"#ffcf7a",emissiveIntensity:1.2}));t.position.y=i.hoehe-.06,e.add(t),t.userData.leuchte=!0}};function xd(i,e,t,n,s,r=it("dach")){const a=new Tr([new oe(-t/2,0),new oe(t/2,0),new oe(0,Math.max(.3,s))]),o=new Wa(a,{depth:e,bevelEnabled:!1});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);const l=new Ye(o,r);return l.position.y=n,l.castShadow=l.receiveShadow=!0,i.add(l),l}const VS={typ:"bau",name:"Bauwerk",geometrie:"punkt",schritt:"bauten",felder:()=>[{key:"art",label:"Art",type:"select",options:Vu},{key:"breite",label:"Breite",type:"number",min:.2,max:15,step:.1,einheit:"m"},{key:"tiefe",label:"Tiefe",type:"number",min:.2,max:15,step:.1,einheit:"m"},{key:"hoehe",label:"Höhe",type:"number",min:0,max:5,step:.05,einheit:"m"},{key:"rotation",label:"Drehung",type:"number",min:-180,max:180,step:15,einheit:"°"},{key:"farbe",label:"Farbe",type:"color"}],build(i){const e=i.params,t=new rt;if(fs[e.art]){const n=e.art==="sitzgruppe"&&e.breite>1.5?fs.sitzgruppe.mass[0]:e.breite;t.add(SM(fs[e.art].id,n))}else(Gu[e.art]||Gu.gartenhaus)(e,t,yn(ks(i.id)));return t.position.set(i.punkte[0][0],0,i.punkte[0][1]),t.rotation.y=-(e.rotation||0)*Math.PI/180,t},menge:i=>{var e;return[{name:((e=Vu.find(t=>t[0]===i.params.art))==null?void 0:e[1])+(["teich","pool","gartenhaus","pergola"].includes(i.params.art)?` ${i.params.breite}×${i.params.tiefe} m`:""),wert:1,einheit:"Stk"}]},farbe2d:i=>({teich:"#4e8fa3",pool:"#36b5cc",gartenhaus:"#7b5a3c",pergola:"#555"})[i.params.art]||"#9a948a",rechteck2d:i=>fs[i.params.art]?HS({...i.params,breite:i.params.art==="sitzgruppe"&&i.params.breite>1.5?fs.sitzgruppe.mass[0]:i.params.breite}):[i.params.breite,i.params.tiefe]},Bt=Object.fromEntries([GM,WM,jM,JM,e1,t1,BS,VS].map(i=>[i.typ,i]));function GS(i){const e=Bt[i.typ];if(!e)return null;try{const t=e.build(i);return t.traverse(n=>{n.userData.modulId=i.id}),t.userData.modulId=i.id,t}catch(t){return console.error("Modul konnte nicht gebaut werden",i,t),null}}function WS(i){var t;const e=new Map;for(const n of i.module){const s=Bt[n.typ];if(s!=null&&s.menge)for(const r of s.menge(n)){const a=r.name+"|"+r.einheit;e.set(a,{...r,wert:(((t=e.get(a))==null?void 0:t.wert)||0)+r.wert})}}return[...e.values()]}const Yt=(i,e,t,n)=>(i.position.set(e,t,n),i),XS=["putz_weiss","putz_grau","klinker_fassade"].map(i=>[i,Et[i].name]),jS=new on({color:"#1c2630",roughness:.03,metalness:0,clearcoat:1,envMapIntensity:1.6});function qS(i){const e=new rt,t=i.breite,n=i.tiefe;e.add(ai([[0,0],[t,0],[t,n],[0,n]],0,.05,it("rasen")));const s=new Ye(new ci(500,500).rotateX(-Math.PI/2),it("rasen",{tint:"#c9cfb0"})),r=s.geometry.attributes.uv;for(let h=0;h<r.count;h++)r.setXY(h,r.getX(h)*500,r.getY(h)*500);s.position.set(t/2,-.03,n/2),s.receiveShadow=!0,e.add(s),e.add(ai([[-250,-9],[250,-9],[250,-3.5],[-250,-3.5]],-.01,.05,it("asphalt"))),e.add(ai([[-250,-3.5],[250,-3.5],[250,0],[-250,0]],.06,.1,it("pflaster_grau",{tint:"#d6d3cc"})));const a=vt("#bdbab3",.85);e.add(Yt(Be(500,.14,.15,a),t/2,.04,-3.5)),e.add(Yt(Be(500,.14,.15,a),t/2,.04,-9)),e.add(ai([[-250,-12.5],[250,-12.5],[250,-9],[-250,-9]],.06,.1,it("pflaster_grau",{tint:"#d6d3cc"})));const o=i.haus;o&&o.breite>0&&e.add(vd(o)),i.umgebung!=="frei"&&e.add(KS(t,n));const l=yn(99);for(let h=0;h<(ni?10:24);h++){const u=l()*Math.PI*2,f=Math.max(t,n)+45+l()*50,d=t/2+Math.cos(u)*f,g=n/2+Math.sin(u)*f;if(g>-16&&g<0)continue;const _=Bc(l()>.25?"laub":"nadel",10+l()*9,7+l()*5,h+5);_.position.set(d,0,g),e.add(_)}const c=YS(e);return c.traverse(h=>{h.isMesh&&(h.userData.umgebung=!0)}),c}function YS(i){i.updateMatrixWorld(!0);const e=new Map,t=new rt;i.traverse(s=>{if(!s.isMesh)return;if(s.isInstancedMesh||Array.isArray(s.material)){t.add(s.clone());return}let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();for(const o of Object.keys(r.attributes))["position","normal","uv","color"].includes(o)||r.deleteAttribute(o);if(!r.attributes.uv)return;r.applyMatrix4(s.matrixWorld);const a=s.material.uuid+(r.attributes.color?"c":"");e.has(a)||e.set(a,{mat:s.material,geos:[],schatten:s.castShadow}),e.get(a).geos.push(r)});const n=new rt;for(const{mat:s,geos:r,schatten:a}of e.values()){const o=new Ye(Fy(r,!1),s);o.castShadow=a,o.receiveShadow=!0,n.add(o)}return t.children.forEach(s=>n.add(s)),n}function KS(i,e){const t=new rt,n=yn(4242),s=["putz_weiss","putz_weiss","putz_grau","klinker_fassade"],r=["#8a8c92","#9b6a5c","#7d7f84","#a06d5a"],a=hd(110),o=[],l=16;for(const c of[-2,-1,1,2])o.push({x:c<0?c*l:i+(c-1)*l,y:0,b:l,t:e});for(let c=-2;c<=2;c++)o.push({x:i/2-l/2+c*l,y:e+2,b:l,t:24,hinten:!0});for(let c=-3;c<=3;c++)o.push({x:i/2-l/2+c*l,y:-36,b:l,t:23,gegenueber:!0});for(const c of o){const h=9+n()*3,u=8+n()*2.5,f=c.x+(c.b-h)/2+(n()-.5)*2,d=c.gegenueber?c.y+c.t-u-3:c.hinten?c.y+c.t-u-4:c.y+1+n()*1.5,g={x:f,y:d,breite:h,tiefe:u,hoehe:5.6+n()*2.4,dach:n()>.85?"flach":"sattel",fassade:s[Math.floor(n()*s.length)],dachTon:r[Math.floor(n()*r.length)],gegenueber:c.gegenueber||c.hinten};t.add(vd(g));const _=c.x+(c.x<0?c.b-.4:.4);!c.hinten&&!c.gegenueber?t.add(Yt(Be(.7,1.8,c.t-2,a),_,.9,c.y+c.t/2+1)):t.add(Yt(Be(c.b-1,1.6,.7,a),c.x+c.b/2,.8,c.hinten?c.y+.4:c.y+c.t-.6));const m=1+Math.floor(n()*2);for(let p=0;p<(ni?1:m);p++){const y=Bc(n()>.2?"laub":"nadel",6+n()*6,5+n()*3,70+o.indexOf(c)*3+p);y.position.set(c.x+2+n()*(c.b-4),0,c.gegenueber?c.y+3+n()*6:c.hinten?c.y+3+n()*8:c.y+c.t-3-n()*8),t.add(y)}}return t}function vd(i){const e=new rt,t=it(i.fassade||"putz_weiss"),n=i.dach==="flach",s=n?i.hoehe:Math.max(2.8,i.hoehe*.55);e.add(Yt(Be(i.breite,s,i.tiefe,t),0,s/2,0));const r=i.dachTon?it("dach",{tint:i.dachTon}):it("dach"),a=.45;if(n)e.add(Yt(Be(i.breite+.1,.3,i.tiefe+.1,vt("#5a5c5f",.7)),0,s+.15,0));else{xd(e,i.breite+.8,i.tiefe+a*2,s,i.hoehe-s,r);const f=new Tr([new oe(-i.tiefe/2,0),new oe(i.tiefe/2,0),new oe(0,i.hoehe-s-.1)]);for(const g of[-1,1]){const _=new bc(f);_.rotateY(g*Math.PI/2);const m=_.attributes.uv,p=_.attributes.position;for(let v=0;v<m.count;v++)m.setXY(v,p.getZ(v),p.getY(v));const y=new Ye(_,t);y.position.set(g*i.breite/2,s,0),y.receiveShadow=!0,e.add(y)}const d=vt("#8d8f93",.35,.6);for(const g of[-1,1]){const _=new Ye(new hi(.06,.06,i.breite+.8,10).rotateZ(Math.PI/2),d);_.position.set(0,s-.05,g*(i.tiefe/2+a)),_.castShadow=!0,e.add(_);for(const m of[-1,1]){const p=new Ye(new hi(.045,.045,s,8),d);p.position.set(m*(i.breite/2+.12),s/2,g*(i.tiefe/2+.1)),p.castShadow=!0,e.add(p)}}e.add(Yt(Be(.55,1.4,.55,it("klinker_fassade")),i.breite*.22,s+(i.hoehe-s)*.62+.4,-i.tiefe*.12))}const o=vt("#3b3d40",.45),l=vt("#b9b6ae",.6),c=s>4.6?2:1,h=s/c;for(const f of[1,-1]){const d=f*(i.tiefe/2),g=Math.max(2,Math.floor(i.breite/2.6));for(let _=0;_<c;_++)for(let m=0;m<g;m++){const p=-i.breite/2+(m+.5)*(i.breite/g),y=!i.gegenueber&&f===1&&_===0&&(m===1||m===2),v=y?2:1.15,x=y?2.25:1.35,I=_*h+(y?1.12+.05:h*.56),P=f<0?Math.PI:0,D=new rt;D.position.set(p,I,d),D.rotation.y=P;const L=.07,E=.07;D.add(Yt(Be(v,E,L,o),0,x/2-E/2,L/2),Yt(Be(v,E,L,o),0,-x/2+E/2,L/2)),D.add(Yt(Be(E,x,L,o),v/2-E/2,0,L/2),Yt(Be(E,x,L,o),-v/2+E/2,0,L/2)),D.add(Yt(Be(.05,x,L*.8,o),0,0,L/2)),y||D.add(Yt(Be(v+.12,.04,.2,l),0,-x/2-.02,.1));const b=new Ye(new ci(v-.1,x-.1),jS);b.position.z=.02,D.add(b),e.add(D)}}const u=(i.gegenueber?1:-1)*(i.tiefe/2+.03);return e.add(Yt(Be(1.1,2.2,.08,vt("#2f3134",.4,.2)),i.breite*.3,1.1+.2,u)),e.add(Yt(Be(1.6,.08,1,vt("#3b3d40",.4)),i.breite*.3,2.65,u+Math.sign(u)*.5)),e.add(Yt(Be(i.breite+.04,.4,i.tiefe+.04,it("mauer_beton",{tint:"#9c9a95"})),0,.2,0)),e.position.set(i.x+i.breite/2,0,i.y+i.tiefe/2),e.userData.haus=!0,e}function $S(){const i=yn(5),e=[],t=[],n=[];for(let r=0;r<7;r++){const a=i()*Math.PI*2,o=i()*.05,l=Math.cos(a)*o,c=Math.sin(a)*o,h=.009+i()*.006,u=.7+i()*.3,f=(i()-.5)*.35,d=i()*Math.PI*2,g=Math.cos(a+Math.PI/2)*h,_=Math.sin(a+Math.PI/2)*h,m=l+Math.cos(d)*f*u,p=c+Math.sin(d)*f*u;e.push(l-g,0,c-_,l+g,0,c+_,m,u,p),t.push(.3,.36,.25,.3,.36,.25,1,1,.88);const y=Math.cos(a+Math.PI/2)*.45,v=Math.sin(a+Math.PI/2)*.45,x=Math.hypot(y,1,v);for(let I=0;I<3;I++)n.push(y/x,1/x,v/x)}const s=new Tt;return s.setAttribute("position",new et(e,3)),s.setAttribute("color",new et(t,3)),s.setAttribute("normal",new et(n,3)),s}const ZS=$S(),JS=Oc(new Ut({vertexColors:!0,side:Vt,roughness:.92}));function QS(i){const e=[],t=i.grundstueck.haus;t!=null&&t.breite&&e.push(([n,s])=>n>t.x-.3&&n<t.x+t.breite+.3&&s>t.y-.3&&s<t.y+t.tiefe+.3);for(const n of i.module){const s=n.punkte,r=n.params;if(n.typ==="flaeche"&&r.material!=="rasen"||n.typ==="beet")e.push(a=>Us(a,s));else if(n.typ==="weg")if(n.form==="ring"&&n.kreis){const a=n.kreis,o=r.breite/2+.05;e.push(([l,c])=>{const h=Math.hypot((l-a.x)/a.rx,(c-a.y)/a.ry);return Math.abs(h-1)*Math.min(a.rx,a.ry)<o})}else{const a=Ns(s,r.breite+.1).poly;e.push(o=>Us(o,a))}else if(["zaun","mauer","hecke"].includes(n.typ)){const a=(n.typ==="zaun"?.06:r.dicke/2)+.04;e.push(o=>{for(let l=1;l<s.length;l++)if(Ss(o,s[l-1],s[l])<a)return!0;return!1})}else if(n.typ==="bau"&&["gartenhaus","teich","pool","lounge"].includes(r.art)){const a=(r.rotation||0)*Math.PI/180,o=s[0],l=r.breite/2+(r.art==="pool"?.45:.05),c=r.tiefe/2+(r.art==="pool"?.45:.05);e.push(([h,u])=>{const f=h-o[0],d=u-o[1],g=f*Math.cos(-a)-d*Math.sin(-a),_=f*Math.sin(-a)+d*Math.cos(-a);return r.art==="teich"?(g/l)**2+(_/c)**2<1:Math.abs(g)<l&&Math.abs(_)<c})}}return n=>e.some(s=>s(n))}function eE(i,{dichte:e=40,max:t=6e4}={}){const n=i.grundstueck,s=n.breite*n.tiefe,r=Math.min(e,t/s),a=1/Math.sqrt(r),o=yn(11),l=QS(i),c=[];for(let p=a/2;p<n.tiefe;p+=a)for(let y=a/2;y<n.breite;y+=a){const v=[y+(o()-.5)*a,p+(o()-.5)*a];v[0]<.05||v[1]<.05||v[0]>n.breite-.05||v[1]>n.tiefe-.05||l(v)||c.push(v)}const h=new Pn(ZS,JS,Math.max(1,c.length)),u=new Ie,f=new Qe,d=new pt,g=new R,_=new R,m=new De;return c.forEach(([p,y],v)=>{d.set(0,o()*Math.PI*2,0),f.setFromEuler(d);const x=.06+o()*.07;g.set(1.1+o()*.6,x,1.1+o()*.6),u.compose(_.set(p,0,y),f,g),h.setMatrixAt(v,u);const I=Math.floor(p/1.2)%2?.035:-.02;m.setHSL(.25+(o()-.5)*.04,.45+o()*.15,.33+I+o()*.06,bt),h.setColorAt(v,m)}),h.count=c.length,h.receiveShadow=!0,h.userData.gras=!0,h}const tE=[[0,"aus"],[.1,"10 cm"],[.25,"25 cm"],[.5,"50 cm"],[1,"1 m"]],dr=i=>{var e;return((e=i==null?void 0:i.ansicht)==null?void 0:e.raster)??.25},Vi=i=>{var e;return((e=i==null?void 0:i.ansicht)==null?void 0:e.kollision)!==!1},gs=(i,e)=>e?Math.round(i/e)*e:i;function Er(i){const e=i.params,t=i.punkte;switch(i.typ){case"flaeche":return e.material==="rasen"?null:{kat:"boden",poly:t};case"beet":return{kat:"boden",poly:t,beet:!0};case"weg":if(i.form==="ring"&&i.kreis){const n=i.kreis,s=e.breite/2;return{kat:"weg",poly:gn({...n,rx:n.rx+s,ry:n.ry+s},40),loecher:[gn({...n,rx:Math.max(.05,n.rx-s),ry:Math.max(.05,n.ry-s)},40)]}}return{kat:"weg",poly:Ns(t,e.breite).poly};case"mauer":case"hecke":return{kat:"koerper",poly:Ns(t,e.dicke).poly,linie:!0};case"zaun":return null;case"pflanze":return{kat:"pflanze",poly:gn({x:t[0][0],y:t[0][1],rx:.3,ry:.3},12)};case"bau":{const[n,s]=Bt.bau.rechteck2d(i),r=(e.rotation||0)*Math.PI/180,a=t[0],o=(c,h)=>[a[0]+c*Math.cos(r)-h*Math.sin(r),a[1]+c*Math.sin(r)+h*Math.cos(r)],l=e.art==="teich"?gn({x:0,y:0,rx:n/2*.9,ry:s/2*.9},24).map(([c,h])=>o(c,h)):[o(-n/2,-s/2),o(n/2,-s/2),o(n/2,s/2),o(-n/2,s/2)];return{kat:["teich","pool"].includes(e.art)?"boden":"koerper",poly:l,bau:!0}}}return null}function nE(i){const e=i.grundstueck.haus;return e!=null&&e.breite?{kat:"koerper",poly:[[e.x,e.y],[e.x+e.breite,e.y],[e.x+e.breite,e.y+e.tiefe],[e.x,e.y+e.tiefe]],haus:!0}:null}function Wu(i,e){const t=(n,s)=>i.kat===n&&e.kat===s||i.kat===s&&e.kat===n;if(i.kat==="weg"&&e.kat==="weg")return!1;if(t("boden","boden")||t("boden","weg"))return!0;if(t("pflanze","boden"))return!(i.beet||e.beet);if(t("koerper","boden")){const n=i.kat==="koerper"?i:e,s=i.kat==="boden"?i:e;return!(n.bau&&!s.beet&&!s.bau)}return t("koerper","koerper")||t("koerper","weg")||t("koerper","pflanze")||t("pflanze","weg")||t("pflanze","pflanze")}const rr=.02;function pa(i,e){var t;if(!Us(i,e.poly)||(t=e.loecher)!=null&&t.some(n=>Us(i,n)))return!1;for(const n of[e.poly,...e.loecher||[]])for(let s=0;s<n.length;s++)if(Ss(i,n[s],n[(s+1)%n.length])<rr)return!1;return!0}function iE(i,e,t,n){const s=[e[0]-i[0],e[1]-i[1]],r=[n[0]-t[0],n[1]-t[1]],a=s[0]*r[1]-s[1]*r[0];if(Math.abs(a)<1e-9)return!1;const o=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/a,l=((t[0]-i[0])*s[1]-(t[1]-i[1])*s[0])/a,c=.01;return o>c&&o<1-c&&l>c&&l<1-c}const Xu=i=>[i.poly,...i.loecher||[]];function Ua(i){let e=1e9,t=1e9,n=-1e9,s=-1e9;for(const[r,a]of i)e=Math.min(e,r),t=Math.min(t,a),n=Math.max(n,r),s=Math.max(s,a);return{x0:e,y0:t,x1:n,y1:s}}function ju(i,e){const t=Ua(i.poly),n=Ua(e.poly);if(t.x1<=n.x0+rr||n.x1<=t.x0+rr||t.y1<=n.y0+rr||n.y1<=t.y0+rr)return!1;for(const r of Xu(i))for(let a=0;a<r.length;a++)for(const o of Xu(e))for(let l=0;l<o.length;l++)if(iE(r[a],r[(a+1)%r.length],o[l],o[(l+1)%o.length]))return!0;const s=r=>r.reduce((a,o)=>[a[0]+o[0]/r.length,a[1]+o[1]/r.length],[0,0]);return i.poly.some(r=>pa(r,e))||e.poly.some(r=>pa(r,i))||!i.loecher&&pa(s(i.poly),e)||!e.loecher&&pa(s(e.poly),i)}function pr(i,e){const t=Er(e);if(!t)return[];const n=[],s=nE(i);s&&Wu(t,s)&&ju(t,s)&&n.push("haus");for(const r of i.module){if(r.id===e.id)continue;const a=Er(r);a&&Wu(t,a)&&ju(t,a)&&n.push(r)}return n}function qu(i){const e=new Set;for(const t of i.module)pr(i,t).length&&e.add(t.id);return e}function sE(i){return i==="haus"?"dem Haus":{flaeche:"einer Fläche",beet:"einem Beet",weg:"einem Weg",mauer:"einer Mauer",hecke:"einer Hecke",pflanze:"einer Pflanze",bau:"einem Bauwerk/Möbel"}[i.typ]||"einem Teil"}function rE(i,e,t,n){const s=[],r=[],a=e.grundstueck;s.push(0,a.breite),r.push(0,a.tiefe);const o=a.haus;o!=null&&o.breite&&(s.push(o.x,o.x+o.breite),r.push(o.y,o.y+o.tiefe));for(const c of e.module){if(c.id===t)continue;const h=Er(c);if(!h)continue;const u=Ua(h.poly);s.push(u.x0,u.x1),r.push(u.y0,u.y1)}const l=(c,h)=>{let u=0,f=n;for(const d of c)for(const g of h){const _=g-d;Math.abs(_)<f&&(f=Math.abs(_),u=_)}return u};return[l([i.x0,i.x1],s),l([i.y0,i.y1],r)]}function ka(i,e,t,n,{frei:s=!1,massstab:r=20}={}){const a=s?0:dr(n),o=Er(i)||{poly:i.punkte},l=Ua(o.poly);if(a&&(e=gs(l.x0+e,a)-l.x0,t=gs(l.y0+t,a)-l.y0),!s){const[f,d]=rE({x0:l.x0+e,x1:l.x1+e,y0:l.y0+t,y1:l.y1+t},n,i.id,Math.max(.12,10/r));e+=f,t+=d}const c=f=>+f.toFixed(3),h=i.punkte.map(([f,d])=>[c(f+e),c(d+t)]),u=i.kreis?{...i.kreis,x:c(i.kreis.x+e),y:c(i.kreis.y+t)}:void 0;return{punkte:h,kreis:u}}function aE(i){const{garten:e,welt:t,overlay:n,camera:s,controls:r,renderer:a}=i,o=new Map;let l="";const c=new sy(void 0,9240410);c.visible=!1,n.add(c);function h(C){C.traverse(N=>{var k,F;N.isMesh&&!N.isInstancedMesh&&N.geometry&&!N.geometry.userData.geteilt&&((F=(k=N.geometry).dispose)==null||F.call(k))})}let u=null,f=null;function d(){clearTimeout(f),f=setTimeout(()=>{u&&(t.remove(u),u.dispose()),u=eE(ie.projekt,ni?{dichte:18,max:22e3}:{dichte:80,max:12e4}),t.add(u),i.render()},250)}function g(){var F;const C=ie.projekt,N=JSON.stringify(C.grundstueck);if(N!==l){l=N,t.clear(),u=null,t.add(qS(C.grundstueck));const q=C.grundstueck.breite,H=C.grundstueck.tiefe;i.setTageszeit(((F=C.ansicht)==null?void 0:F.tageszeit)??15,new R(q/2,0,H/2),Math.max(q,H)*.75+6)}const k=new Set(C.module.map(q=>q.id));for(const[q,H]of o)k.has(q)||(e.remove(H.obj),h(H.obj),o.delete(q));for(const q of C.module){const H=JSON.stringify(q),se=o.get(q.id);if(se&&se.json===H)continue;se&&(e.remove(se.obj),h(se.obj));const Y=GS(q);Y&&(e.add(Y),o.set(q.id,{obj:Y,json:H}))}_(),d(),i.render()}function _(){const C=ie.auswahl&&o.get(ie.auswahl);c.visible=!!C,C&&c.setFromObject(C.obj),i.render()}ie.on(C=>{C==="auswahl"?_():g()});const m=new iy,p=new oe,y=new ti(new R(0,1,0),0);let v=null,x=null;const I=C=>{const N=a.domElement.getBoundingClientRect();p.set((C.clientX-N.left)/N.width*2-1,-((C.clientY-N.top)/N.height)*2+1),m.setFromCamera(p,s)},P=()=>{var N;return((N=m.intersectObjects(e.children,!0).find(k=>k.object.userData.modulId))==null?void 0:N.object.userData.modulId)||null},D=()=>{const C=new R;return m.ray.intersectPlane(y,C)?C:null},L=a.domElement;L.addEventListener("pointerdown",C=>{if(i.modus3d&&i.modus3d!=="normal")return;v={x:C.clientX,y:C.clientY,id:C.pointerId},I(C);const N=P();if(N&&N===ie.auswahl){const k=D();k&&(x={start:k,orig:JSON.stringify(ie.modul(N)),bewegt:!1},r.enabled=!1)}}),L.addEventListener("pointermove",C=>{if(!x||!v||C.pointerId!==v.id)return;I(C);const N=D();if(!N)return;const k=N.x-x.start.x,F=N.z-x.start.z;if(!x.bewegt&&Math.hypot(k,F)<.1)return;x.bewegt||(ie.schnappschuss(),x.bewegt=!0,x.letzt=[0,0]);const q=JSON.parse(x.orig);ie.live(H=>{const se=H.module.find(ce=>ce.id===ie.auswahl),Y=Vi(H);let ae=null;for(const[ce,me]of[[k,F],[k,x.letzt[1]],[x.letzt[0],F]]){const we=ka(q,ce,me,H);if(se.punkte=we.punkte,we.kreis&&(se.kreis=we.kreis),!Y||!pr(H,se).length){ae=[ce,me];break}}if(ae)x.letzt=ae;else{const ce=ka(q,...x.letzt,H);se.punkte=ce.punkte,ce.kreis&&(se.kreis=ce.kreis)}})});const E=C=>{if(!v)return;const N=Math.hypot(C.clientX-v.x,C.clientY-v.y)<6;x!=null&&x.bewegt?ie.emit("modul"):N&&i.modus3d!=="gehen"&&(I(C),ie.waehle(P())),x=null,v=null,r.enabled=!0};L.addEventListener("pointerup",E),L.addEventListener("pointercancel",()=>{x=null,v=null,r.enabled=!0});function b(){const C=ie.projekt.grundstueck,N=C.breite,k=C.tiefe,F=Math.max(N,k);r.target.set(N/2,0,k/2),s.position.set(N/2-F*.5,F*.55,k+F*.9),r.update(),i.render()}return{sync:g,kameraUebersicht:b}}const $l={polygon:[["rechteck","▭","Rechteck"],["kreis","◯","Kreis"],["frei","✎","Freihand"]],linie:[["gerade","╱","Gerade"],["kurve","∿","Kurve"],["ring","◯","Ring"]],punkt:[]};function oE(i,{onTool:e}){const t=i.getContext("2d"),n={s:20,ox:40,oy:40};let s=null,r=null,a=null,o=null;const l=new Map;let c=1;const h={};let u=new Set,f=[];const d=w=>[(w[0]-n.ox)/n.s,(w[1]-n.oy)/n.s],g=w=>[w[0]*n.s+n.ox,w[1]*n.s+n.oy],_=w=>+w.toFixed(2);function m(){c=Math.min(2,devicePixelRatio||1),i.width=i.clientWidth*c,i.height=i.clientHeight*c,ye()}new ResizeObserver(m).observe(i);function p(){const w=ie.projekt.grundstueck,S=i.clientWidth,O=i.clientHeight;S&&(n.s=Math.min((S-60)/w.breite,(O-80)/(w.tiefe+3)),n.ox=(S-w.breite*n.s)/2,n.oy=(O-w.tiefe*n.s)/2+n.s*1.2,ye())}function y(w,S,O){if(S)return w;const U=10/n.s+.1;for(const M of ie.projekt.module)if(!(M===O||M.form==="kreis"||M.form==="ring"||M.form==="kurve")){for(const z of M.punkte)if(Math.hypot(z[0]-w[0],z[1]-w[1])<U)return[...z]}const G=ie.projekt.grundstueck,B=dr(ie.projekt)||.01;let te=gs(w[0],B),K=gs(w[1],B);const T=G.haus;if(T!=null&&T.breite){for(const M of[T.x,T.x+T.breite])Math.abs(w[0]-M)<U&&(te=M);for(const M of[T.y,T.y+T.tiefe])Math.abs(w[1]-M)<U&&(K=M)}for(const M of[0,G.breite])Math.abs(te-M)<U&&(te=M);for(const M of[0,G.tiefe])Math.abs(K-M)<U&&(K=M);return[_(te),_(K)]}const v={pflanze:0,bau:1,hecke:2,zaun:2,mauer:2,weg:3,beet:4,flaeche:5},x=w=>Bt[w.typ].geometrie==="polygon"?Gi(w.punkte):0,I=w=>{var S,O;return w.typ==="weg"?w.params.breite/2:(((O=(S=Bt[w.typ]).strich2d)==null?void 0:O.call(S,w))||.1)/2};function P(w,S){let O=1e9;for(let U=1;U<S.length;U++)O=Math.min(O,Ss(w,S[U-1],S[U]));return O}function D(w){const S=6/n.s,O=[...ie.projekt.module].sort((G,B)=>v[G.typ]-v[B.typ]||x(G)-x(B));for(const G of O){const B=Bt[G.typ],te=G.punkte;if(B.geometrie==="punkt"){if(G.typ==="bau"){if(L(w,G).inside)return G}else if(Math.hypot(w[0]-te[0][0],w[1]-te[0][1])<Math.max(.4,B.radius2d(G)))return G}else if(B.geometrie==="linie"){if(P(w,te)<I(G)+S)return G}else if(Us(w,te))return G}const U=ie.projekt.grundstueck.haus;return U!=null&&U.breite&&w[0]>U.x&&w[0]<U.x+U.breite&&w[1]>U.y&&w[1]<U.y+U.tiefe?"haus":null}function L(w,S){const O=(S.params.rotation||0)*Math.PI/180,U=S.punkte[0],G=w[0]-U[0],B=w[1]-U[1],te=G*Math.cos(-O)-B*Math.sin(-O),K=G*Math.sin(-O)+B*Math.cos(-O),[T,M]=Bt.bau.rechteck2d(S);return{lx:te,ly:K,a:O,inside:Math.abs(te)<T/2&&Math.abs(K)<M/2}}const E=(w,S,O,U)=>[w[0]+O*Math.cos(S)-U*Math.sin(S),w[1]+O*Math.sin(S)+U*Math.cos(S)];function b(w){const S=Bt[w.typ],O=w.punkte,U=[],G=O.length===4&&O.every((K,T)=>{const M=O[(T+1)%4];return Math.abs(K[0]-M[0])<1e-6||Math.abs(K[1]-M[1])<1e-6}),B=w.form||(S.geometrie==="polygon"?G?"rechteck":"frei":"gerade"),te=(K,T)=>{for(const[M,z,j]of[[1,0,"ew-resize"],[-1,0,"ew-resize"],[0,1,"ns-resize"],[0,-1,"ns-resize"]])U.push({pos:[K.x+M*K.rx,K.y+z*K.ry],cursor:j,art:"ecke",apply:Z=>T(M?{...K,rx:Math.max(.2,_(Math.abs(Z[0]-K.x)))}:{...K,ry:Math.max(.2,_(Math.abs(Z[1]-K.y)))})})};if(S.geometrie==="polygon"&&B==="rechteck"&&O.length===4)for(let K=0;K<4;K++){const T=O[(K+2)%4];U.push({pos:O[K],cursor:K%2?"nesw-resize":"nwse-resize",art:"ecke",apply:(Z,$)=>{w.punkte=Go(T,y(Z,$.shiftKey,w))}});const M=O[K],z=O[(K+1)%4],j=Math.abs(M[1]-z[1])<1e-6;U.push({kante:[M,z],pos:[(M[0]+z[0])/2,(M[1]+z[1])/2],cursor:j?"ns-resize":"ew-resize",art:"kante",apply:(Z,$)=>{const _e=y(Z,$.shiftKey,w),pe=O.map(ue=>[...ue]),xe=(K+1)%4;j?(pe[K][1]=_e[1],pe[xe][1]=_e[1]):(pe[K][0]=_e[0],pe[xe][0]=_e[0]),w.punkte=Go(pe[0],pe[2])}})}else if(S.geometrie==="polygon"&&B==="kreis"&&w.kreis){const K=w.kreis,T=M=>{w.kreis=M,w.punkte=gn(M)};te(K,T),U.push({ring:!0,cursor:"nwse-resize",art:"kante",apply:M=>{const z=Math.hypot((M[0]-K.x)/K.rx,(M[1]-K.y)/K.ry);T({...K,rx:Math.max(.2,_(K.rx*z)),ry:Math.max(.2,_(K.ry*z))})}})}else if(S.geometrie==="polygon")O.forEach((K,T)=>U.push({pos:K,cursor:"move",art:"ecke",apply:(M,z)=>{w.punkte[T]=y(M,z.shiftKey,w)}})),O.forEach((K,T)=>{const M=O[(T+1)%O.length],z=M[0]-K[0],j=M[1]-K[1],Z=Math.hypot(z,j)||1,$=[-j/Z,z/Z];U.push({kante:[K,M],cursor:Math.abs($[0])>Math.abs($[1])?"ew-resize":"ns-resize",art:"kante",schieben:!0,apply:(_e,pe,xe)=>{const ue=(_e[0]-xe[0])*$[0]+(_e[1]-xe[1])*$[1],re=(T+1)%O.length;w.punkte[T]=[_(K[0]+$[0]*ue),_(K[1]+$[1]*ue)],w.punkte[re]=[_(M[0]+$[0]*ue),_(M[1]+$[1]*ue)]}})});else if(S.geometrie==="linie"){if(B==="ring"&&w.kreis){const T=w.kreis;te(T,z=>{w.kreis=z,w.punkte=gn(z,48,!0)})}else if(O.forEach((T,M)=>U.push({pos:T,cursor:"move",art:"ecke",apply:(z,j)=>{w.punkte[M]=y(z,j.shiftKey,w)}})),B!=="kurve")for(const T of[0,O.length-1]){const M=O[T],z=O[T===0?1:O.length-2],j=M[0]-z[0],Z=M[1]-z[1],$=Math.hypot(j,Z)||1,_e=22/n.s;U.push({pos:[M[0]+j/$*_e,M[1]+Z/$*_e],cursor:"copy",art:"plus",ende:T,apply:(pe,xe)=>{const ue=y(pe,xe.shiftKey,w),re=r.orig.punkte;w.punkte=T===0?[ue,...re]:[...re,ue]}})}const K=w.typ==="weg"?"breite":w.typ==="mauer"||w.typ==="hecke"?"dicke":null;K&&U.push({rand:!0,cursor:"col-resize",art:"kante",apply:T=>{const M=P(T,O);w.params[K]=Math.round(Math.min(6,Math.max(.1,M*2))*20)/20}})}else if(w.typ==="bau"){const K=O[0],T=(w.params.rotation||0)*Math.PI/180,M=w.params.breite,z=w.params.tiefe;for(const[j,Z]of[[1,0],[-1,0],[0,1],[0,-1]])U.push({pos:E(K,T,j*M/2,Z*z/2),cursor:"move",art:"kante",apply:$=>{const _e=L($,{...w,punkte:[K]});if(j){const pe=Math.max(.3,_(j*_e.lx+M/2));w.params.breite=pe,w.punkte=[E(K,T,j*(pe-M)/2,0).map(_)]}else{const pe=Math.max(.3,_(Z*_e.ly+z/2));w.params.tiefe=pe,w.punkte=[E(K,T,0,Z*(pe-z)/2).map(_)]}}});U.push({pos:E(K,T,0,-z/2-28/n.s),cursor:"grab",art:"drehen",apply:j=>{let Z=Math.atan2(j[0]-K[0],-(j[1]-K[1]))*180/Math.PI;Z=Math.round(Z/15)*15,Z>180&&(Z-=360),w.params.rotation=Z}})}else if(w.typ==="pflanze"){const K=O[0],T=w.params.krone/2;U.push({pos:[K[0]+T,K[1]],cursor:"ew-resize",art:"ecke",apply:M=>{w.params.krone=Math.max(.3,_(Math.hypot(M[0]-K[0],M[1]-K[1])*2))}})}return U}function C(w){const S=ie.auswahl&&ie.modul(ie.auswahl);if(!S)return null;const O=d(w),U=9/n.s,G=b(S);for(const B of G)if(B.pos&&B.art!=="kante"||B.pos&&S.typ==="bau"){const te=g(B.pos);if(Math.hypot(te[0]-w[0],te[1]-w[1])<(B.art==="kante"?10:13))return B}for(const B of G)if(B.pos&&B.art==="kante"&&!B.kante){const te=g(B.pos);if(Math.hypot(te[0]-w[0],te[1]-w[1])<10)return B}for(const B of G){if(B.kante&&Ss(O,B.kante[0],B.kante[1])<U)return B;if(B.ring&&S.kreis){const te=S.kreis,K=Math.hypot((O[0]-te.x)/te.rx,(O[1]-te.y)/te.ry);if(Math.abs(K-1)*Math.min(te.rx,te.ry)<U)return B}if(B.rand){const te=S.form==="ring"&&S.kreis?Math.abs(Math.hypot((O[0]-S.kreis.x)/S.kreis.rx,(O[1]-S.kreis.y)/S.kreis.ry)-1)*Math.min(S.kreis.rx,S.kreis.ry):P(O,S.punkte);if(Math.abs(te-I(S))<U&&I(S)*n.s>5)return B}}return null}const N=w=>{const S=i.getBoundingClientRect();return[w.clientX-S.left,w.clientY-S.top]};i.addEventListener("pointerdown",w=>{try{i.setPointerCapture(w.pointerId)}catch{}const S=N(w);if(l.set(w.pointerId,S),l.size===2){r={art:"pinch",start:[...l.values()],view:{...n}};return}const O=d(S);if(s){if(s.art==="punkt"){ae(y(O,w.shiftKey)),r={art:"nichts"};return}r={art:"bauen",startS:S,a:y(O,w.shiftKey),b:null,spur:[O]};return}const U=C(S);if(U){const B=ie.modul(ie.auswahl);r={art:"griff",g:U,mod:B,start:O,orig:structuredClone(B),bewegt:!1};return}const G=D(O);if(G==="haus"){r={art:"haus",start:O,orig:{...ie.projekt.grundstueck.haus},bewegt:!1},ie.waehle(null);return}if(G){ie.auswahl!==G.id&&ie.waehle(G.id),r={art:"modul",mod:G,start:O,orig:structuredClone(G),bewegt:!1};return}ie.auswahl&&ie.waehle(null),r={art:"pan",start:S,view:{...n}}}),i.addEventListener("pointermove",w=>{const S=N(w),O=d(S);if(l.has(w.pointerId)&&l.set(w.pointerId,S),o=s?y(O,w.shiftKey):null,!r){a=s?null:C(S),i.style.cursor=s?"crosshair":a?a.cursor:D(O)?"pointer":"grab",ye();return}if(r.art==="pinch"&&l.size===2){const[U,G]=[...l.values()],[B,te]=r.start,K=Math.hypot(G[0]-U[0],G[1]-U[1])/Math.max(1,Math.hypot(te[0]-B[0],te[1]-B[1])),T=[(B[0]+te[0])/2,(B[1]+te[1])/2],M=[(U[0]+G[0])/2,(U[1]+G[1])/2];n.s=Math.max(4,Math.min(200,r.view.s*K)),n.ox=M[0]-(T[0]-r.view.ox)*(n.s/r.view.s),n.oy=M[1]-(T[1]-r.view.oy)*(n.s/r.view.s),ye()}else if(r.art==="pan")n.ox=r.view.ox+S[0]-r.start[0],n.oy=r.view.oy+S[1]-r.start[1],ye();else if(r.art==="bauen")r.b=y(O,w.shiftKey),r.spur.push(O),ye();else if(r.art==="griff")r.bewegt||(ie.schnappschuss(),r.bewegt=!0),ie.live(()=>{const U=r.mod;U.punkte=structuredClone(r.orig.punkte),U.params=structuredClone(r.orig.params),r.orig.kreis&&(U.kreis={...r.orig.kreis}),r.g.apply(O,w,r.start);const G=Vi(ie.projekt)&&!w.shiftKey?pr(ie.projekt,U):[];G.length&&r.gueltig?Object.assign(U,structuredClone(r.gueltig)):r.gueltig={punkte:structuredClone(U.punkte),params:structuredClone(U.params),...U.kreis?{kreis:{...U.kreis}}:{}},r.blockiert=G});else if(r.art==="modul"||r.art==="haus"){let U=O[0]-r.start[0],G=O[1]-r.start[1];if(!r.bewegt&&Math.hypot(U,G)*n.s<4)return;if(r.bewegt||(ie.schnappschuss(),r.bewegt=!0,r.letzt=[0,0]),r.art==="haus"){const B=w.shiftKey?0:dr(ie.projekt);ie.live(te=>{te.grundstueck.haus.x=_(gs(r.orig.x+U,B)),te.grundstueck.haus.y=_(gs(r.orig.y+G,B))})}else ie.live(B=>{const te=r.mod,K=Vi(B)&&!w.shiftKey,T=[[U,G],[U,r.letzt[1]],[r.letzt[0],G]];let M=null,z=[];for(const[j,Z]of T){const $=ka(r.orig,j,Z,B,{frei:w.shiftKey,massstab:n.s});te.punkte=$.punkte,$.kreis&&(te.kreis=$.kreis);const _e=K?pr(B,te):[];if(!_e.length){M=[j,Z];break}z.length||(z=_e)}if(M)r.letzt=M;else{const j=ka(r.orig,...r.letzt,B,{frei:w.shiftKey,massstab:n.s});te.punkte=j.punkte,j.kreis&&(te.kreis=j.kreis)}r.blockiert=z})}});const k=w=>{if(l.delete(w.pointerId),!!r){if(r.art==="bauen"){const S=r;r=null,Y(S)}else r.bewegt&&ie.emit(r.art==="haus"?"grundstueck":"modul");r&&(r.art!=="pinch"||l.size===0)&&(r=null),ye()}};i.addEventListener("pointerup",k),i.addEventListener("pointercancel",w=>{l.delete(w.pointerId),r=null,ye()}),i.addEventListener("dblclick",w=>{const S=ie.auswahl&&ie.modul(ie.auswahl);if(!S||s)return;const O=Bt[S.typ],U=S.form||(O.geometrie==="polygon"?"frei":"gerade");if(!["frei","gerade","kurve"].includes(U))return;const G=N(w),B=d(G),te=S.punkte,K=te.findIndex(Z=>{const $=g(Z);return Math.hypot($[0]-G[0],$[1]-G[1])<13}),T=O.geometrie==="polygon"?3:2;if(K>=0){te.length>T&&ie.aendern(()=>te.splice(K,1));return}const M=O.geometrie==="polygon"?te.length:te.length-1;let z=-1,j=1e9;for(let Z=0;Z<M;Z++){const $=Ss(B,te[Z],te[(Z+1)%te.length]);$<j&&(j=$,z=Z)}j<.6&&ie.aendern(()=>{te.splice(z+1,0,y(B,w.shiftKey)),S.form==="rechteck"&&(S.form="frei")})}),i.addEventListener("wheel",w=>{w.preventDefault();const S=N(w),O=d(S),U=Math.exp(-w.deltaY*.0015);n.s=Math.max(4,Math.min(200,n.s*U)),n.ox=S[0]-O[0]*n.s,n.oy=S[1]-O[1]*n.s,ye()},{passive:!1});function F(w){var O;if((s==null?void 0:s.teil.id)===w.id){me();return}const S=Bt[w.typ].geometrie;s={teil:w,art:S,form:h[S+w.typ]||((O=$l[S][0])==null?void 0:O[0])},(w.typ==="zaun"||w.typ==="mauer"||w.typ==="hecke")&&(s.form=h[S+w.typ]||"gerade"),ie.waehle(null),e==null||e(s),ye()}function q(w){s&&(s.form=w,h[s.art+s.teil.typ]=w,e==null||e(s),ye())}function H(w){const S=w.a,O=w.b,U=O&&Math.hypot(O[0]-S[0],O[1]-S[1])>.25;if(s.art==="polygon"){if(s.form==="kreis"){const B=U?_(Math.hypot(O[0]-S[0],O[1]-S[1])):1.5,te={x:S[0],y:S[1],rx:B,ry:B};return{form:"kreis",kreis:te,punkte:gn(te)}}if(s.form==="frei"){if(w.spur.length<6)return null;const B=Ia(w.spur,.12).map(te=>[_(te[0]),_(te[1])]);return B.length>2&&Math.hypot(B[0][0]-B.at(-1)[0],B[0][1]-B.at(-1)[1])<.5&&B.pop(),B.length>=3&&Gi(B)>.2?{form:"frei",punkte:B}:null}const G=U?O:[S[0]+3,S[1]+2];return Math.abs(G[0]-S[0])<.2||Math.abs(G[1]-S[1])<.2?null:{form:"rechteck",punkte:Go(S,G)}}if(s.art==="linie"){if(s.form==="ring"){const G=U?_(Math.hypot(O[0]-S[0],O[1]-S[1])):2,B={x:S[0],y:S[1],rx:G,ry:G};return{form:"ring",kreis:B,punkte:gn(B,48,!0)}}if(s.form==="kurve"){if(w.spur.length<4)return null;const G=FM(Ia(w.spur,.2),2);return se(G)?{form:"kurve",punkte:G}:null}return U?{form:"gerade",punkte:[S,O]}:null}return null}const se=w=>w.length>=2&&Math.hypot(w[0][0]-w.at(-1)[0],w[0][1]-w.at(-1)[1])+w.length*.01>.5;function Y(w){if(s.art==="linie"&&s.form==="gerade"&&w.b){const U=ie.projekt.module.find(G=>G.katalog===s.teil.id&&(G.form||"gerade")==="gerade"&&[G.punkte[0],G.punkte.at(-1)].some(B=>Math.hypot(B[0]-w.a[0],B[1]-w.a[1])<.05));if(U&&Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.25){const G=Math.hypot(U.punkte.at(-1)[0]-w.a[0],U.punkte.at(-1)[1]-w.a[1])<.05,B={...U,punkte:G?[...U.punkte,w.b]:[w.b,...U.punkte]};if(!ce(B))return;ie.aendern(()=>{G?U.punkte.push(w.b):U.punkte.unshift(w.b)}),ie.waehle(U.id),ye();return}}const S=H(w);if(!S){s.art==="linie"&&ze("Zum Bauen im Plan ziehen"),ye();return}const O={id:br(),typ:s.teil.typ,katalog:s.teil.id,form:S.form,punkte:S.punkte,params:structuredClone(s.teil.params)};S.kreis&&(O.kreis=S.kreis),ce(O)&&(ie.aendern(U=>U.module.push(O)),ie.waehle(O.id))}function ae(w){const S={id:br(),typ:s.teil.typ,katalog:s.teil.id,punkte:[w],params:structuredClone(s.teil.params)};ce(S)&&ie.aendern(O=>O.module.push(S))}function ce(w){if(!Vi(ie.projekt))return!0;const S=pr(ie.projekt,w);return S.length?(f=S,ze(`Geht nicht: überschneidet sich mit ${sE(S[0])}`),setTimeout(()=>{f=[],ye()},1600),!1):!0}function me(){s=null,r=null,e==null||e(null),ye()}let we=null;function ze(w){we=w,ye(),setTimeout(()=>{we=null,ye()},1600)}const ee=new Map;function de(w){const S=Et[w];if(!S)return"#999";if(S.foto&&S.alpha)return S.farbe;if(!ee.has(w))if(S.foto){const G=new Image;G.onload=()=>{ee.set(w,{pat:t.createPattern(G,"repeat"),px:G.width}),ye()},G.src=S.foto,ee.set(w,null)}else ee.set(w,{pat:t.createPattern(Ic(S.textur).color,"repeat"),px:512});const O=ee.get(w);if(!O)return S.farbe||"#999";const U=(S.tile||1)*n.s/O.px;return O.pat.setTransform(new DOMMatrix([U,0,0,U,n.ox,n.oy])),O.pat}function Se(w,S="nonzero"){var U;t.fillStyle=de(w),t.fill(S);let O=(U=Et[w])==null?void 0:U.grundton;Array.isArray(O)&&(O=O.some(G=>G>1)?null:`rgb(${O.map(G=>Math.round(G*255)).join(",")})`),O&&Et[w].foto&&(t.save(),t.globalCompositeOperation="multiply",t.fillStyle=O,t.fill(S),t.restore())}function he(w,S=!0,O=!0){O&&t.beginPath(),w.forEach((U,G)=>{const B=g(U);G?t.lineTo(B[0],B[1]):t.moveTo(B[0],B[1])}),S&&t.closePath()}function be(w,S,{farbe:O="#1d2620",bg:U="rgba(255,255,255,.88)",gr:G=11}={}){t.font=`600 ${G}px system-ui, sans-serif`;const B=t.measureText(w).width+8;t.fillStyle=U,t.beginPath(),t.roundRect(S[0]-B/2,S[1]-G/2-3,B,G+6,4),t.fill(),t.fillStyle=O,t.textAlign="center",t.textBaseline="middle",t.fillText(w,S[0],S[1]+.5)}function Oe(w,S){const O=S?w.length:w.length-1;if(!(O>12))for(let U=0;U<O;U++){const G=w[U],B=w[(U+1)%w.length],te=Math.hypot(B[0]-G[0],B[1]-G[1]);te*n.s<34||be(`${te.toFixed(2)} m`,g([(G[0]+B[0])/2,(G[1]+B[1])/2]),{gr:10})}}function ye(){if(!ie.projekt||i.hidden)return;const w=i.clientWidth,S=i.clientHeight,O=ie.projekt.grundstueck;t.setTransform(c,0,0,c,0,0),t.fillStyle="#e9ece6",t.fillRect(0,0,w,S);const U=g([-500,-9]),G=g([500,-3.5]),B=g([500,0]);t.fillStyle="#7d7f82",t.fillRect(U[0],U[1],G[0]-U[0],G[1]-U[1]),t.fillStyle="#c9c7c1",t.fillRect(U[0],G[1],B[0]-U[0],B[1]-G[1]),he([[0,0],[O.breite,0],[O.breite,O.tiefe],[0,O.tiefe]]),Se("rasen");const[te,K]=d([0,0]),[T,M]=d([w,S]);t.lineWidth=1;const z=dr(ie.projekt);if(z&&z<1&&z*n.s>=9){t.strokeStyle="rgba(0,0,0,.035)",t.beginPath();for(let ue=Math.floor(te/z)*z;ue<=T;ue+=z){const re=g([ue,0])[0];t.moveTo(re,0),t.lineTo(re,S)}for(let ue=Math.floor(K/z)*z;ue<=M;ue+=z){const re=g([0,ue])[1];t.moveTo(0,re),t.lineTo(w,re)}t.stroke()}for(let ue=Math.floor(te);ue<=T;ue++){if(n.s<8&&ue%5)continue;const re=g([ue,0])[0];t.strokeStyle=ue%5?"rgba(0,0,0,.05)":"rgba(0,0,0,.14)",t.beginPath(),t.moveTo(re,0),t.lineTo(re,S),t.stroke()}for(let ue=Math.floor(K);ue<=M;ue++){if(n.s<8&&ue%5)continue;const re=g([0,ue])[1];t.strokeStyle=ue%5?"rgba(0,0,0,.05)":"rgba(0,0,0,.14)",t.beginPath(),t.moveTo(0,re),t.lineTo(w,re),t.stroke()}he([[0,0],[O.breite,0],[O.breite,O.tiefe],[0,O.tiefe]]),t.setLineDash([8,5]),t.strokeStyle="#b8433a",t.lineWidth=2,t.stroke(),t.setLineDash([]),be(`${O.breite.toFixed(2)} m`,g([O.breite/2,O.tiefe]),{bg:"#b8433a",farbe:"#fff"}),be(`${O.tiefe.toFixed(2)} m`,g([0,O.tiefe/2]),{bg:"#b8433a",farbe:"#fff"});const j=O.haus;if(j!=null&&j.breite){const ue=[[j.x,j.y],[j.x+j.breite,j.y],[j.x+j.breite,j.y+j.tiefe],[j.x,j.y+j.tiefe]];he(ue),t.fillStyle="#d9d4ca",t.fill(),t.strokeStyle="#555",t.lineWidth=2,t.stroke(),t.save(),he(ue),t.clip(),t.strokeStyle="rgba(0,0,0,.12)",t.lineWidth=1;const re=g(ue[0]),Ee=g(ue[2]);for(let Ce=re[0]-(Ee[1]-re[1]);Ce<Ee[0];Ce+=10)t.beginPath(),t.moveTo(Ce,Ee[1]),t.lineTo(Ce+(Ee[1]-re[1]),re[1]),t.stroke();t.restore(),be("Haus",g([j.x+j.breite/2,j.y+j.tiefe/2]),{gr:13})}const Z=["flaeche","beet","weg","mauer","zaun","hecke","bau","pflanze"],$=[...ie.projekt.module].sort((ue,re)=>Z.indexOf(ue.typ)-Z.indexOf(re.typ)||x(re)-x(ue));for(const ue of $)le(ue,ue.id===ie.auswahl);const _e=ue=>{var Ee;const re=ue==="haus"?(()=>{const Ce=O.haus;return[[Ce.x,Ce.y],[Ce.x+Ce.breite,Ce.y],[Ce.x+Ce.breite,Ce.y+Ce.tiefe],[Ce.x,Ce.y+Ce.tiefe]]})():(Ee=Er(ue))==null?void 0:Ee.poly;re&&(he(re),t.fillStyle="rgba(220,40,30,.22)",t.fill(),t.strokeStyle="#d8281e",t.lineWidth=2.5,t.setLineDash([6,4]),t.stroke(),t.setLineDash([]))};if(Vi(ie.projekt))for(const ue of u){const re=ie.modul(ue);re&&_e(re)}for(const ue of[...(r==null?void 0:r.blockiert)||[],...f])_e(ue);const pe=ie.auswahl&&ie.modul(ie.auswahl);if(pe&&Ke(pe),s&&(r==null?void 0:r.art)==="bauen"){const ue=H(r);if(t.strokeStyle="#2d7a1e",t.lineWidth=2.5,(s.form==="frei"||s.form==="kurve")&&r.spur.length>1)he(r.spur,!1),t.setLineDash([5,4]),t.stroke(),t.setLineDash([]);else if(ue){const re={...ue,typ:s.teil.typ,params:s.teil.params,id:"vorschau"};t.globalAlpha=.75,le(re,!0),t.globalAlpha=1,ue.kreis?be(`Ø ${(ue.kreis.rx*2).toFixed(2)} m`,g([ue.kreis.x,ue.kreis.y]),{bg:"#2d7a1e",farbe:"#fff",gr:12}):Oe(ue.punkte,s.art==="polygon")}}if(s&&o&&!r){const ue=g(o);t.strokeStyle="#2d7a1e",t.lineWidth=1.5,t.beginPath(),t.moveTo(ue[0]-10,ue[1]),t.lineTo(ue[0]+10,ue[1]),t.moveTo(ue[0],ue[1]-10),t.lineTo(ue[0],ue[1]+10),t.stroke()}we&&be(we,[w/2,60],{bg:"#1d2620",farbe:"#fff",gr:13});const xe=n.s>=30?1:n.s>=12?5:10;t.fillStyle="#1d2620",t.fillRect(14,S-22,xe*n.s,4),t.font="600 11px system-ui",t.textAlign="left",t.fillText(`${xe} m`,14,S-30)}function Ke(w){const S=Bt[w.typ];if(S.geometrie==="polygon"){w.kreis&&w.form==="kreis"?be(w.kreis.rx===w.kreis.ry?`Ø ${(w.kreis.rx*2).toFixed(2)} m`:`${(w.kreis.rx*2).toFixed(2)} × ${(w.kreis.ry*2).toFixed(2)} m`,g([w.kreis.x,w.kreis.y-w.kreis.ry*.35]),{gr:11}):Oe(w.punkte,!0);const O=w.kreis?[w.kreis.x,w.kreis.y]:w.punkte.reduce((U,G)=>[U[0]+G[0]/w.punkte.length,U[1]+G[1]/w.punkte.length],[0,0]);be(`${Gi(w.punkte).toFixed(1)} m²`,g(O),{bg:"#2d7a1e",farbe:"#fff",gr:12})}else S.geometrie==="linie"&&w.form!=="ring"?Oe(w.punkte,!1):(w.typ==="weg"||w.form==="ring")&&be(`Ø ${(w.kreis.rx*2).toFixed(2)} m`,g([w.kreis.x,w.kreis.y]),{gr:11});if(a&&(a.kante||a.ring||a.rand)){if(t.strokeStyle="#ffb02e",t.lineWidth=4,a.kante)he(a.kante,!1),t.stroke();else if(a.ring)he(w.punkte,!0),t.stroke();else if(a.rand&&w.typ==="weg"){const O=Ns(w.punkte,w.params.breite);he(O.links,!1),t.stroke(),he(O.rechts,!1),t.stroke()}}for(const O of b(w)){if(!O.pos)continue;const U=g(O.pos),G=a===O||(r==null?void 0:r.g)===O;if(t.lineWidth=2.5,t.strokeStyle="#2d7a1e",t.fillStyle=G?"#ffb02e":"#fff",t.beginPath(),O.art==="plus"){t.arc(U[0],U[1],9,0,7),t.fill(),t.stroke(),be("+",U,{bg:"transparent",farbe:"#2d7a1e",gr:14});continue}if(O.art==="drehen"){t.arc(U[0],U[1],9,0,7),t.fill(),t.stroke(),be("↻",U,{bg:"transparent",farbe:"#2d7a1e",gr:13});continue}O.art==="kante"?t.roundRect(U[0]-6,U[1]-6,12,12,3):t.arc(U[0],U[1],6.5,0,7),t.fill(),t.stroke()}}function le(w,S){const O=Bt[w.typ],U=w.punkte,G=w.params;if(t.lineJoin="round",t.lineCap="round",w.typ==="flaeche"||w.typ==="beet")he(U),Se(G.material),w.typ==="beet"&&(t.fillStyle="rgba(90,140,60,.35)",t.fill()),t.strokeStyle=S?"#2d7a1e":"rgba(0,0,0,.45)",t.lineWidth=S?3:1.2,t.stroke(),w.typ==="beet"&&G.hochbeet>0&&(t.strokeStyle="#8a5a33",t.lineWidth=4,t.stroke());else if(w.typ==="weg"){if(w.form==="ring"&&w.kreis){const B=w.kreis,te=G.breite/2;he(gn({...B,rx:B.rx+te,ry:B.ry+te})),he(gn({...B,rx:Math.max(.1,B.rx-te),ry:Math.max(.1,B.ry-te)}).reverse(),!0,!1)}else he(Ns(U,G.breite).poly);Se(G.material,"evenodd"),t.strokeStyle=S?"#2d7a1e":G.kante?"#888":"rgba(0,0,0,.3)",t.lineWidth=S?3:1.5,t.stroke()}else if(O.geometrie==="linie"){if(he(U,!1),t.strokeStyle=O.farbe2d(w),t.lineWidth=Math.max(3,O.strich2d(w)*n.s),S&&(t.save(),t.strokeStyle="#8cff5a",t.lineWidth+=6,t.stroke(),t.restore()),t.stroke(),w.typ==="zaun"&&w.form!=="kurve"&&w.form!=="ring")for(const B of U.map(g))t.fillStyle=G.pfosten,t.fillRect(B[0]-3,B[1]-3,6,6)}else if(w.typ==="pflanze"){const B=g(U[0]),te=Math.max(4,O.radius2d(w)*n.s);t.fillStyle=O.farbe2d(w)+"b0",t.beginPath(),t.arc(B[0],B[1],te,0,7),t.fill(),t.strokeStyle=S?"#8cff5a":"#24451c",t.lineWidth=S?3:1.5,t.stroke(),t.fillStyle="#5b3d22",t.beginPath(),t.arc(B[0],B[1],2.5,0,7),t.fill()}else if(w.typ==="bau"){const[B,te]=O.rechteck2d(w),K=g(U[0]);t.save(),t.translate(K[0],K[1]),t.rotate((G.rotation||0)*Math.PI/180),t.fillStyle=O.farbe2d(w),t.globalAlpha*=G.art==="pergola"?.45:.9,G.art==="teich"?(t.beginPath(),t.ellipse(0,0,B/2*n.s*.9,te/2*n.s*.9,0,0,7),t.fill()):t.fillRect(-B/2*n.s,-te/2*n.s,B*n.s,te*n.s),t.globalAlpha=1,t.strokeStyle=S?"#8cff5a":"rgba(0,0,0,.6)",t.lineWidth=S?3:1.2,t.strokeRect(-B/2*n.s,-te/2*n.s,B*n.s,te*n.s),t.restore(),B*n.s>40&&be(G.art==="sitzgruppe"?"Sitzgr.":G.art[0].toUpperCase()+G.art.slice(1),K,{gr:10})}}return ie.on(w=>{w!=="auswahl"&&w!=="live"&&ie.projekt&&(u=qu(ie.projekt)),ye()}),ie.projekt&&(u=qu(ie.projekt)),{zeichne:ye,einpassen:p,starteWerkzeug:F,setzeForm:q,abbrechen:me,groesse:m,S:g,get tool(){return s}}}const lE=[],qo=(i,e)=>`./katalog/${i}/${e}`,cE=lE.map(i=>{const e="foto_"+i.id;AM(e,{name:i.name,kategorie:i.kategorie,foto:qo(i.id,"farbe.webp"),fotoNormal:qo(i.id,"normal.webp"),vorschau:qo(i.id,"vorschau.jpg"),tile:i.material.tile,rough:i.material.rough,alpha:i.material.alpha,farbe:i.material.farbe});const t={zaun:{material:e,hoehe:i.masse.hoehe,feld:i.masse.breite,pfosten:i.pfosten||"#2f3336"},mauer:{material:e,hoehe:i.masse.hoehe,dicke:.3},flaeche:{material:e,hoehe:.04}}[i.kategorie];return{id:"e_"+i.id,schritt:i.schritt,name:i.name+" ★",typ:i.kategorie,params:t,eigen:!0}}),Yu=[{id:"grundstueck",name:"Grundstück",ico:"⬚",text:"Maße vom Grundstück und Haus"},{id:"flaechen",name:"Flächen",ico:"▦",text:"Terrasse, Pflaster, Rasen, Kies – Fläche im Plan aufziehen"},{id:"wege",name:"Wege",ico:"〰",text:"Weg als Linie klicken, Breite einstellbar"},{id:"zaeune",name:"Zäune",ico:"╫",text:"Zaun oder Mauer entlang einer Linie klicken"},{id:"pflanzen",name:"Pflanzen",ico:"❀",text:"Beete aufziehen, Bäume und Sträucher setzen"},{id:"bauten",name:"Bauten",ico:"⌂",text:"Gartenhaus, Pergola, Teich, Möbel"},{id:"praesentieren",name:"Zeigen",ico:"▶",text:"Tageszeit, Präsentation, Mengen"}],yd=[{id:"f_rasen",schritt:"flaechen",name:"Rasen",typ:"flaeche",params:{material:"rasen",hoehe:.01}},{id:"f_holz",schritt:"flaechen",name:"Holzterrasse Lärche",typ:"flaeche",params:{material:"holz_laerche",hoehe:.15,dielenwinkel:0}},{id:"f_wpc",schritt:"flaechen",name:"WPC-Terrasse grau",typ:"flaeche",params:{material:"wpc_grau",hoehe:.15,dielenwinkel:0}},{id:"f_platten",schritt:"flaechen",name:"Terrassenplatten 60×60",typ:"flaeche",params:{material:"betonplatten",hoehe:.06}},{id:"f_natur",schritt:"flaechen",name:"Natursteinplatten",typ:"flaeche",params:{material:"naturstein",hoehe:.06}},{id:"f_pfl_grau",schritt:"flaechen",name:"Rechteckpflaster grau",typ:"flaeche",params:{material:"pflaster_grau",hoehe:.04}},{id:"f_pfl_anth",schritt:"flaechen",name:"Rechteckpflaster anthrazit",typ:"flaeche",params:{material:"pflaster_anthrazit",hoehe:.04}},{id:"f_klinker",schritt:"flaechen",name:"Klinkerpflaster",typ:"flaeche",params:{material:"klinker",hoehe:.04}},{id:"f_granit",schritt:"flaechen",name:"Granit-Kleinpflaster",typ:"flaeche",params:{material:"granit",hoehe:.04}},{id:"f_bogen",schritt:"flaechen",name:"Bogenpflaster",typ:"flaeche",params:{material:"bogenpflaster",hoehe:.04}},{id:"f_kies",schritt:"flaechen",name:"Zierkies",typ:"flaeche",params:{material:"kies",hoehe:.03}},{id:"w_pfl",schritt:"wege",name:"Pflasterweg grau",typ:"weg",params:{material:"pflaster_grau",breite:1.2,kante:!0}},{id:"w_pfl_anth",schritt:"wege",name:"Pflasterweg anthrazit",typ:"weg",params:{material:"pflaster_anthrazit",breite:1.2,kante:!0}},{id:"w_kies",schritt:"wege",name:"Kiesweg",typ:"weg",params:{material:"kies",breite:1,kante:!0}},{id:"w_natur",schritt:"wege",name:"Natursteinweg",typ:"weg",params:{material:"naturstein",breite:1,kante:!1}},{id:"w_klinker",schritt:"wege",name:"Klinkerweg",typ:"weg",params:{material:"klinker",breite:1.2,kante:!0}},{id:"w_granit",schritt:"wege",name:"Granit-Kleinpflaster",typ:"weg",params:{material:"granit",breite:1.2,kante:!0}},{id:"z_doppelstab",schritt:"zaeune",name:"Doppelstabmatte",typ:"zaun",params:{material:"z_doppelstab",hoehe:1.6,feld:2.5,pfosten:"#2f3336"}},{id:"z_lamellen",schritt:"zaeune",name:"Holz-Lamellen",typ:"zaun",params:{material:"z_lamellen",hoehe:1.8,feld:1.8,pfosten:"#6b4a2b"}},{id:"z_wpc",schritt:"zaeune",name:"WPC-Sichtschutz",typ:"zaun",params:{material:"z_wpc",hoehe:1.8,feld:1.8,pfosten:"#2f3336"}},{id:"z_jaeger",schritt:"zaeune",name:"Jägerzaun",typ:"zaun",params:{material:"z_jaeger",hoehe:1,feld:2.5,pfosten:"#6b4a2b"}},{id:"z_gabione",schritt:"zaeune",name:"Gabionenwand",typ:"mauer",params:{material:"gabione",hoehe:1.6,dicke:.3}},{id:"m_natur",schritt:"zaeune",name:"Natursteinmauer",typ:"mauer",params:{material:"mauer_naturstein",hoehe:.8,dicke:.4}},{id:"m_beton",schritt:"zaeune",name:"Betonsteinmauer",typ:"mauer",params:{material:"mauer_beton",hoehe:.6,dicke:.25}},{id:"h_hecke",schritt:"zaeune",name:"Hecke (Liguster)",typ:"hecke",params:{hoehe:1.8,dicke:.7,farbton:100}},{id:"h_thuja",schritt:"zaeune",name:"Hecke (Thuja)",typ:"hecke",params:{hoehe:2,dicke:.8,farbton:130}},{id:"b_beet",schritt:"pflanzen",name:"Staudenbeet",typ:"beet",params:{material:"mulch",dichte:1.2,hochbeet:0,bluete:!0}},{id:"b_beet_kies",schritt:"pflanzen",name:"Kiesbeet",typ:"beet",params:{material:"kies",dichte:.6,hochbeet:0,bluete:!1}},{id:"b_hochbeet",schritt:"pflanzen",name:"Hochbeet Holz",typ:"beet",params:{material:"erde",dichte:1.5,hochbeet:.7,bluete:!0}},{id:"p_laub",schritt:"pflanzen",name:"Laubbaum",typ:"pflanze",params:{art:"laub",hoehe:7,krone:5}},{id:"p_kugel",schritt:"pflanzen",name:"Kugelbaum",typ:"pflanze",params:{art:"kugel",hoehe:3.5,krone:2.2}},{id:"p_obst",schritt:"pflanzen",name:"Obstbaum",typ:"pflanze",params:{art:"obst",hoehe:4,krone:3.5}},{id:"p_nadel",schritt:"pflanzen",name:"Nadelbaum",typ:"pflanze",params:{art:"nadel",hoehe:8,krone:3.5}},{id:"p_strauch",schritt:"pflanzen",name:"Strauch",typ:"pflanze",params:{art:"strauch",hoehe:1.5,krone:1.6}},{id:"p_bluehstrauch",schritt:"pflanzen",name:"Blühstrauch",typ:"pflanze",params:{art:"bluete",hoehe:1.8,krone:1.8}},{id:"p_graeser",schritt:"pflanzen",name:"Ziergras",typ:"pflanze",params:{art:"gras",hoehe:1.1,krone:.9}},{id:"x_gartenhaus",schritt:"bauten",name:"Gartenhaus",typ:"bau",params:{art:"gartenhaus",breite:3,tiefe:2.5,hoehe:2.3,rotation:0,farbe:"#7b5a3c"}},{id:"x_pergola",schritt:"bauten",name:"Pergola",typ:"bau",params:{art:"pergola",breite:4,tiefe:3,hoehe:2.5,rotation:0,farbe:"#3a3b3d"}},{id:"x_teich",schritt:"bauten",name:"Teich",typ:"bau",params:{art:"teich",breite:4,tiefe:2.5,hoehe:0,rotation:0,farbe:"#9b958b"}},{id:"x_pool",schritt:"bauten",name:"Pool",typ:"bau",params:{art:"pool",breite:7,tiefe:3.5,hoehe:0,rotation:0,farbe:"#e9e6df"}},{id:"x_sitz",schritt:"bauten",name:"Tisch mit Stühlen",typ:"bau",params:{art:"sitzgruppe",breite:.78,tiefe:1.83,hoehe:.86,rotation:0,farbe:"#d9d4c8"}},{id:"x_bank",schritt:"bauten",name:"Gartenbank",typ:"bau",params:{art:"bank",breite:1.16,tiefe:.5,hoehe:.89,rotation:0,farbe:"#7a5a3a"}},{id:"x_picknick",schritt:"bauten",name:"Picknicktisch",typ:"bau",params:{art:"picknick",breite:1.6,tiefe:2.16,hoehe:.75,rotation:0,farbe:"#7a5a3a"}},{id:"x_pflanzkasten",schritt:"bauten",name:"Pflanzkasten",typ:"bau",params:{art:"pflanzkasten",breite:.91,tiefe:.41,hoehe:.42,rotation:0,farbe:"#7a5a3a"}},{id:"x_feuer",schritt:"bauten",name:"Feuerstelle",typ:"bau",params:{art:"feuerstelle",breite:1.45,tiefe:1.43,hoehe:.39,rotation:0,farbe:"#8a8580"}},{id:"x_findling",schritt:"bauten",name:"Findling",typ:"bau",params:{art:"findling",breite:.8,tiefe:1.5,hoehe:.65,rotation:0,farbe:"#8a8580"}},{id:"x_lounge",schritt:"bauten",name:"Lounge-Sofa",typ:"bau",params:{art:"lounge",breite:2.6,tiefe:2.2,hoehe:.7,rotation:0,farbe:"#5d6165"}},{id:"x_schirm",schritt:"bauten",name:"Sonnenschirm",typ:"bau",params:{art:"schirm",breite:3,tiefe:3,hoehe:2.5,rotation:0,farbe:"#efe9dc"}},{id:"x_leuchte",schritt:"bauten",name:"Gartenleuchte",typ:"bau",params:{art:"leuchte",breite:.2,tiefe:.2,hoehe:.8,rotation:0,farbe:"#2f3336"}},...cE],Ku=i=>yd.find(e=>e.id===i),hE={laub:"🌳",kugel:"🌳",obst:"🍎",nadel:"🌲",strauch:"🌿",bluete:"🌸",gras:"🌾",gartenhaus:"🏠",pergola:"⛩",teich:"💧",pool:"🏊",sitzgruppe:"🪑",lounge:"🛋",schirm:"⛱",leuchte:"💡",bank:"🪑",picknick:"🧺",pflanzkasten:"🪴",feuerstelle:"🔥",findling:"🪨"},Pe=(i,e={},...t)=>{const n=document.createElement(i);for(const[s,r]of Object.entries(e))s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="style"&&typeof r=="object"?Object.assign(n.style,r):r!==void 0&&r!==!1&&n.setAttribute(s,r===!0?"":r);for(const s of t.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n};function uE(i){const e=i.params;return e.material&&Et[e.material]?Pe("div",{class:"swatch",style:{backgroundImage:`url(${La(e.material)})`}}):i.typ==="hecke"?Pe("div",{class:"swatch",style:{backgroundImage:`url(${La("laub")})`}}):Pe("div",{class:"swatch",style:{display:"grid",placeItems:"center",fontSize:"30px",background:"#2a3a30"}},hE[e.art]||"▢")}function In(i,e,t){e===void 0&&i.type==="number"&&(e=i.min??0);const n=Pe("label",{},i.label,Pe("b",{},i.type==="number"?`${e??""} ${i.einheit||""}`:""));let s;if(i.type==="select"&&i.key==="material")return Pe("div",{class:"field"},Pe("label",{},i.label),Pe("div",{class:"matwahl"},i.options.map(([r,a])=>Pe("button",{class:r===e?"on":"",title:a,onclick:()=>t(r,!0),style:{backgroundImage:`url(${La(r)})`}},Pe("span",{},a)))));if(i.type==="select")s=Pe("select",{onchange:r=>t(r.target.value,!0)},i.options.map(([r,a])=>Pe("option",{value:r,selected:r===e},a)));else if(i.type==="checkbox")s=Pe("input",{type:"checkbox",checked:!!e,style:{width:"auto"},onchange:r=>t(r.target.checked,!0)});else if(i.type==="color")s=Pe("input",{type:"color",value:e||"#888888",oninput:r=>t(r.target.value,!1),onchange:r=>t(r.target.value,!0)});else{const r=Pe("input",{type:"range",min:i.min,max:i.max,step:i.step,value:e}),a=Pe("input",{type:"number",min:i.min,max:i.max,step:i.step,value:e,style:{width:"84px"}}),o=(l,c)=>{const h=parseFloat(l);isNaN(h)||(r.value=a.value=h,n.querySelector("b").textContent=`${h} ${i.einheit||""}`,t(h,c))};r.addEventListener("input",l=>o(l.target.value,!1)),r.addEventListener("change",l=>o(l.target.value,!0)),a.addEventListener("input",l=>o(l.target.value,!1)),a.addEventListener("change",l=>o(l.target.value,!0)),s=Pe("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},r,a)}return Pe("div",{class:"field"},n,s)}const $u=new Set(["material","hoehe","breite","tiefe","krone","art","dichte","hochbeet","kante"]);function Yo(i){let e=!1;return(t,n)=>{e||(ie.schnappschuss(),e=!0),n?(i(ie.projekt,t),e=!1,ie.emit("modul")):ie.live(s=>i(s,t))}}function fE({rail:i,panel:e,plan:t,sz:n,aktionen:s}){function r(){i.replaceChildren(...Yu.map(f=>Pe("button",{class:ie.schritt===f.id?"on":"",title:f.text,onclick:()=>{if(ie.schritt===f.id&&matchMedia("(max-width: 760px)").matches){e.classList.toggle("zu");return}e.classList.remove("zu"),ie.schritt=f.id,t.abbrechen(),ie.auswahl?ie.waehle(null):a()}},Pe("span",{class:"ico"},f.ico),f.name)))}function a(){r();const f=Yu.find(g=>g.id===ie.schritt),d=[Pe("h2",{},f.name),Pe("p",{class:"sub"},f.text)];f.id==="grundstueck"?d.push(...o()):f.id==="praesentieren"?d.push(...u()):d.push(...l(f.id)),e.replaceChildren(...d)}function o(){const f=ie.projekt.grundstueck,d=f.haus,g=m=>Yo((p,y)=>{p.grundstueck[m]=y}),_=m=>Yo((p,y)=>{p.grundstueck.haus[m]=y});return[Pe("h3",{},"Grundstück"),Pe("div",{class:"row"},In({label:"Breite",type:"number",min:4,max:80,step:.5,einheit:"m"},f.breite,g("breite")),In({label:"Tiefe",type:"number",min:4,max:80,step:.5,einheit:"m"},f.tiefe,g("tiefe"))),Pe("h3",{},"Haus"),Pe("div",{class:"row"},In({label:"Breite",type:"number",min:0,max:40,step:.25,einheit:"m"},d.breite,_("breite")),In({label:"Tiefe",type:"number",min:2,max:30,step:.25,einheit:"m"},d.tiefe,_("tiefe"))),Pe("div",{class:"row"},In({label:"Abstand links",type:"number",min:-10,max:60,step:.25,einheit:"m"},d.x,_("x")),In({label:"Abstand Straße",type:"number",min:-10,max:60,step:.25,einheit:"m"},d.y,_("y"))),In({label:"Höhe (First)",type:"number",min:2.5,max:14,step:.1,einheit:"m"},d.hoehe,_("hoehe")),Pe("div",{class:"row"},In({label:"Dach",type:"select",options:[["sattel","Satteldach"],["flach","Flachdach"]]},d.dach,_("dach")),In({label:"Fassade",type:"select",options:XS},d.fassade,_("fassade"))),Pe("p",{class:"sub"},"Tipp: Im 2D-Plan kannst du das Haus direkt verschieben. Haus-Breite 0 = kein Haus.")]}function l(f){var v,x;const d=[],g=ie.auswahl&&ie.modul(ie.auswahl);(g&&Bt[g.typ].schritt===f||g&&f==="zaeune"&&["zaun","mauer","hecke"].includes(g.typ))&&d.push(...h(g));const _=yd.filter(I=>I.schritt===f),m=(x=(v=t.tool)==null?void 0:v.teil)==null?void 0:x.id;d.push(Pe("h3",{},g?"Weiteres Teil bauen":"Teil wählen, dann im Plan ziehen"),Pe("div",{class:"kasten"},_.map(I=>Pe("button",{class:"teil"+(m===I.id?" on":""),onclick:()=>{s.zeige2D(),t.starteWerkzeug(I),a()}},uE(I),I.name))));const p=new Set(_.map(I=>I.typ)),y=ie.projekt.module.filter(I=>p.has(I.typ));return y.length&&d.push(Pe("details",{class:"imgarten"},Pe("summary",{},`Im Garten (${y.length})`),Pe("div",{class:"liste"},y.map(I=>{const P=Ku(I.katalog);return Pe("button",{class:I.id===ie.auswahl?"on":"",onclick:()=>ie.waehle(I.id)},Pe("span",{class:"dot",style:I.params.material?{backgroundImage:`url(${La(I.params.material)})`}:{background:Bt[I.typ].farbe2d(I)}}),((P==null?void 0:P.name)||Bt[I.typ].name)+c(I))})))),d}function c(f){var g,_,m;const d=(m=(_=(g=Bt[f.typ]).menge)==null?void 0:_.call(g,f))==null?void 0:m[0];return d&&d.einheit!=="Stk"?` · ${d.wert.toFixed(1)} ${d.einheit}`:""}function h(f){const d=Bt[f.typ],g=Ku(f.katalog),_=d.felder(f),m=x=>In(x,f.params[x.key],Yo((I,P)=>{I.module.find(D=>D.id===f.id).params[x.key]=P})),p=_.filter(x=>$u.has(x.key)),y=_.filter(x=>!$u.has(x.key)),v={polygon:"Ränder und Ecken im Plan ziehen = Größe ändern. Mitte ziehen = verschieben.",linie:f.typ==="zaun"?"Punkte ziehen = verschieben. ＋ am Ende ziehen = verlängern.":"Rand ziehen = Breite ändern. ＋ am Ende ziehen = verlängern.",punkt:f.typ==="bau"?"Ränder ziehen = Größe, ↻ ziehen = drehen.":"Rand ziehen = Krone größer/kleiner."}[d.geometrie];return[Pe("div",{class:"karte"},Pe("div",{class:"kopf"},Pe("b",{},(g==null?void 0:g.name)||d.name),Pe("button",{class:"ghost klein",title:"Duplizieren",onclick:()=>{const x={...structuredClone(f),id:br(),punkte:f.punkte.map(([I,P])=>[I+1,P+1])};x.kreis&&(x.kreis={...x.kreis,x:x.kreis.x+1,y:x.kreis.y+1}),ie.aendern(I=>I.module.push(x)),ie.waehle(x.id)}},"⧉"),Pe("button",{class:"danger klein",title:"Löschen (Entf)",onclick:()=>{ie.aendern(x=>{x.module=x.module.filter(I=>I.id!==f.id)}),ie.waehle(null)}},"🗑"),Pe("button",{class:"ghost klein",title:"Auswahl aufheben (Esc)",onclick:()=>ie.waehle(null)},"✕")),Pe("p",{class:"sub"},v),...p.map(m),y.length?Pe("details",{},Pe("summary",{},"Mehr Optionen"),...y.map(m)):null)]}function u(){var m;const f=((m=ie.projekt.ansicht)==null?void 0:m.tageszeit)??15,d=Pe("b",{},`${Math.floor(f)}:${String(Math.round(f%1*60)).padStart(2,"0")} Uhr`),g=Pe("input",{type:"range",min:6,max:21,step:.25,value:f,oninput:p=>{const y=+p.target.value;d.textContent=`${Math.floor(y)}:${String(Math.round(y%1*60)).padStart(2,"0")} Uhr`,s.tageszeit(y)},onchange:p=>{ie.projekt.ansicht={...ie.projekt.ansicht,tageszeit:+p.target.value},ie.emit("ansicht")}}),_=WS(ie.projekt);return[Pe("h3",{},"Ansicht"),Pe("div",{class:"field"},Pe("label",{},"Tageszeit",d),g),Pe("div",{class:"btnrow"},Pe("button",{onclick:s.praesentation},"▶ Präsentation"),Pe("button",{class:"ghost",onclick:s.screenshot},"📷 Bild speichern")),Pe("div",{class:"btnrow"},Pe("button",{class:"ghost",onclick:s.uebersicht},"Übersicht"),Pe("button",{class:"ghost",onclick:s.vonOben},"Von oben"),Pe("button",{class:"ghost",onclick:s.vomHaus},"Vom Haus")),Pe("h3",{},"Mengenliste"),_.length?Pe("table",{class:"menge"},_.map(p=>Pe("tr",{},Pe("td",{},p.name),Pe("td",{},`${p.einheit==="Stk"?p.wert:p.wert.toFixed(1)} ${p.einheit}`)))):Pe("p",{class:"sub"},"Noch keine Module."),_.length?Pe("div",{class:"btnrow"},Pe("button",{class:"ghost",onclick:p=>{var v;const y=_.map(x=>`${x.name}	${x.einheit==="Stk"?x.wert:x.wert.toFixed(2)}	${x.einheit}`).join(`
`);(v=navigator.clipboard)==null||v.writeText(y).then(()=>{p.target.textContent="Kopiert ✓"})}},"Liste kopieren (für Excel/Angebot)")):null]}return ie.on(f=>{if(!(f==="live"||f==="ansicht")){if(f==="auswahl"&&ie.auswahl){const d=ie.modul(ie.auswahl);d&&(ie.schritt=Bt[d.typ].schritt,e.classList.remove("zu"))}a()}}),{render:a}}const yt=i=>document.querySelector(i),dE=Pc(ay())||jl()[0]||qf();ie.laden(dE);Cc(ie.projekt);const Pt=UM(yt("#view3d")),Hc=aE(Pt),pE=yt("#hint"),mE=yt("#toolbar"),gE={rechteck:"ziehen = Fläche bauen · tippen = 3×2 m",kreis:"von der Mitte nach außen ziehen",frei:"Umriss mit der Maus malen",gerade:"von Anfang bis Ende ziehen · am Ende weiterziehen",kurve:"Linie mit der Maus malen",ring:"von der Mitte nach außen ziehen"},zn=oE(yt("#view2d"),{onTool:i=>{mE.hidden=!i,pE.hidden=!0,i&&(yt("#toolbar-text").textContent=i.teil.name,yt("#tool-formen").replaceChildren(...$l[i.art].map(([e,t,n])=>Object.assign(document.createElement("button"),{className:i.form===e?"on":"",textContent:`${t} ${n}`,onclick:()=>zn.setzeForm(e)}))),yt("#tool-formen").hidden=!$l[i.art].length,yt("#toolbar-tipp").textContent=i.art==="punkt"?"tippen = setzen":gE[i.form]),Ea==null||Ea.render()}});let Vc="3d";function On(i){Vc=i,document.querySelectorAll("#view-toggle button").forEach(e=>e.classList.toggle("on",e.dataset.view===i)),yt("#view2d").hidden=i!=="2d",yt("#view3d").style.visibility=i==="3d"?"visible":"hidden",i==="2d"?(zn.groesse(),On.eingepasst||(zn.einpassen(),On.eingepasst=!0)):(zn.abbrechen(),Pt.groesse(),Pt.render())}document.querySelectorAll("#view-toggle button").forEach(i=>i.addEventListener("click",()=>On(i.dataset.view)));function Ko(i,e,t=900){const n=Pt.camera.position.clone(),s=Pt.controls.target.clone(),r=performance.now();Pt.state.vorFrame=()=>{const a=Math.min(1,(performance.now()-r)/t),o=a<.5?2*a*a:1-(-2*a+2)**2/2;Pt.camera.position.lerpVectors(n,i,o),Pt.controls.target.lerpVectors(s,e,o),Pt.render(),a>=1&&(Pt.state.vorFrame=null)}}const zt=()=>ie.projekt.grundstueck,Md={zeige2D:()=>{Vc!=="2d"&&On("2d")},tageszeit:i=>Pt.setTageszeit(i,new R(zt().breite/2,0,zt().tiefe/2),Math.max(zt().breite,zt().tiefe)*.75+6),uebersicht:()=>{On("3d");const i=Math.max(zt().breite,zt().tiefe);Ko(new R(zt().breite/2-i*.5,i*.55,zt().tiefe+i*.9),new R(zt().breite/2,0,zt().tiefe/2))},vonOben:()=>{On("3d");const i=Math.max(zt().breite,zt().tiefe);Ko(new R(zt().breite/2,i*1.7,zt().tiefe/2+.01),new R(zt().breite/2,0,zt().tiefe/2))},vomHaus:()=>{On("3d");const i=zt().haus,e=i.y+i.tiefe;Ko(new R(i.x+i.breite/2,4.2,e+1.5),new R(i.x+i.breite/2,.5,Math.min(zt().tiefe,e+12)))},praesentation:()=>{var i,e;On("3d"),document.body.classList.add("present"),yt("#btn-exit-present").hidden=!1,ie.waehle(null),Md.uebersicht(),setTimeout(()=>{Pt.state.autoRotate=!0},950),(e=(i=document.documentElement).requestFullscreen)==null||e.call(i).catch(()=>{}),setTimeout(()=>Pt.groesse(),50)},screenshot:()=>{On("3d"),ie.waehle(null),requestAnimationFrame(()=>{fetch(Pt.screenshot()).then(i=>i.blob()).then(i=>Kf(i,`${$f(ie.projekt.kunde)}_${new Date().toISOString().slice(0,10)}.png`))})}};yt("#btn-exit-present").addEventListener("click",()=>{document.body.classList.remove("present"),yt("#btn-exit-present").hidden=!0,Pt.state.autoRotate=!1,document.fullscreenElement&&document.exitFullscreen(),setTimeout(()=>Pt.groesse(),50)});Pt.renderer.domElement.addEventListener("pointerdown",()=>{Pt.state.autoRotate=!1});const Ea=fE({rail:yt("#rail"),panel:yt("#panel"),plan:zn,sz:Pt,aktionen:Md}),Zl=yt("#kunde"),Gc=()=>{Zl.value=ie.projekt.kunde};Zl.addEventListener("change",()=>ie.aendern(i=>{i.kunde=Zl.value.trim()||"Unbenannt"},"meta"));yt("#btn-undo").addEventListener("click",()=>ie.undo());const Oa=yt("#raster"),bd=yt("#btn-kollision");Oa.replaceChildren(...tE.map(([i,e])=>Object.assign(document.createElement("option"),{value:i,textContent:e})));function Wc(){Oa.value=String(dr(ie.projekt)),bd.classList.toggle("on",Vi(ie.projekt))}Oa.addEventListener("change",()=>{ie.projekt.ansicht={...ie.projekt.ansicht,raster:+Oa.value},ie.emit("ansicht")});bd.addEventListener("click",()=>{ie.projekt.ansicht={...ie.projekt.ansicht,kollision:!Vi(ie.projekt)},Wc(),ie.emit("ansicht")});ie.on(i=>{i==="projekt"&&Wc()});Wc();yt("#tool-cancel").addEventListener("click",()=>zn.abbrechen());addEventListener("keydown",i=>{if(!i.target.matches("input, select, textarea")){if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z")i.preventDefault(),ie.undo();else if(i.key==="Escape")zn.tool?zn.abbrechen():ie.waehle(null);else if((i.key==="Delete"||i.key==="Backspace")&&ie.auswahl){const e=ie.auswahl;ie.aendern(t=>{t.module=t.module.filter(n=>n.id!==e)}),ie.waehle(null)}}});const yi=yt("#dlg-projekte");function Sd(){const i=(t,n={},...s)=>{const r=Object.assign(document.createElement(t),n);return r.append(...s),r},e=jl().map(t=>i("div",{className:"projekt"+(t.id===ie.projekt.id?" aktiv":"")},i("div",{className:"info"},t.kunde,i("small",{},`${t.module.length} Module · ${new Date(t.geaendert||t.datum).toLocaleDateString("de-DE")}`)),i("button",{className:"ghost",textContent:"Öffnen",onclick:()=>{ar(Pc(t.id)),yi.close()}}),i("button",{className:"ghost",textContent:"✕",title:"Löschen",onclick:()=>{confirm(`Projekt „${t.kunde}“ wirklich löschen?`)&&(oy(t.id),t.id===ie.projekt.id&&ar(jl()[0]||Xl()),Sd())}})));yi.replaceChildren(i("h2",{textContent:"Projekte"}),...e,i("div",{className:"btnrow"},i("button",{textContent:"+ Neuer Kunde",onclick:()=>{const t=prompt("Name des Kunden:","");t!==null&&(ar(Xl(t||"Neuer Kunde")),yi.close())}}),i("button",{className:"ghost",textContent:"Beispiel",onclick:()=>{ar(qf()),yi.close()}})),i("div",{className:"btnrow"},i("button",{className:"ghost",textContent:"⬇ Exportieren",onclick:()=>cy(ie.projekt)}),i("button",{className:"ghost",textContent:"⬆ Importieren",onclick:()=>yt("#file-import").click()}),i("button",{className:"ghost",textContent:"Schließen",onclick:()=>yi.close()})),i("p",{className:"sub",style:"color:var(--muted);font-size:12px;margin:10px 0 0",textContent:"Projekte werden auf diesem Gerät gespeichert. Zum Übertragen aufs iPhone: Exportieren → per AirDrop/iCloud senden → dort Importieren."})),yi.open||yi.showModal()}yt("#btn-projekte").addEventListener("click",Sd);yt("#file-import").addEventListener("change",async i=>{const e=i.target.files[0];if(i.target.value="",!!e)try{const t=await hy(e);Pc(t.id)&&!confirm("Dieses Projekt existiert schon auf dem Gerät. Überschreiben?")&&(t.id=Math.random().toString(36).slice(2,10)),ar(t),yi.close()}catch(t){alert("Import fehlgeschlagen: "+t.message)}});function ar(i){ie.laden(i),Cc(i),On.eingepasst=!1,Gc(),Hc.kameraUebersicht(),Vc==="2d"&&zn.einpassen()}ie.on(i=>{i!=="live"&&i!=="auswahl"&&ly(ie.projekt),i==="projekt"&&Gc()});Gc();Hc.sync();Hc.kameraUebersicht();Ea.render();window.__garten={store:ie,sz:Pt,plan:zn};
