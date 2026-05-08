import * as repostiory from '../3_repository/contentRepo.js';

/**
 * /home Controller
 */
export const getHome = (req, res, next) => {
    const home = repostiory.getHome();
    res.json({"result" : home});
};
/**
 * /about Controller
 */
export const getAbout = (req, res, next) => {
    const about = repostiory.getAbout();
    res.json({"result" : about});
};
/**
 * /skills Controller
 */
export const getSkills = (req, res, next) => {
    const skills = repostiory.getSkills();
    res.json({"result" : skills});
};
/**
 * /work Controller
 */
export const getWork = (req, res, next) => {
    const work = repostiory.getWork();
    res.json({"result" : work});
};
/**
 * /testimonials Controller
 */
export const getTestimonials = (req, res, next) => {
    const testimonials = repostiory.getTestimonials();
    res.json({"result" : testimonials});
};
/**
 * /work/project/:pid Controller
 */
export const getProjects = (req, res, next) => {
    // console.log(req.params.pid);
    const project = repostiory.getProjects(req.params.pid);
    res.json({"result" : project});
};