const perguntas = [
    {
        pergunta: 'O que significa DOM em JavaScript?',
        respostas: [
            'Documento Orientado a Modelos',
            'Domínio Web',
            'Modelo de Objeto de Documento',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a função do método `parseInt()`?',
        respostas: [
            'Converter uma string para um número inteiro',
            'Arredondar um número para o inteiro mais próximo',
            'Calcular a raiz quadrada de um número',
        ],
        correta: 0
    },
    {
        pergunta: 'Como se declara uma variável em JavaScript?',
        respostas: [
            'let myVar = 10;',
            'variable myVar = 10;',
            'myVar = 10;',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a finalidade do operador ternário em JavaScript?',
        respostas: [
            'Comparar dois valores',
            'Atribuir um valor com base em uma condição',
            'Calcular a média de dois números',
        ],
        correta: 1
    },
    {
        pergunta: 'O que é closure em JavaScript?',
        respostas: [
            'Uma função que não tem corpo',
            'Um tipo de loop',
            'Uma função que tem acesso a variáveis em seu escopo léxico',
        ],
        correta: 2
    },
    {
        pergunta: 'Como se chama o processo de combinar dois arrays em JavaScript?',
        respostas: [
            'Concatenação',
            'Mesclagem',
            'Integração',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a diferença entre `let` e `const` na declaração de variáveis?',
        respostas: [
            '`let` é usado para variáveis que não serão alteradas, enquanto `const` é usado para variáveis mutáveis.',
            '`let` é usado para variáveis mutáveis, enquanto `const` é usado para variáveis que não serão alteradas.',
            'Não há diferença, ambos podem ser usados indistintamente.',
        ],
        correta: 1
    },
    {
        pergunta: 'O que é AJAX em JavaScript?',
        respostas: [
            'Uma biblioteca popular',
            'Uma técnica para atualizar partes de uma página sem recarregar a página inteira',
            'Um novo padrão de sintaxe',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a finalidade do método `map()` em arrays?',
        respostas: [
            'Filtrar elementos de um array',
            'Aplicar uma função a cada elemento do array e criar um novo array com os resultados',
            'Ordenar os elementos de um array',
        ],
        correta: 1
    },
    {
        pergunta: 'Como se faz um loop em um objeto em JavaScript?',
        respostas: [
            'Usando `for loop`',
            'Não é possível fazer um loop em objetos',
            'Usando `for...in loop` ou `Object.keys()`',
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz');

const template = document.querySelector('template')

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        quizItem.querySelector('dl').appendChild(dt);
    }
    
    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
}