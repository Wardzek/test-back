"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const country_1 = require("./entities/country");
exports.dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./back-wild.sqlite",
    entities: [country_1.Country],
    synchronize: true,
    logging: true,
});
