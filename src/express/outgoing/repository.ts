import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import { ServerError } from '../error';
import { INewOutgoingFile, IOutgoingFile } from './interface';
import outgoingFileModel from './model';

/**
 * Create an outgoing file.
 * @param file - The file to create.
 * @returns {Promise<IOutgoingFile>} Promise object containing the created outgoing file.
 */
export const createOutgoingFile = (file: INewOutgoingFile): Promise<IOutgoingFile> => {
    return outgoingFileModel.create(file);
};

/**
 * Get an outgoing file.
 * @param fileId - The file id.
 * @returns {Promise<IOutgoingFile>} - Promise containing the outgoing file.
 */
export const getOutgoingFileById = async (fileId: mongoose.Types.ObjectId): Promise<IOutgoingFile> => {
    const result = await outgoingFileModel.findById(fileId).exec();
    if (!result) throw new ServerError(StatusCodes.NOT_FOUND, 'File not found');
    return result;
};

/**
 * Delete an outgoing file.
 * @param fileId - The file id.
 * @returns {Promise<IOutgoingFile>} - Promise object containing the deleted file.
 */
export const deleteOutgoingFile = async (fileId: mongoose.Types.ObjectId): Promise<IOutgoingFile> => {
    const result = await outgoingFileModel.findOneAndDelete({ _id: fileId }).exec();
    if (!result) throw new ServerError(StatusCodes.NOT_FOUND, 'File not found');
    return result;
};
