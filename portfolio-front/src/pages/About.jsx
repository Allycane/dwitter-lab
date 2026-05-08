import { useState, useEffect } from 'react';
import { Title, Description } from "../components/commons/Titles.jsx"
import Majors from "../components/content/Majors.jsx";
import Jobs from "../components/content/Jobs.jsx";
// import { useOutletContext } from "react-router-dom";
import { getFetchData } from '../util/fetch.js';

export default function About() {
    // const { data } = useOutletContext();
    // 서버에서 받아오는 형태로 진행한다 
    // useState = useEffect 내의 데이터의 상태가 바뀔 때마다 렌더링
    // useEffect = 네트워크가 실행될 때 한 번만 작동하는 Hook
    const [description, setDescription] = useState("");
    const [jobs, setJobs] = useState([]);
    const [majors, setMajors] = useState([]);

    useEffect(() => {
        // /content/about
        const fetchData = async() => {
            const jsonData = await getFetchData("content/about");
            setDescription(jsonData.result.description);
            setJobs(jsonData.result.jobs);
            setMajors(jsonData.result.majors);
        }
        fetchData();
    }, []);

    // console.log(`about --->`, description, majors, jobs);
    
    return (
        <section id="about" className="section container">
            <Title title="About me" />
            <Description description={description} />
            <Majors majors={majors} />
            <Jobs jobs={jobs}/>
        </section>
    )
}