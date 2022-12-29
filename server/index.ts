import app from "./src/app";
import { sequelize } from "./src/database/database";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ force: true, logging: false })
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto: ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
