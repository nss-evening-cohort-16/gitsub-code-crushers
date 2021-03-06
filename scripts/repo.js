import { footerBuilder, profileBuilder, repoCardBuilder, repoFormBuilder, } from "./utils/render.js";
import { repositories } from "./utils/data.js"
import { repoEvents } from "./utils/events.js";



const init = () => {
    footerBuilder();
    profileBuilder();
    repoCardBuilder(repositories);
    repoFormBuilder();
    repoEvents()
};

init();