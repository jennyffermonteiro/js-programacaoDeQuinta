// Exercicio:
// Crie um vetor com 3 valores;
// Utilizando o método Splice, realize:
// Adicionar um valor no vetor;
// Remover um valor no vetor;
// Substituir um valor do vetor;

let v = ["PC", "Mouse", "Teclado"];

// adc valor no vetor;

v.splice(0,0,"Fone");
console.log(v);

// remove um valor no vetor;
v.splice(2,1);  // o 2 é a casa q vai sair o valor, e o 1 significa que sera somente 1 valor a partir daquela casa, ou seja ela mesma
console.log(v);

// substituir um valor do vetor;
v.splice(2,1,"Fonte");  // o 2 é a casa q vai ser substituido o valor, o 1 informa o valor que será retirado e a string que sera adc
console.log(v);
