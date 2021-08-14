import { githubSVG } from "./constants.js"
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

/* Card Builders */
const projectsCardBuilder = ()=> {
    return;
}

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

    console.log('footer goes here');
}

export {
    projectsCardBuilder,
    overviewCardBuilder,
    packageCardBuilder,
    repoCardBuilder,
    overviewFormBuilder,
    repoFormBuilder,
    packageFormBuilder,
    projectsFormBuilder,
    footerBuilder
};