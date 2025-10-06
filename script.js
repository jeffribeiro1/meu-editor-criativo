// 🎯 COMEÇO DO NOSSO CÓDIGO

console.log('🚀 Iniciando nosso Editor Criativo!');

// ============================================
// 🔹 PARTE 1: SELECIONAR TODOS OS ELEMENTOS
// ============================================

// Área de texto e visualização
const areaTexto = document.getElementById('areaTexto');
const textoPreview = document.getElementById('textoPreview');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const contadorPalavras = document.getElementById('contadorPalavras');
const contadorLinhas = document.getElementById('contadorLinhas');

// Botões de estilo
const btnNegrito = document.getElementById('btnNegrito');
const btnItalico = document.getElementById('btnItalico');
const btnSublinhado = document.getElementById('btnSublinhado');
const btnRiscado = document.getElementById('btnRiscado');

// Controles
const selectFonte = document.getElementById('selectFonte');
const corTexto = document.getElementById('corTexto');
const tamanhoFonte = document.getElementById('tamanhoFonte');
const valorTamanho = document.getElementById('valorTamanho');
const nomeCor = document.getElementById('nomeCor');

// Botões criativos
const btnEmojis = document.getElementById('btnEmojis');
const btnBorda = document.getElementById('btnBorda');
const btnBordaPontilhada = document.getElementById('btnBordaPontilhada');
const btnSombra = document.getElementById('btnSombra');
const btnPiscar = document.getElementById('btnPiscar');
const btnArcoiris = document.getElementById('btnArcoiris');

// Botões de alinhamento
const btnEsquerda = document.getElementById('btnEsquerda');
const btnCentro = document.getElementById('btnCentro');
const btnDireita = document.getElementById('btnDireita');

// Temas
const botoesTemas = document.querySelectorAll('.btn-tema');

// Controles finais
const btnSalvar = document.getElementById('btnSalvar');
const btnLimpar = document.getElementById('btnLimpar');
const btnCopiar = document.getElementById('btnCopiar');

// Mensagem
const mensagem = document.getElementById('mensagem');

// Quiz
const perguntaQuiz = document.getElementById('perguntaQuiz');
const opcoesQuiz = document.querySelectorAll('.btn-opcao');
const resultadoQuiz = document.getElementById('resultadoQuiz');
const btnProximaPergunta = document.getElementById('btnProximaPergunta');

console.log('✅ Todos os elementos selecionados!');

// ============================================
// 🔹 PARTE 2: VARIÁVEIS PARA GUARDAR CONFIGURAÇÕES
// ============================================

let config = {
    estilos: {
        negrito: false,
        italico: false,
        sublinhado: false,
        riscado: false,
        borda: false,
        bordaPontilhada: false,
        sombra: false
    },
    efeitos: {
        piscar: false,
        arcoiris: false
    },
    fonte: 'Arial',
    cor: '#000000',
    tamanho: 16,
    alinhamento: 'left',
    tema: 'claro'
};

let contadorMudancasCor = 0;

// Sistema de conquistas
const conquistas = [
    {
        id: 'primeiro_texto',
        nome: '📝 Primeiras Palavras',
        descricao: 'Digite seu primeiro texto',
        conquistada: false,
        verificar: function() { return areaTexto.value.length > 0; }
    },
    {
        id: 'estilizador',
        nome: '🎨 Estilizador Criativo',
        descricao: 'Use 3 estilos diferentes',
        conquistada: false,
        verificar: function() {
            const estilosAtivos = Object.values(config.estilos).filter(v => v).length;
            return estilosAtivos >= 3;
        }
    },
    {
        id: 'colorista',
        nome: '🌈 Mestre das Cores',
        descricao: 'Mude a cor do texto 5 vezes',
        conquistada: false,
        verificar: function() { return contadorMudancasCor >= 5; }
    }
];

