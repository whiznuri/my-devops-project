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