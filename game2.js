       function generateProblem() {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            
            const operations = ['+', '-', '*', '/'];
            const operation = operations[Math.floor(Math.random() * operations.length)];
            
            let problem;
            let answer;
            
            switch(operation) {
                case '+':
                    problem = `${num1} + ${num2}`;
                    answer = num1 + num2;
                    break;
                case '-':
                    problem = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
                    answer = Math.max(num1, num2) - Math.min(num1, num2);
                    break;
                case '*':
                    problem = `${num1} * ${num2}`;
                    answer = num1 * num2;
                    break;
                case '/':
                    const product = num1 * num2;
                    problem = `${product} / ${num1}`;
                    answer = num2;
                    break;
            }
            
            return { problem, answer };
        }
        
        function startGame() {
            const { problem, answer } = generateProblem();
            
            document.getElementById('task').textContent = problem;
            
            const userAnswer = prompt(`Решите пример: ${problem}`);
            
            const resultElement = document.getElementById('result');
            
            if (userAnswer === null) {
                resultElement.textContent = 'Вы отменили ввод';
                resultElement.className = 'result';
                return;
            }
            
            const parsedAnswer = parseFloat(userAnswer);
            
            if (isNaN(parsedAnswer)) {
                resultElement.textContent = 'Пожалуйста, введите число!';
                resultElement.className = 'result incorrect';
            } else if (Math.abs(parsedAnswer - answer) < 0.0001) {
                resultElement.textContent = 'Правильно! 👍';
                resultElement.className = 'result correct';
            } else {
                resultElement.textContent = `Неправильно! Правильный ответ: ${answer}`;
                resultElement.className = 'result incorrect';
            }
        }
        
        window.onload = startGame;