// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

// Tilt on bento
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`translateY(-4px) rotateX(${-y*6}deg) rotateY(${x*6}deg)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});
