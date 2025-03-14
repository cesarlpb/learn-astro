// document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  const footerText = document.getElementById("footer-text");

  function handleScroll() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage >= 70) {
      footer.style.display = "block";
      footerText.textContent = "Contenido modificado con JS";
      console.log("El footer ha aparecido porque se hizo scroll al 70%");
      window.removeEventListener("scroll", handleScroll); // Dejar de escuchar eventos para mejorar rendimiento
    }
  }

  window.addEventListener("scroll", handleScroll);
// });