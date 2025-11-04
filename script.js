// Add confetti library (include this in your HTML head: <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>)

let noClickCount = 0; // Track total "No" clicks
const messages = [
    "Aww, Rumana, please think again? My heart is yours—let's give us a chance! 🧸😘", // 1st tap
    "Come on, Rumana, you know we belong together! Think about all the fun we'll have! 🎉❤️", // 2nd
    "Rumana, you're my everything. Please say yes this time? 🌟😍", // 3rd
    "Rumana, my love for you is endless. Let's make it official—think again? 💖🔥", // After 3, button to "Think Again?"
    "I promise to make you smile every day. Think again, beautiful? 😊💕", // 4th (on "Think Again?")
    "Rumana, my love for you is endless. Let's make it official—think again? 💖🔥", // 5th
    "Final thought, Rumana: You're the one for me. Please? Forever yours! 💖🔥", // 6th
    "Okay, Rumana, I respect your choice. But know I'm always here for you! 😊❤️" // After 6, back to "No"
]; // 8 messages for the cycle

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
    document.getElementById('response').innerHTML = messages[noClickCount];
    noClickCount++;
    
    if (noClickCount == 3) {
        this.textContent = "Think Again?"; // Change after 3 taps
    } else if (noClickCount == 7) {
        this.textContent = "No"; // Back to "No" after 6 taps (7th click shows message 6, 8th resets)
        noClickCount = 0; // Reset to allow looping if she keeps clicking
    }
});

// No moving effect at all - removed for fix
