document.getElementById("submit-answer").addEventListener("click", function() {
  const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
  const correctAnswer = "bhawan"; // Changed from "mannie" to "bhawan"

  const feedbackBox = document.getElementById("feedback-box");
  const correctSound = document.getElementById("correct-sound");
  const incorrectSound = document.getElementById("incorrect-sound");

  // Check if the answer is correct
  if (userAnswer === correctAnswer.toLowerCase()) {
    feedbackBox.textContent = "Correct! Yes, it's Bhawan, the one I love the most!";  // Updated message
    feedbackBox.className = "correct-answer";
    correctSound.play();  // Play correct sound effect
  } else {
    feedbackBox.textContent = "Try again!";  // You can customize this message too
    feedbackBox.className = "incorrect-answer";
    incorrectSound.play();  // Play incorrect sound effect
  }
});
