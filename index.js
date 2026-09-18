/*

const express = require('express');
const app = express();
const port = 3000;

// Route หน้าแรก
app.get('/', (req, res) => {
  res.send('Hello DevOps World! Server is running smoothly.');
});

// สั่งให้ Server เริ่มทำงาน
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


*/

const express = require('express');
const app = express();
const port = 3000;

// รองรับการรับข้อมูลแบบ JSON
app.use(express.json());

// 1. หน้าแรก
app.get('/', (req, res) => {
  res.send('Hello DevOps World! Server is running smoothly.');
});

// 2. Health Check API (ใช้เช็กสถานะเซิร์ฟเวอร์ในสาย DevOps)
app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

// 3. Mock Data API (ส่งข้อมูล JSON กลับไป)
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Diff',
    role: 'DevOps Engineer',
    status: 'Active'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});