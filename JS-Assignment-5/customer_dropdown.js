document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownList = document.getElementById('dropdown-list');
    const dropdownContainer = document.getElementById('custom-dropdown');

    function toggleDropdown() {
        const isVisible = dropdownList.style.display === 'block';
        dropdownList.style.display = isVisible ? 'none' : 'block';
    }

    function selectOption(event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            dropdownButton.textContent = target.textContent;
            dropdownList.style.display = 'none';
        }
    }

    // 1. A button shows/hides options
    dropdownButton.addEventListener('click', toggleDropdown);

    // 2. Clicking an option updates the button text
    dropdownList.addEventListener('click', selectOption);

    // 3. Clicking outside closes the dropdown using capturing phase
    document.addEventListener('click', function globalClickListener(event) {
        // Only run logic if the list is visible
        if (dropdownList.style.display === 'block') {
            // If the click target is NOT inside the dropdown container
            if (!dropdownContainer.contains(event.target)) {
                dropdownList.style.display = 'none';
            }
        }
    }, true); // Use 'true' to enable the capturing phase
});