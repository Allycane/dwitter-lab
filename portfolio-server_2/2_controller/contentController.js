import * as repostiory from '../3_repository/contentRepo.js';

/**
 * /home Controller
 */
export const getHome = async(req, res, next) => {
    const home = await repostiory.getHome();
    res.json({"result" : home});
};
/**
 * /about Controller
 */
export const getAbout = async(req, res, next) => {
    const about = await repostiory.getAbout();
    res.json({"result" : about});
};
/**
 * /skills Controller
 */
export const getSkills = async(req, res, next) => {
    const skills = await repostiory.getSkills();
    res.json({"result" : skills});
};
/**
 * /work Controller
 */
export const getWork = async(req, res, next) => {
    const work = await repostiory.getWork();
    res.json({"result" : work});
};
/**
 * /testimonials Controller
 */
export const getTestimonials = async(req, res, next) => {
    const testimonials = await repostiory.getTestimonials();
    res.json({"result" : testimonials});
};
/**
 * /work/project/:pid Controller
 */
export const getProjects = async(req, res, next) => {
    // console.log(req.params.pid);
    const project = await repostiory.getProjects(req.params.pid);
    res.json({"result" : project});
};