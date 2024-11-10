import Container from '@src/components/Container';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { contactsWithEmail } from '@src/shared/contacts';

function ContactMe() {
  return (
    <Disclosure as="section">
      <Container>
        <Disclosure as="div" className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent md:text-4xl">
            Let’s Connect!
          </h1>
        </Disclosure>
        <div className="flex flex-col gap-2  lg:w-1/2">
          {contactsWithEmail.map((contact) => (
            <a
              href={contact.href}
              key={contact.name}
              className="text-sm hover:text-blue-900 lg:text-base"
              target="_blank"
            >
              <span className="mr-2">{contact.icon}</span>
              <span className="mr-2">{contact.title}</span>
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </a>
          ))}
        </div>
      </Container>
    </Disclosure>
  );
}

export default ContactMe;
