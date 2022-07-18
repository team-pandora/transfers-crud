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

export const getMultipleFilesRequestSchema = Joi.object({
    query: {
        name: Joi.string().optional(),
        from: Joi.string().optional(),
        to: Joi.string().optional,
        size: Joi.number().optional(),
        source: Joi.string()
            .valid(...config.constants.externalNetworks)
            .optional(),
    },
    body: {},
    params: {},
});

export const deleteIncomingFileRequestSchema = Joi.object({
    body: {},
    query: {},
    params: {
        fileId: JoiObjectId.required(),
    },
});
