// ระบบสลับ Dark / Light Mode
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// ระบบแจ้งเตือนเมื่อยื่นใบสมัคร
const regForm = document.getElementById('reg-form');
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const instrument = document.getElementById('instrument').value;
    
    alert(`ขอบคุณครับคุณ ${name}!\nระบบได้รับใบสมัครตำแหน่ง [${instrument}] เรียบร้อยแล้ว แล้วพบกันที่ห้องซ้อมดนตรีครับ!`);
    regForm.reset();
});
