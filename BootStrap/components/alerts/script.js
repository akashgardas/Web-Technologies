'use strict';

const alertContainer = document.getElementById('liveAlertsContainer');

const appendAlert = (msg, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <div class='alert alert-${type} alert-dismissible fade show' role='alert'>
    <span>${msg}</span>
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
    </div>`;

    alertContainer.append(wrapper);
};

const showAlertBtn = document.getElementById('showAlertBtn');
console.log(showAlertBtn);

const alertTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'];

if(showAlertBtn) {
    showAlertBtn.addEventListener('click', () =>{
        const type = alertTypes[Math.trunc(Math.random()*alertTypes.length)];
        appendAlert('This is a live alert!', type);
    });
}