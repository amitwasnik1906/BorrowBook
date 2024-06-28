const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

connectDatabase();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
