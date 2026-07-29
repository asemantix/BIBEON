
const menu=document.querySelector('.menu'); const nav=document.querySelector('#navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.style.display==='flex'?false:true;nav.style.display=open?'flex':'none';nav.style.position='absolute';nav.style.right='20px';nav.style.top='64px';nav.style.flexDirection='column';nav.style.background='#fff';nav.style.padding='16px';nav.style.border='1px solid #ddd6cb';nav.style.borderRadius='16px';menu.setAttribute('aria-expanded',String(open));});}
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('waitlist'); if(form){form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.message').textContent='Merci ! Reliez ce formulaire à votre outil e-mailing avant la mise en ligne.';});}
