// 1. express 임포트
import express from 'express';
// type = commonjs 일 경우, const express = require('express'); 로 import 진행
import cors from 'cors';
import apiRouter from './routes/api.js';
import usersRouter from './routes/users.js';

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

// 라우터 사용
app.use('/api', apiRouter);
app.use('/users', usersRouter);

// 로그인 폼 데이터 전송
/*
app.post('/users/login', (req, res) => {
    // JSON 구조분해 할당
    const {id, pass} = req.body.data;
    const users = [
        { "id" : "test", "pass" : "1234" },
        { "id" : "hong", "pass" : "1111" },
        { "id" : "test1234", "pass" : "test1234" }
    ];
    console.log(id, pass);
    // find()를 사용하여 데이터가 일치하면 true를 반환한다, 혹은 filter()를 이용할 수도 있다
    const userIndex = users.findIndex(user => user.id === id && user.pass === pass);
    const result = userIndex !== -1 ? true : false;
    res.json({"result" : result});
})
*/

// 5. 서버 시작
app.listen(PORT, () => {
    console.log(`현재 실행중인 서버 포트 : ${PORT}`);
});

