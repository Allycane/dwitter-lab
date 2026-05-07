import * as repository from '../repository/apiRepository.js';

export const getFruits = (req, res, next) => {
    const fruits = repository.getFruits();
    // fruits는 json 타입으로 넘어가야 하지만 fruits는 배열이기 때문에, json 타입으로 맞춰주어야 함
    res.json({"fruits" : fruits});
}

export const getProducts = (req, res, next) => {
    const products = repository.getProducts();
    res.json({"products":products});
}

export const getProductDetail = (req, res, next) => {
    // 다이나믹 파라미터, 다이나믹 밸류 등 - :(parameter)
    // param = {"pid" : "P0001"}, req를 통해 param에 저장될 정보를 요청해야 함
    // req = {"params" : {"pid" : "P0001"}}; // request.params.pid
    // console.log(req.params.pid);
    res.json({"result" : `${req.params.pid}의 상세정보`});
}

export const postFormData = (req, res) => {
    console.log(req.body);
    res.json({"result" : true});
}