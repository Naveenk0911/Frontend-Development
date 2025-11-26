document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('my-textarea');
    const counterDisplay = document.getElementById('char-count');
    const resetButton = document.getElementById('reset-btn');
    const MAX_CHARS = 100;
    const WARNING_YELLOW_THRESHOLD = 20;

    function updateCounter() {
        const currentLength = textarea.value.length;
        const remaining = MAX_CHARS - currentLength;
        counterDisplay.textContent = remaining;
        
        counterDisplay.style.color = 'green'; 
        
        if (remaining <= WARNING_YELLOW_THRESHOLD && remaining > 0) {
            counterDisplay.style.color = 'orange';
        } else if (remaining === 0) {
            counterDisplay.style.color = 'red';
        } else if (remaining < 0) {
             // Should not happen if keypress is handled, but serves as safeguard
            counterDisplay.textContent = 0; 
            counterDisplay.style.color = 'red';
        }
    }

    function handleInput(event) {
        const currentLength = textarea.value.length;
        if (currentLength >= MAX_CHARS) {
            // Prevent further typing if limit is reached
            if (event.type === 'keypress' || event.type === 'keydown') {
                event.preventDefault();
            }
            // Truncate in case of paste/input event bypass
            textarea.value = textarea.value.substring(0, MAX_CHARS);
        }
        updateCounter();
    }
    
    function resetForm() {
        textarea.value = '';
        updateCounter();
    }

    textarea.addEventListener('input', handleInput);
    textarea.addEventListener('keypress', handleInput); 
    resetButton.addEventListener('click', resetForm);

    updateCounter(); // Initial count display
});