// Sistema de quiz
const perguntas = [
    {
        pergunta: "Qual tag HTML usamos para texto em NEGRITO?",
        opcoes: ["<bold>", "<strong>", "<b>"],
        resposta: 1
    },
    {
        pergunta: "Qual propriedade CSS muda a COR do texto?",
        opcoes: ["text-color", "font-color", "color"],
        resposta: 2
    },
    {
        pergunta: "Como criamos texto ITÁLICO em CSS?",
        opcoes: ["font-style: italic", "text-style: italic", "style: italic"],
        resposta: 0
    }
];

let perguntaAtual = 0;
let pontuacaoQuiz = 0;

console.log('🎛️ Configurações iniciais definidas:', config);

// ============================================
// 🔹 PARTE 3: FUNÇÕES PRINCIPAIS
// ============================================

// 🎨 FUNÇÃO 1: Atualizar a visualização do texto
function atualizarVisualizacao() {
    console.log('🔄 Atualizando visualização...');
    
    // Pegar o texto digitado pelo usuário
    const texto = areaTexto.value || 'Sua obra-prima aparecerá aqui... 🌟';
    
    // Colocar o texto na área de visualização
    textoPreview.textContent = texto;
    
    // 🔄 LIMPAR TODAS AS CLASSES ANTERIORES
    textoPreview.className = 'texto-preview';
    
    // 🎪 APLICAR ESTILOS CONFORME AS CONFIGURAÇÕES
    if (config.estilos.negrito) {
        textoPreview.classList.add('negrito');
        btnNegrito.classList.add('ativo');
    } else {
        btnNegrito.classList.remove('ativo');
    }
    
    if (config.estilos.italico) {
        textoPreview.classList.add('italico');
        btnItalico.classList.add('ativo');
    } else {
        btnItalico.classList.remove('ativo');
    }
    
    if (config.estilos.sublinhado) {
        textoPreview.classList.add('sublinhado');
        btnSublinhado.classList.add('ativo');
    } else {
        btnSublinhado.classList.remove('ativo');
    }
    
    if (config.estilos.riscado) {
        textoPreview.classList.add('riscado');
        btnRiscado.classList.add('ativo');
    } else {
        btnRiscado.classList.remove('ativo');
    }
    
    if (config.estilos.borda) {
        textoPreview.classList.add('borda-decorativa');
        btnBorda.classList.add('ativo');
    } else {
        btnBorda.classList.remove('ativo');
    }
    
    if (config.estilos.bordaPontilhada) {
        textoPreview.classList.add('borda-pontilhada');
        btnBordaPontilhada.classList.add('ativo');
    } else {
        btnBordaPontilhada.classList.remove('ativo');
    }
    
    if (config.estilos.sombra) {
        textoPreview.classList.add('sombra-texto');
        btnSombra.classList.add('ativo');
    } else {
        btnSombra.classList.remove('ativo');
    }
    
    // 🌈 APLICAR EFEITOS ESPECIAIS
    if (config.efeitos.piscar) {
        textoPreview.classList.add('texto-piscante');
        btnPiscar.classList.add('ativo');
    } else {
        textoPreview.classList.remove('texto-piscante');
        btnPiscar.classList.remove('ativo');
    }
    
    if (config.efeitos.arcoiris) {
        textoPreview.classList.add('texto-arcoiris');
        btnArcoiris.classList.add('ativo');
    } else {
        textoPreview.classList.remove('texto-arcoiris');
        btnArcoiris.classList.remove('ativo');
    }
    
    // 🎨 APLICAR CONFIGURAÇÕES DIRETAS
    textoPreview.style.fontFamily = config.fonte;
    textoPreview.style.color = config.cor;
    textoPreview.style.fontSize = config.tamanho + 'px';
    textoPreview.style.textAlign = config.alinhamento;
    
    // Ativar botão de alinhamento correto
    btnEsquerda.classList.remove('ativo');
    btnCentro.classList.remove('ativo');
    btnDireita.classList.remove('ativo');
    
    if (config.alinhamento === 'left') btnEsquerda.classList.add('ativo');
    if (config.alinhamento === 'center') btnCentro.classList.add('ativo');
    if (config.alinhamento === 'right') btnDireita.classList.add('ativo');
    
    console.log('✨ Visualização atualizada com sucesso!');
}

