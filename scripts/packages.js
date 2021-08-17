import { profileBuilder,footerBuilder,packageCardBuilder, packageFormBuilder } from "./utils/render.js";
import { packages } from "./utils/data.js";
import { packageEvents } from "./utils/events.js";

const init = () => {
    profileBuilder();
    footerBuilder();
    packageFormBuilder();
    packageCardBuilder(packages);
    packageEvents();
}


init();