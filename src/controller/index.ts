import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import Service from '../services';

const createRating = catchAsync(async (req, res) => {
	const rating = await Service.createRating(req.body);
	res.status(httpStatus.CREATED).send(rating);
});

const queryRatings = catchAsync(async (req, res) => {
	const filter = pick(req.query, ['name', 'role']);
	const options = pick(req.query, ['sortBy', 'limit', 'page']);
	const result = await Service.queryRatings(filter, options);
	res.send(result);
});

const getRatingById = catchAsync(async (req, res) => {
	const user = await Service.getRatingById(req.params.id);
	if (!user) {
		throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
	}
	res.send(user);
});

const updateRatings = catchAsync(async (req, res) => {
	const user = await Service.updateRatingById(req.params.id, req.body);
	res.send(user);
});

const deleteRating = catchAsync(async (req, res) => {
	await Service.deleteRatingById(req.params.id);
	res.status(httpStatus.NO_CONTENT).send();
});

export default {
	createRating,
	queryRatings,
	getRatingById,
	updateRatings,
	deleteRating,
};
