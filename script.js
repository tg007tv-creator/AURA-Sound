// Toggle Theme (Light/Dark Mode)
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Working FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        // Toggle class
        answer.classList.toggle('show');
        
        if (answer.classList.contains('show')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// Modal Popup Controls
function openModal(name) {
    const modal = document.getElementById('successModal');
    const message = document.getElementById('modalMessage');
    message.innerText = `ขอบคุณคุณ ${name} ที่สนใจเข้าชมรม AURA-Sound หวังว่าจะได้มาร่วมงานและสร้างเสียงเพลงไปด้วยกันนะครับ!`;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Form Submission with Custom Modal
document.getElementById('reg-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name').value;
    openModal(nameInput);
    e.target.reset();
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
