// Lista de Passos
const passos = [
    {
        titulo: "Passo 1: Acessar ao Portal Jumpcloud",
        descricao: "Acesse o link: <a href='https://console.jumpcloud.com/login' target='_blank'>Jumpcloud Login</a>",
    },
    {
        titulo: "Passo 2: Inserir e-mail e senha provisória",
        descricao: "Use seu e-mail profissional e a senha provisória fornecida.",
    },
    {
        titulo: "Passo 3: Cadastrar Multi-Fator",
        descricao: "Recomendamos o uso do Jumpcloud Protect.",
    },
    {
        titulo: "Passo 4: Acessar Campo Segurança",
        descricao: "Navegue até a aba 'Segurança' no painel.",
    },
    {
        titulo: "Passo 5: Resetar Senha",
        descricao: "Clique em 'Resetar Senha' e siga as instruções.",
    },
    {
        titulo: "Passo 6: Criar Nova Senha",
        descricao: "Sua senha deve ter 12 dígitos, com letras maiúsculas, minúsculas, números e caracteres especiais.",
    },
    {
        titulo: "Passo 7: Senha Alterada",
        descricao: "Confirme a alteração da senha.",
    },
    {
        titulo: "Passo 8: Fechar o Portal",
        descricao: "Você pode fechar o portal após concluir.",
    },
    {
        titulo: "Passo 9: Configurar Google Authenticator",
        descricao: "Acesse sua conta Google e vá até a aba 'Segurança'.",
    },
    {
        titulo: "Passo 10: Adicionar Novo Autenticador",
        descricao: "Use o mesmo aplicativo autenticador configurado no Jumpcloud.",
    },
    {
        titulo: "Passo 11: Finalizar Configuração",
        descricao: "Revise todas as configurações e conclua o processo.",
    },
];

// Função para gerar os passos
function gerarPassos() {
    const listaPassos = document.querySelector('.lista-passos');

    passos.forEach((passo, index) => {
        // Cria o item do passo
        const passoItem = document.createElement('div');
        passoItem.classList.add('passo-item');
        passoItem.innerHTML = `
            <div>
                <h3>${passo.titulo}</h3>
                <p>${passo.descricao}</p>
            </div>
            <input type="checkbox" onchange="atualizarProgresso(${index})">
        `;
        listaPassos.appendChild(passoItem);
    });
}

// Função para atualizar o progresso
function atualizarProgresso(index) {
    const passos = document.querySelectorAll('.passo-item');
    const finalizarBtn = document.getElementById('finalizar-btn');
    const linhaPreenchida = document.querySelector('.linha-progresso-preenchida');
    const porcentagemProgresso = document.querySelector('.porcentagem-progresso');
    const logoGreenn = document.getElementById('logo-greenn');

    // Marca o passo como concluído
    passos[index].classList.add('concluido');

    // Atualiza a linha de progresso
    const porcentagem = ((index + 1) / passos.length) * 100;
    linhaPreenchida.style.height = `${porcentagem}%`;

    // Atualiza a porcentagem exibida
    porcentagemProgresso.textContent = `${Math.round(porcentagem)}%`;

    // Atualiza a cor do logo Greenn
    logoGreenn.style.background = `linear-gradient(135deg, #0dd65a ${porcentagem}%, #00c6ff ${porcentagem}%)`;
    logoGreenn.style.webkitBackgroundClip = 'text';
    logoGreenn.style.webkitTextFillColor = 'transparent';

    // Verifica se todos os passos foram concluídos
    const todosConcluidos = Array.from(passos).every(passo => passo.classList.contains('concluido'));
    if (todosConcluidos) {
        finalizarBtn.disabled = false;
    }
}

// Função para finalizar o checklist
function finalizarChecklist() {
    const modal = document.getElementById('modal-conclusao');
    modal.style.display = 'flex'; // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal-conclusao');
    modal.style.display = 'none'; // Oculta o modal
}

// Inicializa os passos ao carregar a página
window.onload = gerarPassos;