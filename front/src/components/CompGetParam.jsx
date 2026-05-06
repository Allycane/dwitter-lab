import React, { useState, useEffect } from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompGetParam() {
    const [list, setList] = useState([]);
    const [result, setResult] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFetchData(`api/products`);
            setList(data.products);
        }
        fetchData();
    }, []);

    const handleProductDetail = async (product) => {
        const jsonData = await getFetchData(`api/products/${product.pid}`);
        setResult(jsonData.result);
    }

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: PRODUCT LIST - {result}</h1>
            <ul style={{display:"flex", gap:"10px", listStyleType: "none"}}>
                {
                    list?.map((product) => 
                        <li key={product.pid} style={{border: "1px solid midnightblue", padding:"10px"}}>
                            <img src={product.img} 
                            style={{width:"150px", border: "1px solid lightgray"}} 
                            onClick={() => {handleProductDetail(product)}} />
                            <p style={{textAlign: "center", fontWeight:"600"}}>{product.name}</p>
                            <p style={{textAlign: "center"}}>{product.price}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

