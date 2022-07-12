import * as mongoose from 'mongoose';

export interface IIncomingFile {
    _id: mongoose.Types.ObjectId;
    name: string;
    fileId: mongoose.Types.ObjectId;
    from: mongoose.Types.ObjectId;
    to: mongoose.Types.ObjectId;
    ceratedAt: Date;
    destination: string;
    source: string;
}
