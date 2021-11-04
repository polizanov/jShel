const app = require("express")();

const { PORT } = require("./config");

const expressConfig = require("./config/express");
const log = require("./middlewares/log");
const auth = require("./middlewares/auth");
const router = require("./router");


expressConfig(app);

app.use(log);

app.use(auth);

app.use(router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));