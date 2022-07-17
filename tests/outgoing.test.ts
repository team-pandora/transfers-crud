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

    const outgoingFile = {
        approvers: ['626fcb74f9c77439f394b354'],
        fileName: 'file',
        from: '626fcb74f9c77439f394b5da',
        to: ['626fcb74f9c77439f394b34a', '626fcb74f9c77439f394b345'],
        classification: 'top-secret',
        info: 'some secret stuff in here!!',
        destination: 'cts',
    };

    describe('Create file', () => {
        it('should create a file', async () => {
            await request(app)
                .post('/api/outgoing')
                .send({ ...outgoingFile })
                .expect(200);
        });

        it('should fail to create a file', async () => {
            await request(app)
                .post('/api/outgoing')
                .send({ ...outgoingFile, fileName: '' })
                .expect(400);
        });
    });

    describe('Get files', () => {
        it('should get a file', async () => {
            const { body: createdFile } = await request(app)
                .post('/api/outgoing')
                .send({ ...outgoingFile })
                .expect(200);

            const createdOutgoingFile = await request(app).get(`/api/outgoing/${createdFile._id}`).expect(200);
            expect(createdOutgoingFile);
        });

        it('should get files', async () => {
            await request(app)
                .post('/api/outgoing')
                .send({ ...outgoingFile })
                .expect(200);

            await request(app)
                .post('/api/outgoing')
                .send({ ...outgoingFile, fileName: 'file2' })
                .expect(200);

            const { body: result } = await request(app)
                .get('/api/outgoing/files')
                .query({ from: outgoingFile.from })
                .expect(200);
            expect(result.length).toBe(2);
        });
    });

    describe('Delete file', () => {
        it('should delete a file', async () => {
            const { body: createdFile } = await request(app)
                .post('/api/outgoing')
                .send({ ...outgoingFile })
                .expect(200);

            await request(app).delete(`/api/outgoing/${createdFile._id}`).expect(200);
            await request(app).get(`/api/outgoing/${createdFile._id}`).expect(404);
        });
    });
});
