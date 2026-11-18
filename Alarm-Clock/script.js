let alarms = [];

// Update the current time every second
function updateTime() {
    const currentTime = new Date();

    document.getElementById('current-time').textContent =
        currentTime.toLocaleTimeString('en-US', { hour12: false });

    checkAlarms(currentTime);
}

setInterval(updateTime, 1000);
updateTime();

// Set a new alarm
function setAlarm() {
    const alarmTimeInput = document.getElementById('alarm-time').value;

    if (alarmTimeInput) {
        alarms.push(alarmTimeInput);
        displayAlarms();
        alert(`Alarm set for ${alarmTimeInput}`);
    } else {
        alert("Please select a valid time for the alarm.");
    }
}

// Display active alarms
function displayAlarms() {
    const alarmsList = document.getElementById('alarms');
    alarmsList.innerHTML = '';

    alarms.forEach((alarm, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Alarm set for ${alarm}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => deleteAlarm(index);

        listItem.appendChild(deleteButton);
        alarmsList.appendChild(listItem);
    });
}

// Check active alarms
function checkAlarms(currentTime) {
    const currentTimeString = currentTime.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });

    alarms.forEach((alarm, index) => {
        if (alarm === currentTimeString) {
            ringAlarm(alarm, index);
        }
    });
}

// Ring the alarm
function ringAlarm(alarm, index) {
    alert(`Alarm ringing for ${alarm}`);
    deleteAlarm(index);
}

// Delete an alarm
function deleteAlarm(index) {
    alarms.splice(index, 1);
    displayAlarms();
}
