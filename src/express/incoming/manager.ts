import * as mongoose from 'mongoose';
import { IIncomingFile, INewIncomingFile } from './interface';
import IncomingFileModel from './model';

/**
 * Create a new feature.
 * @param {INewFeature} feature - The feature to create.
 * @returns {Promise<IFeature>} - Promise object containing the created feature.
 */
export const createIncomingFile = (file: INewIncomingFile): Promise<IIncomingFile> => {
    return IncomingFileModel.create(file);
};

/**
 * Get filtered features.
 * @param {Partial<IIncomingFile>} query - The query to filter the features.
 * @returns {Promise<IIncomingFile[]>} - Promise object containing the filtered features.
 */
export const getIncomingFileById = async (fileId: mongoose.Types.ObjectId): Promise<IIncomingFile> => {
    const result = await IncomingFileModel.findOne({ _id: fileId }).exec();
    if (!result) throw new Error('Incoming file not found');
    return result;
};

export const deleteIncomingFile = (fileId: mongoose.Types.ObjectId): Promise<any> => {
    return IncomingFileModel.findOneAndDelete({ _id: fileId }).exec();
};
