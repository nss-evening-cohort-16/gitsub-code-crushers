import { projects } from "./utils/data.js";
import { projectsEvents } from "./utils/events.js";
import { footerBuilder, profileBuilder, projectsCardBuilder, projectsFormBuilder } from "./utils/render.js";



const init = () => {
    footerBuilder();
    profileBuilder();
    projectsCardBuilder(projects);
    projectsFormBuilder();
    projectsEvents();
};

init();