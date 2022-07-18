import * as mongoose from 'mongoose';
import config from '../../config';
import { setDefaultSettings, setErrorHandler } from '../../utils/mongoose';
import { IOutgoingFile } from './interface';

const outgoingFileSchema = new mongoose.Schema<IOutgoingFile & mongoose.Document>(
    {
        approvers: {
            type: [String],
            required: true,
        },
        fileName: {
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
        classification: {
            type: String,
            required: true,
        },
        info: {
            type: String,
            required: true,
        },
        destination: {
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

setDefaultSettings(outgoingFileSchema);
setErrorHandler(outgoingFileSchema);

const outgoingFileModel = mongoose.model<IOutgoingFile & mongoose.Document>(
    config.mongo.outgoingFilesCollectionName,
    outgoingFileSchema,
);

export default outgoingFileModel;
