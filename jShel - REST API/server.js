const app = require("express")();

const { PORT } = require("./config");

const expressConfig = require("./config/express");
const log = require("./middlewares/log")


expressConfig(app);

app.use(log);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));