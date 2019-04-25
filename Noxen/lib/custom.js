var blue = anime({
  targets: '.dank',


  keyframes: [
    {translateX: 200,borderRadius: '0%',background: '#3d140e',},
    {translateY: 200,borderRadius: '50%',background: '#69201a',},
    {translateX: -200,borderRadius: '0%',background: '#debc36',},
    {translateY: 0,borderRadius: '50%',background: '#825b30',},
    {translateX: 0,borderRadius: '50%',background: '#0f253d',},
  ],
  duration: 10000,
  easing: 'easeOutElastic(1, .8)',

  
  loop: true

});
var blue = anime({
  targets: '.dank2',


  keyframes: [
    {translateX: 0,borderRadius: '0%',background: '#3d140e',},
    {translateY: 0,borderRadius: '0%',background: '#69201a',},
    {translateX: 0,borderRadius: '0%',background: '#debc36',},
    {translateY: 0,borderRadius: '0%',background: '#825b30',},
    {translateX: 0,borderRadius: '0%',background: '#0f253d',},
  ],
  duration: 10000,
  easing: 'easeOutElastic(1, .8)',

  
  loop: true

});

document.querySelector('.dank').onclick = blue.restart;
