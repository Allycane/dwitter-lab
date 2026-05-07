import express from 'express';
// import { getFruits, getProducts, getProductDetail, postFormData } from '../controller/apiController.js';
import * as controller from '../controller/apiController.js';

// 라우터 객체 생성 ( 함수 호출 X )
const router = express.Router();
// express.Router() --> 대문자 () : 생성자 함수

// 실제 호출 주소 = localhost:9000/api/get
router.get('/get', controller.getFruits);
router.get('/products', controller.getProducts);
router.get('/products/:pid', controller.getProductDetail);
// form 데이터 전송
router.post('/post', controller.postFormData);


export default router;