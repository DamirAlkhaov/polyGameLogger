import express from "express";
import bodyParser from "body-parser";
import { log, send } from "./webhook.js";
import { auth } from "./auth.js";
const port = 3000;
const app = express();

//make this true if you are debugging in a local server.
const debugging = false;

//setup body parser
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 

//setup ejs for future use and urendcoded bs
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

//whenever a user joins the server, use this.
app.post("/", async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const id = req.query.id;
  const username = req.query.username;
  const color = req.query.color;
  const desc = req.query.desc;
  
  const isReqGood = await auth(req.header("PT-Game-ID"), ip)
  if(!isReqGood && !debugging){
    return res.status(400).send("Failure").end();
  }

  const check = await send(id, username, color, desc);
  if (check) {
    return res.status(200).end();
  }
  
  
  return res.status(400).end();
});

//whenever the user messages this should be used.
app.post("/msg", async (req, res) => {1
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const id = req.query.id;
  const username = req.query.username;
  const msg = req.query.msg;

  const isReqGood = await auth(req.header("PT-Game-ID"), ip)
  if(!isReqGood && !debugging){
    return res.status(400).send("Failure").end();
  }
  
  const check = await log(id, username, msg);
  if (check) {
    return res.status(200).send("Success").end();
  }
  
  
  return res.status(400).send("Failure").end();
});
// @ts-ignore
app.listen(process.env.PORT || port, () => console.log("Running on port " + port));