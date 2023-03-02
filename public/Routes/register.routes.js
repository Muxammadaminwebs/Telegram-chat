import salom from "../dataFunction.js";
import fs from "fs";
import {
  v1 as uuidv1
} from "uuid";

let {
  dataFunction,
  info1,
  info2,
  senData
} = salom;

let chatterlar = fs.readFileSync(dataFunction("db", "users.json"), "utf-8") || "[]";
let parseChatterlar = info2(chatterlar)


let obj = {
  postChat(req, res) {
    let i = parseChatterlar.find((e) => e.username.toLowercase() == req.body.userName.toLowercase());
    console.log(i);


    if (i) {
      res.json(["Error"])
    } else {
      let uuid = uuidv1;
      let obj = {
        id: parseChatterlar.at(-1)?.id + 1 || 1,
        name: req.body?.name,
        userName: req.body?.userName,
        password: req.body?.password,
        uuid: uuid,
      };
      parseChatterlar.push(obj);
      senData(parseChatterlar, "db", "users.json");
      res.jsonp({
          uuid: uuid,
            status: 200,
      })
    }
  },
  forRegister(req, res) {
    let i = parseChatterlar.find((e) => e.userName.toLowerCase() == req.body.userName.toLowerCase() &&
      e.password == req.body.password);
    if (i) {
      console.log(i);
      res.jsonp({
        uuid: is?.uuid,
        status: 200,
        name: i.name
      });
    } else {
      res.json(["Error"])
    }
  }
}
export default obj;
