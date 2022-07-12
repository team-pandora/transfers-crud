import * as Joi from 'joi';
import config from '../../config';
import { JoiObjectId } from '../../utils/joi';

export const createOutgoingFileRequestSchema = Joi.object({
    body: {
        approvers: Joi.array().items(Joi.string()).min(1).required(),
        fileName: Joi.string().required(),
        from: Joi.string().required(),
        to: Joi.array().items(Joi.string()).min(1).required(),
        classification: Joi.string().required(),
        info: Joi.string().required(),
        destination: Joi.string()
            .valid(...config.constants.destinations)
            .required(),
    },
    query: {},
    params: {},
});

export const getOutgoingFileRequestSchema = Joi.object({
    params: {
        fileId: JoiObjectId.required(),
    },
    query: {},
    body: {},
});

export const deleteOutgoingFileRequestSchema = Joi.object({
    params: {
        fileId: JoiObjectId.required(),
    },
    query: {},
    body: {},
});
