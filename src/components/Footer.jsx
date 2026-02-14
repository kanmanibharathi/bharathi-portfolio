import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Footer.css';

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-content">

                <p className="footer-copyright">
                    © {year} Kanmani Bharathi. Crafted with passion.
                </p>
            </div>
        </footer>
    );
}
