import * as Joi from 'joi';
import config from '../../config';
import { JoiObjectId } from '../../utils/joi';

/**
 * POST /api/outgoing/file
 * { approvers: [{ name: michael simkinm, id: '126732918'}], from: '123621782', to: '123621776',
 * classification: 'top secret', info: 'super secret drive file!!', destination: 'TOMCAL' }
 */
export const createOutgoingFileRequestSchema = Joi.object({
    body: {
        approvers: Joi.array().items(JoiObjectId).required(),
        fileName: Joi.string().required(),
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
 * GET /api/outgoing/file/:id
 * { id: '62655a5dd681ae7e5f9eafe0' }
 */
export const getOutgoingFileRequestSchema = Joi.object({
    params: { id: JoiObjectId.required() },
    query: {},
    body: {},
});

/**
 * DELETE /api/outgoing/file/:id
 * { id: '62655a5dd681ae7e5f9eafe0' }
 *
 */
export const deleteOutgoingFileRequestSchema = Joi.object({
    params: { id: JoiObjectId.required() },
    query: {},
    body: {},
});
