"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{4688:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(7294),i=n(6010),s=n(9960),a=n(2263),l=n(7961),o=n(7462);const c={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},h=[{title:"",description:r.createElement(r.Fragment,null)},{title:"",description:r.createElement(r.Fragment,null)}];function g(e){let{Svg:t,title:n,description:s}=e;return r.createElement("div",{className:(0,i.Z)("col col--4")},r.createElement("div",{className:"text--center"}),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,n),r.createElement("p",null,s)))}function u(){return r.createElement("section",{className:c.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},h.map(((e,t)=>r.createElement(g,(0,o.Z)({key:t},e)))))))}const m={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};n(4996);const f=n.p+"assets/images/mask-b9fba5074d0a51f79b69a6fe005ca05c.jpg",E=n.p+"assets/images/fumaca-1934aa47770dd85847de43aeeab8063c.png";function d(){const{siteConfig:e}=(0,a.Z)();return(0,r.useEffect)((()=>{!async function(){const[e,t]=await Promise.all([_(f),_(E)]),n=new T(document.querySelector("canvas")),{gl:r}=n;n.init("\n      precision mediump float;\n\n      attribute vec2 aPosition;\n      attribute vec2 aUV;\n      \n      varying vec2 vUV;\n      varying vec2 vPos;\n      \n      void main() {\n          gl_Position = vec4(aPosition, 0.0, 1.0);\n          vUV = aUV;\n          vPos = aPosition;\n      }\n      ","\n      precision mediump float;\n      \n      uniform sampler2D uTexture1;\n      uniform sampler2D uTexture2;\n      \n      uniform float uVar;\n      \n      varying vec2 vUV;\n      varying vec2 vPos;\n      \n      \n      float random (vec2 st) {\n          return fract(sin(dot(st.xy,vec2(12.9898,78.233)))* 43758.5453123);\n      }\n      \n      void main() {\n          vec4 color1 = texture2D(uTexture1, vUV);\n          vec4 color2 = texture2D(uTexture2, vUV);\n          vec4 color3 = vec4(vec3(random(vUV)), 1.);\n      \n          if (color2.r - uVar < 0.0) {\n              discard;\n          }\n      \n          gl_FragColor = color1;\n      }\n     ").loadBuffer(new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,-1,-1,0,0,1,-1,1,0,1,1,1,1])).setAttrib("aPosition",2,r.FLOAT,!1,16,0).setAttrib("aUV",2,r.FLOAT,!1,16,8).loadTexture(e).setUniform("uTexture1","uniform1i",0).loadTexture(t).setUniform("uTexture2","uniform1i",1);let i=0,s=!1;!function e(){const t=r.getUniformLocation(n.program,"uVar");r.uniform1f(t,s?i-=.01:i+=.01),i>=1&&(s=!0);i<=0&&(s=!1);n.draw(n.gl.TRIANGLES,6),requestAnimationFrame(e)}()}()}),[]),r.createElement("header",{className:(0,i.Z)(m.heroBanner)},r.createElement("div",{className:"container"},r.createElement("canvas",{width:"500",height:"500",style:{borderRadius:"50%"}}),r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:m.buttons},r.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Let the hunt begin"))))}function v(){const{siteConfig:e}=(0,a.Z)();return r.createElement(l.Z,{title:`${e.title}`,description:"Description will go into a meta tag in <head />"},r.createElement(d,null),r.createElement("main",null,r.createElement(u,null)))}console.log(f);class T{gl;program;vs;fs;buffer;textures=[];constructor(e){if(e instanceof HTMLCanvasElement)return this.gl=e.getContext("webgl"),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this;throw new Error("please pass canvas element")}init(e,t){const n=this.vs=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(n,e),this.gl.compileShader(n);const r=this.fs=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(r,t),this.gl.compileShader(r);const i=this.program=this.gl.createProgram();return this.gl.attachShader(i,n),this.gl.attachShader(i,r),this.gl.linkProgram(i),this.gl.useProgram(i),this}loadBuffer(e){const t=this.buffer=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,e,this.gl.STATIC_DRAW),this}loadTexture(e){const t=this.gl.createTexture();return this.gl.activeTexture(this.gl["TEXTURE"+this.textures.length]),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.textures.push(t),this}setAttrib(e,t,n,r,i,s){const a=this.gl.getAttribLocation(this.program,e);return this.gl.vertexAttribPointer(a,t,n,r,i,s),this.gl.enableVertexAttribArray(a),this}setUniform(e,t,n){const r=this.gl.getUniformLocation(this.program,e);return this.gl[t](r,n),this}draw(e,t){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(e,0,t)}then(e){return e.call(this),this}}function _(e){return new Promise((t=>{const n=new Image;n.src=e,n.onload=function(){t(n)}}))}}}]);