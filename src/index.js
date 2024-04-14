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
createProject("Easy Peasy App", "At varius vel pharetra vel. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Enim tortor at auctor urna nunc id cursus metus. Enim eu turpis egestas pretium aenean pharetra magna ac. Elit at imperdiet dui accumsan sit.");
createProject("Ad Blocker", "Velit dignissim sodales ut eu sem integer vitae. Aliquam ultrices sagittis orci a scelerisque purus. Eget duis at tellus at urna condimentum mattis pellentesque id. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.");
createProject("Money Printer", "Enim ut sem viverra aliquet eget sit. Eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper malesuada proin libero nunc. In eu mi bibendum neque egestas congue quisque. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.");
createProject("Password Manager", "Id diam maecenas ultricies mi eget mauris. Urna id volutpat lacus laoreet non curabitur gravida arcu. Lorem mollis aliquam ut porttitor leo a. Non diam phasellus vestibulum lorem sed risus ultricies.");
createProject("Chat App", "Cras semper auctor neque vitae. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Aliquet bibendum enim facilisis gravida neque convallis a cras.");
createProject("Twitter Clone", "Blandit cursus risus at ultrices mi. Felis eget velit aliquet sagittis id consectetur. Quis lectus nulla at volutpat diam ut venenatis. Non sodales neque sodales ut. Nisl rhoncus mattis rhoncus urna neque viverra justo. Tristique et egestas quis ipsum suspendisse. Odio tempor orci dapibus ultrices in iaculis.");