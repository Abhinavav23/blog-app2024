const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/blog", blogRouter);

app.get("/", (req, res) => {
    res.status(200).send("welcome to our blog API")
})
module.exports = app;
