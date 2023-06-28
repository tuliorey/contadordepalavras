var stopwords_es =["de", "la", "que", "el", "en", "y", "a", "los", "se", "del", "las", "por", "un", "para", "con", "no", "una", "su",
"al", "lo", "como", "más", "pero", "sus", "le", "ya", "o", "este", "sí", "porque", "esta", "entre", "cuando", "muy",
"sin", "sobre", "también", "me", "hasta", "hay", "donde", "quien", "desde", "todo", "nos", "durante", "todos", "uno",
"les", "ni", "contra", "otros", "ese", "eso", "ante", "ellos", "e", "esto", "mí", "antes", "algunos", "qué", "unos",
"yo", "otro", "otras", "otra", "él", "tanto", "esa", "estos", "mucho", "quienes", "nada", "muchos", "cual", "poco",
"ella", "estar", "estas", "algunas", "algo", "nosotros", "mi", "mis", "tú", "te", "ti", "tu", "tus", "ellas", "nosotras",
"vosotros", "vosotras", "os", "mío", "mía", "míos", "mías", "tuyo", "tuya", "tuyos", "tuyas", "suyo", "suya", "suyos",
"suyas", "nuestro", "nuestra", "nuestros", "nuestras", "vuestro", "vuestra", "vuestros", "vuestras", "esos", "esas",
"estoy", "estás", "está", "estamos", "estáis", "están", "esté", "estés", "estemos", "estéis", "estén", "estaré",
"estarás", "estará", "estaremos", "estaréis", "estarán", "estaría", "estarías", "estaríamos", "estaríais", "estarían",
"estaba", "estabas", "estábamos", "estabais", "estaban", "estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis",
"estuvieron", "estuviera", "estuvieras", "estuviéramos", "estuvierais", "estuvieran", "estuviese", "estuvieses",
"estuviésemos", "estuvieseis", "estuviesen", "estando", "estada", "estadas", "estad", "he",
"has", "ha", "hemos", "habéis", "han", "haya", "hayas", "hayamos", "hayáis", "hayan", "habré", "habrás", "habrá",
"habremos", "habréis", "habrán", "habría", "habrías", "habríamos", "habríais", "habrían", "había", "habías",
"habíamos","habíais", "habían", "hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron", "hubiera",
"hubieras", "hubiéramos", "hubierais", "hubieran", "hubiese", "hubieses", "hubiésemos", "hubieseis", "hubiesen",
"habiendo", "habido", "habida", "habidos", "habidas", "soy", "eres", "es", "somos", "sois", "son", "sea", "seas",
"seamos", "seáis", "sean", "seré", "serás", "será", "seremos", "seréis", "serán", "sería", "serías", "seríamos",
"seríais", "serían", "era", "eras", "éramos", "erais", "eran", "fui", "fuiste", "fue", "fuimos", "fuisteis",
"fueron", "fuera", "fueras", "fuéramos", "fuerais", "fueran", "fuese", "fueses", "fuésemos", "fueseis", "fuesen",
"siendo", "sido", "sida", "sidos", "sidas", "sed", "tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen", "tenga",
"tengas", "tengamos", "tengáis", "tengan", "tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán",
"tendría", "tendrías", "tendríamos", "tendríais", "tendrían", "tenía", "tenías", "teníamos", "teníais", "tenían",
"tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron", "tuviera", "tuvieras", "tuviéramos", "tuvierais",
"tuvieran", "tuviese", "tuvieses", "tuviésemos", "tuvieseis", "tuviesen", "teniendo", "tenido", "tenida", "tenidos",
"tenidas", "tened"];
  
  var stopwords_pt = ['a', 'agora', 'ainda', 'alguém', 'algum', 'alguma', 'algumas', 'alguns', 'ampla', 'amplas', 'amplo', 'amplos', 'ante', 'antes', 'ao', 'aos', 'após', 'aquela', 'aquelas', 'aquele', 'aqueles', 'aquilo', 'as', 'até', 'através', 'cada', 'coisa', 'coisas', 'com', 'como', 'contra', 'contudo', 'da', 'daquele', 'daqueles', 'das', 'de', 'dela', 'delas', 'dele', 'deles', 'depois', 'dessa', 'dessas', 'desse', 'desses', 'desta', 'destas', 'deste', 'deste', 'destes', 'deve', 'devem', 'devendo', 'dever', 'deverá', 'deverão', 'deveria', 'deveriam', 'devia', 'deviam', 'disse', 'disso', 'disto', 'dito', 'diz', 'dizem', 'do', 'dos', 'e', 'é', 'ela', 'elas', 'ele', 'eles', 'em', 'enquanto', 'entre', 'era', 'essa', 'essas', 'esse', 'esses', 'esta', 'está', 'estamos', 'estão', 'estas', 'estava', 'estavam', 'estávamos', 'este', 'estes', 'estou', 'eu', 'fazendo', 'fazer', 'feita', 'feitas', 'feito', 'feitos', 'foi', 'for', 'foram', 'fosse', 'fossem', 'grande', 'grandes', 'há', 'isso', 'isto', 'já', 'la', 'lá', 'lhe', 'lhes', 'lo', 'mas','mais', 'me', 'mesma', 'mesmas', 'mesmo', 'mesmos', 'meu', 'meus', 'minha', 'minhas', 'muita', 'muitas', 'muito', 'muitos', 'na', 'não', 'nas', 'nem', 'nenhum', 'nessa', 'nessas', 'nesta', 'nestas', 'ninguém', 'no', 'nos', 'nós', 'nossa', 'nossas', 'nosso', 'nossos', 'num', 'numa', 'nunca', 'o', 'os', 'ou', 'outra', 'outras', 'outro', 'outros', 'para', 'pela', 'pelas', 'pelo', 'pelos', 'pequena', 'pequenas', 'pequeno', 'pequenos', 'per', 'perante', 'pode', 'pude', 'podendo', 'poder', 'poderia', 'poderiam', 'podia', 'podiam', 'pois', 'por', 'porém', 'porque', 'posso', 'pouca', 'poucas', 'pouco', 'poucos', 'primeiro',"primeiros", "própria", "próprias", "próprio", "próprios", "quais", "qual", "quando", "quanto", "quantos", "que", "quem", "são", "se", "seja", "sejam", "sem", "sempre", "seu", "seus", "si", "sido", "só", "sob", "sobre", "sua", "suas", "talvez", "também", "tampouco", "te", "tem", "tendo", "tenha", "teu", "teus", "ti", "tido", "tinha", "tinham", "toda", "todas", "todavia", "todo", "todos", "tu", "tua", "tuas", "tudo", "última", "últimas", "último", "últimos", "um", "uma", "umas", "uns", "vez", "vindo", "vos", "vós", "\-"];
  
  function contarPalavras() {
var texto = document.getElementById("texto").value.toLowerCase();
var palavras = texto.split(/\s+/);
var idiomaSelecionado = document.getElementById("idioma").value;
var stopwords = [];

if (idiomaSelecionado === "pt") {
  stopwords = stopwords_pt;
} else if (idiomaSelecionado === "es") {
  stopwords = stopwords_es;
}
    var contagem = {};
//o .replace consegue adicionar as exceções que queremos    
    for (var i = 0; i < palavras.length; i++) {
 var palavra = palavras[i].replace(/[^\wáãàéêíîìïóõôòúüùçñ\s\-]/gi, '').replace(/cadastr(os?|ar?)/gi, 'cadastro').replace(/c[oó]digos?/gi, 'codigo').replace(/carr(inh)?os?/gi, 'carro').replace(/mot(o|inha)s?/gi,'moto').replace(/campinas.+\b/gi,'campinas').replace(/pre(ç|ss?)os?.+\b/gi,'preço').replace(/valor(es)?\b/gi,'valor');


if (palavra !== "" && !stopwords.includes(palavra)) {
  if (contagem[palavra] === undefined) {
    contagem[palavra] = 1;
  } else {
    contagem[palavra]++;
  }
}
}      
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    Object.keys(contagem).sort(function(a, b) {
      return contagem[b] - contagem[a];
    }).forEach(function(palavra) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      
      td1.appendChild(document.createTextNode(palavra));
      td2.appendChild(document.createTextNode(contagem[palavra]));
      
      tr.appendChild(td1);
      tr.appendChild(td2);
      
      resultado.appendChild(tr);
    });
  }