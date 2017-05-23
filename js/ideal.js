// Declaração de variáveis
var ponto1=0;
var ponto2=0;
var ponto3=0;
var ponto4=0;
var ponto5=0;
var ponto6=0;
var ponto7=0;
var ponto8=0;
var ponto9=0;
var ponto10=0;
var ponto11=0;
var ponto12=0;
var ponto13=0;
var ponto14=0;
var ponto15=0;
var ponto16=0;
var nivel = 1;
var max_nivel = 20;
var questao = 0;

function ready(){
};

function iniciarJogo(){
	var a = document.querySelector('#q0');
	a.style.display = 'none';
	document.querySelector('#q1').style.display = 'block';
};

function responder1(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder1("q1");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto1').style.display = 'block';
		document.querySelector('#correto1 span').innerHTML = 'Boa! As caixas de madeira, apesar de serem reutilizáveis, são de difícil higienização e acabam transmitindo fungos e bactérias, que podem causar doenças e perdas nas colheitas, por exemplo. Além disso, as caixas de madeira são mais baratas que as caixas de plástico, mas possuem uma vida útil menor se comparadas às últimas.';
		ponto1=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto1').style.display = 'block';
		document.querySelector('#incorreto1 span').innerHTML = 'Que pena! As caixas de madeira, apesar de serem reutilizáveis, são de difícil higienização e acabam transmitindo fungos e bactérias, que podem causar doenças e perdas nas colheitas, por exemplo. Além disso, as caixas de madeira são mais baratas que as caixas de plástico, mas possuem uma vida útil menor se comparadas às últimas.';
		// Adicionar div de explicação
	}
};
function abrirq2(){
	document.querySelector('#q1').style.display = 'none';
	document.querySelector('#shadow-correto1').style.display = 'none';
	document.querySelector('#shadow-incorreto1').style.display = 'none';
	document.querySelector('#q2').style.display = 'block';
};

function responder2(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder2("q2");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto2').style.display = 'block';
		document.querySelector('#correto2 span').innerHTML = 'Parabéns! A vida útil das caixas de madeira é bem menor que a das caixas de plástico, mas são mais baratas, o que acaba compensando dependendo do caso.';
		ponto2=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto2').style.display = 'block';
		document.querySelector('#incorreto2 span').innerHTML = 'Essa não! A vida útil das caixas de madeira é bem menor que a das caixas de plástico, mas são mais baratas, o que acaba compensando dependendo do caso.';
		// Adicionar div de explicação
	}
};
function abrirq3(){
	document.querySelector('#q2').style.display = 'none';
	document.querySelector('#shadow-correto2').style.display = 'none';
	document.querySelector('#shadow-incorreto2').style.display = 'none';
	document.querySelector('#q3').style.display = 'block';
};

function responder3(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder3("q3");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto3').style.display = 'block';
		document.querySelector('#correto3 span').innerHTML = 'BOA! A caixa K já foi a caixa de madeira mais utilizada para acondicionar produtos de hortifruti, mas acabou perdendo seu posto para a caixa M, que é mais resistente e menos áspera que a K. Realmente as caixas K são reutilizáveis, mas seu ciclo médio de uso é de 5 vezes. O fato dessas caixas serem novas ou velhas não interfere significantemente no preço do produto e por isso o comércio de caixas novas é desestimulado.';
		ponto3=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto3').style.display = 'block';
		document.querySelector('#incorreto3 span').innerHTML = 'NÃO! A caixa K já foi a caixa de madeira mais utilizada para acondicionar produtos de hortifruti, mas acabou perdendo seu posto para a caixa M, que é mais resistente e menos áspera que a K. Realmente as caixas K são reutilizáveis, mas seu ciclo médio de uso é de 5 vezes. O fato dessas caixas serem novas ou velhas não interfere significantemente no preço do produto e por isso o comércio de caixas novas é desestimulado.';
		// Adicionar div de explicação
	}
};
function abrirq4(){
	document.querySelector('#q3').style.display = 'none';
	document.querySelector('#shadow-correto3').style.display = 'none';
	document.querySelector('#shadow-incorreto3').style.display = 'none';
	document.querySelector('#q4').style.display = 'block';
};

