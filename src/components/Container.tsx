import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Container: React.FC<MainProps> = ({ children }) => {
  return (
    <Disclosure
      as="div"
      className="mx-auto max-w-7xl py-16 px-4 md:px-16 lg:px-16 "
    >
      {children}
    </Disclosure>
  );
};

export default Container;
