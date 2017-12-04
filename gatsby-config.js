const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Technovangelist`,
    description: `The playground of Matt Williams, the Technovangelist.`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-feed`, 
      options: {}
    }, 
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "posts", path: path.resolve("./posts") }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography.js` }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: { plugins: [
        {
          resolve: `gatsby-remark-images`, 
          options: {
            maxWidth: 590, 
            linkImagesToOriginal: false, 
            sizeByPixelDensity: true
          },  
        }, 
      ] }
    }
  ] // Name this source // Tell it where to find the files
};
