import { projects } from "./utils/data.js";
import { footerBuilder, profileBuilder, projectsCardBuilder, projectsFormBuilder } from "./utils/render.js";


const init = () => {
    footerBuilder();
    profileBuilder();
    projectsCardBuilder(projects);
    projectsFormBuilder();
};

init();