function t(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,n=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new s(n,t,o)},a=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},v=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){const{get:o,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);i?.call(this,e),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(n)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of o){const o=document.createElement("style"),i=e.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=n.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:$).toAttribute(e,n.type);this._$Em=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const n=this.constructor,o=n._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=n.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=o;const s=i.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){const o=this.constructor,i=this[t];if(n??=o.getPropertyOptions(t),!((n.hasChanged??v)(i,e)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==i||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,m?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,A=w.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,z="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,O=document,k=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,j=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),Z=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,q=O.createTreeWalker(O,129);function V(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const n=t.length-1,o=[];let i,s=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<n;e++){const n=t[e];let a,c,l=-1,d=0;for(;d<n.length&&(r.lastIndex=d,c=r.exec(n),null!==c);)d=r.lastIndex,r===N?"!--"===c[1]?r=H:void 0!==c[1]?r=R:void 0!==c[2]?(D.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=j):void 0!==c[3]&&(r=j):r===j?">"===c[0]?(r=i??N,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?j:'"'===c[3]?L:B):r===L||r===B?r=j:r===H||r===R?r=N:(r=j,i=void 0);const h=r===j&&t[e+1].startsWith("/>")?" ":"";s+=r===N?n+P:l>=0?(o.push(a),n.slice(0,l)+z+n.slice(l)+S+h):n+S+(-2===l?e:h)}return[V(t,s+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class K{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,s=0;const r=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,n),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(z)){const e=l[s++],n=o.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:r[2],strings:n,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?nt:Y}),o.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:i}),o.removeAttribute(t));if(D.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let n=0;n<e;n++)o.append(t[n],k()),q.nextNode(),a.push({type:2,index:++i});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const n=O.createElement("template");return n.innerHTML=t,n}}function G(t,e,n=t,o){if(e===Z)return e;let i=void 0!==o?n._$Co?.[o]:n._$Cl;const s=T(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,n,o)),void 0!==o?(n._$Co??=[])[o]=i:n._$Cl=i),void 0!==i&&(e=G(t,i._$AS(t,e.values),i,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);q.currentNode=o;let i=q.nextNode(),s=0,r=0,a=n[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new X(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new ot(i,this,t)),this._$AV.push(e),a=n[++r]}s!==a?.index&&(i=q.nextNode(),s++)}return q.currentNode=O,o}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),T(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=K.createElement(V(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,o=0;for(const i of t)o===e.length?e.push(n=new X(this.O(k()),this.O(k()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(t,e=this,n,o){const i=this.strings;let s=!1;if(void 0===i)t=G(this,t,e,0),s=!T(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{const o=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=G(this,o[n+r],e,r),a===Z&&(a=this._$AH[r]),s||=!T(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+i[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends Y{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??F)===Z)return;const n=this._$AH,o=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==F&&(n===F||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const it=w.litHtmlPolyfillSupport;it?.(K,X),(w.litHtmlVersions??=[]).push("3.3.1");const st=globalThis;class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const o=n?.renderBefore??e;let i=o._$litPart$;if(void 0===i){const t=n?.renderBefore??null;o._$litPart$=i=new X(e.insertBefore(k(),t),t,void 0,n??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const at=st.litElementPolyfillSupport;at?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.1");const ct=t=>(e,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},dt=(t=lt,e,n)=>{const{kind:o,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),"accessor"===o){const{name:o}=n;return{set(n){const i=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,i,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=n;return function(n){const i=this[o];e.call(this,n),this.requestUpdate(o,i,t)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,n)=>"object"==typeof n?dt(t,e,n):((t,e,n)=>{const o=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),o?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}function pt(t){return ht({...t,state:!0,attribute:!1})}const ut="actron_air_esphome",ft="setpoint_temperature",gt="power",_t="cool",mt="heat",bt="auto_mode",$t="run",vt="fan_low",yt="fan_mid",xt="fan_high",wt="fan_cont",At="room",Et="timer",zt="inside",St="mode",Ct="fan",Pt="temp_up",Ot="temp_down",kt="timer",Tt="timer_up",Ut="timer_down",Mt=["Zone 1","Zone 2","Zone 3","Zone 4","Zone 5","Zone 6","Zone 7"],Nt=r`
  :host {
    --actron-card-bg: #e8e4d9;
    --actron-lcd-bg-start: #a8b5a0;
    --actron-lcd-bg-end: #8a9982;
    --actron-lcd-border: #666;
    --actron-lcd-text-active: #1a2e1a;
    --actron-lcd-text-inactive: #6a7a6a;
    --actron-button-bg: #f5f5f0;
    --actron-button-border: #999;
    --actron-button-text: #333;
    --actron-button-hover: #e8e8e3;
    --actron-power-bg: #d0d0d0;
    --actron-set-temp-bg: #888;
    --actron-zone-active: #d4e4d4;
    --actron-logo-colour: #1a3a5c;
  }

  ha-card {
    background: var(--actron-card-bg);
    border-radius: 8px;
    padding: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-gap: 6px;
    grid-template-areas:
      'lcd lcd lcd lcd lcd lcd lcd power'
      'mode mode logo logo logo logo fan fan'
      '. . . . . . . .'
      'temp-up temp-up set-temp set-temp timer timer timer-up timer-up'
      'temp-down temp-down set-temp set-temp . . timer-down timer-down'
      '. . . . . . . .'
      'zone1 zone1 zone1 zone1 zone2 zone2 zone2 zone2'
      'zone3 zone3 zone3 zone3 zone4 zone4 zone4 zone4';
  }

  /* LCD Display */
  .lcd {
    grid-area: lcd;
    background: linear-gradient(180deg, var(--actron-lcd-bg-start) 0%, var(--actron-lcd-bg-end) 100%);
    border: 2px solid var(--actron-lcd-border);
    border-radius: 4px;
    padding: 8px 12px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .lcd-temp {
    font-family: monospace;
    font-size: 36px;
    font-weight: bold;
    color: var(--actron-lcd-text-active);
    text-align: left;
  }

  .lcd-status {
    display: flex;
    gap: 12px;
    font-size: 10px;
    font-weight: bold;
    justify-content: flex-end;
  }

  .lcd-status span {
    color: var(--actron-lcd-text-inactive);
  }

  .lcd-status span.active {
    color: var(--actron-lcd-text-active);
  }

  .lcd-indicators {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .lcd-indicators span {
    font-size: 9px;
    font-weight: bold;
    color: var(--actron-lcd-text-inactive);
  }

  .lcd-indicators span.active {
    color: var(--actron-lcd-text-active);
  }

  /* Power Button */
  .power {
    grid-area: power;
    align-self: start;
  }

  .power button {
    background: var(--actron-power-bg);
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    height: 50px;
    width: 100%;
    cursor: pointer;
    font-size: 10px;
    font-weight: bold;
    color: var(--actron-button-text);
    line-height: 1.2;
  }

  .power button:hover {
    background: var(--actron-button-hover);
  }

  /* Mode Button */
  .mode {
    grid-area: mode;
  }

  /* Logo */
  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: var(--actron-logo-colour);
  }

  /* Fan Control */
  .fan {
    grid-area: fan;
  }

  /* Control Buttons */
  .control-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 40px;
    width: 100%;
    cursor: pointer;
    font-size: 9px;
    font-weight: bold;
    color: var(--actron-button-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.3;
  }

  .control-btn:hover {
    background: var(--actron-button-hover);
  }

  /* Temperature Buttons */
  .temp-up {
    grid-area: temp-up;
  }

  .temp-down {
    grid-area: temp-down;
  }

  .temp-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 30px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .temp-btn:hover {
    background: var(--actron-button-hover);
  }

  .temp-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .temp-btn.up ha-icon {
    color: #cc3333;
  }

  .temp-btn.down ha-icon {
    color: #3333aa;
  }

  /* Set Temp Label */
  .set-temp {
    grid-area: set-temp;
  }

  .set-temp-label {
    background: var(--actron-set-temp-bg);
    border-radius: 3px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: #222;
    line-height: 2;
    text-align: center;
  }

  /* Timer */
  .timer {
    grid-area: timer;
  }

  .timer-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 35px;
    width: 55px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    color: var(--actron-button-text);
  }

  .timer-btn:hover {
    background: var(--actron-button-hover);
  }

  /* Timer Up/Down */
  .timer-up {
    grid-area: timer-up;
  }

  .timer-down {
    grid-area: timer-down;
  }

  .timer-arrow {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 30px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timer-arrow:hover {
    background: var(--actron-button-hover);
  }

  .timer-arrow ha-icon {
    --mdc-icon-size: 20px;
    color: #888;
  }

  /* Zone Buttons */
  .zone {
    display: flex;
  }

  .zone1 {
    grid-area: zone1;
  }

  .zone2 {
    grid-area: zone2;
  }

  .zone3 {
    grid-area: zone3;
  }

  .zone4 {
    grid-area: zone4;
  }

  .zone-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 40px;
    width: 100%;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 0 8px;
  }

  .zone-btn:hover {
    background: var(--actron-button-hover);
  }

  .zone-btn.active {
    background: var(--actron-zone-active);
  }

  .zone-btn .zone-num {
    font-size: 14px;
    font-weight: bold;
    color: var(--actron-button-text);
    text-align: left;
  }

  .zone-btn .zone-name {
    font-size: 14px;
    color: var(--actron-button-text);
    text-align: right;
  }
`;let Ht=class extends rt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,n=e.dataset.configValue;if(!n)return;let o=e.value;"checkbox"===e.type?o=e.checked:"number"===e.type&&(o=parseInt(e.value,10));const i={...this._config,[n]:o};this._fireConfigChanged(i)}_zoneNameChanged(t,e){if(!this._config)return;const n=t.target,o=[...this._config.zones||[]];for(;o.length<=e;)o.push({name:Mt[o.length]});o[e]={name:n.value};const i={...this._config,zones:o};this._fireConfigChanged(i)}_fireConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){if(!this.hass||!this._config)return I``;const t=this._config.zone_count||4;return I`
      <div class="card-config">
        <div class="field">
          <label for="entity_prefix">Entity Prefix *</label>
          <input
            id="entity_prefix"
            type="text"
            .value=${this._config.entity_prefix||ut}
            data-config-value="entity_prefix"
            @input=${this._valueChanged}
          />
          <small>e.g., actron_air (creates sensor.actron_air_setpoint_temperature)</small>
        </div>

        <div class="field">
          <label for="name">Card Name</label>
          <input
            id="name"
            type="text"
            .value=${this._config.name||""}
            data-config-value="name"
            @input=${this._valueChanged}
          />
        </div>

        <div class="field checkbox">
          <input
            id="show_timer"
            type="checkbox"
            .checked=${!1!==this._config.show_timer}
            data-config-value="show_timer"
            @change=${this._valueChanged}
          />
          <label for="show_timer">Show Timer Controls</label>
        </div>

        <div class="field checkbox">
          <input
            id="show_zones"
            type="checkbox"
            .checked=${!1!==this._config.show_zones}
            data-config-value="show_zones"
            @change=${this._valueChanged}
          />
          <label for="show_zones">Show Zone Controls</label>
        </div>

        <div class="field">
          <label for="zone_count">Number of Zones (1-${7})</label>
          <input
            id="zone_count"
            type="number"
            min="1"
            max="${7}"
            .value=${String(t)}
            data-config-value="zone_count"
            @input=${this._valueChanged}
          />
        </div>

        <div class="zone-names">
          <label>Zone Names</label>
          ${Array.from({length:t},(t,e)=>{const n=this._config.zones?.[e]?.name||Mt[e];return I`
              <div class="zone-name-field">
                <span>Zone ${e+1}:</span>
                <input
                  type="text"
                  .value=${n}
                  @input=${t=>this._zoneNameChanged(t,e)}
                />
              </div>
            `})}
        </div>
      </div>
    `}};Ht.styles=r`
    .card-config {
      padding: 16px;
    }

    .field {
      margin-bottom: 16px;
    }

    .field label {
      display: block;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .field input[type='text'],
    .field input[type='number'] {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      font-size: 14px;
    }

    .field small {
      display: block;
      color: var(--secondary-text-color, #666);
      margin-top: 4px;
      font-size: 12px;
    }

    .field.checkbox {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .field.checkbox label {
      display: inline;
      margin-bottom: 0;
    }

    .zone-names {
      margin-top: 16px;
    }

    .zone-names > label {
      display: block;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .zone-name-field {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .zone-name-field span {
      min-width: 60px;
    }

    .zone-name-field input {
      flex: 1;
      padding: 6px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
    }
  `,t([ht({attribute:!1})],Ht.prototype,"hass",void 0),t([pt()],Ht.prototype,"_config",void 0),Ht=t([ct("actron-air-esphome-card-editor")],Ht),console.info("%c ACTRON-AIR-ESPHOME-CARD %c 0.1.0 ","color: white; background: #1a3a5c; font-weight: bold;","color: #1a3a5c; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"actron-air-esphome-card",name:"Actron Air ESPHome Card",description:"Control card for Actron Air systems via ESPHome"});let Rt=class extends rt{static async getConfigElement(){return document.createElement("actron-air-esphome-card-editor")}static getStubConfig(){return{entity_prefix:ut,zone_count:4}}setConfig(t){if(!t.entity_prefix)throw new Error("Please define entity_prefix");this._config={show_timer:!0,show_zones:!0,zone_count:4,...t}}getCardSize(){return 5}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(!e)return!0;const n=this._config.entity_prefix,o=[`sensor.${n}_${ft}`,`switch.${n}_${gt}`,`binary_sensor.${n}_${_t}`,`binary_sensor.${n}_${mt}`,`binary_sensor.${n}_${bt}`,`binary_sensor.${n}_${$t}`,`binary_sensor.${n}_${vt}`,`binary_sensor.${n}_${yt}`,`binary_sensor.${n}_${xt}`,`binary_sensor.${n}_${wt}`,`binary_sensor.${n}_${At}`,`binary_sensor.${n}_${Et}`],i=Math.min(this._config.zone_count||4,7);for(let t=1;t<=i;t++)o.push(`binary_sensor.${n}_zone_${t}`);return o.some(t=>e.states[t]!==this.hass.states[t])}_getState(){const t=this._config.entity_prefix,e=(e,n)=>{const o=`${e}.${t}_${n}`;return this.hass.states[o]?.state||"unknown"},n=(t,n)=>"on"===e(t,n);let o="off";n("binary_sensor",_t)?o="cool":n("binary_sensor",mt)?o="heat":n("binary_sensor",bt)&&(o="auto");let i="off";n("binary_sensor",xt)?i="high":n("binary_sensor",yt)?i="mid":n("binary_sensor",vt)&&(i="low");const s=Math.min(this._config.zone_count||4,7),r=[];for(let t=1;t<=s;t++)r.push(n("binary_sensor",`zone_${t}`));const a=`sensor.${t}_${ft}`,c=this.hass.states[a]?.state,l=c?parseFloat(c):0;return{power:n("switch",gt),temperature:l,mode:o,fanSpeed:i,fanContinuous:n("binary_sensor",wt),run:n("binary_sensor",$t),timer:n("binary_sensor",Et),room:n("binary_sensor",At),inside:n("binary_sensor",zt),zones:r}}_handlePowerToggle(){const t=`switch.${this._config.entity_prefix}_${gt}`;this.hass.callService("switch","toggle",{entity_id:t})}_handleButtonPress(t){const e=`button.${this._config.entity_prefix}_${t}`;this.hass.callService("button","press",{entity_id:e})}_handleZoneToggle(t){const e=`switch.${this._config.entity_prefix}_zone_${t}`;this.hass.callService("switch","toggle",{entity_id:e})}_renderLcd(t){const e=t.temperature?t.temperature.toFixed(1):"--";return I`
      <div class="lcd">
        <div class="lcd-temp">${e}&deg;</div>
        <div class="lcd-status">
          <span class="${t.power?"active":""}">ON</span>
          <span class="${t.power?"":"active"}">OFF</span>
          <span class="${t.room?"active":""}">ROOM</span>
        </div>
        <div class="lcd-indicators">
          <span class="${t.fanContinuous?"active":""}">CONT</span>
          <span class="${"high"===t.fanSpeed?"active":""}">HIGH</span>
          <span class="${"mid"===t.fanSpeed?"active":""}">MID</span>
          <span class="${"low"===t.fanSpeed?"active":""}">LOW</span>
          <span class="${"cool"===t.mode?"active":""}">COOL</span>
          <span class="${"auto"===t.mode?"active":""}">AUTO</span>
          <span class="${"heat"===t.mode?"active":""}">HEAT</span>
          <span class="${t.run?"active":""}">RUN</span>
          <span class="${t.timer?"active":""}">TIMER</span>
        </div>
      </div>
    `}_renderZones(t){const e=Math.min(this._config.zone_count||4,7),n=[];for(let o=0;o<e;o++){const e=o+1,i=t.zones[o]||!1,s=this._config.zones?.[o]?.name||Mt[o];n.push(I`
        <div class="zone zone${e}">
          <button
            class="zone-btn ${i?"active":""}"
            @click=${()=>this._handleZoneToggle(e)}
          >
            <span class="zone-num">${e}</span>
            <span class="zone-name">${s}</span>
          </button>
        </div>
      `)}return n}render(){if(!this._config||!this.hass)return I``;const t=this._getState(),e=!1!==this._config.show_timer,n=!1!==this._config.show_zones;return I`
      <ha-card>
        <div class="card-content">
          ${this._renderLcd(t)}

          <div class="power">
            <button @click=${this._handlePowerToggle}>
              ON<br />───<br />OFF
            </button>
          </div>

          <div class="mode">
            <button
              class="control-btn"
              @click=${()=>this._handleButtonPress(St)}
            >
              AUTO<br />HEAT / COOL
            </button>
          </div>

          <div class="logo">≋ ActronAir</div>

          <div class="fan">
            <button
              class="control-btn"
              @click=${()=>this._handleButtonPress(Ct)}
            >
              FAN<br />CONTROL
            </button>
          </div>

          <div class="temp-up">
            <button
              class="temp-btn up"
              @click=${()=>this._handleButtonPress(Pt)}
            >
              <ha-icon icon="mdi:triangle"></ha-icon>
            </button>
          </div>

          <div class="temp-down">
            <button
              class="temp-btn down"
              @click=${()=>this._handleButtonPress(Ot)}
            >
              <ha-icon icon="mdi:triangle-down"></ha-icon>
            </button>
          </div>

          <div class="set-temp">
            <div class="set-temp-label">
              SET<br /><br />TEMP
            </div>
          </div>

          ${e?I`
                <div class="timer">
                  <button
                    class="timer-btn"
                    @click=${()=>this._handleButtonPress(kt)}
                  >
                    TIMER
                  </button>
                </div>

                <div class="timer-up">
                  <button
                    class="timer-arrow"
                    @click=${()=>this._handleButtonPress(Tt)}
                  >
                    <ha-icon icon="mdi:triangle"></ha-icon>
                  </button>
                </div>

                <div class="timer-down">
                  <button
                    class="timer-arrow"
                    @click=${()=>this._handleButtonPress(Ut)}
                  >
                    <ha-icon icon="mdi:triangle-down"></ha-icon>
                  </button>
                </div>
              `:""}

          ${n?this._renderZones(t):""}
        </div>
      </ha-card>
    `}};Rt.styles=Nt,t([ht({attribute:!1})],Rt.prototype,"hass",void 0),t([pt()],Rt.prototype,"_config",void 0),Rt=t([ct("actron-air-esphome-card")],Rt);export{Rt as ActronAirEsphomeCard};
