// 1. express 임포트
import express from 'express';
// type = commonjs 일 경우, const express = require('express'); 로 import 진행
import cors from 'cors';

// 2. express 객체 생성
const PORT = 9000;
const app = express();

// 3. 미들웨어
app.use(cors());
app.use(express.json()); // body로 넘어온 JSON 문자열 파싱 - 반드시 데이터를 문자열로 받아와야 함
app.use(express.urlencoded({extended: false}));

// 4. 라우터
// http://localhost:9000/
app.get('/', (req, res, next) => {
    // res.send(`서버 실행 테스트`);
    res.json({"msg":"서버 실행 테스트"});
});

app.get('/api/get', (req, res, next) => {
    const fruits = [
        {
            "name" : "Apple", "color" : "Red", "emoji" : "🍎"
        },
        {
            "name" : "Banana", "color" : "Yellow", "emoji" : "🍌"
        },
        {
            "name" : "Avocado", "color" : "Green", "emoji" : "🥑"
        }
    ];

    // fruits는 json 타입으로 넘어가야 하지만 fruits는 배열이기 때문에, json 타입으로 맞춰주어야 함
    res.json({"fruits" : fruits});
})

app.get('/api/products', (req, res, next) => {
    const products = [
  {
    "pid": "P0001",
    "name": "갸또 쇼콜라",
    "price": 43000,
    "img": "/images/product1.jpg"
  },
  {
    "pid": "P0002",
    "name": "쉭쎄",
    "price": 20000,
    "img": "/images/product2.jpg"
  },
  {
    "pid": "P0003",
    "name": "초코 구운과자 묶음",
    "price": 13000,
    "img": "/images/product3.jpg"
  },
  {
    "pid": "P0004",
    "name": "통팥앙금빵",
    "price": 2500,
    "img": "/images/product4.jpg"
  },
  {
    "pid": "P0005",
    "name": "브라우니",
    "price": 20800,
    "img": "/images/product5.jpg"
  }
]
    res.json({"products":products});
})

app.get('/api/products/:pid', (req, res, next) => {
    // 다이나믹 파라미터, 다이나믹 밸류 등 - :(parameter)
    // param = {"pid" : "P0001"}, req를 통해 param에 저장될 정보를 요청해야 함
    // req = {"params" : {"pid" : "P0001"}}; // request.params.pid
    // console.log(req.params.pid);
    res.json({"result" : `${req.params.pid}의 상세정보`});
})

// form 데이터 전송
app.post('/api/post', (req, res) => {
    console.log(req.body);
    res.json({"result" : true});
})

// 로그인 폼 데이터 전송
app.post('/api/post/login', (req, res) => {
    console.log(req.body); // 받아오는 데이터가 콘솔에 찍히는지 확인 완료
    res.json({"result" : true});
})

// 5. 서버 시작
app.listen(PORT, () => {
    console.log(`현재 실행중인 서버 포트 : ${PORT}`);
});

