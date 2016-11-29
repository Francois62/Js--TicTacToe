document.getElementById('tour').innerHTML="Au Joueur 1 de commencer";
var table = document.getElementById('tableau');
var cell = table.getElementsByTagName('td');
  for (var i=0; i<9; i++){
  cell[i].onclick = switchcol;
}
var t=0;
function switchcol(e){
  var y=1;
  y=y+t;
  var x = cell[i];
      if(e.target.className!="player1" && e.target.className!="player2"){
  if(t==1 || t==3 || t==5 || t==7 ){
        e.target.className="player2";
        document.getElementById('tour').innerHTML="Au Joueur 1";
        console.log(y + " " + "tour");
        console.log(x + "joueur 2 a joué");
      }
      else {
          e.target.className="player1";
          document.getElementById('tour').innerHTML="Au Joueur 2";
          console.log(y + " "  +"tour");
          console.log(x + "joueur 1 a joué");
      }
      //i++;
      t++;
      }
      victory();
}
  var win = document.getElementsByTagName('div')[0];
function victory(){
if(cell[0].className=="player1" && cell[1].className=="player1" && cell[2].className=="player1"){
  //var win = document.getElementsByTagName('div')
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[3].className=="player1" && cell[4].className=="player1" && cell[5].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[6].className=="player1" && cell[7].className=="player1" && cell[8].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[0].className=="player1" && cell[3].className=="player1" && cell[6].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[1].className=="player1" && cell[4].className=="player1" && cell[7].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[2].className=="player1" && cell[5].className=="player1" && cell[8].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[0].className=="player1" && cell[4].className=="player1" && cell[8].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}
else if(cell[2].className=="player1" && cell[4].className=="player1" && cell[6].className=="player1"){
  win.className="winner1";
  win.innerHTML="Joueur 1 a gagné";
}


else if(cell[0].className=="player2" && cell[1].className=="player2" && cell[2].className=="player2"){
  win.className="winner2";
  win.innerHTML="Joueur 2 a gagné";
}
  else if(cell[3].className=="player2" && cell[4].className=="player2" && cell[5].className=="player2"){
    win.className="winner2";
    win.innerHTML="Joueur 2 a gagné";
  }
  else if(cell[6].className=="player2" && cell[7].className=="player2" && cell[8].className=="player2"){
    win.className="winner2";
    win.innerHTML="Joueur 2 a gagné";
  }
    else if(cell[0].className=="player2" && cell[3].className=="player2" && cell[6].className=="player2"){
      win.className="winner2";
      win.innerHTML="Joueur 2 a gagné";
    }
    else if(cell[1].className=="player2" && cell[4].className=="player2" && cell[7].className=="player2"){
      win.className="winner2";
      win.innerHTML="Joueur 2 a gagné";
    }
    else if(cell[2].className=="player2" && cell[5].className=="player2" && cell[8].className=="player2"){
      win.className="winner2";
      win.innerHTML="Joueur 2 a gagné";
    }
    else if(cell[0].className=="player2" && cell[4].className=="player2" && cell[8].className=="player2"){
      win.className="winner2";
      win.innerHTML="Joueur 2 a gagné";
    }
    else if(cell[2].className=="player2" && cell[4].className=="player2" && cell[6].className=="player2"){
      win.className="winner2";
      win.innerHTML="Joueur 2 a gagné";
    }
    else if (t==9 && win.className==""){
      win.className="winner3";
      win.innerHTML="Egality!";
    }

    }
    function out(){
      win.className="1";
    }
