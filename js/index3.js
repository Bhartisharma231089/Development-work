
// Using eval to assign values
eval('var truth = true;');
eval('var lie = false;');

// Get the output element from the HTML
var outputElement = document.getElementById('output');

// Display truth and lie in the HTML
outputElement.innerHTML = `Truth: ${truth}<br>Lie: ${lie}`;
