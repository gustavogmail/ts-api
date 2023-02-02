"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "batyr.db.elephantsql.com",
    port: 5432,
    username: "syvouqkc",
    password: "KadcB5A8hcs4Piwjvqgx-ZgYU1qbb6eO",
    database: "syvouqkc",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map