import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as incomingFileController from './controller';
import * as incomingValidator from './validator.schema';

const incomingRouter: Router = Router();

incomingRouter.post(
    '/',
    ValidateRequest(incomingValidator.createIncomingFileRequestSchema),
    wrapMiddleware(incomingFileController.createIncomingFile),
);

incomingRouter.get(
    '/:fileId',
    ValidateRequest(incomingValidator.getIncomingFileByIdRequestSchema),
    wrapMiddleware(incomingFileController.getIncomingFileById),
);

incomingRouter.get(
    '/',
    ValidateRequest(incomingValidator.getMultipleFilesRequestSchema),
    wrapMiddleware(incomingFileController.getMultipleFiles),
);

incomingRouter.delete(
    '/:fileId',
    ValidateRequest(incomingValidator.deleteIncomingFileRequestSchema),
    wrapMiddleware(incomingFileController.deleteIncomingFile),
);

export default incomingRouter;
