let currentQuestion = 0;
let score = 0;
let selected = -1;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submitBtn");
const scoreElement = document.getElementById("scoreValue");

function loadQuestion() {

    if(currentQuestion >= questions.length){

        document.getElementById("quizBox").innerHTML =
        `<h2>🎉 恭喜完成挑战！</h2>
         <h3>最终得分：${score}/${questions.length}</h3>`;

        return;
    }

    selected = -1;

    const q = questions[currentQuestion];

    questionElement.innerText = q.question;

    answersElement.innerHTML = "";

    q.options.forEach((option,index)=>{

        const div = document.createElement("div");

        div.className = "option";

        div.innerText = option;

        div.onclick = ()=>{

            document.querySelectorAll(".option").forEach(o=>{
                o.classList.remove("selected");
            });

            div.classList.add("selected");

            selected = index;
        };

        answersElement.appendChild(div);

    });

}

submitButton.onclick = ()=>{

    if(selected === -1){

        alert("请选择一个答案！");

        return;
    }

    if(selected === questions[currentQuestion].answer){

        score++;

        scoreElement.innerText = score;

        alert("✅ 回答正确！");
    }
    else{

        alert("❌ 回答错误！");
    }

    currentQuestion++;

    loadQuestion();

}

loadQuestion();
