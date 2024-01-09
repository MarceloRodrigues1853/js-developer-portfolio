// Função assíncrona para buscar dados do perfil a partir de uma URL específica
async function fetchProfileData() {
  // URL do arquivo JSON contendo dados do perfil
  const url =
    "https://raw.githubusercontent.com/MarceloRodrigues1853/js-developer-portfolio/main/data/profile.json";

  // Realiza uma requisição assíncrona para obter os dados do perfil
  const response = await fetch(url);

  // Converte a resposta para formato JSON
  const profileData = await response.json();

  // Retorna os dados do perfil
  return profileData;
}
