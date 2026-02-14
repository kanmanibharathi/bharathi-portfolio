import developerImg from '../assets/developer.png';

export const devTheme = {
    name: 'dev',
    label: 'Bridging Codes',
    icon: '💻',
    heroImage: developerImg,
    colors: {
        primary: '#00F3FF', // Cyber Cyan
        secondary: '#0070FF', // Electric Blue
        accent: '#10B981', // Matrix Green
        surface: 'rgba(0, 243, 255, 0.08)',
        dark: {
            background: 'linear-gradient(135deg, #020617 0%, #0c152a 40%, #030a1c 100%)',
            surface: 'rgba(2, 6, 23, 0.85)',
            text: '#F1F5F9',
            textSecondary: '#7DD3FC',
            cardBg: 'rgba(0, 243, 255, 0.06)',
            border: 'rgba(0, 243, 255, 0.15)',
        },
        light: {
            primary: '#0F766E', // Dark Cyber Green for Light Mode contrast
            background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 40%, #F8FAFC 100%)',
            surface: 'rgba(255, 255, 255, 0.85)',
            text: '#020617',
            textSecondary: '#334155', // Slightly darker for better readability
            cardBg: 'rgba(15, 118, 110, 0.05)',
            border: 'rgba(15, 118, 110, 0.2)',
        },
    },
    typography: {
        heading: "'CyberCrypter', monospace",
        body: "'CSGilbertMono', monospace",
    },
    animation: 'code',
    aboutMe: [
        "I am a core biotechnologist driven by research, experimentation, and biological discovery. My foundation lies in understanding living systems — from experimental design and molecular techniques to data interpretation and scientific reasoning. The laboratory shaped my analytical mindset, teaching me to think critically, validate rigorously, and question systematically.",
        "As biological research became increasingly data-intensive, my curiosity naturally expanded beyond the lab bench into programming, data systems, and computational pipelines. I began exploring how code could enhance reproducibility, accelerate analysis, and transform raw experimental outputs into structured, meaningful insights.",
        "Today, I operate at the intersection of biotechnology and software engineering. I develop bioinformatics workflows, automated data pipelines, R Shiny applications, and modern web platforms using React that enable researchers to analyze, interpret, and visualize complex biological datasets with clarity and precision.",
        "I approach scientific software the way I approach research — with rigor, scalability, and reproducibility in mind. From data preprocessing and statistical modeling to interactive dashboards and deployable web applications, I design systems that transform fragmented experimental data into coherent analytical ecosystems.",
        "My goal is to integrate biological insight with computational precision — creating systems that make science more reproducible, scalable, and accessible. I believe the future of biotechnology lies not only in discovery, but in building intelligent tools that empower discovery itself."
    ],
    skills: [
        { name: 'Programming', level: 20, icon: '💻', details: 'Python, HTML, CSS, JS, React, VS' },
        { name: 'R', level: 80, icon: '📊', details: 'R programming, R Shiny app' },
        { name: 'Python (Basics)', level: 65, icon: '🐍', details: 'Biopython, pysam, scikit-bio, pandas, NumPy, SciPy, matplotlib, PyMOL' },
        { name: 'GitHub', level: 80, icon: '🐙', details: 'Version Control, CI/CD' },
        { name: 'Automation Tools', level: 45, icon: '🤖', details: 'Microcontroller, IOT, Networking' },
        { name: 'Software Dev', level: 50, icon: '💾', details: 'Python, R app, JS' },
    ],

    heroTitle: null,
    heroSubtitle: 'Building tools for science',
    heroDescription: 'Crafting Research Tools | Data Pipelines | Web Applications that bridge Biotechnology | Statistical Tools',
    socialLinks: [
        { platform: 'GitHub', url: 'https://github.com/kanmanibharathi', icon: 'github' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/kanmani-bharathi-j/', icon: 'linkedin' },
        { platform: 'GitLab', url: 'https://gitlab.com/kanmanibharathi', icon: 'git' }
    ]
};
