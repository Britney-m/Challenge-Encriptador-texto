const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector("#input-text-area");

function encriptarB(){
	const textoEncript = encriptar(inputTexto.value);
	mensaje.value = textoEncript;
}

function encriptar(StringParaEncriptar){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	StringParaEncriptar = StringParaEncriptar.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){
		if(StringParaEncriptar.includes(matrizCodigo[i][0])){
			StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])	
		}
	} 
	return StringParaEncriptar;
}

function desencriptarB(){
	
	const textoDesencript = desencriptar(inputTexto.value);
	mensaje.value = textoDesencript;
}

function desencriptar(StringParaDesencriptar){
	let desCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
	StringParaDesencriptar = StringParaDesencriptar.toLowerCase();

	for(let i = 0; i < desCodigo.length; i++){
		if(StringParaDesencriptar.includes(desCodigo[i][0])){
			StringParaDesencriptar = StringParaDesencriptar.replaceAll(desCodigo[i][0],desCodigo[i][1])	
		}
	}
	return StringParaDesencriptar;
}


function copiarAlPortapapeles(id_elemento){
	
	copi = document.getElementById("input-text-area");

	copi.select();

	document.execCommand("copy");

 
	
}



