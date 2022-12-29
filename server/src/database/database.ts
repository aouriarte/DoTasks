import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  {
    dialect: "postgres",
    native: false,
    ...(process.env.NODE_ENV === "production" && {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
  }
);

sequelize.addModels([__dirname + "/models"]);

export const sequelizeConnection = async () => {
  try {
    sequelize.authenticate().then(() => {
      console.log("Autenticación con postgres exitosa.");
    });
  } catch (error) {
    console.error("No se puede conectar con la base de datos:", error);
  }
};
