import pool from "../db.js";



export const getAll = async () => {
    const sql = `select * from tweets_view order by created_at desc`;
    const [rows] = await pool.execute(sql, []);

    return await rows;
}


export const postTweets = async(content, user_id) => {
    const sql = `INSERT INTO tweets (user_id, content) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [user_id, content]);

    // console.log('create result --->', result);
    return result;
}

export const getNewTweet = async(id) => {
    console.log(id);
    const sql = `select * from tweets_view where id = ?`;
    const [result] = await pool.execute(sql, [id]);
    return result[0];
}

/**
 * MyTweets
 */
export const getMyTweets = async(id) => {
    const sql = `select * from tweets_view where user_id = ? order by created_at desc`;

    const [rows] = await pool.execute(sql, [id]);
    return rows;
};

/**
 * MyTweets Update
 */
export const getTweetsUpdate = async(id, content, user_id) => {
    const sql = `UPDATE tweets SET content = ? WHERE id = ? and user_id = ?`
    const [result] = await pool.execute(sql, [content, id, user_id]);

    // console.log('result --->', result.affectedRows);
    return result.affectedRows; // 업데이트 성공 : 1, 실패 : 0
}

/**
 * Delete Tweet
 */
export const deleteTweets = async(id, user_id) => {
    const sql = `delete FROM tweets WHERE id = ? and user_id = ?`;
    const [result] = await pool.execute(sql, [id, user_id]);

    return result.affectedRows;
}
