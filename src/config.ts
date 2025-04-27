import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://dvlin.com/',
  base: '/',
  title: 'dvlin',
  description: `dvlin's blog`,
  author: 'dvlin',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',
  imageDomains: [],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'alwaysText',
      text: 'Blog',
      // icon: 'i-ri-article-line',
    },
    // {
    //   path: '/projects',
    //   title: 'Projects',
    //   displayMode: 'alwaysText',
    //   text: 'Projects',
    //   // icon: 'i-ri-lightbulb-line',
    // },
    // {
    //   path: '/changelog',
    //   title: 'Changelog',
    //   displayMode: 'iconToTextOnMobile',
    //   text: 'Changelog',
    //   icon: 'i-ri-draft-line',
    // },
  ],
  socialLinks: [
    {
      link: 'https://space.bilibili.com/519295997?spm_id_from=333.1007.0.0',
      title: `${SITE.author} on bilibili`,
      displayMode: 'alwaysText',
      text: 'bilibili',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      'withastro/astro',
      'withastro/starlight',
      'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://www.svgrepo.com/show/475654/github-color.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    true,
    {
      twitter: [true, '@dvlin_dev'],
      mastodon: [false, '@ste7lin@fairy.id'],
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
      bluesky: false,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'always',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  slideEnterAnim: [true, { enterStep: 60 }],
}
