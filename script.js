function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    obj.innerText = Math.floor(progress * range + start);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

animateValue("stat1", 0, 250, 2000);
animateValue("stat2", 0, 1000, 2000);
animateValue("stat3", 0, 600, 2000);
animateValue("stat4", 0, 400, 2000);
animateValue("stat5", 0, 3000, 2000);
animateValue("stat6", 0, 1500, 2000);
animateValue("stat7", 0, 972, 2000);





const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active"); // toggle X animation
});


const textElement = document.getElementById("brandText");
const text = "NextEra TECH"; // 🔥 Animated part only
let index = 0;
let deleting = false;

function typeEffect() {
  if (!deleting && index <= text.length) {
    textElement.textContent = text.substring(0, index);
    index++;
  } else if (deleting && index >= 0) {
    textElement.textContent = text.substring(0, index);
    index--;
  }

  if (index === text.length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (index === -1) {
    deleting = false;
    index = 0;
  }

  const speed = deleting ? 100 : 150;
  setTimeout(typeEffect, speed);
}

typeEffect();



const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel .prev');
const nextBtn = document.querySelector('.carousel .next');
let current = 0;
const total = slides.length;

// Update slides with prev / active / next classes
function updateSlides(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove('prev','active','next');
    if(i===index) slide.classList.add('active');
    else if(i === (index-1+total)%total) slide.classList.add('prev');
    else if(i === (index+1)%total) slide.classList.add('next');
  });
}

// Initial setup
updateSlides(current);

// Next slide
function nextSlide(){
  current = (current+1)%total;
  updateSlides(current);
}

// Prev slide
function prevSlide(){
  current = (current-1+total)%total;
  updateSlides(current);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-scroll
setInterval(nextSlide, 4000);// Latest smooth scroll with ease-in-out
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const targetPos = target.offsetTop - 0 // adjust for navbar height if needed
    const startPos = window.scrollY;
    const distance = targetPos - startPos;
    const duration = 800; // ms
    let start = null;

    function animationScroll(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      // ease in-out cubic
      const ease = (t) => t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

      window.scrollTo(0, startPos + distance * ease(Math.min(progress / duration, 1)));

      if (progress < duration) requestAnimationFrame(animationScroll);
    }

    requestAnimationFrame(animationScroll);
  });
});



const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  let ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});


const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, i * 200); // Delay each card
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


