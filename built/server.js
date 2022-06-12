import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.post("/", async (req, res) => {
    console.log(req.body.id);
    res.send("Success");
});
// @ts-ignore
app.listen(process.env.PORT || port, () => console.log("Running on port " + port));
