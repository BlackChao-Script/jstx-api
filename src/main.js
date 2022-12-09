const app = require("./app/index");
const { SERVICE_PORT } = require("./constant/data");

app.listen(SERVICE_PORT, () =>
  console.log(`Server is running at http://localhost:${SERVICE_PORT}`)
);
