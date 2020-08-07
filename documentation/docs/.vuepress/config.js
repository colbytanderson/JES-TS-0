module.exports = {
  title: 'jesEcom Documentation',
  description: 'Official Documentation for the jesEcom Open-Source E-commerce Solution',
  themeConfig: {
    logo: '/img/jesEcom_logo_transparent_blue_black.png',
    smoothScroll: true,
    nav: [
      { text: 'Website', link: 'https://jesEcom.com' },
      { text: 'Github', link: 'https://github.com/Viveckh/jesEcom' }
    ],
    sidebar: [
      ['/', 'Home'],
      {
        title: 'Servers Setup',
        path: '/servers/setup',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          
        ]
      },
      ['/servers/environment-file-format', 'Server Environment File Format'],
      {
        title: 'Webclients',   // required
        path: '/webclients/architecture',   // optional, which should be a absolute path.
        sidebarDepth: 2,
        collapsable: false,
        children: [
          
        ]
      },
      {
        title: 'Local Docker Setup',
        path: '/dockersetup/dockersetup.md',
        sidebarDepth: 2,
        collapsable: false,
        children: []
      }
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-157968226-2'
      }
    ]
  ]
    
}