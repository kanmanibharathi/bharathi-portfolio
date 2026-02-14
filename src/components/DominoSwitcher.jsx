import { useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import { categoryOrder, themes } from '../themes';
import './DominoSwitcher.css';

export default function DominoSwitcher() {
    const { category, setCategory } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen && isMobile) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, isMobile]);

    return (
        <nav
            ref={navRef}
            className={`domino-nav ${isOpen ? 'is-open' : 'is-collapsed'}`}
            aria-label="Category Navigation"
        >
            <div className="domino-wrapper">
                {/* Mobile Handle */}
                {isMobile && (
                    <button
                        className="domino-handle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Hide categories" : "Show categories"}
                    >
                        <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="handle-icon"
                        >
                            {isOpen ? '✕' : themes[category].icon}
                        </motion.span>
                    </button>
                )}

                <AnimatePresence>
                    {(isOpen || !isMobile) && (
                        <motion.div
                            className="domino-container"
                            initial={isMobile ? { x: 100, opacity: 0 } : false}
                            animate={{ x: 0, opacity: 1 }}
                            exit={isMobile ? { x: 100, opacity: 0 } : false}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {categoryOrder.map((cat) => {
                                const t = themes[cat];
                                const isActive = category === cat;
                                return (
                                    <motion.button
                                        key={cat}
                                        className={`domino-tile ${isActive ? 'active' : ''}`}
                                        onClick={() => {
                                            setCategory(cat);
                                            if (window.innerWidth <= 768) setIsOpen(false);
                                        }}
                                        animate={{ scale: isActive ? 1.10 : 1 }}
                                        whileHover={{ scale: isActive ? 1.15 : 1.10 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                        style={{
                                            '--domino-color': t.colors.primary,
                                            '--domino-glow': `${t.colors.primary}40`,
                                        }}
                                        aria-label={t.label}
                                        aria-current={isActive ? 'page' : undefined}
                                        id={`domino-${cat}`}
                                        title={t.label}
                                    >
                                        <span className="domino-icon">{t.icon}</span>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
