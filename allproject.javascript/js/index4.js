function displayNumber() {
    // Get the input value
    var inputNumber = document.getElementById("numberInput").value;

    // Get the display field
    var displayField = document.getElementById("displayField");

    // Display the input value in the display field
    displayField.textContent = "Entered Number: " + inputNumber;
}