function responder4(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder4("q4");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto4').style.display = 'block';
		document.querySelector('#correto4 span').innerHTML = 'Isso mesmo! A caixa K é feita de madeira mista ou madeira de mato (70%), cuja qualidade é inferior, e de pinho (30%)!';
		ponto4=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto4').style.display = 'block';
		document.querySelector('#incorreto4 span').innerHTML = 'Que pena! Na verdade, a caixa K é feita de madeira mista ou madeira de mato (70%), cuja qualidade é inferior, e de pinho (30%).';
		// Adicionar div de explicação
	}
};
function abrirq5(){
	document.querySelector('#q4').style.display = 'none';
	document.querySelector('#shadow-correto4').style.display = 'none';
	document.querySelector('#shadow-incorreto4').style.display = 'none';
	document.querySelector('#q5').style.display = 'block'
};

function responder5(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder5("q5");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto5').style.display = 'block';
		document.querySelector('#correto5 span').innerHTML = 'Beleza, você acertou essa! As medidas padrões das caixas de madeira não são paletizáveis, o que aumenta o custo e o tempo de carga e descarga dessas caixas. Por apresentar diversas desvantagens, como sua aspereza, que pode danificar os produtos, a passividade de transmissão de fungos e bactérias nelas, que acarretam problemas sanitários, entre outros, estão sendo substituídas por caixas de papelão para alguns casos. Devido à baixa fiscalização das caixas de madeira, acaba-se piorando ainda mais as questões relacionadas aos problemas sanitários dessas caixas.';
		ponto5=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto5').style.display = 'block';
		document.querySelector('#incorreto5 span').innerHTML = 'Não é bem assim! As medidas padrões das caixas de madeira não são paletizáveis, o que aumenta o custo e o tempo de carga e descarga dessas caixas. Por apresentar diversas desvantagens, como sua aspereza, que pode danificar os produtos, a passividade de transmissão de fungos e bactérias nelas, que acarretam problemas sanitários, entre outros, estão sendo substituídas por caixas de papelão para alguns casos. Devido à baixa fiscalização das caixas de madeira, acaba-se piorando ainda mais as questões relacionadas aos problemas sanitários dessas caixas.';
		// Adicionar div de explicação
	}
};
function abrirq6(){
	document.querySelector('#q5').style.display = 'none';
	document.querySelector('#shadow-correto5').style.display = 'none';
	document.querySelector('#shadow-incorreto5').style.display = 'none';
	document.querySelector('#q6').style.display = 'block';
};

function responder6(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
  	for (i=0; i < rads.length; i++){
    	if (rads[i].checked){
          return rads[i].value;
    	}
   	};
	var checkedValue = responder6("q6");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto6').style.display = 'block';
		document.querySelector('#correto6 span').innerHTML = 'Continue assim! A caixa M é mais resistente que a caixa K e atualmente é a caixa de madeira mais utilizada. Semelhantemente à caixa K, também possui o problema da difícil higienização, ou seja, ela também pode transmitir fungos e bactérias, correndo-se o risco de contrações de doenças!';
		ponto6=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto6').style.display = 'block';
		document.querySelector('#incorreto6 span').innerHTML = 'Errou!  A caixa M é mais resistente que a caixa K e atualmente é a caixa de madeira mais utilizada. Semelhantemente à caixa K, também possui o problema da difícil higienização, ou seja, ela também pode transmitir fungos e bactérias, correndo-se o risco de contrações de doenças.';
		// Adicionar div de explicação
	}
};
function abrirq7(){
	document.querySelector('#q6').style.display = 'none';
	document.querySelector('#shadow-correto6').style.display = 'none';
	document.querySelector('#shadow-incorreto6').style.display = 'none';
	document.querySelector('#q7').style.display = 'block';
};

