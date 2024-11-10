import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export type Contact = {
  name: string;
  title: string;
  href: string;
  icon: JSX.Element;
};

const contacts: Contact[] = [
  {
    name: 'Github',
    title: 'celsolagguijr',
    href: 'https://github.com/celsolagguijr',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: 'LinkedIn',
    title: 'celsolagguijr',
    href: 'https://linkedin.com/in/celsolagguijr',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
];

export const contactsWithEmail: Contact[] = [
  {
    name: 'Gmail',
    title: 'celsolaggui@gmailcom',
    href: 'mailto:celsolaggui@gmailcom',
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
  },
  ...contacts,
];

export default contacts;
