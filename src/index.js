import dotenv from "dotenv";
import { app }from "./app.js";

import connetDB from "./db/db.js";


dotenv.config({
    path: "./env"
});


connetDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`\n Server is running on PORT: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection field !!", err);
});