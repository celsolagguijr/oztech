import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export type Contact = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const contacts: Contact[] = [
  {
    name: 'Github',
    href: 'https://github.com/celsolagguijr',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/celsolagguijr',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
];

export default contacts;
