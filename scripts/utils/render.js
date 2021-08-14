import { githubSVG } from "./constants.js";
import { userObj, projects } from "./data.js";

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

/* Card Builders */
const projectsCardBuilder = (projectsArr)=> {
    let domString = ""
    projectsArr.forEach(project => {
        domString += `<div class="card" style="width: 18rem;">
        <div class="card-header">
         Projects
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${project.name}</li>
          <li class="list-group-item">${project.description}</li>
        </ul>
     </div>`;
    });

  renderToDom("#mainContentDiv", domString);
};

const overviewCardBuilder = () => {
    return;
};

const repoCardBuilder = () => {
    return;
};

const packageCardBuilder = () => {
    return;
};

/* Form Builders */
const overviewFormBuilder= () => {
    return;
}

const repoFormBuilder = () => {
    return;
}

const packageFormBuilder = () => {
  return;
};

const projectsFormBuilder = () => {
  return;
};



// Builds Footer

const footerBuilder = () => {
  const domString = `
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="/">© 2021 GitHub, Inc.</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://github.com/security">Security</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://www.githubstatus.com/">Status</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://docs.github.com/">Docs</a>
      </li>
      <li class="nav-item">
        ${githubSVG}
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://support.github.com/">Contact GitHub</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://github.com/pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://docs.github.com/">API</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://services.github.com/">Training</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://github.blog/">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://github.com/about">About</a>
      </li>
    </ul>
  `;
  
  renderToDom('#footerContainer', domString);
}

const profileBuilder = () => {
    const domString = `
    <div class="card" style="width: 18rem;">
    <img src="${userObj.profileImage}" class="card-img-top" alt="Profile Image">
    <div class="card-body">
      <h5 class="card-title">${userObj.name}</h5>
      <h4>${userObj.username}</h4>
      <p class="card-text">${userObj.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Followers: ${userObj.followers}</li>
      <li class="list-group-item">Following: ${userObj.following}</li>
      <li class="list-group-item">Starred: ${userObj.starred}</li>
      <li class="list-group-item">${userObj.location}</li>
    </ul>
    <div class="card-body">
      <a href="mailto:${userObj.email}" target="_blank" class="card-link">Email</a>
      <a href="${userObj.website}" target="_blank" class="card-link">Website</a>
      <a href="https://www.twitter.com/${userObj.twitter}" target="_blank" class="card-link">Twitter: ${userObj.twitter}</a>
    </div>
  </div>`


  renderToDom("#profileDiv", domString);
}

export {
    overviewCardBuilder,
    packageCardBuilder,
    repoCardBuilder,
    overviewFormBuilder,
    repoFormBuilder,
    packageFormBuilder,
    projectsFormBuilder,
    projectsCardBuilder,
    footerBuilder,
    profileBuilder,
};