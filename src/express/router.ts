import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ServerError } from './error';
import incomingRouter from './incoming/router';
import outgoingRouter from './outgoing/router';

const appRouter: Router = Router();

appRouter.use('/api/outgoing', outgoingRouter);
appRouter.use('/api/incoming', incomingRouter);

appRouter.use('/isAlive', (_req, res) => {
    res.status(StatusCodes.OK).send('alive');
});

appRouter.use('*', (_req, res, next) => {
    if (!res.headersSent) {
        next(new ServerError(StatusCodes.NOT_FOUND, 'Invalid route'));
    }
    next();
});

export default appRouter;
