let questions = JSON.parse(localStorage.getItem("questions")) || [];
let answers = {};
let currentQ = 0;
let timeLeft = 40 * 60; // 40 min
let violations = 0;
let timerInterval;

function studentLogin() {
  const id = document.getElementById("studentId").value;
  const pass = document.getElementById("password").value;
  if (id && pass) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("exam-screen").style.display = "block";
    startExam();
  } else {
    alert("Enter valid ID and password!");
  }
}

async function startExam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById("camera").srcObject = stream;
  } catch {
    alert("Camera required!");
  }
  renderQuestion();
  renderNav();

  timerInterval = setInterval(() => {
    timeLeft--;
    let m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    let s = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("timer").innerText = `${m}:${s}`;
    if (timeLeft <= 0) submitExam();
  }, 1000);

  ["copy","paste","contextmenu"].forEach(evt => {
    document.addEventListener(evt, e => {
      e.preventDefault();
      violations++;
      document.getElementById("violations").innerText = "Violations: " + violations;
    });
  });
}

function renderQuestion() {
  let q = questions[currentQ];
  if (!q) return;
  let container = document.getElementById("question-container");
  container.innerHTML = `<h3>${q.text}</h3>`;
  q.options.forEach((opt, i) => {
    container.innerHTML += `
      <label>
        <input type="radio" name="q${q.id}" value="${i}" 
        ${answers[q.id]==i?"checked":""}
        onchange="markAnswer(${q.id},${i})"/> ${opt}
      </label><br>`;
  });
}

function renderNav() {
  let nav = document.getElementById("question-nav");
  nav.innerHTML = "";
  questions.forEach((q, i) => {
    let btn = document.createElement("button");
    btn.innerText = i+1;
    btn.className = answers[q.id]!==undefined ? "green" : "red";
    btn.onclick = () => { currentQ = i; renderQuestion(); renderNav(); };
    nav.appendChild(btn);
  });
}

function markAnswer(qId, val) {
  answers[qId] = val;
  renderNav();
}

function submitExam() {
  clearInterval(timerInterval);
  document.getElementById("exam-screen").style.display = "none";
  document.getElementById("submit-screen").style.display = "block";
  document.getElementById("final-violations").innerText = "Violations: " + violations;

  let results = JSON.parse(localStorage.getItem("results")) || [];
  results.push({ student: Date.now(), answers, violations });
  localStorage.setItem("results", JSON.stringify(results));
}
