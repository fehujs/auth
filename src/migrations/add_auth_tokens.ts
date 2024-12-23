import { BaseMigration, CreateTable, Table } from "@fehujs/database"

import { getDbProvider } from "../internals"


export class AddAuthTokenMigration extends BaseMigration {
    protected tableName = "auth_tokens"
    protected table: Table = {
        name: "auth_tokens",
        columns: [
            {
                name: 'id',
                type: 'TEXT',
                isNotNull: true,
                isPrimaryKey: true,
                isUnique: true
            },
            {
                name: 'userId',
                type: 'TEXT',
                isNotNull: true,
                isUnique: true
            },
            {
                name: 'token',
                type: 'TEXT',
                isNotNull: true,
            },
            {
                name: 'expires',
                type: 'INTEGER', // timestamp
                isNotNull: true
            }
        ]
    }

    public async up() {
        await (await getDbProvider()).createTable(this.table as CreateTable)
    }

    public async down() {
        await (await getDbProvider()).dropTable(this.table)
    }
}
