import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './PublicationsSection.css';

const publications = [
    {
        title: 'Development of an efficient in vitro system for micropropagation and regeneration of Justicia adhatoda, Sida acuta, Pimenta dioica, and Premna integrifolia',
        authors: 'Poornalakshmi, M., Kanmani Bharathi, J., Sai Prathyusha Neelam, S., Gurumoorthy, P., Divya, M., Prakash., & Anandan, R.',
        journal: 'Discover Plants',
        year: 2026,
        type: 'journal',
        doi: '10.1007/s44372-026-00477-4',
    },
    {
        title: 'Exploring the Role of Microbes in the Biodegradation of Plastic Waste: Mechanisms, Interactions, and Implications for Sustainable Waste Management-A Review',
        authors: 'Akash, K., Parthasarathi, R., Kanmani Bharathi, J., & Elango, R.',
        journal: 'Water, Air, & Soil Pollution',
        year: 2025,
        type: 'journal',
        doi: '10.1007/s11270-025-08343-x',
    },
    {
        title: 'Estimation of total flavonoids, phenols, alkaloids, tannins and in vitro antioxidant activity of Costus pictus D. Don. ex. Lindl. and Dodonaea viscosa (L.) Jacq. leaf extracts',
        authors: 'Kanmani Bharathi, J., and Prakash, M.',
        journal: 'Chemical Papers',
        year: 2024,
        type: 'journal',
        doi: '10.1007/s11696-024-03802-x',
    },
    {
        title: 'Phytochemical screening and quantitative analysis, FTIR and GC-MS analysis of Costus pictus D. Don ex Lindl. Leaf extracts–A potential therapeutic herb',
        authors: 'Kanmani Bharathi, J., and Prakash, M.',
        journal: 'Journal of the Indian Chemical Society',
        year: 2024,
        type: 'journal',
        doi: '10.1016/j.jics.2024.101362',
    },
    {
        title: 'Exploring recent progress of molecular farming for therapeutic and recombinant molecules in plant systems',
        authors: 'Kanmani Bharathi, J., Suresh, P., Prakash, M. A. S., & Muneer, S.',
        journal: 'Heliyon',
        year: 2024,
        type: 'journal',
        doi: '10.1016/j.heliyon.2024.e37634',
    },
    {
        title: 'Evaluation of black gram (Vigna mungo (L.) Hepper) genotypes for coastal saline tolerance using microsatellite markers',
        authors: 'Priyadharshini, B., Anandan, R., Manikandan, S., Kanmani Bharathi, J., and Prakash, M.',
        journal: 'Brazilian Journal of Botany',
        year: 2023,
        type: 'journal',
        doi: '10.1007/s40415-023-00955-z',
    },
    {
        title: 'In vitro regeneration through organogenesis in Costus igneus –an important herbal insulin plant',
        authors: 'Bhuvaneshwari, R., Johnny, S.I., Kanmani Bharathi, J., Joshi, J.L., and Anandan, R.',
        journal: 'Research Journal of Biotechnology',
        year: 2023,
        type: 'journal',
        doi: '10.25303/1803rjbt70078',
    },
    {
        title: 'Recent trends and advances of RNA interference (RNAi) to improve agricultural crops and enhance their resilience to biotic and abiotic stresses',
        authors: 'Kanmani Bharathi, J., Anandan, R., Benjamin, L. K., Muneer, S., & Prakash, M. A. S.',
        journal: 'Plant Physiology and Biochemistry',
        year: 2022,
        type: 'journal',
        doi: '10.1016/j.plaphy.2022.11.035',
    },
    {
        title: 'Development of an efficient in vitro regeneration system in Costus speciosus-an important herbal insulin plant',
        authors: 'Kanmani Bharathi, J., Anandan, R., Rameshkumar, S., Menaka, K., & Prakash, M. A. S.',
        journal: 'South African Journal of Botany',
        year: 2022,
        type: 'journal',
        doi: '10.1016/j.sajb.2022.06.031',
    },
    {
        title: 'Genetic diversity and marker trait association for yellow mosaic virus disease in Green gram, Vigna radiata (L.) Wilczek',
        authors: 'Jeevitha, S., Kanmani Bharathi, J., Saravanan, K. R., Prakash, M., Murugan, S., & Anandan, R.',
        journal: 'Indian Journal of Experimental Biology',
        year: 2022,
        type: 'journal',
        doi: '',
    },
    {
        title: 'Root dynamics and drought stress management in plants—An overview',
        authors: 'Prakash, M., Sunilkumar, B., Kanmani Bharathi, J., & Viswanathan, C.',
        journal: 'Indian Journal of Experimental Biology',
        year: 2022,
        type: 'journal',
        doi: '',
    },
    {
        title: 'In vitro propagation of pharmaceutical and endangered medicinal plants-a mini review',
        authors: 'Kanmani Bharathi, J., & Prakash, M.',
        journal: 'Journal of Current Opinion in Crop Science',
        year: 2021,
        type: 'journal',
        doi: '',
    },
    {
        title: 'Micropropagation of vetiver grass – A review',
        authors: 'Kanmani Bharathi, J., and Prakash, M.',
        journal: 'Bentham Books – Micropropagation of Medicinal Plants',
        year: 2024,
        type: 'book',
        doi: '10.2174/9789815196146124010017',
    },
    {
        title: 'Recent Trends in Biodiversity Conservation (ICRTBC-2023)',
        authors: 'Kanmani Bharathi, J.',
        journal: 'PG & Research Department of Zoology, Periyar Arts College, Cuddalore',
        year: 2023,
        type: 'conference',
        doi: '',
    },
];

