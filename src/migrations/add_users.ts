import { BaseMigration, CreateTable, Table } from "@fehujs/database"

import { getDbProvider } from "../internals"


export class AddUserMigration extends BaseMigration {
    protected tableName = "users"
    protected table: Table = {
        name: "users",
        columns: [
            {
                name: 'id',
                type: 'TEXT',
                isNotNull: true,
                isPrimaryKey: true,
                isUnique: true
            },
            {
                name: 'name',
                type: 'TEXT',
                isNotNull: true
            },
            {
                name: 'email',
                type: 'TEXT',
                isNotNull: true,
                isUnique: true
            },
            {
                name: 'password',
                type: 'TEXT',
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
