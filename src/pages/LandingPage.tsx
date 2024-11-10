import Hero from '@src/features/Hero';
import Page from '@components/Page';
import TechStack from '@src/features/TechStack';
import Main from '@src/layout/Main';
import Services from '@src/features/Services';
import Footer from '@src/features/Footer';
import WorkExperience from '@src/features/WorkExperience';

function LandingPage() {
  return (
    <Main>
      <Page title="Celso Laggui Jr - Sofware Developer">
        <Hero />
        <Services />
        <WorkExperience />
        <TechStack />
        <Footer />
      </Page>
    </Main>
  );
}

export default LandingPage;
