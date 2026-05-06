import React, { useRef, useState } from 'react';
import { postFetchData } from '../util/fetchDatas.js';

// POST 새로운 데이터를 생성하여 DB에 저장하는 경우에 사용한다

export default function CompPost() {
    const nameRef = useRef(null);
    const adrRef = useRef(null);

    const initForm = {"name" : "", "adr" : ""};

    const [form, setForm] = useState(initForm);

    const handleFormChange = (e) => {
        // console.log(e.target.name, e.target.value);
        // 구조분해 할당
        const {name, value} = e.target;
        // 기존과 변경점이 없다면 유지 "...form", 변경된 데이터가 있다면 변경 [name]:value
        setForm({...form, [name]:value});
        console.log(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nameRef.current.value === '') {
            alert(`이름을 입력해주세요`);
            nameRef.current.focus();
        }
        else if (adrRef.current.value === '') {
            alert('주소를 입력해주세요');
            adrRef.current.focus();
        }
        else {
            // 서버로 넘기는 작업이 필요함 - POST : 이 값을 넘겨줄테니 저장 혹은 어떠한 작업을 진행
            // console.log(`서버전송! ${form}`);
            // const url = `http://localhost:9000/api/post`
            // const response = await fetch(url, 
            //                             {method: "POST", 
            //                             headers: {'Content-type' : 'application/json'}, 
            //                             body: JSON.stringify({"formData" : form})});

            const jsonData = await postFetchData(`api/post`, form);
            // App.js (서버)에서 반환하는 res.json({"result" : true}) 의 JSON 데이터의 result 값을 호출 -> jsonData.result
            console.log(`result -> ${jsonData.result}`);
            jsonData.result ? alert(`성공적으로 등록되었습니다!`) : alert(`등록에 실패하였습니다.`);
        }
    }

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>Post :: 주소 등록 폼</h1>
            <form onSubmit={handleSubmit}>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <label htmlFor="name">이름</label>
                        <input type="text" id='name' name='name' ref={nameRef} value={form.name} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label htmlFor="adr">주소</label>
                        <input type="text" id='adr' name='adr' ref={adrRef} value={form.adr} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <button type='button' onClick={() => {setForm(initForm)}}>다시작성</button>
                        <button type='submit'>등록하기</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

