import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as outgoingController from './controller';
import * as outogingValidator from './validator.schema';

const outgoingRouter: Router = Router();

outgoingRouter.post(
    '/file',
    ValidateRequest(outogingValidator.createOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.createOutgoingFile),
);
outgoingRouter.get(
    '/file/:id',
    ValidateRequest(outogingValidator.getOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.getOutgoingFile),
);
outgoingRouter.delete(
    '/file/:id',
    ValidateRequest(outogingValidator.deleteOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.deleteOutgoingFile),
);

export default outgoingRouter;
