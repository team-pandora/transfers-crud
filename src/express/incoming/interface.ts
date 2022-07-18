import * as mongoose from 'mongoose';
import { externalNetwork } from '../interface';

export interface IIncomingFile {
    _id: mongoose.Types.ObjectId;
    name: string;
    from: string;
    to: string[];
    size: number;
    source: externalNetwork;
    ceratedAt: Date;
}

export type INewIncomingFile = Omit<IIncomingFile, '_id' | 'createdAt'>;
