import * as Joi from 'joi';
import config from '../../config';
import { JoiObjectId } from '../../utils/joi';

/**
 * POST /api/outgoing
 * { approvers: [{ name: michael simkin, id: '126732918'}], fileName: SECRET ,from: '123621782', to: '123621776',
 * classification: 'top secret', info: 'super secret drive file!!', destination: 'TOMCAL' }
 */
export const createOutgoingFileRequestSchema = Joi.object({
    body: {
        approvers: Joi.array().items(Joi.string()).required(),
        fileName: Joi.string().required(),
        fileId: Joi.string(),
        from: JoiObjectId.required(),
        to: JoiObjectId.required(),
        classification: Joi.string().required(),
        info: Joi.string().required(),
        destination: Joi.string()
            .valid(...config.constants.destination)
            .required(),
    },
    query: {},
    params: {},
});

/**
 * GET /api/outgoing/:id
 * { id: '62655a5dd681ae7e5f9eafe0' }
 */
export const getOutgoingFileRequestSchema = Joi.object({
    params: { id: JoiObjectId.required() },
    query: {},
    body: {},
});

/**
 * DELETE /api/outgoing/:id
 * { id: '62655a5dd681ae7e5f9eafe0' }
 *
 */
export const deleteOutgoingFileRequestSchema = Joi.object({
    params: { id: JoiObjectId.required() },
    query: {},
    body: {},
});
