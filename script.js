// Funcionalidad 1: cambiar entre modo oscuro y modo claro.
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "☀ Modo claro";
  } else {
    themeToggle.textContent = "☾ Modo oscuro";
  }
});

// Funcionalidad 2: abrir y cerrar el menú en celulares.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Funcionalidad 3: trivia con preguntas y respuestas.
const questions = [
  {
    question: "¿En qué ciudad nació Duki?",
    options: ["Córdoba", "Buenos Aires", "Rosario"],
    answer: 1
  },
  {
    question: "¿Cómo se llama el grupo que formó con YSY A y Neo Pistea?",
    options: ["Modo Diablo", "Los del Espacio", "Trueno"],
    answer: 0
  },
  {
    question: "¿En qué año publicó el álbum Ameri?",
    options: ["2019", "2021", "2024"],
    answer: 2
  }
];

let currentQuestion = 0;
const questionText = document.getElementById("question");
const optionsContainer = document.querySelector(".quiz-options");
const feedback = document.getElementById("quizFeedback");
const nextButton = document.getElementById("nextQuestion");

function showQuestion() {
  const item = questions[currentQuestion];
  questionText.textContent = item.question;
  feedback.textContent = "Elegí una respuesta para comprobar si acertaste.";
  optionsContainer.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (index === item.answer) {
        feedback.textContent = "¡Correcto! Muy bien.";
        feedback.style.color = "#22c55e";
      } else {
        feedback.textContent = "No es correcto. ¡Probá con otra pregunta!";
        feedback.style.color = "#f97316";
      }
    });

    optionsContainer.appendChild(button);
  });
}

nextButton.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  showQuestion();
});

showQuestion();
