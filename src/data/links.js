export const siteLinks = {
  github: {
    label: 'Pipe-Garcia',
    href: 'https://github.com/Pipe-Garcia/Pipe-Garcia',
  },
  linkedin: {
    label: 'felipe-garcia-dev',
    href: 'https://www.linkedin.com/in/felipe-garcia-dev/',
  },
  email: {
    label: 'Email',
    href: 'mailto:pipeg1069@gmail.com',
    value: 'pipeg1069@gmail.com',
  },
};

export function getCvLinkByLanguage(language) {
  if (language === 'es') {
    return '/cv/CV_Felipe_Garcia_ES.pdf';
  }

  return '/cv/CV_Felipe_Garcia_EN.pdf';
}