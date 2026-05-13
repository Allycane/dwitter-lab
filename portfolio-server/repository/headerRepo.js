import db from '../DB/connection.js';

export const getHeaderData = async() => {
    const sql = `select header from portfolio`;

    // results = 데이터, fields = 컬럼
    // 구조분해 할당
    const [results, fields] = await db.execute(sql, []);
    
    return await results[0].header;
}