import * as Joi from 'joi';
import config from '../../config';
import { JoiObjectId } from '../../utils/joi';

export const createIncomingFileRequestSchema = Joi.object({
    body: {
        name: Joi.string().required(),
        from: Joi.string().required(),
        to: Joi.array().items(Joi.string()).required(),
        size: Joi.number().required(),
        source: Joi.string()
            .valid(...config.constants.externalNetworks)
            .required(),
    },
    query: {},
    params: {},
});

export const getIncomingFileByIdRequestSchema = Joi.object({
    query: {},
    body: {},
    params: {
        fileId: JoiObjectId.required(),
    },
});

export const deleteIncomingFileRequestSchema = Joi.object({
    body: {},
    query: {},
    params: {
        fileId: JoiObjectId.required(),
    },
});
