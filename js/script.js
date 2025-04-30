$(function(){

})
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav > ul > li > a[data-sub]');
    const subs = {
      sub1: document.querySelector('.sub1'),
      sub2: document.querySelector('.sub2'),
      sub3: document.querySelector('.sub3')
    };
  
    menuLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetClass = link.getAttribute('data-sub');

        Object.values(subs).forEach(ul => { ul.style.display = 'none'; });
  
        const ul = subs[targetClass];
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  