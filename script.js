const root=document.documentElement;
const toggle=document.getElementById("themeToggle");
const saved=localStorage.getItem("theme");
if(saved){root.dataset.theme=saved;toggle.textContent=saved==="light"?"☾":"☼";}
toggle.addEventListener("click",()=>{const next=root.dataset.theme==="light"?"dark":"light"; if(next==="dark") delete root.dataset.theme; else root.dataset.theme="light"; localStorage.setItem("theme",next); toggle.textContent=next==="light"?"☾":"☼";});
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
