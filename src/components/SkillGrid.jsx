import { useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import SkillCard from './SkillCard';
import './SkillGrid.css';

export default function SkillGrid() {
    const { theme, category } = useContext(ThemeContext);
    const scrollRef = useRef(null);
    const skills = theme.skills || [];

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
        <section className="section" id="skills-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    key={`header-${category}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2>
                        {category === 'ai' ? (
                            <span className="text-gradient">Game Hub</span>
                        ) : category === 'storeroom' ? (
                            <span className="text-gradient">Underexplored</span>
                        ) : (
                            <><span className="text-gradient">Skills</span> & Expertise</>
                        )}
                    </h2>
                    <p className="section-subtitle">
                        {category === 'ai'
                            ? 'Games Played'
                            : category === 'storeroom'
                                ? 'The lists need to explore more'
                                : `Core competencies in ${theme.label}`}
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    <div className="skills-scroll-wrapper" key={category}>
                        <div
                            className="skills-scroll-container"
                            ref={scrollRef}
                            onMouseDown={handleMouseDown}
                        >
                            <motion.div
                                className="skills-grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {skills.map((skill, i) => (
                                    <SkillCard key={`${category}-${skill.name}`} skill={skill} index={i} />
                                ))}
                            </motion.div>
                        </div>

                        <div className="swipe-indicator">
                            <div className="swipe-line"></div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>
        </section>
    );
}
