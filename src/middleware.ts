import { Middleware, types as FHSTypes } from "@fehujs/http-server"

import { CONFIG } from "./config"
import { User } from "./models/user"


type HttpContext = FHSTypes.HttpContext

export class AuthMiddleware extends Middleware {
    public async handle({ req, request, response}: HttpContext) {
        const user = await User.getCurrentUser(request)

        if (!user) {
            response = request.cookieHandler.deleteCookie(response, CONFIG.modules.auth.TOKEN_COOKIE_NAME)
            response = response.redirect("/users/login?loginRequired")
            return { req, request, response }
        }

        return super.handle({ req, request, response })
    }
}
