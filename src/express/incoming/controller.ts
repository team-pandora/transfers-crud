import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import * as incomingFileManager from './manager';

export const createIncomingFile = async (req: Request, res: Response) => {
    res.json(await incomingFileManager.createIncomingFile(req.body));
};

export const getIncomingFileById = async (req: Request<{ fileId: mongoose.Types.ObjectId }>, res: Response) => {
    res.json(await incomingFileManager.getIncomingFileById(req.params.fileId));
};

export const deleteIncomingFile = async (req: Request<{ fileId: mongoose.Types.ObjectId }>, res: Response) => {
    res.json(await incomingFileManager.deleteIncomingFile(req.params.fileId));
};
