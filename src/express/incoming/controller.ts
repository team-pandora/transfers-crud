import { Request, Response } from 'express';
import * as incomingFileManager from './manager';

export const getIncomingFile = async (req: Request, res: Response) => {
    res.json(await incomingFileManager.getFeatures(req.query));
};

export const createFeature = async (req: Request, res: Response) => {
    res.json(await incomingFileManager.createFeature(req.body));
};
