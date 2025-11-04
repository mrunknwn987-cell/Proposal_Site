let noClickCount = 0; // Track total taps
const messages = [
    "Aww, Rumana, please think again? My heart is yours—let's give us a chance! 🧸😘", // Tap 1
    "Come on, Rumana, you know we belong together! Think about all the fun we'll have! 🎉❤️", // Tap 2
    "Rumana, you're my everything. Please say yes this time? 🌟😍", // Tap 3
    "Rumana, my love for you is endless. Let's make it official—think again? 💖🔥", // After Phase 1, button to "Think Again?"
    "I promise to make you smile every day. Think again, beautiful? 😊💕", // Tap 4
    "Rumana, you're the one for me. Please reconsider? 🥰✨", // Tap 5
    "Final thought in this round, Rumana: You're amazing! 💕🌈", // Tap 6
    "Rumana, my heart can't take no—please say yes? 😢❤️", // After Phase 2, button to "Please?"
    "One last chance, Rumana: Be my girlfriend? 🎈💖", // Tap 7
    "Rumana, I love you so much. Think again? 🧸😍", // Tap 8
    "This is it, Rumana—yes or no? But I hope yes! 🌟😘", // Tap 9
    "Okay, Rumana, I respect your choice. But look at this sad teddy... Please think again someday? 😢🧸❤️" // After Phase 3, back to "No", show crying teddy
];

document.getElementById('yesBtn').addEventListener('click', function() {
    if (noClickCount >= 3) {
        document.getElementById('response').innerHTML = "Even after all that, yes? Rumana, you're incredible! I love you forever! ❤️";
        document.getElementById('dancingTeddy').style.display = 'block'; // Show dancing teddy GIF
    } else {
        document.getElementById('response').innerHTML = "Yes! Rumana, you've made my dreams come true. I love you! ❤️";
        document.getElementById('dancingTeddy').style.display = 'block'; // Show dancing teddy GIF
    }
    noClickCount = 0; // Reset
    document.getElementById('cryingTeddy').style.display = 'none'; // Hide crying teddy
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = messages[noClickCount];
    noClickCount++;
    
    if (noClickCount == 3) {
        this.textContent = "Think Again?"; // After Phase 1
    } else if (noClickCount == 7) {
        this.textContent = "Please?"; // After Phase 2
    } else if (noClickCount == 11) {
        this.textContent = "No"; // After Phase 3
        document.getElementById('cryingTeddy').style.display = 'block'; // Show crying teddy GIF
        noClickCount = 0; // Reset
    }
    document.getElementById('dancingTeddy').style.display = 'none'; // Hide dancing teddy on no
});

// Moving "No" button on hover
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
