// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitcoin Nova Docs',
  tagline: 'Documentation for all things Bitcoin Nova',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.bitcoinnova.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BitcoinNova', // Usually your GitHub org/user name.
  projectName: 'bitcoinnova-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BitcoinNova/bitcoinnova-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BitcoinNova/bitcoinnova-docs/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bitcoin Nova Docs',
        logo: {
          alt: 'Bitcoin Nova Docs',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/Getting-Started', label: 'Getting Started', position: 'right', activeBaseRegex: `/Getting-Started/`, docsPluginId: 'Getting-Started'},
          {to: '/About/About-Bitcoin-Nova', label: 'About', position: 'right'},
          {to: '/frequently-asked-questions', label: 'FAQ', position: 'right'},
          {to: '/Guides/mining/Mining', label: 'Guides', position: 'right'},
          {to: '/developer/Resources', label: 'For Developers', position: 'right'},         
          {to: '/blog', label: 'Blog', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/Getting-Started',
              },
              {
                label: 'Guides',
                to: 'https://medium.com/@bitcoinnova',
              },
              {
                label: 'Developer Resources',
                to: 'https://github.com/BitcoinNova',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/CXeKVqQ',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/bitcoinnova',
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/bitcoinnova',
              },
              {
                label: 'Youtube',
                to: 'https://www.youtube.com/channel/UC7WeTDmqOLAlZAQdwSxtNSQ',
              },
              {
                label: 'Odysee',
                to: 'https://odysee.com/@BitcoinNova:1',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Medium',
                to: 'https://medium.com/@bitcoinnova',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/BitcoinNova',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitcoin Nova Developers`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
