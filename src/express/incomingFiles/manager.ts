import IncomingFileModel from './model';
import { IIncomingFile } from './interface';
/**
 * Get filtered features.
 * @param {Partial<IIncomingFile>} query - The query to filter the features.
 * @returns {Promise<IIncomingFile[]>} - Promise object containing the filtered features.
 */
export const getIncomingFile = (query: Partial<IIncomingFile>): Promise<any> => {
    // eslint-disable-next-line no-underscore-dangle
    return IncomingFileModel.findOne(query._id).exec();
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
    // eslint-disable-next-line no-underscore-dangle
    return IncomingFileModel.findOneAndDelete(query._id).exec();
};
