import IncomingFileModel from './model';
import { IIncomingFile } from './interface';
/**
 * Get filtered features.
 * @param {Partial<IIncomingFile>} query - The query to filter the features.
 * @returns {Promise<IIncomingFile[]>} - Promise object containing the filtered features.
 */
export const getIncomingFile = async (query: Partial<IIncomingFile>): Promise<IIncomingFile> => {
    const result = await IncomingFileModel.findOne(query._id);
    if (!result) {
        throw new Error('Incoming file not found');
    }
    return result;
};

/**
 * Create a new feature.
 * @param {INewFeature} feature - The feature to create.
 * @returns {Promise<IFeature>} - Promise object containing the created feature.
 */
export const createIncomingFile = (body: IIncomingFile): Promise<IIncomingFile> => {
    return IncomingFileModel.create(body);
};

export const deleteIncomingFile = (query: Partial<IIncomingFile>): Promise<any> => {
    return IncomingFileModel.findOneAndDelete(query._id).exec();
};
