import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './RecognitionSection.css';

const recognitionData = [
    // Awards
    {
        title: 'Dr. A.P.J. Abdul Kalam Young Scientist Award',
        details: '9th National Conference on Addressing Environmental challenges in Agricultural Production, Pushkaram College of Agriculture Sciences, Tamil Nadu, India',
        date: 'Dec 29, 2023',
        type: 'awards'
    },
    {
        title: 'University Research Studentship',
        details: 'Directorate of Student Support and Progression, Annamalai University, India',
        date: '2023 - 2024',
        type: 'awards'
    },
    // Workshops
    {
        title: 'AI-Assisted Drug Designing',
        details: 'Barcode Biotechnology',
        date: 'Jan 30, 2026',
        type: 'workshops'
    },
    {
        title: 'Five-Day Online National Workshop: AI-Digital Boot Camp',
        details: 'Organized by PMMMNMTT and TNTEU, Chennai',
        date: 'Jun 30 – Jul 4, 2025',
        type: 'workshops'
    },
    {
        title: 'Modelling Amorphous Solid Dispersion Release Mechanisms',
        details: 'Organized by Chemistry world and Schrodinger',
        date: 'Jun 10, 2025',
        type: 'workshops'
    },
    {
        title: 'Training cum Awareness Programme on protection of Plant Varieties and Farmers’ Rights Act 2001',
        details: 'Organized by Tamil Nadu Rice Research Institute, Aduthurai, Tamil Nadu',
        date: 'Jan 24, 2025',
        type: 'workshops'
    },
    {
        title: 'Author Workshop: Publishing Open Access in Wiley Journals',
        details: 'Wiley Research Training - Expert Tips for Authors',
        date: 'May 22, 2025',
        type: 'workshops'
    },
    {
        title: 'Biofertilizer and Composting Technology',
        details: 'Shanmuga Industries Arts & Science College, Tamil Nadu, India',
        date: 'Mar 14, 2024',
        type: 'workshops'
    },
    {
        title: 'Apiculture Training Program',
        details: 'Tamilnadu State Council for Science and Technology & Dept of Entomology, Annamalai University',
        date: 'Dec 18 – 22, 2023',
        type: 'workshops'
    },
    // Conferences/Webinars
    {
        title: 'Costal Agriculture – An Interactive Webinar',
        details: 'Faculty of Agriculture, Annamalai University',
        date: 'Aug 28, 2020',
        type: 'conferences'
    },
    {
        title: 'Biodiversity Conservation and Mitigation of Impacts of Climate Change',
        details: 'Faculty of Agriculture, Annamalai University',
        date: 'Aug 26, 2020',
        type: 'conferences'
    },
    {
        title: 'OMICS in Crop Improvement',
        details: 'Faculty of Agriculture, Annamalai University',
        date: 'Aug 21, 2020',
        type: 'conferences'
    },
    {
        title: 'Nurturing Future Biotech Industry Professionals',
        details: 'Division of Biotechnology, Karunya Institute of Technology and Sciences, Coimbatore',
        date: 'Jun 3-8, 2024',
        type: 'conferences'
    },
    {
        title: 'Hybrid Seed Production Using Two-Line Breeding',
        details: 'School of Agricultural Sciences, BIHER, Chennai',
        date: 'Feb 16, 2022',
        type: 'conferences'
    },
    {
        title: 'Plant Genomics and Phytotheraphy',
        details: 'The Biomics',
        date: 'Sep 12, 2020',
        type: 'conferences'
    },
    {
        title: 'Molecular Engineering: Tissue Engineering and Organ Printing',
        details: 'The Biomics',
        date: 'Sep 05, 2020',
        type: 'conferences'
    },
    {
        title: 'Medical Health Care: BCG, a Century Old Vaccine against COVID-19',
        details: 'The Biomics',
        date: 'Aug 29, 2020',
        type: 'conferences'
    },
    {
        title: 'Demystifying COVID-19: Tools of Bioinformatics for Research',
        details: 'The Biomics',
        date: 'Aug 22, 2020',
        type: 'conferences'
    },
    {
        title: 'Regulatort Genomics and Epigenomics: Technologies and Applications',
        details: 'The Biomics',
        date: 'Aug 15, 2020',
        type: 'conferences'
    },
    {
        title: 'DNA Damage Responses, Cancer Susceptibilities and Therapeutics',
        details: 'Dept of Biochemistry and Biotechnology, Annamalai University',
        date: 'Jul 20, 2020',
        type: 'conferences'
    },
    {
        title: 'Nourish Immunity Beat Pandemic',
        details: 'Mather Terasa Group of Institution, Pudukkottai, Tamil Nadu',
        date: 'Jul 14, 2020',
        type: 'conferences'
    },
    // Peer Reviews
    {
        title: 'Nusantara Bioscience ISEA Journal of Biological Science',
        details: 'Peer Review contribution (1 review)',
        date: '2024',
        type: 'reviews'
    },
    {
        title: 'South African Journal of Botany (Elsevier)',
        details: 'Peer Review contribution (2 reviews)',
        date: 'Dec 2024; May 2025',
        type: 'reviews'
    },
    {
        title: 'Journal of Plant Biochemistry and Biotechnology',
        details: 'Peer Review contribution (3 reviews)',
        date: 'May 2024 - Nov 2025',
        type: 'reviews'
    }
];

