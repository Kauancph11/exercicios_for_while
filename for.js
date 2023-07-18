const prompt = require('prompt-sync')();



/* let nomes = ["everton", "Lucas", "Cosme", "Stefany", "Kauan"]; {
    
    //                          ao inves de usar tamanho certo a percorrer, usar array.length
  /*   for (let index = 0; index < nomes.length; index++) {
        const posicao = nomes[index];

        console.log("o nome é: "+ posicao);
        
    } */

    //                    => significa aronfunction
   /*  nomes.forEach((cadaElemento, posicao) => {
        console.log("o nome é:" + posicao , cadaElemento);
    }); 
}*/

/* const frutas = ["pera","uva","maça","salada mista"];{

    /* for (let contador = 0; contador < frutas.length; contador++) {
        const cadaelemento = frutas[contador];
        console.log(contador, cadaelemento);
    } */

    /* frutas.forEach((i , cadaElemento) => {
        console.log(i, cadaElemento);
    });
} */

// WHILE //
/* 
let salario = 1000;

let contador = 0; */

/* while (salario < 5000) {

    salario += 100;

    console.log("seu salario ainda eh:" + salario);
    
} */

/* do {
     salario += 100;
     contador ++;
     console.log("seu salario ainda eh: "+ salario);
} while (salario <=5000);

    console.log(contador); */


   /*  let numeroEscolhido = "5";

    do {

        numeroEscolhido = prompt("digite um numero: ");


    } while (numeroEscolhido != "5"); */
   
    
    // let senha;

    // do {

    //     senha = prompt("Digite sua senha: ");

    //     if (senha != "123") {
    //      console.log("senha invalida!");   
    //     }
        

    // } while (senha != "123");


    

    // for( let numeros = 0; numeros <= 10; numeros++){
    //     console.log(numeros)

    // }

    // for(let numeros = 2; numeros <= 10 ; numeros += 2){
    //     console.log(numeros)
    // }

    // for(let numeros = 1; numeros <= 50 ; numeros += 2){
    //     console.log(numeros)
    // }

    // let numeros = parseInt(prompt("Digite um numero: "))
    // for(let i = 0; i <= 10; i++){
    //     let resultado = numeros * i
    //     console.log(`${numeros} x ${i} = ${resultado}`)
    // }
 
    // let numero = 0
    // let numero2 = 1
    // let numero3

    // for(let i = 0; i <= 10; i++){
    //     numero3 = numero + numero2
    //     numero = numero2
    //     numero2 = numero3
    //     console.log(numero3)
    // }

    // let numeropar = 0
    // while(numeropar <= 20){
    //     console.log(numeropar)
    //     numeropar += 2
    // }

    // let numero = 1
    // let numero2 = 0

    // while (numero2 <= 100){
    //     console.log(numero)
    //     numero += numero2

    //     numero2++
    // }


   
    

    let numero;

    do{
        numero = parseInt(prompt("Digite um numero: "))
    }
    while(numero > 0){
        console.log(numero)
    }

    
       


    

    
 
   