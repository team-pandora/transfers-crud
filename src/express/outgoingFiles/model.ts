import * as mongoose from 'mongoose';
import config from '../../config';
import { setDefaultSettings, setErrorHandler } from '../../utils/mongoose';
import { IOutgoingFile } from './interface';

const outgoingFileSchema = new mongoose.Schema<IOutgoingFile & mongoose.Document>(
    {
        approvers: {
            objectId: { type: 'ObjectId', requierd: true },
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        fileId: { type: 'ObjectId', required: true, ref: config.mongo.outgoingFilesCollectionName },
        from: {
            type: 'ObjectId',
            required: true,
        },
        to: {
            type: 'ObjectId',
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        ceratedAt: { type: Date, required: true },
    },
    { timestamps: true },
);

outgoingFileSchema.index({ name: 1 });

setDefaultSettings(outgoingFileSchema);
setErrorHandler(outgoingFileSchema);

const outgoingFileModel = mongoose.model<IOutgoingFile & mongoose.Document>(
    config.mongo.outgoingFilesCollectionName,
    outgoingFileSchema,
);

export default outgoingFileModel;
