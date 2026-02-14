import { ThemeProvider } from './contexts/ThemeContext';
import DominoSwitcher from './components/DominoSwitcher';
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import './styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <div className="main-content">
        <DominoSwitcher />
        <Home />
      </div>
    </ThemeProvider>
  );
}
