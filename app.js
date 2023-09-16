import express from "express";
import dotenv from "dotenv"
import conn from "./db.js"

import pageRoute from "./routes/pageRoute.js"

dotenv.config();
conn();

const app = express();
const port = 3000;

// EJS TEMPLETE ENGINE
app.set("view engine", 'ejs');

// STATIC FILES MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ROUTERS
app.use("/", pageRoute);

app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
})