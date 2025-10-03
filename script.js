
function explorePillar(pillar) {
    const detailBox = document.getElementById('pillar-detail');
    let content = '';

    switch(pillar) {
        case 'mente':
            content = `
                <h4> A Mente: O Solo do Seu Jardim</h4>
                <p><strong>Foco: Pensamentos e Crenças.</strong></p>
                <p>Como Elias, que via as ervas daninhas, nossa mente produz pensamentos destrutivos. O cuidado mental envolve **adubar** o solo com informações positivas e **remover** as crenças limitantes. Pratique a **atenção plena** (mindfulness) e desafie o 'e se' que te paralisa.</p>
                <p class="reflection"><strong>Pergunte-se:</strong> Quais pensamentos eu estou regando todos os dias?</p>
            `;
            break;
        case 'coracao':
            content = `
                <h4> O Coração: As Raízes da Sua Força</h4>
                <p><strong>Foco: Emoções e Sentimentos.</strong></p>
                <p>O coração é onde residem as emoções não processadas. Cuidar dele é dar **espaço para a dor e a alegria**. Permita-se sentir sem julgamento. Desenvolva a **autocompaixão**—trate-se com a mesma gentileza que você trataria um amigo em dificuldade.</p>
                <p class="reflection"><strong>Pergunte-se:</strong> Eu sou gentil com meu coração quando ele está sofrendo?</p>
            `;
            break;
        case 'acoes':
            content = `
                <h4> As Ações: Os Frutos da Sua Resiliência</h4>
                <p><strong>Foco: Hábitos e Limites.</strong></p>
                <p>Nossas ações são o que floresce. Cuidar das ações é estabelecer **limites claros** (o que você pode e não pode aceitar) e buscar **conexão** (comunidade e apoio). Não tenha medo de **pedir ajuda**—é um ato de força, não de fraqueza.</p>
                <p class="reflection"><strong>Pergunte-se:</strong> Minhas ações e meus limites estão me protegendo ou me esgotando?</p>
            `;
            break;
        default:
             content = `<p>Ocorreu um erro ao carregar o conteúdo. Por favor, tente novamente.</p>`;
    }

    detailBox.innerHTML = content;
}

