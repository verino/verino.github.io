  var menuTop = document.getElementById('cbp-spmenu-s3'),
    showTop = document.getElementById('showTop'),
    body = document.body;
  showTop.onclick = function() {
    classie.toggle(this, 'btn-menu-open');
    classie.toggle(menuTop, 'cbp-spmenu-open');
    disableOther('showTop');
  };

  function disableOther(button) {
    if (button !== 'showTop') {
      classie.toggle(showTop, 'disabled');
    }
  };