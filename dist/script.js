const hero=document.querySelector('.hero');
if(!matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(()=>hero.classList.add('enter'));
const dialog=document.querySelector('#detail');const content=document.querySelector('#dialog-content');let opener;
const menu=document.querySelector('#navigation-menu');const menuToggle=document.querySelector('.menu-toggle');
let menuOpen=false;
function setMenu(open,{restoreFocus=false}={}){
 menuOpen=open;
 menu.classList.toggle('is-open',open);
 menuToggle.setAttribute('aria-expanded',String(open));
 menuToggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
 menu.setAttribute('aria-hidden',String(!open));
 menu.inert=!open;
 if(restoreFocus)menuToggle.focus({preventScroll:true});
}
function closeMenu(){setMenu(false);}
menuToggle.addEventListener('click',()=>setMenu(!menuOpen));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuOpen){e.preventDefault();setMenu(false,{restoreFocus:true});}});
document.addEventListener('click',e=>{if(menuOpen&&!menu.contains(e.target)&&!menuToggle.contains(e.target)){
 const focusInMenu=menu.contains(document.activeElement);
 setMenu(false,{restoreFocus:focusInMenu});
}});
menu.addEventListener('focusout',()=>{queueMicrotask(()=>{
 if(menuOpen&&!menu.contains(document.activeElement)&&document.activeElement!==menuToggle)setMenu(false);
});});
matchMedia('(min-width:1180px)').addEventListener('change',e=>{if(e.matches){
 const focusInMenu=menu.contains(document.activeElement)||document.activeElement===menuToggle;
 closeMenu();if(focusInMenu)document.querySelector('.brand').focus({preventScroll:true});
}});
const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
function openPanel(name,button){opener=menu.contains(button)?menuToggle:button;closeMenu();content.innerHTML=name==='model'?'<img src="assets/hero.webp" alt="Canapé Soma rouille"><h2 style="margin-top:20px">Soma</h2><p>Un canapé compact, à personnaliser selon les possibilités du modèle.</p><p>À partir de <strong>390 000 FCFA</strong></p><p class="small">Le devis confirme le prix selon les options. Visuel illustratif du projet fictif.</p><button class="button" id="to-contact">Parlons de mon projet '+arrow+'</button>':name==='personalize'?'<h2>À votre mesure</h2><p>Dimensions et configuration, tissus et couleurs, finitions : explorons les possibilités de votre modèle.</p><p class="small">Les options et leur compatibilité sont confirmées avant fabrication.</p><button class="button" id="to-contact">Parlons de mes envies '+arrow+'</button>':name==='showroom'?'<h2>Le showroom</h2><p>À Ouakam, Dakar, découvrez les matières et essayez les assises. Rendez-vous conseillé.</p><button class="button" id="to-contact">Demander un rendez-vous '+arrow+'</button>':(name==='visit'?'<h2>Planifier ma visite</h2><p>Rencontrons-nous à Ouakam, Dakar. Laissez vos coordonnées pour préparer votre rendez-vous.</p>':'<h2>Et chez vous ?</h2><p>Un modèle en tête, une envie à préciser ?</p>')+'<form><label for="name">Votre nom</label><input id="name" name="name" autocomplete="name" required><label for="contact">Téléphone ou e-mail</label><input id="contact" name="contact" required><button class="button" type="submit">Prévisualiser ma demande '+arrow+'</button><p class="small" role="status">Démonstration : aucune demande ne sera envoyée.</p></form>';content.querySelector('h2').id='panel-title';if(!dialog.open)dialog.showModal();else dialog.querySelector('.close').focus();content.querySelector('#to-contact')?.addEventListener('click',()=>openPanel('contact',opener));content.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();content.querySelector('[role="status"]').textContent='Simulation terminée. Aucune donnée n’a été envoyée.'})}
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openPanel(b.dataset.open,b)));
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>opener?.focus());

// Collection navigation keeps the header disclosure and focus in sync.
menu.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
 closeMenu();
 document.querySelector(link.getAttribute('href'))?.focus({preventScroll:true});
}));
const collectionProducts={
 soma:{name:'Soma',price:'390 000',description:'Un format compact pour les salons de taille modérée.',alt:'Canapé Soma beige aux accoudoirs arrondis.'},
 ligne:{name:'Ligne',price:'580 000',description:'Une silhouette épurée et des accoudoirs fins.',alt:'Canapé Ligne olive sur une structure en bois.'},
 angle:{name:'Angle',price:'890 000',description:'Une assise généreuse, avec un angle gauche ou droit selon la configuration.',alt:'Canapé Angle beige avec méridienne.'}
};
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.product,p=collectionProducts[key];
 opener=button;closeMenu();
 content.innerHTML=`<img src="assets/${key}-hd.webp" width="1280" height="853" alt="${p.alt}" style="height:auto"><h2 id="panel-title" style="margin-top:20px">${p.name}</h2><p>${p.description}</p><p>À partir de <strong>${p.price} FCFA</strong></p><p class="small">Le devis confirme le prix selon les options. Visuel illustratif du projet fictif.</p><button class="button" id="to-contact">Parlons de mon projet ${arrow}</button>`;
 dialog.showModal();
 content.querySelector('#to-contact').addEventListener('click',()=>openPanel('contact',button));
}));
document.querySelector('[data-catalog]').addEventListener('click',event=>{
 opener=event.currentTarget;closeMenu();
 const products=[['Soma','390 000'],['Ligne','580 000'],['Angle','890 000'],['Horizon','1 250 000'],['Conversation','1 450 000'],['Modulo','1 650 000'],['Noma','220 000'],['Pivot','350 000'],['Volume','420 000']];
 content.innerHTML='<h2 id="panel-title">Les 9 modèles</h2><p class="small">Prix de départ · Le devis confirme les options.</p><ul class="catalog-list">'+products.map(([name,price])=>`<li><span>${name}</span><span>À partir de ${price}&nbsp;FCFA</span></li>`).join('')+'</ul>';
 dialog.showModal();
});

// The footer describes the prototype without inventing a business identity.
document.querySelector('[data-legal]').addEventListener('click',event=>{
 opener=event.currentTarget;closeMenu();
 content.innerHTML='<h2 id="panel-title">Mentions légales</h2><p>Forme Libre est une marque fictive présentée dans un projet de démonstration NextStep. Les produits, visuels et informations commerciales illustrent ce scénario.</p><p>Les formulaires simulent une prise de contact : aucune demande ni commande n’est envoyée.</p>';
 dialog.showModal();
});

// This frontend prototype validates locally and never transmits form values.
document.querySelector('#project-form').addEventListener('submit',event=>{
 event.preventDefault();
 document.querySelector('#project-status').textContent='Démonstration terminée : aucune demande n’a été envoyée.';
});
