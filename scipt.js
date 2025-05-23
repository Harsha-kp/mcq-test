// Array of quiz questions with options and correct answers
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    question: "What is the result of 3 * 4?",
    options: ["7", "12", "14", "24"],
    answer: "12"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the square root of 25?",
    options: ["3", "5", "7", "9"],
    answer: "5"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
    answer: "William Shakespeare"
  },
  {
    question: "Which gas do plants absorb from the air?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is H2O?",
    options: ["Oxygen", "Hydrogen", "Water", "Salt"],
    answer: "Water"
  },
  {
    question: "Which continent is India in?",
    options: ["Europe", "Asia", "Africa", "Australia"],
    answer: "Asia"
  },
  {
    question: "What color do you get when you mix red and white?",
    options: ["Pink", "Purple", "Blue", "Brown"],
    answer: "Pink"
  }
];

// Keep track of the current question number and the user's score
let currentQuestion = 0;
let score = 0;

// Function to load and display the current question and its options
function loadQuestion() {
  const q = questions[currentQuestion];

  // Display the question text
  document.getElementById("question").innerText = q.question;

  // Clear previous options
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  // Create buttons for each option dynamically
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option";        // Add CSS class for styling
    btn.innerText = option;          // Set button text to the option
    btn.onclick = () => checkAnswer(btn, q.answer); // Attach click handler
    optionsDiv.appendChild(btn);     // Add button to the options container
  });

  // Hide the Next button until an answer is selected
  document.getElementById("next-btn").style.display = "none";
}

// Function to check if the selected answer is correct
function checkAnswer(selectedBtn, correctAnswer) {
  // Disable all option buttons to prevent multiple answers
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(btn => btn.disabled = true);

  // Check if user's selection matches the correct answer
  if (selectedBtn.innerText === correctAnswer) {
    selectedBtn.classList.add("correct"); // Highlight correct answer green
    score++;                             // Increase score
  } else {
    selectedBtn.classList.add("wrong");   // Highlight wrong answer red

    // Highlight the correct answer button green for user feedback
    allOptions.forEach(btn => {
      if (btn.innerText === correctAnswer) btn.classList.add("correct");
    });
  }

  // Show the Next button to move on
  document.getElementById("next-btn").style.display = "block";
}

// Function to load the next question or show final result if quiz is over
function nextQuestion() {
  currentQuestion++; // Move to next question

  if (currentQuestion < questions.length) {
    loadQuestion();  // Load next question if available
  } else {
    // Hide quiz box and show result box with final score
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("score").innerText = `You scored ${score} out of ${questions.length}`;
  }
}

// Load the first question when the page is fully loaded
window.onload = loadQuestion;
