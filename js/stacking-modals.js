window.addEventListener('load', function (e) {
  var single = document.querySelector('#trigger-single');

  single.addEventListener('click', function (e) {
    toggleModal();
  });

});

function toggleModal() {
  
  var single_modal = '\
    <div class="modal container centered dark hidden">\
      <div class="modal-window hidden">\
        <div class="modal-header container full-width">\
          <h1 class="modal-title">Modal Window Title</h1>\
          <img src="../img/Cross.svg" class="modal-close" onclick="toggleModal()">\
        </div>\
      </div>\
    </div>\
    ';
  
  function toggleVisibility() {
    document.querySelector('.modal.container').classList.toggle('hidden');
    document.querySelector('.modal-window').classList.toggle('hidden');
  }
  
  if (document.body.querySelector('.modal.container') == undefined){
    document.body.insertAdjacentHTML(
    'beforeend', single_modal);
    
    //hack: wait a bit for CSS transitions to work
    setTimeout(toggleVisibility, 100);
    
  } else {
    toggleVisibility();
    document.querySelector('.modal.container').addEventListener('webkitTransitionEnd', function(e){
      var modal = document.querySelector('.modal.container');
      if (modal) modal.parentNode.removeChild(modal);
    })
  }
  
}