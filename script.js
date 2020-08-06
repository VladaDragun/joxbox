var menu = document.getElementById('mobile_menu');
var aside = document.getElementById('aside_menu');
var wave = document.getElementById('wave');

menu.onclick = function() {

  if(aside.style.display == 'flex') {
    aside.style.display = 'none';
    wave.style.display = 'block';
  }
  else {
    aside.style.display = 'flex';
    wave.style.display = 'none';
  }

}
