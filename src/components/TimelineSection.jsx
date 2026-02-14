import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './TimelineSection.css';

const timelineData = [
    {
        year: '2015',
        title: 'Bachelor of Agriculture',
        icon: '🌱',
    },
    {
        year: '2019',
        title: "Master's in Plant Molecular Biology",
        icon: '🧬',
    },
    {
        year: '2021',
        title: 'Ph.D. Research Begins',
        icon: '🔬',
    },
    {
        year: '2022',
        title: 'Major Publications',
        icon: '📄',
    },
    {
        year: '2023',
        title: 'Young Scientist Award',
        icon: '🏆',
    },
    {
        year: '2024',
        title: 'Research Hub Founded',
        icon: '🚀',
    },
    {
        year: '2025',
        title: 'Ph.D. Graduated',
        icon: '🎓',
    },
];

export default function TimelineSection() {
    const { category } = useContext(ThemeContext);

    if (category === 'ai' || category === 'storeroom') return null;

    return (
        <section className="section timeline-section" id="timeline-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="section-subtitle">
                        A decade of research, learning, and growth
                    </p>
                </motion.div>

                <div className="timeline">
                    <div className="timeline-line" />
                    {timelineData.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <div className="timeline-card glass-panel">
                                <span className="timeline-year">{item.year}</span>
                                <span className="timeline-icon">{item.icon}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                            </div>
                            <div className="timeline-dot" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
