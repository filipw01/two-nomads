module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-styled-components',
  ],
};
