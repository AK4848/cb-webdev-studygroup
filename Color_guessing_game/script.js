var colors = [];
var numSquares = 6;
var pickedColor;
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares(){
  for (var i = 0; i <squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square and compare to clickedColor
      var clickedColor = this.style.background;
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again!";
        }
    });
  }
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }

}
function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;

  h1.style.background = "steelblue";
  resetButton.textContent = "New colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function(){
reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array and add num random colors to arr and return that array
  var arr = [];
  for (var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  // pick a "red" from 0 - 255
  // pick a "green" from 0 - 255
  // pick a "blue" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