// 🔢 FUNÇÃO 2: Atualizar contadores
function atualizarContadores() {
    const texto = areaTexto.value;
    const caracteres = texto.length;
    const palavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
    const linhas = texto === '' ? 0 : texto.split('\n').length;
    
    contadorCaracteres.textContent = caracteres;
    contadorPalavras.textContent = palavras;
    contadorLinhas.textContent = linhas;
    
    // Verificar conquistas
    verificarConquistas();
    
    console.log(`📊 Estatísticas: ${caracteres} caracteres, ${palavras} palavras, ${linhas} linhas`);
}

// 💬 FUNÇÃO 3: Mostrar mensagens temporárias
function mostrarMensagem(texto, tipo = 'sucesso') {
    mensagem.textContent = texto;
    mensagem.className = 'mensagem mostrar';
    
    if (tipo === 'erro') {
        mensagem.classList.add('erro');
    }
    
    setTimeout(() => {
        mensagem.classList.remove('mostrar');
    }, 3000);
    
    console.log(`💬 Mensagem: ${texto}`);
}

// 💾 FUNÇÃO 4: Salvar texto no navegador
function salvarTexto() {
    const texto = areaTexto.value;
    
    if (!texto.trim()) {
        mostrarMensagem('❌ Digite algo para salvar!', 'erro');
        return;
    }
    
    localStorage.setItem('textoSalvo', texto);
    localStorage.setItem('configuracao', JSON.stringify(config));
    
    mostrarMensagem('💾 Texto salvo com sucesso!');
    console.log('📁 Texto salvo no navegador');
}

// 📂 FUNÇÃO 5: Carregar texto salvo
function carregarTextoSaved() {
    const textoSaved = localStorage.getItem('textoSalvo');
    const configSaved = localStorage.getItem('configuracao');
    
    if (textoSaved) {
        areaTexto.value = textoSaved;
        if (configSaved) {
            config = JSON.parse(configSaved);
            aplicarConfiguracaoSalva();
        }
        atualizarVisualizacao();
        atualizarContadores();
        mostrarMensagem('📂 Texto anterior carregado!');
    }
}

// 🔧 FUNÇÃO 6: Aplicar configuração salva
function aplicarConfiguracaoSalva() {
    selectFonte.value = config.fonte;
    corTexto.value = config.cor;
    tamanhoFonte.value = config.tamanho;
    valorTamanho.textContent = config.tamanho + 'px';
    atualizarNomeCor(config.cor);
    
    console.log('⚙️ Configuração salva aplicada:', config);
}

// 🎨 FUNÇÃO 7: Atualizar nome da cor
function atualizarNomeCor(corHex) {
    const cores = {
        '#000000': 'Preto',
        '#ffffff': 'Branco', 
        '#ff0000': 'Vermelho',
        '#00ff00': 'Verde',
        '#0000ff': 'Azul',
        '#ffff00': 'Amarelo',
        '#ff00ff': 'Rosa',
        '#00ffff': 'Ciano'
    };
    
    nomeCor.textContent = cores[corHex] || corHex;
}

// 😊 FUNÇÃO 8: Adicionar emojis aleatórios
function adicionarEmojis() {
    const emojis = ['😊', '😂', '🤩', '🎉', '✨', '🌟', '💫', '🔥', '💖', '👍', '🎨', '📚', '✏️', '🎯', '🚀'];
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    
    const inicio = areaTexto.selectionStart;
    const fim = areaTexto.selectionEnd;
    const texto = areaTexto.value;
    
    areaTexto.value = texto.substring(0, inicio) + emojiAleatorio + texto.substring(fim);
    
    atualizarVisualizacao();
    atualizarContadores();
    mostrarMensagem(`😊 Emoji ${emojiAleatorio} adicionado!`);
}

