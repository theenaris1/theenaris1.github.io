 // server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/save', (req, res) => {
  const email = req.body.email;
  const data = {
    email: email,
    savedAt: new Date().toISOString()
  };

  fs.writeFile('drop.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('เกิดข้อผิดพลาด:', err);
      return res.status(500).send('เกิดข้อผิดพลาด');
    }

    res.send('บันทึกอีเมลเรียบร้อยแล้ว!');
  });
});

app.listen(3000, () => {
  console.log('เซิร์ฟเวอร์รันที่ http://localhost:3000');
});