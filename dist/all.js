const title="Lorem ipsum",text="Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",createModal=()=>{const e=document.createElement("div"),t=(e.classList.add("modal"),e.setAttribute("id","modal-1"),e.setAttribute("aria-hidden",!0),document.createElement("div")),n=(t.classList.add("modal__overlay"),t.setAttribute("tabindex",-1),t.setAttribute("data-micromodal-close",!0),document.createElement("div")),o=(n.classList.add("modal__container"),n.setAttribute("role","dialog"),n.setAttribute("aria-modal",!0),n.setAttribute("aria-labelledby","modal-1-title"),document.createElement("button")),a=(o.classList.add("modal__close"),o.setAttribute("aria-label","Close modal"),o.setAttribute("data-micromodal-close",!0),document.createElement("header")),i=document.createElement("h2"),r=(i.classList.add("modal__title"),i.setAttribute("id","modal-1-title"),i.innerText="Alert!",document.createElement("div")),l=(r.classList.add("modal__content"),r.setAttribute("id","modal-1-content"),document.createElement("button"));return l.classList.add("modal__clear"),a.appendChild(i),n.appendChild(o),n.appendChild(a),n.appendChild(r),n.appendChild(l),l.innerText="Wyzeruj licznik",t.appendChild(n),e.appendChild(t),e},clearButtonHandler=()=>{localStorage.setItem("numberOfClicks",0);let e=document.querySelector(".modal__content");e.innerHTML=`You have clicked <span>${localStorage.getItem("numberOfClicks")} times</span> to related button.`},checkAndWriteClickToLocalStorage=()=>{let e=localStorage.getItem("numberOfClicks"),t=document.querySelector(".modal__content");const n=document.querySelector(".modal__clear");n.classList.add("hidden"),e&&0!==Number(e)?(e++,localStorage.setItem("numberOfClicks",e),t.innerHTML=`You have clicked <span>${e} times</span> to related button.`):(localStorage.setItem("numberOfClicks",1),t.innerHTML="You have clicked <span>1 time</span> to related button."),5<=Number(e)&&(n.classList.remove("hidden"),n.addEventListener("click",()=>clearButtonHandler()))},onClickHandler=()=>{MicroModal.show("modal-1"),checkAndWriteClickToLocalStorage()},createContainer=()=>{return document.createElement("div")},createImage=(e,t)=>{const n=new Image;return n.alt=e||"",t&&(n.title=t),n.srcset=`../img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale, w_480.jpg 480w,
    ../img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg 784w`,n.sizes="(max-width: 1000px) 784px, 480px",n.src="../img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg",n},createTitle=(e,t)=>{const n=document.createElement("h1");return n.setAttribute("aria-description","Nagłówek"),n.innerText=e||"",n.classList.add(t+"__title"),n},createContentText=(e,t)=>{const n=document.createElement("p");return n.setAttribute("aria-description","Zawartość paragrafu"),n.innerText=e||"",n.classList.add(t+"__content"),n},createButton=e=>{const t=document.createElement("button");return t.innerText="Button",t.classList.add(e+"__button"),t.setAttribute("aria-description","kliknij przycisk by otworzyć popup"),t.addEventListener("click",()=>onClickHandler()),t},createSection=(e,t,n,o,a)=>{const i=document.createElement("section"),r=(i.classList.add(e),createContainer());r.classList.add(e+"__left_container");o=createImage(o,a);const l=createContainer();l.classList.add(e+"__right_container");a=t?createTitle(t,e):createTitle("",e),t=n?createContentText(n,e):createContentText("",e),n=createButton(e),r.appendChild(o),l.appendChild(a),l.appendChild(t),l.appendChild(n),i.appendChild(r),i.appendChild(l),e=document.querySelector(".modal");return e||document.body.appendChild(createModal()),i},module=createSection("module",title,text,"alternatywny tekst","tytuł obrazka");function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e){if(e){if("string"==typeof e)return o(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}document.body.appendChild(module);n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function h(e){var n=e.targetModal,o=e.triggers,o=void 0===o?[]:o,a=e.onShow,a=void 0===a?function(){}:a,i=e.onClose,i=void 0===i?function(){}:i,r=e.openTrigger,r=void 0===r?"data-micromodal-trigger":r,l=e.closeTrigger,l=void 0===l?"data-micromodal-close":l,s=e.openClass,s=void 0===s?"is-open":s,d=e.disableScroll,d=void 0!==d&&d,c=e.disableFocus,c=void 0!==c&&c,u=e.awaitCloseAnimation,u=void 0!==u&&u,m=e.awaitOpenAnimation,m=void 0!==m&&m,e=e.debugMode,e=void 0!==e&&e;if(!(this instanceof h))throw new TypeError("Cannot call a class as a function");this.modal=document.getElementById(n),this.config={debugMode:e,disableScroll:d,openTrigger:r,closeTrigger:l,openClass:s,onShow:a,onClose:i,awaitCloseAnimation:u,awaitOpenAnimation:m,disableFocus:c},0<o.length&&this.registerTriggers.apply(this,t(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var o=h;return e(o.prototype,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];n.filter(Boolean).forEach(function(e){e.addEventListener("click",function(e){return t.showModal(e)})})}},{key:"showModal",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",function e(){t.modal.removeEventListener("animationend",e,!1),t.setFocusToFirstNode()},!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,e)}},{key:"closeModal",value:function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation?(t=this.config.openClass,this.modal.addEventListener("animationend",function e(){n.classList.remove(t),n.removeEventListener("animationend",e,!1)},!1)):n.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e,t,n=this;this.config.disableFocus||0!==(e=this.getFocusableNodes()).length&&(0<(t=e.filter(function(e){return!e.hasAttribute(n.config.closeTrigger)})).length&&t[0].focus(),0===t.length&&e[0].focus())}},{key:"retainFocus",value:function(e){var t,n=this.getFocusableNodes();0!==n.length&&(n=n.filter(function(e){return null!==e.offsetParent}),this.modal.contains(document.activeElement)?(t=n.indexOf(document.activeElement),e.shiftKey&&0===t&&(n[n.length-1].focus(),e.preventDefault()),!e.shiftKey&&0<n.length&&t===n.length-1&&(n[0].focus(),e.preventDefault())):n[0].focus())}}]),h}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')),!t)return!0;for(var n in t)r(n);return!0};var n,i,a,r,s,l={init:function(e){var n,o,r=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),e=t(document.querySelectorAll("[".concat(r.openTrigger,"]"))),l=(n=r.openTrigger,o=[],e.forEach(function(e){var t=e.attributes[n].value;void 0===o[t]&&(o[t]=[]),o[t].push(e)}),o);if(!0!==r.debugMode||!1!==s(e,l))for(var d in l){var c=l[d];r.targetModal=d,r.triggers=t(c),a=new i(r)}},show:function(e,t){t=t||{};t.targetModal=e,!0===t.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(t)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}};"undefined"!=typeof window&&(window.MicroModal=l);export default l;