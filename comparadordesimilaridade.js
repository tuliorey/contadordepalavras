 <script>
        function extractMessages() {
            const jsonFile = document.getElementById('jsonFile').files[0];
            const pasteJson = document.getElementById('pasteJson').value;

            if (jsonFile) {
                const reader = new FileReader();

                reader.onload = function(event) {
                    const jsonContent = event.target.result;
                    const data = JSON.parse(jsonContent);
                    const messages = data.map(item => item.hasOwnProperty('message') ? item.message : '').join('\n');
                    document.getElementById("frases").value = messages;
                    document.getElementById("resultado").style.display = "block";
                };

                reader.readAsText(jsonFile);
            } else if (pasteJson.trim() !== '') {
                const data = JSON.parse(pasteJson);
                const messages = data.map(item => item.hasOwnProperty('message') ? item.message : '').join('\n');
                document.getElementById("frases").value = messages;
                document.getElementById("resultado").style.display = "block";
            } else {
                alert('Por favor, selecione um arquivo JSON ou cole o conteúdo JSON em texto simples.');
            }
        }

        function copiarResultado() {
            var resultadoTexto = document.getElementById("mensagens").innerText;
            var resultadoTextArea = document.createElement("textarea");
            resultadoTextArea.value = resultadoTexto;
            document.body.appendChild(resultadoTextArea);
            resultadoTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(resultadoTextArea);
            alert("Resultado copiado para a área de transferência");
        }

        function calcularSimilaridade() {
    var inputFrases = document.getElementById("frases").value;
    var frases = inputFrases.split('\n').map(function(frase) {
        return frase.trim();
    });

    var limiteSimilaridade = parseFloat(document.getElementById("limiteSimilaridade").value); // Obtenha o limite de similaridade definido pelo usuário

    var grupos = [];

    for (var i = 0; i < frases.length; i++) {
        if (frases[i].length <= 1) {
            continue; // Pula mensagens com apenas 1 caractere
        }

        var encontrouGrupo = false;

        for (var j = 0; j < grupos.length; j++) {
            var similaridade = calcularSimilaridadeJaccard(frases[i], grupos[j][0]);
            if (similaridade >= limiteSimilaridade) { // Use o limite de similaridade definido pelo usuário
                grupos[j].push(frases[i]);
                encontrouGrupo = true;
                break;
            }
        }

        if (!encontrouGrupo) {
            grupos.push([frases[i]]);
        }
    }

    grupos = grupos.filter(function(grupo) {
        return grupo.length > 2; // Filtra grupos com mais de 2 mensagens
    });

    grupos.sort(function(a, b) {
        return b.length - a.length; // Ordena em ordem decrescente de quantidade de mensagens
    });

    var mensagensDiv = document.getElementById("mensagens");
    mensagensDiv.innerHTML = "";

    grupos.forEach(function(grupo, index) {
        mensagensDiv.innerHTML += "<strong>Grupo " + (index + 1) + ":</strong>\n";
        mensagensDiv.innerHTML += grupo.join("\n") + "\n\n";
    });

    document.getElementById("resultado").style.display = "block";
}

        function calcularSimilaridadeJaccard(frase1, frase2) {
            var conjunto1 = new Set(frase1.split(/\s+/));
            var conjunto2 = new Set(frase2.split(/\s+/));

            var intersecao = [...conjunto1].filter(x => conjunto2.has(x));
            var similaridade = intersecao.length / (conjunto1.size + conjunto2.size - intersecao.length);

            return similaridade;
        }
