module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Socialização de Computação",
      description: "Evento de Socialização organizado pelos alunos e professores do curso Licenciatura em Computação da Universidade Estadual do Piauí, atraves do Plano Nacional de Formação de Professores",
      date: "31 de Outubro",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "UESPI",
      address: "UESPI, R. Jose Parente, 64900-000",
      city: "Bom Jesus",
      state: "Piauí"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    // callToAction: {
    //     text: "Register now!",
    //     link: "http://eventick.com.br"
    // },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      // 'speakers',
      'schedule',
      // 'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
        about: "Sobre",
        location: "Localização",
        schedule: "Agenda",
        speakers: "Palestrantes",
        partners: "Organização",
        contact: "Contato"
    },

      about: {

      },

    // The entire schedule
      schedule: [
          {
              name: "Abertura",
              time: "08:00"
          },
          {
              name: "Adilson",

              presentation: {
                  title: "Palestra",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                  time: "08:15"
              }
          },
          {
              name: "Ocileide",

              presentation: {
                  title: "Mesa Redonda 1",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                  time: "08:45"
              }
          },
          {
              name: "Sorania",

              presentation: {
                  title: "Intervalo / Apresentação de Banners e Cartazes",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                  time: "09:15"
              }
          },
          {
              name: "Flavio",

              presentation: {
                  title: "Relato de Experiencia",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                  time: "09:45"
              }
          },
          {
              name: "Julio",

              presentation: {
                  title: "Mesa Redonda 2",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                  time: "10:15"
              }
          },
          {
              name: "Fechamento",
              time: "10:45"
          }
      ],

    // List of Sponsors
    // sponsors: [
    //   {
    //     name: "Eventick",
    //     logo: "themes/yellow-swan/img/sponsor.png",
    //     url: "http://eventick.com.br"
    //   }
    // ],

    // List of Partners
    partners: [
        {
            name: "UESPI",
            logo: "themes/yellow-swan/img/logo-uespi.png",
            url: "http://uespi.br/"
        }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};