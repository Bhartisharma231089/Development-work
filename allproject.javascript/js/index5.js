function updateColor() {
    
    var colorPicker = document.getElementById("colorPicker");
    var chosenColor = colorPicker.value;


    var textField = document.getElementById("textInput");


    textField.style.color = chosencolor;
}