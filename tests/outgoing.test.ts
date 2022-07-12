/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import config from '../src/config';
import Server from '../src/express/server';

jest.setTimeout(30000);

const removeOutgoingFilesCollection = async () =>
    mongoose.connection.collections[config.mongo.outgoingFilesCollectionName].deleteMany({});

describe('Outgoing tests:', () => {
    let app: Express.Application;

    beforeAll(async () => {
        await mongoose.connect(config.mongo.uri);
        await removeOutgoingFilesCollection();
        app = Server.createExpressApp();
    });

    afterEach(async () => {
        await removeOutgoingFilesCollection();
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('/api/outgoing', () => {
        const outgoingFile = {
            approvers: ['626fcb74f9c77439f394b354'],
            fileName: 'file',
            from: '626fcb74f9c77439f394b5da',
            to: ['626fcb74f9c77439f394b34a'],
            classification: 'top-secret',
            info: 'some secret stuff in here!!',
            destination: 'cts',
        };

        describe('POST', () => {
            it('should create an outgoing file', async () => {
                const { body: createdFile } = await request(app).post('/api/outgoing').send(outgoingFile).expect(200);

                expect(mongoose.Types.ObjectId.isValid(createdFile._id)).toBe(true);
                expect(createdFile).toMatchObject(outgoingFile);
                expect(new Date(createdFile.createdAt).getTime()).toBeCloseTo(Date.now(), -2);
                expect(new Date(createdFile.updatedAt).getTime()).toBeCloseTo(Date.now(), -2);
            });

            it('should fail validation for unknown fields', () => {
                return request(app).post('/api/outgoing').send({ fileSize: 340 }).expect(400);
            });

            it('should fail because of missing fields ', async () => {
                return request(app).post('/api/outgoing').send({}).expect(400);
            });

            it('should fail with duplicate key error ', async () => {
                await request(app).post('/api/outgoing').send(outgoingFile).expect(200);
                await request(app).post('/api/outgoing').send(outgoingFile).expect(400);
            });
        });

        describe('GET', () => {
            it('should return a file', async () => {
                const { body: createdFile } = await request(app).post('/api/outgoing').send(outgoingFile).expect(200);

                await request(app).get(`/api/outgoing/${createdFile._id}`).expect(200);
            });
        });
    });
});
