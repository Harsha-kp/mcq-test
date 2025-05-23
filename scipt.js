// Array of quiz questions and answers
const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    answer: "1995"
  }
];

// Track the current question and score
let currentQuestion = 0;
let score = 0;

// Load and display the current question and its options
function loadQuestion() {
  // Clear any previous score message
  document.getElementById("score").innerText = "";

  // Get the current question object
  const q = questions[currentQuestion];

  // Display the question text
  document.getElementById("question").innerText = q.question;

  // Display the answer options on the buttons
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.disabled = false;              // Enable all buttons
    btn.style.background = "#eee";     // Reset background color
  });
}

// Check the selected answer
function checkAnswer(btn) {
  const selected = btn.innerText;
  const correct = questions[currentQuestion].answer;

  // Compare selected option with the correct answer
  if (selected === correct) {
    score++;                           // Increment score for correct answer
    btn.style.background = "lightgreen"; // Highlight correct selection
  } else {
    btn.style.background = "tomato";   // Highlight incorrect selection
  }

  // Disable all option buttons after an answer is selected
  document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
}

// Load the next question or end the quiz
function nextQuestion() {
  currentQuestion++; // Move to the next question

  if (currentQuestion < questions.length) {
    loadQuestion(); // Load next question if available
  } else {
    // Show quiz completion message and final score
    document.getElementById("quiz").innerHTML = "<h2>Quiz Completed!</h2>";
    document.getElementById("score").innerText = `Your Score: ${score}/${questions.length}`;
    document.getElementById("next-btn").style.display = "none"; // Hide next button
  }
}

// Load the first question when the page is ready
window.onload = loadQuestion;