export default function RecognitionSection() {
    const { theme } = useContext(ThemeContext);
    const [filter, setFilter] = useState('none');

    if (theme.name === 'dev' || theme.name === 'design' || theme.name === 'ai' || theme.name === 'storeroom') return null;

    const counts = {
        awards: recognitionData.filter(r => r.type === 'awards').length,
        workshops: recognitionData.filter(r => r.type === 'workshops').length,
        conferences: recognitionData.filter(r => r.type === 'conferences').length,
        reviews: 6 // Total review count from Others.md
    };

    const filtered = recognitionData.filter(r => r.type === filter);

    return (
        <section className="section recognition-section" id="recognition-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        Professional <span className="text-gradient">Recognition</span>
                    </h2>
                    <p className="section-subtitle">
                        Awards, curated workshops, and academic contributions
                    </p>
                </motion.div>

                <div className="recog-selection-tabs">
                    <button
                        className={`recog-tab ${filter === 'awards' ? 'active' : ''}`}
                        onClick={() => setFilter('awards')}
                    >
                        Awards ({counts.awards})
                    </button>
                    <button
                        className={`recog-tab ${filter === 'workshops' ? 'active' : ''}`}
                        onClick={() => setFilter('workshops')}
                    >
                        Workshops ({counts.workshops})
                    </button>
                    <button
                        className={`recog-tab ${filter === 'conferences' ? 'active' : ''}`}
                        onClick={() => setFilter('conferences')}
                    >
                        Webinars ({counts.conferences})
                    </button>
                    <button
                        className={`recog-tab ${filter === 'reviews' ? 'active' : ''}`}
                        onClick={() => setFilter('reviews')}
                    >
                        Peer Reviews ({counts.reviews})
                    </button>
                </div>

                <div className="recog-stats-grid">
                    <div className={`recog-stat-card ${filter === 'awards' ? 'active' : ''}`} onClick={() => setFilter('awards')}>
                        <span className="stat-icon">🏆</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.awards}</span>
                            <span className="stat-label">Awards</span>
                        </div>
                    </div>
                    <div className={`recog-stat-card ${filter === 'workshops' ? 'active' : ''}`} onClick={() => setFilter('workshops')}>
                        <span className="stat-icon">🛠️</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.workshops}</span>
                            <span className="stat-label">Workshops</span>
                        </div>
                    </div>
                    <div className={`recog-stat-card ${filter === 'conferences' ? 'active' : ''}`} onClick={() => setFilter('conferences')}>
                        <span className="stat-icon">🌐</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.conferences}</span>
                            <span className="stat-label">Webinars</span>
                        </div>
                    </div>
                    <div className={`recog-stat-card ${filter === 'reviews' ? 'active' : ''}`} onClick={() => setFilter('reviews')}>
                        <span className="stat-icon">✍️</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.reviews}</span>
                            <span className="stat-label">Reviews</span>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {filter !== 'none' && (
                        <motion.div
                            className="recognition-list"
                            key={filter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filtered.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="recog-card glass-panel"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <span className="recog-date">{item.date}</span>
                                    <h3 className="recog-title">{item.title}</h3>
                                    <p className="recog-details">{item.details}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
