// Reveal once on normal scroll; replay after navigation reaches personalisation.
(()=>{
 const elements=[...document.querySelectorAll('.collection .reveal, .personalisation .reveal, .process .reveal, .showroom .reveal, .contact-section .reveal')];
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let observer=null,jumpTarget=null,jumpFrame=0;
 const clearElement=element=>{
  element.classList.remove('reveal-pending','is-revealed');
  element.style.removeProperty('--reveal-delay');
  element.querySelectorAll('.personal-photo, .showroom-photo').forEach(photo=>photo.classList.remove('image-waiting','image-revealed'));
 };
 const show=(element,delay=0)=>{
  if(element.classList.contains('is-revealed'))return;
  element.style.setProperty('--reveal-delay',`${delay}ms`);
  element.classList.remove('reveal-pending');
  element.classList.add('is-revealed');
  observer?.unobserve(element);
  element.querySelectorAll('.personal-photo, .showroom-photo').forEach(photo=>{
   const img=photo.querySelector('img');
   const ready=()=>{
    if(!element.classList.contains('is-revealed')||jumpTarget?.contains(element))return;
    photo.classList.remove('image-waiting');photo.classList.add('image-revealed');
   };
   if(img.complete)ready();
   else{photo.classList.add('image-waiting');img.addEventListener('load',ready,{once:true});img.addEventListener('error',ready,{once:true});}
  });
 };
 const visible=element=>{
  const box=element.getBoundingClientRect();
  return Math.max(0,Math.min(box.bottom,innerHeight-40)-Math.max(box.top,0))/Math.max(1,box.height)>=.24;
 };
 const prepareJump=target=>{
  if(!observer||motion.matches)return;
  cancelAnimationFrame(jumpFrame);jumpTarget=target;
  const targets=elements.filter(element=>target.contains(element));
  targets.forEach(element=>{clearElement(element);element.classList.add('reveal-pending');observer.observe(element);});
  const start=performance.now();let previousY=scrollY,lastMovement=start;
  const settle=now=>{
   if(Math.abs(scrollY-previousY)>.5){lastMovement=now;previousY=scrollY;}
   if((now-start>180&&now-lastMovement>140)||now-start>2200){
    jumpTarget=null;let index=0;
    targets.forEach(element=>{if(visible(element))show(element,index++*90);});
   }else jumpFrame=requestAnimationFrame(settle);
  };
  jumpFrame=requestAnimationFrame(settle);
 };
 const start=()=>{
  observer?.disconnect();observer=null;cancelAnimationFrame(jumpFrame);jumpTarget=null;
  elements.forEach(clearElement);
  if(motion.matches||!('IntersectionObserver' in window))return;
  observer=new IntersectionObserver(entries=>{
   let index=0;
   entries.forEach(entry=>{
    if(entry.isIntersecting&&entry.intersectionRatio>=.24&&!jumpTarget?.contains(entry.target))show(entry.target,index++*90);
   });
  },{threshold:.24,rootMargin:'0px 0px -40px 0px'});
  elements.forEach(element=>{
   if(element.getBoundingClientRect().top>=innerHeight)element.classList.add('reveal-pending');
   observer.observe(element);
  });
  if(['#personnalisation','#commande','#showroom','#projet'].includes(location.hash))prepareJump(document.querySelector(location.hash));
 };
 elements.forEach(element=>element.addEventListener('focusin',()=>show(element)));
 document.querySelectorAll('a[href="#personnalisation"], a[href="#showroom"]').forEach(link=>link.addEventListener('click',()=>prepareJump(document.querySelector(link.getAttribute('href')))));
 motion.addEventListener('change',start);
 start();
})();
