let thediv = document.getElementById("theDiv");
let secondDiv = document.getElementById("secondDiv");

const multiplicarYFactorial = () => {
    let num = parseInt(prompt("Ingrese numero mayor a 0 y menor a 20"))
    if(num < 20 && num > 0){
        let factorial = 1;
        for (let i = 1; i <= 10; i++) {
        let res = i * num;
        thediv.innerHTML += `${i} x ${num} = ${res} <br>`
        console.log(`${i} x ${num} = ${res}`)         
        }        
        for (let i = 1; i <= num; i++) {
        factorial *= i;   
        thediv.innerHTML += `Factorial de ${i} es: ${factorial}<br>`
        console.log(`Factorial de ${i} es: ${factorial}`)
        }
    } else {
        alert('ingrese numero menor a 20');  
        multiplicarYFactorial();      
      }
}
multiplicarYFactorial();
