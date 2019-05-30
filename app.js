import anime from 'lib/anime.es.js';

window.addEventListener('DOMContentLoaded', e => {

  const abt = document.querySelector('.about')

    abt.addEventListener("click",  e=>{
      console.log(abt)
      abt.innerHTML = ``
    })



    console.log('DOM fully loaded and parsed');
});
