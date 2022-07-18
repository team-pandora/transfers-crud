import * as mongoose from 'mongoose';
import { IIncomingFile, INewIncomingFile } from './interface';
import IncomingFileModel from './model';

/**
 * Create a new feature.
 * @param {INewFeature} feature - The feature to create.
 * @returns {Promise<IFeature>} - Promise object containing the created feature.
 */

/**
 * Create a new incoming file
 * @param {INewIncomingFile} file - the file to create
 * @returns {IIncomingFile} - Promise containing the incoming file
 */
export const createIncomingFile = (file: INewIncomingFile): Promise<IIncomingFile> => {
    return IncomingFileModel.create(file);
};

/**
 * Get incoming file.
 * @param  fileId - id of current file .
 * @returns {Promise<IIncomingFile>} - Promise object containing the file with current id.
 */
export const getIncomingFileById = async (fileId: mongoose.Types.ObjectId): Promise<IIncomingFile> => {
    const result = await IncomingFileModel.findOne({ _id: fileId }).exec();
    if (!result) throw new Error('Incoming file not found');
    return result;
};

/**
 * Get incoming file.
 * @param {Partial<IIncomingFile>} query - The query to filter the files.
 * @returns {Promise<IIncomingFile[]>} - Promise object containing the filtered files.
 */

export const getMultipleFiles = async (query: any): Promise<IIncomingFile[]> => {
    return IncomingFileModel.find(query).exec();
};

/**
 *
 * @param fileId - id of current file
 * @returns {IIncomingFile} - Promise object containing the deleted file
 */

export const deleteIncomingFile = async (fileId: mongoose.Types.ObjectId): Promise<IIncomingFile> => {
    const result = await IncomingFileModel.findOneAndDelete({ _id: fileId }).exec();
    if (!result) throw new Error('Incoming file not found');
    return result;
};