// 🗑️ FUNÇÃO 9: Limpar tudo
function limparTudo() {
    if (confirm('Tem certeza que quer limpar tudo? ✨')) {
        areaTexto.value = '';
        config.estilos = {
            negrito: false,
            italico: false, 
            sublinhado: false,
            riscado: false,
            borda: false,
            bordaPontilhada: false,
            sombra: false
        };
        
        config.efeitos = {
            piscar: false,
            arcoiris: false
        };
        
        selectFonte.value = 'Arial';
        corTexto.value = '#000000';
        tamanhoFonte.value = 16;
        valorTamanho.textContent = '16px';
        atualizarNomeCor('#000000');
        config.alinhamento = 'left';
        
        atualizarVisualizacao();
        atualizarContadores();
        mostrarMensagem('🧹 Tudo limpo! Pronto para criar algo novo!');
    }
}

// 📋 FUNÇÃO 10: Copiar texto
function copiarTexto() {
    if (!areaTexto.value.trim()) {
        mostrarMensagem('❌ Não há texto para copiar!', 'erro');
        return;
    }
    
    navigator.clipboard.writeText(areaTexto.value)
        .then(() => {
            mostrarMensagem('📋 Texto copiado para a área de transferência!');
        })
        .catch(err => {
            mostrarMensagem('❌ Erro ao copiar texto', 'erro');
            console.error('Erro ao copiar:', err);
        });
}

// 🎭 FUNÇÃO 11: Mudar tema
function mudarTema(novoTema, corFundo) {
    document.body.classList.remove('tema-escuro', 'tema-azul', 'tema-rosa', 'tema-verde', 'tema-ouro');
    
    if (novoTema !== 'claro') {
        document.body.classList.add(`tema-${novoTema}`);
    }
    
    config.tema = novoTema;
    mostrarMensagem(`🎭 Tema ${novoTema} ativado!`);
}

// 🏆 FUNÇÃO 12: Sistema de conquistas
function verificarConquistas() {
    let novasConquistas = 0;
    
    conquistas.forEach(conquista => {
        if (!conquista.conquistada && conquista.verificar()) {
            conquista.conquistada = true;
            novasConquistas++;
            mostrarConquista(conquista);
        }
    });
    
    return novasConquistas;
}

function mostrarConquista(conquista) {
    const mensagemConquista = document.createElement('div');
    mensagemConquista.className = 'mensagem-conquista';
    mensagemConquista.innerHTML = `
        <strong>🏆 Conquista Desbloqueada!</strong><br>
        ${conquista.nome}<br>
        <small>${conquista.descricao}</small>
    `;
    
    document.body.appendChild(mensagemConquista);
    
    setTimeout(() => {
        mensagemConquista.remove();
    }, 5000);
    
    console.log(`🏆 Conquista: ${conquista.nome}`);
}

// 🎯 FUNÇÃO 13: Sistema de Quiz
function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaQuiz.textContent = pergunta.pergunta;
    
    opcoesQuiz.forEach((btn, index) => {
        btn.textContent = pergunta.opcoes[index];
        btn.className = 'btn-opcao';
    });
    
    resultadoQuiz.textContent = '';
}

function verificarRespostaQuiz(resposta) {
    const pergunta = perguntas[perguntaAtual];
    
    opcoesQuiz.forEach((btn, index) => {
        if (index === pergunta.resposta) {
            btn.classList.add('correto');
        } else if (index === parseInt(resposta)) {
            btn.classList.add('errado');
        }
    });
    
    if (parseInt(resposta) === pergunta.resposta) {
        pontuacaoQuiz++;
        resultadoQuiz.textContent = '✅ Correto!';
    } else {
        resultadoQuiz.textContent = '❌ Tente novamente!';
    }
}

// ============================================
// 🔹 PARTE 4: CONFIGURAR EVENT LISTENERS
// ============================================

// ⌨️ EVENTO 1: Digitação em tempo real
areaTexto.addEventListener('input', function() {
    console.log('⌨️ Usuário está digitando...');
    atualizarVisualizacao();
    atualizarContadores();
});

// 🅱️ EVENTOS DE ESTILO
btnNegrito.addEventListener('click', function() {
    config.estilos.negrito = !config.estilos.negrito;
    atualizarVisualizacao();
});

