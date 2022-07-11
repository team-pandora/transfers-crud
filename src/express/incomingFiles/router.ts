import { Router } from 'express';

const incomingFilesRouter: Router = Router();

// incomingFilesRouter.get('/', ValidateRequest(getFeaturesRequestSchema), wrapMiddleware(FeaturesController.getFeatures));
// incomingFilesRouter.post(
//     '/',
//     ValidateRequest(createFeatureRequestSchema),
//     wrapMiddleware(FeaturesController.createFeature),
// );

export default incomingFilesRouter;
