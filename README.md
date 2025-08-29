<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Secure Exam Panel</title>
  <style>
    body { font-family: Arial, sans-serif; margin:0; padding:0; background:#f3f4f6; }
    .container { max-width: 900px; margin:20px auto; background:#fff; padding:20px; border-radius:12px; box-shadow:0 2px 10px rgba(0,0,0,0.1);}
    h1 { text-align:center; margin-bottom:20px; }
    #video { width:200px; border-radius:8px; border:2px solid #2563eb; }
    .top-bar { display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; }
    #timer { font-weight:bold; color:#dc2626; }
    #violations { color:#dc2626; }
    .question-box { margin-top:20px; }
    .options label { display:block; margin:6px 0; }
    button { padding:8px 14px; background:#2563eb; color:#fff; border:none; border-radius:6px; cursor:pointer; }
    button:hover { background:#1e40af; }
    .navigation { margin-top:20px; display:flex; flex-wrap:wrap; gap:8px; }
    .nav-btn { width:35px; height:35px; border-radius:50%; border:none; cursor:pointer; font-weight:bold; }
    .unsolved { background:#dc2626; color:#fff; }
    .solved { background:#16a34a; color:#fff; }
    .current { border:2px solid #000; }
    #submit-screen { text-align:center; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Secure Exam Panel</h1>
    <div class="top-bar">
      <video id="video" autoplay muted playsinline></video>
      <div>
        <div id="timer">Time Left: 40:00</div>
        <div id="violations">Violations: 0</div>
      </div>
    </div>

    <div id="exam-screen">
      <div id="question-container" class="question-box"></div>
      <div style="margin-top:15px;">
        <button id="next-btn" onclick="nextQuestion()">Next</button>
        <button onclick="submitExam()">Submit Exam</button>
      </div>
      <div class="navigation" id="navigation"></div>
    </div>

    <div id="submit-screen" style="display:none;">
      <h2>Test Submitted</h2>
      <p>Thank you! Your answers have been recorded.</p>
      <p id="final-violations"></p>
    </div>
  </div>

  <script>
    // 🔹 Add Your Questions Here
    const questions = [
      {
        id: 1,
        text: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
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
      },
      {
        id: 3,
        text: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "HighText Machine Language",
        ],
      },
    ];

    let currentQ = 0;
    let answers = {};
    let timeLeft = 2400; // 40 min = 2400 sec
    let timerInterval;
    let violations = 0;

    // Camera Preview
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video:true });
        document.getElementById("video").srcObject = stream;
      } catch (err) {
        alert("Camera access required for exam!");
      }
    }
    startCamera();

    // Timer
    function formatTime(sec) {
      const m = String(Math.floor(sec/60)).padStart(2,"0");
      const s = String(sec%60).padStart(2,"0");
      return `${m}:${s}`;
    }
    timerInterval = setInterval(()=>{
      timeLeft--;
      document.getElementById("timer").innerText = "Time Left: "+formatTime(timeLeft);
      if(timeLeft<=0) submitExam();
    },1000);

    // Load Question
    function loadQuestion(index){
      const q = questions[index];
      const container = document.getElementById("question-container");
      container.innerHTML = `<p><b>Q${index+1}. ${q.text}</b></p>`;
      q.options.forEach((opt, idx)=>{
        container.innerHTML += `<label><input type='radio' name='q-${q.id}' value='${idx}' ${answers[q.id]==idx?"checked":""} onchange='markAnswered(${q.id},${idx})'> ${opt}</label>`;
      });

      // Update navigation highlight
      document.querySelectorAll(".nav-btn").forEach((btn,i)=>{
        btn.classList.remove("current");
        if(i===index) btn.classList.add("current");
      });
    }

    // Mark Answered
    function markAnswered(qid, ans){
      answers[qid] = ans;
      updateNav();
    }

    // Navigation buttons setup
    function setupNav(){
      const nav = document.getElementById("navigation");
      nav.innerHTML = "";
      questions.forEach((q,i)=>{
        const btn = document.createElement("button");
        btn.innerText = i+1;
        btn.className = "nav-btn unsolved";
        btn.onclick = ()=>{ currentQ=i; loadQuestion(i); };
        nav.appendChild(btn);
      });
      updateNav();
    }

    // Update nav colors
    function updateNav(){
      questions.forEach((q,i)=>{
        const btn = document.getElementById("navigation").children[i];
        if(answers[q.id]!==undefined){
          btn.className="nav-btn solved";
        }else{
          btn.className="nav-btn unsolved";
        }
        if(i===currentQ) btn.classList.add("current");
      });
    }

    function nextQuestion(){
      if(currentQ<questions.length-1){
        currentQ++;
        loadQuestion(currentQ);
      } else {
        alert("This was the last question!");
      }
    }

    function submitExam(){
      clearInterval(timerInterval);
      document.getElementById("exam-screen").style.display="none";
      document.getElementById("submit-screen").style.display="block";
      document.getElementById("final-violations").innerText = "Violations: "+violations;
    }

    // Anti-cheat events
    ["copy","paste","contextmenu"].forEach(evt=>{
      document.addEventListener(evt,e=>{
        e.preventDefault();
        violations++;
        document.getElementById("violations").innerText = "Violations: "+violations;
      });
    });

    // Init
    setupNav();
    loadQuestion(currentQ);
  </script>
</body>
</html>
