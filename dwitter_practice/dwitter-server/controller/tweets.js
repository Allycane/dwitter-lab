import pool from "../db.js";
import * as repository from '../repository/tweets.js';
export const getAll = async (req, res) => {
  try {
    const rows = await repository.getAll();
    console.log('rows --->', rows);
    res.json(rows);
  } catch (err) {
    console.error('[GET /tweets]', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

/**
 * MyTweets 
 */
export const getMyTweets = async (req, res) => {
  try {
    const rows = await repository.getMyTweets(req.user.id);
    res.json(rows);
  } catch (err) {
    console.error('[GET /tweets/my]', err);
    res.status(500).json({ message: '서버 오류' });
  }
}
/**
 * Create New Tweets
 */
export const postTweets = async (req, res) => {
  const { content } = req.body;
  console.log(content, req.user.id);
  /**
   * front에서 진행
  if (!content?.trim()) {
    return res.status(400).json({ message: '내용을 입력하세요.' });
  }
   */

  try {
    // insert
    const result = await repository.postTweets(content, req.user.id);
    if (result.affectedRows) {
        // const tweet = await repository.getNewTweet(result.insertId);
        res.status(201).json({"result" : result.affectedRows});
    }
  } catch (err) {
    console.error('[POST /tweets]', err);
    res.status(500).json({ message: '서버 오류' });
  }
}


/**
 * MyTwwets Update
 */
export const getTweetsUpdate = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  // console.log(id, content, req.user.id);

  // ✨ 아래와 같은 코드는 front에서 진행하기
  /*
  if (!content?.trim()) {
    return res.status(400).json({ message: '내용을 입력하세요.' });
  }
  */

  try {
    const rows = await repository.getTweetsUpdate(id, content, req.user.id);
    if(rows) {
      res.json({ message: '수정되었습니다.' });
    }
  } catch (err) {
    console.error('[PUT /tweets/:id]', err);
    res.status(500).json({ message: '서버 오류' });
  }
}

export const deleteTweets = async (req, res) => {
  const { id } = req.params;

  // console.log(id, req.user.id);

  try {
    const rows = await repository.deleteTweets(id, req.user.id);
    if (rows) res.json({message : '삭제되었습니다.'});
  } catch (err) {
    console.error('[DELETE /tweets/:id]', err);
    res.status(500).json({ message: '서버 오류' });
  }
}