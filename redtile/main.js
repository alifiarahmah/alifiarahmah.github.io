var counter = 0;
var kiri, kanan, atas, bawah;

function sekitar(a,b){
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            if(parseInt(a) > 1){
                atas = String(parseInt(a) - 1);
            } else{
                atas = null;
            }
            if(parseInt(a) < 3){
                bawah = String(parseInt(a) + 1);
            } else{
                bawah = null;
            }
            if(parseInt(b) > 1){
                kiri = String(parseInt(b) - 1);
            } else{
                kiri = null;
            }
            if(parseInt(b) < 3){
                kanan = String(parseInt(b) + 1);
            } else{
                kanan = null;
            }
        }
    }
}

function changeColor(x,y){
    if(document.getElementById("id"+x+y).style.backgroundColor != "red"){
        document.getElementById("id"+x+y).style.backgroundColor = "red";
        counter += 1;
    } else{
        document.getElementById("id"+x+y).style.backgroundColor = "blue";
        counter -= 1;
    }
}

function puzzle(a,b){
    sekitar(a,b);
    changeColor(a,b);
    if(kiri !== null){
        changeColor(a,kiri);
    }
    if(kanan !== null){
        changeColor(a,kanan);
    }
    if(atas !== null){
        changeColor(atas,b);
    }
    if(bawah !== null){
        changeColor(bawah,b);
    }

    if(counter == 9){
        document.getElementById("win").innerHTML = "you win!";
    } else{
        document.getElementById("win").innerHTML = "";
    }
}

function reset(){
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            document.getElementById('id'+i+j).style.backgroundColor = "blue";
            counter = 0;
        }
    }
    document.getElementById('win').innerHTML = "";
}