function responder7(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder7("q7");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto7').style.display = 'block';
		document.querySelector('#correto7 span').innerHTML = 'Parabéns! O engradado é uma embalagem que pode ser reutilizada. Possui frestas largas, o que faz com que os produtos acondicionados nele não fiquem protegidos contra intempéries, como vento e sol. Assim, a carga acaba sendo passível de desidratação. É usual o uso de capim no fundo do engradado para proteger o produto dentro.';
		ponto7=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto7').style.display = 'block';
		document.querySelector('#incorreto7 span').innerHTML = 'Aí não dá! Na verdade, engradado é uma embalagem que pode ser reutilizada. Possui frestas largas, o que faz com que os produtos acondicionados nele não fiquem protegidos contra intempéries, como vento e sol. Assim, a carga acaba sendo passível de desidratação. É usual o uso de capim no fundo do engradado para proteger o produto dentro.';
		// Adicionar div de explicação
	}
};
function abrirq8(){
	document.querySelector('#q7').style.display = 'none';
	document.querySelector('#shadow-correto7').style.display = 'none';
	document.querySelector('#shadow-incorreto7').style.display = 'none';
	document.querySelector('#q8').style.display = 'block';
};

function responder8(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder8("q8");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto8').style.display = 'block';
		document.querySelector('#correto8 span').innerHTML = 'Alguns te chamariam de "Joãozinho" por ter acertado essa! Um dos grandes desafios do setor hortifrutícola é superar as perdas ou desperdícios da sua produção. Mundialmente, a FAO/ONU estimou, em 2013, que 48% dos hortifrutícolas produzidos foram desperdiçados ou perdidos. Neste sentido, tem-se que o uso de embalagem é uma forma de se reduzirem as perdas no setor.';
		ponto8=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto8').style.display = 'block';
		document.querySelector('#incorreto8 span').innerHTML = 'Não deu! Um dos grandes desafios do setor hortifrutícola é superar as perdas ou desperdícios da sua produção. Mundialmente, a FAO/ONU estimou, em 2013, que 48% dos hortifrutícolas produzidos foram desperdiçados ou perdidos. Neste sentido, tem-se que o uso de embalagem é uma forma de se reduzirem as perdas no setor.';
		// Adicionar div de explicação
	}
};
function abrirq9(){
	document.querySelector('#q8').style.display = 'none';
	document.querySelector('#shadow-correto8').style.display = 'none';
	document.querySelector('#shadow-incorreto8').style.display = 'none';
	document.querySelector('#q9').style.display = 'block';
};

function responder9(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
		for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder9("q9");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto9').style.display = 'block';
		document.querySelector('#correto9 span').innerHTML = 'Vai que é tua! As embalagens de Papel, papelão e cartão representam 33,2% da participação na produção física de embalagens. Tem-se que as caixas de madeira são retornáveis e possuem difícil higienização, perdendo portanto, sua posição no setor hortifrutícola.';
		ponto9=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto9').style.display = 'block';
		document.querySelector('#incorreto9 span').innerHTML = 'Tente na próxima! As embalagens de Papel, papelão e cartão representam 33,2% da participação na produção física de embalagens. Tem-se que as caixas de madeira são retornáveis e possuem difícil higienização, perdendo portanto, sua posição no setor hortifrutícola.';
		// Adicionar div de explicação
	}
};
function abrirq10(){
	document.querySelector('#q9').style.display = 'none';
	document.querySelector('#shadow-correto9').style.display = 'none';
	document.querySelector('#shadow-incorreto9').style.display = 'none';
	document.querySelector('#q10').style.display = 'block';
};

function responder10(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder10("q10");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto10').style.display = 'block';
		document.querySelector('#correto10 span').innerHTML = 'Boa, garoto(a)! A presença destas informações configuram-se como um diferencial, mas não são obrigatórias para estes produtos especificamente.';
		ponto10=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto10').style.display = 'block';
		document.querySelector('#incorreto10 span').innerHTML = 'Que peninha, você errou! A presença destas informações configuram-se como um diferencial, mas não são obrigatórias para estes produtos especificamente.';
		// Adicionar div de explicação
	}
};
function abrirq11(){
	document.querySelector('#q10').style.display = 'none';
	document.querySelector('#shadow-correto10').style.display = 'none';
	document.querySelector('#shadow-incorreto10').style.display = 'none';
	document.querySelector('#q11').style.display = 'block';
};

