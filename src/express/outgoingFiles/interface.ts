// import * as mongoose from 'mongoose';

export interface IOutgoingFile {
    approvers: [{ id: string }];
    fileName: string;
    fileId: string;
    from: string;
    to: string;
    classification: string;
    info: string;
    destination: string;
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
