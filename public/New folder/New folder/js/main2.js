
/* -----------------------------------
   PHASE 2 JAVASCRIPT ANIMATIONS
-------------------------------------- */

// 9. Generic Counter Animation
const counters = document.querySelectorAll('.counter');
const formatter = Intl.NumberFormat('en-US');

counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isFloat = counter.getAttribute('data-target').includes('.');
    
    gsap.to(counter, {
        scrollTrigger: {
            trigger: counter,
            start: "top 85%",
        },
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: isFloat ? 0.01 : 1 },
        onUpdate: function() {
            if(!isFloat) counter.innerHTML = formatter.format(Math.ceil(this.targets()[0].innerHTML));
        }
    });
});

// Cost Counter (Specific format)
const costCounter = document.querySelector('.cost-counter');
if(costCounter) {
    const target = parseFloat(costCounter.getAttribute('data-target'));
    gsap.to(costCounter, {
        scrollTrigger: {
            trigger: costCounter,
            start: "top 85%",
        },
        innerHTML: target,
        duration: 2.5,
        ease: "power3.out",
        onUpdate: function() {
            costCounter.innerHTML = (this.targets()[0].innerHTML * 1).toFixed(3);
        }
    });
}

// 10. Split Text Reveal for Phase 2 Sections
splitText('.split-text-scroll');
const scrollTitles = gsap.utils.toArray('.split-text-scroll');
scrollTitles.forEach(title => {
    gsap.to(title.querySelectorAll('.split-char'), {
        scrollTrigger: {
            trigger: title,
            start: "top 85%",
        },
        y: 0,
        z: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        stagger: 0.03,
        ease: "back.out(1.5)",
        duration: 0.8
    });
});

// 11. Technology Section Animations
gsap.to(".tech-list .tech-item", {
    scrollTrigger: {
        trigger: ".tech-list",
        start: "top 85%",
    },
    opacity: 1,
    x: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".tech-dashboard", {
    scrollTrigger: {
        trigger: ".tech-dashboard",
        start: "top 85%",
    },
    opacity: 0,
    y: 50,
    rotationX: 10,
    duration: 1,
    ease: "power3.out"
});

// Line Graph Draw
gsap.to(".graph-line", {
    scrollTrigger: {
        trigger: ".line-graph",
        start: "top 85%",
    },
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.inOut"
});

gsap.to(".graph-fill", {
    scrollTrigger: {
        trigger: ".line-graph",
        start: "top 85%",
    },
    opacity: 1,
    scaleY: 1,
    duration: 2,
    ease: "power2.out",
    delay: 0.5
});

// 12. Metrics Section Circular Progress Charts
const circles = document.querySelectorAll('.circle-chart .progress');
circles.forEach(circle => {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    // Assign dash array dynamically
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    
    // Animate to proper percentage based on nearest counter data-target
    const card = circle.closest('.metric-card');
    const targetEl = card.querySelector('.counter');
    let targetVal = targetEl ? parseFloat(targetEl.getAttribute('data-target')) : 100;
    
    // Normalize percentage
    if(targetVal > 100) targetVal = 75; // fake percentage for metrics like '400x'
    
    const offset = circumference - (targetVal / 100 * circumference);
    
    gsap.to(circle, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        strokeDashoffset: offset,
        duration: 2,
        ease: "power2.out",
        delay: 0.2
    });
});

// Linear Bar Fill
gsap.to(".bf-1", {
    scrollTrigger: {
        trigger: ".bar-chart-container",
        start: "top 85%",
    },
    width: "87%",
    duration: 1.5,
    ease: "power3.out"
});

// Data Blocks Stagger
gsap.from(".db", {
    scrollTrigger: {
        trigger: ".data-blocks",
        start: "top 85%",
    },
    scaleY: 0,
    transformOrigin: "bottom",
    stagger: 0.1,
    duration: 0.6,
    ease: "back.out(2)"
});

// 13. Security Features Stagger Up
gsap.to(".sec-item", {
    scrollTrigger: {
        trigger: ".sec-list",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out"
});

// 14. Parallax Avatars in CTA section
const avatars = gsap.utils.toArray('.avatar');
gsap.to(avatars, {
    scrollTrigger: {
        trigger: ".final-cta",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    },
    y: (i, target) => {
        return -50 - (Math.random() * 100);
    },
    ease: "none"
});

// 15. Setup Magnetic Hover on New Elements
document.querySelectorAll('.final-cta .magnetic-wrap, .calc-wrapper .magnetic-wrap').forEach(wrap => {
    const el = wrap.querySelector('.magnetic-element');
    
    wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const moveX = (e.clientX - centerX) * 0.2;
        const moveY = (e.clientY - centerY) * 0.2;
        
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
