// main.js

// 1. Initialize Lenis for Smooth Scroll
const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 2. Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const cursor = document.querySelector('.custom-cursor');

const cursorText = document.querySelector('.cursor-text');
const particlesContainer = document.getElementById('cursor-particles');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
    });

    // Spawn subtle particle trail
    if (Math.random() > 0.6) {
        const p = document.createElement('div');
        p.className = 'c-particle';
        p.style.left = mouseX + 'px';
        p.style.top = mouseY + 'px';
        particlesContainer.appendChild(p);

        gsap.to(p, {
            y: "+=20",
            x: (Math.random() - 0.5) * 20,
            opacity: 0,
            scale: 0,
            duration: 0.8,
            onComplete: () => p.remove()
        });
    }
});

// Ring follows with slight delay
gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    gsap.set(cursorRing, { x: ringX, y: ringY });
    gsap.set(cursorText, { x: ringX, y: ringY });
});

// Hover effects for cursor
document.querySelectorAll('a, button, .magnetic-wrap, .feature-card, .node').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        // Check for specific text labels
        const label = el.getAttribute('data-cursor');
        if (label) {
            cursor.classList.add('has-label');
            cursorText.innerText = label;
        }
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursor.classList.remove('has-label');
        cursorText.innerText = '';
    });
});

// 2.5 Dynamic Background Crossfading
const bgLayers = document.querySelectorAll('.bg-layer');

function setBgLayer(index) {
    bgLayers.forEach((layer, i) => {
        if (i === index) {
            layer.classList.add('active');
        } else {
            layer.classList.remove('active');
        }
    });
}

// Map sections to backgrounds
ScrollTrigger.create({
    trigger: ".features-section", // Start of phase 1 scrolling
    start: "top 50%",
    onEnter: () => setBgLayer(1), // Neural Web
    onLeaveBack: () => setBgLayer(0) // Dark Grad
});

ScrollTrigger.create({
    trigger: ".integrations-section",
    start: "top 50%",
    onEnter: () => setBgLayer(2), // Particle Field
    onLeaveBack: () => setBgLayer(1)
});

ScrollTrigger.create({
    trigger: ".cost-section",
    start: "top 50%",
    onEnter: () => setBgLayer(3), // Bright Waves
    onLeaveBack: () => setBgLayer(2)
});


// 3. Text Splitting Utility
function splitText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const text = el.innerText;
        el.innerText = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.className = 'split-char';
            el.appendChild(span);
        });
    });
}
splitText('.split-text');

// 4. Image Sequence & Canvas Setup
const canvas = document.getElementById('hero-canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 336;
const images = [];
const imageSeq = { frame: 0 };

const basePath = '../../HERO SECTION – SCROLL IMAGE SEQUENCE/HERO SECTION – SCROLL IMAGE SEQUENCE/';

for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = basePath + String(i).padStart(4, '0') + '.jpg';
    images.push(img);
}

// Draw first frame once it loads
images[0].onload = renderFrame;

function renderFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const img = images[imageSeq.frame];
    if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.drawImage(
            img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    }
}

// Ensure responsive canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame();
});

// 5. Build GSAP Scroll Timeline
const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Smooth scrubbing
        pin: ".sticky-wrapper",
        pinSpacing: true
    }
});

// Animate frame sequence
heroTimeline.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    onUpdate: renderFrame,
    duration: 10
}, 0);

// Subtle zoom effect on canvas container
heroTimeline.to("#hero-canvas", {
    scale: 1.15,
    ease: "power1.inOut",
    duration: 10
}, 0);

// Stage 1: Headline Reveal then Hide
heroTimeline.to(".stage-1 .split-char", {
    y: -50,
    z: -100,
    opacity: 0,
    filter: "blur(10px)",
    scale: 1.5,
    stagger: 0.05,
    ease: "power2.in",
    duration: 1.5
}, 0); // Almost immediate

heroTimeline.to(".stage-1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.inOut"
}, 2.0);

// Stage 2: Subtext Reveal then Hide
heroTimeline.to(".stage-2 .subtext", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out"
}, 2.5);

heroTimeline.to(".stage-2 .supporting-text", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out"
}, 3.0);

heroTimeline.to(".stage-2", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power2.inOut"
}, 5.0);

// Stage 3: UI Cards Appear
heroTimeline.to(".c-1", { opacity: 1, y: -20, duration: 1, ease: "power2.out" }, 5.5);
heroTimeline.to(".c-2", { opacity: 1, y: -20, duration: 1, ease: "power2.out" }, 5.8);
heroTimeline.to(".c-3", { opacity: 1, y: -20, duration: 1, ease: "power2.out" }, 6.1);

heroTimeline.to(".stage-3", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power2.inOut"
}, 8.0);

// Stage 4: CTA Appears
heroTimeline.to(".cta-wrapper",
    { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" },
    8.5
);

// Canvas Darken At End
heroTimeline.to(".canvas-overlay", {
    background: "radial-gradient(circle at center, rgba(5,5,5,0.8) 0%, rgba(5,5,5,1) 100%)",
    duration: 2,
    onStart: () => {
        if (window.parent) window.parent.postMessage('IFRAME_DARK', '*');
    },
    onReverseComplete: () => {
        if (window.parent) window.parent.postMessage('IFRAME_LIGHT', '*');
    }
}, 8.0);


// 6. Magnetic Button Logic
const magneticElements = document.querySelectorAll('.magnetic-wrap');

magneticElements.forEach(wrap => {
    const el = wrap.querySelector('.magnetic-element');

    wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const moveX = (e.clientX - centerX) * 0.3;
        const moveY = (e.clientY - centerY) * 0.3;

        gsap.to(el, {
            x: moveX,
            y: moveY,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    wrap.addEventListener('mouseleave', () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// CTA Ripple Effect
document.querySelector('.cta-wrapper').addEventListener('click', (e) => {
    const btn = document.querySelector('.cta-btn');
    const container = document.querySelector('.ripple-container');
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = ripple.style.height = '50px';
    ripple.style.marginLeft = ripple.style.marginTop = '-25px';

    container.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// 7. Tilt Effect for Cards
document.querySelectorAll('.tilt-effect').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power1.out",
            transformPerspective: 1000
        });

        // Update glow position if applicable
        const glow = card.querySelector('.card-glow');
        if (glow) {
            gsap.to(glow, {
                background: `radial-gradient(circle at ${x}px ${y}px, var(--accent-2) 0%, transparent 70%)`
            });
        }

        // Micro icon motion
        const icon = card.querySelector('.icon, .card-icon');
        if (icon) {
            gsap.to(icon, {
                x: ((x - centerX) / centerX) * 10,
                y: ((y - centerY) / centerY) * 10,
                duration: 0.5
            });
        }
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "power2.out"
        });

        const icon = card.querySelector('.icon, .card-icon');
        if (icon) {
            gsap.to(icon, { x: 0, y: 0, duration: 0.7 });
        }
    });
});

// 8. Feature Cards Scroll Animation
const featureCards = gsap.utils.toArray('.feature-card');
featureCards.forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
    });
});

// Section Title Split Reveal
gsap.to(".features-section .split-char", {
    scrollTrigger: {
        trigger: ".features-section",
        start: "top 75%",
    },
    y: 0,
    z: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    stagger: 0.05,
    ease: "back.out(1.5)",
    duration: 1
});
