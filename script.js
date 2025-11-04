// Add confetti library (include this in your HTML head: <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>)

let noClickCount = 0; // Track number of "No" clicks
const noButtonTexts = ["No", "Still No?", "Really?", "Are You Sure?", "One More Try?", "Last Chance?"]; // Button text changes
const thinkAgainMessages = [
    "Aww, Rumana, please think again? My heart is yours—let's give us a chance! 🧸😘",
    "Come on, Rumana, you know we belong together! Think about all the fun we'll have! 🎉❤️",
    "Rumana, you're my everything. Please say yes this time? 🌟😍",
    "I promise to make you smile every day. Think again, beautiful? 😊💕",
    "Rumana, my love for you is endless. Let's make it official! 🥰✨",
    "Final thought, Rumana: You're the one for me. Please? Forever yours! 💖🔥"
]; // 6 unique messages

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Yes! Rumana, you've made my dreams come true. I love you! ❤️ Confetti time!";
    confetti(); // Triggers confetti animation
    noClickCount = 0; // Reset if she says yes later
});

document.getElementById('noBtn').addEventListener('click', function() {
    if (noClickCount < 6) {
        document.getElementById('response').innerHTML = thinkAgainMessages[noClickCount];
        noClickCount++;
        // Change button text for next click
        if (noClickCount < 6) {
            this.textContent = noButtonTexts[noClickCount];
        } else {
            this.textContent = "No More?";
        }
    } else {
        document.getElementById('response').innerHTML = "Okay, Rumana, I respect your choice. But know I'm always here for you! 😊❤️";
        noClickCount = 0; // Reset after 6
        this.textContent = "No"; // Reset button
    }
});

// Playful effect: Make "No" button move on hover (only if not clicked 6 times)
document.getElementById('noBtn').addEventListener('mouseover', function() {
    if (noClickCount < 6) {
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
