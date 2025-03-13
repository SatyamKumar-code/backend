import dotenv from "dotenv";

import connetDB from "./db/db.js";


dotenv.config({
    path: "./env"
});


connetDB();