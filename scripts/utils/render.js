import { githubSVG } from "./constants.js";
import { userObj } from "./data.js";

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

// projects form


const overviewCardBuilder = (reposArray) => {
  const pinnedRepos = reposArray.filter(r => r.isPinned);

  let domString = `
    <div class="p-3">
      <h2>Pinned</h2>
      <div class="d-flex flex-wrap">
        ${pinnedRepos.map(repo => `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description}</p>
            <div class="card-footer text-muted">
              ${repo.language}
            </div>
          </div>
        </div>
        `).join(" ")}
      </div>
    </div>
  `;

  renderToDom("#mainContentDiv", domString);
};

const repoCardBuilder = (repoArray) => {
  let domString = "";
  repoArray.forEach((repo) => {
    domString += `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
      <div class="card-body text-dark">
        <h5 class="card-title">${repo.name}</h5>
        <p class="card-text">${repo.description}</p>
        <div class="repo-languages">
            <p class="card-text">${repo.language}</p>
        </div>
      </div>

    </div>
  `
  });
    renderToDom('#mainContentDiv', domString);
};

const packageCardBuilder = (array) => {
  let domString = " "
  array.forEach(arrayItem => {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${arrayItem.name}</h5>
      <p class="card-text">${arrayItem.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
    
  });

  renderToDom("#mainContentDiv", domString);

};

/* Form Builders */
const overviewFormBuilder= () => {
    return;
}

const repoFormBuilder = () => {
  const domString = `
  <h2>
  Create a new repository
  </h2>
  <form>
    <div class="mb-3">
      <label for="repoName" class="form-label">Repository name</label>
      <input type="text" class="form-control" id="repoName" aria-describedby="nameHelp" required>
      <div id="nameHelp" class="form-text">Great repository names are short and memorable.</div>
  </div>
  <div class="mb-3">
      <label for="repoDesc" class="form-label">Description</label>
      <span class="greyed">(optional)</span>
      <input type="text" class="form-control" id="repoDesc">
  </div>
  
      <button type="submit" class="btn btn-success">Create repository</button>
  </form>
  `;

  renderToDom('#formDiv', domString);
    
}

const packageFormBuilder = () => {
  const domString = `
  <form id="packageFormSubmit">
  <div class="mb-3">
    <label for="packageName" class="form-label">Package Name</label>
    <input type="text" class="form-control" id="packageName">
  </div>
  <div class="mb-3">
    <label for="packageDescription" class="form-label">Package Description</label>
    <input type="text" class="form-control" id="packageDescription">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `

  renderToDom("#formDiv", domString);
};

const projectsFormBuilder = () => {
    const domString = `
        <form>
            <label for="boardName">Project board name</label><br>
            <input id="boardName" type="text"><br>
            <label for="boardDesc">Project board description</label><br>
            <input id="boardDesc"><br>
            <button type="submit" id="submitBtn">Create Project</button>
        </form>
    `;

    renderToDom("#formDiv", domString);
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
