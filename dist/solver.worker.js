!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e,n){(function(t){(function(){var e,n,r,o,i,s,u,h,l,f,c,p,a,v,m,F,R,y,U,g,d,D,w,b,B,L,M,T,S,O,P,x,E,C,j,J;U=(E=[0,1,2,3,4,5])[0],y=E[1],v=E[2],i=E[3],R=E[4],e=E[5],M=(C=[0,1,2,3,4,5,6,7])[0],w=C[1],B=C[2],d=C[3],l=C[4],c=C[5],u=C[6],a=C[7],L=(j=[0,1,2,3,4,5,6,7,8,9,10,11])[0],D=j[1],b=j[2],g=j[3],p=j[4],h=j[5],f=j[6],s=j[7],F=j[8],m=j[9],n=j[10],r=j[11],(J=function(){var t,e,n,r,o,i;return o=function(t){return i(9)+t},n=function(t){return o(9)+t},e=function(t){return n(9)+t},r=function(t){return e(9)+t},t=function(t){return r(9)+t},[[4,13,22,31,40,49],[[(i=function(t){return t-1})(9),o(1),n(3)],[i(7),n(1),r(3)],[i(1),r(1),t(3)],[i(3),t(1),o(3)],[e(3),n(9),o(7)],[e(1),r(9),n(7)],[e(7),t(9),r(7)],[e(9),o(9),t(7)]],[[i(6),o(2)],[i(8),n(2)],[i(4),r(2)],[i(2),t(2)],[e(6),o(8)],[e(2),n(8)],[e(4),r(8)],[e(8),t(8)],[n(6),o(4)],[n(4),r(6)],[t(6),r(4)],[t(4),o(6)]]]}())[0],O=J[1],x=J[2],T=["U","R","F","D","L","B"],S=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],P=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],o=function(){var t,o,E;function C(t){null!=t?this.init(t):this.identity(),this.newCenter=function(){var t,e;for(e=[],t=0;t<=5;++t)e.push(0);return e}(),this.newCp=function(){var t,e;for(e=[],t=0;t<=7;++t)e.push(0);return e}(),this.newEp=function(){var t,e;for(e=[],t=0;t<=11;++t)e.push(0);return e}(),this.newCo=function(){var t,e;for(e=[],t=0;t<=7;++t)e.push(0);return e}(),this.newEo=function(){var t,e;for(e=[],t=0;t<=11;++t)e.push(0);return e}()}return C.prototype.init=function(t){return this.center=t.center.slice(0),this.co=t.co.slice(0),this.ep=t.ep.slice(0),this.cp=t.cp.slice(0),this.eo=t.eo.slice(0)},C.prototype.identity=function(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=function(){var t,e;for(e=[],t=0;t<=7;++t)e.push(0);return e}(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=function(){var t,e;for(e=[],t=0;t<=11;++t)e.push(0);return e}()},C.prototype.toJSON=function(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}},C.prototype.asString=function(){var t,e,n,r,o,i,s,u,h,l,f;for(f=[],n=r=0;r<=5;n=++r)f[9*n+4]=T[this.center[n]];for(n=o=0;o<=7;n=++o)for(t=this.cp[n],h=this.co[n],s=i=0;i<=2;s=++i)f[O[n][(s+h)%3]]=S[t][s];for(n=u=0;u<=11;n=++u)for(e=this.ep[n],h=this.eo[n],s=l=0;l<=1;s=++l)f[x[n][(s+h)%2]]=P[e][s];return f.join("")},C.fromString=function(t){var e,n,r,o,i,s,u,h,l,f,c,p,a,v;for(r=new C,o=s=0;s<=5;o=++s)for(i=u=0;u<=5;i=++u)t[9*o+4]===T[i]&&(r.center[o]=i);for(o=h=0;h<=7;o=++h){for(f=l=0;l<=2&&("U"!==(a=t[O[o][f]])&&"D"!==a);f=++l);for(e=t[O[o][(f+1)%3]],n=t[O[o][(f+2)%3]],i=c=0;c<=7;i=++c)e===S[i][1]&&n===S[i][2]&&(r.cp[o]=i,r.co[o]=f%3)}for(o=p=0;p<=11;o=++p)for(i=v=0;v<=11;i=++v){if(t[x[o][0]]===P[i][0]&&t[x[o][1]]===P[i][1]){r.ep[o]=i,r.eo[o]=0;break}if(t[x[o][0]]===P[i][1]&&t[x[o][1]]===P[i][0]){r.ep[o]=i,r.eo[o]=1;break}}return r},C.prototype.clone=function(){return new C(this.toJSON())},C.prototype.randomize=function(){var t,e,n;return n=function(t,e){return t+(Math.random()*(e-t+1)|0)},t=function(t){var e,r,o,i,s,u,h,l;for(l=[],e=r=0,s=(o=t.length-1)-2;0<=s?r<=s:r>=s;e=0<=s?++r:--r)e!==(i=n(e,o))?(u=[t[i],t[e]],t[e]=u[0],t[i]=u[1],l.push((h=[t[o-1],t[o]],t[o]=h[0],t[o-1]=h[1],h))):l.push(void 0);return l},e=function(t,e){var r,o,i,s;for(i=0,r=o=0,s=t.length-2;0<=s?o<=s:o>=s;r=0<=s?++o:--o)i+=t[r]=n(0,e-1);return t[t.length-1]=(e-i%e)%e},function(){return t(this.cp),t(this.ep),e(this.co,3),e(this.eo,2),this}}(),C.random=function(){return(new C).randomize()},C.prototype.isSolved=function(){var t,e,n,r,o,i,s;for((n=this.clone()).move(n.upright()),e=o=0;o<=5;e=++o)if(n.center[e]!==e)return!1;for(t=i=0;i<=7;t=++i){if(n.cp[t]!==t)return!1;if(0!==n.co[t])return!1}for(r=s=0;s<=11;r=++s){if(n.ep[r]!==r)return!1;if(0!==n.eo[r])return!1}return!0},C.prototype.centerMultiply=function(t){var e,n,r,o;for(o=n=0;n<=5;o=++n)e=t.center[o],this.newCenter[o]=this.center[e];return r=[this.newCenter,this.center],this.center=r[0],this.newCenter=r[1],this},C.prototype.cornerMultiply=function(t){var e,n,r,o,i;for(i=n=0;n<=7;i=++n)e=t.cp[i],this.newCp[i]=this.cp[e],this.newCo[i]=(this.co[e]+t.co[i])%3;return r=[this.newCp,this.cp],this.cp=r[0],this.newCp=r[1],o=[this.newCo,this.co],this.co=o[0],this.newCo=o[1],this},C.prototype.edgeMultiply=function(t){var e,n,r,o,i;for(i=n=0;n<=11;i=++n)e=t.ep[i],this.newEp[i]=this.ep[e],this.newEo[i]=(this.eo[e]+t.eo[i])%2;return r=[this.newEp,this.ep],this.ep=r[0],this.newEp=r[1],o=[this.newEo,this.eo],this.eo=o[0],this.newEo=o[1],this},C.prototype.multiply=function(t){return this.centerMultiply(t),this.cornerMultiply(t),this.edgeMultiply(t),this},C.moves=[{center:[0,1,2,3,4,5],cp:[d,M,w,B,l,c,u,a],co:[0,0,0,0,0,0,0,0],ep:[g,L,D,b,p,h,f,s,F,m,n,r],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[l,w,B,M,a,c,u,d],co:[2,0,0,1,1,0,0,2],ep:[F,D,b,g,r,h,f,s,p,m,n,L],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[w,c,B,d,M,l,u,a],co:[1,2,0,0,2,1,0,0],ep:[L,m,b,g,p,F,f,s,D,h,n,r],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[M,w,B,d,c,u,a,l],co:[0,0,0,0,0,0,0,0],ep:[L,D,b,g,h,f,s,p,F,m,n,r],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[M,B,u,d,l,w,c,a],co:[0,1,2,0,0,2,1,0],ep:[L,D,n,g,p,h,m,s,F,b,f,r],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[M,w,d,a,l,c,B,u],co:[0,0,1,2,0,0,2,1],ep:[L,D,b,r,p,h,f,n,F,m,g,s],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[U,v,R,i,e,y],cp:[M,w,B,d,l,c,u,a],co:[0,0,0,0,0,0,0,0],ep:[L,D,b,g,p,h,f,s,m,n,r,F],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,y,U,v,R,i],cp:[M,w,B,d,l,c,u,a],co:[0,0,0,0,0,0,0,0],ep:[L,g,b,s,p,D,f,h,F,m,n,r],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[R,U,v,y,i,e],cp:[M,w,B,d,l,c,u,a],co:[0,0,0,0,0,0,0,0],ep:[b,D,f,g,L,h,p,s,F,m,n,r],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],o={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},t={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},E=function(t){var e,n,r,i,s,u,h;if("string"==typeof t){for(h=[],e=0,n=(u=t.split(/\s+/)).length;e<n;e++)if(0!==(i=u[e]).length){if(i.length>2)throw new Error("Invalid move: "+i);if(void 0===(r=o[i[0]]))throw new Error("Invalid move: "+i);if(1===i.length)s=0;else if("2"===i[1])s=1;else{if("'"!==i[1])throw new Error("Invalid move: "+i);s=2}h.push(3*r+s)}return h}return null!=t.length?t:[t]},C.prototype.move=function(t){var e,n,r,o,i,s,u;for(n=0,o=(s=E(t)).length;n<o;n++)for(e=(i=s[n])/3|0,r=0,u=i%3;0<=u?r<=u:r>=u;0<=u?++r:--r)this.multiply(C.moves[e]);return this},C.prototype.upright=function(){var t,n,r,o,s,u;for(t=this.clone(),u=[],n=o=0;o<=5&&t.center[n]!==v;n=++o);switch(n){case i:u.push("x");break;case U:u.push("x'");break;case e:u.push("x2");break;case y:u.push("y");break;case R:u.push("y'")}for(u.length&&t.move(u[0]),r=s=0;s<=5&&t.center[r]!==U;r=++s);switch(r){case R:u.push("z");break;case y:u.push("z'");break;case i:u.push("z2")}return u.join(" ")},C.inverse=function(e){var n,r,o,i,s,u,h;if((u=function(){var t,r,o,u;for(u=[],t=0,r=(o=E(e)).length;t<r;t++)i=o[t],n=i/3|0,s=i%3,u.push(3*n-(s-1)+1);return u}()).reverse(),"string"==typeof e){for(h="",r=0,o=u.length;r<o;r++)i=u[r],h+=t[n=i/3|0],1===(s=i%3)?h+="2":2===s&&(h+="'"),h+=" ";return h.substring(0,h.length-1)}return null!=e.length?u:u[0]},C.moves.push((new C).move("R M' L'").toJSON()),C.moves.push((new C).move("U E' D'").toJSON()),C.moves.push((new C).move("F S B'").toJSON()),C.moves.push((new C).move("U E'").toJSON()),C.moves.push((new C).move("R M'").toJSON()),C.moves.push((new C).move("F S").toJSON()),C.moves.push((new C).move("D E").toJSON()),C.moves.push((new C).move("L M").toJSON()),C.moves.push((new C).move("B S'").toJSON()),C}(),void 0!==t&&null!==t?t.exports=o:this.Cube=o}).call(this)}).call(this,n(3)(t))},function(t,e,n){"use strict";n.r(e);n(2);var r=n(0),o=n.n(r);const i=self,s=new o.a;i.addEventListener("message",t=>{if("init"==t.data.action)o.a.initSolver(),i.postMessage({action:"init"});else if("random"==t.data.action){s.randomize();let t=s.solve();i.postMessage({action:"random",data:t})}})},function(t,e,n){(function(){var t,e,r,o,i,s,u,h,l,f,c,p,a,v,m,F,R,y,U,g,d,D,w,b,B,L,M,T,S,O,P,x,E,C=[].slice,j=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(U in r=this.Cube||n(0),(T=[0,1,2,3,4,5])[0],T[1],T[2],T[3],T[4],T[5],(S=[0,1,2,3,4,5,6,7])[1],S[2],S[3],S[4],S[6],i=S[7],f=(O=[0,1,2,3,4,5,6,7,8,9,10,11])[0],O[1],l=O[2],h=O[3],O[4],o=O[5],O[6],O[7],s=O[8],O[9],O[10],t=O[11],e=function(t,e){var n,r,o;if(t<e)return 0;for(e>t/2&&(e=t-e),o=1,n=t,r=1;n!==t-e;)o*=n,o/=r,n--,r++;return o},y=function(t){var e,n,r,o;for(e=1,n=r=2,o=t;2<=o?r<=o:r>=o;n=2<=o?++r:--r)e*=n;return e},g=function(t,e){return t>e?t:e},P=function(t,e,n){var r,o,i,s,u;for(u=t[e],r=o=i=e,s=n-1;i<=s?o<=s:o>=s;r=i<=s?++o:--o)t[r]=t[r+1];return t[n]=u},x=function(t,e,n){var r,o,i,s,u;for(u=t[n],r=o=i=n,s=e+1;i<=s?o<=s:o>=s;r=i<=s?++o:--o)t[r]=t[r-1];return t[e]=u},u={twist:function(t){var e,n,r,o,i,s;if(null!=t){for(i=0,e=n=6;n>=0;e=--n)o=t%3,t=t/3|0,this.co[e]=o,i+=o;return this.co[7]=(3-i%3)%3,this}for(s=0,e=r=0;r<=6;e=++r)s=3*s+this.co[e];return s},flip:function(t){var e,n,r,o,i,s;if(null!=t){for(i=0,e=n=10;n>=0;e=--n)o=t%2,t=t/2|0,this.eo[e]=o,i+=o;return this.eo[11]=(2-i%2)%2,this}for(s=0,e=r=0;r<=10;e=++r)s=2*s+this.eo[e];return s},cornerParity:function(){var t,e,n,r,o,s,u,h,l;for(l=0,t=n=o=i,s=c+1;o<=s?n<=s:n>=s;t=o<=s?++n:--n)for(e=r=u=t-1,h=c;u<=h?r<=h:r>=h;e=u<=h?++r:--r)this.cp[e]>this.cp[t]&&l++;return l%2},edgeParity:function(){var e,n,r,o,i,s,u,h,l;for(l=0,e=r=i=t,s=f+1;i<=s?r<=s:r>=s;e=i<=s?++r:--r)for(n=o=u=e-1,h=f;u<=h?o<=h:o>=h;n=u<=h?++o:--o)this.ep[n]>this.ep[e]&&l++;return l%2},URFtoDLF:(B=function(t,n,r,o){var i,s,u,h,l,f;return null==o&&(o=!1),u=y((h=r-n)+1),"corners"===t?(s=7,f="cp"):(s=11,f="ep"),l=function(){var t,e,n;for(n=[],i=t=0,e=h;0<=e?t<=e:t>=e;i=0<=e?++t:--t)n.push(0);return n}(),function(t){var c,p,a,v,m,F,R,y,U,g,d,D,w,b,B,L,M,T,S,O,E,C,j,J,N,k,z;if(null!=t){for(i=F=0,B=h;0<=B?F<=B:F>=B;i=0<=B?++F:--F)l[i]=i+n;for(p=t%u,c=t/u|0,U=this[f],i=R=0,L=s;0<=L?R<=L:R>=L;i=0<=L?++R:--R)U[i]=-1;for(v=y=1,M=h;1<=M?y<=M:y>=M;v=1<=M?++y:--y)for(m=p%(v+1),p=p/(v+1)|0;m>0;)x(l,0,v),m--;if(N=h,o)for(v=g=0,T=s;0<=T?g<=T:g>=T;v=0<=T?++g:--g)c-(a=e(s-v,N+1))>=0&&(U[v]=l[h-N],c-=a,N--);else for(v=C=S=s;S<=0?C<=0:C>=0;v=S<=0?++C:--C)c-(a=e(v,N+1))>=0&&(U[v]=l[N],c-=a,N--);return this}for(U=this[f],i=j=0,O=h;0<=O?j<=O:j>=O;i=0<=O?++j:--j)l[i]=-1;if(c=p=N=0,o)for(v=J=E=s;E<=0?J<=0:J>=0;v=E<=0?++J:--J)n<=(d=U[v])&&d<=r&&(c+=e(s-v,N+1),l[h-N]=U[v],N++);else for(v=k=0,D=s;0<=D?k<=D:k>=D;v=0<=D?++k:--k)n<=(w=U[v])&&w<=r&&(c+=e(v,N+1),l[N]=U[v],N++);for(v=z=b=h;b<=0?z<=0:z>=0;v=b<=0?++z:--z){for(m=0;l[v]!==n+v;)P(l,0,v),m++;p=(v+1)*p+m}return c*u+p}})("corners",c=S[0],S[5]),URtoUL:B("edges",f,l),UBtoDF:B("edges",h,o),URtoDF:B("edges",f,o),FRtoBR:B("edges",s,t,!0)})E=u[U],r.prototype[U]=E;v=function(t,e,n){var o,i,s,u,h,l,f,c,p,a,v;for(o="corners"===t?"cornerMultiply":"edgeMultiply",i=new r,v=[],s=l=0,a=n-1;0<=a?l<=a:l>=a;s=0<=a?++l:--l){for(i[e](s),u=[],h=c=0;c<=5;h=++c){for(f=r.moves[h],p=0;p<=2;++p)i[o](f),u.push(i[e]());i[o](f)}v.push(u)}return v},d=function(){var t,e;return t=new r,e=new r,function(n,r){var o,i;for(t.URtoUL(n),e.UBtoDF(r),o=i=0;i<=7;o=++i)if(-1!==t.ep[o]){if(-1!==e.ep[o])return-1;e.ep[o]=t.ep[o]}return e.URtoDF()}}(),r.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},D={twist:["corners",2187],flip:["edges",2048],FRtoBR:["edges",11880],URFtoDLF:["corners",20160],URtoDF:["edges",20160],URtoUL:["edges",1320],UBtoDF:["edges",1320],mergeURtoDF:[]},r.computeMoveTables=function(){var t,e,n,r,o,i,s,u;for(0===(u=1<=arguments.length?C.call(arguments,0):[]).length&&(u=function(){var t;for(n in t=[],D)t.push(n);return t}()),e=0,t=u.length;e<t;e++)s=u[e],null===this.moveTables[s]&&("mergeURtoDF"===s?this.moveTables.mergeURtoDF=function(){var t,e,n,r;for(r=[],e=n=0;n<=335;e=++n)r.push(function(){var n,r;for(r=[],t=n=0;n<=335;t=++n)r.push(d(e,t));return r}());return r}():(o=(r=D[s])[0],i=r[1],this.moveTables[s]=v(o,s,i)));return this},p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],w=function(){var t,e,n,r,o,i,s,u;for(u=[],e=n=0;n<=5;e=++n){for(r=[],t=o=0;o<=5;t=++o)if(t!==e&&t!==e-3)for(s=i=0;i<=2;s=++i)r.push(3*t+s);u.push(r)}return u}(),a=[0,1,2,4,7,9,10,11,13,16],b=function(){var t,e,n,r,o,i,s,u,h,l;for(l=[],e=r=0;r<=5;e=++r){for(o=[],t=i=0;i<=5;t=++i)if(t!==e&&t!==e-3)for(s=0,n=(h=0===t||3===t?[0,1,2]:[1]).length;s<n;s++)u=h[s],o.push(3*t+u);l.push(o)}return l}(),L=function(t,e,n){var r,o;return o=e>>3,r=e%8<<2,null!=n?(t[o]&=~(15<<r),t[o]|=n<<r,n):(t[o]&15<<r)>>>r},m=function(t,e,n,r){var o,i,s,u,h,l,f,c,v,m,F;for(F=function(){var t,n,r;for(r=[],t=0,n=Math.ceil(e/8)-1;0<=n?t<=n:t>=n;0<=n?++t:--t)r.push(4294967295);return r}(),f=1===t?p:a,L(F,0,i=0),s=1;s!==e;){for(u=l=0,m=e-1;0<=m?l<=m:l>=m;u=0<=m?++l:--l)if(L(F,u)===i)for(o=n(u),v=0,h=f.length;v<h;v++)c=r(o,f[v]),15===L(F,c)&&(L(F,c,i+1),s++);i++}return F},r.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},M={sliceTwist:[1,1082565,function(t){return[t%495,t/495|0]},function(t,e){var n,o,i;return o=t[0],i=t[1],n=r.moveTables.FRtoBR[24*o][e]/24|0,495*r.moveTables.twist[i][e]+n}],sliceFlip:[1,1013760,function(t){return[t%495,t/495|0]},function(t,e){var n,o,i;return i=t[0],n=t[1],o=r.moveTables.FRtoBR[24*i][e]/24|0,495*r.moveTables.flip[n][e]+o}],sliceURFtoDLFParity:[2,967680,function(t){return[t%2,(t/2|0)%24,(t/2|0)/24|0]},function(t,e){var n,o,i,s,u;return s=t[0],u=t[1],n=t[2],o=r.moveTables.parity[s][e],i=r.moveTables.FRtoBR[u][e],2*(24*r.moveTables.URFtoDLF[n][e]+i)+o}],sliceURtoDFParity:[2,967680,function(t){return[t%2,(t/2|0)%24,(t/2|0)/24|0]},function(t,e){var n,o,i,s,u;return s=t[0],u=t[1],n=t[2],o=r.moveTables.parity[s][e],i=r.moveTables.FRtoBR[u][e],2*(24*r.moveTables.URtoDF[n][e]+i)+o}]},r.computePruningTables=function(){var t,e,n,r,o,i;for(0===(i=1<=arguments.length?C.call(arguments,0):[]).length&&(i=function(){var t;for(n in t=[],M)t.push(n);return t}()),e=0,t=i.length;e<t;e++)o=i[e],null===this.pruningTables[o]&&(r=M[o],this.pruningTables[o]=m.apply(null,r));return this},r.initSolver=function(){return r.computeMoveTables(),r.computePruningTables()},r.prototype.solveUpright=function(t){var e,n,o,i,s,u,h,l,f;return null==t&&(t=22),o=function(){var t,e,n,r,o,i,s;for(e=["U","R","F","D","L","B"],i=["","2","'"],s=[],t=n=0;n<=5;t=++n)for(o=r=0;r<=2;o=++r)s.push(e[t]+i[o]);return s}(),e=function(){function t(t){this.parent=null,this.lastMove=null,this.depth=0,t&&this.init(t)}return t.prototype.init=function(t){return this.flip=t.flip(),this.twist=t.twist(),this.slice=t.FRtoBR()/24|0,this.parity=t.cornerParity(),this.URFtoDLF=t.URFtoDLF(),this.FRtoBR=t.FRtoBR(),this.URtoUL=t.URtoUL(),this.UBtoDF=t.UBtoDF(),this},t.prototype.solution=function(){return this.parent?this.parent.solution()+o[this.lastMove]+" ":""},t.prototype.move=function(t,e,n){return r.moveTables[t][e][n]},t.prototype.pruning=function(t,e){return L(r.pruningTables[t],e)},t.prototype.moves1=function(){return null!==this.lastMove?w[this.lastMove/3|0]:p},t.prototype.minDist1=function(){var t,e;return t=this.pruning("sliceFlip",495*this.flip+this.slice),e=this.pruning("sliceTwist",495*this.twist+this.slice),g(t,e)},t.prototype.next1=function(t){var e;return(e=n.pop()).parent=this,e.lastMove=t,e.depth=this.depth+1,e.flip=this.move("flip",this.flip,t),e.twist=this.move("twist",this.twist,t),e.slice=this.move("FRtoBR",24*this.slice,t)/24|0,e},t.prototype.moves2=function(){return null!==this.lastMove?b[this.lastMove/3|0]:a},t.prototype.minDist2=function(){var t,e,n,r;return n=2*(24*this.URtoDF+this.FRtoBR)+this.parity,t=this.pruning("sliceURtoDFParity",n),r=2*(24*this.URFtoDLF+this.FRtoBR)+this.parity,e=this.pruning("sliceURFtoDLFParity",r),g(t,e)},t.prototype.init2=function(t){if(null==t&&(t=!0),null!==this.parent)return this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),t?this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF):void 0},t.prototype.next2=function(t){var e;return(e=n.pop()).parent=this,e.lastMove=t,e.depth=this.depth+1,e.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,t),e.FRtoBR=this.move("FRtoBR",this.FRtoBR,t),e.parity=this.move("parity",this.parity,t),e.URtoDF=this.move("URtoDF",this.URtoDF,t),e},t}(),l=null,s=function(e){var n,r,o,s;for(n=0,s=[],n=r=1,o=t;(1<=o?r<=o:r>=o)&&(i(e,n),null===l);n=1<=o?++r:--r)s.push(n++);return s},i=function(t,e){var r,o,s,u,f,c,p;if(0===e){if(0===t.minDist1()&&(null===t.lastMove||(f=t.lastMove,j.call(a,f)<0)))return h(t)}else if(e>0&&t.minDist1()<=e){for(p=[],o=0,r=(c=t.moves1()).length;o<r&&(s=c[o],u=t.next1(s),i(u,e-1),n.push(u),null===l);o++)p.push(void 0);return p}},h=function(e){var n,r,o,i;for(e.init2(),i=[],n=r=1,o=t-e.depth;(1<=o?r<=o:r>=o)&&(u(e,n),null===l);n=1<=o?++r:--r)i.push(n++);return i},u=function(t,e){var r,o,i,s,h,f;if(0===e){if(0===t.minDist2())return l=t.solution()}else if(e>0&&t.minDist2()<=e){for(f=[],o=0,r=(h=t.moves2()).length;o<r&&(i=h[o],s=t.next2(i),u(s,e-1),n.push(s),null===l);o++)f.push(void 0);return f}},s(f=(n=function(){var n,r,o;for(o=[],n=0,r=t+1;0<=r?n<=r:n>=r;0<=r?++n:--n)o.push(new e);return o}()).pop().init(this)),n.push(f),l.length>0&&(l=l.substring(0,l.length-1)),l},R={U:0,R:1,F:2,D:3,L:4,B:5},F={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},r.prototype.solve=function(t){var e,n,o,i,s,u,h,l;for(null==t&&(t=22),l=(e=this.clone()).upright(),e.move(l),u=(new r).move(l).center,h=[],o=0,n=(s=e.solveUpright(t).split(" ")).length;o<n;o++)i=s[o],h.push(F[u[R[i[0]]]]),i.length>1&&(h[h.length-1]+=i[1]);return h.join(" ")},r.scramble=function(){return r.inverse(r.random().solve())}}).call(this)},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);