// Функция для анимации текста
function typeText(element, speed) {
    const text = element.textContent; // Получаем текст элемента
    element.textContent = ""; // Очищаем элемент перед анимацией
    let i = 0;
    
    function typeCharacter() {
        if (i < text.length) {
            element.textContent += text.charAt(i); // Добавляем символ
            i++;
            setTimeout(typeCharacter, speed); // Задержка между символами
        }
    }
    typeCharacter(); // Запускаем анимацию
}

// Запуск анимации для всех элементов с классом "animated-text" при загрузке страницы
window.onload = function() {
    const elements = document.querySelectorAll('.animated-text'); // Находим все элементы с классом .animated-text
    elements.forEach(function(element) {
        typeText(element, 100); // Применяем анимацию к каждому элементу
    });
};
