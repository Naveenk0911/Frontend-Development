document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeButtons = document.querySelectorAll('.theme-btn');

    function setTheme(themeName) {
        // 1. Remove any existing theme class
        body.className = ''; 

        // 2. Add the new theme class
        body.classList.add(`${themeName}-theme`); 

        // 3. Save current theme in a custom attribute
        body.setAttribute('data-theme', themeName);
    }

    function handleThemeClick(event) {
        const theme = event.target.getAttribute('data-theme-name');
        if (theme) {
            setTheme(theme);
        }
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', handleThemeClick);
    });

    // Load initial theme (e.g., from local storage or set default)
    const initialTheme = body.getAttribute('data-theme') || 'light';
    setTheme(initialTheme);
});

/* CSS required for this to work:
.light-theme { background-color: white; color: black; }
.dark-theme { background-color: #333; color: white; }
.blue-theme { background-color: #007bff; color: white; }
*/