import * as mongoose from 'mongoose';
import config from '../../config';
import { setDefaultSettings, setErrorHandler } from '../../utils/mongoose';
import { IIncomingFile } from './interface';

const IncomingFileSchema = new mongoose.Schema<IIncomingFile & mongoose.Document>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        from: {
            type: 'ObjectId',
            required: true,
        },
        to: {
            type: 'ObjectId',
            required: true,
        },
        ceratedAt: { type: Date, required: true },
        destination: { type: String, required: true },
        source: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

IncomingFileSchema.index({ data: 1 });

setDefaultSettings(IncomingFileSchema);
setErrorHandler(IncomingFileSchema);

const IncomingFileModel = mongoose.model<IIncomingFile & mongoose.Document>(
    config.mongo.incomingFilesCollectionName,
    IncomingFileSchema,
);

export default IncomingFileModel;
