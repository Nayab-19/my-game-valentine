const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bg-music");
const heartsContainer = document.getElementById("hearts-container");
const clickSound = new Audio("click-sound.mp3");
const denySound = new Audio("deny-sound.mp3");

const noMessages = [
    "Are you sure? 😢",
    "Think again! 💔",
    "Last chance! 😭",
    "Really? That hurts! 💔",
    "I'll keep asking... 😜",
    "You can't escape love! 💘",
    "Nope, that button is not an option! 😆",
    "You're breaking my heart! 💞",
    "Just say yes already! 😍",
    "You don't really mean that! 🤭",
    "Alright, I'll give you one more chance... 😏",
    "Still no? Okay, now I'm pouting! 😣",
    "This button will disappear soon... 🚨",
    "You're testing my patience! 😂",
    "Fine, but you'll regret it! 😜",
    "This is your last warning! ⚠️",
    "Too late! The button is now locked! 🔒",
    "Wait! I was just joking! Please stay! 🥺",
    "Okay, okay... You win! But are you really sure? 😜"
];
let noClickCount = 0;

bgMusic.volume = 0.5;
bgMusic.play();

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heart.innerHTML = "❤️";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

yesBtn.addEventListener("click", function() {
    clickSound.play();
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Our Valentine's Date</title>
            <style>
                body { font-family: 'Poppins', sans-serif; text-align: center; background: #ffe4e1; padding: 20px; }
                h1 { color: #ff4081; }
                p { font-size: 1.2rem; color: #333; }
            </style>
        </head>
        <body>
            <h1>My Dearest Love ❤️</h1>
            <p>I'm so excited for our special date! 🌸</p>
            <p>Mark your calendar:</p>
            <p><strong>Date:</strong> February 19, 2025</p>
            <p><strong>Time:</strong> 8:00 PM</p>
            <p><strong>Venue:</strong> Candies</p>
            <p>Can't wait to see you! 💕</p>
        </body>
        </html>
    `);
});

noBtn.addEventListener("click", function() {
    denySound.play();
    if (noClickCount < noMessages.length) {
        message.innerHTML = noMessages[noClickCount];
        noClickCount++;
        noBtn.style.transform = `scale(${1 - noClickCount * 0.05})`;
    } else {
        message.innerHTML = "Alright, alright, you win! But seriously, say yes? 🥺";
    }

    const x = Math.random() * 50 - 25;
    const y = Math.random() * 50 - 25;
    noBtn.style.transform += ` translate(${x}px, ${y}px)`;
});
