module.exports = {
    siteMetadata: {
      title: "Lindfors Foundry",
      description:
        "Website for Lindfors Foundry"
    },
    plugins: [
    // Use gatsby-transformer-remark to modify the generated markdown
    // Not mandatary, but recommanded to be compliant with gatsby remark ecosystem
    {
        resolve: "gatsby-transformer-remark",
        options: {
            plugins: [],
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,

    ]
    // for avoiding CORS while developing Netlify Functions locally
    // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  };
  