const app = require("./app");
const http = require("https");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
);
