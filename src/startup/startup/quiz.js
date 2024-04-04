// quiz.js

// Define your quiz questions and correct answers here
const quizData = [
    {
      question: "Question 1: What happens when you mix baking soda and vinegar?",
      image: "m1.jpg",
      options: ["They turn into water💦.", "They have a chemical reaction and create bubbles🫧."],
      correctAnswer: "b"
    },
    {
        question: "Question 2: What happens when you mix lemon juice and baking soda?",
        image: "m2.jpg",
        options: ["They have a chemical reaction and create bubbles.","They turn green."],
        correctAnswer: "a"
      },
      {
        question: "Question 3:  If you leave a nail in water for a long time, what can happen to the nail?",
        image: "m3.jpg",
        options: [" It turns blue.", "It gets rusty."],
        correctAnswer: "b"
      },
      {
        question: "Question 4: When you mix oil and water, what do you notice?",
        image: "m4.jpeg",
        options: ["They don't mix and form separate layers.","They turn into a solid."],
        correctAnswer: "a"
      },
      {
        question: "Question 5:  What happens when you heat butter in a pan?",
        image: "m5.jpeg",
        options: ["It changes color to green.", " It melts and becomes a liquid."],
        correctAnswer: "b"
      }
    // Add more questions in the same format
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quizQuestions = document.getElementById("quizQuestions");
  const quizScore = document.getElementById("quizScore");
  const scoreDisplay = document.getElementById("score");
  
  function displayQuestion() {
    const question = quizData[currentQuestion];
    if (!question) {
      // Quiz is finished
      quizQuestions.innerHTML = "Quiz is finished!";
      scoreDisplay.textContent = `${score} out of ${quizData.length}`;
    } else {
      quizQuestions.innerHTML = `
        <div class="quizQuestion">
          <h2>${question.question}</h2>
          <img src="${question.image}" alt="Question ${currentQuestion + 1}">
          ${question.options.map((option, index) => `
            <label>
              <input type="radio" name="q${currentQuestion}" value="${String.fromCharCode(97 + index)}"> ${option}
            </label>
          `).join('')}
          <button id="submitAnswer">Submit</button>
        </div>
      `;
  
      const submitButton = document.getElementById("submitAnswer");
      submitButton.addEventListener("click", checkAnswer);
    }
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedAnswer) {
      if (selectedAnswer.value === quizData[currentQuestion].correctAnswer) {
        score++;
        displayCelebration();
      }
      currentQuestion++;
      displayQuestion();
      scoreDisplay.textContent = score;
      
    }
  }
  
  displayQuestion();
  

  // quiz.js

function showCelebration() {
  const celebrationOverlay = document.getElementById("celebration-overlay");
  celebrationOverlay.style.display = "flex"; // Show the overlay
}

function hideCelebration() {
  const celebrationOverlay = document.getElementById("celebration-overlay");
  celebrationOverlay.style.display = "none"; // Hide the overlay
}

// Modify your existing code to display the celebration overlay after the quiz is finished
if (!question) {
  showCelebration();

  // You can set a timeout to hide the celebration overlay after a few seconds
  setTimeout(() => {
    hideCelebration();
    // Rest of your score display code
  }, 5000); // Adjust the time (in milliseconds) as needed
}
