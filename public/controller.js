import express from "express";
import funtions from "./dataFunction.js";
import register from "./Routes/register.routes.js"


let {
    postChat,
    forRegister
} = register
let {
    dataFunction
} = funtions;
const app = express();

app.get("/", (req, res) => res.sendFile(dataFunction("src", "views", "chat.html")));
app.get("/login", (req, res) => res.sendFile(dataFunction("src", "views", "login.html")));
app.get("/register", (req, res) => res.sendFile(dataFunction("src", "views", "register.html")));

app.post('/register', postChat)
app.post('/login', forRegister)
export default app;