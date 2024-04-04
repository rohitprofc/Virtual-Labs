document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const numberInput2 = document.getElementById("numberInput2");
    const numberInput3 = document.getElementById("numberInput3");
    const numberInput4 = document.getElementById("numberInput4");
    const checkButton = document.getElementById("checkButton");
    const checkButton2 = document.getElementById("checkButton2");
    const checkButton3 = document.getElementById("checkButton3");
    const checkButton4 = document.getElementById("checkButton4");
    const resetButton = document.getElementById("resetButton");
    
    // Create a submit button and add it to the page
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    resetButton.insertAdjacentElement("afterend", submitButton);

    // Function to show a message box with a specified message and duration
    function showMessage(message, duration) {
        const messageBox = document.createElement("div");
        messageBox.className = "message-box";
        messageBox.innerText = message;
        document.body.appendChild(messageBox);
        setTimeout(function() {
            messageBox.remove();
        }, duration);
    }

    function setButtonState(button, correct) {
        if (correct) {
            button.innerText = "✓";
            button.style.backgroundColor = "green";
        } else {
            button.innerText = "❌";
            button.style.backgroundColor = "red";
        }
    }

    checkButton.addEventListener("click", function() {
        const guessedNumber = parseInt(numberInput.value);
        if (guessedNumber === 1) {
            setButtonState(checkButton, true);
        } else {
            setButtonState(checkButton, false);
        }
    });

    checkButton2.addEventListener("click", function() {
        const guessedNumber2 = parseInt(numberInput2.value);
        if (guessedNumber2 === 1) {
            setButtonState(checkButton2, true);
        } else {
            setButtonState(checkButton2, false);
        }
    });
    checkButton3.addEventListener("click", function() {
        const guessedNumber3 = parseInt(numberInput3.value);
        if (guessedNumber3 === 1) {
            setButtonState(checkButton3, true);
        } else {
            setButtonState(checkButton3, false);
        }
    });

    checkButton4.addEventListener("click", function() {
        const guessedNumber4 = parseInt(numberInput4.value);
        if (guessedNumber4 === 4) {
            setButtonState(checkButton4, true);
        } else {
            setButtonState(checkButton4, false);
        }
    });

    function areAllInputsCorrect() {
        const guessedNumber = parseInt(numberInput.value);
        const guessedNumber2 = parseInt(numberInput2.value);
        const guessedNumber3 = parseInt(numberInput3.value);
        const guessedNumber4 = parseInt(numberInput4.value);

        return guessedNumber === 1 && guessedNumber2 === 1 && guessedNumber3 === 1 && guessedNumber4 === 4;
    }
    

    submitButton.addEventListener("click", function() {
        const messageBox = document.getElementById("messageBox");
        const messageImage = document.getElementById("messageImage");
    
        if (areAllInputsCorrect()) {
            messageImage.src = "https://m.media-amazon.com/images/I/51sqOF2L+iL._AC_UF1000,1000_QL80_.jpg"; // Replace with the path to your success image
            messageBox.classList.add("success");
        } else {
            messageImage.src = "https://icon-library.com/images/try-again-icon/try-again-icon-3.jpg"; // Replace with the path to your failure image
            messageBox.classList.add("failure");
        }
    
        messageBox.style.display = "block";
    
        setTimeout(function() {
            messageBox.style.display = "none";
            messageBox.classList.remove("success", "failure");
            messageImage.src = ""; // Clear the image source
        }, 2000);
    });
    
    

    checkButton.addEventListener("click", function() {
        const guessedNumber = parseInt(numberInput.value);
        if (guessedNumber === 1) {
            setButtonState(checkButton, true);
        } else {
            setButtonState(checkButton, false);
        }
    });

    // Add similar event listeners for checkButton2, checkButton3, and checkButton4 here.

    resetButton.addEventListener("click", function() {
        numberInput.value = "";
        numberInput2.value = "";
        numberInput3.value = "";
        numberInput4.value = "";

          // Reset all buttons to their initial state (no changes to text)
          checkButton.innerText = "Check";
          checkButton.classList.remove("green-button", "red-button"); // Remove green and red classes
          checkButton2.innerText = "Check";
          checkButton2.classList.remove("green-button", "red-button"); // Remove green and red classes
          checkButton3.innerText = "Check";
          checkButton3.classList.remove("green-button", "red-button"); // Remove green and red classes
          checkButton4.innerText = "Check";
          checkButton4.classList.remove("green-button", "red-button"); // Remove green and red classes
        // Reset other check buttons and their classes here.
    });
});

const tasksButton = document.getElementById("tasksButton");
const level1Button = document.getElementById("level1Button");

tasksButton.addEventListener("click", function() {
    level1Content.style.display = "none";
    level2Content.style.display = "none";
    if (level1Button.style.display === "none" || level1Button.style.display === "") {
        level1Button.style.display = "block";
    } else {
        level1Button.style.display = "none";
    }
});
const level2Button = document.getElementById("level2Button");

tasksButton.addEventListener("click", function() {
    level1Content.style.display = "none";
    level2Content.style.display = "none";
    if (level2Button.style.display === "none" || level2Button.style.display === "") {
        level2Button.style.display = "block";
    } else {
        level2Button.style.display = "none";
    }
});


    const level1Content = document.getElementById("level1Content");

    level1Button.addEventListener("click", function() {
        level2Content.style.display = "none";
        if (level1Content.style.display === "none" || level1Content.style.display === "") {
            level1Content.style.display = "block";
        } else {
            level1Content.style.display = "none";
        }
    });

    // Existing code...


const level2Content = document.getElementById("level2Content");

level2Button.addEventListener("click", function() {
    level1Content.style.display = "none";
    if (level2Content.style.display === "none" || level2Content.style.display === "") {
        level2Content.style.display = "block";
    } else {
        level2Content.style.display = "none";
    }

});







