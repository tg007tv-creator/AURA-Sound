// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        answer.classList.toggle('show');
        if (answer.classList.contains('show')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// ⏳ Real-Time Concert Countdown Timer (คืนนี้ 4 ทุ่ม)
function updateCountdown() {
    // กำหนดเป้าหมายเป็นเวลา 22:00 น. ของวันนี้
    const now = new Date();
    const concertDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0, 0).getTime();
    const currentTime = now.getTime();
    const difference = concertDate - currentTime;

    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${String(hours).padStart(2, '0')} ชั่วโมง ${String(minutes).padStart(2, '0')} นาที ${String(seconds).padStart(2, '0')} วินาที`;
    } else {
        timerElement.innerHTML = "🎉 คอนเสิร์ตใหญ่เริ่มแล้วคืนนี้! มาสนุกด้วยกันเลย! 🎸🔥";
    }
}

// อัปเดตเวลานับถอยหลังทุกๆ 1 วินาที
setInterval(updateCountdown, 1000);
updateCountdown();

// Form Submission Event
const regForm = document.getElementById('reg-form');
const modal = document.getElementById('successModal');

if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        regForm.reset();
        if (modal) modal.style.display = 'flex';
    });
}

function closeModal() {
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Scroll To Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
