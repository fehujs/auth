import { AuthMiddleware } from "./middleware"
import { AuthToken } from "./models/auth_token"
import { User } from "./models/user"

type AuthConfig = {
    TOKEN_COOKIE_NAME: string
    TOKEN_COOKIE_EXPIRES: number
    SALT_ROUNDS: number
}

export {
    AuthConfig,
    AuthMiddleware,
    AuthToken,
    User
}
