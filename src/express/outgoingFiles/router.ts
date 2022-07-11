import { Router } from 'express';

const featuresRouter: Router = Router();

// featuresRouter.get('/', ValidateRequest(getFeaturesRequestSchema), wrapMiddleware(FeaturesController.getFeatures));
// featuresRouter.post('/', ValidateRequest(createFeatureRequestSchema), wrapMiddleware(FeaturesController.createFeature));

export default featuresRouter;
