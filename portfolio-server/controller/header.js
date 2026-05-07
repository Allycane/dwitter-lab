import * as repository from "../repository/header.js";

export const getHeaderData = (req, res, next) => {
    const header = repository.getHeaderData();
    res.json({"result" : header});
}