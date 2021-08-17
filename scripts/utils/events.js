import { packages } from "./data.js";
import { packageCardBuilder } from "./render.js";

const repoEvents = () => {
  return;
};

const packageEvents = () => {
  document.querySelector("#packageFormSubmit").addEventListener("submit", packageButton);
};

const packageButton = (event) => {
  console.warn(event.target.id);

  if (event.target.id === "packageFormSubmit") {
    event.preventDefault();
    console.log("Form submitted");

    const newPackage = {
      name: document.querySelector("#packageName").value,
      description: document.querySelector("#packageDescription").value,
    };

    packages.push(newPackage);

    packageCardBuilder(packages);
  } else {
    console.log("Nope!")
  }
};

const projectsEvents = () => {
  return;
};

const overviewEvents = () => {
  return;
};

export { repoEvents, packageEvents, projectsEvents, overviewEvents };
