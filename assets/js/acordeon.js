// Seleciona todos os elementos com a classe 'trigger' dentro da classe 'acordeon'
const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");

// Para cada elemento com a classe 'trigger', adiciona um ouvinte de evento de clique
acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    // Obtém o elemento pai (acordeon) do elemento atual
    const acordeon = trigger.parentElement;

    // Verifica se a classe 'open' está presente no acordeon (se está aberto)
    const isOpen = acordeon.classList.contains("open");

    // Se estiver aberto, remove a classe 'open'; se não, adiciona a classe 'open'
    if (isOpen) {
      acordeon.classList.remove("open");
    } else {
      acordeon.classList.add("open");
    }
  });
});
