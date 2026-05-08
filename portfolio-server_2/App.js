// 임포트
import express from 'express';
import cors from 'cors';
import headerRouter from './1_routes/headerRouter.js';
import contentRouter from './1_routes/contentRouter.js';
import footerRouter from './1_routes/footerRouter.js';

// 객체 생성
const PORT = 9000;
const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 라우팅
app.use('/header', headerRouter);
app.use('/content', contentRouter);
app.use('/footer', footerRouter);

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 --> ${PORT}`);
});