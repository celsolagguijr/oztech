import Hero from '@src/features/Hero';
import TechStack from '@src/features/TechStack';
import Main from '@src/layout/Main';

function LandingPage() {
  return (
    <Main>
      <Hero />
      <TechStack />
    </Main>
  );
}

export default LandingPage;
