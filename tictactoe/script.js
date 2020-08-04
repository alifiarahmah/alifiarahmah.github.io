var turn = "o";

function bleh(x,y){
    if(turn == "o"){
        document.getElementById("b" + x + "s" + y).innerHTML = "o";
        turn = "x";
        document.getElementById("bleh").innerHTML = "Turn: " + turn;
        document.getElementById("b" + x + "s" + y).removeAttribute("onclick");
        document.getElementById("b" + x + "s" + y).style.cursor = "default";
    } else if(turn == "x"){
        document.getElementById("b" + x + "s" + y).innerHTML = "x";
        turn = "o";
        document.getElementById("bleh").innerHTML = "Turn: " + turn;
        document.getElementById("b" + x + "s" + y).removeAttribute("onclick");
        document.getElementById("b" + x + "s" + y).style.cursor = "default";
    }
    checkwin();
}

function checkwin(){

}

function reset(){
    turn = "o";
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            document.getElementById("b" + i + "s" + j).innerHTML = "";
            document.getElementById("b" + i + "s" + j).style.cursor = "pointer";
            document.getElementById("b" + i + "s" + j).addEventListener("click", () => {
                bleh(i,j);
            });
            //document.getElementById("reset").setAttribute("onclick", "bleh(" + i + "," + j + ")");
        }
    }
    document.getElementById("bleh").innerHTML = "Turn: " + turn;
}
