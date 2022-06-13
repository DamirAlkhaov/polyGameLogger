import express from "express";
import bodyParser from "body-parser";
import { log, send } from "./webhook.js";
const port = 3000;
const app = express();
//setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//setup ejs for future use and urendcoded bs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
//whenever a user joins the server, use this.
app.post("/", async (req, res) => {
    const id = req.query.id;
    const username = req.query.username;
    const color = req.query.color;
    const desc = req.query.desc;
    const check = await send(id, username, color, desc);
    if (check) {
        return res.status(200);
    }
    return res.status(400);
});
//whenever the user messages this should be used.
app.post("/msg", async (req, res) => {
    const id = req.query.id;
    const username = req.query.username;
    const msg = req.query.msg;
    let check = await log(id, username, msg);
    if (check) {
        return res.status(200);
    }
    return res.status(400);
});
// @ts-ignore
app.listen(process.env.PORT || port, () => console.log("Running on port " + port));
