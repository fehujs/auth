import { cwd } from "process"
import { join } from "path"
import { pathToFileURL } from "url"

import { DatabaseProviderInterface } from "@fehujs/database"


export async function getDbProvider(): Promise<DatabaseProviderInterface> {
    const providerIndexPath = pathToFileURL(join(cwd(), "src", "db", "providers", "index.js")).href
    return (await import(providerIndexPath)).provider
}
