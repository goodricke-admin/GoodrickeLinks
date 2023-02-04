import { checkPassword } from "../../adminAuth";
import { getClient } from "../../connectDB";
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
    if (!checkPassword(req.body.password)) {
        return res.status(401).json({message: "You must be logged in as an admin"});
    }

    const client = await getClient();
    const collection = client.db("GoodrickeLinks").collection("links");
    const result = await collection.deleteOne({ _id: new ObjectId(req.body.id) });
    if (result.deletedCount == 1) {
        res.status(200).json({message: "Deleted successfully"});
    } else {
        res.status(404).json({message: "Error deleting"});
    }
}