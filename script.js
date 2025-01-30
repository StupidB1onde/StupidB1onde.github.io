document.getElementById('credo-btn').addEventListener('click', function() {
    alert('Кредо тестировщика: "Найти баг — спасти проект!"');
});

// Создаем эффект падающих символов как в Матрице
const matrixBackground = document.querySelector('.matrix-background');

function createMatrixEffect() {
    const characters = "A@BCDE©FGHI©ŠJKLMNOPQRSTUVWXYZ0123456789";
    const columns = Math.floor(window.innerWidth / 20);
    let drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        matrixBackground.appendChild(ctx.canvas);

        setInterval(() => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fillStyle = '#00ff00';
            ctx.font = '15px Arial';

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > ctx.canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }, 50);
    }

    draw();
}

createMatrixEffect();