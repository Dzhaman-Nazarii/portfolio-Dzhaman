const e=document.querySelectorAll(".slider-img"),t=document.querySelector(".prev"),c=document.querySelector(".next");let l=0;function n(t){e.forEach((e=>e.classList.remove("active"))),e[t].classList.add("active"),l=t}t.addEventListener("click",(()=>{let t=l-1;t<0&&(t=e.length-1),n(t)})),c.addEventListener("click",(()=>{let t=l+1;t>=e.length&&(t=0),n(t)})),n(l);
//# sourceMappingURL=index.2d24b80e.js.map
