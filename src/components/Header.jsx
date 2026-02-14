import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { category } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero-section' },
        { name: 'About', href: '#about-section' },
        ...(category === 'biotech' ? [{ name: 'Research & Recognition', href: '#publications-section' }] : []),
        { name: category === 'ai' ? 'Games' : category === 'storeroom' ? 'Underexplored' : 'Skills', href: '#skills-section' },
        ...(category === 'dev' || category === 'design'
            ? [{ name: 'Projects', href: '#projects-section' }]
            : (category === 'ai' || category === 'storeroom')
                ? []
                : [{ name: 'Experience', href: '#timeline-section' }]),
        ...(category !== 'ai' && category !== 'storeroom' ? [{ name: 'Education', href: '#education-sub-section' }] : []),
        { name: 'Contact', href: '#contact-section' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 65;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                            transition={{ duration: 0.3 }}
                            className="logo-icon-wrapper"
                        >
                            {category === 'biotech' && (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="var(--color-primary)" fillOpacity="0.1" stroke="var(--color-primary)" strokeWidth="1.5" />
                                    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="var(--color-secondary)" strokeWidth="1.5" strokeDasharray="2 4" />
                                    <circle cx="12" cy="12" r="3" fill="var(--color-primary)" />
                                    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            )}
                            {category === 'dev' && (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                                    <path d="M16 18L22 12L16 6" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 6L2 12L8 18" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 2L11 22" stroke="var(--color-secondary)" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            )}
                            {category === 'ai' && (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="var(--color-primary)" fillOpacity="0.2" stroke="var(--color-primary)" strokeWidth="2" />
                                    <path d="M12 2V4M12 20V22M2 12H4M20 12H22M5 5L6.5 6.5M17.5 17.5L19 19M5 19L6.5 17.5M17.5 6.5L19 5" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                            {category === 'design' && (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="var(--color-primary)" strokeWidth="2" />
                                    <path d="M4 12H20M12 4V20" stroke="var(--color-secondary)" strokeWidth="1" strokeDasharray="3 3" />
                                    <circle cx="12" cy="12" r="3" fill="var(--color-primary)" fillOpacity="0.2" stroke="var(--color-primary)" strokeWidth="1.5" />
                                </svg>
                            )}
                            {category === 'storeroom' && (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M21 16.5V7.5L12 12" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 16.5V7.5L12 12" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12V22" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="nav-link"
                                >
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <ThemeToggle />
                    <button
                        className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''} ${['biotech', 'dev', 'design', 'ai', 'storeroom'].includes(category) ? 'icon-mode' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {category === 'biotech' && (
                            <svg className="menu-toggle-icon" width="20" height="20" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.16,19.63A5.55,5.55,0,0,0,27.42,17H10.06a4.36,4.36,0,0,1-3.67-2,4.07,4.07,0,0,1-.19-4.13l3.62-7,1.42,1.63-2.74,5.3,8.84-5.66a.91.91,0,0,1,1,1.53L7.84,13.38a2.13,2.13,0,0,0,.24.52,2.28,2.28,0,0,0,1.65,1L18.11,9.5a.91.91,0,0,1,1,1.52L13,14.94H20.8l2.41-4.82a5.6,5.6,0,0,0-5-8.12H9a1,1,0,0,0-.9.56L3.88,10.89a5.6,5.6,0,0,0,5,8.12h7.65l-3.43,6.87a5.6,5.6,0,0,0,5,8.12h9.28a1,1,0,0,0,.93-.65l4.14-8.24A5.58,5.58,0,0,0,32.16,19.63ZM17.75,25.57A.91.91,0,0,1,18,24.31l6-3.88A.91.91,0,1,1,25,22l-6,3.88a.91.91,0,0,1-1.26-.27ZM29,24.34l-9,5.78a.91.91,0,1,1-1-1.53l9-5.78a.91.91,0,1,1,1,1.53Z" />
                            </svg>
                        )}
                        {category === 'dev' && (
                            <svg className="menu-toggle-icon" width="22" height="22" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.7,48.1c1-10.9,10.2-19.4,21.2-19.4c12.6,0,22.6,10.9,21.2,23.7c-1,9.2-9.7,17.9-19,18.8 c-6.9,0.7-13.4-1.8-17.9-6.8c-0.6-0.7-1.4-1.1-2.1-0.1l-2.3,2.8c-0.5,0.6-0.1,1,0.4,1.5c5.2,5.5,12.4,8.6,20.2,8.5 c14-0.2,25.7-11.2,26.6-25.2C80.2,36.1,67.6,22.9,52,22.9c-14.3,0-26.1,11.1-27,25.2c0,0.3-0.1,0.7-0.1,1h-4.4 c-1.3,0-1.9,1.5-1.2,2.3l7.3,8.8c0.6,0.7,1.6,0.7,2.2,0l7.3-8.8c0.8-1,0.1-2.3-1.2-2.3h-4.3L30.7,48.1z" />
                                <path d="M52.1,38.1c-6.5,0-11.9,5.4-11.9,11.9s5.4,11.9,11.9,11.9S64,56.5,64,50S58.7,38.1,52.1,38.1z M61.6,48.8 h-3.1c-0.1-2.8-0.8-5.3-1.7-7.1C59.4,43.1,61.2,45.8,61.6,48.8z M51,41v7.8h-2.7C48.4,45.1,49.6,42.2,51,41z M51,51.2V59 c-1.3-1.1-2.5-4.1-2.7-7.8H51z M53.3,59v-7.8h2.7C55.9,54.9,54.7,57.8,53.3,59z M53.3,48.8V41c1.3,1.1,2.5,4.1,2.7,7.8H53.3z M47.6,41.7c-1,1.9-1.5,4.3-1.7,7.1h-3.1C43.1,45.8,44.9,43.1,47.6,41.7z M42.7,51.2h3.1c0.1,2.8,0.8,5.3,1.7,7.1 C44.9,56.9,43.1,54.2,42.7,51.2z M56.7,58.3c1-1.9,1.5-4.3,1.7-7.1h3.1C61.2,54.2,59.4,56.9,56.7,58.3z" />
                            </svg>
                        )}
                        {category === 'design' && (
                            <svg className="menu-toggle-icon" width="22" height="22" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.996 60.6a.81.81 0 0 0-.648-.238c-4.093.304-17.579 2.587-19.278 19.154a2 2 0 0 1-.061.332c-.037.135-.935 3.338-3.511 5.746a.838.838 0 0 0 .382 1.424c1.712.396 4.434.869 7.675.869 3.186 0 6.194-.455 8.94-1.352 7.397-2.41 12.62-7.922 15.521-16.379a.84.84 0 0 0-.204-.865z" fill="currentColor" />
                                <path d="m42.738 57.686-6.882-6.779a.835.835 0 0 0-1.181.008l-6.618 6.717a.837.837 0 0 0 .008 1.182l6.879 6.781c.156.154.367.24.586.24.278.02.439-.09.595-.248l6.621-6.719a.84.84 0 0 0-.008-1.182" fill="currentColor" />
                                <path d="M89.125 3.709c-1.013-.996-2.459-1.566-3.969-1.566-1.545 0-3.018.594-4.036 1.631l-42.375 43.01a.833.833 0 0 0 .009 1.182l6.88 6.777a.834.834 0 0 0 1.181-.008l42.369-43.006a5.62 5.62 0 0 0 1.626-4.021 5.64 5.64 0 0 0-1.685-3.999" fill="currentColor" />
                            </svg>
                        )}
                        {category === 'ai' && (
                            <svg className="menu-toggle-icon" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M511.275 335.864C497.579 153.025 426.595 67.81 353.089 67.81c-55.32 0-73.124 39.474-97.088 39.474S214.177 67.81 158.912 67.81c-73.505 0-144.49 85.216-158.186 268.054-5.225 57.878 18.231 94.731 56.036 105.86 38.222 11.256 84.926-16.545 123.429-72.472 17.151-24.925 46.267-58.459 75.81-58.459s58.658 33.534 75.81 58.459c38.504 55.927 85.206 83.728 123.428 72.472 37.814-11.129 61.261-47.982 56.036-105.86m-312.581-83.446h-37.116v37.116H120.87v-37.116H83.755V211.71h37.115v-37.115h40.708v37.115h37.116zm123.22 5.35c-11.864 0-21.47-9.596-21.47-21.46 0-11.855 9.606-21.461 21.47-21.461 11.854 0 21.47 9.606 21.47 21.461 0 11.864-9.615 21.46-21.47 21.46m51.856 51.874c-11.846 0-21.452-9.606-21.452-21.469 0-11.855 9.606-21.461 21.452-21.461 11.864 0 21.469 9.606 21.469 21.461 0 11.863-9.606 21.469-21.469 21.469m0-103.738c-11.846 0-21.452-9.614-21.452-21.469 0-11.864 9.606-21.469 21.452-21.469 11.864 0 21.469 9.606 21.469 21.469 0 11.855-9.606 21.469-21.469 21.469m51.872 51.864c-11.854 0-21.469-9.596-21.469-21.46 0-11.855 9.615-21.461 21.469-21.461 11.865 0 21.469 9.606 21.469 21.461 0 11.864-9.604 21.46-21.469 21.46" />
                            </svg>
                        )}
                        {category === 'storeroom' && (
                            <svg className="menu-toggle-icon" width="24" height="24" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.097 0q-.687 0-1.228.299c-1.557.308-2.555 1.296-3.292 2.025-.49.485-.913.904-1.279.904h-.001a21 21 0 0 0-1.298-.048c-2.712 0-4.129.945-5.413 3.612-.042.086-.088.141-.131.208h.776c3.309 0 6 2.691 6 6a1 1 0 1 1-2 0c0-2.206-1.794-4-4-4H7.51c-2.429 1.798-3.926 5.031-3.729 8.287.096 1.588-.336 4.195-1.11 5.398-1.907 2.968-1.907 7.114 0 10.082.295.458.727.991 1.227 1.609.892 1.102 2.386 2.945 2.335 3.789-.227 3.736 2.053 8.041 5.082 9.596.545.28.637.563.843 1.42l.073.296v-1.251c0-3.859 3.14-7 7-7a1 1 0 1 1 0 2c-2.757 0-5 2.243-5 5v4.458c.534.369 1.081.579 1.544.755.936.355 1.323.503 1.465 1.529.39 2.826 2.064 4.514 4.478 4.514 3.554 0 7.513-3.802 7.513-9.256v-37a1 1 0 0 1-1 1c-3.309 0-6 2.691-6 6 0 4.411-3.589 8-8 8a1 1 0 1 1 0-2c3.309 0 6-2.691 6-6 0-4.411 3.589-8 8-8a1 1 0 0 1 1 1v-9C29.232 2.227 26.171 0 24.097 0m-2.865 32.984c0-1.934.754-3.753 2.123-5.121a.999.999 0 1 1 1.414 1.414c-.991.991-1.537 2.308-1.537 3.707s.546 2.716 1.537 3.707a1 1 0 0 1 0 1.414c-.991.991-1.537 2.308-1.537 3.707s.546 2.716 1.537 3.707a.999.999 0 1 1-1.414 1.414 7.2 7.2 0 0 1-2.123-5.121c0-1.618.535-3.152 1.51-4.414a7.17 7.17 0 0 1-1.51-4.414m-7.155 2.497q0 .002 0 0a2.046 2.046 0 0 0 1.21 2.623 1 1 0 1 1-.694 1.876 4.05 4.05 0 0 1-2.393-5.191v-.002a2.045 2.045 0 0 0-1.21-2.623 1 1 0 1 1 .694-1.877 4.05 4.05 0 0 1 2.393 5.194m1.822-15.324a4.05 4.05 0 0 1-5.192 2.393 2.04 2.04 0 0 0-2.624 1.209 1 1 0 0 1-1.876-.694 4.05 4.05 0 0 1 5.192-2.393 2.044 2.044 0 0 0 2.624-1.209 1.001 1.001 0 0 1 1.876.694m40.912 2.302c-.773-1.202-1.206-3.811-1.109-5.398.197-3.257-1.3-6.489-3.729-8.287h-4.722c-1.654 0-3 1.346-3 3a1 1 0 1 1-2 0c0-2.757 2.243-5 5-5h.776c-.043-.067-.089-.122-.13-.207-1.283-2.667-2.7-3.612-5.412-3.612-.397 0-.828.018-1.32.049-.281 0-.718-.469-1.142-.921-.741-.792-1.731-1.852-3.3-2.032L36.218 0c-3.234 0-5.967 1.832-5.967 4v46c0 5.454 3.959 9.255 7.513 9.256h.001c2.413 0 4.086-1.688 4.477-4.514.142-1.026.529-1.174 1.465-1.529.463-.176 1.01-.386 1.544-.755V48c0-2.757-2.243-5-5-5a1 1 0 1 1 0-2c3.86 0 7 3.141 7 7v1.252l.074-.297c.207-.856.298-1.141.843-1.42 3.028-1.555 5.308-5.858 5.082-9.596-.009-.156.048-.355.131-.569l-2.985-3.463A5.96 5.96 0 0 0 45.251 31c-4.411 0-8-3.589-8-8a1 1 0 1 1 2 0c0 3.309 2.691 6 6 6a7.94 7.94 0 0 1 6.812 3.801l2.399 2.78c.384-.52.794-1.026 1.122-1.432.5-.617.932-1.15 1.227-1.608 1.907-2.968 1.907-7.114 0-10.082m-19.335 8.52c2.638 2.639 2.638 6.933 0 9.571-.901.901-1.398 2.099-1.398 3.371s.497 2.47 1.398 3.371A.999.999 0 0 1 36.769 49a1 1 0 0 1-.707-.293c-1.279-1.279-1.984-2.979-1.984-4.785s.705-3.506 1.984-4.785a4.775 4.775 0 0 0 0-6.743 1 1 0 0 1 1.414-1.415m11.936-7.539a7 7 0 0 1-1.173.103c-3.224 0-6.087-2.317-6.664-5.599a4.74 4.74 0 0 0-1.958-3.08 4.72 4.72 0 0 0-3.563-.79 1 1 0 1 1-.346-1.971 6.73 6.73 0 0 1 5.057 1.124 6.73 6.73 0 0 1 2.779 4.371 4.77 4.77 0 0 0 5.521 3.871 1 1 0 0 1 1.158.813 1 1 0 0 1-.811 1.158" />
                            </svg>
                        )}
                        {!['biotech', 'dev', 'design', 'ai', 'storeroom'].includes(category) && (
                            <>
                                <span></span>
                                <span></span>
                                <span></span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-nav"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="mobile-nav-link"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
