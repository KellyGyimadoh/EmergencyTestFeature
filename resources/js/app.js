

import './bootstrap';
// Then import your Tailwind CSS


import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

document.addEventListener("DOMContentLoaded",()=>{
 // Function to show the modal with the emergency message
 function showModal(message) {
    document.getElementById('emergencyMessage').innerText = message;
    document.getElementById('emergencyModal').style.display = 'block';
}

// Function to close the modal

setTimeout(() => {
    window.Echo.channel('emergencytest').listen('EmergencyEvent', (e) => {
        showModal(e.message)
    })
}, 200);

})
