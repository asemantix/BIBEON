const menu=document.querySelector('.menu'),nav=document.querySelector('#navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
document.querySelector('#year').textContent=new Date().getFullYear();
const form=document.querySelector('#waitlist');
if(form){form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.message').textContent='Merci ! Reliez ce formulaire à Brevo, Mailchimp ou Shopify avant le lancement.';});}
