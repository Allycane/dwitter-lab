import * as repository from '../repository/contentRepo.js';

/**
 * pid를 받아 프로젝트 모달을 실행
 */
export const getProject = async(req, res, next) => {
    const project = await repository.getProject(req.params.pid);
    res.json({"result" : project});
};
/**
 * 추천인에 대한 정보
 */
export const getTestimonials = async(req, res, next) => {
    const testimonials = await repository.getTestimonials();
    res.json({"result" : testimonials});
};
/**
 * 작업 이력에 대한 정보
 */
export const getWork = async(req, res, next) => {
    const work = await repository.getWork();
    res.json({"result" : work});
};
/**
 * 기술에 대한 정보
 */
export const getSkills = async(req,res, next) => {
    const skills = await repository.getSkills();
    res.json({"result" : skills});
};
/**
 * 자기소개 정보
 */
export const getAbout = async(req, res, next) => {
    const about = await repository.getAbout();
    res.json({"result" : about});
};
/**
 * Home에 대한 정보
 */
export const getHome = async(req, res, next)=> {
    const home = await repository.getHome();
    res.json({"result": home});
};