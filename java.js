const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove o 'active' de todas as abas e conteúdos
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // ativa a aba clicada e o conteúdo correspondente
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});