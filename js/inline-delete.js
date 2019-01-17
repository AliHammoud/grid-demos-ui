window.addEventListener('load', function () {
  var action        = document.querySelector('.action');
  var confirmation  = document.querySelector('.confirmation');
  var confirm       = document.querySelector('.confirm');
  
  action.addEventListener('click', function(e){
    confirmation.classList.remove('hidden-a');
    action.classList.add('hidden-b');
  });
  
  confirm.addEventListener('click', function(e){
    action.classList.remove('hidden-b');
    confirmation.classList.add('hidden-a');
  });

});