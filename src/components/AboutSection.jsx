import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './AboutSection.css';

export default function AboutSection() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className="section about-section" id="about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        A story of curiosity, science, and discovery
                    </p>
                </motion.div>

                <motion.div
                    className="about-text glass-panel"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="about-content">
                        {theme.aboutMe ? (
                            theme.aboutMe.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <>
                                <p>
                                    I am a dedicated life sciences researcher with a strong background in plant
                                    biotechnology and tissue culture–based research.
                                </p>
                            </>
                        )}
                    </div>

                    <div className="expertise-grid">
                        {!['dev', 'design', 'ai', 'storeroom'].includes(theme.name) && (
                            <>
                                <div className="expertise-item glass-panel">
                                    <div className="expertise-icon">🧪</div>
                                    <div className="expertise-info">
                                        <h3>Core Expertise</h3>
                                        <p>Molecular Biology, Phytochemistry, Tissue Culture</p>
                                    </div>
                                </div>
                                <div className="expertise-item glass-panel">
                                    <div className="expertise-icon">🧬</div>
                                    <div className="expertise-info">
                                        <h3>Research Focus</h3>
                                        <p>Natural Product Discovery, Therapeutics, Bioactivity, Metabolic Disorders, Biodegradation, Drug Development</p>
                                    </div>
                                </div>
                                <div className="expertise-item glass-panel">
                                    <div className="expertise-icon">💻</div>
                                    <div className="expertise-info">
                                        <h3>Computational Approaches</h3>
                                        <p>Bioinformatics, In silico tools, Data Analysis</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
