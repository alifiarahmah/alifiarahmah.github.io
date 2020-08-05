function showSection(x){
	if(document.getElementById(x).style.display == "none"){
		document.getElementById(x).style.display = "block";
	} else{
		document.getElementById(x).style.display = "none";
	}
}

document.getElementById("about-section").addEventListener('click', toggleSection("about-section"));