module.exports = {
  siteMetadata: {
    title: "Tiedup.pk",
    description: "Be updated, Be knowned",
    author: "@hadihaider",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ha7oafx92z4o`,
        accessToken: `WEB-y1GSmUwpIgWMAWEw6bNwaw-ko-8y8pcqysJZeYw`,
      },
    },
  ],
};
