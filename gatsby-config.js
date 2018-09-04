module.exports = {
  siteMetadata: {
    title: 'BME Formula Racing Team',
    language: 'hu',
    siteEmail: 'info.bme.frt@gmail.com',
    siteAddressURL: 'https://goo.gl/maps/Mnsz88S1QWC2',
    siteAddressPretty: '1205, Budapest Hosszú utca 156.',
    siteFacebookURL: 'https://www.facebook.com/FormulaRacingTeam/',
    siteInstagramURL: 'https://www.instagram.com/bme_formularacingteam/',
    siteYouTubeURL: 'https://www.youtube.com/user/bmeFRT/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.jsx'),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-images'],
      },
    },
    'gatsby-transformer-yaml',
  ],
};
