import { profileBuilder,footerBuilder,packageCardBuilder } from "./utils/render.js";
import { packages } from "./utils/data.js";

const init = () => {
    profileBuilder();
    footerBuilder();
    packageCardBuilder(packages);
}


init();