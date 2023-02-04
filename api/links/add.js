import { getClient } from "../connectDB";
import { checkPassword } from "../auth/adminAuth";

export default async function handler(req, res) {
    if (!checkPassword(req.body.password)) {
        return res.status(401).json({message: "You must be logged in as an admin"});
    }

    const client = await getClient();
    const collection = client.db("GoodrickeLinks").collection("links");

    const { title, description, url, imageUrl } = req.body;
    const doc = { title, description, url, imageUrl };

    await collection.insertOne(doc);
    res.status(200).json(doc);
};