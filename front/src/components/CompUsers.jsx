import React, { useEffect, useState } from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompUsers() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const jsonData = await getFetchData('users');
            setUsers(jsonData.users);
        }
        fetchData();
    }, [])

    console.log(users);

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: USERS</h1>
            <table border="1" style={{width:"70%"}}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>PASSWORD</th>
                    </tr>
                </thead>
                {/**서버에게 받은 데이터를 출력 */}
                <tbody>
                    {
                        users?.map((item, idx) => 
                            <tr key={idx} style={{textAlign:"center"}}>
                                <td>{idx+1}</td>
                                <td style={{fontWeight:"bold"}}>{item.id}</td>
                                <td>{item.pass}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

