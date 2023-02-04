const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_READWRITE_USERNAME}:${process.env.MONGO_READWRITE_PASSWORD}@goodrickelinkscluster.necxicq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export const getClient = () => {
    return client.connect();
};