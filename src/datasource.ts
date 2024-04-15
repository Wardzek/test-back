import { DataSource } from "typeorm";
import { Country } from "./entities/country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./back-wild.sqlite",
  entities: [Country],
  synchronize: true,
  logging: true,
});
