!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=23)}([function(t,e,i){t.exports=i(6)(7)},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return n})),i.d(e,"d",(function(){return o}));var s,r={GREEN:"#00A020",ORANGE:"#FF6D00",BLUE:"#0D47A1",YELLOW:"#FFD600",WHITE:"#EEEEEE",RED:"#B71C1C",GRAY:"#444444",BLACK:"#222222",BACKGROUND:"#C0C0C0"};!function(t){t[t.L=0]="L",t[t.R=1]="R",t[t.D=2]="D",t[t.U=3]="U",t[t.B=4]="B",t[t.F=5]="F"}(s||(s={}));var n=30;function o(t,e){let i=document.createElement("a");i.innerHTML=t,i.setAttribute("download",t),i.download=t,document.body.appendChild(i);let s=URL.createObjectURL(e);if(i.href=s,document.createEvent){var r=document.createEvent("MouseEvents");r.initEvent("click",!0,!0),i.dispatchEvent(r)}else i.click&&i.click();document.body.removeChild(i)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i(0),r=i(1);class n extends s.Geometry{constructor(t,e){super();const i=t/2,r=i-e,o=[[-r,+r,+i],[+r,+r,+i],[+r,-r,+i],[-r,-r,+i],[-r,+i,-r],[+r,+i,-r],[+r,+i,+r],[-r,+i,+r],[-i,-r,-r],[-i,+r,-r],[-i,+r,+r],[-i,-r,+r],[+r,+r,-i],[-r,+r,-i],[-r,-r,-i],[+r,-r,-i],[-r,-i,+r],[+r,-i,+r],[+r,-i,-r],[-r,-i,-r],[+i,+r,+r],[+i,+r,-r],[+i,-r,-r],[+i,-r,+r]];for(let t=0;t<o.length;t++){let e=o[t];this.vertices.push(new s.Vector3(e[0],e[1],e[2]))}for(let t=0;t<n._INDICES.length;t++){let e=n._INDICES[t],i=new s.Face3(e[0],e[1],e[2]);this.faces.push(i)}this.computeFaceNormals()}}n._INDICES=[[0,2,1],[0,3,2],[4,6,5],[4,7,6],[8,10,9],[8,11,10],[12,14,13],[12,15,14],[16,18,17],[16,19,18],[20,22,21],[20,23,22],[1,6,7],[0,1,7],[3,0,10],[11,3,10],[17,2,3],[16,17,3],[23,20,1],[2,23,1],[5,12,13],[4,5,13],[9,13,14],[8,9,14],[22,15,12],[21,22,12],[19,14,15],[18,19,15],[7,4,9],[10,7,9],[11,8,19],[16,11,19],[23,17,18],[22,23,18],[20,21,5],[6,20,5],[20,6,1],[10,0,7],[21,12,5],[13,9,4],[23,2,17],[11,16,3],[22,18,15],[8,14,19]];class o extends s.ExtrudeGeometry{constructor(t,e){let i=-(t/=2),r=t,n=-t,o=t,h=t/4,a=new s.Shape;a.moveTo(i,n+h),a.lineTo(i,r-h),a.quadraticCurveTo(i,r,i+h,r),a.lineTo(o-h,r),a.quadraticCurveTo(o,r,o,r-h),a.lineTo(o,n+h),a.quadraticCurveTo(o,n,o-h,n),a.lineTo(i+h,n),a.quadraticCurveTo(i,n,i,n+h),a.closePath(),super(a,{bevelEnabled:!1,depth:e})}}class h extends s.ShapeGeometry{constructor(t,e){let i=-(t/=2),r=t,n=-t,o=t,h=t/4,a=new s.Shape;a.moveTo(i,n+h),a.lineTo(i,r-h),a.quadraticCurveTo(i,r,i+h,r),a.lineTo(o-h,r),a.quadraticCurveTo(o,r,o,r-h),a.lineTo(o,n+h),a.quadraticCurveTo(o,n,o-h,n),a.lineTo(i+h,n),a.quadraticCurveTo(i,n,i,n+h),a.closePath(),super(a)}}class a extends s.Group{constructor(t){super(),this.initial=t,this._vector=new s.Vector3,this.stickers=[],this._quaternion=new s.Quaternion,this.mirrors=[];let e=t%3-1,i=Math.floor(t%9/3)-1,n=Math.floor(t/9)-1;this.vector=new s.Vector3(e,i,n),this.materials=[this.vector.x<0?a._MATERIALS.orange:a._MATERIALS.gray,this.vector.x>0?a._MATERIALS.red:a._MATERIALS.gray,this.vector.y<0?a._MATERIALS.white:a._MATERIALS.gray,this.vector.y>0?a._MATERIALS.yellow:a._MATERIALS.gray,this.vector.z<0?a._MATERIALS.green:a._MATERIALS.gray,this.vector.z>0?a._MATERIALS.blue:a._MATERIALS.gray],this.frame=new s.Mesh(a._FRAME,a._MATERIALS.black),this.add(this.frame);for(let t=0;t<6;t++){let e=new s.Mesh(a._STICKER,this.materials[t]);switch(e.name=r.c[t],t){case r.c.L:e.rotation.y=-Math.PI/2,e.position.x=-a.SIZE/2;break;case r.c.R:e.rotation.y=Math.PI/2,e.position.x=a.SIZE/2;break;case r.c.D:e.rotation.x=Math.PI/2,e.position.y=-a.SIZE/2;break;case r.c.U:e.rotation.x=-Math.PI/2,e.position.y=a.SIZE/2;break;case r.c.B:e.rotation.x=Math.PI,e.position.z=-a.SIZE/2;break;case r.c.F:e.rotation.x=2*Math.PI,e.position.z=a.SIZE/2}if(this.stickers.push(e),e.material!=a._MATERIALS.gray&&this.add(e),this.materials[t]!=a._MATERIALS.gray){let i=new s.Mesh(a._MIRROR,this.materials[t]);i.rotation.x=0==e.rotation.x?0:e.rotation.x+Math.PI,i.rotation.y=0==e.rotation.y?0:e.rotation.y+Math.PI,i.rotation.z=0==e.rotation.z?0:e.rotation.z+Math.PI,i.rotation.x+i.rotation.y+i.rotation.z==0&&(i.rotation.y=Math.PI),i.position.x=3*e.position.x,i.position.y=3*e.position.y,i.position.z=3*e.position.z,this.add(i),this.mirrors[t]=i}this.matrixAutoUpdate=!1,this.updateMatrix()}}set vector(t){this._vector.set(Math.round(t.x),Math.round(t.y),Math.round(t.z)),this._index=9*(this._vector.z+1)+3*(this._vector.y+1)+(this._vector.x+1),this.position.x=a.SIZE*this._vector.x,this.position.y=a.SIZE*this._vector.y,this.position.z=a.SIZE*this._vector.z}get vector(){return this._vector}set index(t){let e=t%3-1,i=Math.floor(t%9/3)-1,r=Math.floor(t/9)-1;this.vector=new s.Vector3(e,i,r)}get index(){return this._index}set mirror(t){if(t)for(let t=0;t<6;t++)this.mirrors[t]instanceof s.Mesh&&this.children.indexOf(this.mirrors[t])<0&&this.add(this.mirrors[t]);else for(let t=0;t<6;t++)this.mirrors[t]instanceof s.Mesh&&this.children.indexOf(this.mirrors[t])>=0&&this.remove(this.mirrors[t])}getColor(t){let e=new s.Vector3(0,0,0);switch(t){case r.c.L:e.x=-1;break;case r.c.R:e.x=1;break;case r.c.D:e.y=-1;break;case r.c.U:e.y=1;break;case r.c.B:e.z=-1;break;case r.c.F:e.z=1}this._quaternion.copy(this.quaternion),e.applyQuaternion(this._quaternion.inverse());let i=Math.round(e.x),n=Math.round(e.y),o=Math.round(e.z),h=0;return i<0?h=r.c.L:i>0?h=r.c.R:n<0?h=r.c.D:n>0?h=r.c.U:o<0?h=r.c.B:o>0&&(h=r.c.F),h}stick(t,e){let i;i=e.length>0?new s.MeshBasicMaterial({color:e}):this.materials[t],this.stickers[t].material=i,this.mirrors[t]instanceof s.Mesh&&(this.mirrors[t].material=i)}}a.SIZE=64,a._BORDER_WIDTH=4,a._STICKER_DEPTH=2,a._FRAME=new n(a.SIZE,a._BORDER_WIDTH),a._STICKER=new o(a.SIZE-2*a._BORDER_WIDTH-a._STICKER_DEPTH,a._STICKER_DEPTH),a._MIRROR=new h(a.SIZE-2*a._BORDER_WIDTH-a._STICKER_DEPTH,a._STICKER_DEPTH),a._MATERIALS={green:new s.MeshBasicMaterial({color:r.a.GREEN}),orange:new s.MeshBasicMaterial({color:r.a.ORANGE}),blue:new s.MeshBasicMaterial({color:r.a.BLUE}),yellow:new s.MeshBasicMaterial({color:r.a.YELLOW}),white:new s.MeshBasicMaterial({color:r.a.WHITE}),red:new s.MeshBasicMaterial({color:r.a.RED}),gray:new s.MeshBasicMaterial({color:r.a.GRAY}),black:new s.MeshBasicMaterial({color:r.a.BLACK})}},function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s=new class{constructor(){this.tweens=[],this.loop()}get length(){return this.tweens.length}loop(){requestAnimationFrame(this.loop.bind(this)),this.update()}tween(t,e,i,s){this.tweens.push(new r(t,e,i,s))}update(){if(0===this.tweens.length)return!1;for(var t=0;t<this.tweens.length;)this.tweens[t].update()?t++:this.tweens.splice(t,1);return!0}speedup(){for(const t of this.tweens)t.speedup()}finish(){let t=this.tweens.splice(0,this.tweens.length);for(const e of t)e.finish()}};class r{constructor(t,e,i,s){this.begin=t,this.end=e,this.duration=i,this.callback=s,this.value=0,this.delta=1}speedup(){this.delta=4}finish(){this.callback(this.end)}update(){this.value=this.value+this.delta;let t=this.value/this.duration;t=t>1?1:t,t=t<0?0:t,t-=1;let e=1-t*t;return this.callback(this.begin+(this.end-this.begin)*e),1!=e}}},function(t,e,i){t.exports=i(6)(11)},function(t,e,i){t.exports=i(6)(1)},function(t,e){t.exports=dll_library},function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return h}));var s=i(3),r=i(1);class n{constructor(t){this.callbacks=[],this.cube=t,this.queue=[],this.cube.callbacks.push(this.update.bind(this))}static shuffle(){let t="",e=["x2"],i=-1,s=["U","D","R","L","F","B"],r=-1;for(let t=0;t<24;t++){let t=[];for(;r==i;)r=Math.floor(3*Math.random());let n=Math.floor(2*Math.random());t.push(s[2*r+n]);let o=Math.random();o<.2?t.push("2"):o<.6&&t.push("'"),e.push(t.join("")),i=r}return t=e.join(" "),t}get length(){return this.queue.length}finish(){for(const t of this.queue)t.fast=!0;s.a.finish()}twist(t,e=!1,i=1,r=!1){this.queue.length>0&&(s.a.finish(),this.update()),s.a.speedup();let n=new h(t,e,i).parse();for(let t of n)t.fast=r,this.queue.push(t);this.update()}update(){if(0===this.queue.length){for(const t of this.callbacks)t();return}if(this.cube.lock)return;let t=this.queue.shift();null!=t&&this.start(t)}start(t){if("-"==t.exp)return t.fast?void this.update():void s.a.tween(0,1,r.b*t.times,t=>{1!==t&&0!==t||this.update()});if("#"==t.exp)return this.cube.history.clear(),this.cube.reset(),this.cube.dirty=!0,void this.update();if("*"==t.exp){let t=n.shuffle();return this.cube.reset(),this.twist(t,!1,1,!0),void this.cube.history.clear()}let e=-Math.PI/2;t.reverse&&(e=-e),t.times&&(e*=t.times);let i=this.cube.groups[t.exp];void 0!==i?(i.angle=0,i.hold(),t.fast&&(i.angle=e),i.twist(e)):this.update()}}class o{constructor(t,e=!1,i=1,s=!1){this.exp=t,this.reverse=e,this.times=i,this.fast=s}get value(){return 0==this.times?"":(this.exp.length>1?"(":"")+this.exp+(this.exp.length>1?")":"")+(this.reverse?"'":"")+(1==this.times?"":String(this.times))}}class h{constructor(t,e=!1,i=1){if(this.children=[],t=t.replace(/[^\*#\-xyzbsfdeulmr\(\)'0123456789]/gi,""),this.twist=new o(t,e,i),1==t.length)return/[XYZ]/.test(this.twist.exp)&&(this.twist.exp=this.twist.exp.toLowerCase()),void(/[mes]/.test(this.twist.exp)&&(this.twist.exp=this.twist.exp.toUpperCase()));let s=[],r="",n=0;for(let e=0;e<t.length;e++){let i=t.charAt(e);if(0==r.length){if(h._ACTIONS.indexOf(i)>=0){r=r.concat(i);continue}if("("===i){r=r.concat(i),n++;continue}return}0==n?h._SUFFIX.indexOf(i)>=0?r=r.concat(i):(s.push(r),r="",e--):("("===i?n++:")"===i&&n--,r=r.concat(i))}if(r.length>0&&s.push(r),0!=s.length)for(let t of s){var a=t.match(/^\((\S+)\)('?)(\d*)('?)$/i);if(null===a&&(a=t.match(/([\*#\-xyzbsfdeulmr])('?)(\d*)('?)/i)),null===a)return;let e=1==(a[2]+a[4]).length,i=0==a[3].length?1:parseInt(a[3]);this.children.push(new h(a[1],e,i))}}parse(t=!1){t=this.twist.reverse!==t;let e=[];if(0!==this.children.length)for(var i=0;i<this.twist.times;i++)for(var s=0;s<this.children.length;s++){var r=(t?this.children[this.children.length-s-1]:this.children[s]).parse(t);for(let t of r)e.push(t)}else if(""!=this.twist.exp){let i=new o(this.twist.exp,t,this.twist.times);e.push(i)}return e}get value(){return this.twist.value}}h._ACTIONS="*#-xyzbsfdeulmrXYZBFSDEULMR",h._SUFFIX="'0123456789"},function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));class s{constructor(t){this._storage=window.localStorage,this.cuber=t,this.load()}load(){"0.0.1"!=this._storage.getItem("version")&&(this._storage.clear(),this._storage.setItem("version","0.0.1")),this.scale=Number(this._storage.getItem("setting.scale")||50),this.perspective=Number(this._storage.getItem("setting.perspective")||50),this.angle=Number(this._storage.getItem("setting.angle")||25),this.gradient=Number(this._storage.getItem("setting.gradient")||67),this.lock=!1,this.mirror=!1}reset(){this.scale=50,this.perspective=50,this.angle=25,this.gradient=67}get scale(){return this._scale}set scale(t){this._scale=t,this._storage.setItem("setting.scale",String(t)),this.cuber.scale=t/100+.5}get perspective(){return this._perspective}set perspective(t){this._perspective=t,this._storage.setItem("setting.perspective",String(t)),this.cuber.perspective=Math.exp((1-t/50)/1.2)}get angle(){return this._angle}set angle(t){this._angle=t,this._storage.setItem("setting.angle",String(t)),this.cuber.angle=(t/100-1)*Math.PI/4}get gradient(){return this._gradient}set gradient(t){this._gradient=t,this._storage.setItem("setting.gradient",String(t)),this.cuber.gradient=(1-t/100)*Math.PI/2}get mirror(){return this.cuber.mirror}set mirror(t){this.cuber.mirror=t}get lock(){return this.cuber.controller.lock}set lock(t){this.cuber.controller.lock=t}}},function(t,e,i){"use strict";var s=i(0),r=i(11),n=i(2),o=i(1),h=i(3);class a{constructor(){this.vector=new s.Vector3}}class c{constructor(t){this.dragging=!1,this.rotating=!1,this.angle=0,this.ray=new s.Ray,this.down=new s.Vector2(0,0),this.move=new s.Vector2(0,0),this.matrix=new s.Matrix4,this.holder=new a,this.vector=new s.Vector3,this.planes=[new s.Plane(new s.Vector3(1,0,0),3*-n.a.SIZE/2),new s.Plane(new s.Vector3(0,1,0),3*-n.a.SIZE/2),new s.Plane(new s.Vector3(0,0,1),3*-n.a.SIZE/2)],this._lock=!1,this._disable=!1,this._onMouseDown=t=>(this.down.x=t.offsetX,this.down.y=t.offsetY,this.handleDown(),t.returnValue=!1,!1),this._onMouseMove=t=>(this.move.x=t.offsetX,this.move.y=t.offsetY,this.handleMove(),t.returnValue=!1,!1),this._onMouseUp=t=>(this.handleUp(),t.returnValue=!1,!1),this._onMouseOut=t=>(this.handleUp(),t.returnValue=!1,!1),this._onTouch=t=>{let e=t.changedTouches[0];switch(t.type){case"touchstart":this.down.x=e.clientX,this.down.y=e.clientY,this.handleDown();break;case"touchmove":this.move.x=e.clientX,this.move.y=e.clientY,this.handleMove();break;case"touchend":this.handleUp();break;default:return}return t.returnValue=!1,!1},this.cuber=t,this.taps=[],this.cuber.canvas.addEventListener("mousedown",this._onMouseDown),this.cuber.canvas.addEventListener("mousemove",this._onMouseMove),this.cuber.canvas.addEventListener("mouseup",this._onMouseUp),this.cuber.canvas.addEventListener("mouseout",this._onMouseOut),this.cuber.canvas.addEventListener("touchstart",this._onTouch),this.cuber.canvas.addEventListener("touchmove",this._onTouch),this.cuber.canvas.addEventListener("touchend",this._onTouch),this.loop()}get lock(){return this._lock}set lock(t){this.handleUp(),this._lock=t}get disable(){return this._disable}set disable(t){this.handleUp(),this._disable=t}loop(){requestAnimationFrame(this.loop.bind(this)),this.update()}update(){if(this.lock&&this.rotating&&this.group.angle!=this.angle){let t=(this.angle-this.group.angle)/2,e=Math.PI/2/o.b*4;t>e&&(t=e),t<-e&&(t=-e),this.group.angle+=t,this.cuber.dirty=!0}}match(){let t,e=[];var i=this.holder.index;if(-1===this.holder.index)return t=this.cuber.cube.groups.x,0===t.axis.dot(this.holder.plane.normal)&&e.push(t),t=this.cuber.cube.groups.y,0===t.axis.dot(this.holder.plane.normal)&&e.push(t),t=this.cuber.cube.groups.z,0===t.axis.dot(this.holder.plane.normal)&&e.push(t),e;var s=i%3-1,r=Math.floor(i%9/3)-1,n=Math.floor(i/9)-1;switch(s){case-1:t=this.cuber.cube.groups.L,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:t=this.cuber.cube.groups.M,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:t=this.cuber.cube.groups.R,0===t.axis.dot(this.holder.plane.normal)&&e.push(t)}switch(r){case-1:t=this.cuber.cube.groups.D,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:t=this.cuber.cube.groups.E,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:t=this.cuber.cube.groups.U,0===t.axis.dot(this.holder.plane.normal)&&e.push(t)}switch(n){case-1:t=this.cuber.cube.groups.B,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:t=this.cuber.cube.groups.S,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:t=this.cuber.cube.groups.F,0===t.axis.dot(this.holder.plane.normal)&&e.push(t)}return e}intersect(t,e){var i=t.x/this.cuber.width*2-1,r=-t.y/this.cuber.height*2+1;this.ray.origin.setFromMatrixPosition(this.cuber.camera.matrixWorld),this.ray.direction.set(i,r,.5).unproject(this.cuber.camera).sub(this.ray.origin).normalize(),this.ray.applyMatrix4(this.matrix.identity().getInverse(this.cuber.scene.matrix));var n=new s.Vector3;return this.ray.intersectPlane(e,n),n}handleDown(){if(this.disable||this.dragging||this.rotating)return;this.dragging=!0,this.holder.index=-1,h.a.speedup();let t=0;this.planes.forEach(e=>{var i=this.intersect(this.down,e);if(null!==i&&Math.abs(i.x)<=3*n.a.SIZE/2+.01&&Math.abs(i.y)<=3*n.a.SIZE/2+.01&&Math.abs(i.z)<=3*n.a.SIZE/2+.01){let h=Math.pow(i.x-this.ray.origin.x,2)+Math.pow(i.y-this.ray.origin.y,2)+Math.pow(i.z-this.ray.origin.z,2);if(0==t||h<t){this.holder.plane=e;var s=Math.ceil(Math.round(i.x)/n.a.SIZE-.5),r=Math.ceil(Math.round(i.y)/n.a.SIZE-.5),o=Math.ceil(Math.round(i.z)/n.a.SIZE-.5);return s<2&&s>-2&&r<2&&r>-2&&o<2&&o>-2?(this.holder.index=9*(o+1)+3*(r+1)+(s+1),13==this.holder.index&&(this.holder.index=-1)):this.holder.index=-1,void(t=h)}}},this)}handleMove(){if(!this.disable){if(this.dragging){var t=this.move.x-this.down.x,e=this.move.y-this.down.y,i=Math.sqrt(t*t+e*e);if(Math.min(this.cuber.width,this.cuber.height)/i>32)return!0;if(h.a.finish(),this.cuber.cube.lock)return this.dragging=!1,this.rotating=!1,!0;if(this.dragging=!1,this.rotating=!0,-1===this.holder.index)if(t*t>e*e)this.group=this.cuber.cube.groups.y;else{let t=new s.Vector3(3*n.a.SIZE/2,0,3*n.a.SIZE/2);t.applyMatrix4(this.cuber.scene.matrix).project(this.cuber.camera);let e=this.cuber.width/2,i=Math.round(t.x*e+e);this.down.x<i?this.group=this.cuber.cube.groups.x:this.group=this.cuber.cube.groups.z}else{var r=this.intersect(this.down,this.holder.plane),o=this.intersect(this.move,this.holder.plane);this.vector.subVectors(o,r);var a=this.vector.x,c=this.vector.y,l=this.vector.z,u=Math.max(Math.abs(a),Math.abs(c),Math.abs(l));a=Math.abs(a)===u?a:0,c=Math.abs(c)===u?c:0,l=Math.abs(l)===u?l:0,this.vector.set(a,c,l),this.holder.vector.copy(this.vector.multiply(this.vector).normalize()),this.match().some(t=>0===t.axis.dot(this.vector)&&(this.group=t,!0),this),this.vector.crossVectors(this.holder.vector,this.holder.plane.normal),this.holder.vector.multiplyScalar(this.vector.x+this.vector.y+this.vector.z)}this.group.hold()}if(this.rotating){if(-1===this.holder.index){t=this.move.x-this.down.x,e=this.move.y-this.down.y;this.group===this.cuber.cube.groups.y?this.angle=t/n.a.SIZE*Math.PI/4:this.group===this.cuber.cube.groups.x?this.angle=e/n.a.SIZE*Math.PI/4:this.angle=-e/n.a.SIZE*Math.PI/4}else{r=this.intersect(this.down,this.holder.plane),o=this.intersect(this.move,this.holder.plane);this.vector.subVectors(o,r).multiply(this.holder.vector),this.angle=-(this.vector.x+this.vector.y+this.vector.z)*(this.group.axis.x+this.group.axis.y+this.group.axis.z)/n.a.SIZE*Math.PI/4}if(!this.lock)return this.angle=0==this.angle?0:this.angle/Math.abs(this.angle)*Math.PI/2,void this.handleUp()}}}handleUp(){if(this.dragging){let t=null;switch(this.holder.plane){case this.planes[0]:t=o.c.R;break;case this.planes[1]:t=o.c.U;break;case this.planes[2]:t=o.c.F}for(let e of this.taps)e(this.holder.index,t)}this.rotating&&this.group&&null!==this.group&&(this.lock?this.group.twist(0):this.group.twist(this.angle)),this.holder.index=-1,this.dragging=!1,this.rotating=!1,this.cuber.dirty=!0}}i.d(e,"a",(function(){return l}));class l{constructor(t){this.dirty=!1,this._left=!1,this._gradient=Math.PI/6,this._perspective=1,this.canvas=t,this.controller=new c(this),this.cube=new r.a,this.renderer=new s.WebGLRenderer({canvas:t,antialias:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(o.a.BACKGROUND),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height,!0),this.scene=new s.Scene,this.scene.rotation.x=Math.PI/6,this.scene.rotation.y=-Math.PI/4+Math.PI/16,this.scene.add(this.cube),this.camera=new s.PerspectiveCamera(50,1,1,32*n.a.SIZE),this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=0,this.mirror=!1,this.scale=1,this.angle=-Math.PI/8}get mirror(){return this._mirror}set mirror(t){this._mirror=t;for(let e of this.cube.cubelets)e.mirror=t;this.dirty=!0}get scale(){return this._scale}set scale(t){this._scale=t,this.resize()}get angle(){return this._angle}set angle(t){this._angle=t,this.scene.rotation.y=t*(this.left?-1:1),this.dirty=!0}get left(){return this._left}set left(t){this._left=t;let e=this.scene.rotation.y,i=-e;h.a.finish(),h.a.tween(e,i,o.b/2,t=>{this.scene.rotation.y=t,this.dirty=!0})}get gradient(){return this._gradient}set gradient(t){this._gradient=t,this.scene.rotation.x=t,this.dirty=!0}get perspective(){return this._perspective}set perspective(t){this._perspective=t,this.resize()}resize(){let t=this.height/Math.min(this.width,this.height/1.2)/4/this.scale/this.perspective,e=2*Math.atan(t)*180/Math.PI;this.camera.aspect=this.width/this.height,this.camera.fov=e,this.camera.position.z=3*n.a.SIZE*4*this.perspective,this.camera.lookAt(this.scene.position),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!0),this.dirty=!0}render(){return!(!this.dirty&&!this.cube.dirty)&&(this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.dirty=!1,this.cube.dirty=!1,!0)}}},function(t,e,i){t.exports=i(6)(12)},function(t,e,i){"use strict";var s=i(0),r=i(7),n=i(1),o=i(3);class h extends s.Group{constructor(t,e,i,s){super(),this.cube=t,this._angle=0,this.cubelets=[],this.name=e,this.indices=i,this.axis=s,this.matrixAutoUpdate=!1,this.updateMatrix()}set angle(t){this.setRotationFromAxisAngle(this.axis,t),this._angle=t,this.updateMatrix(),this.cube.dirty=!0}get angle(){return this._angle}hold(){this.angle=0;for(let t of this.indices){let e=this.cube.cubelets[t];this.cubelets.push(e),this.cube.remove(e),this.add(e)}this.cube.lock=!0}drop(){for(this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);;){let t=this.cubelets.pop();if(void 0===t)break;this.rotate(t),this.remove(t),this.cube.add(t),this.cube.cubelets[t.index]=t}if(this.cube.lock=!1,0!=this.angle)for(const t of this.cube.callbacks)t();this.angle=0}twist(t=this.angle){t=Math.round(t/(Math.PI/2))*(Math.PI/2);let e=this.name,i=t>0,s=Math.round(Math.abs(t)/(Math.PI/2));0!=s&&this.cube.history.record(new r.a(e,i,s));let h=t-this.angle;if(0===h)this.drop();else{var a=n.b*Math.min(1,Math.abs(h)/(Math.PI/2));o.a.tween(this.angle,t,a,e=>{this.angle=e,this.angle!==t&&0!==this.angle||this.drop()})}}rotate(t){t.rotateOnWorldAxis(this.axis,this.angle),t.vector=t.vector.applyAxisAngle(this.axis,this.angle),t.updateMatrix()}}var a=i(2);class c{constructor(){this.list=[]}record(t){if(0==this.list.length)this.list.push(t);else{let e=this.list[this.list.length-1];e.exp==t.exp?(e.times=e.times+t.times*(e.reverse==t.reverse?1:-1),e.times=e.times%4,0==e.times&&this.list.pop()):this.list.push(t)}}clear(){this.list=[]}get last(){return this.list[this.list.length-1]}get length(){return this.list.length}get moves(){let t=this.length;for(const e of this.list)/[xyz]/.test(e.exp)&&t--;return t}}i.d(e,"a",(function(){return l}));class l extends s.Group{constructor(){super(),this.dirty=!0,this.lock=!1,this.history=new c,this.cubelets=[],this.initials=[],this.callbacks=[],this.complete=!1,this.twister=new r.c(this);for(var t=0;t<27;t++){let e=new a.a(t);this.cubelets.push(e),this.initials.push(e),this.add(e)}this.groups={L:new h(this,"L",[6,15,24,3,12,21,0,9,18],new s.Vector3(-1,0,0)),D:new h(this,"D",[18,19,20,9,10,11,0,1,2],new s.Vector3(0,-1,0)),B:new h(this,"B",[8,7,6,5,4,3,2,1,0],new s.Vector3(0,0,-1)),R:new h(this,"R",[26,17,8,23,14,5,20,11,2],new s.Vector3(1,0,0)),U:new h(this,"U",[6,7,8,15,16,17,24,25,26],new s.Vector3(0,1,0)),F:new h(this,"F",[24,25,26,21,22,23,18,19,20],new s.Vector3(0,0,1)),l:new h(this,"l",[0,3,6,9,12,15,18,21,24,1,4,7,10,13,16,19,22,25],new s.Vector3(-1,0,0)),d:new h(this,"d",[0,1,2,9,10,11,18,19,20,3,4,5,12,13,14,21,22,23],new s.Vector3(0,-1,0)),b:new h(this,"b",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],new s.Vector3(0,0,-1)),r:new h(this,"r",[2,5,8,11,14,17,20,23,26,1,4,7,10,13,16,19,22,25],new s.Vector3(1,0,0)),u:new h(this,"u",[6,7,8,15,16,17,24,25,26,3,4,5,12,13,14,21,22,23],new s.Vector3(0,1,0)),f:new h(this,"f",[18,19,20,21,22,23,24,25,26,9,10,11,12,13,14,15,16,17],new s.Vector3(0,0,1)),M:new h(this,"M",[1,4,7,10,13,16,19,22,25],new s.Vector3(-1,0,0)),E:new h(this,"E",[3,4,5,12,13,14,21,22,23],new s.Vector3(0,-1,0)),S:new h(this,"S",[9,10,11,12,13,14,15,16,17],new s.Vector3(0,0,1)),x:new h(this,"x",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new s.Vector3(1,0,0)),y:new h(this,"y",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new s.Vector3(0,1,0)),z:new h(this,"z",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new s.Vector3(0,0,1))};for(let t in this.groups)this.add(this.groups[t]);this.callbacks.push(()=>{let t=[0,1,2,3,4,5].every(t=>{let e=this.cubelets[this.groups[n.c[t]].indices[0]].getColor(t);return this.groups[n.c[t]].indices.every(i=>e==this.cubelets[i].getColor(t))});this.complete=t}),this.matrixAutoUpdate=!1,this.updateMatrix()}index(t){return this.initials[t].index}reset(){for(let t of this.cubelets)t.setRotationFromEuler(new s.Euler(0,0,0)),t.index=t.initial,t.updateMatrix();this.cubelets.sort((t,e)=>t.index-e.index)}stick(){for(let t=0;t<27;t++)for(let e=0;e<6;e++)this.initials[t].stick(e,"");this.dirty=!0}strip(t){this.stick();for(const e of[n.c.L,n.c.R,n.c.D,n.c.U,n.c.B,n.c.F]){let i=t[n.c[e]];if(null==i)continue;let s=this.groups[n.c[e]];for(const t of i)this.initials[s.indices[t-1]].stick(e,n.a.GRAY)}this.dirty=!0}get state(){let t=[];for(let e of this.groups.U.indices)t.push(this.cubelets[e].getColor(n.c.U));for(let e of this.groups.R.indices)t.push(this.cubelets[e].getColor(n.c.R));for(let e of this.groups.F.indices)t.push(this.cubelets[e].getColor(n.c.F));for(let e of this.groups.D.indices)t.push(this.cubelets[e].getColor(n.c.D));for(let e of this.groups.L.indices)t.push(this.cubelets[e].getColor(n.c.L));for(let e of this.groups.B.indices)t.push(this.cubelets[e].getColor(n.c.B));return t.join("")}}},function(t,e,i){"use strict";var s=i(5),r=i(4),n=i(8),o=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},h=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends s.default{onValueChange(t){this.$emit("input",t)}};o([Object(r.Inject)("option"),h("design:type",n.a)],a.prototype,"option",void 0),o([Object(r.Prop)({required:!0}),h("design:type",Boolean)],a.prototype,"value",void 0),o([Object(r.Watch)("value"),h("design:type",Function),h("design:paramtypes",[Boolean]),h("design:returntype",void 0)],a.prototype,"onValueChange",null),a=o([Object(r.Component)({template:i(13)})],a),e.a=a},function(t,e){t.exports='<v-bottom-sheet v-model="value">\n  <v-card flat style="margin: auto;touch-action: none;user-select: none;">\n    <v-container fluid grid-list-md text-xs-center>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.scale" always-dirty thumb-label="always" max="100" min="0" label="大小"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.perspective" always-dirty thumb-label="always" max="100" min="0" label="透视"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.angle" always-dirty thumb-label="always" max="100" min="0" label="左右"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.gradient" always-dirty thumb-label="always" max="100" min="0" label="上下"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-btn @click.native.stop.prevent="option.reset" @touchstart.native.stop.prevent="option.reset" outlined color="red">重置</v-btn>\n      </v-layout>\n    </v-container>\n  </v-card>\n</v-bottom-sheet>\n'},function(t,e,i){t.exports=i(6)(41)},function(t,e,i){t.exports=i(6)(13)},function(t,e,i){t.exports=i(6)(15)},function(t,e){t.exports='<v-container fluid grid-list-md text-xs-center :style="{width:width + \'px\', height:height + \'px\'}" style="padding:0%;touch-action: none;">\n  <v-layout row wrap style="margin: 0%; padding:0%; min-width: 0%; min-height: 0%;">\n    <v-flex xs2 d-flex style="padding:0%; min-width: 0%; min-height: 0%;">\n      <v-btn @click.native.stop.prevent="layers=(layers+1)%3" @touchstart.native.stop.prevent="layers=(layers+1)%3" depressed :style="style">\n        <v-icon :size="height/5">{{[\'filter_1\', \'filter_2\', \'filter_3\'][layers]}}</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="cuber.mirror=!cuber.mirror"\n        @touchstart.native.stop.prevent="cuber.mirror=!cuber.mirror"\n        :color="cuber.mirror?\'primary\':\'\'"\n        depressed\n        :style="style"\n      >\n        <v-icon :size="height/5">flip</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn @click.native.stop.prevent="strip" @touchstart.native.stop.prevent="strip" :color="colors>0?\'primary\':\'\'" depressed :style="style">\n        <v-icon v-if="colors==0" :size="height/5">colorize</v-icon>\n        <div v-if="colors!=0" :style="{\'font-size\':(height/8)+\'px\'}">{{[\'\',\'Crs\',\'F2L\'][colors]}}</div>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="twist(\'y\')"\n        @touchstart.native.stop.prevent="twist(\'y\')"\n        depressed\n        :style="style"\n      >\n        <v-icon :size="height/5">rotate_90_degrees_ccw</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="cuber.left=!cuber.left"\n        @touchstart.native.stop.prevent="cuber.left=!cuber.left"\n        :color="cuber.left?\'primary\':\'\'"\n        depressed\n        :style="style"\n      >\n        <v-icon :size="height/5">switch_camera</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        depressed\n        :disabled="cuber.cube.history.length == 0 || option.lock"\n        @click.native.stop.prevent="reverse()"\n        @touchstart.native.stop.prevent="reverse()"\n        :style="style"\n      >\n        <v-icon :size="height/5">backspace</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex v-for="exp in exps" d-flex xs2 style="padding:0%">\n      <v-btn depressed @click.native.stop.prevent="twist(exp)" @touchstart.native.stop.prevent="twist(exp)" :disabled="option.lock" :style="style"\n        ><div :style="{\'font-size\':(height/8)+\'px\'}">{{exp}}</div>\n      </v-btn>\n    </v-flex>\n  </v-layout>\n</v-container>\n'},function(t,e){t.exports='<v-app>\n  <v-btn\n    fixed\n    left\n    top\n    @click.native.stop.prevent\n    @touchstart.native.stop.prevent\n    text\n    color="primary"\n    style="margin:0%;padding:0%;"\n    :style="{height:size+\'px\'}"\n  >\n    <div :style="{\'font-size\':(size * 0.8)+\'px\'}">{{score}}</div>\n  </v-btn>\n  <v-speed-dial v-model="menu" fixed top right direction="bottom" style="user-select: none;">\n    <template v-slot:activator>\n      <v-btn\n        @click.native.stop.prevent="menu=!menu"\n        @touchstart.native.stop.prevent="menu=!menu"\n        fab\n        depressed\n        color="primary"\n        :style="{width:size+\'px\', height:size+\'px\'}"\n      >\n        <v-icon v-if="menu" :size="size * 0.6">close</v-icon>\n        <v-icon v-else :size="size * 0.6">menu</v-icon>\n      </v-btn>\n    </template>\n    <v-btn\n      fab\n      depressed\n      color="white"\n      :style="{width:size*0.9+\'px\', height:size*0.9+\'px\'}"\n      @click.native.stop.prevent="shuffle"\n      @touchstart.native.stop.prevent="shuffle"\n    >\n      <v-icon :size="size * 0.55" color="red">casino</v-icon>\n    </v-btn>\n    <v-btn\n      fab\n      depressed\n      color="white"\n      :style="{width:size*0.9+\'px\', height:size*0.9+\'px\'}"\n      @click.native.stop.prevent="window.location.href = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf(\'/\')) + \'/algs.html\'"\n      @touchstart.native.stop.prevent="window.location.href = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf(\'/\')) + \'/algs.html\'"\n    >\n      <v-icon :size="size * 0.55" color="primary">school</v-icon>\n    </v-btn>\n    <v-btn\n      fab\n      depressed\n      color="white"\n      :style="{width:size*0.9+\'px\', height:size*0.9+\'px\'}"\n      @click.native.stop.prevent="tune=true;menu=false;"\n      @touchstart.native.stop.prevent="tune=true;menu=false;"\n    >\n      <v-icon :size="size * 0.55" color="primary">tune</v-icon>\n    </v-btn>\n    <v-btn\n      fab\n      depressed\n      color="white"\n      :style="{width:size*0.9+\'px\', height:size*0.9+\'px\'}"\n      @click.native.stop.prevent="window.location = \'https://gitee.com/huazhechen/cuber\'"\n      @touchstart.native.stop.prevent="window.location = \'https://gitee.com/huazhechen/cuber\'"\n    >\n      <v-icon :size="size * 0.55" color="primary">code</v-icon>\n    </v-btn>\n  </v-speed-dial>\n  <div v-resize="resize" style="background-color: #C0C0C0;user-select: none;">\n    <div ref="cuber"></div>\n    <div style="margin:0%;padding:0%;"><keyboard ref="keyboard"></keyboard></div>\n  </div>\n  <tune v-model="tune"></tune>\n</v-app>\n'},,,,,function(t,e,i){"use strict";i.r(e);var s=i(5),r=i(4),n=i(9),o=i(8),h=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends s.default{constructor(){super(...arguments),this.width=0,this.height=0,this.layers=0,this.operations=[["L","D","B","F","U","R","L'","D'","B'","F'","U'","R'"],["l","d","b","f","u","r","l'","d'","b'","f'","u'","r'"],["M","E","S","z","y","x","M'","E'","S'","z'","y'","x'"]],this.strips=[{},{U:[1,2,3,4,6,7,8,9],F:[1,2,3,4,6,7,9],R:[1,2,3,4,6,7,9],B:[1,2,3,4,6,7,9],L:[1,2,3,4,6,7,9],D:[1,3,7,9]},{U:[1,2,3,4,5,6,7,8,9],F:[1,2,3],R:[1,2,3],B:[1,2,3],L:[1,2,3]}],this.colors=0}strip(){this.colors=(this.colors+1)%this.strips.length,this.cuber.cube.strip(this.strips[this.colors])}get style(){return{margin:this.height/48+"px",width:this.height/32*9+"px",height:this.height/32*9+"px","min-width":"0%","min-height":"0%","text-transform":"none"}}get exps(){return this.operations[this.layers]}twist(t){this.cuber.cube.twister.twist(t)}reverse(){null!=this.cuber.cube.history.last&&this.cuber.cube.twister.twist(this.cuber.cube.history.last.value,!0,1,!1)}};h([Object(r.Inject)("cuber"),a("design:type",n.a)],c.prototype,"cuber",void 0),h([Object(r.Inject)("option"),a("design:type",o.a)],c.prototype,"option",void 0),c=h([Object(r.Component)({template:i(17)})],c);var l=c,u=i(12),d=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let v=class extends s.default{constructor(){super(),this.keyboard=new l,this.menu=!1,this.tune=!1,this.width=0,this.height=0,this.size=0,this.start=0,this.now=0;let t=document.createElement("canvas");this.cuber=new n.a(t),this.option=new o.a(this.cuber),this.cuber.cube.callbacks.push(()=>{this.cuber.cube.complete&&(this.option.lock=!0)})}get score(){let t=this.now-this.start,e=Math.floor(t/1e3/60);t%=6e4;let i=Math.floor(t/1e3);t%=1e3;let s=Math.floor(t/100);return(e>0?e+":":"")+(Array(2).join("0")+i).slice(-2)+"."+s+"/"+this.cuber.cube.history.moves}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.size=Math.min(this.width/8,this.height/14),this.cuber.width=this.width,this.cuber.height=this.height-4*this.size,this.cuber.resize();let t=this.$refs.cuber;t instanceof HTMLElement&&(t.style.width=this.width+"px",t.style.height=this.height-4*this.size+"px");let e=this.$refs.keyboard;e instanceof l&&(e.width=8*this.size-this.size/8,e.height=4*this.size)}mounted(){if(this.shuffle(),this.$refs.cuber instanceof Element){this.$refs.cuber.appendChild(this.cuber.canvas),this.$nextTick(this.resize)}this.loop()}loop(){requestAnimationFrame(this.loop.bind(this)),0==this.cuber.cube.history.moves?(this.start=0,this.now=0):(0==this.start&&(this.start=(new Date).getTime()),this.cuber.cube.complete||(this.now=(new Date).getTime())),this.cuber.render()}shuffle(){this.cuber.cube.twister.twist("*"),this.menu=!1,this.option.lock=!1,this.start=0,this.now=0}};d([Object(r.Provide)("cuber"),p("design:type",n.a)],v.prototype,"cuber",void 0),d([Object(r.Provide)("option"),p("design:type",o.a)],v.prototype,"option",void 0),v=d([Object(r.Component)({template:i(18),components:{keyboard:l,tune:u.a}}),p("design:paramtypes",[])],v);var g=v,f=(i(14),i(15),i(16),i(10)),b=i.n(f);s.default.use(b.a);const m=new b.a({});new s.default({vuetify:m,el:"#app",render:t=>t(g)})}]);