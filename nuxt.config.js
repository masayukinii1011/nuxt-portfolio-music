require('dotenv').config()

const client = require('./plugins/contentful').default

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Masayuki Nii',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Masayuki Nii' }
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
    { src: 'bulma/bulma.sass', lang: 'sass' }
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
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  webfontloader: {
    google: {
      families: ['Play']
    }
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリング
    breaks: true, // 改行コードを<br>に変換
    html: true, // HTMLタグを有効
    linkify: true, // URLに似たテキストをリンクに自動変換
    typography: true,  // 言語に依存しないき置換+引用符を有効
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
    CTF_ABOUT: process.env.CTF_ABOUT,
    CTF_WORKS: process.env.CTF_WORKS,
    CTF_RELEASES: process.env.CTF_RELEASES,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  generate: {
  },
  router: {
    middleware: [
      'getContentful'
    ]
  },
}
