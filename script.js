// Add confetti library (include this in your HTML head: <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>)

let noClickCount = 0; // Track number of "No" clicks
const thinkAgainMessages = [
    "Aww, Rumana, please think again? My heart is yours—let's give us a chance! 🧸😘",
    "Come on, Rumana, you know we belong together! Think about all the fun we'll have! 🎉❤️",
    "Rumana, you're my everything. Please say yes this time? 🌟😍"
]; // 3 messages for first 3 clicks
const finalNoMessage = "Rumana, my love for you is endless. Let's make it official—think again? 💖🔥"; // After 3 clicks

document.getElementById('yesBtn').addEventListener('click', function() {
    if (noClickCount >= 3) {
        document.getElementById('response').innerHTML = "Even after all that hesitation, yes? Rumana, you're the best! I love you more than ever! ❤️ Confetti explosion!";
        confetti(); // Extra confetti for the special yes
    } else {
        document.getElementById('response').innerHTML = "Yes! Rumana, you've made my dreams come true. I love you! ❤️ Confetti time!";
        confetti();
    }
    noClickCount = 0; // Reset after yes
});

document.getElementById('noBtn').addEventListener('click', function() {
    if (noClickCount < 3) {
        document.getElementById('response').innerHTML = thinkAgainMessages[noClickCount];
        noClickCount++;
    } else {
        document.getElementById('response').innerHTML = finalNoMessage;
        this.textContent = "Think Again?"; // Change button text after 3 taps
        // Stop moving effect after 3
    }
});

// Playful effect: Make "No" button move on hover (only for first 3 clicks)
document.getElementById('noBtn').addEventListener('mouseover', function() {
    if (noClickCount < 3) {
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
    }
});
