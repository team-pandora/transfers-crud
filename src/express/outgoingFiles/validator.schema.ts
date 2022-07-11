import * as Joi from 'joi';
import { JoiMongoObjectId } from '../../utils/joi';

/**
 * POST /api/outgoing/
 * { data: 'someData123' }
 */
export const createOutgoingFileRequestSchema = Joi.object({
    body: {
        // approvers: Joi.array().items(Joi.string()).required(),
        // fileName: Joi.string().alphanum().required(),
    },
    query: {},
    params: {},
});

/**
 * GET /api/features?data=someData123
 * { data: 'someData123' }
 */
export const getOutgoingFileRequestSchema = Joi.object({
    query: {
        _id: JoiMongoObjectId.optional(),
        data: Joi.string().alphanum().optional(),
    },
    body: {},
    params: {},
});

/**
 * DELETE /api/features?data=someData123
 * { data: 'someData123' }
 *
 */
export const deleteOutgoingFileRequestSchema = Joi.object({
    query: {
        _id: JoiMongoObjectId.optional(),
        data: Joi.string().alphanum().optional(),
    },
    body: {},
    params: {},
});
