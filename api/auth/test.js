import { checkPassword } from "../../adminAuth";

export default async function handler(req, res) {
    if (checkPassword(req.body.password)) {
        res.status(200).json({ message: "auth succeded" });
    } else {
        res.status(401).json({ message: "auth failed" });
    }
}