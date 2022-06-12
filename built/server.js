import express from "express";
import bodyParser from "body-parser";
import { send } from "./webhook.js";
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.post("/", async (req, res) => {
    const id = req.query.id.toString();
    const username = req.query.username;
    if (typeof id == "string" && typeof username == "string") {
        send(id, username);
        res.status(200).end();
    }
    res.status(400).end();
});
// @ts-ignore
app.listen(process.env.PORT || port, () => console.log("Running on port " + port));
