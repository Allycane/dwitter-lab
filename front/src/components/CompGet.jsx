import React, {useState, useEffect} from 'react';

export default function CompGet() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:9000/api/get`;
            const response = await fetch(url, {
                method: 'GET'
            });
            const jsonData = await response.json();
            setList(jsonData.list);
        }
        fetchData();
    }, [])

    console.log(`list ==>`, list);

    return (
        <div style={{width:"50%", margin: "auto"}}>
            <h1>FRUITS LIST</h1>
            <table border="1" style={{width:"400px"}}>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Emoji</th>
                </tr>
                {
                    list?.map((fruit, idx) =>
                        <tr>
                            <td>{fruit.name}</td>
                            <td>{fruit.color}</td>
                            <td>{fruit.emoji}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

