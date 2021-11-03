module.exports = {
  dest: 'docs',
  base: '/nuestra-documentacion/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Aprendiendo con Guillermo 🤓',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Documentacion de mis cursos",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,   
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Mi canal 📺',
        link: 'https://www.youtube.com/AprendiendoconGuillermo?sub_confirmation=1'
      }
    ],
    sidebar: [
      {
        title: "Hola 🤓",
        collapsable: true,
        children:[
          "/"
        ] 
      },
      {
        title: "Java para principiantes desde cero en NetBeans",
        collapsable: true,        
        children:[
          "/java-principiantes/",
          "/java-principiantes/modulo-01",
          "/java-principiantes/modulo-02",
          "/java-principiantes/modulo-03",
          "/java-principiantes/modulo-04",
          "/java-principiantes/modulo-05",
          "/java-principiantes/modulo-06"        
        ]
      }      
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}