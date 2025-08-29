<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Secure Test Demo</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f3f4f6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1, h2 { margin-bottom: 16px; }
    .question { margin-bottom: 20px; }
    .options label { display: block; margin: 6px 0; }
    button { background: #2563eb; color: #fff; padding: 10px 16px; border: none; border-radius: 8px; cursor: pointer; }
    button:hover { background: #1e40af; }
    .danger { color: #dc2626; }
  </style>
</head>
<body>
  <div class="container" id="app">
    <h1>Secure Test Demo</h1>
    <div id="start-screen">
      <video id="camera" width="100%" autoplay muted playsinline style="border-radius: 8px; background: black;"></video>
      <br /><br />
      <button onclick="startExam()">Start Test</button>
    </div>
    <div id="exam-screen" style="display:none;">
      <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
        <span id="timer">Time Left: 05:00</span>
        <span id="violations" class="danger">Violations: 0</span>
      </div>
      <div id="questions"></div>
      <button onclick="submitExam()">Submit</button>
    </div>
    <div id="submit-screen" style="display:none; text-align:center;">
      <h2>Test Submitted</h2>
      <p>Thank you! Your answers have been recorded.</p>
      <p id="final-violations"></p>
    </div>
  </div>  <script>
    const questions = [
      {
        id: 1,
        text: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3,
      },
      {
        id: 2,
        text: "What does CSS stand for?",
        options: [
          "Central Style Sheets",
          "Cascading Style Sheets",
          "Cascading Simple Sheets",
          "Cars SUVs Sailboats",
        ],
        correct: 1,
      },
    ];

    let timeLeft = 300; // 5 minutes
    let timerInterval;
    let violations = 0;

    function formatTime(sec) {
      const m = String(Math.floor(sec / 60)).padStart(2, "0");
      const s = String(sec % 60).padStart(2, "0");
      return `${m}:${s}`;
    }

    async function startExam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById("camera").srcObject = stream;
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("exam-screen").style.display = "block";
        loadQuestions();
        timerInterval = setInterval(() => {
          timeLeft--;
          document.getElementById("timer").innerText = "Time Left: " + formatTime(timeLeft);
          if (timeLeft <= 0) submitExam();
        }, 1000);
      } catch (err) {
        alert("Camera access required!");
      }
    }

    function loadQuestions() {
      const container = document.getElementById("questions");
      container.innerHTML = "";
      questions.forEach((q) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<p><strong>${q.text}</strong></p>`;
        q.options.forEach((opt, idx) => {
          div.innerHTML += `<label><input type='radio' name='q-${q.id}' value='${idx}'> ${opt}</label>`;
        });
        container.appendChild(div);
      });
    }

    function submitExam() {
      clearInterval(timerInterval);
      if (document.getElementById("camera").srcObject) {
        document.getElementById("camera").srcObject.getTracks().forEach(t => t.stop());
      }
      document.getElementById("exam-screen").style.display = "none";
      document.getElementById("submit-screen").style.display = "block";
      document.getElementById("final-violations").innerText = "Violations: " + violations;
    }

    // Anti-cheat events
    ["copy","paste","contextmenu"].forEach(evt => {
      document.addEventListener(evt, e => {
        e.preventDefault();
        violations++;
        document.getElementById("violations").innerText = "Violations: " + violations;
      });
    });
  </script></body>
</html>
