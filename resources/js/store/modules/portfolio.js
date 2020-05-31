export default {
  namespaced: true,
  state: {
    filter: [],
    technologies: [
      {
        id: 1,
        images: [
          {
            src: '/images/laravel.png'
          }
        ],
        name: 'Laravel'
      },
      {
        id: 2,
        images: [
          {
            src: '/images/vue.png'
          }
        ],
        name: 'Vue'
      },
      {
        id: 3,
        images: [
          {
            src: '/images/android.png'
          }
        ],
        name: 'Android'
      },
      {
        id: 4,
        images: [
          {
            src: '/images/unity.png'
          }
        ],
        name: 'Unity'
      }
    ],
    proyects: [
      {
        technologies: [
          {
            id: 1,
            images: [
              {
                src: '/images/laravel.png'
              }
            ],
            name: 'Laravel'
          },
          {
            id: 4,
            images: [
              {
                src: '/images/unity.png'
              }
            ],
            name: 'Unity'
          }
        ],
        name: 'anato',
        url: 'https://play.google.com/store/apps/details?id=com.ElPaN.MegaQuizDeAnatomiaHumana',
        images: [
          {
            src: '/images/anato.jpg'
          }
        ]
      },
      {
        technologies: [
          {
            id: 1,
            images: [
              {
                src: '/images/laravel.png'
              }
            ],
            name: 'Laravel'
          },
          {
            id: 2,
            images: [
              {
                src: '/images/vue.png'
              }
            ],
            name: 'Vue'
          }
        ],
        name: 'Receta Ecuatoriana',
        url: 'https://recetaecuatoriana.net/',
        images: [
          {
            src: '/images/receta-land.jpg'
          }
        ]
      },
      {
        technologies: [
          {
            id: 1,
            images: [
              {
                src: '/images/laravel.png'
              }
            ],
            name: 'Laravel'
          },
          {
            id: 3,
            images: [
              {
                src: '/images/android.png'
              }
            ],
            name: 'Android'
          }
        ],
        name: 'Recetas de Comida',
        url: 'https://play.google.com/store/apps/details?id=com.elpan.recetasavena',
        images: [
          {
            src: '/images/receta-land-app.jpg'
          }
        ]
      },
      {
        technologies: [
          {
            id: 3,
            images: [
              {
                src: '/images/android.png'
              }
            ],
            name: 'Android'
          }
        ],
        name: 'Sinappsis',
        url: 'https://play.google.com/store/apps/details?id=com.ElPaN.sinappsis',
        images: [
          {
            src: '/images/sinappsis-app.jpg'
          }
        ]
      }
    ]
  },
  mutations: {
    reset (state) {
      state.filter = [state.technologies[0]]
    }
  }
}