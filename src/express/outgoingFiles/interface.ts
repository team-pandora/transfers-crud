import * as mongoose from 'mongoose';

export interface IOutgoingFile {
    _id: mongoose.Types.ObjectId;
    approvers: mongoose.Types.ObjectId[];
    name: string;
    fileId: mongoose.Types.ObjectId;
    from: mongoose.Types.ObjectId;
    to: mongoose.Types.ObjectId;
    classification: string;
    info: string;
    destination: string;
    ceratedAt: Date;
}

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
