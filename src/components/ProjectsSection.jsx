import { useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './ProjectsSection.css';

const projects = [
    // ... (data remains same)
    {
        title: 'Business Website - Product',
        description: 'One Research Hub',
        link: 'https://oneresearchhub.in/',
        type: 'Web',
        tags: ['Business', 'Product']
    },
    {
        title: 'Personal Web Page',
        description: 'Kanmani Bharathi Portfolio',
        link: 'https://kanmanibharathi.info/',
        type: 'Web',
        tags: ['Portfolio']
    },
    {
        title: 'Harvest - Data Analyzer',
        description: 'Statistical tools Web App',
        link: 'https://www.oneresearchhub.in/data-anal/data-analyzer',
        type: 'Web App',
        tags: ['Statistics', 'Data Analysis']
    },
    {
        title: 'Akira Hub',
        description: 'Wet-Lab tools Web App',
        link: 'https://www.oneresearchhub.in/modules/akira-hub/akira-hub',
        type: 'Web App',
        tags: ['Wet-Lab', 'Tools']
    },
    {
        title: 'FASTA_Q-Xtract',
        description: 'Bio Application',
        link: 'https://github.com/kanmanibharathi/FASTA_Q-Xtract/releases',
        type: 'Application',
        tags: ['Bioinformatics', 'Tool']
    },
    {
        title: 'SeqAnalysis',
        description: 'Bio Application',
        link: 'https://github.com/kanmanibharathi/SeqAnalysis/releases/tag/v1.0.13',
        type: 'Application',
        tags: ['Bioinformatics', 'Tool']
    }
];

export default function ProjectsSection() {
    const { theme } = useContext(ThemeContext);
    const scrollRef = useRef(null);

    if (theme.name !== 'dev' && theme.name !== 'design') return null;

    const displayProjects = theme.name === 'dev' ? projects : [];

    const handleMouseDown = (e) => {
        const slider = scrollRef.current;
        if (!slider) return;

        slider.classList.add('dragging');
        const startX = e.pageX - slider.offsetLeft;
        const scrollLeft = slider.scrollLeft;

        const handleMouseMove = (e) => {
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            slider.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            slider.classList.remove('dragging');
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <section className="section projects-section" id="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        {theme.name === 'dev' ? 'Innovative tools and platforms for science' : 'Selected Works'}
                    </p>
                </motion.div>

                <div className="projects-scroll-wrapper">
                    <div
                        className="projects-scroll-container"
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                    >
                        <div className="projects-grid">
                            {displayProjects.length > 0 ? (
                                displayProjects.map((project, index) => (
                                    <motion.a
                                        key={index}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card glass-panel"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="project-content">
                                            <span className="project-type">{project.type}</span>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <div className="project-tags">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="project-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="project-icon">
                                            ↗
                                        </div>
                                    </motion.a>
                                ))
                            ) : (
                                <div className="no-projects-placeholder" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--color-text-secondary)' }}>
                                    <p>Projects gallery coming soon.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {displayProjects.length > 0 && (
                        <div className="swipe-indicator">
                            <div className="swipe-line"></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
