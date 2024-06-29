document.addEventListener("DOMContentLoaded", () => {
    // Typing animation
    const element = document.getElementById('typing-animation');
    const text = "hi, i'm namay ";
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delay = 2000; // 2 seconds delay at the end of typing

    function type() {
        const currentText = text.slice(0, index);
        element.textContent = currentText + '\u00A0'.repeat(text.length - currentText.length);

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

    // Dot animation
    const dot = document.querySelector('.dot');
    let isAnimating = false;
    let animationId;
    let x, y, dx, dy;

    function initPosition() {
        const rect = dot.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
        dx = (Math.random() - 0.5) * 17; // Increased speed
        dy = (Math.random() - 0.5) * 17; // Increased speed
    }

    function animate() {
        if (!isAnimating) return;

        x += dx;
        y += dy;

        // Bounce off edges
        if (x <= 0 || x >= window.innerWidth - 20) {
            dx = -dx;
            x = Math.max(0, Math.min(x, window.innerWidth - 20));
        }
        if (y <= 0 || y >= window.innerHeight - 20) {
            dy = -dy;
            y = Math.max(0, Math.min(y, window.innerHeight - 20));
        }

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        animationId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            initPosition();
            dot.style.animation = 'none';
            dot.style.position = 'fixed';
            animate();
        }
    }

    function handleResize() {
        if (isAnimating) {
            x = Math.min(x, window.innerWidth - 20);
            y = Math.min(y, window.innerHeight - 20);
        }
    }

    dot.addEventListener('mouseenter', startAnimation);
    window.addEventListener('resize', handleResize);
});