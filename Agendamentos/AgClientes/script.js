const clientNameInput = document.getElementById('clientName');
const appointmentDateInput = document.getElementById('appointmentDate');
const appointmentList = document.getElementById('appointmentList');

function scheduleAppointment() {
    const clientName = clientNameInput.value.trim();
    const appointmentDate = appointmentDateInput.value;

    if (clientName === '' || appointmentDate === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const appointmentItem = document.createElement('li');
    appointmentItem.textContent = `Cliente: ${clientName}, Data: ${appointmentDate}`;

    appointmentList.appendChild(appointmentItem);

    // Limpa os campos após o agendamento
    clientNameInput.value = '';
    appointmentDateInput.value = '';
}
