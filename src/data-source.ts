import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "batyr.db.elephantsql.com",
    port: 5432,
    username: "syvouqkc",
    password: "KadcB5A8hcs4Piwjvqgx-ZgYU1qbb6eO",
    database: "syvouqkc",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