btnItalico.addEventListener('click', function() {
    config.estilos.italico = !config.estilos.italico;
    atualizarVisualizacao();
});

btnSublinhado.addEventListener('click', function() {
    config.estilos.sublinhado = !config.estilos.sublinhado;
    atualizarVisualizacao();
});

btnRiscado.addEventListener('click', function() {
    config.estilos.riscado = !config.estilos.riscado;
    atualizarVisualizacao();
});

// 🔤 EVENTOS DE FORMATAÇÃO
selectFonte.addEventListener('change', function() {
    config.fonte = this.value;
    atualizarVisualizacao();
});

corTexto.addEventListener('input', function() {
    config.cor = this.value;
    contadorMudancasCor++;
    atualizarNomeCor(config.cor);
    atualizarVisualizacao();
});

tamanhoFonte.addEventListener('input', function() {
    config.tamanho = this.value;
    valorTamanho.textContent = config.tamanho + 'px';
    atualizarVisualizacao();
});

// 🎯 EVENTOS DE ALINHAMENTO
btnEsquerda.addEventListener('click', function() {
    config.alinhamento = 'left';
    atualizarVisualizacao();
});

btnCentro.addEventListener('click', function() {
    config.alinhamento = 'center';
    atualizarVisualizacao();
});

btnDireita.addEventListener('click', function() {
    config.alinhamento = 'right';
    atualizarVisualizacao();
});

// ✨ EVENTOS DE EFEITOS CRIATIVOS
btnEmojis.addEventListener('click', adicionarEmojis);

btnBorda.addEventListener('click', function() {
    config.estilos.borda = !config.estilos.borda;
    config.estilos.bordaPontilhada = false;
    atualizarVisualizacao();
});

btnBordaPontilhada.addEventListener('click', function() {
    config.estilos.bordaPontilhada = !config.estilos.bordaPontilhada;
    config.estilos.borda = false;
    atualizarVisualizacao();
});

btnSombra.addEventListener('click', function() {
    config.estilos.sombra = !config.estilos.sombra;
    atualizarVisualizacao();
});

btnPiscar.addEventListener('click', function() {
    config.efeitos.piscar = !config.efeitos.piscar;
    atualizarVisualizacao();
});

btnArcoiris.addEventListener('click', function() {
    config.efeitos.arcoiris = !config.efeitos.arcoiris;
    atualizarVisualizacao();
});

// 🎭 EVENTOS DE TEMAS
botoesTemas.forEach(botao => {
    botao.addEventListener('click', function() {
        const tema = this.getAttribute('data-tema');
        const cor = this.getAttribute('data-cor');
        mudarTema(tema, cor);
    });
});

// 💾 EVENTOS DE CONTROLES FINAIS
btnSalvar.addEventListener('click', salvarTexto);
btnLimpar.addEventListener('click', limparTudo);
btnCopiar.addEventListener('click', copiarTexto);

// 🎯 EVENTOS DO QUIZ
opcoesQuiz.forEach(btn => {
    btn.addEventListener('click', function() {
        verificarRespostaQuiz(this.getAttribute('data-resposta'));
    });
});

btnProximaPergunta.addEventListener('click', function() {
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    carregarPergunta();
});

// ============================================
// 🔹 PARTE 5: INICIALIZAÇÃO FINAL
// ============================================

console.log('🚀 Inicializando editor...');

// Configurações iniciais
atualizarNomeCor('#000000');
carregarTextoSaved();
carregarPergunta();

// Adicionar CSS para conquistas dinamicamente
const estiloConquistas = `
.mensagem-conquista {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #ff9ff3, #f368e0);
    color: white;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: aparecerConquista 0.5s ease-out;
}

@keyframes aparecerConquista {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    70% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = estiloConquistas;
document.head.appendChild(styleSheet);

// Mostrar mensagem de boas-vindas
setTimeout(() => {
    mostrarMensagem('✨ Bem-vindo ao Editor Criativo! Comece a digitar...');
}, 1000);

console.log('✅ Editor criativo totalmente carregado e pronto!');