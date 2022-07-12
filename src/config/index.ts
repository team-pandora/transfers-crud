import * as env from 'env-var';
import './dotenv';

const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
        useCors: env.get('USE_CORS').default('false').asBool(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asUrlString(),
        outgoingFilesCollectionName: env.get('MONGO_OUTGOING_FILES_COLLECTION_NAME').required().asString(),
        incomingFilesCollectionName: env.get('MONGO_INCOMING_FILES_COLLECTION_NAME').required().asString(),
    },
    incoming: {
        maxFileSize: env.get('INCOMING_MAX_FILE_SIZE').required().asInt(),
    },
    constants: {
        externalNetworks: ['cts', 'tomcal'] as const,
    },
};

export default config;
