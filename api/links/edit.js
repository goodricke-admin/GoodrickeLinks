import { checkPassword } from "../auth/adminAuth";
import { getClient } from "../connectDB";
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
    if (!checkPassword(req.body.password)) {
        return res.status(401).json({message: "You must be logged in as an admin"});
    }

    const client = await getClient();
    const collection = client.db("GoodrickeLinks").collection("links");

    const { title, description, url, imageUrl, priority } = req.body;

    const result = await collection.replaceOne({ "_id": new ObjectId(req.body.id) }, { title, description, url, imageUrl, priority });

    console.log(result);

    if (result.modifiedCount == 1) {
        res.status(200).json({});
    } else {
        res.status(404).json({});
    }
}