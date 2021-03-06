const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]",
	}
});


//module.exports = withImages();