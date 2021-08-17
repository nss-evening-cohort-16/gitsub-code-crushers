import { repositories } from "./data.js";
import { repoCardBuilder } from "./render.js";

const repoFormSubmit = (event) => {
  event.preventDefault();
  const newRepo = {
    name: document.querySelector("#repoName"),
    description: document.querySelector("#repoDesc")
  };
  repositories.push(newRepo);
  repoCardBuilder(repositories);
  console.log(repositories);

};

const repoEvents = () => {
  const formArea = document.querySelector('#formDiv');
  formArea.addEventListener('submit', repoFormSubmit);
};

const packageEvents = () => {
  return;
};

const projectsEvents = () => {
  return;
};

const overviewEvents = () => {
    return;
};

export {
  repoEvents,
  packageEvents,
  projectsEvents,
  overviewEvents,
  repoFormSubmit
}