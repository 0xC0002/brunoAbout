function openModal() {
    document.getElementById("resumeModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    var modal = document.getElementById("resumeModal");
    if (event.target === modal) {
        closeModal();
    }
};
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });