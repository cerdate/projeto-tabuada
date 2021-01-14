/*Exemplo de uma tabuada */




//Declaração de uma função //
function calculaTabuada(){
    
    //Obtendo do DOM tbody da tabela
let tabuada = document.querySelector('#tabuada tbody');
    //Obtendo o valor A DO CAMPO input number e convertendo em inteiro
let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando conteúdo do tbody 
tabuada.innerHTML='';
    //Criando um laço de repetição do 0 a 10 
for (let valorB = 0; valorB <= 10;  valorB++) {

    // Calculando o resultado da linha atual
    let resultado = valorA * valorB;
    // Criando template da Colunas da linha Atual
    let template = `
         
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>

        `;

         //Criando o elemento tr 
    let tr = document.createElement('tr');
        //Inserindo as clounas as linha
    tr.innerHTML = template;
      //Inserindo a linha na tabela
    tabuada.append(tr);

   }//fechando o for 

}  //fechando a função

// chamando a nossa função pela primeira vez 
calculaTabuada();

//Adicionando o evento de alteração ao campo numéro 
document.querySelector("#valorA").addEventListener('change', calculaTabuada);