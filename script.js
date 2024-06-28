document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById('greeting');
    const greetings = ["hi, i'm namay.", "नमस्ते, मैं नमय हूँ"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % greetings.length;
        greetingElement.textContent = greetings[index];
    }, 10000);
});
