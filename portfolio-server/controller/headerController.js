import * as repository from "../repository/headerRepo.js";

export const getHeaderData = async(req, res, next) => {
    const header = await repository.getHeaderData();
    res.json({"result" : header});
}