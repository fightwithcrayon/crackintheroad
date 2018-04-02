const axios = require('axios')
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/'
  }
} : {}

module.exports = {
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Crack in the Road',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'First to break the latest in genuinely groundbreaking new music, art and culture since 2010. Jacob Rees Mogg is our pay pig..' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  css: [
    '@/assets/shared.scss'
  ],
  transition: {
    name: 'page',
    mode: 'out-in',
    css: false
  },
  modules: [
    '@nuxtjs/axios'
  ],
  middleware: [
    'transition.js'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      return axios.get('http://api.crackintheroad.com/wp-json/custom/routes/').then((res) => {
        return res.data.posts.map((post, i) => {
          return {
            route: res.data.permalinks[i],
            payload: post
          }
        })
        return res.data.map(url => url.replace('http://api.crackintheroad.com', ''))
      })
    }
  }
}
