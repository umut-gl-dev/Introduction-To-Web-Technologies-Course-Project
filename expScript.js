const questions = [
  {
    question: "1. Schrödinger’in kedisi düşünce deneyinde, kedi hangi durumda hem canlı hem ölüdür?",
    options: {
      a: "Kutunun içi gözlemlendiğinde",
      b: "Kutunun içi gözlemlenmeden önce",
      c: "Kedi ölüyse"
    },
    correct: "b"
  },
  {
    question: "2. Schrödinger'in kedisi deneyinde kutunun içindeki zehirli mekanizma neye bağlıdır?",
    options: {
      a: "Kedinin yaşına",
      b: "Atom altı parçacığın bozunmasına",
      c: "Zamanlayıcıya"
    },
    correct: "b"
  },
  {
    question: "3. Kuantum süperpozisyon nedir?",
    options: {
      a: "Tüm maddelerin aynı anda aynı yerde olması",
      b: "Parçacığın birden fazla durumda aynı anda bulunması",
      c: "Enerjinin korunumu"
    },
    correct: "b"
  }
];

let current = 0;
let score = 0;

function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("questionContainer").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
  showQuestion(current);
}

function showQuestion(index) {
  const q = questions[index];
  const container = document.getElementById("questionContainer");
  container.innerHTML = `
    <div class="question-block">
      <p>${q.question}</p>
      ${Object.entries(q.options)
        .map(
          ([key, val]) => `
            <label class="option">
              <input type="radio" name="answer" value="${key}"> ${val}
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Lütfen bir cevap seçin.");
    return;
  }

  if (selected.value === questions[current].correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    showQuestion(current);
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";

  const resultText = document.getElementById("quizResult");

  if (score === questions.length) {
    resultText.innerText = `🎉 Tebrikler! Tüm soruları doğru cevapladınız! (${score}/${questions.length})`;
    resultText.style.color = "lightgreen";
  } else if (score > 0) {
    resultText.innerText = `🙂 ${score} doğru cevap verdiniz. Daha iyisini yapabilirsiniz!`;
    resultText.style.color = "orange";
  } else {
    resultText.innerText = `😕 Hiç doğru cevabınız yok. Bir daha deneyin!`;
    resultText.style.color = "salmon";
  }
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.getElementById("resultScreen").style.display = "none";
  document.getElementById("startScreen").style.display = "block";
}