import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

export default {
	PORT: parseInt(process.env.PORT, 10),
	mongoose: {
		url: process.env.MONGODB_URI,
		options: {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	},
};
