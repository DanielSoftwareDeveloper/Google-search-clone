function search(e) {
  e.preventDefault();

  // Obtener texto
  const searchQuery = document.querySelector(".input").value;

  // Redireccionar a Google
  if (searchQuery.trim()) {
    window.location.href = `https://google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const luckyButton = document.getElementById("luckyButton");

  // Tecla enter
  form.addEventListener("submit", search);

  // Click Buscar con Google
  document.getElementById("searchButton").addEventListener("click", search);

  // Click Voy a tener suerte
  luckyButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchQuery = document.querySelector(".input").value;
    if (searchQuery.trim()) {
      window.location.href = `https://google.com/search?q=${encodeURIComponent(
        searchQuery
      )}&btnI=I`;
    }
  });
});
