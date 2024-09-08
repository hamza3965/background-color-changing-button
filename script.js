function changeBackgroundColor() {
    const container = document.getElementById('background-container');
    
    // Set the background color property
    container.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    // Generate a random hex color code
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}