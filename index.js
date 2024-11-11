document.addEventListener("DOMContentLoaded", function () {
  const quizSteps = document.querySelectorAll(".quiz-step");
  let currentStepIndex = 0;

  function showStep(index) {
    quizSteps.forEach((step, i) => {
      step.classList.toggle("quiz-step--active", i === index);
    });
  }

  document.querySelector("[quiz-btn-next]").addEventListener("click", function () {
    if (currentStepIndex < quizSteps.length - 1) {
      currentStepIndex++;
      showStep(currentStepIndex);
    }
  });

  document.querySelector("[quiz-btn-back]").addEventListener("click", function () {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      showStep(currentStepIndex);
    }
  });

  showStep(currentStepIndex);
});