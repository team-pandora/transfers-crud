import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { IOutgoingFileFilters } from './interface';
import * as OutgoingManager from './manager';

export const createOutgoingFile = async (req: Request, res: Response) => {
    res.json(await OutgoingManager.createOutgoingFile(req.body));
};

export const getOutgoingFile = async (req: Request<{ fileId: mongoose.Types.ObjectId }>, res: Response) => {
    res.json(await OutgoingManager.getOutgoingFileById(req.params.fileId));
};

export const getOutgoingFiles = async (req: Request<IOutgoingFileFilters>, res: Response) => {
    res.json(await OutgoingManager.getOutgoingFiles(req.query));
};

export const deleteOutgoingFile = async (req: Request<{ fileId: mongoose.Types.ObjectId }>, res: Response) => {
    res.json(await OutgoingManager.deleteOutgoingFile(req.params.fileId));
};
