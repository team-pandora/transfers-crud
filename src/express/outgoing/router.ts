import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as outgoingController from './controller';
import * as outgoingValidator from './validator.schema';

const outgoingRouter: Router = Router();

outgoingRouter.post(
    '/',
    ValidateRequest(outgoingValidator.createOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.createOutgoingFile),
);

outgoingRouter.get(
    '/:fileId',
    ValidateRequest(outgoingValidator.getOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.getOutgoingFile),
);

outgoingRouter.get(
    '/',
    ValidateRequest(outgoingValidator.getOutgoingFilesRequestSchema),
    wrapMiddleware(outgoingController.getOutgoingFiles),
);

outgoingRouter.delete(
    '/:fileId',
    ValidateRequest(outgoingValidator.deleteOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.deleteOutgoingFile),
);

export default outgoingRouter;
