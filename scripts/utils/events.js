import { packages, repositories } from "./data.js";
import { packageCardBuilder, repoCardBuilder } from "./render.js";

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
  const formArea = document.querySelector('#repoForm');
  formArea.addEventListener('submit', repoFormSubmit);
};

const packageEvents = () => {
  document.querySelector("#packageFormSubmit").addEventListener("submit", packageButton);
};

const packageButton = (event) => {

    event.preventDefault();

    const newPackage = {
      name: document.querySelector("#packageName").value,
      description: document.querySelector("#packageDescription").value,

    }

    packages.push(newPackage);

    packageCardBuilder(packages);

    document.querySelector("form").reset();
  }

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
