//Guess the number game

const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const userGuess = parseInt(document.getElementById("guessInput").value);
            const messageElement = document.getElementById("message");
            
            if (isNaN(userGuess)) {
                messageElement.textContent = "Пожалуйста, введите число!";
                return;
            }
            
            if (userGuess < 1 || userGuess > 100) {
                messageElement.textContent = "Число должно быть от 1 до 100!";
                return;
            }

            attempts++;
            
            if (userGuess === secretNumber) {
                messageElement.innerHTML = `🎉 Поздравляем! Вы угадали число <strong>${secretNumber}</strong> за <strong>${attempts}</strong> попыток!`;
                document.getElementById("guessInput").disabled = true;
            } else if (userGuess < secretNumber) {
                messageElement.textContent = "⬆️ Загаданное число БОЛЬШЕ!";
            } else {
                messageElement.textContent = "⬇️ Загаданное число МЕНЬШЕ!";
            }
            
            document.getElementById("guessInput").value = "";
            document.getElementById("guessInput").focus();
        }
        
        document.getElementById("guessInput").addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                checkGuess();
            }
        });