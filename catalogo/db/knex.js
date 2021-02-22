
const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection:{
        filename: "dev.sqlite3"
    },
    useNullAsDefault: true,

    development: {
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        }
    }
});

module.exports = connectedKnex;
