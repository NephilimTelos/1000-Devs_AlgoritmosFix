/*12. A granja Frangotech possui um controle automatizado de cada frango da sua
produção. No pé direito do frango há um anel com um chip de identificação; no pé
esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo
que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo
para calcular o gasto total da granja para marcar todos os seus frangos que deverá ser
informado pelo usuário.*/

const prompt = require('prompt-sync')()

let qtd_franguinhos = Number(prompt('Informe a quantidade de franguinhos que a granja tem: '))
let valor_anel_ID = qtd_franguinhos * 4
let valor_anel_alimento = qtd_franguinhos * 7

console.log(`O gasto para os anéis de identificação de ${qtd_franguinhos} franguinhos é de R$${valor_anel_ID}`)
console.log(`O gasto para os anéis de alimentação de ${qtd_franguinhos} franguinhos é de R$${valor_anel_alimento}`)
