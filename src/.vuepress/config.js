module.exports = {
  dest: 'docs',
  base: '/nuestra-documentacion/',
  title: 'Aprendiendo con Guillermo 🤓',
  description: "Documentacion de mis cursos",

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        icon: 'home',
        link: '/',
      },
      {
        text: 'facebook',
        link: 'https://www.facebook.com/AprendiendoconGuillermo',
      },
      {
        text: 'Mi canal 📺',
        link: 'https://www.youtube.com/AprendiendoconGuillermo?sub_confirmation=1'
      },
      {
        text: '📢 Mis cursos',
        items:[
          {
            text: 'Java para principantes 🤓',
            link: 'https://www.youtube.com/watch?v=bNKCKVVx3So&list=PLRoF0hqfyCW-lfoIQ3PD8NbRZyBfzKBXZ'
          },
          {
            text: 'Subnetting 🔌',
            link: 'https://www.youtube.com/watch?v=EsEVrjVxjX4&list=PLRoF0hqfyCW-Pyg01UJ3woDojSRWgKiRK'
          },
          {
            text: 'Planificación de la CPU 💻',
            link: 'https://www.youtube.com/watch?v=hooMs4Qnn84&list=PLRoF0hqfyCW9-VzxOWKO36qW5SQBE8dnJ'
          }
        ]        
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
          "/java-principiantes/modulo-06",
          "/java-principiantes/modulo-07",
          "/java-principiantes/modulo-08",
          "/java-principiantes/modulo-09",
          "/java-principiantes/modulo-10",
          "/java-principiantes/modulo-11",
          "/java-principiantes/modulo-12",
          "/java-principiantes/modulo-13",
          "/java-principiantes/modulo-14",
          "/java-principiantes/modulo-15",      
          "/java-principiantes/modulo-16"      
        ]
      },
      {
        title: "Java-Progrmación Orientada a Objetos (POO)",
        collapsable: true,        
        children:[
          "/java-poo/modulo-01",
        ]
      },
      {
        title: "Api Rest",
        collapsable: true,
        children:[
          "/api-rest-nodejs-express-mongodb/",
          "/api-rest-nodejs-express-mongodb/spring-boot-mysql.md"          
        ]
      },
      {
        title: "Consumir Api en VuePress",
        collapsable: true,
        children:[
          "/consumir-api/"
        ] 
      },
      {
        title: "Pruebas",
        collapsable: true,
        children: [
          "/pruebas/",
          "/pruebas/eat-api",
          "/pruebas/test-api-nodejs"          
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