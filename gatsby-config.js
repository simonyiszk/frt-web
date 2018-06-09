module.exports = {
  siteMetadata: {
    title: 'BME Formula Racing Team',
    language: 'hu',
    siteFacebookURL: 'https://www.facebook.com/FormulaRacingTeam/',
    siteInstagramURL: 'https://www.instagram.com/bme_formularacingteam/',
    siteYouTubeURL: 'https://www.youtube.com/user/bmeFRT/',
    siteEmailURL: 'mailto:info.bme.frt@gmail.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-images'],
      },
    },
    'gatsby-transformer-yaml',
  ],
};
