document.addEventListener('DOMContentLoaded', () => {
    const trackBox = document.getElementById('track-box');
    const coordDisplay = document.getElementById('coords-display');

    function logCoordinates(event) {
        const x = event.clientX;
        const y = event.clientY;
        coordDisplay.textContent = `X: ${x}, Y: ${y}`;
    }

    function dropRedDot(event) {
        // Prevent browser's default dblclick behavior (e.g., text selection)
        event.preventDefault(); 
        
        // Ensure the double-click happened inside the box
        if (event.target !== trackBox) return;

        // Get coordinates relative to the trackBox container
        const rect = trackBox.getBoundingClientRect();
        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;

        const dot = document.createElement('div');
        dot.className = 'red-dot';
        dot.style.left = `${localX - 5}px`; // Adjust for dot size (10x10)
        dot.style.top = `${localY - 5}px`;

        trackBox.appendChild(dot);
    }

    // Track mouse move inside the box
    trackBox.addEventListener('mousemove', logCoordinates);

    // On double-click inside, drop a red dot
    trackBox.addEventListener('dblclick', dropRedDot);
});

/* CSS required for the dot:
.red-dot {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    position: absolute; 
}
#track-box {
    width: 400px;
    height: 400px;
    border: 2px solid black;
    position: relative; 
    overflow: hidden;
}
*/