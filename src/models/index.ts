import mongoose from 'mongoose';
import plugins from './plugins';

const ratingSchema = new mongoose.Schema(
	{
		userID: {
			type: String,
			required: true,
			trim: true,
		},
		placeID: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		rating: {
			type: String,
			required: true,
			trim: true,
		},
		food_rating: {
			type: String,
			required: true,
			trim: true,
		},
		service_rating: {
			type: String,
			required: true,
			trim: true,
		},
		price_rating: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
);

ratingSchema.plugin(plugins.paginate);
ratingSchema.plugin(plugins.toJSON);

/**
 * @typedef Ratings
 */
const Ratings = mongoose.model('Ratings', ratingSchema);

export default Ratings;
