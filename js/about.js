const teamMembers = document.querySelectorAll('.team-member');
const qrModal = document.querySelector('.qr-modal');
const closeModal = document.querySelector('.close-modal');
const qrImage = document.querySelector('#member-qr');
const qrName = document.querySelector('#member-qr-name');

// QR code data for each member
const memberQRs = {
    jana: {
        name: 'Jana Ahmed',
        qr: 'images/team_qr/jana_qr.png' // Update the QR image path
    },
    huda: {
        name: 'Al-Huda Alaa',
        qr: 'images/team_qr/huda_qr.png' // Update the QR image path
    },
    momen: {
        name: 'Momen Alaa',
        qr: 'images/team_qr/momen_qr.png' // Update the QR image path
    },
    mohammed: {
        name: 'Mohammed Sayyad (N)',
        qr: 'images/team_qr/mohammed_qr.png' // Update the QR image path
    },
    ahmed: {
        name: 'Ahmed Mohammed',
        qr: 'images/team_qr/ahmed_qr.png' // Update the QR image path
    }
};

teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const memberId = member.dataset.member;
        const memberData = memberQRs[memberId];
        qrImage.src = memberData.qr;
        qrName.textContent = memberData.name;
        qrModal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    qrModal.classList.remove('active');
});

qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
        qrModal.classList.remove('active');
    }
});

// JavaScript to toggle menu visibility
document.querySelector('.menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
});