const choices = document.querySelectorAll('.choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const resultText = document.getElementById('result-text');
        const userScoreEl = document.getElementById('user-score');
        const computerScoreEl = document.getElementById('computer-score');
        
        let userScore = 0;
        let computerScore = 0;
        
        const options = ['камень', 'ножницы', 'бумага'];
        
        choices.forEach(choice => {
            choice.addEventListener('click', () => {
                choices.forEach(c => c.classList.remove('selected'));
                
                const userChoice = choice.getAttribute('data-choice');
                choice.classList.add('selected');
                
                const randomIndex = Math.floor(Math.random() * options.length);
                const computerChoice = options[randomIndex];
                
                computerChoiceEl.innerHTML = `<img src="https://emojicdn.elk.sh/${
                    computerChoice === 'камень' ? '🪨' : 
                    computerChoice === 'ножницы' ? '✂️' : '🧻'
                }" alt="${computerChoice}">`;
                
                let result;
                
                if (userChoice === computerChoice) {
                    result = 'Ничья!';
                } else if (
                    (userChoice === 'камень' && computerChoice === 'ножницы') ||
                    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
                    (userChoice === 'бумага' && computerChoice === 'камень')
                ) {
                    result = 'Вы победили!';
                    userScore++;
                } else {
                    result = 'Компьютер победил!';
                    computerScore++;
                }
                
                resultText.textContent = result;
                userScoreEl.textContent = userScore;
                computerScoreEl.textContent = computerScore;
            });
        });