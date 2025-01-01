const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    console.log("API 요청 수신됨");  // 요청이 들어왔는지 확인
    res.json([
        {
          'id': 1,
          'image': 'https://picsum.photos/64/64?random=1',
          'name': '홍길동',
          'birthday': '961222',
          'gender': '남자',
          'job': '의적'
        },
        {
          'id': 2,
          'image': 'https://picsum.photos/64/64?random=2',
          'name': '전우치',
          'birthday': '970412',
          'gender': '남자',
          'job': '도사'
        },
        {
          'id': 3,
          'image': 'https://picsum.photos/64/64?random=3',
          'name': '강찬밥',
          'birthday': '950521',
          'gender': '남자',
          'job': '백수'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));