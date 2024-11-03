import Hero from '@src/features/Hero';
import Page from '@components/Page';
import TechStack from '@src/features/TechStack';
import Main from '@src/layout/Main';
import Footer from '@src/features/Footer';

function LandingPage() {
  return (
    <Main>
      <Page title="Celso Laggui Jr">
        <Hero />
        <TechStack />
        <Footer />
      </Page>
    </Main>
  );
}

export default LandingPage;
