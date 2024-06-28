document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById('typing-animation');
    const text = "hi, i'm namay.";
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delay = 2000; // 2 seconds delay at the end of typing

    function type() {
        element.textContent = text.slice(0, index);

        if (!isDeleting && index < text.length) {
            index++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(type, deletingSpeed);
        } else if (index === text.length) {
            isDeleting = true;
            setTimeout(type, delay);
        } else if (index === 0) {
            isDeleting = false;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
