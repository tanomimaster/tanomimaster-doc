
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','13f'),
    exact: true
  },
  {
    path: '/blog/2016/03/11/blog-post',
    component: ComponentCreator('/blog/2016/03/11/blog-post','8fd'),
    exact: true
  },
  {
    path: '/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/blog/2017/04/10/blog-post-two','c30'),
    exact: true
  },
  {
    path: '/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/blog/2017/09/25/testing-rss','143'),
    exact: true
  },
  {
    path: '/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/blog/2017/09/26/adding-rss','8b9'),
    exact: true
  },
  {
    path: '/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0','833'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','38f'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','a8c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/api',
        component: ComponentCreator('/docs/api','33a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/csv',
        component: ComponentCreator('/docs/csv','8ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/develop',
        component: ComponentCreator('/docs/develop','02b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/maker',
        component: ComponentCreator('/docs/maker','2d5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/releases',
        component: ComponentCreator('/docs/releases','ffb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/retail',
        component: ComponentCreator('/docs/retail','4fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
