export default {
  namespaced: true,
  state: {
    filter: [],
    types: [
      {
        id: 1,
        images: [
          {
            src: '/images/laravel.png'
          }
        ],
        name: 'Móvil'
      },
      {
        id: 2,
        images: [
          {
            src: '/images/vue.png'
          }
        ],
        name: 'Web'
      }
    ],
    proyects: [
      {
        type: 1,
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
        type: 2,
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
        type: 1,
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
        type: 1,
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
      state.filter = [state.types[0]]
    }
  }
}