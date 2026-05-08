import * as repository from '../3_repository/footerRepo.js';

export const getFooter = async(req, res, next) => {
    const footer = await repository.getFooter();
    res.json({"result" : footer});
};