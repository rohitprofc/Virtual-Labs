document.addEventListener("DOMContentLoaded", function() {
    const numberInput5 = document.getElementById("numberInput5");
    const numberInput6 = document.getElementById("numberInput6");
    const numberInput7 = document.getElementById("numberInput7");
    const numberInput8 = document.getElementById("numberInput8");
    const checkButton5 = document.getElementById("checkButton5");
    const checkButton6= document.getElementById("checkButton6");
    const checkButton7= document.getElementById("checkButton7");
    const checkButton8 = document.getElementById("checkButton8");
    const resetButton2 = document.getElementById("resetButton2");
    
    // Create a submit button and add it to the page
    const submitButton2 = document.createElement("button");
    submitButton2.innerText = "Submit";
    resetButton2.insertAdjacentElement("afterend", submitButton2);

    // Function to show a message box with a specified message and duration
    function showMessage(message, duration) {
        const messageBox2 = document.createElement("div");
        messageBox2.className = "message-box2";
        messageBox2.innerText = message;
        document.body.appendChild(messageBox2);
        setTimeout(function() {
            messageBox2.remove();
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

    checkButton5.addEventListener("click", function() {
        const guessedNumber5 = parseInt(numberInput5.value);
        if (guessedNumber5 === 1) {
            setButtonState(checkButton5, true);
        } else {
            setButtonState(checkButton5, false);
        }
    });

    checkButton6.addEventListener("click", function() {
        const guessedNumber6 = parseInt(numberInput6.value);
        if (guessedNumber6 === 6) {
            setButtonState(checkButton6, true);
        } else {
            setButtonState(checkButton6, false);
        }
    });
    checkButton7.addEventListener("click", function() {
        const guessedNumber7 = parseInt(numberInput7.value);
        if (guessedNumber7 === 5) {
            setButtonState(checkButton7, true);
        } else {
            setButtonState(checkButton7, false);
        }
    });

    checkButton8.addEventListener("click", function() {
        const guessedNumber8 = parseInt(numberInput8.value);
        if (guessedNumber8 === 0) {
            setButtonState(checkButton8, true);
        } else {
            setButtonState(checkButton8, false);
        }
    });

    function areAllInputsCorrect() {
        const guessedNumber5 = parseInt(numberInput5.value);
        const guessedNumber6 = parseInt(numberInput6.value);
        const guessedNumber7 = parseInt(numberInput7.value);
        const guessedNumber8 = parseInt(numberInput8.value);

        return guessedNumber5 === 1 && guessedNumber6=== 1 && guessedNumber7 === 1 && guessedNumber8 === 4;
    }
    

    submitButton2.addEventListener("click", function() {
        const messageBox2 = document.getElementById("messageBox2");
        const messageImage2 = document.getElementById("messageImage2");
    
        if (areAllInputsCorrect()) {
            messageImage2.src = "https://m.media-amazon.com/images/I/51sqOF2L+iL._AC_UF1000,1000_QL80_.jpg"; // Replace with the path to your success image
            messageBox2.classList.add("success");
        } else {
            messageImage2.src = "https://icon-library.com/images/try-again-icon/try-again-icon-3.jpg"; // Replace with the path to your failure image
            messageBox2.classList.add("failure");
        }
    
        messageBox2.style.display = "block";
    
        setTimeout(function() {
            messageBox2.style.display = "none";
            messageBox2.classList.remove("success", "failure");
            messageImage2.src = ""; // Clear the image source
        }, 2000);
    });
    
    

    checkButton5.addEventListener("click", function() {
        const guessedNumber5 = parseInt(numberInput5.value);
        if (guessedNumber5 === 1) {
            setButtonState(checkButton5, true);
        } else {
            setButtonState(checkButton5, false);
        }
    });

    // Add similar event listeners for checkButton2, checkButton3, and checkButton4 here.

    resetButton2.addEventListener("click", function() {
        numberInput5.value = "";
        numberInput6.value = "";
        numberInput7.value = "";
        numberInput8.value = "";

          // Reset all buttons to their initial state (no changes to text)
          checkButton5.innerText = "Check";
          checkButton5.classList.remove("green-button", "red-button"); // Remove green and red classes
          checkButton6.innerText = "Check";
          checkButton6.classList.remove("green-button", "red-button"); // Remove green and red classes
          checkButton7.innerText = "Check";
          checkButton7.classList.remove("green-button", "red-button"); // Remove green and red classes
          checkButton8.innerText = "Check";
          checkButton8.classList.remove("green-button", "red-button"); // Remove green and red classes
        // Reset other check buttons and their classes here.
    });
});
