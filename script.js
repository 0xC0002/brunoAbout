const title="Olá! Sou Bruno Antunes, apaixonado por tecnologia, dados e inovação.";
const target=document.getElementById("typewriter");let i=0;
function type(){if(!target||i>title.length)return;target.textContent=title.slice(0,i++);setTimeout(type,i<title.length?42:0)}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
function progress(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector(".progress-bar").style.width=`${max?scrollY/max*100:0}%`}
const root=document.documentElement,toggle=document.getElementById("themeToggle"),saved=localStorage.getItem("bruno-theme");
function setTheme(theme){const dark=theme==="dark";root.dataset.theme=dark?"dark":"light";toggle.setAttribute("aria-label",dark?"Ativar modo claro":"Ativar modo escuro");toggle.setAttribute("aria-pressed",dark);toggle.innerHTML=dark?'<i class="bi bi-sun-fill"></i>':'<i class="bi bi-moon-stars-fill"></i>';localStorage.setItem("bruno-theme",theme)}
setTheme(saved==="dark"?"dark":"light");toggle.addEventListener("click",()=>setTheme(root.dataset.theme==="dark"?"light":"dark"));
addEventListener("scroll",progress,{passive:true});type();progress();
