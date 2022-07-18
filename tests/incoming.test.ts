import * as mongoose from 'mongoose';
import * as request from 'supertest';
import config from '../src/config/index';
import Server from '../src/express/server';

jest.setTimeout(60000);

const removeIncomingCollection = async () =>
    mongoose.connection.collections[config.mongo.incomingFilesCollectionName].deleteMany({});

describe('incoming files tests', () => {
    let app: Express.Application;

    beforeAll(async () => {
        await mongoose.connect(config.mongo.uri);
        await removeIncomingCollection();
        app = Server.createExpressApp();
    });

    afterEach(async () => {
        await removeIncomingCollection();
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
    const incomingFile = {
        name: 'file',
        from: '627ce9fc32b9985210f0e79b',
        to: ['627ce9fc32b9985210f0e79a'],
        size: 45,
        source: 'cts',
    };

    describe('Create incoming file', () => {
        it('should create incoming file', async () => {
            await request(app)
                .post('/api/incoming')
                .send({ ...incomingFile })
                .expect(200);
        });
        it('should fail to create a file', async () => {
            await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                    source: 'ccc',
                });
        });
    });

    describe('get incoming file', () => {
        it('should create a file and then get it', async () => {
            const { body: createdFile } = await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                })
                .expect(200);
            await request(app).get(`/api/incoming/${createdFile._id}`);
            expect(200);
        });
        it('should fail to get the file', async () => {
            await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                })
                .expect(200);
            await request(app).get(`/api/incoming/swef`);
            expect(400);
        });
    });
    describe('get multiple files', () => {
        it('should get all file and filter them', async () => {
            const { body: createdFile } = await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                })
                .expect(200);
            await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                    name: 'file2',
                });
            expect(200);
            const { body: resultWithQuerry } = await request(app)
                .get('/api/incoming')
                .query({ name: createdFile.name })
                .expect(200);
            expect(resultWithQuerry.length).toBe(1);

            const { body: resultWithOutQuerry } = await request(app).get('/api/incoming').expect(200);
            expect(resultWithOutQuerry.length).toBe(2);
        });
    });
    describe('delete incoming file', () => {
        it('should delete incoming file', async () => {
            const { body: createdFile } = await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                })
                .expect(200);
            await request(app).delete(`/api/incoming/${createdFile._id}`);
            expect(200);
        });
        it('should fail to delete', async () => {
            await request(app)
                .post('/api/incoming')
                .send({
                    ...incomingFile,
                })
                .expect(200);
            await request(app).delete(`/api/incoming/swef`);
            expect(400);
        });
    });
});
