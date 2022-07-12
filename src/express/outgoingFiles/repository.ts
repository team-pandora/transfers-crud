import { StatusCodes } from 'http-status-codes';
import { ServerError } from '../error';
import { IOutgoingFile } from './interface';
import outgoingFileModel from './model';

/**
 * Create an outgoing file.
 * @param file - The outgoing file to create.
 * @returns {Promise<IOutgoingFile>} - Promise object containing the created outgoing file.
 */
export const createOutgoingFile = (file: IOutgoingFile): Promise<IOutgoingFile> => {
    return outgoingFileModel.create(file);
};

/**
 * Get an outgoing file.
 * @param id - The outgoing file id.
 * @returns {Promise<IOutgoingFile>} - Promise containing the outgoing file.
 */
export const getOutgoingFileById = async (id: string): Promise<IOutgoingFile> => {
    const result = await outgoingFileModel.findById(id).exec();
    if (!result) throw new ServerError(StatusCodes.NOT_FOUND, 'Outgoing file not found');
    return result;
};

/**
 * Delete an outgoing file.
 * @param id - The outgoing file id.
 * @returns {Promise<IOutgoingFile>} - Promise object containing the deleted file.
 */
export const deleteOutgoingFile = async (id: string): Promise<IOutgoingFile> => {
    const result = await outgoingFileModel.findOneAndDelete({ _id: id });
    if (!result) throw new ServerError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to delete outgoing file');
    return result;
};
