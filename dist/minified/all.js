for(var header=document.getElementById("list-items"),items=header.getElementsByClassName("menu__items"),i=0;i<items.length;i++)items[i].addEventListener("click",(function(){var e=document.getElementsByClassName("active-item");e[0].className=e[0].className.replace(" active-item",""),this.className+=" active-item"}));const showAndHide=document.getElementsByClassName("showAndHide");function showsOne(e){Array.from(showAndHide).forEach(t=>{t.id==e?t.style.display="block":t.style.display="none"})}function Slider(e){if(!(e instanceof Element))throw new Error("No slider passed in");let t,s,i;const n=e.querySelector(".slider__slides"),l=e.querySelector(".controls__prev"),r=e.querySelector(".controls__next");function c(){s.classList.add("current"),t.classList.add("prev"),i.classList.add("next")}function o(e){const l=["prev","current","next"];t.classList.remove(...l),s.classList.remove(...l),i.classList.remove(...l),[t,s,i]="back"===e?[t.previousElementSibling||n.lastElementChild,t,s]:[s,i,i.nextElementSibling||n.firstElementChild],c()}s=e.querySelector(".current")||n.firstElementChild,t=s.previousElementSibling||n.lastElementChild,i=s.nextElementSibling||n.firstElementChild,console.log({current:s,prev:t,next:i}),c(),l.addEventListener("click",()=>o("back")),r.addEventListener("click",o)}const mySlider=Slider(document.querySelector(".slider"));