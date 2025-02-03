function openModal() {
    document.getElementById("resumeModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("resumeModal");
    if (event.target === modal) {
        closeModal();
    }
};
