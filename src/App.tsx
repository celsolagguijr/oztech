import './index.css';
import LandingPage from './pages/LandingPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <LandingPage />
    </>
  );
}

export default App;
