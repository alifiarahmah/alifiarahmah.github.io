function toggleSection(x){
	if(document.getElementById(x).classList.contains("active")){
		document.getElementById(x).classList.remove("active");
	} else{
		document.getElementById(x).classList.add("active");
	}
}