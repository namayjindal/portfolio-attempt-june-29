document.addEventListener("DOMContentLoaded", () => {
    // Typing animation (unchanged)
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

    // Dot animation (modified)
    const dot = document.querySelector('.dot');
    let isAnimating = false;
    let animationId;
    let x, y, dx, dy;

    // Define color array (replace with your desired hex codes)
    const colors = ['#FFB726', '#E63946', '#8AFAFF', '#DAFF7D', '#02CDAE'];
    let currentColorIndex = 0;

    // Speed control
    const speed = 3; // Constant speed
    const avoidanceRadius = 150; // Radius around the mouse where the ball will avoid
    const avoidanceStrength = 0.8; // Increased for more noticeable avoidance

    function initPosition() {
        const rect = dot.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
        const angle = Math.random() * 2 * Math.PI;
        dx = Math.cos(angle) * speed;
        dy = Math.sin(angle) * speed;
    }

    function animate(mouseX, mouseY) {
        if (!isAnimating) return;

        // Calculate distance from mouse to ball
        const distX = x - mouseX;
        const distY = y - mouseY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // If mouse is too close, adjust velocity to move away
        if (distance < avoidanceRadius) {
            const angle = Math.atan2(distY, distX);
            const avoidX = Math.cos(angle) * avoidanceStrength;
            const avoidY = Math.sin(angle) * avoidanceStrength;
            dx += avoidX;
            dy += avoidY;

            // Normalize speed after avoidance
            const currentSpeed = Math.sqrt(dx * dx + dy * dy);
            dx = (dx / currentSpeed) * speed;
            dy = (dy / currentSpeed) * speed;
        }

        x += dx;
        y += dy;

        // Bounce off edges and change color
        if (x <= 10 || x >= window.innerWidth - 10) {
            dx = -dx;
            x = Math.max(10, Math.min(x, window.innerWidth - 10));
            changeColor();
        }
        if (y <= 10 || y >= window.innerHeight - 10) {
            dy = -dy;
            y = Math.max(10, Math.min(y, window.innerHeight - 10));
            changeColor();
        }

        dot.style.left = `${x - 10}px`;
        dot.style.top = `${y - 10}px`;

        animationId = requestAnimationFrame(() => animate(mouseX, mouseY));
    }

    function changeColor() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        dot.style.backgroundColor = colors[currentColorIndex];
    }

    let mouseX = -1000, mouseY = -1000; // Initialize mouse position off-screen

    function startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            initPosition();
            dot.style.animation = 'none';
            dot.style.position = 'fixed';
            animate(mouseX, mouseY);
        }
    }

    function handleResize() {
        if (isAnimating) {
            x = Math.min(x, window.innerWidth - 10);
            y = Math.min(y, window.innerHeight - 10);
        }
    }

    function handleMouseMove(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    dot.addEventListener('mouseenter', startAnimation);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
});