import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileProject from "@/components/MobileProject";
import Navbar from "@/components/Navbar";
import AuroraHero from "@/components/ui/futuristic-hero-section";
import WebProjects from "@/components/WebProjects";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <AuroraHero />
            <WebProjects />
            <MobileProject />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
