require('dotenv').config()

const client = require('./plugins/contentful').default

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/contentful'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/dotenv'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP', 'Play']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  //動的なルーティングでもSSR実行
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([entries]) => {
        return [
          ...entries.items.map(item => {
            return { route: `posts/${item.fields.slug}`, payload: item }
          }),
          ...entries.items.filter(item => {
            return item.fields.category.fields.slug === 'works'
          }).map(item => {
            return { route: `works/${item.fields.slug}`, payload: item }
          }),
          ...entries.items.filter(item => {
            return item.fields.category.fields.slug === 'blogs'
          }).map(item => {
            return { route: `blogs/${item.fields.slug}`, payload: item }
          }),
        ]
      })
    }
  },
  router: {
    middleware: [
      'getContentful'
    ]
  },
}
