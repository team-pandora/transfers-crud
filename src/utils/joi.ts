import { Request } from 'express';
import * as Joi from 'joi';
import mongoose from 'mongoose';
import wrapMiddleware from './express';

export const JoiObjectId = Joi.string()
    .hex()
    .length(24)
    .custom((value) => new mongoose.Types.ObjectId(value));

const defaultValidationOptions: Joi.ValidationOptions = {
    abortEarly: false,
    allowUnknown: false,
    convert: true,
};

const normalizeRequest = (req: any, value: any) => {
    req.originalBody = req.body;
    req.body = value.body;

    req.originalQuery = req.query;
    req.query = value.query;

    req.originalParams = req.params;
    req.params = value.params;
};

const ValidateRequest = (schema: Joi.ObjectSchema<any>, options: Joi.ValidationOptions = defaultValidationOptions) => {
    const validator = async (req: Request) => {
        const { error, value } = schema.unknown().validate(req, options);
        if (error) {
            throw error;
        }

        if (options.convert) {
            normalizeRequest(req, value);
        }
    };

    return wrapMiddleware(validator);
};

export default ValidateRequest;
