import * as Joi from 'joi';
import { JoiMongoObjectId } from '../../utils/joi';

export const getIncomingFileRequestSchema = Joi.object({
    query: {},
    body: {},
    params: {
        id: JoiMongoObjectId.required(),
    },
});

export const createIncomingFileRequestSchema = Joi.object({
    body: {
        name: Joi.string().alphanum().required(),
        from: JoiMongoObjectId.required(),
        to: JoiMongoObjectId.required(),
        destination: Joi.string().required(),
        source: Joi.string().required(),
        fileId: JoiMongoObjectId.required(),
    },
    query: {},
    params: {},
});

export const deleteIncomingFileRequestSchema = Joi.object({
    body: {},
    query: {},
    params: {
        id: JoiMongoObjectId.required(),
    },
});
