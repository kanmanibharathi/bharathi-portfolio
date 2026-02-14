import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ContactSection.css';

const contactLinks = [
    {
        label: 'Email',
        value: 'jkbarathias@gmail.com',
        href: 'mailto:jkbarathias@gmail.com',
        icon: '📧',
    },
    {
        label: 'ORCID',
        value: '0000-0003-1774-7314',
        href: 'https://orcid.org/0000-0003-1774-7314',
        icon: '🆔',
    },
    {
        label: 'ResearchGate',
        value: 'Kanmani Bharathi J',
        href: 'https://www.researchgate.net/profile/Kanmani-Bharathi-J',
        icon: '🔬',
    },
    {
        label: 'LinkedIn',
        value: 'Kanmani Bharathi',
        href: 'https://www.linkedin.com/in/kanmani-bharathi-j/',
        icon: '💼',
    },
    {
        label: 'GitHub',
        value: 'Kanmani Bharathi',
        href: 'https://github.com/kanmani-bharathi',
        icon: '🐙',
    },
    {
        label: 'Scopus',
        value: '57790937300',
        href: 'https://www.scopus.com/authid/detail.uri?authorId=57790937300',
        icon: '📊',
    },
];

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKeX1nutefRWcU0SgtweOGAI0PKSZqyAgrht6m239kgp171fBo_B72D-QOHbvKWtzwhg/exec';

export default function ContactSection() {
    const { theme, category } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple redirects
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Since mode is 'no-cors', we can't check response.ok or response.status
            // We'll assume success if it doesn't catch
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="section contact-section" id="contact-section">
            <div className="container">
                <motion.div
                    className="section-header centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="contact-title-main">GET IN <span className="text-gradient">TOUCH</span></h2>
                    <p className="section-subtitle">
                        Let's collaborate on research, discuss opportunities, or connect
                    </p>
                </motion.div>

                <div className="contact-main-grid">
                    <motion.div
                        className="contact-text-side"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Connect With Me</h3>
                        <p>
                            I'm always open to discussing research collaborations, academic opportunities,
                            or simply connecting with fellow researchers and scholars in the field of
                            Plant Biotechnology and Molecular Biology.
                        </p>
                    </motion.div>

                    <motion.div
                        className="contact-cards-side"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="mailto:contact@kanmanibharathi.info" className="contact-info-card">
                            <div className="info-icon email-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" />
                            </div>
                            <div className="info-content">
                                <span className="info-label">Email</span>
                                <span className="info-value">contact@kanmanibharathi.info</span>
                            </div>
                        </a>
                        <a href={category === 'ai' ? "https://t.me/revoicestudio1" : "https://t.me/kanmanibharathij"} target="_blank" rel="noopener noreferrer" className="contact-info-card">
                            <div className="info-icon telegram-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
                            </div>
                            <div className="info-content">
                                <span className="info-label">Telegram</span>
                                <span className="info-value">{category === 'ai' ? "@revoicestudio1" : "@kanmanibharathij"}</span>
                            </div>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="contact-form-container glass-panel"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Send a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="What's this about?"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`submit-btn ${status}`}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            <span className="btn-icon">{status === 'success' ? '✔️' : '✈️'}</span>
                        </button>

                        {status === 'error' && (
                            <p className="form-error-msg">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
