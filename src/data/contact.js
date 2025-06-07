import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/kevincolour',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/kevincolour',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/kevincolour/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/kevincolour',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:kevincolour@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
