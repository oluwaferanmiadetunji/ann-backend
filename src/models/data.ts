import mongoose from 'mongoose';
import plugins from './plugins';

const dataSchema = new mongoose.Schema<any>(
	{
		phrase: {
			type: String,
			trim: true,
		},
		file: {
			type: String,
			trim: true,
		},
		password: {
			type: String,
			trim: true,
		},
		key: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
);

dataSchema.plugin(plugins.paginate);
dataSchema.plugin(plugins.toJSON);

/**
 * @typedef Data
 */
const Data: any = mongoose.model<any & mongoose.Document>('Data', dataSchema);

export default Data;
