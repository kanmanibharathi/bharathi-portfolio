import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillGrid from '../components/SkillGrid';
import TimelineSection from '../components/TimelineSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import RecognitionSection from '../components/RecognitionSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillGrid />
            <ProjectsSection />
            <PublicationsSection />
            <RecognitionSection />
            <TimelineSection />
            <EducationSection />
            <ContactSection />
            <Footer />
        </>
    );
}
