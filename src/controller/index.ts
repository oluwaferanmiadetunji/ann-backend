import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import Service from '../services';

const createRating = catchAsync(async (req, res) => {
	const data = req.body;
	for (let i = 0; i < data.length; i++) {
		console.log(`${i + 1}/${data.length}: Successfully add ${data[i]}`);
		await Service.createRating(data[i]);
	}

	res.status(httpStatus.CREATED).json({ message: 'Rating added successfully' });
});

const queryRatings = catchAsync(async (req, res) => {
	const filter = pick(req.query, ['rating', 'placeID', 'userID', 'food_rating', 'service_rating', 'price_rating']);
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

const addData = catchAsync(async (req, res) => {
	const data = await Service.addData(req.body);
	res.status(httpStatus.CREATED).json(data);
});

const getData = catchAsync(async (req, res) => {
	const data = await Service.getData();
	res.status(httpStatus.OK).json(data);
});

export default {
	createRating,
	queryRatings,
	getRatingById,
	updateRatings,
	deleteRating,
	addData,
	getData,
};
