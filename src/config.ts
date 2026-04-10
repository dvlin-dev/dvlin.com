import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://dvlin.com/',
  base: '/',
  title: 'dvlin',
  description: `dvlin's blog`,
  author: 'dvlin',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',
  imageDomains: ['cdn.bsky.app', 'images.unsplash.com'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'alwaysText',
      text: 'Blog',
    },
    {
      path: '/thoughts',
      title: 'Thoughts',
      displayMode: 'alwaysText',
      text: 'Thoughts',
    },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'alwaysText',
      text: 'Projects',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/dvlin-dev',
      title: `${SITE.author} on GitHub`,
      displayMode: 'alwaysText',
      text: 'GitHub',
    },
    {
      link: 'https://x.com/dvlin_dev',
      title: `${SITE.author} on Twitter`,
      displayMode: 'alwaysText',
      text: 'Twitter',
    },
    {
      link: 'https://space.bilibili.com/519295997?spm_id_from=333.1007.0.0',
      title: `${SITE.author} on bilibili`,
      displayMode: 'alwaysText',
      text: 'Bilibili',
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
      [/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: true,
    cursorType: '',
    showNewTabIcon: false,
  },
  postMetaStyle: 'minimal',
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
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
  share: [
    true,
    {
      twitter: [true, '@dvlin_dev'],
      bluesky: false,
      mastodon: [false, '@ste7lin@fairy.id'],
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: false,
  search: [
    true,
    {
      includes: ['blog', 'changelog'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
}
