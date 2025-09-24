// เลือก div ลูกโป่งจากใน HTML
const balloon = document.getElementById('balloon');

// กำหนดขนาดและสีเริ่มต้น
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

// เพิ่ม Event Listener เพื่อตรวจสอบการคลิกที่ลูกโป่ง
balloon.addEventListener('click', () => {

    // เปลี่ยนสีลูกโป่งตามลำดับ
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];

    // ขยายขนาดลูกโป่งขึ้น 10 พิกเซล
    size += 10;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';

    // ตรวจสอบว่าขนาดเกิน 420 พิกเซลหรือไม่
    if (size > 420) {
        // ถ้าขนาดเกิน 420 พิกเซล ให้ "ระเบิด" โดยการรีเซ็ตค่า
        alert('BOOM! ลูกโป่งระเบิดแล้ว!'); // แสดงข้อความแจ้งเตือน
        
        // รีเซ็ตขนาดและสีกลับไปที่ค่าเริ่มต้น
        size = 200;
        colorIndex = 0;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = colors[colorIndex];
    }
});