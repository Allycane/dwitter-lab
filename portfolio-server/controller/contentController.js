import * as repository from '../repository/contentRepo.js';

/**
 * pid를 받아 프로젝트 모달을 실행
 */
export const getProject = (req, res, next) => {
    const project = repository.getProject(req.params.pid);
    res.json({"result" : project});
};
/**
 * 추천인에 대한 정보
 */
export const getTestimonials = (req, res, next) => {
    const testimonials = repository.getTestimonials();
    res.json({"result" : testimonials});
};
/**
 * 작업 이력에 대한 정보
 */
export const getWork = (req, res, next) => {
    const work = repository.getWork();
    res.json({"result" : work});
};
/**
 * 기술에 대한 정보
 */
export const getSkills = (req,res, next) => {
    const skills = repository.getSkills();
    res.json({"result" : skills});
};
/**
 * 자기소개 정보
 */
export const getAbout = (req, res, next) => {
    const about = repository.getAbout();
    res.json({"result" : about});
};
/**
 * Home에 대한 정보
 */
export const getHome = (req, res, next)=> {
    const home = repository.getHome();
    res.json({"result": home});
};