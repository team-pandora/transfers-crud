import { StatusCodes } from 'http-status-codes';
import { ServerError } from '../error';
import { IOutgoingFile } from './interface';
import outgoingFileModel from './model';

/**
 * Create a file.
 * @param {Partial<IOutgoingFile>} file - The file to create.
 * @returns {Promise<IOutgoingFile>} - Promise object containing the created file.
 */
export const createOutgoingFile = (file: IOutgoingFile): Promise<IOutgoingFile> => {
    return outgoingFileModel.create(file);
};

/**
 * Get filtered outgoing file.
 * @param {Partial<IOutgoingFile>} params - The param to filter the files.
 * @returns {Promise<IOutgoingFile[]>} - Promise containing the get file.
 */
export const getOutgoingFileById = (params: Partial<IOutgoingFile>): Promise<IOutgoingFile[]> => {
    return outgoingFileModel.find(params).exec();
};

/**
 * Delete a FILE.
 * @param {INewFeature} id - The file id.
 * @returns {Promise<IFeature>} - Promise object containing the deleted file.
 */
export const deleteOutgoingFile = async (id: string): Promise<IOutgoingFile> => {
    const result = await outgoingFileModel.findOneAndDelete({ _id: id });
    if (!result) throw new ServerError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to delete file.');
    return result;
};
