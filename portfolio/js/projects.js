const renderProjectList = (projectList) => {
  let projectContainer = document.querySelector('#projectContainer')

  let proTmpl = (project) => `
  <div class="project-card-content">
    <h3 class="project-card-heading">${project.project}</h3>
    <a href="${project.site}" class="project-card-link">
      <div class="project-card">
        <img src="projects/sites/${project.image}" alt="" class="project-card-img">
      </div>
    </a>
  </div>
  `
  projectList.map((project) => {
    projectContainer.insertAdjacentHTML('beforeend', proTmpl(project));
  })

}

const getProjectsList = () => {
  return fetch('js/projectdata.json')
  .then((respons) => respons.json());
}

getProjectsList() .then((projectList) => renderProjectList(projectList))