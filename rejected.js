const tryagainbtn = document.querySelector('.tryagain-btn')
const runbtn = document.querySelector('.run-btn')

// Reset run-btn position at the beginning
runbtn.style.position = 'relative';
runbtn.style.left = '';
runbtn.style.top = '10px';

tryagainbtn.addEventListener("click", function(){
    window.location.href = 'index.html';
});

runbtn.addEventListener("click", function(){
    // Set to absolute positioning when clicked
    runbtn.style.position = 'absolute';
    
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Get button dimensions
    const btnWidth = runbtn.offsetWidth;
    const btnHeight = runbtn.offsetHeight;
    
    // Calculate safe zones (areas to avoid)
    const margin = 20; // margin from edges
    
    // Generate random position that stays within viewport
    let newX, newY;
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
        newX = Math.random() * (windowWidth - btnWidth - margin * 2) + margin;
        newY = Math.random() * (windowHeight - btnHeight - margin * 2) + margin;
        attempts++;
    } while (attempts < maxAttempts && (newY < 400)); // Avoid top area with gif and text
    
    // Ensure button stays within bounds
    newX = Math.max(margin, Math.min(newX, windowWidth - btnWidth - margin));
    newY = Math.max(400, Math.min(newY, windowHeight - btnHeight - margin));
    
    // Move button to new position
    runbtn.style.left = newX + 'px';
    runbtn.style.top = newY + 'px';
});
