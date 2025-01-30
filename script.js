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