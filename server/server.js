const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/users");

app.use("/users", userRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
