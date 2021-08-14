import { footerBuilder, profileBuilder, overviewCardBuilder } from './utils/render.js';
import { repositories } from './utils/data.js';
const overviewInit = () => {
  footerBuilder();
  profileBuilder();
  overviewCardBuilder(repositories);
};

overviewInit();
