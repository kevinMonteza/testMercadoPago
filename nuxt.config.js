require("dotenv").config();

const pkg = require("./package");

module.exports = {
  mode: "spa",
  // render: {
  //   csp: {
  //     hashAlgorithm: 'sha256',
  //     policies: {
  //       'script-src': [
  //         'https://www.google-analytics.com',
  //         'https://www.mercadopago.com.ar'
  //       ],
  //       'report-uri': ['https://report.example.com/report-csp-violations']
  //     },
  //     addMeta: true
  //   }
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/assets/scss/app.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/uikit", ssr: false },
    { src: "~/plugins/vee-validate", ssr: false },
  ],
  mercadopago: {
    public_key: process.env.MP_PUBLIC_KEY,
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "~/modules/mercadopago",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
      if (!ctx.isServer) {
        config.node = {
          fs: "empty",
          net: "empty",
        };
      }
    },
  },
};
