import * as repository from "../repository/headerRepo.js";

export const getHeaderData = (req, res, next) => {
    const header = repository.getHeaderData();
    res.json({"result" : header});
}