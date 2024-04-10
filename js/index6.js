function calculateFactorial() {

    var numberInput = document.getElementById("numberInput").value;


    var factorialOutput = document.getElementById("factorialOutput");
    var number = parseInt(numberInput);


    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    
    factorialOutput.value = factorial;
}
