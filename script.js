const loader = document.getElementById("loader");
const site = document.getElementById("site");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  loader.classList.add("hide");
  site.classList.remove("hidden");
  setTimeout(() => document.querySelectorAll(".reveal").forEach(el => observer.observe(el)), 150);
});

/* CHANGE THIS DATE/TIME FOR THE BIRTHDAY */
const birthdayDate = new Date("2026-10-24T20:00:00");

function updateTimer(){
  const now = new Date();
  let diff = birthdayDate - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  document.getElementById("days").textContent = String(days).padStart(2,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateTimer();
setInterval(updateTimer,1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("wishBtn").addEventListener("click",()=>{
  const wish = document.getElementById("wish");
  wish.textContent = "May 24 bring you everything your heart is wishing for. ✨";
});
