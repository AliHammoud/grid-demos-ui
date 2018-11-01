window.addEventListener('load', function(){
  var subs = document.querySelectorAll('.sub');
  
  var subhover = document.querySelector('#sub-label');
  
  for (var i = 0; i < subs.length; i ++) {
    
    var rect = document.querySelector('.subordinate').getBoundingClientRect();
    
    subs[i].addEventListener('mouseover', function(e){
      subhover.classList.add('visible');
      subhover.classList.remove('hidden');
      var cur = this.getBoundingClientRect();
      subhover.style.left = (cur.left + 75) + 'px';
      subhover.style.top = (cur.top - 45) + 'px';
    });
    
    subs[i].addEventListener('mouseout', function(e){
      subhover.classList.remove('visible');
      subhover.classList.add('hidden');
    });
    
    subs[i].style.left = rect.left + (subs[i].offsetWidth * i) - subs[i].offsetWidth * i * 0.5 + 'px';
    subs[i].querySelector('img').src = '../img/people/sub-' + i + '.png';
  }
  
  
});