function responder11(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder11("q11");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto11').style.display = 'block';
		document.querySelector('#correto11 span').innerHTML = 'Parabéns! Embora haja criticas a cerca da higienização das caixas de madeira, o uso delas para embalar produtos alimentícios é permitido.';
		ponto11=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto11').style.display = 'block';
		document.querySelector('#incorreto11 span').innerHTML = 'Que vergonha! Embora haja criticas a cerca da higienização das caixas de madeira, o uso delas para embalar produtos alimentícios é permitido.';
		// Adicionar div de explicação
	}
};
function abrirq12(){
	document.querySelector('#q11').style.display = 'none';
	document.querySelector('#shadow-correto11').style.display = 'none';
	document.querySelector('#shadow-incorreto11').style.display = 'none';
	document.querySelector('#q12').style.display = 'block';
};

function responder12(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder12("q12");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto12').style.display = 'block';
		document.querySelector('#correto12 span').innerHTML = 'Legal, você acertou! Produtores e beneficiadores de frutas e hortaliças “sonham”, um dia, poder comercializar com todos os segmentos utilizando a mesma embalagem, num único padrão, de modo que a gestão de caixas e sacarias seja facilitada.';
		ponto12=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto12').style.display = 'block';
		document.querySelector('#incorreto12 span').innerHTML = 'Que chato! Produtores e beneficiadores de frutas e hortaliças “sonham”, um dia, poder comercializar com todos os segmentos utilizando a mesma embalagem, num único padrão, de modo que a gestão de caixas e sacarias seja facilitada.';
		// Adicionar div de explicação
	}
};
function abrirq13(){
	document.querySelector('#q12').style.display = 'none';
	document.querySelector('#shadow-correto12').style.display = 'none';
	document.querySelector('#shadow-incorreto12').style.display = 'none';
	document.querySelector('#q13').style.display = 'block';
};

function responder13(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder13("q13");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto13').style.display = 'block';
		document.querySelector('#correto13 span').innerHTML = 'Êta, você tá ficando bom nisso em! A caixa de madeira e a de plástico são retornáveis, podendo ser utilizada diversas vezes. Contudo, ao contrário da caixa de madeira, a de plástico possui fácil higienização. Já a caixa de isopor é inviável para produtos com alta transpiração, além de não poder ser reciclada.';
		ponto13=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto13').style.display = 'block';
		document.querySelector('#incorreto13 span').innerHTML = 'Nossa, você tem que se esforçar mais! A caixa de madeira e a de plástico são retornáveis, podendo ser utilizada diversas vezes. Contudo, ao contrário da caixa de madeira, a de plástico possui fácil higienização. Já a caixa de isopor é inviável para produtos com alta transpiração, além de não poder ser reciclada.';
		// Adicionar div de explicação
	}
};
function abrirq14(){
	document.querySelector('#q13').style.display = 'none';
	document.querySelector('#shadow-correto13').style.display = 'none';
	document.querySelector('#shadow-incorreto13').style.display = 'none';
	document.querySelector('#q14').style.display = 'block';
};

