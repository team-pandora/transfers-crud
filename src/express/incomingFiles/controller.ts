import { Request, Response } from 'express';
import * as incomingFileManager from './manager';

export const getIncomingFile = async (req: Request, res: Response) => {
    res.json(await incomingFileManager.getIncomingFile(req.query));
};

export const createIncomingFile = async (req: Request, res: Response) => {
    res.json(await incomingFileManager.createIncomingFile(req.body));
};

export const deleteIncomingFile = async (req: Request, res: Response) => {
    res.json(await incomingFileManager.deleteIncomingFile(req.query));
};
