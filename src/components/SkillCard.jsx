import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import './SkillCard.css';

export default function SkillCard({ skill, index }) {
    const { theme, category } = useContext(ThemeContext);

    return (
        <motion.div
            className={`skill-card glass-panel ${category === 'ai' ? 'game-card' : ''}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ y: -4, scale: 1.02 }}
            layout
        >
            <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
            </div>

            {category !== 'ai' && (
                <>
                    <div className="skill-bar-track">
                        <motion.div
                            className="skill-bar-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
                            style={{ background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})` }}
                        />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                </>
            )}

            {(skill.details || skill.tags) && (
                <div className="skill-tags">
                    {(skill.details ? skill.details.split(',') : skill.tags).map((tag, i) => (
                        <span key={i} className="skill-tag">{tag.trim()}</span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
