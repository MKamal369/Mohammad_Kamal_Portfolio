document.querySelector(".menu").onclick=()=>document.querySelector("nav").classList.toggle("open");
document.querySelectorAll(".gh").forEach(a=>a.onclick=e=>{if(a.getAttribute("href")==="#"){
  e.preventDefault();
  alert("Replace this # with your real GitHub repository URL.");
}});
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add("visible");
  io.unobserve(e.target)}
}),{threshold:.08});

document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
document.getElementById("year").textContent=new Date().getFullYear();
