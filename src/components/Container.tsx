import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Container: React.FC<MainProps> = ({ children }) => {
  return (
    <Disclosure
      as="div"
      className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 py-12"
    >
      {children}
    </Disclosure>
  );
};

export default Container;
