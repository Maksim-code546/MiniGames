        const colorBtn = document.querySelector('.generator-color_btn');
        const colorCode = document.querySelector('.generator-color_code');
        
        colorBtn.addEventListener('click', function() {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            
            document.body.style.backgroundColor = randomColor;
            
            colorCode.textContent = `Текущий цвет: ${randomColor.toUpperCase()}`;
            
            colorBtn.style.color = getContrastColor(randomColor);
        });
        
        function getContrastColor(hexColor) {
            const r = parseInt(hexColor.substr(1, 2), 16);
            const g = parseInt(hexColor.substr(3, 2), 16);
            const b = parseInt(hexColor.substr(5, 2), 16);
            
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            
            return brightness > 128 ? '#333' : '#FFF';
        }