function addElementToDOM(targetId, content) {
    const target = document.getElementById(targetId);
    const p = document.createElement("p");
    p.textContent = content;
    target.appendChild(p);
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}

function simulateClick(targetId, message) {
    addElementToDOM(targetId, message);
}

function handleFormSubmit(formId, targetId) {
    const form = document.getElementById(formId);
    const error = document.getElementById("error-message")
    const input = form.querySelector("input");
    const text = input.value.trim();

    if (text === "") {
        error.textContent = "Input cannot be empty"
        error.classList.remove("hidden");
        return;
    }

    error.textContent = "";
    error.classList.add("hidden");
    addElementToDOM(targetId, text);
    input.value = "";
}

if (typeof module !== "undefined") {
    module.exports = {
        addElementToDOM,
        removeElementFromDOM,
        simulateClick,
        handleFormSubmit,
    };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('simulate-click').addEventListener('click', () => {
      simulateClick('dynamic-content', 'Button Clicked!');
    });

    document.getElementById('user-form').addEventListener('submit', (event) => {
      event.preventDefault();
      handleFormSubmit('user-form', 'dynamic-content');
    });
  });
}