import designImg from '../assets/grapic.png';

export const designTheme = {
    name: 'design',
    label: 'Design & Media',
    icon: '🎨',
    heroImage: designImg,
    colors: {
        primary: '#F43F5E',
        secondary: '#EC4899',
        accent: '#FB7185',
        surface: 'rgba(244, 63, 94, 0.08)',
        dark: {
            background: 'linear-gradient(135deg, #1A0A12 0%, #2D1320 40%, #1F0D19 100%)',
            surface: 'rgba(45, 19, 32, 0.85)',
            text: '#FECDD3',
            textSecondary: '#C9A0AC',
            cardBg: 'rgba(244, 63, 94, 0.06)',
            border: 'rgba(244, 63, 94, 0.15)',
        },
        light: {
            background: 'linear-gradient(135deg, #FFF1F2 0%, #FCE7F3 40%, #FFF5F7 100%)',
            surface: 'rgba(255, 255, 255, 0.85)',
            text: '#1F0D19',
            textSecondary: '#6B4A5A',
            cardBg: 'rgba(244, 63, 94, 0.04)',
            border: 'rgba(244, 63, 94, 0.2)',
        },
    },
    typography: {
        heading: "'King', serif",
        body: "'Qafelka', sans-serif",
    },
    animation: 'gradient',
    aboutMe: [
        "I am a graphic designer and visual editor passionate about transforming ideas into compelling visual narratives. My work blends creativity with clarity, combining artistic expression and strategic thinking to craft designs that communicate with purpose.",
        "With a strong foundation in scientific visualization, I specialize in creating precise, well-structured, and publication-ready scientific graphics. My background gives me a deep understanding of complex data, allowing me to translate technical concepts into clear, visually engaging illustrations and figures.",
        "From brand identity and digital media to refined visual editing and scientific graphics, I focus on producing visuals that are not only aesthetically striking but also accurate, meaningful, and impactful. Every project is an opportunity to tell a story — through color, typography, composition, and detail.",
        "I believe great design goes beyond decoration. It shapes perception, simplifies complexity, and delivers information with both precision and emotion. My goal is to create work that is thoughtful, modern, and timeless."
    ],
    skills: [
        { name: 'Adobe Creative Suite', level: 60, icon: '🎨', details: 'Photoshop, Illustrator, Premier Pro, After Effects, InDesign' },
        { name: 'Video Editing', level: 55, icon: '🎬', details: 'Davinci Resolve, Premier Pro' },
        { name: 'Scientific Illustration', level: 85, icon: '🔬', details: 'Photoshop, Illustrator, BioRender, PowerPoint, Canva' },
        { name: 'Content Creation', level: 40, icon: '📱', details: 'Host, Content writer' },
        { name: 'Graphic Design', level: 65, icon: '🖌️', details: 'Poster, Flyer, Business cards, UI, Book cover' },
    ],
    heroTitle: null,
    heroSubtitle: 'Visualizing science beautifully',
    heroDescription: 'Merging scientific accuracy with creative expression through illustration, multimedia design, and visual storytelling.',
    socialLinks: [
        { platform: 'Instagram', url: 'https://www.instagram.com/kanmani_bharathi_j/', icon: 'instagram' },
        { platform: 'X', url: 'https://x.com/Bharathi__JK', icon: 'x-twitter' },
        { platform: 'Facebook', url: 'https://www.facebook.com/kanmanibharathi.j', icon: 'facebook' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/kanmani-bharathi-j/', icon: 'linkedin' }
    ]
};
