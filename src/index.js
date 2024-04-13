function createProject(title, description) {
  let projectCard = document.createElement('div');
  projectCard.classList.add('project');
  
  let projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = title;

  let projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = description;

  let projectsContainer = document.getElementById('projects-container');
  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectsContainer.appendChild(projectCard);

//   <div class="project-icons">
//   <i class="fa-fw fa-lg fa-solid fa-magnifying-glass"></i>
//   <i class="fa-fw fa-lg fa-solid fa-magnifying-glass"></i>
//   <i class="fa-fw fa-lg fa-solid fa-magnifying-glass"></i>
// </div>
  let projectIcons = document.createElement('div');
  projectIcons.classList.add('project-icons');
  projectCard.appendChild(projectIcons);

  let starIcon = document.createElement('i');
  starIcon.classList.add('fa-fw', 'fa-lg', 'fa-regular', 'fa-star');
  projectIcons.appendChild(starIcon);

  let eyeIcon = document.createElement('i');
  eyeIcon.classList.add('fa-fw', 'fa-lg', 'fa-solid', 'fa-eye');
  projectIcons.appendChild(eyeIcon);

  let shareIcon = document.createElement('i');
  shareIcon.classList.add('fa-fw', 'fa-lg', 'fa-solid', 'fa-share-from-square');
  projectIcons.appendChild(shareIcon);
}

createProject("Super Cool Project", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit. Semper risus in hendrerit gravida rutrum quisque non. Proin libero nunc consequat interdum.");
createProject("Less Cool Project", "Mattis molestie a iaculis at. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Malesuada fames ac turpis egestas integer. In eu mi bibendum neque egestas congue quisque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum.");
createProject("Impossible App", "Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Parturient montes nascetur ridiculus mus mauris. Ultricies leo integer malesuada nunc vel risus.");

createProject("Super Cool Project", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit. Semper risus in hendrerit gravida rutrum quisque non. Proin libero nunc consequat interdum.");
createProject("Less Cool Project", "Mattis molestie a iaculis at. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Malesuada fames ac turpis egestas integer. In eu mi bibendum neque egestas congue quisque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum.");
createProject("Impossible App", "Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Parturient montes nascetur ridiculus mus mauris. Ultricies leo integer malesuada nunc vel risus.");

createProject("Super Cool Project", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit. Semper risus in hendrerit gravida rutrum quisque non. Proin libero nunc consequat interdum.");
createProject("Less Cool Project", "Mattis molestie a iaculis at. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Malesuada fames ac turpis egestas integer. In eu mi bibendum neque egestas congue quisque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum.");
createProject("Impossible App", "Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Parturient montes nascetur ridiculus mus mauris. Ultricies leo integer malesuada nunc vel risus.");