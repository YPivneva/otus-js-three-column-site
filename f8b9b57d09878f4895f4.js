function show(){const e=document.querySelector("#carousel__sliders").getElementsByTagName("div"),t=document.querySelector("#carousel__button").getElementsByTagName("p"),l=e.length;let s=parseInt(document.querySelector("#carousel").getAttribute("elem"),10);const o=setInterval((()=>{document.querySelector("#carousel").setAttribute("elem",s),s>0?(e[s-1].style.left="-600px",t[s-1].classList.remove("active"),e[s].style.left="0px",e[s].style.opacity="1",t[s].classList.add("active"),e[s-2]?(e[s-2].style.left="600px",e[s-2].style.opacity="0",t[s-2].classList.remove("active")):(e[s+l-3].style.left="600px",e[s+l-3].style.opacity="0",t[s+l-3].classList.remove("active"))):("0px"===e[l-1].style.left&&(e[l-1].style.left="-600px",t[l-1].classList.remove("active")),e[s].style.left="0px",e[s].style.opacity="1",t[s].classList.add("active"),e[s+l-3].style.left="600px",e[s+l-3].style.opacity="0",t[s+l-3].classList.remove("active")),s++,s===l&&(s=0)}),5e3);document.querySelector("#carousel").timer=o}function showSlide(){const e=parseInt(document.querySelector("#carousel").getAttribute("elem"),10);show(),document.querySelector("#carousel__sliders").getElementsByTagName("div")[e].style.transition="left 3s 0s linear"}function pauseSlide(){const e=document.querySelector("#carousel").timer,t=parseInt(document.querySelector("#carousel").getAttribute("elem"),10);document.querySelector("#carousel__sliders").getElementsByTagName("div")[t].style.transition="none",clearInterval(e)}function leftButtonSlide(){const e=parseInt(document.querySelector("#carousel").getAttribute("elem"),10),t=document.querySelector("#carousel__sliders").getElementsByTagName("div");let l=e-1;l<0&&(l=t.length-1,t[0].style.left="600px",t[0].style.opacity="0",t[0].style.transition="left 3s 0s linear"),document.querySelector("#carousel").setAttribute("elem",l),t[l].style.left="0px",t[l].style.opacity="1",t[l].style.transition="none",t[l+1]&&(t[l+1].style.left="600px",t[l+1].style.opacity="0",t[l+1].style.transition="left 3s 0s linear")}function rightButtonSlide(){const e=parseInt(document.querySelector("#carousel").getAttribute("elem"),10),t=document.querySelector("#carousel__sliders").getElementsByTagName("div"),l=t.length;let s=e+1;s===l&&(s=0,t[l-1].style.left="600px",t[l-1].style.opacity="0",t[l-1].style.transition="left 3s 0s linear"),document.querySelector("#carousel").setAttribute("elem",s),t[s].style.left="0px",t[s].style.opacity="1",t[s].style.transition="none",t[s-1]&&(t[s-1].style.left="600px",t[s-1].style.opacity="0",t[s-1].style.transition="left 3s 0s linear")}function buttonsSlide(e){const t=parseInt(e.target.getAttribute("id"),10),l=document.querySelector("#carousel__sliders").getElementsByTagName("div"),s=document.querySelector("#carousel__button").getElementsByTagName("p"),o=l.length;document.querySelector("#carousel").setAttribute("elem",t),l[t].style.left="0px",l[t].style.opacity="1",l[t].style.transition="none",s[t].classList.add("active");for(let e=0;e<t;e++)l[e].style.left="600px",l[e].style.opacity="0",l[e].style.transition="left 3s 0s linear",s[e].classList.remove("active");for(let e=t+1;e<o;e++)l[e].style.left="600px",l[e].style.opacity="0",l[e].style.transition="left 3s 0s linear",s[e].classList.remove("active")}function increase(){document.querySelector(".carousel").setAttribute("elem",0);const e=document.querySelector("#carousel__sliders").getElementsByTagName("div").length;for(let t=0;t<e;t++)document.querySelector("#carousel__button").innerHTML+=`<p id="${t}" class="carousel__point-button"></p>`;document.querySelector("#carousel").addEventListener("mouseover",pauseSlide,!1),document.querySelector("#carousel__button").addEventListener("click",buttonsSlide,!1),document.querySelector("#carousel__left").addEventListener("click",leftButtonSlide,!1),document.querySelector("#carousel__right").addEventListener("click",rightButtonSlide,!1),document.querySelector("#carousel").addEventListener("mouseout",showSlide,!1),show()}increase();