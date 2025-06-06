(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="176",Yr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},I_=0,yf=1,L_=2,em=1,D_=2,oi=3,Ui=0,tn=1,xn=2,Ai=0,$r=1,Mf=2,Sf=3,bf=4,U_=5,ji=100,N_=101,O_=102,F_=103,z_=104,B_=200,k_=201,H_=202,V_=203,Qc=204,jc=205,G_=206,W_=207,X_=208,q_=209,Z_=210,Y_=211,$_=212,J_=213,K_=214,eh=0,th=1,nh=2,jr=3,ih=4,rh=5,sh=6,ah=7,Cl=0,Q_=1,j_=2,Ri=0,e0=1,t0=2,n0=3,i0=4,r0=5,s0=6,a0=7,wf="attached",o0="detached",cu=300,or=301,lr=302,Qo=303,jo=304,Pa=306,el=1e3,bi=1001,tl=1002,nn=1003,tm=1004,Vs=1005,Nn=1006,ko=1007,wi=1008,$n=1009,nm=1010,im=1011,ia=1012,hu=1013,Ni=1014,fn=1015,Ia=1016,uu=1017,fu=1018,ra=1020,rm=35902,sm=1021,am=1022,jt=1023,sa=1026,aa=1027,du=1028,Pl=1029,om=1030,pu=1031,mu=1033,Ho=33776,Vo=33777,Go=33778,Wo=33779,oh=35840,lh=35841,ch=35842,hh=35843,uh=36196,fh=37492,dh=37496,ph=37808,mh=37809,gh=37810,_h=37811,vh=37812,xh=37813,yh=37814,Mh=37815,Sh=37816,bh=37817,wh=37818,Eh=37819,Th=37820,Ah=37821,Xo=36492,Rh=36494,Ch=36495,lm=36283,Ph=36284,Ih=36285,Lh=36286,nl=2300,Dh=2301,ql=2302,Ef=2400,Tf=2401,Af=2402,l0=2500,c0=3200,h0=3201,pr=0,u0=1,Mi="",vn="srgb",es="srgb-linear",il="linear",ct="srgb",Sr=7680,Rf=519,f0=512,d0=513,p0=514,cm=515,m0=516,g0=517,_0=518,v0=519,Uh=35044,Cf="300 es",qn=2e3,rl=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,sl=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function x0(n,e){return(n%e+e)%e}function Zl(n,e,t){return(1-t)*n+t*e}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const y0={DEG2RAD:Ys};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,a,o,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],y=r[1],x=r[4],_=r[7],E=r[2],A=r[5],w=r[8];return s[0]=a*v+o*y+c*E,s[3]=a*m+o*x+c*A,s[6]=a*p+o*_+c*w,s[1]=l*v+h*y+u*E,s[4]=l*m+h*x+u*A,s[7]=l*p+h*_+u*w,s[2]=f*v+d*y+g*E,s[5]=f*m+d*x+g*A,s[8]=f*p+d*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*l-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new Ge;function hm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const M0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function qr(n,e){return new M0[n](e)}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S0(){const n=oa("canvas");return n.style.display="block",n}const Pf={};function qo(n){n in Pf||(Pf[n]=!0,console.warn(n))}function b0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function w0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function E0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const If=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){const n={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?il:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[es]:{primaries:e,whitePoint:i,transfer:il,toXYZ:If,fromXYZ:Lf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:If,fromXYZ:Lf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const et=T0();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let br;class A0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=oa("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R0=0;class nr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($l(r[a].image)):s.push($l(r[a]))}else s=$l(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class Bt extends mr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=bi,r=bi,s=Nn,a=wi,o=jt,c=$n,l=Bt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=On(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=cu;Bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(d+1)/2,E=(p+1)/2,A=(h+f)/4,w=(u+v)/4,R=(g+m)/4;return x>_&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=w/i):_>E?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=R/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends P0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class um extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,p*y);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const _=o*y;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new L,Df=new Oi;class kt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Za.subVectors(this.max,Cs),wr.subVectors(e.a,Cs),Er.subVectors(e.b,Cs),Tr.subVectors(e.c,Cs),pi.subVectors(Er,wr),mi.subVectors(Tr,Er),Vi.subVectors(wr,Tr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Vi.z,Vi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Vi.z,0,-Vi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Vi.y,Vi.x,0];return!Kl(t,wr,Er,Tr,Za)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,wr,Er,Tr,Za))?!1:(Ya.crossVectors(pi,mi),t=[Ya.x,Ya.y,Ya.z],Kl(t,wr,Er,Tr,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,qa=new kt,wr=new L,Er=new L,Tr=new L,pi=new L,mi=new L,Vi=new L,Cs=new L,Za=new L,Ya=new L,Gi=new L;function Kl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Gi.fromArray(n,s);const o=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),c=e.dot(Gi),l=t.dot(Gi),h=i.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const L0=new kt,Ps=new L,Ql=new L;class Ht{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):L0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Ql)),this.expandByPoint(Ps.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new L,jl=new L,$a=new L,gi=new L,ec=new L,Ja=new L,tc=new L;class hs{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jl.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(jl);const s=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=gi.dot(this.direction),c=-gi.dot($a),l=gi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(jl).addScaledVector($a,f),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,r,s){ec.subVectors(t,e),Ja.subVectors(i,e),tc.crossVectors(ec,Ja);let a=this.direction.dot(tc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(Ja.crossVectors(gi,Ja));if(c<0)return null;const l=o*this.direction.dot(ec.cross(gi));if(l<0||c+l>a)return null;const h=-o*gi.dot(tc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,r,s,a,o,c,l,h,u,f,d,g,v,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,u,f,d,g,v,m)}set(e,t,i,r,s,a,o,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,U0)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),_i.crossVectors(i,an),_i.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),_i.crossVectors(i,an)),_i.normalize(),Ka.crossVectors(an,_i),r[0]=_i.x,r[4]=Ka.x,r[8]=an.x,r[1]=_i.y,r[5]=Ka.y,r[9]=an.y,r[2]=_i.z,r[6]=Ka.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],x=i[7],_=i[11],E=i[15],A=r[0],w=r[4],R=r[8],S=r[12],M=r[1],C=r[5],U=r[9],O=r[13],B=r[2],k=r[6],H=r[10],X=r[14],V=r[3],ne=r[7],he=r[11],ce=r[15];return s[0]=a*A+o*M+c*B+l*V,s[4]=a*w+o*C+c*k+l*ne,s[8]=a*R+o*U+c*H+l*he,s[12]=a*S+o*O+c*X+l*ce,s[1]=h*A+u*M+f*B+d*V,s[5]=h*w+u*C+f*k+d*ne,s[9]=h*R+u*U+f*H+d*he,s[13]=h*S+u*O+f*X+d*ce,s[2]=g*A+v*M+m*B+p*V,s[6]=g*w+v*C+m*k+p*ne,s[10]=g*R+v*U+m*H+p*he,s[14]=g*S+v*O+m*X+p*ce,s[3]=y*A+x*M+_*B+E*V,s[7]=y*w+x*C+_*k+E*ne,s[11]=y*R+x*U+_*H+E*he,s[15]=y*S+x*O+_*X+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*f+i*l*f+r*o*d-i*c*d)+v*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*h-s*c*h)+m*(+t*l*u-t*o*d-s*a*u+i*a*d+s*o*h-i*l*h)+p*(-r*o*h-t*c*u+t*o*f+r*a*u-i*a*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*l-v*f*l+v*c*d-o*m*d-u*c*p+o*f*p,x=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,_=h*v*l-g*u*l+g*o*d-a*v*d-h*o*p+a*u*p,E=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,A=t*y+i*x+r*_+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(v*f*s-u*m*s-v*r*d+i*m*d+u*r*p-i*f*p)*w,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*p+i*c*p)*w,e[3]=(u*c*s-o*f*s-u*r*l+i*f*l+o*r*d-i*c*d)*w,e[4]=x*w,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*w,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*w,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*d+t*c*d)*w,e[8]=_*w,e[9]=(g*u*s-h*v*s-g*i*d+t*v*d+h*i*p-t*u*p)*w,e[10]=(a*v*s-g*o*s+g*i*l-t*v*l-a*i*p+t*o*p)*w,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*d-t*o*d)*w,e[12]=E*w,e[13]=(h*v*r-g*u*r+g*i*f-t*v*f-h*i*m+t*u*m)*w,e[14]=(g*o*r-a*v*r-g*i*c+t*v*c+a*i*m-t*o*m)*w,e[15]=(a*u*r-h*o*r+h*i*c-t*u*c-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,v=a*h,m=a*u,p=o*u,y=c*l,x=c*h,_=c*u,E=i.x,A=i.y,w=i.z;return r[0]=(1-(v+p))*E,r[1]=(d+_)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(d-_)*A,r[5]=(1-(f+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+x)*w,r[9]=(m-y)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const a=Ar.set(r[4],r[5],r[6]).length(),o=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const l=1/s,h=1/a,u=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(o===qn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===rl)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn){const c=this.elements,l=1/(t-e),h=1/(i-r),u=1/(a-s),f=(t+e)*l,d=(i+r)*h;let g,v;if(o===qn)g=(a+s)*u,v=-2*u;else if(o===rl)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new L,Dn=new Ve,D0=new L(0,0,0),U0=new L(1,1,1),_i=new L,Ka=new L,an=new L,Uf=new Ve,Nf=new Oi;class wn{constructor(e=0,t=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N0=0;const Of=new L,Rr=new Oi,ni=new Ve,Qa=new L,Is=new L,O0=new L,F0=new Oi,Ff=new L(1,0,0),zf=new L(0,1,0),Bf=new L(0,0,1),kf={type:"added"},z0={type:"removed"},Cr={type:"childadded",child:null},nc={type:"childremoved",child:null};class dt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new L,t=new wn,i=new Oi,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Bf,e)}translateOnAxis(e,t){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Is,Qa,this.up):ni.lookAt(Qa,Is,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(ni),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,F0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,ii=new L,ic=new L,ri=new L,Pr=new L,Ir=new L,Hf=new L,rc=new L,sc=new L,ac=new L,oc=new nt,lc=new nt,cc=new nt;class un{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Un.subVectors(e,t),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Un.subVectors(r,t),ii.subVectors(i,t),ic.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(ii),c=Un.dot(ic),l=ii.dot(ii),h=ii.dot(ic),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,i),cc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(lc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(e,t,i,r){return Un.subVectors(i,t),ii.subVectors(e,t),Un.cross(ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Un.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pr.subVectors(r,i),Ir.subVectors(s,i),rc.subVectors(e,i);const c=Pr.dot(rc),l=Ir.dot(rc);if(c<=0&&l<=0)return t.copy(i);sc.subVectors(e,r);const h=Pr.dot(sc),u=Ir.dot(sc);if(h>=0&&u<=h)return t.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Pr,a);ac.subVectors(e,s);const d=Pr.dot(ac),g=Ir.dot(ac);if(g>=0&&d<=g)return t.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ir,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Hf.subVectors(s,r),o=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(Hf,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=x0(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=hc(a,s,e+1/3),this.g=hc(a,s,e),this.b=hc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=fm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return et.fromWorkingColorSpace(Ft.copy(this),e),Math.round(qe(Ft.r*255,0,255))*65536+Math.round(qe(Ft.g*255,0,255))*256+Math.round(qe(Ft.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=vn){et.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(ja);const i=Zl(vi.h,ja.h,t),r=Zl(vi.s,ja.s,t),s=Zl(vi.l,ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Te;Te.NAMES=fm;let B0=0;class Yt extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=On(),this.name="",this.type="Material",this.blending=$r,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=jc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==jc&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Il extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new L,eo=new J;let k0=0;class Ut{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uh,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uh&&(e.usage=this.usage),e}}class dm extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pm extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Be extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H0=0;const gn=new Ve,uc=new dt,Lr=new L,on=new kt,Ls=new kt,Ct=new L;class Qe extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hm(e)?pm:dm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(on.min,Ls.min),on.expandByPoint(Ct),Ct.addVectors(on.max,Ls.max),on.expandByPoint(Ct)):(on.expandByPoint(Ls.min),on.expandByPoint(Ls.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),Ct.add(Lr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<i.count;R++)o[R]=new L,c[R]=new L;const l=new L,h=new L,u=new L,f=new J,d=new J,g=new J,v=new L,m=new L;function p(R,S,M){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(v),o[S].add(v),o[M].add(v),c[R].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){const M=y[R],C=M.start,U=M.count;for(let O=C,B=C+U;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new L,_=new L,E=new L,A=new L;function w(R){E.fromBufferAttribute(r,R),A.copy(E);const S=o[R];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(A,S);const C=_.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,S=y.length;R<S;++R){const M=y[R],C=M.start,U=M.count;for(let O=C,B=C+U;O<B;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vf=new Ve,Wi=new hs,to=new Ht,Gf=new L,no=new L,io=new L,ro=new L,fc=new L,so=new L,Wf=new L,ao=new L;class Et extends dt{constructor(e=new Qe,t=new Il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){so.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(fc.fromBufferAttribute(u,e),a?so.addScaledVector(fc,h):so.addScaledVector(fc.sub(t),h))}t.add(so)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(to.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(to,Gf)===null||Wi.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(Vf.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Vf),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,E=x;_<E;_+=3){const A=o.getX(_),w=o.getX(_+1),R=o.getX(_+2);r=oo(this,p,e,i,l,h,u,A,w,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);r=oo(this,a,e,i,l,h,u,y,x,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,E=x;_<E;_+=3){const A=_,w=_+1,R=_+2;r=oo(this,p,e,i,l,h,u,A,w,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;r=oo(this,a,e,i,l,h,u,y,x,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function V0(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ui,o),c===null)return null;ao.copy(o),ao.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ao);return l<t.near||l>t.far?null:{distance:l,point:ao.clone(),object:n}}function oo(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,no),n.getVertexPosition(c,io),n.getVertexPosition(l,ro);const h=V0(n,e,t,i,no,io,ro,Wf);if(h){const u=new L;un.getBarycoord(Wf,no,io,ro,u),r&&(h.uv=un.getInterpolatedAttribute(r,o,c,l,u,new J)),s&&(h.uv1=un.getInterpolatedAttribute(s,o,c,l,u,new J)),a&&(h.normal=un.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};un.getNormal(no,io,ro,f.normal),h.face=f,h.barycoord=u}return h}class us extends Qe{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function g(v,m,p,y,x,_,E,A,w,R,S){const M=_/w,C=E/R,U=_/2,O=E/2,B=A/2,k=w+1,H=R+1;let X=0,V=0;const ne=new L;for(let he=0;he<H;he++){const ce=he*C-O;for(let Re=0;Re<k;Re++){const Ne=Re*M-U;ne[v]=Ne*y,ne[m]=ce*x,ne[p]=B,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=A>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Re/w),u.push(1-he/R),X+=1}}for(let he=0;he<R;he++)for(let ce=0;ce<w;ce++){const Re=f+ce+k*he,Ne=f+ce+k*(he+1),q=f+(ce+1)+k*(he+1),j=f+(ce+1)+k*he;c.push(Re,Ne,j),c.push(Ne,q,j),V+=6}o.addGroup(d,V,S),d+=V,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const r in i)e[r]=i[r]}return e}function G0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const W0={clone:ts,merge:Wt};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gm extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new L,Xf=new J,qf=new J;class Qt extends gm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ur=1;class Z0 extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Dr,Ur,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Dr,Ur,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Dr,Ur,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Dr,Ur,e,t);o.layers=this.layers,this.add(o);const c=new Qt(Dr,Ur,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Dr,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _u extends Bt{constructor(e=[],t=or,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _u(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new us(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ai});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Nn),new Z0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Gs extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new vu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new xu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _m extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new L;class ns{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ns(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xm extends Yt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Nr;const Ds=new L,Or=new L,Fr=new L,zr=new J,Us=new J,ym=new Ve,lo=new L,Ns=new L,co=new L,Zf=new J,pc=new J,Yf=new J;class J0 extends dt{constructor(e=new xm){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vm(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new ns(i,3,0,!1)),Nr.setAttribute("uv",new ns(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),ym.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Fr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ho(lo.set(-.5,-.5,0),Fr,a,Or,r,s),ho(Ns.set(.5,-.5,0),Fr,a,Or,r,s),ho(co.set(.5,.5,0),Fr,a,Or,r,s),Zf.set(0,0),pc.set(1,0),Yf.set(1,1);let o=e.ray.intersectTriangle(lo,Ns,co,!1,Ds);if(o===null&&(ho(Ns.set(-.5,.5,0),Fr,a,Or,r,s),pc.set(0,1),o=e.ray.intersectTriangle(lo,co,Ns,!1,Ds),o===null))return;const c=e.ray.origin.distanceTo(Ds);c<e.near||c>e.far||t.push({distance:c,point:Ds.clone(),uv:un.getInterpolation(Ds,lo,Ns,co,Zf,pc,Yf,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ho(n,e,t,i,r,s){zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Us.x=s*zr.x-r*zr.y,Us.y=r*zr.x+s*zr.y):Us.copy(zr),n.copy(e),n.x+=Us.x,n.y+=Us.y,n.applyMatrix4(ym)}const uo=new L,$f=new L;class K0 extends dt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const r=t.splice(i,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){uo.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(uo);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){uo.setFromMatrixPosition(e.matrixWorld),$f.setFromMatrixPosition(this.matrixWorld);const i=uo.distanceTo($f)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),i>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const a=i[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Jf=new L,Kf=new nt,Qf=new nt,Q0=new L,jf=new Ve,fo=new L,mc=new Ht,ed=new Ve,gc=new hs;class j0 extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wf,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(r),e.ray.intersectsSphere(mc)!==!1&&(ed.copy(r).invert(),gc.copy(e.ray).applyMatrix4(ed),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===o0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Kf.fromBufferAttribute(r.attributes.skinIndex,e),Qf.fromBufferAttribute(r.attributes.skinWeight,e),Jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Qf.getComponent(s);if(a!==0){const o=Kf.getComponent(s);jf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Q0.copy(Jf).applyMatrix4(jf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mm extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ci extends Bt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=nn,h=nn,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const td=new Ve,ev=new Ve;class yu{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ev;td.multiplyMatrices(o,t[s]),td.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ci(t,e,e,jt,fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Mm),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class la extends Ut{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Br=new Ve,nd=new Ve,po=[],id=new kt,tv=new Ve,Os=new Et,Fs=new Ht;class nv extends Et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,tv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),id.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(id)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ht),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Fs.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),e.ray.intersectsSphere(Fs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Br),nd.multiplyMatrices(i,Br),Os.matrixWorld=nd,Os.raycast(e,po);for(let a=0,o=po.length;a<o;a++){const c=po[a];c.instanceId=s,c.object=this,t.push(c)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(r*this.count),r,this.count,du,fn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _c=new L,iv=new L,rv=new Ge;class li{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_c.subVectors(i,t).cross(iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rv.getNormalMatrix(e),r=this.coplanarPoint(_c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Ht,mo=new L;class La{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],y=r[13],x=r[14],_=r[15];if(i[0].setComponents(c-s,f-l,m-d,_-p).normalize(),i[1].setComponents(c+s,f+l,m+d,_+p).normalize(),i[2].setComponents(c+a,f+h,m+g,_+y).normalize(),i[3].setComponents(c-a,f-h,m-g,_-y).normalize(),i[4].setComponents(c-o,f-u,m-v,_-x).normalize(),t===qn)i[5].setComponents(c+o,f+u,m+v,_+x).normalize();else if(t===rl)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const zn=new Ve,Bn=new La;class Mu{constructor(){this.coordinateSystem=qn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(zn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Bn.setFromProjectionMatrix(zn,this.coordinateSystem),Bn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(zn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Bn.setFromProjectionMatrix(zn,this.coordinateSystem),Bn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(zn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Bn.setFromProjectionMatrix(zn,this.coordinateSystem),Bn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(zn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Bn.setFromProjectionMatrix(zn,this.coordinateSystem),Bn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(zn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Bn.setFromProjectionMatrix(zn,this.coordinateSystem),Bn.containsPoint(e))return!0}return!1}clone(){return new Mu}}function vc(n,e){return n-e}function sv(n,e){return n.z-e.z}function av(n,e){return e.z-n.z}class ov{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}}const Jt=new Ve,lv=new Te(1,1,1),rd=new La,cv=new Mu,go=new kt,qi=new Ht,zs=new L,sd=new L,hv=new L,xc=new ov,zt=new Et,_o=[];function uv(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const r=n.count;for(let s=0;s<r;s++)for(let a=0;a<i;a++)e.setComponent(s+t,a,n.getComponent(s,a))}else e.array.set(n.array,t*i);e.needsUpdate=!0}function Zi(n,e){if(n.constructor!==e.constructor){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++)e[i]=n[i]}else{const t=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,t))}}class fv extends Et{constructor(e,t,i=t*2,r){super(new Qe,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new Ci(t,e,e,jt,fn);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new Ci(t,e,e,Pl,Ni);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new Ci(t,e,e,jt,fn);i.colorSpace=et.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(i*c),u=new Ut(h,c,l);t.setAttribute(s,u)}if(e.getIndex()!==null){const s=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Ut(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const r=e.getAttribute(i),s=t.getAttribute(i);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,Jt),this.getBoundingBoxAt(s,go).applyMatrix4(Jt),e.union(go)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,Jt),this.getBoundingSphereAt(s,qi).applyMatrix4(Jt),e.union(qi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:e};let r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(vc),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=i):(r=this._instanceInfo.length,this._instanceInfo.push(i));const s=this._matricesTexture;Jt.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(lv.toArray(a.image.data,r*4),a.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=i===-1?a.count:i),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(vc),c=this._availableGeometryIds.shift(),s[c]=r):(c=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(c,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,r=i.getIndex()!==null,s=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(r&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const u=t.getAttribute(h),f=i.getAttribute(h);uv(u,f,c);const d=u.itemSize;for(let g=u.count,v=l;g<v;g++){const m=c+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(r){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<a.count;f++)s.setX(h+f,c+a.getX(f));for(let f=a.count,d=u;f<d;f++)s.setX(h+f,c);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let r=0,s=i.length;r<s;r++)i[r].active&&i[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,r=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),s=this.geometry;for(let a=0,o=i.length;a<o;a++){const c=r[a],l=i[c];if(l.active!==!1){if(s.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,d=s.index,g=d.array,v=e-u;for(let m=h;m<h+f;m++)g[m]=g[m]+v;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,f=s.attributes;for(const d in f){const g=f[d],{array:v,itemSize:m}=g;v.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart,this._nextIndexStart=s.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){const s=new kt,a=i.index,o=i.attributes.position;for(let c=r.start,l=r.start+r.count;c<l;c++){let h=c;a&&(h=a.getX(h)),s.expandByPoint(zs.fromBufferAttribute(o,h))}r.boundingBox=s}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){const s=new Ht;this.getBoundingBoxAt(e,go),go.getCenter(s.center);const a=i.index,o=i.attributes.position;let c=0;for(let l=r.start,h=r.start+r.count;l<h;l++){let u=l;a&&(u=a.getX(u)),zs.fromBufferAttribute(o,u),c=Math.max(c,s.center.distanceToSquared(zs))}s.radius=Math.sqrt(c),r.boundingSphere=s}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(vc);t[t.length-1]===i.length;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const r=new Int32Array(e),s=new Int32Array(e);Zi(this._multiDrawCounts,r),Zi(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Zi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Zi(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Zi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Qe,this._initializeGeometry(s));const a=this.geometry;s.index&&Zi(s.index.array,a.index.array);for(const o in s.attributes)Zi(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){const i=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,a=this.geometry;zt.material=this.material,zt.geometry.index=a.index,zt.geometry.attributes=a.attributes,zt.geometry.boundingBox===null&&(zt.geometry.boundingBox=new kt),zt.geometry.boundingSphere===null&&(zt.geometry.boundingSphere=new Ht);for(let o=0,c=i.length;o<c;o++){if(!i[o].visible||!i[o].active)continue;const l=i[o].geometryIndex,h=r[l];zt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,zt.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,zt.geometry.boundingBox),this.getBoundingSphereAt(l,zt.geometry.boundingSphere),zt.raycast(e,_o);for(let u=0,f=_o.length;u<f;u++){const d=_o[u];d.object=this,d.batchId=o,t.push(d)}_o.length=0}zt.material=null,zt.geometry.index=null,zt.geometry.attributes={},zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data,v=i.isArrayCamera?cv:rd;f&&!i.isArrayCamera&&(Jt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),rd.setFromProjectionMatrix(Jt,e.coordinateSystem));let m=0;if(this.sortObjects){Jt.copy(this.matrixWorld).invert(),zs.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Jt),sd.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Jt);for(let x=0,_=c.length;x<_;x++)if(c[x].visible&&c[x].active){const E=c[x].geometryIndex;this.getMatrixAt(x,Jt),this.getBoundingSphereAt(E,qi).applyMatrix4(Jt);let A=!1;if(f&&(A=!v.intersectsSphere(qi,i)),!A){const w=u[E],R=hv.subVectors(qi.center,zs).dot(sd);xc.push(w.start,w.count,R,x)}}const p=xc.list,y=this.customSort;y===null?p.sort(s.transparent?av:sv):y.call(this,p,i);for(let x=0,_=p.length;x<_;x++){const E=p[x];l[m]=E.start*o,h[m]=E.count,g[m]=E.index,m++}xc.reset()}else for(let p=0,y=c.length;p<y;p++)if(c[p].visible&&c[p].active){const x=c[p].geometryIndex;let _=!1;if(f&&(this.getMatrixAt(p,Jt),this.getBoundingSphereAt(x,qi).applyMatrix4(Jt),_=!v.intersectsSphere(qi,i)),!_){const E=u[x];l[m]=E.start*o,h[m]=E.count,g[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,s,a){this.onBeforeRender(e,null,r,s,a)}}class ca extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new L,ol=new L,ad=new Ve,Bs=new hs,vo=new Ht,yc=new L,od=new L;class ha extends dt{constructor(e=new Qe,t=new ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)al.fromBufferAttribute(t,r-1),ol.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=al.distanceTo(ol);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;ad.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){const p=h.getX(v),y=h.getX(v+1),x=xo(this,e,Bs,c,p,y,v);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=xo(this,e,Bs,c,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){const p=xo(this,e,Bs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=xo(this,e,Bs,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xo(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(al.fromBufferAttribute(o,r),ol.fromBufferAttribute(o,s),t.distanceSqToSegment(al,ol,yc,od)>i)return;yc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(yc);if(!(l<e.near||l>e.far))return{distance:l,point:od.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const ld=new L,cd=new L;class dv extends ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ld.fromBufferAttribute(t,r),cd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ld.distanceTo(cd);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends ha{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Su extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hd=new Ve,Nh=new hs,yo=new Ht,Mo=new L;class Sm extends dt{constructor(e=new Qe,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;hd.copy(r).invert(),Nh.copy(e.ray).applyMatrix4(hd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Mo.fromBufferAttribute(u,m),ud(Mo,m,c,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Mo.fromBufferAttribute(u,g),ud(Mo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ud(n,e,t,i,r,s,a){const o=Nh.distanceSqToPoint(n);if(o<t){const c=new L;Nh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class bm extends Bt{constructor(e,t,i=Ni,r,s,a,o=nn,c=nn,l,h=sa){if(h!==sa&&h!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bu extends Qe{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=i*2+s,v=r+1,m=new L,p=new L;for(let y=0;y<=g;y++){let x=0,_=0,E=0,A=0;if(y<=i){const S=y/i,M=S*Math.PI/2;_=-h-e*Math.cos(M),E=e*Math.sin(M),A=-e*Math.cos(M),x=S*u}else if(y<=i+s){const S=(y-i)/s;_=-h+S*t,E=e,A=0,x=u+S*f}else{const S=(y-i-s)/i,M=S*Math.PI/2;_=h+e*Math.sin(M),E=e*Math.cos(M),A=e*Math.sin(M),x=u+f+S*u}const w=Math.max(0,Math.min(1,x/d));let R=0;y===0?R=.5/r:y===g&&(R=-.5/r);for(let S=0;S<=r;S++){const M=S/r,C=M*Math.PI*2,U=Math.sin(C),O=Math.cos(C);p.x=-E*O,p.y=_,p.z=E*U,o.push(p.x,p.y,p.z),m.set(-E*O,A,E*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+R,w)}if(y>0){const S=(y-1)*v;for(let M=0;M<r;M++){const C=S+M,U=S+M+1,O=y*v+M,B=y*v+M+1;a.push(C,U,O),a.push(U,B,O)}}}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ua extends Qe{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new L,h=new J;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ll extends Qe{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(d,2));function y(){const _=new L,E=new L;let A=0;const w=(t-e)/i;for(let R=0;R<=s;R++){const S=[],M=R/s,C=M*(t-e)+e;for(let U=0;U<=r;U++){const O=U/r,B=O*c+o,k=Math.sin(B),H=Math.cos(B);E.x=C*k,E.y=-M*i+m,E.z=C*H,u.push(E.x,E.y,E.z),_.set(k,w,H).normalize(),f.push(_.x,_.y,_.z),d.push(O,1-M),S.push(g++)}v.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=v[S][R],C=v[S+1][R],U=v[S+1][R+1],O=v[S][R+1];(e>0||S!==0)&&(h.push(M,C,O),A+=3),(t>0||S!==s-1)&&(h.push(C,U,O),A+=3)}l.addGroup(p,A,0),p+=A}function x(_){const E=g,A=new J,w=new L;let R=0;const S=_===!0?e:t,M=_===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const B=U/r*c+o,k=Math.cos(B),H=Math.sin(B);w.x=S*H,w.y=m*M,w.z=S*k,u.push(w.x,w.y,w.z),f.push(0,M,0),A.x=k*.5+.5,A.y=H*.5*M+.5,d.push(A.x,A.y),g++}for(let U=0;U<r;U++){const O=E+U,B=C+U;_===!0?h.push(B,B+1,O):h.push(B+1,B,O),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wu extends Ll{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gr extends Qe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new L,_=new L,E=new L;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],_),d(t[A+2],E),c(x,_,E,y)}function c(y,x,_,E){const A=E+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const S=y.clone().lerp(_,R/A),M=x.clone().lerp(_,R/A),C=A-R;for(let U=0;U<=C;U++)U===0&&R===A?w[R][U]=S:w[R][U]=S.clone().lerp(M,U/C)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(w[R][M+1]),f(w[R+1][M]),f(w[R][M])):(f(w[R][M+1]),f(w[R+1][M+1]),f(w[R+1][M]))}}function l(y){const x=new L;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){const y=new L;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(_,1-E)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],E=a[y+4],A=Math.max(x,_,E),w=Math.min(x,_,E);A>.9&&w<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const y=new L,x=new L,_=new L,E=new L,A=new J,w=new J,R=new J;for(let S=0,M=0;S<s.length;S+=9,M+=6){y.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),A.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),E.copy(y).add(x).add(_).divideScalar(3);const C=m(E);v(A,M+0,y,C),v(w,M+2,x,C),v(R,M+4,_,C)}}function v(y,x,_,E){E<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.vertices,e.indices,e.radius,e.details)}}class Eu extends gr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eu(e.radius,e.detail)}}const So=new L,bo=new L,Mc=new L,wo=new un;class mv extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ys*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=wo;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),wo.getNormal(Mc),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,_=u[y],E=u[x],A=wo[h[y]],w=wo[h[x]],R=`${_}_${E}`,S=`${E}_${_}`;S in f&&f[S]?(Mc.dot(f[S].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(w.x,w.y,w.z)),f[S]=null):R in f||(f[R]={index0:l[y],index1:l[x],normal:Mc.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];So.fromBufferAttribute(o,v),bo.fromBufferAttribute(o,m),d.push(So.x,So.y,So.z),d.push(bo.x,bo.y,bo.z)}this.setAttribute("position",new Be(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,d=(a-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new J:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,r=[],s=[],a=[],o=new L,c=new Ve;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(qe(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tu extends Qn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new J){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gv extends Tu{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Au(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Eo=new L,Sc=new Au,bc=new Au,wc=new Au;class _v extends Qn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Eo.subVectors(r[0],r[1]).add(r[0]),l=Eo);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Eo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Sc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),bc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),wc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),bc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),wc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Sc.calc(c),bc.calc(c),wc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fd(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+s+a)*c+(-3*t+3*i-2*s-a)*o+s*n+t}function vv(n,e){const t=1-n;return t*t*e}function xv(n,e){return 2*(1-n)*n*e}function yv(n,e){return n*n*e}function $s(n,e,t,i){return vv(n,e)+xv(n,t)+yv(n,i)}function Mv(n,e){const t=1-n;return t*t*t*e}function Sv(n,e){const t=1-n;return 3*t*t*n*e}function bv(n,e){return 3*(1-n)*n*n*e}function wv(n,e){return n*n*n*e}function Js(n,e,t,i,r){return Mv(n,e)+Sv(n,t)+bv(n,i)+wv(n,r)}class wm extends Qn{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Js(e,r.x,s.x,a.x,o.x),Js(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ev extends Qn{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Js(e,r.x,s.x,a.x,o.x),Js(e,r.y,s.y,a.y,o.y),Js(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Em extends Qn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tv extends Qn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tm extends Qn{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Am extends Qn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y),$s(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(fd(o,c.x,l.x,h.x,u.x),fd(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}var ll=Object.freeze({__proto__:null,ArcCurve:gv,CatmullRomCurve3:_v,CubicBezierCurve:wm,CubicBezierCurve3:Ev,EllipseCurve:Tu,LineCurve:Em,LineCurve3:Tv,QuadraticBezierCurve:Tm,QuadraticBezierCurve3:Am,SplineCurve:Rm});class Av extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ll[r.type]().fromJSON(r))}return this}}class dd extends Av{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Em(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Tm(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new wm(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Rm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){const l=new Tu(e,t,i,r,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class is extends dd{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new dd().fromJSON(r))}return this}}function Rv(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Cm(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=Dv(n,e,s,t)),n.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){const d=n[f],g=n[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return fa(s,a,t,o,c,l,0),a}function Cm(n,e,t,i,r){let s;if(r===Wv(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=pd(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=pd(a/i|0,n[a],n[a+1],s);return s&&rs(s,s.next)&&(pa(s),s=s.next),s}function hr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rs(t,t.next)||vt(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fa(n,e,t,i,r,s,a){if(!n)return;!a&&s&&zv(n,i,r,s);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Pv(n,i,r,s):Cv(n)){e.push(c.i,n.i,l.i),pa(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Iv(hr(n),e),fa(n,e,t,i,r,s,2)):a===2&&Lv(n,e,t,i,r,s):fa(hr(n),e,t,i,r,s,1);break}}}function Cv(n){const e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(r,s,a),u=Math.min(o,c,l),f=Math.max(r,s,a),d=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ws(r,o,s,c,a,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pv(n,e,t,i){const r=n.prev,s=n,a=n.next;if(vt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),v=Math.max(o,c,l),m=Math.max(h,u,f),p=Oh(d,g,e,t,i),y=Oh(v,m,e,t,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Ws(o,h,c,u,l,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Ws(o,h,c,u,l,f,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Ws(o,h,c,u,l,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Ws(o,h,c,u,l,f,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Iv(n,e){let t=n;do{const i=t.prev,r=t.next.next;!rs(i,r)&&Im(i,t,t.next,r)&&da(i,r)&&da(r,i)&&(e.push(i.i,t.i,r.i),pa(t),pa(t.next),t=n=r),t=t.next}while(t!==n);return hr(t)}function Lv(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hv(a,o)){let c=Lm(a,o);a=hr(a,a.next),c=hr(c,c.next),fa(a,e,t,i,r,s,0),fa(c,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Dv(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,c=s<a-1?e[s+1]*i:n.length,l=Cm(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(kv(l))}r.sort(Uv);for(let s=0;s<r.length;s++)t=Nv(r[s],t);return t}function Uv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Nv(n,e){const t=Ov(n,e);if(!t)return e;const i=Lm(t,n);return hr(i,i.next),hr(t,t.next)}function Ov(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(rs(n,t))return t;do{if(rs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Pm(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);da(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Fv(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Fv(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function zv(n,e,t,i){let r=n;do r.z===0&&(r.z=Oh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Bv(r)}function Bv(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Oh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function kv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pm(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ws(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Pm(n,e,t,i,r,s,a,o)}function Hv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Vv(n,e)&&(da(n,e)&&da(e,n)&&Gv(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||rs(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rs(n,e){return n.x===e.x&&n.y===e.y}function Im(n,e,t,i){const r=Ao(vt(n,e,t)),s=Ao(vt(n,e,i)),a=Ao(vt(t,i,n)),o=Ao(vt(t,i,e));return!!(r!==s&&a!==o||r===0&&To(n,t,e)||s===0&&To(n,i,e)||a===0&&To(t,n,i)||o===0&&To(t,e,i))}function To(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ao(n){return n>0?1:n<0?-1:0}function Vv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Im(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function da(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function Gv(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lm(n,e){const t=Fh(n.i,n.x,n.y),i=Fh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function pd(n,e,t,i){const r=Fh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function pa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wv(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Xv{static triangulate(e,t,i=2){return Rv(e,t,i)}}class ui{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];md(e),gd(i,e);let a=e.length;t.forEach(md);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,gd(i,t[c]);const o=Xv.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function md(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ru extends Qe{constructor(e=new is([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:qv;let x,_=!1,E,A,w,R;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,E=p.computeFrenetFrames(h,!1),A=new L,w=new L,R=new L),f||(m=0,d=0,g=0,v=0);const S=o.extractPoints(l);let M=S.shape;const C=S.holes;if(!ui.isClockWise(M)){M=M.reverse();for(let I=0,le=C.length;I<le;I++){const te=C[I];ui.isClockWise(te)&&(C[I]=te.reverse())}}function O(I){const te=10000000000000001e-36;let ae=I[0];for(let K=1;K<=I.length;K++){const we=K%I.length,ie=I[we],P=ie.x-ae.x,b=ie.y-ae.y,z=P*P+b*b,$=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(ae.x),Math.abs(ae.y)),ee=te*$*$;if(z<=ee){I.splice(we,1),K--;continue}ae=ie}}O(M),C.forEach(O);const B=C.length,k=M;for(let I=0;I<B;I++){const le=C[I];M=M.concat(le)}function H(I,le,te){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(le,te)}const X=M.length;function V(I,le,te){let ae,K,we;const ie=I.x-le.x,P=I.y-le.y,b=te.x-I.x,z=te.y-I.y,$=ie*ie+P*P,ee=ie*z-P*b;if(Math.abs(ee)>Number.EPSILON){const Z=Math.sqrt($),Se=Math.sqrt(b*b+z*z),fe=le.x-P/Z,Ce=le.y+ie/Z,Oe=te.x-z/Se,re=te.y+b/Se,ve=((Oe-fe)*z-(re-Ce)*b)/(ie*z-P*b);ae=fe+ie*ve-I.x,K=Ce+P*ve-I.y;const De=ae*ae+K*K;if(De<=2)return new J(ae,K);we=Math.sqrt(De/2)}else{let Z=!1;ie>Number.EPSILON?b>Number.EPSILON&&(Z=!0):ie<-Number.EPSILON?b<-Number.EPSILON&&(Z=!0):Math.sign(P)===Math.sign(z)&&(Z=!0),Z?(ae=-P,K=ie,we=Math.sqrt($)):(ae=ie,K=P,we=Math.sqrt($/2))}return new J(ae/we,K/we)}const ne=[];for(let I=0,le=k.length,te=le-1,ae=I+1;I<le;I++,te++,ae++)te===le&&(te=0),ae===le&&(ae=0),ne[I]=V(k[I],k[te],k[ae]);const he=[];let ce,Re=ne.concat();for(let I=0,le=B;I<le;I++){const te=C[I];ce=[];for(let ae=0,K=te.length,we=K-1,ie=ae+1;ae<K;ae++,we++,ie++)we===K&&(we=0),ie===K&&(ie=0),ce[ae]=V(te[ae],te[we],te[ie]);he.push(ce),Re=Re.concat(ce)}let Ne;if(m===0)Ne=ui.triangulateShape(k,C);else{const I=[],le=[];for(let te=0;te<m;te++){const ae=te/m,K=d*Math.cos(ae*Math.PI/2),we=g*Math.sin(ae*Math.PI/2)+v;for(let ie=0,P=k.length;ie<P;ie++){const b=H(k[ie],ne[ie],we);Fe(b.x,b.y,-K),ae===0&&I.push(b)}for(let ie=0,P=B;ie<P;ie++){const b=C[ie];ce=he[ie];const z=[];for(let $=0,ee=b.length;$<ee;$++){const Z=H(b[$],ce[$],we);Fe(Z.x,Z.y,-K),ae===0&&z.push(Z)}ae===0&&le.push(z)}}Ne=ui.triangulateShape(I,le)}const q=Ne.length,j=g+v;for(let I=0;I<X;I++){const le=f?H(M[I],Re[I],j):M[I];_?(w.copy(E.normals[0]).multiplyScalar(le.x),A.copy(E.binormals[0]).multiplyScalar(le.y),R.copy(x[0]).add(w).add(A),Fe(R.x,R.y,R.z)):Fe(le.x,le.y,0)}for(let I=1;I<=h;I++)for(let le=0;le<X;le++){const te=f?H(M[le],Re[le],j):M[le];_?(w.copy(E.normals[I]).multiplyScalar(te.x),A.copy(E.binormals[I]).multiplyScalar(te.y),R.copy(x[I]).add(w).add(A),Fe(R.x,R.y,R.z)):Fe(te.x,te.y,u/h*I)}for(let I=m-1;I>=0;I--){const le=I/m,te=d*Math.cos(le*Math.PI/2),ae=g*Math.sin(le*Math.PI/2)+v;for(let K=0,we=k.length;K<we;K++){const ie=H(k[K],ne[K],ae);Fe(ie.x,ie.y,u+te)}for(let K=0,we=C.length;K<we;K++){const ie=C[K];ce=he[K];for(let P=0,b=ie.length;P<b;P++){const z=H(ie[P],ce[P],ae);_?Fe(z.x,z.y+x[h-1].y,x[h-1].x+te):Fe(z.x,z.y,u+te)}}}de(),oe();function de(){const I=r.length/3;if(f){let le=0,te=X*le;for(let ae=0;ae<q;ae++){const K=Ne[ae];Ae(K[2]+te,K[1]+te,K[0]+te)}le=h+m*2,te=X*le;for(let ae=0;ae<q;ae++){const K=Ne[ae];Ae(K[0]+te,K[1]+te,K[2]+te)}}else{for(let le=0;le<q;le++){const te=Ne[le];Ae(te[2],te[1],te[0])}for(let le=0;le<q;le++){const te=Ne[le];Ae(te[0]+X*h,te[1]+X*h,te[2]+X*h)}}i.addGroup(I,r.length/3-I,0)}function oe(){const I=r.length/3;let le=0;be(k,le),le+=k.length;for(let te=0,ae=C.length;te<ae;te++){const K=C[te];be(K,le),le+=K.length}i.addGroup(I,r.length/3-I,1)}function be(I,le){let te=I.length;for(;--te>=0;){const ae=te;let K=te-1;K<0&&(K=I.length-1);for(let we=0,ie=h+m*2;we<ie;we++){const P=X*we,b=X*(we+1),z=le+ae+P,$=le+K+P,ee=le+K+b,Z=le+ae+b;ot(z,$,ee,Z)}}}function Fe(I,le,te){c.push(I),c.push(le),c.push(te)}function Ae(I,le,te){$e(I),$e(le),$e(te);const ae=r.length/3,K=y.generateTopUV(i,r,ae-3,ae-2,ae-1);Ie(K[0]),Ie(K[1]),Ie(K[2])}function ot(I,le,te,ae){$e(I),$e(le),$e(ae),$e(le),$e(te),$e(ae);const K=r.length/3,we=y.generateSideWallUV(i,r,K-6,K-3,K-2,K-1);Ie(we[0]),Ie(we[1]),Ie(we[3]),Ie(we[1]),Ie(we[2]),Ie(we[3])}function $e(I){r.push(c[I*3+0]),r.push(c[I*3+1]),r.push(c[I*3+2])}function Ie(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Zv(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ll[r.type]().fromJSON(r)),new Ru(i,e.options)}}const qv={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new J(s,a),new J(o,c),new J(l,h)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new J(a,1-c),new J(l,1-u),new J(f,1-g),new J(v,1-p)]:[new J(o,1-c),new J(h,1-u),new J(d,1-g),new J(m,1-p)]}};function Zv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cu extends gr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cu(e.radius,e.detail)}}class Pu extends Qe{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=qe(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/t,u=new L,f=new J,d=new L,g=new L,v=new L;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=t;y++){const x=i+y*h*r,_=Math.sin(x),E=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*E,a.push(u.x,u.y,u.z),f.x=y/t,f.y=A/(e.length-1),o.push(f.x,f.y);const w=c[3*A+0]*_,R=c[3*A+1],S=c[3*A+0]*E;l.push(w,R,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,E=_,A=_+e.length,w=_+e.length+1,R=_+1;s.push(E,A,R),s.push(w,R,A)}this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.points,e.segments,e.phiStart,e.phiLength)}}class Iu extends gr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Iu(e.radius,e.detail)}}class Da extends Qe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let x=0;x<l;x++){const _=x*u-s;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,_=y+l*(p+1),E=y+1+l*(p+1),A=y+1+l*p;d.push(x,_,A),d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lu extends Qe{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let u=e;const f=(t-e)/r,d=new L,g=new J;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,x=y,_=y+i+1,E=y+i+2,A=y+1;o.push(x,_,A),o.push(_,E,A)}}this.setIndex(o),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ss extends Qe{constructor(e=new is([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(a,2));function l(h){const u=r.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ui.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];ui.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=ui.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],x=y[0]+u,_=y[1]+u,E=y[2]+u;i.push(x,_,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Yv(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new ss(i,e.curveSegments)}}function Yv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Du extends Qe{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let _=0;p===0&&a===0?_=.5/t:p===i&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-x),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const x=h[p][y+1],_=h[p][y],E=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(x,_,A),(p!==i-1||c<Math.PI)&&d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uu extends gr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uu(e.radius,e.detail)}}class Nu extends Qe{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const v=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ou extends Qe{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],c=[],l=[],h=[],u=new L,f=new L,d=new L,g=new L,v=new L,m=new L,p=new L;for(let x=0;x<=i;++x){const _=x/i*s*Math.PI*2;y(_,s,a,e,d),y(_+.01,s,a,e,g),m.subVectors(g,d),p.addVectors(g,d),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let E=0;E<=r;++E){const A=E/r*Math.PI*2,w=-t*Math.cos(A),R=t*Math.sin(A);u.x=d.x+(w*p.x+R*v.x),u.y=d.y+(w*p.y+R*v.y),u.z=d.z+(w*p.z+R*v.z),c.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),h.push(x/i),h.push(E/r)}}for(let x=1;x<=i;x++)for(let _=1;_<=r;_++){const E=(r+1)*(x-1)+(_-1),A=(r+1)*x+(_-1),w=(r+1)*x+_,R=(r+1)*(x-1)+_;o.push(E,A,R),o.push(A,w,R)}this.setIndex(o),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2));function y(x,_,E,A,w){const R=Math.cos(x),S=Math.sin(x),M=E/_*x,C=Math.cos(M);w.x=A*(2+C)*.5*R,w.y=A*(2+C)*S*.5,w.z=A*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Fu extends Qe{constructor(e=new Am(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new J;let h=new L;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(d,2));function v(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),y(),p()}function m(x){h=e.getPointAt(x/t,h);const _=a.normals[x],E=a.binormals[x];for(let A=0;A<=r;A++){const w=A/r*Math.PI*2,R=Math.sin(w),S=-Math.cos(w);c.x=S*_.x+R*E.x,c.y=S*_.y+R*E.y,c.z=S*_.z+R*E.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=r;_++){const E=(r+1)*(x-1)+(_-1),A=(r+1)*x+(_-1),w=(r+1)*x+_,R=(r+1)*(x-1)+_;g.push(E,A,R),g.push(A,w,R)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=r;_++)l.x=x/t,l.y=_/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fu(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class $v extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new L,s=new L;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,d=u.count;for(let g=f,v=f+d;g<v;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),y=o.getX(g+(m+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,y),_d(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),_d(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function _d(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var vd=Object.freeze({__proto__:null,BoxGeometry:us,CapsuleGeometry:bu,CircleGeometry:ua,ConeGeometry:wu,CylinderGeometry:Ll,DodecahedronGeometry:Eu,EdgesGeometry:mv,ExtrudeGeometry:Ru,IcosahedronGeometry:Cu,LatheGeometry:Pu,OctahedronGeometry:Iu,PlaneGeometry:Da,PolyhedronGeometry:gr,RingGeometry:Lu,ShapeGeometry:ss,SphereGeometry:Du,TetrahedronGeometry:Uu,TorusGeometry:Nu,TorusKnotGeometry:Ou,TubeGeometry:Fu,WireframeGeometry:$v});class Jv extends Yt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Kv extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dm extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qv extends Dm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jv extends Yt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ex extends Yt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class tx extends Yt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class cl extends Yt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Um extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nx extends Yt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ix extends ca{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ro(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function sx(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function xd(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=n[o+c]}return r}function Om(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Dl{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ax extends Dl{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ef,endingEnd:Ef}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tf:s=e,o=2*t-i;break;case Af:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Tf:a=e,c=2*i-t;break;case Af:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+y*a[l+E]+x*a[c+E]+_*a[u+E];return s}}class ox extends Dl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}}class lx extends Dl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ax(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nl:t=this.InterpolantFactoryMethodDiscrete;break;case Dh:t=this.InterpolantFactoryMethodLinear;break;case ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nl;case this.InterpolantFactoryMethodLinear:return Dh;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&rx(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ql,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{const u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Dh;class fs extends Fn{constructor(e,t,i){super(e,t,i)}}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=nl;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fm extends Fn{constructor(e,t,i,r){super(e,t,i,r)}}Fm.prototype.ValueTypeName="color";class hl extends Fn{constructor(e,t,i,r){super(e,t,i,r)}}hl.prototype.ValueTypeName="number";class cx extends Dl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Oi.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ul extends Fn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}}Ul.prototype.ValueTypeName="quaternion";Ul.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Fn{constructor(e,t,i){super(e,t,i)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=nl;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ul extends Fn{constructor(e,t,i,r){super(e,t,i,r)}}ul.prototype.ValueTypeName="vector";class hx{constructor(e="",t=-1,i=[],r=l0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(fx(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Fn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=sx(c);c=xd(c,1,h),l=xd(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new hl(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=r[u];f||(r[u]=f=[]),f.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,d,g,v){if(d.length!==0){const m=[],p=[];Om(d,m,p,g),m.length!==0&&v.push(new u(f,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}r.push(new hl(".morphTargetInfluence["+v+"]",m,p))}c=d.length*a}else{const d=".bones["+t[u].name+"]";i(ul,d+".position",f,"pos",r),i(Ul,d+".quaternion",f,"rot",r),i(ul,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ux(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hl;case"vector":case"vector2":case"vector3":case"vector4":return ul;case"color":return Fm;case"quaternion":return Ul;case"bool":case"boolean":return fs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function fx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ux(n.type);if(n.times===void 0){const t=[],i=[];Om(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const fl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const dx=new zm;class ps{constructor(e){this.manager=e!==void 0?e:dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class px extends Error{constructor(e,t){super(e),this.response=t}}class dl extends ps{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:i,onError:r});return}si[e]=[],si[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=si[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let A=0,w=h.length;A<w;A++){const R=h[A];R.onProgress&&R.onProgress(E)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new px(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{fl.add(e,l);const h=si[e];delete si[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=si[e];if(h===void 0)throw this.manager.itemError(e),l;delete si[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yd extends ps{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=oa("img");function c(){h(),fl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class _r extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mx extends _r{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ec=new Ve,Md=new L,Sd=new L;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),Sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sd),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gx extends zu{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=sl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _x extends _r{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bd=new Ve,ks=new L,Tc=new L;class vx extends zu{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(ks),Tc.copy(i.position),Tc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tc),i.updateMatrixWorld(),r.makeTranslation(-ks.x,-ks.y,-ks.z),bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd)}}class xx extends _r{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nl extends gm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yx extends zu{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new yx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class km extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mx extends _r{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Sx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(i*s)),t.addScaledVector(a[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*i*s),t.addScaledVector(a[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}class bx extends _r{constructor(e=new Sx,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Bu extends ps{constructor(e){super(e),this.textures={}}load(e,t,i,r){const s=this,a=new dl(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=i(a.value);break;case"c":r.uniforms[s].value=new Te().setHex(a.value);break;case"v2":r.uniforms[s].value=new J().fromArray(a.value);break;case"v3":r.uniforms[s].value=new L().fromArray(a.value);break;case"v4":r.uniforms[s].value=new nt().fromArray(a.value);break;case"m3":r.uniforms[s].value=new Ge().fromArray(a.value);break;case"m4":r.uniforms[s].value=new Ve().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Bu.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Jv,SpriteMaterial:xm,RawShaderMaterial:Kv,ShaderMaterial:Jn,PointsMaterial:Su,MeshPhysicalMaterial:Qv,MeshStandardMaterial:Dm,MeshPhongMaterial:jv,MeshToonMaterial:ex,MeshNormalMaterial:tx,MeshLambertMaterial:cl,MeshDepthMaterial:Um,MeshDistanceMaterial:Nm,MeshBasicMaterial:Il,MeshMatcapMaterial:nx,LineDashedMaterial:ix,LineBasicMaterial:ca,Material:Yt};return new t[e]}}class wd{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wx extends Qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ex extends ps{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new dl(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(d,g){if(t[g]!==void 0)return t[g];const m=d.interleavedBuffers[g],p=s(d,m.buffer),y=qr(m.type,p),x=new vm(y,m.stride);return x.uuid=m.uuid,t[g]=x,x}function s(d,g){if(i[g]!==void 0)return i[g];const m=d.arrayBuffers[g],p=new Uint32Array(m).buffer;return i[g]=p,p}const a=e.isInstancedBufferGeometry?new wx:new Qe,o=e.data.index;if(o!==void 0){const d=qr(o.type,o.array);a.setIndex(new Ut(d,1))}const c=e.data.attributes;for(const d in c){const g=c[d];let v;if(g.isInterleavedBufferAttribute){const m=r(e.data,g.data);v=new ns(m,g.itemSize,g.offset,g.normalized)}else{const m=qr(g.type,g.array),p=g.isInstancedBufferAttribute?la:Ut;v=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),g.usage!==void 0&&v.setUsage(g.usage),a.setAttribute(d,v)}const l=e.data.morphAttributes;if(l)for(const d in l){const g=l[d],v=[];for(let m=0,p=g.length;m<p;m++){const y=g[m];let x;if(y.isInterleavedBufferAttribute){const _=r(e.data,y.data);x=new ns(_,y.itemSize,y.offset,y.normalized)}else{const _=qr(y.type,y.array);x=new Ut(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,g=u.length;d!==g;++d){const v=u[d];a.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new L;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new Ht(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Tx extends ps{constructor(e){super(e)}load(e,t,i,r){const s=this,a=this.path===""?wd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new dl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){r!==void 0&&r(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?wd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new dl(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,c,o,i),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new is().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new yu().fromJSON(e[s],r);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new Ex;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(c);break;default:c.type in vd?o=vd[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),i[c.uuid]=o}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const s=new Bu;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=hx.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const i=this,r={};let s;function a(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l;return a(h)}else return c.data?{data:qr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new zm(t);s=new yd(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],f=u.url;if(Array.isArray(f)){const d=[];for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o(m);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new Ci(p.data,p.width,p.height)))}r[u.uuid]=new nr(d)}else{const d=o(u.url);r[u.uuid]=new nr(d)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(c)}else return a.data?{data:qr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new yd(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u],g=await s(d);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new Ci(g.data,g.width,g.height)))}i[c.uuid]=new nr(h)}else{const h=await s(c.url);i[c.uuid]=new nr(h)}}}return i}parseTextures(e,t){function i(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let h;Array.isArray(l)?(h=new _u,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Ci:h=new Bt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,Ax)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],Ed),h.wrapT=i(o.wrap[1],Ed)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,Td)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,Td)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),r[o.uuid]=h}return r}parseObject(e,t,i,r,s){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let g=0,v=f.length;g<v;g++){const m=f[g];i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(i[m])}return d}return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),i[f]}}function l(f){return r[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),r[f]}let h,u;switch(e.type){case"Scene":a=new _m,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Te(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new xu(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new vu(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Qt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Nl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new km(e.color,e.intensity);break;case"DirectionalLight":a=new Bm(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new xx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Mx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new _x(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new mx(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new bx().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new j0(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new Et(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);const f=e.count,d=e.instanceMatrix,g=e.instanceColor;a=new nv(h,u,f),a.instanceMatrix=new la(new Float32Array(d.array),16),g!==void 0&&(a.instanceColor=new la(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new fv(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(v=>{let m=null,p=null;return v.boundingBox!==void 0&&(m=new kt,m.min.fromArray(v.boundingBox.min),m.max.fromArray(v.boundingBox.max)),v.boundingSphere!==void 0&&(p=new Ht,p.radius=v.boundingSphere.radius,p.center.fromArray(v.boundingSphere.center)),{...v,boundingBox:m,boundingSphere:p}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=l(e.matricesTexture.uuid),a._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Ht,a.boundingSphere.center.fromArray(e.boundingSphere.center),a.boundingSphere.radius=e.boundingSphere.radius),e.boundingBox!==void 0&&(a.boundingBox=new kt,a.boundingBox.min.fromArray(e.boundingBox.min),a.boundingBox.max.fromArray(e.boundingBox.max));break;case"LOD":a=new K0;break;case"Line":a=new ha(o(e.geometry),c(e.material));break;case"LineLoop":a=new pv(o(e.geometry),c(e.material));break;case"LineSegments":a=new dv(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Sm(o(e.geometry),c(e.material));break;case"Sprite":a=new J0(c(e.material));break;case"Group":a=new Gs;break;case"Bone":a=new Mm;break;default:a=new dt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,i,r,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const g=f[d];a.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const g=f[d],v=a.getObjectByProperty("uuid",g.object);v!==void 0&&a.addLevel(v,g.distance,g.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new dt}})}}const Ax={UVMapping:cu,CubeReflectionMapping:or,CubeRefractionMapping:lr,EquirectangularReflectionMapping:Qo,EquirectangularRefractionMapping:jo,CubeUVReflectionMapping:Pa},Ed={RepeatWrapping:el,ClampToEdgeWrapping:bi,MirroredRepeatWrapping:tl},Td={NearestFilter:nn,NearestMipmapNearestFilter:tm,NearestMipmapLinearFilter:Vs,LinearFilter:Nn,LinearMipmapNearestFilter:ko,LinearMipmapLinearFilter:wi};class Rx extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ad=new Ve;class Ol{constructor(e,t,i=0,r=1/0){this.ray=new hs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,i=[]){return zh(e,this,i,t),i.sort(Rd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zh(e[r],this,i,t);return i.sort(Rd),i}}function Rd(n,e){return n.distance-e.distance}function zh(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)zh(s[a],e,t,!0)}}class Cd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cx extends mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pd(n,e,t,i){const r=Px(i);switch(t){case sm:return n*e;case du:return n*e/r.components*r.byteLength;case Pl:return n*e/r.components*r.byteLength;case om:return n*e*2/r.components*r.byteLength;case pu:return n*e*2/r.components*r.byteLength;case am:return n*e*3/r.components*r.byteLength;case jt:return n*e*4/r.components*r.byteLength;case mu:return n*e*4/r.components*r.byteLength;case Ho:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lh:case hh:return Math.max(n,16)*Math.max(e,8)/4;case oh:case ch:return Math.max(n,8)*Math.max(e,8)/2;case uh:case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xo:case Rh:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lm:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ih:case Lh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Px(n){switch(n){case $n:case nm:return{byteLength:1,components:1};case ia:case im:case Ia:return{byteLength:2,components:1};case uu:case fu:return{byteLength:2,components:4};case Ni:case hu:case fn:return{byteLength:4,components:1};case rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ix(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
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
#endif`,Bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ty=`#define PI 3.141592653589793
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
} // validated`,ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iy=`vec3 transformedNormal = objectNormal;
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
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cy=`PhysicalMaterial material;
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
#endif`,Py=`struct PhysicalMaterial {
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
}`,Iy=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,By=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hy=`#if defined( USE_POINTS_UV )
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
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gM=`float getShadowMask() {
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
}`,_M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
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
}`,zM=`#if DEPTH_PACKING == 3200
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
}`,BM=`#define DISTANCE
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
}`,kM=`#define DISTANCE
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
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
}`,WM=`uniform vec3 diffuse;
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
}`,XM=`#include <common>
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
}`,qM=`uniform vec3 diffuse;
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
}`,ZM=`#define LAMBERT
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
}`,YM=`#define LAMBERT
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
}`,$M=`#define MATCAP
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
}`,JM=`#define MATCAP
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
}`,KM=`#define NORMAL
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
}`,QM=`#define NORMAL
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
}`,jM=`#define PHONG
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
}`,eS=`#define PHONG
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
}`,tS=`#define STANDARD
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
}`,nS=`#define STANDARD
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
}`,iS=`#define TOON
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
}`,rS=`#define TOON
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
}`,sS=`uniform float size;
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
}`,aS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,lS=`uniform vec3 color;
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
}`,cS=`uniform float rotation;
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
}`,hS=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Lx,alphahash_pars_fragment:Dx,alphamap_fragment:Ux,alphamap_pars_fragment:Nx,alphatest_fragment:Ox,alphatest_pars_fragment:Fx,aomap_fragment:zx,aomap_pars_fragment:Bx,batching_pars_vertex:kx,batching_vertex:Hx,begin_vertex:Vx,beginnormal_vertex:Gx,bsdfs:Wx,iridescence_fragment:Xx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Zx,clipping_planes_pars_fragment:Yx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:Jx,color_fragment:Kx,color_pars_fragment:Qx,color_pars_vertex:jx,color_vertex:ey,common:ty,cube_uv_reflection_fragment:ny,defaultnormal_vertex:iy,displacementmap_pars_vertex:ry,displacementmap_vertex:sy,emissivemap_fragment:ay,emissivemap_pars_fragment:oy,colorspace_fragment:ly,colorspace_pars_fragment:cy,envmap_fragment:hy,envmap_common_pars_fragment:uy,envmap_pars_fragment:fy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:wy,envmap_vertex:py,fog_vertex:my,fog_pars_vertex:gy,fog_fragment:_y,fog_pars_fragment:vy,gradientmap_pars_fragment:xy,lightmap_pars_fragment:yy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Sy,lights_pars_begin:by,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:Ay,lights_phong_pars_fragment:Ry,lights_physical_fragment:Cy,lights_physical_pars_fragment:Py,lights_fragment_begin:Iy,lights_fragment_maps:Ly,lights_fragment_end:Dy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:Fy,map_fragment:zy,map_pars_fragment:By,map_particle_fragment:ky,map_particle_pars_fragment:Hy,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Wy,morphcolor_vertex:Xy,morphnormal_vertex:qy,morphtarget_pars_vertex:Zy,morphtarget_vertex:Yy,normal_fragment_begin:$y,normal_fragment_maps:Jy,normal_pars_fragment:Ky,normal_pars_vertex:Qy,normal_vertex:jy,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:aM,premultiplied_alpha_fragment:oM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:hM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:dM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:_M,skinning_pars_vertex:vM,skinning_vertex:xM,skinnormal_vertex:yM,specularmap_fragment:MM,specularmap_pars_fragment:SM,tonemapping_fragment:bM,tonemapping_pars_fragment:wM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:RM,uv_vertex:CM,worldpos_vertex:PM,background_vert:IM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:UM,cube_vert:NM,cube_frag:OM,depth_vert:FM,depth_frag:zM,distanceRGBA_vert:BM,distanceRGBA_frag:kM,equirect_vert:HM,equirect_frag:VM,linedashed_vert:GM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:qM,meshlambert_vert:ZM,meshlambert_frag:YM,meshmatcap_vert:$M,meshmatcap_frag:JM,meshnormal_vert:KM,meshnormal_frag:QM,meshphong_vert:jM,meshphong_frag:eS,meshphysical_vert:tS,meshphysical_frag:nS,meshtoon_vert:iS,meshtoon_frag:rS,points_vert:sS,points_frag:aS,shadow_vert:oS,shadow_frag:lS,sprite_vert:cS,sprite_frag:hS},ue={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Vn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Vn.physical={uniforms:Wt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Co={r:0,b:0,g:0},Yi=new wn,uS=new Ve;function fS(n,e,t,i,r,s,a){const o=new Te(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const E=g(x);E===null?p(o,c):E&&E.isColor&&(p(E,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===Pa)?(h===void 0&&(h=new Et(new us(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ts(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yi.copy(_.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Yi)),h.material.toneMapped=et.getTransfer(E.colorSpace)!==ct,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Et(new Da(2,2),new Jn({name:"BackgroundMaterial",uniforms:ts(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Co,mm(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m,dispose:y}}function dS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,C,U,O,B){let k=!1;const H=u(O,U,C);s!==H&&(s=H,l(s.object)),k=d(M,O,U,B),k&&g(M,O,U,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,_(M,C,U,O),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,U){const O=U.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let k=B[C.id];k===void 0&&(k={},B[C.id]=k);let H=k[O];return H===void 0&&(H=f(c()),k[O]=H),H}function f(M){const C=[],U=[],O=[];for(let B=0;B<t;B++)C[B]=0,U[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,C,U,O){const B=s.attributes,k=C.attributes;let H=0;const X=U.getAttributes();for(const V in X)if(X[V].location>=0){const he=B[V];let ce=k[V];if(ce===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),he===void 0||he.attribute!==ce||ce&&he.data!==ce.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(M,C,U,O){const B={},k=C.attributes;let H=0;const X=U.getAttributes();for(const V in X)if(X[V].location>=0){let he=k[V];he===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ce={};ce.attribute=he,he&&he.data&&(ce.data=he.data),B[V]=ce,H++}s.attributes=B,s.attributesNum=H,s.index=O}function v(){const M=s.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const U=s.newAttributes,O=s.enabledAttributes,B=s.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),B[M]!==C&&(n.vertexAttribDivisor(M,C),B[M]=C)}function y(){const M=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==M[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function x(M,C,U,O,B,k,H){H===!0?n.vertexAttribIPointer(M,C,U,B,k):n.vertexAttribPointer(M,C,U,O,B,k)}function _(M,C,U,O){v();const B=O.attributes,k=U.getAttributes(),H=C.defaultAttributeValues;for(const X in k){const V=k[X];if(V.location>=0){let ne=B[X];if(ne===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const he=ne.normalized,ce=ne.itemSize,Re=e.get(ne);if(Re===void 0)continue;const Ne=Re.buffer,q=Re.type,j=Re.bytesPerElement,de=q===n.INT||q===n.UNSIGNED_INT||ne.gpuType===hu;if(ne.isInterleavedBufferAttribute){const oe=ne.data,be=oe.stride,Fe=ne.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<V.locationSize;Ae++)p(V.location+Ae,oe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)m(V.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Ae=0;Ae<V.locationSize;Ae++)x(V.location+Ae,ce/V.locationSize,q,he,be*j,(Fe+ce/V.locationSize*Ae)*j,de)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,ne.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,ce/V.locationSize,q,he,ce*j,ce/V.locationSize*oe*j,de)}}else if(H!==void 0){const he=H[X];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(V.location,he);break;case 3:n.vertexAttrib3fv(V.location,he);break;case 4:n.vertexAttrib4fv(V.location,he);break;default:n.vertexAttrib1fv(V.location,he)}}}}y()}function E(){R();for(const M in i){const C=i[M];for(const U in C){const O=C[U];for(const B in O)h(O[B].object),delete O[B];delete C[U]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const U in C){const O=C[U];for(const B in O)h(O[B].object),delete O[B];delete C[U]}delete i[M.id]}function w(M){for(const C in i){const U=i[C];if(U[M.id]===void 0)continue;const O=U[M.id];for(const B in O)h(O[B].object),delete O[B];delete U[M.id]}}function R(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function pS(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function mS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==jt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==$n&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!R)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function gS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const y=s?0:i,x=y*4;let _=p.clippingState||null;c.value=_,_=h(g,f,x,d);for(let E=0;E!==x;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function _S(n){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=or:o===jo&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===jo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Y0(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Zr=4,Id=[.125,.215,.35,.446,.526,.582],er=20,Ac=new Nl,Ld=new Te;let Rc=null,Cc=0,Pc=0,Ic=!1;const Qi=(1+Math.sqrt(5))/2,kr=1/Qi,Dd=[new L(-Qi,kr,0),new L(Qi,kr,0),new L(-kr,0,Qi),new L(kr,0,Qi),new L(0,Qi,-kr),new L(0,Qi,kr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],vS=new L;class Ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=vS}=s;Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,Pc),this._renderer.xr.enabled=Ic,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ia,format:jt,colorSpace:es,depthBuffer:!1},r=Nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xS(s)),this._blurMaterial=yS(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Ac)}_sceneToCubeUV(e,t,i,r,s){const c=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ld),u.toneMapping=Ri,u.autoClear=!1;const g=new Il({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new Et(new us,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Ld),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const _=this._cubeSize;Po(r,x*_,y>2?_:0,_,_),u.setRenderTarget(r),m&&u.render(v,c),u.render(e,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===or||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Po(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ac)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dd[(r-s-1)%Dd.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*er-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let y=0;for(let w=0;w<er;++w){const R=w/v,S=Math.exp(-R*R/2);p.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const _=this._sizeLods[r],E=3*_*(r>x-Zr?r-x+Zr:0),A=4*(this._cubeSize-_);Po(t,E,A,3*_,2*_),c.setRenderTarget(t),c.render(u,Ac)}}function xS(n){const e=[],t=[],i=[];let r=n;const s=n-Zr+1+Id.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Zr?c=Id[a-n+Zr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(S,v*g*A),x.set(f,m*g*A);const M=[A,A,A,A,A,A];_.set(M,p*g*A)}const E=new Qe;E.setAttribute("position",new Ut(y,v)),E.setAttribute("uv",new Ut(x,m)),E.setAttribute("faceIndex",new Ut(_,p)),e.push(E),r>Zr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nd(n,e,t){const i=new cr(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yS(n,e,t){const i=new Float32Array(er),r=new L(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Od(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Fd(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}function MS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Qo||c===jo,h=c===or||c===lr;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ud(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Ud(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function SS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bS(n,e,t,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){const E=y[x+0],A=y[x+1],w=y[x+2];f.push(E,A,A,w,w,E)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const E=x+0,A=x+1,w=x+2;f.push(E,A,A,w,w,E)}}else return;const m=new(hm(f)?pm:dm)(f,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function wS(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ES(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TS(n,e,t){const i=new WeakMap,r=new nt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let E=o.attributes.position.count*_,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*u),R=new um(w,E,A,u);R.type=fn,R.needsUpdate=!0;const S=_*4;for(let C=0;C<u;C++){const U=p[C],O=y[C],B=x[C],k=E*A*4*C;for(let H=0;H<U.count;H++){const X=H*S;g===!0&&(r.fromBufferAttribute(U,H),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),v===!0&&(r.fromBufferAttribute(O,H),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),m===!0&&(r.fromBufferAttribute(B,H),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=B.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new J(E,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function AS(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Vm=new Bt,zd=new bm(1,1),Gm=new um,Wm=new I0,Xm=new _u,Bd=[],kd=[],Hd=new Float32Array(16),Vd=new Float32Array(9),Gd=new Float32Array(4);function ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bd[r];if(s===void 0&&(s=new Float32Array(r),Bd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fl(n,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function LS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Gd.set(i),n.uniformMatrix2fv(this.addr,!1,Gd),Rt(t,i)}}function DS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Vd.set(i),n.uniformMatrix3fv(this.addr,!1,Vd),Rt(t,i)}}function US(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),Rt(t,i)}}function NS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function BS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function GS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zd.compareFunction=cm,s=zd):s=Vm,t.setTexture2D(e||s,r)}function WS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wm,r)}function XS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xm,r)}function qS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gm,r)}function ZS(n){switch(n){case 5126:return RS;case 35664:return CS;case 35665:return PS;case 35666:return IS;case 35674:return LS;case 35675:return DS;case 35676:return US;case 5124:case 35670:return NS;case 35667:case 35671:return OS;case 35668:case 35672:return FS;case 35669:case 35673:return zS;case 5125:return BS;case 36294:return kS;case 36295:return HS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}function YS(n,e){n.uniform1fv(this.addr,e)}function $S(n,e){const t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function JS(n,e){const t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function KS(n,e){const t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function QS(n,e){const t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jS(n,e){const t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eb(n,e){const t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tb(n,e){n.uniform1iv(this.addr,e)}function nb(n,e){n.uniform2iv(this.addr,e)}function ib(n,e){n.uniform3iv(this.addr,e)}function rb(n,e){n.uniform4iv(this.addr,e)}function sb(n,e){n.uniform1uiv(this.addr,e)}function ab(n,e){n.uniform2uiv(this.addr,e)}function ob(n,e){n.uniform3uiv(this.addr,e)}function lb(n,e){n.uniform4uiv(this.addr,e)}function cb(n,e,t){const i=this.cache,r=e.length,s=Fl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vm,s[a])}function hb(n,e,t){const i=this.cache,r=e.length,s=Fl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wm,s[a])}function ub(n,e,t){const i=this.cache,r=e.length,s=Fl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xm,s[a])}function fb(n,e,t){const i=this.cache,r=e.length,s=Fl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gm,s[a])}function db(n){switch(n){case 5126:return YS;case 35664:return $S;case 35665:return JS;case 35666:return KS;case 35674:return QS;case 35675:return jS;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ab;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}class pb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZS(t.type)}}class mb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=db(t.type)}}class gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function Wd(n,e){n.seq.push(e),n.map[e.id]=e}function _b(n,e,t){const i=n.name,r=i.length;for(Lc.lastIndex=0;;){const s=Lc.exec(i),a=Lc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Wd(t,l===void 0?new pb(o,n,e):new mb(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new gb(o),Wd(t,u)),t=u}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_b(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Xd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vb=37297;let xb=0;function yb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qd=new Ge;function Mb(n){et._getMatrix(qd,et.workingColorSpace,n);const e=`mat3( ${qd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case il:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yb(n.getShaderSource(e),a)}else return r}function Sb(n,e){const t=Mb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bb(n,e){let t;switch(e){case e0:t="Linear";break;case t0:t="Reinhard";break;case n0:t="Cineon";break;case i0:t="ACESFilmic";break;case s0:t="AgX";break;case a0:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Io=new L;function wb(){et.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Tb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ab(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xs(n){return n!==""}function Yd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(n){return n.replace(Rb,Pb)}const Cb=new Map;function Pb(n,e){let t=Ye[e];if(t===void 0){const i=Cb.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(n){return n.replace(Ib,Lb)}function Lb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Db(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===em?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ub(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case lr:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ob(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Q_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function Fb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Db(t),l=Ub(t),h=Nb(t),u=Ob(t),f=Fb(t),d=Eb(t),g=Tb(s),v=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ri?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Sb("linearToOutputTexel",t.outputColorSpace),wb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Bh(a),a=Yd(a,t),a=$d(a,t),o=Bh(o),o=Yd(o,t),o=$d(o,t),a=Jd(a),o=Jd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,_=y+p+o,E=Xd(r,r.VERTEX_SHADER,x),A=Xd(r,r.FRAGMENT_SHADER,_);r.attachShader(v,E),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(E).trim(),B=r.getShaderInfoLog(A).trim();let k=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,A);else{const X=Zd(r,E,"vertex"),V=Zd(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+X+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||B==="")&&(H=!1);H&&(C.diagnostics={runnable:k,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(E),r.deleteShader(A),R=new Zo(r,v),S=Ab(r,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,vb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let Bb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hb(e),t.set(e,i)),i}}class Hb{constructor(e){this.id=Bb++,this.code=e,this.usedTimes=0}}function Vb(n,e,t,i,r,s,a){const o=new gu,c=new kb,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,U,O){const B=U.fog,k=O.geometry,H=S.isMeshStandardMaterial?U.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),V=X&&X.mapping===Pa?X.image.height:null,ne=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const he=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=he!==void 0?he.length:0;let Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let Ne,q,j,de;if(ne){const lt=Vn[ne];Ne=lt.vertexShader,q=lt.fragmentShader}else Ne=S.vertexShader,q=S.fragmentShader,c.update(S),j=c.getVertexShaderID(S),de=c.getFragmentShaderID(S);const oe=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,ot=!!S.map,$e=!!S.matcap,Ie=!!X,I=!!S.aoMap,le=!!S.lightMap,te=!!S.bumpMap,ae=!!S.normalMap,K=!!S.displacementMap,we=!!S.emissiveMap,ie=!!S.metalnessMap,P=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,$=S.dispersion>0,ee=S.iridescence>0,Z=S.sheen>0,Se=S.transmission>0,fe=b&&!!S.anisotropyMap,Ce=z&&!!S.clearcoatMap,Oe=z&&!!S.clearcoatNormalMap,re=z&&!!S.clearcoatRoughnessMap,ve=ee&&!!S.iridescenceMap,De=ee&&!!S.iridescenceThicknessMap,ke=Z&&!!S.sheenColorMap,ye=Z&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,Ze=!!S.specularColorMap,ft=!!S.specularIntensityMap,D=Se&&!!S.transmissionMap,me=Se&&!!S.thicknessMap,Y=!!S.gradientMap,Q=!!S.alphaMap,_e=S.alphaTest>0,ge=!!S.alphaHash,Xe=!!S.extensions;let xt=Ri;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xt=n.toneMapping);const Nt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ne,fragmentShader:q,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:es,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:$e,envMap:Ie,envMapMode:Ie&&X.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:le,bumpMap:te,normalMap:ae,displacementMap:f&&K,emissiveMap:we,normalMapObjectSpace:ae&&S.normalMapType===u0,normalMapTangentSpace:ae&&S.normalMapType===pr,metalnessMap:ie,roughnessMap:P,anisotropy:b,anisotropyMap:fe,clearcoat:z,clearcoatMap:Ce,clearcoatNormalMap:Oe,clearcoatRoughnessMap:re,dispersion:$,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:ye,specularMap:Ke,specularColorMap:Ze,specularIntensityMap:ft,transmission:Se,transmissionMap:D,thicknessMap:me,gradientMap:Y,opaque:S.transparent===!1&&S.blending===$r&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:_e,alphaHash:ge,combine:S.combine,mapUv:ot&&v(S.map.channel),aoMapUv:I&&v(S.aoMap.channel),lightMapUv:le&&v(S.lightMap.channel),bumpMapUv:te&&v(S.bumpMap.channel),normalMapUv:ae&&v(S.normalMap.channel),displacementMapUv:K&&v(S.displacementMap.channel),emissiveMapUv:we&&v(S.emissiveMap.channel),metalnessMapUv:ie&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:Ce&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(S.sheenRoughnessMap.channel),specularMapUv:Ke&&v(S.specularMap.channel),specularColorMapUv:Ze&&v(S.specularColorMap.channel),specularIntensityMapUv:ft&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:me&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ae||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(ot||Q),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:we&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xn,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&S.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const M=g[S.type];let C;if(M){const U=Vn[M];C=W0.clone(U.uniforms)}else C=S.uniforms;return C}function E(S,M){let C;for(let U=0,O=h.length;U<O;U++){const B=h[U];if(B.cacheKey===M){C=B,++C.usedTimes;break}}return C===void 0&&(C=new zb(n,M,S,s),h.push(C)),C}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function Gb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Wb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Wb),i.length>1&&i.sort(f||Qd),r.length>1&&r.sort(f||Qd)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Xb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new jd,n.set(i,[a])):r>=s.length?(a=new jd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function qb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Zb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yb=0;function $b(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jb(n){const e=new qb,t=Zb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const r=new L,s=new Ve,a=new Ve;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,E=0,A=0,w=0;l.sort($b);for(let S=0,M=l.length;S<M;S++){const C=l[S],U=C.color,O=C.intensity,B=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*O,u+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],O);w++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=C.shadow.matrix,y++}i.directional[d]=H,d++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(O),H.distance=B,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[v]=H;const X=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,X.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[v]=X.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=k,_++}v++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(U).multiplyScalar(O),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const X=C.shadow,V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(O),H.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==E||R.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=E,R.numLightProbes=w,i.version=Yb++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function ep(n){const e=new Jb(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Kb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ep(n),e.set(r,[o])):s>=a.length?(o=new ep(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
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
}`;function ew(n,e,t){let i=new La;const r=new J,s=new J,a=new nt,o=new Um({depthPacking:h0}),c=new Nm,l={},h=t.maxTextureSize,u={[Ui]:tn,[tn]:Ui,[xn]:xn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Qb,fragmentShader:jb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=em;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ai),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==oi&&this.type===oi,B=p===oi&&this.type!==oi;for(let k=0,H=A.length;k<H;k++){const X=A[k],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ne=V.getFrameExtents();if(r.multiply(ne),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||O===!0||B===!0){const ce=this.type!==oi?{minFilter:nn,magFilter:nn}:{};V.map!==null&&V.map.dispose(),V.map=new cr(r.x,r.y,ce),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const he=V.getViewportCount();for(let ce=0;ce<he;ce++){const Re=V.getViewport(ce);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),U.viewport(a),V.updateMatrices(X,ce),i=V.getFrustum(),_(w,R,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===oi&&y(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,C)};function y(A,w){const R=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,d,v,null)}function x(A,w,R,S){let M=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=M.uuid,O=w.uuid;let B=l[U];B===void 0&&(B={},l[U]=B);let k=B[O];k===void 0&&(k=M.clone(),B[O]=k,w.addEventListener("dispose",E)),M=k}if(M.visible=w.visible,M.wireframe=w.wireframe,S===oi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=R}return M}function _(A,w,R,S,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=e.update(A),B=A.material;if(Array.isArray(B)){const k=O.groups;for(let H=0,X=k.length;H<X;H++){const V=k[H],ne=B[V.materialIndex];if(ne&&ne.visible){const he=x(A,ne,S,M);A.onBeforeShadow(n,A,w,R,O,he,V),n.renderBufferDirect(R,null,O,he,A,V),A.onAfterShadow(n,A,w,R,O,he,V)}}}else if(B.visible){const k=x(A,B,S,M);A.onBeforeShadow(n,A,w,R,O,k,null),n.renderBufferDirect(R,null,O,k,A,null),A.onAfterShadow(n,A,w,R,O,k,null)}}const U=A.children;for(let O=0,B=U.length;O<B;O++)_(U[O],w,R,S,M)}function E(A){A.target.removeEventListener("dispose",E);for(const R in l){const S=l[R],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const tw={[eh]:th,[nh]:sh,[ih]:ah,[jr]:rh,[th]:eh,[sh]:nh,[ah]:ih,[rh]:jr};function nw(n,e){function t(){let D=!1;const me=new nt;let Y=null;const Q=new nt(0,0,0,0);return{setMask:function(_e){Y!==_e&&!D&&(n.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ge,Xe,xt,Nt){Nt===!0&&(_e*=xt,ge*=xt,Xe*=xt),me.set(_e,ge,Xe,xt),Q.equals(me)===!1&&(n.clearColor(_e,ge,Xe,xt),Q.copy(me))},reset:function(){D=!1,Y=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,me=!1,Y=null,Q=null,_e=null;return{setReversed:function(ge){if(me!==ge){const Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),me=ge;const xt=_e;_e=null,this.setClear(xt)}},getReversed:function(){return me},setTest:function(ge){ge?oe(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!D&&(n.depthMask(ge),Y=ge)},setFunc:function(ge){if(me&&(ge=tw[ge]),Q!==ge){switch(ge){case eh:n.depthFunc(n.NEVER);break;case th:n.depthFunc(n.ALWAYS);break;case nh:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case ih:n.depthFunc(n.EQUAL);break;case rh:n.depthFunc(n.GEQUAL);break;case sh:n.depthFunc(n.GREATER);break;case ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ge}},setLocked:function(ge){D=ge},setClear:function(ge){_e!==ge&&(me&&(ge=1-ge),n.clearDepth(ge),_e=ge)},reset:function(){D=!1,Y=null,Q=null,_e=null,me=!1}}}function r(){let D=!1,me=null,Y=null,Q=null,_e=null,ge=null,Xe=null,xt=null,Nt=null;return{setTest:function(lt){D||(lt?oe(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(lt){me!==lt&&!D&&(n.stencilMask(lt),me=lt)},setFunc:function(lt,Pn,jn){(Y!==lt||Q!==Pn||_e!==jn)&&(n.stencilFunc(lt,Pn,jn),Y=lt,Q=Pn,_e=jn)},setOp:function(lt,Pn,jn){(ge!==lt||Xe!==Pn||xt!==jn)&&(n.stencilOp(lt,Pn,jn),ge=lt,Xe=Pn,xt=jn)},setLocked:function(lt){D=lt},setClear:function(lt){Nt!==lt&&(n.clearStencil(lt),Nt=lt)},reset:function(){D=!1,me=null,Y=null,Q=null,_e=null,ge=null,Xe=null,xt=null,Nt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,E=null,A=null,w=new Te(0,0,0),R=0,S=!1,M=null,C=null,U=null,O=null,B=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=X>=2);let ne=null,he={};const ce=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Ne=new nt().fromArray(ce),q=new nt().fromArray(Re);function j(D,me,Y,Q){const _e=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Y;Xe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(me+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ge}const de={};de[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(jr),te(!1),ae(yf),oe(n.CULL_FACE),I(Ai);function oe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function be(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Fe(D,me){return u[D]!==me?(n.bindFramebuffer(D,me),u[D]=me,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ae(D,me){let Y=d,Q=!1;if(D){Y=f.get(me),Y===void 0&&(Y=[],f.set(me,Y));const _e=D.textures;if(Y.length!==_e.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Xe=_e.length;ge<Xe;ge++)Y[ge]=n.COLOR_ATTACHMENT0+ge;Y.length=_e.length,Q=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Q=!0);Q&&n.drawBuffers(Y)}function ot(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const $e={[ji]:n.FUNC_ADD,[N_]:n.FUNC_SUBTRACT,[O_]:n.FUNC_REVERSE_SUBTRACT};$e[F_]=n.MIN,$e[z_]=n.MAX;const Ie={[B_]:n.ZERO,[k_]:n.ONE,[H_]:n.SRC_COLOR,[Qc]:n.SRC_ALPHA,[Z_]:n.SRC_ALPHA_SATURATE,[X_]:n.DST_COLOR,[G_]:n.DST_ALPHA,[V_]:n.ONE_MINUS_SRC_COLOR,[jc]:n.ONE_MINUS_SRC_ALPHA,[q_]:n.ONE_MINUS_DST_COLOR,[W_]:n.ONE_MINUS_DST_ALPHA,[Y_]:n.CONSTANT_COLOR,[$_]:n.ONE_MINUS_CONSTANT_COLOR,[J_]:n.CONSTANT_ALPHA,[K_]:n.ONE_MINUS_CONSTANT_ALPHA};function I(D,me,Y,Q,_e,ge,Xe,xt,Nt,lt){if(D===Ai){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),D!==U_){if(D!==m||lt!==S){if((p!==ji||_!==ji)&&(n.blendEquation(n.FUNC_ADD),p=ji,_=ji),lt)switch(D){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mf:n.blendFunc(n.ONE,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,E=null,A=null,w.set(0,0,0),R=0,m=D,S=lt}return}_e=_e||me,ge=ge||Y,Xe=Xe||Q,(me!==p||_e!==_)&&(n.blendEquationSeparate($e[me],$e[_e]),p=me,_=_e),(Y!==y||Q!==x||ge!==E||Xe!==A)&&(n.blendFuncSeparate(Ie[Y],Ie[Q],Ie[ge],Ie[Xe]),y=Y,x=Q,E=ge,A=Xe),(xt.equals(w)===!1||Nt!==R)&&(n.blendColor(xt.r,xt.g,xt.b,Nt),w.copy(xt),R=Nt),m=D,S=!1}function le(D,me){D.side===xn?be(n.CULL_FACE):oe(n.CULL_FACE);let Y=D.side===tn;me&&(Y=!Y),te(Y),D.blending===$r&&D.transparent===!1?I(Ai):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Q=D.stencilWrite;o.setTest(Q),Q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),we(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function ae(D){D!==I_?(oe(n.CULL_FACE),D!==C&&(D===yf?n.cullFace(n.BACK):D===L_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),C=D}function K(D){D!==U&&(H&&n.lineWidth(D),U=D)}function we(D,me,Y){D?(oe(n.POLYGON_OFFSET_FILL),(O!==me||B!==Y)&&(n.polygonOffset(me,Y),O=me,B=Y)):be(n.POLYGON_OFFSET_FILL)}function ie(D){D?oe(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function P(D){D===void 0&&(D=n.TEXTURE0+k-1),ne!==D&&(n.activeTexture(D),ne=D)}function b(D,me,Y){Y===void 0&&(ne===null?Y=n.TEXTURE0+k-1:Y=ne);let Q=he[Y];Q===void 0&&(Q={type:void 0,texture:void 0},he[Y]=Q),(Q.type!==D||Q.texture!==me)&&(ne!==Y&&(n.activeTexture(Y),ne=Y),n.bindTexture(D,me||de[D]),Q.type=D,Q.texture=me)}function z(){const D=he[ne];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){Ne.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function ye(D){q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ke(D,me){let Y=l.get(me);Y===void 0&&(Y=new WeakMap,l.set(me,Y));let Q=Y.get(D);Q===void 0&&(Q=n.getUniformBlockIndex(me,D.name),Y.set(D,Q))}function Ze(D,me){const Q=l.get(me).get(D);c.get(me)!==Q&&(n.uniformBlockBinding(me,Q,D.__bindingPointIndex),c.set(me,Q))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,he={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,E=null,A=null,w=new Te(0,0,0),R=0,S=!1,M=null,C=null,U=null,O=null,B=null,Ne.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:be,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:ot,setBlending:I,setMaterial:le,setFlipSided:te,setCullFace:ae,setLineWidth:K,setPolygonOffset:we,setScissorTest:ie,activeTexture:P,bindTexture:b,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ve,texImage3D:De,updateUBOMapping:Ke,uniformBlockBinding:Ze,texStorage2D:Oe,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ce,scissor:ke,viewport:ye,reset:ft}}function iw(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):oa("canvas")}function v(P,b,z){let $=1;const ee=ie(P);if((ee.width>z||ee.height>z)&&($=z/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor($*ee.width),Se=Math.floor($*ee.height);u===void 0&&(u=g(Z,Se));const fe=b?g(Z,Se):u;return fe.width=Z,fe.height=Se,fe.getContext("2d").drawImage(P,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Se+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,b,z,$,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=b;if(b===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),b===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),b===n.RGBA){const Se=ee?il:et.getTransfer($);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=Se===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(P,b){let z;return P?b===null||b===Ni||b===ra?z=n.DEPTH24_STENCIL8:b===fn?z=n.DEPTH32F_STENCIL8:b===ia&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ni||b===ra?z=n.DEPTH_COMPONENT24:b===fn?z=n.DEPTH_COMPONENT32F:b===ia&&(z=n.DEPTH_COMPONENT16),z}function E(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){const b=P.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&h.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),M(b)}function R(P){const b=i.get(P);if(b.__webglInit===void 0)return;const z=P.source,$=f.get(z);if($){const ee=$[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(P),Object.keys($).length===0&&f.delete(z)}i.remove(P)}function S(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const z=P.source,$=f.get(z);delete $[b.__cacheKey],a.memory.textures--}function M(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let ee=0;ee<b.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let $=0,ee=z.length;$<ee;$++){const Z=i.get(z[$]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(z[$])}i.remove(P)}let C=0;function U(){C=0}function O(){const P=C;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),C+=1,P}function B(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function k(P,b){const z=i.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,P,b);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function H(P,b){const z=i.get(P);if(P.version>0&&z.__version!==P.version){q(z,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function X(P,b){const z=i.get(P);if(P.version>0&&z.__version!==P.version){q(z,P,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function V(P,b){const z=i.get(P);if(P.version>0&&z.__version!==P.version){j(z,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const ne={[el]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},he={[nn]:n.NEAREST,[tm]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},ce={[f0]:n.NEVER,[v0]:n.ALWAYS,[d0]:n.LESS,[cm]:n.LEQUAL,[p0]:n.EQUAL,[_0]:n.GEQUAL,[m0]:n.GREATER,[g0]:n.NOTEQUAL};function Re(P,b){if(b.type===fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===ko||b.magFilter===Vs||b.magFilter===wi||b.minFilter===Nn||b.minFilter===ko||b.minFilter===Vs||b.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ne[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ne[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ne[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,he[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,he[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==Vs&&b.minFilter!==wi||b.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));const $=b.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const Z=B(b);if(Z!==P.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[Z].usedTimes++;const Se=ee[P.__cacheKey];Se!==void 0&&(ee[P.__cacheKey].usedTimes--,Se.usedTimes===0&&S(b)),P.__cacheKey=Z,P.__webglTexture=ee[Z].texture}return z}function q(P,b,z){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);const ee=Ne(P,b),Z=b.source;t.bindTexture($,P.__webglTexture,n.TEXTURE0+z);const Se=i.get(Z);if(Z.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const fe=et.getPrimaries(et.workingColorSpace),Ce=b.colorSpace===Mi?null:et.getPrimaries(b.colorSpace),Oe=b.colorSpace===Mi||fe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let re=v(b.image,!1,r.maxTextureSize);re=we(b,re);const ve=s.convert(b.format,b.colorSpace),De=s.convert(b.type);let ke=x(b.internalFormat,ve,De,b.colorSpace,b.isVideoTexture);Re($,b);let ye;const Ke=b.mipmaps,Ze=b.isVideoTexture!==!0,ft=Se.__version===void 0||ee===!0,D=Z.dataReady,me=E(b,re);if(b.isDepthTexture)ke=_(b.format===aa,b.type),ft&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,ke,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ke,re.width,re.height,0,ve,De,null));else if(b.isDataTexture)if(Ke.length>0){Ze&&ft&&t.texStorage2D(n.TEXTURE_2D,me,ke,Ke[0].width,Ke[0].height);for(let Y=0,Q=Ke.length;Y<Q;Y++)ye=Ke[Y],Ze?D&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,ve,De,ye.data):t.texImage2D(n.TEXTURE_2D,Y,ke,ye.width,ye.height,0,ve,De,ye.data);b.generateMipmaps=!1}else Ze?(ft&&t.texStorage2D(n.TEXTURE_2D,me,ke,re.width,re.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ve,De,re.data)):t.texImage2D(n.TEXTURE_2D,0,ke,re.width,re.height,0,ve,De,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ke,Ke[0].width,Ke[0].height,re.depth);for(let Y=0,Q=Ke.length;Y<Q;Y++)if(ye=Ke[Y],b.format!==jt)if(ve!==null)if(Ze){if(D)if(b.layerUpdates.size>0){const _e=Pd(ye.width,ye.height,b.format,b.type);for(const ge of b.layerUpdates){const Xe=ye.data.subarray(ge*_e/ye.data.BYTES_PER_ELEMENT,(ge+1)*_e/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ge,ye.width,ye.height,1,ve,Xe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,re.depth,ve,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,ke,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,re.depth,ve,De,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,ke,ye.width,ye.height,re.depth,0,ve,De,ye.data)}else{Ze&&ft&&t.texStorage2D(n.TEXTURE_2D,me,ke,Ke[0].width,Ke[0].height);for(let Y=0,Q=Ke.length;Y<Q;Y++)ye=Ke[Y],b.format!==jt?ve!==null?Ze?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?D&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,ve,De,ye.data):t.texImage2D(n.TEXTURE_2D,Y,ke,ye.width,ye.height,0,ve,De,ye.data)}else if(b.isDataArrayTexture)if(Ze){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ke,re.width,re.height,re.depth),D)if(b.layerUpdates.size>0){const Y=Pd(re.width,re.height,b.format,b.type);for(const Q of b.layerUpdates){const _e=re.data.subarray(Q*Y/re.data.BYTES_PER_ELEMENT,(Q+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ve,De,_e)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,ve,De,re.data);else if(b.isData3DTexture)Ze?(ft&&t.texStorage3D(n.TEXTURE_3D,me,ke,re.width,re.height,re.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)):t.texImage3D(n.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,ve,De,re.data);else if(b.isFramebufferTexture){if(ft)if(Ze)t.texStorage2D(n.TEXTURE_2D,me,ke,re.width,re.height);else{let Y=re.width,Q=re.height;for(let _e=0;_e<me;_e++)t.texImage2D(n.TEXTURE_2D,_e,ke,Y,Q,0,ve,De,null),Y>>=1,Q>>=1}}else if(Ke.length>0){if(Ze&&ft){const Y=ie(Ke[0]);t.texStorage2D(n.TEXTURE_2D,me,ke,Y.width,Y.height)}for(let Y=0,Q=Ke.length;Y<Q;Y++)ye=Ke[Y],Ze?D&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ve,De,ye):t.texImage2D(n.TEXTURE_2D,Y,ke,ve,De,ye);b.generateMipmaps=!1}else if(Ze){if(ft){const Y=ie(re);t.texStorage2D(n.TEXTURE_2D,me,ke,Y.width,Y.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,De,re)}else t.texImage2D(n.TEXTURE_2D,0,ke,ve,De,re);m(b)&&p($),Se.__version=Z.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function j(P,b,z){if(b.image.length!==6)return;const $=Ne(P,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const Z=i.get(ee);if(ee.version!==Z.__version||$===!0){t.activeTexture(n.TEXTURE0+z);const Se=et.getPrimaries(et.workingColorSpace),fe=b.colorSpace===Mi?null:et.getPrimaries(b.colorSpace),Ce=b.colorSpace===Mi||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Oe&&!re?ve[Q]=v(b.image[Q],!0,r.maxCubemapSize):ve[Q]=re?b.image[Q].image:b.image[Q],ve[Q]=we(b,ve[Q]);const De=ve[0],ke=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),Ke=x(b.internalFormat,ke,ye,b.colorSpace),Ze=b.isVideoTexture!==!0,ft=Z.__version===void 0||$===!0,D=ee.dataReady;let me=E(b,De);Re(n.TEXTURE_CUBE_MAP,b);let Y;if(Oe){Ze&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ke,De.width,De.height);for(let Q=0;Q<6;Q++){Y=ve[Q].mipmaps;for(let _e=0;_e<Y.length;_e++){const ge=Y[_e];b.format!==jt?ke!==null?Ze?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ge.width,ge.height,ke,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ke,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ge.width,ge.height,ke,ye,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ke,ge.width,ge.height,0,ke,ye,ge.data)}}}else{if(Y=b.mipmaps,Ze&&ft){Y.length>0&&me++;const Q=ie(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,ke,ye,ve[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,ve[Q].width,ve[Q].height,0,ke,ye,ve[Q].data);for(let _e=0;_e<Y.length;_e++){const Xe=Y[_e].image[Q].image;Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Xe.width,Xe.height,ke,ye,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ke,Xe.width,Xe.height,0,ke,ye,Xe.data)}}else{Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,ye,ve[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,ke,ye,ve[Q]);for(let _e=0;_e<Y.length;_e++){const ge=Y[_e];Ze?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,ke,ye,ge.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ke,ke,ye,ge.image[Q])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function de(P,b,z,$,ee,Z){const Se=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),Ce=x(z.internalFormat,Se,fe,z.colorSpace),Oe=i.get(b),re=i.get(z);if(re.__renderTarget=b,!Oe.__hasExternalTextures){const ve=Math.max(1,b.width>>Z),De=Math.max(1,b.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,Ce,ve,De,b.depth,0,Se,fe,null):t.texImage2D(ee,Z,Ce,ve,De,0,Se,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ae(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ee,re.__webglTexture,0,te(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ee,re.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const $=b.depthTexture,ee=$&&$.isDepthTexture?$.type:null,Z=_(b.stencilBuffer,ee),Se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=te(b);ae(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Z,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,P)}else{const $=b.textures;for(let ee=0;ee<$.length;ee++){const Z=$[ee],Se=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),Ce=x(Z.internalFormat,Se,fe,Z.colorSpace),Oe=te(b);z&&ae(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ce,b.width,b.height):ae(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const ee=$.__webglTexture,Z=te(b);if(b.depthTexture.format===sa)ae(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(b.depthTexture.format===aa)ae(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const b=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=P.texture.mipmaps;$&&$.length>0?be(b.__webglFramebuffer[0],P):be(b.__webglFramebuffer,P)}else if(z){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),oe(b.__webglDepthbuffer[$],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else{const $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),oe(b.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,b,z){const $=i.get(P);b!==void 0&&de($.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Fe(P)}function ot(P){const b=P.texture,z=i.get(P),$=i.get(b);P.addEventListener("dispose",w);const ee=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)z.__webglFramebuffer[fe][Ce]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Se)for(let fe=0,Ce=ee.length;fe<Ce;fe++){const Oe=i.get(ee[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ae(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const Ce=ee[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Oe=s.convert(Ce.format,Ce.colorSpace),re=s.convert(Ce.type),ve=x(Ce.internalFormat,Oe,re,Ce.colorSpace,P.isXRRenderTarget===!0),De=te(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Re(n.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)de(z.__webglFramebuffer[fe][Ce],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce);else de(z.__webglFramebuffer[fe],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,Ce=ee.length;fe<Ce;fe++){const Oe=ee[fe],re=i.get(Oe);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Re(n.TEXTURE_2D,Oe),de(z.__webglFramebuffer,P,Oe,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Oe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),Re(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)de(z.__webglFramebuffer[Ce],P,b,n.COLOR_ATTACHMENT0,fe,Ce);else de(z.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,fe,0);m(b)&&p(fe),t.unbindTexture()}P.depthBuffer&&Fe(P)}function $e(P){const b=P.textures;for(let z=0,$=b.length;z<$;z++){const ee=b[z];if(m(ee)){const Z=y(P),Se=i.get(ee).__webglTexture;t.bindTexture(Z,Se),p(Z),t.unbindTexture()}}}const Ie=[],I=[];function le(P){if(P.samples>0){if(ae(P)===!1){const b=P.textures,z=P.width,$=P.height;let ee=n.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(P),fe=b.length>1;if(fe)for(let Oe=0;Oe<b.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ce=P.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Oe]);const re=i.get(b[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,ee,n.NEAREST),c===!0&&(Ie.length=0,I.length=0,Ie.push(n.COLOR_ATTACHMENT0+Oe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ie.push(Z),I.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Oe=0;Oe<b.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Oe]);const re=i.get(b[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function te(P){return Math.min(r.maxSamples,P.samples)}function ae(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function K(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function we(P,b){const z=P.colorSpace,$=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==es&&z!==Mi&&(et.getTransfer(z)===ct?($!==jt||ee!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Ae,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ae}function rw(n,e){function t(i,r=Mi){let s;const a=et.getTransfer(r);if(i===$n)return n.UNSIGNED_BYTE;if(i===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nm)return n.BYTE;if(i===im)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===hu)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===fn)return n.FLOAT;if(i===Ia)return n.HALF_FLOAT;if(i===sm)return n.ALPHA;if(i===am)return n.RGB;if(i===jt)return n.RGBA;if(i===sa)return n.DEPTH_COMPONENT;if(i===aa)return n.DEPTH_STENCIL;if(i===du)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===om)return n.RG;if(i===pu)return n.RG_INTEGER;if(i===mu)return n.RGBA_INTEGER;if(i===Ho||i===Vo||i===Go||i===Wo)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===lh||i===ch||i===hh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uh||i===fh||i===dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uh||i===fh)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Mh||i===Sh||i===bh||i===wh||i===Eh||i===Th||i===Ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ph)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_h)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Th)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ah)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===Rh||i===Ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lm||i===Ph||i===Ih||i===Lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
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

}`;class ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:sw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lw extends mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=new ow,m=t.getContextAttributes();let p=null,y=null;const x=[],_=[],E=new J;let A=null;const w=new Qt;w.viewport=new nt;const R=new Qt;R.viewport=new nt;const S=[w,R],M=new Rx;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=x[q];return j===void 0&&(j=new dc,x[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=x[q];return j===void 0&&(j=new dc,x[q]=j),j.getGripSpace()},this.getHand=function(q){let j=x[q];return j===void 0&&(j=new dc,x[q]=j),j.getHandSpace()};function O(q){const j=_.indexOf(q.inputSource);if(j===-1)return;const de=x[j];de!==void 0&&(de.update(q.inputSource,q.frame,l||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",k);for(let q=0;q<x.length;q++){const j=_[q];j!==null&&(_[q]=null,x[q].disconnect(j))}C=null,U=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,oe=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?aa:sa,oe=m.stencil?ra:Ni);const Fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new cr(f.textureWidth,f.textureHeight,{format:jt,type:$n,depthTexture:new bm(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new cr(d.framebufferWidth,d.framebufferHeight,{format:jt,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(q){for(let j=0;j<q.removed.length;j++){const de=q.removed[j],oe=_.indexOf(de);oe>=0&&(_[oe]=null,x[oe].disconnect(de))}for(let j=0;j<q.added.length;j++){const de=q.added[j];let oe=_.indexOf(de);if(oe===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=_.length){_.push(de),oe=Fe;break}else if(_[Fe]===null){_[Fe]=de,oe=Fe;break}if(oe===-1)break}const be=x[oe];be&&be.connect(de)}}const H=new L,X=new L;function V(q,j,de){H.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(de.matrixWorld);const oe=H.distanceTo(X),be=j.projectionMatrix.elements,Fe=de.projectionMatrix.elements,Ae=be[14]/(be[10]-1),ot=be[14]/(be[10]+1),$e=(be[9]+1)/be[5],Ie=(be[9]-1)/be[5],I=(be[8]-1)/be[0],le=(Fe[8]+1)/Fe[0],te=Ae*I,ae=Ae*le,K=oe/(-I+le),we=K*-I;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(K),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ie=Ae+K,P=ot+K,b=te-we,z=ae+(oe-we),$=$e*ot/P*ie,ee=Ie*ot/P*ie;q.projectionMatrix.makePerspective(b,z,$,ee,ie,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,de=q.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(de=v.depthFar)),M.near=R.near=w.near=j,M.far=R.far=w.far=de,(C!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,U=M.far),w.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|R.layers.mask;const oe=q.parent,be=M.cameras;ne(M,oe);for(let Fe=0;Fe<be.length;Fe++)ne(be[Fe],oe);be.length===2?V(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),he(q,M,oe)};function he(q,j,de){de===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ce=null;function Re(q,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let oe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Ae=0;Ae<de.length;Ae++){const ot=de[Ae];let $e=null;if(d!==null)$e=d.getViewport(ot);else{const I=u.getViewSubImage(f,ot);$e=I.viewport,Ae===0&&(e.setRenderTargetTextures(y,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(y))}let Ie=S[Ae];Ie===void 0&&(Ie=new Qt,Ie.layers.enable(Ae),Ie.viewport=new nt,S[Ae]=Ie),Ie.matrix.fromArray(ot.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ot.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set($e.x,$e.y,$e.width,$e.height),Ae===0&&(M.matrix.copy(Ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Ie)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ae=u.getDepthInformation(de[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,r.renderState)}}for(let de=0;de<x.length;de++){const oe=_[de],be=x[de];oe!==null&&be!==void 0&&be.update(oe,j,l||a)}ce&&ce(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ne=new Hm;Ne.setAnimationLoop(Re),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const $i=new wn,cw=new Ve;function hw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,$i.copy(_),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler($i)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uw(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function l(y,x){let _=r[y.id];_===void 0&&(g(y),_=h(y),r[y.id]=_,y.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(y,E);const A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const _=n.createBuffer(),E=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],_=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,w=_.length;A<w;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,M=R.length;S<M;S++){const C=R[S];if(d(C,A,S,E)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let k=0;k<O.length;k++){const H=O[k],X=v(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+B,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,x,_,E){const A=y.value,w=x+"_"+_;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const R=E[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(y){const x=y.uniforms;let _=0;const E=16;for(let w=0,R=x.length;w<R;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,C=S.length;M<C;M++){const U=S[M],O=Array.isArray(U.value)?U.value:[U.value];for(let B=0,k=O.length;B<k;B++){const H=O[B],X=v(H),V=_%E,ne=V%X.boundary,he=V+ne;_+=ne,he!==0&&E-he<X.storage&&(_+=E-he),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=X.storage}}}const A=_%E;return A>0&&(_+=E-A),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class fw{constructor(e={}){const{canvas:t=S0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=vn;let A=0,w=0,R=null,S=-1,M=null;const C=new nt,U=new nt;let O=null;const B=new Te(0);let k=0,H=t.width,X=t.height,V=1,ne=null,he=null;const ce=new nt(0,0,H,X),Re=new nt(0,0,H,X);let Ne=!1;const q=new La;let j=!1,de=!1;const oe=new Ve,be=new Ve,Fe=new L,Ae=new nt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ie(){return R===null?V:1}let I=i;function le(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const N="webgl2";if(I=le(N,T),I===null)throw le(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,ae,K,we,ie,P,b,z,$,ee,Z,Se,fe,Ce,Oe,re,ve,De,ke,ye,Ke,Ze,ft,D;function me(){te=new SS(I),te.init(),Ze=new rw(I,te),ae=new mS(I,te,e,Ze),K=new nw(I,te),ae.reverseDepthBuffer&&f&&K.buffers.depth.setReversed(!0),we=new ES(I),ie=new Gb,P=new iw(I,te,K,ie,ae,Ze,we),b=new _S(_),z=new MS(_),$=new Ix(I),ft=new dS(I,$),ee=new bS(I,$,we,ft),Z=new AS(I,ee,$,we),ke=new TS(I,ae,P),re=new gS(ie),Se=new Vb(_,b,z,te,ae,ft,re),fe=new hw(_,ie),Ce=new Xb,Oe=new Kb(te),De=new fS(_,b,z,K,Z,d,c),ve=new ew(_,Z,ae),D=new uw(I,we,ae,K),ye=new pS(I,te,we),Ke=new wS(I,te,we),we.programs=Se.programs,_.capabilities=ae,_.extensions=te,_.properties=ie,_.renderLists=Ce,_.shadowMap=ve,_.state=K,_.info=we}me();const Y=new lw(_,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,X,!1))},this.getSize=function(T){return T.set(H,X)},this.setSize=function(T,N,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,X=N,t.width=Math.floor(T*V),t.height=Math.floor(N*V),G===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(H*V,X*V).floor()},this.setDrawingBufferSize=function(T,N,G){H=T,X=N,V=G,t.width=Math.floor(T*G),t.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,N,G,W){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,N,G,W),K.viewport(C.copy(ce).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,N,G,W){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,N,G,W),K.scissor(U.copy(Re).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(T){K.setScissorTest(Ne=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,G=!0){let W=0;if(T){let F=!1;if(R!==null){const se=R.texture.format;F=se===mu||se===pu||se===Pl}if(F){const se=R.texture.type,pe=se===$n||se===Ni||se===ia||se===ra||se===uu||se===fu,xe=De.getClearColor(),Me=De.getClearAlpha(),He=xe.r,ze=xe.g,Pe=xe.b;pe?(g[0]=He,g[1]=ze,g[2]=Pe,g[3]=Me,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=He,v[1]=ze,v[2]=Pe,v[3]=Me,I.clearBufferiv(I.COLOR,0,v))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),De.dispose(),Ce.dispose(),Oe.dispose(),ie.dispose(),b.dispose(),z.dispose(),Z.dispose(),ft.dispose(),D.dispose(),Se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",df),Y.removeEventListener("sessionend",pf),ki.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=we.autoReset,N=ve.enabled,G=ve.autoUpdate,W=ve.needsUpdate,F=ve.type;me(),we.autoReset=T,ve.enabled=N,ve.autoUpdate=G,ve.needsUpdate=W,ve.type=F}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xe(T){const N=T.target;N.removeEventListener("dispose",Xe),xt(N)}function xt(T){Nt(T),ie.remove(T)}function Nt(T){const N=ie.get(T).programs;N!==void 0&&(N.forEach(function(G){Se.releaseProgram(G)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,W,F,se){N===null&&(N=ot);const pe=F.isMesh&&F.matrixWorld.determinant()<0,xe=E_(T,N,G,W,F);K.setMaterial(W,pe);let Me=G.index,He=1;if(W.wireframe===!0){if(Me=ee.getWireframeAttribute(G),Me===void 0)return;He=2}const ze=G.drawRange,Pe=G.attributes.position;let je=ze.start*He,st=(ze.start+ze.count)*He;se!==null&&(je=Math.max(je,se.start*He),st=Math.min(st,(se.start+se.count)*He)),Me!==null?(je=Math.max(je,0),st=Math.min(st,Me.count)):Pe!=null&&(je=Math.max(je,0),st=Math.min(st,Pe.count));const St=st-je;if(St<0||St===1/0)return;ft.setup(F,W,xe,G,Me);let yt,tt=ye;if(Me!==null&&(yt=$.get(Me),tt=Ke,tt.setIndex(yt)),F.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*Ie()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(F.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),K.setLineWidth(Le*Ie()),F.isLineSegments?tt.setMode(I.LINES):F.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else F.isPoints?tt.setMode(I.POINTS):F.isSprite&&tt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Le=F._multiDrawStarts,Lt=F._multiDrawCounts,at=F._multiDrawCount,In=Me?$.get(Me).bytesPerElement:1,Mr=ie.get(W).currentProgram.getUniforms();for(let sn=0;sn<at;sn++)Mr.setValue(I,"_gl_DrawID",sn),tt.render(Le[sn]/In,Lt[sn])}else if(F.isInstancedMesh)tt.renderInstances(je,St,F.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Lt=Math.min(G.instanceCount,Le);tt.renderInstances(je,St,Lt)}else tt.render(je,St)};function lt(T,N,G){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Xa(T,N,G),T.side=Ui,T.needsUpdate=!0,Xa(T,N,G),T.side=xn):Xa(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),p=Oe.get(G),p.init(N),x.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==G&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const xe=se[pe];lt(xe,G,F),W.add(xe)}else lt(se,G,F),W.add(se)}),p=x.pop(),W},this.compileAsync=function(T,N,G=null){const W=this.compile(T,N,G);return new Promise(F=>{function se(){if(W.forEach(function(pe){ie.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){F(T);return}setTimeout(se,10)}te.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Pn=null;function jn(T){Pn&&Pn(T)}function df(){ki.stop()}function pf(){ki.start()}const ki=new Hm;ki.setAnimationLoop(jn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(T){Pn=T,Y.setAnimationLoop(T),T===null?ki.stop():ki.start()},Y.addEventListener("sessionstart",df),Y.addEventListener("sessionend",pf),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,N,R),p=Oe.get(T,x.length),p.init(N),x.push(p),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(be),de=this.localClippingEnabled,j=re.init(this.clippingPlanes,de),m=Ce.get(T,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Wl(se,N,-1/0,_.sortObjects)}Wl(T,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,he),$e=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,$e&&De.addToRenderList(m,T),this.info.render.frame++,j===!0&&re.beginShadows();const G=p.state.shadowsArray;ve.render(G,T,N),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const se=N.cameras;if(F.length>0)for(let pe=0,xe=se.length;pe<xe;pe++){const Me=se[pe];gf(W,F,T,Me)}$e&&De.render(T);for(let pe=0,xe=se.length;pe<xe;pe++){const Me=se[pe];mf(m,T,Me,Me.viewport)}}else F.length>0&&gf(W,F,T,N),$e&&De.render(T),mf(m,T,N);R!==null&&w===0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,N),ft.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],j===!0&&re.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Wl(T,N,G,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);const pe=Z.update(T),xe=T.material;xe.visible&&m.push(T,pe,xe,G,Ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const pe=Z.update(T),xe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ae.copy(pe.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(xe)){const Me=pe.groups;for(let He=0,ze=Me.length;He<ze;He++){const Pe=Me[He],je=xe[Pe.materialIndex];je&&je.visible&&m.push(T,pe,je,G,Ae.z,Pe)}}else xe.visible&&m.push(T,pe,xe,G,Ae.z,null)}}const se=T.children;for(let pe=0,xe=se.length;pe<xe;pe++)Wl(se[pe],N,G,W)}function mf(T,N,G,W){const F=T.opaque,se=T.transmissive,pe=T.transparent;p.setupLightsView(G),j===!0&&re.setGlobalState(_.clippingPlanes,G),W&&K.viewport(C.copy(W)),F.length>0&&Wa(F,N,G),se.length>0&&Wa(se,N,G),pe.length>0&&Wa(pe,N,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function gf(T,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new cr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ia:$n,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const se=p.state.transmissionRenderTarget[W.id],pe=W.viewport||C;se.setSize(pe.z*_.transmissionResolutionScale,pe.w*_.transmissionResolutionScale);const xe=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(B),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),$e&&De.render(G);const Me=_.toneMapping;_.toneMapping=Ri;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),j===!0&&re.setGlobalState(_.clippingPlanes,W),Wa(T,G,W),P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se),te.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Pe=0,je=N.length;Pe<je;Pe++){const st=N[Pe],St=st.object,yt=st.geometry,tt=st.material,Le=st.group;if(tt.side===xn&&St.layers.test(W.layers)){const Lt=tt.side;tt.side=tn,tt.needsUpdate=!0,_f(St,G,W,yt,tt,Le),tt.side=Lt,tt.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se))}_.setRenderTarget(xe),_.setClearColor(B,k),He!==void 0&&(W.viewport=He),_.toneMapping=Me}function Wa(T,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,se=T.length;F<se;F++){const pe=T[F],xe=pe.object,Me=pe.geometry,He=pe.group;let ze=pe.material;ze.allowOverride===!0&&W!==null&&(ze=W),xe.layers.test(G.layers)&&_f(xe,N,G,Me,ze,He)}}function _f(T,N,G,W,F,se){T.onBeforeRender(_,N,G,W,F,se),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(_,N,G,W,T,se),F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,_.renderBufferDirect(G,N,W,F,T,se),F.side=Ui,F.needsUpdate=!0,_.renderBufferDirect(G,N,W,F,T,se),F.side=xn):_.renderBufferDirect(G,N,W,F,T,se),T.onAfterRender(_,N,G,W,F,se)}function Xa(T,N,G){N.isScene!==!0&&(N=ot);const W=ie.get(T),F=p.state.lights,se=p.state.shadowsArray,pe=F.state.version,xe=Se.getParameters(T,F.state,se,N,G),Me=Se.getProgramCacheKey(xe);let He=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",Xe),He=new Map,W.programs=He);let ze=He.get(Me);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===pe)return xf(T,xe),ze}else xe.uniforms=Se.getUniforms(T),T.onBeforeCompile(xe,_),ze=Se.acquireProgram(xe,Me),He.set(Me,ze),W.uniforms=xe.uniforms;const Pe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=re.uniform),xf(T,xe),W.needsLights=A_(T),W.lightsStateVersion=pe,W.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function vf(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Zo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function xf(T,N){const G=ie.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function E_(T,N,G,W,F){N.isScene!==!0&&(N=ot),P.resetTextureUnits();const se=N.fog,pe=W.isMeshStandardMaterial?N.environment:null,xe=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:es,Me=(W.isMeshStandardMaterial?z:b).get(W.envMap||pe),He=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,st=!!G.morphAttributes.color;let St=Ri;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=_.toneMapping);const yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=yt!==void 0?yt.length:0,Le=ie.get(W),Lt=p.state.lights;if(j===!0&&(de===!0||T!==M)){const Vt=T===M&&W.id===S;re.setState(W,T,Vt)}let at=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Lt.state.version||Le.outputColorSpace!==xe||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==Me||W.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==ze||Le.morphTargets!==Pe||Le.morphNormals!==je||Le.morphColors!==st||Le.toneMapping!==St||Le.morphTargetsCount!==tt)&&(at=!0):(at=!0,Le.__version=W.version);let In=Le.currentProgram;at===!0&&(In=Xa(W,N,F));let Mr=!1,sn=!1,Rs=!1;const mt=In.getUniforms(),pn=Le.uniforms;if(K.useProgram(In.program)&&(Mr=!0,sn=!0,Rs=!0),W.id!==S&&(S=W.id,sn=!0),Mr||M!==T){K.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),w0(oe),E0(oe),mt.setValue(I,"projectionMatrix",oe)):mt.setValue(I,"projectionMatrix",T.projectionMatrix),mt.setValue(I,"viewMatrix",T.matrixWorldInverse);const $t=mt.map.cameraPosition;$t!==void 0&&$t.setValue(I,Fe.setFromMatrixPosition(T.matrixWorld)),ae.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,sn=!0,Rs=!0)}if(F.isSkinnedMesh){mt.setOptional(I,F,"bindMatrix"),mt.setOptional(I,F,"bindMatrixInverse");const Vt=F.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),mt.setValue(I,"boneTexture",Vt.boneTexture,P))}F.isBatchedMesh&&(mt.setOptional(I,F,"batchingTexture"),mt.setValue(I,"batchingTexture",F._matricesTexture,P),mt.setOptional(I,F,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",F._indirectTexture,P),mt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",F._colorsTexture,P));const mn=G.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ke.update(F,G,In),(sn||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,mt.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pn.envMap.value=Me,pn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),sn&&(mt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&T_(pn,Rs),se&&W.fog===!0&&fe.refreshFogUniforms(pn,se),fe.refreshMaterialUniforms(pn,W,V,X,p.state.transmissionRenderTarget[T.id]),Zo.upload(I,vf(Le),pn,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zo.upload(I,vf(Le),pn,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(I,"center",F.center),mt.setValue(I,"modelViewMatrix",F.modelViewMatrix),mt.setValue(I,"normalMatrix",F.normalMatrix),mt.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Vt=W.uniformsGroups;for(let $t=0,Xl=Vt.length;$t<Xl;$t++){const Hi=Vt[$t];D.update(Hi,In),D.bind(Hi,In)}}return In}function T_(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function A_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,G){const W=ie.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ie.get(T.texture).__webglTexture=N,ie.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const G=ie.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const R_=I.createFramebuffer();this.setRenderTarget=function(T,N=0,G=0){R=T,A=N,w=G;let W=!0,F=null,se=!1,pe=!1;if(T){const Me=ie.get(T);if(Me.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Me.__hasExternalTextures)P.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(Me.__boundDepthTexture!==Pe){if(Pe!==null&&ie.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(pe=!0);const ze=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?F=ze[N][G]:F=ze[N],se=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?F=ie.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[G]:F=ze,C.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else C.copy(ce).multiplyScalar(V).floor(),U.copy(Re).multiplyScalar(V).floor(),O=Ne;if(G!==0&&(F=R_),K.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&K.drawBuffers(T,F),K.viewport(C),K.scissor(U),K.setScissorTest(O),se){const Me=ie.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,G)}else if(pe){const Me=ie.get(T.texture),He=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,G,He)}else if(T!==null&&G!==0){const Me=ie.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(T,N,G,W,F,se,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){K.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Me=T.texture,He=Me.format,ze=Me.type;if(!ae.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&G>=0&&G<=T.height-F&&I.readPixels(N,G,W,F,Ze.convert(He),Ze.convert(ze),se)}finally{const Me=R!==null?ie.get(R).__webglFramebuffer:null;K.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,N,G,W,F,se,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(N>=0&&N<=T.width-W&&G>=0&&G<=T.height-F){K.bindFramebuffer(I.FRAMEBUFFER,xe);const Me=T.texture,He=Me.format,ze=Me.type;if(!ae.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(N,G,W,F,Ze.convert(He),Ze.convert(ze),0);const je=R!==null?ie.get(R).__webglFramebuffer:null;K.bindFramebuffer(I.FRAMEBUFFER,je);const st=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await b0(I,st,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Pe),I.deleteSync(st),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,G=0){const W=Math.pow(2,-G),F=Math.floor(T.image.width*W),se=Math.floor(T.image.height*W),pe=N!==null?N.x:0,xe=N!==null?N.y:0;P.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,pe,xe,F,se),K.unbindTexture()};const C_=I.createFramebuffer(),P_=I.createFramebuffer();this.copyTextureToTexture=function(T,N,G=null,W=null,F=0,se=null){se===null&&(F!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let pe,xe,Me,He,ze,Pe,je,st,St;const yt=T.isCompressedTexture?T.mipmaps[se]:T.image;if(G!==null)pe=G.max.x-G.min.x,xe=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,He=G.min.x,ze=G.min.y,Pe=G.isBox3?G.min.z:0;else{const mn=Math.pow(2,-F);pe=Math.floor(yt.width*mn),xe=Math.floor(yt.height*mn),T.isDataArrayTexture?Me=yt.depth:T.isData3DTexture?Me=Math.floor(yt.depth*mn):Me=1,He=0,ze=0,Pe=0}W!==null?(je=W.x,st=W.y,St=W.z):(je=0,st=0,St=0);const tt=Ze.convert(N.format),Le=Ze.convert(N.type);let Lt;N.isData3DTexture?(P.setTexture3D(N,0),Lt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Lt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const at=I.getParameter(I.UNPACK_ROW_LENGTH),In=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mr=I.getParameter(I.UNPACK_SKIP_PIXELS),sn=I.getParameter(I.UNPACK_SKIP_ROWS),Rs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe);const mt=T.isDataArrayTexture||T.isData3DTexture,pn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const mn=ie.get(T),Vt=ie.get(N),$t=ie.get(mn.__renderTarget),Xl=ie.get(Vt.__renderTarget);K.bindFramebuffer(I.READ_FRAMEBUFFER,$t.__webglFramebuffer),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xl.__webglFramebuffer);for(let Hi=0;Hi<Me;Hi++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(T).__webglTexture,F,Pe+Hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(N).__webglTexture,se,St+Hi)),I.blitFramebuffer(He,ze,pe,xe,je,st,pe,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);K.bindFramebuffer(I.READ_FRAMEBUFFER,null),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||ie.has(T)){const mn=ie.get(T),Vt=ie.get(N);K.bindFramebuffer(I.READ_FRAMEBUFFER,C_),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,P_);for(let $t=0;$t<Me;$t++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,F,Pe+$t):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,F),pn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,se,St+$t):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,se),F!==0?I.blitFramebuffer(He,ze,pe,xe,je,st,pe,xe,I.COLOR_BUFFER_BIT,I.NEAREST):pn?I.copyTexSubImage3D(Lt,se,je,st,St+$t,He,ze,pe,xe):I.copyTexSubImage2D(Lt,se,je,st,He,ze,pe,xe);K.bindFramebuffer(I.READ_FRAMEBUFFER,null),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Lt,se,je,st,St,pe,xe,Me,tt,Le,yt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,se,je,st,St,pe,xe,Me,tt,yt.data):I.texSubImage3D(Lt,se,je,st,St,pe,xe,Me,tt,Le,yt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,je,st,pe,xe,tt,Le,yt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,je,st,yt.width,yt.height,tt,yt.data):I.texSubImage2D(I.TEXTURE_2D,se,je,st,pe,xe,tt,Le,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,at),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,In),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mr),I.pixelStorei(I.UNPACK_SKIP_ROWS,sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rs),se===0&&N.generateMipmaps&&I.generateMipmap(Lt),K.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G=null,W=null,F=0){return qo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,G,W,F)},this.initRenderTarget=function(T){ie.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,K.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const tp={type:"change"},Hu={type:"start"},qm={type:"end"},Lo=new hs,np=new li,dw=Math.cos(70*y0.DEG2RAD),wt=new L,Kt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dc=1e-6;class pw extends Cx{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Oi,this._lastTargetPosition=new L,this._quat=new Oi().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cd,this._sphericalDelta=new Cd,this._scale=1,this._panOffset=new L,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new L,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gw.bind(this),this._onPointerDown=mw.bind(this),this._onPointerUp=_w.bind(this),this._onContextMenu=ww.bind(this),this._onMouseWheel=yw.bind(this),this._onKeyDown=Mw.bind(this),this._onTouchStart=Sw.bind(this),this._onTouchMove=bw.bind(this),this._onMouseDown=vw.bind(this),this._onMouseMove=xw.bind(this),this._interceptControlDown=Ew.bind(this),this._interceptControlUp=Tw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tp),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),r<-Math.PI?r+=Kt:r>Math.PI&&(r-=Kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<dw?this.object.lookAt(this.target):(np.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(np,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dc||this._lastTargetPosition.distanceToSquared(this.target)>Dc?(this.dispatchEvent(tp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _w(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qm),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case Yr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case Yr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Hu)}function xw(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yw(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(Hu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qm))}function Mw(n){this.enabled!==!1&&this._handleKeyDown(n)}function Sw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Hu)}function bw(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function ww(n){this.enabled!==!1&&n.preventDefault()}function Ew(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Aw=16711680,Uc=65280,Rw=.2,Cw=16776960,Pw=6,Iw=3,Lw=.5,ir=.01,ma={Classroom:16734003,Lab:3373823,"Seminar Hall":3407703,"Faculty Cabin":16724954,Ground:8947848,"Ladies Toilet":16724787,"Men's Toilet":3394815,Staircase:16777011,Lift:10526880,"Common Area":9253887,Cafeteria:16747827,Office:3407834,Unspecified:11184810},Dw=8421376,Zm=128,Nc=document.getElementById("statusBox"),Uw=document.getElementById("mousePositionBox"),ip=new Ol,Oc=new J;function Ue(n){const e=new Date().toLocaleTimeString();Nc.textContent+=`
[${e}] ${n}`,Nc.scrollTop=Nc.scrollHeight}function kh(n,e,t){const i=t.getBoundingClientRect();Oc.x=(n.clientX-i.left)/i.width*2-1,Oc.y=-((n.clientY-i.top)/i.height)*2+1,ip.setFromCamera(Oc,e);const r=new li(new L(0,0,1),-.01),s=new L;return ip.ray.intersectPlane(r,s)||null}function Nw(n){n&&(Uw.textContent=`X: ${n.x.toFixed(2)}, Y: ${n.y.toFixed(2)}`)}let Hh=null;function Ow(n){Hh=n}class Fw{constructor(e,t,i,r,s=0,a=[]){this.viewer=e,this.scene=t,this.camera=i,this.canvas=r,this.levelZ=s,this.isDrawing=!1,this.vertices=[],this.previewLine=null,this.polygonMesh=null,this.previewPolygonMesh=null,this.snapHighlight=null,this.raycaster=new Ol,this.mouse=new J,this.snapPoints=a,this.originalCursor=r.style.cursor,this._onClick=this.onClick.bind(this),this._onKeyDown=this.onKeyDown.bind(this),this._onContextMenu=this.onContextMenu.bind(this),this.addEventListeners()}addEventListeners(){this.canvas.addEventListener("click",this._onClick),window.addEventListener("keydown",this._onKeyDown),this.canvas.addEventListener("contextmenu",this._onContextMenu)}removeEventListeners(){this.canvas.removeEventListener("click",this._onClick),window.removeEventListener("keydown",this._onKeyDown),this.canvas.removeEventListener("contextmenu",this._onContextMenu)}onContextMenu(e){this.isDrawing&&e.preventDefault()}enableDrawing(){if(this.isDrawing){Ue("[PolygonDrawer] Already drawing. Complete or cancel current drawing first.");return}this.cancelDrawing(),this.isDrawing=!0,this.vertices=[],this._createPreviewLine(),this.canvas.style.cursor="crosshair",Ue("[PolygonDrawer] Drawing started. Left-click to add points. Enter to finish. Escape to cancel. Ctrl+Z to undo last point."),this.viewer.render()}cancelDrawing(){this.isDrawing&&(this.isDrawing=!1,this.vertices=[],this._cleanupMeshes(),this.canvas.style.cursor=this.originalCursor,Ue("[PolygonDrawer] Drawing cancelled."),this.viewer.render())}onClick(e){if(!this.isDrawing||e.button!==0)return;e.stopPropagation(),e.preventDefault();let t=kh(e,this.camera,this.canvas);if(!t){console.warn("[PolygonDrawer] Could not get a valid world point from click.");return}const i=this._getDynamicSnapThresholdWorld();if(this.snapPoints&&this.snapPoints.length>0){for(const r of this.snapPoints)if(this._isNear(t,r,i)){t.copy(r);break}}if(this.vertices.push(t.clone()),this._updatePreviewLine(),this._updatePreviewPolygon(),Ue(`[PolygonDrawer] Added point (${t.x.toFixed(2)}, ${t.y.toFixed(2)})`),this.vertices.length>=3){const r=this.vertices[0];if(this._isNear(t,r,i*2)){this.vertices.pop(),this.vertices.push(r.clone()),Ue("[PolygonDrawer] Polygon closed by clicking first point."),this.completePolygon();return}}this.viewer.render()}onMove(e){if(!this.isDrawing)return;const t=kh(e,this.camera,this.canvas);if(!t)return;let i=t.clone(),r=!1;const s=this._getDynamicSnapThresholdWorld(),a=this._getDynamicHighlightRadiusWorld();if(this.snapPoints&&this.snapPoints.length>0){for(const c of this.snapPoints)if(this._isNear(t,c,s)){i.copy(c),r=!0,this._showSnapHighlight(c,a);break}}!r&&this.snapHighlight&&(this.snapHighlight.visible=!1);const o=[...this.vertices];this.vertices.length>0&&o.push(i),this.previewLine.geometry&&this.previewLine.geometry.dispose(),this.previewLine.geometry=new Qe().setFromPoints(o),this._updatePreviewPolygon(i),this.viewer.render()}onKeyDown(e){this.isDrawing&&(e.key==="Escape"?this.cancelDrawing():e.key==="Enter"?this.completePolygon():e.key==="z"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.undoLastPoint()))}undoLastPoint(){if(!this.isDrawing||this.vertices.length===0){Ue("[PolygonDrawer] No points to undo.");return}const e=this.vertices.pop();Ue(`[PolygonDrawer] Undid point (${e.x.toFixed(2)}, ${e.y.toFixed(2)}). Points remaining: ${this.vertices.length}`),this._updatePreviewLine(),this._updatePreviewPolygon(),this.viewer.render(),this.vertices.length===0&&(this.cancelDrawing(),Ue("[PolygonDrawer] All points undone. Drawing cancelled."))}completePolygon(){if(this.isDrawing=!1,this._cleanupMeshes(),this.canvas.style.cursor=this.originalCursor,Hh&&(Hh.enabled=!0),this.vertices.length===0){Ue("[PolygonDrawer] No points drawn. Nothing to complete.");return}let e=null,t=new L;if(this.vertices.length===1){const i=new Qe().setFromPoints(this.vertices),r=new Su({color:Uc,size:Lw});e=new Sm(i,r),t.copy(this.vertices[0]),Ue(`[PolygonDrawer] Completed a single point at (${this.vertices[0].x.toFixed(2)}, ${this.vertices[0].y.toFixed(2)}).`)}else if(this.vertices.length===2){const i=new Qe().setFromPoints(this.vertices),r=new ca({color:Uc});e=new ha(i,r),t.addVectors(this.vertices[0],this.vertices[1]).multiplyScalar(.5),Ue("[PolygonDrawer] Completed a line segment with 2 points.")}else{const i=new is;this.vertices.forEach((h,u)=>{u===0?i.moveTo(h.x,h.y):i.lineTo(h.x,h.y)});const r=new ss(i),s=new cl({color:ma.Unspecified,transparent:!0,side:xn,depthWrite:!1});e=new Et(r,s);let a=0,o=0;this.vertices.forEach(h=>{a+=h.x,o+=h.y});const c=a/this.vertices.length,l=o/this.vertices.length;t.set(c,l,this.levelZ),Ue(`[PolygonDrawer] Polygon completed with ${this.vertices.length} vertices.`)}e&&(e.position.z=this.levelZ,this.scene.add(e),this.polygonMesh=e,this.viewer.render(),this.vertices.length>=3?this.viewer.showRoomModal(e,t):Ue("[PolygonDrawer] Hotspot modal only appears for polygons (3+ points)."))}_createPreviewLine(){const e=new Qe,t=new ca({color:Aw,depthWrite:!1});this.previewLine=new ha(e,t),this.scene.add(this.previewLine)}_updatePreviewLine(){this.previewLine&&(this.previewLine.geometry&&this.previewLine.geometry.dispose(),this.vertices.length>0?this.previewLine.geometry=new Qe().setFromPoints(this.vertices):this.previewLine.geometry=new Qe)}_updatePreviewPolygon(e=null){if(this.vertices.length<2){this.previewPolygonMesh&&(this._cleanupMesh(this.previewPolygonMesh),this.previewPolygonMesh=null);return}const t=[...this.vertices];if(e&&t.push(e),t.length<3){this.previewPolygonMesh&&(this._cleanupMesh(this.previewPolygonMesh),this.previewPolygonMesh=null);return}const i=new is;t.forEach((a,o)=>{o===0?i.moveTo(a.x,a.y):i.lineTo(a.x,a.y)});const r=new ss(i),s=new cl({color:Uc,opacity:Rw,transparent:!0,side:xn,depthWrite:!1});this.previewPolygonMesh?(this.previewPolygonMesh.geometry.dispose(),this.previewPolygonMesh.geometry=r):(this.previewPolygonMesh=new Et(r,s),this.previewPolygonMesh.position.z=this.levelZ,this.scene.add(this.previewPolygonMesh)),this.viewer.render()}_getDynamicSnapThresholdWorld(){const t=(this.camera.top-this.camera.bottom)/(this.canvas.clientHeight*this.camera.zoom);return Iw*t}_getDynamicHighlightRadiusWorld(){const t=(this.camera.top-this.camera.bottom)/(this.canvas.clientHeight*this.camera.zoom);return Pw*t}_showSnapHighlight(e,t){this.snapHighlight?this.snapHighlight.geometry.parameters.radius!==t&&(this.snapHighlight.geometry.dispose(),this.snapHighlight.geometry=new ua(t,32)):(this.snapHighlight=new Et(new ua(t,32),new Il({color:Cw,transparent:!0,opacity:.8,depthWrite:!1})),this.scene.add(this.snapHighlight)),this.snapHighlight.position.set(e.x,e.y,this.levelZ+.1),this.snapHighlight.visible=!0,this.viewer.render()}_isNear(e,t,i){const r=e.x-t.x,s=e.y-t.y;return r*r+s*s<i*i}setSnapPoints(e){this.snapPoints=e,Ue(`[PolygonDrawer] Updated snap points: ${e.length} available.`)}_cleanupMesh(e){e&&(e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(r=>{r.dispose()})}),e.parent?e.parent.remove(e):scene.remove(e))}_cleanupMeshes(){this._cleanupMesh(this.previewLine),this.previewLine=null,this._cleanupMesh(this.previewPolygonMesh),this.previewPolygonMesh=null,this._cleanupMesh(this.snapHighlight),this.snapHighlight=null}dispose(){this.removeEventListeners(),this.cancelDrawing(),Ue("[PolygonDrawer] Instance disposed.")}}const Ym=document.getElementById("roomModal"),Vh=document.getElementById("roomIdInput"),$m=document.getElementById("roomZLevelInput"),Gn=document.getElementById("roomTypeInput"),Ks=document.getElementById("facultyNameInput"),rp=document.getElementById("facultyNameLabel"),pl=document.getElementById("customColorInput"),sp=document.getElementById("customColorLabel"),Qs=document.getElementById("customTypeInput"),ap=document.getElementById("customTypeLabel"),zl=document.getElementById("opacityInput"),Jm=document.getElementById("opacityValue"),zw=document.getElementById("modalSaveButton"),Bw=document.getElementById("modalDeleteButton"),Km=document.getElementById("roomListContainer"),Kr=document.querySelector("#roomListTable tbody"),kw=document.getElementById("closeRoomsListButton"),ml=document.getElementById("hotspotInfoBox"),It=[];let cn=null,Qm=null,Bl=null,zi=null,jm=null,Vu=null;function Gu(n,e,t,i){Bl=n,zi=e,jm=t,Vu=i,Hw()}function Hw(){Gn.addEventListener("change",eg),zl.addEventListener("input",Vw),zw.addEventListener("click",Gw),Bw.addEventListener("click",Ww),kw.addEventListener("click",Kw),Kr.addEventListener("click",Xw)}function eg(){Gn.value==="Faculty Cabin"?(Ks.style.display="block",rp.style.display="block"):(Ks.style.display="none",rp.style.display="none",Ks.value=""),Gn.value==="Unspecified"?(pl.style.display="block",sp.style.display="block",Qs.style.display="block",ap.style.display="block"):(pl.style.display="none",sp.style.display="none",Qs.style.display="none",ap.style.display="none",Qs.value="")}function Vw(){Jm.textContent=parseFloat(zl.value).toFixed(2)}function Gw(){const n=Vh.value.trim(),e=parseFloat($m.value);let t=Gn.value;const i=Ks.value.trim(),r=pl.value,s=Qs.value.trim(),a=parseFloat(zl.value);if(console.log("Saving opacity:",a),t==="Unspecified"&&s&&(t=s),!n){alert("Room ID cannot be empty!");return}if(isNaN(e)){alert("Please enter a valid number for Z-Level.");return}if(isNaN(a)||a<0||a>1){alert("Please enter a valid opacity between 0 and 1.");return}if(It.some(o=>o.roomId.toLowerCase()===n.toLowerCase())){alert("Room ID already exists. Please enter a unique ID.");return}if(cn){const o=cn.geometry.getAttribute("position"),c=[];for(let h=0;h<o.count;h++)c.push({x:o.getX(h),y:o.getY(h)});cn.position.z=e;let l;Gn.value==="Unspecified"&&r?l=new Te(r).getHex():l=ma[Gn.value]||ma.Unspecified,cn.material.color.set(l),cn.material.transparent=a<1,cn.material.opacity=a,cn.material.depthWrite=!1,cn.material.needsUpdate=!0,It.push({roomId:n,threeJsUuid:cn.uuid,visible:!0,zLevel:e,roomType:t,facultyName:Gn.value==="Faculty Cabin"?i:null,customColor:Gn.value==="Unspecified"?r:null,opacity:a,vertices:c,originalType:Gn.value}),Ue(`✅ Hotspot "${n}" (${t}) saved with Z:${e}, Opacity:${a.toFixed(2)}.`),Wu(),Gh(),zi()}else alert("Error: Missing mesh. This should not happen."),Gh()}function Ww(){cn&&(Vu(cn),Ue("🗑️ New hotspot discarded.")),Gh(),zi()}async function Xw(n){const e=n.target.closest("tr");if(!e)return;const t=e.getAttribute("three-guid");if(!t)return;const i=It.find(a=>a.threeJsUuid===t);if(!i)return;const r=n.target.closest('input[type="checkbox"]');if(r){qw(i,r.checked);return}if(n.target.closest(".delete-room-button")){Zw(t);return}Yw(i)}function qw(n,e){const t=Bl.getObjectByProperty("uuid",n.threeJsUuid);t?(t.visible=e,n.visible=e,e?(jm(t,3),Ue(`👀 Displaying hotspot "${n.roomId}". Camera moved.`)):Ue(`🙈 Hiding hotspot "${n.roomId}".`),zi()):Ue(`⚠️ Mesh for hotspot "${n.roomId}" not found in scene.`)}function Zw(n){const e=It.findIndex(t=>t.threeJsUuid===n);if(e!==-1){const t=It[e],i=Bl.getObjectByProperty("uuid",t.threeJsUuid);i&&Vu(i),It.splice(e,1),Ue(`🗑️ Hotspot "${t.roomId}" (UUID: ${n}) deleted.`),Wu(),Ua(),zi()}}function Yw(n){Kr.querySelectorAll("tr").forEach(i=>i.classList.remove("selected-room"));const t=Kr.querySelector(`tr[three-guid="${n.threeJsUuid}"]`);t&&t.classList.add("selected-room"),ga(n.threeJsUuid,Zm),Xu(n),Qm=n.threeJsUuid,zi()}function $w(n,e){cn=n,Vh.value="",$m.value=ir,Gn.value="Unspecified",Ks.value="",pl.value="#00FF00",Qs.value="",zl.value=.5,Jm.textContent="0.50",eg(),Ym.style.display="flex",Vh.focus(),Ue("✏️ Enter Room ID for the new hotspot.")}function Gh(){Ym.style.display="none",cn=null,Ue("✅ Room ID input cancelled or saved.")}function Jw(){Km.style.display="flex",Ue("📋 Displaying Room Hotspots List."),Wu()}function Kw(){Km.style.display="none",Ue("📋 Room Hotspots List closed.")}function Wu(){if(Kr.innerHTML="",It.length===0){const e=Kr.insertRow().insertCell();e.colSpan=6,e.textContent="No rooms/hotspots defined yet.",e.style.textAlign="center",e.style.fontStyle="italic",e.style.color="#888";return}It.forEach(n=>{const e=Kr.insertRow();e.setAttribute("three-guid",n.threeJsUuid),Qm===n.threeJsUuid&&e.classList.add("selected-room");const t=e.insertCell(),i=document.createElement("input");i.type="checkbox",i.checked=n.visible,t.appendChild(i);const r=e.insertCell();r.textContent=n.roomId;const s=e.insertCell();s.textContent=n.roomType||"Unspecified";const a=e.insertCell();n.originalType==="Faculty Cabin"&&n.facultyName?a.textContent=`Faculty: ${n.facultyName}`:n.originalType==="Unspecified"&&n.customColor?a.innerHTML=`<span style="display:inline-block; width:15px; height:15px; background-color:${n.customColor}; border:1px solid #555; vertical-align:middle; margin-right:5px; border-radius:3px;"></span>Custom`:n.originalType==="Unspecified"&&n.roomType&&n.roomType!=="Unspecified"?a.textContent=`Type: ${n.roomType}`:a.textContent="";const o=e.insertCell();o.textContent=n.threeJsUuid;const c=e.insertCell(),l=document.createElement("button");l.textContent="Delete",l.className="delete-room-button",c.appendChild(l)}),zi()}let Ji=null,Do=new Te;function ga(n,e){if(Ji&&Ji.material&&(Array.isArray(Ji.material)?Ji.material.forEach(t=>t.emissive.set(Do)):Ji.material.emissive.set(Do)),Ji=null,n){const t=Bl.getObjectByProperty("uuid",n);t&&t.material&&(Ji=t,Array.isArray(t.material)?t.material.forEach(i=>{Do.copy(i.emissive),i.emissive.set(e)}):(Do.copy(t.material.emissive),t.material.emissive.set(e)))}zi()}function Xu(n){if(n){ml.style.display="block";let e=`<b>Room ID:</b> ${n.roomId}<br/>`;e+=`<b>Type:</b> ${n.roomType||"Unspecified"}<br/>`,n.originalType==="Faculty Cabin"&&n.facultyName?e+=`<b>Faculty:</b> ${n.facultyName}`:n.originalType==="Unspecified"&&n.customColor?e+=`<b>Color:</b> <span style="display:inline-block; width:15px; height:15px; background-color:${n.customColor}; border:1px solid #555; vertical-align:middle; border-radius:3px;"></span> ${n.customColor}`:n.originalType==="Unspecified"&&n.roomType&&n.roomType!=="Unspecified"&&(e+=`<b>Custom Type:</b> ${n.roomType}`),e+=`<br/><b>Opacity:</b> ${n.opacity.toFixed(2)}`,ml.innerHTML=e}else Ua()}function Ua(){ml.style.display="none",ml.innerHTML=""}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Qw=4,op=0,lp=1,jw=2;function gs(n){let e=n.length;for(;--e>=0;)n[e]=0}const e1=0,tg=1,t1=2,n1=3,i1=258,qu=29,Na=256,_a=Na+1+qu,Qr=30,Zu=19,ng=2*_a+1,rr=15,Fc=16,r1=7,Yu=256,ig=16,rg=17,sg=18,Wh=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Yo=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),s1=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),ag=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a1=512,ci=new Array((_a+2)*2);gs(ci);const js=new Array(Qr*2);gs(js);const va=new Array(a1);gs(va);const xa=new Array(i1-n1+1);gs(xa);const $u=new Array(qu);gs($u);const gl=new Array(Qr);gs(gl);function zc(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let og,lg,cg;function Bc(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const hg=n=>n<256?va[n]:va[256+(n>>>7)],ya=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},en=(n,e,t)=>{n.bi_valid>Fc-t?(n.bi_buf|=e<<n.bi_valid&65535,ya(n,n.bi_buf),n.bi_buf=e>>Fc-n.bi_valid,n.bi_valid+=t-Fc):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Xn=(n,e,t)=>{en(n,t[e*2],t[e*2+1])},ug=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},o1=n=>{n.bi_valid===16?(ya(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},l1=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,h,u,f,d,g,v=0;for(f=0;f<=rr;f++)n.bl_count[f]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<ng;l++)h=n.heap[l],f=t[t[h*2+1]*2+1]+1,f>c&&(f=c,v++),t[h*2+1]=f,!(h>i)&&(n.bl_count[f]++,d=0,h>=o&&(d=a[h-o]),g=t[h*2],n.opt_len+=g*(f+d),s&&(n.static_len+=g*(r[h*2+1]+d)));if(v!==0){do{for(f=c-1;n.bl_count[f]===0;)f--;n.bl_count[f]--,n.bl_count[f+1]+=2,n.bl_count[c]--,v-=2}while(v>0);for(f=c;f!==0;f--)for(h=n.bl_count[f];h!==0;)u=n.heap[--l],!(u>i)&&(t[u*2+1]!==f&&(n.opt_len+=(f-t[u*2+1])*t[u*2],t[u*2+1]=f),h--)}},fg=(n,e,t)=>{const i=new Array(rr+1);let r=0,s,a;for(s=1;s<=rr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=ug(i[o]++,o))}},c1=()=>{let n,e,t,i,r;const s=new Array(rr+1);for(t=0,i=0;i<qu-1;i++)for($u[i]=t,n=0;n<1<<Wh[i];n++)xa[t++]=i;for(xa[t-1]=i,r=0,i=0;i<16;i++)for(gl[i]=r,n=0;n<1<<Yo[i];n++)va[r++]=i;for(r>>=7;i<Qr;i++)for(gl[i]=r<<7,n=0;n<1<<Yo[i]-7;n++)va[256+r++]=i;for(e=0;e<=rr;e++)s[e]=0;for(n=0;n<=143;)ci[n*2+1]=8,n++,s[8]++;for(;n<=255;)ci[n*2+1]=9,n++,s[9]++;for(;n<=279;)ci[n*2+1]=7,n++,s[7]++;for(;n<=287;)ci[n*2+1]=8,n++,s[8]++;for(fg(ci,_a+1,s),n=0;n<Qr;n++)js[n*2+1]=5,js[n*2]=ug(n,5);og=new zc(ci,Wh,Na+1,_a,rr),lg=new zc(js,Yo,0,Qr,rr),cg=new zc(new Array(0),s1,0,Zu,r1)},dg=n=>{let e;for(e=0;e<_a;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Qr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Zu;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Yu*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},pg=n=>{n.bi_valid>8?ya(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},cp=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},kc=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&cp(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!cp(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},hp=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Xn(n,r,e):(a=xa[r],Xn(n,a+Na+1,e),o=Wh[a],o!==0&&(r-=$u[a],en(n,r,o)),i--,a=hg(i),Xn(n,a,t),o=Yo[a],o!==0&&(i-=gl[a],en(n,i,o)));while(s<n.sym_next);Xn(n,Yu,e)},Xh=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=ng,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)kc(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],kc(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,kc(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],l1(n,e),fg(t,c,n.bl_count)},up=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[ig*2]++):o<=10?n.bl_tree[rg*2]++:n.bl_tree[sg*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},fp=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Xn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Xn(n,s,n.bl_tree),o--),Xn(n,ig,n.bl_tree),en(n,o-3,2)):o<=10?(Xn(n,rg,n.bl_tree),en(n,o-3,3)):(Xn(n,sg,n.bl_tree),en(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},h1=n=>{let e;for(up(n,n.dyn_ltree,n.l_desc.max_code),up(n,n.dyn_dtree,n.d_desc.max_code),Xh(n,n.bl_desc),e=Zu-1;e>=3&&n.bl_tree[ag[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},u1=(n,e,t,i)=>{let r;for(en(n,e-257,5),en(n,t-1,5),en(n,i-4,4),r=0;r<i;r++)en(n,n.bl_tree[ag[r]*2+1],3);fp(n,n.dyn_ltree,e-1),fp(n,n.dyn_dtree,t-1)},f1=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return op;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return lp;for(t=32;t<Na;t++)if(n.dyn_ltree[t*2]!==0)return lp;return op};let dp=!1;const d1=n=>{dp||(c1(),dp=!0),n.l_desc=new Bc(n.dyn_ltree,og),n.d_desc=new Bc(n.dyn_dtree,lg),n.bl_desc=new Bc(n.bl_tree,cg),n.bi_buf=0,n.bi_valid=0,dg(n)},mg=(n,e,t,i)=>{en(n,(e1<<1)+(i?1:0),3),pg(n),ya(n,t),ya(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},p1=n=>{en(n,tg<<1,3),Xn(n,Yu,ci),o1(n)},m1=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===jw&&(n.strm.data_type=f1(n)),Xh(n,n.l_desc),Xh(n,n.d_desc),a=h1(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?mg(n,e,t,i):n.strategy===Qw||s===r?(en(n,(tg<<1)+(i?1:0),3),hp(n,ci,js)):(en(n,(t1<<1)+(i?1:0),3),u1(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),hp(n,n.dyn_ltree,n.dyn_dtree)),dg(n),i&&pg(n)},g1=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(xa[t]+Na+1)*2]++,n.dyn_dtree[hg(e)*2]++),n.sym_next===n.sym_end);var _1=d1,v1=mg,x1=m1,y1=g1,M1=p1,S1={_tr_init:_1,_tr_stored_block:v1,_tr_flush_block:x1,_tr_tally:y1,_tr_align:M1};const b1=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Ma=b1;const w1=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},E1=new Uint32Array(w1()),T1=(n,e,t,i)=>{const r=E1,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Pt=T1,ur={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Oa={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:A1,_tr_stored_block:qh,_tr_flush_block:R1,_tr_tally:Pi,_tr_align:C1}=S1,{Z_NO_FLUSH:Ii,Z_PARTIAL_FLUSH:P1,Z_FULL_FLUSH:I1,Z_FINISH:yn,Z_BLOCK:pp,Z_OK:Dt,Z_STREAM_END:mp,Z_STREAM_ERROR:Zn,Z_DATA_ERROR:L1,Z_BUF_ERROR:Hc,Z_DEFAULT_COMPRESSION:D1,Z_FILTERED:U1,Z_HUFFMAN_ONLY:Uo,Z_RLE:N1,Z_FIXED:O1,Z_DEFAULT_STRATEGY:F1,Z_UNKNOWN:z1,Z_DEFLATED:kl}=Oa,B1=9,k1=15,H1=8,V1=29,G1=256,Zh=G1+1+V1,W1=30,X1=19,q1=2*Zh+1,Z1=15,Je=3,Ei=258,Yn=Ei+Je+1,Y1=32,as=42,Ju=57,Yh=69,$h=73,Jh=91,Kh=103,sr=113,qs=666,qt=1,_s=2,fr=3,vs=4,$1=3,ar=(n,e)=>(n.msg=ur[e],e),gp=n=>n*2-(n>4?9:0),Si=n=>{let e=n.length;for(;--e>=0;)n[e]=0},J1=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let K1=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Li=K1;const ln=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},dn=(n,e)=>{R1(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,ln(n.strm)},it=(n,e)=>{n.pending_buf[n.pending++]=e},Hs=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Qh=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ma(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Pt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},gg=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Yn?n.strstart-(n.w_size-Yn):0,l=n.window,h=n.w_mask,u=n.prev,f=n.strstart+Ei;let d=l[i+a-1],g=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==g||l[r+a-1]!==d||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<f);if(s=Ei-(f-i),i=f-Ei,s>a){if(n.match_start=e,a=s,s>=o)break;d=l[i+a-1],g=l[i+a]}}while((e=u[e&h])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},os=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Yn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),J1(n),i+=e),n.strm.avail_in===0)break;if(t=Qh(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=Je)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=Li(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=Li(n,n.ins_h,n.window[r+Je-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<Je)););}while(n.lookahead<Yn&&n.strm.avail_in!==0)},_g=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==yn||e===Ii||i!==r+n.strm.avail_in)))break;a=e===yn&&i===r+n.strm.avail_in?1:0,qh(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,ln(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Qh(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?vs:e!==Ii&&e!==yn&&n.strm.avail_in===0&&n.strstart===n.block_start?_s:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Qh(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===yn)&&e!==Ii&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===yn&&n.strm.avail_in===0&&i===r?1:0,qh(n,n.block_start,i,a),n.block_start+=i,ln(n.strm)),a?fr:qt)},Vc=(n,e)=>{let t,i;for(;;){if(n.lookahead<Yn){if(os(n),n.lookahead<Yn&&e===Ii)return qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=Je&&(n.ins_h=Li(n,n.ins_h,n.window[n.strstart+Je-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Yn&&(n.match_length=gg(n,t)),n.match_length>=Je)if(i=Pi(n,n.strstart-n.match_start,n.match_length-Je),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Je){n.match_length--;do n.strstart++,n.ins_h=Li(n,n.ins_h,n.window[n.strstart+Je-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Li(n,n.ins_h,n.window[n.strstart+1]);else i=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(dn(n,!1),n.strm.avail_out===0))return qt}return n.insert=n.strstart<Je-1?n.strstart:Je-1,e===yn?(dn(n,!0),n.strm.avail_out===0?fr:vs):n.sym_next&&(dn(n,!1),n.strm.avail_out===0)?qt:_s},Hr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Yn){if(os(n),n.lookahead<Yn&&e===Ii)return qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=Je&&(n.ins_h=Li(n,n.ins_h,n.window[n.strstart+Je-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Je-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Yn&&(n.match_length=gg(n,t),n.match_length<=5&&(n.strategy===U1||n.match_length===Je&&n.strstart-n.match_start>4096)&&(n.match_length=Je-1)),n.prev_length>=Je&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-Je,i=Pi(n,n.strstart-1-n.prev_match,n.prev_length-Je),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=Li(n,n.ins_h,n.window[n.strstart+Je-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Je-1,n.strstart++,i&&(dn(n,!1),n.strm.avail_out===0))return qt}else if(n.match_available){if(i=Pi(n,0,n.window[n.strstart-1]),i&&dn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return qt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Pi(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Je-1?n.strstart:Je-1,e===yn?(dn(n,!0),n.strm.avail_out===0?fr:vs):n.sym_next&&(dn(n,!1),n.strm.avail_out===0)?qt:_s},Q1=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=Ei){if(os(n),n.lookahead<=Ei&&e===Ii)return qt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Je&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Ei;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Ei-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Je?(t=Pi(n,1,n.match_length-Je),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(dn(n,!1),n.strm.avail_out===0))return qt}return n.insert=0,e===yn?(dn(n,!0),n.strm.avail_out===0?fr:vs):n.sym_next&&(dn(n,!1),n.strm.avail_out===0)?qt:_s},j1=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(os(n),n.lookahead===0)){if(e===Ii)return qt;break}if(n.match_length=0,t=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(dn(n,!1),n.strm.avail_out===0))return qt}return n.insert=0,e===yn?(dn(n,!0),n.strm.avail_out===0?fr:vs):n.sym_next&&(dn(n,!1),n.strm.avail_out===0)?qt:_s};function kn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Zs=[new kn(0,0,0,0,_g),new kn(4,4,8,4,Vc),new kn(4,5,16,8,Vc),new kn(4,6,32,32,Vc),new kn(4,4,16,16,Hr),new kn(8,16,32,32,Hr),new kn(8,16,128,128,Hr),new kn(8,32,128,256,Hr),new kn(32,128,258,1024,Hr),new kn(32,258,258,4096,Hr)],eE=n=>{n.window_size=2*n.w_size,Si(n.head),n.max_lazy_match=Zs[n.level].max_lazy,n.good_match=Zs[n.level].good_length,n.nice_match=Zs[n.level].nice_length,n.max_chain_length=Zs[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Je-1,n.match_available=0,n.ins_h=0};function tE(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=kl,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(q1*2),this.dyn_dtree=new Uint16Array((2*W1+1)*2),this.bl_tree=new Uint16Array((2*X1+1)*2),Si(this.dyn_ltree),Si(this.dyn_dtree),Si(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Z1+1),this.heap=new Uint16Array(2*Zh+1),Si(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Zh+1),Si(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Fa=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==as&&e.status!==Ju&&e.status!==Yh&&e.status!==$h&&e.status!==Jh&&e.status!==Kh&&e.status!==sr&&e.status!==qs?1:0},vg=n=>{if(Fa(n))return ar(n,Zn);n.total_in=n.total_out=0,n.data_type=z1;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Ju:e.wrap?as:sr,n.adler=e.wrap===2?0:1,e.last_flush=-2,A1(e),Dt},xg=n=>{const e=vg(n);return e===Dt&&eE(n.state),e},nE=(n,e)=>Fa(n)||n.state.wrap!==2?Zn:(n.state.gzhead=e,Dt),yg=(n,e,t,i,r,s)=>{if(!n)return Zn;let a=1;if(e===D1&&(e=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>B1||t!==kl||i<8||i>15||e<0||e>9||s<0||s>O1||i===8&&a!==1)return ar(n,Zn);i===8&&(i=9);const o=new tE;return n.state=o,o.strm=n,o.status=as,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+Je-1)/Je),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,xg(n)},iE=(n,e)=>yg(n,e,kl,k1,H1,F1),rE=(n,e)=>{if(Fa(n)||e>pp||e<0)return n?ar(n,Zn):Zn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===qs&&e!==yn)return ar(n,n.avail_out===0?Hc:Zn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(ln(n),n.avail_out===0)return t.last_flush=-1,Dt}else if(n.avail_in===0&&gp(e)<=gp(i)&&e!==yn)return ar(n,Hc);if(t.status===qs&&n.avail_in!==0)return ar(n,Hc);if(t.status===as&&t.wrap===0&&(t.status=sr),t.status===as){let r=kl+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Uo||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=Y1),r+=31-r%31,Hs(t,r),t.strstart!==0&&(Hs(t,n.adler>>>16),Hs(t,n.adler&65535)),n.adler=1,t.status=sr,ln(n),t.pending!==0)return t.last_flush=-1,Dt}if(t.status===Ju){if(n.adler=0,it(t,31),it(t,139),it(t,8),t.gzhead)it(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),it(t,t.gzhead.time&255),it(t,t.gzhead.time>>8&255),it(t,t.gzhead.time>>16&255),it(t,t.gzhead.time>>24&255),it(t,t.level===9?2:t.strategy>=Uo||t.level<2?4:0),it(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(it(t,t.gzhead.extra.length&255),it(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Pt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Yh;else if(it(t,0),it(t,0),it(t,0),it(t,0),it(t,0),it(t,t.level===9?2:t.strategy>=Uo||t.level<2?4:0),it(t,$1),t.status=sr,ln(n),t.pending!==0)return t.last_flush=-1,Dt}if(t.status===Yh){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,ln(n),t.pending!==0)return t.last_flush=-1,Dt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=$h}if(t.status===$h){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),ln(n),t.pending!==0)return t.last_flush=-1,Dt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,it(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Jh}if(t.status===Jh){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),ln(n),t.pending!==0)return t.last_flush=-1,Dt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,it(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Kh}if(t.status===Kh){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(ln(n),t.pending!==0))return t.last_flush=-1,Dt;it(t,n.adler&255),it(t,n.adler>>8&255),n.adler=0}if(t.status=sr,ln(n),t.pending!==0)return t.last_flush=-1,Dt}if(n.avail_in!==0||t.lookahead!==0||e!==Ii&&t.status!==qs){let r=t.level===0?_g(t,e):t.strategy===Uo?j1(t,e):t.strategy===N1?Q1(t,e):Zs[t.level].func(t,e);if((r===fr||r===vs)&&(t.status=qs),r===qt||r===fr)return n.avail_out===0&&(t.last_flush=-1),Dt;if(r===_s&&(e===P1?C1(t):e!==pp&&(qh(t,0,0,!1),e===I1&&(Si(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),ln(n),n.avail_out===0))return t.last_flush=-1,Dt}return e!==yn?Dt:t.wrap<=0?mp:(t.wrap===2?(it(t,n.adler&255),it(t,n.adler>>8&255),it(t,n.adler>>16&255),it(t,n.adler>>24&255),it(t,n.total_in&255),it(t,n.total_in>>8&255),it(t,n.total_in>>16&255),it(t,n.total_in>>24&255)):(Hs(t,n.adler>>>16),Hs(t,n.adler&65535)),ln(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Dt:mp)},sE=n=>{if(Fa(n))return Zn;const e=n.state.status;return n.state=null,e===sr?ar(n,L1):Dt},aE=(n,e)=>{let t=e.length;if(Fa(n))return Zn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==as||i.lookahead)return Zn;if(r===1&&(n.adler=Ma(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Si(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,os(i);i.lookahead>=Je;){let c=i.strstart,l=i.lookahead-(Je-1);do i.ins_h=Li(i,i.ins_h,i.window[c+Je-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=Je-1,os(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Je-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,Dt};var oE=iE,lE=yg,cE=xg,hE=vg,uE=nE,fE=rE,dE=sE,pE=aE,mE="pako deflate (from Nodeca project)",ea={deflateInit:oE,deflateInit2:lE,deflateReset:cE,deflateResetKeep:hE,deflateSetHeader:uE,deflate:fE,deflateEnd:dE,deflateSetDictionary:pE,deflateInfo:mE};const gE=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var _E=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)gE(t,i)&&(n[i]=t[i])}}return n},vE=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},Hl={assign:_E,flattenChunks:vE};let Mg=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Mg=!1}const Sa=new Uint8Array(256);for(let n=0;n<256;n++)Sa[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Sa[254]=Sa[254]=1;var xE=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const yE=(n,e)=>{if(e<65534&&n.subarray&&Mg)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var ME=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=Sa[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return yE(s,r)},SE=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Sa[n[t]]>e?t:e},ba={string2buf:xE,buf2string:ME,utf8border:SE};function bE(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Sg=bE;const bg=Object.prototype.toString,{Z_NO_FLUSH:wE,Z_SYNC_FLUSH:EE,Z_FULL_FLUSH:TE,Z_FINISH:AE,Z_OK:_l,Z_STREAM_END:RE,Z_DEFAULT_COMPRESSION:CE,Z_DEFAULT_STRATEGY:PE,Z_DEFLATED:IE}=Oa;function za(n){this.options=Hl.assign({level:CE,method:IE,chunkSize:16384,windowBits:15,memLevel:8,strategy:PE},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Sg,this.strm.avail_out=0;let t=ea.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==_l)throw new Error(ur[t]);if(e.header&&ea.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=ba.string2buf(e.dictionary):bg.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=ea.deflateSetDictionary(this.strm,i),t!==_l)throw new Error(ur[t]);this._dict_set=!0}}za.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?AE:wE,typeof n=="string"?t.input=ba.string2buf(n):bg.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===EE||s===TE)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=ea.deflate(t,s),r===RE)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=ea.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===_l;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};za.prototype.onData=function(n){this.chunks.push(n)};za.prototype.onEnd=function(n){n===_l&&(this.result=Hl.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Ku(n,e){const t=new za(e);if(t.push(n,!0),t.err)throw t.msg||ur[t.err];return t.result}function LE(n,e){return e=e||{},e.raw=!0,Ku(n,e)}function DE(n,e){return e=e||{},e.gzip=!0,Ku(n,e)}var UE=za,NE=Ku,OE=LE,FE=DE,zE={Deflate:UE,deflate:NE,deflateRaw:OE,gzip:FE};const No=16209,BE=16191;var kE=function(e,t){let i,r,s,a,o,c,l,h,u,f,d,g,v,m,p,y,x,_,E,A,w,R,S,M;const C=e.state;i=e.next_in,S=e.input,r=i+(e.avail_in-5),s=e.next_out,M=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=C.dmax,l=C.wsize,h=C.whave,u=C.wnext,f=C.window,d=C.hold,g=C.bits,v=C.lencode,m=C.distcode,p=(1<<C.lenbits)-1,y=(1<<C.distbits)-1;e:do{g<15&&(d+=S[i++]<<g,g+=8,d+=S[i++]<<g,g+=8),x=v[d&p];t:for(;;){if(_=x>>>24,d>>>=_,g-=_,_=x>>>16&255,_===0)M[s++]=x&65535;else if(_&16){E=x&65535,_&=15,_&&(g<_&&(d+=S[i++]<<g,g+=8),E+=d&(1<<_)-1,d>>>=_,g-=_),g<15&&(d+=S[i++]<<g,g+=8,d+=S[i++]<<g,g+=8),x=m[d&y];n:for(;;){if(_=x>>>24,d>>>=_,g-=_,_=x>>>16&255,_&16){if(A=x&65535,_&=15,g<_&&(d+=S[i++]<<g,g+=8,g<_&&(d+=S[i++]<<g,g+=8)),A+=d&(1<<_)-1,A>c){e.msg="invalid distance too far back",C.mode=No;break e}if(d>>>=_,g-=_,_=s-a,A>_){if(_=A-_,_>h&&C.sane){e.msg="invalid distance too far back",C.mode=No;break e}if(w=0,R=f,u===0){if(w+=l-_,_<E){E-=_;do M[s++]=f[w++];while(--_);w=s-A,R=M}}else if(u<_){if(w+=l+u-_,_-=u,_<E){E-=_;do M[s++]=f[w++];while(--_);if(w=0,u<E){_=u,E-=_;do M[s++]=f[w++];while(--_);w=s-A,R=M}}}else if(w+=u-_,_<E){E-=_;do M[s++]=f[w++];while(--_);w=s-A,R=M}for(;E>2;)M[s++]=R[w++],M[s++]=R[w++],M[s++]=R[w++],E-=3;E&&(M[s++]=R[w++],E>1&&(M[s++]=R[w++]))}else{w=s-A;do M[s++]=M[w++],M[s++]=M[w++],M[s++]=M[w++],E-=3;while(E>2);E&&(M[s++]=M[w++],E>1&&(M[s++]=M[w++]))}}else if((_&64)===0){x=m[(x&65535)+(d&(1<<_)-1)];continue n}else{e.msg="invalid distance code",C.mode=No;break e}break}}else if((_&64)===0){x=v[(x&65535)+(d&(1<<_)-1)];continue t}else if(_&32){C.mode=BE;break e}else{e.msg="invalid literal/length code",C.mode=No;break e}break}}while(i<r&&s<o);E=g>>3,i-=E,g-=E<<3,d&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),C.hold=d,C.bits=g};const Vr=15,_p=852,vp=592,xp=0,Gc=1,yp=2,HE=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),VE=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),GE=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),WE=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),XE=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,h=0,u=0,f=0,d=0,g=0,v=0,m=0,p=0,y=0,x,_,E,A,w,R=null,S;const M=new Uint16Array(Vr+1),C=new Uint16Array(Vr+1);let U=null,O,B,k;for(l=0;l<=Vr;l++)M[l]=0;for(h=0;h<i;h++)M[e[t+h]]++;for(d=c,f=Vr;f>=1&&M[f]===0;f--);if(d>f&&(d=f),f===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(u=1;u<f&&M[u]===0;u++);for(d<u&&(d=u),m=1,l=1;l<=Vr;l++)if(m<<=1,m-=M[l],m<0)return-1;if(m>0&&(n===xp||f!==1))return-1;for(C[1]=0,l=1;l<Vr;l++)C[l+1]=C[l]+M[l];for(h=0;h<i;h++)e[t+h]!==0&&(a[C[e[t+h]]++]=h);if(n===xp?(R=U=a,S=20):n===Gc?(R=HE,U=VE,S=257):(R=GE,U=WE,S=0),y=0,h=0,l=u,w=s,g=d,v=0,E=-1,p=1<<d,A=p-1,n===Gc&&p>_p||n===yp&&p>vp)return 1;for(;;){O=l-v,a[h]+1<S?(B=0,k=a[h]):a[h]>=S?(B=U[a[h]-S],k=R[a[h]-S]):(B=96,k=0),x=1<<l-v,_=1<<g,u=_;do _-=x,r[w+(y>>v)+_]=O<<24|B<<16|k|0;while(_!==0);for(x=1<<l-1;y&x;)x>>=1;if(x!==0?(y&=x-1,y+=x):y=0,h++,--M[l]===0){if(l===f)break;l=e[t+a[h]]}if(l>d&&(y&A)!==E){for(v===0&&(v=d),w+=u,g=l-v,m=1<<g;g+v<f&&(m-=M[g+v],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===Gc&&p>_p||n===yp&&p>vp)return 1;E=y&A,r[E]=d<<24|g<<16|w-s|0}}return y!==0&&(r[w+y]=l-v<<24|64<<16|0),o.bits=d,0};var ta=XE;const qE=0,wg=1,Eg=2,{Z_FINISH:Mp,Z_BLOCK:ZE,Z_TREES:Oo,Z_OK:dr,Z_STREAM_END:YE,Z_NEED_DICT:$E,Z_STREAM_ERROR:En,Z_DATA_ERROR:Tg,Z_MEM_ERROR:Ag,Z_BUF_ERROR:JE,Z_DEFLATED:Sp}=Oa,Vl=16180,bp=16181,wp=16182,Ep=16183,Tp=16184,Ap=16185,Rp=16186,Cp=16187,Pp=16188,Ip=16189,vl=16190,ai=16191,Wc=16192,Lp=16193,Xc=16194,Dp=16195,Up=16196,Np=16197,Op=16198,Fo=16199,zo=16200,Fp=16201,zp=16202,Bp=16203,kp=16204,Hp=16205,qc=16206,Vp=16207,Gp=16208,gt=16209,Rg=16210,Cg=16211,KE=852,QE=592,jE=15,eT=jE,Wp=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function tT(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const vr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<Vl||e.mode>Cg?1:0},Pg=n=>{if(vr(n))return En;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=Vl,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(KE),e.distcode=e.distdyn=new Int32Array(QE),e.sane=1,e.back=-1,dr},Ig=n=>{if(vr(n))return En;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,Pg(n)},Lg=(n,e)=>{let t;if(vr(n))return En;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?En:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,Ig(n))},Dg=(n,e)=>{if(!n)return En;const t=new tT;n.state=t,t.strm=n,t.window=null,t.mode=Vl;const i=Lg(n,e);return i!==dr&&(n.state=null),i},nT=n=>Dg(n,eT);let Xp=!0,Zc,Yc;const iT=n=>{if(Xp){Zc=new Int32Array(512),Yc=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(ta(wg,n.lens,0,288,Zc,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;ta(Eg,n.lens,0,32,Yc,0,n.work,{bits:5}),Xp=!1}n.lencode=Zc,n.lenbits=9,n.distcode=Yc,n.distbits=5},Ug=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},rT=(n,e)=>{let t,i,r,s,a,o,c,l,h,u,f,d,g,v,m=0,p,y,x,_,E,A,w,R;const S=new Uint8Array(4);let M,C;const U=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(vr(n)||!n.output||!n.input&&n.avail_in!==0)return En;t=n.state,t.mode===ai&&(t.mode=Wc),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,h=t.bits,u=o,f=c,R=dr;e:for(;;)switch(t.mode){case Vl:if(t.wrap===0){t.mode=Wc;break}for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,S[0]=l&255,S[1]=l>>>8&255,t.check=Pt(t.check,S,2,0),l=0,h=0,t.mode=bp;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=gt;break}if((l&15)!==Sp){n.msg="unknown compression method",t.mode=gt;break}if(l>>>=4,h-=4,w=(l&15)+8,t.wbits===0&&(t.wbits=w),w>15||w>t.wbits){n.msg="invalid window size",t.mode=gt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?Ip:ai,l=0,h=0;break;case bp:for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Sp){n.msg="unknown compression method",t.mode=gt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=gt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,t.check=Pt(t.check,S,2,0)),l=0,h=0,t.mode=wp;case wp:for(;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,S[2]=l>>>16&255,S[3]=l>>>24&255,t.check=Pt(t.check,S,4,0)),l=0,h=0,t.mode=Ep;case Ep:for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,t.check=Pt(t.check,S,2,0)),l=0,h=0,t.mode=Tp;case Tp:if(t.flags&1024){for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(S[0]=l&255,S[1]=l>>>8&255,t.check=Pt(t.check,S,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=Ap;case Ap:if(t.flags&1024&&(d=t.length,d>o&&(d=o),d&&(t.head&&(w=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+d),w)),t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,d,s)),o-=d,s+=d,t.length-=d),t.length))break e;t.length=0,t.mode=Rp;case Rp:if(t.flags&2048){if(o===0)break e;d=0;do w=i[s+d++],t.head&&w&&t.length<65536&&(t.head.name+=String.fromCharCode(w));while(w&&d<o);if(t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,d,s)),o-=d,s+=d,w)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Cp;case Cp:if(t.flags&4096){if(o===0)break e;d=0;do w=i[s+d++],t.head&&w&&t.length<65536&&(t.head.comment+=String.fromCharCode(w));while(w&&d<o);if(t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,d,s)),o-=d,s+=d,w)break e}else t.head&&(t.head.comment=null);t.mode=Pp;case Pp:if(t.flags&512){for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=gt;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ai;break;case Ip:for(;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.adler=t.check=Wp(l),l=0,h=0,t.mode=vl;case vl:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=h,$E;n.adler=t.check=1,t.mode=ai;case ai:if(e===ZE||e===Oo)break e;case Wc:if(t.last){l>>>=h&7,h-=h&7,t.mode=qc;break}for(;h<3;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=Lp;break;case 1:if(iT(t),t.mode=Fo,e===Oo){l>>>=2,h-=2;break e}break;case 2:t.mode=Up;break;case 3:n.msg="invalid block type",t.mode=gt}l>>>=2,h-=2;break;case Lp:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=gt;break}if(t.length=l&65535,l=0,h=0,t.mode=Xc,e===Oo)break e;case Xc:t.mode=Dp;case Dp:if(d=t.length,d){if(d>o&&(d=o),d>c&&(d=c),d===0)break e;r.set(i.subarray(s,s+d),a),o-=d,s+=d,c-=d,a+=d,t.length-=d;break}t.mode=ai;break;case Up:for(;h<14;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=gt;break}t.have=0,t.mode=Np;case Np:for(;t.have<t.ncode;){for(;h<3;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.lens[U[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[U[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,M={bits:t.lenbits},R=ta(qE,t.lens,0,19,t.lencode,0,t.work,M),t.lenbits=M.bits,R){n.msg="invalid code lengths set",t.mode=gt;break}t.have=0,t.mode=Op;case Op:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,y=m>>>16&255,x=m&65535,!(p<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(x<16)l>>>=p,h-=p,t.lens[t.have++]=x;else{if(x===16){for(C=p+2;h<C;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=gt;break}w=t.lens[t.have-1],d=3+(l&3),l>>>=2,h-=2}else if(x===17){for(C=p+3;h<C;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=p,h-=p,w=0,d=3+(l&7),l>>>=3,h-=3}else{for(C=p+7;h<C;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=p,h-=p,w=0,d=11+(l&127),l>>>=7,h-=7}if(t.have+d>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=gt;break}for(;d--;)t.lens[t.have++]=w}}if(t.mode===gt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=gt;break}if(t.lenbits=9,M={bits:t.lenbits},R=ta(wg,t.lens,0,t.nlen,t.lencode,0,t.work,M),t.lenbits=M.bits,R){n.msg="invalid literal/lengths set",t.mode=gt;break}if(t.distbits=6,t.distcode=t.distdyn,M={bits:t.distbits},R=ta(Eg,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,M),t.distbits=M.bits,R){n.msg="invalid distances set",t.mode=gt;break}if(t.mode=Fo,e===Oo)break e;case Fo:t.mode=zo;case zo:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=h,kE(n,f),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,h=t.bits,t.mode===ai&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,y=m>>>16&255,x=m&65535,!(p<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(y&&(y&240)===0){for(_=p,E=y,A=x;m=t.lencode[A+((l&(1<<_+E)-1)>>_)],p=m>>>24,y=m>>>16&255,x=m&65535,!(_+p<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=_,h-=_,t.back+=_}if(l>>>=p,h-=p,t.back+=p,t.length=x,y===0){t.mode=Hp;break}if(y&32){t.back=-1,t.mode=ai;break}if(y&64){n.msg="invalid literal/length code",t.mode=gt;break}t.extra=y&15,t.mode=Fp;case Fp:if(t.extra){for(C=t.extra;h<C;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=zp;case zp:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,y=m>>>16&255,x=m&65535,!(p<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if((y&240)===0){for(_=p,E=y,A=x;m=t.distcode[A+((l&(1<<_+E)-1)>>_)],p=m>>>24,y=m>>>16&255,x=m&65535,!(_+p<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=_,h-=_,t.back+=_}if(l>>>=p,h-=p,t.back+=p,y&64){n.msg="invalid distance code",t.mode=gt;break}t.offset=x,t.extra=y&15,t.mode=Bp;case Bp:if(t.extra){for(C=t.extra;h<C;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=gt;break}t.mode=kp;case kp:if(c===0)break e;if(d=f-c,t.offset>d){if(d=t.offset-d,d>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=gt;break}d>t.wnext?(d-=t.wnext,g=t.wsize-d):g=t.wnext-d,d>t.length&&(d=t.length),v=t.window}else v=r,g=a-t.offset,d=t.length;d>c&&(d=c),c-=d,t.length-=d;do r[a++]=v[g++];while(--d);t.length===0&&(t.mode=zo);break;case Hp:if(c===0)break e;r[a++]=t.length,c--,t.mode=zo;break;case qc:if(t.wrap){for(;h<32;){if(o===0)break e;o--,l|=i[s++]<<h,h+=8}if(f-=c,n.total_out+=f,t.total+=f,t.wrap&4&&f&&(n.adler=t.check=t.flags?Pt(t.check,r,f,a-f):Ma(t.check,r,f,a-f)),f=c,t.wrap&4&&(t.flags?l:Wp(l))!==t.check){n.msg="incorrect data check",t.mode=gt;break}l=0,h=0}t.mode=Vp;case Vp:if(t.wrap&&t.flags){for(;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=gt;break}l=0,h=0}t.mode=Gp;case Gp:R=YE;break e;case gt:R=Tg;break e;case Rg:return Ag;case Cg:default:return En}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=h,(t.wsize||f!==n.avail_out&&t.mode<gt&&(t.mode<qc||e!==Mp))&&Ug(n,n.output,n.next_out,f-n.avail_out),u-=n.avail_in,f-=n.avail_out,n.total_in+=u,n.total_out+=f,t.total+=f,t.wrap&4&&f&&(n.adler=t.check=t.flags?Pt(t.check,r,f,n.next_out-f):Ma(t.check,r,f,n.next_out-f)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ai?128:0)+(t.mode===Fo||t.mode===Xc?256:0),(u===0&&f===0||e===Mp)&&R===dr&&(R=JE),R},sT=n=>{if(vr(n))return En;let e=n.state;return e.window&&(e.window=null),n.state=null,dr},aT=(n,e)=>{if(vr(n))return En;const t=n.state;return(t.wrap&2)===0?En:(t.head=e,e.done=!1,dr)},oT=(n,e)=>{const t=e.length;let i,r,s;return vr(n)||(i=n.state,i.wrap!==0&&i.mode!==vl)?En:i.mode===vl&&(r=1,r=Ma(r,e,t,0),r!==i.check)?Tg:(s=Ug(n,e,t,t),s?(i.mode=Rg,Ag):(i.havedict=1,dr))};var lT=Ig,cT=Lg,hT=Pg,uT=nT,fT=Dg,dT=rT,pT=sT,mT=aT,gT=oT,_T="pako inflate (from Nodeca project)",hi={inflateReset:lT,inflateReset2:cT,inflateResetKeep:hT,inflateInit:uT,inflateInit2:fT,inflate:dT,inflateEnd:pT,inflateGetHeader:mT,inflateSetDictionary:gT,inflateInfo:_T};function vT(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var xT=vT;const Ng=Object.prototype.toString,{Z_NO_FLUSH:yT,Z_FINISH:MT,Z_OK:wa,Z_STREAM_END:$c,Z_NEED_DICT:Jc,Z_STREAM_ERROR:ST,Z_DATA_ERROR:qp,Z_MEM_ERROR:bT}=Oa;function Ba(n){this.options=Hl.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Sg,this.strm.avail_out=0;let t=hi.inflateInit2(this.strm,e.windowBits);if(t!==wa)throw new Error(ur[t]);if(this.header=new xT,hi.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=ba.string2buf(e.dictionary):Ng.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=hi.inflateSetDictionary(this.strm,e.dictionary),t!==wa)))throw new Error(ur[t])}Ba.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?MT:yT,Ng.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=hi.inflate(t,a),s===Jc&&r&&(s=hi.inflateSetDictionary(t,r),s===wa?s=hi.inflate(t,a):s===qp&&(s=Jc));t.avail_in>0&&s===$c&&t.state.wrap>0&&n[t.next_in]!==0;)hi.inflateReset(t),s=hi.inflate(t,a);switch(s){case ST:case qp:case Jc:case bT:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===$c))if(this.options.to==="string"){let c=ba.utf8border(t.output,t.next_out),l=t.next_out-c,h=ba.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===wa&&o===0)){if(s===$c)return s=hi.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Ba.prototype.onData=function(n){this.chunks.push(n)};Ba.prototype.onEnd=function(n){n===wa&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Hl.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Qu(n,e){const t=new Ba(e);if(t.push(n),t.err)throw t.msg||ur[t.err];return t.result}function wT(n,e){return e=e||{},e.raw=!0,Qu(n,e)}var ET=Ba,TT=Qu,AT=wT,RT=Qu,CT={Inflate:ET,inflate:TT,inflateRaw:AT,ungzip:RT};const{Deflate:PT,deflate:IT,deflateRaw:LT,gzip:DT}=zE,{Inflate:UT,inflate:NT,inflateRaw:OT,ungzip:FT}=CT;var Og=PT,Fg=IT,zg=LT,Bg=DT,kg=UT,Hg=NT,Vg=OT,xl=FT,Gg=Oa,zT={Deflate:Og,deflate:Fg,deflateRaw:zg,gzip:Bg,Inflate:kg,inflate:Hg,inflateRaw:Vg,ungzip:xl,constants:Gg};const BT=Object.freeze(Object.defineProperty({__proto__:null,Deflate:Og,Inflate:kg,constants:Gg,default:zT,deflate:Fg,deflateRaw:zg,gzip:Bg,inflate:Hg,inflateRaw:Vg,ungzip:xl},Symbol.toStringTag,{value:"Module"}));var Zp={},kT=function(n,e,t,i,r){var s=new Worker(Zp[e]||(Zp[e]=URL.createObjectURL(new Blob([n+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],r(l,null)}else r(null,o)},s.postMessage(t,i),s},We=Uint8Array,Zt=Uint16Array,ka=Int32Array,xs=new We([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ys=new We([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ea=new We([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wg=function(n,e){for(var t=new Zt(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new ka(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Xg=Wg(xs,2),ju=Xg.b,yl=Xg.r;ju[28]=258,yl[258]=28;var qg=Wg(ys,0),Zg=qg.b,jh=qg.r,Ta=new Zt(32768);for(var pt=0;pt<32768;++pt){var yi=(pt&43690)>>1|(pt&21845)<<1;yi=(yi&52428)>>2|(yi&13107)<<2,yi=(yi&61680)>>4|(yi&3855)<<4,Ta[pt]=((yi&65280)>>8|(yi&255)<<8)>>1}var Mn=function(n,e,t){for(var i=n.length,r=0,s=new Zt(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new Zt(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new Zt(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],h=e-n[r],u=a[n[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Ta[u]>>c]=l}else for(o=new Zt(i),r=0;r<i;++r)n[r]&&(o[r]=Ta[a[n[r]-1]++]>>15-n[r]);return o},di=new We(288);for(var pt=0;pt<144;++pt)di[pt]=8;for(var pt=144;pt<256;++pt)di[pt]=9;for(var pt=256;pt<280;++pt)di[pt]=7;for(var pt=280;pt<288;++pt)di[pt]=8;var ls=new We(32);for(var pt=0;pt<32;++pt)ls[pt]=5;var Yg=Mn(di,9,0),$g=Mn(di,9,1),Jg=Mn(ls,5,0),Kg=Mn(ls,5,1),$o=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},_n=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Jo=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},Ms=function(n){return(n+7)/8|0},Sn=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new We(n.subarray(e,t))},HT={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Qg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ee=function(n,e,t){var i=new Error(e||Qg[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Ee),!t)throw i;return i},Ha=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new We(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new We(r*3));var l=function(ot){var $e=t.length;if(ot>$e){var Ie=new We(Math.max($e*2,ot));Ie.set(t),t=Ie}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,g=e.d,v=e.m,m=e.n,p=r*8;do{if(!d){h=_n(n,u,1);var y=_n(n,u+1,3);if(u+=3,y)if(y==1)d=$g,g=Kg,v=9,m=5;else if(y==2){var A=_n(n,u,31)+257,w=_n(n,u+10,15)+4,R=A+_n(n,u+5,31)+1;u+=14;for(var S=new We(R),M=new We(19),C=0;C<w;++C)M[Ea[C]]=_n(n,u+C*3,7);u+=w*3;for(var U=$o(M),O=(1<<U)-1,B=Mn(M,U,1),C=0;C<R;){var k=B[_n(n,u,O)];u+=k&15;var x=k>>4;if(x<16)S[C++]=x;else{var H=0,X=0;for(x==16?(X=3+_n(n,u,3),u+=2,H=S[C-1]):x==17?(X=3+_n(n,u,7),u+=3):x==18&&(X=11+_n(n,u,127),u+=7);X--;)S[C++]=H}}var V=S.subarray(0,A),ne=S.subarray(A);v=$o(V),m=$o(ne),d=Mn(V,v,1),g=Mn(ne,m,1)}else Ee(1);else{var x=Ms(u)+4,_=n[x-4]|n[x-3]<<8,E=x+_;if(E>r){c&&Ee(0);break}o&&l(f+_),t.set(n.subarray(x,E),f),e.b=f+=_,e.p=u=E*8,e.f=h;continue}if(u>p){c&&Ee(0);break}}o&&l(f+131072);for(var he=(1<<v)-1,ce=(1<<m)-1,Re=u;;Re=u){var H=d[Jo(n,u)&he],Ne=H>>4;if(u+=H&15,u>p){c&&Ee(0);break}if(H||Ee(2),Ne<256)t[f++]=Ne;else if(Ne==256){Re=u,d=null;break}else{var q=Ne-254;if(Ne>264){var C=Ne-257,j=xs[C];q=_n(n,u,(1<<j)-1)+ju[C],u+=j}var de=g[Jo(n,u)&ce],oe=de>>4;de||Ee(3),u+=de&15;var ne=Zg[oe];if(oe>3){var j=ys[oe];ne+=Jo(n,u)&(1<<j)-1,u+=j}if(u>p){c&&Ee(0);break}o&&l(f+131072);var be=f+q;if(f<ne){var Fe=s-ne,Ae=Math.min(ne,be);for(Fe+f<0&&Ee(3);f<Ae;++f)t[f]=i[Fe+f]}for(;f<be;++f)t[f]=t[f-ne]}}e.l=d,e.p=Re,e.b=f,e.f=h,d&&(h=1,e.m=v,e.d=g,e.n=m)}while(!h);return f!=t.length&&a?Sn(t,0,f):t.subarray(0,f)},Hn=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},Gr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Ko=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:Ti,l:0};if(r==1){var a=new We(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(E,A){return E.f-A.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};h!=r-1;)o=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:o.f+c.f,l:o,r:c};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new Zt(f+1),g=Ml(t[h-1],d,0);if(g>e){var i=0,v=0,m=g-e,p=1<<m;for(s.sort(function(A,w){return d[w.s]-d[A.s]||A.f-w.f});i<r;++i){var y=s[i].s;if(d[y]>e)v+=p-(1<<g-d[y]),d[y]=e;else break}for(v>>=m;v>0;){var x=s[i].s;d[x]<e?v-=1<<e-d[x]++-1:++i}for(;i>=0&&v;--i){var _=s[i].s;d[_]==e&&(--d[_],++v)}g=e}return{t:new We(d),l:g}},Ml=function(n,e,t){return n.s==-1?Math.max(Ml(n.l,e,t+1),Ml(n.r,e,t+1)):e[n.s]=t},eu=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Zt(++e),i=0,r=n[0],s=1,a=function(c){t[i++]=c},o=1;o<=e;++o)if(n[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=n[o]}return{c:t.subarray(0,i),n:e}},Wr=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},ef=function(n,e,t){var i=t.length,r=Ms(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},tu=function(n,e,t,i,r,s,a,o,c,l,h){Hn(e,h++,t),++r[256];for(var u=Ko(r,15),f=u.t,d=u.l,g=Ko(s,15),v=g.t,m=g.l,p=eu(f),y=p.c,x=p.n,_=eu(v),E=_.c,A=_.n,w=new Zt(19),R=0;R<y.length;++R)++w[y[R]&31];for(var R=0;R<E.length;++R)++w[E[R]&31];for(var S=Ko(w,7),M=S.t,C=S.l,U=19;U>4&&!M[Ea[U-1]];--U);var O=l+5<<3,B=Wr(r,di)+Wr(s,ls)+a,k=Wr(r,f)+Wr(s,v)+a+14+3*U+Wr(w,M)+2*w[16]+3*w[17]+7*w[18];if(c>=0&&O<=B&&O<=k)return ef(e,h,n.subarray(c,c+l));var H,X,V,ne;if(Hn(e,h,1+(k<B)),h+=2,k<B){H=Mn(f,d,0),X=f,V=Mn(v,m,0),ne=v;var he=Mn(M,C,0);Hn(e,h,x-257),Hn(e,h+5,A-1),Hn(e,h+10,U-4),h+=14;for(var R=0;R<U;++R)Hn(e,h+3*R,M[Ea[R]]);h+=3*U;for(var ce=[y,E],Re=0;Re<2;++Re)for(var Ne=ce[Re],R=0;R<Ne.length;++R){var q=Ne[R]&31;Hn(e,h,he[q]),h+=M[q],q>15&&(Hn(e,h,Ne[R]>>5&127),h+=Ne[R]>>12)}}else H=Yg,X=di,V=Jg,ne=ls;for(var R=0;R<o;++R){var j=i[R];if(j>255){var q=j>>18&31;Gr(e,h,H[q+257]),h+=X[q+257],q>7&&(Hn(e,h,j>>23&31),h+=xs[q]);var de=j&31;Gr(e,h,V[de]),h+=ne[de],de>3&&(Gr(e,h,j>>5&8191),h+=ys[de])}else Gr(e,h,H[j]),h+=X[j]}return Gr(e,h,H[256]),h+X[256]},jg=new ka([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ti=new We(0),e_=function(n,e,t,i,r,s){var a=s.z||n.length,o=new We(i+a+5*(1+Math.ceil(a/7e3))+r),c=o.subarray(i,o.length-r),l=s.l,h=(s.r||0)&7;if(e){h&&(c[0]=s.r>>3);for(var u=jg[e-1],f=u>>13,d=u&8191,g=(1<<t)-1,v=s.p||new Zt(32768),m=s.h||new Zt(g+1),p=Math.ceil(t/3),y=2*p,x=function(I){return(n[I]^n[I+1]<<p^n[I+2]<<y)&g},_=new ka(25e3),E=new Zt(288),A=new Zt(32),w=0,R=0,S=s.i||0,M=0,C=s.w||0,U=0;S+2<a;++S){var O=x(S),B=S&32767,k=m[O];if(v[B]=k,m[O]=B,C<=S){var H=a-S;if((w>7e3||M>24576)&&(H>423||!l)){h=tu(n,c,0,_,E,A,R,M,U,S-U,h),M=w=R=0,U=S;for(var X=0;X<286;++X)E[X]=0;for(var X=0;X<30;++X)A[X]=0}var V=2,ne=0,he=d,ce=B-k&32767;if(H>2&&O==x(S-ce))for(var Re=Math.min(f,H)-1,Ne=Math.min(32767,S),q=Math.min(258,H);ce<=Ne&&--he&&B!=k;){if(n[S+V]==n[S+V-ce]){for(var j=0;j<q&&n[S+j]==n[S+j-ce];++j);if(j>V){if(V=j,ne=ce,j>Re)break;for(var de=Math.min(ce,j-2),oe=0,X=0;X<de;++X){var be=S-ce+X&32767,Fe=v[be],Ae=be-Fe&32767;Ae>oe&&(oe=Ae,k=be)}}}B=k,k=v[B],ce+=B-k&32767}if(ne){_[M++]=268435456|yl[V]<<18|jh[ne];var ot=yl[V]&31,$e=jh[ne]&31;R+=xs[ot]+ys[$e],++E[257+ot],++A[$e],C=S+V,++w}else _[M++]=n[S],++E[n[S]]}}for(S=Math.max(S,C);S<a;++S)_[M++]=n[S],++E[n[S]];h=tu(n,c,l,_,E,A,R,M,U,S-U,h),l||(s.r=h&7|c[h/8|0]<<3,h-=7,s.h=m,s.p=v,s.i=S,s.w=C)}else{for(var S=s.w||0;S<a+l;S+=65535){var Ie=S+65535;Ie>=a&&(c[h/8|0]=l,Ie=a),h=ef(c,h+1,n.subarray(S,Ie))}s.i=a}return Sn(o,0,i+Ms(h)+r)},t_=function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n}(),Ss=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=t_[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}},Gl=function(){var n=1,e=0;return{p:function(t){for(var i=n,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=i+=t[a];i=(i&65535)+15*(i>>16),r=(r&65535)+15*(r>>16)}n=i,e=r},d:function(){return n%=65521,e%=65521,(n&255)<<24|(n&65280)<<8|(e&255)<<8|e>>8}}},xr=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new We(s.length+n.length);a.set(s),a.set(n,s.length),n=a,r.w=s.length}return e_(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},Va=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t},Yp=function(n,e,t){for(var i=n(),r=n.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<i.length;++a){var o=i[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var l=o.toString();if(o.prototype)if(l.indexOf("[native code]")!=-1){var h=l.indexOf(" ",8)+1;e+=l.slice(h,l.indexOf("(",h))}else{e+=l;for(var u in o.prototype)e+=";"+c+".prototype."+u+"="+o.prototype[u].toString()}else e+=l}else t[c]=o}return e},Bo=[],VT=function(n){var e=[];for(var t in n)n[t].buffer&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},n_=function(n,e,t,i){if(!Bo[t]){for(var r="",s={},a=n.length-1,o=0;o<a;++o)r=Yp(n[o],r,s);Bo[t]={c:Yp(n[a],r,s),e:s}}var c=Va({},Bo[t].e);return kT(Bo[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,VT(c),i)},bs=function(){return[We,Zt,ka,xs,ys,Ea,ju,Zg,$g,Kg,Ta,Qg,Mn,$o,_n,Jo,Ms,Sn,Ee,Ha,As,Bi,tf]},ws=function(){return[We,Zt,ka,xs,ys,Ea,yl,jh,Yg,di,Jg,ls,Ta,jg,Ti,Mn,Hn,Gr,Ko,Ml,eu,Wr,ef,tu,Ms,Sn,e_,xr,Ga,Bi]},i_=function(){return[nf,sf,rt,Ss,t_]},r_=function(){return[rf,o_]},s_=function(){return[af,rt,Gl]},a_=function(){return[of]},Bi=function(n){return postMessage(n,[n.buffer])},tf=function(n){return n&&{out:n.size&&new We(n.size),dictionary:n.dictionary}},Es=function(n,e,t,i,r,s){var a=n_(t,i,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([n,e],e.consume?[n.buffer]:[]),function(){a.terminate()}},Tn=function(n){return n.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(n.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):n.flush()}},Ts=function(n,e,t,i,r,s,a){var o,c=n_(n,i,r,function(l,h){l?(c.terminate(),e.ondata.call(e,l)):Array.isArray(h)?h.length==1?(e.queuedSize-=h[0],e.ondrain&&e.ondrain(h[0])):(h[1]&&c.terminate(),e.ondata.call(e,l,h[0],h[1])):a(h)});c.postMessage(t),e.queuedSize=0,e.push=function(l,h){e.ondata||Ee(5),o&&e.ondata(Ee(4,0,1),null,!!h),e.queuedSize+=l.length,c.postMessage([l,o=h],[l.buffer])},e.terminate=function(){c.terminate()},s&&(e.flush=function(){c.postMessage([])})},Xt=function(n,e){return n[e]|n[e+1]<<8},Mt=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Kc=function(n,e){return Mt(n,e)+Mt(n,e+4)*4294967296},rt=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8},nf=function(n,e){var t=e.filename;if(n[0]=31,n[1]=139,n[2]=8,n[8]=e.level<2?4:e.level==9?2:0,n[9]=3,e.mtime!=0&&rt(n,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){n[3]=8;for(var i=0;i<=t.length;++i)n[i+10]=t.charCodeAt(i)}},rf=function(n){(n[0]!=31||n[1]!=139||n[2]!=8)&&Ee(6,"invalid gzip data");var e=n[3],t=10;e&4&&(t+=(n[10]|n[11]<<8)+2);for(var i=(e>>3&1)+(e>>4&1);i>0;i-=!n[t++]);return t+(e&2)},o_=function(n){var e=n.length;return(n[e-4]|n[e-3]<<8|n[e-2]<<16|n[e-1]<<24)>>>0},sf=function(n){return 10+(n.filename?n.filename.length+1:0)},af=function(n,e){var t=e.level,i=t==0?0:t<6?1:t==9?3:2;if(n[0]=120,n[1]=i<<6|(e.dictionary&&32),n[1]|=31-(n[0]<<8|n[1])%31,e.dictionary){var r=Gl();r.p(e.dictionary),rt(n,2,r.d())}},of=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Ee(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&Ee(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function yr(n,e){return typeof n=="function"&&(e=n,n={}),this.ondata=e,n}var bn=function(){function n(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new We(98304),this.o.dictionary){var i=this.o.dictionary.subarray(-32768);this.b.set(i,32768-i.length),this.s.i=32768-i.length}}return n.prototype.p=function(e,t){this.ondata(xr(e,this.o,0,0,this.s),t)},n.prototype.push=function(e,t){this.ondata||Ee(5),this.s.l&&Ee(4);var i=e.length+this.s.z;if(i>this.b.length){if(i>2*this.b.length-32768){var r=new We(i&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||Ee(5),this.s.l&&Ee(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}(),l_=function(){function n(e,t){Ts([ws,function(){return[Tn,bn]}],this,yr.call(this,e,t),function(i){var r=new bn(i.data);onmessage=Tn(r)},6,1)}return n}();function c_(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),Es(n,e,[ws],function(i){return Bi(Ga(i.data[0],i.data[1]))},0,t)}function Ga(n,e){return xr(n,e||{},0,0)}var rn=function(){function n(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var i=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:i?i.length:0},this.o=new We(32768),this.p=new We(0),i&&this.o.set(i)}return n.prototype.e=function(e){if(this.ondata||Ee(5),this.d&&Ee(4),!this.p.length)this.p=e;else if(e.length){var t=new We(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},n.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,i=Ha(this.p,this.s,this.o);this.ondata(Sn(i,t,this.s.b),this.d),this.o=Sn(i,this.s.b-32768),this.s.b=this.o.length,this.p=Sn(this.p,this.s.p/8|0),this.s.p&=7},n.prototype.push=function(e,t){this.e(e),this.c(t)},n}(),lf=function(){function n(e,t){Ts([bs,function(){return[Tn,rn]}],this,yr.call(this,e,t),function(i){var r=new rn(i.data);onmessage=Tn(r)},7,0)}return n}();function cf(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),Es(n,e,[bs],function(i){return Bi(As(i.data[0],tf(i.data[1])))},1,t)}function As(n,e){return Ha(n,{i:2},e&&e.out,e&&e.dictionary)}var Sl=function(){function n(e,t){this.c=Ss(),this.l=0,this.v=1,bn.call(this,e,t)}return n.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,bn.prototype.push.call(this,e,t)},n.prototype.p=function(e,t){var i=xr(e,this.o,this.v&&sf(this.o),t&&8,this.s);this.v&&(nf(i,this.o),this.v=0),t&&(rt(i,i.length-8,this.c.d()),rt(i,i.length-4,this.l)),this.ondata(i,t)},n.prototype.flush=function(){bn.prototype.flush.call(this)},n}(),$p=function(){function n(e,t){Ts([ws,i_,function(){return[Tn,bn,Sl]}],this,yr.call(this,e,t),function(i){var r=new Sl(i.data);onmessage=Tn(r)},8,1)}return n}();function Jp(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),Es(n,e,[ws,i_,function(){return[bl]}],function(i){return Bi(bl(i.data[0],i.data[1]))},2,t)}function bl(n,e){e||(e={});var t=Ss(),i=n.length;t.p(n);var r=xr(n,e,sf(e),8),s=r.length;return nf(r,e),rt(r,s-8,t.d()),rt(r,s-4,i),r}var wl=function(){function n(e,t){this.v=1,this.r=0,rn.call(this,e,t)}return n.prototype.push=function(e,t){if(rn.prototype.e.call(this,e),this.r+=e.length,this.v){var i=this.p.subarray(this.v-1),r=i.length>3?rf(i):4;if(r>i.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-i.length);this.p=i.subarray(r),this.v=0}rn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=Ms(this.s.p)+9,this.s={i:0},this.o=new We(0),this.push(new We(0),t))},n}(),h_=function(){function n(e,t){var i=this;Ts([bs,r_,function(){return[Tn,rn,wl]}],this,yr.call(this,e,t),function(r){var s=new wl(r.data);s.onmember=function(a){return postMessage(a)},onmessage=Tn(s)},9,0,function(r){return i.onmember&&i.onmember(r)})}return n}();function u_(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),Es(n,e,[bs,r_,function(){return[El]}],function(i){return Bi(El(i.data[0],i.data[1]))},3,t)}function El(n,e){var t=rf(n);return t+8>n.length&&Ee(6,"invalid gzip data"),Ha(n.subarray(t,-8),{i:2},e&&e.out||new We(o_(n)),e&&e.dictionary)}var nu=function(){function n(e,t){this.c=Gl(),this.v=1,bn.call(this,e,t)}return n.prototype.push=function(e,t){this.c.p(e),bn.prototype.push.call(this,e,t)},n.prototype.p=function(e,t){var i=xr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(af(i,this.o),this.v=0),t&&rt(i,i.length-4,this.c.d()),this.ondata(i,t)},n.prototype.flush=function(){bn.prototype.flush.call(this)},n}(),GT=function(){function n(e,t){Ts([ws,s_,function(){return[Tn,bn,nu]}],this,yr.call(this,e,t),function(i){var r=new nu(i.data);onmessage=Tn(r)},10,1)}return n}();function WT(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),Es(n,e,[ws,s_,function(){return[iu]}],function(i){return Bi(iu(i.data[0],i.data[1]))},4,t)}function iu(n,e){e||(e={});var t=Gl();t.p(n);var i=xr(n,e,e.dictionary?6:2,4);return af(i,e),rt(i,i.length-4,t.d()),i}var Tl=function(){function n(e,t){rn.call(this,e,t),this.v=e&&e.dictionary?2:1}return n.prototype.push=function(e,t){if(rn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(of(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&Ee(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),rn.prototype.c.call(this,t)},n}(),f_=function(){function n(e,t){Ts([bs,a_,function(){return[Tn,rn,Tl]}],this,yr.call(this,e,t),function(i){var r=new Tl(i.data);onmessage=Tn(r)},11,0)}return n}();function d_(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),Es(n,e,[bs,a_,function(){return[Al]}],function(i){return Bi(Al(i.data[0],tf(i.data[1])))},5,t)}function Al(n,e){return Ha(n.subarray(of(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var ru=function(){function n(e,t){this.o=yr.call(this,e,t)||{},this.G=wl,this.I=rn,this.Z=Tl}return n.prototype.i=function(){var e=this;this.s.ondata=function(t,i){e.ondata(t,i)}},n.prototype.push=function(e,t){if(this.ondata||Ee(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var i=new We(this.p.length+e.length);i.set(this.p),i.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},n}(),XT=function(){function n(e,t){ru.call(this,e,t),this.queuedSize=0,this.G=h_,this.I=lf,this.Z=f_}return n.prototype.i=function(){var e=this;this.s.ondata=function(t,i,r){e.ondata(t,i,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},n.prototype.push=function(e,t){this.queuedSize+=e.length,ru.prototype.push.call(this,e,t)},n}();function qT(n,e,t){return t||(t=e,e={}),typeof t!="function"&&Ee(7),n[0]==31&&n[1]==139&&n[2]==8?u_(n,e,t):(n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31?cf(n,e,t):d_(n,e,t)}function ZT(n,e){return n[0]==31&&n[1]==139&&n[2]==8?El(n,e):(n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31?As(n,e):Al(n,e)}var hf=function(n,e,t,i){for(var r in n){var s=n[r],a=e+r,o=i;Array.isArray(s)&&(o=Va(i,s[1]),s=s[0]),s instanceof We?t[a]=[s,o]:(t[a+="/"]=[new We(0),o],hf(s,a,t,i))}},Kp=typeof TextEncoder<"u"&&new TextEncoder,su=typeof TextDecoder<"u"&&new TextDecoder,p_=0;try{su.decode(Ti,{stream:!0}),p_=1}catch{}var m_=function(n){for(var e="",t=0;;){var i=n[t++],r=(i>127)+(i>223)+(i>239);if(t+r>n.length)return{s:e,r:Sn(n,t-1)};r?r==3?(i=((i&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|n[t++]&63):e+=String.fromCharCode((i&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(i)}},YT=function(){function n(e){this.ondata=e,p_?this.t=new TextDecoder:this.p=Ti}return n.prototype.push=function(e,t){if(this.ondata||Ee(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&Ee(8),this.t=null);return}this.p||Ee(4);var i=new We(this.p.length+e.length);i.set(this.p),i.set(e,this.p.length);var r=m_(i),s=r.s,a=r.r;t?(a.length&&Ee(8),this.p=null):this.p=a,this.ondata(s,t)},n}(),$T=function(){function n(e){this.ondata=e}return n.prototype.push=function(e,t){this.ondata||Ee(5),this.d&&Ee(4),this.ondata(Fi(e),this.d=t||!1)},n}();function Fi(n,e){if(e){for(var t=new We(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(Kp)return Kp.encode(n);for(var r=n.length,s=new We(n.length+(n.length>>1)),a=0,o=function(h){s[a++]=h},i=0;i<r;++i){if(a+5>s.length){var c=new We(a+8+(r-i<<1));c.set(s),s=c}var l=n.charCodeAt(i);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Sn(s,0,a)}function uf(n,e){if(e){for(var t="",i=0;i<n.length;i+=16384)t+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return t}else{if(su)return su.decode(n);var r=m_(n),s=r.s,t=r.r;return t.length&&Ee(8),s}}var g_=function(n){return n==1?3:n<6?2:n==9?1:0},__=function(n,e){return e+30+Xt(n,e+26)+Xt(n,e+28)},v_=function(n,e,t){var i=Xt(n,e+28),r=uf(n.subarray(e+46,e+46+i),!(Xt(n,e+8)&2048)),s=e+46+i,a=Mt(n,e+20),o=t&&a==4294967295?x_(n,s):[a,Mt(n,e+24),Mt(n,e+42)],c=o[0],l=o[1],h=o[2];return[Xt(n,e+10),c,l,r,s+Xt(n,e+30)+Xt(n,e+32),h]},x_=function(n,e){for(;Xt(n,e)!=1;e+=4+Xt(n,e+2));return[Kc(n,e+12),Kc(n,e+4),Kc(n,e+20)]},Di=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Ee(9),e+=i+4}return e},cs=function(n,e,t,i,r,s,a,o){var c=i.length,l=t.extra,h=o&&o.length,u=Di(l);rt(n,e,a!=null?33639248:67324752),e+=4,a!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Ee(10),rt(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(rt(n,e,t.crc),rt(n,e+4,s<0?-s-2:s),rt(n,e+8,t.size)),rt(n,e+12,c),rt(n,e+14,u),e+=16,a!=null&&(rt(n,e,h),rt(n,e+6,t.attrs),rt(n,e+10,a),e+=14),n.set(i,e),e+=c,u)for(var g in l){var v=l[g],m=v.length;rt(n,e,+g),rt(n,e+2,m),n.set(v,e+4),e+=4+m}return h&&(n.set(o,e),e+=h),e},ff=function(n,e,t,i,r){rt(n,e,101010256),rt(n,e+8,t),rt(n,e+10,t),rt(n,e+12,i),rt(n,e+16,r)},Aa=function(){function n(e){this.filename=e,this.c=Ss(),this.size=0,this.compression=0}return n.prototype.process=function(e,t){this.ondata(null,e,t)},n.prototype.push=function(e,t){this.ondata||Ee(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},n}(),JT=function(){function n(e,t){var i=this;t||(t={}),Aa.call(this,e),this.d=new bn(t,function(r,s){i.ondata(null,r,s)}),this.compression=8,this.flag=g_(t.level)}return n.prototype.process=function(e,t){try{this.d.push(e,t)}catch(i){this.ondata(i,null,t)}},n.prototype.push=function(e,t){Aa.prototype.push.call(this,e,t)},n}(),KT=function(){function n(e,t){var i=this;t||(t={}),Aa.call(this,e),this.d=new l_(t,function(r,s,a){i.ondata(r,s,a)}),this.compression=8,this.flag=g_(t.level),this.terminate=this.d.terminate}return n.prototype.process=function(e,t){this.d.push(e,t)},n.prototype.push=function(e,t){Aa.prototype.push.call(this,e,t)},n}(),QT=function(){function n(e){this.ondata=e,this.u=[],this.d=1}return n.prototype.add=function(e){var t=this;if(this.ondata||Ee(5),this.d&2)this.ondata(Ee(4+(this.d&1)*8,0,1),null,!1);else{var i=Fi(e.filename),r=i.length,s=e.comment,a=s&&Fi(s),o=r!=e.filename.length||a&&s.length!=a.length,c=r+Di(e.extra)+30;r>65535&&this.ondata(Ee(11,0,1),null,!1);var l=new We(c);cs(l,0,e,i,o,-1);var h=[l],u=function(){for(var m=0,p=h;m<p.length;m++){var y=p[m];t.ondata(null,y,!1)}h=[]},f=this.d;this.d=0;var d=this.u.length,g=Va(e,{f:i,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),f){var m=t.u[d+1];m?m.r():t.d=1}f=1}}),v=0;e.ondata=function(m,p,y){if(m)t.ondata(m,p,y),t.terminate();else if(v+=p.length,h.push(p),y){var x=new We(16);rt(x,0,134695760),rt(x,4,e.crc),rt(x,8,v),rt(x,12,e.size),h.push(x),g.c=v,g.b=c+v+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&u()},this.u.push(g)}},n.prototype.end=function(){var e=this;if(this.d&2){this.ondata(Ee(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},n.prototype.e=function(){for(var e=0,t=0,i=0,r=0,s=this.u;r<s.length;r++){var a=s[r];i+=46+a.f.length+Di(a.extra)+(a.o?a.o.length:0)}for(var o=new We(i+22),c=0,l=this.u;c<l.length;c++){var a=l[c];cs(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Di(a.extra)+(a.o?a.o.length:0),t+=a.b}ff(o,e,this.u.length,i,t),this.ondata(null,o,!0),this.d=2},n.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var i=t[e];i.t()}this.d=2},n}();function jT(n,e,t){t||(t=e,e={}),typeof t!="function"&&Ee(7);var i={};hf(n,"",i,e);var r=Object.keys(i),s=r.length,a=0,o=0,c=s,l=new Array(s),h=[],u=function(){for(var m=0;m<h.length;++m)h[m]()},f=function(m,p){Rl(function(){t(m,p)})};Rl(function(){f=t});var d=function(){var m=new We(o+22),p=a,y=o-a;o=0;for(var x=0;x<c;++x){var _=l[x];try{var E=_.c.length;cs(m,o,_,_.f,_.u,E);var A=30+_.f.length+Di(_.extra),w=o+A;m.set(_.c,w),cs(m,a,_,_.f,_.u,E,o,_.m),a+=16+A+(_.m?_.m.length:0),o=w+E}catch(R){return f(R,null)}}ff(m,a,l.length,y,p),f(null,m)};s||d();for(var g=function(m){var p=r[m],y=i[p],x=y[0],_=y[1],E=Ss(),A=x.length;E.p(x);var w=Fi(p),R=w.length,S=_.comment,M=S&&Fi(S),C=M&&M.length,U=Di(_.extra),O=_.level==0?0:8,B=function(k,H){if(k)u(),f(k,null);else{var X=H.length;l[m]=Va(_,{size:A,crc:E.d(),c:H,f:w,m:M,u:R!=p.length||M&&S.length!=C,compression:O}),a+=30+R+U+X,o+=76+2*(R+U)+(C||0)+X,--s||d()}};if(R>65535&&B(Ee(11,0,1),null),!O)B(null,x);else if(A<16e4)try{B(null,Ga(x,_))}catch(k){B(k,null)}else h.push(c_(x,_,B))},v=0;v<c;++v)g(v);return u}function au(n,e){e||(e={});var t={},i=[];hf(n,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],c=o[0],l=o[1],h=l.level==0?0:8,u=Fi(a),f=u.length,d=l.comment,g=d&&Fi(d),v=g&&g.length,m=Di(l.extra);f>65535&&Ee(11);var p=h?Ga(c,l):c,y=p.length,x=Ss();x.p(c),i.push(Va(l,{size:c.length,crc:x.d(),c:p,f:u,m:g,u:f!=a.length||g&&d.length!=v,o:r,compression:h})),r+=30+f+m+y,s+=76+2*(f+m)+(v||0)+y}for(var _=new We(s+22),E=r,A=s-r,w=0;w<i.length;++w){var u=i[w];cs(_,u.o,u,u.f,u.u,u.c.length);var R=30+u.f.length+Di(u.extra);_.set(u.c,u.o+R),cs(_,r,u,u.f,u.u,u.c.length,u.o,u.m),r+=16+R+(u.m?u.m.length:0)}return ff(_,r,i.length,A,E),_}var y_=function(){function n(){}return n.prototype.push=function(e,t){this.ondata(null,e,t)},n.compression=0,n}(),eA=function(){function n(){var e=this;this.i=new rn(function(t,i){e.ondata(null,t,i)})}return n.prototype.push=function(e,t){try{this.i.push(e,t)}catch(i){this.ondata(i,null,t)}},n.compression=8,n}(),tA=function(){function n(e,t){var i=this;t<32e4?this.i=new rn(function(r,s){i.ondata(null,r,s)}):(this.i=new lf(function(r,s,a){i.ondata(r,s,a)}),this.terminate=this.i.terminate)}return n.prototype.push=function(e,t){this.i.terminate&&(e=Sn(e,0)),this.i.push(e,t)},n.compression=8,n}(),nA=function(){function n(e){this.onfile=e,this.k=[],this.o={0:y_},this.p=Ti}return n.prototype.push=function(e,t){var i=this;if(this.onfile||Ee(5),this.p||Ee(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,c=void 0,l=void 0;this.p.length?e.length?(l=new We(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var h=l.length,u=this.c,f=u&&this.d,d=function(){var p,y=Mt(l,o);if(y==67324752){a=1,c=o,g.d=null,g.c=0;var x=Xt(l,o+6),_=Xt(l,o+8),E=x&2048,A=x&8,w=Xt(l,o+26),R=Xt(l,o+28);if(h>o+30+w+R){var S=[];g.k.unshift(S),a=2;var M=Mt(l,o+18),C=Mt(l,o+22),U=uf(l.subarray(o+30,o+=30+w),!E);M==4294967295?(p=A?[-2]:x_(l,o),M=p[0],C=p[1]):A&&(M=-1),o+=R,g.c=M;var O,B={name:U,compression:_,start:function(){if(B.ondata||Ee(5),!M)B.ondata(null,Ti,!0);else{var k=i.o[_];k||B.ondata(Ee(14,"unknown compression type "+_,1),null,!1),O=M<0?new k(U):new k(U,M,C),O.ondata=function(ne,he,ce){B.ondata(ne,he,ce)};for(var H=0,X=S;H<X.length;H++){var V=X[H];O.push(V,!1)}i.k[0]==S&&i.c?i.d=O:O.push(Ti,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};M>=0&&(B.size=M,B.originalSize=C),g.onfile(B)}return"break"}else if(u){if(y==134695760)return c=o+=12+(u==-2&&8),a=3,g.c=0,"break";if(y==33639248)return c=o-=4,a=3,g.c=0,"break"}},g=this;o<h-4;++o){var v=d();if(v==="break")break}if(this.p=Ti,u<0){var m=a?l.subarray(0,c-12-(u==-2&&8)-(Mt(l,c-16)==134695760&&4)):l.subarray(0,o);f?f.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(l.subarray(o),t);this.p=l.subarray(o)}t&&(this.c&&Ee(13),this.p=null)},n.prototype.register=function(e){this.o[e.compression]=e},n}(),Rl=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function iA(n,e,t){t||(t=e,e={}),typeof t!="function"&&Ee(7);var i=[],r=function(){for(var m=0;m<i.length;++m)i[m]()},s={},a=function(m,p){Rl(function(){t(m,p)})};Rl(function(){a=t});for(var o=n.length-22;Mt(n,o)!=101010256;--o)if(!o||n.length-o>65558)return a(Ee(13,0,1),null),r;var c=Xt(n,o+8);if(c){var l=c,h=Mt(n,o+16),u=h==4294967295||l==65535;if(u){var f=Mt(n,o-12);u=Mt(n,f)==101075792,u&&(l=c=Mt(n,f+32),h=Mt(n,f+48))}for(var d=e&&e.filter,g=function(m){var p=v_(n,h,u),y=p[0],x=p[1],_=p[2],E=p[3],A=p[4],w=p[5],R=__(n,w);h=A;var S=function(C,U){C?(r(),a(C,null)):(U&&(s[E]=U),--c||a(null,s))};if(!d||d({name:E,size:x,originalSize:_,compression:y}))if(!y)S(null,Sn(n,R,R+x));else if(y==8){var M=n.subarray(R,R+x);if(_<524288||x>.8*_)try{S(null,As(M,{out:new We(_)}))}catch(C){S(C,null)}else i.push(cf(M,{size:_},S))}else S(Ee(14,"unknown compression type "+y,1),null);else S(null,null)},v=0;v<l;++v)g(v)}else a(null,{});return r}function ou(n,e){for(var t={},i=n.length-22;Mt(n,i)!=101010256;--i)(!i||n.length-i>65558)&&Ee(13);var r=Xt(n,i+8);if(!r)return{};var s=Mt(n,i+16),a=s==4294967295||r==65535;if(a){var o=Mt(n,i-12);a=Mt(n,o)==101075792,a&&(r=Mt(n,o+32),s=Mt(n,o+48))}for(var c=e&&e.filter,l=0;l<r;++l){var h=v_(n,s,a),u=h[0],f=h[1],d=h[2],g=h[3],v=h[4],m=h[5],p=__(n,m);s=v,(!c||c({name:g,size:f,originalSize:d,compression:u}))&&(u?u==8?t[g]=As(n.subarray(p,p+f),{out:new We(d)}):Ee(14,"unknown compression type "+u):t[g]=Sn(n,p,p+f))}return t}const M_=Object.freeze(Object.defineProperty({__proto__:null,AsyncCompress:$p,AsyncDecompress:XT,AsyncDeflate:l_,AsyncGunzip:h_,AsyncGzip:$p,AsyncInflate:lf,AsyncUnzipInflate:tA,AsyncUnzlib:f_,AsyncZipDeflate:KT,AsyncZlib:GT,Compress:Sl,DecodeUTF8:YT,Decompress:ru,Deflate:bn,EncodeUTF8:$T,FlateErrorCode:HT,Gunzip:wl,Gzip:Sl,Inflate:rn,Unzip:nA,UnzipInflate:eA,UnzipPassThrough:y_,Unzlib:Tl,Zip:QT,ZipDeflate:JT,ZipPassThrough:Aa,Zlib:nu,compress:Jp,compressSync:bl,decompress:qT,decompressSync:ZT,deflate:c_,deflateSync:Ga,gunzip:u_,gunzipSync:El,gzip:Jp,gzipSync:bl,inflate:cf,inflateSync:As,strFromU8:uf,strToU8:Fi,unzip:iA,unzipSync:ou,unzlib:d_,unzlibSync:Al,zip:jT,zipSync:au,zlib:WT,zlibSync:iu},Symbol.toStringTag,{value:"Module"})),An=document.getElementById("viewer"),rA=document.getElementById("fileInput"),sA=document.getElementById("drawPolygonButton"),aA=document.getElementById("fitViewButton"),oA=document.getElementById("showRoomsButton"),lA=document.getElementById("exportSceneButton"),Tt=new _m;Tt.background=new Te(2172976);const cA=new km(16777215,.5);Tt.add(cA);const S_=new Bm(16777215,.8);S_.position.set(1,1,1).normalize();Tt.add(S_);const hA=10,uA=0;let hn=null;const Qp=1e3;let jp=An.clientWidth/An.clientHeight;const _t=new Nl(-1e3*jp/2,Qp*jp/2,Qp/2,-1e3/2,-1e3,1e3);_t.position.z=hA;const Kn=new fw({antialias:!0});Kn.setSize(An.clientWidth,An.clientHeight);Kn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));An.appendChild(Kn.domElement);const Rn=new pw(_t,Kn.domElement);Rn.enableDamping=!0;Rn.dampingFactor=.05;Rn.screenSpacePanning=!0;Rn.minDistance=1;Rn.maxDistance=5e3;Rn.target.set(0,0,uA);Rn.enableRotate=!1;Ow(Rn);const fA={GetScene:()=>Tt,render:()=>Cn(),showRoomModal:(n,e)=>$w(n)},Ra=new Fw(fA,Tt,_t,Kn.domElement,ir);Gu(Tt,Cn,Ca,na);function Cn(){Rn.update(),Kn.render(Tt,_t)}function b_(){requestAnimationFrame(b_),Cn()}b_();function na(n){n&&(n.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.dispose()})}),n.parent?n.parent.remove(n):Tt.remove(n))}function dA(){hn&&(na(hn),hn=null,Ue("🗑️ Previous DXF object removed from scene."));const n=[];It.forEach(e=>{const t=Tt.getObjectByProperty("uuid",e.threeJsUuid);t&&n.push(t)}),n.forEach(e=>na(e)),It.length=0,Gu(Tt,Cn,Ca,na),Ue("🗑️ All existing hotspots removed."),Ua(),Cn()}function pA(n){hn&&(hn.traverse(e=>{(e.isMesh||e.isLine||e.isPoints)&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.transparent=n<1,i.opacity=n,i.depthWrite=n===1,i.needsUpdate=!0})}),Cn())}function Ca(n,e=1.2){const t=new kt;let i=[];if(n?(t.setFromObject(n),i.push(n)):(Tt.updateMatrixWorld(!0),Tt.traverse(l=>{(l.isMesh||l.isLine||l.isPoints)&&l.visible&&i.push(l)})),(i.length===0||t.isEmpty())&&(t.makeEmpty(),Tt.updateMatrixWorld(!0),Tt.traverse(l=>{if((l.isMesh||l.isLine||l.isPoints)&&l.visible){const h=new kt().setFromObject(l);t.union(h)}}),t.isEmpty())){Ue("⚠️ No visible geometry to fit view.");return}const r=new L;t.getSize(r);const s=new L;t.getCenter(s);const a=An.clientWidth/An.clientHeight;let o=r.x*e,c=r.y*e;o/c>a?c=o/a:o=c*a,_t.left=s.x-o/2,_t.right=s.x+o/2,_t.top=s.y+c/2,_t.bottom=s.y-c/2,_t.updateProjectionMatrix(),_t.position.set(s.x,s.y,_t.position.z),Rn.target.set(s.x,s.y,s.z),Rn.update(),Ue("📐 Camera fitted to content."),Cn()}async function mA(n){if(!n){Ue("⚠️ No file provided.");return}Ue("⏳ Reading and parsing file..."),dA(),Ue(`📁 File selected: ${n.name}`);let e,t={hotspots:[],appSettings:{}};try{const a=await n.arrayBuffer();let o={};if(n.name.endsWith(".gz")||n.name.endsWith(".json.gz")||n.name.endsWith(".dxfhs")){if(n.name.endsWith(".dxfhs")){if(typeof M_>"u"||typeof ou!="function")throw new Error("fflate library (unzipSync) not loaded. Check script imports in main.js.");o=ou(new Uint8Array(a)),Ue("🗜️ Custom Gzip archive decompression complete.")}else{if(typeof BT>"u"||typeof xl!="function")throw new Error("Pako library (ungzip) not loaded. Check script imports in main.js.");const c=xl(new Uint8Array(a),{to:"string"});o["scene.json"]=new TextEncoder().encode(c),Ue("🗜️ Standard Gzip decompression complete.")}if(o["scene.json"])e=JSON.parse(new TextDecoder().decode(o["scene.json"])),Ue("✅ Scene JSON parsed successfully.");else throw new Error("Archive does not contain 'scene.json'. Cannot load scene.");o["config.json"]?(t=JSON.parse(new TextDecoder().decode(o["config.json"])),Ue("✅ Config JSON parsed successfully.")):Ue("⚠️ No 'config.json' found in archive. Loading scene only, no hotspots will be recreated.")}else if(n.name.endsWith(".json")){const c=new TextDecoder().decode(a);e=JSON.parse(c),Ue("✅ JSON parsed successfully.")}else throw new Error("Unsupported file type. Please select .json, .gz, or .dxfhs.")}catch(a){Ue(`❌ Failed to read or parse file: ${a.message}`),console.error("Error reading file:",a),alert("Failed to read or parse the file.");return}hn=new Tx().parse(e),Tt.add(hn),hn.position.z=1.01,Ue("🎉 Main object added to scene.");const r=t.appSettings&&t.appSettings.dxfOpacity!==void 0?t.appSettings.dxfOpacity:1;hn&&pA(r),It.length=0,t.hotspots.forEach(a=>{if(a.vertices&&a.vertices.length>=3){const o=new is;a.vertices.forEach((f,d)=>{d===0?o.moveTo(f.x,f.y):o.lineTo(f.x,f.y)});const c=new ss(o),l=a.originalType==="Unspecified"&&a.customColor?new Te(a.customColor).getHex():ma[a.originalType||a.roomType]||ma.Unspecified,h=new cl({color:new Te(l),transparent:!0,opacity:a.opacity??.5,side:xn,depthWrite:!1}),u=new Et(c,h);u.uuid=a.threeJsUuid,u.position.z=a.zLevel??ir,u.visible=a.visible,Tt.add(u),It.push({roomId:a.roomId,threeJsUuid:a.threeJsUuid,visible:a.visible,zLevel:a.zLevel!==void 0?a.zLevel:ir,roomType:a.roomType||"Unspecified",facultyName:a.facultyName||null,customColor:a.customColor||null,opacity:a.opacity!==void 0?a.opacity:.5,vertices:a.vertices,originalType:a.originalType||a.roomType})}else Ue(`⚠️ Hotspot data for "${a.roomId||"an unknown hotspot"}" is incomplete or not a valid polygon (needs >=3 vertices). Skipping recreation.`)}),Gu(Tt,Cn,Ca,na),Ue("✅ Hotspot data loaded and meshes recreated."),Ca(hn),Cn();const s=[];hn.traverse(a=>{if(a.isObject3D&&a.visible&&a.geometry){const o=a.geometry.getAttribute("position");if(o)for(let c=0;c<o.count;c++){const l=new L;l.fromBufferAttribute(o,c);const h=new L().copy(l);a.localToWorld(h),s.push(h)}if(a.userData){if(a.userData.dxfEntityType&&(a.userData.dxfEntityType==="CIRCLE"||a.userData.dxfEntityType==="ARC")&&a.userData.center){const c=new L(a.userData.center.x,a.userData.center.y,ir);a.localToWorld(c),s.push(c)}Array.isArray(a.userData.snapPoints)&&a.userData.snapPoints.forEach(c=>{const l=new L(c.x,c.y,c.z||ir);a.localToWorld(l),s.push(l)})}}}),Ra.setSnapPoints(s),Ue(`✨ Extracted ${s.length} potential snap points for snapping.`)}async function gA(n,e="scene",t=!0){const i=hn;if(!i||typeof i.toJSON!="function"){console.error("[Export Error] Invalid scene object. Ensure viewer.GetScene() returns a valid Three.js Scene."),Ue("❌ Export failed: Invalid scene object.");return}const r=i.clone();try{(y=>{const x=new Set(["AxesHelper","GridHelper","BoxHelper","CameraHelper","DirectionalLightHelper","HemisphereLightHelper","PointLightHelper","SpotLightHelper","SkeletonHelper"]),_=[];y.traverse(E=>{const A=It.some(w=>w.threeJsUuid===E.uuid);A&&E.isMesh&&E.material&&(Array.isArray(E.material)?E.material.forEach(w=>w.emissive.set(0)):E.material.emissive.set(0)),(x.has(E.type)||E.visible===!1&&!A||A)&&_.push(E),E.type==="Group"&&E.children.length===0&&_.push(E)}),_.forEach(E=>{E.parent&&E.parent.remove(E)})})(r);const s=r.toJSON(),a=JSON.stringify(s,null,2),o={hotspots:It.map(y=>({roomId:y.roomId,threeJsUuid:y.threeJsUuid,visible:!0,zLevel:y.zLevel,roomType:y.roomType,facultyName:y.facultyName,customColor:y.customColor,opacity:y.opacity,vertices:y.vertices,originalType:y.originalType})),appSettings:{levelZ:ir}},c=JSON.stringify(o,null,2);if(typeof M_>"u"||typeof au!="function")throw new Error("fflate library (zipSync) not loaded. Check script imports in main.js.");const l={"scene.json":new TextEncoder().encode(a),"config.json":new TextEncoder().encode(c)},h=au(l,{level:9}),u=e.replace(/\.[^/.]+$/,""),f=t?`_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}`:"";let d=prompt("Enter export file name (without extension):",u+f);d||(d=u+f);const g=`${d}.dxfhs`,v=new Blob([h],{type:"application/gzip"}),m=URL.createObjectURL(v),p=document.createElement("a");p.href=m,p.download=g,document.body.appendChild(p),p.click(),setTimeout(()=>{document.body.removeChild(p),URL.revokeObjectURL(m)},100),Ue(`✅ Scene and config exported as ${g}`)}catch(s){console.error("[Export Error] Failed to export scene:",s),Ue(`❌ Export failed: ${s.message}`)}}let w_="grab";An.style.cursor=w_;let Ki=null,tr=null;window.addEventListener("mousemove",n=>{const e=kh(n,_t,Kn.domElement);if(e&&Nw(e),Ra.isDrawing)Ra.onMove(n);else{const t=new Ol,i=Kn.domElement.getBoundingClientRect(),r=new J((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1);t.setFromCamera(r,_t);const s=t.intersectObjects(Tt.children,!0).filter(a=>It.find(c=>c.threeJsUuid===a.object.uuid)&&a.object.isMesh&&a.object.visible);if(s.length>0){const a=s[0].object,o=It.find(c=>c.threeJsUuid===a.uuid);o&&o.uuid!==Ki&&(Ki=o.threeJsUuid,tr!==Ki&&ga(Ki,Dw),Xu(o),An.style.cursor="pointer")}else Ki!==null&&(tr!==Ki&&ga(null),Ki=null,Ua()),An.style.cursor=w_}Cn()});window.addEventListener("click",n=>{if(Ra.isDrawing)return;const e=new Ol,t=Kn.domElement.getBoundingClientRect(),i=new J((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1);e.setFromCamera(i,_t);const r=e.intersectObjects(Tt.children,!0).filter(s=>It.find(o=>o.threeJsUuid===s.object.uuid)&&s.object.isMesh&&s.object.visible);if(r.length>0){const s=r[0].object,a=It.find(o=>o.threeJsUuid===s.uuid);if(a){tr=a.threeJsUuid,ga(tr,Zm),Xu(a),document.querySelectorAll("#roomListTable tbody tr").forEach(l=>l.classList.remove("selected-room"));const c=document.querySelector(`#roomListTable tbody tr[three-guid="${tr}"]`);c&&c.classList.add("selected-room"),Ue(`Hotspot "${a.roomId}" selected.`)}}else tr!==null&&(tr=null,ga(null),Ua(),document.querySelectorAll("#roomListTable tbody tr").forEach(a=>a.classList.remove("selected-room")),Ue("Selection cleared."));Cn()});window.addEventListener("resize",()=>{const n=An.clientWidth,e=An.clientHeight;Kn.setSize(n,e);const t=n/e,i=Rn.target,r=_t.right-_t.left,s=_t.top-_t.bottom;let a,o;r/s>t?(a=r,o=a/t):(o=s,a=o*t),_t.left=i.x-a/2,_t.right=i.x+a/2,_t.top=i.y+o/2,_t.bottom=i.y-o/2,_t.updateProjectionMatrix(),Cn(),Ue("📐 Window resized, camera updated.")});rA.addEventListener("change",async n=>{const e=n.target.files[0];e&&await mA(e)});sA.addEventListener("click",()=>{Ra.enableDrawing()});aA.addEventListener("click",()=>{Ca(hn)});oA.addEventListener("click",()=>{Jw()});lA.addEventListener("click",()=>{gA()});Ue("Welcome! Load a .json, .gz, or .dxfhs file, or draw a new polygon hotspot.");
