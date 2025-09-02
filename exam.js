
let currentQ = 0;
let score = 0;
let answers = [];
let timer = 40 * 60; // 40 minutes

function loadQuestion() {
  const q = questions[currentQ];
  document.getElementById("questionText").innerText =
    `Q${q.id}. ${q.text}`;

  let optionsHtml = "";
  q.options.forEach((opt, i) => {
    const checked = answers[currentQ] === i ? "checked" : "";
    optionsHtml += `
      <div>
        <input type="radio" name="option" value="${i}" id="opt${i}" ${checked}>
        <label for="opt${i}">${opt}</label>
      </div>
    `;
  });

  document.getElementById("options").innerHTML = optionsHtml;
  updateNavigator();
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  const ans = parseInt(selected.value);
  answers[currentQ] = ans;

  if (ans === questions[currentQ].answer) {
    score++;
  }

  if (currentQ < questions.length - 1) {
    currentQ++;
    loadQuestion();
  } else {
    submitExam();
  }
}

function updateNavigator() {
  const nav = document.getElementById("navigator");
  nav.innerHTML = "";
  questions.forEach((q, i) => {
    const btn = document.createElement("button");
    btn.innerText = q.id;
    btn.onclick = () => {
      currentQ = i;
      loadQuestion();
    };
    if (answers[i] !== undefined) {
      btn.style.background = "green";
      btn.style.color = "white";
    } else {
      btn.style.background = "red";
      btn.style.color = "white";
    }
    nav.appendChild(btn);
  });
}

function submitExam() {
  document.getElementById("exam-container").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("navigator").style.display = "none";

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML =
    `<h2>Exam Finished!</h2>
     <p>Your Score: ${score} / ${questions.length}</p>`;
}

function startTimer() {
  const timerDisplay = document.getElementById("timer");
  const interval = setInterval(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerDisplay.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (timer <= 0) {
      clearInterval(interval);
      submitExam();
    }
    timer--;
  }, 1000);
}

function startCamera() {
  const video = document.getElementById("camera");
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(err => {
        console.error("Camera error:", err);
      });
  }
}

window.onload = () => {
  loadQuestion();
  startTimer();
  startCamera();
};
