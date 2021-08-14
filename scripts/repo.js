import { footerBuilder, profileBuilder, repoCardBuilder, } from "./utils/render.js";
import { repositories } from "./utils/data.js"



const init = () => {
    footerBuilder();
    profileBuilder();
    repoCardBuilder(repositories);
};

init();