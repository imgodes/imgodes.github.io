// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Security Stuff',
  tagline: '',
  favicon: 'img/favicon.png',
  url: 'https://imgodes.github.io',
  baseUrl: '/',
  organizationName: 'imgodes',
  projectName: 'imgodes.github.io', 
  trailingSlash: false,
  onBrokenLinks: 'warn',
  noIndex: false,
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'deployment',
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ docPath }) =>
            `https://github.com/imgodes/imgodes.github.io/blob/main/website/docs/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({blogPath}) =>
            `https://github.com/imgodes/imgodes.github.io/blob/main/website/blog/${blogPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Godes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/kanagawa.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'bookSidebar',
            position: 'left',
            label: 'Hunt',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/imgodes',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/gguedescruz/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conteúdo',
            items: [
              {
                label: 'Hunt',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog'
              },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/channels/gabreell',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/imgodes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Security Stuff.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
