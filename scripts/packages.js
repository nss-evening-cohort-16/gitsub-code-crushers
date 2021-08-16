import { profileBuilder,footerBuilder,packageCardBuilder, packageFormBuilder } from "./utils/render.js";
import { packages } from "./utils/data.js";

const init = () => {
    profileBuilder();
    footerBuilder();
    packageFormBuilder();
    packageCardBuilder(packages);
}


init();