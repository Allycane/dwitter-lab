import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function CompPost() {
    const nameRef = useRef(null);
    const [data, setData] = useState(''); // 서버 전송 데이터 - 서버
    const [name, setName] = useState(''); // 폼 입력 데이터 - 클라이언트

    const handleChange = () => {
        setName(nameRef.current.value);
    }

    const handlePost = () => {
        const fetchData = async() => {
            const response = await fetch(url, {
                    method: 'POST',
                    headers: {'Content-type' : 'application/json'},
                    body: JSON.stringify({"name" : "홍길동"}) // 데이터가 url을 통해 넘어갈 때는 문자로 넘어가서 json으로 파싱되어야 함
                });
                const jsonData = await response.json();
                setData(jsonData.result);
        }
    }
    /*
    useEffect(() => {
            const fetchData = async() => {
                const url = `http://localhost:9000/api/post`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {'Content-type' : 'application/json'},
                    body: JSON.stringify({"name" : "홍길동"}) // 데이터가 url을 통해 넘어갈 때는 문자로 넘어가서 json으로 파싱되어야 함
                });
                const jsonData = await response.json();
                setData(jsonData.result);
            }
            fetchData();
    }, [])
    */

    return (
        <div>
            <input type="text" name='name' value={name} ref={nameRef} onChange={handleChange}/>
            <button onClick={handlePost}>전송</button>
            <h2>Post 방식으로 전송된 데이터 :: {data}</h2>
        </div>
    );
}

