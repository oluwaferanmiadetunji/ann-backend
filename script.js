const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('data.csv')
	.pipe(csv())
	.on('data', (data) => {
		let result = {};
		result.userID = data.userID;
		result.placeID = parseInt(data.placeID, 10);
		result.rating = parseInt(data.rating, 10);
		result.food_rating = parseInt(data.food_rating, 10);
		result.service_rating = parseInt(data.service_rating, 10);
		result.price_rating = parseInt(data.price_rating, 10);
		results.push(result);
	})
	.on('end', () => {
		const writeStream = fs.createWriteStream('data.json');
		writeStream.write(JSON.stringify(results));
	});
