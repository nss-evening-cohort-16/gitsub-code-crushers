import { githubSVG } from './constants.js';
import { userObj } from './data.js';
import { overviewEvents } from './events.js';

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

/* Card Builders */
const projectsCardBuilder = (projectsArr) => {
  let domString = '';
  projectsArr.forEach((project) => {
    domString += `<div class="card card bkg-dark gh-border-dark text-white">
        <div class="card-header">
         Projects
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${project.name}</li>
          <li class="list-group-item">${project.description}</li>
        </ul>
     </div>`;
  });

  renderToDom('#mainContentDiv', domString);
};

// projects form

const overviewCardBuilder = (reposArray) => {
  const pinnedRepos = reposArray.filter((r) => r.isPinned);

  let domString = `
    <div class="p-3">
      <h2>Pinned</h2>
      <div class="d-flex flex-wrap">
        ${pinnedRepos
          .map(
            (repo) => `
        <div class="card bkg-dark gh-border-dark text-white m-1" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description}</p>
            <div class="card-footer text-muted">
              ${repo.language}
            </div>
          </div>
        </div>
        `
          )
          .join(' ')}
      </div>
    </div>
  `;

  renderToDom('#mainContentDiv', domString);
};

const repoCardBuilder = (repoArray) => {
  let domString = `<div class="d-flex flex-wrap">`;
  repoArray.forEach((repo) => {
    domString += `
    <div class="card bkg-dark gh-border-dark text-white m-3" style="max-width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${repo.name}</h5>
        <p class="card-text">${repo.description}</p>
        <div class="repo-languages">
            <p class="card-text">${repo.language}</p>
        </div>
      </div>

    </div>
  `;
  });
  domString += `</div>`;
  renderToDom('#mainContentDiv', domString);
};

const packageCardBuilder = (array) => {
  let domString = '<div class="p-3 d-flex flex-wrap">';
  array.forEach((arrayItem) => {
    domString += `<div class="card text-white bkg-dark gh-border-dark" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arrayItem.name}</h5>
      <p class="card-text">${arrayItem.description}</p>
    </div>
  </div>`;
  });

  domString += '</div>';

  renderToDom('#mainContentDiv', domString);
};

/* Form Builders */
const overviewFormBuilder = (repoArray) => {
  const domString = `
  <form id="pinRepoForm">
    <div class="mb-3">
      <label for="pinRepoSelect" class="form-label"><h2>Pin a Repo</h2></label>
      <select required id="pinRepoSelect" class="form-control form-select form-select-lg" aria-label="Pin Repo Select">
        <option value="" selected>Select a Repo</option>
        ${repoArray
          .map((r, index) => ({ ...r, index }))
          .filter((r) => !r.isPinned)
          .map((r) => `<option value="${r.index}">${r.name} - ${r.index}</option>`)}
      </select>
    </div>
    <button type="submit" class="btn btn-success">Pin Repo</button>
  </form>
  `;
  renderToDom('#formDiv', domString);
  document.querySelector('#pinRepoForm').addEventListener('submit', overviewEvents)
};

const repoFormBuilder = () => {
  const domString = `
  <div class="m-3">
  <h2>
  Create a new repository
  </h2>
  <form id="repoForm">
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
  <div class="mb-3">
      <label for="repoLang" class="form-label">Languages</label>
      <input type="text" class="form-control" id="repoLang">
  </div>

      <button type="submit" class="btn btn-success">Create repository</button>
  </form>
  </div>
  `;

  renderToDom('#formDiv', domString);
};

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
  `;

  renderToDom('#formDiv', domString);
};

const projectsFormBuilder = () => {
  const domString = `
        <form id="projectForm">
            <label for="boardName">Project board name</label><br>
            <input id="boardName" type="text"><br>
            <label for="boardDesc">Project board description</label><br>
            <input id="boardDesc"><br>
            <button type="submit" id="submitBtn">Create Project</button>
        </form>
    `;

  renderToDom('#formDiv', domString);
};

// Builds Footer

const footerBuilder = () => {
  const domString = `
    <ul class="footer-content nav justify-content-center">
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
    </ul>
    <div class="github-svg">
      ${githubSVG}
    </div>
    <ul class="footer-content nav justify-content-center">
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
};

{
  /* */
}
const profileBuilder = () => {
  const domString = `
    <div id="smallUserNameDiv" class="small-profile-stuff hide-name w-100">
      <div class='small-profile-image-container'>
        <div
          class='small-profile-image'
          style="background-image: url('${userObj.profileImage}')">
        </div>
      </div>
      <h5 class="small-username-text">${userObj.username}</h5>
    </div>
    <div class="main-github-svg">
      ${githubSVG}
    </div>
    <div class="card text-white bkg-dark">
    <div>
      <div class='profile-image-container card-img-top'>
        <div
        class='profile-image'
        style="background-image: url('${userObj.profileImage}')">
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 id="usernameDiv" class="card-title">${userObj.name}</h5>
      <h4>${userObj.username}</h4>
      <p class="card-text">${userObj.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-white bkg-dark gh-border-dark">Followers: ${userObj.followers}</li>
      <li class="list-group-item text-white bkg-dark gh-border-dark">Following: ${userObj.following}</li>
      <li class="list-group-item text-white bkg-dark gh-border-dark">Starred: ${userObj.starred}</li>
      <li class="list-group-item text-white bkg-dark gh-border-dark">${userObj.location}</li>
    </ul>
    <div class="card-body">
      <a href="mailto:${userObj.email}" target="_blank" class="card-link">Email</a>
      <a href="${userObj.website}" target="_blank" class="card-link">Website</a>
      <a href="https://www.twitter.com/${userObj.twitter}" target="_blank" class="card-link">Twitter</a>
    </div>
  </div>`;

  renderToDom('#profileDiv', domString);

  const smallUserNameDiv = document.querySelector('#smallUserNameDiv');

  const myScrollFunc = function () {
    const usernameDiv = document.querySelector('#usernameDiv');
    const usernameLocation = usernameDiv.getBoundingClientRect().top;

    if (usernameLocation <= 0) {
      smallUserNameDiv.className = 'small-profile-stuff show-name';
    } else {
      smallUserNameDiv.className = 'small-profile-stuff hide-name';
    }
  };

  window.addEventListener('scroll', myScrollFunc);
};

export { overviewCardBuilder, packageCardBuilder, repoCardBuilder, overviewFormBuilder, repoFormBuilder, packageFormBuilder, projectsFormBuilder, projectsCardBuilder, footerBuilder, profileBuilder };
