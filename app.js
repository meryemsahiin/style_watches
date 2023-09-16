import express from "express";
import dotenv from "dotenv"
import conn from "./db.js"
import methodOverride from "method-override"
import cookieParser from "cookie-parser";
import { checkUser } from "./middleware/authMiddleware.js";

import pageRoute from "./routes/pageRoute.js"
import userRoute from "./routes/userRoute.js"

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
app.use(cookieParser());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET'],
}))

// ROUTERS
// app.use("*", checkUser);
app.use("/", pageRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
})