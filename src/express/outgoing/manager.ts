import { IOutgoingFile } from './interface';
import outgoingFilesModel from './model';

/**
 * Get filtered features.
 * @param {Partial<IFeature>} query - The query to filter the features.
 * @returns {Promise<IFeature[]>} - Promise object containing the filtered features.
 */
export const getFeatures = (query: Partial<IOutgoingFile>): Promise<IOutgoingFile[]> => {
    return outgoingFilesModel.find(query).exec();
};

/**
 * Create a new feature.
 * @param {INewFeature} feature - The feature to create.
 * @returns {Promise<IFeature>} - Promise object containing the created feature.
 */
export const createFeature = (feature: IOutgoingFile): Promise<IOutgoingFile> => {
    return outgoingFilesModel.create(feature);
};
