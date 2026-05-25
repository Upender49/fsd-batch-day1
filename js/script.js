const getStartedButton = document.getElementById("getStartedButton");
const buttonMessage = document.getElementById("buttonMessage");

getStartedButton.addEventListener("click", () => {
    buttonMessage.textContent = "Great choice! Your ProductFlow workspace is ready to begin.";
    getStartedButton.firstChild.textContent = "Workspace Ready ";
    getStartedButton.disabled = true;
    getStartedButton.style.cursor = "default";
});
