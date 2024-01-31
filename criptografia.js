function cripto() {
    let palavra = document.getElementsByClassName('entrada')[0].value;
    let verificacao = /^[a-z\s]+$/;
    if (!verificacao.test(palavra)) {
        palavra = "Somente letras minúsculas e sem símbolos";
    } else {
        var botao = document.getElementById("copia");
        botao.removeAttribute("hidden");

        palavra = palavra.trim()
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }
    let campo = document.querySelector("p[name='saida']");
    campo.innerHTML = palavra;
}

function descripto() {
    let palavra = document.getElementsByClassName('entrada')[0].value;
    let verificacao = /^[a-z\s]+$/;
    if (!verificacao.test(palavra)) {
        palavra = "Somente letras minúsculas e sem símbolos";
    } else {
        var botao = document.getElementById("copia");
        botao.removeAttribute("hidden");

        palavra = palavra.trim()
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
    let campo = document.querySelector("p[name='saida']");
    campo.innerHTML = palavra;
}
function copiarTexto() {
    
    let textoParaCopiar = document.getElementById("saida");
    
    let inputTemporario = document.createElement("input");
    
    inputTemporario.value = textoParaCopiar.innerText;
    
    document.body.appendChild(inputTemporario);
    
    inputTemporario.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(inputTemporario);
    
    alert("O texto foi copiado com sucesso!");
}