function reverseText() {
            const userText = document.getElementById('userInput').value;
            
            const reversedText = userText.split('').reverse().join('');
            
            document.getElementById('result').textContent = reversedText;

            if (!userText.trim()) {
            alert('Пожалуйста, введите текст');
            return;
            }
        }

        document.getElementById('userInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
             reverseText();
            }
        });