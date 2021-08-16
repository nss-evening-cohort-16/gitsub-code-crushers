import { footerBuilder, profileBuilder, repoCardBuilder, repoFormBuilder, } from "./utils/render.js";
import { repositories } from "./utils/data.js"



const init = () => {
    footerBuilder();
    profileBuilder();
    repoCardBuilder(repositories);
    repoFormBuilder();
};

init();