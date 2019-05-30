import anime from 'animejs'

window.addEventListener('DOMContentLoaded', e => {

  const abt = document.querySelector('.about')

    abt.addEventListener("click",  e=>{
      console.log(abt)
      abt.innerHTML = ``
    })

    anime({
      targets: 'div',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    });


    console.log('DOM fully loaded and parsed');
});
