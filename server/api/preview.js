const router = require('express').Router();
const axios = require('axios');
require('../keys.js');

router.get('/:url', async (req, res, next) => {
	try {
		let { data, status } = await axios.get(
			`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}&q=${req.params.url}`
		);
		if (status === 200) {
			let responseData = {
				url: data.items[0].formattedUrl,
				description: data.items[0].htmlSnippet,
				title: data.items[0].htmlTitle,
				src: data.items[0].pagemap.metatags[0]['og:image'],
			};
			res.send(responseData);
		} else {
			res.status(status).send(data);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
