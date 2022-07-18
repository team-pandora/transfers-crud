import * as mongoose from 'mongoose';
import config from '../../config';

type destination = typeof config.constants.destinations[number];

export interface IOutgoingFile {
    _id: mongoose.Types.ObjectId;
    approvers: string[];
    fileName: string;
    from: string;
    to: string[];
    classification: string;
    info: string;
    destination: destination;
    createdAt: Date;
}

export type INewOutgoingFile = Omit<IOutgoingFile, '_id' | 'createdAt'>;

export interface IOutgoingStatus {
    flowName: string;
    steps: {
        fileName: string;
        stepsType: 'in progress' | 'failed' | 'success' | 'pending';
        timestamp: Date;
        description: {
            long: {
                hebrew: string;
                english?: string;
            };
            short: {
                hebrew: string;
                english?: string;
            };
        };
        metadata?: {
            failReason?: string;
        };
    }[];
    statusId: string;
}

export type IOutgoingFileFilters = {
    approvers?: string[];
    fileName?: string;
    from?: string;
    to?: string[];
    classification?: string;
    info?: string;
    destination?: destination;
};
