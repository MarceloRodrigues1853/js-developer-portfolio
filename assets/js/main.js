// Função para atualizar as informações básicas do perfil
function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

// Função para atualizar as habilidades interpessoais (soft skills) do perfil
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

// Função para atualizar as habilidades técnicas (hard skills) do perfil
function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

// Função para atualizar as informações de idiomas do perfil
function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

// Função para atualizar as informações do portfólio do perfil
function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
            <li>
                <h3 ${project.github ? 'class="github"' : ""}>${
        project.name
      }</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `;
    })
    .join("");
}

// Função para atualizar as informações de experiência profissional do perfil
function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );
  professionalExperience.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `;
    })
    .join("");
}

// Função assíncrona que executa automaticamente e atualiza o perfil
(async () => {
  const profileData = await fetchProfileData(); // Função não fornecida, presume-se que recupere dados do perfil
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
})();
