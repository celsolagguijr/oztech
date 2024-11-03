import { Disclosure } from '@headlessui/react';
import contacts from '@shared/contacts';

function Navigation() {
  return (
    <Disclosure
      as="nav"
      className="fixed inset-x-0 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 z-10"
    >
      <div className="flex h-16  items-center justify-between">
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
                rounded-md 
                px-3 
                py-2 
                flex 
                items-center 
                justify-between 
                gap-2 
                text-sm
                sm:bg-transparent 
                md:bg-transparent"
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
