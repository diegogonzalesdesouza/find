var titulos = [
	'Pronomes','Sapo Jururu', 'Reunião na Escola'
];

var textos = [
	'A professora do Marcelo mandou o garoto falar dois pronomes : \n - Quem , eu ? - perguntou o Marcelo . \n - Acertou , pode sentar . - disse a professora .'
	,
	'O sapo consultava - se com uma cartomante , que profetizou : \n - Vejo uma princesa querendo saber tudo sobre você ! \n - Croac ! E quando vou conhecer essa princesa ? - Perguntou o sapo . \n - No semestre que vem , na aula de biologia !'
	,
	'- Joãozinho , por que seu pai não veio à reunião ? \n - Porque ele estava com a canela quebrada , professora . \n - Não é a canela que diz , é perna . E sua mãe , por que não veio ? \n - É que ela fez arroz doce e precisou ir comprar perna pra colocar nele .'
];	

var explicacao = 'Para representarmos um dialogo na escrita, devemos respeitar as pontuacoes. Sempre que o escritor se prepara para uma fala, ele usa dois pontos \':\' e, logo em seguida, o travessao \'-\' para iniciar a fala.';

var nivel = 0;
var max_nivel = 19;
var heap = [];
var n_resposta = 0;
var pontos = 0;
var perguntas = 0;

function ready(){
};


function responder1(){
	document.querySelector('#nivel span').innerHTML = '(Leia o erro acima do texto)';
	var a = document.querySelector('#incorrect-example');
	var b = document.querySelector('#example-input');
	var c = document.querySelector('.objective');
	var d = document.querySelectorAll('.ponctuation');
	var button = document.querySelector('#responder');
	a.style.display = 'block';
	c.style.display = 'none';
	b.readOnly = false;
	b.style.borderStyle = 'solid';

	for (var i = 0; i < d.length - 1; i++) {
		d[i].style.borderStyle = 'solid';
		d[i].style.borderColor = '#70ff79';
	};

	button.setAttribute('onclick','responder2()');
	d[d.length-1].focus();
	d[d.length-1].select();
	d[d.length-1].addEventListener("keypress", enterExemplo);
};

function enterExemplo(e){
	if (e.keyCode == 13){
		responder2();
	};
}

function responder2(){
	var b = document.querySelector('#example-input');
	if (b.value == '!') {
		document.querySelector('#responder').innerHTML = 'Começar!';
		document.querySelector('#incorrect-example').style.display = 'none';
		document.querySelector('#example-input').style.borderColor = '#70ff79';
		document.querySelector('#correct').style.display = 'block';
		disableAllFields();	
		
		document.querySelector('#responder').setAttribute('onclick','proximo()');
	};
};

function abrirExplicacao(){
	var shade = document.querySelector('#shade');
	var box = document.querySelector('#explicacao');
	shade.style.display = 'block';
	box.style.display = 'block';
};

function fecharExplicacao(){
	var shade = document.querySelector('#shade');
	var box = document.querySelector('#explicacao');
	var dbox = document.querySelector('#desistir-box');
	shade.style.display = 'none';
	box.style.display = 'none';
	dbox.style.display = 'none';
};

function disableAllFields(){
	var d = document.querySelectorAll('.ponctuation');

	for (var i = 0; i < d.length; i++) {
		d[i].readOnly = true;
		// console.log(d);
	};
};

function enableAllFields(){
	var d = document.querySelectorAll('.ponctuation');

	for (var i = 0; i < d.length; i++) {
		d[i].readOnly = false;
	};	
};

