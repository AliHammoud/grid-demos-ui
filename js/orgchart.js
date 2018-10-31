window.addEventListener('load', function(){
  var subs = document.querySelectorAll('.sub');
  for (var i = 0; i < subs.length; i ++) {
    
    var rect = document.querySelector('.subordinate').getBoundingClientRect();
    
    subs[i].style.left = rect.left + (subs[i].offsetWidth * i) - subs[i].offsetWidth * i * 0.5 + 'px';
    subs[i].querySelector('img').src = '../img/people/sub-' + i + '.png';
  }
  
});