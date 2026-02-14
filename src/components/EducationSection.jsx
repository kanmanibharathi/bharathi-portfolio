import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './EducationSection.css';

const education = [
    {
        degree: 'Doctor of Philosophy (Ph.D.) in Plant Molecular Biology and Biotechnology',
        institution: 'Annamalai University, Chidambaram, Tamil Nadu, India',
        status: 'Graduated Sep 2025',
        thesis: (
            <>
                Thesis: Evaluation of <em>in vitro</em> and <em>in silico</em> antidiabetic effects of
                <em>Costus pictus</em> D. Don. Ex. Lindl. and <em>Dodonaea viscosa</em> (L.) Jacq.
            </>
        ),
        tags: ['OGPA: 9.25/10', 'Doctoral Research', 'Published Research Papers'],
    },
    {
        degree: "Master's in Plant Molecular Biology and Biotechnology",
        institution: 'Annamalai University, Chidambaram, Tamil Nadu, India',
        status: 'Graduated May 2021',
        thesis: (
            <>
                Thesis: Studies on <em>in vitro</em> regeneration protocol in
                <em>Costus speciosus</em> - a high valued insulin herb
            </>
        ),
        tags: ['OGPA: 9.26/10', 'Academic Excellence', 'Research Projects'],
    },
    {
        degree: "Bachelor's in Agriculture",
        institution: 'Annamalai University, Chidambaram, Tamil Nadu, India',
        status: 'Graduated May 2019',
        thesis: 'Comprehensive study of agricultural sciences, crop management, and sustainable farming practices',
        tags: ['OGPA: 8.42/10', "Bachelor's Degree", 'Agricultural Research'],
    },
];

export default function EducationSection() {
    const { theme } = useContext(ThemeContext);

    if (theme.name === 'ai' || theme.name === 'storeroom') return null;

    return (
        <section className="section education-section" id="education-sub-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        Educational <span className="text-gradient">Background</span>
                    </h2>
                    <p className="section-subtitle">
                        Academic foundations and formal qualifications
                    </p>
                </motion.div>

                <div className="education-grid">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            className="edu-card glass-panel"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="edu-year">{edu.status}</div>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-institution">{edu.institution}</p>

                            <div className="edu-thesis-text">
                                {edu.thesis}
                            </div>

                            <div className="edu-tag-list">
                                {edu.tags.map((tag, index) => (
                                    <span key={index} className="edu-tag-item">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
