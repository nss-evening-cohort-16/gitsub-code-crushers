import { footerBuilder, profileBuilder, overviewCardBuilder, overviewFormBuilder } from './utils/render.js';
import { repositories } from './utils/data.js';
const overviewInit = () => {
  footerBuilder();
  profileBuilder();
  overviewCardBuilder(repositories);
  overviewFormBuilder(repositories);
};

overviewInit();