function responder14(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder14("q14");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto14').style.display = 'block';
		document.querySelector('#correto14 span').innerHTML = 'Vamos comemorar, você acertou! Em consonância com a evolução das tecnologias dos polímeros, atualmente já foram desenvolvidas embalagens em polietileno de alta densidade (PEAD), pelo processo de sopro, ao qual fora aprovada em todos os testes de homologação para transportes de produtos perigosos via terrestre, entre eles: resistência à queda (-18 °C), verificação de estanqueidade, teste de pressão hidráulica e empilhamento.';
		ponto14=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto14').style.display = 'block';
		document.querySelector('#incorreto14 span').innerHTML = 'Só nos resta chorar depois dessa! Em consonância com a evolução das tecnologias dos polímeros, atualmente já foram desenvolvidas embalagens em polietileno de alta densidade (PEAD), pelo processo de sopro, ao qual fora aprovada em todos os testes de homologação para transportes de produtos perigosos via terrestre, entre eles: resistência à queda (-18 °C), verificação de estanqueidade, teste de pressão hidráulica e empilhamento.';
		// Adicionar div de explicação
	}
};
function abrirq15(){
	document.querySelector('#q14').style.display = 'none';
	document.querySelector('#shadow-correto14').style.display = 'none';
	document.querySelector('#shadow-incorreto14').style.display = 'none';
	document.querySelector('#q15').style.display = 'block';
};

function responder15(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder15("q15");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto15').style.display = 'block';
		document.querySelector('#correto15 span').innerHTML = 'Olha só, que prodígio! Muito pelo contrário, amiguinho! Apesar de um custo menor por viagem, as embalagens retornáveis podem proteger mais adequadamente os produtos embarcados, possuindo maior flexibilidade de utilização, além de poderem ser recicladas após a vida útil.';
		ponto15=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto15').style.display = 'block';
		document.querySelector('#incorreto15 span').innerHTML = 'É, você tem que estudar mais! Muito pelo contrário, amiguinho! Apesar de um custo menor por viagem, as embalagens retornáveis podem proteger mais adequadamente os produtos embarcados, possuindo maior flexibilidade de utilização, além de poderem ser recicladas após a vida útil.';
		// Adicionar div de explicação
	}
};
function abrirq16(){
	document.querySelector('#q15').style.display = 'none';
	document.querySelector('#shadow-correto15').style.display = 'none';
	document.querySelector('#shadow-incorreto15').style.display = 'none';
	document.querySelector('#q16').style.display = 'block';
};

function responder16(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder16("q16");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto16').style.display = 'block';
		document.querySelector('#correto16 span').innerHTML = 'Você tem razão, as big bags podem apresentar capacidade para acondicionar até 1,5 toneladas. Além disso, mesmo assim elas não exigem mão de obra braçal, nem de grandes equipamentos. Incrível, não?';
		ponto16=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto16').style.display = 'block';
		document.querySelector('#incorreto16 span').innerHTML = 'Te peguei! Sim, as big bags podem apresentar capacidade para acondicionar até 1,5 toneladas. No entanto, mesmo assim elas não exigem mão de obra braçal, nem de grandes equipamentos. Incrível, não?';
		// Adicionar div de explicação
	}
};

function abrirResultadoFinal(){
	var pontos=ponto1+ponto2+ponto3+ponto4+ponto5+ponto6+ponto7+ponto8+ponto9+ponto10+ponto11+ponto12+ponto13+ponto14+ponto15+ponto16;
	document.querySelector('#q16').style.display = 'none';
	document.querySelector('#shadow-correto16').style.display = 'none';
	document.querySelector('#shadow-incorreto16').style.display = 'none';
	document.querySelector('#q21').style.display = 'block';
	document.querySelector('#displayResultadoFinal').style.display = 'block';
	document.querySelector('#displayResultadoFinal span').innerHTML = 'Você acertou '+pontos+' perguntas de um total de 16!';
	
	
	if (pontos>12){
		document.querySelector('#joazinho').style.display = 'block';
		document.querySelector('#juvenil').style.display = 'none';
		document.querySelector('#bad').style.display = 'none';
	}
	else if(pontos>8){
		document.querySelector('#juvenil').style.display = 'block';
		document.querySelector('#joazinho').style.display = 'none';
		document.querySelector('#bad').style.display = 'none';
	}
	else{
		document.querySelector('#bad').style.display = 'block';
		document.querySelector('#joazinho').style.display = 'none';
		document.querySelector('#juvenil').style.display = 'none';
	}
};

function responder21() {
	document.querySelector('#shadow-correto21').style.display = 'block';
};