import * as repository from '../repository/userRepository.js';

const users = repository.getUserData();

export const getLoginData = (req, res) => {
    // JSON 구조분해 할당
    const {id, pass} = req.body.data;

    // find()를 사용하여 데이터가 일치하면 true를 반환한다, 혹은 filter()를 이용할 수도 있다
    const userIndex = repository.getLoginData(id, pass);

    const result = userIndex !== -1 ? true : false;
    res.json({"result" : result});
};

export const getUserData = (req, res, next) => {
    const users = repository.getUserData();
    res.json({"users" : users});
};