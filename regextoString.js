function gerarStrings() {
    const regexTexto = document.getElementById('regex').value;
    const separador = document.getElementById('separador').value === 'virgula' ? ',' : '\n';
    const regex = new RegExp(regexTexto);
    const resultado = new Set();

    for (let i = 0; i < 10000; i++) {
        const stringGerada = gerarStringAleatoria(regex);
        if (!resultado.has(stringGerada)) {
            resultado.add(stringGerada);
        }
    }

    document.getElementById('resultado').textContent = Array.from(resultado).join(separador);
}

function gerarStringAleatoria(regex) {
    let string = '';
    while (true) {
        const charAleatorio = String.fromCharCode(Math.floor(Math.random() * 256));
        string += charAleatorio;
        if (regex.test(string)) {
            return string;
        }
    }
}
