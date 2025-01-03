function showClock() {
    const phoneClock = document.querySelector(".clock");
    setInterval(() => {
        const now = new Date();
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const clockTime = `${nowHour}:${nowMinute}`
        phoneClock.innerHTML = clockTime;
    }, 1000);
}

showClock();