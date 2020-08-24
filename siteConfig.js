const siteConfig = {
  url: 'https://welvin21.com',
  title: 'welvin21.com',
  description: "Welvin's official website.",
  lastUpdated: '24 August 2020',
  menu: [
    {
      text: 'About',
      route: '/',
    },
    {
      text: 'Projects',
      route: '/projects',
    },
    {
      text: 'Blog',
      route: '/blog',
    },
  ],
  author: {
    name: 'Welvin Bun',
    picturePath: '/welvin.png',
    contacts: {
      email: { name: 'welvin07@gmail.com', link: 'mailto:welvin07@gmail.com' },
      twitter: { name: 'welvin21', link: 'https://twitter.com/welvin21' },
      github: { name: 'welvin21', link: 'https://github.com/welvin21' },
      linkedin: {
        name: 'Welvin Bun',
        link: 'https://www.linkedin.com/in/welvin-bun/',
      },
    },
    hackathons: [
      {
        name: 'FinHack 2019',
        organiser: 'Societe Generale & WHUB',
        achievement: 'Champion',
        link: 'https://finhack.io/',
      },
      {
        name: 'FinTech week Hackathon 2019',
        organiser: 'DBS Bank, HKECIC, & WHUB',
        achievement: 'Runner-up',
        link:
          'https://medium.com/whub/highlight-from-the-fintech-week-hackathon-2019-75007b1f9992#:~:text=The%20FinTech%20Week%20Hackathon%202019%20by%20WHub%2C%20DBS%20and%20HKECIC,place%20between%201st%20%E2%80%94%203rd%20November.&text=On%20the%20evening%20of%201st,Kong%20at%20the%20Kerry%20Hotel.',
      },
      {
        name: 'Hack The North 2019',
        organiser: 'University of Waterloo',
        achievement: '',
        link: 'https://hackthenorth.com/',
      },
    ],
  },
};

module.exports = siteConfig;
