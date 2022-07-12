import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as incomingFileController from './controller';
import * as incomingValidator from './validator.schema';

const incomingFilesRouter: Router = Router();

incomingFilesRouter.get(
    '/:id',
    ValidateRequest(incomingValidator.getIncomingFileRequestSchema),
    wrapMiddleware(incomingFileController.getIncomingFile),
);

incomingFilesRouter.post(
    '/',
    ValidateRequest(incomingValidator.createIncomingFileRequestSchema),
    wrapMiddleware(incomingFileController.createIncomingFile),
);

incomingFilesRouter.delete(
    '/:id',
    ValidateRequest(incomingValidator.deleteIncomingFileRequestSchema),
    wrapMiddleware(incomingFileController.deleteIncomingFile),
);

export default incomingFilesRouter;
