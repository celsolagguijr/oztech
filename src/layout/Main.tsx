import React, { ReactNode } from 'react';
import Navigation from '@src/components/Navigation';
import { Disclosure } from '@headlessui/react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Disclosure as="div" className="relativew w-fullbg-white">
      <Navigation />
      {children}
    </Disclosure>
  );
};

export default Main;
