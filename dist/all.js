const title="Lorem ipsum",text="Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",desktop_img="./dist/img/desktop.jpg",mobile_img="./dist/img/mobile.jpg",createModal=()=>{const e=document.createElement("div"),t=(e.classList.add("modal"),e.setAttribute("id","modal-1"),e.setAttribute("aria-hidden",!0),document.createElement("div")),o=(t.classList.add("modal__overlay"),t.setAttribute("tabindex",-1),t.setAttribute("data-micromodal-close",!0),document.createElement("div")),n=(o.classList.add("modal__container"),o.setAttribute("role","dialog"),o.setAttribute("aria-modal",!0),o.setAttribute("aria-labelledby","modal-1-title"),document.createElement("button")),i=(n.classList.add("modal__close"),n.setAttribute("aria-label","Close modal"),n.setAttribute("data-micromodal-close",!0),n.style.backgroundColor="red",n.style.backgroundImage="./dist/img/x-icon.png",document.createElement("header")),a=document.createElement("h2"),r=(a.classList.add("modal__title"),a.setAttribute("id","modal-1-title"),a.innerText="Alert!",document.createElement("div")),l=(r.classList.add("modal__content"),r.setAttribute("id","modal-1-content"),document.createElement("button"));return l.classList.add("modal__clear"),i.appendChild(a),o.appendChild(n),o.appendChild(i),o.appendChild(r),o.appendChild(l),l.innerText="Wyzeruj licznik",t.appendChild(o),e.appendChild(t),e},clearButtonHandler=()=>{localStorage.setItem("numberOfClicks",0);let e=document.querySelector(".modal__content");e.innerHTML=`You have clicked <span>${localStorage.getItem("numberOfClicks")} times</span> to related button.`},checkAndWriteClickToLocalStorage=()=>{let e=localStorage.getItem("numberOfClicks"),t=document.querySelector(".modal__content");const o=document.querySelector(".modal__clear");o.classList.add("hidden"),e&&0!==Number(e)?(e++,localStorage.setItem("numberOfClicks",e),t.innerHTML=`You have clicked <span>${e} times</span> to related button.`):(localStorage.setItem("numberOfClicks",1),t.innerHTML="You have clicked <span>1 time</span> to related button."),5<=Number(e)&&(o.classList.remove("hidden"),o.addEventListener("click",()=>clearButtonHandler()))},onClickHandler=()=>{MicroModal.show("modal-1"),checkAndWriteClickToLocalStorage()},createContainer=()=>{return document.createElement("div")},createImage=(e,t,o,n)=>{const i=new Image;return i.alt=e||"",t&&(i.title=t),i.srcset=n+` 480w, ${o} 784w,`,i.sizes="(max-width: 1000px) 480px, 784px",i.src=""+n,i},createTitle=(e,t)=>{const o=document.createElement("h1");return o.setAttribute("aria-description","Nagłówek"),o.innerText=e||"",o.classList.add(t+"__title"),o},createContentText=(e,t)=>{const o=document.createElement("p");return o.setAttribute("aria-description","Zawartość paragrafu"),o.innerText=e||"",o.classList.add(t+"__content"),o},createButton=e=>{const t=document.createElement("button");return t.innerText="Button",t.classList.add(e+"__button"),t.setAttribute("aria-description","kliknij przycisk by otworzyć popup"),t.addEventListener("click",()=>onClickHandler()),t},createSection=(e,t,o,n,i,a,r)=>{const l=document.createElement("section"),d=(l.classList.add(e),createContainer());d.classList.add(e+"__left_container");n=createImage(n,i,a,r);const s=createContainer();s.classList.add(e+"__right_container");i=t?createTitle(t,e):createTitle("",e),a=o?createContentText(o,e):createContentText("",e),r=createButton(e),d.appendChild(n),s.appendChild(i),s.appendChild(a),s.appendChild(r),l.appendChild(d),l.appendChild(s),t=document.querySelector(".modal");return t||document.body.appendChild(createModal()),l},module=createSection("module",title,text,"alternatywny tekst","tytuł obrazka",desktop_img,mobile_img);function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e){if(e){if("string"==typeof e)return o(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}document.body.appendChild(module);n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function h(e){var o=e.targetModal,n=e.triggers,n=void 0===n?[]:n,i=e.onShow,i=void 0===i?function(){}:i,a=e.onClose,a=void 0===a?function(){}:a,r=e.openTrigger,r=void 0===r?"data-micromodal-trigger":r,l=e.closeTrigger,l=void 0===l?"data-micromodal-close":l,d=e.openClass,d=void 0===d?"is-open":d,s=e.disableScroll,s=void 0!==s&&s,c=e.disableFocus,c=void 0!==c&&c,u=e.awaitCloseAnimation,u=void 0!==u&&u,m=e.awaitOpenAnimation,m=void 0!==m&&m,e=e.debugMode,e=void 0!==e&&e;if(!(this instanceof h))throw new TypeError("Cannot call a class as a function");this.modal=document.getElementById(o),this.config={debugMode:e,disableScroll:s,openTrigger:r,closeTrigger:l,openClass:d,onShow:i,onClose:a,awaitCloseAnimation:u,awaitOpenAnimation:m,disableFocus:c},0<n.length&&this.registerTriggers.apply(this,t(n)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var o=h;return e(o.prototype,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];o.filter(Boolean).forEach(function(e){e.addEventListener("click",function(e){return t.showModal(e)})})}},{key:"showModal",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",function e(){t.modal.removeEventListener("animationend",e,!1),t.setFocusToFirstNode()},!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,e)}},{key:"closeModal",value:function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation?(t=this.config.openClass,this.modal.addEventListener("animationend",function e(){o.classList.remove(t),o.removeEventListener("animationend",e,!1)},!1)):o.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e,t,o=this;this.config.disableFocus||0!==(e=this.getFocusableNodes()).length&&(0<(t=e.filter(function(e){return!e.hasAttribute(o.config.closeTrigger)})).length&&t[0].focus(),0===t.length&&e[0].focus())}},{key:"retainFocus",value:function(e){var t,o=this.getFocusableNodes();0!==o.length&&(o=o.filter(function(e){return null!==e.offsetParent}),this.modal.contains(document.activeElement)?(t=o.indexOf(document.activeElement),e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),!e.shiftKey&&0<o.length&&t===o.length-1&&(o[0].focus(),e.preventDefault())):o[0].focus())}}]),h}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')),!t)return!0;for(var o in t)r(o);return!0};var n,i,a,r,s,l={init:function(e){var o,n,r=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),e=t(document.querySelectorAll("[".concat(r.openTrigger,"]"))),l=(o=r.openTrigger,n=[],e.forEach(function(e){var t=e.attributes[o].value;void 0===n[t]&&(n[t]=[]),n[t].push(e)}),n);if(!0!==r.debugMode||!1!==s(e,l))for(var d in l){var c=l[d];r.targetModal=d,r.triggers=t(c),a=new i(r)}},show:function(e,t){t=t||{};t.targetModal=e,!0===t.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(t)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}};"undefined"!=typeof window&&(window.MicroModal=l);export default l;