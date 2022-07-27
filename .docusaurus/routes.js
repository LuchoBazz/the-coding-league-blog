import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/the-coding-league-blog/__docusaurus/debug',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug', '328'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/__docusaurus/debug/config',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug/config', '9cf'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/__docusaurus/debug/content',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug/content', 'a74'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/__docusaurus/debug/globalData',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug/globalData', '6f3'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/__docusaurus/debug/metadata',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug/metadata', 'f43'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/__docusaurus/debug/registry',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug/registry', '237'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/__docusaurus/debug/routes',
    component: ComponentCreator('/the-coding-league-blog/__docusaurus/debug/routes', 'a79'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog',
    component: ComponentCreator('/the-coding-league-blog/blog', '052'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/archive',
    component: ComponentCreator('/the-coding-league-blog/blog/archive', '6ad'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/first-blog-post',
    component: ComponentCreator('/the-coding-league-blog/blog/first-blog-post', 'e9d'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/long-blog-post',
    component: ComponentCreator('/the-coding-league-blog/blog/long-blog-post', '510'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/mdx-blog-post',
    component: ComponentCreator('/the-coding-league-blog/blog/mdx-blog-post', '46f'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/tags',
    component: ComponentCreator('/the-coding-league-blog/blog/tags', '6f4'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/tags/docusaurus',
    component: ComponentCreator('/the-coding-league-blog/blog/tags/docusaurus', '1bc'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/tags/facebook',
    component: ComponentCreator('/the-coding-league-blog/blog/tags/facebook', 'bf6'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/tags/hello',
    component: ComponentCreator('/the-coding-league-blog/blog/tags/hello', '19d'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/tags/hola',
    component: ComponentCreator('/the-coding-league-blog/blog/tags/hola', '350'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/blog/welcome',
    component: ComponentCreator('/the-coding-league-blog/blog/welcome', 'e50'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/markdown-page',
    component: ComponentCreator('/the-coding-league-blog/markdown-page', '735'),
    exact: true
  },
  {
    path: '/the-coding-league-blog/docs',
    component: ComponentCreator('/the-coding-league-blog/docs', '577'),
    routes: [
      {
        path: '/the-coding-league-blog/docs/category/number-theory-basics',
        component: ComponentCreator('/the-coding-league-blog/docs/category/number-theory-basics', '2da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/the-coding-league-blog/docs/intro',
        component: ComponentCreator('/the-coding-league-blog/docs/intro', '1e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/the-coding-league-blog/docs/number-theory-basics/euclidean-algorithm',
        component: ComponentCreator('/the-coding-league-blog/docs/number-theory-basics/euclidean-algorithm', '0d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/the-coding-league-blog/docs/number-theory-basics/modular-arithmetic',
        component: ComponentCreator('/the-coding-league-blog/docs/number-theory-basics/modular-arithmetic', '70e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/the-coding-league-blog/',
    component: ComponentCreator('/the-coding-league-blog/', '4d3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
