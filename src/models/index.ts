import mongoose from 'mongoose';
import plugins from './plugins';

const ratingSchema = new mongoose.Schema<any>(
	{
		userID: {
			type: String,
			required: true,
			trim: true,
		},
		placeID: {
			type: Number,
			required: true,
			trim: true,
		},
		rating: {
			type: Number,
			required: true,
			trim: true,
		},
		food_rating: {
			type: Number,
			required: true,
			trim: true,
		},
		service_rating: {
			type: Number,
			required: true,
			trim: true,
		},
		price_rating: {
			type: Number,
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
const Ratings: any = mongoose.model<any & mongoose.Document>('Ratings', ratingSchema);

export default Ratings;
