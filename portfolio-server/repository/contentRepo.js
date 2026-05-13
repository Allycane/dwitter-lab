import db from '../DB/connection.js'
/**
 * 
 * 
 */
export const getHome = async() => {
    const sql = `select home from portfolio`;
    const [results] = await db.execute(sql, [])

    return await results[0].home;
}

export const getAbout = async() => {
    const sql = `select about from portfolio`;
    const [results] = await db.execute(sql, []);

    return await results[0].about;
}

export const getSkills = async() => {
    const sql = `select skills from portfolio`;
    const [results] = await db.execute(sql, []);

    return await results[0].skills;
}

export const getTestimonials = async() => {
    const sql = `select testimonials from portfolio`;
    const [results] = await db.execute(sql, []);

    return await results[0].testimonials;
}

export const getWork = async() => {
    const sql = `select work from portfolio`;
    const [results] = await db.execute(sql, []);

    return await results[0].work;
}

export const getProject = async(pid) => {
    const sql = `select work from portfolio`;
    const [results] = await db.execute(sql, []);
    const projects = await results[0].work.projects.find(project => project.pid === pid);

    return await projects;
    
    /**
     * const projects = await result[0].work.projects;
     * return projects.find(project => project.pid === pid);
     * 와 같이 진행하여 넘겨주는 데이터를 동기 데이터로 전달하는 것도 가능하다
     */
}