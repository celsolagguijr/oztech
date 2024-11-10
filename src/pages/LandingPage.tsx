import Hero from '@src/features/Hero';
import Page from '@components/Page';
import TechStack from '@src/features/TechStack';
import Main from '@src/layout/Main';
import Services from '@src/features/Services';
import Footer from '@src/features/Footer';
import WorkExperience from '@src/features/WorkExperience';
import About from '@src/features/About/About';
import ContactMe from '@src/features/ContactMe';

function LandingPage() {
  return (
    <Main>
      <Page title="Celso Laggui Jr - Sofware Developer">
        <Hero />
        <About />
        <Services />
        <WorkExperience />
        <TechStack />
        <ContactMe />
        <Footer />
      </Page>
    </Main>
  );
}

export default LandingPage;
