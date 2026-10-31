(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const xo="187",lh=0,al=1,ch=2,Ms=1,hh=2,xs=3,Sn=0,ti=1,Qe=2,Mn=0,Xn=1,ci=2,ol=3,ll=4,uh=5,Wn=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,xh=202,vh=203,pc=204,mc=205,Mh=206,Sh=207,yh=208,bh=209,wh=210,Th=211,Eh=212,Ah=213,Rh=214,wa=0,Ta=1,Ea=2,bs=3,Aa=4,Ra=5,Ca=6,Pa=7,gc=0,Ch=1,Ph=2,Wi=0,vo=1,Mo=2,So=3,Br=4,yo=5,bo=6,wo=7,_c=300,Yn=301,ws=302,qr=303,Yr=304,Ts=1e3,Vi=1001,La=1002,ze=1003,Lh=1004,Us=1005,$e=1006,Kr=1007,nn=1008,li=1009,xc=1010,vc=1011,Es=1012,To=1013,Di=1014,Ci=1015,ei=1016,Eo=1017,Ao=1018,Kn=1020,Mc=35902,Sc=35899,yc=1021,bc=1022,Pi=1023,rn=1026,sn=1027,wc=1028,Ro=1029,yn=1030,Co=1031,Po=1033,mr=33776,gr=33777,_r=33778,xr=33779,Da=35840,Ia=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,yr=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Ka=37814,Za=37815,$a=37816,Ja=37817,Qa=37818,ja=37819,to=37820,eo=37821,io=36492,no=36494,so=36495,ro=36283,ao=36284,br=36285,oo=36286,Dh=3200,lo=0,Ih=1,en="",we="srgb",wr="srgb-linear",Tr="linear",ie="srgb",Zr=7680,Nh=519,Uh=512,Fh=513,Oh=514,Tc=515,Bh=516,zh=517,Ec=518,Ac=519,Rc=35044,Fs=35048,cl="300 es",bi=2e3,As=2001;function kh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gh(){const s=Er("canvas");return s.style.display="block",s}const hl={};function Ar(...s){const t="THREE."+s.shift();console.log(t,...s)}function Cc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=Cc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function te(...s){s=Cc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function vr(...s){const t=s.join(" ");t in hl||(hl[t]=!0,Nt(...s))}function Hh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Vh={[wa]:wa,[Ea]:Ca,[Aa]:Aa,[bs]:Ra,[Ta]:Ta,[Ca]:Ea,[Pa]:Pa,[Ra]:bs};class bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const Ss=Math.PI/180,Zn=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function Lo(s,t){return(s%t+t)%t}function Wh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Xh(s,t,e){return s!==t?(e-s)/(t-s):0}function ys(s,t,e){return(1-e)*s+e*t}function qh(s,t,e,i){return ys(s,t,1-Math.exp(-e*i))}function Yh(s,t=1){return t-Math.abs(Lo(s,t*2)-t)}function Kh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function $h(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Jh(s,t){return s+Math.random()*(t-s)}function Qh(s){return s*(.5-Math.random())}function jh(s){s!==void 0&&(ul=s);let t=ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tu(s){return s*Ss}function eu(s){return s*Zn}function iu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function nu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function su(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),_=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*f,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function zr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Do(s,t){if(t.constructor===Float32Array)return s;const e=zr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Io(s,t){if(t.constructor===Float32Array)return s;const e=zr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Gi={DEG2RAD:Ss,RAD2DEG:Zn,generateUUID:ln,clamp:Qt,euclideanModulo:Lo,mapLinear:Wh,inverseLerp:Xh,lerp:ys,damp:qh,pingpong:Yh,smoothstep:Kh,smootherstep:Zh,randInt:$h,randFloat:Jh,randFloatSpread:Qh,seededRandom:jh,degToRad:tu,radToDeg:eu,isPowerOfTwo:iu,ceilPowerOfTwo:nu,floorPowerOfTwo:Pc,setQuaternionFromProperEuler:su,normalize:Io,denormalize:Do},Xo=class Xo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xo.prototype.isVector2=!0;let Et=Xo;class es{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*v;m<0&&(u=-u,f=-f,_=-_,v=-v,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);p=Math.sin(p*x)/E,o=Math.sin(o*x)/E,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qo=class qo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qo.prototype.isVector3=!0;let P=qo;const $r=new P,dl=new es,Yo=class Yo{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],v=n[0],m=n[3],p=n[6],x=n[1],E=n[4],b=n[7],T=n[2],w=n[5],g=n[8];return r[0]=a*v+o*x+l*T,r[3]=a*m+o*E+l*w,r[6]=a*p+o*b+l*g,r[1]=c*v+h*x+d*T,r[4]=c*m+h*E+d*w,r[7]=c*p+h*b+d*g,r[2]=u*v+f*x+_*T,r[5]=u*m+f*E+_*w,r[8]=u*p+f*b+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+i*u+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=u*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yo.prototype.isMatrix3=!0;let Bt=Yo;const Jr=new Bt,fl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ru(){const s={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(n.r=Xi(n.r),n.g=Xi(n.g),n.b=Xi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(n.r=qn(n.r),n.g=qn(n.g),n.b=qn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===en?Tr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[wr]:{primaries:t,whitePoint:i,transfer:Tr,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const Jt=ru();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Tn;class au{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Tn===void 0&&(Tn=Er("canvas")),Tn.width=t.width,Tn.height=t.height;const n=Tn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Tn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ou=0;class No{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Qr(n[a].image)):r.push(Qr(n[a]))}else r=Qr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?au.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let lu=0;const jr=new P;class Xe extends bn{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=Vi,n=Vi,r=$e,a=nn,o=Pi,l=li,c=Xe.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=ln(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jr).x}get height(){return this.source.getSize(jr).y}get depth(){return this.source.getSize(jr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=_c;Xe.DEFAULT_ANISOTROPY=1;const Ko=class Ko{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,b=(f+1)/2,T=(p+1)/2,w=(h+u)/4,g=(d+v)/4,y=(_+m)/4;return E>b&&E>T?E<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(E),n=w/i,r=g/i):b>T?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=w/n,r=y/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=g/r,n=y/r),this.set(i,n,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ko.prototype.isVector4=!0;let xe=Ko;class cu extends bn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Xe({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new No(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends cu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Lc extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hu extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Or=class Or{constructor(t,e,i,n,r,a,o,l,c,h,d,u,f,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,f,_,v,m)}set(t,e,i,n,r,a,o,l,c,h,d,u,f,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Or().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/En.setFromMatrixColumn(t,0).length(),r=1/En.setFromMatrixColumn(t,1).length(),a=1/En.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,_=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u+v*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,_=o*h,v=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uu,t,du)}lookAt(t,e,i){const n=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Ki.crossVectors(i,si),Ki.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ki.crossVectors(i,si)),Ki.normalize(),Os.crossVectors(si,Ki),n[0]=Ki.x,n[4]=Os.x,n[8]=si.x,n[1]=Ki.y,n[5]=Os.y,n[9]=si.y,n[2]=Ki.z,n[6]=Os.z,n[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],v=i[6],m=i[10],p=i[14],x=i[3],E=i[7],b=i[11],T=i[15],w=n[0],g=n[4],y=n[8],C=n[12],R=n[1],N=n[5],F=n[9],H=n[13],D=n[2],G=n[6],q=n[10],z=n[14],tt=n[3],W=n[7],Q=n[11],j=n[15];return r[0]=a*w+o*R+l*D+c*tt,r[4]=a*g+o*N+l*G+c*W,r[8]=a*y+o*F+l*q+c*Q,r[12]=a*C+o*H+l*z+c*j,r[1]=h*w+d*R+u*D+f*tt,r[5]=h*g+d*N+u*G+f*W,r[9]=h*y+d*F+u*q+f*Q,r[13]=h*C+d*H+u*z+f*j,r[2]=_*w+v*R+m*D+p*tt,r[6]=_*g+v*N+m*G+p*W,r[10]=_*y+v*F+m*q+p*Q,r[14]=_*C+v*H+m*z+p*j,r[3]=x*w+E*R+b*D+T*tt,r[7]=x*g+E*N+b*G+T*W,r[11]=x*y+E*F+b*q+T*Q,r[15]=x*C+E*H+b*z+T*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],v=t[7],m=t[11],p=t[15],x=l*f-c*u,E=o*f-c*d,b=o*u-l*d,T=a*f-c*h,w=a*u-l*h,g=a*d-o*h;return e*(v*x-m*E+p*b)-i*(_*x-m*T+p*w)+n*(_*E-v*T+p*g)-r*(_*b-v*w+m*g)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],v=t[13],m=t[14],p=t[15],x=e*o-i*a,E=e*l-n*a,b=e*c-r*a,T=i*l-n*o,w=i*c-r*o,g=n*c-r*l,y=h*v-d*_,C=h*m-u*_,R=h*p-f*_,N=d*m-u*v,F=d*p-f*v,H=u*p-f*m,D=x*H-E*F+b*N+T*R-w*C+g*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/D;return t[0]=(o*H-l*F+c*N)*G,t[1]=(n*F-i*H-r*N)*G,t[2]=(v*g-m*w+p*T)*G,t[3]=(u*w-d*g-f*T)*G,t[4]=(l*R-a*H-c*C)*G,t[5]=(e*H-n*R+r*C)*G,t[6]=(m*b-_*g-p*E)*G,t[7]=(h*g-u*b+f*E)*G,t[8]=(a*F-o*R+c*y)*G,t[9]=(i*R-e*F-r*y)*G,t[10]=(_*w-v*b+p*x)*G,t[11]=(d*b-h*w-f*x)*G,t[12]=(o*C-a*N-l*y)*G,t[13]=(e*N-i*C+n*y)*G,t[14]=(v*E-_*T-m*x)*G,t[15]=(h*T-d*E+u*x)*G,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,v=a*h,m=a*d,p=o*d,x=l*c,E=l*h,b=l*d,T=i.x,w=i.y,g=i.z;return n[0]=(1-(v+p))*T,n[1]=(f+b)*T,n[2]=(_-E)*T,n[3]=0,n[4]=(f-b)*w,n[5]=(1-(u+p))*w,n[6]=(m+x)*w,n[7]=0,n[8]=(_+E)*g,n[9]=(m-x)*g,n[10]=(1-(u+v))*g,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=En.set(n[0],n[1],n[2]).length();const o=En.set(n[4],n[5],n[6]).length(),l=En.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Mi.copy(this);const c=1/a,h=1/o,d=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,e.setFromRotationMatrix(Mi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=bi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let _,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===bi)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===As)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=bi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let _,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===bi)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===As)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Or.prototype.isMatrix4=!0;let he=Or;const En=new P,Mi=new he,uu=new P(0,0,0),du=new P(1,1,1),Ki=new P,Os=new P,si=new P,ml=new he,gl=new es;class an{constructor(t=0,e=0,i=0,n=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fu=0;const _l=new P,An=new es,Ui=new he,Bs=new P,as=new P,pu=new P,mu=new es,xl=new P(1,0,0),vl=new P(0,1,0),Ml=new P(0,0,1),Sl={type:"added"},gu={type:"removed"},Rn={type:"childadded",child:null},ta={type:"childremoved",child:null};class me extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new an,i=new es,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Bt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return An.setFromAxisAngle(t,e),this.quaternion.multiply(An),this}rotateOnWorldAxis(t,e){return An.setFromAxisAngle(t,e),this.quaternion.premultiply(An),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Bs.copy(t):Bs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(as,Bs,this.up):Ui.lookAt(Bs,as,this.up),this.quaternion.setFromRotationMatrix(Ui),n&&(Ui.extractRotation(n.matrixWorld),An.setFromRotationMatrix(Ui),this.quaternion.premultiply(An.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gu),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ne extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _u={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_u)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ia(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Jt.workingColorSpace){if(t=Lo(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ia(a,r,t+1/3),this.g=ia(a,r,t),this.b=ia(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,n),this}setStyle(t,e=we){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const i=Dc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Jt.workingToColorSpace(Ve.copy(this),t),Math.round(Qt(Ve.r*255,0,255))*65536+Math.round(Qt(Ve.g*255,0,255))*256+Math.round(Qt(Ve.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ve.copy(this),e);const i=Ve.r,n=Ve.g,r=Ve.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=we){Jt.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,n=Ve.b;return t!==we?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(zs);const i=ys(Zi.h,zs.h,e),n=ys(Zi.s,zs.s,e),r=ys(Zi.l,zs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new At;At.NAMES=Dc;class Fo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xu extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Si=new P,Fi=new P,na=new P,Oi=new P,Cn=new P,Pn=new P,yl=new P,sa=new P,ra=new P,aa=new P,oa=new xe,la=new xe,ca=new xe;class xi{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Si.subVectors(t,e),n.cross(Si);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Si.subVectors(n,e),Fi.subVectors(i,e),na.subVectors(t,e);const a=Si.dot(Si),o=Si.dot(Fi),l=Si.dot(na),c=Fi.dot(Fi),h=Fi.dot(na),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,i),ca.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ca,r.z),a}static isFrontFacing(t,e,i,n){return Si.subVectors(i,e),Fi.subVectors(t,e),Si.cross(Fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),Si.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return xi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Cn.subVectors(n,i),Pn.subVectors(r,i),sa.subVectors(t,i);const l=Cn.dot(sa),c=Pn.dot(sa);if(l<=0&&c<=0)return e.copy(i);ra.subVectors(t,n);const h=Cn.dot(ra),d=Pn.dot(ra);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Cn,a);aa.subVectors(t,r);const f=Cn.dot(aa),_=Pn.dot(aa);if(_>=0&&f<=_)return e.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Pn,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return yl.subVectors(r,n),o=(d-h)/(d-h+(f-_)),e.copy(n).addScaledVector(yl,o);const p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(Cn,a).addScaledVector(Pn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ps{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Gs.subVectors(this.max,os),Ln.subVectors(t.a,os),Dn.subVectors(t.b,os),In.subVectors(t.c,os),$i.subVectors(Dn,Ln),Ji.subVectors(In,Dn),mn.subVectors(Ln,In);let e=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-mn.z,mn.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,mn.z,0,-mn.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-mn.y,mn.x,0];return!ha(e,Ln,Dn,In,Gs)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,Ln,Dn,In,Gs))?!1:(Hs.crossVectors($i,Ji),e=[Hs.x,Hs.y,Hs.z],ha(e,Ln,Dn,In,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bi=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,ks=new Ps,Ln=new P,Dn=new P,In=new P,$i=new P,Ji=new P,mn=new P,os=new P,Gs=new P,Hs=new P,gn=new P;function ha(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){gn.fromArray(s,r);const o=n.x*Math.abs(gn.x)+n.y*Math.abs(gn.y)+n.z*Math.abs(gn.z),l=t.dot(gn),c=e.dot(gn),h=i.dot(gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const be=new P,Vs=new Et;let vu=0;class hi extends bn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=Ci,this.version=0,this._normalizationScale=t!==void 0?zr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Do(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Io(t,this.array)}}class Ic extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nc extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Mu=new Ps,ls=new P,ua=new P;class is{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Mu.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(ua)),this.expandByPoint(ls.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Su=0;const mi=new he,da=new me,Nn=new P,ri=new Ps,cs=new Ps,Ie=new P;class Te extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?Nc:Ic)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,i){return mi.makeTranslation(t,e,i),this.applyMatrix4(mi),this}scale(t,e,i){return mi.makeScale(t,e,i),this.applyMatrix4(mi),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(ri.min,cs.min),ri.expandByPoint(Ie),Ie.addVectors(ri.max,cs.max),ri.expandByPoint(Ie)):(ri.expandByPoint(cs.min),ri.expandByPoint(cs.max))}ri.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Nn.fromBufferAttribute(t,c),Ie.add(Nn)),n=Math.max(n,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new P,l[C]=new P;const h=new P,d=new P,u=new P,f=new Et,_=new Et,v=new Et,m=new P,p=new P;function x(C,R,N){c[C]=c[R]=c[N]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,C),_.fromBufferAttribute(r,R),v.fromBufferAttribute(r,N),d.sub(h),u.sub(h),_.sub(f),v.sub(f);const F=1/(_.x*v.y-v.x*_.y);isFinite(F)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-_.y).multiplyScalar(F),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(F),o[C].add(m),o[R].add(m),o[N].add(m),l[C].add(p),l[R].add(p),l[N].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,R=E.length;C<R;++C){const N=E[C],F=N.start,H=N.count;for(let D=F,G=F+H;D<G;D+=3)x(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const b=new P,T=new P,w=new P,g=new P;function y(C){w.fromBufferAttribute(n,C),g.copy(w);const R=o[C];b.copy(R),b.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(g,R);const F=T.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,F)}for(let C=0,R=i.count;C<R;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new hi(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=bl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=bl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function bl(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ln()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Ye=new P;class Rr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?zr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new hi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Do(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Io(t,this.data.array)}}const fa=new P,bu=new P,wu=new Bt;class tn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=fa.subVectors(i,e).cross(bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wu.getNormalMatrix(t),n=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Tu=0;class cn extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Xn,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new tn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Et().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cr extends cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Un;const hs=new P,Fn=new P,On=new P,Bn=new Et,us=new Et,Uc=new he,Ws=new P,ds=new P,Xs=new P,wl=new Et,pa=new Et,Tl=new Et;class co extends me{constructor(t=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",Un===void 0){Un=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yu(e,5);Un.setIndex([0,1,2,0,2,3]),Un.setAttribute("position",new Rr(i,3,0,!1)),Un.setAttribute("uv",new Rr(i,2,3,!1))}this.geometry=Un,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fn.setFromMatrixScale(this.matrixWorld),Uc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),On.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fn.multiplyScalar(-On.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;qs(Ws.set(-.5,-.5,0),On,a,Fn,n,r),qs(ds.set(.5,-.5,0),On,a,Fn,n,r),qs(Xs.set(.5,.5,0),On,a,Fn,n,r),wl.set(0,0),pa.set(1,0),Tl.set(1,1);let o=t.ray.intersectTriangle(Ws,ds,Xs,!1,hs);if(o===null&&(qs(ds.set(-.5,.5,0),On,a,Fn,n,r),pa.set(0,1),o=t.ray.intersectTriangle(Ws,Xs,ds,!1,hs),o===null))return;const l=t.ray.origin.distanceTo(hs);l<t.near||l>t.far||e.push({distance:l,point:hs.clone(),uv:xi.getInterpolation(hs,Ws,ds,Xs,wl,pa,Tl,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function qs(s,t,e,i,n,r){Bn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(us.x=r*Bn.x-n*Bn.y,us.y=n*Bn.x+r*Bn.y):us.copy(Bn),s.copy(t),s.x+=us.x,s.y+=us.y,s.applyMatrix4(Uc)}const zi=new P,ma=new P,Ys=new P,Ks=new P;class kr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ma.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Ks.copy(this.origin).sub(ma);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=Ks.dot(this.direction),l=-Ks.dot(Ys),c=Ks.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ma).addScaledVector(Ys,u),f}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),n=zi.dot(zi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,x=i.y-a.y,E=i.z-a.z,b=Math.abs(l),T=Math.abs(c),w=Math.abs(h);let g,y,C,R,N,F,H,D,G,q,z,tt;if(b>=T&&b>=w?(C=l,F=d,G=_,tt=p,l>=0?(g=c,y=h,R=u,N=f,H=v,D=m,q=x,z=E):(g=h,y=c,R=f,N=u,H=m,D=v,q=E,z=x)):T>=w?(C=c,F=u,G=v,tt=x,c>=0?(g=h,y=l,R=f,N=d,H=m,D=_,q=E,z=p):(g=l,y=h,R=d,N=f,H=_,D=m,q=p,z=E)):(C=h,F=f,G=m,tt=E,h>=0?(g=l,y=c,R=d,N=u,H=_,D=v,q=p,z=x):(g=c,y=l,R=u,N=d,H=v,D=_,q=x,z=p)),C===0)return null;const W=g/C,Q=y/C,j=1/C,bt=R-W*F,zt=N-Q*F,Z=H-W*G,mt=D-Q*G,Mt=q-W*tt,Pt=z-Q*tt,gt=Mt*mt-Pt*Z,Gt=bt*Pt-zt*Mt,Se=Z*zt-mt*bt;if(n){if(gt<0||Gt<0||Se<0)return null}else if((gt<0||Gt<0||Se<0)&&(gt>0||Gt>0||Se>0))return null;const Dt=gt+Gt+Se;if(Dt===0)return null;const re=j*(gt*F+Gt*G+Se*tt);return(Dt>0?re<0:re>0)?null:this.at(re/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const El=new he,_n=new kr,Zs=new is,Al=new P,$s=new P,Js=new P,Qs=new P,ga=new P,js=new P,Rl=new P,tr=new P;class ut extends me{constructor(t=new Te,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ga.fromBufferAttribute(d,t),a?js.addScaledVector(ga,h):js.addScaledVector(ga.sub(e),h))}e.add(js)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(r),_n.copy(t.ray).recast(t.near),!(Zs.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Zs,Al)===null||_n.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(El.copy(r).invert(),_n.copy(t.ray).applyMatrix4(El),!(i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_n)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){const m=u[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,T=E;b<T;b+=3){const w=o.getX(b),g=o.getX(b+1),y=o.getX(b+2);n=er(this,p,t,i,c,h,d,w,g,y),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const x=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);n=er(this,a,t,i,c,h,d,x,E,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){const m=u[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,T=E;b<T;b+=3){const w=b,g=b+1,y=b+2;n=er(this,p,t,i,c,h,d,w,g,y),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const x=m,E=m+1,b=m+2;n=er(this,a,t,i,c,h,d,x,E,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Eu(s,t,e,i,n,r,a,o){let l;if(t.side===ti?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Sn,o),l===null)return null;tr.copy(o),tr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:s}}function er(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,$s),s.getVertexPosition(l,Js),s.getVertexPosition(c,Qs);const h=Eu(s,t,e,i,$s,Js,Qs,Rl);if(h){const d=new P;xi.getBarycoord(Rl,$s,Js,Qs,d),n&&(h.uv=xi.getInterpolatedAttribute(n,o,l,c,d,new Et)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,l,c,d,new Et)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};xi.getNormal($s,Js,Qs,u.normal),h.face=u,h.barycoord=d}return h}class Au extends Xe{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ze,h=ze,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xn=new is,Ru=new Et(.5,.5),ir=new P;class Rs{constructor(t=new tn,e=new tn,i=new tn,n=new tn,r=new tn,a=new tn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],v=r[9],m=r[10],p=r[11],x=r[12],E=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,f-h,p-_,T-x).normalize(),n[1].setComponents(c+a,f+h,p+_,T+x).normalize(),n[2].setComponents(c+o,f+d,p+v,T+E).normalize(),n[3].setComponents(c-o,f-d,p-v,T-E).normalize(),i)n[4].setComponents(l,u,m,b).normalize(),n[5].setComponents(c-l,f-u,p-m,T-b).normalize();else if(n[4].setComponents(c-l,f-u,p-m,T-b).normalize(),e===bi)n[5].setComponents(c+l,f+u,p+m,T+b).normalize();else if(e===As)n[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(t){xn.center.set(0,0,0);const e=Ru.distanceTo(t.center);return xn.radius=.7071067811865476+e,xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ir.x=n.normal.x>0?t.max.x:t.min.x,ir.y=n.normal.y>0?t.max.y:t.min.y,ir.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cl=new he;class Oo{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];Cl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Rs),i[n].setFromProjectionMatrix(Cl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Rs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new Oo().copy(this)}}class Fc extends cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new P,Lr=new P,Pl=new he,fs=new kr,nr=new is,_a=new P,Ll=new P;class Cu extends me{constructor(t=new Te,e=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Pr.fromBufferAttribute(e,n-1),Lr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Pr.distanceTo(Lr);t.setAttribute("lineDistance",new se(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(n),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Pl.copy(n).invert(),fs.copy(t.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){const p=h.getX(v),x=h.getX(v+1),E=sr(this,t,fs,l,p,x,v);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(f),p=sr(this,t,fs,l,v,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){const p=sr(this,t,fs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=sr(this,t,fs,l,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sr(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(Pr.fromBufferAttribute(o,n),Lr.fromBufferAttribute(o,r),e.distanceSqToSegment(Pr,Lr,_a,Ll)>i)return;_a.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(_a);if(!(c<t.near||c>t.far))return{distance:c,point:Ll.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Oc extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dl=new he,ho=new kr,rr=new is,ar=new P;class Bc extends me{constructor(t=new Te,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(n),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Dl.copy(n).invert(),ho.copy(t.ray).applyMatrix4(Dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,v=f;_<v;_++){const m=c.getX(_);ar.fromBufferAttribute(d,m),Il(ar,m,l,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,v=f;_<v;_++)ar.fromBufferAttribute(d,_),Il(ar,_,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Il(s,t,e,i,n,r,a){const o=ho.distanceSqToPoint(s);if(o<e){const l=new P;ho.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zc extends Xe{constructor(t=[],e=Yn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hn extends Xe{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n extends Xe{constructor(t,e,i=Di,n,r,a,o=ze,l=ze,c,h=rn,d=1){if(h!==rn&&h!==sn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new No(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class kc extends $n{constructor(t,e=Di,i=Yn,n,r,a=ze,o=ze,l,c=rn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Gc extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ft extends Te{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,r,4),_("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function _(v,m,p,x,E,b,T,w,g,y,C){const R=b/g,N=T/y,F=b/2,H=T/2,D=w/2,G=g+1,q=y+1;let z=0,tt=0;const W=new P;for(let Q=0;Q<q;Q++){const j=Q*N-H;for(let bt=0;bt<G;bt++){const zt=bt*R-F;W[v]=zt*x,W[m]=j*E,W[p]=D,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(bt/g),d.push(1-Q/y),z+=1}}for(let Q=0;Q<y;Q++)for(let j=0;j<g;j++){const bt=u+j+G*Q,zt=u+j+G*(Q+1),Z=u+(j+1)+G*(Q+1),mt=u+(j+1)+G*Q;l.push(bt,zt,mt),l.push(zt,Z,mt),tt+=6}o.addGroup(f,tt,C),f+=tt,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jn extends Te{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,_=i*2+r,v=n+1,m=new P,p=new P;for(let x=0;x<=_;x++){let E=0,b=0,T=0,w=0;if(x<=i){const C=x/i,R=C*Math.PI/2;b=-h-t*Math.cos(R),T=t*Math.sin(R),w=-t*Math.cos(R),E=C*d}else if(x<=i+r){const C=(x-i)/r;b=-h+C*e,T=t,w=0,E=d+C*u}else{const C=(x-i-r)/i,R=C*Math.PI/2;b=h+t*Math.sin(R),T=t*Math.cos(R),w=t*Math.sin(R),E=d+u+C*d}const g=Math.max(0,Math.min(1,E/f));let y=0;x===0?y=.5/n:x===_&&(y=-.5/n);for(let C=0;C<=n;C++){const R=C/n,N=R*Math.PI*2,F=Math.sin(N),H=Math.cos(N);p.x=-T*H,p.y=b,p.z=T*F,o.push(p.x,p.y,p.z),m.set(-T*H,w,T*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+y,g)}if(x>0){const C=(x-1)*v;for(let R=0;R<n;R++){const N=C+R,F=C+R+1,H=x*v+R,D=x*v+R+1;a.push(N,F,H),a.push(F,D,H)}}}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Bo extends Te{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends Te{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],f=[];let _=0;const v=[],m=i/2;let p=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function x(){const b=new P,T=new P;let w=0;const g=(e-t)/i;for(let y=0;y<=r;y++){const C=[],R=y/r,N=R*(e-t)+t;for(let F=0;F<=n;F++){const H=F/n,D=H*l+o,G=Math.sin(D),q=Math.cos(D);T.x=N*G,T.y=-R*i+m,T.z=N*q,d.push(T.x,T.y,T.z),b.set(G,g,q).normalize(),u.push(b.x,b.y,b.z),f.push(H,1-R),C.push(_++)}v.push(C)}for(let y=0;y<n;y++)for(let C=0;C<r;C++){const R=v[C][y],N=v[C+1][y],F=v[C+1][y+1],H=v[C][y+1];(t>0||C!==0)&&(h.push(R,N,H),w+=3),(e>0||C!==r-1)&&(h.push(N,F,H),w+=3)}c.addGroup(p,w,0),p+=w}function E(b){const T=_,w=new Et,g=new P;let y=0;const C=b===!0?t:e,R=b===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),_++;const N=_;for(let F=0;F<=n;F++){const D=F/n*l+o,G=Math.cos(D),q=Math.sin(D);g.x=C*q,g.y=m*R,g.z=C*G,d.push(g.x,g.y,g.z),u.push(0,R,0),w.x=G*.5+.5,w.y=q*.5*R+.5,f.push(w.x,w.y),_++}for(let F=0;F<n;F++){const H=T+F,D=N+F;b===!0?h.push(D,D+1,H):h.push(D+1,D,H),y+=3}c.addGroup(p,y,b===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn extends oe{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zo extends Te{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new P,b=new P,T=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],E),f(e[w+1],b),f(e[w+2],T),l(E,b,T,x)}function l(x,E,b,T){const w=T+1,g=[];for(let y=0;y<=w;y++){g[y]=[];const C=x.clone().lerp(b,y/w),R=E.clone().lerp(b,y/w),N=w-y;for(let F=0;F<=N;F++)F===0&&y===w?g[y][F]=C:g[y][F]=C.clone().lerp(R,F/N)}for(let y=0;y<w;y++)for(let C=0;C<2*(w-y)-1;C++){const R=Math.floor(C/2);C%2===0?(u(g[y][R+1]),u(g[y+1][R]),u(g[y][R])):(u(g[y][R+1]),u(g[y+1][R+1]),u(g[y+1][R]))}}function c(x){const E=new P;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(x),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){const x=new P;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const b=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;a.push(b,1-T)}_(),d()}function d(){for(let x=0;x<a.length;x+=6){const E=a[x+0],b=a[x+2],T=a[x+4],w=Math.max(E,b,T),g=Math.min(E,b,T);w>.9&&g<.1&&(E<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,E){const b=x*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function _(){const x=new P,E=new P,b=new P,T=new P,w=new Et,g=new Et,y=new Et;for(let C=0,R=0;C<r.length;C+=9,R+=6){x.set(r[C+0],r[C+1],r[C+2]),E.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),w.set(a[R+0],a[R+1]),g.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),T.copy(x).add(E).add(b).divideScalar(3);const N=m(T);v(w,R+0,x,N),v(g,R+2,E,N),v(y,R+4,b,N)}}function v(x,E,b,T){T<0&&x.x===1&&(a[E]=x.x-1),b.x===0&&b.z===0&&(a[E]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.vertices,t.indices,t.radius,t.detail)}}class ko extends zo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class Me extends Te{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let E=0;E<c;E++){const b=E*d-r;_.push(b,-x,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const E=x+c*p,b=x+c*(p+1),T=x+1+c*(p+1),w=x+1+c*p;f.push(E,b,w),f.push(b,T,w)}this.setIndex(f),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.widthSegments,t.heightSegments)}}class We extends Te{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],E=p/i,b=a+E*o,T=t*Math.cos(b),w=Math.sqrt(t*t-T*T);let g=0;p===0&&a===0?g=.5/e:p===i&&l===Math.PI&&(g=-.5/e);for(let y=0;y<=e;y++){const C=y/e,R=n+C*r;d.x=-w*Math.cos(R),d.y=T,d.z=w*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+g,1-E),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const E=h[p][x+1],b=h[p][x],T=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(E,b,w),(p!==i-1||l<Math.PI)&&f.push(b,T,w)}this.setIndex(f),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Li extends Te{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new P,f=new P,_=new P;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let p=0;p<=n;p++){const x=p/n*r;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/n),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=n;m++){const p=(n+1)*v+m-1,x=(n+1)*(v-1)+m-1,E=(n+1)*(v-1)+m,b=(n+1)*v+m;l.push(p,x,b),l.push(x,E,b)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function jn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(Nl(n))n.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Nl(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const i=jn(s[e]);for(const n in i)t[n]=i[n]}return t}function Nl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Pu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Cs={clone:jn,merge:Ke};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=Pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(n.value);break;case"v2":this.uniforms[i].value=new Et().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new xe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new he().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Vc extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xt extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Iu extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nu extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ls extends me{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Uu extends Ls{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xa=new he,Ul=new P,Fl=new P;class Go{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ul),Fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(xa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const or=new P,lr=new es,Ti=new P;class Wc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(or,lr,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(or,lr,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new P,Ol=new Et,Bl=new Et;class oi extends Wc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zn*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Ol,Bl),e.subVectors(Bl,Ol)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fu extends Go{constructor(){super(new oi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Zn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Ou extends Ls{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Bu extends Go{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class Hi extends Ls{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Bu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ho extends Wc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zu extends Go{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class va extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new zu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class ku extends Ls{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const zn=-90,kn=1;class uo extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new oi(zn,kn,t,e);n.layers=this.layers,this.add(n);const r=new oi(zn,kn,t,e);r.layers=this.layers,this.add(r);const a=new oi(zn,kn,t,e);a.layers=this.layers,this.add(a);const o=new oi(zn,kn,t,e);o.layers=this.layers,this.add(o);const l=new oi(zn,kn,t,e);l.layers=this.layers,this.add(l);const c=new oi(zn,kn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gu extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Hu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vu.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vu(){this._document.hidden===!1&&this.reset()}const zl=new he;class Wu{constructor(t,e,i=0,n=1/0){this.ray=new kr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zl),this}intersectObject(t,e=!0,i=[]){return fo(t,this,i,e),i.sort(kl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)fo(t[n],this,i,e);return i.sort(kl),i}}function kl(s,t){return s.distance-t.distance}function fo(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)fo(r[a],t,e,!0)}}function Gl(s,t,e,i){const n=Xu(i);switch(e){case yc:return s*t;case wc:return s*t/n.components*n.byteLength;case Ro:return s*t/n.components*n.byteLength;case yn:return s*t*2/n.components*n.byteLength;case Co:return s*t*2/n.components*n.byteLength;case bc:return s*t*3/n.components*n.byteLength;case Pi:return s*t*4/n.components*n.byteLength;case Po:return s*t*4/n.components*n.byteLength;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _r:case xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ua:return Math.max(s,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(s,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ba:case yr:case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case io:case no:case so:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ro:case ao:return Math.ceil(s/4)*Math.ceil(t/4)*8;case br:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xu(s){switch(s){case li:case xc:return{byteLength:1,components:1};case Es:case vc:case ei:return{byteLength:2,components:1};case Eo:case Ao:return{byteLength:2,components:4};case Di:case To:case Ci:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);function Xc(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
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
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,od=`#ifdef USE_BUMPMAP
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,_d=`vec3 transformedNormal = objectNormal;
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
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
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
}`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Wd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nf=`#if defined( USE_POINTS_UV )
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
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,of=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
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
#endif`,hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
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
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
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
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
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
}`,tp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ep=`#define DISTANCE
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
}`,ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#define LAMBERT
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
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,up=`#define MATCAP
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
}`,dp=`#define MATCAP
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
}`,fp=`#define NORMAL
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
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
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
}`,gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_p=`#define STANDARD
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
}`,xp=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,vp=`#define TOON
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
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Sp=`uniform float size;
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
}`,yp=`uniform vec3 diffuse;
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
}`,bp=`#include <common>
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
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Tp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Yu,alphahash_pars_fragment:Ku,alphamap_fragment:Zu,alphamap_pars_fragment:$u,alphatest_fragment:Ju,alphatest_pars_fragment:Qu,aomap_fragment:ju,aomap_pars_fragment:td,batching_pars_vertex:ed,batching_vertex:id,begin_vertex:nd,beginnormal_vertex:sd,bsdfs:rd,iridescence_fragment:ad,bumpmap_pars_fragment:od,clipping_planes_fragment:ld,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:hd,clipping_planes_vertex:ud,color_fragment:dd,color_pars_fragment:fd,color_pars_vertex:pd,color_vertex:md,common:gd,defaultnormal_vertex:_d,displacementmap_pars_vertex:xd,displacementmap_vertex:vd,emissivemap_fragment:Md,emissivemap_pars_fragment:Sd,colorspace_fragment:yd,colorspace_pars_fragment:bd,envmap_fragment:wd,envmap_common_pars_fragment:Td,envmap_pars_fragment:Ed,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Bd,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Nd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,lightprobes_pars_fragment:Kd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Qd,map_fragment:jd,map_pars_fragment:tf,map_particle_fragment:ef,map_particle_pars_fragment:nf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:rf,morphinstance_vertex:af,morphcolor_vertex:of,morphnormal_vertex:lf,morphtarget_pars_vertex:cf,morphtarget_vertex:hf,normal_fragment_begin:uf,normal_fragment_maps:df,normal_pars_fragment:ff,normal_pars_vertex:pf,normal_vertex:mf,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:yf,premultiplied_alpha_fragment:bf,project_vertex:wf,dithering_fragment:Tf,dithering_pars_fragment:Ef,roughnessmap_fragment:Af,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Cf,shadowmap_pars_vertex:Pf,shadowmap_vertex:Lf,shadowmask_pars_fragment:Df,skinbase_vertex:If,skinning_pars_vertex:Nf,skinning_vertex:Uf,skinnormal_vertex:Ff,specularmap_fragment:Of,specularmap_pars_fragment:Bf,tonemapping_fragment:zf,tonemapping_pars_fragment:kf,transmission_fragment:Gf,transmission_pars_fragment:Hf,uv_pars_fragment:Vf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Yf,background_frag:Kf,backgroundCube_vert:Zf,backgroundCube_frag:$f,cube_vert:Jf,cube_frag:Qf,depth_vert:jf,depth_frag:tp,distance_vert:ep,distance_frag:ip,equirect_vert:np,equirect_frag:sp,linedashed_vert:rp,linedashed_frag:ap,meshbasic_vert:op,meshbasic_frag:lp,meshlambert_vert:cp,meshlambert_frag:hp,meshmatcap_vert:up,meshmatcap_frag:dp,meshnormal_vert:fp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:xp,meshtoon_vert:vp,meshtoon_frag:Mp,points_vert:Sp,points_frag:yp,shadow_vert:bp,shadow_frag:wp,sprite_vert:Tp,sprite_frag:Ep},pt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ri={basic:{uniforms:Ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ke([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ke([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new At(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ke([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ke([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ke([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ke([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Ke([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Ke([pt.lights,pt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Ri.physical={uniforms:Ke([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const cr={r:0,b:0,g:0},Ap=new he,qc=new Bt;qc.set(-1,0,0,0,1,0,0,0,1);function Rp(s,t,e,i,n,r){const a=new At(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const b=x.backgroundBlurriness>0;E=t.get(E,b)}return E}function _(x){let E=!1;const b=f(x);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(x,E){const b=f(E);b&&b.isCubeTexture?(c===void 0&&(c=new ut(new Ft(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:jn(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qc),c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ie,(h!==b||d!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ut(new Me(2,2),new je({name:"BackgroundMaterial",uniforms:jn(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(cr,Hc(s)),e.buffers.color.setClear(cr.r,cr.g,cr.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:_,addToRenderList:v,dispose:p}}function Cp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(N,F,H,D,G){let q=!1;const z=d(N,D,H,F);r!==z&&(r=z,c(r.object)),q=f(N,D,H,G),q&&_(N,D,H,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(N,F,H,D),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,F,H,D){const G=D.wireframe===!0;let q=i[F.id];q===void 0&&(q={},i[F.id]=q);const z=N.isInstancedMesh===!0?N.id:0;let tt=q[z];tt===void 0&&(tt={},q[z]=tt);let W=tt[H.id];W===void 0&&(W={},tt[H.id]=W);let Q=W[G];return Q===void 0&&(Q=u(l()),W[G]=Q),Q}function u(N){const F=[],H=[],D=[];for(let G=0;G<e;G++)F[G]=0,H[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,F,H,D){const G=r.attributes,q=F.attributes;let z=0;const tt=H.getAttributes();for(const W in tt)if(tt[W].location>=0){const j=G[W];let bt=q[W];if(bt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor)),j===void 0||j.attribute!==bt||bt&&j.data!==bt.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function _(N,F,H,D){const G={},q=F.attributes;let z=0;const tt=H.getAttributes();for(const W in tt)if(tt[W].location>=0){let j=q[W];j===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));const bt={};bt.attribute=j,j&&j.data&&(bt.data=j.data),G[W]=bt,z++}r.attributes=G,r.attributesNum=z,r.index=D}function v(){const N=r.newAttributes;for(let F=0,H=N.length;F<H;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){const H=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;H[N]=1,D[N]===0&&(s.enableVertexAttribArray(N),D[N]=1),G[N]!==F&&(s.vertexAttribDivisor(N,F),G[N]=F)}function x(){const N=r.newAttributes,F=r.enabledAttributes;for(let H=0,D=F.length;H<D;H++)F[H]!==N[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function E(N,F,H,D,G,q,z){z===!0?s.vertexAttribIPointer(N,F,H,G,q):s.vertexAttribPointer(N,F,H,D,G,q)}function b(N,F,H,D){v();const G=D.attributes,q=H.getAttributes(),z=F.defaultAttributeValues;for(const tt in q){const W=q[tt];if(W.location>=0){let Q=G[tt];if(Q===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const j=Q.normalized,bt=Q.itemSize,zt=t.get(Q);if(zt===void 0)continue;const Z=zt.buffer,mt=zt.type,Mt=zt.bytesPerElement,Pt=mt===s.INT||mt===s.UNSIGNED_INT||Q.gpuType===To;if(Q.isInterleavedBufferAttribute){const gt=Q.data,Gt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Se=Q.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Dt=0;Dt<W.locationSize;Dt++)p(W.location+Dt,gt.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)m(W.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Dt=0;Dt<W.locationSize;Dt++)E(W.location+Dt,bt/W.locationSize,mt,j,Gt*Mt,(Se+bt/W.locationSize*Dt)*Mt,Pt)}else{if(Q.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let gt=0;gt<W.locationSize;gt++)E(W.location+gt,bt/W.locationSize,mt,j,bt*Mt,bt/W.locationSize*gt*Mt,Pt)}}else if(z!==void 0){const j=z[tt];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(W.location,j);break;case 3:s.vertexAttrib3fv(W.location,j);break;case 4:s.vertexAttrib4fv(W.location,j);break;default:s.vertexAttrib1fv(W.location,j)}}}}x()}function T(){C();for(const N in i){const F=i[N];for(const H in F){const D=F[H];for(const G in D){const q=D[G];for(const z in q)h(q[z].object),delete q[z];delete D[G]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const H in F){const D=F[H];for(const G in D){const q=D[G];for(const z in q)h(q[z].object),delete q[z];delete D[G]}}delete i[N.id]}function g(N){for(const F in i){const H=i[F];for(const D in H){const G=H[D];if(G[N.id]===void 0)continue;const q=G[N.id];for(const z in q)h(q[z].object),delete q[z];delete G[N.id]}}}function y(N){for(const F in i){const H=i[F],D=N.isInstancedMesh===!0?N.id:0,G=H[D];if(G!==void 0){for(const q in G){const z=G[q];for(const tt in z)h(z[tt].object),delete z[tt];delete G[q]}delete H[D],Object.keys(H).length===0&&delete i[F]}}}function C(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Pp(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lp(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(g){return!(g!==Pi&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==li&&g!==Ci&&!y&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,maxSamples:T,samples:w}}function Dp(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new tn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{const x=r?0:i,E=x*4;let b=p.clippingState||null;l.value=b,b=h(_,u,E,f);for(let T=0;T!==E;++T)b[T]=e[T];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==v;++E,b+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class Vo extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new zc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ft(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Mn});r.uniforms.tEquirect.value=e;const a=new ut(n,r),o=e.minFilter;return e.minFilter===nn&&(e.minFilter=$e),new uo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Hl=256,Ip=3,Np=20,Yc=256,Kc=16,Up=3,Fp=new P,Op=new At;class Dr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new ut(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=Fp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Op));const m=new uo(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Hl,Pc(t))}_fromTexture(t,e){t.mapping===Yn||t.mapping===ws?this._setSize(t.image.length===0?Hl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=Vl(t,!1,!1),i=Math.log2(t)-Ip;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Yn||t.mapping===ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Bp(),this._integrationMaterial=zp());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Kc);for(let a=0;a<=i;a++){const o=Dr.lodToRoughness(a,i);if(a>i-Up)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Yc*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=kp());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function Vl(s,t,e){return new Vo(s,{minFilter:nn,generateMipmaps:t,type:ei,colorSpace:wr,depthBuffer:e})}function Ds(s,t,e){return new je({name:s,uniforms:t,vertexShader:Wt.cube_vert,fragmentShader:e,side:ti,blending:Mn,depthTest:!1,depthWrite:!1})}function Bp(){return Ds("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zp(){return Ds("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kp(){return Ds("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Np}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wl(){return Ds("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xl(){return Ds("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gp(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===qr||f===Yr)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const v=new Vo(_.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,_=f===qr||f===Yr,v=f===Yn||f===ws;if(_||v){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Dr(s)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return _&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new Dr(s)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===qr?u.mapping=Yn:f===Yr&&(u.mapping=ws),u}function l(u){let f=0;const _=6;for(let v=0;v<_;v++)u[v]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Hp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&vr("WebGLRenderer: "+i+" extension not supported."),n}}}function Vp(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(_=>delete n[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(const m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete n[_.id],a.unregister(_);const v=r.get(_);v&&(t.remove(v),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,v){return n[v.id]!==void 0||(v.addEventListener("dispose",o),n[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(_){const v=_.attributes;for(const m in v)t.update(v[m],s.ARRAY_BUFFER)}function d(_){const v=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const x=v!==null?v.array.length:m.array.length/3-1,E=m.count>=65535?Nc:Ic,b=new E(Math.ceil(x/3)*6,1),T=b.array;if(v!==null){const g=v.array;p=v.version;for(let y=0,C=0;y<x;y+=3){const R=g[y+0],N=g[y+1],F=g[y+2];T[C++]=R,T[C++]=N,T[C++]=N,T[C++]=F,T[C++]=F,T[C++]=R}}else{p=m.version;for(let g=0,y=0;g<x;g+=3){const C=g+0,R=g+1,N=g+2;T[y++]=C,T[y++]=R,T[y++]=R,T[y++]=N,T[y++]=N,T[y++]=C}}b.version=p;const w=r.get(_);w&&t.remove(w),r.set(_,b)}function u(_){const v=r.get(_);if(v){const m=_.index;m!==null&&v.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(const _ in n){const v=n[_].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Wp(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qp(s,t,e){const i=new WeakMap,n=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let T=o.attributes.position.count*b,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const g=new Float32Array(T*w*4*d),y=new Lc(g,T,w,d);y.type=Ci,y.needsUpdate=!0;const C=b*4;for(let N=0;N<d;N++){const F=p[N],H=x[N],D=E[N],G=T*w*4*N;for(let q=0;q<F.count;q++){const z=q*C;_===!0&&(n.fromBufferAttribute(F,q),g[G+z+0]=n.x,g[G+z+1]=n.y,g[G+z+2]=n.z,g[G+z+3]=0),v===!0&&(n.fromBufferAttribute(H,q),g[G+z+4]=n.x,g[G+z+5]=n.y,g[G+z+6]=n.z,g[G+z+7]=0),m===!0&&(n.fromBufferAttribute(D,q),g[G+z+8]=n.x,g[G+z+9]=n.y,g[G+z+10]=n.z,g[G+z+11]=D.itemSize===4?n.w:1)}}u={count:d,texture:y,size:new Et(T,w)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Yp(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Kp={[vo]:"LINEAR_TONE_MAPPING",[Mo]:"REINHARD_TONE_MAPPING",[So]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[bo]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function Zp(s,t,e,i,n,r){const a=new ii(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Te;h.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new se([0,2,0,0,2,0],2));const d=new Vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ut(h,d),f=new Ho(-1,1,1,-1,0,1);let _=null,v=null,m=!1,p,x=null,E=[],b=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let g=0;g<E.length;g++){const y=E[g];y.setSize&&y.setSize(T,w)}},this.setEffects=function(T){E=T,b=E.length>0&&E[0].isRenderPass===!0;const w=a.width,g=a.height;E.length>0&&o===null&&(o=new ii(w,g,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new ii(w,g,{type:ei,depthBuffer:!1,stencilBuffer:!1}));const y=n===!0&&E.some(C=>C.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new $n(w,g),r===!0&&(c.format=sn,c.type=Kn)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let C=0;C<E.length;C++){const R=E[C];R.setSize&&R.setSize(w,g),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,w){if(m||T.toneMapping===Wi&&E.length===0)return!1;if(x=w,w!==null){const g=w.width,y=w.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return b===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Wi,!0},this.hasRenderPass=function(){return b},this.end=function(T,w){T.toneMapping=p,m=!0;let g=a,y=o;for(let C=0;C<E.length;C++){const R=E[C];R.enabled!==!1&&(R.render(T,y,g,w),R.needsSwap!==!1&&(g=y,y=y===o?l:o))}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,d.defines={},Jt.getTransfer(_)===ie&&(d.defines.SRGB_TRANSFER="");const C=Kp[v];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(x),T.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Zc=new Xe,$c=new $n(1,1),Jc=new kc(1),Qc=new Lc,jc=new hu,th=new zc,ql=[],Yl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),$l=new Float32Array(4);function ns(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=ql[n];if(r===void 0&&(r=new Float32Array(n),ql[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Gr(s,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function $p(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function t0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;$l.set(i),s.uniformMatrix2fv(this.addr,!1,$l),Ce(e,i)}}function e0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Zl.set(i),s.uniformMatrix3fv(this.addr,!1,Zl),Ce(e,i)}}function i0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Kl.set(i),s.uniformMatrix4fv(this.addr,!1,Kl),Ce(e,i)}}function n0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function s0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function r0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function a0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function o0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function Hr(s){return s.version===0&&(s.compareFunction=Ac,s.needsUpdate=!0),s}function u0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Hr($c):r=Zc,e.setTexture2D(t||r,n)}function d0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||jc,n)}function f0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Hr(Jc):r=th,e.setTextureCube(t||r,n)}function p0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Qc,n)}function m0(s){switch(s){case 5126:return $p;case 35664:return Jp;case 35665:return Qp;case 35666:return jp;case 35674:return t0;case 35675:return e0;case 35676:return i0;case 5124:case 35670:return n0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(s,t){s.uniform1fv(this.addr,t)}function _0(s,t){const e=ns(t,this.size,2);s.uniform2fv(this.addr,e)}function x0(s,t){const e=ns(t,this.size,3);s.uniform3fv(this.addr,e)}function v0(s,t){const e=ns(t,this.size,4);s.uniform4fv(this.addr,e)}function M0(s,t){const e=ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function S0(s,t){const e=ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function y0(s,t){const e=ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function b0(s,t){s.uniform1iv(this.addr,t)}function w0(s,t){s.uniform2iv(this.addr,t)}function T0(s,t){s.uniform3iv(this.addr,t)}function E0(s,t){s.uniform4iv(this.addr,t)}function A0(s,t){s.uniform1uiv(this.addr,t)}function R0(s,t){s.uniform2uiv(this.addr,t)}function C0(s,t){s.uniform3uiv(this.addr,t)}function P0(s,t){s.uniform4uiv(this.addr,t)}function L0(s,t,e){const i=this.cache,n=t.length,r=Gr(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Hr($c):a=Zc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function D0(s,t,e){const i=this.cache,n=t.length,r=Gr(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||jc,r[a])}function I0(s,t,e){const i=this.cache,n=t.length,r=Gr(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Hr(Jc):a=th;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function N0(s,t,e){const i=this.cache,n=t.length,r=Gr(e,n);Re(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Qc,r[a])}function U0(s){switch(s){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return v0;case 35674:return M0;case 35675:return S0;case 35676:return y0;case 5124:case 35670:return b0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return E0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return N0}}class F0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}}class O0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class B0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Jl(s,t){s.seq.push(t),s.map[t.id]=t}function z0(s,t,e){const i=s.name,n=i.length;for(Ma.lastIndex=0;;){const r=Ma.exec(i),a=Ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Jl(e,c===void 0?new F0(o,s,t):new O0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new B0(o),Jl(e,d)),e=d}}}class Mr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);z0(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Ql(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const k0=37297;let G0=0;function H0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const jl=new Bt;function V0(s){Jt._getMatrix(jl,Jt.workingColorSpace,s);const t=`mat3( ${jl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Tr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function tc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+H0(s.getShaderSource(t),o)}else return r}function W0(s,t){const e=V0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const X0={[vo]:"Linear",[Mo]:"Reinhard",[So]:"Cineon",[Br]:"ACESFilmic",[bo]:"AgX",[wo]:"Neutral",[yo]:"Custom"};function q0(s,t){const e=X0[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new P;function Y0(){Jt.getLuminanceCoefficients(hr);const s=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Z0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function vs(s){return s!==""}function ec(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ic(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(s){return s.replace(J0,Q0)}function Q0(s,t){const e=Wt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return po(e)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(s){return s.replace(j0,tm)}function tm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function sc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const em={[Ms]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function im(s){return em[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nm={[ws]:"ENVMAP_MODE_REFRACTION"};function sm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rm={[gc]:"ENVMAP_BLENDING_MULTIPLY",[Ch]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function am(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rm[s.combine]||"ENVMAP_BLENDING_NONE"}function om(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=im(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sm(e),d=am(e),u=K0(e),f=Z0(r),_=n.createProgram();let v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(v=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=po(a),a=ec(a,e),a=ic(a,e),o=po(o),o=ec(o,e),o=ic(o,e),a=nc(a),o=nc(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=p+v+a,E=p+m+o,b=Ql(n,n.VERTEX_SHADER,x),T=Ql(n,n.FRAGMENT_SHADER,E);n.attachShader(_,b),n.attachShader(_,T),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(R){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(_)||"",F=n.getShaderInfoLog(b)||"",H=n.getShaderInfoLog(T)||"",D=N.trim(),G=F.trim(),q=H.trim();let z=!0,tt=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,b,T);else{const W=tc(n,b,"vertex"),Q=tc(n,T,"fragment");te("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+W+`
`+Q)}else D!==""?Nt("WebGLProgram: Program Info Log:",D):(G===""||q==="")&&(tt=!1);tt&&(R.diagnostics={runnable:z,programLog:D,vertexShader:{log:G,prefix:v},fragmentShader:{log:q,prefix:m}})}n.deleteShader(b),n.deleteShader(T),g=new Mr(n,_),y=$0(n,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(_,k0)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hm(t),e.set(t,i)),i}}class hm{constructor(t){this.id=lm++,this.code=t,this.usedTimes=0}}function um(s){return s===yn||s===yr||s===br}function dm(s,t,e,i,n,r){const a=new Uo,o=new cm,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,y,C,R,N,F){const H=R.fog,D=N.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=t.get(g.envMap||G,q),tt=u[g.type];let W=i.precision;g.precision!==null&&(W=i.getMaxPrecision(g.precision),W!==g.precision&&Nt("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=Q!==void 0?Q.length:0;let bt=0;D.morphAttributes.position!==void 0&&(bt=1),D.morphAttributes.normal!==void 0&&(bt=2),D.morphAttributes.color!==void 0&&(bt=3);let zt,Z,mt,Mt;if(tt){const ft=Ri[tt];zt=ft.vertexShader,Z=ft.fragmentShader}else{zt=g.vertexShader,Z=g.fragmentShader;const ft=o.getVertexShaderStage(g),ae=o.getFragmentShaderStage(g);o.update(g,ft,ae),mt=ft.id,Mt=ae.id}const Pt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Gt=N.isInstancedMesh===!0,Se=N.isBatchedMesh===!0,Dt=!!g.map,re=!!g.matcap,le=!!z,Kt=le&&z.isPMREMTexture===!0,Ue=!!g.aoMap,Ee=!!g.lightMap,Je=!!g.bumpMap&&g.wireframe===!1,ge=!!g.normalMap,wi=!!g.displacementMap,Pe=!!g.emissiveMap,ui=!!g.metalnessMap,di=!!g.roughnessMap,fi=g.anisotropy>0,U=g.clearcoat>0,pi=g.diffuseRoughness>0,fe=g.dispersion>0,pe=g.retroreflectivity>0,dt=g.iridescence>0,Ae=g.sheen>0,Lt=g.transmission>0,Ot=fi&&!!g.anisotropyMap,A=U&&!!g.clearcoatMap,M=U&&!!g.clearcoatNormalMap,B=U&&!!g.clearcoatRoughnessMap,et=pi&&!!g.diffuseRoughnessMap,J=dt&&!!g.iridescenceMap,st=dt&&!!g.iridescenceThicknessMap,ct=Ae&&!!g.sheenColorMap,Y=Ae&&!!g.sheenRoughnessMap,K=!!g.specularMap,at=!!g.specularColorMap,L=!!g.specularIntensityMap,$=Lt&&!!g.transmissionMap,X=Lt&&!!g.thicknessMap,ot=!!g.gradientMap,nt=!!g.alphaMap,rt=g.alphaTest>0,Rt=!!g.alphaHash,Vt=!!g.extensions;let it=Wi;g.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ct=Kt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ht={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:zt,fragmentShader:Z,defines:g.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:Se,batchingColor:Se&&N._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&N.instanceColor!==null,instancingMorph:Gt&&N.morphTexture!==null,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Dt,matcap:re,envMap:le,envMapMode:le&&z.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?Ct.length-1:null,envMapSize:Kt?Ct[0].width:null,aoMap:Ue,lightMap:Ee,bumpMap:Je,normalMap:ge,displacementMap:wi,emissiveMap:Pe,normalMapObjectSpace:ge&&g.normalMapType===Ih,normalMapTangentSpace:ge&&g.normalMapType===lo,packedNormalMap:ge&&g.normalMapType===lo&&um(g.normalMap.format),metalnessMap:ui,roughnessMap:di,anisotropy:fi,anisotropyMap:Ot,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:pi,diffuseRoughnessMap:et,dispersion:fe,retroreflection:pe,iridescence:dt,iridescenceMap:J,iridescenceThicknessMap:st,sheen:Ae,sheenColorMap:ct,sheenRoughnessMap:Y,specularMap:K,specularColorMap:at,specularIntensityMap:L,transmission:Lt,transmissionMap:$,thicknessMap:X,gradientMap:ot,opaque:g.transparent===!1&&g.blending===Xn&&g.alphaToCoverage===!1,alphaMap:nt,alphaTest:rt,alphaHash:Rt,combine:g.combine,mapUv:Dt&&f(g.map.channel),aoMapUv:Ue&&f(g.aoMap.channel),lightMapUv:Ee&&f(g.lightMap.channel),bumpMapUv:Je&&f(g.bumpMap.channel),normalMapUv:ge&&f(g.normalMap.channel),displacementMapUv:wi&&f(g.displacementMap.channel),emissiveMapUv:Pe&&f(g.emissiveMap.channel),metalnessMapUv:ui&&f(g.metalnessMap.channel),roughnessMapUv:di&&f(g.roughnessMap.channel),anisotropyMapUv:Ot&&f(g.anisotropyMap.channel),clearcoatMapUv:A&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:st&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(g.sheenRoughnessMap.channel),specularMapUv:K&&f(g.specularMap.channel),specularColorMapUv:at&&f(g.specularColorMap.channel),specularIntensityMapUv:L&&f(g.specularIntensityMap.channel),transmissionMapUv:$&&f(g.transmissionMap.channel),thicknessMapUv:X&&f(g.thicknessMap.channel),alphaMapUv:nt&&f(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ge||fi),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Dt||nt),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&ge===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:bt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.filter(ft=>ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:Dt&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===ie,decodeVideoTextureEmissive:Pe&&g.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(g.emissiveMap.colorSpace)===ie,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Qe,flipSided:g.side===ti,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Vt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&g.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function v(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)y.push(C),y.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(m(y,g),p(y,g),y.push(s.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function m(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function p(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function x(g){const y=u[g.type];let C;if(y){const R=Ri[y];C=Cs.clone(R.uniforms)}else C=g.uniforms;return C}function E(g,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new om(s,y,g,n),c.push(C),h.set(y,C)),C}function b(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:w}}function fm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function pm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function rc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ac(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,v,m,p){let x=s[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},s[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=_,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function l(u,f,_,v,m,p,x){x.reversedDepth===!0&&(m=-m);const E=o(u,f,_,v,m,p);_.transmission>0?i.push(E):_.transparent===!0?n.push(E):e.push(E)}function c(u,f,_,v,m,p){const x=o(u,f,_,v,m,p);_.transmission>0?i.unshift(x):_.transparent===!0?n.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||pm),i.length>1&&i.sort(f||rc),n.length>1&&n.sort(f||rc)}function d(){for(let u=t,f=s.length;u<f;u++){const _=s[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function mm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new ac,s.set(i,[a])):n>=r.length?(a=new ac,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new At};break;case"SpotLight":e={position:new P,direction:new P,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function _m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xm=0;function vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mm(s){const t=new gm,e=_m(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new he,a=new he;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,x=0,E=0,b=0,T=0,w=0,g=0,y=0,C=0,R=0;c.sort(vm);for(let F=0,H=c.length;F<H;F++){const D=c[F],G=D.color,q=D.intensity,z=D.distance;let tt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===yn?tt=D.shadow.map.texture:tt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=G.r*q,d+=G.g*q,u+=G.b*q;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],q);R++}else if(D.isSunLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,j=e.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=j,i.sunShadowMap[_]=tt;const bt=Q.getViewportCount();for(let zt=0;zt<bt;zt++)i.sunShadowMatrix[v+zt]=Q.getMatrix(zt),i.sunShadowCascade[v+zt]=Q._cascadeData[zt];v+=bt,_++}i.sun[f]=W,f++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,j=e.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=W,m++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(G).multiplyScalar(q),W.distance=z,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[x]=W;const Q=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,Q.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[x]=Q.matrix,D.castShadow){const j=e.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=tt,g++}x++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=W,E++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Q=D.shadow,j=e.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=tt,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(q),W.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[b]=W,b++}}E>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==b||N.numSunShadows!==_||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==g||N.numSpotMaps!==y||N.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=p,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=b,N.numSunShadows=_,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=g,N.numSpotMaps=y,N.numLightProbes=R,i.version=xm++)}function l(c,h){let d=0,u=0,f=0,_=0,v=0,m=0;const p=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){const b=c[x];if(b.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),u++}else if(b.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),_++}else if(b.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function oc(s){const t=new Mm(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sm(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new oc(s),t.set(n,[o])):r>=a.length?(o=new oc(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wm=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Tm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],lc=new he,ps=new P,Sa=new P;function Em(s,t,e){let i=new Rs;const n=new Et,r=new Et,a=new xe,o=new Iu,l=new Nu,c={},h=e.maxTextureSize,d={[Sn]:ti,[ti]:Sn,[Qe]:Qe},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:ym,fragmentShader:bm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Te;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(w,g,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===hh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);const C=s.getRenderTarget(),R=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Mn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==this.type;H&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=w.length;D<G;D++){const q=w[D],z=q.shadow;if(z===void 0){Nt("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const tt=z.getFrameExtents();n.multiply(tt),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/tt.x),n.x=r.x*tt.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/tt.y),n.y=r.y*tt.y,z.mapSize.y=r.y));const W=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===xs){if(q.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ii(n.x,n.y,{format:yn,type:ei,minFilter:$e,magFilter:$e,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new $n(n.x,n.y,Ci),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=rn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze}else q.isPointLight?(z.map=new Vo(n.x),z.map.depthTexture=new kc(n.x,Di)):(z.map=new ii(n.x,n.y),z.map.depthTexture=new $n(n.x,n.y,Di)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=rn,this.type===Ms?(z.map.depthTexture.compareFunction=W?Ec:Tc,z.map.depthTexture.minFilter=$e,z.map.depthTexture.magFilter=$e):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==n.x||z.map.height!==n.y)&&z.map.setSize(n.x,n.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,y);const j=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let bt=0;bt<Q;bt++){const zt=z.getCamera(bt);if(q.isPointLight){const Z=z.camera,mt=z.matrix,Mt=q.distance||Z.far;Mt!==Z.far&&(Z.far=Mt,Z.updateProjectionMatrix()),ps.setFromMatrixPosition(q.matrixWorld),Z.position.copy(ps),Sa.copy(Z.position),Sa.add(wm[bt]),Z.up.copy(Tm[bt]),Z.lookAt(Sa),Z.updateMatrixWorld(),mt.makeTranslation(-ps.x,-ps.y,-ps.z),lc.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(lc,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,bt),s.clear();else{bt===0&&(s.setRenderTarget(z.map),s.clear());const Z=z.getViewport(bt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a)}i=z.getFrustum(bt),b(g,y,zt,q,j,this.type)}z.isPointLightShadow!==!0&&this.type===xs&&x(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(C,R,N)};function x(w,g){const y=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ii(n.x,n.y,{format:yn,type:ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(g,null,y,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(g,null,y,f,v,null)}function E(w,g,y,C){let R=null;const N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=y.isPointLight===!0?l:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=R.uuid,H=g.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let G=D[H];G===void 0&&(G=R.clone(),D[H]=G,g.addEventListener("dispose",T)),R=G}if(R.visible=g.visible,R.wireframe=g.wireframe,C===xs?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=s.properties.get(R);F.light=y}return R}function b(w,g,y,C,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===xs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const D=t.update(w),G=w.material;if(Array.isArray(G)){const q=D.groups;for(let z=0,tt=q.length;z<tt;z++){const W=q[z],Q=G[W.materialIndex];if(Q&&Q.visible){const j=E(w,Q,C,N);w.onBeforeShadow(s,w,g,y,D,j,W),s.renderBufferDirect(y,null,D,j,w,W),w.onAfterShadow(s,w,g,y,D,j,W)}}}else if(G.visible){const q=E(w,G,C,N);w.onBeforeShadow(s,w,g,y,D,q,null),s.renderBufferDirect(y,null,D,q,w,null),w.onAfterShadow(s,w,g,y,D,q,null)}}const H=w.children;for(let D=0,G=H.length;D<G;D++)b(H[D],g,y,C,R,N)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const C=c[y],R=w.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Am(s,t){function e(){let L=!1;const $=new xe;let X=null;const ot=new xe(0,0,0,0);return{setMask:function(nt){X!==nt&&!L&&(s.colorMask(nt,nt,nt,nt),X=nt)},setLocked:function(nt){L=nt},setClear:function(nt,rt,Rt,Vt,it){it===!0&&(nt*=Vt,rt*=Vt,Rt*=Vt),$.set(nt,rt,Rt,Vt),ot.equals($)===!1&&(s.clearColor(nt,rt,Rt,Vt),ot.copy($))},reset:function(){L=!1,X=null,ot.set(-1,0,0,0)}}}function i(){let L=!1,$=!1,X=null,ot=null,nt=null;return{setReversed:function(rt){if($!==rt){const Rt=t.get("EXT_clip_control");rt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),$=rt;const Vt=nt;nt=null,this.setClear(Vt)}},getReversed:function(){return $},setTest:function(rt){rt?gt(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(rt){X!==rt&&!L&&(s.depthMask(rt),X=rt)},setFunc:function(rt){if($&&(rt=Vh[rt]),ot!==rt){switch(rt){case wa:s.depthFunc(s.NEVER);break;case Ta:s.depthFunc(s.ALWAYS);break;case Ea:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Aa:s.depthFunc(s.EQUAL);break;case Ra:s.depthFunc(s.GEQUAL);break;case Ca:s.depthFunc(s.GREATER);break;case Pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=rt}},setLocked:function(rt){L=rt},setClear:function(rt){nt!==rt&&(nt=rt,$&&(rt=1-rt),s.clearDepth(rt))},reset:function(){L=!1,X=null,ot=null,nt=null,$=!1}}}function n(){let L=!1,$=null,X=null,ot=null,nt=null,rt=null,Rt=null,Vt=null,it=null;return{setTest:function(Ct){L||(Ct?gt(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Ct){$!==Ct&&!L&&(s.stencilMask(Ct),$=Ct)},setFunc:function(Ct,Ht,ft){(X!==Ct||ot!==Ht||nt!==ft)&&(s.stencilFunc(Ct,Ht,ft),X=Ct,ot=Ht,nt=ft)},setOp:function(Ct,Ht,ft){(rt!==Ct||Rt!==Ht||Vt!==ft)&&(s.stencilOp(Ct,Ht,ft),rt=Ct,Rt=Ht,Vt=ft)},setLocked:function(Ct){L=Ct},setClear:function(Ct){it!==Ct&&(s.clearStencil(Ct),it=Ct)},reset:function(){L=!1,$=null,X=null,ot=null,nt=null,rt=null,Rt=null,Vt=null,it=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],v=null,m=!1,p=null,x=null,E=null,b=null,T=null,w=null,g=null,y=new At(0,0,0),C=0,R=!1,N=null,F=null,H=null,D=null,G=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,tt=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=tt>=2);let Q=null,j={};const bt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),Z=new xe().fromArray(bt),mt=new xe().fromArray(zt);function Mt(L,$,X,ot){const nt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(L,rt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<X;Rt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D($+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return rt}const Pt={};Pt[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(s.DEPTH_TEST),a.setFunc(bs),Je(!1),ge(al),gt(s.CULL_FACE),Ue(Mn);function gt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Gt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Se(L,$){return u[L]!==$?(s.bindFramebuffer(L,$),u[L]=$,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=$),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=$),!0):!1}function Dt(L,$){let X=_,ot=!1;if(L){X=f.get($),X===void 0&&(X=[],f.set($,X));const nt=L.textures;if(X.length!==nt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Rt=nt.length;rt<Rt;rt++)X[rt]=s.COLOR_ATTACHMENT0+rt;X.length=nt.length,ot=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,ot=!0);ot&&s.drawBuffers(X)}function re(L){return v!==L?(s.useProgram(L),v=L,!0):!1}const le={[Wn]:s.FUNC_ADD,[dh]:s.FUNC_SUBTRACT,[fh]:s.FUNC_REVERSE_SUBTRACT};le[ph]=s.MIN,le[mh]=s.MAX;const Kt={[gh]:s.ZERO,[_h]:s.ONE,[xh]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[wh]:s.SRC_ALPHA_SATURATE,[yh]:s.DST_COLOR,[Mh]:s.DST_ALPHA,[vh]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[bh]:s.ONE_MINUS_DST_COLOR,[Sh]:s.ONE_MINUS_DST_ALPHA,[Th]:s.CONSTANT_COLOR,[Eh]:s.ONE_MINUS_CONSTANT_COLOR,[Ah]:s.CONSTANT_ALPHA,[Rh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ue(L,$,X,ot,nt,rt,Rt,Vt,it,Ct){if(L===Mn){m===!0&&(Gt(s.BLEND),m=!1);return}if(m===!1&&(gt(s.BLEND),m=!0),L!==uh){if(L!==p||Ct!==R){if((x!==Wn||T!==Wn)&&(s.blendEquation(s.FUNC_ADD),x=Wn,T=Wn),Ct)switch(L){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ci:s.blendFunc(s.ONE,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:te("WebGLState: Invalid blending: ",L);break}else switch(L){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ol:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",L);break}E=null,b=null,w=null,g=null,y.set(0,0,0),C=0,p=L,R=Ct}return}nt=nt||$,rt=rt||X,Rt=Rt||ot,($!==x||nt!==T)&&(s.blendEquationSeparate(le[$],le[nt]),x=$,T=nt),(X!==E||ot!==b||rt!==w||Rt!==g)&&(s.blendFuncSeparate(Kt[X],Kt[ot],Kt[rt],Kt[Rt]),E=X,b=ot,w=rt,g=Rt),(Vt.equals(y)===!1||it!==C)&&(s.blendColor(Vt.r,Vt.g,Vt.b,it),y.copy(Vt),C=it),p=L,R=!1}function Ee(L,$){L.side===Qe?Gt(s.CULL_FACE):gt(s.CULL_FACE);let X=L.side===ti;$&&(X=!X),Je(X),L.blending===Xn&&L.transparent===!1?Ue(Mn):Ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ot=L.stencilWrite;o.setTest(ot),ot&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function ge(L){L!==lh?(gt(s.CULL_FACE),L!==F&&(L===al?s.cullFace(s.BACK):L===ch?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),F=L}function wi(L){L!==H&&(z&&s.lineWidth(L),H=L)}function Pe(L,$,X){L?(gt(s.POLYGON_OFFSET_FILL),(D!==$||G!==X)&&(D=$,G=X,a.getReversed()&&($=-$,X=-X),s.polygonOffset($,X))):Gt(s.POLYGON_OFFSET_FILL)}function ui(L){L?gt(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function di(L){L===void 0&&(L=s.TEXTURE0+q-1),Q!==L&&(s.activeTexture(L),Q=L)}function fi(L,$,X){X===void 0&&(Q===null?X=s.TEXTURE0+q-1:X=Q);let ot=j[X];ot===void 0&&(ot={type:void 0,texture:void 0},j[X]=ot),(ot.type!==L||ot.texture!==$)&&(Q!==X&&(s.activeTexture(X),Q=X),s.bindTexture(L,$||Pt[L]),ot.type=L,ot.texture=$)}function U(){const L=j[Q];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pi(){try{s.compressedTexImage2D(...arguments)}catch(L){te("WebGLState:",L)}}function fe(){try{s.compressedTexImage3D(...arguments)}catch(L){te("WebGLState:",L)}}function pe(){try{s.texSubImage2D(...arguments)}catch(L){te("WebGLState:",L)}}function dt(){try{s.texSubImage3D(...arguments)}catch(L){te("WebGLState:",L)}}function Ae(){try{s.compressedTexSubImage2D(...arguments)}catch(L){te("WebGLState:",L)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){te("WebGLState:",L)}}function Ot(){try{s.texStorage2D(...arguments)}catch(L){te("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){te("WebGLState:",L)}}function M(){try{s.texImage2D(...arguments)}catch(L){te("WebGLState:",L)}}function B(){try{s.texImage3D(...arguments)}catch(L){te("WebGLState:",L)}}function et(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function J(L,$){d[L]!==$&&(s.pixelStorei(L,$),d[L]=$)}function st(L){Z.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function ct(L){mt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),mt.copy(L))}function Y(L,$){let X=c.get($);X===void 0&&(X=new WeakMap,c.set($,X));let ot=X.get(L);ot===void 0&&(ot=s.getUniformBlockIndex($,L.name),s.uniformBlockBinding($,ot,ot),X.set(L,ot))}function K(L,$,X){const nt=c.get($).get(L);l[nt]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,nt,X),l[nt]=X)}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,j={},u={},l={},f=new WeakMap,_=[],v=null,m=!1,p=null,x=null,E=null,b=null,T=null,w=null,g=null,y=new At(0,0,0),C=0,R=!1,N=null,F=null,H=null,D=null,G=null,Z.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Gt,bindFramebuffer:Se,drawBuffers:Dt,useProgram:re,setBlending:Ue,setMaterial:Ee,setFlipSided:Je,setCullFace:ge,setLineWidth:wi,setPolygonOffset:Pe,setScissorTest:ui,activeTexture:di,bindTexture:fi,unbindTexture:U,compressedTexImage2D:pi,compressedTexImage3D:fe,texImage2D:M,texImage3D:B,pixelStorei:J,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Ot,texStorage3D:A,texSubImage2D:pe,texSubImage3D:dt,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Lt,scissor:st,viewport:ct,reset:at}}function Rm(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap,d=new Set;let u;const f=new WeakMap,_=new Set,v=new FinalizationRegistry(A=>_.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return m?new OffscreenCanvas(A,M):Er("canvas")}function x(A,M,B){let et=1;const J=Ot(A);if((J.width>B||J.height>B)&&(et=B/Math.max(J.width,J.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const st=Math.floor(et*J.width),ct=Math.floor(et*J.height);u===void 0&&(u=p(st,ct));const Y=M?p(st,ct):u;return Y.width=st,Y.height=ct,Y.getContext("2d").drawImage(A,0,0,st,ct),Nt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+ct+")."),Y}else return"data"in A&&Nt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function E(A){return A.generateMipmaps}function b(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,M,B,et,J,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;et&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8),B===s.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),B===s.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),M===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8),B===s.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),B===s.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&(B===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),B===s.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),M===s.RGBA){const K=st?Tr:Jt.getTransfer(J);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=K===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),B===s.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(A,M){let B;return A?M===null||M===Di||M===Kn?B=s.DEPTH24_STENCIL8:M===Ci?B=s.DEPTH32F_STENCIL8:M===Es&&(B=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===Kn?B=s.DEPTH_COMPONENT24:M===Ci?B=s.DEPTH_COMPONENT32F:M===Es&&(B=s.DEPTH_COMPONENT16),B}function y(A,M){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==ze&&A.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=new WeakRef(A);i.get(A).__ref=M,_.add(M),v.register(A,M,M)}function R(A){const M=i.get(A).__ref;M!==void 0&&(_.delete(M),v.unregister(M))}function N(A){H(A.target)}function F(A){D(A.target)}function H(A){A.removeEventListener("dispose",N),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function D(A){A.removeEventListener("dispose",F),R(A),tt(A)}function G(){for(const A of _){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):H(M))}_.clear(),d.clear()}function q(A){const M=i.get(A);if(M.__webglInit===void 0)return;const B=A.source,et=f.get(B);if(et){const J=et[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(A),Object.keys(et).length===0&&f.delete(B)}i.remove(A)}function z(A){const M=i.get(A);s.deleteTexture(M.__webglTexture);const B=A.source,et=f.get(B);delete et[M.__cacheKey],a.memory.textures--}function tt(A){const M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const B=A.depthTexture;if(B&&B.renderTarget===A&&H(B),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let st=0;st<M.__webglFramebuffer[J].length;st++)s.deleteFramebuffer(M.__webglFramebuffer[J][st]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const et=A.textures;for(let J=0,st=et.length;J<st;J++){const ct=i.get(et[J]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),i.remove(et[J])}i.remove(A)}let W=0;function Q(){W=0}function j(){return W}function bt(A){W=A}function zt(){const A=W;return A>=n.maxTextures&&Nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,A}function Z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function mt(A,M){const B=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const et=A.image;if(et===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(B,A,M);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function Mt(A,M){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ee(B,A,M);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function Pt(A,M){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ee(B,A,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function gt(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Je(B,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const Gt={[Ts]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},Se={[ze]:s.NEAREST,[Lh]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[Kr]:s.LINEAR_MIPMAP_NEAREST,[nn]:s.LINEAR_MIPMAP_LINEAR},Dt={[Uh]:s.NEVER,[Ac]:s.ALWAYS,[Fh]:s.LESS,[Tc]:s.LEQUAL,[Oh]:s.EQUAL,[Ec]:s.GEQUAL,[Bh]:s.GREATER,[zh]:s.NOTEQUAL};function re(A,M){if(M.type===Ci&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===Kr||M.magFilter===Us||M.magFilter===nn||M.minFilter===$e||M.minFilter===Kr||M.minFilter===Us||M.minFilter===nn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Gt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Gt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Gt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Se[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==Us&&M.minFilter!==nn||M.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),C(M));const et=M.source;let J=f.get(et);J===void 0&&(J={},f.set(et,J));const st=Z(M);if(st!==A.__cacheKey){J[st]===void 0&&(J[st]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[st].usedTimes++;const ct=J[A.__cacheKey];ct!==void 0&&(J[A.__cacheKey].usedTimes--,ct.usedTimes===0&&z(M)),A.__cacheKey=st,A.__webglTexture=J[st].texture}return B}function Kt(A,M,B){return Math.floor(Math.floor(A/B)/M)}function Ue(A,M,B,et){const st=A.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,B,et,M.data);else{st.sort((L,$)=>L.start-$.start);let ct=0;for(let L=1;L<st.length;L++){const $=st[ct],X=st[L],ot=$.start+$.count,nt=Kt(X.start,M.width,4),rt=Kt($.start,M.width,4);X.start<=ot+1&&nt===rt&&Kt(X.start+X.count-1,M.width,4)===nt?$.count=Math.max($.count,X.start+X.count-$.start):(++ct,st[ct]=X)}st.length=ct+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),at=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let L=0,$=st.length;L<$;L++){const X=st[L],ot=Math.floor(X.start/4),nt=Math.ceil(X.count/4),rt=ot%M.width,Rt=Math.floor(ot/M.width),Vt=nt,it=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(s.TEXTURE_2D,0,rt,Rt,Vt,it,B,et,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function Ee(A,M,B){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);const J=le(A,M),st=M.source;e.bindTexture(et,A.__webglTexture,s.TEXTURE0+B);const ct=i.get(st);if(st.version!==ct.__version||J===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const it=Jt.getPrimaries(Jt.workingColorSpace),Ct=M.colorSpace===en?null:Jt.getPrimaries(M.colorSpace),Ht=M.colorSpace===en||it===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let K=x(M.image,!1,n.maxTextureSize);K=Lt(M,K);const at=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let $=w(M.internalFormat,at,L,M.normalized,M.colorSpace,M.isVideoTexture);re(et,M);let X;const ot=M.mipmaps,nt=M.isVideoTexture!==!0,rt=ct.__version===void 0||J===!0,Rt=st.dataReady,Vt=y(M,K);if(M.isDepthTexture)$=g(M.format===sn,M.type),rt&&(nt?e.texStorage2D(s.TEXTURE_2D,1,$,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,$,K.width,K.height,0,at,L,null));else if(M.isDataTexture)if(ot.length>0){nt&&rt&&e.texStorage2D(s.TEXTURE_2D,Vt,$,ot[0].width,ot[0].height);for(let it=0,Ct=ot.length;it<Ct;it++)X=ot[it],nt?Rt&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,X.width,X.height,at,L,X.data):e.texImage2D(s.TEXTURE_2D,it,$,X.width,X.height,0,at,L,X.data);M.generateMipmaps=!1}else nt?(rt&&e.texStorage2D(s.TEXTURE_2D,Vt,$,K.width,K.height),Rt&&Ue(M,K,at,L)):e.texImage2D(s.TEXTURE_2D,0,$,K.width,K.height,0,at,L,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,$,ot[0].width,ot[0].height,K.depth);for(let it=0,Ct=ot.length;it<Ct;it++)if(X=ot[it],M.format!==Pi)if(at!==null)if(nt){if(Rt)if(M.layerUpdates.size>0){const Ht=Gl(X.width,X.height,M.format,M.type);for(const ft of M.layerUpdates){const ae=X.data.subarray(ft*Ht/X.data.BYTES_PER_ELEMENT,(ft+1)*Ht/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,ft,X.width,X.height,1,at,ae)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,X.width,X.height,K.depth,at,X.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,$,X.width,X.height,K.depth,0,X.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,X.width,X.height,K.depth,at,L,X.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,$,X.width,X.height,K.depth,0,at,L,X.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&rt&&e.texStorage2D(s.TEXTURE_2D,Vt,$,ot[0].width,ot[0].height);for(let it=0,Ct=ot.length;it<Ct;it++)X=ot[it],M.format!==Pi?at!==null?nt?Rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,X.width,X.height,at,X.data):e.compressedTexImage2D(s.TEXTURE_2D,it,$,X.width,X.height,0,X.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Rt&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,X.width,X.height,at,L,X.data):e.texImage2D(s.TEXTURE_2D,it,$,X.width,X.height,0,at,L,X.data)}else if(M.isDataArrayTexture)if(nt){if(rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,$,K.width,K.height,K.depth),Rt)if(M.layerUpdates.size>0){const it=Gl(K.width,K.height,M.format,M.type);for(const Ct of M.layerUpdates){const Ht=K.data.subarray(Ct*it/K.data.BYTES_PER_ELEMENT,(Ct+1)*it/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,K.width,K.height,1,at,L,Ht)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,at,L,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,$,K.width,K.height,K.depth,0,at,L,K.data);else if(M.isData3DTexture)nt?(rt&&e.texStorage3D(s.TEXTURE_3D,Vt,$,K.width,K.height,K.depth),Rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,at,L,K.data)):e.texImage3D(s.TEXTURE_3D,0,$,K.width,K.height,K.depth,0,at,L,K.data);else if(M.isFramebufferTexture){if(rt)if(nt)e.texStorage2D(s.TEXTURE_2D,Vt,$,K.width,K.height);else{let it=K.width,Ct=K.height;for(let Ht=0;Ht<Vt;Ht++)e.texImage2D(s.TEXTURE_2D,Ht,$,it,Ct,0,at,L,null),it>>=1,Ct>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const it=s.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),K.parentNode!==it){it.appendChild(K),d.add(M),it.onpaint=Ct=>{const Ht=Ct.changedElements;for(const ft of d)Ht.includes(ft.image)&&(ft.needsUpdate=!0)},it.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const Ht=s.RGBA,ft=s.RGBA,ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ht,ft,ae,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ot.length>0){if(nt&&rt){const it=Ot(ot[0]);e.texStorage2D(s.TEXTURE_2D,Vt,$,it.width,it.height)}for(let it=0,Ct=ot.length;it<Ct;it++)X=ot[it],nt?Rt&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,at,L,X):e.texImage2D(s.TEXTURE_2D,it,$,at,L,X);M.generateMipmaps=!1}else if(nt){if(rt){const it=Ot(K);e.texStorage2D(s.TEXTURE_2D,Vt,$,it.width,it.height)}Rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at,L,K)}else e.texImage2D(s.TEXTURE_2D,0,$,at,L,K);E(M)&&M.mipmapsAutoUpdate===!0&&b(et),ct.__version=st.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Je(A,M,B){if(M.image.length!==6)return;const et=le(A,M),J=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const st=i.get(J);if(J.version!==st.__version||et===!0){e.activeTexture(s.TEXTURE0+B);const ct=Jt.getPrimaries(Jt.workingColorSpace),Y=M.colorSpace===en?null:Jt.getPrimaries(M.colorSpace),K=M.colorSpace===en||ct===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const at=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,$=[];for(let ft=0;ft<6;ft++)!at&&!L?$[ft]=x(M.image[ft],!0,n.maxCubemapSize):$[ft]=L?M.image[ft].image:M.image[ft],$[ft]=Lt(M,$[ft]);const X=$[0],ot=r.convert(M.format,M.colorSpace),nt=r.convert(M.type);let rt=w(M.internalFormat,ot,nt,M.normalized,M.colorSpace);const Rt=M.isVideoTexture!==!0,Vt=st.__version===void 0||et===!0,it=J.dataReady;let Ct=y(M,X);re(s.TEXTURE_CUBE_MAP,M);let Ht;if(M.isDepthTexture){if(rt=g(M.format===sn,M.type),Vt)if(Rt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,rt,X.width,X.height);else for(let ft=0;ft<6;ft++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,rt,X.width,X.height,0,ot,nt,null)}else if(at){Rt&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,rt,X.width,X.height);for(let ft=0;ft<6;ft++){Ht=$[ft].mipmaps;for(let ae=0;ae<Ht.length;ae++){const Le=Ht[ae];M.format!==Pi?ot!==null?Rt?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae,0,0,Le.width,Le.height,ot,Le.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae,rt,Le.width,Le.height,0,Le.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae,0,0,Le.width,Le.height,ot,nt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae,rt,Le.width,Le.height,0,ot,nt,Le.data)}}}else{if(Ht=M.mipmaps,Rt&&Vt){Ht.length>0&&Ct++;const ft=Ot($[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,rt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(L){Rt?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,$[ft].width,$[ft].height,ot,nt,$[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,rt,$[ft].width,$[ft].height,0,ot,nt,$[ft].data);for(let ae=0;ae<Ht.length;ae++){const qi=Ht[ae].image[ft].image;Rt?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae+1,0,0,qi.width,qi.height,ot,nt,qi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae+1,rt,qi.width,qi.height,0,ot,nt,qi.data)}}else{Rt?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ot,nt,$[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,rt,ot,nt,$[ft]);for(let ae=0;ae<Ht.length;ae++){const Le=Ht[ae];Rt?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae+1,0,0,ot,nt,Le.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ae+1,rt,ot,nt,Le.image[ft])}}}E(M)&&M.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),st.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ge(A,M,B,et,J,st){const ct=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),K=w(B.internalFormat,ct,Y,B.normalized,B.colorSpace),at=i.get(M),L=i.get(B);if(L.__renderTarget=M,!at.__hasExternalTextures){const $=Math.max(1,M.width>>st),X=Math.max(1,M.height>>st);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,st,K,$,X,M.depth,0,ct,Y,null):e.texImage2D(J,st,K,$,X,0,ct,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,J,L.__webglTexture,0,pe(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,J,L.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function wi(A,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const et=M.depthTexture,J=et&&et.isDepthTexture?et.type:null,st=g(M.stencilBuffer,J),ct=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(M),st,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(M),st,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,st,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,A)}else{const et=M.textures;for(let J=0;J<et.length;J++){const st=et[J],ct=r.convert(st.format,st.colorSpace),Y=r.convert(st.type),K=w(st.internalFormat,ct,Y,st.normalized,st.colorSpace);dt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(M),K,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(M),K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(A,M,B){const et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(M.depthTexture);J.__renderTarget=M;const st=et?M.depthTexture.image[0]:M.depthTexture.image;(!J.__webglTexture||st.width!==M.width||st.height!==M.height)&&(st.width=M.width,st.height=M.height,M.depthTexture.needsUpdate=!0),et?gt(M.depthTexture,0):mt(M.depthTexture,0);const ct=J.__webglTexture,Y=pe(M),K=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,at=M.depthTexture.format===sn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===rn)dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,K,ct,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,at,K,ct,0);else if(M.depthTexture.format===sn)dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,K,ct,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,at,K,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ui(A){const M=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",J)};et.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=et}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let et=0;et<6;et++)Pe(M.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?Pe(M.__webglFramebuffer[0],A,0):Pe(M.__webglFramebuffer,A,0);else if(B){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=s.createRenderbuffer(),wi(M.__webglDepthbuffer[et],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),wi(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function di(A,M,B){const et=i.get(A);M!==void 0&&ge(et.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ui(A)}function fi(A){const M=A.texture,B=i.get(A),et=i.get(M);A.addEventListener("dispose",F),C(A);const J=A.textures,st=A.isWebGLCubeRenderTarget===!0,ct=J.length>1;if(ct||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,a.memory.textures++),st){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let K=0;K<M.mipmaps.length;K++)B.__webglFramebuffer[Y][K]=s.createFramebuffer()}else B.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)B.__webglFramebuffer[Y]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ct)for(let Y=0,K=J.length;Y<K;Y++){const at=i.get(J[Y]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&dt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){const K=J[Y];B.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const at=r.convert(K.format,K.colorSpace),L=r.convert(K.type),$=w(K.internalFormat,at,L,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),X=pe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,$,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),wi(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),re(s.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)ge(B.__webglFramebuffer[Y][K],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else ge(B.__webglFramebuffer[Y],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(M)?b(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ct){for(let Y=0,K=J.length;Y<K;Y++){const at=J[Y],L=i.get(at);let $=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,L.__webglTexture),re($,at),ge(B.__webglFramebuffer,A,at,s.COLOR_ATTACHMENT0+Y,$,0),E(at)&&b($)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),re(Y,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)ge(B.__webglFramebuffer[K],A,M,s.COLOR_ATTACHMENT0,Y,K);else ge(B.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,Y,0);E(M)?b(Y):M.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ui(A)}function U(A){const M=A.textures;for(let B=0,et=M.length;B<et;B++){const J=M[B];if(E(J)&&J.mipmapsAutoUpdate===!0){const st=T(A),ct=i.get(J).__webglTexture;e.bindTexture(st,ct),b(st),e.unbindTexture()}}}const pi=[];function fe(A){if(A.samples>0){if(dt(A)===!1){const M=A.textures,B=A.width,et=A.height;let J=s.COLOR_BUFFER_BIT;const st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=i.get(A),Y=M.length>1;if(Y)for(let at=0;at<M.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let at=0;at<M.length;at++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);const L=i.get(M[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,B,et,0,0,B,et,J,s.NEAREST),l===!0&&(pi.length=0,pi.push(s.COLOR_ATTACHMENT0+at),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&pi.push(st),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pi))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let at=0;at<M.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);const L=i.get(M[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function pe(A){return Math.min(n.maxSamples,A.samples)}function dt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Lt(A,M){const B=A.colorSpace,et=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==wr&&B!==en&&(Jt.getTransfer(B)===ie?(et!==Pi||J!==li)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",B)),M}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=bt,this.setTexture2D=mt,this.setTexture2DArray=Mt,this.setTexture3D=Pt,this.setTextureCube=gt,this.rebindTextures=di,this.setupRenderTarget=fi,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ui,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=dt,this.dispose=G}function Cm(s,t){function e(i,n=en){let r;const a=Jt.getTransfer(n);if(i===li)return s.UNSIGNED_BYTE;if(i===Eo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ao)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Mc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Sc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===xc)return s.BYTE;if(i===vc)return s.SHORT;if(i===Es)return s.UNSIGNED_SHORT;if(i===To)return s.INT;if(i===Di)return s.UNSIGNED_INT;if(i===Ci)return s.FLOAT;if(i===ei)return s.HALF_FLOAT;if(i===yc)return s.ALPHA;if(i===bc)return s.RGB;if(i===Pi)return s.RGBA;if(i===rn)return s.DEPTH_COMPONENT;if(i===sn)return s.DEPTH_STENCIL;if(i===wc)return s.RED;if(i===Ro)return s.RED_INTEGER;if(i===yn)return s.RG;if(i===Co)return s.RG_INTEGER;if(i===Po)return s.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===xr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Da||i===Ia||i===Na||i===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===Oa||i===Ba||i===za||i===ka||i===yr||i===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fa||i===Oa)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===za)return r.COMPRESSED_R11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yr)return r.COMPRESSED_RG11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ha||i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===Za||i===$a||i===Ja||i===Qa||i===ja||i===to||i===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===to)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===no||i===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===io)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ro||i===ao||i===br||i===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Gc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new je({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Me(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends bn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const v=typeof XRWebGLBinding<"u",m=new Dm,p={},x=e.getContextAttributes();let E=null,b=null;const T=[],w=[],g=new Et;let y=null,C=null;const R=new oi;R.viewport=new xe;const N=new oi;N.viewport=new xe;const F=[R,N],H=new Gu;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=T[Z];return mt===void 0&&(mt=new ea,T[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=T[Z];return mt===void 0&&(mt=new ea,T[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=T[Z];return mt===void 0&&(mt=new ea,T[Z]=mt),mt.getHandSpace()};function q(Z){const mt=w.indexOf(Z.inputSource);if(mt===-1)return;const Mt=T[mt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<T.length;Z++){const mt=w[Z];mt!==null&&(w[Z]=null,T[Z].disconnect(mt))}D=null,G=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(E),f=null,u=null,d=null,n=null,b=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(g.width,g.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",z),n.addEventListener("inputsourceschange",tt),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?sn:rn,Pt=x.stencil?Kn:Di);const Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Gt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ii(u.textureWidth,u.textureHeight,{format:Pi,type:li,depthTexture:new $n(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,Mt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ii(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),zt.setContext(n),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Z){for(let mt=0;mt<Z.removed.length;mt++){const Mt=Z.removed[mt],Pt=w.indexOf(Mt);Pt>=0&&(w[Pt]=null,T[Pt].disconnect(Mt))}for(let mt=0;mt<Z.added.length;mt++){const Mt=Z.added[mt];let Pt=w.indexOf(Mt);if(Pt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=w.length){w.push(Mt),Pt=Gt;break}else if(w[Gt]===null){w[Gt]=Mt,Pt=Gt;break}if(Pt===-1)break}const gt=T[Pt];gt&&gt.connect(Mt)}}function W(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let mt=Z.near,Mt=Z.far;m.texture!==null&&(m.depthNear>0&&(mt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),H.near=N.near=R.near=mt,H.far=N.far=R.far=Mt,(D!==H.near||G!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,G=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const Pt=Z.parent,gt=H.cameras;W(H,Pt);for(let Gt=0;Gt<gt.length;Gt++)W(gt[Gt],Pt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,H,Pt)};function Q(Z,mt,Mt){Mt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let j=null;function bt(Z,mt){if(h=mt.getViewerPose(c||a),_=mt,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Pt=!1;Mt.length!==H.cameras.length&&(H.cameras.length=0,Pt=!0);for(let Dt=0;Dt<Mt.length;Dt++){const re=Mt[Dt];let le=null;if(f!==null)le=f.getViewport(re);else{const Ue=d.getViewSubImage(u,re);le=Ue.viewport,Dt===0&&(t.setRenderTargetTextures(b,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(b))}let Kt=F[Dt];Kt===void 0&&(Kt=new oi,Kt.layers.enable(Dt),Kt.viewport=new xe,F[Dt]=Kt),Kt.matrix.fromArray(re.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(re.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(le.x,le.y,le.width,le.height),Dt===0&&(H.matrix.copy(Kt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Pt===!0&&H.cameras.push(Kt)}const gt=n.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Dt=d.getDepthInformation(Mt[0]);Dt&&Dt.isValid&&Dt.texture&&m.init(Dt,n.renderState)}if(gt&&gt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Dt=0;Dt<Mt.length;Dt++){const re=Mt[Dt].camera;if(re){let le=p[re];le||(le=new Gc,p[re]=le);const Kt=d.getCameraImage(re);le.sourceTexture=Kt}}}}for(let Mt=0;Mt<T.length;Mt++){const Pt=w[Mt],gt=T[Mt];Pt!==null&&gt!==void 0&&gt.update(Pt,mt,c||a)}j&&j(Z,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),_=null}const zt=new Xc;zt.setAnimationLoop(bt),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}}const Nm=new he,eh=new Bt;eh.set(-1,0,0,0,1,0,0,0,1);function Um(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),E=x.envMap,b=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Fm(s,t,e,i){let n={},r={};function a(x,E){const b=E.program;i.uniformBlockBinding(x,b,n[x.id])}function o(x,E){let b=n[x.id];b===void 0&&(_(x),b=l(x),n[x.id]=b,x.addEventListener("dispose",m));const T=E.program;i.updateUBOMapping(x,T);const w=t.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){const E=s.createBuffer(),b=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(x){const E=n[x.id],b=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,g=b.length;w<g;w++){const y=b[w];if(Array.isArray(y))for(let C=0,R=y.length;C<R;C++)h(y[C],w,C,T);else h(y,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,E,b,T){if(u(x,E,b,T)===!0){const w=x.__offset,g=x.value;if(Array.isArray(g)){let y=0;for(let C=0;C<g.length;C++){const R=g[C],N=v(R,!0);d(R,x.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,x.__data)}}function d(x,E,b){typeof x=="number"||typeof x=="boolean"?E[b]=x:x.isMatrix3?(E[b]=x.elements[0],E[b+1]=x.elements[1],E[b+2]=x.elements[2],E[b+3]=0,E[b+4]=x.elements[3],E[b+5]=x.elements[4],E[b+6]=x.elements[5],E[b+7]=0,E[b+8]=x.elements[6],E[b+9]=x.elements[7],E[b+10]=x.elements[8],E[b+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-b),b):x.toArray(E,b)}function u(x,E,b,T){const w=x.value,g=E+"_"+b;if(Array.isArray(w)){T[g]===void 0&&(T[g]=[]);const y=T[g];let C=!1;for(let R=0;R<w.length;R++)f(w[R],y,R)===!0&&(C=!0);return C}return f(w,T,g)}function f(x,E,b){if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{const T=E[b];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function _(x){const E=x.uniforms;let b=0;const T=16;for(let g=0,y=E.length;g<y;g++){const C=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,N=C.length;R<N;R++){const F=C[R],H=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(E[g])||Array.isArray(F.value);let G=b;for(let z=0,tt=H.length;z<tt;z++){const W=H[z],Q=v(W,D),j=b%T,bt=j%Q.boundary,zt=j+bt;b+=bt,zt!==0&&T-zt<Q.storage&&(b+=T-zt),z===0&&(G=b),b+=Q.storage}const q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((b-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const w=b%T;return w>0&&(b+=T-w),x.__size=b,x.__cache={},this}function v(x,E){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(x){const E=x.target;E.removeEventListener("dispose",m),s.deleteBuffer(n[E.id]),delete n[E.id],delete r[E.id]}function p(){for(const x in n)s.deleteBuffer(n[x]);n={},r={}}return{bind:a,update:o,dispose:p}}const Om=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function Bm(){return Ei===null&&(Ei=new Au(Om,16,16,yn,ei),Ei.name="DFG_LUT",Ei.minFilter=$e,Ei.magFilter=$e,Ei.wrapS=Vi,Ei.wrapT=Vi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class zm{constructor(t={}){const{canvas:e=Gh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=f,m=new Set([Po,Co,Ro]),p=new Set([li,Di,Es,Kn,Eo,Ao]),x=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let T=null,w=null;const g=[],y=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,F=null,H=null,D=null,G=null;this._outputColorSpace=we;let q=0,z=0,tt=null,W=-1,Q=null;const j=new xe,bt=new xe;let zt=null;const Z=new At(0);let mt=0,Mt=e.width,Pt=e.height,gt=1,Gt=null,Se=null;const Dt=new xe(0,0,Mt,Pt),re=new xe(0,0,Mt,Pt);let le=!1;const Kt=new Rs,Ue=new Oo;let Ee=!1,Je=!1;const ge=new he,wi=new P,Pe=new xe,ui={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let di=!1;function fi(){return tt===null?gt:1}let U=i;function pi(S,I){return e.getContext(S,I)}let fe,pe,dt,Ae,Lt,Ot,A,M,B,et,J,st,ct,Y,K,at,L,$,X,ot,nt,rt,Rt;try{const S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){const I="webgl2";if(U=pi(I,S),U===null)throw pi(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(S){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),te("WebGLRenderer: "+S.message),S}function Vt(){fe=new Hp(U),fe.init(),nt=new Cm(U,fe),pe=new Lp(U,fe,t,nt),dt=new Am(U,fe),pe.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),H=U.createFramebuffer(),D=U.createFramebuffer(),G=U.createFramebuffer(),Ae=new Xp(U),Lt=new fm,Ot=new Rm(U,fe,dt,Lt,pe,nt,Ae),A=new Gp(R),M=new qu(U),rt=new Cp(U,M),B=new Vp(U,M,Ae,rt),et=new Yp(U,B,M,rt,Ae),$=new qp(U,pe,Ot),K=new Dp(Lt),J=new dm(R,A,fe,pe,rt,K),st=new Um(R,Lt),ct=new mm,Y=new Sm(fe),L=new Rp(R,A,dt,et,_,l),at=new Em(R,et,pe),Rt=new Fm(U,Ae,pe,dt),X=new Pp(U,fe,Ae),ot=new Wp(U,fe,Ae),Ae.programs=J.programs,R.capabilities=pe,R.extensions=fe,R.properties=Lt,R.renderLists=ct,R.shadowMap=at,R.state=dt,R.info=Ae}v!==li&&(C=new Zp(v,e.width,e.height,o,n,r));const it=new Im(R,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(S){S!==void 0&&(gt=S,this.setSize(Mt,Pt,!1))},this.getSize=function(S){return S.set(Mt,Pt)},this.setSize=function(S,I,V=!0){if(it.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=S,Pt=I,e.width=Math.floor(S*gt),e.height=Math.floor(I*gt),V===!0&&(e.style.width=S+"px",e.style.height=I+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Mt*gt,Pt*gt).floor()},this.setDrawingBufferSize=function(S,I,V){Mt=S,Pt=I,gt=V,e.width=Math.floor(S*V),e.height=Math.floor(I*V),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(v===li){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(Dt)},this.setViewport=function(S,I,V,O){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,I,V,O),dt.viewport(j.copy(Dt).multiplyScalar(fi()).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,I,V,O){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,I,V,O),dt.scissor(bt.copy(re).multiplyScalar(fi()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){dt.setScissorTest(le=S)},this.setOpaqueSort=function(S){Gt=S},this.setTransparentSort=function(S){Se=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,V=!0){let O=0;if(S){let k=!1;if(tt!==null){const ht=tt.texture.format;k=m.has(ht)}if(k){const ht=tt.texture.type,vt=p.has(ht),lt=L.getClearColor(),_t=L.getClearAlpha(),wt=lt.r,kt=lt.g,Zt=lt.b;vt?(x[0]=wt,x[1]=kt,x[2]=Zt,x[3]=_t,U.clearBufferuiv(U.COLOR,0,x)):(E[0]=wt,E[1]=kt,E[2]=Zt,E[3]=_t,U.clearBufferiv(U.COLOR,0,E))}else O|=U.COLOR_BUFFER_BIT}I&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),L.dispose(),ct.dispose(),Y.dispose(),Ot.dispose(),Lt.dispose(),A.dispose(),et.dispose(),B.dispose(),rt.dispose(),Rt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",$o),it.removeEventListener("sessionend",Jo),dn.stop()};function Ct(S){S.preventDefault(),Ar("WebGLRenderer: Context Lost."),N=!0}function Ht(){Ar("WebGLRenderer: Context Restored."),N=!1;const S=Ae.autoReset,I=at.enabled,V=at.autoUpdate,O=at.needsUpdate,k=at.type;Vt(),Ae.autoReset=S,at.enabled=I,at.autoUpdate=V,at.needsUpdate=O,at.type=k}function ft(S){te("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){const I=S.target;I.removeEventListener("dispose",ae),Le(I)}function Le(S){qi(S),Lt.remove(S)}function qi(S){const I=Lt.get(S).programs;I!==void 0&&(I.forEach(function(V){J.releaseProgram(V)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,V,O,k,ht){I===null&&(I=ui);const vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,lt=rh(S,I,V,O,k);dt.setMaterial(O,vt);let _t=V.index,wt=1;if(O.wireframe===!0){if(_t=B.getWireframeAttribute(V),_t===void 0)return;wt=2}const kt=V.drawRange,Zt=V.attributes.position;let St=kt.start*wt,$t=(kt.start+kt.count)*wt;ht!==null&&(St=Math.max(St,ht.start*wt),$t=Math.min($t,(ht.start+ht.count)*wt)),_t!==null?(St=Math.max(St,0),$t=Math.min($t,_t.count)):Zt!=null&&(St=Math.max(St,0),$t=Math.min($t,Zt.count));const ye=$t-St;if(ye<0||ye===1/0)return;rt.setup(k,O,lt,V,_t);let ue,ce=X;if(_t!==null&&(ue=M.get(_t),ce=ot,ce.setIndex(ue)),k.isMesh)O.wireframe===!0?(dt.setLineWidth(O.wireframeLinewidth*fi()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(k.isLine){let ke=O.linewidth;ke===void 0&&(ke=1),dt.setLineWidth(ke*fi()),k.isLineSegments?ce.setMode(U.LINES):k.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else k.isPoints?ce.setMode(U.POINTS):k.isSprite&&ce.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,yt=k._multiDrawCounts,qe=k._multiDrawCount,ee=_t?M.get(_t).bytesPerElement:1,fn=Lt.get(O).currentProgram.getUniforms();for(let Ge=0;Ge<qe;Ge++)fn.setValue(U,"_gl_DrawID",Ge),ce.render(ke[Ge]/ee,yt[Ge])}else if(k.isInstancedMesh)ce.renderInstances(St,ye,k.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yt=Math.min(V.instanceCount,ke);ce.renderInstances(St,ye,yt)}else ce.render(St,ye)};function Zo(S,I,V,O){F!==null&&S.isNodeMaterial&&F.setObject(O,S),Ee===!0&&K.setState(S,V,!1),S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=ti,S.needsUpdate=!0,rs(S,I,O),S.side=Sn,S.needsUpdate=!0,rs(S,I,O),S.side=Qe):rs(S,I,O)}this.compile=function(S,I,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,I,V),w=Y.get(V),w.init(I),y.push(w),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),S!==V&&S.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Je=this.localClippingEnabled,Ee=K.init(this.clippingPlanes,Je),Ee===!0&&K.setGlobalState(this.clippingPlanes,I),F!==null&&at.render(w.state.shadowsArray,V,I);const O=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ht=k.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){const lt=ht[vt];Zo(lt,V,I,k),O.add(lt)}else Zo(ht,V,I,k),O.add(ht)}),w=y.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(S,I,V=null){const O=this.compile(S,I,V);return new Promise(k=>{function ht(){if(O.forEach(function(vt){const _t=Lt.get(vt).currentProgram;(_t===void 0||_t.isReady())&&O.delete(vt)}),O.size===0){k(S);return}setTimeout(ht,10)}fe.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Wr=null;function nh(S){Wr&&Wr(S)}function $o(){dn.stop()}function Jo(){dn.start()}const dn=new Xc;dn.setAnimationLoop(nh),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(S){Wr=S,it.setAnimationLoop(S),S===null?dn.stop():dn.start()},it.addEventListener("sessionstart",$o),it.addEventListener("sessionend",Jo),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(S,I);const V=it.enabled===!0&&it.isPresenting===!0,O=C!==null&&(tt===null||V)&&C.begin(R,tt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,I,tt),w=Y.get(S,y.length),w.init(I),w.state.textureUnits=Ot.getTextureUnits(),y.push(w),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Ue.setFromArrayCamera(I):Kt.setFromProjectionMatrix(ge,bi,I.reversedDepth),Je=this.localClippingEnabled,Ee=K.init(this.clippingPlanes,Je),T=ct.get(S,g.length),T.init(),g.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){const vt=R.xr.getDepthSensingMesh();vt!==null&&Xr(vt,I,-1/0,R.sortObjects)}Xr(S,I,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Gt,Se),di=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,di&&L.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&K.beginShadows();const k=w.state.shadowsArray;if(at.render(k,S,I),Ee===!0&&K.endShadows(),(O&&C.hasRenderPass())===!1){const vt=T.opaque,lt=T.transmissive;if(w.setupLights(),I.isArrayCamera){const _t=I.cameras;if(lt.length>0)for(let wt=0,kt=_t.length;wt<kt;wt++){const Zt=_t[wt];jo(vt,lt,S,Zt)}di&&L.render(S);for(let wt=0,kt=_t.length;wt<kt;wt++){const Zt=_t[wt];Qo(T,S,Zt,Zt.viewport)}}else lt.length>0&&jo(vt,lt,S,I),di&&L.render(S),Qo(T,S,I)}tt!==null&&z===0&&(Ot.updateMultisampleRenderTarget(tt),Ot.updateRenderTargetMipmap(tt)),O&&C.end(R),S.isScene===!0&&S.onAfterRender(R,S,I),rt.resetDefaultState(),W=-1,Q=null,y.pop(),y.length>0?(w=y[y.length-1],Ot.setTextureUnits(w.state.textureUnits),Ee===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,F!==null&&F.renderEnd()};function Xr(S,I,V,O){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){const vt=I.isArrayCamera?Ue:Kt;if(!S.frustumCulled||S.intersectsFrustum(vt)){O&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);const lt=et.update(S),_t=S.material;_t.visible&&T.push(S,lt,_t,V,Pe.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){const vt=I.isArrayCamera?Ue:Kt;if(!S.frustumCulled||S.intersectsFrustum(vt)){const lt=et.update(S),_t=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Pe.copy(lt.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(_t)){const wt=lt.groups;for(let kt=0,Zt=wt.length;kt<Zt;kt++){const St=wt[kt],$t=_t[St.materialIndex];$t&&$t.visible&&T.push(S,lt,$t,V,Pe.z,St,I)}}else _t.visible&&T.push(S,lt,_t,V,Pe.z,null,I)}}}const ht=S.children;for(let vt=0,lt=ht.length;vt<lt;vt++)Xr(ht[vt],I,V,O)}function Qo(S,I,V,O){const{opaque:k,transmissive:ht,transparent:vt}=S;w.setupLightsView(V),Ee===!0&&K.setGlobalState(R.clippingPlanes,V),O&&dt.viewport(j.copy(O)),k.length>0&&Is(k,I,V),ht.length>0&&Is(ht,I,V),vt.length>0&&Is(vt,I,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function jo(S,I,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){const St=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new ii(1,1,{generateMipmaps:!0,type:St?ei:li,minFilter:nn,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const ht=w.state.transmissionRenderTarget[O.id],vt=O.viewport||j;ht.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);const lt=R.getRenderTarget(),_t=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(ht),R.getClearColor(Z),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),di&&L.render(V);const kt=R.toneMapping;R.toneMapping=Wi;const Zt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),Ee===!0&&K.setGlobalState(R.clippingPlanes,O),Is(S,V,O),Ot.updateMultisampleRenderTarget(ht),Ot.updateRenderTargetMipmap(ht),fe.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let $t=0,ye=I.length;$t<ye;$t++){const ue=I[$t],{object:ce,geometry:ke,material:yt,group:qe}=ue;if(yt.side===Qe&&ce.layers.test(O.layers)){const ee=yt.side;yt.side=ti,yt.needsUpdate=!0,tl(ce,V,O,ke,yt,qe),yt.side=ee,yt.needsUpdate=!0,St=!0}}St===!0&&(Ot.updateMultisampleRenderTarget(ht),Ot.updateRenderTargetMipmap(ht))}R.setRenderTarget(lt,_t,wt),R.setClearColor(Z,mt),Zt!==void 0&&(O.viewport=Zt),R.toneMapping=kt}function Is(S,I,V){const O=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ht=S.length;k<ht;k++){const vt=S[k],{object:lt,geometry:_t,group:wt}=vt;let kt=vt.material;kt.allowOverride===!0&&O!==null&&(kt=O),lt.layers.test(V.layers)&&tl(lt,I,V,_t,kt,wt)}}function tl(S,I,V,O,k,ht){F!==null&&k.isNodeMaterial&&F.setObject(S,k),S.onBeforeRender(R,I,V,O,k,ht),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(R,I,V,O,S,ht),k.transparent===!0&&k.side===Qe&&k.forceSinglePass===!1?(k.side=ti,k.needsUpdate=!0,R.renderBufferDirect(V,I,O,k,S,ht),k.side=Sn,k.needsUpdate=!0,R.renderBufferDirect(V,I,O,k,S,ht),k.side=Qe):R.renderBufferDirect(V,I,O,k,S,ht),S.onAfterRender(R,I,V,O,k,ht)}function el(S){let I=0;for(const V of S)V.texture!==null&&I++;return I}function rs(S,I,V){I.isScene!==!0&&(I=ui);const O=Lt.get(S),k=w.state.lights,ht=w.state.shadowsArray,vt=k.state.version,lt=J.getParameters(S,k.state,ht,I,V,w.state.lightProbeGridArray),_t=J.getProgramCacheKey(lt);let wt=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=A.get(S.envMap||O.environment,kt),O.envMapRotation=O.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",ae),wt=new Map,O.programs=wt,O.programVariants=new Map);let Zt=wt.get(_t);if(Zt!==void 0){if(O.currentProgram===Zt&&O.lightsStateVersion===vt)return nl(S,lt),Zt}else lt.uniforms=J.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,lt),S.onBeforeCompile(lt,R),Zt=J.acquireProgram(lt,_t),wt.set(_t,Zt),O.uniforms=lt.uniforms;const St=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=K.uniform),nl(S,lt),O.needsLights=oh(S),O.lightsStateVersion=vt,O.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=el(w.state.lightProbeGridArray),O.currentProgram=Zt,O.uniformsList=null,Zt}function sh(S,I,V,O,k){const ht=Lt.get(S),vt=ht.currentProgram.id+","+O+","+k;let lt=ht.programVariants.get(vt);return lt===void 0?(lt=rs(S,I,V),ht.programVariants.set(vt,lt)):(ht.currentProgram=lt,ht.uniformsList=null,ht.outputColorSpace=O,ht.toneMapping=k),lt}function il(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function nl(S,I){const V=Lt.get(S);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function rh(S,I,V,O,k){I.isScene!==!0&&(I=ui),Ot.resetTextureUnits();const ht=I.fog,vt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,lt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Jt.workingColorSpace,_t=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,wt=A.get(O.envMap||vt,_t),kt=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),St=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,ye=!!V.morphAttributes.color;let ue=Wi;O.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ue=R.toneMapping);const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ke=ce!==void 0?ce.length:0,yt=Lt.get(O),qe=w.state.lights;if(Ee===!0&&(Je===!0||S!==Q)){const _e=S===Q&&O.id===W;K.setState(O,S,_e)}let ee=!1,fn=!1;O.version===yt.__version?yt.needsLights&&yt.lightsStateVersion!==qe.state.version||k.isBatchedMesh&&yt.batching===!1||!k.isBatchedMesh&&yt.batching===!0||k.isBatchedMesh&&yt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&yt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&yt.instancing===!1||!k.isInstancedMesh&&yt.instancing===!0||k.isSkinnedMesh&&yt.skinning===!1||!k.isSkinnedMesh&&yt.skinning===!0||k.isInstancedMesh&&yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&yt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&yt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&yt.instancingMorph===!1&&k.morphTexture!==null||yt.envMap!==wt||O.fog===!0&&yt.fog!==ht||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==K.numPlanes||yt.numIntersection!==K.numIntersection)||yt.vertexAlphas!==kt||yt.vertexTangents!==Zt||yt.morphTargets!==St||yt.morphNormals!==$t||yt.morphColors!==ye||yt.morphTargetsCount!==ke||yt.numLightProbeGrids!==el(w.state.lightProbeGridArray)?ee=!0:(yt.outputColorSpace!==lt||yt.toneMapping!==ue)&&(fn=!0):(ee=!0,yt.__version=O.version);let Ge=yt.currentProgram;(ee===!0||fn===!0)&&(Ge=fn===!0?sh(O,I,k,lt,ue):rs(O,I,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ge,yt));let Ns=!1,Yi=!1,pn=!1;const jt=Ge.getUniforms(),Fe=yt.uniforms;if(dt.useProgram(Ge.program)&&(Ns=!0,Yi=!0,pn=!0),O.id!==W&&(W=O.id,Yi=!0),Ns||Q!==S){dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),jt.setValue(U,"projectionMatrix",S.projectionMatrix),jt.setValue(U,"viewMatrix",S.matrixWorldInverse);const De=jt.map.cameraPosition;De!==void 0&&De.setValue(U,wi.setFromMatrixPosition(S.matrixWorld)),pe.logarithmicDepthBuffer&&jt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&jt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Yi=!0,pn=!0)}if(yt.needsLights&&(qe.state.sunShadowMap.length>0&&jt.setValue(U,"sunShadowMap",qe.state.sunShadowMap,Ot),qe.state.directionalShadowMap.length>0&&jt.setValue(U,"directionalShadowMap",qe.state.directionalShadowMap,Ot),qe.state.spotShadowMap.length>0&&jt.setValue(U,"spotShadowMap",qe.state.spotShadowMap,Ot),qe.state.pointShadowMap.length>0&&jt.setValue(U,"pointShadowMap",qe.state.pointShadowMap,Ot)),k.isSkinnedMesh){jt.setOptional(U,k,"bindMatrix"),jt.setOptional(U,k,"bindMatrixInverse");const _e=k.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),jt.setValue(U,"boneTexture",_e.boneTexture,Ot))}k.isBatchedMesh&&(jt.setOptional(U,k,"batchingTexture"),jt.setValue(U,"batchingTexture",k._matricesTexture,Ot),jt.setOptional(U,k,"batchingIdTexture"),jt.setValue(U,"batchingIdTexture",k._indirectTexture,Ot),jt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&jt.setValue(U,"batchingColorTexture",k._colorsTexture,Ot));const vi=V.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&$.update(k,V,Ge),(Yi||yt.receiveShadow!==k.receiveShadow)&&(yt.receiveShadow=k.receiveShadow,jt.setValue(U,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Fe.envMapIntensity.value=I.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Bm()),Yi){if(jt.setValue(U,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&ah(Fe,pn),ht&&O.fog===!0&&st.refreshFogUniforms(Fe,ht),st.refreshMaterialUniforms(Fe,O,gt,Pt,w.state.transmissionRenderTarget[S.id]),yt.needsLights&&yt.numLightProbeGrids>0){const _e=b;let De=0;for(const Ni of w.state.lightProbeGridArray)Ni.texture!==null&&(_e.textures[De]=Ni.texture,_e.min[De]=Ni.boundingBox.min,_e.max[De]=Ni.boundingBox.max,_e.resolution[De]=Ni.resolution,De++);for(const Ni in _e)_e[Ni].length=De;Fe.probesSH.value=_e.textures,Fe.probesMin.value=_e.min,Fe.probesMax.value=_e.max,Fe.probesResolution.value=_e.resolution}Mr.upload(U,il(yt),Fe,Ot)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Mr.upload(U,il(yt),Fe,Ot),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&jt.setValue(U,"center",k.center),jt.setValue(U,"modelViewMatrix",k.modelViewMatrix),jt.setValue(U,"normalMatrix",k.normalMatrix),jt.setValue(U,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const _e=O.uniformsGroups;for(let De=0,Ni=_e.length;De<Ni;De++){const rl=_e[De];Rt.update(rl,Ge),Rt.bind(rl,Ge)}}return Ge}function ah(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function oh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(S,I,V){const O=Lt.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Lt.get(S.texture).__webglTexture=I,Lt.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const V=Lt.get(S);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,V=0){tt=S,q=I,z=V;let O=null,k=!1,ht=!1;if(S){const lt=Lt.get(S);if(lt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(U.FRAMEBUFFER,lt.__webglFramebuffer),j.copy(S.viewport),bt.copy(S.scissor),zt=S.scissorTest,dt.viewport(j),dt.scissor(bt),dt.setScissorTest(zt),W=-1;return}else if(lt.__webglFramebuffer===void 0)Ot.setupRenderTarget(S);else if(lt.__hasExternalTextures)Ot.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const kt=S.depthTexture;if(lt.__boundDepthTexture!==kt){if(kt!==null&&Lt.has(kt)&&(S.width!==kt.image.width||S.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(S)}}const _t=S.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);const wt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?O=wt[I][V]:O=wt[I],k=!0):S.samples>0&&Ot.useMultisampledRTT(S)===!1?O=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?O=wt[V]:O=wt,j.copy(S.viewport),bt.copy(S.scissor),zt=S.scissorTest}else j.copy(Dt).multiplyScalar(gt).floor(),bt.copy(re).multiplyScalar(gt).floor(),zt=le;if(V!==0&&(O=H),dt.bindFramebuffer(U.FRAMEBUFFER,O)&&dt.drawBuffers(S,O),dt.viewport(j),dt.scissor(bt),dt.setScissorTest(zt),k){const lt=Lt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,lt.__webglTexture,V)}else if(ht){const lt=I;for(let _t=0;_t<S.textures.length;_t++){const wt=Lt.get(S.textures[_t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+_t,wt.__webglTexture,V,lt)}}else if(S!==null&&V!==0){const lt=Lt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,lt.__webglTexture,V)}W=-1};function sl(S){const I=Lt.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=pe.textureFormatReadable(S.format),I.__typeReadable=pe.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,V,O,k,ht,vt,lt=0){if(!(S&&S.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t){dt.bindFramebuffer(U.FRAMEBUFFER,_t);try{const wt=S.textures[lt],kt=wt.format,Zt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+lt);const St=sl(wt);if(St.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-O&&V>=0&&V<=S.height-k&&U.readPixels(I,V,O,k,nt.convert(kt),nt.convert(Zt),ht)}finally{const wt=tt!==null?Lt.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(S,I,V,O,k,ht,vt,lt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t)if(I>=0&&I<=S.width-O&&V>=0&&V<=S.height-k){dt.bindFramebuffer(U.FRAMEBUFFER,_t);const wt=S.textures[lt],kt=wt.format,Zt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+lt);const St=sl(wt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),U.readPixels(I,V,O,k,nt.convert(kt),nt.convert(Zt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const ye=tt!==null?Lt.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(U.FRAMEBUFFER,ye);const ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Hh(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer($t),U.deleteSync(ue),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,V=0){const O=Math.pow(2,-V),k=Math.floor(S.image.width*O),ht=Math.floor(S.image.height*O),vt=I!==null?I.x:0,lt=I!==null?I.y:0;Ot.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,vt,lt,k,ht),dt.unbindTexture()},this.copyTextureToTexture=function(S,I,V=null,O=null,k=0,ht=0){let vt,lt,_t,wt,kt,Zt,St,$t,ye;const ue=S.isCompressedTexture?S.mipmaps[ht]:S.image;if(V!==null)vt=V.max.x-V.min.x,lt=V.max.y-V.min.y,_t=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,kt=V.min.y,Zt=V.isBox3?V.min.z:0;else{const jt=Math.pow(2,-k);vt=Math.floor(ue.width*jt),lt=Math.floor(ue.height*jt),S.isDataArrayTexture?_t=ue.depth:S.isData3DTexture?_t=Math.floor(ue.depth*jt):_t=1,wt=0,kt=0,Zt=0}O!==null?(St=O.x,$t=O.y,ye=O.z):(St=0,$t=0,ye=0);const ce=nt.convert(I.format),ke=nt.convert(I.type);let yt;I.isData3DTexture?(Ot.setTexture3D(I,0),yt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ot.setTexture2DArray(I,0),yt=U.TEXTURE_2D_ARRAY):(Ot.setTexture2D(I,0),yt=U.TEXTURE_2D),dt.activeTexture(U.TEXTURE0),dt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),dt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),dt.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const qe=dt.getParameter(U.UNPACK_ROW_LENGTH),ee=dt.getParameter(U.UNPACK_IMAGE_HEIGHT),fn=dt.getParameter(U.UNPACK_SKIP_PIXELS),Ge=dt.getParameter(U.UNPACK_SKIP_ROWS),Ns=dt.getParameter(U.UNPACK_SKIP_IMAGES);dt.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),dt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),dt.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),dt.pixelStorei(U.UNPACK_SKIP_ROWS,kt),dt.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt);const Yi=S.isDataArrayTexture||S.isData3DTexture,pn=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const jt=Lt.get(S),Fe=Lt.get(I),vi=Lt.get(jt.__renderTarget),_e=Lt.get(Fe.__renderTarget);dt.bindFramebuffer(U.READ_FRAMEBUFFER,vi.__webglFramebuffer),dt.bindFramebuffer(U.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let De=0;De<_t;De++)Yi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(S).__webglTexture,k,Zt+De),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(I).__webglTexture,ht,ye+De)),U.blitFramebuffer(wt,kt,wt+vt,kt+lt,St,$t,St+vt,$t+lt,U.DEPTH_BUFFER_BIT,U.NEAREST);dt.bindFramebuffer(U.READ_FRAMEBUFFER,null),dt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Lt.has(S)){const jt=Lt.get(S),Fe=Lt.get(I);dt.bindFramebuffer(U.READ_FRAMEBUFFER,D),dt.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let vi=0;vi<_t;vi++)Yi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,jt.__webglTexture,k,Zt+vi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,jt.__webglTexture,k),pn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.__webglTexture,ht,ye+vi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,ht),k!==0?U.blitFramebuffer(wt,kt,wt+vt,kt+lt,St,$t,St+vt,$t+lt,U.COLOR_BUFFER_BIT,U.NEAREST):pn?U.copyTexSubImage3D(yt,ht,St,$t,ye+vi,wt,kt,vt,lt):U.copyTexSubImage2D(yt,ht,St,$t,wt,kt,vt,lt);dt.bindFramebuffer(U.READ_FRAMEBUFFER,null),dt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pn?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(yt,ht,St,$t,ye,vt,lt,_t,ce,ke,ue.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,ht,St,$t,ye,vt,lt,_t,ce,ue.data):U.texSubImage3D(yt,ht,St,$t,ye,vt,lt,_t,ce,ke,ue):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ht,St,$t,vt,lt,ce,ke,ue.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ht,St,$t,ue.width,ue.height,ce,ue.data):U.texSubImage2D(U.TEXTURE_2D,ht,St,$t,vt,lt,ce,ke,ue);dt.pixelStorei(U.UNPACK_ROW_LENGTH,qe),dt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),dt.pixelStorei(U.UNPACK_SKIP_PIXELS,fn),dt.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),dt.pixelStorei(U.UNPACK_SKIP_IMAGES,Ns),ht===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(yt),dt.unbindTexture()},this.initRenderTarget=function(S){Lt.get(S).__webglFramebuffer===void 0&&Ot.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ot.setTextureCube(S,0):S.isData3DTexture?Ot.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ot.setTexture2DArray(S,0):Ot.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){q=0,z=0,tt=null,dt.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const Sr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const km=new Ho(-1,1,1,-1,0,1);class Gm extends Te{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const Hm=new Gm;class Wo{constructor(t){this._mesh=new ut(Hm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,km)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vm extends ss{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Cs.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class cc extends ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Wm extends ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Xm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Et);this._width=i.width,this._height=i.height,e=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vm(Sr),this.copyPass.material.blending=Mn,this.timer=new Hu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}cc!==void 0&&(a instanceof cc?i=!0:a instanceof Wm&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qm extends ss{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new At}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const Ym={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ts extends ss{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new At(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(r,a,{type:ei,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ii(r,a,{type:ei,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new ii(r,a,{type:ei,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=Ym;this.highPassUniforms=Cs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cs.clone(Sr.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:Sr.vertexShader,fragmentShader:Sr.fragmentShader,premultipliedAlpha:!0,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new At,this._oldClearAlpha=1,this._basic=new Ze,this._fsQuad=new Wo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new je({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ts.BlurDirectionX=new Et(1,0);ts.BlurDirectionY=new Et(0,1);const ur={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Km extends ss{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cs.clone(ur.uniforms),this.material=new Vc({name:ur.name,uniforms:this.uniforms,vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader}),this._fsQuad=new Wo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===So?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ii(s=1){let t=s>>>0;return()=>{t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}function ni(s=512){const t=document.createElement("canvas");return t.width=s,t.height=s,t}function un(s,t=1,e=1){const i=new hn(s);return i.wrapS=i.wrapT=Ts,i.repeat.set(t,e),i.colorSpace=we,i.anisotropy=4,i}function wn(s,t,e,i,n,r=1){const a=s.getImageData(0,0,t,t),o=a.data;for(let l=0;l<t;l+=r)for(let c=0;c<t;c+=r){const h=(n()-.5)*e;for(let d=0;d<r;d++)for(let u=0;u<r;u++){const f=((l+d)*t+(c+u))*4;o[f]=Math.max(0,Math.min(255,o[f]+h)),o[f+1]=Math.max(0,Math.min(255,o[f+1]+h)),o[f+2]=Math.max(0,Math.min(255,o[f+2]+h)),o[f+3]=Math.max(o[f+3],i*255)}}s.putImageData(a,0,0)}function on(s,t,e,i,n,r=.3){const a=s.createRadialGradient(t,e,0,t,e,i);a.addColorStop(0,n.replace("ALPHA",String(r))),a.addColorStop(.6,n.replace("ALPHA",String(r*.5))),a.addColorStop(1,n.replace("ALPHA","0")),s.fillStyle=a,s.fillRect(t-i,e-i,i*2,i*2)}function Zm(s=3){const e=ni(512),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#4c4b46",i.fillRect(0,0,512,512),wn(i,512,34,1,n,2);for(let r=0;r<130;r++)on(i,n()*512,n()*512,12+n()*80,n()>.5?"rgba(28,28,26,ALPHA)":"rgba(112,110,100,ALPHA)",.04+n()*.07);for(let r=0;r<22;r++){const a=n()*512,o=4+n()*22,l=40+n()*220,c=i.createLinearGradient(0,0,0,l);c.addColorStop(0,"rgba(20,22,20,0.28)"),c.addColorStop(1,"rgba(20,22,20,0)"),i.fillStyle=c,i.fillRect(a,n()*(512-l),o,l)}i.strokeStyle="rgba(18,18,17,0.55)";for(let r=0;r<9;r++){i.lineWidth=.6+n()*1.4,i.beginPath();let a=n()*512,o=n()*512;i.moveTo(a,o);const l=8+n()*16|0;for(let c=0;c<l;c++)a+=(n()-.5)*30,o+=8+n()*24,i.lineTo(a,o);i.stroke()}for(let r=0;r<500;r++)i.fillStyle=`rgba(0,0,0,${.05+n()*.14})`,i.beginPath(),i.arc(n()*512,n()*512,n()*2.2,0,7),i.fill();return un(e)}function $m(s=8){const e=ni(512),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#24241f",i.fillRect(0,0,512,512);const r=4,a=512/r;for(let o=0;o<r;o++)for(let l=0;l<r;l++){const c=52+n()*22;i.fillStyle=`rgb(${c},${c-2},${c-8})`,i.fillRect(l*a+2,o*a+2,a-4,a-4);const h=i.createLinearGradient(l*a,o*a,l*a+a,o*a+a);h.addColorStop(0,"rgba(255,255,255,0.05)"),h.addColorStop(.5,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.22)"),i.fillStyle=h,i.fillRect(l*a+2,o*a+2,a-4,a-4);for(let d=0;d<14;d++){i.strokeStyle=`rgba(${n()>.5?"190,188,175":"0,0,0"},${.03+n()*.09})`,i.lineWidth=.5+n(),i.beginPath();const u=l*a+6+n()*(a-12),f=o*a+6+n()*(a-12);i.moveTo(u,f),i.lineTo(u+(n()-.5)*46,f+(n()-.5)*46),i.stroke()}}wn(i,512,20,1,n,2);for(let o=0;o<40;o++)on(i,n()*512,n()*512,10+n()*60,"rgba(10,10,8,ALPHA)",.05+n()*.12);return un(e)}function Jm(s=14){const e=ni(512),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#3c2c1e",i.fillRect(0,0,512,512);const r=6,a=512/r;for(let o=0;o<r;o++){const l=48+n()*22;i.fillStyle=`rgb(${l+14},${l-4},${l-18})`,i.fillRect(0,o*a+1,512,a-2);for(let c=0;c<26;c++){const h=o*a+4+n()*(a-8);i.strokeStyle=`rgba(${n()>.5?"20,13,8":"110,82,55"},${.08+n()*.2})`,i.lineWidth=.5+n()*1.6,i.beginPath(),i.moveTo(0,h);for(let d=0;d<512;d+=32)i.lineTo(d,h+Math.sin(d*.03+c)*2.4+(n()-.5)*3);i.stroke()}if(n()>.55){const c=30+n()*452,h=o*a+a*(.3+n()*.4);i.strokeStyle="rgba(20,12,7,0.5)";for(let d=1;d<4;d++)i.beginPath(),i.ellipse(c,h,3*d+n()*2,1.5*d+n(),.2,0,7),i.stroke()}i.fillStyle="rgba(5,4,3,0.6)",i.fillRect(0,o*a,512,2);for(let c=0;c<3;c++)i.fillStyle="rgba(15,14,13,0.85)",i.beginPath(),i.arc(20+c*230+n()*20,o*a+a*.5,2.2,0,7),i.fill()}return wn(i,512,16,1,n,2),un(e)}function Qm(s=21){const e=ni(512),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#3b3d3f",i.fillRect(0,0,512,512);for(let r=0;r<1400;r++){i.strokeStyle=`rgba(${n()>.5?"180,184,188":"10,10,12"},${.02+n()*.07})`,i.lineWidth=.5+n();const a=n()*512;i.beginPath(),i.moveTo(n()*512,a),i.lineTo(n()*512,a+(n()-.5)*2),i.stroke()}for(let r=0;r<26;r++)on(i,n()*512,n()*512,4+n()*34,"rgba(94,46,22,ALPHA)",.08+n()*.25);for(let r=40;r<512;r+=108)for(let a=40;a<512;a+=108){const o=i.createRadialGradient(a-2,r-2,0,a,r,5);o.addColorStop(0,"rgba(200,204,205,0.5)"),o.addColorStop(.6,"rgba(80,82,84,0.5)"),o.addColorStop(1,"rgba(10,10,12,0.5)"),i.fillStyle=o,i.beginPath(),i.arc(a,r,5,0,7),i.fill()}return un(e)}function jm(s=33){const e=ni(256),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#655f49",i.fillRect(0,0,256,256);for(let r=0;r<256;r+=6)i.fillStyle=r%12===0?"rgba(30,28,20,0.25)":"rgba(150,142,112,0.13)",i.fillRect(0,r,256,3);for(let r=0;r<256;r+=6)i.fillStyle=r%12===0?"rgba(30,28,20,0.18)":"rgba(150,142,112,0.08)",i.fillRect(r,0,3,256);wn(i,256,26,1,n,2);for(let r=0;r<12;r++)on(i,n()*256,n()*256,8+n()*30,"rgba(38,32,20,ALPHA)",.12);return un(e)}function tg(s=41){const e=ni(512),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#23241d",i.fillRect(0,0,512,512),wn(i,512,30,1,n,2);for(let r=0;r<200;r++){const a=30+n()*55;i.fillStyle=`rgba(${a},${a-2},${a-10},${.15+n()*.4})`,i.beginPath(),i.ellipse(n()*512,n()*512,1+n()*7,1+n()*5,n()*3,0,7),i.fill()}for(let r=0;r<40;r++)on(i,n()*512,n()*512,12+n()*60,"rgba(8,9,7,ALPHA)",.1);return un(e)}function eg(s=51){const e=ni(256),i=e.getContext("2d"),n=Ii(s);i.clearRect(0,0,256,256),i.fillStyle="rgba(52,4,4,0.85)",i.beginPath(),i.ellipse(256/2,256/2,40+n()*20,28+n()*16,n()*3,0,7),i.fill();for(let a=0;a<70;a++){const o=n()*Math.PI*2,l=20+n()*105,c=.8+n()*(n()>.9?8:3.5);i.fillStyle=`rgba(${40+n()*30},${2+n()*6},${2+n()*5},${.4+n()*.5})`,i.beginPath(),i.ellipse(256/2+Math.cos(o)*l,256/2+Math.sin(o)*l,c,c*(.5+n()),n()*3,0,7),i.fill()}const r=new hn(e);return r.colorSpace=we,r}function mo(s="#ffcf88",t="#ffffff"){const i=ni(128),n=i.getContext("2d"),r=new At(s),a=`rgba(${Math.round(r.r*255)},${Math.round(r.g*255)},${Math.round(r.b*255)},0.35)`,o=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);o.addColorStop(0,t),o.addColorStop(.22,s),o.addColorStop(.55,a),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,128,128);const l=new hn(i);return l.colorSpace=we,l}function ig(){const t=ni(128),e=t.getContext("2d");e.translate(128/2,128/2);const i=e.createRadialGradient(0,0,0,0,0,128/2);i.addColorStop(0,"rgba(255,255,235,1)"),i.addColorStop(.18,"rgba(255,220,130,0.95)"),i.addColorStop(.45,"rgba(255,140,40,0.4)"),i.addColorStop(1,"rgba(255,90,10,0)"),e.fillStyle=i;for(let r=0;r<8;r++)e.save(),e.rotate(r/8*Math.PI*2+.2),e.beginPath(),e.moveTo(0,-5),e.lineTo(128*.46,0),e.lineTo(0,5),e.closePath(),e.globalAlpha=.55,e.fill(),e.restore();e.beginPath(),e.arc(0,0,128*.16,0,7),e.fill();const n=new hn(t);return n.colorSpace=we,n}function ms(s,t="",e={}){const r=ni(512);r.width=512,r.height=256;const a=r.getContext("2d");a.clearRect(0,0,512,256),a.textAlign="center",a.fillStyle=e.color||"rgba(226, 219, 197, 0.92)",a.font=`600 ${e.size||64}px Oswald, Arial Narrow, sans-serif`,a.fillText(s,512/2,256*.44),t&&(a.fillStyle="rgba(216, 161, 60, 0.92)",a.font="600 40px Oswald, Arial Narrow, sans-serif",a.fillText(t,512/2,256*.72)),a.globalCompositeOperation="destination-out";const o=Ii(77+s.length);for(let c=0;c<500;c++)a.fillStyle=`rgba(0,0,0,${.2+o()*.7})`,a.beginPath(),a.arc(o()*512,o()*256,.4+o()*1.8,0,7),a.fill();a.globalCompositeOperation="source-over";const l=new hn(r);return l.colorSpace=we,l}function ng(s){const e=ni(128),i=e.getContext("2d");i.translate(128/2,128/2);const n={maxammo:"#d8b24a",insta:"#d84a2a",double:"#e0b93c",nuke:"#7ad06a"}[s]||"#d8b24a";if(i.strokeStyle=n,i.fillStyle=n,i.lineWidth=7,i.shadowColor=n,i.shadowBlur=18,s==="maxammo")for(let a=0;a<3;a++){const o=-26+a*26;i.beginPath(),i.roundRect(o-7,-28,14,52,3),i.stroke(),i.beginPath(),i.arc(o,-28,7,Math.PI,0),i.stroke()}else if(s==="insta")i.beginPath(),i.arc(0,0,30,0,7),i.stroke(),i.beginPath(),i.arc(-11,-7,5,0,7),i.arc(11,-7,5,0,7),i.fill(),i.beginPath(),i.moveTo(-13,12),i.lineTo(0,20),i.lineTo(13,12),i.stroke(),i.beginPath(),i.moveTo(-30,-20),i.lineTo(-42,-34),i.moveTo(30,-20),i.lineTo(42,-34),i.stroke();else if(s==="double")i.font="700 62px Oswald, Arial Narrow, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("x2",0,2);else if(s==="nuke"){for(let a=0;a<3;a++)i.beginPath(),i.moveTo(0,0),i.arc(0,0,34,-Math.PI/2+a*2.094,-Math.PI/2+(a+.65)*2.094),i.closePath(),i.fill();i.beginPath(),i.arc(0,0,8,0,7),i.fillStyle="#0a0b0c",i.fill()}const r=new hn(e);return r.colorSpace=we,r}function sg(){const t=ni(64),e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,246,220,0.7)"),i.addColorStop(.4,"rgba(255,240,200,0.18)"),i.addColorStop(1,"rgba(255,230,180,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),new hn(t)}function rg(s=91){const e=ni(256),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#6f7260",i.fillRect(0,0,256,256),wn(i,256,34,1,n,2);for(let r=0;r<40;r++)on(i,n()*256,n()*256,4+n()*26,"rgba(46,38,34,ALPHA)",.12+n()*.22);for(let r=0;r<14;r++)on(i,n()*256,n()*256,2+n()*10,"rgba(74,12,8,ALPHA)",.25+n()*.35);i.strokeStyle="rgba(40,34,42,0.28)";for(let r=0;r<12;r++){i.lineWidth=.6+n()*1.2,i.beginPath();let a=n()*256,o=n()*256;i.moveTo(a,o);for(let l=0;l<8;l++)a+=(n()-.5)*24,o+=(n()-.5)*24,i.lineTo(a,o);i.stroke()}return un(e)}function ag(s=92){const e=ni(256),i=e.getContext("2d"),n=Ii(s);i.fillStyle="#3b372e",i.fillRect(0,0,256,256),wn(i,256,28,1,n,2);for(let r=0;r<55;r++)on(i,n()*256,n()*256,5+n()*30,n()>.7?"rgba(52,16,10,ALPHA)":"rgba(16,14,10,ALPHA)",.1+n()*.25);i.fillStyle="rgba(8,7,6,0.55)";for(let r=0;r<12;r++){const a=n()*256,o=n()*256;i.beginPath(),i.moveTo(a,o),i.lineTo(a+dr(-14,14),o+dr(6,24)),i.lineTo(a+dr(-18,18),o+dr(4,18)),i.closePath(),i.fill()}return un(e)}function dr(s,t){return s+Math.random()*(t-s)}const ji=Math.PI*2;function Tt(s=0,t=1){return s+Math.random()*(t-s)}function Oe(s,t,e,i=16777215,n=2.6,r={}){const a=s.clone();return a.needsUpdate=!0,a.wrapS=a.wrapT=Ts,a.repeat.set(Math.max(1,t/n),Math.max(1,e/n)),new Xt({map:a,bumpMap:a,bumpScale:r.bump??.035,roughness:r.roughness??.94,metalness:r.metalness??.02,color:i})}class og{constructor(t,e,i){this.scene=t,this.particles=e,this.additive=i,this.colliders=[],this.navBlockers=[],this.windows=[],this.buys=[],this.lights=[],this.flickerLights=[],this.fallingPlanks=[],this.growingPlanks=[],this.time=0,this.door=null,this.firePos=new P(-4.3,1,2.4),this.fireAcc=0,this.decals=[],this.build()}collider(t,e,i,n,r="wall"){const a={minX:t-i/2,maxX:t+i/2,minZ:e-n/2,maxZ:e+n/2,tag:r};return this.colliders.push(a),r!=="window"&&this.navBlockers.push(a),a}box(t,e,i,n,r,a,o,l={}){const c=new ut(new Ft(t,e,i),o);return c.position.set(n,r,a),c.castShadow=l.castShadow??!0,c.receiveShadow=l.receiveShadow??!0,l.rotY&&(c.rotation.y=l.rotY),this.scene.add(c),l.collide&&this.collider(n,a,t+(l.pad||0),i+(l.pad||0),l.tag),c}build(){const t=this.scene;t.background=new At(329482),t.fog=new Fo(658706,.021),this.texConcrete=Zm(),this.texFloor=$m(),this.texWood=Jm(),this.texMetal=Qm(),this.texSand=jm(),this.texDirt=tg(),this.bloodTex=eg(),this.dustTex=sg(),this.glowTex=mo("#ffb765");const e=Oe(this.texConcrete,8,4,14209733),i=Oe(this.texConcrete,8,4,10262670),n=Oe(this.texWood,4,2,14864306,2),r=Oe(this.texMetal,3,2,12896459,2,{metalness:.62,roughness:.55}),a=Oe(this.texMetal,3,2,8883344,2,{metalness:.7,roughness:.5}),o=Oe(this.texSand,2,1,13879462,1.4);this.mats={concrete:e,concreteDark:i,wood:n,metal:r,metalDark:a,sand:o};const l=Oe(this.texFloor,18,16,14078148,2.4,{roughness:.82,metalness:.04,bump:.05}),c=new ut(new Me(18.6,16.6),l);c.rotation.x=-Math.PI/2,c.position.set(0,0,0),c.receiveShadow=!0,t.add(c);const h=new ut(new Me(5.4,5.4),l.clone());h.rotation.x=-Math.PI/2,h.position.set(6.6,.002,11.1),h.receiveShadow=!0,t.add(h);const d=Oe(this.texConcrete,18,16,8223604,3),u=new ut(new Me(18.6,16.6),d);u.rotation.x=Math.PI/2,u.position.set(0,4.2,0),u.receiveShadow=!0,t.add(u);const f=new ut(new Me(5.4,5.4),d.clone());f.rotation.x=Math.PI/2,f.position.set(6.6,4.2,11.1),t.add(f);const _=4.2;this.wall(-5.25,-8.3,8.1,.6,_,e),this.wall(5.25,-8.3,8.1,.6,_,e),this.box(2.4,1.2,.6,0,3.6,-8.3,e),this.box(2.4,.9,.6,0,.45,-8.3,e),this.collider(0,-8.3,2.4,.6,"window"),this.wall(-9.3,-5.6,.6,4.8,_,e),this.wall(-9.3,3.6,.6,8.8,_,e),this.box(.6,1.2,2.4,-9.3,3.6,-2,e),this.box(.6,.9,2.4,-9.3,.45,-2,e),this.collider(-9.3,-2,.6,2.4,"window"),this.wall(9.3,-3.1,.6,9.8,_,e),this.wall(9.3,6.1,.6,3.8,_,e),this.box(.6,1.2,2.4,9.3,3.6,3,e),this.box(.6,.9,2.4,9.3,.45,3,e),this.collider(9.3,3,.6,2.4,"window"),this.wall(-2.5,8.3,13,.6,_,e),this.wall(7.6,8.3,2.8,.6,_,e),this.box(2.2,1,.6,5.1,3.7,8.3,e),this.wall(3.9,11.1,.6,5.6,_,i),this.wall(6.6,13.9,5.4,.6,_,i),this.wall(9.3,11.1,.6,5.6,_,i),this.box(18.4,.22,.16,0,.11,-7.95,i,{castShadow:!1}),this.box(.16,.22,16.4,-8.95,.11,0,i,{castShadow:!1}),this.box(.16,.22,16.4,8.95,.11,0,i,{castShadow:!1});const v=Oe(this.texWood,4,1,4864812,2);for(let y=-7;y<=7;y+=3.5)this.box(18.4,.26,.34,0,4.02,y,v,{castShadow:!1});for(let y=-7;y<=7;y+=7)this.box(.22,.2,16.4,y,3.98,0,a,{castShadow:!1});const m=r,p=new ut(new oe(.11,.11,17,10),m);p.rotation.z=Math.PI/2,p.position.set(0,3.72,-6.9),p.castShadow=!0,t.add(p);const x=p.clone();x.position.set(-8.4,3.6,0),x.rotation.set(Math.PI/2,0,0),t.add(x);for(const[y,C]of[[-4.9,-2.6],[4.9,-2.6],[-4.9,3.6],[4.9,3.6]])this.box(.85,4.2,.85,y,2.1,C,e,{collide:!0,tag:"pillar"}),this.box(1.15,.18,1.15,y,.09,C,i),this.box(1.05,.16,1.05,y,3.9,C,i);this.makeWindow("north",new P(0,0,-8.3),0,new P(0,0,-1),new P(0,0,-10.6),new P(0,0,-6.7),n),this.makeWindow("west",new P(-9.3,0,-2),Math.PI/2,new P(-1,0,0),new P(-11.8,0,-2),new P(-7,0,-2),n),this.makeWindow("east",new P(9.3,0,3),-Math.PI/2,new P(1,0,0),new P(11.8,0,3),new P(7,0,3),n),this.makeDoor(n,r),this.crate(-6.6,5.8,1.15,.25,n),this.crate(-6.5,4.6,.9,-.18,n),this.crate(-6.5,5.6,.7,.5,n,1.15),this.crate(6.4,-6.2,1.2,-.35,n),this.crate(7.2,-5.2,.8,.2,n),this.crate(-2.6,7.2,.9,.1,n),this.barrel(7.4,1.2,a),this.barrel(-7.2,-6.6,a),this.barrel(2.9,6.7,a),this.barrel(4.8,13.2,a),this.sandbags(-2.4,-7,0),this.sandbags(2.6,-7,0),this.sandbags(-8,1.4,Math.PI/2),this.sandbags(8,5.4,Math.PI/2),this.sandbags(3.4,7,0),this.sandbags(8.2,9.8,0),this.table(-1.6,6.4),this.radio(-1.6,1.02,6.4),this.makeFireBarrel(),this.makeMysteryBox(),this.makeWallBuy("kar98k","KAR98K",500,new P(-5.4,0,-7.85),0,r,n),this.makeWallBuy("mp40","MP40",1e3,new P(8.85,0,-4.6),-Math.PI/2,r,n),this.makeWallBuy("trench","TRENCH GUN",1200,new P(-8.85,0,4.6),Math.PI/2,r,n),this.makeWallBuy("thompson","THOMPSON",1500,new P(8.85,0,11.2),-Math.PI/2,r,n),this.graffiti("THEY HEAR YOU",.5,2.2,-7.96,0,1.5,1),this.graffiti("NO EXIT",-8.96,2.4,6.2,Math.PI/2,1.2,1),this.graffiti("GOD IS DEAD",8.96,2.1,-6.3,-Math.PI/2,1.2,1),this.graffiti("750",5.1,2.15,8.4,Math.PI,.8,1,"#d8a13c"),this.graffiti("REPENT",-2.8,2.6,-7.96,0,1.1,1);for(let y=0;y<9;y++){const C=new ut(new Me(1,1),new Ze({map:this.bloodTex,transparent:!0,depthWrite:!1,opacity:.55+Math.random()*.3,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));C.rotation.set(-Math.PI/2,0,Math.random()*ji),C.position.set(Tt(-8.2,8.2),.012,Tt(-7.2,7.4)),C.scale.setScalar(Tt(.5,1.9)),t.add(C),this.decals.push(C)}this.hemi=new Uu(10334930,3352348,1.45),t.add(this.hemi);const E=new ku(5858682,.62);t.add(E);const b=new va(10662600,.95);b.position.set(9,9,12),b.target.position.set(0,1,0),t.add(b),t.add(b.target);const T=new va(10135744,.55);T.position.set(0,8,20),T.target.position.set(0,1,-2),t.add(T),t.add(T.target);const w=new va(11849200,2.6);w.position.set(-14,19,-16),w.target.position.set(0,0,0),w.castShadow=!0,w.shadow.mapSize.set(2048,2048),w.shadow.camera.left=-20,w.shadow.camera.right=20,w.shadow.camera.top=20,w.shadow.camera.bottom=-20,w.shadow.camera.near=1,w.shadow.camera.far=60,w.shadow.bias=-4e-4,w.shadow.normalBias=.025,t.add(w),t.add(w.target),this.moon=w,this.bulb(-4.6,2,16,16756838),this.bulb(4.2,-3.2,14,16755036),this.bulb(-3.5,4.8,11,16760954),this.bulb(-7.6,-5.8,12,16752469),this.bulb(6.6,11.4,14,16758896);const g=new Hi(16767392,10,8,2);g.position.set(8.4,2.4,12.4),t.add(g);for(const y of this.windows){const C=new Ou(10467552,14,22,.52,.9,1.6);C.position.copy(y.center).addScaledVector(y.normal,2.2),C.position.y=3.4,C.target.position.copy(y.center).addScaledVector(y.normal,-5),C.target.position.y=0,t.add(C),t.add(C.target)}this.shafts=[],this.makeDust(),this.makeOutside(),this.spawnGlow=[]}wall(t,e,i,n,r,a){const o=new ut(new Ft(i,r,n),a);return o.position.set(t,r/2,e),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o),this.collider(t,e,i,n,"wall"),o}makeWindow(t,e,i,n,r,a,o){const l=new ne;l.position.copy(e),l.rotation.y=i,this.scene.add(l);const c=Oe(this.texMetal,2.6,2.2,5198420,2,{metalness:.65,roughness:.5}),h=new Ft(.14,2.2,.26);for(const E of[-1.28,1.28]){const b=new ut(h,c);b.position.set(E,1.95,0),b.castShadow=!0,l.add(b)}const d=new ut(new Ft(2.7,.14,.3),c);d.position.set(0,3.02,0),d.castShadow=!0,l.add(d);const u=new ut(new Ft(2.9,.16,.5),this.mats.wood);u.position.set(0,.9,0),u.castShadow=!0,u.receiveShadow=!0,l.add(u);const f=Oe(this.texWood,3,.3,9138772,1.6),_=new Ft(2.95,.23,.09),v=[];for(let E=0;E<6;E++){const b=new ut(_,f);b.position.set(Tt(-.12,.12),1.12+E*.31,Tt(-.04,.06)),b.rotation.z=Tt(-.07,.07),b.castShadow=!0,b.receiveShadow=!0,l.add(b),v.push(b)}const m=new ut(new Ft(.16,2.1,.06),f);m.position.set(-.55,1.85,.1),m.rotation.z=.16,m.castShadow=!0,l.add(m);const p=new Hi(16752736,2.2,5.5,2);p.position.copy(e).addScaledVector(n,-.9),p.position.y=2.15,this.scene.add(p);const x={id:t,center:e,rotY:i,normal:n,staging:r,inside:a,group:l,planks:v,boards:6,maxBoards:6,repairProgress:0};return this.windows.push(x),x}breakBoard(t){if(t.boards<=0)return!1;const e=t.boards-1,i=t.planks[e];if(!i)return!1;i.visible=!1,t.boards--;const n=new P;return i.getWorldPosition(n),this.particles.burst(n,new P(0,.2,0),12,{color:new At(.35,.26,.16),size:.055,life:.9,spread:1.6,gravity:-7}),this.additive.burst(n,new P(0,.1,0),4,{color:new At(.9,.7,.4),size:.04,life:.3,spread:1.2,gravity:-2}),!0}repairBoard(t){if(t.boards>=t.maxBoards)return!1;const e=t.boards,i=t.planks[e];return i?(i.visible=!0,i.scale.set(.2,.2,.2),this.growingPlanks.push({mesh:i,t:0}),t.boards++,!0):!1}makeDoor(t,e){const i=new ne;i.position.set(5.1,0,8.32),this.scene.add(i);const n=new ut(new Ft(2.2,3.1,.16),Oe(this.texWood,2.2,3,9401943,1.4));n.position.set(0,1.55,0),n.castShadow=!0,n.receiveShadow=!0,i.add(n);for(const l of[.55,1.55,2.55]){const c=new ut(new Ft(2.24,.12,.2),e);c.position.set(0,l,.01),c.castShadow=!0,i.add(c)}const r=new ut(new Li(.09,.02,6,12),e);r.position.set(.72,1.5,.13),i.add(r);const a=new ut(new Me(1.1,.55),new Ze({map:ms("750","BUY DOOR",{size:86,color:"#e0b558"}),transparent:!0,depthWrite:!1}));a.position.set(0,2.05,.11),i.add(a);const o=this.collider(5.1,8.32,2.2,.3,"door");this.door={group:i,mesh:n,blocker:o,open:!1,t:0,sign:a}}openDoor(){if(!this.door||this.door.open)return!1;this.door.open=!0,this.door.sign.visible=!1;const t=this.colliders.indexOf(this.door.blocker);t>=0&&this.colliders.splice(t,1);const e=this.navBlockers.indexOf(this.door.blocker);return e>=0&&this.navBlockers.splice(e,1),!0}crate(t,e,i,n,r,a=0){const o=new ne;o.position.set(t,a,e),o.rotation.y=n,this.scene.add(o);const l=new ut(new Ft(i,i,i),Oe(this.texWood,i,i,10717800,1.2));l.position.y=i/2,l.castShadow=!0,l.receiveShadow=!0,o.add(l);const c=this.mats.metalDark;for(const[d,u]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const f=new ut(new Ft(.07,i+.02,.07),c);f.position.set(d*i/2,i/2,u*i/2),o.add(f)}const h=new ut(new Me(i*.6,i*.3),new Ze({map:ms("AMMO","",{size:60,color:"rgba(210,200,170,0.5)"}),transparent:!0,opacity:.6,depthWrite:!1}));return h.position.set(0,i*.55,i/2+.011),o.add(h),this.collider(t,e,i+.1,i+.1,"prop"),o}barrel(t,e,i){const n=new ne;n.position.set(t,0,e),this.scene.add(n);const r=new ut(new oe(.42,.42,1.05,16),Oe(this.texMetal,1.2,1,6969930,1.2,{metalness:.5,roughness:.65}));r.position.y=.525,r.castShadow=!0,r.receiveShadow=!0,n.add(r);for(const a of[.2,.85]){const o=new ut(new Li(.43,.03,5,18),this.mats.metalDark);o.rotation.x=Math.PI/2,o.position.y=a,n.add(o)}return this.collider(t,e,.9,.9,"prop"),n}sandbags(t,e,i){const n=new ne;n.position.set(t,0,e),n.rotation.y=i,this.scene.add(n);const r=new We(.5,8,6);for(let a=0;a<3;a++){const o=a===2?2:4;for(let l=0;l<o;l++){const c=new ut(r,this.mats.sand);c.scale.set(.62,.28,.4),c.position.set(-1.2+l*.8+a%2*.4,.2+a*.34,(Math.random()-.5)*.14),c.rotation.set(0,(Math.random()-.5)*.2,(Math.random()-.5)*.15),c.castShadow=!0,c.receiveShadow=!0,n.add(c)}}return this.collider(t,e,2.6,.9,"prop"),n}table(t,e){const i=new ne;i.position.set(t,0,e),this.scene.add(i);const n=new ut(new Ft(2,.1,.95),Oe(this.texWood,2,1,10652266,1.2));n.position.y=.92,n.castShadow=!0,n.receiveShadow=!0,i.add(n);for(const[r,a]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const o=new ut(new Ft(.09,.9,.09),this.mats.wood);o.position.set(r*.88,.45,a*.38),o.castShadow=!0,i.add(o)}return this.collider(t,e,2.1,1.05,"prop"),i}radio(t,e,i){const n=new ne;n.position.set(t,e,i),this.scene.add(n);const r=new ut(new Ft(.55,.32,.24),this.mats.metalDark);r.position.y=.16,r.castShadow=!0,n.add(r);const a=new ut(new Bo(.07,12),new Xt({color:13215066,emissive:6965778,emissiveIntensity:1.4}));a.position.set(-.12,.19,.125),n.add(a);const o=a.clone();o.position.x=.1,n.add(o);const l=new ut(new oe(.008,.008,.7,5),this.mats.metal);return l.position.set(.18,.55,0),l.rotation.z=-.22,n.add(l),n}makeFireBarrel(){const t=new ne;t.position.set(this.firePos.x,0,this.firePos.z),this.scene.add(t);const e=new ut(new oe(.55,.55,1.05,18,1,!0),new Xt({map:this.texMetal,color:7027236,metalness:.55,roughness:.62,side:Qe}));e.position.y=.525,e.castShadow=!0,e.receiveShadow=!0,t.add(e);const i=new ut(new Li(.56,.045,6,20),this.mats.metalDark);i.rotation.x=Math.PI/2,i.position.y=1.04,t.add(i);const n=new ut(new We(.4,12,8),new Xt({color:2755845,emissive:16730634,emissiveIntensity:1.6,roughness:1}));n.scale.y=.3,n.position.y=.72,t.add(n);const r=new Hi(16742956,16,11,2);r.position.set(this.firePos.x,1.55,this.firePos.z),r.castShadow=!1,this.scene.add(r),this.fireLight=r,this.collider(this.firePos.x,this.firePos.z,1.2,1.2,"prop")}makeMysteryBox(){const t=new ne;t.position.set(7,0,12.5),t.rotation.y=-.15,this.scene.add(t);const e=Oe(this.texWood,1.4,1,8217156,1.1),i=new ut(new Ft(1.45,.9,.95),e);i.position.y=.45,i.castShadow=!0,i.receiveShadow=!0,t.add(i);const n=new ne;n.position.set(0,.9,-.47),t.add(n);const r=new ut(new Ft(1.5,.16,1),e);r.position.set(0,.06,.48),r.castShadow=!0,n.add(r);const a=this.mats.metalDark;for(const u of[-.62,.62]){const f=new ut(new Ft(.09,.94,1),a);f.position.set(u,.45,0),t.add(f)}const o=new Ze({map:ms("?","",{size:180,color:"#e6c064"}),transparent:!0,depthWrite:!1}),l=new ut(new Me(.8,.8),o);l.position.set(0,.52,.481),t.add(l);const c=new Hi(16761962,4,5,2);c.position.set(0,1.3,0),t.add(c);const h=new ut(new oe(.35,1.25,3.2,18,1,!0),new Ze({color:16761962,transparent:!0,opacity:0,blending:ci,depthWrite:!1,side:Qe}));h.position.set(0,2.6,0),t.add(h);const d=this.collider(7,12.5,1.55,1.05,"prop");this.mysteryBox={group:t,lid:n,light:c,beam:h,open:!1,t:0,q:l,blocker:d}}makeWallBuy(t,e,i,n,r,a,o){const l=new ne;l.position.copy(n),l.rotation.y=r,this.scene.add(l);const c=new ne;c.position.set(0,2.15,.18);const h=t==="trench"?.85:t==="mp40"?.62:.95,d=new ut(new oe(.026,.03,h,8),a);d.rotation.z=Math.PI/2,d.position.set(-.15-h/2,0,0),c.add(d);const u=new ut(new Ft(.46,.12,.12),a);u.position.set(0,0,0),c.add(u);const f=new ut(new Ft(.44,.15,.1),o);if(f.position.set(.42,-.03,0),f.rotation.z=.08,c.add(f),t==="mp40"||t==="thompson"){const v=new ut(new Ft(.09,.26,.09),a);v.position.set(.02,-.19,0),v.rotation.z=.14,c.add(v)}if(t==="kar98k"){const v=new ut(new oe(.032,.032,.26,8),a);v.rotation.z=Math.PI/2,v.position.set(-.05,.1,0),c.add(v)}c.scale.setScalar(.95),l.add(c);const _=new ut(new Me(1.6,.8),new Ze({map:ms(e,String(i),{size:54}),transparent:!0,depthWrite:!1,opacity:.92}));_.position.set(0,1.28,.04),l.add(_),this.buys.push({id:t,name:e,price:i,pos:new P(n.x,0,n.z),rotY:r,sign:_,radius:2.3})}graffiti(t,e,i,n,r,a,o,l){const c=new Ze({map:ms(t,"",{size:64,color:l||"rgba(180, 30, 24, 0.8)"}),transparent:!0,depthWrite:!1,opacity:.62}),h=new ut(new Me(a,o),c);return h.position.set(e,i,n),h.rotation.y=r,this.scene.add(h),h}bulb(t,e,i,n){const r=new ne;r.position.set(t,0,e),this.scene.add(r);const a=new ut(new oe(.008,.008,1.1,4),this.mats.metalDark);a.position.y=3.65,r.add(a);const o=new ut(new Qn(.22,.22,10,1,!0),this.mats.metalDark);o.position.y=3.12,o.rotation.x=Math.PI,r.add(o);const l=new Xt({color:16769456,emissive:n,emissiveIntensity:3.2,roughness:.4}),c=new ut(new We(.075,8,6),l);c.position.y=3.06,r.add(c);const h=new Hi(n,i,10,2);h.position.set(t,3,e),this.scene.add(h),this.flickerLights.push({light:h,bulb:l,base:i,seed:Math.random()*100,broken:Math.random()>.72}),this.lights.push(h)}makeShafts(){const t=new Ze({color:10467552,transparent:!0,opacity:.035,blending:ci,depthWrite:!1,side:Qe}),e=new Qn(2.4,8,18,1,!0),i=[{pos:[0,2,-4],rot:[-Math.PI/2,0,0]},{pos:[-5,2,-2],rot:[0,0,Math.PI/2]},{pos:[5,2,3],rot:[0,0,-Math.PI/2]}];this.shafts=[];for(const n of i){const r=new ut(e,t);r.position.set(...n.pos),r.rotation.set(...n.rot),this.scene.add(r),this.shafts.push(r)}}makeDust(){const e=new Te,i=new Float32Array(690);for(let r=0;r<230;r++)i[r*3]=Tt(-8.6,8.6),i[r*3+1]=Tt(.2,4),i[r*3+2]=Tt(-7.6,7.6);e.setAttribute("position",new hi(i,3));const n=new Oc({map:this.dustTex,size:.032,transparent:!0,opacity:.3,depthWrite:!1,blending:ci,color:16769712,sizeAttenuation:!0});this.dust=new Bc(e,n),this.dust.frustumCulled=!1,this.scene.add(this.dust),this.dustPos=i}makeOutside(){const t=Oe(this.texDirt,40,40,5921356,6,{roughness:1,bump:.05}),e=new ut(new Me(110,110),t);e.rotation.x=-Math.PI/2,e.position.y=-.03,e.receiveShadow=!0,this.scene.add(e);const i=new Xt({color:1446671,roughness:1}),n=(o,l,c)=>{const h=new ne;h.position.set(o,0,l),h.scale.setScalar(c);const d=new ut(new oe(.16,.3,4.4,6),i);d.position.y=2.2,d.rotation.z=Tt(-.08,.08),h.add(d);for(let u=0;u<5;u++){const f=new ut(new oe(.03,.1,Tt(1.4,2.6),5),i);f.position.set(Tt(-.7,.7),Tt(2.4,4.3),Tt(-.4,.4)),f.rotation.set(Tt(-.9,.9),Tt(0,ji),Tt(-.8,.8)),h.add(f)}this.scene.add(h)};for(let o=0;o<18;o++){const l=Tt(0,ji),c=Tt(17,38);n(Math.cos(l)*c,Math.sin(l)*c,Tt(.7,1.5))}for(let o=0;o<9;o++){const l=-18+o*4.4,c=new ut(new Ft(.18,2.2,.18),i);c.position.set(l,1.1,-20+Tt(-1.5,1.5)),c.rotation.z=Tt(-.2,.2),this.scene.add(c)}const r=this.mats.concreteDark;for(let o=0;o<22;o++){const l=Tt(0,ji),c=Tt(11,20),h=new ut(new ko(Tt(.3,1),0),r);h.position.set(Math.cos(l)*c,Tt(0,.4),Math.sin(l)*c),h.rotation.set(Tt(0,ji),Tt(0,ji),Tt(0,ji)),h.castShadow=!0,this.scene.add(h)}const a=new ut(new Me(14,14),new Ze({map:mo("#cfe0ff","#ffffff"),transparent:!0,opacity:.55,blending:ci,depthWrite:!1}));a.position.set(-10,15,-42),a.lookAt(0,2,0),this.scene.add(a);for(const[o,l]of[[-3,-12],[3.5,-12],[-13,2],[13,-1],[12,7]]){const c=new ne;c.position.set(o,0,l);for(let h=0;h<7;h++){const d=new ut(new oe(.015,.04,Tt(.7,1.5),4),i);d.position.set(Tt(-.4,.4),Tt(.35,.7),Tt(-.4,.4)),d.rotation.set(Tt(-.7,.7),Tt(0,ji),Tt(-.7,.7)),c.add(d)}this.scene.add(c)}}getWindowById(t){return this.windows.find(e=>e.id===t)}reset(){for(const t of this.windows){for(const e of t.planks)e.visible=!0,e.scale.set(1,1,1);t.boards=t.maxBoards}this.growingPlanks=[],this.door&&(this.door.open=!1,this.door.t=0,this.door.group.position.y=0,this.door.group.visible=!0,this.door.sign.visible=!0,this.colliders.includes(this.door.blocker)||this.colliders.push(this.door.blocker),this.navBlockers.includes(this.door.blocker)||this.navBlockers.push(this.door.blocker)),this.mysteryBox&&(this.mysteryBox.open=!1,this.mysteryBox.t=0,this.mysteryBox.lid.rotation.x=0,this.mysteryBox.beam.material.opacity=0,this.mysteryBox.light.intensity=4)}update(t,e,i){this.time+=t;for(const a of this.flickerLights){let l=.9+Math.sin(e*7.1+a.seed)*Math.sin(e*3.3+a.seed*2)*.1;a.broken&&(l=(Math.sin(e*23+a.seed*5)>.72?1:.18)*(.7+Math.random()*.4)),a.light.intensity=a.base*l,a.bulb.emissiveIntensity=2.4*l+.3}const n=.82+Math.sin(e*11)*.12+Math.random()*.12;this.fireLight&&(this.fireLight.intensity=16*n),this.fireAcc+=t;const r=1/34;for(;this.fireAcc>r;){this.fireAcc-=r;const a=this.firePos;this.additive.spawn(a.x+Tt(-.32,.32),a.y+.25,a.z+Tt(-.32,.32),Tt(-.18,.18),Tt(.7,1.5),Tt(-.18,.18),{color:new At().setHSL(Tt(.02,.09),1,Tt(.45,.62)),size:Tt(.18,.42),life:Tt(.4,.85),gravity:.6,drag:.965,alpha:.55,fadePow:1.8}),Math.random()<.35&&this.particles.spawn(a.x+Tt(-.3,.3),a.y+1,a.z+Tt(-.3,.3),Tt(-.12,.12),Tt(.4,.9),Tt(-.12,.12),{color:new At(.16,.15,.14),size:Tt(.25,.6),life:Tt(.8,1.6),gravity:.25,drag:.97,alpha:.25,fadePow:1.4})}if(this.dust){const a=this.dustPos;for(let o=0;o<a.length;o+=3)a[o]+=Math.sin(e*.3+o)*.012*t,a[o+1]-=.018*t,a[o+2]+=Math.cos(e*.23+o)*.01*t,a[o+1]<.1&&(a[o+1]=4);this.dust.geometry.attributes.position.needsUpdate=!0}if(this.door&&this.door.open&&this.door.t<1){this.door.t=Math.min(1,this.door.t+t*.85);const a=1-Math.pow(1-this.door.t,3);this.door.group.position.y=a*3.3,this.door.t>=1&&(this.door.group.visible=!1)}if(this.mysteryBox)if(this.mysteryBox.open){this.mysteryBox.t=Math.min(1,this.mysteryBox.t+t*1.2);const a=1-Math.pow(1-this.mysteryBox.t,3);this.mysteryBox.lid.rotation.x=-a*1.9,this.mysteryBox.beam.material.opacity=Math.sin(Math.min(1,this.mysteryBox.t)*Math.PI)*.13,this.mysteryBox.light.intensity=4+a*14,Math.random()<.4&&this.additive.spawn(7+Tt(-.5,.5),1+Tt(0,2.5),12.5+Tt(-.5,.5),Tt(-.1,.1),Tt(.4,1.2),Tt(-.1,.1),{color:new At(1,.75,.3),size:Tt(.03,.09),life:Tt(.6,1.3),gravity:.2,drag:.97,alpha:.9})}else this.mysteryBox.t=Math.max(0,this.mysteryBox.t-t),this.mysteryBox.lid.rotation.x=-this.mysteryBox.t*1.9,this.mysteryBox.beam.material.opacity=0,this.mysteryBox.light.intensity=4;for(let a=this.growingPlanks.length-1;a>=0;a--){const o=this.growingPlanks[a];o.t+=t*6;const l=Math.min(1,o.t),c=.2+l*.8;o.mesh.scale.set(c,c,c),l>=1&&(o.mesh.scale.set(1,1,1),this.growingPlanks.splice(a,1))}for(const a of this.shafts)a.material.opacity=.028+Math.sin(e*.7+a.position.x)*.008}nearestBuy(t){let e=null,i=1/0;for(const n of this.buys){const r=Math.hypot(t.x-n.pos.x,t.z-n.pos.z);r<n.radius&&r<i&&(e=n,i=r)}return e}}class lg{constructor(){this.items=[]}get size(){return this.items.length}push(t,e){const i=this.items;i.push({node:t,priority:e});let n=i.length-1;for(;n>0;){const r=n-1>>1;if(i[r].priority<=i[n].priority)break;const a=i[r];i[r]=i[n],i[n]=a,n=r}}pop(){const t=this.items,e=t[0],i=t.pop();if(t.length){t[0]=i;let n=0;for(;;){const r=n*2+1,a=r+1;let o=n;if(r<t.length&&t[r].priority<t[o].priority&&(o=r),a<t.length&&t[a].priority<t[o].priority&&(o=a),o===n)break;const l=t[o];t[o]=t[n],t[n]=l,n=o}}return e?e.node:-1}}class cg{constructor(t,e,i,n=.36){this.bounds=t,this.cell=e,this.radius=n,this.blockers=i,this.cols=Math.ceil((t.maxX-t.minX)/e),this.rows=Math.ceil((t.maxZ-t.minZ)/e),this.blocked=new Uint8Array(this.cols*this.rows),this.rebuild()}setBlockers(t){this.blockers=t,this.rebuild()}rebuild(){const{minX:t,minZ:e}=this.bounds,{cell:i,cols:n,rows:r}=this;for(let a=0;a<r;a++)for(let o=0;o<n;o++){const l=t+(o+.5)*i,c=e+(a+.5)*i;this.blocked[a*n+o]=this.pointBlocked(l,c)?1:0}}pointBlocked(t,e){const i=this.radius;for(const n of this.blockers)if(t>n.minX-i&&t<n.maxX+i&&e>n.minZ-i&&e<n.maxZ+i)return!0;return!1}idx(t,e){return e*this.cols+t}cellOf(t,e){const i=Math.floor((t-this.bounds.minX)/this.cell),n=Math.floor((e-this.bounds.minZ)/this.cell);return{c:Math.max(0,Math.min(this.cols-1,i)),r:Math.max(0,Math.min(this.rows-1,n))}}worldOf(t,e){return{x:this.bounds.minX+(t+.5)*this.cell,z:this.bounds.minZ+(e+.5)*this.cell}}nearestFree(t,e,i=8){if(!this.blocked[this.idx(t,e)])return{c:t,r:e};for(let n=1;n<=i;n++)for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){if(Math.abs(r)!==n&&Math.abs(a)!==n)continue;const o=t+a,l=e+r;if(!(o<0||l<0||o>=this.cols||l>=this.rows)&&!this.blocked[this.idx(o,l)])return{c:o,r:l}}return{c:t,r:e}}findPath(t,e,i,n){const r=this.cellOf(t,e),a=this.cellOf(i,n),o=this.nearestFree(r.c,r.r,3),l=this.nearestFree(a.c,a.r,5),c=this.idx(o.c,o.r),h=this.idx(l.c,l.r);if(c===h)return[{x:i,z:n}];const d=this.cols*this.rows,u=new Float32Array(d).fill(1/0),f=new Int32Array(d).fill(-1),_=new Uint8Array(d),v=new lg;u[c]=0,v.push(c,0);const{cols:m,rows:p}=this,x=l.c,E=l.r;let b=!1,T=0;for(;v.size&&T++<9e3;){const R=v.pop();if(R===h){b=!0;break}if(_[R])continue;_[R]=1;const N=R%m,F=R/m|0;for(let H=-1;H<=1;H++)for(let D=-1;D<=1;D++){if(!D&&!H)continue;const G=N+D,q=F+H;if(G<0||q<0||G>=m||q>=p)continue;const z=q*m+G;if(this.blocked[z]||_[z]||D&&H&&(this.blocked[F*m+G]||this.blocked[q*m+N]))continue;const tt=D&&H?1.4142:1,W=u[R]+tt;if(W<u[z]){u[z]=W,f[z]=R;const Q=Math.abs(G-x),j=Math.abs(q-E),bt=Q+j+(1.4142-2)*Math.min(Q,j);v.push(z,W+bt*1.08)}}}if(!b)return null;const w=[];let g=h,y=0;for(;g!==-1&&y++<4e3&&(w.push(g),g!==c);)g=f[g];w.reverse();const C=w.map(R=>this.worldOf(R%m,R/m|0));return C.length&&this.lineClear(C[C.length-1].x,C[C.length-1].z,i,n)&&C.push({x:i,z:n}),this.smooth(C)}smooth(t){if(t.length<=2)return t;const e=[];let i=0;for(e.push(t[0]);i<t.length-1;){let n=i+1;for(let r=t.length-1;r>i+1;r--)if(this.lineClear(t[i].x,t[i].z,t[r].x,t[r].z)){n=r;break}e.push(t[n]),i=n}return e}lineClear(t,e,i,n){const r=i-t,a=n-e,o=Math.hypot(r,a),l=Math.max(1,Math.ceil(o/.28));for(let c=1;c<l;c++){const h=c/l;if(this.pointBlocked(t+r*h,e+a*h))return!1}return!0}}const go=Math.PI*2,ve=(s,t)=>s+Math.random()*(t-s),de={torso:new Jn(.19,.42,4,10),coat:new oe(.245,.34,.62,12,1,!0),head:new We(.17,16,14),skullCap:new We(.174,12,8,0,go,0,Math.PI*.52),socket:new We(.041,8,6),eye:new We(.0115,6,5),armU:new oe(.058,.049,.31,7),armL:new oe(.046,.036,.28,7),hand:new We(.058,8,6),finger:new Jn(.011,.052,2,5),leg:new oe(.083,.058,.84,8),boot:new Ft(.125,.1,.245),helmet:new We(.183,14,9,0,go,0,Math.PI*.56),brim:new oe(.21,.22,.024,14,1,!0),belt:new Ft(.43,.065,.3),buckle:new Ft(.055,.05,.016),pouch:new Ft(.095,.115,.07),shoulder:new We(.088,8,6),plate:new Ft(.34,.26,.06),tooth:new Ft(.016,.022,.014),blood:new Me(.14,.28),wound:new We(.05,7,5),tatter:new Ft(.075,.18,.018),button:new We(.011,6,4),ear:new We(.032,6,5),nose:new Qn(.029,.07,5)},ki=rg(),fr=ag();function hg(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");t.clearRect(0,0,128,128);const e=(n,r)=>n+Math.random()*(r-n);t.fillStyle="rgba(52, 16, 12, 0.98)",t.beginPath(),t.ellipse(64,63,42,30,.04,0,Math.PI*2),t.fill(),t.fillStyle="#0a0303",t.beginPath(),t.ellipse(64,64,33,22,.02,0,Math.PI*2),t.fill(),t.fillStyle="#48110e",t.beginPath(),t.moveTo(31,43),t.quadraticCurveTo(64,38,97,44),t.lineTo(94,55),t.quadraticCurveTo(64,50,34,55),t.closePath(),t.fill();for(let n=0;n<6;n++){if(n===2)continue;const r=35+n*10+e(-1.5,1.5),a=e(5,9),o=e(7,14);t.fillStyle=n%3===0?"#756b55":"#94896d",t.beginPath(),t.moveTo(r,48),t.lineTo(r+a,48+e(-1,1)),t.lineTo(r+a-e(0,2),48+o),t.lineTo(r+e(0,2),48+o-e(0,3)),t.closePath(),t.fill()}for(let n=0;n<5;n++){if(n===1)continue;const r=38+n*11+e(-1,1),a=e(4,8),o=e(5,10);t.fillStyle="#625946",t.beginPath(),t.moveTo(r,80),t.lineTo(r+a,80+e(-1,1)),t.lineTo(r+a-e(0,2),80-o),t.lineTo(r+e(0,2),80-o+e(0,2)),t.closePath(),t.fill()}t.fillStyle="#3d1110",t.beginPath(),t.ellipse(61,75,16,7,.12,0,Math.PI*2),t.fill(),t.fillStyle="rgba(92, 8, 7, 0.9)",t.fillRect(46,82,4,25),t.fillRect(73,80,3,19),t.fillRect(57,84,2,15);const i=new hn(s);return i.colorSpace=we,i.minFilter=$e,i}const ug=hg(),dg=new Ze({map:ug,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Yt={coat:new Xt({map:fr,color:10130052,roughness:.99,side:Qe,emissive:328707,emissiveIntensity:.32}),coat2:new Xt({map:fr,color:7169884,roughness:.99,side:Qe,emissive:262914,emissiveIntensity:.3}),shirt:new Xt({map:fr,color:5723726,roughness:1}),pants:new Xt({map:fr,color:6381141,roughness:.99,emissive:197378,emissiveIntensity:.25}),boot:new Xt({color:1381135,roughness:.9}),belt:new Xt({color:2169878,roughness:.9}),buckle:new Xt({color:5985349,metalness:.55,roughness:.55}),pouch:new Xt({color:3155739,roughness:.95}),skin:[new Xt({map:ki,bumpMap:ki,bumpScale:.018,color:8356978,roughness:.95,emissive:1380875,emissiveIntensity:.42}),new Xt({map:ki,bumpMap:ki,bumpScale:.018,color:8747627,roughness:.95,emissive:1511946,emissiveIntensity:.42}),new Xt({map:ki,bumpMap:ki,bumpScale:.018,color:7567978,roughness:.95,emissive:1184264,emissiveIntensity:.42}),new Xt({map:ki,bumpMap:ki,bumpScale:.018,color:9075819,roughness:.95,emissive:1511946,emissiveIntensity:.42})],skinDark:new Xt({map:ki,color:6251604,roughness:1}),mouth:new Xt({color:1574662,roughness:1}),tongue:new Xt({color:5052180,roughness:1}),teeth:new Xt({color:8287069,roughness:.9}),socket:new Xt({color:526086,roughness:1}),hair:new Xt({color:2169877,roughness:1}),eye:new Xt({color:16766826,emissive:16757540,emissiveIntensity:1.65,roughness:.2}),eyeRed:new Xt({color:16730672,emissive:16718346,emissiveIntensity:2.1,roughness:.2}),metal:new Xt({color:3882039,metalness:.68,roughness:.6}),metalDark:new Xt({color:2368801,metalness:.55,roughness:.68}),wound:new Xt({color:3671813,roughness:.92,emissive:1638914,emissiveIntensity:.5}),blood:new Ze({color:4392453,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),bloodDark:new Xt({color:2885124,roughness:.95})};function Ut(s,t,e,i,n,r,a,o={}){const l=new ut(t,e);return l.position.set(i,n,r),o.rot&&l.rotation.set(o.rot[0],o.rot[1],o.rot[2]),o.scale&&l.scale.set(o.scale[0],o.scale[1],o.scale[2]),l.castShadow=o.shadow??!0,l.receiveShadow=!0,l.userData.part=a,s.add(l),l}function fg(s,t,e,i,n,r,a,o=1){const l=new ne;l.position.set(t,e,i),l.rotation.set(n,r,a),l.scale.setScalar(o);const c=Ut(l,de.hand,Yt.skin[0],0,0,0,"limb",{scale:[.85,1.15,.72]});c.castShadow=!1;for(let d=0;d<4;d++){const u=Ut(l,de.finger,Yt.skin[0],(d-1.5)*.022,-.055,-.02,"limb");u.rotation.x=-.35+ve(-.12,.12),u.rotation.z=(d-1.5)*.05,u.castShadow=!1}const h=Ut(l,de.finger,Yt.skin[0],.052,-.012,.01,"limb");return h.rotation.z=.9,h.castShadow=!1,s.add(l),l}function pg(s){const t=new ne,e=s.type==="brute",i=s.type==="runner",n=Yt.skin[Math.floor(Math.random()*Yt.skin.length)],r=e?Yt.coat2:Yt.coat,a=i||e?Yt.eyeRed:Yt.eye,o=e?1.06:i?.98:1;s.legs=[];for(const T of[-1,1]){const w=new ne;w.position.set(T*.135,.94,0),Ut(w,de.leg,Yt.pants,0,-.42,0,"limb").scale.set(1,o,1),Ut(w,new Ft(.14,.09,.14),Yt.boot,0,-.83,-.01,"limb",{shadow:!1});const y=Ut(w,de.boot,Yt.boot,0,-.88,-.05,"limb");y.rotation.x=-.03,Ut(w,new oe(.068,.073,.12,7),Yt.pants,0,-.73,0,"limb",{shadow:!1}),t.add(w),s.legs.push(w)}Ut(t,new oe(.2,.22,.16,10),Yt.pants,0,.97,0,"body",{scale:[1,1,.82]});const l=new ne;l.position.y=.94,t.add(l),s.torso=l;const c=Ut(l,de.torso,n,0,.24,0,"body",{scale:[1.02,o,.84]});c.rotation.x=.03;const h=Ut(l,de.coat,r,0,.09,0,"body",{scale:[1,o,.92]});h.rotation.y=ve(-.06,.06);for(const T of[-1,1]){const w=Ut(l,new Ft(.1,.36,.026),r,T*.105,.25,-.19,"body",{rot:[.02,0,T*.2]});w.castShadow=!1}for(let T=0;T<11;T++){const w=T/11*go+ve(-.12,.12),g=.3,y=Ut(l,de.tatter,r,Math.sin(w)*g,-.245-ve(0,.045),Math.cos(w)*g*.92,"body",{rot:[ve(-.12,.12),w,ve(-.16,.16)]});y.scale.y=ve(.65,1.35),y.castShadow=!1}Ut(l,de.belt,Yt.belt,0,.005,0,"body",{scale:[1,1,.88]}),Ut(l,de.buckle,Yt.buckle,0,.008,-.142,"body",{shadow:!1});for(const T of[-.155,.155]){const w=Ut(l,de.pouch,Yt.pouch,T,-.07,-.15,"body",{rot:[.1,T*.3,0]});w.scale.y=ve(.9,1.15)}for(const T of[-1,1])Ut(l,de.shoulder,r,T*.245,.445,0,"body",{scale:[1.15,.9,1]});Ut(l,new oe(.155,.195,.1,10),r,0,.53,0,"body"),Ut(l,new oe(.063,.075,.12,7),n,0,.6,-.015,"head",{shadow:!1});for(let T=0;T<3;T++)Ut(l,de.button,Yt.buckle,.02,.11+T*.1,-.2,"body",{shadow:!1});const d=Ut(l,new Ft(.055,.5,.022),Yt.belt,-.08,.25,-.195,"body",{rot:[0,0,-.32]});d.castShadow=!1;const u=Ut(l,de.wound,Yt.wound,ve(-.09,.09),ve(.28,.38),-.185,"body",{scale:[1.1,.55,.5]});u.castShadow=!1;const f=Ut(l,de.blood,Yt.blood,ve(-.08,.08),.2,-.205,"body",{rot:[0,0,ve(-.35,.35)]});f.castShadow=!1;const _=new ne;_.position.set(0,.72,-.015),l.add(_),s.headMesh=_;const v=Ut(_,de.head,n,0,0,-.018,"head",{scale:[.92,1.04,.95]});v.rotation.x=-.03;for(const T of[-1,1]){Ut(_,new Ft(.088,.026,.05),Yt.skinDark,T*.062,.058,-.135,"head",{rot:[.05,0,T*.14],shadow:!1});const w=Ut(_,de.socket,Yt.socket,T*.061,.025,-.146,"head",{scale:[1.02,.88,.55],shadow:!1});w.rotation.z=T*.1,Ut(_,de.eye,a,T*.061,.028,-.172,"head",{shadow:!1}),Ut(_,new Ft(.055,.035,.04),Yt.skinDark,T*.087,-.018,-.128,"head",{rot:[0,T*.2,0],shadow:!1}),Ut(_,de.ear,n,T*.156,-.005,-.005,"head",{scale:[.55,1,.8],shadow:!1})}Ut(_,new Qn(.036,.085,6),Yt.skinDark,0,-.008,-.19,"head",{rot:[-Math.PI/2,0,0],shadow:!1}).scale.set(.85,1,.8),Ut(_,new Ft(.118,.06,.03),Yt.mouth,0,-.087,-.152,"head",{shadow:!1});const p=Ut(_,new Ft(.12,.052,.105),n,0,-.125,-.123,"head",{rot:[.22,0,0],shadow:!1});p.scale.x=.94,Ut(_,new Ft(.125,.018,.032),Yt.skinDark,0,-.058,-.167,"head",{shadow:!1}),Ut(_,new Ft(.11,.014,.03),Yt.skinDark,0,-.116,-.163,"head",{shadow:!1}),Ut(_,new Ft(.058,.014,.038),Yt.tongue,0,-.092,-.168,"head",{shadow:!1});const x=new ut(new Me(.15,.15),dg);x.position.set(0,-.088,-.186),x.userData.part="head",_.add(x);const E=Ut(_,new Me(.062,.15),Yt.blood,ve(-.005,.02),-.12,-.188,"head",{rot:[0,0,ve(-.2,.2)]});if(E.castShadow=!1,e||!i&&Math.random()>.38){const T=Ut(_,de.helmet,Yt.metal,0,.135,-.005,"head",{rot:[-.08,ve(-.08,.08),ve(-.04,.04)]});T.castShadow=!0;const w=Ut(_,de.brim,Yt.metalDark,0,.096,-.012,"head",{rot:[-.04,0,0]});w.castShadow=!1,Ut(_,new Ft(.03,.012,.36),Yt.metalDark,0,.31,-.005,"head",{rot:[.08,0,0],shadow:!1}).scale.set(1,1,.9)}else Ut(_,de.skullCap,Yt.hair,0,.045,-.018,"head",{scale:[.96,.78,.98],shadow:!1}),Math.random()>.45&&Ut(_,new Ft(.14,.11,.03),Yt.hair,0,.03,-.145,"head",{rot:[-.1,0,0],shadow:!1});s.arms=[],s.elbows=[];for(const T of[-1,1]){const w=new ne;w.position.set(T*.255,.43,-.015),w.rotation.x=1.3,w.rotation.z=T*-.13,l.add(w),Ut(w,new oe(.067,.054,.15,7),r,0,-.065,0,"limb"),Ut(w,de.armU,n,0,-.17,0,"limb"),Ut(w,new oe(.062,.058,.05,7),r,0,-.27,0,"limb",{shadow:!1});const g=new ne;g.position.y=-.31,g.rotation.x=.34,w.add(g),Ut(g,de.armL,n,0,-.13,0,"limb"),fg(g,0,-.29,-.008,.1,0,0,.88),s.arms.push(w),s.elbows.push(g)}if(e){Ut(l,de.plate,Yt.metal,0,.29,-.195,"body",{rot:[.04,0,0]}).scale.set(1,1,.9);for(const w of[-1,1])Ut(l,new Ft(.15,.09,.2),Yt.metalDark,w*.255,.455,0,"body",{rot:[0,0,w*-.22]})}for(let T=0;T<2;T++){const w=Ut(l,new Me(ve(.05,.11),ve(.08,.18)),Yt.blood,ve(-.15,.15),ve(.05,.35),-.205,"body",{rot:[0,0,ve(-.6,.6)]});w.castShadow=!1}return t}const pr=Math.PI*2,Be=(s,t)=>s+Math.random()*(t-s),hc={north:[new P(-4.5,0,-15),new P(0,0,-16),new P(4.5,0,-15)],west:[new P(-16,0,-6),new P(-17,0,-1),new P(-16,0,2)],east:[new P(16,0,0),new P(17,0,5),new P(16,0,8)]};let mg=0;class gg{constructor(t,e,i){this.manager=t,this.window=e,this.stats=i,this.id=mg++,this.type=i.type,this.hp=i.hp,this.maxHp=i.hp,this.speed=i.speed,this.damage=i.damage,this.scale=i.scale,this.state="rising",this.riseT=0,this.riseDur=1.15,this.attackCd=Be(.4,1.2),this.attackWind=0,this.attackHit=!1,this.groanT=Be(1,7),this.phase=Math.random()*pr,this.flinch=0,this.deathT=0,this.sinkT=0,this.path=null,this.pathT=0,this.pathIndex=0,this.targetPos=new P,this.stuckT=0,this.lastPos=new P,this.speedMul=1,this.direct=!1;const n=hc[e.id]||hc.north,r=n[Math.floor(Math.random()*n.length)];this.spawnPos=r.clone().add(new P(Be(-2.2,2.2),0,Be(-2.2,2.2))),this.approach=e.center.clone().addScaledVector(e.normal,1.75),this.inside=e.center.clone().addScaledVector(e.normal,-1.65),this.group=this.build(),this.group.position.copy(this.spawnPos),this.group.position.y=-1.7,this.group.scale.setScalar(this.scale),this.group.rotation.y=Math.atan2(e.normal.x,e.normal.z)+Be(-.3,.3),t.scene.add(this.group),this.hitMeshes=[],this.group.traverse(a=>{a.isMesh&&(a.userData.zombie=this,a.userData.part||(a.userData.part="limb"),this.hitMeshes.push(a))}),t.hitMeshes.push(...this.hitMeshes),t.particles.burst(new P(this.spawnPos.x,.1,this.spawnPos.z),new P(0,1,0),14,{color:new At(.28,.24,.17),size:.08,life:1,spread:1.8,gravity:-6})}build(){return pg(this)}takeDamage(t,e,i,n){return this.state==="dying"||this.state==="dead"?!1:(this.hp-=t,this.flinch=.18,this.manager.particles.burst(i,n,e?16:9,{color:new At(.42,.03,.03),size:e?.09:.06,life:.8,spread:1.4,push:1}),e&&this.manager.particles.burst(i,n,6,{color:new At(.28,.02,.02),size:.13,life:1.2,spread:1.1,gravity:-12}),this.hp<=0?(this.die(e,n),!0):!1)}die(t,e){this.state="dying",this.deathT=0,this.manager.alive--,this.manager.killed++;for(const n of this.hitMeshes){const r=this.manager.hitMeshes.indexOf(n);r>=0&&this.manager.hitMeshes.splice(r,1)}this.hitMeshes=[];const i=this.group.position.clone();i.y=.05,this.manager.decals.add(i.x,.013,i.z,Be(.7,1.4),Math.random()*pr,.8),this.manager.particles.burst(new P(i.x,.9,i.z),e||new P(0,1,0),18,{color:new At(.35,.02,.02),size:.08,life:1.1,spread:2,push:1.2}),this.manager.onKill(this,t)}update(t,e){if(this.state==="dying"){this.deathT+=t;const o=Math.min(1,this.deathT/.65);this.group.rotation.x=-o*1.5,this.group.position.y=-Math.max(0,this.deathT-1.8)*.35,this.deathT>3.2&&(this.state="dead",this.manager.scene.remove(this.group));return}if(this.state==="dead")return;const i=this.group.position,n=e.position.x-i.x,r=e.position.z-i.z,a=Math.hypot(n,r);if(this.groanT-=t,this.groanT<=0){this.groanT=Be(2.6,7);const o=this.type==="brute"?.65:this.type==="runner"?1.28:1;this.manager.audio.groan(a,o*Be(.9,1.1))}if(this.attackCd=Math.max(0,this.attackCd-t),this.flinch=Math.max(0,this.flinch-t),this.state==="rising"){this.riseT+=t;const o=Math.min(1,this.riseT/this.riseDur),l=1-Math.pow(1-o,3);i.y=-1.7+l*1.7,o<.8&&Math.random()<.4&&this.manager.particles.spawn(i.x+Be(-.3,.3),.05,i.z+Be(-.3,.3),Be(-.4,.4),Be(.4,1.1),Be(-.4,.4),{color:new At(.3,.26,.18),size:.07,life:.7,gravity:-7}),o>=1&&(i.y=0,this.state="approach");return}if(this.state==="approach"){Math.hypot(this.approach.x-i.x,this.approach.z-i.z)>.45?(this.moveToward(this.approach.x,this.approach.z,t,this.speed*1.05),this.animate(t,this.speed,!1)):(this.state="boarding",this.attackCd=.2);return}if(this.state==="boarding"){if(this.faceToward(this.window.center.x,this.window.center.z,t,8),this.animate(t,.4,!1),this.window.boards<=0){this.state="climb",this.climbT=0,this.climbStart=i.clone(),this.climbEnd=this.inside.clone(),this.climbEnd.y=0;return}this.attackCd<=0&&(this.attackCd=this.type==="brute"?1.1:1.7,this.attackWind=.32,this.attackHit=!1,this.manager.onBoardHit(this,this.window)),this.attackWind>0&&(this.attackWind-=t,this.animateAttack());return}if(this.state==="climb"){this.climbT+=t;const o=Math.min(1,this.climbT/.95),l=o*o*(3-2*o);i.x=Gi.lerp(this.climbStart.x,this.climbEnd.x,l),i.z=Gi.lerp(this.climbStart.z,this.climbEnd.z,l),i.y=Math.sin(o*Math.PI)*1.15,this.group.rotation.x=-Math.sin(o*Math.PI)*.5,o>=1&&(i.y=0,this.group.rotation.x=0,this.state="chase",this.pathT=0);return}if(this.state==="chase"||this.state==="attack"){if(this.faceToward(e.position.x,e.position.z,t,6),a<1.35?this.state!=="attack"&&(this.state="attack",this.attackWind=.42,this.attackHit=!1):this.state==="attack"&&a>1.7&&(this.state="chase"),this.state==="attack")this.attackWind-=t,this.attackWind<=0&&!this.attackHit&&(this.attackHit=!0,a<1.85&&this.manager.onPlayerDamage(this.damage,this)),this.animateAttack(),this.attackWind<=-.25&&(this.state="chase",this.attackCd=this.type==="brute"?1.3:1.05),a>1.25&&this.moveToward(e.position.x,e.position.z,t,this.speed*.25);else{if(this.pathT-=t,!this.path||this.pathT<=0){this.pathT=.55;const h=this.manager.nav.lineClear(i.x,i.z,e.position.x,e.position.z);this.direct=h,h?this.path=null:(this.path=this.manager.nav.findPath(i.x,i.z,e.position.x,e.position.z),this.pathIndex=0)}let l=e.position.x,c=e.position.z;if(!this.direct&&this.path&&this.path.length){for(;this.pathIndex<this.path.length-1;){const d=this.path[this.pathIndex];if(Math.hypot(d.x-i.x,d.z-i.z)<.4)this.pathIndex++;else break}const h=this.path[Math.min(this.pathIndex,this.path.length-1)];l=h.x,c=h.z}this.moveToward(l,c,t,this.speed),this.animate(t,this.speed,!1)}this.separate(t);return}}animateAttack(){const t=this.attackWind>0?Math.sin((1-this.attackWind/.42)*Math.PI*.7):Math.sin(Math.max(0,-this.attackWind)*8);for(let e=0;e<this.arms.length;e++){const i=this.arms[e],n=e===0?1:-1;i.rotation.x=1.3+t*.5,i.rotation.z=n*(.13+t*.2),this.elbows[e]&&(this.elbows[e].rotation.x=.34-t*.16)}this.torso.rotation.x=.12-t*.16,this.headMesh.rotation.x=-t*.14}animate(t,e,i){this.phase+=t*(2.2+e*1.4);const n=Math.sin(this.phase)*.52;this.legs[0].rotation.x=n,this.legs[1].rotation.x=-n;for(let r=0;r<this.arms.length;r++)this.arms[r].rotation.x=1.3+Math.sin(this.phase+r*1.5)*.07,this.arms[r].rotation.z=(r===0?1:-1)*.13,this.elbows[r]&&(this.elbows[r].rotation.x=.34+Math.sin(this.phase+r*1.5)*.04);this.torso.position.y=.94+Math.abs(Math.sin(this.phase))*.024,this.torso.rotation.z=Math.sin(this.phase)*.035,this.flinch>0?(this.torso.rotation.x=.12-this.flinch*1.4,this.headMesh.rotation.x=-this.flinch*1.1):(this.torso.rotation.x=.12+Math.sin(this.phase*.5)*.015,this.headMesh.rotation.x=Math.sin(this.phase*.43)*.035)}moveToward(t,e,i,n){const r=this.group.position;let a=t-r.x,o=e-r.z;const l=Math.hypot(a,o);if(l<.001)return;a/=l,o/=l;let c=n*this.speedMul;this.flinch>0&&(c*=.35),r.x+=a*c*i,r.z+=o*c*i;const h=.34*this.scale;for(const d of this.manager.nav.blockers)if(r.x>d.minX-h&&r.x<d.maxX+h&&r.z>d.minZ-h&&r.z<d.maxZ+h){const u=Math.max(d.minX,Math.min(r.x,d.maxX)),f=Math.max(d.minZ,Math.min(r.z,d.maxZ)),_=r.x-u,v=r.z-f,m=Math.hypot(_,v)||.001;r.x=u+_/m*h,r.z=f+v/m*h}}faceToward(t,e,i,n){let a=Math.atan2(-(t-this.group.position.x),-(e-this.group.position.z))-this.group.rotation.y;for(;a>Math.PI;)a-=pr;for(;a<-Math.PI;)a+=pr;this.group.rotation.y+=a*Math.min(1,i*n)}separate(t){const e=this.group.position;for(const i of this.manager.list){if(i===this||i.state==="dying"||i.state==="dead"||i.state==="rising")continue;const n=e.x-i.group.position.x,r=e.z-i.group.position.z,a=Math.hypot(n,r),o=.62*this.scale;if(a>1e-4&&a<o){const l=(o-a)*.5;e.x+=n/a*l,e.z+=r/a*l}}}}class _g{constructor(t,e,i,n,r,a,o,l){this.scene=t,this.nav=e,this.world=i,this.audio=n,this.particles=r,this.additive=a,this.decals=o,this.callbacks=l,this.list=[],this.hitMeshes=[],this.round=1,this.total=0,this.spawned=0,this.alive=0,this.killed=0,this.roundActive=!1,this.roundComplete=!1,this.spawnTimer=0,this.maxAlive=8,this.stats=null,this.nukeT=0}reset(){for(const t of this.list)t.state!=="dead"&&this.scene.remove(t.group);this.list=[],this.hitMeshes=[],this.round=1,this.total=0,this.spawned=0,this.alive=0,this.killed=0,this.roundActive=!1,this.roundComplete=!1}startRound(t){this.round=t,this.total=Math.min(72,Math.round(4+t*2+Math.pow(t,1.32))),this.spawned=0,this.alive=0,this.killed=0,this.roundComplete=!1,this.roundActive=!0,this.spawnTimer=.9,this._brutesSpawned=!1,this.maxAlive=Math.min(28,6+Math.floor(t*1.7)),this.stats={hp:100*(1+.16*(t-1))+Math.pow(t,1.5)*1.2,speed:1.15+Math.min(2.1,t*.075),damage:18+Math.min(28,t*1.4),runnerChance:t>=5?Math.min(.42,(t-4)*.05):0,brutes:t%5===0?Math.floor(t/5):0}}get remaining(){return Math.max(0,this.total-this.killed)}spawnOne(){const t=this.world.windows[Math.floor(Math.random()*this.world.windows.length)],e=this.stats;let i="normal";e.brutes>0&&this.spawned>=Math.floor(this.total*.55)&&!this._brutesSpawned?(i="brute",this._brutesSpawned=!0):Math.random()<e.runnerChance&&(i="runner");const n=i==="brute"?1.42:i==="runner"?.93:Be(.92,1.08),r=e.hp*(i==="brute"?5.2:i==="runner"?.72:1)*Be(.92,1.08),a=e.speed*(i==="brute"?.82:i==="runner"?1.62:1)*Be(.92,1.08),o=e.damage*(i==="brute"?2.2:1),l=new gg(this,t,{type:i,hp:r,speed:a,damage:o,scale:n});this.list.push(l),this.spawned++,this.alive++}onBoardHit(t,e){this.world.breakBoard(e),this.audio.repair(),this.particles.burst(e.center.clone().add(new P(0,1.2,0)),e.normal,4,{color:new At(.35,.28,.18),size:.04,life:.5,spread:1,gravity:-5})}onPlayerDamage(t,e){this.callbacks.onPlayerDamage(t,e)}onKill(t,e){this.callbacks.onKill(t,e)}nuke(){for(const t of[...this.list])t.state==="dying"||t.state==="dead"||(t.hp=1,t.die(!1,new P(0,1,0)));this.callbacks.onNuke()}update(t,e){if(this.roundActive){this.spawned<this.total&&this.alive<this.maxAlive&&(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnOne(),this.spawnTimer=Math.max(.32,1.55-this.round*.07)*Be(.7,1.25)));for(const i of this.list)i.update(t,e);for(let i=this.list.length-1;i>=0;i--)this.list[i].state==="dead"&&this.list.splice(i,1);this.spawned>=this.total&&this.alive<=0&&!this.roundComplete&&(this.roundComplete=!0,this.roundActive=!1)}}resetBruteFlag(){this._brutesSpawned=!1}}const gs=new P;function gi(s,t,e,i,n,r){const a=2*Math.PI*n/4,o=Math.max(r-2*n,0),l=Math.PI/4;gs.copy(t),gs[i]=0,gs.normalize();const c=.5*a/(a+o),h=1-gs.angleTo(s)/l;return Math.sign(gs[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Vr extends Ft{constructor(t=1,e=1,i=1,n=2,r=.1){const a=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,h=new P(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,v=new P,m=.5/a;for(let p=0,x=0;p<d.length;p+=3,x+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/_)){case 0:v.set(1,0,0),f[x+0]=gi(v,c,"z","y",r,i),f[x+1]=1-gi(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[x+0]=1-gi(v,c,"z","y",r,i),f[x+1]=1-gi(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[x+0]=1-gi(v,c,"x","z",r,t),f[x+1]=gi(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),f[x+0]=1-gi(v,c,"x","z",r,t),f[x+1]=1-gi(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),f[x+0]=1-gi(v,c,"x","y",r,t),f[x+1]=1-gi(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[x+0]=gi(v,c,"x","y",r,t),f[x+1]=1-gi(v,c,"y","x",r,e);break}}static fromJSON(t){return new Vr(t.width,t.height,t.depth,t.segments,t.radius)}}const vn=new Xt({color:5396315,metalness:.72,roughness:.38,emissive:197637,emissiveIntensity:.5}),qt=new Xt({color:2895923,metalness:.64,roughness:.5,emissive:131844,emissiveIntensity:.45}),_i=new Xt({color:7830654,metalness:.88,roughness:.26}),Gn=new Xt({color:7358507,roughness:.66,metalness:.03}),Hn=new Xt({color:4927261,roughness:.74,metalness:.02}),ya=new Xt({color:2170650,roughness:.96}),uc=new Xt({color:4079668,roughness:.98}),ih=new Xt({color:2829091,roughness:.98}),xg=new Xt({color:11108664,metalness:.9,roughness:.32}),ba=new Xt({color:7143306,emissive:3800938,emissiveIntensity:3.8,roughness:.3});function It(s,t,e,i,n,r,a,o,l=.008,c=null){const h=Math.min(l,t*.45,e*.45,i*.45),d=new ut(new Vr(t,e,i,2,h),o);return d.position.set(n,r,a),c&&d.rotation.set(c[0],c[1],c[2]),d.castShadow=!1,d.receiveShadow=!1,s.add(d),d}function Ne(s,t,e,i,n,r,a,o,l=null,c=10){const h=new ut(new oe(t,e,i,c),o);return h.position.set(n,r,a),l&&h.rotation.set(l[0],l[1],l[2]),h.castShadow=!1,h.receiveShadow=!1,s.add(h),h}function Ir(s,t,e,i,n,r=7){const a=new P(...t),l=new P(...e).clone().sub(a),c=l.length(),h=new ut(new oe(i,i*.86,c,r),n);return h.position.copy(a).addScaledVector(l,.5),h.quaternion.setFromUnitVectors(new P(0,1,0),l.normalize()),h.castShadow=!1,h.receiveShadow=!1,s.add(h),h}function Nr(s,t,e,i,n=0,r=0,a=0,o=1){const l=new ne;l.position.set(t,e,i),l.rotation.set(n,r,a),l.scale.setScalar(o);const c=new ut(new Vr(.075,.047,.095,2,.018),ya);c.rotation.z=Math.PI/2,l.add(c);for(let u=0;u<4;u++){const f=new ut(new Jn(.0105,.055,2,5),ya);f.position.set(-.005,.006,-.035-u*.017),f.rotation.x=Math.PI/2-.32,f.rotation.z=-.06,l.add(f)}const h=new ut(new Jn(.011,.045,2,5),ya);h.position.set(.04,.028,0),h.rotation.set(.4,0,1),l.add(h);const d=new ut(new oe(.047,.041,.045,7),ih);return d.position.set(0,-.01,.068),d.rotation.x=Math.PI/2,l.add(d),s.add(l),l}function Ur(s,t,e,i,n=!1){const r=new P(...t),a=new P(...e),o=new P(...i),l=r.clone().sub(a),c=a.clone().addScaledVector(l.normalize(),.055);Ir(s,o.toArray(),a.toArray(),n?.05:.056,uc,8),Ir(s,a.toArray(),c.toArray(),n?.042:.047,uc,8);const h=a.clone().lerp(c,.45),d=new ut(new oe(.052,.05,.05,7),ih);d.position.copy(h);const u=c.clone().sub(a);d.quaternion.setFromUnitVectors(new P(0,1,0),u.normalize()),s.add(d)}function vg(s){Nr(s,.005,-.105,.055,-.35,0,.12,1.05),Nr(s,-.024,-.145,.06,-.45,.16,-.18,.94),Ur(s,[.055,-.135,.09],[.17,-.4,.24],[.31,-.66,.5]),Ur(s,[-.045,-.16,.1],[-.17,-.41,.27],[-.33,-.67,.52],!0)}function _s(s,t=-.3,e=-.055){Nr(s,.006,-.135,.13,-.32,0,.12,1.02),Nr(s,-.01,e,t,.25,0,.12,.94),Ur(s,[.055,-.16,.16],[.18,-.42,.3],[.32,-.68,.54]),Ur(s,[-.055,e-.03,t+.06],[-.2,-.37,t+.2],[-.35,-.64,.4],!0)}function Vn(s,t,e,i,n){t.position.set(e,i,n)}function Mg(s){const t=new ne,e=new me,i=new co(new Cr({map:ig(),color:16777215,transparent:!0,opacity:0,blending:ci,depthWrite:!1,depthTest:!1}));i.scale.setScalar(.4);const n=new Hi(16756832,0,3.5,2),r=new me;let a=null,o=null;if(s==="m1911"){It(t,.057,.052,.23,0,-.032,-.105,qt,.009),It(t,.061,.062,.305,0,.012,-.125,vn,.012),It(t,.064,.018,.31,0,.045,-.125,qt,.005),Ne(t,.017,.017,.075,0,.012,-.298,_i,[Math.PI/2,0,0],12),Ne(t,.024,.024,.022,0,.012,-.264,vn,[Math.PI/2,0,0],12),It(t,.059,.165,.093,0,-.112,.04,qt,.013,[.26,0,0]),It(t,.01,.13,.073,-.032,-.115,.042,Hn,.005,[.26,0,0]),It(t,.01,.13,.073,.032,-.115,.042,Hn,.005,[.26,0,0]);const l=new ut(new Li(.037,.0065,5,12,Math.PI),qt);l.position.set(0,-.058,.005),l.rotation.set(0,Math.PI/2,Math.PI),t.add(l),It(t,.012,.035,.01,0,-.058,.005,_i,.004,[.3,0,0]),It(t,.024,.038,.03,0,.045,.055,qt,.006,[-.35,0,0]),It(t,.01,.016,.024,0,.067,-.255,qt,.003),It(t,.03,.013,.02,0,.067,.045,qt,.003),It(t,.033,.022,.065,.032,.022,-.075,qt,.004);for(let h=0;h<4;h++)It(t,.004,.045,.007,.031,.01,.01+h*.014,_i,.001);const c=new ut(new Li(.018,.004,4,8),qt);c.position.set(.03,-.13,.09),c.rotation.y=Math.PI/2,t.add(c),Vn(t,e,0,.012,-.34),r.position.set(.04,.03,-.07),vg(t)}else if(s==="kar98k"){It(t,.088,.12,.44,0,-.015,.22,Gn,.018,[.03,0,0]),It(t,.078,.105,.56,0,.005,-.31,Gn,.016),It(t,.067,.077,.24,0,.07,-.03,qt,.01),Ne(t,.0155,.0155,.78,0,.074,-.66,_i,[Math.PI/2,0,0],12),Ne(t,.021,.021,.06,0,.074,-1.04,qt,[Math.PI/2,0,0],12),a=It(t,.026,.026,.17,.058,.074,-.1,_i,.006,[0,0,-.45]),Ne(t,.011,.011,.1,.11,.06,-.04,_i,[0,0,-1.1],8);const l=new ut(new We(.023,8,6),_i);l.position.set(.15,.045,-.01),t.add(l),Ne(t,.036,.036,.27,0,.145,-.16,qt,[Math.PI/2,0,0],14),Ne(t,.044,.044,.03,0,.145,-.3,vn,[Math.PI/2,0,0],14),Ne(t,.043,.043,.025,0,.145,-.02,vn,[Math.PI/2,0,0],14),It(t,.055,.045,.06,0,.115,-.08,qt,.006),It(t,.055,.045,.06,0,.115,-.24,qt,.006),It(t,.008,.03,.02,0,.1,-.94,qt,.002),It(t,.03,.012,.03,0,.09,.06,qt,.003),It(t,.092,.035,.03,0,.052,.41,qt,.006,[.06,0,0]),Vn(t,e,0,.074,-1.08),r.position.set(.065,.075,-.06),_s(t,-.31,-.035)}else if(s==="mp40")It(t,.074,.095,.36,0,.018,-.045,vn,.012),It(t,.062,.065,.18,0,.012,.21,qt,.01),Ne(t,.017,.017,.31,0,.03,-.38,_i,[Math.PI/2,0,0],12),Ne(t,.027,.027,.055,0,.03,-.55,qt,[Math.PI/2,0,0],10),It(t,.05,.23,.078,0,-.15,-.005,qt,.012,[.12,0,0]),It(t,.046,.15,.07,0,-.1,.14,qt,.012,[.22,0,0]),It(t,.042,.075,.1,0,-.11,.19,Hn,.01,[.18,0,0]),It(t,.056,.04,.12,0,-.06,-.28,qt,.008),Ir(t,[.055,-.015,.3],[.075,-.02,.52],.012,_i),Ir(t,[-.055,-.015,.3],[-.075,-.02,.52],.012,_i),It(t,.17,.06,.025,0,-.018,.53,qt,.006),It(t,.012,.035,.02,0,.085,-.52,qt,.003),It(t,.03,.012,.02,0,.082,-.18,qt,.003),Vn(t,e,0,.03,-.59),r.position.set(.06,.05,0),_s(t,-.27,-.045);else if(s==="thompson"){It(t,.078,.105,.4,0,.01,-.02,vn,.014),It(t,.066,.09,.18,0,0,.26,qt,.012),Ne(t,.019,.019,.39,0,.025,-.42,_i,[Math.PI/2,0,0],12),Ne(t,.028,.028,.09,0,.025,-.56,qt,[Math.PI/2,0,0],10);for(let l=0;l<3;l++)It(t,.05,.008,.012,0,.055,-.55-l*.02,qt,.002);It(t,.05,.12,.06,0,-.1,-.2,Gn,.012,[.06,0,0]),It(t,.074,.11,.3,0,-.025,.31,Gn,.015,[.02,0,0]),It(t,.052,.2,.082,0,-.14,-.015,qt,.012,[.14,0,0]),It(t,.046,.13,.07,0,-.105,.16,qt,.011,[.24,0,0]),It(t,.012,.038,.02,0,.087,-.45,qt,.003),It(t,.03,.012,.02,0,.085,-.12,qt,.003),Vn(t,e,0,.025,-.62),r.position.set(.065,.055,.02),_s(t,-.22,-.06)}else if(s==="trench"){It(t,.075,.09,.38,0,0,-.02,qt,.012);for(const l of[-.018,.018])Ne(t,.0145,.0145,.7,l,.035,-.51,_i,[Math.PI/2,0,0],12),Ne(t,.019,.019,.045,l,.035,-.86,qt,[Math.PI/2,0,0],10);It(t,.072,.11,.38,0,-.005,.25,Gn,.016,[.03,0,0]),It(t,.072,.075,.24,0,-.045,-.36,Gn,.014),o=It(t,.075,.068,.18,0,-.065,-.47,Hn,.013),It(t,.06,.11,.16,0,-.075,.13,Hn,.012,[.24,0,0]),It(t,.01,.025,.02,0,.08,-.82,qt,.002),Vn(t,e,0,.035,-.92),r.position.set(.06,.035,-.05),_s(t,-.43,-.075)}else if(s==="wunder"){It(t,.105,.13,.4,0,0,0,qt,.018),It(t,.075,.09,.18,0,0,.25,qt,.014),Ne(t,.04,.04,.34,0,.02,-.36,vn,[Math.PI/2,0,0],14),Ne(t,.055,.055,.055,0,.02,-.54,ba,[Math.PI/2,0,0],14);for(let l=0;l<3;l++){const c=new ut(new Li(.062,.01,5,16),ba);c.position.set(0,.02,-.2-l*.1),t.add(c)}It(t,.055,.19,.085,0,-.14,.07,qt,.012,[.16,0,0]),It(t,.045,.12,.07,0,-.1,.18,Hn,.01,[.22,0,0]),Ne(t,.018,.018,.17,0,.14,.08,ba,[.15,0,0],10),Ne(t,.026,.026,.08,0,.14,.17,qt,[.15,0,0],10);for(const l of[-.12,.12]){const c=new ut(new Li(.062,.008,4,12),xg);c.position.set(0,0,l),t.add(c)}Vn(t,e,0,.02,-.59),r.position.set(.07,.05,.02),_s(t,-.26,-.06)}return t.add(e),i.position.copy(e.position),i.position.z-=.02,t.add(i),n.position.copy(e.position),t.add(n),{group:t,muzzle:e,flashSprite:i,flashLight:n,boltPart:a,pumpPart:o,shellPort:r}}const _o={m1911:{id:"m1911",name:"M1911",magSize:8,reserveMax:80,damage:58,headMult:2.6,rpm:340,auto:!1,spread:.012,adsSpread:.0018,reload:1.25,pellets:1,sound:"pistol",kick:.014,range:90,hip:[.27,-.245,-.52],ads:[0,-.145,-.44]},kar98k:{id:"kar98k",name:"KAR98K",magSize:5,reserveMax:50,damage:215,headMult:2.4,rpm:54,auto:!1,spread:.0045,adsSpread:4e-4,reload:2.35,pellets:1,sound:"rifle",kick:.045,range:120,bolt:.62,hip:[.3,-.27,-.58],ads:[0,-.135,-.48]},mp40:{id:"mp40",name:"MP40",magSize:32,reserveMax:192,damage:44,headMult:2.2,rpm:520,auto:!0,spread:.024,adsSpread:.006,reload:1.9,pellets:1,sound:"smg",kick:.009,range:80,hip:[.3,-.27,-.55],ads:[0,-.14,-.45]},thompson:{id:"thompson",name:"THOMPSON",magSize:30,reserveMax:180,damage:52,headMult:2.2,rpm:620,auto:!0,spread:.026,adsSpread:.007,reload:2.1,pellets:1,sound:"smg",kick:.01,range:80,hip:[.3,-.27,-.55],ads:[0,-.14,-.45]},trench:{id:"trench",name:"TRENCH GUN",magSize:6,reserveMax:48,damage:36,headMult:1.7,rpm:78,auto:!1,spread:.06,adsSpread:.032,reload:2.45,pellets:8,sound:"shotgun",kick:.038,range:45,pump:.52,hip:[.29,-.26,-.54],ads:[0,-.14,-.46]},wunder:{id:"wunder",name:"WUNDERSTRAHL",magSize:3,reserveMax:21,damage:720,headMult:1.3,rpm:65,auto:!1,spread:.002,adsSpread:8e-4,reload:2.7,pellets:1,sound:"wonder",kick:.05,range:70,hip:[.28,-.24,-.5],ads:[0,-.14,-.44],wonder:!0}};class Sg{constructor(t,e){this.camera=t,this.audio=e,this.holder=new ne,this.holder.position.set(0,0,0),t.add(this.holder),this.viewLight=new Hi(16762512,1.9,2.4,2),this.viewLight.position.set(.12,.16,.18),this.holder.add(this.viewLight),this.inventory=[],this.current=0,this.view=null,this.cooldown=0,this.reloading=!1,this.reloadT=0,this.reloadTotal=0,this.boltT=0,this.pumpT=0,this.switchT=0,this.ads=!1,this.adsAmount=0,this.recoil=0,this.recoilRot=0,this.flashT=0,this.bobT=0,this.swayX=0,this.swayY=0,this.lastLookX=0,this.lastLookY=0,this.addWeapon("m1911",!0)}get weapon(){return this.inventory[this.current]||null}get def(){return this.weapon?.def||_o.m1911}addWeapon(t,e=!0,i=!0){const n=_o[t];if(!n)return null;const r={id:t,def:n,mag:i?n.magSize:0,reserve:i?n.reserveMax:0};let a=this.inventory.findIndex(o=>o.id===t);return a===-1?this.inventory.length<2?(this.inventory.push(r),a=this.inventory.length-1):(a=this.current,this.inventory[a]=r):(this.inventory[a].mag=n.magSize,this.inventory[a].reserve=n.reserveMax),e&&this.select(a),this.inventory[a]}hasWeapon(t){return this.inventory.some(e=>e.id===t)}select(t){t===this.current&&this.view||(this.current=t,this.reloading=!1,this.reloadT=0,this.boltT=0,this.pumpT=0,this.switchT=.42,this.view&&this.holder.remove(this.view.group),this.view=Mg(this.def.id),this.view.group.scale.setScalar(.62),this.holder.add(this.view.group),this.view.group.position.set(...this.def.hip),this.view.group.visible=!0,this.applyWeaponMaterials())}applyWeaponMaterials(){}reset(){for(const t of[...this.holder.children])t!==this.viewLight&&this.holder.remove(t);this.inventory=[],this.current=0,this.view=null,this.cooldown=0,this.reloading=!1,this.reloadT=0,this.boltT=0,this.pumpT=0,this.switchT=0,this.ads=!1,this.adsAmount=0,this.recoil=0,this.recoilRot=0,this.addWeapon("m1911",!0)}swap(){return this.inventory.length<2||this.switchT>.15?!1:(this.select((this.current+1)%this.inventory.length),!0)}startReload(){const t=this.weapon;return!t||this.reloading||this.switchT>0||t.mag>=t.def.magSize||t.reserve<=0?!1:(this.reloading=!0,this.reloadT=0,this.reloadTotal=t.def.reload,this.audio.reload(t.def.sound),!0)}tryFire(){const t=this.weapon;return!t||this.cooldown>0||this.reloading||this.switchT>0||this.boltT>0||this.pumpT>0?null:t.mag<=0?(this.audio.dryFire(),this.cooldown=.25,null):(t.mag--,this.cooldown=60/t.def.rpm,this.recoil=Math.min(.14,this.recoil+t.def.kick*3.2),this.recoilRot=Math.min(.22,this.recoilRot+t.def.kick*2.6),this.flashT=.055,this.audio.shot(t.def.sound),t.def.bolt&&(this.boltT=t.def.bolt),t.def.pump&&(this.pumpT=t.def.pump),t)}reloadFinished(){const t=this.weapon;if(!t)return;const e=t.def.magSize-t.mag,i=Math.min(e,t.reserve);t.mag+=i,t.reserve-=i}update(t,e,i){const n=this.weapon;if(!n)return;this.cooldown=Math.max(0,this.cooldown-t),this.boltT=Math.max(0,this.boltT-t),this.pumpT=Math.max(0,this.pumpT-t),this.flashT=Math.max(0,this.flashT-t),this.switchT=Math.max(0,this.switchT-t),this.recoil*=Math.pow(9e-4,t),this.recoilRot*=Math.pow(6e-4,t),this.reloading&&(this.reloadT+=t,this.reloadT>=this.reloadTotal&&(this.reloading=!1,this.reloadFinished()));const r=this.ads&&!this.reloading&&this.switchT<=0?1:0;this.adsAmount+=(r-this.adsAmount)*Math.min(1,t*13),this.swayX+=(-i.x*9e-4-this.swayX)*Math.min(1,t*9),this.swayY+=(-i.y*9e-4-this.swayY)*Math.min(1,t*9),this.swayX=Gi.clamp(this.swayX,-.035,.035),this.swayY=Gi.clamp(this.swayY,-.03,.03);const o=Math.hypot(e.velocity.x,e.velocity.z)>.4;o&&(this.bobT+=t*(e.sprinting?12.5:8.5));const l=o?e.sprinting?.017:.01:0,c=Math.cos(this.bobT)*l*(1-this.adsAmount*.8),h=Math.abs(Math.sin(this.bobT))*l*(1-this.adsAmount*.8),d=n.def.hip,u=n.def.ads,f=this.adsAmount,_=this.camera.aspect||1.6,v=d[0]*Gi.clamp(_/1.4,.25,1),m=_<.8?.5:.62;Math.abs(this.view.group.scale.x-m)>.001&&this.view.group.scale.setScalar(m);let p=Gi.lerp(v,u[0],f)+this.swayX+c,x=Gi.lerp(d[1],u[1],f)+this.swayY+h-(_<.8?.025:0),E=Gi.lerp(d[2],u[2],f)+this.recoil*.55,b=this.recoilRot*.7,T=this.swayX*1.6,w=0;if(this.reloading){const C=Math.min(1,this.reloadT/this.reloadTotal),R=Math.sin(Math.min(1,C*1.25)*Math.PI);x-=R*.16,b+=R*.55,w+=R*.22,E+=R*.06}if(this.switchT>0){const C=Math.sin(this.switchT/.42*Math.PI);x-=C*.3,b+=C*.4}if(this.boltT>0){const C=Math.sin((1-this.boltT/n.def.bolt)*Math.PI);w+=C*.16,T+=C*.1,this.view.boltPart&&(this.view.boltPart.rotation.z=-.5+C*.9)}else this.view.boltPart&&(this.view.boltPart.rotation.z=-.5);if(this.pumpT>0){const C=Math.sin((1-this.pumpT/n.def.pump)*Math.PI);E+=C*.07,b+=C*.1,this.view.pumpPart&&(this.view.pumpPart.position.z=-.48+C*.12)}else this.view.pumpPart&&(this.view.pumpPart.position.z=-.48);const g=this.view.group;g.position.set(p,x,E),g.rotation.set(b,T,w);const y=this.view.flashSprite;this.flashT>0?(y.material.opacity=Math.min(1,this.flashT/.03),y.scale.setScalar(.26+Math.random()*.28),y.material.rotation=Math.random()*Math.PI*2,this.view.flashLight.intensity=7):(y.material.opacity=0,this.view.flashLight.intensity=0)}currentAmmo(){const t=this.weapon;return t?{mag:t.mag,reserve:t.reserve,name:t.def.name,id:t.id}:{mag:0,reserve:0,name:"",id:""}}}const yg=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  uniform float uHeight;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uHeight * 0.42 / max(0.2, -mv.z), 1.0, 120.0);
    gl_Position = projectionMatrix * mv;
  }
`,bg=`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    float a = vAlpha * smoothstep(0.5, 0.08, d);
    gl_FragColor = vec4(vColor, a);
  }
`;class dc{constructor(t,e=900,i=!1){this.max=e,this.scene=t,this.cursor=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.baseSize=new Float32Array(e),this.fadePow=new Float32Array(e);for(let r=0;r<e;r++)this.pos[r*3+1]=-999;const n=new Te;n.setAttribute("position",new hi(this.pos,3).setUsage(Fs)),n.setAttribute("aColor",new hi(this.col,3).setUsage(Fs)),n.setAttribute("aSize",new hi(this.size,1).setUsage(Fs)),n.setAttribute("aAlpha",new hi(this.alpha,1).setUsage(Fs)),n.boundingSphere=new is(new P(0,2,0),40),this.material=new je({vertexShader:yg,fragmentShader:bg,uniforms:{uHeight:{value:900}},transparent:!0,depthWrite:!1,blending:i?ci:Xn}),this.points=new Bc(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=i?3:2,t.add(this.points),this.geo=n}resize(t){this.material.uniforms.uHeight.value=t}spawn(t,e,i,n,r,a,o={}){const l=this.cursor;this.cursor=(this.cursor+1)%this.max;const c=l*3;this.pos[c]=t,this.pos[c+1]=e,this.pos[c+2]=i,this.vel[c]=n,this.vel[c+1]=r,this.vel[c+2]=a;const h=o.color||new At(.7,.05,.04);this.col[c]=h.r,this.col[c+1]=h.g,this.col[c+2]=h.b;const d=o.size??.07;this.size[l]=d,this.baseSize[l]=d,this.alpha[l]=o.alpha??1,this.maxLife[l]=o.life??.7,this.life[l]=this.maxLife[l],this.grav[l]=o.gravity??-9.5,this.drag[l]=o.drag??.86,this.fadePow[l]=o.fadePow??1.4}burst(t,e,i,n={}){const r=n.color||new At(.55,.03,.03);for(let a=0;a<i;a++){const o=n.spread??1.2;let l=(Math.random()-.5)*o+(e?.x||0)*(n.push??1.5),c=Math.random()*o*.9+.5+(e?.y||0)*(n.push??1.5),h=(Math.random()-.5)*o+(e?.z||0)*(n.push??1.5);const d=r.clone().offsetHSL(0,(Math.random()-.5)*.12,(Math.random()-.5)*.16);this.spawn(t.x+(Math.random()-.5)*.12,t.y+(Math.random()-.5)*.12,t.z+(Math.random()-.5)*.12,l,c,h,{color:d,size:(n.size??.07)*(.5+Math.random()),life:(n.life??.75)*(.55+Math.random()*.8),gravity:n.gravity??-9.5,drag:n.drag??.9,alpha:n.alpha??.95,fadePow:1.1})}}update(t){const{max:e,pos:i,vel:n,life:r,maxLife:a,size:o,baseSize:l,alpha:c,grav:h,drag:d}=this;for(let u=0;u<e;u++){if(r[u]<=0){c[u]!==0&&(c[u]=0);continue}if(r[u]-=t,r[u]<=0){c[u]=0,i[u*3+1]=-999;continue}const f=u*3;n[f+1]+=h[u]*t;const _=Math.pow(d[u],t*60);n[f]*=_,n[f+1]*=_,n[f+2]*=_,i[f]+=n[f]*t,i[f+1]+=n[f+1]*t,i[f+2]+=n[f+2]*t,i[f+1]<.03&&(i[f+1]=.03,n[f+1]*=-.18,n[f]*=.6,n[f+2]*=.6);const v=r[u]/a[u];c[u]=Math.pow(v,this.fadePow[u]),o[u]=l[u]*(.6+v*.6)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}}class wg{constructor(t,e,i=42){this.scene=t,this.texture=e,this.max=i,this.items=[],this.cursor=0,this.geo=new Me(1,1)}add(t,e,i,n=1,r=Math.random()*Math.PI*2,a=.85){let o;if(this.items.length<this.max){const l=new Ze({map:this.texture,transparent:!0,depthWrite:!1,opacity:a,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});o=new ut(this.geo,l),this.items.push({mesh:o,life:30}),this.scene.add(o)}else{const l=this.items[this.cursor];this.cursor=(this.cursor+1)%this.max,o=l.mesh,l.life=30,o.material.opacity=a,o.visible=!0}o.position.set(t,e,i),o.rotation.set(-Math.PI/2,0,r),o.scale.setScalar(n)}update(t){for(const e of this.items)e.life>0&&(e.life-=t,e.life<6&&(e.mesh.material.opacity=Math.max(0,e.life/6)*.85),e.life<=0&&(e.mesh.visible=!1))}}class Tg{constructor(){this.ctx=null,this.master=null,this.reverb=null,this.enabled=!0,this.started=!1,this._lastGroan=0,this._lastStep=0,this._ambientNodes=[]}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const i=e.createGain();i.gain.value=.75;const n=e.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=18,n.ratio.value=5,n.attack.value=.004,n.release.value=.22,i.connect(n),n.connect(e.destination),this.master=i;const a=e.sampleRate*1.9,o=e.createBuffer(2,a,e.sampleRate);for(let h=0;h<2;h++){const d=o.getChannelData(h);for(let u=0;u<a;u++)d[u]=(Math.random()*2-1)*Math.pow(1-u/a,2.6)}const l=e.createConvolver();l.buffer=o;const c=e.createGain();c.gain.value=.3,l.connect(c),c.connect(i),this.reverb=l,this.noise=this._makeNoise(2),this.started=!0}_makeNoise(t=2){const e=this.ctx,i=Math.floor(e.sampleRate*t),n=e.createBuffer(1,i,e.sampleRate),r=n.getChannelData(0);for(let a=0;a<i;a++)r[a]=Math.random()*2-1;return n}_now(){return this.ctx.currentTime}_noiseSource(t=!1){const e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=t,e}_env(t,e,i,n,r,a=0){t.gain.cancelScheduledValues(e),t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(Math.max(1e-4,r),e+i),t.gain.exponentialRampToValueAtTime(Math.max(1e-4,a||1e-4),e+i+n)}_send(t,e=.25){if(!this.reverb)return;const i=this.ctx.createGain();i.gain.value=e,t.connect(i),i.connect(this.reverb)}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.75:0)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbient(){if(!this.ctx||this._ambient)return;const t=this.ctx,e=t.createGain();e.gain.value=1e-4,e.connect(this.master),e.gain.exponentialRampToValueAtTime(.34,this._now()+3),this._ambient=e;const i=t.createGain();i.gain.value=.055;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=140,i.connect(n),n.connect(e);for(const[h,d]of[[41.2,"sawtooth"],[61.8,"sine"],[82.4,"sine"]]){const u=t.createOscillator();u.type=d,u.frequency.value=h;const f=t.createGain();f.gain.value=.5,u.connect(f),f.connect(i),u.start(),this._ambientNodes.push(u)}const r=this._noiseSource(!0),a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=260,a.Q.value=.6;const o=t.createGain();o.gain.value=.035,r.connect(a),a.connect(o),o.connect(e),r.start(),this._ambientNodes.push(r);const l=t.createOscillator();l.frequency.value=.08;const c=t.createGain();c.gain.value=.02,l.connect(c),c.connect(o.gain),l.start(),this._ambientNodes.push(l)}stopAmbient(){if(this._ambient){try{this._ambient.gain.exponentialRampToValueAtTime(1e-4,this._now()+.8);for(const t of this._ambientNodes)try{t.stop(this._now()+.9)}catch{}}catch{}this._ambient=null,this._ambientNodes=[]}}shot(t="pistol"){if(!this.ctx||!this.enabled)return;const e=this.ctx,i=this._now(),n={pistol:{gain:.5,cut:2400,decay:.18,thump:130,crack:.35},smg:{gain:.42,cut:2800,decay:.13,thump:150,crack:.3},rifle:{gain:.72,cut:1900,decay:.32,thump:80,crack:.55},shotgun:{gain:.8,cut:1500,decay:.34,thump:65,crack:.5},wonder:{gain:.4,cut:900,decay:.5,thump:55,crack:.2}}[t]||{gain:.5,cut:2400,decay:.18,thump:130,crack:.3},r=this._noiseSource(),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=n.cut,a.Q.value=.7;const o=e.createGain();this._env(o,i,.002,n.decay,n.gain),r.connect(a),a.connect(o),o.connect(this.master),this._send(o,.5),r.start(i),r.stop(i+n.decay+.1);const l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(n.thump,i),l.frequency.exponentialRampToValueAtTime(n.thump*.45,i+.16);const c=e.createGain();this._env(c,i,.002,.2,n.gain*.55),l.connect(c),c.connect(this.master),this._send(c,.15),l.start(i),l.stop(i+.3);const h=this._noiseSource(),d=e.createBiquadFilter();d.type="highpass",d.frequency.value=3200;const u=e.createGain();if(this._env(u,i,.001,.045,n.crack),h.connect(d),d.connect(u),u.connect(this.master),h.start(i),h.stop(i+.08),t==="wonder"){const f=e.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(700,i),f.frequency.exponentialRampToValueAtTime(90,i+.6);const _=e.createGain();this._env(_,i,.005,.55,.12),f.connect(_),_.connect(this.master),this._send(_,.8),f.start(i),f.stop(i+.7)}}dryFire(){if(!this.ctx)return;const t=this._now(),e=this._noiseSource(),i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=1800;const n=this.ctx.createGain();this._env(n,t,.001,.035,.18),e.connect(i),i.connect(n),n.connect(this.master),e.start(t),e.stop(t+.06)}_click(t,e=2e3,i=.15,n=.03){const r=this._noiseSource(),a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=e,a.Q.value=3;const o=this.ctx.createGain();this._env(o,t,.001,n,i),r.connect(a),a.connect(o),o.connect(this.master),r.start(t),r.stop(t+n+.05)}reload(t="pistol"){if(!this.ctx||!this.enabled)return;const e=this._now(),i=t==="rifle"||t==="shotgun"||t==="wonder";this._click(e+.05,1300,.16,.04),this._click(e+.18,800,.12,.06),this._click(e+(i?.9:.55),1900,.2,.05),this._click(e+(i?1.15:.8),2600,.17,.04),i&&this._click(e+1.45,600,.14,.08)}bolt(){if(!this.ctx)return;const t=this._now();this._click(t,1500,.18,.05),this._click(t+.12,2200,.14,.04),this._click(t+.22,900,.12,.06)}hit(t=!1){if(!this.ctx||!this.enabled)return;const e=this._now();if(t){const i=this._noiseSource(),n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=900;const r=this.ctx.createGain();this._env(r,e,.001,.14,.4),i.connect(n),n.connect(r),r.connect(this.master),i.start(e),i.stop(e+.2);const a=this.ctx.createOscillator();a.frequency.setValueAtTime(180,e),a.frequency.exponentialRampToValueAtTime(60,e+.12);const o=this.ctx.createGain();this._env(o,e,.001,.12,.25),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.16)}else this._click(e,420,.22,.055)}groan(t=10,e=1){if(!this.ctx||!this.enabled)return;const i=this._now();if(i-this._lastGroan<.12)return;this._lastGroan=i;const n=Math.max(.005,.3*Math.pow(Math.max(0,1-t/32),2));if(n<.008)return;const r=(62+Math.random()*40)*e,a=this.ctx.createOscillator();a.type=Math.random()>.4?"sawtooth":"square",a.frequency.setValueAtTime(r,i),a.frequency.linearRampToValueAtTime(r*(.8+Math.random()*.5),i+.8);const o=this.ctx.createOscillator();o.frequency.value=5+Math.random()*5;const l=this.ctx.createGain();l.gain.value=r*.06,o.connect(l),l.connect(a.frequency);const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=320+Math.random()*380,c.Q.value=2.4;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=1400;const d=this.ctx.createGain();d.gain.setValueAtTime(1e-4,i),d.gain.exponentialRampToValueAtTime(n,i+.18),d.gain.exponentialRampToValueAtTime(n*.55,i+.65),d.gain.exponentialRampToValueAtTime(1e-4,i+1.4+Math.random()*.6),a.connect(c),c.connect(h),h.connect(d),d.connect(this.master),this._send(d,.5),a.start(i),o.start(i),a.stop(i+2.1),o.stop(i+2.1)}hurt(){if(!this.ctx||!this.enabled)return;const t=this._now(),e=this._noiseSource(),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=500;const n=this.ctx.createGain();this._env(n,t,.002,.25,.5),e.connect(i),i.connect(n),n.connect(this.master),e.start(t),e.stop(t+.3);const r=this.ctx.createOscillator();r.frequency.setValueAtTime(95,t),r.frequency.exponentialRampToValueAtTime(45,t+.25);const a=this.ctx.createGain();this._env(a,t,.002,.3,.3),r.connect(a),a.connect(this.master),r.start(t),r.stop(t+.35)}footstep(t=!1){if(!this.ctx||!this.enabled)return;const e=this._now();if(e-this._lastStep<(t?.22:.32))return;this._lastStep=e;const i=this._noiseSource(),n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=240+Math.random()*130;const r=this.ctx.createGain();this._env(r,e,.004,.09,t?.16:.1),i.connect(n),n.connect(r),r.connect(this.master),i.start(e),i.stop(e+.14)}purchase(){if(!this.ctx||!this.enabled)return;const t=this._now();for(let e=0;e<3;e++){const i=this.ctx.createOscillator();i.type="sine",i.frequency.value=[880,1174,1568][e];const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t+e*.05),n.gain.exponentialRampToValueAtTime(.08,t+e*.05+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+e*.05+.3),i.connect(n),n.connect(this.master),this._send(n,.3),i.start(t+e*.05),i.stop(t+e*.05+.32)}}repair(){if(!this.ctx||!this.enabled)return;const t=this._now();this._click(t,260,.32,.07),this._click(t+.03,1400,.12,.04)}door(){if(!this.ctx||!this.enabled)return;const t=this._now(),e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(70,t),e.frequency.exponentialRampToValueAtTime(160,t+.5),e.frequency.exponentialRampToValueAtTime(55,t+1.1);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=380,i.Q.value=6;const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.2,t+.15),n.gain.exponentialRampToValueAtTime(1e-4,t+1.2),e.connect(i),i.connect(n),n.connect(this.master),this._send(n,.5),e.start(t),e.stop(t+1.3)}roundStart(t=1){if(!this.ctx||!this.enabled)return;const e=this._now(),i=55;for(let a=0;a<3;a++){const o=this.ctx.createOscillator();o.type=a===0?"sawtooth":"triangle",o.frequency.value=i*(1+a*.5);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(300,e),l.frequency.linearRampToValueAtTime(900,e+1.6);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.075/(a+1),e+.5),c.gain.exponentialRampToValueAtTime(1e-4,e+2.6),o.connect(l),l.connect(c),c.connect(this.master),this._send(c,.6),o.start(e),o.stop(e+2.7)}const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=440;const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e+.6),r.gain.exponentialRampToValueAtTime(.1,e+.65),r.gain.exponentialRampToValueAtTime(1e-4,e+3.2),n.connect(r),r.connect(this.master),this._send(r,.9),n.start(e+.6),n.stop(e+3.3)}roundEnd(){if(!this.ctx||!this.enabled)return;const t=this._now();for(let e=0;e<3;e++){const i=this.ctx.createOscillator();i.type="sine",i.frequency.value=[523.25,659.25,783.99][e];const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t+e*.12),n.gain.exponentialRampToValueAtTime(.07,t+e*.12+.02),n.gain.exponentialRampToValueAtTime(1e-4,t+e*.12+1.4),i.connect(n),n.connect(this.master),this._send(n,.7),i.start(t+e*.12),i.stop(t+e*.12+1.5)}}powerup(t="insta"){if(!this.ctx||!this.enabled)return;const e=this._now();(t==="nuke"?[440,330,220,110]:[523,659,784,1046]).forEach((n,r)=>{const a=this.ctx.createOscillator();a.type="triangle",a.frequency.value=n;const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e+r*.07),o.gain.exponentialRampToValueAtTime(.1,e+r*.07+.015),o.gain.exponentialRampToValueAtTime(1e-4,e+r*.07+.5),a.connect(o),o.connect(this.master),this._send(o,.5),a.start(e+r*.07),a.stop(e+r*.07+.55)})}box(){if(!this.ctx||!this.enabled)return;const t=this._now();[784,988,1175,1568,1175,1568].forEach((i,n)=>{const r=this.ctx.createOscillator();r.type="sine",r.frequency.value=i;const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,t+n*.16),a.gain.exponentialRampToValueAtTime(.06,t+n*.16+.02),a.gain.exponentialRampToValueAtTime(1e-4,t+n*.16+.7),r.connect(a),a.connect(this.master),this._send(a,.6),r.start(t+n*.16),r.stop(t+n*.16+.75)})}death(){if(!this.ctx||!this.enabled)return;const t=this._now(),e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(28,t+2.2);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=420;const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.25,t+.1),n.gain.exponentialRampToValueAtTime(1e-4,t+2.4),e.connect(i),i.connect(n),n.connect(this.master),this._send(n,.8),e.start(t),e.stop(t+2.5)}heartbeat(t=.5){if(!this.ctx||!this.enabled)return;const e=this._now();for(let i=0;i<2;i++){const n=this.ctx.createOscillator();n.frequency.setValueAtTime(64,e+i*.18),n.frequency.exponentialRampToValueAtTime(38,e+i*.18+.12);const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e+i*.18),r.gain.exponentialRampToValueAtTime(.12*t,e+i*.18+.015),r.gain.exponentialRampToValueAtTime(1e-4,e+i*.18+.22),n.connect(r),r.connect(this.master),n.start(e+i*.18),n.stop(e+i*.18+.24)}}}const xt=s=>document.getElementById(s),ai="ontouchstart"in window||navigator.maxTouchPoints>0,Ai=Gi.clamp,Fr={maxammo:{name:"MAX AMMO",color:14201418,hud:"▮▮",sub:"AMMUNITION RESTORED"},insta:{name:"INSTA-KILL",color:14174762,hud:"☠",sub:"ONE SHOT. ONE KILL."},double:{name:"DOUBLE POINTS",color:14727484,hud:"×2",sub:"POINTS DOUBLED"},nuke:{name:"KABOOM",color:8048746,hud:"☢",sub:"THE HORDE IS ASH"}},fc=["THEY ARE COMING","HOLD THE LINE","THE DEAD ARE HUNGRY","NO EXTRACTION","THEY REMEMBER YOU","DO NOT STOP MOVING","THE BUNKER WILL FALL","MORE OF THEM"];class Eg{constructor(t,e,i){this.scene=t,this.audio=e,this.game=i,this.items=[],this.tex={};for(const n of Object.keys(Fr))this.tex[n]=ng(n)}clear(){for(const t of this.items)this.scene.remove(t.group);this.items=[]}maybeDrop(t){if(this.items.length>=2||Math.random()>.058)return;const e=Math.random();let i="maxammo";e<.28?i="insta":e<.56?i="double":e<.85?i="maxammo":i="nuke",this.spawn(t,i)}spawn(t,e){const i=Fr[e],n=new ne;n.position.set(t.x,0,t.z);const r=new co(new Cr({map:this.tex[e],color:16777215,transparent:!0,depthWrite:!1,blending:ci}));r.scale.setScalar(.85),r.position.y=1,n.add(r);const a=new co(new Cr({map:mo("#ffffff","#ffffff"),color:i.color,transparent:!0,opacity:.35,depthWrite:!1,blending:ci}));a.scale.setScalar(1.7),a.position.y=1,n.add(a);const o=new ut(new Li(.5,.018,5,26),new Ze({color:i.color,transparent:!0,opacity:.7,blending:ci,depthWrite:!1}));o.rotation.x=Math.PI/2,o.position.y=.08,n.add(o);const l=new Hi(i.color,4,5,2);l.position.y=1,n.add(l),this.scene.add(n),this.items.push({group:n,sprite:r,glow:a,ring:o,light:l,kind:e,t:0,life:26,phase:Math.random()*6})}update(t,e){for(let i=this.items.length-1;i>=0;i--){const n=this.items[i];if(n.t+=t,n.life-=t,n.group.position.y=Math.sin(n.t*2.4+n.phase)*.08,n.sprite.position.y=1+Math.sin(n.t*2.4+n.phase)*.08,n.glow.position.y=n.sprite.position.y,n.ring.rotation.z+=t*1.6,n.ring.scale.setScalar(1+Math.sin(n.t*3)*.06),n.light.intensity=3.5+Math.sin(n.t*4)*1.2,n.sprite.material.opacity=n.life<4?Math.max(.15,n.life/4):1,Math.hypot(e.position.x-n.group.position.x,e.position.z-n.group.position.z)<1.4&&!e.dead){this.game.applyPowerup(n.kind),this.scene.remove(n.group),this.items.splice(i,1);continue}n.life<=0&&(this.scene.remove(n.group),this.items.splice(i,1))}}}class Ag{constructor(){this.canvas=xt("game"),this.scene=new xu,this.camera=new oi(75,innerWidth/innerHeight,.045,140),this.camera.rotation.order="YXZ",this.baseFov=ai?80:75,this.camera.fov=this.baseFov,this.scene.add(this.camera);const t=new Hi(16769720,1.25,4,2);t.position.set(0,.12,-.25),this.camera.add(t),this.renderer=new zm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,ai?1.3:1.6)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!ai,this.renderer.shadowMap.type=Ms,this.renderer.toneMapping=Br,this.renderer.toneMappingExposure=1.28,this.renderer.outputColorSpace=we,this.composer=new Xm(this.renderer),this.composer.addPass(new qm(this.scene,this.camera)),this.bloom=new ts(new Et(innerWidth,innerHeight),.55,.55,.78),this.composer.addPass(this.bloom),this.composer.addPass(new Km),this.bloomEnabled=!0,this.audio=new Tg,this.particles=new dc(this.scene,1100,!1),this.additive=new dc(this.scene,1e3,!0),this.world=new og(this.scene,this.particles,this.additive),this.decals=new wg(this.scene,this.world.bloodTex,48),this.nav=new cg({minX:-10.5,maxX:10.5,minZ:-9.5,maxZ:15.5},.5,this.world.navBlockers,.34),this.player={position:new P(0,0,5.6),velocity:new P,yaw:0,pitch:-.02,height:1.68,health:100,maxHealth:100,lastDamage:-99,dead:!1,sprinting:!1,moving:!1,bobT:0,radius:.33},this.lookDelta=new Et,this.recoilPitch=0,this.recoilYaw=0,this.shake=0,this.damageFlash=0,this.heartT=0,this.weapons=new Sg(this.camera,this.audio),this.zombies=new _g(this.scene,this.nav,this.world,this.audio,this.particles,this.additive,this.decals,{onKill:(e,i)=>this.onKill(e,i),onPlayerDamage:(e,i)=>this.onPlayerDamage(e,i),onNuke:()=>this.onNuke()}),this.powerups=new Eg(this.scene,this.audio,this),this.state="menu",this.round=1,this.roundState="idle",this.roundClearT=0,this.points=500,this.stats={kills:0,headshots:0,shots:0,hits:0},this.instaT=0,this.doubleT=0,this.nuking=!1,this.boxT=0,this.repairCd=0,this.tracers=[],this.time=0,this.menuT=0,this.fpsAccum=0,this.fpsFrames=0,this.lowFpsT=0,this.qualityReduced=!1,this.bannerTimer=null,this.promptKey="",this.toasts=[],this.keys={},this.fireHeld=!1,this.firePressed=!1,this.adsHeld=!1,this.interactHeld=!1,this.interactPressed=!1,this.lookLocked=!1,this.sensitivity=1,this.touchMove=new Et,this.touchLookId=null,this.lastTouch=new Et,this.bindUI(),this.bindInput(),this.resize(),addEventListener("resize",()=>this.resize()),this.clockLast=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop),ai&&document.body.classList.add("touch"),setTimeout(()=>{xt("loading").classList.add("done"),document.body.classList.add("menu-open")},850)}bindUI(){xt("deploy").addEventListener("click",()=>{this.audio.init(),this.audio.startAmbient(),this.startGame()}),xt("resume").addEventListener("click",()=>this.resume()),xt("retry").addEventListener("click",()=>{xt("gameover").classList.add("hidden"),this.startGame()}),xt("menu-return").addEventListener("click",()=>{xt("gameover").classList.add("hidden"),this.toMenu()}),xt("quit").addEventListener("click",()=>{xt("pause").classList.add("hidden"),this.toMenu()});const t=xt("sens");t.addEventListener("input",()=>{this.sensitivity=Number(t.value),xt("sens-out").textContent=Number(t.value).toFixed(2)});const e=xt("stick-base"),i=xt("stick-knob");let n=null;const r=h=>{const d=e.getBoundingClientRect(),u=d.left+d.width/2,f=d.top+d.height/2;let _=h.clientX-u,v=h.clientY-f;const m=d.width*.36,p=Math.hypot(_,v);p>m&&(_=_/p*m,v=v/p*m),i.style.transform=`translate(${_}px, ${v}px)`,this.touchMove.set(_/m,v/m)};e.addEventListener("pointerdown",h=>{h.preventDefault(),n=h.pointerId,e.setPointerCapture(h.pointerId),r(h)}),e.addEventListener("pointermove",h=>{h.pointerId===n&&r(h)});const a=h=>{h.pointerId===n&&(n=null,this.touchMove.set(0,0),i.style.transform="")};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a);const o=xt("look-zone");o.addEventListener("pointerdown",h=>{this.touchLookId===null&&(this.touchLookId=h.pointerId,this.lastTouch.set(h.clientX,h.clientY),o.setPointerCapture(h.pointerId))}),o.addEventListener("pointermove",h=>{if(h.pointerId!==this.touchLookId)return;const d=h.clientX-this.lastTouch.x,u=h.clientY-this.lastTouch.y;this.lastTouch.set(h.clientX,h.clientY),this.player.yaw-=d*.0042*this.sensitivity,this.player.pitch-=u*.0036*this.sensitivity,this.player.pitch=Ai(this.player.pitch,-1.42,1.42),this.lookDelta.x+=d,this.lookDelta.y+=u});const l=h=>{h.pointerId===this.touchLookId&&(this.touchLookId=null)};o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l);const c=(h,d,u)=>{const f=xt(h);f.addEventListener("pointerdown",v=>{v.preventDefault(),f.classList.add("on"),d()});const _=v=>{v.preventDefault(),f.classList.remove("on"),u&&u()};f.addEventListener("pointerup",_),f.addEventListener("pointercancel",_),f.addEventListener("pointerleave",v=>{v.buttons&&_(v)})};xt("btn-pause").addEventListener("click",h=>{h.preventDefault(),this.pause()}),c("btn-fire",()=>{this.fireHeld=!0,this.firePressed=!0},()=>{this.fireHeld=!1}),c("btn-ads",()=>{this.adsHeld=!this.adsHeld,xt("btn-ads").classList.toggle("on",this.adsHeld)}),c("btn-reload",()=>{this.weapons.startReload()}),c("btn-use",()=>{this.interactPressed=!0}),c("btn-swap",()=>{this.weapons.swap()}),this.canvas.addEventListener("click",()=>{this.state==="playing"&&!ai&&!this.lookLocked&&this.requestLock()}),document.addEventListener("pointerlockchange",()=>{this.lookLocked=document.pointerLockElement===this.canvas,!this.lookLocked&&this.state==="playing"&&!ai&&this.pause()})}bindInput(){document.addEventListener("keydown",t=>{const e=t.key.toLowerCase();if(["w","a","s","d"," ","shift","r","f","q","e","1","2","escape"].includes(e)&&t.preventDefault(),this.keys[e]){e==="f"&&(this.interactHeld=!0);return}this.keys[e]=!0,e==="f"&&(this.interactPressed=!0,this.interactHeld=!0),e==="r"&&this.weapons.startReload(),e==="q"&&this.weapons.swap(),e==="1"&&this.weapons.select(0),e==="2"&&this.weapons.inventory.length>1&&this.weapons.select(1),e==="m"&&(this.muted=!this.muted,this.audio.setEnabled(!this.muted),this.toast(this.muted?"AUDIO MUTED":"AUDIO ON")),e==="escape"&&(this.state==="playing"&&ai?this.pause():this.state==="paused"&&this.resume())}),document.addEventListener("keyup",t=>{const e=t.key.toLowerCase();this.keys[e]=!1,e==="f"&&(this.interactHeld=!1)}),addEventListener("blur",()=>{this.keys={},this.fireHeld=!1,this.adsHeld=!1}),this.canvas.addEventListener("mousedown",t=>{if(this.state==="playing"){if(!ai&&!this.lookLocked){this.requestLock();return}t.button===0&&(this.fireHeld=!0,this.firePressed=!0),t.button===2&&(this.adsHeld=!0)}}),addEventListener("mouseup",t=>{t.button===0&&(this.fireHeld=!1),t.button===2&&(this.adsHeld=!1)}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mousemove",t=>{if(!this.lookLocked||this.state!=="playing")return;const e=t.movementX||0,i=t.movementY||0;this.player.yaw-=e*.0022*this.sensitivity,this.player.pitch-=i*.0022*this.sensitivity,this.player.pitch=Ai(this.player.pitch,-1.42,1.42),this.lookDelta.x+=e,this.lookDelta.y+=i}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()})}requestLock(){if(ai)return;const t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}resize(){const t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloom.resolution.set(t,e),this.particles.resize(e*this.renderer.getPixelRatio()),this.additive.resize(e*this.renderer.getPixelRatio())}startGame(){this.audio.init(),this.audio.resume(),this.audio.startAmbient(),this.resetRun(),this.state="playing",this.weapons.holder.visible=!0,this.player.dead=!1,xt("menu").classList.add("hidden"),xt("pause").classList.add("hidden"),xt("gameover").classList.add("hidden"),xt("hud").classList.remove("hidden"),ai&&xt("touch").classList.remove("hidden"),document.body.classList.remove("menu-open"),document.body.classList.add("playing"),this.round=1,this.beginRound(1),this.requestLock(),this.clockLast=performance.now()}resetRun(){this.world.reset(),this.nav.setBlockers(this.world.navBlockers),this.zombies.reset(),this.powerups.clear(),this.weapons.reset(),this.particles.clear?.();for(const e of this.tracers)this.scene.remove(e.line);this.tracers=[],this.points=500,this.stats={kills:0,headshots:0,shots:0,hits:0},this.instaT=0,this.doubleT=0,this.boxT=0,this.repairCd=0,this.recoilPitch=0,this.recoilYaw=0,this.shake=0,this.damageFlash=0;const t=this.player;t.position.set(0,0,5.6),t.velocity.set(0,0,0),t.yaw=0,t.pitch=-.02,t.health=100,t.dead=!1,t.lastDamage=-99,t.bobT=0,this.roundState="active",this.roundClearT=0,this.updateHud()}toMenu(){this.state="menu",this.weapons.holder.visible=!1,this.zombies.roundActive=!1,this.zombies.reset(),this.powerups.clear(),this.world.reset(),this.nav.setBlockers(this.world.navBlockers),this.weapons.reset(),this.particles.clear?.();for(const t of this.tracers)this.scene.remove(t.line);this.tracers=[],xt("hud").classList.add("hidden"),xt("touch").classList.add("hidden"),xt("gameover").classList.add("hidden"),xt("pause").classList.add("hidden"),xt("menu").classList.remove("hidden"),document.body.classList.add("menu-open"),document.body.classList.remove("playing"),document.pointerLockElement&&document.exitPointerLock(),this.audio.stopAmbient(),this.menuT=0}beginRound(t){this.round=t,this.roundState="active",this.zombies.startRound(t),this.zombies.spawnTimer=t===1?2.4:1.7,this.audio.roundStart(t),this.showBanner("SURVIVE",`ROUND ${t}`,fc[(t-1)%fc.length]),this.updateHud()}pause(){this.state==="playing"&&(this.state="paused",xt("pause").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),this.fireHeld=!1,this.adsHeld=!1)}resume(){this.state==="paused"&&(this.state="playing",xt("pause").classList.add("hidden"),this.requestLock(),this.clockLast=performance.now())}showBanner(t,e,i,n=!1){xt("banner-kicker").textContent=t;const r=xt("banner-title");r.textContent=e,r.classList.toggle("blood",e.includes("DEAD")||e.includes("DIED")||e.includes("FALL")),xt("banner-sub").textContent=i||"";const a=xt("banner");a.classList.remove("show","hold"),a.offsetWidth,a.classList.add("show"),n&&a.classList.add("hold"),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>a.classList.remove("show","hold"),n?5600:3800)}toast(t,e=!1){const i=document.createElement("div");i.className="toast"+(e?" red":""),i.textContent=t,xt("toast-stack").appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity 0.3s",setTimeout(()=>i.remove(),320)},2300)}addPoints(t,e){const i=Math.round(t*(this.doubleT>0?2:1));this.points+=i;const n=xt("points");n.textContent=this.points,n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump"),setTimeout(()=>n.classList.remove("bump"),110),e&&this.additive&&this.additive.spawn(e.x,1.75,e.z,0,.7,0,{color:new At(1,.82,.4),size:.03,life:.45,gravity:.2,drag:.96,alpha:.9})}spend(t){return this.points<t?!1:(this.points-=t,xt("points").textContent=this.points,!0)}applyPowerup(t){const e=Fr[t];if(this.audio.powerup(t),this.toast(e.name+" — "+e.sub),t==="maxammo")for(const i of this.weapons.inventory)i.reserve=i.def.reserveMax,i.mag=i.def.magSize;else if(t==="insta")this.instaT=30;else if(t==="double")this.doubleT=30;else if(t==="nuke"){this.nuking=!0,this.zombies.nuke(),this.nuking=!1;const i=xt("flash");i.style.transition="none",i.style.opacity="0.95",requestAnimationFrame(()=>{i.style.transition="opacity 0.9s ease-out",i.style.opacity="0"})}this.updateHud()}onKill(t,e){this.stats.kills++,e&&this.stats.headshots++,this.addPoints(e?100:60,t.group.position),this.nuking||this.powerups.maybeDrop(t.group.position),this.showHitmarker(!0,e)}onNuke(){this.addPoints(400),this.toast("KABOOM — 400 BONUS")}onPlayerDamage(t,e){if(this.state!=="playing"||this.player.dead)return;const i=this.player;i.health-=t,i.lastDamage=0,this.damageFlash=1,this.shake=Math.min(.22,this.shake+.11),this.audio.hurt(),i.health<=0&&(i.health=0,this.playerDie()),this.updateHud()}playerDie(){this.player.dead||(this.player.dead=!0,this.state="dying",this.zombies.roundActive=!1,this.audio.death(),this.deathT=0,this.fireHeld=!1,this.adsHeld=!1,xt("damage-vignette").style.opacity="0.95",document.pointerLockElement&&document.exitPointerLock())}showGameOver(){this.state="gameover",xt("go-round").textContent=this.round,xt("go-kills").textContent=this.stats.kills,xt("go-headshots").textContent=this.stats.headshots,xt("go-points").textContent=this.points,xt("gameover").classList.remove("hidden"),xt("hud").classList.add("hidden"),xt("touch").classList.add("hidden"),document.body.classList.remove("playing")}showHitmarker(t,e){const i=xt("hitmarker");i.classList.remove("show","kill","head"),i.offsetWidth,t&&i.classList.add("kill"),e&&i.classList.add("head"),i.classList.add("show")}updateHud(){const t=this.weapons.currentAmmo();xt("ammo-mag").textContent=t.mag,xt("ammo-reserve").textContent=t.reserve,xt("weapon-name").textContent=t.name,xt("ammo-mag").classList.toggle("low",t.mag<=Math.max(1,Math.floor(this.weapons.def.magSize*.25))),xt("points").textContent=this.points,xt("round-number").textContent=this.round,document.querySelectorAll("#weapon-slots .slot").forEach((a,o)=>{a.classList.toggle("active",o===this.weapons.current),a.style.opacity=this.weapons.inventory[o]?"1":"0.3"});const i=Ai(this.player.health/this.player.maxHealth,0,1);xt("health-fill").style.width=i*100+"%",xt("health-fill").style.background=i<.35?"linear-gradient(90deg,#a11212,#e0442c)":"linear-gradient(90deg,#6d1712,#c0432f)";const n=xt("round-tally");if(n.dataset.round!==String(this.round)){n.dataset.round=String(this.round);let a="";const o=Math.min(12,Math.max(1,Math.ceil(this.round/2)));for(let l=0;l<12;l++)a+=`<i class="${l<o?"hot":""}"></i>`;n.innerHTML=a}const r=this.instaT>0?"insta":this.doubleT>0?"double":null;if(r){xt("powerup-hud").classList.remove("hidden");const a=Fr[r];xt("pu-icon").textContent=a.hud,xt("pu-name").textContent=a.name;const o=r==="insta"?this.instaT:this.doubleT;xt("pu-timer-fill").style.width=Ai(o/30,0,1)*100+"%"}else xt("powerup-hud").classList.add("hidden");xt("objective-count").textContent=this.zombies.roundActive?`${this.zombies.remaining} REMAIN`:""}updateInteraction(t){const e=this.player;let i=null,n=null,r=0,a=null;for(const l of this.world.windows)if(Math.hypot(e.position.x-l.center.x,e.position.z-l.center.z)<2.9&&l.boards<l.maxBoards){a=l;break}if(a?(i="REBUILD BARRIER",r="+10",n="repair"):this.world.door&&!this.world.door.open&&Math.hypot(e.position.x-5.1,e.position.z-8.3)<2.4&&(i="OPEN THE ARMORY",r="750",n="door"),!i&&this.boxT<=0&&Math.hypot(e.position.x-7,e.position.z-12.5)<2.5&&(i="MYSTERY BOX",r="950",n="box"),!i){const l=this.world.nearestBuy(e.position);if(l){const c=this.weapons.hasWeapon(l.id),h=Math.round(l.price*.5);i=c?"BUY AMMO — "+l.name:"BUY "+l.name,r=c?h:l.price,n="buy",this.nearBuy=l,this.nearBuyOwned=c,this.nearBuyPrice=r}}i||(this.nearBuy=null,this.promptKey="");const o=i?`${n}|${i}|${r}`:"";if(o!==this.promptKey){this.promptKey=o;const l=xt("prompt");if(!i)l.classList.add("hidden");else{l.classList.remove("hidden"),l.querySelector(".prompt-text").textContent=i,l.querySelector(".prompt-price").textContent=r;const c=Number(String(r).replace("+",""));l.classList.toggle("denied",n!=="repair"&&this.points<c)}}if(i){const l=xt("prompt"),c=Number(String(r).replace("+",""));l.classList.toggle("denied",n!=="repair"&&this.points<c),l.querySelector(".prompt-key").textContent=ai?"USE":"F"}if(this.repairCd=Math.max(0,this.repairCd-t),n==="repair"&&(this.interactHeld||this.interactPressed)&&this.repairCd<=0&&this.world.repairBoard(a)&&(this.repairCd=.55,this.addPoints(10),this.audio.repair(),this.particles.burst(a.center.clone().add(new P(0,1.6,0)),a.normal,5,{color:new At(.45,.34,.2),size:.035,life:.5,spread:.8,gravity:-6})),this.interactPressed&&n&&n!=="repair"){if(n==="door")this.spend(750)?(this.world.openDoor(),this.nav.setBlockers(this.world.navBlockers),this.audio.door(),this.toast("ARMORY OPENED")):this.toast("NOT ENOUGH POINTS",!0);else if(n==="box")this.spend(950)?(this.world.mysteryBox.open=!0,this.boxT=1.5,this.audio.box()):this.toast("NOT ENOUGH POINTS",!0);else if(n==="buy"&&this.nearBuy){const l=this.nearBuy;if(this.nearBuyOwned){const c=this.weapons.inventory.find(h=>h.id===l.id);c&&c.reserve>=c.def.reserveMax?this.toast("AMMO ALREADY FULL",!0):this.spend(this.nearBuyPrice)?(c.reserve=c.def.reserveMax,this.audio.purchase(),this.toast("AMMO RESTOCKED")):this.toast("NOT ENOUGH POINTS",!0)}else this.spend(l.price)?(this.weapons.addWeapon(l.id),this.audio.purchase(),this.toast("ACQUIRED: "+l.name),this.updateHud()):this.toast("NOT ENOUGH POINTS",!0)}}if(this.interactPressed=!1,this.boxT>0&&(this.boxT-=t,this.boxT<=0)){const l=["mp40","thompson","trench","kar98k"];Math.random()<.12&&l.push("wunder");const c=l[Math.floor(Math.random()*l.length)];this.weapons.addWeapon(c),this.toast("MYSTERY BOX: "+_o[c].name),this.audio.powerup("insta"),this.updateHud(),setTimeout(()=>{this.world.mysteryBox&&(this.world.mysteryBox.open=!1)},1200)}}fireWeapon(){const t=this.weapons.def;if(!this.weapons.tryFire())return;this.stats.shots++,this.recoilPitch+=t.kick*(this.weapons.adsAmount>.5?.7:1.2),this.recoilYaw+=(Math.random()-.5)*t.kick*.8,this.shake=Math.min(.1,this.shake+t.kick*.6);const i=new P;this.camera.getWorldDirection(i);const n=new P().crossVectors(i,new P(0,1,0)).normalize(),r=new P().crossVectors(n,i).normalize(),a=(this.weapons.adsAmount>.5?t.adsSpread:t.spread)+(this.player.moving?.012:0)+(this.player.sprinting?.02:0),o=this.camera.position.clone(),l=new P;this.weapons.view?this.weapons.view.muzzle.getWorldPosition(l):l.copy(o).addScaledVector(i,.5);let c=!1,h=!1,d=!1;const u=new Wu,f=this.zombies.hitMeshes;for(let _=0;_<t.pellets;_++){const v=i.clone().addScaledVector(n,(Math.random()-.5)*a*2).addScaledVector(r,(Math.random()-.5)*a*2).normalize();u.set(o,v),u.near=.05,u.far=t.range;const m=u.intersectObjects(f,!1);let p=o.clone().addScaledVector(v,t.range);if(m.length){const E=m[0],b=E.object.userData.zombie;if(b&&b.state!=="dying"&&b.state!=="dead"){const T=E.object.userData.part||"body",w=T==="head";let g=t.damage*(w?t.headMult:T==="limb"?.76:1);this.instaT>0&&(g=999999),c=!0,p=E.point.clone(),b.takeDamage(g,w,E.point,v)&&(h=!0,w&&(d=!0)),this.addPoints(10,null),this.audio.hit(w),t.wonder&&this.wunderSplash(E.point,b)}}const x=t.wonder?6881164:16767392;this.spawnTracer(l,p,x)}c&&(this.stats.hits++,this.showHitmarker(h,d))}wunderSplash(t,e){this.additive.burst(t,new P(0,1,0),34,{color:new At(.25,1,.45),size:.14,life:.7,spread:3.2,gravity:.2,drag:.92,alpha:1});for(const i of[...this.zombies.list]){if(i===e||i.state==="dying"||i.state==="dead")continue;i.group.position.distanceTo(t)<3.4&&i.takeDamage(240,!1,i.group.position.clone().setY(1.1),new P(0,1,0))}}spawnTracer(t,e,i=16767392){const n=new Te().setFromPoints([t,e]),r=new Fc({color:i,transparent:!0,opacity:.72,blending:ci,depthWrite:!1}),a=new Cu(n,r);a.frustumCulled=!1,this.scene.add(a),this.tracers.push({line:a,life:.055})}updatePlayer(t){const e=this.player;if(e.lastDamage+=t,e.moving=!1,e.sprinting=!1,e.dead)return;let i=0,n=0;(this.keys.w||this.keys.arrowup)&&(i+=1),(this.keys.s||this.keys.arrowdown)&&(i-=1),(this.keys.d||this.keys.arrowright)&&(n+=1),(this.keys.a||this.keys.arrowleft)&&(n-=1),ai&&(i+=-this.touchMove.y,n+=this.touchMove.x);const r=Math.hypot(i,n);r>1&&(i/=r,n/=r);const a=r>.08;e.moving=a;const o=this.weapons.adsAmount>.5,l=(this.keys.shift||ai&&r>.9)&&i>.2&&!o&&!this.weapons.reloading;e.sprinting=l;const c=l?6.1:4.15,h=Math.sin(e.yaw),d=Math.cos(e.yaw),u=(-h*i+d*n)*c,f=(-d*i-h*n)*c,_=a?14:18;e.velocity.x+=(u-e.velocity.x)*Math.min(1,t*_),e.velocity.z+=(f-e.velocity.z)*Math.min(1,t*_),Math.hypot(e.velocity.x,e.velocity.z)<.05&&(e.velocity.x=0,e.velocity.z=0),e.position.x+=e.velocity.x*t,e.position.z+=e.velocity.z*t,this.resolveCollisions(),e.position.x=Ai(e.position.x,-10.2,10.2),e.position.z=Ai(e.position.z,-9.2,15.2),a&&!e.dead&&(e.bobT+=t*(l?11.5:8.2),Math.sin(e.bobT)>.985&&this.audio.footstep(l)),e.lastDamage>4.4&&e.health<e.maxHealth&&(e.health=Math.min(e.maxHealth,e.health+20*t),this.updateHud()),e.health<38&&e.health>0&&(this.heartT-=t,this.heartT<=0&&(this.heartT=.95,this.audio.heartbeat(Ai(1-e.health/45,.3,1)))),this.weapons.ads=this.adsHeld&&!l,this.weapons.update(t,e,this.lookDelta);const v=this.weapons.def;this.state==="playing"&&!e.dead&&(v.auto?this.fireHeld:this.firePressed)&&this.fireWeapon(),this.firePressed=!1,this.recoilPitch*=Math.pow(.002,t),this.recoilYaw*=Math.pow(.002,t),this.shake=Math.max(0,this.shake-t*.9);const m=v.id==="kar98k"?38:v.id==="wunder"?55:58;let p=this.baseFov;o?p=m:l&&(p=this.baseFov+6),this.camera.fov+=(p-this.camera.fov)*Math.min(1,t*10),this.camera.updateProjectionMatrix();const x=a?Math.sin(e.bobT)*(l?.035:.022):0,E=a?Math.cos(e.bobT*.5)*(l?.02:.012):0,b=-n*.012+(this.shake>0?(Math.random()-.5)*this.shake:0);this.camera.position.set(e.position.x+E+(this.shake>0?(Math.random()-.5)*this.shake*.4:0),e.height+x+(this.shake>0?(Math.random()-.5)*this.shake*.3:0),e.position.z),this.camera.rotation.set(e.pitch+this.recoilPitch,e.yaw+this.recoilYaw,b),this.lookDelta.multiplyScalar(.82)}resolveCollisions(){const t=this.player,e=t.radius;for(let i=0;i<2;i++)for(const n of this.world.colliders){const r=Ai(t.position.x,n.minX,n.maxX),a=Ai(t.position.z,n.minZ,n.maxZ);let o=t.position.x-r,l=t.position.z-a,c=Math.hypot(o,l);if(c<e)if(c<1e-4){const h=t.position.x-n.minX,d=n.maxX-t.position.x,u=t.position.z-n.minZ,f=n.maxZ-t.position.z,_=Math.min(h,d,u,f);_===h?t.position.x=n.minX-e:_===d?t.position.x=n.maxX+e:_===u?t.position.z=n.minZ-e:t.position.z=n.maxZ+e}else t.position.x=r+o/c*e,t.position.z=a+l/c*e}}updateTracers(t){for(let e=this.tracers.length-1;e>=0;e--){const i=this.tracers[e];i.life-=t,i.line.material.opacity=Math.max(0,i.life/.055)*.72,i.life<=0&&(this.scene.remove(i.line),i.line.geometry.dispose(),i.line.material.dispose(),this.tracers.splice(e,1))}}updateMenuCamera(t){this.menuT+=t;const e=this.menuT,i=1.8+Math.sin(e*.12)*.5,n=6.6+Math.cos(e*.09)*.35;this.camera.position.set(i,1.78+Math.sin(e*.17)*.03,n),this.camera.lookAt(-1.6,1.48+Math.sin(e*.11)*.06,-5.2),this.camera.fov=72,this.camera.updateProjectionMatrix()}update(t){if(this.time+=t,this.state==="menu"){this.weapons.holder.visible=!1,this.updateMenuCamera(t),this.world.update(t,this.time,this.player.position),this.particles.update(t),this.additive.update(t),this.decals.update(t),this.updateTracers(t);return}if(this.state==="paused"||this.state==="gameover"){this.world.update(t*.2,this.time,this.player.position),this.particles.update(t*.2),this.additive.update(t*.2),this.decals.update(t*.2);return}if(this.state==="dying"){this.deathT+=t;const r=Math.min(1,this.deathT/1.4);this.camera.position.set(this.player.position.x,this.player.height*(1-r)+.25,this.player.position.z),this.camera.rotation.set(this.player.pitch-r*.3,this.player.yaw,r*1.1),this.zombies.update(t,this.player),this.world.update(t,this.time,this.player.position),this.particles.update(t),this.additive.update(t),this.decals.update(t),this.updateTracers(t),this.damageFlash=Math.max(0,this.damageFlash-t*.5),xt("damage-vignette").style.opacity=String(.6+this.damageFlash*.4),this.deathT>1.6&&this.showGameOver();return}this.instaT=Math.max(0,this.instaT-t),this.doubleT=Math.max(0,this.doubleT-t),this.damageFlash=Math.max(0,this.damageFlash-t*2.6),xt("damage-vignette").style.opacity=String(Ai((1-this.player.health/this.player.maxHealth)*.7+this.damageFlash*.35,0,.92)),this.updatePlayer(t),this.updateInteraction(t),this.zombies.update(t,this.player),this.powerups.update(t,this.player),this.world.update(t,this.time,this.player.position),this.particles.update(t),this.additive.update(t),this.decals.update(t),this.updateTracers(t),this.updateHud();const e=this.weapons.def,n=8+(this.weapons.adsAmount>.5?e.adsSpread:e.spread)*420+(this.player.moving?7:0)+(this.player.sprinting?6:0);if(xt("crosshair").style.setProperty("--spread",`${n}px`),xt("crosshair").style.opacity=this.weapons.adsAmount>.85?"0.35":"1",this.zombies.roundComplete&&this.roundState==="active"?(this.roundState="cleared",this.roundClearT=5,this.addPoints(100),this.audio.roundEnd(),this.showBanner("SURVIVED",`ROUND ${this.round}`,"THE HORDE FALLS BACK — FOR NOW",!0),this.toast("ROUND CLEARED +100")):this.roundState==="cleared"&&(this.roundClearT-=t,this.roundClearT<=0&&this.beginRound(this.round+1)),this.fpsAccum+=t,this.fpsFrames++,this.fpsAccum>1.5){const r=this.fpsFrames/this.fpsAccum;this.fpsAccum=0,this.fpsFrames=0,r<30&&!this.qualityReduced?(this.lowFpsT++,this.lowFpsT>=2&&(this.qualityReduced=!0,this.renderer.setPixelRatio(1),this.resize())):this.lowFpsT=0}}render(){this.bloomEnabled?this.composer.render():this.renderer.render(this.scene,this.camera)}loop(t){requestAnimationFrame(this.loop);let e=(t-this.clockLast)/1e3;this.clockLast=t,e>.06&&(e=.06),e<0&&(e=0),this.update(e),this.render()}}const Rg=new Ag;window.__game=Rg;
