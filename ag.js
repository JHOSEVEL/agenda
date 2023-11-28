


function contato() {
    const nome_c = document.getElementById('nome').value;
    const tele_c = document.getElementById('telefone').value;

    // Evita que sejam adicionados valores nulos
    if (!nome_c || !tele_c) {
        alert('Por favor, digite o nome e o telefone');
        return;
    }

    // Verificando se o telefone ja existe.
    const tbody = document.getElementById('linha');
    const existingTelefones = Array.from(tbody.getElementsByTagName('td'))
        .filter(td => td.className === 'telefone')
        .map(td => td.innerText);

    if (existingTelefones.includes(tele_c)) {
        alert('Telefone ja existe cadastrado. Por favor verifique o numero e tente novamente.');
        return;
    }

    // Criando uma nova linha
    let linha = '<tr>';
    linha += `<td>${nome_c}</td>`;
    linha += `<td class="telefone">${tele_c}</td>`;
    linha += '</tr>';

    // Adicionando a linha a tabela
    tbody.innerHTML += linha;

    // Limpando os campos apos a adicao
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
