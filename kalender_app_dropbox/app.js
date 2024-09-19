
// Hinzufügen eines neuen Termins
function addAppointment() {
    const date = document.getElementById('date').value;
    const timeStart = document.getElementById('time-start').value;
    const timeEnd = document.getElementById('time-end').value;
    const client = document.getElementById('client').value;
    const location = document.getElementById('location').value;
    const appointmentType = document.getElementById('appointment-type').value;
    const comments = document.getElementById('comments').value;

    if (date && timeStart && timeEnd && client && location) {
        const appointmentData = {
            date,
            timeStart,
            timeEnd,
            client,
            location,
            appointmentType,
            comments
        };
        displayAppointment(appointmentData);
    } else {
        alert('Bitte alle Felder ausfüllen.');
    }
}

// Funktion zum Anzeigen eines Termins in der App
function displayAppointment(appointmentData) {
    const appointmentDiv = document.createElement('div');
    appointmentDiv.classList.add('appointment');
    appointmentDiv.innerHTML = `<strong>Datum:</strong> ${appointmentData.date}<br>
                                <strong>Beginn:</strong> ${appointmentData.timeStart}<br>
                                <strong>Ende:</strong> ${appointmentData.timeEnd}<br>
                                <strong>Kunde:</strong> ${appointmentData.client}<br>
                                <strong>Ort:</strong> ${appointmentData.location}<br>
                                <strong>Art:</strong> ${appointmentData.appointmentType}<br>
                                <strong>Kommentare:</strong> ${appointmentData.comments}`;
    document.getElementById('appointments').appendChild(appointmentDiv);
}
