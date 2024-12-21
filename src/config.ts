import { config } from "dotenv"
import { cwd } from "process"

const conf = config()

if (conf.error) {
    throw conf.error
}

if (!conf.parsed) {
    throw Error("[environment]: .env file not found.")
}

if (!conf.parsed["SECRET_KEY"]) {
    throw Error("[environment]: 'SECRET_KEY' not set.")
}

let _config
try {
    _config = await import(cwd() + "/config/auth.js")
} catch (e: any) {
    console.log(`[auth] config: config file not found, applying default config.`)
    _config = {
        TOKEN_COOKIE_NAME: "auth_token",
        TOKEN_COOKIE_EXPIRES: 1800000,
        SALT_ROUNDS: 10
    }
}

export const CONFIG = { ..._config, secret_key: conf.parsed["SECRET_KEY"] }
