// Function to generate a random RGB color
function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  }
  
  // Function to handle button click event
  function changeColor() {
    var colorElement = document.getElementById("colorElement");
    colorElement.style.backgroundColor = getRandomColor();
  }
  
  // Attach click event listener to the button
  var changeColorButton = document.getElementById("changeColorButton");
  changeColorButton.addEventListener("click", changeColor);
  