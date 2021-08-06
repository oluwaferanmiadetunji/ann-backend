import httpStatus from 'http-status';
import Ratings from '../models';
import ApiError from '../utils/ApiError';

const createRating = async (body) => {
	const user = await Ratings.create(body);
	return user;
};

const queryRatings = async (filter, options) => {
	const users = await Ratings.paginate(filter, options);
	return users;
};

const getRatingById = async (id) => {
	return Ratings.findById(id);
};

const updateRatingById = async (id, updateBody) => {
	const rating = await getRatingById(id);
	if (!rating) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Rating not found');
	}

	Object.assign(rating, updateBody);
	await rating.save();
	return rating;
};

const deleteRatingById = async (id) => {
	const rating = await getRatingById(id);
	if (!rating) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Rating not found');
	}
	await rating.remove();
	return rating;
};

export default {
	createRating,
	queryRatings,
	getRatingById,
	updateRatingById,
	deleteRatingById,
};
