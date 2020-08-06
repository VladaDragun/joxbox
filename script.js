var menu = document.getElementById('mobile_menu');
var aside = document.getElementById('aside_menu');

menu.onclick = function() {

  if(aside.style.display == 'flex') {
    aside.style.display = 'none';
  }
  else {
    aside.style.display = 'flex';
  }

}
