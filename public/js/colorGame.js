var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var element = document.querySelector("#loading");
window.addEventListener('load', (event) => {
    element.classList.add("fadeout");
 });

init();

function init() {
    setupSquare();
    setupButton();
    reset();
}

function setupButton() {
    resetButton.addEventListener("click", function() {
        reset();
    })
    for (const mode in modeButtons) {
        if (Object.hasOwnProperty.call(modeButtons, mode)) {
            const element = modeButtons[mode];
            element.addEventListener("click", function() {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                element.classList.add("selected");
                element.textContent == "Easy" ? numSquares = 6 : numSquares = 9;
                reset();
            })
        }
    }
}

function reset() {
    colors = generateArray(numSquares);
    changeColors();
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.innerHTML = pickedColor;
    resetButton.textContent = "New Color";
}

function setupSquare() {
    for (const square in squares) {
        if (Object.hasOwnProperty.call(squares, square)) {
            const element = squares[square];
            element.addEventListener("click", function() {
                if (element.style.background == pickedColor) {
                    messageDisplay.textContent = "Correct!!!!!";
                    changePickedColor();
                    if(numSquares ==21){
                        resetButton.textContent = "You can play again!!";
                    }else{
                    numSquares +=3;
                     reset();
                    }
                    

                } else {
                    element.style.background = "#232323";
                    messageDisplay.textContent = "Try Again!!!"
                }
            })

        }
    }
}

function pickColor() {
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];
}

function changePickedColor() {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = pickedColor;
    }
    h1.style.background = pickedColor;
}

function changeColors() {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function generateArray(num) {
    var arr = [];
    for (let index = 0; index < num; index++) {
        arr.push(generateColor());
    }
    return arr;
}

function randomforColor() {
    return Math.floor(Math.random() * 256);
}

function generateColor() {
    var r = randomforColor();
    var g = randomforColor();
    var b = randomforColor();

    return "rgb(" + r + ", " + g + ", " + b + ")";
}