export default function PublicationsSection() {
    const { theme } = useContext(ThemeContext);
    const [filter, setFilter] = useState('none');

    if (theme.name === 'dev' || theme.name === 'design' || theme.name === 'ai' || theme.name === 'storeroom') return null;

    const counts = {
        journal: publications.filter(p => p.type === 'journal').length,
        book: publications.filter(p => p.type === 'book').length,
        conference: publications.filter(p => p.type === 'conference').length,
    };

    const filtered = publications.filter((p) => p.type === filter);

    return (
        <section className="section publications-section" id="publications-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        <span className="text-gradient">Publications</span> & Research
                    </h2>
                    <p className="section-subtitle">
                        Peer-reviewed contributions to science
                    </p>
                </motion.div>

                <div className="pub-selection-tabs">
                    <button
                        className={`pub-tab ${filter === 'journal' ? 'active' : ''}`}
                        onClick={() => setFilter('journal')}
                    >
                        Journal Articles ({counts.journal})
                    </button>
                    <button
                        className={`pub-tab ${filter === 'book' ? 'active' : ''}`}
                        onClick={() => setFilter('book')}
                    >
                        Book Chapters ({counts.book})
                    </button>
                    <button
                        className={`pub-tab ${filter === 'conference' ? 'active' : ''}`}
                        onClick={() => setFilter('conference')}
                    >
                        Conferences ({counts.conference})
                    </button>
                </div>

                <div className="pub-stats-grid">
                    <div className={`pub-stat-card ${filter === 'journal' ? 'active' : ''}`} onClick={() => setFilter('journal')}>
                        <span className="stat-icon">📄</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.journal}+</span>
                            <span className="stat-label">Articles</span>
                        </div>
                    </div>
                    <div className={`pub-stat-card ${filter === 'book' ? 'active' : ''}`} onClick={() => setFilter('book')}>
                        <span className="stat-icon">📚</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.book}</span>
                            <span className="stat-label">Books</span>
                        </div>
                    </div>
                    <div className={`pub-stat-card ${filter === 'conference' ? 'active' : ''}`} onClick={() => setFilter('conference')}>
                        <span className="stat-icon">🤝</span>
                        <div className="stat-info">
                            <span className="stat-value">{counts.conference}</span>
                            <span className="stat-label">Conferences</span>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {filter !== 'none' && (
                        <motion.div
                            className="publications-list"
                            key={filter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {[...filtered]
                                .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
                                .map((pub, i) => (
                                    <motion.div
                                        key={i}
                                        className="pub-card glass-panel"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-40px' }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        whileHover={{ y: -4 }}
                                    >
                                        <div className="pub-card-content">
                                            <div className="pub-metadata">
                                                <span className="pub-journal-info">
                                                    {pub.year} • {pub.journal}
                                                </span>
                                            </div>
                                            <h3 className="pub-title">{pub.title}</h3>
                                            <p className="pub-authors">
                                                {pub.authors.split(/,|\band\b|&/).map((author, index, array) => {
                                                    const name = author.trim();
                                                    if (!name) return null;
                                                    const isUser = name.toLowerCase().includes('kanmani bharathi');
                                                    return (
                                                        <span key={index}>
                                                            {isUser ? <strong>{name}</strong> : name}
                                                            {index < array.length - 1 ? ', ' : ''}
                                                        </span>
                                                    );
                                                })}
                                            </p>
                                        </div>
                                        <div className="pub-card-actions">
                                            <div className="pub-category-badge">
                                                {pub.type === 'journal' ? 'Journal Article' :
                                                    pub.type === 'book' ? 'Book Chapter' : 'Conference'}
                                            </div>
                                            {pub.doi && (
                                                <motion.a
                                                    href={`https://doi.org/${pub.doi}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="pub-view-btn"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    View
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
