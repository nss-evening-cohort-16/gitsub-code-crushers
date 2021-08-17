import { footerBuilder, profileBuilder, repoCardBuilder, repoFormBuilder, } from "./utils/render.js";
import { repositories } from "./utils/data.js"
import { repoFormSubmit } from "./utils/events.js";



const init = () => {
    footerBuilder();
    profileBuilder();
    repoCardBuilder(repositories);
    repoFormBuilder();
    repoFormSubmit()
};

init();