import { projects } from "./utils/data.js";
import { footerBuilder, profileBuilder, projectsCardBuilder } from "./utils/render.js";


const init = () => {
    footerBuilder();
    profileBuilder();
    projectsCardBuilder(projects);
};

init();