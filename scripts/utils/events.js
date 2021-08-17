import { projects, packages, repositories } from "./data.js";
import { projectsCardBuilder, packageCardBuilder, repoCardBuilder, overviewCardBuilder, overviewFormBuilder } from "./render.js";

const repoFormSubmit = (event) => {
  event.preventDefault();
  const newRepo = {
    name: document.querySelector("#repoName").value,
    description: document.querySelector("#repoDesc").value,
    language: document.querySelector("#repoLang").value
  };
  repositories.push(newRepo);
  repoCardBuilder(repositories);
  document.querySelector('#repoForm').reset();
};

const repoEvents = () => {
  const formArea = document.querySelector('#repoForm');
  formArea.addEventListener('submit', repoFormSubmit);
};

const packageEvents = () => {
  document.querySelector("#packageFormSubmit").addEventListener("submit", packageButton);
};

const projectsFormSubmit = (event) => {

  event.preventDefault();

  const newCard = {
    name: document.querySelector("#boardName").value,
    description: document.querySelector("#boardDesc").value,
  };

  projects.push(newCard);
  projectsCardBuilder(projects);
  document.querySelector("#projectForm").reset();
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
  const projectForm = document.querySelector("#projectForm");
  projectForm.addEventListener("submit", projectsFormSubmit);
};

const overviewEvents = (e) => {
  e.preventDefault()
  if(e.target.id === 'pinRepoForm'){
    const pinIndex = document.querySelector('#pinRepoSelect').value;
    repositories[pinIndex].isPinned = true;
    overviewCardBuilder(repositories);
    overviewFormBuilder(repositories);
  } else if (e.target.id.includes('unpinRepo')){
    const unpinIndex = e.target.id.split("---")[1];
    repositories[unpinIndex].isPinned = false;
    overviewCardBuilder(repositories);
    overviewFormBuilder(repositories);
  }
};

export {
  repoEvents,
  packageEvents,
  projectsEvents,
  overviewEvents,
  repoFormSubmit
}
