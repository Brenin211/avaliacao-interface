const url_server = "http://localhost:4001";


function cadastrar() {
    window.alert(`Voce foi cadastrado com sucesso!!`);

    console.log('Enviando dados ao servidor...');

    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
        combustivel: document.querySelector('[name="Combustivel"]').value,
        marca: document.querySelector('[name="Marca"]').value,
        placa: document.querySelector('[name="Placa"]').value,
        modelo: document.querySelector('[name="Modelo"]').value,
        peso: document.querySelector('[name="Peso"]').value,
        cor: document.querySelector('[name="cor"]').value,
        cidade: document.querySelector('[name="Cidade"]').value,
        ano: document.querySelector('[name="ano"]').value,
        eixos: document.querySelector('[name="eixos"]').value,
    }

    // Requisição para back-end

    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastro`, {
        // define o uso do método POST
        method: 'POST',
        // informações sobre o cabeçalho da requisição
        headers: {
            'Content-Type': 'application/json'
        },
        // transforma os dados da requisição em um JSON chamado body
        body: JSON.stringify(dados)
    })
        // Depois de feita a requisição, o front-end irá receber um retorno do servidor
        .then(response => response.json())
        // Se toda a requisição deu certo, será informado no log
        .then(dados => {
            console.log('Resposta do servidor:', dados);
            // Faça algo com a resposta do servidor, se necessário
        })
        // Caso tenha algum tipo de erro na requisição, é lançada a excessão
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Trate os erros, se necessário
        });


}



