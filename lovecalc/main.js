var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
	var rand = Math.ceil(Math.random() * 100);
	frame();
}

function frame() {
	document.getElementById("hasil").innerHTML = "";
	document.getElementById("label").innerHTML = "";
      if (width >= rand) {
        clearInterval(id);
        i = 0;
		document.getElementById("hasil").innerHTML = "Kalian " + rand + "% cocok!";
		document.getElementById("label").innerHTML = rand + "%";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
}
