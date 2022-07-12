import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as outgoingController from './controller';
import * as outogingValidator from './validator.schema';

const outgoingRouter: Router = Router();

outgoingRouter.post(
    '/',
    ValidateRequest(outogingValidator.createOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.createOutgoingFile),
);

outgoingRouter.get(
    '/:id',
    ValidateRequest(outogingValidator.getOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.getOutgoingFile),
);

outgoingRouter.delete(
    '/:id',
    ValidateRequest(outogingValidator.deleteOutgoingFileRequestSchema),
    wrapMiddleware(outgoingController.deleteOutgoingFile),
);

export default outgoingRouter;
