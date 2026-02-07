// ============================================
// Valentine's Day Website - JavaScript Magic ✨
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createFloatingEmojis();
    setupButtons();
});

// ============================================
// Custom Discord Emojis for Floating Animation
// ============================================

const customEmojis = [
    'https://cdn.discordapp.com/emojis/1446240293639819314.webp?size=64',
    'https://cdn.discordapp.com/emojis/1446240198479450213.webp?size=64',
    'https://cdn.discordapp.com/emojis/1446240352519323958.webp?size=64',
    'https://cdn.discordapp.com/emojis/1446240462263287879.webp?size=64'
];

function createFloatingEmojis() {
    const container = document.getElementById('hearts');

    // Create initial emojis
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createEmoji(container), i * 300);
    }

    // Keep creating emojis
    setInterval(() => createEmoji(container), 500);
}

function createEmoji(container) {
    const emoji = document.createElement('img');
    emoji.classList.add('floating-heart');
    emoji.src = customEmojis[Math.floor(Math.random() * customEmojis.length)];
    emoji.alt = 'floating emoji';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.width = (Math.random() * 30 + 25) + 'px';
    emoji.style.height = 'auto';
    emoji.style.animationDuration = (Math.random() * 5 + 5) + 's';
    emoji.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => emoji.remove(), 10000);
}

// ============================================
// HTTP Cat Status Codes for Funny Reactions
// ============================================

const httpCatReactions = [
    { code: 403, message: "Forbidden! You can't say no to love! 😤" },
    { code: 406, message: "Not Acceptable! Try again! 🙈" },
    { code: 418, message: "I'm a teapot... full of love for you! ☕💕" },
    { code: 451, message: "Unavailable for legal reasons... just say YES! 📜" },
    { code: 503, message: "Service Unavailable... my heart can't handle rejection! 💔" },
    { code: 408, message: "Request Timeout... waiting for you to say YES! ⏰" },
    { code: 429, message: "Too Many Requests... just one YES please! 🙏" },
    { code: 500, message: "Internal Server Error... my heart is breaking! 😭" },
];

// ============================================
// Button Interactions
// ============================================

function setupButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionCard = document.getElementById('questionCard');
    const successScreen = document.getElementById('successScreen');
    const catContainer = document.getElementById('catContainer');
    const catImage = document.getElementById('catImage');
    const catMessage = document.getElementById('catMessage');

    // YES Button - Show success!
    yesBtn.addEventListener('click', () => {
        questionCard.style.display = 'none';
        successScreen.classList.remove('hidden');
        createConfetti();
    });

    // NO Button - Make it run away and show funny cat! 😂
    let noClickCount = 0;

    noBtn.addEventListener('mouseenter', (e) => {
        // Make the button run away but stay visible!
        const maxX = 150;
        const maxY = 50;

        const randomX = (Math.random() - 0.5) * maxX;
        const randomY = (Math.random() - 0.5) * maxY;

        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.2s ease';
    });

    noBtn.addEventListener('click', (e) => {
        // Show a funny HTTP cat!
        const reaction = httpCatReactions[noClickCount % httpCatReactions.length];

        catImage.src = `https://http.cat/${reaction.code}`;
        catMessage.textContent = reaction.message;
        catContainer.classList.add('show');

        noClickCount++;

        // Make the button smaller each time
        if (noClickCount > 2) {
            noBtn.style.transform = `scale(${Math.max(0.3, 1 - noClickCount * 0.15)})`;
        }

        // After many tries, just say yes!
        if (noClickCount >= 6) {
            noBtn.textContent = "Fine, YES! 💕";
            setTimeout(() => {
                yesBtn.click();
            }, 1000);
        }
    });
}

// ============================================
// Success Celebration!
// ============================================

function createConfetti() {
    const confetti = document.getElementById('confetti');

    // Create lots of confetti with custom emojis!
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const piece = document.createElement('img');
            piece.classList.add('confetti-piece');
            piece.src = customEmojis[Math.floor(Math.random() * customEmojis.length)];
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.width = (Math.random() * 30 + 20) + 'px';
            piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
            piece.style.animationDelay = Math.random() + 's';

            confetti.appendChild(piece);

            // Remove confetti after animation
            setTimeout(() => piece.remove(), 6000);
        }, i * 50);
    }

    // Keep the party going!
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            const piece = document.createElement('img');
            piece.classList.add('confetti-piece');
            piece.src = customEmojis[Math.floor(Math.random() * customEmojis.length)];
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.width = (Math.random() * 30 + 20) + 'px';
            piece.style.animationDuration = (Math.random() * 3 + 2) + 's';

            confetti.appendChild(piece);
            setTimeout(() => piece.remove(), 6000);
        }
    }, 300);
}

// ============================================
// Easter Egg: Konami Code for Extra Emojis!
// ============================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // MEGA EMOJI EXPLOSION!
        const container = document.getElementById('hearts');
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const emoji = document.createElement('img');
                emoji.classList.add('floating-heart');
                emoji.src = customEmojis[Math.floor(Math.random() * customEmojis.length)];
                emoji.style.left = Math.random() * 100 + 'vw';
                emoji.style.width = '50px';
                emoji.style.animationDuration = '3s';
                container.appendChild(emoji);
            }, i * 30);
        }
    }
});
