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
    if (typeof req.query.id == "string" && typeof req.query.username == "string") {
        send(req.query.id, req.query.username);
        res.send("Success");
    }
    res.send("Failure");
});
// @ts-ignore
app.listen(process.env.PORT || port, () => console.log("Running on port " + port));
