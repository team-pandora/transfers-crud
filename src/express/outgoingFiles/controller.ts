import { Request, Response } from 'express';
import * as OutgoingManager from './repository';

export const createOutgoingFile = async (req: Request, res: Response) => {
    res.json(await OutgoingManager.createOutgoingFile(req.body));
};
export const getOutgoingFile = async (req: Request, res: Response) => {
    res.json(await OutgoingManager.getOutgoingFileById(req.params));
};

export const deleteOutgoingFile = async (req: Request, res: Response) => {
    res.json(await OutgoingManager.deleteOutgoingFile(req.params.id));
};
