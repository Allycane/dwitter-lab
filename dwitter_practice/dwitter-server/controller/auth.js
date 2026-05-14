import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as repository from "../repository/auth.js";
import dotenv from "dotenv";

dotenv.config();

/**
 * 로그인
 */
export const getLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    // bcrypt = 라이브러리
    // compare(a, b) = a의 값을 인코딩하여, 인코딩 되어있는 b와 값을 비교한다
    // 논리연산을 통해 0과 1로 일치 여부를 확인하여 값을 반환한다
    const user = await repository.getLogin(username);
    const valid = await bcrypt.compare(password, user.password);
    if(!user.count || valid) {
      if (!valid) return res.status(401).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' });
    }

    // expiresIn : '7d' = jsonToken이 7일동안 유효하도록 설정
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ 
                token, user: { id: user.id, username: user.username, profileImage: user.avatar_url } 
              });
  } catch {
    res.status(500).json({ message: '서버 오류' });
  }
};

/**
 * 회원가입
*/
export const getAuth = async (req, res) => {
  const SECRET = process.env.JWT_SECRET; // .env에서 불러오기
  const { userName, password, profileImage } = req.body;

  try {
    //패스워드 암호화
    const hashed = await bcrypt.hash(req.body.password, 10);
      const result = await repository.signUp({
      userName,
      password: hashed,
      profileImage,
    });

    const token = jwt.sign({ id: result.insertId, userName }, SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({ token, user: { id: result.insertId, userName } });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY")
      return res.status(409).json({ message: "이미 사용 중인 아이디입니다." });
    res.status(500).json({ message: "서버 오류" });
  }
};
