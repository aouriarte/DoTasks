import { DataType } from "sequelize-typescript";
import { sequelize } from "../database/database";

export const Task = sequelize.define("task", {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: true,
  },
  description: {
    type: DataType.TEXT,
    allowNull: false,
  },
  date: {
    type: DataType.STRING,
    allowNull: false,
  },
});
