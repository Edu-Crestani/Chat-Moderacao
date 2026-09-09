const regexProibidas = /\b(b[o0]l[a4]|m[e3]rd[a4]|idi[o0]t[a4]|lix[o0])\b/gi;

function enviarMensagem() {
    const input = document.getElementById('inputMensagem');
    const mensagem = input.value.trim();
    if (!mensagem) return;

    const caixaMensagens = document.getElementById('caixaMensagens');
    const div = document.createElement('div');

    if (regexProibidas.test(mensagem)) {
        div.className = 'message blocked';
        div.textContent = 'MENSAGEM BLOQUEADA PELO SISTEMA';
    } else {
        div.className = 'message';
        div.textContent = mensagem;
    }

    caixaMensagens.appendChild(div);
    input.value = '';
    caixaMensagens.scrollTop = caixaMensagens.scrollHeight;
}

function verificarEnter(event) {
    if (event.key === 'Enter') enviarMensagem();
}