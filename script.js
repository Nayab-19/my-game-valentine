const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
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
    "You don't really mean that! 🤭"
];
let noClickCount = 0;

// Falling heart animation
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

yesBtn.addEventListener("click", function () {
    clickSound.play();

    // Open a new page with a cute message
    const newPage = window.open("", "_blank");
    newPage.document.write(`
        <html>
        <head>
            <title>Special Message</title>
            <style>
                body {
                    text-align: center;
                    font-family: "Comic Sans MS", cursive, sans-serif;
                    background-color: #ffe4e1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    overflow: hidden;
                }
                .message-container {
                    opacity: 0;
                    transform: scale(0.5);
                    animation: fadeInScale 1.5s ease-in-out forwards;
                }
                .message {
                    font-size: 28px;
                    color: #ff6b81;
                    font-weight: bold;
                }
                .sub-message {
                    font-size: 20px;
                    color: #ff3b6c;
                    margin-top: 10px;
                }
                @keyframes fadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            </style>
        </head>
        <body>
            <div class="message-container">
                <p class="message">Yay! You said Yes! 💖</p>
                <p class="sub-message">Can’t wait to see you! 🎉</p>
            </div>
            <script>
                setTimeout(() => {
                    document.querySelector(".message-container").style.opacity = "1";
                }, 500);
            </script>
        </body>
        </html>
    `);
});

noBtn.addEventListener("click", function () {
    denySound.play();
    if (noClickCount < noMessages.length) {
        message.innerHTML = noMessages[noClickCount];
        noClickCount++;
        noBtn.style.transform = `scale(${1 - noClickCount * 0.05})`;
    } else {
        message.innerHTML = "Alright, alright, you win! But seriously, say yes? 🥺";
    }

    // Move 'No' button randomly
    const x = Math.random() * 50 - 25;
    const y = Math.random() * 50 - 25;
    noBtn.style.transform += ` translate(${x}px, ${y}px)`;
});

