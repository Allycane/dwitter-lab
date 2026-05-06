import React, { useState, useRef } from 'react';
import { postFetchData } from '../util/fetchDatas.js';

export default function CompLogin() {
    const idRef = useRef(null);
    const passRef = useRef(null);

    const initForm = {"id" : "", "pass" : ""};
    const [form, setForm] = useState(initForm);


    // Function
    const handleChangeForm = (e) => {
        // 구조분해 할당
        const {name, value} = e.target;
        setForm({...form, [name]:value});
        console.log(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation check
        if (idRef.current.value === '') {
            alert(`아이디를 입력해주세요!`);
            idRef.current.focus();
        }
        else if (passRef.current.value === '') {
            alert(`패스워드를 입력해주세요!`);
            passRef.current.focus();
        }
        else {
            const jsonData = await postFetchData(`api/post/login`, form);
            console.log(jsonData.result);
            jsonData.result ? alert(`성공적으로 등록되었습니다`) : alert(`등록에 실패하였습니다`);
        } 
    }

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>Log in Form</h1>
            <form onSubmit={handleSubmit}>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input type="text" id='id' name='id' ref={idRef} value={form.id} onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="pass">패스워드</label>
                        <input type="password" id='pass' name='pass' ref={passRef} value={form.pass} onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type='submit'>등록하기</button>
                        <button type='button' onClick={() => {setForm(initForm)}}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

