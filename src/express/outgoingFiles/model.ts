import * as mongoose from 'mongoose';
import config from '../../config';
import { setErrorHandler } from '../../utils/mongoose';
import { IOutgoingFile } from './interface';

const outgoingFileSchema = new mongoose.Schema<IOutgoingFile & mongoose.Document>(
    {
        approvers: [
            {
                type: String,
                required: true,
            },
        ],
        fileName: {
            type: String,
            required: true,
            unique: true,
        },
        fileId: { type: String, required: true, ref: config.mongo.outgoingFilesCollectionName },
        from: {
            type: String,
            required: true,
        },
        to: {
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
            createdAt: 'createdAt',
            updatedAt: false,
        },
        versionKey: false,
    },
);

setErrorHandler(outgoingFileSchema);

const outgoingFileModel = mongoose.model<IOutgoingFile & mongoose.Document>(
    config.mongo.outgoingFilesCollectionName,
    outgoingFileSchema,
);

export default outgoingFileModel;
