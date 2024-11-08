import { Disclosure } from '@headlessui/react';
import Container from '@src/components/Container';
import contacts from '@shared/contacts';

function Footer() {
  return (
    <Disclosure
      as="footer"
      className="bg-gradient-to-r from-blue-600 to-blue-900"
    >
      <Container>
        <div className="flex items-center justify-between">
          <p className="text-sm text-white">
            {' '}
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center justify-end gap-2">
            {contacts.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                className="
                rounded-md 
                px-3 
                py-2 
                flex 
                items-center 
                justify-between 
                gap-2 
                text-sm
                text-white
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
      </Container>
    </Disclosure>
  );
}

export default Footer;
