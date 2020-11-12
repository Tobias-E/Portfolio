module.exports = {
	siteMetadata: {
		title: `Tobias Eskou Portfolio`,
		description: `Portfolio to show off my skills and work!`,
		author: `Tobias Eskou`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Tobias Eskou Portfolio`,
				short_name: `portfolio`,
				start_url: `/`,
				background_color: `#0574FF`,
				theme_color: `#0574FF`,
				display: `minimal-ui`,
				icon: `src/images/Logo.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
};
