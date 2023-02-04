import { getClient } from "../connectDB";

export default async function handler(req, res) {
    const client = await getClient();

    const collection = client.db("GoodrickeLinks").collection("links");
    const cursor = collection.find();

    const links = await cursor.toArray();
    res.status(200).json(links);
};