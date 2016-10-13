 //Criado as variaveis globais!!
 var jogador = 0;
 var jogadas = 0;
 var contx = 0;
 var cont0 = 0;
 var cont_empate = 0;

 //Salvando o jogo!!
 if (!localStorage.jogador0) {
	localStorage.jogador0 = 0;
}
	elem = document.getElementById("O");
	elem.innerHTML = localStorage.jogador0;
if (!localStorage.jogador1) {
	localStorage.jogador1 = 0;			
}		
	elem = document.getElementById("x");
	elem.innerHTML = localStorage.jogador1;
if (!localStorage.e) {
	localStorage.e = 0;			
}
	elem = document.getElementById("empate");
	elem.innerHTML = localStorage.e;
//Verifica se há ganhadores!
 
 function verificaJogo(){
 	var fim = false;
 	if (verificar(1,2,3) || verificar(4,5,6) || 
 		verificar(7,8,9) || verificar(1,5,9) || 
 		verificar(1,4,7) || verificar(3,5,7) || 
 		verificar(2,5,8) || verificar(3,6,9))
 	{
 		
 		fim = true;
 		alert("Jogador " +jogador+ " Ganhou!");
 		gravarDados(jogador);

 	}else if(jogadas >= 9){
 			gravarDados(2);
 			fim = true;
 			alert("Empate");
 	}

 	if(fim){
 		restart = confirm("Deseja jogar novamente?");
 		if (restart)
 			reiniciarJogo();
 		else
 			encerrarJogo();
 	}
 }

 function jogar(posicao){
 	var bg = posicao.style.backgroundImage;
 	if (bg == "" || bg == "none") {
 		posicao.style.backgroundImage = 'url("img/'+jogador+'.jpg")';
 		jogadas = jogadas +1;
 		verificaJogo();
 	
		if (jogador == 0){
	 		jogador = 1;
	 	}
	 	 else{
	 		jogador = 0;
		}
	}
 }
 function jogarTecla(event){
	 
	 if (event.key >= 1 && event.key<=9) {
	 elem = document.getElementById('casa'+ event.key);
	 jogar(elem);
	 	
	 }
	}

 function verificar(v1, v2, v3){
 	bg1 = document.getElementById('casa'+v1);
 	bg1 = bg1.style.backgroundImage;

 	bg2 = document.getElementById('casa'+v2);
 	bg2 = bg2.style.backgroundImage;

 	bg3 = document.getElementById('casa'+v3);
 	bg3 = bg3.style.backgroundImage;

 	if (bg1 == bg2 && bg1 == bg3 && bg1 != ""){
 		return true;
 	}
 	return false;
 }

 /*eliminar a jogada, impedir que o jogador continue jogando depois do jogo;
  b1.onclick;*/

 //Encerra o jogo
 function encerrarJogo(){
 	for (i = 1; i <= 9; i++){
 		div = document.getElementById("casa" + i);
 		//substitue o conteudo da div por vazio mo html;
 		div.onclick = "";

 	}
 }
//Retorna o jogo para o estado inicial!
function reiniciarJogo(){
    for(i = 1; i <= 9; i++){
    	obj =  document.getElementById("casa" + i);
    	obj.style.backgroundImage = "";
  	}
  	//zera as jogadas para que o contador reinicie para uma nova partida!
  	jogadas = 0;
}
//Atualiza o placar do jogo, quando há uma vitória ou não!
function atualizaPlacar(numero){

	if (numero == 0) {
		cont0++;
		elem = document.getElementById("O");
		elem.innerHTML = cont0;
	}else if (numero == 1) {
		contx++;
		elem = document.getElementById("x");
		elem.innerHTML = contx;
	}else{
		cont_empate++;
		elem = document.getElementById("empate");
		elem.innerHTML = cont_empate;
	}
}
//Gravando dados em um local de armazenamento. Quando o jogo iniciar retorna o placar antigo!
function gravarDados(j) {
	if (j==0) {
		if (!localStorage.jogador0) {
			localStorage.jogador0 = 0;			
		}
		localStorage.jogador0 = parseInt(localStorage.jogador0) + 1;
		elem = document.getElementById("O");
		elem.innerHTML = localStorage.jogador0;		
	}else if (j==1){
		if (!localStorage.jogador1) {
			localStorage.jogador1 = 0;			
		}
		localStorage.jogador1 = parseInt(localStorage.jogador1) + 1;
		elem = document.getElementById("x");
		elem.innerHTML = localStorage.jogador1;
	}else{
		if (!localStorage.e) {
			localStorage.e = 0;			
		}
		localStorage.e = parseInt(localStorage.e) + 1;
		elem = document.getElementById("empate");
		elem.innerHTML = localStorage.e;
	}	
}

