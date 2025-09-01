const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

function adminLogin() {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;
  if (u===ADMIN_USER && p===ADMIN_PASS) {
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
    loadQuestions();
    loadResults();
  } else {
    alert("Invalid login");
  }
}

function addQuestion() {
  let text = document.getElementById("qText").value;
  let opt1 = document.getElementById("opt1").value;
  let opt2 = document.getElementById("opt2").value;
  let opt3 = document.getElementById("opt3").value;
  let opt4 = document.getElementById("opt4").value;
  let correct = document.getElementById("correct").value - 1;

  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let id = Date.now();
  questions.push({ id, text, options:[opt1,opt2,opt3,opt4], correct });
  localStorage.setItem("questions", JSON.stringify(questions));
  loadQuestions();
}

function loadQuestions() {
  let list = document.getElementById("questionList");
  list.innerHTML = "";
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  questions.forEach(q => {
    let li = document.createElement("li");
    li.innerText = q.text + " (" + q.options.join(", ") + ")";
    list.appendChild(li);
  });
}

function loadResults() {
  let container = document.getElementById("results");
  container.innerHTML = "";
  let results = JSON.parse(localStorage.getItem("results")) || [];
  results.forEach((r,i) => {
    container.innerHTML += `<p>Student ${i+1}: ${JSON.stringify(r)}</p>`;
  });
}
