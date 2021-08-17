import { packages } from "./data.js";
import { packageCardBuilder } from "./render.js";


const repoEvents = () => {
  const formArea = document.querySelector('#formDiv');
  formArea.addEventListener('submit', repoFormSubmit);
};

const packageEvents = () => {
  document.querySelector("#packageFormSubmit").addEventListener("submit", packageButton);
};

const packageButton = (event) => {

  if (event.target.id === "packageFormSubmit") {
    event.preventDefault();

    const newPackage = {
      name: document.querySelector("#packageName").value,
      description: document.querySelector("#packageDescription").value,
    };

    packages.push(newPackage);

    packageCardBuilder(packages);

    document.querySelector("form").reset();
  }
};

const projectsEvents = () => {
  return;
};

const overviewEvents = () => {
  return;
};

export { repoEvents, packageEvents, projectsEvents, overviewEvents };
