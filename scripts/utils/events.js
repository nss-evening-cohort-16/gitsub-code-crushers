import { projects } from "./data.js";
import { projectsCardBuilder } from "./render.js";

const repoEvents = () => {
  const formArea = document.querySelector('#formDiv');
  formArea.addEventListener('submit', repoFormSubmit);
};

const packageEvents = () => {
  return;
};

const projectsFormSubmit = (event) => {
    
  event.preventDefault();

  const newCard = {
    name: document.querySelector("#boardName").value,
    description: document.querySelector("#boardDesc").value,
  };
  
  projects.push(newCard);
  projectsCardBuilder(projects);
};

const projectsEvents = () => {
  const projectForm = document.querySelector("#projectForm");
  projectForm.addEventListener("submit", projectsFormSubmit);
};




const overviewEvents = () => {
    return;
};

export {
  repoEvents,
  packageEvents,
  projectsEvents,
  overviewEvents
}