import * as mongoose from 'mongoose';
import config from '../../config';
import { setDefaultSettings, setErrorHandler } from '../../utils/mongoose';
import { IIncomingFile } from './interface';

const IncomingFileSchema = new mongoose.Schema<IIncomingFile & mongoose.Document>(
    {
        name: {
            type: String,
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        to: {
            type: [String],
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: false,
        },
        versionKey: false,
    },
);

setDefaultSettings(IncomingFileSchema);
setErrorHandler(IncomingFileSchema);

const IncomingFileModel = mongoose.model<IIncomingFile & mongoose.Document>(
    config.mongo.incomingFilesCollectionName,
    IncomingFileSchema,
);

export default IncomingFileModel;
