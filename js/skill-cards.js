const skills = [
    {
        name: 'Laravel',
        label: 'Backend',
        iconClass: 'fab fa-laravel',
        from: '#ff6b6b',
        to: '#ff9b6a',
        description: 'Production-ready Laravel apps with clean architecture, tenancy flows, and automation-friendly APIs.'
    },
    {
        name: 'PHP',
        label: 'Core',
        iconClass: 'fab fa-php',
        from: '#7c83fd',
        to: '#a5b4ff',
        description: 'Pragmatic server-side engineering focused on maintainability, performance tuning, and reliable business logic.'
    },
    {
        name: 'JavaScript',
        label: 'Interactive',
        iconClass: 'fab fa-js-square',
        from: '#fbbf24',
        to: '#fde68a',
        description: 'Fluid client-side interactions, dashboard behavior, and polished UX details that feel responsive and alive.'
    },
    {
        name: 'API Development',
        label: 'Systems',
        iconClass: 'fas fa-plug',
        from: '#38bdf8',
        to: '#67e8f9',
        description: 'REST endpoints, service integrations, and structured payloads designed for scale, clarity, and long-term use.'
    },
    {
        name: 'MySQL',
        label: 'Data',
        iconClass: 'fas fa-database',
        from: '#14b8a6',
        to: '#5eead4',
        description: 'Relational models, fast queries, and schema decisions shaped around real product workloads.'
    },
    {
        name: 'Vue.js',
        label: 'Frontend',
        iconClass: 'fab fa-vuejs',
        from: '#34d399',
        to: '#86efac',
        description: 'Component-driven interfaces with a clean state flow, fast feedback, and strong product ergonomics.'
    },
    {
        name: 'HTML5',
        label: 'Markup',
        iconClass: 'fab fa-html5',
        from: '#fb7185',
        to: '#fb923c',
        description: 'Semantic structure, accessible content patterns, and flexible foundations for modern responsive layouts.'
    },
    {
        name: 'CSS3',
        label: 'Visual',
        iconClass: 'fab fa-css3-alt',
        from: '#60a5fa',
        to: '#38bdf8',
        description: 'Thoughtful layouts, motion-aware styling, and refined surfaces that add character without noise.'
    },
    {
        name: 'Tailwind CSS',
        label: 'Utility',
        iconSvg: `
            <svg viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg" class="skill-showcase-card__icon-svg" aria-hidden="true">
                <path
                    d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.005 7.263 26.478 8.754 28.109 10.404C30.764 13.091 33.837 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.495 8.937 41.022 7.446 39.391 5.796C36.736 3.109 33.663 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.505 23.463 12.978 24.954 14.609 26.604C17.264 29.291 20.337 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.995 25.137 27.522 23.646 25.891 21.996C23.236 19.309 20.163 16.2 13.5 16.2Z" />
            </svg>
        `,
        from: '#22d3ee',
        to: '#67e8f9',
        description: 'Fast UI composition with a design-system mindset, consistent spacing, and expressive utility-driven styling.'
    }
];

const rootNode = document.querySelector('#skill-cards-root');

const hexToRgba = (hex, alpha) => {
    let sanitized = hex.replace('#', '');

    if (sanitized.length === 3) {
        sanitized = sanitized
            .split('')
            .map((char) => char + char)
            .join('');
    }

    const value = Number.parseInt(sanitized, 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const renderSkillIcon = (skill) => `
    <div class="skill-showcase-card__icon-panel">
        <span class="skill-showcase-card__icon-dot skill-showcase-card__icon-dot--top"></span>
        <span class="skill-showcase-card__icon-dot skill-showcase-card__icon-dot--bottom"></span>
        <div class="skill-showcase-card__icon-core">
            ${skill.iconSvg ?? `<i class="${skill.iconClass}" aria-hidden="true"></i>`}
        </div>
    </div>
`;

const renderCards = () => {
    if (!rootNode) return;

    rootNode.innerHTML = `
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            ${skills.map((skill, index) => `
                <article
                    class="skill-showcase-card relative overflow-hidden rounded-[32px] border px-6 pb-7 pt-6"
                    data-skill-card
                    style="--skill-from:${skill.from}; --skill-to:${skill.to}; border-color:${hexToRgba(skill.from, 0.14)};"
                >
                    <div class="skill-showcase-card__topline"></div>
                    <div class="skill-showcase-card__overlay absolute inset-0"></div>
                    <div class="skill-showcase-card__glow absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl" data-skill-glow></div>
                    <div class="absolute -bottom-20 left-[-20px] h-40 w-40 rounded-full blur-3xl"
                        style="background:radial-gradient(circle, ${hexToRgba(skill.from, 0.32)} 0%, transparent 72%);"></div>

                    <div class="skill-showcase-card__depth relative z-10 flex h-full min-h-[320px] flex-col" data-skill-depth>
                        <div class="flex items-start justify-between gap-4">
                            <div class="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
                                <div class="skill-showcase-card__icon relative flex h-full w-full items-center justify-center rounded-[30px]">
                                    ${renderSkillIcon(skill)}
                                </div>
                            </div>
                            <span class="skill-showcase-card__chip inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] shadow-sm">
                                ${skill.label}
                            </span>
                        </div>

                        <div class="mt-8">
                            <h3 class="skill-showcase-card__title max-w-[12rem] text-[1.9rem] font-bold leading-[1.05] sm:text-[2.1rem]">
                                ${skill.name}
                            </h3>
                        </div>

                        <p class="skill-showcase-card__description mt-auto pt-10 text-base leading-7">
                            ${skill.description}
                        </p>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
};

const initReveal = () => {
    const cards = document.querySelectorAll('[data-skill-card]');
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
        cards.forEach((card) => card.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const delay = entry.target.dataset.revealDelay || '0ms';
            entry.target.style.transitionDelay = delay;
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
    });

    cards.forEach((card, index) => {
        card.dataset.revealDelay = `${index * 70}ms`;
        observer.observe(card);
    });
};

const initTilt = () => {
    const cards = document.querySelectorAll('[data-skill-card]');
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    cards.forEach((card) => {
        const depth = card.querySelector('[data-skill-depth]');
        const glow = card.querySelector('[data-skill-glow]');

        if (!depth || !glow) return;

        const reset = () => {
            card.classList.remove('is-active');
            depth.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
            glow.style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
        };

        card.addEventListener('pointerenter', () => {
            card.classList.add('is-active');
        });

        card.addEventListener('pointermove', (event) => {
            if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

            const rect = card.getBoundingClientRect();
            const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
            const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
            const rotateY = offsetX * 14;
            const rotateX = offsetY * -12;
            const glowX = offsetX * 26;
            const glowY = offsetY * 24;

            depth.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(18px)`;
            glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0px) scale(1.08)`;
        });

        card.addEventListener('pointerleave', reset);
        card.addEventListener('pointercancel', reset);
    });
};

const refreshAnimations = () => {
    if (typeof AOS !== 'undefined') {
        AOS.refreshHard();
    }
};

if (rootNode) {
    renderCards();
    initReveal();
    initTilt();
    refreshAnimations();
}
