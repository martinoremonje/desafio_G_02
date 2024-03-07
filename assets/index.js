let thediv = document.getElementById("theDiv");

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
        console.log(`Factorial de ${i} es: ${factorial}`)
        }
    } else {
        alert('Ingrese numero dentro del rango');  
        multiplicarYFactorial();      
      }
}
multiplicarYFactorial();