function proximo(){
	n_resposta = 0;
	heap = [];
	if (nivel >= max_nivel) {
		finalizaJogo();
		return;
	};

	tabindex = 1;

	document.querySelector('#texto-explicacao').innerHTML = explicacao;
	var button = document.querySelector('#responder');
	button.innerHTML = 'Responder';
	
	// document.querySelector('.objective').style.display = 'block';
	document.querySelector('#nivel').innerHTML = '<b>Questão </b> '+ (nivel+1) + ' de 20';
	document.querySelector('#correct').style.display = 'none';
	var p = document.querySelector('.phrase');
	p.innerHTML = '';

	var lines = textos[nivel].split('\n');

	for (var j = 0; j < lines.length; j ++){
		var splited = lines[j].split(' ');

		for (var i = 0; i < splited.length; i++) {
		 	if (splited[i] == '!' || 
		 		splited[i] == '?' || 
		 		splited[i] == ';' || 
		 		splited[i] == ',' || 
		 		splited[i] == '-' ||
		 		splited[i] == ':' || 
		 		splited[i] == '.') 
		 	{
		 		heap.push(splited[i]);
		 		var inp = document.createElement('input');
		 		inp.setAttribute('class','ponctuation');
		 		inp.setAttribute('type','text');
		 		inp.setAttribute('maxlenght','1');
		 		inp.setAttribute('onclick','this.select()');
		 		inp.setAttribute('onfocus','this.select()');
		 		inp.setAttribute('tabindex',tabindex);
		 		inp.addEventListener("keydown", changeFocus);
		 		inp.addEventListener("keypress", changeFocus2);
		 		p.appendChild(inp);
		 		var espace = document.createTextNode(' ');
		 		p.appendChild(espace);
		 		tabindex++;
		 		perguntas++;
		 	} else {
		 		var text = document.createTextNode(splited[i] + ' ');
		 		p.appendChild(text);
		 	};

		};

		// if (j < lines.length-1) {
			p.appendChild(document.createElement('br'));
		// };
	}
	

	document.querySelectorAll('.ponctuation')[0].focus();
	document.querySelector('#desistir').style.display='block';
	p.style.marginTop="40px";
	nivel++;	
	document.querySelector('#responder').setAttribute('onclick','responder()');
};

function responder(){
	res = document.querySelectorAll('.ponctuation');
	var button = document.querySelector('#responder');
	button.innerHTML = 'Responder';
	var errors = 0;

	var p = document.querySelector('.phrase');
	p.style.marginTop="15px";

	for (var i = 0; i < res.length; i++) {
		if(res[i].value == heap[i]){
			res[i].style.borderStyle = 'solid';
			res[i].style.borderColor = '#70ff79';
			if (n_resposta == 0) {
				pontos++;
			};
		} else {
			res[i].style.borderStyle = 'solid';
			errors++;
		}
	};
	if (errors == 0) {
		document.querySelector('#incorrect').style.display = 'none';
		document.querySelector('#correct').style.display = 'block';
		button.innerHTML = 'Próximo';
		button.setAttribute('onclick','proximo()');
		document.querySelector('#desistir').style.display = 'none';
		
	} else {
		document.querySelector('#incorrect').style.display = 'block';
	};
	n_resposta++;
};

function finalizaJogo(){
	document.querySelector('#game-container-inner').style.display = 'none';
	document.querySelector('#parabens').style.display = 'block';
	p = document.querySelector('#pontos');
	
	p.innerHTML = 'Você acertou '+pontos+' de '+perguntas+' perguntas!';
}

function changeFocus(e){
	// console.log(e);

	input_list = document.querySelectorAll('.ponctuation');

	index = this.getAttribute('tabindex');
	next = index;
	prev = index - 2;

	// console.log(e.keyCode);
	if (e.keyCode == 37 && index > 1) {
		input_list[prev].focus();
		input_list[prev].setSelectionRange(0, 1);
	} else {
		if (e.keyCode == 39 && index < input_list.length) {
			input_list[next].focus();
			input_list[next].setSelectionRange(0, 1);
		}
	};

	if (e.keyCode == 13) {
		responder();
	};
}

function changeFocus2(e){
	// console.log(e);

	input_list = document.querySelectorAll('.ponctuation');

	index = this.getAttribute('tabindex');
	next = index;
	prev = index - 2;

	if (e.keyCode != 8 && index < input_list.length){
		input_list[next].focus();
		input_list[next].setSelectionRange(0, 1);
	}; 
}

function desistir(){
	var shade = document.querySelector('#shade');
	var box = document.querySelector('#desistir-box');
	shade.style.display = 'block';
	box.style.display = 'block';
}

function desistirSim(){
	var shade = document.querySelector('#shade');
	var box = document.querySelector('#desistir-box');
	shade.style.display = 'none';
	box.style.display = 'none';

	d = document.querySelectorAll('.ponctuation');
	for (var i = 0; i < d.length; i++) {
		d[i].value = heap[i];
		d[i].style.borderStyle = 'solid';
		d[i].style.borderColor = '#70ff79';
	};

	document.querySelector('#desistir').style.display = 'none';
	document.querySelector('#incorrect').style.display = 'none';
	document.querySelector('#correct').style.display = 'none';
	document.querySelector('#responder').innerHTML = 'Recomeçar';
	document.querySelector('#responder').setAttribute('onclick','recomecar()');
	disableAllFields();
}

function recomecar(){
	location.reload();
}