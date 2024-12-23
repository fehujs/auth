import { CONFIG } from "./config"
import { AuthMiddleware } from "./middleware"
import { AddAuthTokenMigration } from "./migrations/add_auth_tokens"
import { AddUserMigration } from "./migrations/add_users"
import { AuthToken } from "./models/auth_token"
import { User } from "./models/user"

type AuthConfig = {
    TOKEN_COOKIE_NAME: string
    TOKEN_COOKIE_EXPIRES: number
    SALT?: string
}

export {
    CONFIG,
    AddAuthTokenMigration,
    AddUserMigration,
    AuthConfig,
    AuthMiddleware,
    AuthToken,
    User
}
