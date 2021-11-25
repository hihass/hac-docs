// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HAC社区文档',
  tagline: 'Home Assistant本地化相关的文档库。',
  url: 'https://docs.hihass.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HAC',
  projectName: 'hac-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hihass/hac-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hihass/hac-docs/tree/master/',
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
      navbar: {
        title: 'HAC社区文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/hac_logo_re.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://hihass.com',
            label: '社区',
            position: 'left',
          },
          {
            href: 'https://topic.hihass.com',
            label: '论坛',
            position: 'left',
          },
          {
            href: 'https://github.com/hihass/hac-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '本地化内容',
                to: '/docs/intro',
              },
              {
                label: 'HA文档',
                to: '/docs/tutorial-ha/about-homeassistant',
              },
              {
                label: '杂项',
                to: '/docs/tutorial-others/frp-tutorial',
              },
            ],
          },
          {
            title: 'HAC社区',
            items: [
              {
                label: 'HAC社区网站',
                href: 'https://hihass.com',
              },
              {
                label: 'HAC社区论坛',
                href: 'https://topic.hihass.com',
              },
              {
                label: 'HAC社区文档',
                to: '/',
              },
              {
                label: 'HAC社区插件库',
                href: 'https://github.com/hihass/hac-addons',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'Telegram频道',
                href: 'https://t.me/hihac',
              },
              {
                label: 'Telegram交流群',
                href: 'https://t.me/hihass',
              },
              {
                label: 'QQ交流群:45218782',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?k=KsP5QPFeIwc4DS18UL5MCv1Mn63b1sC6&jump_from=webapi',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HomeIntelligentCube/HAC-Addons/tree/main/frp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HAC社区. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
