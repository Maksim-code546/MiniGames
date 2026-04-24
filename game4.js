const quiz = [
            {
                question: "Какой цвет небо в ясный день?",
                options: ["Красный", "Синий", "Зеленый"],
                correctAnswer: 1
            },

            {
                question: "Сколько дней в неделе?",
                options: ["6", "7", "8"],
                correctAnswer: 1
            },

            {
                question: "Сколько пальцев на одной руке?",
                options: ["4", "5", "6"],
                correctAnswer: 1
            },

            {
                question: "Какая планета известна как Красная планета?",
                options: ["Венера", "Марс", "Юпитер"],
                correctAnswer: 1
            },
            
            {
                question: "Какой газ преобладает в атмосфере Земли?",
                options: ["Кислород", "Азот", "Углекислый газ"],
                correctAnswer: 1
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        const quizContainer = document.getElementById('quiz-container');
        const resultDiv = document.getElementById('result');

        function showQuestion() {
            if (currentQuestion >= quiz.length) {
                showResult();
                return;
            }

            const question = quiz[currentQuestion];
            let html = `<div class="question">
                <h3>${question.question}</h3>`;
            
            question.options.forEach((option, index) => {
                html += `<label>
                    <input type="radio" name="answer" value="${index}">
                    ${option}
                </label><br>`;
            });
            
            html += `<button onclick="checkAnswer()">Ответить</button>
                </div>`;
            
            quizContainer.innerHTML = html;
        }

        function checkAnswer() {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            
            if (!selectedOption) {
                alert("Пожалуйста, выберите ответ!");
                return;
            }

            const userAnswer = parseInt(selectedOption.value);
            if (userAnswer === quiz[currentQuestion].correctAnswer) {
                score++;
            }

            currentQuestion++;
            showQuestion();
        }

        function showResult() {
            quizContainer.innerHTML = '';
            resultDiv.innerHTML = `
                <h2>Викторина завершена!</h2>
                <p>Ваш результат: ${score} из ${quiz.length}</p>
                <p>Процент правильных ответов: ${Math.round((score / quiz.length) * 100)}%</p>
            `;
        }

        showQuestion();