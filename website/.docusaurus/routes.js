
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','288'),
    exact: true
  },
  {
    path: '/blog/2019/11/20/csv',
    component: ComponentCreator('/blog/2019/11/20/csv','c0b'),
    exact: true
  },
  {
    path: '/blog/2019/11/21/color',
    component: ComponentCreator('/blog/2019/11/21/color','9d4'),
    exact: true
  },
  {
    path: '/blog/2019/11/22/csv',
    component: ComponentCreator('/blog/2019/11/22/csv','a69'),
    exact: true
  },
  {
    path: '/blog/2019/12/09/csv',
    component: ComponentCreator('/blog/2019/12/09/csv','6e8'),
    exact: true
  },
  {
    path: '/blog/2020/02/28/csv',
    component: ComponentCreator('/blog/2020/02/28/csv','7b3'),
    exact: true
  },
  {
    path: '/blog/2020/03/10/csv',
    component: ComponentCreator('/blog/2020/03/10/csv','b38'),
    exact: true
  },
  {
    path: '/blog/2021/01/06/csv',
    component: ComponentCreator('/blog/2021/01/06/csv','705'),
    exact: true
  },
  {
    path: '/blog/2021/02/25/csv',
    component: ComponentCreator('/blog/2021/02/25/csv','2eb'),
    exact: true
  },
  {
    path: '/blog/2021/03/17/category',
    component: ComponentCreator('/blog/2021/03/17/category','496'),
    exact: true
  },
  {
    path: '/blog/2021/08/24/csv',
    component: ComponentCreator('/blog/2021/08/24/csv','67d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','aeb'),
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
