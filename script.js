// Add confetti library (include this in your HTML head: <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>)

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Yes! Rumana, you've made my dreams come true. I love you! ❤️ Confetti time!";
    confetti(); // Triggers confetti animation
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Aww, Rumana, please think again? My heart is yours—let's give us a chance! 🧸😘";
});

// Playful effect: Make "No" button move on hover
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const btn = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    
    // Random position within the container
    const newLeft = Math.random() * (containerRect.width - btnRect.width);
    const newTop = Math.random() * (containerRect.height - btnRect.height);
    
    btn.style.position = 'absolute';
    btn.style.left = newLeft + 'px';
    btn.style.top = newTop + 'px';
});
