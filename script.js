document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Yay! I can't wait to celebrate with you! ❤️";
    // Add confetti or redirect to a celebration page if you want
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "That's okay, I still think you're amazing. Let's stay friends? 😊";
    // Or make the "No" button move away playfully for fun
});
