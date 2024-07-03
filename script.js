const currentTimeUTCElement = document.getElementById('currentTimeUTC');
const currentDayElement = document.getElementById('currentDay');

function updateCurrentTime() {
    const currentTime = new Date();
    const utcTime= currentTime.toUTCString();
    currentTimeUTCElement.textContent = utcTime;
}

function updateCurrentDay() {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    currentDayElement.textContent = currentDay;
}

updateCurrentTime();
updateCurrentDay();

setInterval(updateCurrentTime, 1000);
