// اختر تاريخ الانتهاء
const countdownDate = new Date("2025-12-31T23:59:59").getTime();

// اختر العنصر لعرض العدّاد
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "🎉 Time's Up!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}, 1000);
