const url_server = "http://localhost:4000";
const url_server1 = "http://localhost:4001";


function listarPessoas2() {

    	// recupera o elemento da tabela
        const tabela = document.querySelector('#tabela1');
        // verifica quantas linhas existem na tabela
        const contadorLinhas = tabela.rows.length;
        // apaga todas as linhas da tabela
        for(var i = contadorLinhas - 1; i > 0; i--) {
            tabela.deleteRow(i);
        }

    // faça algo antes de montar a tabela, SE NECESSÁRIO

    fetch(`${url_server}/carro`)
        .then(response => response.json())
        .then(data => {
            // Inserindo os dados da pessoa na tabela
            // fazendo um loop usando forEach para percorrer todos os dados retornados pelo servidor
            data.forEach(pessoa => {
                // Criando os elementos HTML
                const tabela = document.querySelector('#tabela1');
                const elementTr = document.createElement('tr');
                const tdCambio = document.createElement('td');
                const tdCombustivel = document.createElement('td');
                const tdModelo = document.createElement('td');
                const tdMarca = document.createElement('td');
                const tdPeso = document.createElement('td');
                const tdCor = document.createElement('td');
                const tdPlaca = document.createElement('td');
                const tdCidade = document.createElement('td');
                const tdAno = document.createElement('td');

                // Inserindo os dados da pessoa no elemento	
                tdCambio.textContent = pessoa.cambio;
                tdCombustivel.textContent = pessoa.combustivel;
                tdModelo.textContent = pessoa.modelo;
                tdMarca.textContent = pessoa.marca;
                tdPeso.textContent = pessoa.peso;
                tdCor.textContent = pessoa.cor;
                tdPlaca.textContent = pessoa.placa;
                tdCidade.textContent = pessoa.cidade;
                tdAno.textContent = pessoa.ano;

                // Inserindo os elementos nas linhas da tabela (tr => TableRow)
                elementTr.appendChild(tdCambio);
                elementTr.appendChild(tdCombustivel);
                elementTr.appendChild(tdModelo);
                elementTr.appendChild(tdMarca);
                elementTr.appendChild(tdPeso);
                elementTr.appendChild(tdCor);
                elementTr.appendChild(tdPlaca);
                elementTr.appendChild(tdCidade);
                elementTr.appendChild(tdAno);

                // Adicionando a linha com as informações na tabela
                tabela.appendChild(elementTr);
            });
        })
}


function listarPessoas1() {

    	// recupera o elemento da tabela
        const tabela = document.querySelector('#tabela2');
        // verifica quantas linhas existem na tabela
        const contadorLinhas = tabela.rows.length;
        // apaga todas as linhas da tabela
        for(var i = contadorLinhas - 1; i > 0; i--) {
            tabela.deleteRow(i);
        }

    // faça algo antes de montar a tabela, SE NECESSÁRIO

    fetch(`${url_server1}/caminhao`)
        .then(response => response.json())
        .then(data => {
            // Inserindo os dados da pessoa na tabela
            // fazendo um loop usando forEach para percorrer todos os dados retornados pelo servidor
            data.forEach(pessoa => {
                // Criando os elementos HTML
                const tabela = document.querySelector('#tabela2');
                const elementTr = document.createElement('tr');
                const tdEixos = document.createElement('td');
                const tdCombustivel = document.createElement('td');
                const tdModelo = document.createElement('td');
                const tdMarca = document.createElement('td');
                const tdPeso = document.createElement('td');
                const tdCor = document.createElement('td');
                const tdPlaca = document.createElement('td');
                const tdCidade = document.createElement('td');
                const tdAno = document.createElement('td');

                // Inserindo os dados da pessoa no elemento	
                tdEixos.textContent = pessoa.eixos;
                tdCombustivel.textContent = pessoa.combustivel;
                tdModelo.textContent = pessoa.modelo;
                tdMarca.textContent = pessoa.marca;
                tdPeso.textContent = pessoa.peso;
                tdCor.textContent = pessoa.cor;
                tdPlaca.textContent = pessoa.placa;
                tdCidade.textContent = pessoa.cidade;
                tdAno.textContent = pessoa.ano;

                // Inserindo os elementos nas linhas da tabela (tr => TableRow)
                elementTr.appendChild(tdEixos);
                elementTr.appendChild(tdCombustivel);
                elementTr.appendChild(tdModelo);
                elementTr.appendChild(tdMarca);
                elementTr.appendChild(tdPeso);
                elementTr.appendChild(tdCor);
                elementTr.appendChild(tdPlaca);
                elementTr.appendChild(tdCidade);
                elementTr.appendChild(tdAno);

                // Adicionando a linha com as informações na tabela
                tabela.appendChild(elementTr);
            });
        })
}