import { repositories } from "./data.js";
import { repoCardBuilder } from "./render.js";

const repoFormSubmit = (event) => {
  event.preventDefault();
  const newRepo = {
    name: document.querySelector("#repoName").value,
    description: document.querySelector("#repoDesc").value
  };
  repositories.push(newRepo);
  repoCardBuilder(repositories);

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