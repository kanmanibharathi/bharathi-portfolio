import gameImg from '../assets/game.webp';

export const aiTheme = {
    name: 'ai',
    label: 'Gaming World',
    icon: '🤖',
    heroImage: gameImg,
    colors: {
        primary: '#06B6D4',
        secondary: '#0EA5E9',
        accent: '#22D3EE',
        surface: 'rgba(6, 182, 212, 0.08)',
        dark: {
            background: 'linear-gradient(135deg, #030B14 0%, #0A1628 40%, #081320 100%)',
            surface: 'rgba(10, 22, 40, 0.85)',
            text: '#CFFAFE',
            textSecondary: '#7DD3FC',
            cardBg: 'rgba(6, 182, 212, 0.06)',
            border: 'rgba(6, 182, 212, 0.15)',
        },
        light: {
            background: 'linear-gradient(135deg, #ECFEFF 0%, #E0F2FE 40%, #F0F9FF 100%)',
            surface: 'rgba(255, 255, 255, 0.85)',
            text: '#0A1628',
            textSecondary: '#4B6478',
            cardBg: 'rgba(6, 182, 212, 0.04)',
            border: 'rgba(6, 182, 212, 0.2)',
        },
    },
    typography: {
        heading: "'Maztech', sans-serif",
        body: "'Malaga', sans-serif",
    },
    animation: 'particles',
    aboutMe: [
        "I am a passionate gaming content creator dedicated to delivering immersive and high-quality gameplay experiences. My content blends skill, storytelling, and cinematic editing to turn every gaming moment into engaging digital entertainment.",
        "From competitive highlights and walkthroughs to stylized edits and reaction-driven content, I focus on creating videos that are dynamic, visually impactful, and enjoyable to watch. I pay close attention to pacing, sound design, transitions, and visual effects to ensure every frame adds value to the experience.",
        "Gaming, for me, is more than just playing — it’s about creating moments that connect with an audience. My goal is to produce content that is entertaining, professional, and consistently evolving with the gaming community."
    ],
    skills: [
        { name: 'The First Descendant', icon: '🎮' },
        { name: 'Where Winds Meet', icon: '⚔️' },
        { name: 'Tomb Raider', icon: '🏺' },
        { name: 'Inside', icon: '🌑' },
        { name: 'Split Fiction', icon: '🧩' },
        { name: 'Destiny 2', icon: '🌌' },
        { name: 'Halo', icon: '🛡️' },
        { name: 'Naraka: Bladepoint', icon: '🗡️' },
        { name: 'The Callisto Protocol', icon: '🚀' },
        { name: 'Hogwarts Legacy', icon: '🪄' },
        { name: 'Detroit: Become Human', icon: '🤖' },
        { name: 'Batman: Arkham Knight', icon: '🦇' },
        { name: 'Wuchang: Fallen Feathers', icon: '🪶' },
        { name: 'Expedition 33', icon: '🧭' },
        { name: 'Hollow Knight: Silksong', icon: '🐞' },
    ],
    heroTitle: null,
    heroSubtitle: 'Creating moments that connect',
    heroDescription: 'Non gammer exploring Gaming world.',
    socialLinks: [
        { platform: 'Steam', url: 'https://s.team/p/fbhr-jdqt/HRDBVVKB', icon: 'steam' },
        { platform: 'Discord', url: 'https://discord.gg/W5x3EqPxCR', icon: 'discord' },
    ]
};
