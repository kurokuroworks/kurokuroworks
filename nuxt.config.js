const request = require('superagent')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'くろくろわーくす',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '"くろくろわーくす"は、かわいいものを作るために、もくもく活動している技術系サークルです。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#bd7fff',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'superagent',
      'marked'
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    staticBaseUrl: 'https://static.kurokuroworks.net'
  },
  generate: {
    dir: 'docs',
    routes: () => {
      return Promise.all([
        request.get('https://static.kurokuroworks.net/www/articles.json'),
        request.get('https://static.kurokuroworks.net/www/books.json')
      ]).then(results => {
        const urls = results.map((res, index) => {
          return res.body.map(item => {
            if (index === 0) {
              return `/articles/${item.id}`
            }
            if (index === 1) {
              return `/books/${item.id}`
            }
          })
        })
        return [].concat(urls[0],urls[1])
      })
    }
  }
}
