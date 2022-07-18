import * as Joi from 'joi';
import { JoiObjectId } from '../../utils/joi';

/**
 * GET /api/features?data=someData123
 */
export const getFeaturesRequestSchema = Joi.object({
    query: {
        _id: JoiObjectId.optional(),
        data: Joi.string().alphanum().optional(),
    },
    body: {},
    params: {},
});

/**
 * POST /api/features/
 * { data: 'someData123' }
 */
export const createFeatureRequestSchema = Joi.object({
    body: {
        data: Joi.string().alphanum().required(),
    },
    query: {},
    params: {},
});
