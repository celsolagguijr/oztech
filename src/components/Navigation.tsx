import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import contacts from '@shared/contacts';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function Navigation() {
  const [showBackground, setShowBackground] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      setShowBackground(currPos.y < 0);
    },
    [showBackground]
  );

  return (
    <Disclosure
      as="nav"
      className={`fixed inset-x-0 px-6  ${showBackground ? 'border-b backdrop-blur-md bg-white/30' : ''}  z-10  sm:px-8 lg:px-16`}
    >
      <div className=" mx-auto max-w-7xl flex h-16  items-center justify-between">
        <a
          href="/"
          className="font-bold bg-gradient-to-r 
            from-blue-600 
            to-blue-900
            bg-clip-text 
            text-transparent"
        >{`<oztech/>`}</a>
        <div className="flex items-center justify-end gap-2">
          {contacts.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              className="bg-slate-100
                rounded-full 
                shadow-md
                px-2 
                py-1 
                flex  
                items-center 
                justify-between 
                gap-2 
                text-sm
                md:bg-transparent
                md:px-3
                md:py-2
                md:rounded-md
                md:shadow-none
                "
              target="_blank"
            >
              <span className="text-xl lg:text-base">{icon}</span>
              <span className="hidden sm:inline">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </Disclosure>
  );
}

export default Navigation;
